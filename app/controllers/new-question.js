QAndA.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        description: this.get('question-description'),
        title: this.get('question-title'),
        author: this.get('question-author')
      });
      this.set('answers', [])
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
