import { GraphQLServer } from "graphql-yoga";
import resolvers from "./Graphql/resolvers";

const server = new GraphQLServer({
    typeDefs : "Graphql/schema.graphql",
    resolvers
})

server.start(() => console.log("GraphQL server start"));

