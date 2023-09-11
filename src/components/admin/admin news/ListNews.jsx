
import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

function ListNews() {

  const news_URL = process.env.REACT_APP_NEWS_URL;
  // const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [news, setNews] = useState([])
  const [show, setShow] = useState(false);

  const fetchNews = async () => {
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


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${news_URL}/${id}`);
      fetchNews();
    } catch (err) {
      console.error(err.response || "Error deleting news");
    }
  };


  const [newsid, setnewsid] = useState("");
  const [newsName, setnewsName] = useState("");
  const [slugName, setslugName] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [newsContent, setnewsContent] = useState("");
  const [newsEditor, setnewsEditor] = useState("");
  const [newsImage, setnewsImage] = useState(null);
  const [newsHeadline, setNewsHeadline] = useState("");
  const [newsSubHeading, setNewsSubHeading] = useState("");

  const handleEdit = async (id,name,slug,catname,content,editor) => {
    setShow(true);
    setnewsid(id);
    setnewsName(name);
    setslugName(slug);
    setcategoryName(catname);
    setnewsContent(content);
    setnewsEditor(editor);
  };
  const confirmUpdate = async (e) => {
    e.preventDefault();

    if (newsid && newsName && slugName && categoryName && newsContent && newsImage && newsEditor ) {
      const formData = new FormData();
      formData.append("title", newsName);
      formData.append("slug", slugName);
      formData.append("newsCategory", categoryName);
      formData.append("content", newsContent);
      formData.append("my-images", newsImage);
      formData.append("newsEditor", newsEditor);
      formData.append("headline_news", newsHeadline);
      formData.append("subhading_discription", newsSubHeading);
      // formData.append("editor", newsEditor);
      // formData.append("editor", newsEditor);
      try {
        const response = await axios.put(`${news_URL}/${newsid}`, formData, {
          headers: {
            // Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          toast.success("news added successfully");
          e.target.reset();  
          fetchNews();
          setShow(false);
          setnewsName("");
          setslugName("");
          setcategoryName("");
          setnewsContent("");
          setnewsImage(null);
          setnewsEditor("");
          setNewsSubHeading("");
          setNewsHeadline("");
        }
      } catch (error) {
        console.error(error.response || "Something went wrong");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

 
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
                {/* <th scope="col">Click Counter</th> */}
                <th scope="col">Image</th>
                <th scope="col">Editor</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>

              {news &&
                news.map((data, index) =>
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{data.title}</td>
                    <td>{data.slug}</td>
                    <td>{data.newsCategory}</td>
                    <td>{data.content}</td>
                    <td>
                      <div style={{ height: "50px" }}>

                        <a href={`${data.thumbnailImage}`} target="_blank">

                          <img
                            className="img-fluid h-100"
                            src={`${data.thumbnailImage}`}
                            alt=""
                          />

                        </a>
                      </div>
                    </td>

                    <td>{data.newsEditor}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-light btn-round mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                          onClick={() => {
                            const deletecategory =
                              window.confirm("Delete news?");
                            if (deletecategory) {
                              handleDelete(data._id);
                            }
                          }}
                        >
                          <i className="bi bi-trash" />
                        </button>
                        <button
                          className="btn btn-light btn-round mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Edit"
                          onClick={() => handleEdit(data._id,data.title,data.slug,data.newsCategory,data.content,data.newsEditor)}
                        >
                          <i className="bi bi-pencil-square" />
                        </button>
                      </div>
                    </td>

                  </tr>

                )}

            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={confirmUpdate}>
            <div className="mb-3">
              <label htmlFor="newsName" className="form-label">
                Title
              </label>
              <input
                className="form-control"
                id="newsName"
                type="text"
                placeholder="Title Name"
                value={newsName}
                onChange={(e) => setnewsName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newsHeadline" className="form-label">
              News Headline
              </label>
              <input
                className="form-control"
                id="newsHeadline"
                type="text"
                placeholder="News Headline"
                value={newsHeadline}
                onChange={(e) => setNewsHeadline(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newsSubHeading" className="form-label">
              News SubHeading
              </label>
              <input
                className="form-control"
                id="newsSubHeading"
                type="text"
                placeholder="News SubHeading"
                value={newsSubHeading}
                onChange={(e) => setNewsSubHeading(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="slugName" className="form-label">   
                Slug
              </label>
              <input
                className="form-control"
                id="slugName"
                type="text"
                placeholder="Slug Name"
                value={slugName}
                onChange={(e) => setslugName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="newsName" className="form-label">
                Category
              </label>
              <input
                className="form-control"
                id="newsName"
                type="text"
                placeholder="Categorye Name"
                value={categoryName}
                onChange={(e) => setcategoryName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="newsName" className="form-label">
                News Content
              </label>
              <input
                className="form-control"
                id="newsName"
                type="text"
                placeholder="News Content"
                value={newsContent}
                onChange={(e) => setnewsContent(e.target.value)}
              />
            </div>

            <div className="col-md-12 position-relative">
              <h6 className="my-2">Add Image</h6>
              <label
                className="w-100"
                htmlFor="image"
                style={{ cursor: "pointer" }}
              >
                <input
                  className="form-control stretched-link"
                  type="file"
                  name="my-images"
                  id="image"
                  accept="image/gif, image/jpeg, image/png"
                  onChange={(e) => setnewsImage(e.target.files[0])}
                />
              </label>
              
            </div>

            
            <div className="mb-3">
              <label htmlFor="newsName" className="form-label">
                Editor
              </label>
              <input
                className="form-control"
                id="newsName"
                type="text"
                placeholder="Editor Name"
                value={newsEditor}
                onChange={(e) => setnewsEditor(e.target.value)}
              />
            </div>     
           
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-outline-success me-2">
                Create News
              </button>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="btn btn-outline-success"
              >
                close
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default ListNews;
