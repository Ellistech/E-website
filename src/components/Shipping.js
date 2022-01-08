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
    <section className="bg-grey">
      <div className="container">
        <div className="row">
          {shipping.map((item) => {
            return (
              <div className="col-md-4">
                <div className="info-box">
                  <i class={item.icon}></i>

                  <div className="info-box-content">
                    <h4 className="info-title">{item.title}</h4>
                    <h4 className="info-subtitle">{item.subtitle}</h4>
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
