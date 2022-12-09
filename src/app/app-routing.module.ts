import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [	
	{
		path:'home',	
		loadChildren: ()=> import('./website/website.module').then(m => m.WebsiteModule)
	},
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "**",  redirectTo: "home"},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 