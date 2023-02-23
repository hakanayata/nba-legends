import Card from "react-bootstrap/Card";
import { useState } from "react";

export default function PlayerCard( {player} ) {
    const {name, img, statistics} = player
    const [toggleView, setToggleView] = useState(true)

    function handleClick() {
        setToggleView(!toggleView)
    }

  return (
    <Card className="rounded-2 m-auto text-center player-card" role="button" onClick={handleClick}>
        {toggleView ?
            <Card.Img className="player-logo" variant="top" src={img} />
            :
            <ul  className="m-auto" style={{height: "350px"}}>
                {statistics.map((stat, index) => {
                    return <li key={index} className="fs-5 text-start list-unstyled">🏀 {stat}</li>;
                })}
            </ul>
        }
        <Card.Footer>
            <Card.Title>{name}</Card.Title>
        </Card.Footer>
    </Card>
  )
}
