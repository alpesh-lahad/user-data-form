// src/UserDataForm.js
import React, { useState } from 'react';

const UserDataForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!formData.name.trim() || !formData.email.trim() || !formData.age) {
            alert("Please fill in all fields");
            return;
        }

        const userData = JSON.parse(localStorage.getItem('userData')) || [];
        const newData = [...userData, formData];
        localStorage.setItem('userData', JSON.stringify(newData));
        console.log('Data saved to localStorage:', newData);
        setFormData({
            name: '',
            email: '',
            age: '',
        });
    };

    return (
        <div className="row mb-4">
            <div className="col">
                <form class="row row-cols-lg-auto g-3 align-items-center justify-content-md-center" onSubmit={handleSubmit}>
                    <div class="col-12">
                        <div class="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group">
                            <input
                                type="number"
                                name="age"
                                placeholder="Age"
                                value={formData.age}
                                onChange={handleChange}
                                className='form-control'
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <button className='btn btn-primary' type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDataForm;
