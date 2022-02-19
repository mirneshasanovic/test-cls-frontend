import { Component, OnInit } from '@angular/core';
import { CrudForm } from '../../crud-form';
import { NgForm }   from '@angular/forms';
import { CrudFormService } from 'src/app/service/crud-form.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent {
  constructor (private dataService: CrudFormService){}
  client = new CrudForm(123, 'tr', '', '', '', '');
  statuses = ['Active', 'Inactive', 'Unknown'];
  submitted = false;
 

  addClient() { 
    this.submitted = true;
    this.dataService.addClient(this.client).subscribe(res => {
      console.log(res);
    });
  
  }

  newCrud() {
    this.client = new CrudForm(42, '', '', '', '123', 'Active');
  }

}
