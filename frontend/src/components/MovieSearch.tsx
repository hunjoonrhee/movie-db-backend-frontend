import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, Row} from "react-bootstrap";
import {ChangeEvent, FormEvent, useState} from "react";
import "./MovieSearch.css"
import {Movie} from "../model/Movie";

type MovieSearchProps={
    searchMovie:(searchText:string)=>string
}

export default function MovieSearch(props:MovieSearchProps){

    const [searchText, setSearchText] = useState("");

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setSearchText(event.target.value);
    }

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        props.searchMovie(searchText)
    }

    return (
        <div className={"search-card"}>
            <Form.Control size="sm" type="text" name={"title"} placeholder="Title" value={searchText} onChange={handleChange}/>
            <form onSubmit={handleSubmit}>
                <input className={"search-btn"} type={"submit"} value={"Search"}/>
            </form>
        </div>
    )
}