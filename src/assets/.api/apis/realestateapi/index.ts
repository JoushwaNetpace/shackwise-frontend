import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'realestateapi/unknown (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * For retrieving of up to 1000 properties at once.  Can be used standalone, but it's
   * designed to work together with the Property Search API.  Use this API for quickly
   * exporting lists, or bulk search requests for analytics.  Pass in addresses, or a list of
   * ID's returned from the Property Search API.
   *
   * @summary Property Detail Bulk API
   */
  propertyDetailBulkApi(body: types.PropertyDetailBulkApiBodyParam, metadata?: types.PropertyDetailBulkApiMetadataParam): Promise<FetchResponse<200, types.PropertyDetailBulkApiResponse200>> {
    return this.core.fetch('/v2/PropertyDetailBulk', 'post', body, metadata);
  }

  /**
   * Comps, Mortgages, Mailing Addresses, Property Sales History & More!
   *
   * @summary Property Detail API
   * @throws FetchError<400, types.PropertyDetailApi1Response400> 400
   * @throws FetchError<401, types.PropertyDetailApi1Response401> 401
   * @throws FetchError<404, types.PropertyDetailApi1Response404> 404
   * @throws FetchError<429, types.PropertyDetailApi1Response429> 429
   * @throws FetchError<500, types.PropertyDetailApi1Response500> 500
   */
  propertyDetailApi1(body?: types.PropertyDetailApi1BodyParam, metadata?: types.PropertyDetailApi1MetadataParam): Promise<FetchResponse<200, types.PropertyDetailApi1Response200>> {
    return this.core.fetch('/v2/PropertyDetail', 'post', body, metadata);
  }

  /**
   * Shape files API and property search API.  All requests return the parcel boundaries in
   * GEOJSON format.  Quickly implement this API into your mapping applications.  
   *
   * Questions on how to best implement this API into your map?  Just reach out to our team
   * for best practices with using this API.
   *
   * @summary Property Boundary API
   * @throws FetchError<400, types.PropertyParcelApiResponse400> 400
   * @throws FetchError<404, types.PropertyParcelApiResponse404> 404
   */
  propertyParcelApi(body?: types.PropertyParcelApiBodyParam, metadata?: types.PropertyParcelApiMetadataParam): Promise<FetchResponse<200, types.PropertyParcelApiResponse200>> {
    return this.core.fetch('/v1/PropertyParcel', 'post', body, metadata);
  }

  /**
   * Searchable API for list building, search counts, and advanced filtering on properties. 
   * You can also use this API to implement your own comparables API, or property analytics
   * API.  Questions?  Contact our team to ask us for best practices with using this API.This
   * API implements easy paging so your apps can easily manage filtered results in a results
   * pane with paging.  When your user clicks on a result, just use the id from this API to
   * get the full property results using the Property Detail API.  Questions on best
   * practices for implementing paged property results in your app?  Just contact our team.
   *
   * @summary Property Search API
   */
  propertySearchApi(body: types.PropertySearchApiBodyParam, metadata: types.PropertySearchApiMetadataParam): Promise<FetchResponse<200, types.PropertySearchApiResponse200>>;
  propertySearchApi(metadata: types.PropertySearchApiMetadataParam): Promise<FetchResponse<200, types.PropertySearchApiResponse200>>;
  propertySearchApi(body?: types.PropertySearchApiBodyParam | types.PropertySearchApiMetadataParam, metadata?: types.PropertySearchApiMetadataParam): Promise<FetchResponse<200, types.PropertySearchApiResponse200>> {
    return this.core.fetch('/v2/PropertySearch', 'post', body, metadata);
  }

  /**
   * Property Comps API
   *
   * @throws FetchError<400, types.PropertyCompsApiResponse400> 400
   */
  propertyCompsApi(body?: types.PropertyCompsApiBodyParam, metadata?: types.PropertyCompsApiMetadataParam): Promise<FetchResponse<200, types.PropertyCompsApiResponse200>> {
    return this.core.fetch('/v2/PropertyComps', 'post', body, metadata);
  }

  /**
   * The AutoComplete approximates like property searches based on Incomplete Address Parts
   * and Combinations. Our AutoComplete algorithms are powered by machine learning and give
   * you rich property lists without having to design tons of different and possibly complex
   * Property Search queries.
   *
   * The results from this API can be used in Property Search to get quick Property Lists.
   * Use this API in application Search Bars or anywhere that your users are manually
   * inputting addresses.
   *
   * @summary AutoComplete API
   */
  autocompleteApi(body: types.AutocompleteApiBodyParam, metadata?: types.AutocompleteApiMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/v2/AutoComplete', 'post', body, metadata);
  }

  /**
   * Verify 1 - 100 addresses at a time.
   *
   * @summary Address Verification API
   * @throws FetchError<400, types.AddressVerificationApiResponse400> 400
   */
  addressVerificationApi(body?: types.AddressVerificationApiBodyParam, metadata?: types.AddressVerificationApiMetadataParam): Promise<FetchResponse<200, types.AddressVerificationApiResponse200>> {
    return this.core.fetch('/v2/AddressVerification', 'post', body, metadata);
  }

  /**
   * Customize your comps model
   *
   * @summary /v3/PropertyComps API
   * @throws FetchError<400, types.V3CompsResponseObjectResponse400> 400
   */
  v3CompsResponseObject(body?: types.V3CompsResponseObjectBodyParam): Promise<FetchResponse<200, types.V3CompsResponseObjectResponse200>> {
    return this.core.fetch('/v3/PropertyComps', 'post', body);
  }

  /**
   * Check out the functionality of this endpoint at https://www.propgpt.com
   *
   * @summary PropGPT API
   */
  propgptApi(body: types.PropgptApiBodyParam, metadata: types.PropgptApiMetadataParam): Promise<FetchResponse<200, types.PropgptApiResponse200>> {
    return this.core.fetch('/v2/PropGPT', 'post', body, metadata);
  }

  /**
   * Comps, Mortgages, Mailing Addresses, Property Sales History & More!
   *
   * @summary Property Detail API (COPY)
   * @throws FetchError<400, types.PropertyDetailApiCopyResponse400> 400
   * @throws FetchError<401, types.PropertyDetailApiCopyResponse401> 401
   * @throws FetchError<404, types.PropertyDetailApiCopyResponse404> 404
   * @throws FetchError<429, types.PropertyDetailApiCopyResponse429> 429
   * @throws FetchError<500, types.PropertyDetailApiCopyResponse500> 500
   */
  propertyDetailApiCopy(body?: types.PropertyDetailApiCopyBodyParam, metadata?: types.PropertyDetailApiCopyMetadataParam): Promise<FetchResponse<200, types.PropertyDetailApiCopyResponse200>> {
    return this.core.fetch('/v2/PropertyDetail/copy', 'post', body, metadata);
  }

  /**
   * Searchable API for list building, search counts, and advanced filtering on properties. 
   * You can also use this API to implement your own comparables API, or property analytics
   * API.  Questions?  Contact our team to ask us for best practices with using this API.This
   * API implements easy paging so your apps can easily manage filtered results in a results
   * pane with paging.  When your user clicks on a result, just use the id from this API to
   * get the full property results using the Property Detail API.  Questions on best
   * practices for implementing paged property results in your app?  Just contact our team.
   *
   * @summary Property Search API (COPY)
   */
  propertySearchApiCopy(body: types.PropertySearchApiCopyBodyParam, metadata: types.PropertySearchApiCopyMetadataParam): Promise<FetchResponse<200, types.PropertySearchApiCopyResponse200>>;
  propertySearchApiCopy(metadata: types.PropertySearchApiCopyMetadataParam): Promise<FetchResponse<200, types.PropertySearchApiCopyResponse200>>;
  propertySearchApiCopy(body?: types.PropertySearchApiCopyBodyParam | types.PropertySearchApiCopyMetadataParam, metadata?: types.PropertySearchApiCopyMetadataParam): Promise<FetchResponse<200, types.PropertySearchApiCopyResponse200>> {
    return this.core.fetch('/v2/PropertySearch (COPY)', 'post', body, metadata);
  }

  /**
   * Comps, Mortgages, Mailing Addresses, Property Sales History & More!
   *
   * @summary Property Detail API (COPY)
   * @throws FetchError<400, types.PropertyDetailApiCopy1Response400> 400
   * @throws FetchError<401, types.PropertyDetailApiCopy1Response401> 401
   * @throws FetchError<404, types.PropertyDetailApiCopy1Response404> 404
   * @throws FetchError<429, types.PropertyDetailApiCopy1Response429> 429
   * @throws FetchError<500, types.PropertyDetailApiCopy1Response500> 500
   */
  propertyDetailApiCopy1(body?: types.PropertyDetailApiCopy1BodyParam, metadata?: types.PropertyDetailApiCopy1MetadataParam): Promise<FetchResponse<200, types.PropertyDetailApiCopy1Response200>> {
    return this.core.fetch('/v2/PropertyDetail (COPY)', 'post', body, metadata);
  }

  /**
   * CSV Generator API
   *
   * @throws FetchError<400, types.CsvGeneratorApiResponse400> 400
   */
  csvGeneratorApi(body?: types.CsvGeneratorApiBodyParam): Promise<FetchResponse<200, types.CsvGeneratorApiResponse200>> {
    return this.core.fetch('/v2/CSVBuilder', 'post', body);
  }

  /**
   * Need the most precise Valuations for properties possible? Try out our Lender Grade AVM
   * that uses statistical modeling, recent sales data, and market-to-market analysis to
   * produce reliable AVMs
   *
   * @summary Lender Grade AVM API
   * @throws FetchError<400, types.LenderGradeAvmApiResponse400> 400
   */
  lenderGradeAvmApi(body?: types.LenderGradeAvmApiBodyParam): Promise<FetchResponse<200, types.LenderGradeAvmApiResponse200>> {
    return this.core.fetch('/v2/PropertyAvm', 'post', body);
  }

  /**
   * Go beyond our standard tax_liens & add Involuntary Lien Data to your Insights on a
   * Property
   *
   * @summary Involuntary Liens API
   * @throws FetchError<400, types.InvoluntaryLienApiResponse400> 400
   */
  involuntaryLienApi(body?: types.InvoluntaryLienApiBodyParam): Promise<FetchResponse<200, types.InvoluntaryLienApiResponse200>> {
    return this.core.fetch('/v2/Reports/PropertyLiens', 'post', body);
  }

  /**
   * Have your PropTech Maps Come to Life with Unlimited "Pins" on a Map API. Only available
   * on Growth+ Plans
   *
   * @summary [BETA] Mapping ("Pins") API
   * @throws FetchError<400, types.BetaMappingPinsApiResponse400> 400
   */
  betaMappingPinsApi(body?: types.BetaMappingPinsApiBodyParam): Promise<FetchResponse<200, types.BetaMappingPinsApiResponse200>> {
    return this.core.fetch('/v2/PropertyMapping', 'post', body);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AddressVerificationApiBodyParam, AddressVerificationApiMetadataParam, AddressVerificationApiResponse200, AddressVerificationApiResponse400, AutocompleteApiBodyParam, AutocompleteApiMetadataParam, BetaMappingPinsApiBodyParam, BetaMappingPinsApiResponse200, BetaMappingPinsApiResponse400, CsvGeneratorApiBodyParam, CsvGeneratorApiResponse200, CsvGeneratorApiResponse400, InvoluntaryLienApiBodyParam, InvoluntaryLienApiResponse200, InvoluntaryLienApiResponse400, LenderGradeAvmApiBodyParam, LenderGradeAvmApiResponse200, LenderGradeAvmApiResponse400, PropertyCompsApiBodyParam, PropertyCompsApiMetadataParam, PropertyCompsApiResponse200, PropertyCompsApiResponse400, PropertyDetailApi1BodyParam, PropertyDetailApi1MetadataParam, PropertyDetailApi1Response200, PropertyDetailApi1Response400, PropertyDetailApi1Response401, PropertyDetailApi1Response404, PropertyDetailApi1Response429, PropertyDetailApi1Response500, PropertyDetailApiCopy1BodyParam, PropertyDetailApiCopy1MetadataParam, PropertyDetailApiCopy1Response200, PropertyDetailApiCopy1Response400, PropertyDetailApiCopy1Response401, PropertyDetailApiCopy1Response404, PropertyDetailApiCopy1Response429, PropertyDetailApiCopy1Response500, PropertyDetailApiCopyBodyParam, PropertyDetailApiCopyMetadataParam, PropertyDetailApiCopyResponse200, PropertyDetailApiCopyResponse400, PropertyDetailApiCopyResponse401, PropertyDetailApiCopyResponse404, PropertyDetailApiCopyResponse429, PropertyDetailApiCopyResponse500, PropertyDetailBulkApiBodyParam, PropertyDetailBulkApiMetadataParam, PropertyDetailBulkApiResponse200, PropertyParcelApiBodyParam, PropertyParcelApiMetadataParam, PropertyParcelApiResponse200, PropertyParcelApiResponse400, PropertyParcelApiResponse404, PropertySearchApiBodyParam, PropertySearchApiCopyBodyParam, PropertySearchApiCopyMetadataParam, PropertySearchApiCopyResponse200, PropertySearchApiMetadataParam, PropertySearchApiResponse200, PropgptApiBodyParam, PropgptApiMetadataParam, PropgptApiResponse200, V3CompsResponseObjectBodyParam, V3CompsResponseObjectResponse200, V3CompsResponseObjectResponse400 } from './types';
