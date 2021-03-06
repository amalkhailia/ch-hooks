import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MovieCard.css";
import { Card } from "react-bootstrap";
import Raiting from "../Raiting/Raiting";
import AddMovie from "../AddMovie/AddMovie";


const MovieCard = ({movies, isMovieCard, addMovie}) => {
  return (
    <div>
    { isMovieCard ?
    
      <Card className="movieCard">
  <Card.Img className="movieImg" variant="top" src={movies.img} />
  <Card.Body>
    <Card.Title className=".movieTitle">{movies.title}</Card.Title>
    <Card.Text>
      <Raiting FilterRaiting={false} movieRaiting={movies.rating}/>
    </Card.Text>
  </Card.Body>
</Card>
:
<Card className="movieCard">
  <Card.Body>
    <Card.Text>
      <AddMovie addMovie={addMovie}/>
    </Card.Text>
  </Card.Body>
</Card>
    }
    </div>
  );
};

export default MovieCard;
