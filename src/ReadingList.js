import React from 'react';

class ReadingList extends React.Component {

  render() {
    return (

      <div className="container">
        <div className="row">
          <div classname="col-2">
            <img src={this.props.thumbnail}
              alt='thumbnail' />
          </div>

          <div className="col-4">
            <p>{this.props.title}</p>
          </div>

          <div className="col-2">
            <p>{this.props.author}</p>
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
      </div>
    )
  }
}


export default ReadingList