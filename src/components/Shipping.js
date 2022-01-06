import { useState } from "react";

export default function Shipping() {
  const [shipping, setShipping] = useState([
    {
      icon: "icon-shipping",
      title: "FREE SHIPPING & RETURNS",
      subtitle: "All Orders Over $99",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisnec vestibulum magna, et dapibus.",
    },
    {
      icon: "icon-money",
      title: "MONEY BACK GUARANTEE",
      subtitle: "Safe & Fast",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisnec vestibulum magna, et dapibus.",
    },
    {
      icon: "icon-support",
      title: "ONLINE SUPPORT",
      subtitle: "Need Assistence?",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisnec vestibulum magna, et dapibus.",
    },
  ]);
  return (
    <section class="bg-grey">
      <div class="container">
        <div class="row">
          {shipping.map((item) => {
            return (
              <div class="col-md-4">
                <div class="info-box">
                  <i class={item.icon}></i>

                  <div class="info-box-content">
                    <h4 class="info-title">{item.title}</h4>
                    <h4 class="info-subtitle">{item.subtitle}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
