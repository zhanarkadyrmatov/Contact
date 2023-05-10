import React, { useContext } from "react";
import { BsUnlockFill, BsFillLockFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";
import { AddContext } from "../App";

function Cards({ props }) {
  const { basket, setBasket } = useContext(AddContext);

  const add = (r) => {
    console.log(r.id);
    if (basket.filter((a) => a.id === r.id)[0]) {
      let aa = basket.filter((e) => e.id !== r.id);
      setBasket(aa);
    } else {
      setBasket((prev) => [...prev, r]);
    }
  };
  return (
    <>
      <Card
        className="mt-2 shadow"
        style={{
          border: basket.filter((a) => a.id === props.id)[0]
            ? "2px solid #c04242"
            : "2px solid #000",
          backgroundColor: basket.filter((a) => a.id === props.id)[0]
            ? "rgba(151, 51, 35, 0.3)"
            : "",
        }}
      >
        <Card.Body className="d-flex justify-content-between align-items-center gap-md-2 p-0">
          <div className="d-flex justify-content-between align-items-center gap-md-3">
            <div>
              <img
                className="p-2 rounded-circle"
                width={"60px"}
                height={"60px"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyg-lpIWxto1SS55fn3QBdu3m2PvTeLp_l_QEmBtNBvAOBRskXNxgpYCtaC5OWCuIAxKM&usqp=CAU"
                }
                alt="logo"
              />
            </div>
            <div className="mt-1">
              <h5 className="m-0 fs-md-6 text-start">{props.name}</h5>
              <p className="m-0 fs-md-6 text-start">{props.email}</p>
              <p className="m-0 fs-md-6 text-start">{props.phone}</p>
            </div>
          </div>
          <div className="px-3">
            <Button onClick={() => add(props)} variant="primary">
              {basket.filter((r) => r.id === props.id)[0] ? (
                <BsFillLockFill
                  style={{
                    color: basket.filter((a) => a.id === props.id)[0]
                      ? "#c04242"
                      : "#000",
                    width: "30px",
                    height: "30px",
                  }}
                />
              ) : (
                <BsUnlockFill
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              )}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
