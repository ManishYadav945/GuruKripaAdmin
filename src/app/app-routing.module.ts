import { SlicePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './Log-out/logout/logout.component';
import { RegisterationComponent } from './registeration/registeration.component';
// import { AuthGuard } from './jwtservice/auth.guard';


const routes: Routes = [
  {
    path:"registertion", component:RegisterationComponent
  } ,
  {
    path:"dashboard",component:DashboardComponent
  }, 
  {
    path:"logout",component:LogoutComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
