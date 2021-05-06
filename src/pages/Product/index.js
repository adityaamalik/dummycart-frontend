import { Row, Col, Radio, message } from "antd";
import Button from "../../common/Button";
import Input from "../../common/Input";
import * as S from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const Product = (props) => {
  const { id, d } = props.location.state;
  const [product, setProduct] = useState({});

  const [colour, setColour] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [totalColors, setTotalColors] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);

  useEffect(() => {
    if (!!d) {
      setProduct(d);
      let temp = 0;
      let temp2 = 0;
      for (let prop in product) {
        if (prop.includes("color") && !!product[prop]) {
          temp++;
        }
        if (prop.includes("galleryImage") && !!product[prop]) {
          temp2++;
        }
      }
      setTotalColors(temp);
      setTotalSlides(temp2 + 1);
    } else {
      axios
        .get(`/products/${id}`)
        .then((response) => {
          setProduct(response.data);

          for (let prop in product) {
            console.log(prop);
            if (prop.includes("color")) {
              console.log(prop + " : " + product[prop]);
            }
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id, d, product]);

  const addToCart = () => {
    const oldproduct = localStorage.getItem("products")
      ? localStorage.getItem("products")
      : "[]";
    const arrayproduct = JSON.parse(oldproduct);

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
    } else if (!!product.totalColours && colour === "") {
      message.error("Please select colour");
    } else {
      const newProduct = {
        name: product.name,
        id: product._id,
        image: product.image,
        discountedPrice:
          product.originalPrice -
          (product.originalPrice * product.discountPercentage) / 100,
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
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={totalSlides}
                isPlaying={true}
                infinite={true}
                isIntrinsicHeight={true}
                hasMasterSpinner={true}
              >
                <Slider>
                  <Slide index={0}>
                    <div>
                      {!!product.image && (
                        <Image
                          hasMasterSpinner={true}
                          src={product.image}
                          alt={product.name}
                        />
                      )}
                    </div>
                  </Slide>
                  {!!product.galleryImage1 && (
                    <Slide index={1}>
                      <div>
                        <Image
                          hasMasterSpinner={true}
                          src={product.galleryImage1}
                          alt="Gallery image 1"
                        />
                      </div>
                    </Slide>
                  )}
                  {!!product.galleryImage2 && (
                    <Slide index={2}>
                      <div>
                        <Image
                          hasMasterSpinner={true}
                          src={product.galleryImage2}
                          alt="Gallery image 2"
                        />
                      </div>
                    </Slide>
                  )}
                  {!!product.galleryImage3 && (
                    <Slide index={3}>
                      <div>
                        <Image
                          hasMasterSpinner={true}
                          src={product.galleryImage3}
                          alt="Gallery image 3"
                        />
                      </div>
                    </Slide>
                  )}
                  {!!product.galleryImage4 && (
                    <Slide index={4}>
                      <div>
                        <Image
                          hasMasterSpinner={true}
                          src={product.galleryImage4}
                          alt="Gallery image 4"
                        />
                      </div>
                    </Slide>
                  )}
                  {!!product.galleryImage5 && (
                    <Slide index={5}>
                      <div>
                        <Image
                          hasMasterSpinner={true}
                          src={product.galleryImage5}
                          alt="Gallery image 5"
                        />
                      </div>
                    </Slide>
                  )}
                  {!!product.galleryImage6 && (
                    <Slide index={6}>
                      <div>
                        <Image
                          hasMasterSpinner={true}
                          src={product.galleryImage6}
                          alt="Gallery image 6"
                        />
                      </div>
                    </Slide>
                  )}
                  {!!product.galleryImage7 && (
                    <Slide index={7}>
                      <div>
                        <Image
                          hasMasterSpinner={true}
                          src={product.galleryImage7}
                          alt="Gallery image 7"
                        />
                      </div>
                    </Slide>
                  )}
                </Slider>

                <S.SlideButtons>
                  <ButtonBack
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "1px solid black",
                      marginRight: "5px",
                    }}
                  >
                    <LeftOutlined />
                  </ButtonBack>
                  <ButtonNext
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "1px solid black",
                      marginRight: "5px",
                    }}
                  >
                    <RightOutlined />
                  </ButtonNext>
                </S.SlideButtons>
              </CarouselProvider>
            </div>
          </Col>

          <Col lg={12} md={24} sm={24} xs={24}>
            <S.Container>
              <h1>{product.name}</h1>
              <div style={{ display: "inline-flex" }}>
                {!!product.discountPercentage &&
                  product.discountPercentage !== 0 && (
                    <p
                      style={{
                        marginRight: "10px",
                        textDecoration: "line-through",
                      }}
                    >
                      <strong>₹ {product.originalPrice}</strong>
                    </p>
                  )}

                <p>
                  <strong>
                    ₹{" "}
                    {product.originalPrice -
                      (product.originalPrice * product.discountPercentage) /
                        100}
                  </strong>
                </p>
              </div>

              <p>
                {!!product.discountPercentage &&
                  product.discountPercentage !== 0 &&
                  product.discountPercentage + "% OFF"}
              </p>

              {totalColors !== 0 && (
                <>
                  <p>
                    <strong>Colour</strong>
                  </p>

                  <Radio.Group buttonStyle="outline">
                    {!!product.color2 && (
                      <Radio.Button
                        style={{
                          backgroundColor: product.color1,
                          marginRight: "5px",
                          color: product.color1,
                        }}
                        onChange={(val) => setColour(val.target.value)}
                        value={product.color1}
                      ></Radio.Button>
                    )}

                    {!!product.color2 && (
                      <Radio.Button
                        style={{
                          backgroundColor: product.color2,
                          marginRight: "5px",
                          color: product.color2,
                        }}
                        onChange={(val) => setColour(val.target.value)}
                        value={product.color2}
                      ></Radio.Button>
                    )}

                    {!!product.color3 && (
                      <Radio.Button
                        style={{
                          backgroundColor: product.color3,
                          marginRight: "5px",
                          color: product.color3,
                        }}
                        onChange={(val) => setColour(val.target.value)}
                        value={product.color3}
                      ></Radio.Button>
                    )}

                    {!!product.color4 && (
                      <Radio.Button
                        style={{
                          backgroundColor: product.color4,
                          marginRight: "5px",
                          color: product.color4,
                        }}
                        onChange={(val) => setColour(val.target.value)}
                        value={product.color4}
                      ></Radio.Button>
                    )}

                    {!!product.color5 && (
                      <Radio.Button
                        style={{
                          backgroundColor: product.color5,
                          marginRight: "5px",
                          color: product.color5,
                        }}
                        onChange={(val) => setColour(val.target.value)}
                        value={product.color5}
                      ></Radio.Button>
                    )}

                    {!!product.color6 && (
                      <Radio.Button
                        style={{
                          backgroundColor: product.color6,
                          marginRight: "5px",
                          color: product.color6,
                        }}
                        onChange={(val) => setColour(val.target.value)}
                        value={product.color6}
                      ></Radio.Button>
                    )}

                    {!!product.color7 && (
                      <Radio.Button
                        style={{
                          backgroundColor: product.color7,
                          marginRight: "5px",
                          color: product.color7,
                        }}
                        onChange={(val) => setColour(val.target.value)}
                        value={product.color7}
                      ></Radio.Button>
                    )}
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
              {!!product.inStock && product.inStock === "yes" ? (
                <Button onClick={() => addToCart()}>Add to Cart</Button>
              ) : (
                <>
                  <Button disabled>Out Of Stock</Button>
                  <p style={{ fontSize: 15 }}>
                    Subscribe to our mailing list to get notified!
                  </p>
                </>
              )}

              <br />
              <br />
              <p>
                <strong>About this product</strong>
              </p>
              <p style={{ whiteSpace: "pre-wrap" }}>{product.description}</p>
            </S.Container>
          </Col>
        </Row>
      </S.Container>
    </>
  );
};

export default Product;
