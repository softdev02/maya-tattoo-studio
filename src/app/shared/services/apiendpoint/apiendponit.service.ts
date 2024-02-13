
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiendponitService {


  apiurl(){
    const url="http://192.168.0.107:8080/maya-tattoo"
    return url;
  }
}
