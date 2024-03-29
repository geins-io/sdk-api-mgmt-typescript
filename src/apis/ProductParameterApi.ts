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
    BaseEnvelopeFromJSON,
    BaseEnvelopeToJSON,
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

export interface GetProductParameterRequest {
    id: number;
}

export interface GetProductParameterGroupRequest {
    id: number;
}

export interface GetProductParameterPredefinedValueRequest {
    id: number;
}

export interface GetProductParameterValueRequest {
    id: number;
    predefinedValueId?: string;
}

export interface ReplaceProductParameterValuesBatchRequest {
    productParameterBatch: ProductParameterModelsWriteProductParameterValueBatch;
}

export interface UpdateProductParameterRequest {
    id: number;
    productParameter: ProductParameterModelsWriteProductParameter;
}

export interface UpdateProductParameterGroupRequest {
    id: number;
    productParameterGroup: ProductParameterModelsWriteProductParameterGroup;
}

export interface UpdateProductParameterValuesBatchRequest {
    productParameterBatch: ProductParameterModelsWriteProductParameterValueBatch;
}

/**
 * 
 */
export class ProductParameterApi extends runtime.BaseAPI {

    /**
     * Creates or updates a new product parameter value.
     * Create/update product parameter value
     */
    async createOrUpdateProductParameterValueRaw(requestParameters: CreateOrUpdateProductParameterValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterValue>> {
        if (requestParameters.productParameterValue === null || requestParameters.productParameterValue === undefined) {
            throw new runtime.RequiredError('productParameterValue','Required parameter requestParameters.productParameterValue was null or undefined when calling createOrUpdateProductParameterValue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Creates or updates a new product parameter value.
     * Create/update product parameter value
     */
    async createOrUpdateProductParameterValue(requestParameters: CreateOrUpdateProductParameterValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterValue> {
        const response = await this.createOrUpdateProductParameterValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new product parameter.
     * Create product parameter
     */
    async createProductParameterRaw(requestParameters: CreateProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameter>> {
        if (requestParameters.productParameter === null || requestParameters.productParameter === undefined) {
            throw new runtime.RequiredError('productParameter','Required parameter requestParameters.productParameter was null or undefined when calling createProductParameter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Creates a new product parameter.
     * Create product parameter
     */
    async createProductParameter(requestParameters: CreateProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameter> {
        const response = await this.createProductParameterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new product parameter group.
     * Create product parameter group
     */
    async createProductParameterGroupRaw(requestParameters: CreateProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterGroup>> {
        if (requestParameters.productParameterGroup === null || requestParameters.productParameterGroup === undefined) {
            throw new runtime.RequiredError('productParameterGroup','Required parameter requestParameters.productParameterGroup was null or undefined when calling createProductParameterGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Creates a new product parameter group.
     * Create product parameter group
     */
    async createProductParameterGroup(requestParameters: CreateProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterGroup> {
        const response = await this.createProductParameterGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new predefined value for a product parameter.
     * Create product parameter predefined value
     */
    async createProductParameterPredefinedValueRaw(requestParameters: CreateProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterPredefinedValue>> {
        if (requestParameters.productParameterPredefinedValue === null || requestParameters.productParameterPredefinedValue === undefined) {
            throw new runtime.RequiredError('productParameterPredefinedValue','Required parameter requestParameters.productParameterPredefinedValue was null or undefined when calling createProductParameterPredefinedValue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Creates a new predefined value for a product parameter.
     * Create product parameter predefined value
     */
    async createProductParameterPredefinedValue(requestParameters: CreateProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterPredefinedValue> {
        const response = await this.createProductParameterPredefinedValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a specific product parameter
     * Get product parameter
     */
    async getProductParameterRaw(requestParameters: GetProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameter>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductParameter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Gets a specific product parameter
     * Get product parameter
     */
    async getProductParameter(requestParameters: GetProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameter> {
        const response = await this.getProductParameterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a specific product parameter group.
     * Get product parameter group
     */
    async getProductParameterGroupRaw(requestParameters: GetProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterGroup>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductParameterGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Gets a specific product parameter group.
     * Get product parameter group
     */
    async getProductParameterGroup(requestParameters: GetProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterGroup> {
        const response = await this.getProductParameterGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a specific predefined value for a product parameter.
     * Get product parameter predefined value
     */
    async getProductParameterPredefinedValueRaw(requestParameters: GetProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeProductParameterModelsReadProductParameterValue>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProductParameterPredefinedValue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Gets a specific predefined value for a product parameter.
     * Get product parameter predefined value
     */
    async getProductParameterPredefinedValue(requestParameters: GetProductParameterPredefinedValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterValue> {
        const response = await this.getProductParameterPredefinedValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a specific product parameter value.
     * Get product parameter value
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
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Gets a specific product parameter value.
     * Get product parameter value
     */
    async getProductParameterValue(requestParameters: GetProductParameterValueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterValue> {
        const response = await this.getProductParameterValueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Replaces multiple product parameter values.
     * Replace product parameter values (batch)
     */
    async replaceProductParameterValuesBatchRaw(requestParameters: ReplaceProductParameterValuesBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseEnvelope>> {
        if (requestParameters.productParameterBatch === null || requestParameters.productParameterBatch === undefined) {
            throw new runtime.RequiredError('productParameterBatch','Required parameter requestParameters.productParameterBatch was null or undefined when calling replaceProductParameterValuesBatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseEnvelopeFromJSON(jsonValue));
    }

    /**
     * Replaces multiple product parameter values.
     * Replace product parameter values (batch)
     */
    async replaceProductParameterValuesBatch(requestParameters: ReplaceProductParameterValuesBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseEnvelope> {
        const response = await this.replaceProductParameterValuesBatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a product parameter.    Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Update product parameter
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
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Updates a product parameter.    Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Update product parameter
     */
    async updateProductParameter(requestParameters: UpdateProductParameterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameter> {
        const response = await this.updateProductParameterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a product parameter group.    Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Update product parameter group
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
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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
     * Updates a product parameter group.    Leaving out a property will ensure no changes are made to that property. Collection properties will delete and/or add as necessary to match the supplied data.
     * Update product parameter group
     */
    async updateProductParameterGroup(requestParameters: UpdateProductParameterGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeProductParameterModelsReadProductParameterGroup> {
        const response = await this.updateProductParameterGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates multiple product parameter values.
     * Update product parameter values (batch)
     */
    async updateProductParameterValuesBatchRaw(requestParameters: UpdateProductParameterValuesBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseEnvelope>> {
        if (requestParameters.productParameterBatch === null || requestParameters.productParameterBatch === undefined) {
            throw new runtime.RequiredError('productParameterBatch','Required parameter requestParameters.productParameterBatch was null or undefined when calling updateProductParameterValuesBatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
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

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseEnvelopeFromJSON(jsonValue));
    }

    /**
     * Updates multiple product parameter values.
     * Update product parameter values (batch)
     */
    async updateProductParameterValuesBatch(requestParameters: UpdateProductParameterValuesBatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseEnvelope> {
        const response = await this.updateProductParameterValuesBatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
