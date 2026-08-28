import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss'
})
export class StatsSectionComponent {
  stats = [
    { value: '3', suffix: 'M+', label: 'Manhours of Project Execution Experience' },
    { value: '15', suffix: '+', label: 'Years of Multi-Disciplinary Engineering and Design Expertise' },
    { value: '500', suffix: '+', label: 'Projects Delivered across' },
    { value: '25', suffix: '+', label: 'Countries Around the Globe' }
  ];
}
