export class Barcode {
    _id: string;
    date: string;
    businessLocation: string;
    inboundScan: string;
    outboundScan: string;
    internalScan: string;
    active: boolean;
}


export class Inventory {
    _id: string;
    date: string;
    businessLocation: string;
    productId: string;
    productName: string;
    categoryId: string;
    categoryName: string;
    inboundScan: string;
    outboundScan: string;
    internalScan: string;
    active: boolean;
}

export class FrequentLevel1 {
    _id: string;
    date: string;
    productId: string;
    productName: string;
    active: boolean;
}

export class FrequentLevel2 {
    _id: string;
    date: string;
    productId: string;
    productName: string;
    active: boolean;
}
export class FrequentLevel3 {
    _id: string;
    date: string;
    productId: string;
    productName: string;
    active: boolean;
}

export class CommonProduct {
    _id: string;
    productId: string;
    productName: string;
    cpsPercent: string;
    active: boolean;
}

export class ProductRelation {
    _id: string;
    productId: string;
    productName: string;
    rpsPercent: string;
    active: boolean;
}