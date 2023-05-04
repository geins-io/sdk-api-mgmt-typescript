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
import type { MarketModelsMarket } from './MarketModelsMarket';
import {
    MarketModelsMarketFromJSON,
    MarketModelsMarketFromJSONTyped,
    MarketModelsMarketToJSON,
} from './MarketModelsMarket';
import type { ProductModelsWriteProductItem } from './ProductModelsWriteProductItem';
import {
    ProductModelsWriteProductItemFromJSON,
    ProductModelsWriteProductItemFromJSONTyped,
    ProductModelsWriteProductItemToJSON,
} from './ProductModelsWriteProductItem';
import type { ProductParameterModelsWriteProductParameterValue } from './ProductParameterModelsWriteProductParameterValue';
import {
    ProductParameterModelsWriteProductParameterValueFromJSON,
    ProductParameterModelsWriteProductParameterValueFromJSONTyped,
    ProductParameterModelsWriteProductParameterValueToJSON,
} from './ProductParameterModelsWriteProductParameterValue';
import type { SharedModelsLocalizableContent } from './SharedModelsLocalizableContent';
import {
    SharedModelsLocalizableContentFromJSON,
    SharedModelsLocalizableContentFromJSONTyped,
    SharedModelsLocalizableContentToJSON,
} from './SharedModelsLocalizableContent';
import type { VariantModelsWriteVariant } from './VariantModelsWriteVariant';
import {
    VariantModelsWriteVariantFromJSON,
    VariantModelsWriteVariantFromJSONTyped,
    VariantModelsWriteVariantToJSON,
} from './VariantModelsWriteVariant';

/**
 * A product.
 * @export
 * @interface ProductModelsWriteProduct
 */
export interface ProductModelsWriteProduct {
    /**
     * The article number of the product.
     * @type {string}
     * @memberof ProductModelsWriteProduct
     */
    articleNumber?: string;
    /**
     * The localized names of the product.
     * @type {Array<SharedModelsLocalizableContent>}
     * @memberof ProductModelsWriteProduct
     */
    names?: Array<SharedModelsLocalizableContent>;
    /**
     * The current state of the product.
     * @type {boolean}
     * @memberof ProductModelsWriteProduct
     */
    active?: boolean;
    /**
     * The purchase price in the currency defined in {Carismar.MgmtAPI.Features.Product.Models.Write.Product.PurchasePriceCurrency}.
     * @type {number}
     * @memberof ProductModelsWriteProduct
     */
    purchasePrice?: number;
    /**
     * The 3-letter ISO 4217 currency code for the amount given in {Carismar.MgmtAPI.Features.Product.Models.Write.Product.PurchasePrice}.
     * @type {string}
     * @memberof ProductModelsWriteProduct
     */
    purchasePriceCurrency?: string;
    /**
     * Localized short texts for the product.
     * @type {Array<SharedModelsLocalizableContent>}
     * @memberof ProductModelsWriteProduct
     */
    shortTexts?: Array<SharedModelsLocalizableContent>;
    /**
     * Localized long texts for the product.
     * @type {Array<SharedModelsLocalizableContent>}
     * @memberof ProductModelsWriteProduct
     */
    longTexts?: Array<SharedModelsLocalizableContent>;
    /**
     * Localized tech texts for the product.
     * @type {Array<SharedModelsLocalizableContent>}
     * @memberof ProductModelsWriteProduct
     */
    techTexts?: Array<SharedModelsLocalizableContent>;
    /**
     * The brand of the product.
     * @type {number}
     * @memberof ProductModelsWriteProduct
     */
    brandId?: number;
    /**
     * The supplier id of the product.
     * @type {number}
     * @memberof ProductModelsWriteProduct
     */
    supplierId?: number;
    /**
     * The items belonging to the product.
     * @type {Array<ProductModelsWriteProductItem>}
     * @memberof ProductModelsWriteProduct
     */
    items?: Array<ProductModelsWriteProductItem>;
    /**
     * The category ids the product belongs to.
     * @type {Array<number>}
     * @memberof ProductModelsWriteProduct
     */
    categoryIds?: Array<number>;
    /**
     * The parameter values associated with the product.
     * @type {Array<ProductParameterModelsWriteProductParameterValue>}
     * @memberof ProductModelsWriteProduct
     */
    parameterValues?: Array<ProductParameterModelsWriteProductParameterValue>;
    /**
     * The variants for this product.
     * @type {Array<VariantModelsWriteVariant>}
     * @memberof ProductModelsWriteProduct
     */
    variants?: Array<VariantModelsWriteVariant>;
    /**
     * The markets for this product
     * @type {Array<MarketModelsMarket>}
     * @memberof ProductModelsWriteProduct
     */
    markets?: Array<MarketModelsMarket>;
    /**
     * ID of freight class
     * @type {number}
     * @memberof ProductModelsWriteProduct
     */
    freightClassId?: number;
    /**
     * Intrastat code of the product
     * @type {string}
     * @memberof ProductModelsWriteProduct
     */
    intrastatCode?: string;
    /**
     * Country of orgin of product
     * @type {string}
     * @memberof ProductModelsWriteProduct
     */
    countryOfOrigin?: string;
    /**
     * ID of Variant Group to whom the product should be associated
     * @type {number}
     * @memberof ProductModelsWriteProduct
     */
    variantGroupId?: number;
    /**
     * ID or rate of VAT (On create and if no VAT is provided then default VAT will be used)
     * @type {number}
     * @memberof ProductModelsWriteProduct
     */
    vat?: number;
    /**
     * Defines how VAT parameter should be interpreted
     * Actual = VAT parameter is interpreted as VAT rate
     * VatId = VAT parameter is interpreted as VAT Id
     * @type {string}
     * @memberof ProductModelsWriteProduct
     */
    vatType?: string;
    /**
     * External Id of the product.
     * @type {string}
     * @memberof ProductModelsWriteProduct
     */
    externalId?: string;
    /**
     * Activation date for the product.
     * @type {Date}
     * @memberof ProductModelsWriteProduct
     */
    activationDate?: Date;
}

/**
 * Check if a given object implements the ProductModelsWriteProduct interface.
 */
export function instanceOfProductModelsWriteProduct(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsWriteProductFromJSON(json: any): ProductModelsWriteProduct {
    return ProductModelsWriteProductFromJSONTyped(json, false);
}

export function ProductModelsWriteProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsWriteProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'articleNumber': !exists(json, 'ArticleNumber') ? undefined : json['ArticleNumber'],
        'names': !exists(json, 'Names') ? undefined : ((json['Names'] as Array<any>).map(SharedModelsLocalizableContentFromJSON)),
        'active': !exists(json, 'Active') ? undefined : json['Active'],
        'purchasePrice': !exists(json, 'PurchasePrice') ? undefined : json['PurchasePrice'],
        'purchasePriceCurrency': !exists(json, 'PurchasePriceCurrency') ? undefined : json['PurchasePriceCurrency'],
        'shortTexts': !exists(json, 'ShortTexts') ? undefined : ((json['ShortTexts'] as Array<any>).map(SharedModelsLocalizableContentFromJSON)),
        'longTexts': !exists(json, 'LongTexts') ? undefined : ((json['LongTexts'] as Array<any>).map(SharedModelsLocalizableContentFromJSON)),
        'techTexts': !exists(json, 'TechTexts') ? undefined : ((json['TechTexts'] as Array<any>).map(SharedModelsLocalizableContentFromJSON)),
        'brandId': !exists(json, 'BrandId') ? undefined : json['BrandId'],
        'supplierId': !exists(json, 'SupplierId') ? undefined : json['SupplierId'],
        'items': !exists(json, 'Items') ? undefined : ((json['Items'] as Array<any>).map(ProductModelsWriteProductItemFromJSON)),
        'categoryIds': !exists(json, 'CategoryIds') ? undefined : json['CategoryIds'],
        'parameterValues': !exists(json, 'ParameterValues') ? undefined : ((json['ParameterValues'] as Array<any>).map(ProductParameterModelsWriteProductParameterValueFromJSON)),
        'variants': !exists(json, 'Variants') ? undefined : ((json['Variants'] as Array<any>).map(VariantModelsWriteVariantFromJSON)),
        'markets': !exists(json, 'Markets') ? undefined : ((json['Markets'] as Array<any>).map(MarketModelsMarketFromJSON)),
        'freightClassId': !exists(json, 'FreightClassId') ? undefined : json['FreightClassId'],
        'intrastatCode': !exists(json, 'IntrastatCode') ? undefined : json['IntrastatCode'],
        'countryOfOrigin': !exists(json, 'CountryOfOrigin') ? undefined : json['CountryOfOrigin'],
        'variantGroupId': !exists(json, 'VariantGroupId') ? undefined : json['VariantGroupId'],
        'vat': !exists(json, 'Vat') ? undefined : json['Vat'],
        'vatType': !exists(json, 'VatType') ? undefined : json['VatType'],
        'externalId': !exists(json, 'ExternalId') ? undefined : json['ExternalId'],
        'activationDate': !exists(json, 'ActivationDate') ? undefined : (new Date(json['ActivationDate'])),
    };
}

export function ProductModelsWriteProductToJSON(value?: ProductModelsWriteProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ArticleNumber': value.articleNumber,
        'Names': value.names === undefined ? undefined : ((value.names as Array<any>).map(SharedModelsLocalizableContentToJSON)),
        'Active': value.active,
        'PurchasePrice': value.purchasePrice,
        'PurchasePriceCurrency': value.purchasePriceCurrency,
        'ShortTexts': value.shortTexts === undefined ? undefined : ((value.shortTexts as Array<any>).map(SharedModelsLocalizableContentToJSON)),
        'LongTexts': value.longTexts === undefined ? undefined : ((value.longTexts as Array<any>).map(SharedModelsLocalizableContentToJSON)),
        'TechTexts': value.techTexts === undefined ? undefined : ((value.techTexts as Array<any>).map(SharedModelsLocalizableContentToJSON)),
        'BrandId': value.brandId,
        'SupplierId': value.supplierId,
        'Items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ProductModelsWriteProductItemToJSON)),
        'CategoryIds': value.categoryIds,
        'ParameterValues': value.parameterValues === undefined ? undefined : ((value.parameterValues as Array<any>).map(ProductParameterModelsWriteProductParameterValueToJSON)),
        'Variants': value.variants === undefined ? undefined : ((value.variants as Array<any>).map(VariantModelsWriteVariantToJSON)),
        'Markets': value.markets === undefined ? undefined : ((value.markets as Array<any>).map(MarketModelsMarketToJSON)),
        'FreightClassId': value.freightClassId,
        'IntrastatCode': value.intrastatCode,
        'CountryOfOrigin': value.countryOfOrigin,
        'VariantGroupId': value.variantGroupId,
        'Vat': value.vat,
        'VatType': value.vatType,
        'ExternalId': value.externalId,
        'ActivationDate': value.activationDate === undefined ? undefined : (value.activationDate.toISOString()),
    };
}

