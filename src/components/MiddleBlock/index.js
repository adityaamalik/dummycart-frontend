import { Row, Col, Card } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const { Meta } = Card;

const MiddleBlock = ({ title, t }) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <Col>
            {title && <h6>{t(title)}</h6>}
            <Row type="flex" justify="center">
              <S.ImageCol style={{ marginTop: "10px" }}>
                <Card
                  bordered={false}
                  onClick={() => {
                    if (window.location.href.indexOf("/category") !== -1) {
                      window.location.pathname = "/product/123";
                    } else {
                      window.location.pathname = "/category/123";
                    }
                  }}
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="300px"
                      alt="example"
                      src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
                    />
                  }
                >
                  <Meta
                    title={
                      window.location.href.indexOf("/category") !== -1
                        ? "PRODUCT NAME"
                        : "CATEGORY NAME"
                    }
                  />
                </Card>
              </S.ImageCol>
              <S.ImageCol style={{ marginTop: "10px" }}>
                <Card
                  bordered={false}
                  onClick={() => {
                    window.location.pathname = "/category/123";
                  }}
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="300px"
                      alt="example"
                      src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
                    />
                  }
                >
                  <Meta
                    title={
                      window.location.href.indexOf("/category") !== -1
                        ? "PRODUCT NAME"
                        : "CATEGORY NAME"
                    }
                  />
                </Card>
              </S.ImageCol>
              <S.ImageCol style={{ marginTop: "10px" }}>
                <Card
                  bordered={false}
                  onClick={() => {
                    window.location.pathname = "/category/123";
                  }}
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="300px"
                      alt="example"
                      src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
                    />
                  }
                >
                  <Meta
                    title={
                      window.location.href.indexOf("/category") !== -1
                        ? "PRODUCT NAME"
                        : "CATEGORY NAME"
                    }
                  />
                </Card>
              </S.ImageCol>
            </Row>
          </Col>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
