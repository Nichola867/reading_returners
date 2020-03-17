import React from 'react';
import './App.css';
import Search from "./Search";
import ReadingList from './ReadingList';
import Headers from './Headers';
import Results from './Results'

class App extends React.Component {

  state = {
    results: [
      {
        title: "The Irresistible Rise of Harry Potter",
        authors: ["Andrew Blake"],
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      },
      {
        title: "Million Love Songs",
        authors: ["Carole Matthews"],
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=e9wsDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      },
      {
        title: "Love Songs to My Brain",
        authors: ["David Joel Orenstein"],
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=NSb_xgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        }
      },
      {
        title: "The Beekeeper's Daughter",
        authors: ["Santa Montefiore"],
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=x3TGBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      },
      // {
      //   title: "The Beekeeper's Promise",
      //   authors: "Fiona Valpy",
      //   imageLinks: {
      //     smallThumbnail: "http://books.google.com/books/content?id=Kf0LtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      //   }
      // },
      // {
      //   title: "The Small Book",
      //   authors: "Jack Trimpey",
      //   imageLinks: {
      //     smallThumbnail: "http://books.google.com/books/content?id=gqg_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
      //   }
      // },
      // {
      //   title: "Small Great Things",
      //   authors: "Jodi Picoult",
      //   imageLinks: {
      //     smallThumbnail: "http://books.google.com/books/content?id=YyKACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
      //   }
      // }
    ],
    saved: [
      {
        title: "The Small Book",
        authors: "Jack Trimpey",
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=gqg_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        }
      },
      {
        title: "Small Great Things",
        authors: "Jodi Picoult",
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=YyKACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    ]
  }

  render() {
    const savedBooks = this.state.saved
    const bookResults = this.state.results

    return (
      <div>
        <Search />

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

          {bookResults.map(n => {
            return (
              <Results
                thumbnail={n.imageLinks.smallThumbnail}
                title={n.title}
                author={n.authors}
              />
            )
          })}
        </div>

        < Headers />


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

          {savedBooks.map(n => {
            return (
              <ReadingList
                thumbnail={n.imageLinks.smallThumbnail}
                title={n.title}
                author={n.authors}
              />
            )
          })}
        </div>
      </div>

    )
  }
}

export default App;



