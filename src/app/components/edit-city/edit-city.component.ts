import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetCitiesService } from 'src/app/service/get-cities.service';
import { City } from 'src/app/edit-city';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent {
  constructor(private httpService: GetCitiesService, private route: ActivatedRoute, private router: Router) {}
  routeListener: any;
  submitted = false;
  id: any;
  cityName: any;
  city = new City(1, '');

  onsubmit() {
    this.router.navigate(['/get-cities']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cityName = params['city'];
    });
    this.city = new City(this.id, this.cityName);
  }

  editCity(id){
    console.log(this.city);
    this.httpService.editCity(id, this.city).subscribe(res => {
      this.router.navigate(['/get-cities']);
    });
  }
  

}
