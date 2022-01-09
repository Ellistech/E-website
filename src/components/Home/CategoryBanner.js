import { useState } from "react";

export default function Category() {
  const [category, setCategory] = useState([
    {
      icon: "icon-category-fashion",
      title: "Fashion",
    },
    {
      icon: "icon-category-electronics",
      title: "Electronics",
    },
    {
      icon: "icon-gift",
      title: "Gift",
    },
    {
      icon: "icon-category-garden",
      title: "Garden",
    },
    {
      icon: "icon-category-music",
      title: "Music",
    },
    {
      icon: "icon-category-motors",
      title: "Motors",
    },
  ]);

  return (
    <section className="categories-container">
      <div
        className="container categories-carousel owl-carousel owl-theme"
        data-toggle="owl"
        data-owl-options="{
            'loop' : false,
            'margin': 30,
            'nav': false,
            'dots': true,
            'autoHeight': true,
            'responsive': {
              '0': {
                'items': 2,
                'margin': 0
              },
              '576': {
                'items': 3
              },
              '768': {
                'items': 4
              },
              '992': {
                'items': 5
              },
              '1200': {
                'items': 6
              }
            }
        }"
      >
        {category.map((item) => {
          return (
            <div className="category">
              <i class={item.icon}></i>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
