import React, { useState } from "react";

import * as S from "./styles";
import { Row, Col, Image } from "antd";
import Button from "../../common/Button";
import Input from "../../common/Input";

const Checkout = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Checkout
      </h1>
      <S.Container>
        <Row>
          <S.OuterCols lg={12} md={12} sm={24} xs={24}>
            <Input
              type="text"
              label="Name"
              value={name}
              onChange={(val) => setName(val)}
            />

            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(val) => setEmail(val)}
            />

            <Input
              type="tel"
              label="Phone Number"
              value={phone}
              onChange={(val) => setPhone(val)}
            />

            <Input
              type="text"
              label="Address Line 1"
              value={address1}
              onChange={(val) => setAddress1(val)}
            />

            <Input
              type="text"
              label="Address Line 2"
              value={address2}
              onChange={(val) => setAddress2(val)}
            />

            <Input
              type="text"
              label="State"
              value={state}
              onChange={(val) => setState(val)}
            />

            <Input
              type="text"
              label="City"
              value={city}
              onChange={(val) => setCity(val)}
            />

            <Input
              type="text"
              label="Zip Code"
              value={zip}
              onChange={(val) => setZip(val)}
            />
            {/* <S.CheckoutInput type="text" placeholder="Name" />
            <S.CheckoutInput type="email" placeholder="E-Mail" />
            <S.CheckoutInput type="tel" placeholder="Phone Number" />
            <S.CheckoutInput type="text" placeholder="Address 1" />
            <S.CheckoutInput type="text" placeholder="Address 2" />
            <S.CheckoutInput type="text" placeholder="State" />
            <S.CheckoutInput type="text" placeholder="City" />
            <S.CheckoutInput type="number" placeholder="Zip Code" /> */}
            <Button width="30">Continue to payment</Button>
          </S.OuterCols>
          <S.OuterCols lg={12} md={12} sm={24} xs={24}>
            <S.ProductContainer>
              <Col span={4}>
                <Image
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  alt="product"
                />
              </Col>
              <Col span={2}></Col>
              <Col span={18}>
                <S.NameSpan>Name of the product</S.NameSpan>
                <br />
                <span>Quantity of the product</span>
                <br />
                <span>Original Price</span>
                <br />
                <span>Discounted Price</span>
              </Col>
            </S.ProductContainer>
          </S.OuterCols>
        </Row>
      </S.Container>
    </>
  );
};

export default Checkout;
