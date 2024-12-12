import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Players.css";

const Players = (props) => {
  //Style Inline
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    textAlign: 'center',
  };
  return (
    <Card style={cardStyle}>
      <Card.Img
        variant="top"
        src={props.Image}
        alt={props.Name}
        style={{ width: 286.4, height: 190.58 }}
      />
      <Card.Body>
        <Card.Title>{props.Name}</Card.Title>
        <Card.Text className="text-center player-details">
          <div className="player-detail">
            <b>Team:</b> {props.Team}
          </div>
          <div className="player-detail">
            <b>Nationality:</b> {props.Nationality}
          </div>
          <div className="player-detail">
            <b>Number:</b> {props.Number}
          </div>
          <div className="player-detail">
            <b>Age:</b> {props.Age} years old
          </div>
        </Card.Text>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
  );
};

// Props par défaut
Players.defaultProps = {
  Name: "Unknown Player",
  Team: "Unknown Team",
  Nationality: "Unknown",
  Number: 0,
  Age: 0,
  Image: "https://via.placeholder.com/150",
};

export default Players;
