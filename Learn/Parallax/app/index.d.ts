export interface IndividualPrice{
    "price-type": string,
    value: number
}

export interface Pricing{
    "package-type": string,
    price: IndividualPrice | IndividualPrice[]
}