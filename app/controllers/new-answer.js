QAndA.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      // debugger;
      var answer = this.store.createRecord('answer', {
        description: this.get('answer-description'),
      });
      answer.save();
      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();
      this.transitionToRoute('question', question.id);
    }
  }
});
