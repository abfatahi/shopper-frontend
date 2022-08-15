/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { InputField } from "../reusables";

const CartList = (props) => {
  return (
    <Container>
      <div className="web">
        {/* <div className="title">{props?.sn + 1}.</div> */}
        <div className="title">{props?.title?.substring(0, 22)}</div>
        <img src={`https://picsum.photos/640/480?random=${props?.id}`} alt="Product" />
        <div className="amount">${props?.price?.toLocaleString()}</div>
        <InputField inputType={"number"} value={props?.quantity} />
        <div className="subtotal">${props?.subTotal?.toLocaleString()}</div>
        <FaTimesCircle className="close-btn" />
      </div>
      <div className="mobile">
        <img src={`https://picsum.photos/640/480?random=${props?.id}`} alt="Product" />
        <div className="details">
          <div className="title">
            <b>{props?.title?.substring(0, 22)}</b>
          </div>
          <div className="flex">
            <div className="qty">
              Quantity: <b>{props?.quantity}</b>
            </div>
            <div className="amount">
              Subtotal: <b>${props?.subTotal?.toLocaleString()}</b>
            </div>
          </div>
        </div>
        <FaTimesCircle className="close-btn btn" />
      </div>
    </Container>
  );
};

export default CartList;

const Container = styled.div`
  font-weight: 300;
  font-size: 1.1rem;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;

  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }

  .mobile {
    position: relative;
    padding: 0.5rem;
    @media screen and (min-width: 426px) {
      display: none;
    }
    display: flex;
    gap: 1rem;

    img {
      width: 80px;
      height: 40px;
      object-fit: fill;
    }

    .qty,
    .amount {
      font-size: 0.7em;
    }

    .btn {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .web {
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 0.5fr;
    align-items: center;

    @media screen and (max-width: 425px) {
      display: none;
    }
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .close-btn {
    font-size: 1.1rem;
    cursor: pointer;

    :hover {
      color: red;
      opacity: 0.8;
    }
  }
`;
