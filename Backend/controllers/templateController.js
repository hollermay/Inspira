const Template = require('../models/template');

const fetchTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        res.json({ templates });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch templates' });
    }
};

const fetchTemplate = async (req, res) => {
    try {
        const templateId = req.params.id;
        const template = await Template.findById(templateId);

        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        res.json({ template });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch template' });
    }
};


const createTemplate = async (req, res) => {
    try {
        const { name, content } = req.body;

        if (!name || !content) {
            return res.status(400).json({ error: 'Name and content are required' });
        }

        const template = await Template.create({ name, content });
        res.status(201).json({ template });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create template' });
    }
};

const updateTemplate = async (req, res) => {
    try {
        const { name, content } = req.body;
        const templateId = req.params.id;

        const template = await Template.findById(templateId);

        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        template.name = name || template.name;
        template.content = content || template.content;

        await template.save();
        res.json({ template });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update template' });
    }
};

const deleteTemplate = async (req, res) => {
    try {
        const templateId = req.params.id;

        const template = await Template.findByIdAndDelete(templateId);

        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        res.json({ message: 'Template deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete template' });
    }
};

module.exports = {
    fetchTemplates,
    fetchTemplate,
    createTemplate,
    updateTemplate,
    deleteTemplate,
};
