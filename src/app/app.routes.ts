import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'admin', component:AdminloginComponent}
];
