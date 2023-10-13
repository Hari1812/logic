import { CustomResponse } from '@core/models/external-reponse';

// Response Code References : https://www.restapitutorial.com/httpstatuscodes.html
export class HttpResponseHandler {

    private customResponse: CustomResponse = new CustomResponse();

    constructor() { }

    public generateCustomResponse(res: number | string): CustomResponse {
        this.customResponse.statusCode = Number(res);
        switch (Number(res)) {
            case 100:
                this.customResponse.data = { message: 'Continue the request' };
                break;
            case 101:
                this.customResponse.data = { message: 'Switching Protocal' };
                break;
            case 102:
                this.customResponse.data = { message: 'Processing the request' };
                break;
            case 103:
                this.customResponse.data = { message: 'Early Hints' };
                break;
            case 200:
                this.customResponse.data = { message: 'The request has succeeded' };
                break;
            case 201:
                this.customResponse.data = { message: 'Created' };
                break;
            case 202:
                this.customResponse.data = { message: 'Accepted' };
                break;
            case 203:
                this.customResponse.data = { message: 'Non-Authoritative Information' };
                break;
            case 204:
                this.customResponse.data = { message: 'No Content' };
                break;
            case 205:
                this.customResponse.data = { message: 'Reset Content' };
                break;
            case 206:
                this.customResponse.data = { message: 'Partial Content' };
                break;
            case 207:
                this.customResponse.data = { message: 'Multi-Status' };
                break;
            case 208:
                this.customResponse.data = { message: 'Already Reported' };
                break;
            case 226:
                this.customResponse.data = { message: 'IM Used' };
                break;
            case 300:
                this.customResponse.data = { message: 'Multiple Choice' };
                break;
            case 301:
                this.customResponse.data = { message: 'Moved Permanently' };
                break;
            case 302:
                this.customResponse.data = { message: 'Found' };
                break;
            case 303:
                this.customResponse.data = { message: 'See Other' };
                break;
            case 304:
                this.customResponse.data = { message: 'Not Modified' };
                break;
            case 305:
                this.customResponse.data = { message: 'Use Proxy' };
                break;
            case 306:
                this.customResponse.data = { message: 'Unused' };
                break;
            case 307:
                this.customResponse.data = { message: 'Temporary Redirect' };
                break;
            case 308:
                this.customResponse.data = { message: 'Permanent Redirect' };
                break;
            case 400:
                this.customResponse.data = { message: 'Invalid Request' };
                break;
            case 401:
                this.customResponse.data = { message: 'Unauthorized' };
                break;
            case 402:
                this.customResponse.data = { message: 'Payment Required' };
                break;
            case 403:
                this.customResponse.data = { message: 'Forbidden' };
                break;
            case 404:
                this.customResponse.data = { message: 'Not Found' };
                break;
            case 405:
                this.customResponse.data = { message: 'Method Not Allowed' };
                break;
            case 406:
                this.customResponse.data = { message: 'Not Acceptable' };
                break;
            case 407:
                this.customResponse.data = { message: 'Proxy Authentication Required' };
                break;
            case 408:
                this.customResponse.data = { message: 'Request Timeout' };
                break;
            case 409:
                this.customResponse.data = { message: 'Conflicts with the current state of the server' };
                break;
            case 410:
                this.customResponse.data = { message: 'The requested content has been permanently deleted from server' };
                break;
            case 411:
                this.customResponse.data = { message: 'The Content-Length header field is not defined' };
                break;
            case 412:
                this.customResponse.data = { message: 'Preconditions in headers does not meet the server' };
                break;
            case 413:
                this.customResponse.data = { message: 'Payload Too Large' };
                break;
            case 414:
                this.customResponse.data = { message: 'URI Too Long' };
                break;
            case 415:
                this.customResponse.data = { message: 'Unsupported Media Type' };
                break;
            case 416:
                this.customResponse.data = { message: 'Range Not Satisfiable' };
                break;
            case 417:
                this.customResponse.data = { message: `The Expect request header field can't be met by the server` };
                break;
            case 418:
                this.customResponse.data = { message: `I'm a teapot` };
                break;
            case 420:
                this.customResponse.data = { message: 'Request Error' };
                break;
            case 421:
                this.customResponse.data = { message: 'Misdirected Request' };
                break;
            case 422:
                this.customResponse.data = { message: 'Unprocessable Entity' };
                break;
            case 423:
                this.customResponse.data = { message: 'The resource that is being accessed is locked' };
                break;
            case 424:
                this.customResponse.data = { message: 'The request failed due to failure of a previous request' };
                break;
            case 425:
                this.customResponse.data = { message: 'Too Early' };
                break;
            case 426:
                this.customResponse.data = { message: 'Upgrade Required' };
                break;
            case 428:
                this.customResponse.data = { message: 'Precondition Required' };
                break;
            case 429:
                this.customResponse.data = { message: 'Too MCommonResponse Requests' };
                break;
            case 431:
                this.customResponse.data = { message: 'Request Header Fields Too Large' };
                break;
            case 444:
                this.customResponse.data = { message: 'Request Error' };
                break;
            case 449:
                this.customResponse.data = { message: 'Request Error' };
                break;
            case 450:
                this.customResponse.data = { message: 'Request Error' };
                break;
            case 451:
                this.customResponse.data = { message: 'Unavailable For Legal Reasons' };
                break;
            case 499:
                this.customResponse.data = { message: 'Request Error' };
                break;
            case 500:
                this.customResponse.data = { message: 'Something went wrong !' };
                break;
            case 501:
                this.customResponse.data = { message: 'Not Implemented' };
                break;
            case 502:
                this.customResponse.data = { message: 'Bad Gateway' };
                break;
            case 503:
                this.customResponse.data = { message: 'Service Unavailable' };
                break;
            case 504:
                this.customResponse.data = { message: 'Gateway Timeout' };
                break;
            case 505:
                this.customResponse.data = { message: 'HTTP Version Not Supported' };
                break;
            case 506:
                this.customResponse.data = { message: 'Internal server configuration error' };
                break;
            case 507:
                this.customResponse.data = { message: 'Insufficient Storage' };
                break;
            case 508:
                this.customResponse.data = { message: 'The server detected an infinite loop while processing the request' };
                break;
            case 509:
                this.customResponse.data = { message: 'Something went wrong !' };
                break;
            case 510:
                this.customResponse.data = { message: 'Extensions to the request are required' };
                break;
            case 511:
                this.customResponse.data = { message: 'Network Authentication Required' };
                break;
            case 598:
                this.customResponse.data = { message: 'Something went wrong !' };
                break;
            case 599:
                this.customResponse.data = { message: 'Something went wrong !' };
                break;
        }
        return this.customResponse;
    }

}
