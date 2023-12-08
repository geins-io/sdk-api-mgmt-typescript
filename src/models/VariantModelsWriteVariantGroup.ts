/* tslint:disable */
/* eslint-disable */
/**
 * Geins Management API
 *  Geins Management API is a RESTful api that powers your applications and helps you manage your Geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions.   :::tip Tip With this API, you can build custom applications and integrate with third-party systems, feeds, dashboards and other bussiness logic apps. :::    ## Getting started Once you have created an account, you can start using the Management API by creating an `API User`. You can create as many API users as you need. Each `API user` is connected to a specific account so you can keep track of operations and manage keys.   You can find all your API credentials in `Geins Merchant Center`.   ### Fast track Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.  Or, if you prefer to just take it for a test run:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553?action=collection%2Ffork&collection-url=entityId%3D25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553%26entityType%3Dcollection%26workspaceId%3Da2a179ce-158e-46b0-8d06-e9640f45112c)  ### Authentication Two authentication methods are required:   - `Basic Auth`   - `API Key`    All API credentials can be found in `Geins Merchant Center`.  #### Basic Auth A Basic auth `Authorization` header needs to be included in every request. The value should be `Basic <credentials>` where `<credentials>` is the Base64 encoding of your `API username` and `API password` joined by a single colon `:`.   See [Wikipedia](https://en.wikipedia.org/wiki/Basic_access_authentication) for more information on Basic auth.  #### API Key  An `X-ApiKey` header needs to be included in every request. This header should contain the value of your `API key`.  #### Example ```bash curl -X GET \"https://mgmtapi.geins.io/API/Market/List\" \\ -H \"Authorization: Basic [USER-CREDENTIALS-BASE64-ENCODED]\" \\ -H \"X-ApiKey: [API-KEY]\" ``` 
 *
 * The version of the OpenAPI document: v1.10.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProductModelsWriteProduct } from './ProductModelsWriteProduct';
import {
    ProductModelsWriteProductFromJSON,
    ProductModelsWriteProductFromJSONTyped,
    ProductModelsWriteProductToJSON,
} from './ProductModelsWriteProduct';

/**
 * A variant group for a collection of related variants.
 * @export
 * @interface VariantModelsWriteVariantGroup
 */
export interface VariantModelsWriteVariantGroup {
    /**
     * The optional internal name of the variant group.
     * @type {string}
     * @memberof VariantModelsWriteVariantGroup
     */
    name?: string;
    /**
     * A setting to control the display behaviour in product listings of variants belonging to this group.
     * @type {boolean}
     * @memberof VariantModelsWriteVariantGroup
     */
    collapseInLists?: boolean;
    /**
     * The labels of the variant data that this group keeps track of.
     * @type {Array<string>}
     * @memberof VariantModelsWriteVariantGroup
     */
    variantLabels?: Array<string>;
    /**
     * Products to be created and connected to the group.
     * @type {Array<ProductModelsWriteProduct>}
     * @memberof VariantModelsWriteVariantGroup
     */
    products?: Array<ProductModelsWriteProduct>;
}

/**
 * Check if a given object implements the VariantModelsWriteVariantGroup interface.
 */
export function instanceOfVariantModelsWriteVariantGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VariantModelsWriteVariantGroupFromJSON(json: any): VariantModelsWriteVariantGroup {
    return VariantModelsWriteVariantGroupFromJSONTyped(json, false);
}

export function VariantModelsWriteVariantGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariantModelsWriteVariantGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'collapseInLists': !exists(json, 'CollapseInLists') ? undefined : json['CollapseInLists'],
        'variantLabels': !exists(json, 'VariantLabels') ? undefined : json['VariantLabels'],
        'products': !exists(json, 'Products') ? undefined : ((json['Products'] as Array<any>).map(ProductModelsWriteProductFromJSON)),
    };
}

export function VariantModelsWriteVariantGroupToJSON(value?: VariantModelsWriteVariantGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'CollapseInLists': value.collapseInLists,
        'VariantLabels': value.variantLabels,
        'Products': value.products === undefined ? undefined : ((value.products as Array<any>).map(ProductModelsWriteProductToJSON)),
    };
}

