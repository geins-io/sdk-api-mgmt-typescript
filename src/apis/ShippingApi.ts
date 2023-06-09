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


import * as runtime from '../runtime';
import type {
  EnvelopeInt,
  ShippingModelsParcelGroupOptions,
  ShippingModelsShippingOption,
  ShippingModelsShippingQuery,
} from '../models';
import {
    EnvelopeIntFromJSON,
    EnvelopeIntToJSON,
    ShippingModelsParcelGroupOptionsFromJSON,
    ShippingModelsParcelGroupOptionsToJSON,
    ShippingModelsShippingOptionFromJSON,
    ShippingModelsShippingOptionToJSON,
    ShippingModelsShippingQueryFromJSON,
    ShippingModelsShippingQueryToJSON,
} from '../models';

export interface CreateParcelGroupRequest {
    parcelGroupOptions: ShippingModelsParcelGroupOptions;
}

export interface QueryShippingOptionsRequest {
    shippingQuery: ShippingModelsShippingQuery;
}

/**
 * 
 */
export class ShippingApi extends runtime.BaseAPI {

    /**
     * Create a new parcel group
     */
    async createParcelGroupRaw(requestParameters: CreateParcelGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeInt>> {
        if (requestParameters.parcelGroupOptions === null || requestParameters.parcelGroupOptions === undefined) {
            throw new runtime.RequiredError('parcelGroupOptions','Required parameter requestParameters.parcelGroupOptions was null or undefined when calling createParcelGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Shipping/ParcelGroup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShippingModelsParcelGroupOptionsToJSON(requestParameters.parcelGroupOptions),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeIntFromJSON(jsonValue));
    }

    /**
     * Create a new parcel group
     */
    async createParcelGroup(requestParameters: CreateParcelGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeInt> {
        const response = await this.createParcelGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * No response envelope.
     * Query shipping options
     */
    async queryShippingOptionsRaw(requestParameters: QueryShippingOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ShippingModelsShippingOption>>> {
        if (requestParameters.shippingQuery === null || requestParameters.shippingQuery === undefined) {
            throw new runtime.RequiredError('shippingQuery','Required parameter requestParameters.shippingQuery was null or undefined when calling queryShippingOptions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Shipping/Query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShippingModelsShippingQueryToJSON(requestParameters.shippingQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShippingModelsShippingOptionFromJSON));
    }

    /**
     * No response envelope.
     * Query shipping options
     */
    async queryShippingOptions(requestParameters: QueryShippingOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ShippingModelsShippingOption>> {
        const response = await this.queryShippingOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
