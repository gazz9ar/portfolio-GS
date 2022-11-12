import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  { 
    path: "", 
    component:WebsiteComponent,
    children: [
			{				
				path: "",
				component: HomeComponent
			},
			// {				
			// 	path: "projects",
			// 	component:ShopComponent,				
			// },
	  ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
