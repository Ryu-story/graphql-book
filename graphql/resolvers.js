import { getBooks, getById, addBook, deleteBook } from "./db";

const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, { id }) => getById(id)
  },
  Mutation: {
    addBook: (_, {title, comment}) => addBook(title, comment),
    deleteBook: (_, {id}) => deleteBook(id)
  }
};

export default resolvers;