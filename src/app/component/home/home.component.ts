import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { OurServicesComponent } from '../../shared/components/our-services/our-services.component';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { OurArtistComponent } from '../../shared/components/our-artist/our-artist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroSectionComponent, OurServicesComponent, GalleryComponent, OurArtistComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
