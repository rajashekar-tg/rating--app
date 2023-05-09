import React, { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:4000/getdata")
      .then((res) => res.json())
      .then((info) => setData(info));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>RATING</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => {
            return (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{item.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FetchData;
