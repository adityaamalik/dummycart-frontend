import { Row, Col, Carousel, Image, Radio, Input, Button } from "antd";
import * as S from "./styles";

const Product = () => {
  return (
    <>
      <S.Container>
        <Row>
          <Col lg={12} md={24} sm={24} xs={24} style={{ position: "sticky" }}>
            <Carousel autoplay dotPosition="left">
              <div>
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </div>
              <div>
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </div>
              <div>
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </div>
              <div>
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              </div>
            </Carousel>
          </Col>

          <Col lg={12} md={24} sm={24} xs={24}>
            <S.Container>
              <h1>Name</h1>
              <div style={{ display: "inline-flex" }}>
                <p
                  style={{
                    marginRight: "10px",
                    textDecoration: "line-through",
                    fontWeight: "bolder",
                  }}
                >
                  ₹ 2000
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  ₹ 1000
                </p>
              </div>

              <p>Colour</p>
              <Radio.Group buttonStyle="ouline">
                <Radio.Button
                  style={{
                    backgroundColor: "red",
                    marginRight: "5px",
                    color: "black",
                  }}
                  value="red"
                ></Radio.Button>
                <Radio.Button
                  style={{
                    backgroundColor: "blue",
                    marginRight: "5px",
                    color: "black",
                  }}
                  value="blue"
                ></Radio.Button>
                <Radio.Button
                  style={{
                    backgroundColor: "green",
                    marginRight: "5px",
                    color: "black",
                  }}
                  value="green"
                ></Radio.Button>
                <Radio.Button
                  style={{
                    backgroundColor: "black",
                    marginRight: "5px",
                    color: "white",
                  }}
                  value="black"
                ></Radio.Button>
              </Radio.Group>

              <p>Quantity</p>
              <Input type="number" defaultValue="1" />

              <br />
              <br />
              <Button>Add to Cart</Button>
              <br />
              <br />
              <p>About this product</p>
              <p>
                alkjbdfjlkasbdfljkbkjldsbfkjbsdkjfbaksdjbflkjasbdfjkakjhkjhvkjhvjh
                bsdjkfbsdlkjfbalkjsdbfjkbdslfkjbasdbflkjasbdfkjbasdkjfbaldskjbfalj
                ksdbfjklasbdfjklbsdkfljbsdljkbfkjlsdbfkljbdsfjkabdsfjbhjgvjghvjghh
                alkjbdfjlkasbdfljkbkjldsbfkjbsdkjfbaksdjbflkjasbdfjkakjhkjhvkjhvjh
                bsdjkfbsdlkjfbalkjsdbfjkbdslfkjbasdbflkjasbdfkjbasdkjfbaldskjbfalj
                ksdbfjklasbdfjklbsdkfljbsdljkbfkjlsdbfkljbdsfjkabdsfjbhjgvjghvjghh
                alkjbdfjlkasbdfljkbkjldsbfkjbsdkjfbaksdjbflkjasbdfjkakjhkjhvkjhvjh
                bsdjkfbsdlkjfbalkjsdbfjkbdslfkjbasdbflkjasbdfkjbasdkjfbaldskjbfalj
                ksdbfjklasbdfjklbsdkfljbsdljkbfkjlsdbfkljbdsfjkabdsfjbhjgvjghvjghh
                alkjbdfjlkasbdfljkbkjldsbfkjbsdkjfbaksdjbflkjasbdfjkakjhkjhvkjhvjh
                bsdjkfbsdlkjfbalkjsdbfjkbdslfkjbasdbflkjasbdfkjbasdkjfbaldskjbfalj
                ksdbfjklasbdfjklbsdkfljbsdljkbfkjlsdbfkljbdsfjkabdsfjbhjgvjghvjghh
                alkjbdfjlkasbdfljkbkjldsbfkjbsdkjfbaksdjbflkjasbdfjkakjhkjhvkjhvjh
                bsdjkfbsdlkjfbalkjsdbfjkbdslfkjbasdbflkjasbdfkjbasdkjfbaldskjbfalj
                ksdbfjklasbdfjklbsdkfljbsdljkbfkjlsdbfkljbdsfjkabdsfjbhjgvjghvjghh
              </p>
            </S.Container>
          </Col>
        </Row>
      </S.Container>
    </>
  );
};

export default Product;
