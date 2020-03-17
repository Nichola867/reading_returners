import React from 'react';

class ReadingList extends React.Component {

  render() {
    return (

      <div className="container">
        <div className="row">
          <div classname="col-2">
            <img src = {this.props.thumbnail}
            alt = 'thumbnail' />
          </div>

          <div className="col-4">
            <p>{this.props.title}</p>
          </div>
        </div>        
      </div>
    )
  }
}


export default ReadingList