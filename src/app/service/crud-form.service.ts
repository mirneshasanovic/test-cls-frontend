import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudFormService {

  constructor(private httpClient: HttpClient) { }

  addClient(data){
    return this.httpClient.get('https://127.0.0.1:8000/api/addClient');
  }

}
