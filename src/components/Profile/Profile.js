import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

// import Toast from '../Toast/Toast';

const Profile = ({ cart }) => {
    // ---------------------------------

    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    };

    // ---------------------------------
    let total = 0;
    for (const exercise of cart) {
        total = total + exercise.time
    }
    return (
        <div >

            <div className='d-flex align-items-center m-3'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <h5 className='m-3'>Sultana Afroj</h5><small>Dhaka,Bangladesh</small>
            </div>

            <div className='d-flex align-items-center m-3'>
                <p className='m-1 border border-success rounded-2 p-1'>Height: 5' 4"</p>
                <p className='m-1 border border-success rounded-2 p-1'>Weight: 60 kilos</p>
                <p className='m-1 border border-success rounded-2 p-1'>BMI: 22.7</p>
            </div>
            <div className='m-2'>
                <h5>Add A Break</h5>
                <div className='d-flex bg-info rounded-3 align-items-center justify-content-center'>
                    <button className='rounded-circle p-2 m-2 border border-0'>10s</button>
                    <button className='rounded-circle p-2 m-2 border border-0'>20s</button>
                    <button className='rounded-circle p-2 m-2 border border-0'>30s</button>
                    <button className='rounded-circle p-2 m-2 border border-0'>40s</button>
                    <button className='rounded-circle p-2 m-2 border border-0'>50s</button>
                </div>
            </div>
            <div className='m-3'>
                <h5>Exercise Details</h5>
                <p>selected yoga: {cart.length}</p>
                <div className='d-flex align-items-center justify-content-around bg-info rounded-3'>
                    <h6>Exercise time</h6>
                    <p className='p-2'><span>{total}</span> seconds</p>
                </div>
                <div className='d-flex align-items-center justify-content-around bg-info mt-2 rounded-3'>
                    <h6>Break time</h6>
                    <p className='p-2'><span>0</span> seconds</p>
                </div>

            </div>
            <div>
                <button className='btn btn-primary m-3 p-2 ' onClick={showToastMessage}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Profile;