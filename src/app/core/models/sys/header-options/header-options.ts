import { HttpHeaders, HttpParams } from '@angular/common/http';

interface CustomHeader {
    [header: string]: string | string[];
}

interface CustomParameter {
    [param: string]: string | string[];
}

export class HeaderOptions {
    headers?: HttpHeaders | CustomHeader;
    observe?: string;
    params?: HttpParams | CustomParameter;
    reportProgress?: boolean;
    responseType?: string;
    withCredentials?: boolean;
}
