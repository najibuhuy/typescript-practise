export interface infoOrders {
    UserId: number,
    time: string,
    price: number
}

export interface createOrders {
    UserId: number,
    sellerId:number,
    time: string,
    price: number,
    productList: string,
    paymentMethode:string,
    orderStatus:string,
    paymentStatus:string,
    virtualAccount:string
}

export interface virtualAccount {
    UserId: number,
    sellerId:number,
    time: string,
    price: number,
    productList: string,
    paymentMethode:string,
    orderStatus:string,
    paymentStatus:string,
    virtualAccount:string
}