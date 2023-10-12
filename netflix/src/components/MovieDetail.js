import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

const MovieDetail = () => {

    const [movie, setMovie] = useState("")

    const {id} = useParams();

    const getSingleMovie = async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        console.log(data)
        setMovie(data)
    }

    useEffect(() => {
        getSingleMovie()
    },)

    const deleteMovie = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/${id}`);
        Navigate('/')
    }
 

    return (
        <div>
            <h1>Movies Detail</h1>
            <div className='single-movie-info'>
                <p>{movie.name}</p>
                <img src={movie.image}  height="400" width="250" alt=''/>
                <p>{movie.categories}</p>
                <p>{movie.description}</p>
                <p>{movie.date}</p>
            <Link className="btn btn-primary m-2" to={`/${movie.id}/update`}> Update </Link>
            <Link className="btn btn-danger m-2" onClick={() => deleteMovie(movie.id)}> Delete </Link>
            </div>
        </div>
    );
};

export default MovieDetail;