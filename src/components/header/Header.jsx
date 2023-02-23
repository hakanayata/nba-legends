import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import nbaLogo from "../../assets/nba-logo.png"


export default function Header() {
  return (
    <div>
        <Container className="d-flex flex-column justify-content-center align-items-center"> 
            <Image src={nbaLogo}></Image>
            <h1 className="display-3 fw-bold my-2">NBA Legends</h1>
        </Container>
    </div>
  )
}
