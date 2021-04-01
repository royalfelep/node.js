const fs = require("fs");
const localdb = __dirname + "/localdb.json";

const generateId = {
    _id: 1,
    get nextId() {
        return this._id++;
    },
};

function updateLocalDB() {
    fs.writeFile(localdb, JSON.stringify(productsList), "utf-8", (err) => {
        if (err) throw err;
        else console.log("Alteração feita com sucesso.");
    });
}

const productsList = {};

function generateProduct(obj) {
    if (!obj.id) {
        obj.id = generateId.nextId;
        productsList[obj.id] = obj;
        updateLocalDB();
        return `Produto criado com sucesso!\n${obj}`;
    }
}

function deleteProduct(id) {
    const deletedProduct = productsList[id];
    delete productsList[id];
    updateLocalDB();
    return `Produto deletado com sucesso!\n${deletedProduct}`;
}

function getProduct(id) {
    return productsList.id;
}

function getAllProducts() {
    return productsList;
}

generateProduct({ obj: "oloco" });

module.exports = {
    generateProduct,
    deleteProduct,
    generateProduct,
    getAllProducts,
};
