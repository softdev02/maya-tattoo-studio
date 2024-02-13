import { Component } from '@angular/core';
import { ApigalleryService } from '../../shared/services/apigallery/apigallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallerydata:any=[]
  file:any;
  imagedata:any;
  currentimgindex:any;
  constructor(private apigallery:ApigalleryService){
 
  }
  ngOnInit(){
    this.getallgallery()
  }
 async getallgallery(){
    this.gallerydata= await this.apigallery.getallgallery()
  }
  openModal(i:any) {
    (document as any).getElementById('authentication-modal').classList.remove('hidden');
    this.imagedata='http://192.168.0.107:8080/maya-tattoo/' + this.gallerydata[i]?.Tattoopic;
    this.currentimgindex=i
  }
  next(i:any){
    console.log(i)
    if(this.gallerydata.length-1>i){
    this.imagedata='http://192.168.0.107:8080/maya-tattoo/' + this.gallerydata[i+1]?.Tattoopic
    this.currentimgindex=i+1
    }
    else{
      this.closeModal()
    }
  }
  closeModal() {
    (document as any).getElementById('authentication-modal').classList.add('hidden');
  }
 
}
