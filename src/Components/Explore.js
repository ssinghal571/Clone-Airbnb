import React from "react";
import "../CssFiles/Explore.css";
import Live from "./Live";

function Explore() {
  return (
    <div>
      <h2 className="heading">Live anywhere</h2>
      <div className="explore">
        <Live
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
          title="Entire Homes"
        />
        <Live
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
          title="Unique Stays"
        />
        <Live
          src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720"
          title="Cabins and cottages"
        />
        <Live
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"
          title="Pets allowed"
        />
      </div>
    </div>
  );
}

export default Explore;
