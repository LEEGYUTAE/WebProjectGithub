import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

Template.test1.helpers({
    tasks() {
        return Tasks.find({}, {sort: {createdAt: -1}});
    },
    PrintUsername() {
      return Meteor.user().username;
    },
});

Template.test1.events({
    'submit .new-task'(event) {
        event.preventDefault();
        // alert(event);
        const target = event.target;
        const text = target.text.value;
        alert(text);
        console.log("body event : " + lat + "/" + lng);
       
        Tasks.insert({
            text : text,
            lat : lat,
            lng : lng,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username:Meteor.user().username
        });

        // Clear form
        target.text.value = '';
    },
});

