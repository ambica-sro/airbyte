/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.io.airbyte.integration_tests.sources;

import static org.junit.Assert.assertEquals;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.common.collect.ImmutableMap;
import io.airbyte.commons.json.Jsons;
import io.airbyte.commons.resources.MoreResources;
import io.airbyte.commons.string.Strings;
import io.airbyte.db.factory.DataSourceFactory;
import io.airbyte.db.jdbc.DefaultJdbcDatabase;
import io.airbyte.db.jdbc.JdbcDatabase;
import io.airbyte.db.jdbc.JdbcUtils;
import io.airbyte.integrations.base.Source;
import io.airbyte.integrations.base.ssh.SshHelpers;
import io.airbyte.integrations.source.clickhouse.ClickHouseSource;
import io.airbyte.integrations.source.clickhouse.ClickHouseStrictEncryptSource;
import io.airbyte.integrations.source.jdbc.AbstractJdbcSource;
import io.airbyte.integrations.source.jdbc.test.JdbcSourceAcceptanceTest;
import io.airbyte.protocol.models.ConnectorSpecification;
import java.sql.JDBCType;
import java.util.List;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.GenericContainer;

public class ClickHouseStrictEncryptJdbcSourceAcceptanceTest extends JdbcSourceAcceptanceTest {

  private static GenericContainer container;
  private static JdbcDatabase db;
  private JsonNode config;
  private String dbName;

  @Override
  public boolean supportsSchemas() {
    return false;
  }

  @Override
  public JsonNode getConfig() {
    return Jsons.clone(config);
  }

  @Override
  public String getDriverClass() {
    return ClickHouseSource.DRIVER_CLASS;
  }

  @Override
  public String createTableQuery(final String tableName,
                                 final String columnClause,
                                 final String primaryKeyClause) {
    // ClickHouse requires Engine to be mentioned as part of create table query.
    // Refer : https://clickhouse.tech/docs/en/engines/table-engines/ for more information
    return String.format("CREATE TABLE %s(%s) %s",
        dbName + "." + tableName, columnClause, primaryKeyClause.equals("") ? "Engine = TinyLog"
            : "ENGINE = MergeTree() ORDER BY " + primaryKeyClause + " PRIMARY KEY "
                + primaryKeyClause);
  }

  @BeforeAll
  static void init() {
    container = new GenericContainer("etsybaev/clickhouse-with-ssl:dev").withExposedPorts(8443);
    container.start();
  }

  @BeforeEach
  public void setup() throws Exception {
    final JsonNode configWithoutDbName = Jsons.jsonNode(ImmutableMap.builder()
        .put(JdbcUtils.HOST_KEY, container.getHost())
        .put(JdbcUtils.PORT_KEY, container.getFirstMappedPort())
        .put(JdbcUtils.USERNAME_KEY, "default")
        .put(JdbcUtils.PASSWORD_KEY, "")
        .build());

    db = new DefaultJdbcDatabase(
        DataSourceFactory.create(
            configWithoutDbName.get(JdbcUtils.USERNAME_KEY).asText(),
            configWithoutDbName.get(JdbcUtils.PASSWORD_KEY).asText(),
            ClickHouseSource.DRIVER_CLASS,
            String.format("jdbc:clickhouse://%s:%s?ssl=true&sslmode=none",
                configWithoutDbName.get(JdbcUtils.HOST_KEY).asText(),
                configWithoutDbName.get(JdbcUtils.PORT_KEY).asText())));

    dbName = Strings.addRandomSuffix("db", "_", 10).toLowerCase();

    db.execute(ctx -> ctx.createStatement().execute(String.format("CREATE DATABASE %s;", dbName)));
    config = Jsons.clone(configWithoutDbName);
    ((ObjectNode) config).put(JdbcUtils.DATABASE_KEY, dbName);

    super.setup();
  }

  @AfterEach
  public void tearDownMySql() throws Exception {
    db.execute(ctx -> ctx.createStatement().execute(String.format("DROP DATABASE %s;", dbName)));
    super.tearDown();
  }

  @AfterAll
  public static void cleanUp() throws Exception {
    container.close();
  }

  @Override
  public String primaryKeyClause(final List<String> columns) {
    if (columns.isEmpty()) {
      return "";
    }

    final StringBuilder clause = new StringBuilder();
    clause.append("(");
    for (int i = 0; i < columns.size(); i++) {
      clause.append(columns.get(i));
      if (i != (columns.size() - 1)) {
        clause.append(",");
      }
    }
    clause.append(")");
    return clause.toString();
  }

  @Override
  public AbstractJdbcSource<JDBCType> getJdbcSource() {
    return new ClickHouseSource();
  }

  @Override
  public Source getSource() {
    return new ClickHouseStrictEncryptSource();
  }

  @Test
  void testSpec() throws Exception {
    final ConnectorSpecification actual = source.spec();
    final ConnectorSpecification expected =
        SshHelpers.injectSshIntoSpec(Jsons.deserialize(MoreResources.readResource("expected_spec.json"),
            ConnectorSpecification.class));
    assertEquals(expected, actual);
  }

}
