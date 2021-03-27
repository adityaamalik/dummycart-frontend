import { Card } from "antd";
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
          cover={
            <img
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              alt="Blog Heading"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta
            title="Blog Heading"
            description="First few lines of the blog"
          />
        </Card>
      </S.Container>
    </>
  );
};

export default Blogs;
