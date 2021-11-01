export interface IProduct {
    id: string;
    name: string;
    code: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    // logOutput: () => {console.log('legend')};
}

// export type IProduct = {
//     productId: number;
//     productName: string;
//     productCode: string;
//     releaseDate: string;
//     description: string;
//     price: number;
//     starRating: number;
//     imageUrl: string;
// }

export const PRODUCT_LIST_MOCK: IProduct[] = [
    {
        "id": '1',
        "name": "Leaf Rake",
        "code": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
    },
    {
        "id": '2',
        "name": "Garden Cart",
        "code": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
    }
];
