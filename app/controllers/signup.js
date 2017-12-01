import Controller from '@ember/controller';

export default Controller.extend({
  actions:{

    responseMessage: '',
    firstName: '',
    lastName: '',

    signUp(){
      const fName = this.get('firstName');
      const lName = this.get('lastName');
      //Get score from other route, not figure it out yet
      //const score = ....;
      console.log(fName);
      console.log(lName);

      //
      const newUser = this.store.createRecord('user', {
        firstName: fName,
        lastName: lName,
        //score: score

       });

      newUser.save().then((response) => {
      this.set('responseMessage', `Thank you! We saved your firstName and LastName with the following id: ${response.get('id')}`);
       this.set('firstName', '');
       this.set('lastName', '');
       //this.set
     });

     this.transitionToRoute(ranking);

    }
  }
});
