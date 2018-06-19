import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component'; 
import { ApproveghComponent } from './components/admin/approvegh/approvegh.component';
import { DeleteghComponent } from './components/admin/deletegh/deletegh.component';
import { DeletememberComponent } from './components/admin/deletemember/deletemember.component';

import { MemberService } from './services/member/member.service';
import { UserService } from './services/user/user.service';
import { GroupService } from './services/group/group.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ApproveghComponent,
    DeleteghComponent,
    DeletememberComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MemberService, UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
