import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AdminContributions() {
    const [contributions, setContributions] = useState([]);

    useEffect(() => {
        async function fetchContributions() {
            const response = await axios.get('/contributions');
            setContributions(response.data.contributions);
        }
        fetchContributions();
    }, []);

    const approveContribution = async (id) => {
        try {
            await axios.post(`/contributions/${id}/approve`);
            alert("Contribution approved!");
            setContributions(contributions.filter(contribution => contribution._id !== id));
        } catch (error) {
            console.error(error);
            alert("Failed to approve contribution.");
        }
    };

    return (
        <div>
            <h2>Pending Contributions</h2>
            <ul>
                {contributions.map(contribution => (
                    <li key={contribution._id}>
                        <h3>{contribution.templateName}</h3>
                        <p>{contribution.content}</p>
                        <button onClick={() => approveContribution(contribution._id)}>Approve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminContributions;