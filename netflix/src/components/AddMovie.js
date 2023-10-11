import axios from 'axios';
import { useState } from "react";
import React from 'react';
import { Navigate } from "react-router-dom";


const AddMovie = () => {

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [categories, setCategories] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")


    const AddMovieInfo = async () => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('categories', categories)
        formField.append('description', description)
        formField.append('date', date)
        if (image !== null) {
            formField.append('image', image)
        }

    await axios({
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            Navigate('/')
        })

    }

    return (
        <div className="container">
              <h1>Add some Movies</h1>

            <div className="form-group">


            <div className="form-group">
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
                    AddMovieInfo()
                }}> 
                Add Movies
                </button>
            
            </div>
        </div>
    );
};

export default AddMovie;