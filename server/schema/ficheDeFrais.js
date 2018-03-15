var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fraisForfaitSchema = require('./fraisForfait.js');

var ficheDeFraisSchema = new Schema({
	user: Schema.Types.ObjectId,
	mois: {type: Date, default: Date.now},
	etat: String,
	fraisForfait: [ fraisForfaitSchema ],
	dateCreation: { type: Date, default: Date.now},
	dateModification: { type: Date, default: Date.now}
})

module.exports = ficheDeFraisSchema;