import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { OurServicesComponent } from '../../shared/components/our-services/our-services.component';
import { GalleryComponent } from '../../shared/components/gallery/gallery.component';
import { OurArtistComponent } from '../../shared/components/our-artist/our-artist.component';
import { VideosComponent } from '../../shared/components/videos/videos.component';
import { AboutUsComponent } from '../../shared/components/about-us/about-us.component';
import { CounterComponent } from '../../shared/components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    OurServicesComponent,
    GalleryComponent,
    OurArtistComponent,
    VideosComponent,
    AboutUsComponent,
    CounterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
