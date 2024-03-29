import { Image, Row, Col } from "antd";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Blog = (props) => {
  const { d } = props.location.state;

  const [blog, setBlog] = useState({});

  useEffect(() => {
    setBlog(d);
  }, [d]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        {blog.title}
      </h1>
      <S.Container>
        <Row justify="center">
          <Col lg={12} md={24} sm={24} xs={24}>
            {!!blog.image && (
              <Image
                src={blog.image}
                style={{
                  objectFit: "scale-down",
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                }}
              />
            )}
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            {blog.content}
          </Col>
        </Row>
      </S.Container>
    </>
  );
};

export default Blog;
