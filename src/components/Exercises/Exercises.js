import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);

    // ------------------


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    // ----------------------------------------
    const selectedYoga = (exercise) => {
        console.log(exercise);
        const newCart = [...cart, exercise];
        setCart(newCart);
    }

    // // ----------------------------------------

    return (
        <div className='bg-secondary d-flex flex-md-row flex-column '>
            <div className='border border-primary col-12 col-md-7 col-lg-9'>
                <div className='text-white' >
                    <div className='d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                        <h2>Yoga Club</h2>
                    </div>
                    <h5 className='d-flex align-items-center justify-content-center m-3'>Select today’s yoga pose.</h5>
                    <div className=' row row-cols-1  row-cols-lg-3 ' >
                        {
                            exercises.map(exercise => <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                // ---------------------------
                                selectedYoga={selectedYoga}
                            ></Exercise>)
                        }
                    </div>
                </div>
            </div>
            <div className='bg-light border border-warning col-12 col-md-5 col-lg-3'>
                <Profile cart={cart}></Profile>
            </div>
        </div>
    );
};

export default Exercises;