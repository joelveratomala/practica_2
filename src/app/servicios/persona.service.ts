import { Injectable } from '@angular/core';
// @ts-ignore
import {enviromen} from '../environment/enviromen';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
public URL_SERVER=enviromen.baseURL;
public URL_API=enviromen.baseURL+enviromen.apiResource;
  constructor(private http: HttpClient) { }
  listarPersonas():Observable<any>{
    return this.http.get(this.URL_API+'/listaPersona')
  }
}
