const mongoose = require('mongoose');
const Component = require('../Models/Component');

module.exports = async function configDbConnection() {
    const url = process.env.MONGO_URL;
    mongoose.set("strictQuery", false);
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected To Database");
    });
    

}