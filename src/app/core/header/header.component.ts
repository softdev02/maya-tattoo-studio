import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;
  offcanvasopen: boolean = false;


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  toggleOffcanvas() {
    this.offcanvasopen = !this.offcanvasopen;
  }
}
