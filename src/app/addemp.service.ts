import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AddempService {

  constructor(private db: AngularFireDatabase) {}

  create(addemp: any){
    return this.db.list('/addemp').push(addemp);
  }

  getAll(){
    return this.db.list('/addemp').snapshotChanges();
  }

  get(empId:any){
    return this.db.object('/addemp/'+empId).snapshotChanges();
  }

  delete(empId: any){
    return this.db.object('/addemp/'+empId).remove();
  }
}