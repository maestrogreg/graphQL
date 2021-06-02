import {buildSchema, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './resolver';

// const FRIENDS = new GraphQLObjectType({
//     name: "FRIENDAS",
//     description:"This is a type that holds my friends object",
//     fields: {
//         firstname:{
//             type: GraphQLString,
//             description: "Put the users firstname"
//         }, 
//         lastname:{
//             type: GraphQLString,
//             description: "Put the users lastname"
//         },
//         age:{
//             type: GraphQLInt,
//             description: "Put the users age"
//         }
//     }
// })
// export default new GraphQLSchema({
//     query: FRIENDS
// })


const typeDefs = (`
    type FRIENDS{
        firstname: String
        lastname: String
        age: Int
        gender: GENDER
        isFriend: [friend]
    }
    enum GENDER{
        MALE
        FEMALE
    }
    type friend{
        name: String
        isFriend: Boolean
    }
    input frnd{
        name: String
        isFriend: Boolean
    }
    type Query{
        friends: [FRIENDS]
        isFriend(friendbool: Boolean!): [friend]
    }
    input FRIEN{
        firstname: String!
        lastname: String!
        age: Int!
        gender: GENDER
        isFriend: [frnd]
    } 
    type Mutation{
        addFriend(input: FRIEN): FRIENDS
        deleteFriend(id: Int): String
    }
`)



export default makeExecutableSchema({typeDefs, resolvers});