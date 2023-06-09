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
  PriceListModelsPriceList,
  PriceListModelsPriceListPriceResponse,
  PriceListModelsWritePriceListPrice,
} from '../models';
import {
    PriceListModelsPriceListFromJSON,
    PriceListModelsPriceListToJSON,
    PriceListModelsPriceListPriceResponseFromJSON,
    PriceListModelsPriceListPriceResponseToJSON,
    PriceListModelsWritePriceListPriceFromJSON,
    PriceListModelsWritePriceListPriceToJSON,
} from '../models';

export interface UpdatePriceListPricesRequest {
    priceListPrices: Array<PriceListModelsWritePriceListPrice>;
    productIdType?: UpdatePriceListPricesProductIdTypeEnum;
    pricesIncVat?: boolean;
}

/**
 * 
 */
export class PriceListApi extends runtime.BaseAPI {

    /**
     * - Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.  - ID for Ordinary, Sale and Campaign price lists starts from 1000000.   The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary=0, Sale=1, Capaign=2)  So :  Ordinary price list for market with ID 1 has ID = 1000000  Sale price list for market with ID 1 has ID = 1000001  Campaign price list for market with ID 1 has ID = 1000002  Ordinary price list for market with ID 2 has ID = 2000000  And so on ...
     * Get all price list definitions
     */
    async listPriceListsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PriceListModelsPriceList>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/PriceList/List`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PriceListModelsPriceListFromJSON));
    }

    /**
     * - Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.  - ID for Ordinary, Sale and Campaign price lists starts from 1000000.   The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary=0, Sale=1, Capaign=2)  So :  Ordinary price list for market with ID 1 has ID = 1000000  Sale price list for market with ID 1 has ID = 1000001  Campaign price list for market with ID 1 has ID = 1000002  Ordinary price list for market with ID 2 has ID = 2000000  And so on ...
     * Get all price list definitions
     */
    async listPriceLists(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PriceListModelsPriceList>> {
        const response = await this.listPriceListsRaw(initOverrides);
        return await response.value();
    }

    /**
     * - Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.  - ID for Ordinary, Sale and Campaign price lists starts from 1000000.   The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary=0, Sale=1, Capaign=2)  So :  Ordinary price list for market with ID 1 has ID = 1000000  Sale price list for market with ID 1 has ID = 1000001  Campaign price list for market with ID 1 has ID = 1000002  Ordinary price list for market with ID 2 has ID = 2000000  And so on ...
     * Updates price list prices
     */
    async updatePriceListPricesRaw(requestParameters: UpdatePriceListPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PriceListModelsPriceListPriceResponse>> {
        if (requestParameters.priceListPrices === null || requestParameters.priceListPrices === undefined) {
            throw new runtime.RequiredError('priceListPrices','Required parameter requestParameters.priceListPrices was null or undefined when calling updatePriceListPrices.');
        }

        const queryParameters: any = {};

        if (requestParameters.productIdType !== undefined) {
            queryParameters['productIdType'] = requestParameters.productIdType;
        }

        if (requestParameters.pricesIncVat !== undefined) {
            queryParameters['pricesIncVat'] = requestParameters.pricesIncVat;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/PriceList/Price`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.priceListPrices.map(PriceListModelsWritePriceListPriceToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PriceListModelsPriceListPriceResponseFromJSON(jsonValue));
    }

    /**
     * - Prices on campaign price lists (id: xxxxxx2) can not be updated. Any such entries will be ignored.  - ID for Ordinary, Sale and Campaign price lists starts from 1000000.   The ID is calculated by this formula, Market ID * 1000000 + Type of price list (Ordinary=0, Sale=1, Capaign=2)  So :  Ordinary price list for market with ID 1 has ID = 1000000  Sale price list for market with ID 1 has ID = 1000001  Campaign price list for market with ID 1 has ID = 1000002  Ordinary price list for market with ID 2 has ID = 2000000  And so on ...
     * Updates price list prices
     */
    async updatePriceListPrices(requestParameters: UpdatePriceListPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PriceListModelsPriceListPriceResponse> {
        const response = await this.updatePriceListPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const UpdatePriceListPricesProductIdTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type UpdatePriceListPricesProductIdTypeEnum = typeof UpdatePriceListPricesProductIdTypeEnum[keyof typeof UpdatePriceListPricesProductIdTypeEnum];
