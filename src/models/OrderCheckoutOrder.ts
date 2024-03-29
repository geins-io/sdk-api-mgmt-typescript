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
import type { OrderCheckoutOrderRow } from './OrderCheckoutOrderRow';
import {
    OrderCheckoutOrderRowFromJSON,
    OrderCheckoutOrderRowFromJSONTyped,
    OrderCheckoutOrderRowToJSON,
} from './OrderCheckoutOrderRow';
import type { OrderFreightClass } from './OrderFreightClass';
import {
    OrderFreightClassFromJSON,
    OrderFreightClassFromJSONTyped,
    OrderFreightClassToJSON,
} from './OrderFreightClass';

/**
 * 
 * @export
 * @interface OrderCheckoutOrder
 */
export interface OrderCheckoutOrder {
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    externalOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    cartId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    sessionId?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    siteId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    ipAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    internalMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    locale?: string;
    /**
     * 
     * @type {Array<OrderCheckoutOrderRow>}
     * @memberof OrderCheckoutOrder
     */
    rows?: Array<OrderCheckoutOrderRow>;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    campaignId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    campaignCode?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    campaignName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderCheckoutOrder
     */
    campaignIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderCheckoutOrder
     */
    campaignNames?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    customerId?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    customerTypeId?: number;
    /**
     *   
     * 0 = Unknown  
     * 1 = Female  
     * 2 = Male
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    gender?: OrderCheckoutOrderGenderEnum;
    /**
     * 
     * @type {Date}
     * @memberof OrderCheckoutOrder
     */
    dateOfBirth?: Date;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    personalId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    userAgent?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OrderCheckoutOrder
     */
    metaData?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    memberId?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    paymentId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    transactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    secondaryTransactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    organizationNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    zip?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    mobilePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    careOf?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    shippingId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingCountry?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingCompany?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingOrganizationNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingAddress1?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingAddress2?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingZip?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingCity?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingRegion?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingMobilePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    shippingCareOf?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCheckoutOrder
     */
    pickupPoint?: string;
    /**
     * 
     * @type {Date}
     * @memberof OrderCheckoutOrder
     */
    desiredDeliveryDate?: Date;
    /**
     * 
     * @type {OrderFreightClass}
     * @memberof OrderCheckoutOrder
     */
    freightClass?: OrderFreightClass;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    freeShippingLimit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrderCheckoutOrder
     */
    freeShippingFromLimit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderCheckoutOrder
     */
    freeShippingFromCampaign?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    readonly sum?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    expectedSum?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    readonly orderValueIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    readonly orderValueExVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    readonly itemValueIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    readonly itemValueExVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    discountIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    discountExVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    percentDiscount?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    balance?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    shippingFeeIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    shippingFeeExVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    paymentFeeIncVat?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderCheckoutOrder
     */
    paymentFeeExVat?: number;
}


/**
 * @export
 */
export const OrderCheckoutOrderGenderEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type OrderCheckoutOrderGenderEnum = typeof OrderCheckoutOrderGenderEnum[keyof typeof OrderCheckoutOrderGenderEnum];


/**
 * Check if a given object implements the OrderCheckoutOrder interface.
 */
export function instanceOfOrderCheckoutOrder(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderCheckoutOrderFromJSON(json: any): OrderCheckoutOrder {
    return OrderCheckoutOrderFromJSONTyped(json, false);
}

export function OrderCheckoutOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCheckoutOrder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': !exists(json, 'OrderId') ? undefined : json['OrderId'],
        'externalOrderId': !exists(json, 'ExternalOrderId') ? undefined : json['ExternalOrderId'],
        'cartId': !exists(json, 'CartId') ? undefined : json['CartId'],
        'sessionId': !exists(json, 'SessionId') ? undefined : json['SessionId'],
        'siteId': !exists(json, 'SiteId') ? undefined : json['SiteId'],
        'currency': !exists(json, 'Currency') ? undefined : json['Currency'],
        'status': !exists(json, 'Status') ? undefined : json['Status'],
        'ipAddress': !exists(json, 'IpAddress') ? undefined : json['IpAddress'],
        'message': !exists(json, 'Message') ? undefined : json['Message'],
        'internalMessage': !exists(json, 'InternalMessage') ? undefined : json['InternalMessage'],
        'locale': !exists(json, 'Locale') ? undefined : json['Locale'],
        'rows': !exists(json, 'Rows') ? undefined : ((json['Rows'] as Array<any>).map(OrderCheckoutOrderRowFromJSON)),
        'campaignId': !exists(json, 'CampaignId') ? undefined : json['CampaignId'],
        'campaignCode': !exists(json, 'CampaignCode') ? undefined : json['CampaignCode'],
        'campaignName': !exists(json, 'CampaignName') ? undefined : json['CampaignName'],
        'campaignIds': !exists(json, 'CampaignIds') ? undefined : json['CampaignIds'],
        'campaignNames': !exists(json, 'CampaignNames') ? undefined : json['CampaignNames'],
        'customerId': !exists(json, 'CustomerId') ? undefined : json['CustomerId'],
        'customerTypeId': !exists(json, 'CustomerTypeId') ? undefined : json['CustomerTypeId'],
        'gender': !exists(json, 'Gender') ? undefined : json['Gender'],
        'dateOfBirth': !exists(json, 'DateOfBirth') ? undefined : (new Date(json['DateOfBirth'])),
        'personalId': !exists(json, 'PersonalId') ? undefined : json['PersonalId'],
        'userAgent': !exists(json, 'UserAgent') ? undefined : json['UserAgent'],
        'metaData': !exists(json, 'MetaData') ? undefined : json['MetaData'],
        'memberId': !exists(json, 'MemberId') ? undefined : json['MemberId'],
        'paymentId': !exists(json, 'PaymentId') ? undefined : json['PaymentId'],
        'transactionId': !exists(json, 'TransactionId') ? undefined : json['TransactionId'],
        'secondaryTransactionId': !exists(json, 'SecondaryTransactionId') ? undefined : json['SecondaryTransactionId'],
        'country': !exists(json, 'Country') ? undefined : json['Country'],
        'company': !exists(json, 'Company') ? undefined : json['Company'],
        'organizationNumber': !exists(json, 'OrganizationNumber') ? undefined : json['OrganizationNumber'],
        'firstName': !exists(json, 'FirstName') ? undefined : json['FirstName'],
        'lastName': !exists(json, 'LastName') ? undefined : json['LastName'],
        'email': !exists(json, 'Email') ? undefined : json['Email'],
        'address1': !exists(json, 'Address1') ? undefined : json['Address1'],
        'address2': !exists(json, 'Address2') ? undefined : json['Address2'],
        'zip': !exists(json, 'Zip') ? undefined : json['Zip'],
        'city': !exists(json, 'City') ? undefined : json['City'],
        'region': !exists(json, 'Region') ? undefined : json['Region'],
        'phone': !exists(json, 'Phone') ? undefined : json['Phone'],
        'mobilePhone': !exists(json, 'MobilePhone') ? undefined : json['MobilePhone'],
        'careOf': !exists(json, 'CareOf') ? undefined : json['CareOf'],
        'shippingId': !exists(json, 'ShippingId') ? undefined : json['ShippingId'],
        'shippingCountry': !exists(json, 'ShippingCountry') ? undefined : json['ShippingCountry'],
        'shippingCompany': !exists(json, 'ShippingCompany') ? undefined : json['ShippingCompany'],
        'shippingOrganizationNumber': !exists(json, 'ShippingOrganizationNumber') ? undefined : json['ShippingOrganizationNumber'],
        'shippingFirstName': !exists(json, 'ShippingFirstName') ? undefined : json['ShippingFirstName'],
        'shippingLastName': !exists(json, 'ShippingLastName') ? undefined : json['ShippingLastName'],
        'shippingEmail': !exists(json, 'ShippingEmail') ? undefined : json['ShippingEmail'],
        'shippingAddress1': !exists(json, 'ShippingAddress1') ? undefined : json['ShippingAddress1'],
        'shippingAddress2': !exists(json, 'ShippingAddress2') ? undefined : json['ShippingAddress2'],
        'shippingZip': !exists(json, 'ShippingZip') ? undefined : json['ShippingZip'],
        'shippingCity': !exists(json, 'ShippingCity') ? undefined : json['ShippingCity'],
        'shippingRegion': !exists(json, 'ShippingRegion') ? undefined : json['ShippingRegion'],
        'shippingPhone': !exists(json, 'ShippingPhone') ? undefined : json['ShippingPhone'],
        'shippingMobilePhone': !exists(json, 'ShippingMobilePhone') ? undefined : json['ShippingMobilePhone'],
        'shippingCareOf': !exists(json, 'ShippingCareOf') ? undefined : json['ShippingCareOf'],
        'pickupPoint': !exists(json, 'PickupPoint') ? undefined : json['PickupPoint'],
        'desiredDeliveryDate': !exists(json, 'DesiredDeliveryDate') ? undefined : (new Date(json['DesiredDeliveryDate'])),
        'freightClass': !exists(json, 'FreightClass') ? undefined : OrderFreightClassFromJSON(json['FreightClass']),
        'freeShippingLimit': !exists(json, 'FreeShippingLimit') ? undefined : json['FreeShippingLimit'],
        'freeShippingFromLimit': !exists(json, 'FreeShippingFromLimit') ? undefined : json['FreeShippingFromLimit'],
        'freeShippingFromCampaign': !exists(json, 'FreeShippingFromCampaign') ? undefined : json['FreeShippingFromCampaign'],
        'sum': !exists(json, 'Sum') ? undefined : json['Sum'],
        'expectedSum': !exists(json, 'ExpectedSum') ? undefined : json['ExpectedSum'],
        'orderValueIncVat': !exists(json, 'OrderValueIncVat') ? undefined : json['OrderValueIncVat'],
        'orderValueExVat': !exists(json, 'OrderValueExVat') ? undefined : json['OrderValueExVat'],
        'itemValueIncVat': !exists(json, 'ItemValueIncVat') ? undefined : json['ItemValueIncVat'],
        'itemValueExVat': !exists(json, 'ItemValueExVat') ? undefined : json['ItemValueExVat'],
        'discountIncVat': !exists(json, 'DiscountIncVat') ? undefined : json['DiscountIncVat'],
        'discountExVat': !exists(json, 'DiscountExVat') ? undefined : json['DiscountExVat'],
        'percentDiscount': !exists(json, 'PercentDiscount') ? undefined : json['PercentDiscount'],
        'balance': !exists(json, 'Balance') ? undefined : json['Balance'],
        'shippingFeeIncVat': !exists(json, 'ShippingFeeIncVat') ? undefined : json['ShippingFeeIncVat'],
        'shippingFeeExVat': !exists(json, 'ShippingFeeExVat') ? undefined : json['ShippingFeeExVat'],
        'paymentFeeIncVat': !exists(json, 'PaymentFeeIncVat') ? undefined : json['PaymentFeeIncVat'],
        'paymentFeeExVat': !exists(json, 'PaymentFeeExVat') ? undefined : json['PaymentFeeExVat'],
    };
}

export function OrderCheckoutOrderToJSON(value?: OrderCheckoutOrder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OrderId': value.orderId,
        'ExternalOrderId': value.externalOrderId,
        'CartId': value.cartId,
        'SessionId': value.sessionId,
        'SiteId': value.siteId,
        'Currency': value.currency,
        'Status': value.status,
        'IpAddress': value.ipAddress,
        'Message': value.message,
        'InternalMessage': value.internalMessage,
        'Locale': value.locale,
        'Rows': value.rows === undefined ? undefined : ((value.rows as Array<any>).map(OrderCheckoutOrderRowToJSON)),
        'CampaignId': value.campaignId,
        'CampaignCode': value.campaignCode,
        'CampaignName': value.campaignName,
        'CampaignIds': value.campaignIds,
        'CampaignNames': value.campaignNames,
        'CustomerId': value.customerId,
        'CustomerTypeId': value.customerTypeId,
        'Gender': value.gender,
        'DateOfBirth': value.dateOfBirth === undefined ? undefined : (value.dateOfBirth.toISOString()),
        'PersonalId': value.personalId,
        'UserAgent': value.userAgent,
        'MetaData': value.metaData,
        'MemberId': value.memberId,
        'PaymentId': value.paymentId,
        'TransactionId': value.transactionId,
        'SecondaryTransactionId': value.secondaryTransactionId,
        'Country': value.country,
        'Company': value.company,
        'OrganizationNumber': value.organizationNumber,
        'FirstName': value.firstName,
        'LastName': value.lastName,
        'Email': value.email,
        'Address1': value.address1,
        'Address2': value.address2,
        'Zip': value.zip,
        'City': value.city,
        'Region': value.region,
        'Phone': value.phone,
        'MobilePhone': value.mobilePhone,
        'CareOf': value.careOf,
        'ShippingId': value.shippingId,
        'ShippingCountry': value.shippingCountry,
        'ShippingCompany': value.shippingCompany,
        'ShippingOrganizationNumber': value.shippingOrganizationNumber,
        'ShippingFirstName': value.shippingFirstName,
        'ShippingLastName': value.shippingLastName,
        'ShippingEmail': value.shippingEmail,
        'ShippingAddress1': value.shippingAddress1,
        'ShippingAddress2': value.shippingAddress2,
        'ShippingZip': value.shippingZip,
        'ShippingCity': value.shippingCity,
        'ShippingRegion': value.shippingRegion,
        'ShippingPhone': value.shippingPhone,
        'ShippingMobilePhone': value.shippingMobilePhone,
        'ShippingCareOf': value.shippingCareOf,
        'PickupPoint': value.pickupPoint,
        'DesiredDeliveryDate': value.desiredDeliveryDate === undefined ? undefined : (value.desiredDeliveryDate.toISOString()),
        'FreightClass': OrderFreightClassToJSON(value.freightClass),
        'FreeShippingLimit': value.freeShippingLimit,
        'FreeShippingFromLimit': value.freeShippingFromLimit,
        'FreeShippingFromCampaign': value.freeShippingFromCampaign,
        'ExpectedSum': value.expectedSum,
        'DiscountIncVat': value.discountIncVat,
        'DiscountExVat': value.discountExVat,
        'PercentDiscount': value.percentDiscount,
        'Balance': value.balance,
        'ShippingFeeIncVat': value.shippingFeeIncVat,
        'ShippingFeeExVat': value.shippingFeeExVat,
        'PaymentFeeIncVat': value.paymentFeeIncVat,
        'PaymentFeeExVat': value.paymentFeeExVat,
    };
}

