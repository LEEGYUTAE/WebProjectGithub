import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

Template.test1.helpers({
    tasks() {
        return Tasks.find({},{ sort: { createdAt: -1 }} );
    },
});

Template.test1.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // console.log("body event : " + latLng.lat());

        console.log("body event : " + lat + "/" + lng);
        // Insert a task into the collection
        Tasks.insert({
            text : text,
            lat : lat,
            lng : lng,
            createdAt: new Date() // current time
        });

        // Clear form
        target.text.value = '';
    },
});