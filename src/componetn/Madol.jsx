import React from "react";
import { Modal, Button } from "react-bootstrap";
import { AddContext } from "../App";
import { useContext } from "react";
import Cards from "../utils/Cards";

function Madol({ show, handleClose }) {
  const { basket, setBasket } = useContext(AddContext);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Корзина</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          {basket.length <= 0 ? (
            <div className="d-flex justify-content-center align-items-center">
              <img
                style={{
                  width: "250px",
                  borderRadius: "50%",
                }}
                src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-red-no-icon-image_1136655.jpg"
                alt=""
              />
            </div>
          ) : null}
          {basket.map((e) => {
            return <Cards props={e} />;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Выйти
          </Button>
          {basket.length > 0 ? (
            <Button variant="secondary" onClick={() => setBasket([])}>
              Очистить
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Madol;
