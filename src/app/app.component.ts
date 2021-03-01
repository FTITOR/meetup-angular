import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  
  constructor() {
    // nacimiento
    console.log('1. nacimiento');
  }

  // crece
  ngOnInit() {
    console.log('2. crecimiento');
  }

  // se reproduce
  ngAfterViewInit() {
    console.log('3. se reproduce');
  }

  // muere
  ngOnDestroy() {
    debugger;
    console.log('4. muere');
  }

  // declaracion de variables
  title = 'meetup-angular';

}
