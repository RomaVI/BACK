import Products from "../schemas/products.schema.js";

class ProductsDAO {

    static async getAll() {
        return Products.find().lean();
    }

    static async getAllWithStock() {
        return Products.find({stock:{$gt:0}}).lean();
    }

    static async getById(id) {
        return Products.findOne({ _id: id }).lean();
    }

    static async add(title, description, photo, price, stock) {
        return new Products({title, description, photo, price, stock}).save();
    }

    static async update(id, data) {
        return Products.findOneAndUpdate({ _id: id }, data);
    }

    static async remove(id) {
        return Products.findByIdAndDelete(id);
    }

}

export default ProductsDAO;
