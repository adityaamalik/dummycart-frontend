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
              src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
              style={{ height: "auto", width: "90%" }}
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
