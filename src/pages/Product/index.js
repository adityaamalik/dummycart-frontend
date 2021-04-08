import { Row, Col, Carousel, Image, Radio } from "antd";
import Button from "../../common/Button";
import Input from "../../common/Input";
import * as S from "./styles";

const Product = () => {
  return (
    <>
      <S.Container>
        <Row>
          <Col lg={12} md={24} sm={24} xs={24}>
            <div style={{ position: "sticky", top: "20px" }}>
              <Carousel autoplay dotPosition="left">
                <div>
                  <Image src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080" />
                </div>
                <div>
                  <Image src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080" />
                </div>
                <div>
                  <Image src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080" />
                </div>
                <div>
                  <Image src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080" />
                </div>
              </Carousel>
            </div>
          </Col>

          <Col lg={12} md={24} sm={24} xs={24}>
            <S.Container>
              <h1>Name Of the Product</h1>
              <div style={{ display: "inline-flex" }}>
                <p
                  style={{
                    marginRight: "10px",
                    textDecoration: "line-through",
                  }}
                >
                  <strong>₹ 2000</strong>
                </p>
                <p>
                  <strong>₹ 1000</strong>
                </p>
              </div>

              <p>
                <strong>Colour</strong>
              </p>
              <Radio.Group buttonStyle="ouline">
                <Radio.Button
                  style={{
                    backgroundColor: "#2E3559",
                    marginRight: "5px",
                    color: "black",
                  }}
                  value="red"
                ></Radio.Button>
                <Radio.Button
                  style={{
                    backgroundColor: "#d9a91a",
                    marginRight: "5px",
                    color: "black",
                  }}
                  value="blue"
                ></Radio.Button>
                <Radio.Button
                  style={{
                    backgroundColor: "#a69b8f",
                    marginRight: "5px",
                    color: "black",
                  }}
                  value="green"
                ></Radio.Button>
                <Radio.Button
                  style={{
                    backgroundColor: "#4287f5",
                    marginRight: "5px",
                    color: "white",
                  }}
                  value="black"
                ></Radio.Button>
              </Radio.Group>

              <p>
                <strong>Quantity</strong>
              </p>
              <Input type="number" value="1" label="Quantity" />

              <br />
              <br />
              <Button>Add to Cart</Button>
              <br />
              <br />
              <p>
                <strong>About this product</strong>
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </S.Container>
          </Col>
        </Row>
      </S.Container>
    </>
  );
};

export default Product;
