import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiadminloginService } from '../../shared/services/apiadminlogin/apiadminlogin.service';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private admin:ApiadminloginService){}
  async login(formdata:any){
    console.log(formdata.value)
    const res:any=await this.admin.adminloign(formdata.value);
    if(res.message=="Successful login."){
      alert("Successfullly login")
    }
    else{
      alert("Username or password incorrect")
    }
  }
}
