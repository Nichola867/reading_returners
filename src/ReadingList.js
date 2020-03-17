import React from 'react';

class ReadingList extends React.Component {


  render() {
    return (

      <div className="container">

        <div className="row col-headers" >
          <div className="col-2">
            <span>Image</span>
          </div>
          <div className="col-4">
            <span>Book Title</span>
          </div>
          <div className="col-2">
            Author
            </div>
        </div>

        {this.props.bookList.map(n => {
          return (
            <div className="row">
              <div className="col-2">
                <img src={n.imageLinks.smallThumbnail}
                  alt='thumbnail'
                  className="reading-list-thumbnail" />
              </div>

              <div className="col-4">
                <p>{n.title}</p>
              </div>

              <div className="col-2">
                <p>{n.authors}</p>
              </div>

              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-primary">
                  Mark as read
                </button>
              </div>

              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-primary">
                  Delete
              </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ReadingList