export interface Products {
"id": number,
"title":string,
"price" : number,
"description": string,
"category": string,
"image" :string,
"rating": {
"rate": number,
"count_in_stock": number
}
}
export interface Categories {
    "id": number,
    "title":string,
}
