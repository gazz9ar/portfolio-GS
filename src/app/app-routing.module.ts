import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [	
	{
		path:'inicio',	
		loadChildren: ()=> import('./website/website.module').then(m => m.WebsiteModule)
	},
	{ path: "", redirectTo: "inicio", pathMatch: "full" },
	{ path: "**",  redirectTo: "inicio"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
