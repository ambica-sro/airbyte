#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

from typing import Any, List, Mapping, Optional, Union

import requests
from airbyte_cdk.sources.declarative.decoders.decoder import Decoder
from airbyte_cdk.sources.declarative.decoders.json_decoder import JsonDecoder
from airbyte_cdk.sources.declarative.interpolation.interpolated_string import InterpolatedString
from airbyte_cdk.sources.declarative.requesters.paginators.pagination_strategy import PaginationStrategy
from airbyte_cdk.sources.declarative.types import Config


class CursorPaginationStrategy(PaginationStrategy):
    """
    Pagination strategy that evaluates an interpolated string to define the next page token
    """

    def __init__(self, cursor_value: Union[InterpolatedString, str], config: Config, decoder: Decoder = None):
        """
        :param cursor_value: template string evaluating to the cursor value
        :param config: connection config
        :param decoder: decoder to decode the response
        """
        if isinstance(cursor_value, str):
            cursor_value = InterpolatedString(cursor_value)
        self._cursor_value = cursor_value
        self._config = config
        self._decoder = decoder or JsonDecoder()

    def next_page_token(self, response: requests.Response, last_records: List[Mapping[str, Any]]) -> Optional[Any]:
        token = self._cursor_value.eval(config=self._config, last_records=last_records, decoded_response=self._decoder.decode(response))
        return token if token else None