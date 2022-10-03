import {ChangeEvent, FormEvent, useState} from "react";
import {Movie} from "../model/Movie";
import "./AddMovie.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Col, Form, Row} from "react-bootstrap";

type AddMovieProps = {
    addMovie:(movie:Movie)=>void
}

export default function AddMovie(props:AddMovieProps){
    const emptyMoviePlaceholder: Movie = {
        id:"",
        title: "",
        url: "",
        videoUrl:"",
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
            console.log(movie+"wird hinzugefügt!!!!!")
        }else {
            alert("Bitte füllen Sie alle Angaben aus")
        }
    }

    return(
        <div className={"add-card"}>

            <Row>
                <Form.Label column="sm" lg={3}>
                    Title:
                </Form.Label>
                <Col>
                    <Form.Control size="sm" type="text" name={"title"} placeholder="Title" value={movie.title} onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Form.Label column="sm" lg={3}>
                    URL:
                </Form.Label>
                <Col>
                    <Form.Control size="sm" type="text" name={"url"} placeholder="Image-URL" value={movie.url} onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Form.Label column="sm" lg={3}>
                    URL:
                </Form.Label>
                <Col>
                    <Form.Control size="sm" type="text" name={"videoUrl"} placeholder="Trailer-URL" value={movie.videoUrl} onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Form.Label column="sm" lg={3}>
                    Year:
                </Form.Label>
                <Col>
                    <Form.Control size="sm" type="text" name={"year"} placeholder="Year" value={movie.year} onChange={handleChange}/>
                </Col>
            </Row>
            <form onSubmit={handleSubmit}>
                <Button className={"form-btn-submit"} type={"submit"}>Add</Button>
            </form>

        </div>
    )
}