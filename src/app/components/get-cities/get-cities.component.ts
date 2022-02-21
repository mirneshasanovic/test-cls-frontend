import { Component, OnInit } from '@angular/core';
import { GetCitiesService } from 'src/app/service/get-cities.service';

@Component({
  selector: 'app-get-cities',
  templateUrl: './get-cities.component.html',
  styleUrls: ['./get-cities.component.css']
})
export class GetCitiesComponent implements OnInit {
  cities: any;
  constructor(private httpService: GetCitiesService) {}

  ngOnInit() {
    this.getCitiesFromService();
  }

  getCitiesFromService() {
    let observable = this.httpService.getCities();
    observable.subscribe((data) => {
      this.cities = data;
      return data;
    });
  } 

  deleteCity(id) {
    console.log('Delete City id ' + id);
    let observable = this.httpService.deleteCity(id);
    observable.subscribe(res => {
        console.log('City Deleted');
        this.httpService.getCities();
    }, err => {
        console.log('Error occured');
    });
  }

  removeCityFromList(city, id){
    console.log('Remove city from list: ' + id);
    this.cities.splice(id, 1);
  }

}
