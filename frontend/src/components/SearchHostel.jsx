import React from "react";
import { useOutletContext } from "react-router-dom";
export default function SearchHostel() {
  const [cityDetail, cityDetail2] = useOutletContext();
  console.log(cityDetail);
  console.log(cityDetail2);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* hostel details */}
        {cityDetail.length &&
          cityDetail.map((e) => {
            return (
              <div className="col">
                <div className="card">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    className="card-img-top"
                    alt="Hollywood Sign on The Hill"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Hostel Name is:{e.name}</h5>
                    <p className="card-text">
                      <h6>owner contact email is {e.email} </h6>
                      <h6>and the contact number is {e.phone}</h6>
                    </p>
                    <h5 className="card-title">
                      Hostel address is:{e.address}
                    </h5>
                    <h5 className="card-title">
                      Hostel type is:{e.hostel_type}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        {/* pg detail */}

        
          {cityDetail2.length &&
            cityDetail2.map((e) => {
              return (
                <div className="col">
                  <div className="card">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                      className="card-img-top"
                      alt="Hollywood Sign on The Hill"
                    />
                    <div className="card-body">
                      <h5 className="card-title">PG Name is:{e.name}</h5>
                      <p className="card-text">
                        <h6>owner contact email is {e.email} </h6>
                        <h6>and the contact number is {e.phone}</h6>
                      </p>
                      <h5 className="card-title">
                        PG address is:{e.address}
                      </h5>
                      <h5 className="card-title">PG type is:{e.pg_type}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
   
    </>
  );
}
