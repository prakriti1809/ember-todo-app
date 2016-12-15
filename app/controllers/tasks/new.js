import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function () {
      let title = this.get('title');
      let description = this.get('description');
      let date = this.get('date');

      // alert(title);
      //Create New Task
      let newTask =  this.store.createRecord('task', {
        title: title,
        description: description,
        date: new Date(date)
      });

      //Save to firebase
      newTask.save().then(function() {

      }).catch(e => {
        console.log('Error while saving: ' + e.errors);
      });

      //Clear form
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    }
  }
});
