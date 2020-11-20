import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navSelected: string = '';
  title = 'delivariety';

  navClickHandler(data: string) {
    console.log(data);
    this.navSelected = data;
  }
}
