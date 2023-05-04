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
  EnvelopeUserModelsReadUserProfile,
  UserModelsUserProfileQuery,
  UserModelsWriteUserProfile,
} from '../models';
import {
    EnvelopeUserModelsReadUserProfileFromJSON,
    EnvelopeUserModelsReadUserProfileToJSON,
    UserModelsUserProfileQueryFromJSON,
    UserModelsUserProfileQueryToJSON,
    UserModelsWriteUserProfileFromJSON,
    UserModelsWriteUserProfileToJSON,
} from '../models';

export interface CreateUserProfileRequest {
    userProfile: UserModelsWriteUserProfile;
}

export interface DeleteUserProfileRequest {
    email: string;
}

export interface GetUserProfileRequest {
    query: UserModelsUserProfileQuery;
}

export interface UpdateUserProfileRequest {
    userProfile: UserModelsWriteUserProfile;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Create user profile
     */
    async createUserProfileRaw(requestParameters: CreateUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeUserModelsReadUserProfile>> {
        if (requestParameters.userProfile === null || requestParameters.userProfile === undefined) {
            throw new runtime.RequiredError('userProfile','Required parameter requestParameters.userProfile was null or undefined when calling createUserProfile.');
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
            path: `/API/User`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserModelsWriteUserProfileToJSON(requestParameters.userProfile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeUserModelsReadUserProfileFromJSON(jsonValue));
    }

    /**
     * Create user profile
     */
    async createUserProfile(requestParameters: CreateUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeUserModelsReadUserProfile> {
        const response = await this.createUserProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete user profile
     */
    async deleteUserProfileRaw(requestParameters: DeleteUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling deleteUserProfile.');
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
            path: `/API/User/{email}`.replace(`{${"email"}}`, encodeURIComponent(String(requestParameters.email))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete user profile
     */
    async deleteUserProfile(requestParameters: DeleteUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteUserProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific user profile
     */
    async getUserProfileRaw(requestParameters: GetUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeUserModelsReadUserProfile>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling getUserProfile.');
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
            path: `/API/User/Query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserModelsUserProfileQueryToJSON(requestParameters.query),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeUserModelsReadUserProfileFromJSON(jsonValue));
    }

    /**
     * Get a specific user profile
     */
    async getUserProfile(requestParameters: GetUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeUserModelsReadUserProfile> {
        const response = await this.getUserProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update user profile
     */
    async updateUserProfileRaw(requestParameters: UpdateUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeUserModelsReadUserProfile>> {
        if (requestParameters.userProfile === null || requestParameters.userProfile === undefined) {
            throw new runtime.RequiredError('userProfile','Required parameter requestParameters.userProfile was null or undefined when calling updateUserProfile.');
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
            path: `/API/User`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserModelsWriteUserProfileToJSON(requestParameters.userProfile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeUserModelsReadUserProfileFromJSON(jsonValue));
    }

    /**
     * Update user profile
     */
    async updateUserProfile(requestParameters: UpdateUserProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeUserModelsReadUserProfile> {
        const response = await this.updateUserProfileRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
