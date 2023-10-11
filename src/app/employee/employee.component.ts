import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddempService } from '../addemp.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:any={};
  id:any;

  date!:Date;
  dita:any;

  constructor(private route:ActivatedRoute, private addempService: AddempService, private router: Router) {
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id) this.addempService.get(this.id).subscribe((e: any)=>this.employee=e);
  }

  delete(){
    this.addempService.delete(this.id);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.date=new Date();
    this.dita=this.date.getDate();
  }

}
