import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, Row} from "react-bootstrap";
import "./EditMovieModal.css"
import {Movie} from "../model/Movie";
import {ChangeEvent, FormEvent, useState} from "react";
type EidtMovieModalProps = {
    show:boolean;
    onHide:()=>void;
    id:string
    editMovie:(movie:Movie)=>void
}
export default function EditMovieModal(props:EidtMovieModalProps) {
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
                    [inputFieldName]:inputFieldValue,
                    id:props.id
                }
            )
        )
    }

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        if(movie.title!="" && movie.url !="" && movie.year !=""){
            // let editedMovie:Movie = {
            //     "id": movie.id,
            //     "title":movie.title,
            //     "url":movie.url,
            //     "year":movie.year
            // }
            props.editMovie(movie)
        }else {
            alert("Bitte füllen Sie alle Angaben aus")
        }

    }

    return(
        <Modal show={props.show} onHide={props.onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Form.Label column="sm" lg={3}>
                        Title:
                    </Form.Label>
                    <Col>
                        <Form.Control size="sm" type="text" name={"title"} placeholder="Title" value={movie.title} onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Form.Label column="sm" lg={3}>
                        URL:
                    </Form.Label>
                    <Col>
                        <Form.Control size="sm" type="text" name={"url"} placeholder="Image-URL" value={movie.url} onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Form.Label column="sm" lg={3}>
                        URL:
                    </Form.Label>
                    <Col>
                        <Form.Control size="sm" type="text" name={"url"} placeholder="Image-URL" value={movie.videoUrl} onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Form.Label column="sm" lg={3}>
                        Year:
                    </Form.Label>
                    <Col>
                        <Form.Control size="sm" type="text" name={"year"} placeholder="Year" value={movie.year} onChange={handleChange} />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <form onSubmit={handleSubmit}>
                    <input type={"submit"} value={"Save Changes"}/>
                    {/*<Button variant="primary" type="submit" onClick={props.onHide}> Save Changes </Button>*/}
                </form>
            </Modal.Footer>
        </Modal>
    )
}