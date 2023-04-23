import { Component } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Mutant } from 'src/app/interfaces/Mutant.interface';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
})
export class MarvelComponent {
  query: string | null;
  results: any;
  displayElement: boolean = false;

  constructor(private marvelService: MarvelService) {}

  // search for marvel characters when user types into the input field
  searchMutant(value: string): void {
    if (value) {
      this.displayElement = true; // show autosuggestion only when user types
    }
    this.marvelService
      .getMutants(value || '*')
      .subscribe((result) => (this.results = result.data.results));
  }

  // Print charater name using window alert
  printAlert(value: Event): void {
    const element = value.target as HTMLLIElement;
    this.query = ''; // clear the input field
    this.displayElement = false; // remove autosuggestion when user chooses a character
    setTimeout(() => alert(element.textContent), 400);
  }

  getMutantProfile(): void {
    console.log('got profile');
  }
}
