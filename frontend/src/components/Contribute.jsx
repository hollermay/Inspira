import { useState } from 'react';
import axios from 'axios';

function ContributionForm() {
    const [formData, setFormData] = useState({ name: "", email: "", templateName: "", content: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/contributions', formData);
            alert("Contribution submitted!");
        } catch (error) {
            console.error(error);
            alert("Failed to submit contribution.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" onChange={handleChange} required />
            <input name="email" placeholder="Your Email" onChange={handleChange} required />
            <input name="templateName" placeholder="Template Name" onChange={handleChange} required />
            <textarea name="content" placeholder="Template Content" onChange={handleChange} required />
            <button type="submit">Submit Contribution</button>
        </form>
    );
}

export default ContributionForm;