import { lazy } from "react";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const Categories = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Categories
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        We provide variety
      </p>
      <MiddleBlock />
    </>
  );
};

export default Categories;
