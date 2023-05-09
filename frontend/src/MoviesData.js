import React, { useState } from "react";
import StarRating from "./StarRating";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/MoviesData.css";
import FetchData from "./FetchData";
function MoviesData() {
  const [data, setData] = useState([
    {
      name: "Teen Wolf",
      Director: "Russell Mulcahy",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Teen_Wolf-_The_Movie_poster.jpg/220px-Teen_Wolf-_The_Movie_poster.jpg",
    },
    {
      name: "John Wick",
      Director: "Chad Stahelski",
      img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/john-wick-1668095706.jpg",
    },
    {
      name: "Ant Man",
      Director: "Michael Douglas",
      img: "https://www.hollywoodreporter.com/wp-content/uploads/2023/02/MCDANMA_WD044-H-2023.jpg?w=1296",
    },
    {
      name: "Black Panther",
      Director: "Ryan Coogler",
      img: "https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480",
    },
    {
      id: 5,
      name: "Wonder Women",
      Director: "Russell Mulcahy",
      img: "https://images.thedirect.com/media/article_full/gal-gadot-wonder-woman-future-dc-reboot.jpg",
    },
    {
      id: 6,
      name: "Thor",
      Director: "Russell Mulcahy",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
    },
  ]);
  return (
    <section>
      <div className=" main">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div
                className=" shadow-lg bg-white effect mb-5"
                style={{
                  width: "330px",
                  padding: "17px",
                  borderRadius: "16px",
                  position: "relative",
                }}
              >
                <span className="effect-item">#{index + 1}</span>
                <div className=" d-flex mt-4">
                  <img
                    src={item.img}
                    width="66px"
                    height="65px"
                    alt="no img"
                    style={{ borderRadius: "150px", marginTop: "2px" }}
                  />
                  <div style={{ marginLeft: "10px", marginTop: "5px" }}>
                    <h6>
                      <span style={{ color: "#8c8c9c" }}>Movie name:</span>
                      <span style={{ color: "#5799ef" }}>{item.name}</span>
                    </h6>
                    <div>
                      <span style={{ color: "#8c8c9c" }}> Director:</span>
                      <span style={{ color: "#5799ef" }}>{item.Director}</span>
                    </div>
                  </div>
                </div>

                <div className=" d-grid">
                  <StarRating data={data} />
                  {/* data={data[0].name} */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FetchData />
    </section>
  );
}

export default MoviesData;
