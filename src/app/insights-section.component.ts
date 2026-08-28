import { Component } from '@angular/core';

@Component({
  selector: 'app-insights-section',
  standalone: true,
  templateUrl: './insights-section.component.html',
  styleUrl: './insights-section.component.scss'
})
export class InsightsSectionComponent {
  insights = [
    { title: 'How We Delivered Fabrication Engineering for Non-Ferrous Process Units', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/Structural-Detailing-for-Power-Transmission-Tower.jpg' },
    { title: 'Point Cloud to 3D Model Accuracy: Key Factors and Verification', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/3D-laser-scans-To-BIM-conversion.jpg' },
    { title: 'Seismic Analysis of Piping Systems: Methods, Codes & CAESAR II', image: 'https://www.rishabheng.com/wp-content/uploads/2026/08/HRSG-Combined-Cycle-Plant-3D-Modeling.jpg' }
  ];
}
