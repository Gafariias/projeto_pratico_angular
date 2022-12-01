import { Component } from '@angular/core';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent {
  techs = [
      'HTML', 
      'SASS', 
      'JavaScript', 
      'TypeScript', 
      'React', 
      'Styled-Components', 
      'Java', 
      'Spring', 
      'VueJs', 
      'Tailwind', 
      'Bootstrap', 
      'Angular', 
      'Python'
  ]
}
