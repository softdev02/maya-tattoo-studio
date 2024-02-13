import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiendponitService } from '../apiendpoint/apiendponit.service';
import { lastValueFrom } from 'rxjs';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ApigalleryService {

  constructor(private http:HttpClient,public url:ApiendponitService,private token:TokenService) { }
  async getallgallery(){
    return await lastValueFrom(this.http.get(`${this.url.apiurl()}/api/getallgallery`));
  }
  async postgallery(data:any){
    var formdata=new FormData();
    formdata.append('Tattoopic',data?.Tattoopic);
    formdata.append('Tattooname',data?.Tattooname);
    return await lastValueFrom(this.http.post(`${this.url.apiurl()}/api/upload`,formdata,{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }
  async deletegallery(id:any){

    return await lastValueFrom(this.http.post(`${this.url.apiurl()}/api/delete`,{id:id},{headers: { Authorization: `Bearer ${this.token.getAccessToken()}` }}));
  }
}
