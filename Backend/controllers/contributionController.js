const Contribution = require('../models/contribute');
const Template = require('../models/template');


const submitContribution = async (req, res) => {
    try {
        const { name, email, templateName, content } = req.body;

        if (!name || !email || !templateName || !content) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const contribution = await Contribution.create({ name, email, templateName, content });
        res.status(201).json({ message: 'Contribution submitted', contribution });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contribution' });
    }
};


const fetchContributions = async (req, res) => {
    try {
        const contributions = await Contribution.find({ approved: false });
        res.json({ contributions });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contributions' });
    }
};

const deleteContribution = async (req, res) => {
    try {
        const contributionId = req.params.id;

        const contribution = await Contribution.findByIdAndDelete(contributionId);

        res.json({ message: 'Contribution deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete contribution' });
    }
}


const approveContribution = async (req, res) => {
    try {
        const contributionId = req.params.id;

        const contribution = await Contribution.findById(contributionId);

        if (!contribution) {
            return res.status(404).json({ error: 'Contribution not found' });
        }

        const template = await Template.push({
            templateName: contribution.templateName,
            content: contribution.content,
        });

        contribution.approved = true;
        await contribution.save();
        await template.save();

        res.json({ message: 'Contribution approved and added to templates', template });
    } catch (error) {
        res.status(500).json({ error: 'Failed to approve contribution' });
    }
};

module.exports = {
    submitContribution,
    fetchContributions,
    approveContribution,
    deleteContribution
};
