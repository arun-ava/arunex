import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise-section',
  standalone: true,
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.scss'
})
export class ExpertiseSectionComponent {
  activeTab = 0;
  expertise = [
    { title: 'Front-End Engineering Design', number: '01', description: 'Conceptual and feasibility services from your reliable' },
    { title: 'Basic Engineering', number: '02', description: 'Design basis and engineering packages from your reliable' },
    { title: 'Detailed Engineering', number: '03', description: 'Construction-ready engineering services from your reliable' }
  ];
}
