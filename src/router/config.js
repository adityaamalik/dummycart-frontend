const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/reviews"],
    exact: true,
    component: "Reviews",
  },
  {
    path: ["/blogs"],
    exact: true,
    component: "Blogs",
  },
  {
    path: ["/blog/:id"],
    exact: true,
    component: "Blog",
  },
  {
    path: ["/categories"],
    exact: true,
    component: "Categories",
  },
  {
    path: ["/product/:id"],
    exact: true,
    component: "Product",
  },
  {
    path: ["/category/:id"],
    exact: true,
    component: "Category",
  },
  {
    path: ["/checkout"],
    exact: true,
    component: "Checkout",
  },
];

export default routes;
