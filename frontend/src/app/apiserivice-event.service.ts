import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiseriviceEventService {

  constructor(private _http:HttpClient) { }
  //connect frontend to backend
  apiUrl='http://localhost:3000/event';

  //get all data
  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data:any):Observable<any>{
    console.log(data,"data==>");
    return this._http.post(`${this.apiUrl}`,data);

  }

  //delete data
  deleteData(id_event:any):Observable<any>{
    let ids=id_event;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //update data
  updateData(data:any,id_event:any):Observable<any>{
    let ids=id_event;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }

  //get single data
  getSingleData(id_event:any):Observable<any>{
    let ids=id_event;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }
}

