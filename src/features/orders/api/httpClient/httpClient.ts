import type { ApiHttpClient } from "../api.types"

export class HttpClient implements ApiHttpClient {
  static make(): ApiHttpClient {
    return new HttpClient()
  }
  request(request: Request): Promise<Response> {
    return fetch(request)
  }
}
