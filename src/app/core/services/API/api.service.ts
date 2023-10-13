import { Injectable } from '@angular/core';
import { CustomResponse } from '@core/models/external-reponse';
import { Observable } from 'rxjs';
import { HttpWrapperService } from '../HttpWrapper/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpWrapperService) { }

  /**
   * Get Data from API request
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url - Endpoint of API. Example: '/login'
   * @param requestType - BLOB | BLOB_FILE | '' (default)
   * @returns - Observable of Custom Response Data type
   */
  public getData(apiType: string, url: string, requestType = ''): Observable<CustomResponse> {
    switch (requestType) {
      case 'BLOB':
        return this.http.getBlobRequest(apiType, url);
        break;
      case 'BLOB_FILE':
        return this.http.getDownloadFileRequest(apiType, url);
        break;
      default:
        return this.http.getRequest(apiType, url);
        break;
    }
  }

  /**
   * Post Data to API request
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url - Endpoint of API. Example: '/login'
   * @param body - Request body. Example: { email : 'abc@mail.com' }
   * @param requestType - BLOB | BLOB_FILE | '' (default)
   * @returns - Observable of Custom Response Data type
   */
  public postData(apiType: string, url: string, body: object, requestType = ''): Observable<CustomResponse> {
    switch (requestType) {
      case 'BLOB':
        return this.http.postBlobRequest(apiType, url, body);
        break;
      case 'BLOB_FILE':
        return this.http.postFileUpload(apiType, url, body);
        break;
      default:
        return this.http.postRequest(apiType, url, body);
        break;
    }
  }

  /**
   * Put Data with API request
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url - Endpoint of API. Example: '/login'
   * @param body - Request body. Example: { email : 'abc@mail.com' }
   * @param requestType - BLOB | BLOB_FILE | '' (default)
   * @returns - Observable of Custom Response Data type
   */
  public putData(apiType: string, url: string, body: object, requestType = ''): Observable<CustomResponse> {
    switch (requestType) {
      case 'BLOB':
        return this.http.putBlobRequest(apiType, url, body);
        break;
      default:
        return this.http.putRequest(apiType, url, body);
        break;
    }
  }

  /**
   * Patch Data with API request
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url - Endpoint of API. Example: '/login'
   * @param body - Request body. Example: { email : 'abc@mail.com' }
   * @returns - Observable of Custom Response Data type
   */
  public patchData(apiType: string, url: string, body: object): Observable<CustomResponse> {
    return this.http.patchRequest(apiType, url, body);
  }

  /**
   * Delete Data with API request
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url - Endpoint of API. Example: '/login'
   * @returns - Observable of Custom Response Data type
   */
  public deleteData(apiType: string, url: string): Observable<CustomResponse> {
    return this.http.deleteRequest(apiType, url);
  }

}
