import { Component } from '@angular/core';
import { PortfolioService } from './services/portfolio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phaneendar-resume-portfolio';

  constructor(private portfolioService: PortfolioService) {

  }

  ngOnInit() {
    this.portfolioService.getPortfolioContacts().subscribe( (portfolioResponse) => {
      if(portfolioResponse) {
        console.log(JSON.stringify(portfolioResponse));
      } else {
        console.log('error occured');
      } 
    });
  }

}
