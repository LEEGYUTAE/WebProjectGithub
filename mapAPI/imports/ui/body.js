import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

Template.test1.helpers({
    tasks() {
        return Tasks.find({}, {sort: {createdAt: -1}});
    },
    PrintUsername() {
      return Meteor.user().username;
    },
    test123() {
        var arr = [];

        Tasks.find({}).forEach(function(docs){
            console.log(docs.text);
            arr.push(docs.text + "," + docs.lat + "," + docs.lng);
        });

        console.log(arr);
        return arr;
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
        console.log(locaca+ "하하하");

        Tasks.insert({
            text: text,
            lat: lat,
            lng: lng,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            locaca: locaca,
        });

        // Clear form
        target.text.value = '';
    },
});

