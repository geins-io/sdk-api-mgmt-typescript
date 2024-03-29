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
import type { SharedModelsLocalizableContent } from './SharedModelsLocalizableContent';
import {
    SharedModelsLocalizableContentFromJSON,
    SharedModelsLocalizableContentFromJSONTyped,
    SharedModelsLocalizableContentToJSON,
} from './SharedModelsLocalizableContent';

/**
 * A parameter value for a product.
 * @export
 * @interface ProductParameterModelsWriteProductParameterValue
 */
export interface ProductParameterModelsWriteProductParameterValue {
    /**
     * The product id of the parameter.  
     * This value can be omitted if the value is part of a product request.
     * @type {number}
     * @memberof ProductParameterModelsWriteProductParameterValue
     */
    productId?: number;
    /**
     * The unique identifier of the parameter that this value belongs to.
     * @type {number}
     * @memberof ProductParameterModelsWriteProductParameterValue
     */
    parameterId?: number;
    /**
     * The identifying value of the parameter.  
     * Although always presented as a string, the data within Value must validate against the ProductParameterType of the parameter:  
     * String = Any string.  
     * Float = Any floating point number.  
     * DateTime = Any date.  
     * Multi = Any predefined value id from the predefined set of values for this parameter.  
     * Single = Any predefined value id from the predefined set of values for this parameter.  
     * Headline = Any string.  
     * Tags = Any string, as part of a pipe-separated list. A string containing the pipe (|) character is not allowed.
     * @type {string}
     * @memberof ProductParameterModelsWriteProductParameterValue
     */
    value?: string;
    /**
     * The localized descriptions of the parameter.  
     * Only used for parameter types String or Headline.  
     * For Multi and Single, use LocalizedNames.
     * @type {Array<SharedModelsLocalizableContent>}
     * @memberof ProductParameterModelsWriteProductParameterValue
     */
    localizedDescriptions?: Array<SharedModelsLocalizableContent>;
}

/**
 * Check if a given object implements the ProductParameterModelsWriteProductParameterValue interface.
 */
export function instanceOfProductParameterModelsWriteProductParameterValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductParameterModelsWriteProductParameterValueFromJSON(json: any): ProductParameterModelsWriteProductParameterValue {
    return ProductParameterModelsWriteProductParameterValueFromJSONTyped(json, false);
}

export function ProductParameterModelsWriteProductParameterValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductParameterModelsWriteProductParameterValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': !exists(json, 'ProductId') ? undefined : json['ProductId'],
        'parameterId': !exists(json, 'ParameterId') ? undefined : json['ParameterId'],
        'value': !exists(json, 'Value') ? undefined : json['Value'],
        'localizedDescriptions': !exists(json, 'LocalizedDescriptions') ? undefined : ((json['LocalizedDescriptions'] as Array<any>).map(SharedModelsLocalizableContentFromJSON)),
    };
}

export function ProductParameterModelsWriteProductParameterValueToJSON(value?: ProductParameterModelsWriteProductParameterValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ProductId': value.productId,
        'ParameterId': value.parameterId,
        'Value': value.value,
        'LocalizedDescriptions': value.localizedDescriptions === undefined ? undefined : ((value.localizedDescriptions as Array<any>).map(SharedModelsLocalizableContentToJSON)),
    };
}

