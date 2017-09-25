import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let songs = [
      {'id': 1, 'title':'Sultans of Swing'},
      {'id': 2, 'title': 'Stairway To Heaven'},
      {'id': 3, 'title': 'Time'}
    ];
    return songs;
  }
});
