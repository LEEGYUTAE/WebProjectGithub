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

        const target = event.target;
        const text = target.text.value;

        console.log("body event : " + lat + "/" + lng);
        Tasks.insert({
            text : text,
            lat : lat.toFixed(3),//좌표갑 소수점 3자리까지만 저장
            lng : lng.toFixed(3),//좌표갑 소수점 3자리까지만 저장
            createdAt: new Date()
        });

        // Clear form
        target.text.value = '';
    },
});

