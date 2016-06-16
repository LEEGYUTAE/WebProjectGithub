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
            text: Meteor.user().username + ':' + text,
            lat:_lat,
            lng:_lng,
            createdAt: new Date(),
            username: Meteor.user().username
        });
        // Clear form
        target.text.value = '';
    },

    'submit .up'(event){
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;

        var latlat = $("#latlat").val();
        var lnglng = $("#lnglng").val();

        var contentArr1 = [];
        Tasks.find({}).forEach(function (docs) {
            contentArr1.push(docs.text + "/" + docs._id+"/"+docs.lat+"/"+docs.lng);
        });

        console.log(contentArr1);

        var con = [];
        var idid = null;
        var text123 = null;

        for ( var i = 0; i < contentArr1.length; i++) {
            con[i] = contentArr1[i].split("/");
            if (con[i][2] == latlat && con[i][3] == lnglng) {
                idid = con[i][1];
                text123 = con[i][0];
            }
        }

        console.log(idid);

        Tasks.update(idid,{
            $set:{text: text123 + "/" + text},
        });

        target.text.value = '';
    },

});

