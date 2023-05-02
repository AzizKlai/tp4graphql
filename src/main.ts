import { createServer } from "node:http";
import { createPubSub, createSchema, createYoga } from "graphql-yoga";
import { Query } from "./resolvers/Query";
import { Cv} from "./resolvers/Cv";
import { User } from "./resolvers/User";
import { Skill } from "./resolvers/Skill";
import { Subscription } from "./resolvers/Subscription";
import { db } from "./db/db";
import { createContext } from "node:vm";
import { Mutation } from "./resolvers/Mutation";

const CV_UPDATED = 'CV_UPDATED';
const CV_DELETED = 'CV_DELETED';
const CV_ADDED = 'CV_ADDED';
const pubSub = createPubSub();

//import { schema } from "./schema";
//import { context } from "./context";
const fs = require("fs");
const path = require("path");
const schema = createSchema({
typeDefs: fs.readFileSync(
path.join(__dirname, "schema/schema.graphql"),
"utf-8"
),
resolvers: {
    Subscription,
    Query,
    Cv,
    User,
    Skill,
    Mutation,
    },    
 
     
});
const context=createContext({db,pubSub}); //*******************************
const yoga = createYoga({  schema,context
});

const server = createServer(yoga);
server.listen(4000, () => {
console.info(`
Server is running on
http://localhost:4000/graphql`
);
});
