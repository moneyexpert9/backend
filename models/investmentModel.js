const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    utrNumber: { type: String, required: true },
    dateOfInvestment: { type: Date, required: true },
    amountOfInvestment: { type: Number, required: true },
    investmentScreenshot: { type: String },
    returnsGiven: { type: Number, required: true },
    dateOfReturn: { type: Date },
    returnScreenshot: { type: String },
    repaymentDone: { type: String, required: true }
});

module.exports = mongoose.model('Investment', investmentSchema);
