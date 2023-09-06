import React from 'react'

function ListNewsletterUser() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <h3 className="d-flex justify-content-center mt-4 mb-4">
            NewsLetter Users
          </h3>
          <table className="table table-striped table-hover" >

            <thead className="fs-5">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">Subscribed at</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>@mdo</td>
              </tr>

            </tbody>
          </table>



        </div>
      </div>
    </>
  )
}

export default ListNewsletterUser