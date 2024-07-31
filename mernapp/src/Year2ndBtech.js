import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [page, setPages] = useState(1);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/Data", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    });
    response = await response.json();
    setData(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(filteredData.length / 4) &&
      selectedPage !== page
    ) {
      setPages(selectedPage);
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <form className="d-flex container" style={{ marginTop: "50px", width: "1100px" }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPages(1); }}
        />
      </form>
      {filteredData.length !== 0
        ? filteredData.slice((page - 1) * 4, page * 4).map((data) => {
          return (
            <div key={data._id} className='col-12 col-md-6 col-lg-3'>
              <Card name={data.name} cie={data.CIE1} mid={data.MID} end={data.END} notes={data.notes} />
            </div>
          );
        })
        : <div>No data found</div>
      }

      {filteredData.length > 0 && (
        <div className='pagination' style={{ padding: "10px", margin: "15px 0", display: "flex", justifyContent: "center" }}>
          <span onClick={() => selectPageHandler(page - 1)} style={{ padding: "15px 20px", border: "1px solid", cursor: "pointer" }}>PREV</span>
          {
            [...Array(Math.ceil(filteredData.length / 4))].map((_, i) => {
              return (
                <span
                  className={page === i + 1 ? "bg-success" : ""}
                  onClick={() => selectPageHandler(i + 1)}
                  style={{ padding: "15px 20px", border: "1px solid", cursor: "pointer" }}
                  key={i}
                >
                  {i + 1}
                </span>
              );
            })
          }
          <span onClick={() => selectPageHandler(page + 1)} style={{ padding: "15px 20px", border: "1px solid", cursor: "pointer" }}>NEXT</span>
        </div>
      )}
    </div>
  );
}
