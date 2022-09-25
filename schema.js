import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadResolvers = loadFilesSync(`${__dirname}/**/*.{queries,mutations}.js`);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
