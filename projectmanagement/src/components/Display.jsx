import { useEffect, useState } from "react";
import client from '../client';
// import fetch from 'node-fetch';


const Display = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "user"] {
      name,
      email,
      createdAt,
      updatedAt,
      projects[] {
        projectName,
        year,
        department,
        githubLink,
        projectLink,
        projectDescription,
        "imageUrl": projectImage.asset->url
      }
    }`).then((data) => {
            setUsers(data);
        }).catch(console.error);
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div key={user._id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>Created At: {user.createdAt}</p>
                    <p>Updated At: {user.updatedAt}</p>
                    <h3>Projects:</h3>
                    {user.projects.map((project) => (
                        <div key={project._key}>
                            <h4>{project.projectName}</h4>
                            <p>Year: {project.year}</p>
                            <p>Department: {project.department}</p>
                            <p><a href={project.githubLink}>GitHub Link</a></p>
                            <p><a href={project.projectLink}>Project Link</a></p>
                            <p>{project.projectDescription}</p>
                            <img src={project.imageUrl} alt={project.projectName} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Display;
