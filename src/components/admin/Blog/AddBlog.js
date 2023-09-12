import React from 'react'

function AddBlog() {
  const BLOG_API = process.env.REACT_APP_BLOG_URL;

  const [blogTitle, setBlogTitle] = useState("");        // title
  const [desc, setDesc] = useState("");                  // description
  const [image, setImage] = useState(null);              // my-images

  const handleBlog = async () => {

    const formData = new FormData();
    formData.append('title', blogTitle);
    formData.append('description', desc);
    formData.append('my-images', image);    

    try {
      const response = await axios.post(BLOG_API, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
        toast.success("Blog Place Added Successfully");
        console.log("DATA RESPONSE", response.data);
        // setTouristName("");
        // setAddress("");
        // setDesc("");
        // setImage(null);
      }
    }
    catch (error){
      console.error(error);
    }
  }
  
  return (<>
    <Card>
      <Card.Body>
        <h4 className='text-center mt-2 mb-4'>List of Tourist Spots</h4>
        <Form>
          <Form.Label className='my-1' htmlFor="touristName">Blog Title</Form.Label>
          <Form.Control  className='my-1' value={touristName} onChange={(e) => setBlogTitle(e.target.value)} id="touristName" type="text" placeholder="Tourist Name"/> 
          <Form.Label className='my-1' htmlFor="image">Image</Form.Label>
          <Form.Control  className='my-1' onChange={(e) => setImage(e.target.files[0])} id="image" accept="image/gif, image/jpeg, image/png" type="file"  />
          <Form.Label className='my-1' htmlFor="desc">Description</Form.Label>
          <Form.Control  className='my-1' value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" type="text" placeholder="Description" />
        </Form>
        <Button className='my-2' onClick={() => handleBlog()}>Save</Button>
      </Card.Body>
    </Card>
  </>)
}

export default AddBlog