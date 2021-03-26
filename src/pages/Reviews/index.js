import { useState } from "react";

import { Avatar, Row, Col, Button, Input, Space, Upload, Image } from "antd";
import { UserOutlined, CameraOutlined } from "@ant-design/icons";
import StarRatings from "react-star-ratings";

import * as S from "./styles";

const { TextArea } = Input;

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showName, setShowName] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Reviews
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        Our happy customers :)
      </p>

      <S.Container>
        <p>
          <span>10</span> Comments
        </p>
      </S.Container>
      <S.Container>
        <Space direction="vertical">
          <Row>
            <Space>
              <Col>
                <Avatar size="large" icon={<UserOutlined />} />
              </Col>
              <Col>
                <TextArea
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                    setShowName(true);
                  }}
                  row="2"
                  cols="200"
                  name="comment"
                  style={{ paddingLeft: "10px" }}
                  placeholder="Leave a message ..."
                />
              </Col>
              <Col>
                <Upload accept="image/png, image/jpeg">
                  <Button icon={<CameraOutlined />}></Button>
                </Upload>
              </Col>
            </Space>
          </Row>
          <Row>
            <Col style={{ marginRight: "48px" }}></Col>
            <Col>
              <StarRatings
                rating={rating}
                starHoverColor="black"
                starRatedColor="#d9a91a"
                changeRating={(r) => {
                  setRating(r);
                  setShowName(true);
                }}
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
            </Col>
          </Row>
          {showName === true ? (
            <Row>
              <Col style={{ marginRight: "48px" }}></Col>
              <Col>
                <Row>
                  <Space>
                    <Col>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </Col>
                    <Col>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail (Optional)"
                      />
                    </Col>
                    <Col>
                      <Button type="primary">Submit</Button>
                    </Col>
                  </Space>
                </Row>
              </Col>
            </Row>
          ) : (
            <></>
          )}
        </Space>
      </S.Container>

      <br />
      <br />
      <br />

      {/* List of all reviews   */}
      <S.Container>
        <Space direction="vertical">
          <Row>
            <Space>
              <Col>
                <Avatar size="large" icon={<UserOutlined />} />
              </Col>
              <Col>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <StarRatings
                  rating={rating}
                  starHoverColor="black"
                  starRatedColor="#d9a91a"
                  numberOfStars={5}
                  starDimension="20px"
                />
              </Col>
            </Space>
          </Row>
          <Row>
            <Col style={{ marginRight: "48px" }}></Col>
            <Col>
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style={{
                  objectFit: "contain",
                  maxWidth: "500px",
                  maxHeight: "300px",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ marginRight: "48px" }}></Col>
            <Col>
              <Row>
                <Space>
                  <Col>
                    <p>Name of the person</p>
                  </Col>
                  <Col></Col>
                  <Col>
                    <p>( Email of the person )</p>
                  </Col>
                </Space>
              </Row>
            </Col>
          </Row>
        </Space>
      </S.Container>
    </>
  );
};

export default Reviews;
