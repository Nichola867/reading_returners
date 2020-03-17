import React from 'react';

class Results extends React.Component {

  render() {
    return (

      <div className="container">

        <div className="row" >
          <div className="col-1">
            <span>Image</span>
          </div>
          <div className="col-3">
            <span>Book Title</span>
          </div>
          <div className="col-2">
            Author
            </div>
        </div>

        {this.props.results.map(n => {
          return (
            <div className="row">
              <div className="col-1">
                <img src={n.imageLinks.smallThumbnail}
                  className="thumbnail-size"
                  alt='thumbnail' />
              </div>

              <div className="col-3">
                <p>{n.title}</p>
              </div>

              <div className="col-2">
                <p>{n.authors}</p>
              </div>

              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-primary add-button">
                  Add
                </button>
              </div>
            </div>
          )
        })}
      </div >

    )
  }
}


export default Results