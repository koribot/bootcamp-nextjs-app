'use client'

import React, { useState } from 'react'


const ProjectForm = ({ closeModal }) => {


    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        productionLink: '',
        repoLink: '',
        imageLink: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const addToProjects = (e) => {
        e.preventDefault();
        closeModal()
        console.log(formData)
    }


    return (
        <form className='d-flex fd-column gap-10px' onSubmit={addToProjects}>

            <label>Project Name</label>
            <input type="text" required={true} className='style-none'
                onChange={handleChange}
                name='projectName'
            />

            <label>Description</label>
            <textarea required={true} style={{ height: '100px' }}
                onChange={handleChange}
                name='description'
            >
            </textarea>

            <label>Production Link:</label>
            <input type="url" required={true}
                onChange={handleChange}
                name='productionLink'
            />

            <label>Repository Link</label>
            <input type="url" required={true}
                onChange={handleChange}
                name='repoLink'
            />

            <label>Image Link</label>
            <input type="url" required={true}
                onChange={handleChange}
                name='imageLink'
            />

            <button className='bg-skeleton text-white cursor-pointer' type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm