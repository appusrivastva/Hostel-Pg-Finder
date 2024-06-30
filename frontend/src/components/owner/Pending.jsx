import React from "react";
import Table from "react-bootstrap/Table";
import OwnerHeader from "./OwnerHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function Pending() {
  const [view, setView] = useState([]);
  // const [answer,setAnswer]=useState("")
  const [profile, setProfile] = useState({});

  const P_URL = "https://hostel-pg-finder.onrender.com/owner/profile";
  const navigate = useNavigate();

  const [query, setQuery] = useState({ _id: "", answer: "" });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const URL = "https://hostel-pg-finder.onrender.com/owner/viewquery";
  const new_URL = "https://hostel-pg-finder.onrender.com/owner/answerquery";
  useEffect(() => {
    const fetchData = async (e) => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);

      if (!token_data) {
        navigate("/owner_login");
      } else {
        const params = {
          owner_id: token_data,
        };
        try {
          const resp = await axios.get(P_URL, {params});
          console.log(resp)

          setProfile(resp.data);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchData();
  },[]);
 
  useEffect(() => {
    const fetchData = async (e) => {
      const token_data = localStorage.getItem("token_key");
      console.log(`token data is ${token_data}`);

      try {
        const params={owner_id:token_data}
        const resp = await axios.get(URL,{params});
        console.log(resp);

        setView(resp.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(new_URL, query);
      console.log(res);
      console.log(res.data);
      if (res.data.acknowledged) {
        alert("successful");
      }
    } catch (err) {
      console.log(err.message);
    }
    setQuery({ _id: "", answer: "" });
  };

  // textarea handleChange

  const handleChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const onDrawerOpen = (e) => {
    setIsDrawerOpen(true);
    setQuery({ ...query, _id: e._id });
    console.log(query);
    console.log(e);
  };

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <OwnerHeader owner_type={profile.owner_type}/>
      <h1 style={{ textAlign: "center" }}>View Query</h1>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="170">Resolve</th>
            <th width="170">No.</th>
            <th width="170">user_id</th>
            <th width="170">Query</th>
          </tr>
        </thead>
        <tbody>
          {view.map((e, key = 0) => {
            return (
              <tr>
                <td>
                {e.answer===''?  <button
                    className="btn btn-primary"
                    onClick={() => {
                      onDrawerOpen(e);
                    }}
                  >
                    Respond
                  </button>:<p>query solved</p>}
                </td>
                <td>{++key}</td>
                <td>{e.user_id}</td>
                <td>{e.question}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* <button>Answer</button
> */}

      <div
        className=""
        style={{
          width: "300px",
          display: `${isDrawerOpen ? "flex" : "none"}`,
          height: "100vh",
          position: "absolute",
          top: 0,
          right: 0,
          padding: "25px 25px",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <form style={{ width: "100%" }}>
          <div
            data-mdb-input-init
            class="form-outline"
            style={{ width: "100%" }}
          >
            <label
              class="form-label"
              style={{ fontSize: "18px", fontWeight: "500" }}
              for="textAreaExample"
            >
              Answer
            </label>
            <textarea
              class="form-control"
              id="textAreaExample1"
              name="answer"
              rows="4"
              onChange={handleChange}
              value={query.answer}
            ></textarea>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "25px",
            }}
          >
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="btn btn-danger"
              type="reset"
              onClick={onDrawerClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}
