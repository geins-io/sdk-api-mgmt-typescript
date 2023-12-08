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
/**
 * Creation options for new parcel groups.
 * @export
 * @interface ShippingModelsParcelGroupOptions
 */
export interface ShippingModelsParcelGroupOptions {
    /**
     * The order ids contained in this parcel group.
     * Required.
     * @type {Array<number>}
     * @memberof ShippingModelsParcelGroupOptions
     */
    orderIds?: Array<number>;
    /**
     * Limits which order rows are included for each order defined in OrderIds. Use this to create partial deliveries.  
     * If any order rows are defined for a given order then only those order rows will be used, eg a partial delivery.  
     * If no order rows are defined for a given order then all remaining undelivered order rows will be implied.  
     * Optional.
     * @type {Array<number>}
     * @memberof ShippingModelsParcelGroupOptions
     */
    orderRowIds?: Array<number>;
    /**
     * Set to true to automatically mark orders as delivered upon creation of the parcel group.  
     * Defaults to false.  
     * Optional.
     * @type {boolean}
     * @memberof ShippingModelsParcelGroupOptions
     */
    markAsDelivered?: boolean;
    /**
     * Set to true to automatically send delivery email upon creation of the parcel group.  
     * Requires that MarkAsDelivered is also set to true.  
     * Defaults to false.  
     * Optional.
     * @type {boolean}
     * @memberof ShippingModelsParcelGroupOptions
     */
    sendDeliveryEmail?: boolean;
    /**
     * Set to true to create captures and automatically signal capture events upon creation of the parcel group.  
     * Defaults to false.  
     * Optional.
     * @type {boolean}
     * @memberof ShippingModelsParcelGroupOptions
     */
    signalCapturesCreated?: boolean;
}

/**
 * Check if a given object implements the ShippingModelsParcelGroupOptions interface.
 */
export function instanceOfShippingModelsParcelGroupOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShippingModelsParcelGroupOptionsFromJSON(json: any): ShippingModelsParcelGroupOptions {
    return ShippingModelsParcelGroupOptionsFromJSONTyped(json, false);
}

export function ShippingModelsParcelGroupOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingModelsParcelGroupOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderIds': !exists(json, 'OrderIds') ? undefined : json['OrderIds'],
        'orderRowIds': !exists(json, 'OrderRowIds') ? undefined : json['OrderRowIds'],
        'markAsDelivered': !exists(json, 'MarkAsDelivered') ? undefined : json['MarkAsDelivered'],
        'sendDeliveryEmail': !exists(json, 'SendDeliveryEmail') ? undefined : json['SendDeliveryEmail'],
        'signalCapturesCreated': !exists(json, 'SignalCapturesCreated') ? undefined : json['SignalCapturesCreated'],
    };
}

export function ShippingModelsParcelGroupOptionsToJSON(value?: ShippingModelsParcelGroupOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OrderIds': value.orderIds,
        'OrderRowIds': value.orderRowIds,
        'MarkAsDelivered': value.markAsDelivered,
        'SendDeliveryEmail': value.sendDeliveryEmail,
        'SignalCapturesCreated': value.signalCapturesCreated,
    };
}

