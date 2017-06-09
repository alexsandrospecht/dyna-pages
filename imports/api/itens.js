import { Mongo } from 'meteor/mongo';

export const Itens = new Mongo.Collection('itens');

if (Meteor.isServer) {
  Meteor.publish('itens', function publication() {
    return Itens.find();
  });
}
