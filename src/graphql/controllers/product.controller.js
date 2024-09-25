const { DatabaseSDK } = require('database-sdk');
const { productSchema } = require("../schema/product.schema");
const { graphqlHTTP } = require('express-graphql');
const graphqlProducts = async () => {
    try {
        const rootProducts = {
            products: async () => {
                return await DatabaseSDK.users.findMany();
            }
        }
        graphqlHTTP({
            schema: productSchema,
            rootValue: rootProducts,
            graphiql: true,
        });
    }
    catch (e) {
        console.log(e)
    }
}


module.exports = {
    graphqlProducts
}