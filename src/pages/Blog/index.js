import { Image, Row, Col } from "antd";
import * as S from "./styles";

const Blog = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Blog Heading
      </h1>
      <S.Container>
        <Row justify="center">
          <Col lg={12} md={24} sm={24} xs={24}>
            <Image
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              style={{ height: "400px", width: "auto" }}
            />
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            lkdflalnsdkjnflakjsdnflakjdnsfjkn
          </Col>
        </Row>
      </S.Container>
    </>
  );
};

export default Blog;
