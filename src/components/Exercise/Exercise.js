import React from 'react';

const Exercise = (props) => {
    console.log(props);

    const { name, time, img } = props.exercise;
    return (
        <div>

            <div className="card m-3 bg-dark" style={{ width: '18rem' }}>
                <img style={{ height: '200px' }} src={img} alt="" className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Time Requied: {time}s</p>
                    <button className="btn btn-primary">Select Yoga</button>
                </div>
            </div>


        </div >
    );
};

export default Exercise;