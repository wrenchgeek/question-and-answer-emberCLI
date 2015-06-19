import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    delete:function() {
      if(confirm('Are you sure?')){
        this.get('model').destroyRecord();
      }
    }
  }
});
