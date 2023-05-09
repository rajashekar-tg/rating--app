import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function StarRating(props) {
  const star = Array(5).fill(0);
  const [currentValue, setcurrentValue] = useState();
  const [hover, setHover] = useState(undefined);
  const handleClick = (value) => {
    setcurrentValue(value);
  };

  const handleMouseover = (value) => {
    setHover(value);
  };

  const handleMouesleave = (value) => {
    setHover(undefined);
  };
  const saveClick = async () => {
    //console.log(props.data);
    console.log(currentValue);

    let data = {
      rating: currentValue,
    };
    // const res = await fetch("http://localhost:4000/data", {
    //   method: "POST",
    //   body: JSON.stringify(currentValue),
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // });

    // const data = await res.text();
    // console.log(data);

    fetch("http://localhost:4000/postdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <section>
      <div className="d-flex">
        <h6 style={{ marginLeft: "50px", marginTop: "1px", color: "#8c8c9c" }}>
          Rating:
        </h6>
        {star.map((item, index) => {
          return (
            <FaStar
              key={index}
              size={22}
              onClick={() => handleClick(index + 1)}
              color={(hover || currentValue) > index ? "#ffc107" : "#e4e5e9"}
              onMouseOver={() => handleMouseover(index + 1)}
              onMouseLeave={handleMouesleave}
            />
          );
        })}
      </div>
      <div className="d-grid mt-1">
        <button className="btn btn-outline-danger" onClick={saveClick}>
          Save
        </button>
      </div>
    </section>
  );
}

export default StarRating;
