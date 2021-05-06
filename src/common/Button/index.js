import * as S from "./styles";

const Button = ({ color, width, height, children, onClick, disabled }) => (
  <S.Button
    color={color}
    width={width}
    onClick={onClick}
    style={{
      height: height,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "unset" : "pointer",
    }}
  >
    {children}
  </S.Button>
);

export default Button;
