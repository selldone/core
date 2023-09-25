import {AxiosError, type AxiosInstance, type AxiosResponse, type CancelTokenSource} from "axios";
import _ from "lodash-es";
import {MD5} from "../helper/string/MD5";
import {LRUCache} from "../helper/cache/LRUCache";
const axios = require('axios');

interface IAPIConfig {
    axiosInstance: AxiosInstance;
    debounceTime?: number;
}

type DebounceGetOptions = {
    max_valid_status_code?: number | null;
    debounce_time?: number | null;
};
type PostOptions = {
    query?: any; // You can be more specific with the type if needed
    accept_error_response?: boolean; // Accept event there is error=true in response
};


// Responses
export interface IErrorResponse {
    error: string;
    code?: number;
    error_msg: string;
}

export abstract class APIAbstract {
    /**
     * Duration (in seconds) within which, if data was previously cached, the cached value will be returned in the `then()`. If the last cached data exceeds this duration, a fresh fetch will occur.
     */
    optimizer_cache_duration?: number;
    /**
     * Block last request (used when we don't want to previous result from server trigger then())
     * e.g. in products list fast navigation.
     */
    has_cancellation?: boolean=false;


    protected axiosInstance: AxiosInstance;
    protected debounceTime: number;

    constructor(config?: IAPIConfig) {
        this.axiosInstance = config?.axiosInstance || window.axios;
        this.debounceTime = config?.debounceTime || 1000;

        if (!this.axiosInstance) console.error("⚠ The Axios instance is missing! Ensure you initialize Axios before using the Selldone® APIs interface!")
    }

    /**
     * Optimizes the data fetch by utilizing cached data if available within the specified duration.
     *
     * @param {number} [duration=60] - The duration (in seconds) within which, if data was previously cached, the cached value will be returned in the `then()`. If the last cached data exceeds this duration, a fresh fetch will occur. Default is 60 seconds.
     * @returns {Object} The current object instance for method chaining.
     *
     * @example
     *
     * window.$backoffice.product.optimize(120).get('someEndpoint');  // Will use cache if data is less than 120 seconds old.
     *
     */
     optimize(duration?: number) {
        this.optimizer_cache_duration = duration===undefined?60:duration
        return this;
    }

    /**
     * Forces a fresh data fetch regardless of any available cached data or specified optimization duration.
     *
     * @returns {Object} The current object instance for method chaining.
     *
     * @example
     *
     * window.$backoffice.product.force().get('someEndpoint');  // Ignores cache and forces a fresh data fetch.
     *
     */
    force() {
        this.optimizer_cache_duration = undefined
        return this;
    }

    /**
     * Cancels the previous request.
     * This is particularly useful in scenarios like rapidly navigating through a products list
     * where we want to ensure that only the result of the most recent request is processed,
     * ignoring any previous yet-to-complete requests.
     *
     * @param {boolean} has_cancellation - Indicates if the request should be cancellable. Default is true.
     * @returns {Object} The current object instance for method chaining.
     *
     * @example
     *
     * window.$backoffice.product.cancellation(false).get('someEndpoint');
     *
     * Note: The key to cancel previous request is the url! If the cancellation activate,
     * then only one request will be sent to each url simultaneously and all previous requests will be discarded.
     *
     */
    cancellation(has_cancellation:boolean=true){
        this.has_cancellation=has_cancellation
        return this;
    }

    /**
     * Sends an HTTP GET request with specified parameters, applying a debouncing effect.
     * This means that the function will delay the processing of the request until after
     * the specified debounce time has elapsed since the last time the function was invoked.
     *
     * @param {string} url The URL endpoint to send the GET request to.
     *
     * @param {any} params The parameters to be included with the GET request.
     *
     * @param {Function} onSuccess A callback function that is executed when the request is successful.
     * It takes the response data as its only argument.
     *
     * @param {Function} [onError] An optional callback function that is executed when there's an error with the request or
     * if the response contains an error. It takes the error or error message as its only argument.
     *
     * @param {DebounceGetOptions} [options] Optional settings for the request:
     *
     * @param {number | null} [options.max_valid_status_code=null] The maximum valid status code to be treated as successful.
     * The function is checking if the status code is less than this value. For example, if set to 500, all 4xx
     * and lower status codes (e.g., 400 Bad Request, 404 Not Found, etc.) are treated as successful,
     * while 5xx status codes (e.g., 500 Internal Server Error, 502 Bad Gateway, etc.) are treated as errors.
     *
     * @param {number | null} [options.debounce_time=null] Override the default debounce time. If not provided, the default debounce time is used.
     *
     * @returns {void}
     */

    protected getDebounce(
        url: string,
        params: any,
        onSuccess: (data: any) => void,
        onError?: (error: IErrorResponse | AxiosError) => void,
        options?: DebounceGetOptions
    ): void {
        const {max_valid_status_code = null, debounce_time = null} =
        options || {};

        const debouncedFunction = _.debounce(
            () => {
                this.axiosInstance
                    .get(url, {
                        params,
                        validateStatus: (status: number) =>
                            status < (max_valid_status_code ? max_valid_status_code : 300), // Server error!
                    })
                    .then((response: AxiosResponse<any>) => {
                        const data = response.data;

                        if (data.error && onError) {
                            onError(data as IErrorResponse);
                            return;
                        }

                        if (onSuccess) {
                            onSuccess(data);
                        }
                    })
                    .catch((error: any) => {
                        console.error(error);
                        if (onError) onError(error);
                    });
            },
            debounce_time ? debounce_time : this.debounceTime
        );

        debouncedFunction();
    }

    /**
     * Sends a POST request to the specified URL and returns the response.
     *
     * @template T The expected response data type. Defaults to `any` if not specified.
     *
     * @param {string} url - The endpoint URL to which the POST request should be sent.
     * @param {any} params - The body data to be sent with the POST request.
     * @param {PostOptions?} options - Optional configuration for the request,
     *                                currently supports only additional query parameters.
     *
     * @returns {Promise<T>} - Returns a promise that resolves with the data from the response
     *                         if the request was successful or an `IErrorResponse` object if there was an error.
     *                         In case of any other errors (e.g., network issues), the promise is rejected
     *                         with an AxiosError.
     *
     * @throws {IErrorResponse} - Throws an error if the response contains an `error` field,
     *                            indicating a problem with the request.
     * @throws {AxiosError} - Throws an error for any issues related to making the request,
     *                        such as network errors.
     *
     * @example
     *
     * interface MyExpectedResponse {
     *   id: number;
     *   name: string;
     * }
     *
     * postNow<MyExpectedResponse>('https://api.example.com/data', { key: 'value' })
     *   .then(data => console.log(data.id, data.name))
     *   .catch(error => console.error(error));
     *
     */
    protected postNow<T = any>(
        url: string,
        params: any,
        options?: PostOptions
    ): Promise<T> {
        // <- Return type set to Promise<any>
        const {query = {}} = options || {};

        const is_multipart=params instanceof FormData;

        return this.axiosInstance
            .post(url, params, {
                params: query,
                headers: is_multipart? {
                    "Content-Type": "multipart/form-data",
                }:undefined
            })
            .then((response: AxiosResponse<T>) => {
                const data = response.data;

                if ((data as IErrorResponse).error) {
                    throw data as IErrorResponse; // <- Reject the promise for further chaining
                }

                return data; // <- Resolve the promise with data for further chaining
            })
            .catch((error: AxiosError) => {
                console.error(error);
                throw error; // <- Propagate the error for further chaining
            });
    }

    /**
     * Sends a GET request to the specified URL and returns the response.
     *
     * @template T The expected response data type. Defaults to `any` if not specified.
     *
     * @param {string} url - The endpoint URL to which the GET request should be sent.
     * @param {Record<string, any>} query - Query parameters for the GET request.
     *
     * @param cache_founder_function
     * @returns {Promise<T>} - Returns a promise that resolves with the data from the response
     *                         if the request was successful or an `IErrorResponse` object if there was an error.
     *                         In case of any other errors (e.g., network issues), the promise is rejected
     *                         with an AxiosError.
     *
     * @throws {IErrorResponse} - Throws an error if the response contains an `error` field,
     *                            indicating a problem with the request.
     * @throws {AxiosError} - Throws an error for any issues related to making the request,
     *                        such as network errors.
     *
     * @example
     *
     * interface MyExpectedResponse {
     *   id: number;
     *   name: string;
     * }
     *
     * getNow<MyExpectedResponse>('https://api.example.com/data', { key: 'value' })
     *   .then(data => console.log(data.id, data.name))
     *   .catch(error => console.error(error));
     *
     */
    protected getNow<T = any>(
        url: string,
        query: Record<string, any> | null = {}, // default value set to an empty object
        __deep_cache_founder_function?:(caches:LRUCache<string, (any & {__date?:Date})|null>)=>any|null
    ): IExtendedPromiseWithCache<T> {


        // ━━━━━━━━━━━━ Cache key ━━━━━━━━━━━━

        // Combine the strings
        const combinedString = 'get:'+url + JSON.stringify(APIAbstract.CleanedQuery(query)) ;
        // Create MD5 hash
        const __cache_key = MD5.hash(combinedString)

        // ━━━━━━━━━━━━ Hard cache (Block server request) ━━━━━━━━━━━━
        if(this.optimizer_cache_duration){
            const __cached_value = __CACHE.get(__cache_key);
            if (__cached_value) {
                if(__cached_value?.__date){

                    const cachedDate = __cached_value.__date;
                    const secondsAgo = new Date(Date.now() - this.optimizer_cache_duration * 1000);
                    if (cachedDate > secondsAgo) {
                        console.log('🏀 Turbo','Duration:',this.optimizer_cache_duration,'s')
                        // If the cached date is older than 10 seconds, return a fake promise
                        const _out:IExtendedPromiseWithCache<any>=Promise.resolve(__cached_value);
                        _out.__cache_callback_disabled = __cache_key
                        return _out
                    }
                }
            }
        }

        // ━━━━━━━━━━━━ ❌ Request Cancellation ━━━━━━━━━━━━
        let source;
        if(this.has_cancellation){
            // Create a cancel token source
            const CancelToken = axios.CancelToken;
             source = CancelToken.source();
             // 1. cancel old request
            __CANCELLATION.get(url)?.cancel(`Request was canceled by new request to ${url}.`);
            // 2. keep new cancellation token:
             __CANCELLATION.set(url,source)// Keep cancellation!
        }


        // ━━━━━━━━━━━━ Server request ━━━━━━━━━━━━

        const out: IExtendedPromiseWithCache<T> = this.axiosInstance
            .get(url, {
                params: query,
                // ❌ Attaching the cancel token to a request:
                cancelToken: source?.token
            })
            .then((response: AxiosResponse<T>) => {

                // ❌ Remove from cancellation:
                __CANCELLATION.set(url,null)


                const data = response.data;

                // ━━━━━━━━━━━━ Handle server error ━━━━━━━━━━━━
                if ((data as IErrorResponse).error) {
                    throw data as IErrorResponse; // <- Reject the promise for further chaining
                }

                // ━━━━━━━━━━━━ Cache data & response ━━━━━━━━━━━━
                if (__cache_key && __CACHE.get(__cache_key) !== undefined) {
                    // We should cache this data!
                    __CACHE.set(__cache_key,data) ; // Cache response
                    return {...data,__cache_key};
                }

                // ━━━━━━━━━━━━ No cache response ━━━━━━━━━━━━
                return data; // <- Resolve the promise with data for further chaining
            })
            .catch((error: AxiosError) => {
                // ❌ Remove from cancellation:
                __CANCELLATION.set(url,null)

                if (axios.isCancel(error)) {
                    console.debug('❌ Request canceled:', error.message);
                    throw undefined; // Important to not call then! then() is for success response only.
                }else{
                    // Handle other errors
                    console.error(error);
                    throw error; // <- Propagate the error for further chaining
                }

            });
        out.__cache_key = __cache_key
        out.__deep_cache_founder_function=__deep_cache_founder_function;

        return out;
    }

    /**
     * Executes a PUT HTTP request using the provided URL, parameters, and optional configurations.
     *
     * @template T - The expected return type of the response. Default is `any`.
     *
     * @param {string} url - The endpoint URL to which the PUT request should be made.
     * @param {any} params - The payload or body data to be sent in the PUT request.
     * @param {PostOptions} [options] - Optional configurations for the request. Contains a `query` field for URL query parameters.
     *
     * @returns {Promise<T>} - Returns a promise that resolves with the data from the response.
     * If the response contains an error field, the promise is rejected with the error data.
     *
     * @throws {IErrorResponse} - If the response contains an 'error' field, the function throws an error of type `IErrorResponse`.
     * @throws {AxiosError} - If the request encounters an Axios-specific error, the function throws that error.
     *
     * @example
     * putNow<SomeResponseType>('/some-endpoint', { key: 'value' }, { query: { filter: 'someFilter' }})
     *   .then(data => console.log(data))
     *   .catch(error => console.error(error));
     */
    protected putNow<T = any>(
        url: string,
        params: any,
        options?: PostOptions
    ): Promise<T> {
        // <- Return type set to Promise<any>
        const {query = {}} = options || {};


        return this.axiosInstance
            .put(url, params, {
                params: query,
            })
            .then((response: AxiosResponse<T>) => {
                const data = response.data;

                if ((data as IErrorResponse).error && !options?.accept_error_response) {
                    throw data as IErrorResponse; // <- Reject the promise for further chaining
                }

                return data; // <- Resolve the promise with data for further chaining
            })
            .catch((error: AxiosError) => {
                console.error(error);
                throw error; // <- Propagate the error for further chaining
            });

    }

    protected deleteNow<T = any>(
        url: string,
        query: Record<string, any> | null = {} // default value set to an empty object
    ): Promise<T> {
        return this.axiosInstance
            .delete(url, {
                params: query,
            })
            .then((response: AxiosResponse<T>) => {
                const data = response.data;

                if ((data as IErrorResponse).error) {
                    throw data as IErrorResponse; // <- Reject the promise for further chaining
                }

                return data; // <- Resolve the promise with data for further chaining
            })
            .catch((error: AxiosError) => {
                console.error(error);
                throw error; // <- Propagate the error for further chaining
            });
    }



    // Remove null and undefined properties
    static CleanedQuery(query:Record<string, any>|null){
        if(!query)return null;
        return Object.entries(query)
            .filter(([_, value]) => value !== null && value !== undefined && value !== '')
            .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    }

}





/**
 * Cache get responses.
 */


/**
 * Interface extending the native Promise to support cache functionality.
 */
interface IExtendedPromiseWithCache<T> extends Promise<T> {
    /** Cache key for the current promise. */
    __cache_key?: string;
    __cache_callback_disabled?: boolean;
    __deep_cache_founder_function?:(caches:LRUCache<string, (CancelTokenSource & {__date?:Date})|null>)=>any|null

    /**
     * Cache function that can be chained to a promise to handle cached responses.
     * @param {cacheResponse} - Callback function to handle the cache value.
     * @returns {this} - Returns the current promise for chaining.
     */
    cache?: (cacheResponse: (value: any) => void) => this;
}

/**
 * Instance of LRUCache with a specified size to store cached values.
 * Adjust the size as per your requirements.
 */
const __CACHE = new LRUCache<string, any>(100);
/**
 * Cancellation keeper
 */
const __CANCELLATION = new LRUCache<string, (CancelTokenSource & {__date?:Date})|null>(100);


// Adding the cache method to the Promise prototype
Promise.prototype.cache = function (this: IExtendedPromiseWithCache<any>, cacheResponse: (value: any) => void) {
    if(this.__cache_callback_disabled)return this; // If no server request sent!
    if (!this.__cache_key) {
        console.error("⚠ Always call cache() before then()! We have no idea about the cache key now.");
        return;
    }

    const __cached_value = __CACHE.get(this.__cache_key);
    if (__cached_value) {
        cacheResponse(__cached_value);   // call the cache function
    }else if(this.__deep_cache_founder_function){
        // Deep search in data to find corresponding item. Like when we try to find product in the previously fetched products list.
        const _found=this.__deep_cache_founder_function(__CACHE)
        if(_found) cacheResponse(_found);   // call the cache function
    }
    __CACHE.set(this.__cache_key, null); // If value is not undefined the response is auto-cached!

    return this; // return the original promise for chaining
};
