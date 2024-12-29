const Readme = require('../models/readme');

const fetchReadmes = async (req, res) => {
    try {
        const readmes = await Readme.find();
        res.json({ readmes });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch readmes' });
    }
};

const fetchReadme = async (req, res) => {
    try {
        const readmeId = req.params.id;
        const readme = await Readme.findById(readmeId);

        if (!readme) {
            return res.status(404).json({ error: 'Readme not found' });
        }

        res.json({ readme });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch readme' });
    }
};

const createReadme = async (req, res) => {
    try {
        const { name, content } = req.body;

        if (!name || !content) {
            return res.status(400).json({ error: 'Name and content are required' });
        }

        const readme = await Readme.create({ name, content });
        res.status(201).json({ readme });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create readme' });
    }
};

const updateReadme = async (req, res) => {
    try {
        const { name, content } = req.body;
        const readmeId = req.params.id;

        const readme = await Readme.findById(readmeId);

        if (!readme) {
            return res.status(404).json({ error: 'Readme not found' });
        }

        readme.name = name || readme.name;
        readme.content = content || readme.content;

        await readme.save();
        res.json({ readme });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update readme' });
    }
};

const deleteReadme = async (req, res) => {
    try {
        const readmeId = req.params.id;

        const readme = await Readme.findByIdAndDelete(readmeId);

        if (!readme) {
            return res.status(404).json({ error: 'Readme not found' });
        }

        res.json({ message: 'Readme deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete readme' });
    }
};

module.exports = {
    fetchReadmes,
    fetchReadme,
    createReadme,
    updateReadme,
    deleteReadme,
};
