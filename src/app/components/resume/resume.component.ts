import { Component } from '@angular/core';

@Component({
  selector: 'resume',
  styleUrls: ['resume.component.scss'],
  templateUrl: 'resume.component.html'
})
export class ResumeComponent {
  pdfSrc: string = 'assets/hw1.pdf';

  constructor() {}
}