import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { ApproveghComponent } from './components/admin/approvegh/approvegh.component';
import { DeleteghComponent } from './components/admin/deletegh/deletegh.component';
import { DeletememberComponent } from './components/admin/deletemember/deletemember.component'; 

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: 'approvegh',
				component: ApproveghComponent
			},
			{
				path: 'deletegh',
				component: DeleteghComponent
			},
			{
				path: 'deletemember',
				component: DeletememberComponent
			}			
		]
	},
	{
		path: 'user',
		component: UserComponent
	}
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
