import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateBrokerResponse {
		BrokerArn?: string;
		BrokerId?: string;
	}

	export enum DayOfWeek { MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4, SATURDAY = 5, SUNDAY = 6 }


	/** An ActiveMQ user associated with the broker. */
	export interface User {
		ConsoleAccess?: boolean;
		Groups?: Array<string>;
		Password?: string;
		Username?: string;
	}

	export interface BadRequestException {
	}

	export interface UnauthorizedException {
	}

	export interface InternalServerErrorException {
	}

	export interface ConflictException {
	}

	export interface ForbiddenException {
	}

	export interface CreateConfigurationResponse {
		Arn?: string;
		Created?: Date;
		Id?: string;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
	}


	/** Returns information about the specified configuration revision. */
	export interface ConfigurationRevision {
		Created?: Date;
		Description?: string;
		Revision?: number;
	}

	export interface NotFoundException {
	}

	export interface CreateUserResponse {
	}

	export interface DeleteBrokerResponse {
		BrokerId?: string;
	}

	export interface DeleteUserResponse {
	}

	export interface DescribeBrokerResponse {
		AutoMinorVersionUpgrade?: boolean;
		BrokerArn?: string;
		BrokerId?: string;
		BrokerInstances?: Array<BrokerInstance>;
		BrokerName?: string;

		/** The status of the broker. */
		BrokerState?: DescribeBrokerResponseBrokerState;

		/** Broker configuration information */
		Configurations?: Configurations;
		Created?: Date;

		/** The deployment mode of the broker. */
		DeploymentMode?: DescribeBrokerResponseDeploymentMode;

		/** Encryption options for the broker. */
		EncryptionOptions?: EncryptionOptions;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		EngineVersion?: string;
		HostInstanceType?: string;

		/** The list of information about logs currently enabled and pending to be deployed for the specified broker. */
		Logs?: LogsSummary;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		MaintenanceWindowStartTime?: WeeklyStartTime;
		PendingEngineVersion?: string;
		PendingHostInstanceType?: string;
		PendingSecurityGroups?: Array<string>;
		PubliclyAccessible?: boolean;
		SecurityGroups?: Array<string>;

		/** The storage type of the broker. */
		StorageType?: DescribeBrokerResponseStorageType;
		SubnetIds?: Array<string>;
		Tags?: __mapOf__string;
		Users?: Array<UserSummary>;
	}


	/** Returns information about all brokers. */
	export interface BrokerInstance {
		ConsoleURL?: string;
		Endpoints?: Array<string>;
		IpAddress?: string;
	}

	export enum DescribeBrokerResponseBrokerState { CREATION_IN_PROGRESS = 0, CREATION_FAILED = 1, DELETION_IN_PROGRESS = 2, RUNNING = 3, REBOOT_IN_PROGRESS = 4 }


	/** Broker configuration information */
	export interface Configurations {

		/** A list of information about the configuration. */
		Current?: ConfigurationId;
		History?: Array<ConfigurationId>;

		/** A list of information about the configuration. */
		Pending?: ConfigurationId;
	}


	/** A list of information about the configuration. */
	export interface ConfigurationId {
		Id?: string;
		Revision?: number;
	}

	export enum DescribeBrokerResponseDeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }


	/** Encryption options for the broker. */
	export interface EncryptionOptions {
		KmsKeyId?: string;
		UseAwsOwnedKey: boolean;
	}

	export enum DescribeBrokerResponseEngineType { ACTIVEMQ = 0 }


	/** The list of information about logs currently enabled and pending to be deployed for the specified broker. */
	export interface LogsSummary {
		Audit?: boolean;
		AuditLogGroup?: string;
		General?: boolean;
		GeneralLogGroup?: string;

		/** The list of information about logs to be enabled for the specified broker. */
		Pending?: PendingLogs;
	}


	/** The list of information about logs to be enabled for the specified broker. */
	export interface PendingLogs {
		Audit?: boolean;
		General?: boolean;
	}


	/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
	export interface WeeklyStartTime {
		DayOfWeek?: DayOfWeek;
		TimeOfDay?: string;
		TimeZone?: string;
	}

	export enum DescribeBrokerResponseStorageType { EBS = 0, EFS = 1 }

	export interface __mapOf__string {
	}


	/** Returns a list of all ActiveMQ users. */
	export interface UserSummary {

		/** The type of change pending for the ActiveMQ user. */
		PendingChange?: UserSummaryPendingChange;
		Username?: string;
	}

	export enum UserSummaryPendingChange { CREATE = 0, UPDATE = 1, DELETE = 2 }

	export interface DescribeBrokerEngineTypesResponse {
		BrokerEngineTypes?: Array<BrokerEngineType>;
		MaxResults?: number;
		NextToken?: string;
	}


	/** Types of broker engines. */
	export interface BrokerEngineType {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		EngineVersions?: Array<EngineVersion>;
	}


	/** Id of the engine version. */
	export interface EngineVersion {
		Name?: string;
	}

	export interface DescribeBrokerInstanceOptionsResponse {
		BrokerInstanceOptions?: Array<BrokerInstanceOption>;
		MaxResults?: number;
		NextToken?: string;
	}


	/** Option for host instance type. */
	export interface BrokerInstanceOption {
		AvailabilityZones?: Array<AvailabilityZone>;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		HostInstanceType?: string;

		/** The storage type of the broker. */
		StorageType?: DescribeBrokerResponseStorageType;
		SupportedDeploymentModes?: Array<DeploymentMode>;
		SupportedEngineVersions?: Array<string>;
	}


	/** Name of the availability zone. */
	export interface AvailabilityZone {
		Name?: string;
	}


	/** The deployment mode of the broker. */
	export enum DeploymentMode { SINGLE_INSTANCE = 0, ACTIVE_STANDBY_MULTI_AZ = 1 }

	export interface DescribeConfigurationResponse {
		Arn?: string;
		Created?: Date;
		Description?: string;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		EngineVersion?: string;
		Id?: string;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Tags?: __mapOf__string;
	}

	export interface DescribeConfigurationRevisionResponse {
		ConfigurationId?: string;
		Created?: Date;
		Data?: string;
		Description?: string;
	}

	export interface DescribeUserResponse {
		BrokerId?: string;
		ConsoleAccess?: boolean;
		Groups?: Array<string>;

		/** Returns information about the status of the changes pending for the ActiveMQ user. */
		Pending?: UserPendingChanges;
		Username?: string;
	}


	/** Returns information about the status of the changes pending for the ActiveMQ user. */
	export interface UserPendingChanges {
		ConsoleAccess?: boolean;
		Groups?: Array<string>;

		/** The type of change pending for the ActiveMQ user. */
		PendingChange?: UserSummaryPendingChange;
	}

	export interface ListBrokersResponse {
		BrokerSummaries?: Array<BrokerSummary>;
		NextToken?: string;
	}


	/** The Amazon Resource Name (ARN) of the broker. */
	export interface BrokerSummary {
		BrokerArn?: string;
		BrokerId?: string;
		BrokerName?: string;

		/** The status of the broker. */
		BrokerState?: DescribeBrokerResponseBrokerState;
		Created?: Date;

		/** The deployment mode of the broker. */
		DeploymentMode?: DescribeBrokerResponseDeploymentMode;
		HostInstanceType?: string;
	}

	export interface ListConfigurationRevisionsResponse {
		ConfigurationId?: string;
		MaxResults?: number;
		NextToken?: string;
		Revisions?: Array<ConfigurationRevision>;
	}

	export interface ListConfigurationsResponse {
		Configurations?: Array<Configuration>;
		MaxResults?: number;
		NextToken?: string;
	}


	/** Returns information about all configurations. */
	export interface Configuration {
		Arn?: string;
		Created?: Date;
		Description?: string;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		EngineVersion?: string;
		Id?: string;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Tags?: __mapOf__string;
	}

	export interface ListTagsResponse {
		Tags?: __mapOf__string;
	}

	export interface ListUsersResponse {
		BrokerId?: string;
		MaxResults?: number;
		NextToken?: string;
		Users?: Array<UserSummary>;
	}

	export interface RebootBrokerResponse {
	}

	export interface UpdateBrokerResponse {
		AutoMinorVersionUpgrade?: boolean;
		BrokerId?: string;

		/** A list of information about the configuration. */
		Configuration?: ConfigurationId;
		EngineVersion?: string;
		HostInstanceType?: string;

		/** The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;
		SecurityGroups?: Array<string>;
	}


	/** The list of information about logs to be enabled for the specified broker. */
	export interface Logs {
		Audit?: boolean;
		General?: boolean;
	}

	export interface UpdateConfigurationResponse {
		Arn?: string;
		Created?: Date;
		Id?: string;

		/** Returns information about the specified configuration revision. */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
		Warnings?: Array<SanitizationWarning>;
	}


	/** Returns information about the XML element or attribute that was sanitized in the configuration. */
	export interface SanitizationWarning {
		AttributeName?: string;
		ElementName?: string;

		/** The reason for which the XML elements or attributes were sanitized. */
		Reason?: SanitizationWarningReason;
	}

	export enum SanitizationWarningReason { DISALLOWED_ELEMENT_REMOVED = 0, DISALLOWED_ATTRIBUTE_REMOVED = 1, INVALID_ATTRIBUTE_VALUE_REMOVED = 2 }

	export interface UpdateUserResponse {
	}


	/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
	export enum EngineType { ACTIVEMQ = 0 }


	/** The storage type of the broker. */
	export enum BrokerStorageType { EBS = 0, EFS = 1 }


	/** The status of the broker. */
	export enum BrokerState { CREATION_IN_PROGRESS = 0, CREATION_FAILED = 1, DELETION_IN_PROGRESS = 2, RUNNING = 3, REBOOT_IN_PROGRESS = 4 }


	/** The type of change pending for the ActiveMQ user. */
	export enum ChangeType { CREATE = 0, UPDATE = 1, DELETE = 2 }


	/** Creates a broker using the specified properties. */
	export interface CreateBrokerRequest {
		AutoMinorVersionUpgrade?: boolean;
		BrokerName?: string;

		/** A list of information about the configuration. */
		Configuration?: ConfigurationId;
		CreatorRequestId?: string;

		/** The deployment mode of the broker. */
		DeploymentMode?: DescribeBrokerResponseDeploymentMode;

		/** Encryption options for the broker. */
		EncryptionOptions?: EncryptionOptions;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		EngineVersion?: string;
		HostInstanceType?: string;

		/** The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		MaintenanceWindowStartTime?: WeeklyStartTime;
		PubliclyAccessible?: boolean;
		SecurityGroups?: Array<string>;

		/** The storage type of the broker. */
		StorageType?: DescribeBrokerResponseStorageType;
		SubnetIds?: Array<string>;
		Tags?: __mapOf__string;
		Users?: Array<User>;
	}


	/** Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). */
	export interface CreateConfigurationRequest {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		EngineType?: DescribeBrokerResponseEngineType;
		EngineVersion?: string;
		Name?: string;
		Tags?: __mapOf__string;
	}


	/** A map of the key-value pairs for the resource tag. */
	export interface CreateTagsRequest {
		Tags?: __mapOf__string;
	}


	/** Creates a new ActiveMQ user. */
	export interface CreateUserRequest {
		ConsoleAccess?: boolean;
		Groups?: Array<string>;
		Password?: string;
	}

	export interface DeleteBrokerRequest {
	}

	export interface DeleteTagsRequest {
	}

	export interface DeleteUserRequest {
	}

	export interface DescribeBrokerEngineTypesRequest {
	}

	export interface DescribeBrokerInstanceOptionsRequest {
	}

	export interface DescribeBrokerRequest {
	}

	export interface DescribeConfigurationRequest {
	}

	export interface DescribeConfigurationRevisionRequest {
	}

	export interface DescribeUserRequest {
	}

	export interface ListBrokersRequest {
	}

	export interface ListConfigurationRevisionsRequest {
	}

	export interface ListConfigurationsRequest {
	}

	export interface ListTagsRequest {
	}

	export interface ListUsersRequest {
	}

	export interface RebootBrokerRequest {
	}


	/** Updates the broker using the specified properties. */
	export interface UpdateBrokerRequest {
		AutoMinorVersionUpgrade?: boolean;

		/** A list of information about the configuration. */
		Configuration?: ConfigurationId;
		EngineVersion?: string;
		HostInstanceType?: string;

		/** The list of information about logs to be enabled for the specified broker. */
		Logs?: Logs;
		SecurityGroups?: Array<string>;
	}


	/** Updates the specified configuration. */
	export interface UpdateConfigurationRequest {
		Data?: string;
		Description?: string;
	}


	/** Updates the information for an ActiveMQ user. */
	export interface UpdateUserRequest {
		ConsoleAccess?: boolean;
		Groups?: Array<string>;
		Password?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a broker. Note: This API is asynchronous.
		 * Post v1/brokers
		 * @return {CreateBrokerResponse} Success
		 */
		CreateBroker(requestBody: CreateBrokerPostBody): Observable<CreateBrokerResponse> {
			return this.http.post<CreateBrokerResponse>(this.baseUri + 'v1/brokers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all brokers.
		 * Get v1/brokers
		 * @param {number} maxResults The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListBrokersResponse} Success
		 */
		ListBrokers(maxResults: number, nextToken: string): Observable<ListBrokersResponse> {
			return this.http.get<ListBrokersResponse>(this.baseUri + 'v1/brokers?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
		 * Post v1/configurations
		 * @return {CreateConfigurationResponse} Success
		 */
		CreateConfiguration(requestBody: CreateConfigurationPostBody): Observable<CreateConfigurationResponse> {
			return this.http.post<CreateConfigurationResponse>(this.baseUri + 'v1/configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all configurations.
		 * Get v1/configurations
		 * @param {number} maxResults The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListConfigurationsResponse} Success
		 */
		ListConfigurations(maxResults: number, nextToken: string): Observable<ListConfigurationsResponse> {
			return this.http.get<ListConfigurationsResponse>(this.baseUri + 'v1/configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Add a tag to a resource.
		 * Post v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @return {void} 
		 */
		CreateTags(resource_arn: string, requestBody: CreateTagsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists tags for a resource.
		 * Get v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @return {ListTagsResponse} Success
		 */
		ListTags(resource_arn: string): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Creates an ActiveMQ user.
		 * Post v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(broker_id: string, username: string, requestBody: CreateUserPostBody): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an ActiveMQ user.
		 * Delete v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(broker_id: string, username: string): Observable<DeleteUserResponse> {
			return this.http.delete<DeleteUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Returns information about an ActiveMQ user.
		 * Get v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(broker_id: string, username: string): Observable<DescribeUserResponse> {
			return this.http.get<DescribeUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Updates the information for an ActiveMQ user.
		 * Put v1/brokers/{broker_id}/users/{username}
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {string} username Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(broker_id: string, username: string, requestBody: UpdateUserPutBody): Observable<UpdateUserResponse> {
			return this.http.put<UpdateUserResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a broker. Note: This API is asynchronous.
		 * Delete v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {DeleteBrokerResponse} Success
		 */
		DeleteBroker(broker_id: string): Observable<DeleteBrokerResponse> {
			return this.http.delete<DeleteBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), {});
		}

		/**
		 * Returns information about the specified broker.
		 * Get v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {DescribeBrokerResponse} Success
		 */
		DescribeBroker(broker_id: string): Observable<DescribeBrokerResponse> {
			return this.http.get<DescribeBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), {});
		}

		/**
		 * Adds a pending configuration change to a broker.
		 * Put v1/brokers/{broker_id}
		 * @param {string} broker_id The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
		 * @return {UpdateBrokerResponse} Success
		 */
		UpdateBroker(broker_id: string, requestBody: UpdateBrokerPutBody): Observable<UpdateBrokerResponse> {
			return this.http.put<UpdateBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Delete v1/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource tag.
		 * @param {Array<string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		DeleteTags(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe available engine types and versions.
		 * Get v1/broker-engine-types
		 * @param {string} engineType Filter response by engine type.
		 * @param {number} maxResults The maximum number of engine types that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {DescribeBrokerEngineTypesResponse} Success
		 */
		DescribeBrokerEngineTypes(engineType: string, maxResults: number, nextToken: string): Observable<DescribeBrokerEngineTypesResponse> {
			return this.http.get<DescribeBrokerEngineTypesResponse>(this.baseUri + 'v1/broker-engine-types?engineType=' + (engineType == null ? '' : encodeURIComponent(engineType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Describe available broker instance options.
		 * Get v1/broker-instance-options
		 * @param {string} engineType Filter response by engine type.
		 * @param {string} hostInstanceType Filter response by host instance type.
		 * @param {number} maxResults The maximum number of instance options that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @param {string} storageType Filter response by storage type.
		 * @return {DescribeBrokerInstanceOptionsResponse} Success
		 */
		DescribeBrokerInstanceOptions(engineType: string, hostInstanceType: string, maxResults: number, nextToken: string, storageType: string): Observable<DescribeBrokerInstanceOptionsResponse> {
			return this.http.get<DescribeBrokerInstanceOptionsResponse>(this.baseUri + 'v1/broker-instance-options?engineType=' + (engineType == null ? '' : encodeURIComponent(engineType)) + '&hostInstanceType=' + (hostInstanceType == null ? '' : encodeURIComponent(hostInstanceType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&storageType=' + (storageType == null ? '' : encodeURIComponent(storageType)), {});
		}

		/**
		 * Returns information about the specified configuration.
		 * Get v1/configurations/{configuration_id}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @return {DescribeConfigurationResponse} Success
		 */
		DescribeConfiguration(configuration_id: string): Observable<DescribeConfigurationResponse> {
			return this.http.get<DescribeConfigurationResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)), {});
		}

		/**
		 * Updates the specified configuration.
		 * Put v1/configurations/{configuration_id}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @return {UpdateConfigurationResponse} Success
		 */
		UpdateConfiguration(configuration_id: string, requestBody: UpdateConfigurationPutBody): Observable<UpdateConfigurationResponse> {
			return this.http.put<UpdateConfigurationResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the specified configuration revision for the specified configuration.
		 * Get v1/configurations/{configuration_id}/revisions/{configuration_revision}
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {string} configuration_revision The revision of the configuration.
		 * @return {DescribeConfigurationRevisionResponse} Success
		 */
		DescribeConfigurationRevision(configuration_id: string, configuration_revision: string): Observable<DescribeConfigurationRevisionResponse> {
			return this.http.get<DescribeConfigurationRevisionResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)) + '/revisions/' + (configuration_revision == null ? '' : encodeURIComponent(configuration_revision)), {});
		}

		/**
		 * Returns a list of all revisions for the specified configuration.
		 * Get v1/configurations/{configuration_id}/revisions
		 * @param {string} configuration_id The unique ID that Amazon MQ generates for the configuration.
		 * @param {number} maxResults The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListConfigurationRevisionsResponse} Success
		 */
		ListConfigurationRevisions(configuration_id: string, maxResults: number, nextToken: string): Observable<ListConfigurationRevisionsResponse> {
			return this.http.get<ListConfigurationRevisionsResponse>(this.baseUri + 'v1/configurations/' + (configuration_id == null ? '' : encodeURIComponent(configuration_id)) + '/revisions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns a list of all ActiveMQ users.
		 * Get v1/brokers/{broker_id}/users
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @param {number} maxResults The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
		 * @param {string} nextToken The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(broker_id: string, maxResults: number, nextToken: string): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/users&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Reboots a broker. Note: This API is asynchronous.
		 * Post v1/brokers/{broker_id}/reboot
		 * @param {string} broker_id The unique ID that Amazon MQ generates for the broker.
		 * @return {RebootBrokerResponse} Success
		 */
		RebootBroker(broker_id: string): Observable<RebootBrokerResponse> {
			return this.http.post<RebootBrokerResponse>(this.baseUri + 'v1/brokers/' + (broker_id == null ? '' : encodeURIComponent(broker_id)) + '/reboot', null, {});
		}
	}

	export interface CreateBrokerPostBody {

		/** Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade?: boolean;

		/** Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters. */
		brokerName?: string;

		/** A list of information about the configuration. */
		configuration?: CreateBrokerPostBodyConfiguration;

		/** The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency. */
		creatorRequestId?: string;

		/** The deployment mode of the broker. */
		deploymentMode?: DescribeBrokerResponseDeploymentMode;

		/** Encryption options for the broker. */
		encryptionOptions?: CreateBrokerPostBodyEncryptionOptions;

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType?: DescribeBrokerResponseEngineType;

		/** Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string;

		/** Required. The broker's instance type. */
		hostInstanceType?: string;

		/** The list of information about logs to be enabled for the specified broker. */
		logs?: CreateBrokerPostBodyLogs;

		/** The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker. */
		maintenanceWindowStartTime?: CreateBrokerPostBodyMaintenanceWindowStartTime;

		/** Required. Enables connections from applications outside of the VPC that hosts the broker's subnets. */
		publiclyAccessible?: boolean;

		/** The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers. */
		securityGroups?: Array<string>;

		/** The storage type of the broker. */
		storageType?: DescribeBrokerResponseStorageType;

		/** The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets. */
		subnetIds?: Array<string>;

		/** Create tags when creating the broker. */
		tags?: {[id: string]: string };

		/** Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		users?: Array<User>;
	}

	export interface CreateBrokerPostBodyConfiguration {
		Id?: string;
		Revision?: number;
	}

	export interface CreateBrokerPostBodyEncryptionOptions {
		KmsKeyId?: string;
		UseAwsOwnedKey?: boolean;
	}

	export interface CreateBrokerPostBodyLogs {
		Audit?: boolean;
		General?: boolean;
	}

	export interface CreateBrokerPostBodyMaintenanceWindowStartTime {
		DayOfWeek?: DayOfWeek;
		TimeOfDay?: string;
		TimeZone?: string;
	}

	export interface CreateConfigurationPostBody {

		/** The type of broker engine. Note: Currently, Amazon MQ supports only ActiveMQ. */
		engineType?: DescribeBrokerResponseEngineType;

		/** Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string;

		/** Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long. */
		name?: string;

		/** Create tags when creating the configuration. */
		tags?: {[id: string]: string };
	}

	export interface CreateTagsPostBody {

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string };
	}

	export interface CreateUserPostBody {

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean;

		/** The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<string>;

		/** Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password?: string;
	}

	export interface UpdateUserPutBody {

		/** Enables access to the the ActiveMQ Web Console for the ActiveMQ user. */
		consoleAccess?: boolean;

		/** The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. */
		groups?: Array<string>;

		/** The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas. */
		password?: string;
	}

	export interface UpdateBrokerPutBody {

		/** Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot. */
		autoMinorVersionUpgrade?: boolean;

		/** A list of information about the configuration. */
		configuration?: UpdateBrokerPutBodyConfiguration;

		/** The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html */
		engineVersion?: string;

		/** The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types */
		hostInstanceType?: string;

		/** The list of information about logs to be enabled for the specified broker. */
		logs?: UpdateBrokerPutBodyLogs;

		/** The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers. */
		securityGroups?: Array<string>;
	}

	export interface UpdateBrokerPutBodyConfiguration {
		Id?: string;
		Revision?: number;
	}

	export interface UpdateBrokerPutBodyLogs {
		Audit?: boolean;
		General?: boolean;
	}

	export interface UpdateConfigurationPutBody {

		/** Required. The base64-encoded XML configuration. */
		data?: string;

		/** The description of the configuration. */
		description?: string;
	}

}

