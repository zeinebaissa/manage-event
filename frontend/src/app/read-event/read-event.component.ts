import { Component,OnInit } from '@angular/core';
import {ApiseriviceEventService} from '../apiserivice-event.service'
@Component({
  selector: 'app-read-event',
  templateUrl: './read-event.component.html',
  styleUrls: ['./read-event.component.css']
})
export class ReadEventComponent implements OnInit {

  constructor(private service:ApiseriviceEventService){}

  readData:any;
  successmsg:any;


  ngOnInit():void{
    this.getAllData();
  }


  //getdeleteID
  deleteId(id_event:any){
    console.log(id_event,"deleteId==>");
    this.service.deleteData(id_event).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg=res.message;
      this.getAllData();
    })
  }

  //get all data
  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData=res.data;

    })
  }

}

