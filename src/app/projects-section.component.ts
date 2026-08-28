import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projectIndex = 0;
  projects = [
    { title: '3D Plant Modeling Of HRSG Combined Cycle Power Plant', image: 'https://www.rishabheng.com/wp-content/uploads/2026/08/HRSG-Combined-Cycle-Plant-3D-Modeling.jpg', description: 'Delivered intelligent 3D plant modeling for HRSG-based combined cycle power plant with multidisciplinary detailed engineering while enabling clash-free design coordination, construction-ready engineering deliverables, optimized plant layouts, and accelerated project execution.' },
    { title: 'Structural Detailing Of Power Transmission Tower', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/Structural-Detailing-for-Power-Transmission-Tower.jpg', description: 'Accelerated power transmission tower structural detailing and 3D structural modeling through model-driven workflows and CNC-ready fabrication deliverables.' },
    { title: '3D Laser Scanning To BIM Conversion For A Multizone Facility', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/3D-laser-scans-To-BIM-conversion.jpg', description: 'Enabled large-scale infrastructure digitization through laser scan data conversion to BIM, transforming complex point cloud datasets into coordinated digital twins.' },
    { title: 'Structural Analysis Of ATF Electrostatic Coalescer Support', image: 'https://www.rishabheng.com/wp-content/uploads/2026/07/Structural-Stress-Analysis-of-ATF-Coalescer-Support.jpg', description: 'Delivered comprehensive structural analysis ensuring safe operation, lifting, transportation, installation, and long-term structural integrity.' },
    { title: 'Point Cloud Data To 3D Model For Industrial Structures', image: 'https://www.rishabheng.com/wp-content/uploads/2026/08/Industrial-Structures-Point-Cloud-To-3D-Modeling.jpg', description: 'Created an intelligent as-built representation supporting accurate engineering validation, structural detailing, plant documentation, and future facility modifications.' }
  ];
  nextProject() { this.projectIndex = (this.projectIndex + 1) % this.projects.length; }
  previousProject() { this.projectIndex = (this.projectIndex + this.projects.length - 1) % this.projects.length; }
}
