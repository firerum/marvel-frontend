import { Component } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Mutant } from 'src/app/interfaces/Mutant.interface';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
})
export class MarvelComponent {
  query: string;
  results: any;

  constructor(private marvelService: MarvelService) {}

  printUserQuery(value: string): void {
    this.marvelService
      .getMutants(value)
      .subscribe((result) => console.log(result));
  }

  getMutantProfile(): void {
    console.log('got profile');
  }
}
