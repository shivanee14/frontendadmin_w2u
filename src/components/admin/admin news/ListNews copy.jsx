import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

function ListNews() {

  const news_URL = process.env.REACT_APP_NEWS_URL;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [news,setNews] = useState([])


  const fetchNews= async () => {
    try {
      const response = await axios.get(news_URL);
      setNews(response.data);
      // console.log(response);
    } catch (err) {
      console.log(err.response.data.message || "Error fetching news");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>

          <h3 className=" d-flex justify-content-center mt-4 mb-4">
            News</h3>
          <table className="table table-striped table-hover">
            <thead className="fs-5">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Tile</th>
                <th scope="col">Slug</th>
                <th scope="col">Category</th>
                <th scope="col">Content</th>
                <th scope="col">Click Counter</th>
                <th scope="col">Image</th>
                <th scope="col">Editor</th>
              </tr>
            </thead>
            <tbody>

              {news && 
                news.map((data,index)=>
                 <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td>{data.name}</td>
                <td>
                  <div style={{ height: "50px" }}>
                    <a href={`${domain_URL}${data.image}`} target="_blank">
                      <img
                        className="img-fluid h-100"
                        src={`${domain_URL}${data.image}`}
                        alt=""
                      />
                    </a>
                  </div>
                </td>


                 </tr>
               
                )}
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListNews;
