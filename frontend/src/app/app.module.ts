import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CreateComponent} from './create/create.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule} from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';
import {FormsModule,ReactiveFormsModule}from'@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { ReadEventComponent } from './read-event/read-event.component';
import { ApiseriviceEventService } from './apiserivice-event.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { EventComponent } from './event/event.component';



const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'create-event',component:CreateEventComponent},
  {path:'create-event/:id_event',component:CreateEventComponent},
  {path:'read-event',component:ReadEventComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'member',component:MemberComponent},
  {path:'event',component:EventComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    CreateEventComponent,
    ReadEventComponent,
    HomepageComponent,
    LoginComponent,
    MemberComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiserviceService,ApiseriviceEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
