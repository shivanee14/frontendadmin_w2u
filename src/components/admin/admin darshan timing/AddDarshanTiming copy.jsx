import React from 'react'

function AddDarshanTiming() {
  return (
    <>

      <main>
        <section>
          <div className="container-fluid">
            <div className=" row g-2">
              <div className="col-lg-9">
                <div className="card border">
                  <h3 className="mt-3 text-center">Add Darshan Timing</h3>
                  <div className="card-body">

                    <div className=" input-group mt-3 ">
                      <label
                        html htmlFor="temple"
                        className=" input-group-text col-auto  fs-5 col-form-label"
                      >
                        Temple
                      </label>
                      <input
                        type="text"
                        id="temple"
                        className=" form-control"
                        aria-labelledby="passwordHelpInline"
                        placeholder="Which temple are you visitng?"
                      />
                    </div>
                    <div className="input-group mt-3   ">
                      <label
                        htmlFor="season"
                        className="input-group-text col-3 fs-5 col-form-label"
                      >
                        Season
                      </label>
                      <select
                        className="col-3 form-select "
                        id="season"
                      >
                        <option selected>Season...</option>
                        <option value="1">Summer</option>
                        <option value="2">Winter</option>
                        <option value="3">Monsoon</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <button type="submit" className="btn btn-success"
                      >
                        Submit
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AddDarshanTiming