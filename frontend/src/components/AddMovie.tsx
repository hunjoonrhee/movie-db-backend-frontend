import {ChangeEvent, FormEvent, useState} from "react";
import {Movie} from "../model/Movie";
import "./AddMovie.css"

type AddMovieProps = {
    addMovie:(movie:Movie)=>void
}

export default function AddMovie(props:AddMovieProps){
    const emptyMoviePlaceholder: Movie = {
        id:"",
        title: "",
        url: "",
        year: ""
    }

    const [movie, setMovie] = useState(emptyMoviePlaceholder)

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=> {
        const inputFieldValue = event.target.value;
        const inputFieldName = event.target.name;
        setMovie( oldMovie =>(
                { ...oldMovie,
                    [inputFieldName]:inputFieldValue
                }
            )
        )
    }

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        if(movie.title!="" && movie.url !="" && movie.year !=""){
            props.addMovie(movie)
        }else {
            alert("Bitte füllen Sie alle Angaben aus")
        }
    }

    return(
        <div className={"add-card"}>
            <form className={"form-add"} >
                <label className={"form-label"}>
                    Titel:
                    <input className={"form-input"} name={"title"} type={"text"} value={movie.title} placeholder={"Title"} onChange={handleChange} />
                </label>
                <label className={"form-label"}>
                    URL:
                    <input className={"form-input"} name={"url"} type={"text"} value={movie.url} placeholder={"Image-URL"} onChange={handleChange} />
                </label>
                <label className={"form-label"}>
                    Year:
                    <input className={"form-input"} name={"year"} type={"text"} value={movie.year} placeholder={"Year"} onChange={handleChange} />
                </label>
            </form>
            <form onSubmit={handleSubmit}>
                <button className={"form-btn-submit"} type={"submit"}>Add</button>
            </form>

        </div>
    )
}