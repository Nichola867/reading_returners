import React from 'react';

class Results extends React.Component {


  handleAdd = (id) => {
    this.props.handleAddFunc(id)
  }
    
  render() {

    const resultsList = this.props.results.filter(n => {
      return n.inList === false;
    })  
    
    return (   
      <div className="container">

        <div className="row col-headers" >
          <div className="col-1 ">
            <span></span>
          </div>
          <div className="col-3">
            <span>Book Title</span>
          </div>
          <div className="col-2">
            Author
            </div>
        </div>

        {resultsList.map(n => {
          return (
            <div className="row">
              <div className="col-1">
                <img
                  src={n.imageLinks.smallThumbnail}
                  className="results-thumbnail-size"
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
                  className="btn btn-primary add-button"
                  onClick={() => this.handleAdd(n.id)}>
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