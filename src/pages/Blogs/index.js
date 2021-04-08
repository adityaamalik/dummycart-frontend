import { Card, Row, Col } from "antd";
import * as S from "./styles";

const { Meta } = Card;

const Blogs = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        All Posts
      </h1>
      <S.Container>
        <Card
          onClick={() => (window.location.pathname = "/blog/123")}
          style={{ marginBottom: "10px" }}
          hoverable
        >
          <Row>
            <Col span={8}>
              <img
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                alt="Blog Heading"
                src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
              />
            </Col>
            <Col span={1}></Col>
            <Col span={15}>
              <Meta
                title="Blog Heading"
                description="First few lines of the blog"
              />
            </Col>
          </Row>
        </Card>
      </S.Container>
    </>
  );
};

export default Blogs;
