import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./customBreadCrumb.styles.scss";
import Link from "next/link";

const defaultItems: Item[] = [
  { name: "Educify", url: "/" },
  { name: "Categories", url: "/categories" },
  { name: "Maths", url: "/subject" },
  { name: "Algebar", url: "/subject" },
  { name: "Guy Hawking", url: "/tutor/1" },
];
interface Item {
  name: string;
  url: string;
}
const CustomBreadCrumb = ({ items = defaultItems }: { items: Item[] }) => {
  return (
    <div className="custom_breadcrumb">
      {items.map((item, i) => (
        <div className="breadcrumb_item" key={item.name}>
          <Link href={item.url}>
            <span>{item.name}</span>
            {i !== items.length - 1 && <MdKeyboardArrowRight />}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CustomBreadCrumb;
