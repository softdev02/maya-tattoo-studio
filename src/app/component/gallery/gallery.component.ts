import { AfterViewInit, Component } from '@angular/core';
import { ApigalleryService } from '../../shared/services/apigallery/apigallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements AfterViewInit {
  gallerydata:any=[]
  file:any;
  imagedata:any;
  currentimgindex:any;
  constructor(private apigallery:ApigalleryService){
 
  }

  ngOnInit(){
    this.getallgallery()
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
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

  categorizeNumber(num : any) {
    const firstSet = [1, 2, 5, 6, 9, 10];
    const numAsString = num.toString();
    var data;
    if (firstSet.includes(parseInt(numAsString.substring(0, 2)))) {
      return data="first";
    } else if (firstSet.includes(parseInt(numAsString.substring(2)))) {
      return data= "second";
    }

    return data;
  }
 
}
