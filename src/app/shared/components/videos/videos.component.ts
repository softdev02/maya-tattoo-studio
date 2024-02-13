import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  openModal() {
    (document as any).getElementById('authentication-modal').classList.remove('hidden');
  }

  closeModal() {
    (document as any).getElementById('authentication-modal').classList.add('hidden');
  }
}
