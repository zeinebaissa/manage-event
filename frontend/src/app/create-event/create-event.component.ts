import { Component,OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import{ApiseriviceEventService} from '../apiserivice-event.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  constructor(private service:ApiseriviceEventService,private router:ActivatedRoute) { }


  errormsg:any;
  successmsg:any;
  getparmid_event:any;

  ngOnInit(): void {
    this.getparmid_event=this.router.snapshot.paramMap.get('id_event');
    this.service.getSingleData(this.getparmid_event).subscribe((res) =>{
      console.log(res,"res==>");
      this.eventForm.patchValue({
        subject:res.data[0].subject,
        start_date:res.data[0].start_date,
        end_date:res.data[0].end_date,
        room:res.data[0].room
      })
    })
  }



  eventForm= new FormGroup({
    'subject': new FormControl('',Validators.required),
    'start_date': new FormControl('',Validators.required),
    'end_date': new FormControl('',Validators.required),
    'room': new FormControl('',Validators.required)
  })

  eventUpdate(){
    if(this.eventForm.valid){
      console.log(this.eventForm.value);
      this.service.updateData(this.eventForm.value,this.getparmid_event).subscribe((res) =>{
        console.log(res,"resupdated==>");
        this.eventForm.reset();
        this.successmsg=res.message;
      });
    }


  }

  //create new event
  eventSubmit(){
    if(this.eventForm.valid){
      console.log(this.eventForm.value);
      this.service.createData(this.eventForm.value).subscribe((res) =>{
        console.log(res,"res==>");
        this.eventForm.reset();
        this.successmsg=res.message;
      });
    }
    else{
      this.errormsg="all field is required!";
    }
  }
}


