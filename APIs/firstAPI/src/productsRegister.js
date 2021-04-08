const fs = require("fs");
const localdb = __dirname + "/localdb.json";
const productsList = {};
const generateId = { _id: 1 }

function updateLocalDB() {
    fs.writeFile(localdb, JSON.stringify(productsList), "utf-8", (err) => {
        if (err) throw err;
        else console.log("Localdb changes saved.");
    });
}

function generateProduct(obj) {
    if (obj.id == undefined) {
        //console.log(`before: ${generateId._id}`)
        obj.id = generateId._id
        productsList[obj.id] = obj;
        generateId._id = Object.keys(productsList).length + 1
        //console.log(`after: ${generateId._id}`)
        updateLocalDB();
        return `New product created successfully!`;
    }
    else return `New product creation failed.`
}

function updateProduct(obj) {
    if (obj.id) {
        console.log(obj.id)
        productsList[obj.id] = obj;
        updateLocalDB();
        return `Product ${obj.id} updated successfully!`;
    } else `Invalid Product ID.`
}

function deleteProduct(id) {
    if (id) {
        generateId._id = id
        delete productsList[id];
        updateLocalDB();
        return `Product id(${id}) deleted successfully!`;
    } else `Invalid Product ID.`
}

function getProduct(id) {
    if (productsList[id]) return productsList[id];
    else return `Invalid Product ID.`
}

function getAllProducts() {
    if (Object.keys(productsList).length === 0) return `Empty list.`
    else return productsList;
}

module.exports = {
    generateProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
};
