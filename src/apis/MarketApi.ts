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


import * as runtime from '../runtime';
import type {
  BaseEnvelope,
  EnvelopeMarketModelsMarket,
  MarketModelsMarket,
} from '../models';
import {
    BaseEnvelopeFromJSON,
    BaseEnvelopeToJSON,
    EnvelopeMarketModelsMarketFromJSON,
    EnvelopeMarketModelsMarketToJSON,
    MarketModelsMarketFromJSON,
    MarketModelsMarketToJSON,
} from '../models';

export interface GetMarketRequest {
    marketId: string;
    marketIdType?: GetMarketMarketIdTypeEnum;
}

/**
 * 
 */
export class MarketApi extends runtime.BaseAPI {

    /**
     * Get market
     */
    async getMarketRaw(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeMarketModelsMarket>> {
        if (requestParameters.marketId === null || requestParameters.marketId === undefined) {
            throw new runtime.RequiredError('marketId','Required parameter requestParameters.marketId was null or undefined when calling getMarket.');
        }

        const queryParameters: any = {};

        if (requestParameters.marketIdType !== undefined) {
            queryParameters['marketIdType'] = requestParameters.marketIdType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Market/{marketId}`.replace(`{${"marketId"}}`, encodeURIComponent(String(requestParameters.marketId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeMarketModelsMarketFromJSON(jsonValue));
    }

    /**
     * Get market
     */
    async getMarket(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeMarketModelsMarket> {
        const response = await this.getMarketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of all markets
     * List markets
     */
    async listMarketsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MarketModelsMarket>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Market/List`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MarketModelsMarketFromJSON));
    }

    /**
     * Gets a list of all markets
     * List markets
     */
    async listMarkets(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MarketModelsMarket>> {
        const response = await this.listMarketsRaw(initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetMarketMarketIdTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type GetMarketMarketIdTypeEnum = typeof GetMarketMarketIdTypeEnum[keyof typeof GetMarketMarketIdTypeEnum];
