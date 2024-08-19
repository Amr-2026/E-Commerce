import productModel from "../models/productModel"

export const getAllProducts = async () => {
    return await productModel.find()
}
export const seedIntialProducts = async() => {
    const products = [
        {title: "Dell Laptop", image: "C:\Users\Administrator\Desktop\meeting room\Saco Rimal\dell laptop image.jpeg", price: 4200, stock: 88},
    ];

    const existingProducts = await getAllProducts()

    if(existingProducts.length === 0){
        await productModel.insertMany(products)
    }
};