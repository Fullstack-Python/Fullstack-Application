import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';


const UpdateMovie = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [categories, setCategories] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")


    const {id} = useParams();

    const loadMovies = async() => {
        const data = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        console.log(data)
        setImage(data.image)
        setCategories(data.categories)
        setName(data.name)
        setDate(data.date)
        setDescription(data.description)

    }

    useEffect(() =>{
        loadMovies()
    },)

    const UpdateMovieInfo = async () =>{
        let formField = new FormData()

        formField.append('name', name)
        formField.append('categories', categories)
        formField.append('description', description)
        formField.append('date', date)
        if (image !== null) {
            formField.append('image', image)
        }
        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/${id}/`,
            data: formField
        }).then((response) => {
            console.log(response.data);
            Navigate('/')
        })
    }

    return (
        <div>
            <h1> Movie Update </h1>
            <div className="form-group">


            <div className="form-group">
                <img src={`image/${id}/`} height="300" width="150" alt='' />

                    <input
                        type="file"
                        className="form-control form-control-lg"
                        name="Image"
                        src={image}
                        multiple
                        onChange={(e) => setImage(e.target.files[0])} />

                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Movie Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                </div>

                <div className="form-group">

                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Movie Categorie"
                        name="categories"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)} />
                </div>

                <div className="form-group">

                    <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Movie Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>


                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Movie Date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>

                <button className="btn btn-success" onClick={() => {
                    UpdateMovieInfo()
                }}> 
                Update Movies
                </button>
            
            </div>
        </div>
    );
};

export default UpdateMovie;