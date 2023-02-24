import { useEffect, useState } from "react";
import { RiRadioButtonFill } from 'react-icons/ri';
import './StudentInfo.css';
import client from '../client';

const StudentInfo = () => {
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
            <div className='w-full'>
                <div className='w-screen h-[50vh] relative imge'>
                    <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                    <img style={{ width: "100%" }}
                        className='absolute z-1'
                        layout='fill'
                        objectFit='cover'
                        src="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                        alt='/'
                    />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                        <h2 className='py-2'>Motivate Yourself</h2>
                        <h3>React JS | CSS | Rapid-API | Firebase</h3>
                    </div>
                </div>

                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                    <div className='col-span-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                        <p>
                            This app was built using React JS and Firebase and is hosted on Netlify. Users can login with the help of Firebase Authentication. It has the same landing page as seen on the official page of NETFLIX. After logging in the user can see the movies of different genres. Options like Like and Add to list are available for the users. Also different genres of tv-shows are available for the user to surf.
                        </p>
                        <a
                            href='https://github.com/Yuvadi29/Netflix-Clone'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                        </a>
                        <a
                            href='https://adityanetflixclone.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button className='px-8 py-2 mt-4'>Demo</button>
                        </a>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1' /> React
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1' /> CSS
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1' /> Rapid API
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1' /> Firebase
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link> */}
                </div>
            </div>
        </>
    );
};


export default StudentInfo;



