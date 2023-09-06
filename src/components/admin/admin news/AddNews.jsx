import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AddNews() {

  const news_URL = process.env.REACT_APP_NEWS_URL;


  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [news_category, setNews_category] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState("");


  function handleEditorChange(event, editor) {
    const data = editor.getData();
    setContent(data);
  }


  const token = localStorage.getItem("accessToken");

  const submitnews = async (e) => {

    e.preventDefault()
    // if (!title || !slug || !news_category || !content || !image || !editor) {
    //   toast.error("All fields are mandatory.");
    // } else {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('content', content);
    formData.append('newsCategory', news_category);
    formData.append('my-images', image);
    formData.append('editor', editor);


    try {
      const response = await axios.post(news_URL, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
      );
      console.log(response.data);
      if (response.data) {
        toast.success("News added successfully");
        // e.target.reset();
        // setTitle("")
        // setContent("")
      }
    } catch (error) {
      console.error(error);
      console.error(error.response || "Something went wrong");

    }
  };

  return (
    <>
    
      <main>
        <section>
          <div className="container-fluid">
            <div className=" row g-2">
              <div className="col-12">
                <div className="card border">
                  <h3 className="mt-3 text-center">Add News</h3>
                  <form onSubmit={submitnews}>
                    <div className="card-body">
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="newsTitle"
                          className=" input-group-text col-auto fs-5 col-form-label"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="newsTitle"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Title of the News"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="inputSlug"
                          className=" input-group-text col-auto  fs-5 col-form-label"
                        >
                          Slug
                        </label>
                        <input
                          type="text"
                          id="inputSlug"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Slug of News"
                          onChange={(e) => setSlug(e.target.value)}

                        />
                      </div>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="inputCategory"
                          className=" input-group-text col-auto  fs-5 col-form-label"
                        >
                          Category
                        </label>
                        <input
                          type="text"
                          id="inputCategory"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Category of News"
                          onChange={(e) => setNews_category(e.target.value)}

                        />
                      </div>

                      <div className="form-group input-group mt-3">
                        <label
                          className="input-group-text  col-3 fs-5  col-form-label"
                          htmlFor="image"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          // name="my-images"
                          className="input-group-text col-9 col-form-label form-control-file"
                          id="image"
                          accept="image/gif, image/jpeg, image/png"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                      <div className="input-group mt-3">
                        <label
                          htmlFor="editor"
                          className="col-3 input-group-text col-auto fs-5 col-form-label"
                        >
                          Editor
                        </label>
                        <input
                          type="text"
                          id="editor"
                          className=" form-control"
                          placeholder="News Editor"
                          onChange={(e) => setEditor(e.target.value)}
                        />
                      </div>
                      <div className=" input-group mt-3">
                        <label
                          htmlFor="content"
                          className=" input-group-text col-auto fs-5 col-form-label"
                        >
                          Content
                        </label>
                        {/* <input
                          type="text"
                          id="content"
                          className=" form-control"
                          aria-labelledby="passwordHelpInline"
                          placeholder="Main content of news"
                          onChange={(e) => setContent(e.target.value)}

                        /> */}

                        <CKEditor
                          editor={ClassicEditor}
                          data="<p>Write something Here!</p>"
                          onChange={handleEditorChange}
                        />
                      </div>

                      <div className="d-flex justify-content-end mt-4">
                        <button type="submit" className="btn btn-success">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  );
}

export default AddNews;
