import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomErrorMessage, CustomResponse } from '@core/models/external-reponse';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpResponseHandler } from './http-response-handler/http-response-handler';

@Injectable({
  providedIn: 'root',
})
export class HttpWrapperService {

  constructor(public httpClient: HttpClient) { }

  /**
   * Set Headers will help to generate headers based on request type and multipart value.
   * @param requestType -> This parameter will identify request type and will help to create related request headers.
   */

  private setHeaders(requestType: string): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Accept', '*/*');
    if (requestType === 'GET_BLOB') {
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('responseType', 'blob' as 'json');
    } else if (requestType === 'GET_BLOB_FILE') {
      headers = headers.append('Content-Type', 'plain/txt');
      headers = headers.append('Content-Disposition', 'attachment');
      // Changes for new login request structure
    } else {
      headers = headers.append('Content-Type', 'application/json');
    }

    return headers;
  }

  /**
   * @param headers - HttpHeaders
   * @param requiredResponseType - 'json' | 'text' | '' (default)
   * @returns - object of options
   */
  private getOptions(headers: HttpHeaders, requiredResponseType = ''): {} {
    return {
      headers,
      observe: 'response',
      params: null,
      reportProgress: null,
      responseType: requiredResponseType,
      withCredentials: null
    };
  }

  /**
   * HttpResponse Handler to convert HttpResponse into CustomApp Response
   * @param httpResponse - HttpResponse<object>
   * @returns - Object of Common Response object
   */
  private handleHttpResponse(
    httpResponse: HttpResponse<object> |
      HttpErrorResponse): CustomResponse {
    const customResponse = new CustomResponse();
    const httpResponseHandler = new HttpResponseHandler();
    console.log(typeof(httpResponse));
    customResponse.statusCode = httpResponse.status ? httpResponse.status : 0;
    if (httpResponse instanceof HttpResponse && (httpResponse.status >= 100 && httpResponse.status < 400)) {
      customResponse.data = (httpResponse?.body) ? httpResponse.body : { message : 'Data not received' };
    } else if (httpResponse instanceof HttpErrorResponse && (httpResponse.status >= 400 && httpResponse.status < 600)) {
      customResponse.data = (httpResponse?.message) ? { message: httpResponse.message } : { message: 'Data not received' };
    } else {
      return httpResponseHandler.generateCustomResponse(httpResponse.status);
    }
    return customResponse;
  }

  /**
   * Convert HttpResponse Observable in Custom Handled piped response
   * @param obs - Observable object
   * @returns - Piped observable after error handling
   */
  private pipeResponse(obs: Observable<HttpResponse<object>>): Observable<CustomResponse> {
    return obs.pipe(
      map((res: HttpResponse<object>) => {
        return this.handleHttpResponse(res);
      }),
      catchError((error: HttpErrorResponse) => {
        // return Promise.reject(this.handleHttpResponse(error));
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        // console.log(errorMsg);
        let customResponse = new CustomResponse();
        customResponse = this.handleHttpResponse(error);
        return throwError(customResponse);
      })
    );
  }

  /**
   * GET Method
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public getRequest(apiType: string, url: string): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.get<HttpResponse<object>>(`${apiType}_${url}`, options);
    return this.pipeResponse(obs);
  }

  /**
   * GET Method (Blob Data)
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public getBlobRequest(apiType: string, url: string): Observable<CustomResponse> {
    const headers = this.setHeaders('GET_BLOB');
    const options = this.getOptions(headers);
    const obs = this.httpClient.get<HttpResponse<object>>(`${apiType}_${url}`, options);
    return this.pipeResponse(obs);
  }

  /**
   * GET Method (File Download)
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public getDownloadFileRequest(apiType: string, url: string): Observable<CustomResponse> {
    const headers = this.setHeaders('GET_BLOB_FILE');
    const options = this.getOptions(headers, 'text');
    const obs = this.httpClient.get<HttpResponse<object>>(`${apiType}_${url}`, options);
    return this.pipeResponse(obs);
  }

  /**
   * PUT Method
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public putRequest(apiType: string, url: string, body: object): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.put<HttpResponse<object>>(`${apiType}_${url}`, body, options);
    return this.pipeResponse(obs);
  }

  /**
   * PUT Method (Blob Data)
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> request object
   */

  public putBlobRequest(apiType: string, url: string, body: object): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.put<HttpResponse<object>>(`${apiType}_${url}`, body, options);
    return this.pipeResponse(obs);
  }

  /**
   * POST Method
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> request object
   */

  public postRequest(apiType: string, url: string, body: object): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.post<HttpResponse<object>>(`${apiType}_${url}`, body, options);
    return this.pipeResponse(obs);
  }

  /**
   * POST Method (Blob Data)
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public postBlobRequest(apiType: string, url: string, body: object): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.post<HttpResponse<object>>(`${apiType}_${url}`, body, options);
    return this.pipeResponse(obs);
  }

  /**
   * POST Method (File Upload)
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public postFileUpload(apiType: string, url: string, body: object): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.post<HttpResponse<object>>(`${apiType}_${url}`, body, options);
    return this.pipeResponse(obs);
  }

  /**
   * PATCH Method
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public patchRequest(apiType: string, url: string, body: object): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.patch<HttpResponse<object>>(`${apiType}_${url}`, body, options);
    return this.pipeResponse(obs);
  }

  /**
   * DELETE Method
   * @param apiType - Key of API domain from environment/config file.
   * Example: Use 'sampleApi' from following object { 'sampleApi': https://www.reqres.in }
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public deleteRequest(apiType: string, url: string): Observable<CustomResponse> {
    const headers = this.setHeaders('');
    const options = this.getOptions(headers);
    const obs = this.httpClient.delete<HttpResponse<object>>(`${apiType}_${url}`, options);
    return this.pipeResponse(obs);
  }

}
