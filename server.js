const express = require('express');
const cors = require("cors");
const { DatabaseSDK } = require('database-sdk');
const app = express();
const { graphqlHTTP } = require('express-graphql');


app.use(cors());

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.get("/api/products", (req, res) => {
    res.json({ message: "Server Running." });
});


const rootProducts = {
    users: async () => {
        return await DatabaseSDK.users.findMany();
    }
}

app.all('/api/products/graphql',
    graphqlHTTP({
        schema: require("./src/graphql/schema/product.schema")['productSchema'],
        rootValue:  rootProducts,
        graphiql: true,
    })
);

const PORT = 8005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. `);
});
