/* tslint:disable */
/* eslint-disable */
/**
 * Geins Management API
 *  Geins Management API is an RESTful api to power your applications who manages your geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions.   :::tip Tip With this API, you can build custom applications and integrate with third-party systems, feeds, dashboards and other bussiness logic apps. :::    ## Getting started Once you have created an account, you can start using the Management API by creating an `API key`. You can create as many API keys as you need. Each `API key` is connected to a specific account so you can keep track of operations and manage keys. You can find your `API key` in the `geins merchant center`.   ### Fast track Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.  Or, if you prefer to just take it for a test run:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553?action=collection%2Ffork&collection-url=entityId%3D25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553%26entityType%3Dcollection%26workspaceId%3Da2a179ce-158e-46b0-8d06-e9640f45112c)  ### Authentication Two authentication methods are required:   - `API Key`   - `Basic Auth` #### Basic Auth Basic `<credentials>`, where `<credentials>` is the Base64 encoding of user and password joined by a single colon `:` see [Wikipedia](https://en.wikipedia.org/wiki/Basic_access_authentication) on this subject.  #### API Key  An x-apikey header needs to be added to the request with the user api key from Geins Merchant Center.  #### Example ```bash curl -X GET \"https://mgmtapi.geins.io/Market/List\" \\ -H \"Authorization: Basic [USER-CREDENTIALS-BASE64-ENCODED]\" \\ -H \"X-ApiKey: [SECRET-API-KEY] ``` 
 *
 * The version of the OpenAPI document: v1.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OrderCheckoutOrderRow
 */
export interface OrderCheckoutOrderRow {
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    sku?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    productId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    externalId?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    discountRate?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    cartRowId?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    productContainerBuildId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    articleNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    gtin?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    brand?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderCheckoutOrderRow
     */
    categories?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    variant?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    priceIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    priceExVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    expectedTotalPriceIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    discountIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    discountExVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    expectedTotalDiscountIncVat?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    productUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    weight?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    length?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderCheckoutOrderRow
     */
    campaignIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrderRow
     */
    campaignGroupData?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderCheckoutOrderRow
     */
    campaignNames?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    productPriceCampaignId?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrderRow
     */
    productPriceListId?: number;
}

/**
 * Check if a given object implements the OrderCheckoutOrderRow interface.
 */
export function instanceOfOrderCheckoutOrderRow(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderCheckoutOrderRowFromJSON(json: any): OrderCheckoutOrderRow {
    return OrderCheckoutOrderRowFromJSONTyped(json, false);
}

export function OrderCheckoutOrderRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCheckoutOrderRow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sku': !exists(json, 'Sku') ? undefined : json['Sku'],
        'productId': !exists(json, 'ProductId') ? undefined : json['ProductId'],
        'externalId': !exists(json, 'ExternalId') ? undefined : json['ExternalId'],
        'discountRate': !exists(json, 'DiscountRate') ? undefined : json['DiscountRate'],
        'cartRowId': !exists(json, 'CartRowId') ? undefined : json['CartRowId'],
        'productContainerBuildId': !exists(json, 'ProductContainerBuildId') ? undefined : json['ProductContainerBuildId'],
        'message': !exists(json, 'Message') ? undefined : json['Message'],
        'articleNumber': !exists(json, 'ArticleNumber') ? undefined : json['ArticleNumber'],
        'gtin': !exists(json, 'Gtin') ? undefined : json['Gtin'],
        'brand': !exists(json, 'Brand') ? undefined : json['Brand'],
        'categories': !exists(json, 'Categories') ? undefined : json['Categories'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'variant': !exists(json, 'Variant') ? undefined : json['Variant'],
        'quantity': !exists(json, 'Quantity') ? undefined : json['Quantity'],
        'priceIncVat': !exists(json, 'PriceIncVat') ? undefined : json['PriceIncVat'],
        'priceExVat': !exists(json, 'PriceExVat') ? undefined : json['PriceExVat'],
        'expectedTotalPriceIncVat': !exists(json, 'ExpectedTotalPriceIncVat') ? undefined : json['ExpectedTotalPriceIncVat'],
        'discountIncVat': !exists(json, 'DiscountIncVat') ? undefined : json['DiscountIncVat'],
        'discountExVat': !exists(json, 'DiscountExVat') ? undefined : json['DiscountExVat'],
        'expectedTotalDiscountIncVat': !exists(json, 'ExpectedTotalDiscountIncVat') ? undefined : json['ExpectedTotalDiscountIncVat'],
        'productUrl': !exists(json, 'ProductUrl') ? undefined : json['ProductUrl'],
        'imageUrl': !exists(json, 'ImageUrl') ? undefined : json['ImageUrl'],
        'weight': !exists(json, 'Weight') ? undefined : json['Weight'],
        'height': !exists(json, 'Height') ? undefined : json['Height'],
        'width': !exists(json, 'Width') ? undefined : json['Width'],
        'length': !exists(json, 'Length') ? undefined : json['Length'],
        'campaignIds': !exists(json, 'CampaignIds') ? undefined : json['CampaignIds'],
        'campaignGroupData': !exists(json, 'CampaignGroupData') ? undefined : json['CampaignGroupData'],
        'campaignNames': !exists(json, 'CampaignNames') ? undefined : json['CampaignNames'],
        'productPriceCampaignId': !exists(json, 'ProductPriceCampaignId') ? undefined : json['ProductPriceCampaignId'],
        'productPriceListId': !exists(json, 'ProductPriceListId') ? undefined : json['ProductPriceListId'],
    };
}

export function OrderCheckoutOrderRowToJSON(value?: OrderCheckoutOrderRow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Sku': value.sku,
        'ProductId': value.productId,
        'ExternalId': value.externalId,
        'DiscountRate': value.discountRate,
        'CartRowId': value.cartRowId,
        'ProductContainerBuildId': value.productContainerBuildId,
        'Message': value.message,
        'ArticleNumber': value.articleNumber,
        'Gtin': value.gtin,
        'Brand': value.brand,
        'Categories': value.categories,
        'Name': value.name,
        'Variant': value.variant,
        'Quantity': value.quantity,
        'PriceIncVat': value.priceIncVat,
        'PriceExVat': value.priceExVat,
        'ExpectedTotalPriceIncVat': value.expectedTotalPriceIncVat,
        'DiscountIncVat': value.discountIncVat,
        'DiscountExVat': value.discountExVat,
        'ExpectedTotalDiscountIncVat': value.expectedTotalDiscountIncVat,
        'ProductUrl': value.productUrl,
        'ImageUrl': value.imageUrl,
        'Weight': value.weight,
        'Height': value.height,
        'Width': value.width,
        'Length': value.length,
        'CampaignIds': value.campaignIds,
        'CampaignGroupData': value.campaignGroupData,
        'CampaignNames': value.campaignNames,
        'ProductPriceCampaignId': value.productPriceCampaignId,
        'ProductPriceListId': value.productPriceListId,
    };
}

