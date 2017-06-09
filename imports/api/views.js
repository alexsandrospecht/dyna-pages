import { Mongo } from 'meteor/mongo';

export const Views = new Mongo.Collection('views');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('views', function publication() {
    return Views.find();
  });
}
