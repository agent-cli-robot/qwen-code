/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export const SERVICE_NAME = 'agent-cli';

export const EVENT_USER_PROMPT = 'agent-cli.user_prompt';
export const EVENT_TOOL_CALL = 'agent-cli.tool_call';
export const EVENT_API_REQUEST = 'agent-cli.api_request';
export const EVENT_API_ERROR = 'agent-cli.api_error';
export const EVENT_API_RESPONSE = 'agent-cli.api_response';
export const EVENT_CLI_CONFIG = 'agent-cli.config';
export const EVENT_FLASH_FALLBACK = 'agent-cli.flash_fallback';
export const EVENT_NEXT_SPEAKER_CHECK = 'agent-cli.next_speaker_check';
export const EVENT_SLASH_COMMAND = 'agent-cli.slash_command';
export const EVENT_IDE_CONNECTION = 'agent-cli.ide_connection';
export const EVENT_CHAT_COMPRESSION = 'agent-cli.chat_compression';
export const EVENT_INVALID_CHUNK = 'agent-cli.chat.invalid_chunk';
export const EVENT_CONTENT_RETRY = 'agent-cli.chat.content_retry';
export const EVENT_CONTENT_RETRY_FAILURE =
  'agent-cli.chat.content_retry_failure';
export const EVENT_CONVERSATION_FINISHED = 'agent-cli.conversation_finished';
export const EVENT_MALFORMED_JSON_RESPONSE =
  'agent-cli.malformed_json_response';
export const EVENT_SUBAGENT_EXECUTION = 'agent-cli.subagent_execution';

export const METRIC_TOOL_CALL_COUNT = 'agent-cli.tool.call.count';
export const METRIC_TOOL_CALL_LATENCY = 'agent-cli.tool.call.latency';
export const METRIC_API_REQUEST_COUNT = 'agent-cli.api.request.count';
export const METRIC_API_REQUEST_LATENCY = 'agent-cli.api.request.latency';
export const METRIC_TOKEN_USAGE = 'agent-cli.token.usage';
export const METRIC_SESSION_COUNT = 'agent-cli.session.count';
export const METRIC_FILE_OPERATION_COUNT = 'agent-cli.file.operation.count';
export const METRIC_INVALID_CHUNK_COUNT = 'agent-cli.chat.invalid_chunk.count';
export const METRIC_CONTENT_RETRY_COUNT = 'agent-cli.chat.content_retry.count';
export const METRIC_CONTENT_RETRY_FAILURE_COUNT =
  'agent-cli.chat.content_retry_failure.count';
export const METRIC_SUBAGENT_EXECUTION_COUNT =
  'agent-cli.subagent.execution.count';
