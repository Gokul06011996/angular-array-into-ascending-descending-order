import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  a = [7, 2, 20, 28, 1, 3, 5, 19, 29, 12];

  ngOnInit() {
    for (let i = 0; i < this.a.length; i++) {
      for (let j = i; j < this.a.length; j++) {
        if (this.a[i] > this.a[j]) {
          let temp = this.a[i];
          this.a[i] = this.a[j];
          this.a[j] = temp;
        }
      }
    }
    console.log('Ascending',this.a);
    for (let i = 0; i < this.a.length; i++) {
      for (let j = i; j < this.a.length; j++) {
        if (this.a[i] < this.a[j]) {
          let temp = this.a[i];
          this.a[i] = this.a[j];
          this.a[j] = temp;
        }
      }
    }
    console.log('Descending',this.a);
  }
}
