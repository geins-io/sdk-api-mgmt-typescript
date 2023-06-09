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
  Envelope,
  EnvelopeProductParameterModelsReadProductParameter,
  EnvelopeProductParameterModelsReadProductParameterGroup,
  EnvelopeProductParameterModelsReadProductParameterPredefinedValue,
  EnvelopeProductParameterModelsReadProductParameterValue,
  ProductParameterModelsWriteProductParameter,
  ProductParameterModelsWriteProductParameterGroup,
  ProductParameterModelsWriteProductParameterPredefinedValue,
  ProductParameterModelsWriteProductParameterValue,
  ProductParameterModelsWriteProductParameterValueBatch,
} from '../models';
import {
    EnvelopeFromJSON,
    EnvelopeToJSON,
    EnvelopeProductParameterModelsReadProductParameterFromJSON,
    EnvelopeProductParameterModelsReadProductParameterToJSON,
    EnvelopeProductParameterModelsReadProductParameterGroupFromJSON,
    EnvelopeProductParameterModelsReadProductParameterGroupToJSON,
    EnvelopeProductParameterModelsReadProductParameterPredefinedValueFromJSON,
    EnvelopeProductParameterModelsReadProductParameterPredefinedValueToJSON,
    EnvelopeProductParameterModelsReadProductParameterValueFromJSON,
    EnvelopeProductParameterModelsReadProductParameterValueToJSON,
    ProductParameterModelsWriteProductParameterFromJSON,
    ProductParameterModelsWriteProductParameterToJSON,
    ProductParameterModelsWriteProductParameterGroupFromJSON,
    ProductParameterModelsWriteProductParameterGroupToJSON,
    ProductParameterModelsWriteProductParameterPredefinedValueFromJSON,
    ProductParameterModelsWriteProductParameterPredefinedValueToJSON,
    ProductParameterModelsWriteProductParameterValueFromJSON,
    ProductParameterModelsWriteProductParameterValueToJSON,
    ProductParameterModelsWriteProductParameterValueBatchFromJSON,
    ProductParameterModelsWriteProductParameterValueBatchToJSON,
} from '../models';

export interface BatchReplaceProductParameterValuesRequest {
    productParameterBatch: ProductParameterModelsWriteProductParameterValueBatch;
}

export interface BatchUpdateProductParameterValuesRequest {
    productParameterBatch: ProductParameterModelsWriteProductParameterValueBatch;
}

export interface CreateOrUpdateProductParameterValueRequest {
    productParameterValue: ProductParameterModelsWriteProductParameterValue;
}

export interface CreateProductParameterRequest {
    productParameter: ProductParameterModelsWriteProductParameter;
}

export interface CreateProductParameterGroupRequest {
    productParameterGroup: ProductParameterModelsWriteProductParameterGroup;
}

export interface CreateProductParameterPredefinedValueRequest {
    productParameterPredefinedValue: ProductParameterModelsWriteProductParameterPredefinedValue;
}

export interface GetProductParameterByIdRequest {
    id: number;
}

export interface GetProductParameterGroupByIdRequest {
    id: number;
}

export interface GetProductParameterPredefinedValueRequest {
    id: number;
}

export interface GetProductParameterValueRequest {
    id: number;
    predefinedValueId?: string;
}

export interface UpdateProductParameterRequest {
    id: number;
    productParameter: ProductParameterModelsWriteProductParameter;
}

export interface UpdateProductParameterGroupRequest {
    id: number;
    productParameterGroup: ProductParameterModelsWriteProductParameterGroup;
}

/**
 * 
 */
export class ProductParameterApi extends runtime.BaseAPI {

    /**
     * Replace multiple product parameter values
     */
    async batchReplaceProductParameterValuesRaw(requestParameters: BatchReplaceProductParameterValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Envelope>> {
        if (requestParameters.productParameterBatch === null || requestParameters.productParameterBatch === undefined) {
            throw new runtime.RequiredError('productParameterBatch','Required parameter requestParameters.productParameterBatch was null or undefined when calling batchReplaceProductParameterValues.');
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
            path: `/API/ProductParameter/Values`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterValueBatchToJSON(requestParameters.productParameterBatch),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeFromJSON(jsonValue));
    }

    /**
     * Replace multiple product parameter values
     */
    async batchReplaceProductParameterValues(requestParameters: BatchReplaceProductParameterValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Envelope> {
        const response = await this.batchReplaceProductParameterValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update multiple product parameter values
     */
    async batchUpdateProductParameterValuesRaw(requestParameters: BatchUpdateProductParameterValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Envelope>> {
        if (requestParameters.productParameterBatch === null || requestParameters.productParameterBatch === undefined) {
            throw new runtime.RequiredError('productParameterBatch','Required parameter requestParameters.productParameterBatch was null or undefined when calling batchUpdateProductParameterValues.');
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
            path: `/API/ProductParameter/Values`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterValueBatchToJSON(requestParameters.productParameterBatch),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeFromJSON(jsonValue));
    }

    /**
     * Update multiple product parameter values
     */
    async batchUpdateProductParameterValues(requestParameters: BatchUpdateProductParameterValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Envelope> {
        const response = await this.batchUpdateProductParameterValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update a new product parameter value
     */
    async createOrUpdateProductParameterValueRaw(requestParameters: CreateOrUpdateProductParameterValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterValue>> {
        if (requestParameters.productParameterValue === null || requestParameters.productParameterValue === undefined) {
            throw new runtime.RequiredError('productParameterValue','Required parameter requestParameters.productParameterValue was null or undefined when calling createOrUpdateProductParameterValue.');
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
            path: `/API/ProductParameter/Value`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterValueToJSON(requestParameters.productParameterValue),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterValueFromJSON(jsonValue));
    }

    /**
     * Create or update a new product parameter value
     */
    async createOrUpdateProductParameterValue(requestParameters: CreateOrUpdateProductParameterValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterValue> {
        const response = await this.createOrUpdateProductParameterValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new product parameter
     */
    async createProductParameterRaw(requestParameters: CreateProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameter>> {
        if (requestParameters.productParameter === null || requestParameters.productParameter === undefined) {
            throw new runtime.RequiredError('productParameter','Required parameter requestParameters.productParameter was null or undefined when calling createProductParameter.');
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
            path: `/API/ProductParameter`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterToJSON(requestParameters.productParameter),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterFromJSON(jsonValue));
    }

    /**
     * Create a new product parameter
     */
    async createProductParameter(requestParameters: CreateProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameter> {
        const response = await this.createProductParameterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new product parameter group
     */
    async createProductParameterGroupRaw(requestParameters: CreateProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterGroup>> {
        if (requestParameters.productParameterGroup === null || requestParameters.productParameterGroup === undefined) {
            throw new runtime.RequiredError('productParameterGroup','Required parameter requestParameters.productParameterGroup was null or undefined when calling createProductParameterGroup.');
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
            path: `/API/ProductParameter/Group`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterGroupToJSON(requestParameters.productParameterGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterGroupFromJSON(jsonValue));
    }

    /**
     * Create a new product parameter group
     */
    async createProductParameterGroup(requestParameters: CreateProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterGroup> {
        const response = await this.createProductParameterGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new predefined value for a product parameter
     */
    async createProductParameterPredefinedValueRaw(requestParameters: CreateProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterPredefinedValue>> {
        if (requestParameters.productParameterPredefinedValue === null || requestParameters.productParameterPredefinedValue === undefined) {
            throw new runtime.RequiredError('productParameterPredefinedValue','Required parameter requestParameters.productParameterPredefinedValue was null or undefined when calling createProductParameterPredefinedValue.');
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
            path: `/API/ProductParameter/PredefinedValue`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterPredefinedValueToJSON(requestParameters.productParameterPredefinedValue),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterPredefinedValueFromJSON(jsonValue));
    }

    /**
     * Create a new predefined value for a product parameter
     */
    async createProductParameterPredefinedValue(requestParameters: CreateProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterPredefinedValue> {
        const response = await this.createProductParameterPredefinedValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific product parameter
     */
    async getProductParameterByIdRaw(requestParameters: GetProductParameterByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameter>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductParameterById.');
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
            path: `/API/ProductParameter/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterFromJSON(jsonValue));
    }

    /**
     * Get a specific product parameter
     */
    async getProductParameterById(requestParameters: GetProductParameterByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameter> {
        const response = await this.getProductParameterByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific product parameter group
     */
    async getProductParameterGroupByIdRaw(requestParameters: GetProductParameterGroupByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterGroup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductParameterGroupById.');
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
            path: `/API/ProductParameter/Group/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterGroupFromJSON(jsonValue));
    }

    /**
     * Get a specific product parameter group
     */
    async getProductParameterGroupById(requestParameters: GetProductParameterGroupByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterGroup> {
        const response = await this.getProductParameterGroupByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific predefined value for a product parameter
     */
    async getProductParameterPredefinedValueRaw(requestParameters: GetProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterValue>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductParameterPredefinedValue.');
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
            path: `/API/ProductParameter/PredefinedValue/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterValueFromJSON(jsonValue));
    }

    /**
     * Get a specific predefined value for a product parameter
     */
    async getProductParameterPredefinedValue(requestParameters: GetProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterValue> {
        const response = await this.getProductParameterPredefinedValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific product parameter value
     */
    async getProductParameterValueRaw(requestParameters: GetProductParameterValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterValue>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductParameterValue.');
        }

        const queryParameters: any = {};

        if (requestParameters.predefinedValueId !== undefined) {
            queryParameters['predefinedValueId'] = requestParameters.predefinedValueId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/ProductParameter/Value/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterValueFromJSON(jsonValue));
    }

    /**
     * Get a specific product parameter value
     */
    async getProductParameterValue(requestParameters: GetProductParameterValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterValue> {
        const response = await this.getProductParameterValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Updates a product parameter
     */
    async updateProductParameterRaw(requestParameters: UpdateProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameter>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateProductParameter.');
        }

        if (requestParameters.productParameter === null || requestParameters.productParameter === undefined) {
            throw new runtime.RequiredError('productParameter','Required parameter requestParameters.productParameter was null or undefined when calling updateProductParameter.');
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
            path: `/API/ProductParameter/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterToJSON(requestParameters.productParameter),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterFromJSON(jsonValue));
    }

    /**
     * Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Updates a product parameter
     */
    async updateProductParameter(requestParameters: UpdateProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameter> {
        const response = await this.updateProductParameterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Update a product parameter group
     */
    async updateProductParameterGroupRaw(requestParameters: UpdateProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterGroup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateProductParameterGroup.');
        }

        if (requestParameters.productParameterGroup === null || requestParameters.productParameterGroup === undefined) {
            throw new runtime.RequiredError('productParameterGroup','Required parameter requestParameters.productParameterGroup was null or undefined when calling updateProductParameterGroup.');
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
            path: `/API/ProductParameter/Group/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductParameterModelsWriteProductParameterGroupToJSON(requestParameters.productParameterGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeProductParameterModelsReadProductParameterGroupFromJSON(jsonValue));
    }

    /**
     * Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Update a product parameter group
     */
    async updateProductParameterGroup(requestParameters: UpdateProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterGroup> {
        const response = await this.updateProductParameterGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
