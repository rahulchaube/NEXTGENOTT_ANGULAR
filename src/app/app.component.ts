import { Component } from '@angular/core';
import {Router, Route, ActivatedRoute } from '@angular/router';
import { VIEWS } from '../app/models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Next Gen OTT';
  views;
  navigateToView = '';

  constructor(private router: Router){
    this.views = VIEWS;
  }
  handleNavigation(element: any): void{
    console.log(element);
    this.navigateToView = element == this.views.CONTACT ? 'contactus'
                                                   : element == this.views.ABOUT ? 'aboutus'
                                                                                  : '';

    this.router.navigate([`/${this.navigateToView}/`]);
  }
}

