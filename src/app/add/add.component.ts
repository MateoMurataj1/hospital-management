import { Component, OnInit } from '@angular/core';
import { AddempService } from '../addemp.service';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  year = new Date().getFullYear();
  month=new Date().getMonth()+1;


  op:boolean=false;

  onChangeEvent(event:any){
    const m: Moment=event.value;
    if(moment(this.year+'-'+this.month+'-01')){
      this.op=true;
    }
    else{
      this.op=false;
    }
  }


  k:any=new Date();

  category$: any;

  constructor(categoryService: CategoryService, private addempService: AddempService, private router: Router) {
    this.category$=categoryService.getCategories();
  }

  save(addemp: any){
    this.addempService.create(addemp);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.k=moment(this.year+'-'+this.month+'-01')
  }
}
