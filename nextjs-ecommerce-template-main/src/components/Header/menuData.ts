import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Populärt",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Butik",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Kontakt",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "Sidor",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Shop Without Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Kassa",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Varukorg",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Önskelista",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Logga in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Registrera dig",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "Mitt konto",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        title: "Kontakt",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "fel",
        newTab: false,
        path: "/fel",
      },
      {
        id: 63,
        title: "Meddelande skickat",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 7,
    title: "Blogg",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Blogg med sidofält",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Bloggöversikt",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        title: "Blogginlägg med sidofält",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        title: "Bloginlägg",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
