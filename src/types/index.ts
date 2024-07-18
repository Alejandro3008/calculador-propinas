export type MenuItem ={
    id:number,
    name:string,
    price:number
}

export type OderItem = MenuItem & {
    quantity: number
}