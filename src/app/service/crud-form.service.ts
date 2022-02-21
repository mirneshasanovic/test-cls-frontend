import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudForm } from '../crud-form';


@Injectable({
  providedIn: 'root'
})
export class CrudFormService {

  constructor(private httpClient: HttpClient) { }

  addClient(data: CrudForm){
    console.log(data)
    return this.httpClient.post('http://127.0.0.1:8000/api/addClient', data, {responseType: 'text'});
  }

}
