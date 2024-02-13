import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiadminloginService } from '../../shared/services/apiadminlogin/apiadminlogin.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private admin:ApiadminloginService,private router: Router){}
  async login(formdata:any){
    console.log(formdata.value)
    const res:any=await this.admin.adminloign(formdata.value);
    console.log(res)
    if(res.message=="Successful login."){
      localStorage.setItem('mayakey2024',res?.jwt)
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Username or password incorrect")
    }
  }
}
