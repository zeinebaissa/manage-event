import { Component,OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import{ApiserviceService} from '../apiservice.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }


  errormsg:any;
  successmsg:any;
  getparmid:any;

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'),'getid');
    this.getparmid=this.router.snapshot.paramMap.get('id');
    this.service.getSingleData(this.getparmid).subscribe((res) =>{
      console.log(res,"res==>");
      this.userForm.patchValue({
        fullname:res.data[0].fullname,
        email:res.data[0].email,
        mobile:res.data[0].mobile
      })
    })
  }



  userForm= new FormGroup({
    'fullname': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'mobile': new FormControl('',Validators.required)
  })

  userUpdate(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.updateData(this.userForm.value,this.getparmid).subscribe((res) =>{
        console.log(res,"resupdated==>");
        this.userForm.reset();
        this.successmsg=res.message;
      });
    }


  }

  //create new user
  userSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.createData(this.userForm.value).subscribe((res) =>{
        console.log(res,"res==>");
        this.userForm.reset();
        this.successmsg=res.message;
      });
    }
    else{
      this.errormsg="all field is required!";
    }
  }
}
