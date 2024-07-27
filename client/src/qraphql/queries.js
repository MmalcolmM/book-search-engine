import { gql } from '@apollo/client';

// Queries
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        description
        title
        forSale
        link
      }
    }
  }
`;

// Mutations
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
      _id
      username
      savedBooks {
        bookId
        authors
        image
        description
        title
        forSale
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
        authors
        image
        description
        title
        forSale
        link
      }
    }
  }
`;
