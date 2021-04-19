import { Row, Col, Carousel, Image, Radio, message } from "antd";
import Button from "../../common/Button";
import Input from "../../common/Input";
import * as S from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";

const Product = (props) => {
  const { id } = props.location.state;
  const [product, setProduct] = useState({});

  const [colour, setColour] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axios
      .get(`https://myindianthings-backend.herokuapp.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const addToCart = () => {
    const oldproduct = localStorage.getItem("products")
      ? localStorage.getItem("products")
      : "[]";
    const arrayproduct = JSON.parse(oldproduct);

    console.log(arrayproduct);

    let flag = false;
    arrayproduct.forEach((element) => {
      if (element.id === product._id) {
        flag = true;
      }
    });
    if (flag) {
      message.error("Product already exists in the cart");
    } else if (quantity === 0) {
      message.error("Please select quantity");
    } else if (
      product.colours.length !== 0 &&
      product.colours[0] !== "" &&
      colour === 0
    ) {
      message.error("Please select colour");
    } else {
      const newProduct = {
        name: product.name,
        id: product._id,
        image: product.image,
        discountedPrice: product.discountedPrice,
        originalPrice: product.originalPrice,
        quantity: quantity,
        colour: colour,
      };
      arrayproduct.push(newProduct);

      localStorage.setItem("products", JSON.stringify(arrayproduct));

      message.success("Product added to cart !");
    }
  };

  return (
    <>
      <S.Container>
        <Row>
          <Col lg={12} md={24} sm={24} xs={24}>
            <div style={{ position: "sticky", top: "20px" }}>
              <Carousel autoplay dotPosition="left">
                <div>
                  {!!product.image && (
                    <Image
                      src={`data:image/${
                        product.image.contentType
                      };base64,${new Buffer.from(product.image.data).toString(
                        "base64"
                      )}`}
                      alt={product.name}
                    />
                  )}
                </div>
                {product.images &&
                  product.images.map((image) => (
                    <div key={image}>
                      {!!image && (
                        <Image
                          src={`data:image/${
                            image.contentType
                          };base64,${new Buffer.from(image.data).toString(
                            "base64"
                          )}`}
                        />
                      )}
                    </div>
                  ))}
              </Carousel>
            </div>
          </Col>

          <Col lg={12} md={24} sm={24} xs={24}>
            <S.Container>
              <h1>{product.name}</h1>
              <div style={{ display: "inline-flex" }}>
                <p
                  style={{
                    marginRight: "10px",
                    textDecoration: "line-through",
                  }}
                >
                  <strong>₹ {product.originalPrice}</strong>
                </p>
                <p>
                  <strong>₹ {product.discountedPrice}</strong>
                </p>
              </div>

              {!!product.colours &&
                product.colours.length !== 0 &&
                product.colours[0] !== "" && (
                  <>
                    <p>
                      <strong>Colour</strong>
                    </p>

                    <Radio.Group buttonStyle="ouline">
                      {product.colours !== undefined &&
                        product.colours[0].split(",").map((colour, index) => {
                          if (colour !== "") {
                            return (
                              <Radio.Button
                                key={index}
                                style={{
                                  backgroundColor: colour,
                                  marginRight: "5px",
                                  color: colour,
                                }}
                                onChange={(val) => setColour(val.target.value)}
                                value={colour}
                              ></Radio.Button>
                            );
                          } else {
                            return <></>;
                          }
                        })}
                    </Radio.Group>
                  </>
                )}

              <p>
                <strong>Quantity</strong>
              </p>
              <Input
                type="number"
                value={quantity}
                onChange={(val) => setQuantity(val)}
                label="Quantity"
              />

              <br />
              <br />
              <Button onClick={() => addToCart()}>Add to Cart</Button>
              <br />
              <br />
              <p>
                <strong>About this product</strong>
              </p>
              <p>{product.description}</p>
            </S.Container>
          </Col>
        </Row>
      </S.Container>
    </>
  );
};

export default Product;
