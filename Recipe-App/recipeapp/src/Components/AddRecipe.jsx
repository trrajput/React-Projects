import React from 'react'

function AddRecipe() {
    
    const [formData, updateFormData] = React.useState([]);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const getData = JSON.parse(localStorage.getItem('recipedata')) || [];
        const currentData = [...getData, formData]
        localStorage.setItem('recipedata', JSON.stringify(currentData));
        window.location.href = "/";

    };


    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-4 col-md-offset-4 offset-lg-3">
                    <form className="">
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="name" onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="desc" onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add Recipe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddRecipe
