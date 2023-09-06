import React from "react";
import ReactPaginate from "react-paginate";
function Pagination({ paginate, pageCount }) {
  return (
    <>
      <nav className="my-5" aria-label="navigation">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          onPageChange={paginate}
          pageCount={pageCount}
          breakLabel={"..."}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          containerClassName={
            "pagination justify-content-center d-inline-block d-md-flex"
          }
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </nav>
    </>
  );
}

export default Pagination;
