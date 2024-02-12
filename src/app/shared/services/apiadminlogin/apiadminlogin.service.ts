import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiendponitService } from '../apiendpoint/apiendponit.service';
import {lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiadminloginService {

  constructor(private http:HttpClient,public url:ApiendponitService) { }
  async adminloign(data:any){
    return await lastValueFrom(this.http.post(`${this.url.apiurl()}/api/login`,data));
  }
}
