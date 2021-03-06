import Ember from 'ember';
import ItemRating from './item-rating-core';

// wrap our web component in an Ember component
// we will have to do this until Ember 2.2
// where we get angle bracket components
export default Ember.Component.extend({
  tagName: 'item-rating',
  attributeBindings: ['numratings', 'rating', 'itemid'],

  // translate the `rateitem` event from our custom element into an
  // action our controller can understand. If this component has a
  // parent componentyou can opt to just impliment a `rateitem` function
  // on the component to listen to the event instead of this.
  rateitem: function (e) {
    this.sendAction(`rateItem`, e.originalEvent);
  }
});
