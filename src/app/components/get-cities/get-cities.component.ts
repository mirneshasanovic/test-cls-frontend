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
      console.log(data);
      return data;
    });
  }

}
