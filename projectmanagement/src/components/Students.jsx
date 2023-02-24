import { useEffect, useState } from "react";
import client from '../client';

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
        <>
            {users.map((user) => (
                <div key={user._id} className="card-container">
                    <h2 className="username">{user.name}</h2>
                    <p className="useremail">{user.email}</p>
                    {/* <p>Created At: {user.createdAt}</p>
        <p>Updated At: {user.updatedAt}</p> */}
                    <h3 className="projectTitle">Projects:</h3>
                    {user.projects.map((project) => (
                        <div key={project._key} className="projects">
                            <h4 className="projectName">{project.projectName}</h4>
                            <p className="year">Year: {project.year}</p>
                            <p className="department">Department: {project.department}</p>
                            <p className="github"><a href={project.githubLink}>GitHub Link</a></p>
                            <p className="projectLink"><a href={project.projectLink}>Project Link</a></p>
                            <p className="Desc">{project.projectDescription}</p>
                            <img src={project.imageUrl} alt={project.projectName} className="projectImage" />
                        </div>
                    ))}
                </div>
            ))}

        </>
    );
};

export default Display;

