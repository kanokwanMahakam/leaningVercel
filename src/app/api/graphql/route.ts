// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { createSchema, createYoga } from 'graphql-yoga'

let todos =["todo1", "todo2"];

 
const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        todos:[String]
        todo(idx:Int!):String!
        # !เปรียบเสมือน required
      }

      type Mutation {
          addTodo(todo:String!):String!
          updateTodo(idx:Int!, todo:String!):String!
          deleteTodo(idx:Int!):Int!
      }
    `,
    resolvers: {
      Query: {
        todos: () => todos,
        todo: (_, { idx }) => todos[idx],
      },
    //   Mutation 
    Mutation:{
        addTodo: (_, { todo }) => {
        todos.push(todo)
        return todo
      },
      updateTodo: (_, { idx, todo }) => {
        todos[idx] = todo
        return todo
      },
      deleteTodo: (_, { idx }) => {
        
        todos.splice(idx, 1)
        return idx
      }
    }
    }
  }),
 
  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',
 
  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response }
})
 
export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }