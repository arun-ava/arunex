import { Component } from '@angular/core';

@Component({
  selector: 'app-industries-section',
  standalone: true,
  templateUrl: './industries-section.component.html',
  styleUrl: './industries-section.component.scss'
})
export class IndustriesSectionComponent {
  industries = [
    { name: 'Oil & Gas', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/Structural-Detailing-for-Power-Transmission-Tower.jpg' },
    { name: 'Petrochemicals', image: 'https://www.rishabheng.com/wp-content/uploads/2026/08/HRSG-Combined-Cycle-Plant-3D-Modeling.jpg' },
    { name: 'Carbon Capture', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/Structural-Stress-Analysis-of-ATF-Coalescer-Support.jpg' },
    { name: 'Green Hydrogen', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/3D-laser-scans-To-BIM-conversion.jpg' },
    { name: 'Manufacturing', image: 'https://www.rishabheng.com/wp-content/uploads/2026/08/Industrial-Structures-Point-Cloud-To-3D-Modeling.jpg' },
    { name: 'Cryogenics', image: 'https://www.rishabheng.com/wp-content/uploads/2026/08/HRSG-Combined-Cycle-Plant-3D-Modeling.jpg' }
  ];
}
