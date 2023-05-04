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
  EnvelopeSupplierModelsReadSupplier,
  SupplierModelsReadSupplier,
  SupplierModelsSupplierQuery,
  SupplierModelsWriteSupplier,
} from '../models';
import {
    EnvelopeSupplierModelsReadSupplierFromJSON,
    EnvelopeSupplierModelsReadSupplierToJSON,
    SupplierModelsReadSupplierFromJSON,
    SupplierModelsReadSupplierToJSON,
    SupplierModelsSupplierQueryFromJSON,
    SupplierModelsSupplierQueryToJSON,
    SupplierModelsWriteSupplierFromJSON,
    SupplierModelsWriteSupplierToJSON,
} from '../models';

export interface CreateSupplierRequest {
    supplier: SupplierModelsWriteSupplier;
}

export interface GetSupplierByIdRequest {
    id: number;
}

export interface QuerySuppliersRequest {
    query: SupplierModelsSupplierQuery;
}

export interface UpdateSupplierRequest {
    id: number;
    supplier: SupplierModelsWriteSupplier;
}

/**
 * 
 */
export class SupplierApi extends runtime.BaseAPI {

    /**
     * Create a new supplier
     */
    async createSupplierRaw(requestParameters: CreateSupplierRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeSupplierModelsReadSupplier>> {
        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling createSupplier.');
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
            path: `/API/Supplier`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SupplierModelsWriteSupplierToJSON(requestParameters.supplier),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeSupplierModelsReadSupplierFromJSON(jsonValue));
    }

    /**
     * Create a new supplier
     */
    async createSupplier(requestParameters: CreateSupplierRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeSupplierModelsReadSupplier> {
        const response = await this.createSupplierRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific supplier
     */
    async getSupplierByIdRaw(requestParameters: GetSupplierByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeSupplierModelsReadSupplier>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSupplierById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Supplier/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeSupplierModelsReadSupplierFromJSON(jsonValue));
    }

    /**
     * Get a specific supplier
     */
    async getSupplierById(requestParameters: GetSupplierByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeSupplierModelsReadSupplier> {
        const response = await this.getSupplierByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query suppliers
     */
    async querySuppliersRaw(requestParameters: QuerySuppliersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SupplierModelsReadSupplier>>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling querySuppliers.');
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
            path: `/API/Supplier/Query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SupplierModelsSupplierQueryToJSON(requestParameters.query),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SupplierModelsReadSupplierFromJSON));
    }

    /**
     * Query suppliers
     */
    async querySuppliers(requestParameters: QuerySuppliersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SupplierModelsReadSupplier>> {
        const response = await this.querySuppliersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Leaving out a property will ensure no changes are made to that property.  Collection properties will delete and/or add as necessary to match the supplied data.
     * Updates a supplier
     */
    async updateSupplierRaw(requestParameters: UpdateSupplierRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeSupplierModelsReadSupplier>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateSupplier.');
        }

        if (requestParameters.supplier === null || requestParameters.supplier === undefined) {
            throw new runtime.RequiredError('supplier','Required parameter requestParameters.supplier was null or undefined when calling updateSupplier.');
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
            path: `/API/Supplier/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SupplierModelsWriteSupplierToJSON(requestParameters.supplier),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeSupplierModelsReadSupplierFromJSON(jsonValue));
    }

    /**
     * Leaving out a property will ensure no changes are made to that property.  Collection properties will delete and/or add as necessary to match the supplied data.
     * Updates a supplier
     */
    async updateSupplier(requestParameters: UpdateSupplierRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeSupplierModelsReadSupplier> {
        const response = await this.updateSupplierRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
