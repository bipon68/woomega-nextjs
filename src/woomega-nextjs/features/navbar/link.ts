export const menu = [
  {
    id: "home",
    title: "HOME",
    path: "/",
  },
  {
    id: "shop",
    title: "SHOP",
    path: "/",
  },
  {
    id: "aboutus",
    title: "ABOUT US",
    path: "/page",
  },
  {
    id: "page",
    title: "PAGE",
    path: "/",
    subMenu: [
      { title: "Blog", path: "/blog" },
      { title: "Blog Details", path: "/blog-details" },
    ],
  },
  {
    id: "contact",
    title: "CONTACT",
    path: "/contact",
  },
];
