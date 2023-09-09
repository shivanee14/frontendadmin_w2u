import React, { useState } from 'react';
import axios from 'axios';

const DarshanForm = () => {
  const darshan_URL = process.env.REACT_APP_DARSHAN_TIME_URL;
 
  const [formData, setFormData] = useState({
    temple_name: '',
    session: {
    summer: [{name: "", time: ""}],
    winter: [{name: "", time: ""}],
  }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    //   formData.append("title", title);

    console.log(formData);

    try {
      const response = await axios.post(darshan_URL, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Darshan</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="temple_name">Temple Name:</label>
          <input
            type="text"
            id="temple_name"
            name="temple_name"
            value={formData.temple_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="summer">Summer:</label>
          <textarea
            id="summer"
            name="summer"
            value={formData.summer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="winter">Winter:</label>
          <textarea
            id="winter"
            name="winter"
            value={formData.winter}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DarshanForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from "react-hot-toast";

// function AddDarshanTiming() {
//   const darshan_URL = process.env.REACT_APP_DARSHAN_TIME_URL;
 
//   const [darshanName, setDarshanName] = useState('');
//   // const [session, setSession] = useState({"summer": [{
//   //   "name": ""
//   // }], "winter": []});

//   // console.log("session", session);

//   const handleSubmit = async(e) =>{
//     e.preventDefault();
   
//     // if (darshanName && session) {

//       const formData = new FormData();
//       formData.append('temple_name', darshanName);
//       formData.append('session.summer', [{"name": "name", "time": "2:00 PM"}]);

//       try {
//         const response = await axios.post(darshan_URL, formData, {
//           headers: {
//             // Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         console.log(response)
//         if (response.data) {
//           toast.success("category added successfully");
//           e.target.reset();
//           // setDarshanName("")
//           // setSession(null)
//         }
//       } catch (error) {
//         console.error(error.response || "Something went wrong");

//       }
//     // }
//     // else {
//     //   toast.error("All fields are mandatory.");
//     // }

//   }

//   return (
//     <>

//       <main>
//         <section>
//           <div className="container-fluid">
//             <div className=" row g-2">
//               <div className="col-lg-9">
//                 <div className="card border">
//                   <h3 className="mt-3 text-center">Add Darshan Timing</h3>
//                   <div className="card-body">
//                    <form onSubmit={handleSubmit} >
//                     <div className="mt-3 ">
//                       <label
//                         htmlFor="temple"
//                         className="col-auto  fs-5 col-form-label"
//                       >
//                         Temple
//                       </label>
//                       <input
//                         type="text"
//                         id="temple"
//                         className=" form-control"
//                         aria-labelledby="passwordHelpInline"
//                         placeholder="Which temple are you visitng?"
//                         value ={darshanName}
//                         onChange={(e) => setDarshanName(e.target.value)}
//                       />
//                     </div>
//                     {/* <div className="mt-3   ">
//                       <label
//                         htmlFor="season"
//                         className="col-3 fs-5 col-form-label"
//                       >
//                         Season
//                       </label>
//                       <select
//                         className="col-3 form-select "
//                         id="season"
//                         onChange={(e) => setSession(e.target.value)}
//                         value={session}
//                       >
//                         <option >Season...</option>
//                         <option value="1">Summer</option>
//                         <option value="2">Winter</option>
//                         <option value="3">Monsoon</option>
//                       </select>
//                     </div> */}
//                     <div className="d-flex justify-content-end mt-4">
//                       <button type="submit" className="btn btn-success"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                    </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }

// export default AddDarshanTiming