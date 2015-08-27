import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: `
    <item-rating
      item-id="{{itemId}}"
      rating="{{rating}}"
      num-ratings="{{numRatings}}"
      (rateitem)="rateItem($event)">`
})
// Component controller
class MyAppComponent {
  rating: number;
  itemId: string;
  numRatings: number;

  constructor() {
    this.itemId = '30e5fe3149c34df1ba922e6f5bbf808f';
    this.rating = 4.25;
    this.numRatings = 6;
  }

  rateItem ($event) {
    console.log($event);
    console.log('Rating In Angular:', $event.detail.rating);
  }
}


bootstrap(MyAppComponent);
