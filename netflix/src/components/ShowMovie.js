import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowMovie = () => {

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/')
        setMovies(response.data)
    }

    useEffect(() => {
        getMovies();
    }, [])



    return (
        <div className="movies-card-info">
            {
                movies.map((movie,index) => (
                    <Card className= "m-2 rounded shadow-lg" style={{width: '22rem'}}>
                    <Card.Img variant="top" src={movie.image} />
                    <Card.Body>
                        <Card.Title>{movie.name}</Card.Title>
                        <Card.Text> {movie.categories} </Card.Text>
                        <Card.Text> {movie.date} </Card.Text>
                        <Card.Text> {movie.description} </Card.Text>
                        <Link className="btn btn-primary" to={`/${movie.id}/`}> View more detail </Link>
                    </Card.Body>
                    </Card>
                )
                )
            }
        </div> 
    );
};

export default ShowMovie;