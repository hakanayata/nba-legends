import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { data } from "../../helpers/data";
import PlayerCard from "../playerCard/PlayerCard";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function CardContainer() {

    const [searchContent, setSearchContent] = useState("")

    // moved filter to 31st row instead
    // const filteredData = data.filter((player) => {
    //     return player.name.trim().toLowerCase().includes(searchContent.trim().toLowerCase())
    // })

  return (
    <>
        <Form.Control 
            className="w-50 m-auto" 
            placeholder="Search player..." 
            type="search" 
            onChange={(e)=>setSearchContent(e.target.value)}
        >
        </Form.Control>

        <Container className="rounded-4 my-4 p-3 card-container">
            <Row className="g-4">
                {data
                    .filter(player => player.name.trim().toLowerCase().includes(searchContent?.trim().toLowerCase()))
                    .map((player, index) => {
                        return (
                            <Col key={index} md={6} lg={4} xl={3} >
                                <PlayerCard player={player} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </>
  )
}
