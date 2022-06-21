import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4o5k2xz0mnq01xidc5zfjce/master',
    cache: new InMemoryCache()
});