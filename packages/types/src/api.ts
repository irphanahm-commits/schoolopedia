export interface ApiMeta {
  timestamp?: string;
  version?: string;
  [key: string]: unknown;
}

export interface ApiListMeta extends ApiMeta {
  page: number;
  page_size: number;
  total?: number;
  has_next: boolean;
}

export interface ApiResponse<T> {
  data: T;
  meta?: ApiMeta;
}

export interface ApiListResponse<T> {
  data: T[];
  meta: ApiListMeta;
}

export interface ApiErrorDetail {
  code: string;
  message: string;
  request_id: string;
  details?: unknown;
}

export interface ApiErrorResponse {
  error: ApiErrorDetail;
}
