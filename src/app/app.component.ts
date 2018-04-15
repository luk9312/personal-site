import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './app.component.scss' ],
    templateUrl: './app.component.html'
})
export class AppComponent {

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    scrollingSpeed: 1000,

  });

  constructor(public fullpageService: MnFullpageService) {  }
}