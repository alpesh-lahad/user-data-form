import React, { useState } from 'react';

const UserDataTable = () => {
    const [editIndex, setEditIndex] = useState(null);
    const [editedData, setEditedData] = useState({});
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || []);
    const [renderKey, setRenderKey] = useState(Date.now());

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedData(userData[index]);
    };

    const handleSaveEdit = () => {
        if (!editedData.name || !editedData.email || !editedData.age) {
            // Check if any field is empty
            alert("Please fill in all fields");
            return;
        }
        const updatedData = [...userData];
        updatedData[editIndex] = editedData;
        setUserData(updatedData);
        localStorage.setItem('userData', JSON.stringify(updatedData));
        setEditIndex(null);
        setRenderKey(Date.now());
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
    };

    const handleDelete = (index) => {
        const updatedData = [...userData];
        updatedData.splice(index, 1);
        setUserData(updatedData);
        localStorage.setItem('userData', JSON.stringify(updatedData));
        setRenderKey(Date.now());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    return (
        <div className="row">
            <div className="col">
                <h2 className='mb-4'><span>-</span> User Data <span>-</span></h2>
                {userData.length > 0 ? (
                    <table class="table table-hover" key={renderKey}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr key={index}>
                                    <td>{editIndex === index ? <input type="text" name="name" className='form-control' value={editedData.name} onChange={handleChange} /> : user.name}</td>
                                    <td>{editIndex === index ? <input type="text" name="email" className='form-control' value={editedData.email} onChange={handleChange} /> : user.email}</td>
                                    <td>{editIndex === index ? <input type="number" name="age" className='form-control' value={editedData.age} onChange={handleChange} /> : user.age}</td>
                                    <td>
                                        {editIndex === index ? (
                                            <>
                                                <button className='btn btn-success me-2' onClick={() => handleSaveEdit()}>Save</button>
                                                <button className='btn btn-danger me-2' onClick={() => handleCancelEdit()}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className='btn btn-success me-2' onClick={() => handleEdit(index)}>Edit</button>
                                                <button className='btn btn-danger me-2' onClick={() => handleDelete(index)}>Delete</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No user data available</p>
                )}
            </div>
        </div>
    );
};

export default UserDataTable;
