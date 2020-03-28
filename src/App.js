import React from 'react';
import './App.css';
import axios from "axios";
import Search from "./Search";
import ReadingList from './ReadingList';
import Headers from './Headers';
import Results from './Results'
import fuzzysort from 'fuzzysort'

class App extends React.Component {

  // state = {
  //   books: [
  //     {
  //       id: 1,
  //       title: "The Irresistible Rise of Harry Potter",
  //       authors: ["Andrew Blake"],
  //       imageLinks: {
  //         smallThumbnail: "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  //       },
  //       read: false,
  //       inList: false
  //     },
  //     {
  //       id: 2,
  //       title: "Million Love Songs",
  //       authors: ["Carole Matthews"],
  //       imageLinks: {
  //         smallThumbnail: "http://books.google.com/books/content?id=e9wsDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  //       },
  //       read: false,
  //       inList: false
  //     },
  //     {
  //       id: 3,
  //       title: "Love Songs to My Brain",
  //       authors: ["David Joel Orenstein"],
  //       imageLinks: {
  //         smallThumbnail: "http://books.google.com/books/content?id=NSb_xgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
  //       },
  //       read: false,
  //       inList: false
  //     },
  //     {
  //       id: 4,
  //       title: "The Beekeeper's Daughter",
  //       authors: ["Santa Montefiore"],
  //       imageLinks: {
  //         smallThumbnail: "http://books.google.com/books/content?id=x3TGBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  //       },
  //       read: false,
  //       inList: false
  //     },
  //     {
  //       id: 8,
  //       title: "The Small Book",
  //       authors: "Jack Trimpey",
  //       imageLinks: {
  //         smallThumbnail: "http://books.google.com/books/content?id=gqg_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
  //       },
  //       read: true,
  //       inList: true
  //     },
  //     {
  //       id: 9,
  //       title: "Small Great Things",
  //       authors: "Jodi Picoult",
  //       imageLinks: {
  //         smallThumbnail: "http://books.google.com/books/content?id=YyKACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  //       },
  //       read: false,
  //       inList: true
  //     }
  //   ]
  // }


  state = {
    books: []
  }


  handleSearch = (title) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then((response) => {

        const sortedByRelevance = fuzzysort.go(title, response.data.items, { key: "volumeInfo.title" })

        const searchedBooks = sortedByRelevance
         .map(n => n.obj.volumeInfo)
          .map(n => {    
      console.log(n)
              return {
                thumbnail: n.imageLinks.smallThumbnail,
                title: n.title,
                authors: n.authors,
                id: n.id,
                inList: false
              }    
            
          })

        this.setState({
          books: searchedBooks
        })

      })
      .catch((err) => {
        console.log("Oh ohhh. Could not fetch book", err)
      })
  }


  addBookToList = (ID) => {
    const updatedResultsListAdd = this.state.books.map(n => {
      if (n.id === ID) {
        return {
          ...n,
          inList: true,
        }
      }
      return n
    })

    this.setState({
      books: updatedResultsListAdd
    })
  }

  removeFromBookList = (ID) => {
    const updatedResultsListRemove = this.state.books.map(n => {
      if (n.id === ID) {
        return {
          ...n,
          inList: false
        }
      }
      return n
    })

    this.setState({
      books: updatedResultsListRemove
    })
  }


  render() {
    return (

      <div>
        <Search
          handleSearchFunc={this.handleSearch}
        />
        <Results
          results={this.state.books}
          handleAddFunc={this.addBookToList}
        />

        <Headers />
        <ReadingList
          bookList={this.state.books}
          handleDeleteFunc={this.removeFromBookList}
        />
      </div>
    )
  }
}

export default App;



