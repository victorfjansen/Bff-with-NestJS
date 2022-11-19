export abstract class BaseService {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  protected getApiUrl(endpoint?): string {
    return endpoint ? `${this.baseUrl}/${endpoint}` : this.baseUrl;
  }
}
