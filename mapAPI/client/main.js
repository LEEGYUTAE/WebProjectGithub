import {Accounts} from 'meteor/accounts-base';
import '../imports/ui/body.js';

var lat, lng;

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

