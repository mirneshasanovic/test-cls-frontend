import { Component } from '@angular/core';
import { CrudForm } from '../../crud-form';
import { CrudFormService } from 'src/app/service/crud-form.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent {
  constructor (private dataService: CrudFormService){}
  client = new CrudForm(1, '', '', '', '', '', '', '');
  statuses = ['Active', 'Inactive', 'Unknown'];
  submitted = false;
 

  addClient() { 
    this.submitted = true;
    console.log(this.client);
    this.dataService.addClient(this.client).subscribe(res => {
    });
  }

  newCrud() {
    this.client = new CrudForm(42, '', '', '', '', '123', '','Active');
  }

}
