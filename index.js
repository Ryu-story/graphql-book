import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import resolvers from "./graphql/resolvers"
const URI = process.env.MONGO_URI || "localhost:27017";
const DB = process.env.MONGO_DB || "testmungo";
const db = mongoose.connection;


const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers
});

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${URI}/${DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    });
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

// mongoose
// .connect(`mongodb://${URI}/${DB}`, {
// useUnifiedTopology: true,
// useNewUrlParser: true,
// })
// .then(() => console.log('DB Connected!'))
// .catch(err => {
// console.log(DB Connection Error: ${err.message});
// });

server.start(() => console.log("Graphql Server Running!"));