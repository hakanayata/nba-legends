import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import CardContainer from "./components/cardContainer/CardContainer";

export default function App() {
  return (
    <Container className="mt-4" >
      <Header />
      <CardContainer />
    </Container>
  );
}
