const { gql } = require('apollo-server-express');
import { data } from '../mock_data/mock_data'


export const typeDefs = gql`
      type Contact {
            id:Int
            title: String
            firstName: String
            middleName: String
            lastName: String
      } 
      type Query {
            allContacts: [Contact]
      }
      
      `;

export const resolvers = {
      Query: {
            allContacts: () => {
                  return data
            }
      }
}