
export interface INavItem {
  dropdown: boolean;
  text: string;
  link: string;
  external?: boolean;
}

export const NavItems: INavItem[] = [
  {
    dropdown: false,
    link: "/what-we-do",
    text: "What We Do"
  },
  {
    dropdown: false,
    link: "https://workshops.nuevofoundation.org",
    text: "Workshops",
    external: true
  },
  {
    dropdown: false,
    link: "/get-involved",
    text: "Get Involved"
  },
  {
    dropdown: false,
    link: "/support-us",
    text: "Support us"
  },
  {
    dropdown: false,
    link: "/blog",
    text: "Event blog"
  },
  {
    dropdown: false,
    link: "/about-us",
    text: "Our team"
  },
  {
    dropdown: false,
    link: "/contact",
    text: "Contact us"
  },

];