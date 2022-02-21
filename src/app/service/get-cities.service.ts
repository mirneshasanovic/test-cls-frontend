import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { City } from '../edit-city';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {

  constructor(private http: HttpClient) {
    this.getCities();
  }

  getCities() {
    let cities = this.http.get("http://127.0.0.1:8000/api/getCities");
    return cities;
  }

  editCity(id, data) {
    console.log("Service editCity");
    console.log(id);
    let editCity = this.http.put("http://127.0.0.1:8000/api/editCity/" + id, data, {responseType: 'text'});
    return editCity;
  }

  showCity(id: string) {
    console.log("Service showCity");
    let showCity = this.http.get("http://127.0.0.1:8000/api/showCityCity/" + id);
    return showCity;
  }

  deleteCity(id) {
    console.log("Service deleteCity");
    let deleteCity = this.http.delete("http://127.0.0.1:8000/api/deleteCity/" + id);
    return deleteCity;
  }
}
