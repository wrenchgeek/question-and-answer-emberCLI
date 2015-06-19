import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
