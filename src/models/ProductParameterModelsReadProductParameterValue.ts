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
 * @interface ProductParameterModelsReadProductParameterValue
 */
export interface ProductParameterModelsReadProductParameterValue {
    /**
     * The unique identifier of this parameter value.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    parameterValueId?: number;
    /**
     * The product id of the parameter.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    productId?: number;
    /**
     * The unique identifier of the parameter that this value belongs to.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    parameterId?: number;
    /**
     * The non-localized name of the parameter.
     * @type {string}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    parameterName?: string;
    /**
     * The unique identifier of the group that this parameter belongs to.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    groupId?: number;
    /**
     * The name of the group that this parameter belongs to.
     * @type {string}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    groupName?: string;
    /**
     * The type of parameter.  
     * The Value field must validate against this type.  
     * 1 = String. Any string value.  
     * 2 = Float. Any floating point number.  
     *             Period as decimal separator and no thousands separator.  
     *             Eg: 10001.789.  
     * 3 = DateTime. Any ISO 8601 date.  
     *             Eg: 2017-03-06T16:31:24+02:00.  
     * 4 = Multi. A string value from a predefined set of values.  
     *             This type may occur multiple times for the same parameter.  
     * 5 = Single. A string value from a predefined set of values.  
     * 6 = Headline. A string value used mainly for grouping in layout.  
     * 7 = Tags. A pipe-separated list of product specific values.  
     *             Eg: red|green|blue.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    parameterType?: ProductParameterModelsReadProductParameterValueParameterTypeEnum;
    /**
     * The identifying value of the parameter.  
     * Although always presented as a string, the data within Value must validate against the type of the parameter:  
     * String = Any string.  
     * Float = Any floating point number.  
     * DateTime = Any date.  
     * Multi = Any predefined value id from the predefined set of values for this parameter.  
     * Single = Any predefined value id from the predefined set of values for this parameter.  
     * Headline = Any string.
     * @type {string}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    value?: string;
    /**
     * The non-localized description of the parameter.  
     * This is usually the same value as Value for all parameter types, except Single Multi.
     * @type {string}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    description?: string;
    /**
     * The localized descriptions of the parameter.  
     * Not used for parameter types Float or DateTime.
     * @type {Array<SharedModelsLocalizableContent>}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    localizedDescriptions?: Array<SharedModelsLocalizableContent>;
    /**
     * The internal identifier of the parameter.
     * @type {string}
     * @memberof ProductParameterModelsReadProductParameterValue
     */
    internalIdentifier?: string;
}


/**
 * @export
 */
export const ProductParameterModelsReadProductParameterValueParameterTypeEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7
} as const;
export type ProductParameterModelsReadProductParameterValueParameterTypeEnum = typeof ProductParameterModelsReadProductParameterValueParameterTypeEnum[keyof typeof ProductParameterModelsReadProductParameterValueParameterTypeEnum];


/**
 * Check if a given object implements the ProductParameterModelsReadProductParameterValue interface.
 */
export function instanceOfProductParameterModelsReadProductParameterValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductParameterModelsReadProductParameterValueFromJSON(json: any): ProductParameterModelsReadProductParameterValue {
    return ProductParameterModelsReadProductParameterValueFromJSONTyped(json, false);
}

export function ProductParameterModelsReadProductParameterValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductParameterModelsReadProductParameterValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parameterValueId': !exists(json, 'ParameterValueId') ? undefined : json['ParameterValueId'],
        'productId': !exists(json, 'ProductId') ? undefined : json['ProductId'],
        'parameterId': !exists(json, 'ParameterId') ? undefined : json['ParameterId'],
        'parameterName': !exists(json, 'ParameterName') ? undefined : json['ParameterName'],
        'groupId': !exists(json, 'GroupId') ? undefined : json['GroupId'],
        'groupName': !exists(json, 'GroupName') ? undefined : json['GroupName'],
        'parameterType': !exists(json, 'ParameterType') ? undefined : json['ParameterType'],
        'value': !exists(json, 'Value') ? undefined : json['Value'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'localizedDescriptions': !exists(json, 'LocalizedDescriptions') ? undefined : ((json['LocalizedDescriptions'] as Array<any>).map(SharedModelsLocalizableContentFromJSON)),
        'internalIdentifier': !exists(json, 'InternalIdentifier') ? undefined : json['InternalIdentifier'],
    };
}

export function ProductParameterModelsReadProductParameterValueToJSON(value?: ProductParameterModelsReadProductParameterValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ParameterValueId': value.parameterValueId,
        'ProductId': value.productId,
        'ParameterId': value.parameterId,
        'ParameterName': value.parameterName,
        'GroupId': value.groupId,
        'GroupName': value.groupName,
        'ParameterType': value.parameterType,
        'Value': value.value,
        'Description': value.description,
        'LocalizedDescriptions': value.localizedDescriptions === undefined ? undefined : ((value.localizedDescriptions as Array<any>).map(SharedModelsLocalizableContentToJSON)),
        'InternalIdentifier': value.internalIdentifier,
    };
}

