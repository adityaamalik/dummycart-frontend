import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer, Card, Space } from "antd";
import { withTranslation } from "react-i18next";
import Button from "../../common/Button";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
// const Button = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [visible, setVisibility] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const showChildrenDrawer = () => {
    setVisibility(true);
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall>
          <S.Span href="/categories">{t("categories")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.Span href="/about">{t("about us")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.Span href="/contact">{t("contact")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.Span href="/reviews">{t("reviews")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.Span href="/blogs">{t("blogs")}</S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  const MenuItemRight = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall>
          <S.Span onClick={() => showChildrenDrawer()}>
            <S.CartIcon />
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  const CartItems = () => {
    return (
      <>
        <Space direction="vertical">
          <Card
            bordered={false}
            hoverable
            cover={
              <img
                alt="example"
                src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
              />
            }
          >
            <strong>Product Name</strong>
            <br />
            <span>Price | Quantity</span>
          </Card>
          <Card
            bordered={false}
            hoverable
            cover={
              <img
                alt="example"
                src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
              />
            }
          >
            <strong>Product Name</strong>
            <br />
            <span>Price | Quantity</span>
          </Card>
          <Card
            bordered={false}
            hoverable
            cover={
              <img
                alt="example"
                src="http://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fHwxNjE3NjU4NTM2&ixlib=rb-1.2.1&q=80&w=1080"
              />
            }
          >
            <strong>Product Name</strong>
            <br />
            <span>Price | Quantity</span>
          </Card>
        </Space>
      </>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="100" height="50" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.NotHidden>
            <MenuItemRight />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>

        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <S.Label onClick={onClose}>
              <Col span={12}>
                <S.Menu>Menu</S.Menu>
              </Col>
              <Col span={12}>
                <S.Outline padding="true" />
              </Col>
            </S.Label>
          </Col>
          <MenuItem />
          <MenuItemRight />

          <Drawer
            closable={false}
            onClose={onChildrenDrawerClose}
            visible={childrenDrawer}
          >
            <Space direction="vertical" style={{ textAlign: "center" }}>
              <Button
                onClick={() => {
                  window.location.pathname = "/checkout";
                }}
              >
                Checkout
              </Button>
              <CartItems />
            </Space>
          </Drawer>
        </Drawer>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
