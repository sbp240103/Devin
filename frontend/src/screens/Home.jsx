import React, { useContext, useState } from 'react';
import {UserContext} from '../context/user.context';
import axios from '../config/axios';


const Home = () => {

    const {user} = useContext(UserContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState(null);


    function createProject(e) {
        e.preventDefault();
        console.log(projectName);

        axios.post('/projects/create', {name: projectName}, {
            name:projectName,
        })
        .then((response) => {
            console.log(response.data);
            setIsModalOpen(false);
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return (
        <main className='p-4'>
                <div className="projects">

                    <button 
                    onClick={() => setIsModalOpen(true)}
                    className='project p-4 border border-slate-300 rounded-md shadow-md flex items-center justify-between'>
                        New Project
                        <i className='ri-link ml-2'></i>
                    </button>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-xl font-bold mb-4">Create New Project</h2>
                            <form onSubmit={createProject}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Project Name
                                    </label>
                                    <input 
                                        onChange={(e) => setProjectName(e.target.value)}
                                        value={projectName}
                                        type="text"
                                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                                        placeholder="Enter project name"
                                    />
                                </div>
                                <div className="flex justify-end gap-2">
                                    <button 
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
        </main>
    );
}  

export default Home;