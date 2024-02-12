import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { OurServicesComponent } from '../../shared/components/our-services/our-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,OurServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
