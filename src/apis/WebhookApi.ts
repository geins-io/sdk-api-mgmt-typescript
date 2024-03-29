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
  EnvelopeGeinsWebhookItem,
  EnvelopeListGeinsWebhookItem,
  EnvelopeNullableGuid,
  EnvelopeNullableSystemBoolean,
  WebhookModelsRestWebhook,
} from '../models';
import {
    BaseEnvelopeFromJSON,
    BaseEnvelopeToJSON,
    EnvelopeGeinsWebhookItemFromJSON,
    EnvelopeGeinsWebhookItemToJSON,
    EnvelopeListGeinsWebhookItemFromJSON,
    EnvelopeListGeinsWebhookItemToJSON,
    EnvelopeNullableGuidFromJSON,
    EnvelopeNullableGuidToJSON,
    EnvelopeNullableSystemBooleanFromJSON,
    EnvelopeNullableSystemBooleanToJSON,
    WebhookModelsRestWebhookFromJSON,
    WebhookModelsRestWebhookToJSON,
} from '../models';

export interface CreateWebhookRequest {
    webhook: WebhookModelsRestWebhook;
}

export interface DeleteWebhookRequest {
    webhookId: string;
}

export interface GetWebhookRequest {
    webhookId: string;
}

export interface UpdateWebhookRequest {
    webhookId: string;
    webhook: WebhookModelsRestWebhook;
}

/**
 * 
 */
export class WebhookApi extends runtime.BaseAPI {

    /**
     * Creates a new webhook with the provided information.
     * Create webhook
     */
    async createWebhookRaw(requestParameters: CreateWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeNullableGuid>> {
        if (requestParameters.webhook === null || requestParameters.webhook === undefined) {
            throw new runtime.RequiredError('webhook','Required parameter requestParameters.webhook was null or undefined when calling createWebhook.');
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
            path: `/API/Webhook`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookModelsRestWebhookToJSON(requestParameters.webhook),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeNullableGuidFromJSON(jsonValue));
    }

    /**
     * Creates a new webhook with the provided information.
     * Create webhook
     */
    async createWebhook(requestParameters: CreateWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeNullableGuid> {
        const response = await this.createWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a specific webhook by its unique identifier.
     * Delete webhook
     */
    async deleteWebhookRaw(requestParameters: DeleteWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseEnvelope>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling deleteWebhook.');
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
            path: `/API/Webhook/{webhookId}`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseEnvelopeFromJSON(jsonValue));
    }

    /**
     * Deletes a specific webhook by its unique identifier.
     * Delete webhook
     */
    async deleteWebhook(requestParameters: DeleteWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseEnvelope> {
        const response = await this.deleteWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a specific webhook by its unique identifier.
     * Get webhook
     */
    async getWebhookRaw(requestParameters: GetWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeGeinsWebhookItem>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling getWebhook.');
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
            path: `/API/Webhook/{webhookId}`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeGeinsWebhookItemFromJSON(jsonValue));
    }

    /**
     * Retrieves a specific webhook by its unique identifier.
     * Get webhook
     */
    async getWebhook(requestParameters: GetWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeGeinsWebhookItem> {
        const response = await this.getWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all the webhooks in the system.
     * List webhooks
     */
    async listWebhooksRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeListGeinsWebhookItem>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-ApiKey"] = this.configuration.apiKey("X-ApiKey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Webhook/List`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeListGeinsWebhookItemFromJSON(jsonValue));
    }

    /**
     * Retrieves all the webhooks in the system.
     * List webhooks
     */
    async listWebhooks(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeListGeinsWebhookItem> {
        const response = await this.listWebhooksRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates the information of an existing webhook.
     * Update webhook
     */
    async updateWebhookRaw(requestParameters: UpdateWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeNullableSystemBoolean>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling updateWebhook.');
        }

        if (requestParameters.webhook === null || requestParameters.webhook === undefined) {
            throw new runtime.RequiredError('webhook','Required parameter requestParameters.webhook was null or undefined when calling updateWebhook.');
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
            path: `/API/Webhook/{webhookId}`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookModelsRestWebhookToJSON(requestParameters.webhook),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeNullableSystemBooleanFromJSON(jsonValue));
    }

    /**
     * Updates the information of an existing webhook.
     * Update webhook
     */
    async updateWebhook(requestParameters: UpdateWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeNullableSystemBoolean> {
        const response = await this.updateWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
