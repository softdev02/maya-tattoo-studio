import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MayaTattooStudio';

  close_chart_box(){
    document.getElementById('chat-box')!.style.right = "-500px";
  }

  chart_box(){
    document.getElementById('chat-box')!.style.right = "2%";
  }

  navbar(){
    document.getElementById('navbarNav-1')!.classList.add('nav-active')
  }

  generateWhatsAppLink(data : any) {
    window.open(`https://web.whatsapp.com/send/?phone=+919677406100&text=${encodeURIComponent(data.value.message)}`, '_blank')
  }
}
