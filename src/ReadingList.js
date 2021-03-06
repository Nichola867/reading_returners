import React from 'react';

class ReadingList extends React.Component {

  handleDelete = (id) => {
    this.props.handleDeleteFunc(id)
  }


  render() {

    const toReadList = this.props.bookList.filter(n => {
      return n.inList === true
    })

    return (

      <div className="container">

        <div className="row col-headers" >
          <div className="col-2">
            <span></span>
          </div>
          <div className="col-3">
            <span>Book Title</span>
          </div>
          <div className="col-2">
            Author
            </div>
        </div>

        {toReadList.map(n => {
          return (
            <div className="row row-formatting">
              <div className="col-2">
                <img src={n.imageLinks.smallThumbnail}
                  alt='thumbnail'
                  className="reading-list-thumbnail" />
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
                  className="btn btn-primary">
                  Mark as read
                </button>
              </div>

              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.handleDelete(n.id)}
                >
                  Remove from list
                </button>
              </div>

            </div>
          )
        })
        }
      </div >
    )
  }
}

export default ReadingList