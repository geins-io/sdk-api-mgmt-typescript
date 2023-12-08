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
import type { NewReturnRow } from './NewReturnRow';
import {
    NewReturnRowFromJSON,
    NewReturnRowFromJSONTyped,
    NewReturnRowToJSON,
} from './NewReturnRow';

/**
 * 
 * @export
 * @interface OrderReturnModelsWriteNewReturn
 */
export interface OrderReturnModelsWriteNewReturn {
    /**
     * How much of the shipping fee to refund. 
     * Optional.
     * @type {number}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    shippingFeeRefund?: number;
    /**
     * How much of the payment fee to refund. 
     * Optional.
     * @type {number}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    paymentFeeRefund?: number;
    /**
     * The fee that the customer pays for the return. This value will be deducted from the total refund.
     * Optional.
     * @type {number}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    returnFee?: number;
    /**
     * The id of the admin user that created the return. Leave blank if unsure. 
     * Optional.
     * @type {number}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    adminUserId?: number;
    /**
     * The name of person or system that created the return. 
     * Optional.
     * @type {string}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    author?: string;
    /**
     * An custom reference for the return. 
     * Optional.
     * @type {string}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    reference?: string;
    /**
     * A describing text for the return. 
     * Optional.
     * @type {string}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    description?: string;
    /**
     * If set to true, no return events will be sent.
     * @type {boolean}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    skipReturnEvents?: boolean;
    /**
     * If set to true, no product events will be sent for restocked products.
     * @type {boolean}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    skipProductEvents?: boolean;
    /**
     * If set to true, no refund events will be sent.
     * @type {boolean}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    skipRefundEvents?: boolean;
    /**
     * If set to true, refunds will require approval before being sent.
     * @type {boolean}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    refundsRequireApproval?: boolean;
    /**
     * The list of return rows to create. Each return row represents an order row that is returned.
     * Required.
     * @type {Array<NewReturnRow>}
     * @memberof OrderReturnModelsWriteNewReturn
     */
    returnRows?: Array<NewReturnRow>;
}

/**
 * Check if a given object implements the OrderReturnModelsWriteNewReturn interface.
 */
export function instanceOfOrderReturnModelsWriteNewReturn(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderReturnModelsWriteNewReturnFromJSON(json: any): OrderReturnModelsWriteNewReturn {
    return OrderReturnModelsWriteNewReturnFromJSONTyped(json, false);
}

export function OrderReturnModelsWriteNewReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderReturnModelsWriteNewReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shippingFeeRefund': !exists(json, 'ShippingFeeRefund') ? undefined : json['ShippingFeeRefund'],
        'paymentFeeRefund': !exists(json, 'PaymentFeeRefund') ? undefined : json['PaymentFeeRefund'],
        'returnFee': !exists(json, 'ReturnFee') ? undefined : json['ReturnFee'],
        'adminUserId': !exists(json, 'AdminUserId') ? undefined : json['AdminUserId'],
        'author': !exists(json, 'Author') ? undefined : json['Author'],
        'reference': !exists(json, 'Reference') ? undefined : json['Reference'],
        'description': !exists(json, 'Description') ? undefined : json['Description'],
        'skipReturnEvents': !exists(json, 'SkipReturnEvents') ? undefined : json['SkipReturnEvents'],
        'skipProductEvents': !exists(json, 'SkipProductEvents') ? undefined : json['SkipProductEvents'],
        'skipRefundEvents': !exists(json, 'SkipRefundEvents') ? undefined : json['SkipRefundEvents'],
        'refundsRequireApproval': !exists(json, 'RefundsRequireApproval') ? undefined : json['RefundsRequireApproval'],
        'returnRows': !exists(json, 'ReturnRows') ? undefined : ((json['ReturnRows'] as Array<any>).map(NewReturnRowFromJSON)),
    };
}

export function OrderReturnModelsWriteNewReturnToJSON(value?: OrderReturnModelsWriteNewReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ShippingFeeRefund': value.shippingFeeRefund,
        'PaymentFeeRefund': value.paymentFeeRefund,
        'ReturnFee': value.returnFee,
        'AdminUserId': value.adminUserId,
        'Author': value.author,
        'Reference': value.reference,
        'Description': value.description,
        'SkipReturnEvents': value.skipReturnEvents,
        'SkipProductEvents': value.skipProductEvents,
        'SkipRefundEvents': value.skipRefundEvents,
        'RefundsRequireApproval': value.refundsRequireApproval,
        'ReturnRows': value.returnRows === undefined ? undefined : ((value.returnRows as Array<any>).map(NewReturnRowToJSON)),
    };
}
