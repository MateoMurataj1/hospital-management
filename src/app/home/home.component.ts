import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { AddempService } from '../addemp.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  addemp$: any;

  k:any

  year = new Date().getFullYear();
  month=new Date().getMonth()+1;

  op:boolean=false;

  constructor(private addempService: AddempService) { 
    this.addemp$=this.addempService.getAll();
  }

  onChangeEvent(event:any){
    const m: Moment=event.value;
    if(moment(this.year+'-'+this.month+'-01').isSame(m)){
      this.op=true;
      this.k=m;
    }
    else{
      this.op=false;
    }
  }

  ngOnInit(): void {
  }
}

