import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>Contact</S.Language>
                <S.Large href="tel:9723708470">Call : 9723708470</S.Large>
                <S.Large href="mailto:myindianthingss@gmail.com">
                  Mail : myindianthingss@gmail.com
                </S.Large>
                <S.Para>
                  Having trouble in anything ? Feel free href reach out.
                </S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>Policy</S.Title>
                <S.Large href="/">Application Security</S.Large>
                <S.Large href="/">Software Principles</S.Large>
                <S.Large href="/">Application Security</S.Large>
                <S.Large href="/">Software Principles</S.Large>
                <S.Large href="/">Application Security</S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>About Us</S.Title>
                <S.Para>
                  ​We provide high quality indian products for your home and
                  offices.We provide high quality indian products for your home
                  and offices.We provide high quality indian products for your
                  home and offices.We provide high quality indian products for
                  your home and offices.
                </S.Para>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>ADDRESS</S.Language>
                <S.Para>Rancho Santa Margarita</S.Para>
                <S.Para>2131 Elk Street</S.Para>
                <S.Para>California</S.Para>
              </Col>

              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>Top selling categories</S.Title>
                <S.Large href="/category/123">Category 1</S.Large>
                <S.Large href="/category/123">Category 2</S.Large>
                <S.Large href="/category/123">Category 3</S.Large>
                <S.Large href="/category/123">Category 4</S.Large>
                <S.Large href="/category/123">Category 5</S.Large>
                <S.Large href="/category/123">Category 6</S.Large>
                <S.Large href="/category/123">Category 7</S.Large>
                <S.Large href="/category/123">Category 8</S.Large>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink href="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://github.com/Adrinlol/"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://medium.com/@lashakakabadze/"
                  src="medium.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
