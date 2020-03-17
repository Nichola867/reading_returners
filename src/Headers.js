import React from 'react';

class Headers extends React.Component {

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-6">
            <span className="reading-list-header">
              My Reading List...
          </span>
          </div>
        </div>

        <div className="row" >
          <div className="col-2">
            <span>Image</span>
          </div>
          <div className="col-4">
            <span>Book Title</span>
          </div>
          <div className="col-2">
            Author
        </div>
          <div className="col-2">
            Mark as Read
        </div>
          <div className="col-2">
            Delete
        </div>
        </div >
      </div>
    )
  }
}

export default Headers