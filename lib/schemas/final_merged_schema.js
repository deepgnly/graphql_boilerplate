
import { makeExecutableSchema } from 'apollo-server-express';

import {
      typeDefs as Contact,
      resolvers as ContactResolvers,
} from './contact';

//Add other resolves and 

export default makeExecutableSchema({
      typeDefs: [Contact],
      resolvers: [ContactResolvers]
});