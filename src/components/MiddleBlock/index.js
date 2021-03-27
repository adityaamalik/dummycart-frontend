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
              <S.ImageCol>
                <Card
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
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" />
                </Card>
              </S.ImageCol>
              <S.ImageCol>
                <Card
                  onClick={() => {
                    window.location.pathname = "/category/123";
                  }}
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="300px"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" />
                </Card>
              </S.ImageCol>
              <S.ImageCol>
                <Card
                  onClick={() => {
                    window.location.pathname = "/category/123";
                  }}
                  hoverable
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="300px"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="Europe Street beat" />
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
