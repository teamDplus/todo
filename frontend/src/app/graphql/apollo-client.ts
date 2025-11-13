import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const createApolloClient = () => {
  const link = new HttpLink({
    uri: "https://countries.trevorblades.com", // GraphQL サーバーURL
  });

  return new ApolloClient({
    link,                // ← ここが必須
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
