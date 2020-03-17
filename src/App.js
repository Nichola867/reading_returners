import React from 'react';
import './App.css';
import Search from "./Search";
import ReadingList from './ReadingList';
import Headers from './Headers';

class App extends React.Component {

  state = {
    books: [
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
      {
        title: "The Beekeeper's Promise",
        authors: "Fiona Valpy",
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=Kf0LtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        }
      },
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
    const books = this.state.books

    return (
      <div>
        <Search />
        <Headers />
        {books.map(n => {
          return (
            <ReadingList
              thumbnail={n.imageLinks.smallThumbnail}
              title={n.title}
              author={n.authors}
            />
          )
        })}
      </div>
    )
  }
}

export default App;
