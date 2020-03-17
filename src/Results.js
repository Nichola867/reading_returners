import React from 'react';

class Results extends React.Component {

  render() {
    return (

      <div className="container">
        
        <div className="row">
          <div className="col-1">
            <img src={this.props.thumbnail}
              className="thumbnail-size"
              alt='thumbnail' />
          </div>

          <div className="col-3">
            <p>{this.props.title}</p>
          </div>

          <div className="col-2">
            <p>{this.props.author}</p>
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary add-button">
              Add
            </button>
          </div>
        </div >
      </div >
    )
  }
}

export default Results