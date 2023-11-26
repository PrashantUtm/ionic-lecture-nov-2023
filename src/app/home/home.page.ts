import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

    const programmingLanguage = 'Python';

    console.log(`${programmingLanguage} is a programming language.`);
    console.log(typeof programmingLanguage);

    // if (programmingLanguage === 'Python') {
    //   console.log('not javascript');
    // } else {
    //   console.log('maybe javascript');
    // }

    console.log(programmingLanguage === 'Python' ? 'not javascript' : 'maybe javascript');

    this.showProduct(4, 5);

    console.log(this.getNumber(false));
    console.log(5/0);
    console.log(-5/0);
  }

  private showProduct(first: number, second: number) : void {
    console.log('product:', first * second);
  }

  private getNumber(returnNumber: boolean): number {
    if (returnNumber) {
      return 5;
    } else {
      return NaN;
    }
  }

}
