import {Accounts} from 'meteor/accounts-base';
import '../imports/ui/body.js';
import '../imports/api/tasks.js';

var lat, lng;

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

Router.configure({
    layoutTemplate: 'mainLayout',
});

Template.login.events({

    'click button[name=LogIn]': function (evt, tmpl) {

        var id = tmpl.find('input[name=username]').value;
        var pwd = tmpl.find('input[name=password]').value;

        Meteor.loginWithPassword(id, pwd, function (err) {
            if (err) {
                alert('로그인이 실패 하였습니다. \n' + err);
            }
            else {
                alert("로그인 되었습니다.");
                Router.go('test1');
            }
        });
    },

    'click button[name=SignUp]': function (evt, tmpl) {
        Router.go('/signUp');
    }
});

Template.signUp.events({

    'click button[name=Save]': function (evt, tmpl) {

        var info = {
            username: tmpl.find('input[name=username]').value,
            password: tmpl.find('input[name=password]').value,
            email: tmpl.find('input[name=email]').value,
            profile: {
                nickname: tmpl.find('input[name=email]').value
            },
        };

        Accounts.createUser(info, function (err) {
            if (err) {
                alert(err);
            } else {
                alert("등록 되었습니다.");
            }
        });
    },

    'click button[name=Cancel]': function (evt, tmpl) {
        Router.go('/');
    },
});

Template.logout.events({
    'click #logout': function (evt, tmpl) {
      Meteor.logout();
    },
});

Router.route('/', {
    template : 'test1'
});

Router.route('/signUp', {
    template : 'signUp'
});