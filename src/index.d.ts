export declare module "@medusajs/medusa/dist/models/product" {
  declare interface Product {
    customAttribute: string;
  }
}

export declare module "@medusajs/medusa/dist/models/customer" {
  declare interface Customer {
    companyName: string;
  }
}

export declare module "@medusajs/medusa/dist/models/cart" {
  declare interface Cart {
    ecommerce_type_id: number;
  	customer_name: string;
  	customer_company_name: string;
  	custom_feature: boolean;
  	themes_id: string;
  }
}

export declare module "@medusajs/medusa/dist/models/line-item" {
  declare interface LineItem {
    note: string;
  }
}