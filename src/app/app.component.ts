import { Component, ViewEncapsulation } from '@angular/core';
import { HeroSectionComponent } from './hero-section.component';
import { AboutSectionComponent } from './about-section.component';
import { ExpertiseSectionComponent } from './expertise-section.component';
import { IndustriesSectionComponent } from './industries-section.component';
import { ProjectsSectionComponent } from './projects-section.component';
import { InsightsSectionComponent } from './insights-section.component';
import { ContactSectionComponent } from './contact-section.component';
import { StatsSectionComponent } from './stats-section.component';

@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent, AboutSectionComponent, StatsSectionComponent, ExpertiseSectionComponent, IndustriesSectionComponent, ProjectsSectionComponent, InsightsSectionComponent, ContactSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  menuOpen = false;
}
