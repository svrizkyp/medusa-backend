import { StorePostCustomersReq as MedusaStorePostCustomersReq } from '@medusajs/medusa';
import { StorePostCartsCartReq as MedusaStorePostCartsCartReq } from '@medusajs/medusa';
import { StorePostCartReq as MedusaStorePostCartReq } from '@medusajs/medusa';
import { StorePostCartsCartLineItemsItemReq as MedusaStorePostCartsCartLineItemsItemReq } from '@medusajs/medusa';
import { StorePostCartsCartLineItemsReq as MedusaStorePostCartsCartLineItemsReq } from '@medusajs/medusa';
import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';
import { registerExtendedValidator } from "../utils/register-extended-validator"


export class StorePostCustomersReq extends MedusaStorePostCustomersReq {
    @IsOptional()
    @IsString()
    companyName: string; // In your case it should be companyName
}

export class StorePostCartsCartReq extends MedusaStorePostCartsCartReq {
    @IsOptional()
    @IsString()
    customer_name: string;

    @IsOptional()
    @IsString()
    customer_company_name: string;

    @IsOptional()
    @IsNumber()
    ecommerce_type_id: number;

    @IsOptional()
    @IsBoolean()
    custom_feature: boolean;

    @IsOptional()
    @IsString()
    themes_id: string;
}

export class StorePostCartReq extends MedusaStorePostCartReq {
    @IsOptional()
    @IsString()
    customer_name: string;

    @IsOptional()
    @IsString()
    customer_company_name: string;

    @IsOptional()
    @IsNumber()
    ecommerce_type_id: number;

    @IsOptional()
    @IsBoolean()
    custom_feature: boolean;

    @IsOptional()
    @IsString()
    themes_id: string;
}

export class StorePostCartsCartLineItemsItemReq extends MedusaStorePostCartsCartLineItemsItemReq {
    @IsOptional()
    @IsString()
    note: string; // In your case it should be note
}

export class StorePostCartsCartLineItemsReq extends MedusaStorePostCartsCartLineItemsReq {
    @IsOptional()
    @IsString()
    note: string; // In your case it should be note
}

export default async function () {
  registerExtendedValidator(StorePostCustomersReq)
  registerExtendedValidator(StorePostCartReq)
  registerExtendedValidator(StorePostCartsCartReq)
  registerExtendedValidator(StorePostCartsCartLineItemsReq)
  registerExtendedValidator(StorePostCartsCartLineItemsItemReq)
}