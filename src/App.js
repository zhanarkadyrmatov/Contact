import Navbar from "./componetn/Navbar";
import { Container, Card } from "react-bootstrap";
import "./App.css";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import Madol from "./componetn/Madol";
import Cards from "./utils/Cards";
export const AddContext = createContext();
function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((e) => {
      setUsers(e.data);
    });
  }, []);
  const sortedContacts = users.sort((a, b) => a.name.localeCompare(b.name));
  const filtered = users.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  return (
    <AddContext.Provider
      value={{ search, setSearch, handleShow, basket, setBasket }}
    >
      <div className="App mt-5 ">
        <Container>
          <Card className="text-center">
            <Card.Header className="bg-secondary">
              <Navbar handleShow={handleShow} />
            </Card.Header>
            <Card.Body>
              {filtered.map((e) => {
                return <Cards props={e} />;
              })}
            </Card.Body>
            <Card.Body className="text-muted"></Card.Body>
          </Card>
        </Container>
        <Madol handleClose={handleClose} show={show} />
      </div>
    </AddContext.Provider>
  );
}

export default App;
