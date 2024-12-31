import React from 'react';

const blogs = [
    {
        id: 1,
        title: 'First Blog Post',
        content: 'This is the content of the first blog post.',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        title: 'Second Blog Post',
        content: 'This is the content of the second blog post.',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        title: 'Third Blog Post',
        content: 'This is the content of the third blog post.',
        image: 'https://via.placeholder.com/150'
    }
];

const Blogs = () => {
    return (
        <div>
            <h2>Mini Blogs Section</h2>
            <div>
                {blogs.map(blog => (
                    <div key={blog.id} style={styles.card}>
                        <img src={blog.image} alt={blog.title} style={styles.image} />
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(145deg, #ff9a9e, #fad0c4)',
        color: '#333',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px 10px 0 0'
    }
};

export default Blogs;