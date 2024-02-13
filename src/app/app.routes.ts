import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AuthguardService } from './shared/services/authguard/authguard.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GalleryComponent } from './component/gallery/gallery.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'admin', component:AdminloginComponent},
    {path:'dashboard',canActivate:[AuthguardService],component:DashboardComponent},
    {path:'gallery',component:GalleryComponent}
];
