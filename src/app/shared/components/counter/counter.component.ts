import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements AfterViewInit {

  constructor(){
    
  }

  ngAfterViewInit(): void{
    let count = document.querySelectorAll('.count');
    let arr = Array.from(count)
    arr.map((item : any)=>{
      let startnumber = 0

      function counterup(){
        startnumber++
        item.innerHTML= startnumber
        
        if(startnumber == item.dataset.number){
          clearInterval(stop)
        }
      }
      let stop =setInterval(function(){
        counterup()
      },50)

    })
  }
}
