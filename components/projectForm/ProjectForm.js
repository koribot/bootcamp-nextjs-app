'use client'

import postProject from '@/services/DB_Requests/Post/postProject';
import React, { useState } from 'react'


const ProjectForm = ({ closeModal }) => {


    const [formData, setFormData] = useState({
        name: '',
        description: '',
        link: '',
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
        postProject(formData)
    }


    return (
        <form className='d-flex fd-column gap-10px' onSubmit={addToProjects}>

            <label>Project Name</label>
            <input type="text" required={true} className='style-none'
                onChange={handleChange}
                name='name'
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
                name='link'
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