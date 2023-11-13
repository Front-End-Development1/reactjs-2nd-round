import React, { useState } from 'react';

function FormData() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
});

const handleInputChange = (e) => {
    const {name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:');
};

return (
    <div>
        <h2>Form Data Handling</h2>
        <firm onSubmit={handleSubmit}>
            <label>
                Username: <input type='text' name='username' value={formData.username} />
            </label>
            <br />
            <label>
               Email: <input type='email' name='email' value={formData.email} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Password: <input type='password' name='password' value={formData.password} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </firm>
    </div>
);
}

export default FormData;