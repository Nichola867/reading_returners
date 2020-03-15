import React from 'react';

class Search extends React.Component {

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="form-group">

              <label
                form="Search-header">
                Search by Book Title
              </label>

              <input
                type="text"
                className="form-control"
                id="Input1"
                aria-describedby="Book Title" placeholder="Enter book title" />

            </div>
          </div>


          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary search-button">
              Primary
            </button>
          </div>

        </div>

      </div >
    )


  }
}

export default Search;