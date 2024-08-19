import React from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="content">
      <h1>About</h1>
      <p>
        Welcome to Ålesund Weather, your dedicated weather forecasting app for
        Ålesund, Norway. Our mission is to provide residents and visitors with
        the simple and accurate weather information for the city of Ålesund.{" "}
      </p>

      <p>
        This website is built and maintained by Eirik Imrik. For any inquiries,
        please contact me at eirik.imrik@gmail.com.{" "}
      </p>

      <p>
        If you want to support my work, feel free to buy me a{" "}
        <Link href="https://buymeacoffee.com/eirikimrik"> coffee</Link>
      </p>

      <p>Thank you for visiting Ålesund Weather!</p>
    </div>
  );
};
