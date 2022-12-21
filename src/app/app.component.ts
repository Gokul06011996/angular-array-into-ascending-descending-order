import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  array = [7, 2, 20, 28, 1, 3, 5, 19, 29, 12];

  ngOnInit() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = i; j < this.array.length; j++) {
        if (this.array[i] > this.array[j]) {
          let temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;
        }
      }
    }
    console.log('arrayscending', this.array);
    for (let i = 0; i < this.array.length; i++) {
      for (let j = i; j < this.array.length; j++) {
        if (this.array[i] < this.array[j]) {
          let temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;
        }
      }
    }
    console.log('Descending', this.array);
  }
}
