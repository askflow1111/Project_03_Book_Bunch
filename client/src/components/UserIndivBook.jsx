import React, { Component } from 'react';
import Header from './partials/Header';

class UserBook extends Component {
    constructor(props){
        super(props);
        this.state = {
        user: this.props.user,
        userId: this.props.userId,
        usersBook: [],
        }
        this.getIndivBook = this.getIndivBook.bind(this);
        this.updateUsersBook = this.updateUsersBook.bind(this);
    }

    componentDidMount(){
        this.getIndivBook()
    }

    getIndivBook(isbn){
        console.log(this.state);
        fetch(`/api/users/${this.state.userId}/${this.props.match.params.isbn}`)
        .then((response) => {
            // console.log(response);
            return response.json()
        })
        .then((responseJson) => {
            console.log(responseJson.data.usersBook);
            this.updateUsersBook(responseJson.data.usersBook)
        }); 
    }

    updateUsersBook(book){
        this.setState((prevState) => {
            return {
                usersBook: book,
            }
        })
        console.log('bookstate', this.state);
    }

  render() {
    return (
      <div>
        <Header path1='/' link1='Home' path2='/search' link2='Search' path3='/logout' link3='Logout'/>
        <img src={this.state.usersBook.image_url} alt={this.state.usersBook.title}/>
        <p>Title: {this.state.usersBook.title}</p>
        <p>Author: {this.state.usersBook.author}</p>
        <p>Genre: </p>
        <p>Rating: </p>
        <p>ISBN: {this.props.match.params.isbn}.</p>
        <p>Description: </p>
        <p>Review: </p>
        <p>Status: </p>
        <p>Date Started: </p>
        <p>Date Finished: </p>
      </div>
    );
  }
}

export default UserBook;