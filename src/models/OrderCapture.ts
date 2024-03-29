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
import type { OrderCaptureRow } from './OrderCaptureRow';
import {
    OrderCaptureRowFromJSON,
    OrderCaptureRowFromJSONTyped,
    OrderCaptureRowToJSON,
} from './OrderCaptureRow';

/**
 * 
 * @export
 * @interface OrderCapture
 */
export interface OrderCapture {
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    captureId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    orderPaymentId?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderCapture
     */
    orderId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    reference?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof OrderCapture
     */
    processedOn?: Date;
    /**
     * 
     * @type {number}
     * @memberof OrderCapture
     */
    capturedItemTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCapture
     */
    capturedShippingFee?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCapture
     */
    capturedPaymentFee?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCapture
     */
    capturedDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCapture
     */
    capturedBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCapture
     */
    vatRate?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    trackingNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    shippingName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    trackingUri?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    shippingMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    paymentName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    locale?: string;
    /**
     * 
     * @type {Array<OrderCaptureRow>}
     * @memberof OrderCapture
     */
    rows?: Array<OrderCaptureRow>;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    orderTransactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCapture
     */
    secondaryOrderTransactionId?: string;
}

/**
 * Check if a given object implements the OrderCapture interface.
 */
export function instanceOfOrderCapture(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderCaptureFromJSON(json: any): OrderCapture {
    return OrderCaptureFromJSONTyped(json, false);
}

export function OrderCaptureFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCapture {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'captureId': !exists(json, 'CaptureId') ? undefined : json['CaptureId'],
        'orderPaymentId': !exists(json, 'OrderPaymentId') ? undefined : json['OrderPaymentId'],
        'orderId': !exists(json, 'OrderId') ? undefined : json['OrderId'],
        'externalOrderId': !exists(json, 'ExternalOrderId') ? undefined : json['ExternalOrderId'],
        'externalId': !exists(json, 'ExternalId') ? undefined : json['ExternalId'],
        'reference': !exists(json, 'Reference') ? undefined : json['Reference'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'processedOn': !exists(json, 'ProcessedOn') ? undefined : (new Date(json['ProcessedOn'])),
        'capturedItemTotal': !exists(json, 'CapturedItemTotal') ? undefined : json['CapturedItemTotal'],
        'capturedShippingFee': !exists(json, 'CapturedShippingFee') ? undefined : json['CapturedShippingFee'],
        'capturedPaymentFee': !exists(json, 'CapturedPaymentFee') ? undefined : json['CapturedPaymentFee'],
        'capturedDiscount': !exists(json, 'CapturedDiscount') ? undefined : json['CapturedDiscount'],
        'capturedBalance': !exists(json, 'CapturedBalance') ? undefined : json['CapturedBalance'],
        'vatRate': !exists(json, 'VatRate') ? undefined : json['VatRate'],
        'trackingNumber': !exists(json, 'TrackingNumber') ? undefined : json['TrackingNumber'],
        'shippingName': !exists(json, 'ShippingName') ? undefined : json['ShippingName'],
        'trackingUri': !exists(json, 'TrackingUri') ? undefined : json['TrackingUri'],
        'shippingMethod': !exists(json, 'ShippingMethod') ? undefined : json['ShippingMethod'],
        'paymentName': !exists(json, 'PaymentName') ? undefined : json['PaymentName'],
        'locale': !exists(json, 'Locale') ? undefined : json['Locale'],
        'rows': !exists(json, 'Rows') ? undefined : ((json['Rows'] as Array<any>).map(OrderCaptureRowFromJSON)),
        'orderTransactionId': !exists(json, 'OrderTransactionId') ? undefined : json['OrderTransactionId'],
        'secondaryOrderTransactionId': !exists(json, 'SecondaryOrderTransactionId') ? undefined : json['SecondaryOrderTransactionId'],
    };
}

export function OrderCaptureToJSON(value?: OrderCapture | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'CaptureId': value.captureId,
        'OrderPaymentId': value.orderPaymentId,
        'OrderId': value.orderId,
        'ExternalOrderId': value.externalOrderId,
        'ExternalId': value.externalId,
        'Reference': value.reference,
        'Description': value.description,
        'ProcessedOn': value.processedOn === undefined ? undefined : (value.processedOn.toISOString()),
        'CapturedItemTotal': value.capturedItemTotal,
        'CapturedShippingFee': value.capturedShippingFee,
        'CapturedPaymentFee': value.capturedPaymentFee,
        'CapturedDiscount': value.capturedDiscount,
        'CapturedBalance': value.capturedBalance,
        'VatRate': value.vatRate,
        'TrackingNumber': value.trackingNumber,
        'ShippingName': value.shippingName,
        'TrackingUri': value.trackingUri,
        'ShippingMethod': value.shippingMethod,
        'PaymentName': value.paymentName,
        'Locale': value.locale,
        'Rows': value.rows === undefined ? undefined : ((value.rows as Array<any>).map(OrderCaptureRowToJSON)),
        'OrderTransactionId': value.orderTransactionId,
        'SecondaryOrderTransactionId': value.secondaryOrderTransactionId,
    };
}

