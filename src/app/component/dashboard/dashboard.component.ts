import { Component } from '@angular/core';
import { TokenService } from '../../shared/services/Token/token.service';
import { ApigalleryService } from '../../shared/services/apigallery/apigallery.service';
import { FormsModule } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  gallerydata:any=[]
  file:any;
  constructor(private token:TokenService,private apigallery:ApigalleryService,private toast:HotToastService){}
  ngOnInit(){
    this.getallgallery()
  }
 async getallgallery(){
    this.gallerydata= await this.apigallery.getallgallery()
  }
  openModal() {
    (document as any).getElementById('authentication-modal').classList.remove('hidden');
  }

  closeModal() {
    (document as any).getElementById('authentication-modal').classList.add('hidden');
  }
  logout(){
    this.token.logout()
  }
  async uploadgallery(data:any,file:any){
    const res=await this.apigallery.postgallery({...data.value,Tattoopic:file})
    this.gallerydata.push(res)
    this.closeModal()
  }
  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }
  async deletegallery(id:any){
   
    let text = "Are you sure you want to delete?";
    if (confirm(text) == true) {
      await this.apigallery.deletegallery(id)
      this.getallgallery()
      this.toast.success('Successfully deleted');
    } else {
      text = "You canceled!";
    }
  }
  
}
