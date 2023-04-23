import { Component } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
})
export class MarvelComponent {
  query: string;

  printUserQuery(value: string): void {
    console.log(value);
  }

  getMutantProfile(): void {
    console.log('got profile');
  }
}
