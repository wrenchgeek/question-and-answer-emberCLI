QAndA.Answer = DS.Model.extend({
  description: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
