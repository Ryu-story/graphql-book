import { getBooks, getUsers, getById, getByUserId, addBook, deleteBook, createUser } from "./db";

const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, { id }) => getById(id),
    users: () => getUsers(),
    user: (_, { id }) => getByUserId(id)
  },
  Mutation: {
    addBook: (_, {title, comment}) => addBook(title, comment),
    deleteBook: (_, {id}) => deleteBook(id),
    createUser: (_, {email, pwd, nickname, birth, gender, created_date, profile_photo}) => createUser(email, pwd, nickname, birth, gender, created_date, profile_photo)
  }
};

export default resolvers;