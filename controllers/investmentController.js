const Investment = require('../models/investmentModel');

// Add new investment
exports.addInvestment = async (req, res) => {
    try {
        const investment = new Investment(req.body);
        await investment.save();
        res.status(201).json(investment);
    } catch (error) {
        res.status(500).json({ message: 'Error adding investment', error });
    }
};

// Get investment by phone number or UTR
exports.searchInvestment = async (req, res) => {
    const { phoneNumber, utrNumber } = req.query;
    try {
        const investments = await Investment.find({
            $or: [{ phoneNumber }, { utrNumber }]
        });
        res.json(investments);
    } catch (error) {
        res.status(500).json({ message: 'Error searching investment', error });
    }
};

// Get investment by ID (to fetch the existing data for editing)
exports.getInvestmentById = async (req, res) => {
    try {
        const investment = await Investment.findById(req.params.id);
        if (!investment) {
            return res.status(404).json({ message: 'Investment not found' });
        }
        res.json(investment);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching investment', error });
    }
};

// Update investment by ID
exports.updateInvestment = async (req, res) => {
    try {
        const investment = await Investment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!investment) {
            return res.status(404).json({ message: 'Investment not found' });
        }
        res.json(investment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating investment', error });
    }
};
