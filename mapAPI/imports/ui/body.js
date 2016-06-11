import {Template} from 'meteor/templating';

import {Tasks} from '../api/tasks.js';

Template.test1.helpers({
    PrintUsername() {
        return Meteor.user().username;
    },
    contents() {
        var contentArr = [];
        Tasks.find({}).forEach(function (docs) {
            contentArr.push(docs.text+"/"+docs.lat+"/"+docs.lng);
        });
        console.log(contentArr);
        return contentArr;
    }
});

Template.test1.events({
    'submit .new-task'(event) {
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;
        console.log("body event : " + _lat + "/" + _lng);


        Tasks.insert({
            text: text,
            lat:_lat,
            lng:_lng,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
        // Clear form
        target.text.value = '';
    },
    
});

