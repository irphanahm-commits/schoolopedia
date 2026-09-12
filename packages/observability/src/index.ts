export interface LogContext {
  request_id?: string;
  correlation_id?: string;
  actor_id?: string;
  actor_role?: string;
  path?: string;
  method?: string;
  [key: string]: unknown;
}

export const logger = {
  info: (message: string, context?: LogContext): void => {
    console.log(
      JSON.stringify({
        level: 'INFO',
        timestamp: new Date().toISOString(),
        message,
        ...context,
      })
    );
  },
  warn: (message: string, context?: LogContext): void => {
    console.warn(
      JSON.stringify({
        level: 'WARN',
        timestamp: new Date().toISOString(),
        message,
        ...context,
      })
    );
  },
  error: (message: string, error?: unknown, context?: LogContext): void => {
    console.error(
      JSON.stringify({
        level: 'ERROR',
        timestamp: new Date().toISOString(),
        message,
        error: error instanceof Error ? { message: error.message, stack: error.stack } : error,
        ...context,
      })
    );
  },
};

export interface AuditEventPayload {
  actor_id: string;
  actor_role: string;
  action: string;
  entity_type: string;
  entity_id: string;
  previous_state?: Record<string, unknown>;
  new_state?: Record<string, unknown>;
  context_metadata?: Record<string, unknown>;
}

export function createAuditLogEntry(payload: AuditEventPayload) {
  return {
    id: `audit_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    ...payload,
    created_at: new Date().toISOString(),
  };
}
