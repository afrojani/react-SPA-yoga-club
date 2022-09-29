import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Profile = () => {
    return (
        <div >
            <div className='d-flex align-items-center m-3'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <h5 className='m-3'>Sultana Afroj</h5>
            </div>
            <div className='m-2'>
                <h5>Add A Break</h5>
                <div className='d-flex bg-info rounded-3'>
                    <button className='rounded-circle p-2 m-2'>10s</button>
                    <button className='rounded-circle p-2 m-2'>20s</button>
                    <button className='rounded-circle p-2 m-2'>30s</button>
                    <button className='rounded-circle p-2 m-2'>40s</button>
                    <button className='rounded-circle p-2 m-2'>50s</button>
                </div>
            </div>
            <div className='m-3'>
                <h5>Exercise Details</h5>
                <div className='d-flex align-items-center justify-content-around bg-info rounded-3'>
                    <h6>Exercise time</h6>
                    <p className='p-2'><span>0</span> seconds</p>
                </div>
                <div className='d-flex align-items-center justify-content-around bg-info mt-2 rounded-3'>
                    <h6>Break time</h6>
                    <p className='p-2'><span>0</span> seconds</p>
                </div>
                <button className='btn btn-primary m-3 p-2 '>Activity Completed</button>
            </div>
        </div>
    );
};

export default Profile;