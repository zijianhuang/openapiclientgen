import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddCustomRoutingEndpointsResponse {
		EndpointDescriptions?: Array<CustomRoutingEndpointDescription>;
		EndpointGroupArn?: string;
	}
	export interface AddCustomRoutingEndpointsResponseFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAddCustomRoutingEndpointsResponseFormGroup() {
		return new FormGroup<AddCustomRoutingEndpointsResponseFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets. */
	export interface CustomRoutingEndpointDescription {
		EndpointId?: string;
	}

	/** A complex type for an endpoint for a custom routing accelerator. Each endpoint group can include one or more endpoints, which are virtual private cloud (VPC) subnets. */
	export interface CustomRoutingEndpointDescriptionFormProperties {
		EndpointId: FormControl<string | null | undefined>,
	}
	export function CreateCustomRoutingEndpointDescriptionFormGroup() {
		return new FormGroup<CustomRoutingEndpointDescriptionFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCustomRoutingEndpointsRequest {

		/** Required */
		EndpointConfigurations: Array<CustomRoutingEndpointConfiguration>;

		/** Required */
		EndpointGroupArn: string;
	}
	export interface AddCustomRoutingEndpointsRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAddCustomRoutingEndpointsRequestFormGroup() {
		return new FormGroup<AddCustomRoutingEndpointsRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs. */
	export interface CustomRoutingEndpointConfiguration {
		EndpointId?: string;
	}

	/** The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs. */
	export interface CustomRoutingEndpointConfigurationFormProperties {
		EndpointId: FormControl<string | null | undefined>,
	}
	export function CreateCustomRoutingEndpointConfigurationFormGroup() {
		return new FormGroup<CustomRoutingEndpointConfigurationFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndpointAlreadyExistsException {
	}
	export interface EndpointAlreadyExistsExceptionFormProperties {
	}
	export function CreateEndpointAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EndpointAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface EndpointGroupNotFoundException {
	}
	export interface EndpointGroupNotFoundExceptionFormProperties {
	}
	export function CreateEndpointGroupNotFoundExceptionFormGroup() {
		return new FormGroup<EndpointGroupNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
		});

	}

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface AddEndpointsResponse {
		EndpointDescriptions?: Array<EndpointDescription>;
		EndpointGroupArn?: string;
	}
	export interface AddEndpointsResponseFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAddEndpointsResponseFormGroup() {
		return new FormGroup<AddEndpointsResponseFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers. */
	export interface EndpointDescription {
		EndpointId?: string;
		Weight?: number | null;
		HealthState?: HealthState;
		HealthReason?: string;
		ClientIPPreservationEnabled?: boolean | null;
	}

	/** A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers. */
	export interface EndpointDescriptionFormProperties {
		EndpointId: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
		HealthState: FormControl<HealthState | null | undefined>,
		HealthReason: FormControl<string | null | undefined>,
		ClientIPPreservationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndpointDescriptionFormGroup() {
		return new FormGroup<EndpointDescriptionFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
			HealthState: new FormControl<HealthState | null | undefined>(undefined),
			HealthReason: new FormControl<string | null | undefined>(undefined),
			ClientIPPreservationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum HealthState { INITIAL = 0, HEALTHY = 1, UNHEALTHY = 2 }

	export interface AddEndpointsRequest {

		/** Required */
		EndpointConfigurations: Array<EndpointConfiguration>;

		/** Required */
		EndpointGroupArn: string;
	}
	export interface AddEndpointsRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateAddEndpointsRequestFormGroup() {
		return new FormGroup<AddEndpointsRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type for endpoints. A resource must be valid and active when you add it as an endpoint. */
	export interface EndpointConfiguration {
		EndpointId?: string;
		Weight?: number | null;
		ClientIPPreservationEnabled?: boolean | null;
	}

	/** A complex type for endpoints. A resource must be valid and active when you add it as an endpoint. */
	export interface EndpointConfigurationFormProperties {
		EndpointId: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
		ClientIPPreservationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndpointConfigurationFormGroup() {
		return new FormGroup<EndpointConfigurationFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
			ClientIPPreservationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TransactionInProgressException {
	}
	export interface TransactionInProgressExceptionFormProperties {
	}
	export function CreateTransactionInProgressExceptionFormGroup() {
		return new FormGroup<TransactionInProgressExceptionFormProperties>({
		});

	}

	export interface AdvertiseByoipCidrResponse {
		ByoipCidr?: ByoipCidr;
	}
	export interface AdvertiseByoipCidrResponseFormProperties {
	}
	export function CreateAdvertiseByoipCidrResponseFormGroup() {
		return new FormGroup<AdvertiseByoipCidrResponseFormProperties>({
		});

	}


	/** <p>Information about an IP address range that is provisioned for use with your Amazon Web Services resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> </ul> */
	export interface ByoipCidr {
		Cidr?: string;
		State?: ByoipCidrState;
		Events?: Array<ByoipCidrEvent>;
	}

	/** <p>Information about an IP address range that is provisioned for use with your Amazon Web Services resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact Amazon Web Services support.</p> </li> </ul> */
	export interface ByoipCidrFormProperties {
		Cidr: FormControl<string | null | undefined>,
		State: FormControl<ByoipCidrState | null | undefined>,
	}
	export function CreateByoipCidrFormGroup() {
		return new FormGroup<ByoipCidrFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ByoipCidrState | null | undefined>(undefined),
		});

	}

	export enum ByoipCidrState { PENDING_PROVISIONING = 0, READY = 1, PENDING_ADVERTISING = 2, ADVERTISING = 3, PENDING_WITHDRAWING = 4, PENDING_DEPROVISIONING = 5, DEPROVISIONED = 6, FAILED_PROVISION = 7, FAILED_ADVERTISING = 8, FAILED_WITHDRAW = 9, FAILED_DEPROVISION = 10 }


	/** A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP). */
	export interface ByoipCidrEvent {
		Message?: string;
		Timestamp?: Date;
	}

	/** A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status of an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP). */
	export interface ByoipCidrEventFormProperties {
		Message: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateByoipCidrEventFormGroup() {
		return new FormGroup<ByoipCidrEventFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AdvertiseByoipCidrRequest {

		/** Required */
		Cidr: string;
	}
	export interface AdvertiseByoipCidrRequestFormProperties {

		/** Required */
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiseByoipCidrRequestFormGroup() {
		return new FormGroup<AdvertiseByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ByoipCidrNotFoundException {
	}
	export interface ByoipCidrNotFoundExceptionFormProperties {
	}
	export function CreateByoipCidrNotFoundExceptionFormGroup() {
		return new FormGroup<ByoipCidrNotFoundExceptionFormProperties>({
		});

	}

	export interface IncorrectCidrStateException {
	}
	export interface IncorrectCidrStateExceptionFormProperties {
	}
	export function CreateIncorrectCidrStateExceptionFormGroup() {
		return new FormGroup<IncorrectCidrStateExceptionFormProperties>({
		});

	}

	export interface AllowCustomRoutingTrafficRequest {

		/** Required */
		EndpointGroupArn: string;

		/** Required */
		EndpointId: string;
		DestinationAddresses?: Array<string>;
		DestinationPorts?: Array<number> | null;
		AllowAllTrafficToEndpoint?: boolean | null;
	}
	export interface AllowCustomRoutingTrafficRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointId: FormControl<string | null | undefined>,
		AllowAllTrafficToEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateAllowCustomRoutingTrafficRequestFormGroup() {
		return new FormGroup<AllowCustomRoutingTrafficRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllowAllTrafficToEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateAcceleratorResponse {
		Accelerator?: Accelerator;
	}
	export interface CreateAcceleratorResponseFormProperties {
	}
	export function CreateCreateAcceleratorResponseFormGroup() {
		return new FormGroup<CreateAcceleratorResponseFormProperties>({
		});

	}


	/** An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
	export interface Accelerator {
		AcceleratorArn?: string;
		Name?: string;
		IpAddressType?: IpAddressType;
		Enabled?: boolean | null;
		IpSets?: Array<IpSet>;
		DnsName?: string;
		Status?: AcceleratorStatus;
		CreatedTime?: Date;
		LastModifiedTime?: Date;
		DualStackDnsName?: string;
		Events?: Array<AcceleratorEvent>;
	}

	/** An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
	export interface AcceleratorFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		Status: FormControl<AcceleratorStatus | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		DualStackDnsName: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorFormGroup() {
		return new FormGroup<AcceleratorFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AcceleratorStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			DualStackDnsName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpAddressType { IPV4 = 0, DUAL_STACK = 1 }


	/** A complex type for the set of IP addresses for an accelerator. */
	export interface IpSet {
		IpFamily?: string;
		IpAddresses?: Array<string>;
		IpAddressFamily?: IpAddressFamily;
	}

	/** A complex type for the set of IP addresses for an accelerator. */
	export interface IpSetFormProperties {
		IpFamily: FormControl<string | null | undefined>,
		IpAddressFamily: FormControl<IpAddressFamily | null | undefined>,
	}
	export function CreateIpSetFormGroup() {
		return new FormGroup<IpSetFormProperties>({
			IpFamily: new FormControl<string | null | undefined>(undefined),
			IpAddressFamily: new FormControl<IpAddressFamily | null | undefined>(undefined),
		});

	}

	export enum IpAddressFamily { IPv4 = 0, IPv6 = 1 }

	export enum AcceleratorStatus { DEPLOYED = 0, IN_PROGRESS = 1 }


	/** A complex type that contains a <code>Timestamp</code> value and <code>Message</code> for changes that you make to an accelerator in Global Accelerator. Messages stored here provide progress or error information when you update an accelerator from IPv4 to dual-stack, or from dual-stack to IPv4. Global Accelerator stores a maximum of ten event messages.  */
	export interface AcceleratorEvent {
		Message?: string;
		Timestamp?: Date;
	}

	/** A complex type that contains a <code>Timestamp</code> value and <code>Message</code> for changes that you make to an accelerator in Global Accelerator. Messages stored here provide progress or error information when you update an accelerator from IPv4 to dual-stack, or from dual-stack to IPv4. Global Accelerator stores a maximum of ten event messages.  */
	export interface AcceleratorEventFormProperties {
		Message: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAcceleratorEventFormGroup() {
		return new FormGroup<AcceleratorEventFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateAcceleratorRequest {

		/** Required */
		Name: string;
		IpAddressType?: IpAddressType;
		IpAddresses?: Array<string>;
		Enabled?: boolean | null;

		/** Required */
		IdempotencyToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateAcceleratorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAcceleratorRequestFormGroup() {
		return new FormGroup<CreateAcceleratorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains a <code>Tag</code> key and <code>Tag</code> value. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A complex type that contains a <code>Tag</code> key and <code>Tag</code> value. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCustomRoutingAcceleratorResponse {
		Accelerator?: CustomRoutingAccelerator;
	}
	export interface CreateCustomRoutingAcceleratorResponseFormProperties {
	}
	export function CreateCreateCustomRoutingAcceleratorResponseFormGroup() {
		return new FormGroup<CreateCustomRoutingAcceleratorResponseFormProperties>({
		});

	}


	/** Attributes of a custom routing accelerator. */
	export interface CustomRoutingAccelerator {
		AcceleratorArn?: string;
		Name?: string;
		IpAddressType?: IpAddressType;
		Enabled?: boolean | null;
		IpSets?: Array<IpSet>;
		DnsName?: string;
		Status?: AcceleratorStatus;
		CreatedTime?: Date;
		LastModifiedTime?: Date;
	}

	/** Attributes of a custom routing accelerator. */
	export interface CustomRoutingAcceleratorFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		Status: FormControl<AcceleratorStatus | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateCustomRoutingAcceleratorFormGroup() {
		return new FormGroup<CustomRoutingAcceleratorFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AcceleratorStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateCustomRoutingAcceleratorRequest {

		/** Required */
		Name: string;
		IpAddressType?: IpAddressType;
		IpAddresses?: Array<string>;
		Enabled?: boolean | null;

		/** Required */
		IdempotencyToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateCustomRoutingAcceleratorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomRoutingAcceleratorRequestFormGroup() {
		return new FormGroup<CreateCustomRoutingAcceleratorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCustomRoutingEndpointGroupResponse {
		EndpointGroup?: CustomRoutingEndpointGroup;
	}
	export interface CreateCustomRoutingEndpointGroupResponseFormProperties {
	}
	export function CreateCreateCustomRoutingEndpointGroupResponseFormGroup() {
		return new FormGroup<CreateCustomRoutingEndpointGroupResponseFormProperties>({
		});

	}


	/** A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener.  */
	export interface CustomRoutingEndpointGroup {
		EndpointGroupArn?: string;
		EndpointGroupRegion?: string;
		DestinationDescriptions?: Array<CustomRoutingDestinationDescription>;
		EndpointDescriptions?: Array<CustomRoutingEndpointDescription>;
	}

	/** A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener.  */
	export interface CustomRoutingEndpointGroupFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
		EndpointGroupRegion: FormControl<string | null | undefined>,
	}
	export function CreateCustomRoutingEndpointGroupFormGroup() {
		return new FormGroup<CustomRoutingEndpointGroupFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			EndpointGroupRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on. */
	export interface CustomRoutingDestinationDescription {
		FromPort?: number | null;
		ToPort?: number | null;
		Protocols?: Array<Protocol>;
	}

	/** For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on. */
	export interface CustomRoutingDestinationDescriptionFormProperties {
		FromPort: FormControl<number | null | undefined>,
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreateCustomRoutingDestinationDescriptionFormGroup() {
		return new FormGroup<CustomRoutingDestinationDescriptionFormProperties>({
			FromPort: new FormControl<number | null | undefined>(undefined),
			ToPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Protocol { TCP = 0, UDP = 1 }

	export interface CreateCustomRoutingEndpointGroupRequest {

		/** Required */
		ListenerArn: string;

		/** Required */
		EndpointGroupRegion: string;

		/** Required */
		DestinationConfigurations: Array<CustomRoutingDestinationConfiguration>;

		/** Required */
		IdempotencyToken: string;
	}
	export interface CreateCustomRoutingEndpointGroupRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointGroupRegion: FormControl<string | null | undefined>,

		/** Required */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomRoutingEndpointGroupRequestFormGroup() {
		return new FormGroup<CreateCustomRoutingEndpointGroupRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointGroupRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on. */
	export interface CustomRoutingDestinationConfiguration {

		/** Required */
		FromPort: number;

		/** Required */
		ToPort: number;

		/** Required */
		Protocols: Array<CustomRoutingProtocol>;
	}

	/** For a custom routing accelerator, sets the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on. */
	export interface CustomRoutingDestinationConfigurationFormProperties {

		/** Required */
		FromPort: FormControl<number | null | undefined>,

		/** Required */
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreateCustomRoutingDestinationConfigurationFormGroup() {
		return new FormGroup<CustomRoutingDestinationConfigurationFormProperties>({
			FromPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ToPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomRoutingProtocol { TCP = 0, UDP = 1 }

	export interface AcceleratorNotFoundException {
	}
	export interface AcceleratorNotFoundExceptionFormProperties {
	}
	export function CreateAcceleratorNotFoundExceptionFormGroup() {
		return new FormGroup<AcceleratorNotFoundExceptionFormProperties>({
		});

	}

	export interface EndpointGroupAlreadyExistsException {
	}
	export interface EndpointGroupAlreadyExistsExceptionFormProperties {
	}
	export function CreateEndpointGroupAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EndpointGroupAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ListenerNotFoundException {
	}
	export interface ListenerNotFoundExceptionFormProperties {
	}
	export function CreateListenerNotFoundExceptionFormGroup() {
		return new FormGroup<ListenerNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidPortRangeException {
	}
	export interface InvalidPortRangeExceptionFormProperties {
	}
	export function CreateInvalidPortRangeExceptionFormGroup() {
		return new FormGroup<InvalidPortRangeExceptionFormProperties>({
		});

	}

	export interface CreateCustomRoutingListenerResponse {
		Listener?: CustomRoutingListener;
	}
	export interface CreateCustomRoutingListenerResponseFormProperties {
	}
	export function CreateCreateCustomRoutingListenerResponseFormGroup() {
		return new FormGroup<CreateCustomRoutingListenerResponseFormProperties>({
		});

	}


	/** A complex type for a listener for a custom routing accelerator. */
	export interface CustomRoutingListener {
		ListenerArn?: string;
		PortRanges?: Array<PortRange>;
	}

	/** A complex type for a listener for a custom routing accelerator. */
	export interface CustomRoutingListenerFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomRoutingListenerFormGroup() {
		return new FormGroup<CustomRoutingListenerFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type for a range of ports for a listener. */
	export interface PortRange {
		FromPort?: number | null;
		ToPort?: number | null;
	}

	/** A complex type for a range of ports for a listener. */
	export interface PortRangeFormProperties {
		FromPort: FormControl<number | null | undefined>,
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFormGroup() {
		return new FormGroup<PortRangeFormProperties>({
			FromPort: new FormControl<number | null | undefined>(undefined),
			ToPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCustomRoutingListenerRequest {

		/** Required */
		AcceleratorArn: string;

		/** Required */
		PortRanges: Array<PortRange>;

		/** Required */
		IdempotencyToken: string;
	}
	export interface CreateCustomRoutingListenerRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,

		/** Required */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomRoutingListenerRequestFormGroup() {
		return new FormGroup<CreateCustomRoutingListenerRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEndpointGroupResponse {
		EndpointGroup?: EndpointGroup;
	}
	export interface CreateEndpointGroupResponseFormProperties {
	}
	export function CreateCreateEndpointGroupResponseFormGroup() {
		return new FormGroup<CreateEndpointGroupResponseFormProperties>({
		});

	}


	/** A complex type for the endpoint group. An Amazon Web Services Region can have only one endpoint group for a specific listener.  */
	export interface EndpointGroup {
		EndpointGroupArn?: string;
		EndpointGroupRegion?: string;
		EndpointDescriptions?: Array<EndpointDescription>;
		TrafficDialPercentage?: number;
		HealthCheckPort?: number | null;
		HealthCheckProtocol?: HealthCheckProtocol;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number | null;
		ThresholdCount?: number | null;
		PortOverrides?: Array<PortOverride>;
	}

	/** A complex type for the endpoint group. An Amazon Web Services Region can have only one endpoint group for a specific listener.  */
	export interface EndpointGroupFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
		EndpointGroupRegion: FormControl<string | null | undefined>,
		TrafficDialPercentage: FormControl<number | null | undefined>,
		HealthCheckPort: FormControl<number | null | undefined>,
		HealthCheckProtocol: FormControl<HealthCheckProtocol | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		ThresholdCount: FormControl<number | null | undefined>,
	}
	export function CreateEndpointGroupFormGroup() {
		return new FormGroup<EndpointGroupFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			EndpointGroupRegion: new FormControl<string | null | undefined>(undefined),
			TrafficDialPercentage: new FormControl<number | null | undefined>(undefined),
			HealthCheckPort: new FormControl<number | null | undefined>(undefined),
			HealthCheckProtocol: new FormControl<HealthCheckProtocol | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			ThresholdCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HealthCheckProtocol { TCP = 0, HTTP = 1, HTTPS = 2 }


	/** <p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p> */
	export interface PortOverride {
		ListenerPort?: number | null;
		EndpointPort?: number | null;
	}

	/** <p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Overriding listener ports</a> in the <i>Global Accelerator Developer Guide</i>.</p> */
	export interface PortOverrideFormProperties {
		ListenerPort: FormControl<number | null | undefined>,
		EndpointPort: FormControl<number | null | undefined>,
	}
	export function CreatePortOverrideFormGroup() {
		return new FormGroup<PortOverrideFormProperties>({
			ListenerPort: new FormControl<number | null | undefined>(undefined),
			EndpointPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateEndpointGroupRequest {

		/** Required */
		ListenerArn: string;

		/** Required */
		EndpointGroupRegion: string;
		EndpointConfigurations?: Array<EndpointConfiguration>;
		TrafficDialPercentage?: number;
		HealthCheckPort?: number | null;
		HealthCheckProtocol?: HealthCheckProtocol;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number | null;
		ThresholdCount?: number | null;

		/** Required */
		IdempotencyToken: string;
		PortOverrides?: Array<PortOverride>;
	}
	export interface CreateEndpointGroupRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointGroupRegion: FormControl<string | null | undefined>,
		TrafficDialPercentage: FormControl<number | null | undefined>,
		HealthCheckPort: FormControl<number | null | undefined>,
		HealthCheckProtocol: FormControl<HealthCheckProtocol | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		ThresholdCount: FormControl<number | null | undefined>,

		/** Required */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointGroupRequestFormGroup() {
		return new FormGroup<CreateEndpointGroupRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointGroupRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrafficDialPercentage: new FormControl<number | null | undefined>(undefined),
			HealthCheckPort: new FormControl<number | null | undefined>(undefined),
			HealthCheckProtocol: new FormControl<HealthCheckProtocol | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			ThresholdCount: new FormControl<number | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateListenerResponse {
		Listener?: Listener;
	}
	export interface CreateListenerResponseFormProperties {
	}
	export function CreateCreateListenerResponseFormGroup() {
		return new FormGroup<CreateListenerResponseFormProperties>({
		});

	}


	/** A complex type for a listener. */
	export interface Listener {
		ListenerArn?: string;
		PortRanges?: Array<PortRange>;
		Protocol?: Protocol;
		ClientAffinity?: ClientAffinity;
	}

	/** A complex type for a listener. */
	export interface ListenerFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		ClientAffinity: FormControl<ClientAffinity | null | undefined>,
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			ClientAffinity: new FormControl<ClientAffinity | null | undefined>(undefined),
		});

	}

	export enum ClientAffinity { NONE = 0, SOURCE_IP = 1 }

	export interface CreateListenerRequest {

		/** Required */
		AcceleratorArn: string;

		/** Required */
		PortRanges: Array<PortRange>;

		/** Required */
		Protocol: Protocol;
		ClientAffinity?: ClientAffinity;

		/** Required */
		IdempotencyToken: string;
	}
	export interface CreateListenerRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,

		/** Required */
		Protocol: FormControl<Protocol | null | undefined>,
		ClientAffinity: FormControl<ClientAffinity | null | undefined>,

		/** Required */
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateListenerRequestFormGroup() {
		return new FormGroup<CreateListenerRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<Protocol | null | undefined>(undefined, [Validators.required]),
			ClientAffinity: new FormControl<ClientAffinity | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAcceleratorRequest {

		/** Required */
		AcceleratorArn: string;
	}
	export interface DeleteAcceleratorRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAcceleratorRequestFormGroup() {
		return new FormGroup<DeleteAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AcceleratorNotDisabledException {
	}
	export interface AcceleratorNotDisabledExceptionFormProperties {
	}
	export function CreateAcceleratorNotDisabledExceptionFormGroup() {
		return new FormGroup<AcceleratorNotDisabledExceptionFormProperties>({
		});

	}

	export interface AssociatedListenerFoundException {
	}
	export interface AssociatedListenerFoundExceptionFormProperties {
	}
	export function CreateAssociatedListenerFoundExceptionFormGroup() {
		return new FormGroup<AssociatedListenerFoundExceptionFormProperties>({
		});

	}

	export interface DeleteCustomRoutingAcceleratorRequest {

		/** Required */
		AcceleratorArn: string;
	}
	export interface DeleteCustomRoutingAcceleratorRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomRoutingAcceleratorRequestFormGroup() {
		return new FormGroup<DeleteCustomRoutingAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCustomRoutingEndpointGroupRequest {

		/** Required */
		EndpointGroupArn: string;
	}
	export interface DeleteCustomRoutingEndpointGroupRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomRoutingEndpointGroupRequestFormGroup() {
		return new FormGroup<DeleteCustomRoutingEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCustomRoutingListenerRequest {

		/** Required */
		ListenerArn: string;
	}
	export interface DeleteCustomRoutingListenerRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomRoutingListenerRequestFormGroup() {
		return new FormGroup<DeleteCustomRoutingListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociatedEndpointGroupFoundException {
	}
	export interface AssociatedEndpointGroupFoundExceptionFormProperties {
	}
	export function CreateAssociatedEndpointGroupFoundExceptionFormGroup() {
		return new FormGroup<AssociatedEndpointGroupFoundExceptionFormProperties>({
		});

	}

	export interface DeleteEndpointGroupRequest {

		/** Required */
		EndpointGroupArn: string;
	}
	export interface DeleteEndpointGroupRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointGroupRequestFormGroup() {
		return new FormGroup<DeleteEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteListenerRequest {

		/** Required */
		ListenerArn: string;
	}
	export interface DeleteListenerRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteListenerRequestFormGroup() {
		return new FormGroup<DeleteListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DenyCustomRoutingTrafficRequest {

		/** Required */
		EndpointGroupArn: string;

		/** Required */
		EndpointId: string;
		DestinationAddresses?: Array<string>;
		DestinationPorts?: Array<number> | null;
		DenyAllTrafficToEndpoint?: boolean | null;
	}
	export interface DenyCustomRoutingTrafficRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,

		/** Required */
		EndpointId: FormControl<string | null | undefined>,
		DenyAllTrafficToEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateDenyCustomRoutingTrafficRequestFormGroup() {
		return new FormGroup<DenyCustomRoutingTrafficRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DenyAllTrafficToEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeprovisionByoipCidrResponse {
		ByoipCidr?: ByoipCidr;
	}
	export interface DeprovisionByoipCidrResponseFormProperties {
	}
	export function CreateDeprovisionByoipCidrResponseFormGroup() {
		return new FormGroup<DeprovisionByoipCidrResponseFormProperties>({
		});

	}

	export interface DeprovisionByoipCidrRequest {

		/** Required */
		Cidr: string;
	}
	export interface DeprovisionByoipCidrRequestFormProperties {

		/** Required */
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateDeprovisionByoipCidrRequestFormGroup() {
		return new FormGroup<DeprovisionByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAcceleratorResponse {
		Accelerator?: Accelerator;
	}
	export interface DescribeAcceleratorResponseFormProperties {
	}
	export function CreateDescribeAcceleratorResponseFormGroup() {
		return new FormGroup<DescribeAcceleratorResponseFormProperties>({
		});

	}

	export interface DescribeAcceleratorRequest {

		/** Required */
		AcceleratorArn: string;
	}
	export interface DescribeAcceleratorRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAcceleratorAttributesResponse {
		AcceleratorAttributes?: AcceleratorAttributes;
	}
	export interface DescribeAcceleratorAttributesResponseFormProperties {
	}
	export function CreateDescribeAcceleratorAttributesResponseFormGroup() {
		return new FormGroup<DescribeAcceleratorAttributesResponseFormProperties>({
		});

	}


	/** Attributes of an accelerator. */
	export interface AcceleratorAttributes {
		FlowLogsEnabled?: boolean | null;
		FlowLogsS3Bucket?: string;
		FlowLogsS3Prefix?: string;
	}

	/** Attributes of an accelerator. */
	export interface AcceleratorAttributesFormProperties {
		FlowLogsEnabled: FormControl<boolean | null | undefined>,
		FlowLogsS3Bucket: FormControl<string | null | undefined>,
		FlowLogsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorAttributesFormGroup() {
		return new FormGroup<AcceleratorAttributesFormProperties>({
			FlowLogsEnabled: new FormControl<boolean | null | undefined>(undefined),
			FlowLogsS3Bucket: new FormControl<string | null | undefined>(undefined),
			FlowLogsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAcceleratorAttributesRequest {

		/** Required */
		AcceleratorArn: string;
	}
	export interface DescribeAcceleratorAttributesRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorAttributesRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorAttributesRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCustomRoutingAcceleratorResponse {
		Accelerator?: CustomRoutingAccelerator;
	}
	export interface DescribeCustomRoutingAcceleratorResponseFormProperties {
	}
	export function CreateDescribeCustomRoutingAcceleratorResponseFormGroup() {
		return new FormGroup<DescribeCustomRoutingAcceleratorResponseFormProperties>({
		});

	}

	export interface DescribeCustomRoutingAcceleratorRequest {

		/** Required */
		AcceleratorArn: string;
	}
	export interface DescribeCustomRoutingAcceleratorRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomRoutingAcceleratorRequestFormGroup() {
		return new FormGroup<DescribeCustomRoutingAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCustomRoutingAcceleratorAttributesResponse {
		AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
	}
	export interface DescribeCustomRoutingAcceleratorAttributesResponseFormProperties {
	}
	export function CreateDescribeCustomRoutingAcceleratorAttributesResponseFormGroup() {
		return new FormGroup<DescribeCustomRoutingAcceleratorAttributesResponseFormProperties>({
		});

	}


	/** Attributes of a custom routing accelerator. */
	export interface CustomRoutingAcceleratorAttributes {
		FlowLogsEnabled?: boolean | null;
		FlowLogsS3Bucket?: string;
		FlowLogsS3Prefix?: string;
	}

	/** Attributes of a custom routing accelerator. */
	export interface CustomRoutingAcceleratorAttributesFormProperties {
		FlowLogsEnabled: FormControl<boolean | null | undefined>,
		FlowLogsS3Bucket: FormControl<string | null | undefined>,
		FlowLogsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateCustomRoutingAcceleratorAttributesFormGroup() {
		return new FormGroup<CustomRoutingAcceleratorAttributesFormProperties>({
			FlowLogsEnabled: new FormControl<boolean | null | undefined>(undefined),
			FlowLogsS3Bucket: new FormControl<string | null | undefined>(undefined),
			FlowLogsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCustomRoutingAcceleratorAttributesRequest {

		/** Required */
		AcceleratorArn: string;
	}
	export interface DescribeCustomRoutingAcceleratorAttributesRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomRoutingAcceleratorAttributesRequestFormGroup() {
		return new FormGroup<DescribeCustomRoutingAcceleratorAttributesRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCustomRoutingEndpointGroupResponse {
		EndpointGroup?: CustomRoutingEndpointGroup;
	}
	export interface DescribeCustomRoutingEndpointGroupResponseFormProperties {
	}
	export function CreateDescribeCustomRoutingEndpointGroupResponseFormGroup() {
		return new FormGroup<DescribeCustomRoutingEndpointGroupResponseFormProperties>({
		});

	}

	export interface DescribeCustomRoutingEndpointGroupRequest {

		/** Required */
		EndpointGroupArn: string;
	}
	export interface DescribeCustomRoutingEndpointGroupRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomRoutingEndpointGroupRequestFormGroup() {
		return new FormGroup<DescribeCustomRoutingEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCustomRoutingListenerResponse {
		Listener?: CustomRoutingListener;
	}
	export interface DescribeCustomRoutingListenerResponseFormProperties {
	}
	export function CreateDescribeCustomRoutingListenerResponseFormGroup() {
		return new FormGroup<DescribeCustomRoutingListenerResponseFormProperties>({
		});

	}

	export interface DescribeCustomRoutingListenerRequest {

		/** Required */
		ListenerArn: string;
	}
	export interface DescribeCustomRoutingListenerRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCustomRoutingListenerRequestFormGroup() {
		return new FormGroup<DescribeCustomRoutingListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointGroupResponse {
		EndpointGroup?: EndpointGroup;
	}
	export interface DescribeEndpointGroupResponseFormProperties {
	}
	export function CreateDescribeEndpointGroupResponseFormGroup() {
		return new FormGroup<DescribeEndpointGroupResponseFormProperties>({
		});

	}

	export interface DescribeEndpointGroupRequest {

		/** Required */
		EndpointGroupArn: string;
	}
	export interface DescribeEndpointGroupRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointGroupRequestFormGroup() {
		return new FormGroup<DescribeEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeListenerResponse {
		Listener?: Listener;
	}
	export interface DescribeListenerResponseFormProperties {
	}
	export function CreateDescribeListenerResponseFormGroup() {
		return new FormGroup<DescribeListenerResponseFormProperties>({
		});

	}

	export interface DescribeListenerRequest {

		/** Required */
		ListenerArn: string;
	}
	export interface DescribeListenerRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeListenerRequestFormGroup() {
		return new FormGroup<DescribeListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAcceleratorsResponse {
		Accelerators?: Array<Accelerator>;
		NextToken?: string;
	}
	export interface ListAcceleratorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAcceleratorsResponseFormGroup() {
		return new FormGroup<ListAcceleratorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAcceleratorsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAcceleratorsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAcceleratorsRequestFormGroup() {
		return new FormGroup<ListAcceleratorsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListByoipCidrsResponse {
		ByoipCidrs?: Array<ByoipCidr>;
		NextToken?: string;
	}
	export interface ListByoipCidrsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListByoipCidrsResponseFormGroup() {
		return new FormGroup<ListByoipCidrsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListByoipCidrsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListByoipCidrsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListByoipCidrsRequestFormGroup() {
		return new FormGroup<ListByoipCidrsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingAcceleratorsResponse {
		Accelerators?: Array<CustomRoutingAccelerator>;
		NextToken?: string;
	}
	export interface ListCustomRoutingAcceleratorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingAcceleratorsResponseFormGroup() {
		return new FormGroup<ListCustomRoutingAcceleratorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingAcceleratorsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCustomRoutingAcceleratorsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingAcceleratorsRequestFormGroup() {
		return new FormGroup<ListCustomRoutingAcceleratorsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingEndpointGroupsResponse {
		EndpointGroups?: Array<CustomRoutingEndpointGroup>;
		NextToken?: string;
	}
	export interface ListCustomRoutingEndpointGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingEndpointGroupsResponseFormGroup() {
		return new FormGroup<ListCustomRoutingEndpointGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingEndpointGroupsRequest {

		/** Required */
		ListenerArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCustomRoutingEndpointGroupsRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingEndpointGroupsRequestFormGroup() {
		return new FormGroup<ListCustomRoutingEndpointGroupsRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingListenersResponse {
		Listeners?: Array<CustomRoutingListener>;
		NextToken?: string;
	}
	export interface ListCustomRoutingListenersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingListenersResponseFormGroup() {
		return new FormGroup<ListCustomRoutingListenersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingListenersRequest {

		/** Required */
		AcceleratorArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCustomRoutingListenersRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingListenersRequestFormGroup() {
		return new FormGroup<ListCustomRoutingListenersRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingPortMappingsResponse {
		PortMappings?: Array<PortMapping>;
		NextToken?: string;
	}
	export interface ListCustomRoutingPortMappingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingPortMappingsResponseFormGroup() {
		return new FormGroup<ListCustomRoutingPortMappingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets.  */
	export interface PortMapping {
		AcceleratorPort?: number | null;
		EndpointGroupArn?: string;
		EndpointId?: string;
		DestinationSocketAddress?: SocketAddress;
		Protocols?: Array<CustomRoutingProtocol>;
		DestinationTrafficState?: CustomRoutingDestinationTrafficState;
	}

	/** Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets.  */
	export interface PortMappingFormProperties {
		AcceleratorPort: FormControl<number | null | undefined>,
		EndpointGroupArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		DestinationTrafficState: FormControl<CustomRoutingDestinationTrafficState | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			AcceleratorPort: new FormControl<number | null | undefined>(undefined),
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			DestinationTrafficState: new FormControl<CustomRoutingDestinationTrafficState | null | undefined>(undefined),
		});

	}


	/** An IP address/port combination. */
	export interface SocketAddress {
		IpAddress?: string;
		Port?: number | null;
	}

	/** An IP address/port combination. */
	export interface SocketAddressFormProperties {
		IpAddress: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateSocketAddressFormGroup() {
		return new FormGroup<SocketAddressFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CustomRoutingDestinationTrafficState { ALLOW = 0, DENY = 1 }

	export interface ListCustomRoutingPortMappingsRequest {

		/** Required */
		AcceleratorArn: string;
		EndpointGroupArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCustomRoutingPortMappingsRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
		EndpointGroupArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingPortMappingsRequestFormGroup() {
		return new FormGroup<ListCustomRoutingPortMappingsRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingPortMappingsByDestinationResponse {
		DestinationPortMappings?: Array<DestinationPortMapping>;
		NextToken?: string;
	}
	export interface ListCustomRoutingPortMappingsByDestinationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingPortMappingsByDestinationResponseFormGroup() {
		return new FormGroup<ListCustomRoutingPortMappingsByDestinationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The port mappings for a specified endpoint IP address (destination). */
	export interface DestinationPortMapping {
		AcceleratorArn?: string;
		AcceleratorSocketAddresses?: Array<SocketAddress>;
		EndpointGroupArn?: string;
		EndpointId?: string;
		EndpointGroupRegion?: string;
		DestinationSocketAddress?: SocketAddress;
		IpAddressType?: IpAddressType;
		DestinationTrafficState?: CustomRoutingDestinationTrafficState;
	}

	/** The port mappings for a specified endpoint IP address (destination). */
	export interface DestinationPortMappingFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		EndpointGroupArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		EndpointGroupRegion: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		DestinationTrafficState: FormControl<CustomRoutingDestinationTrafficState | null | undefined>,
	}
	export function CreateDestinationPortMappingFormGroup() {
		return new FormGroup<DestinationPortMappingFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			EndpointGroupRegion: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			DestinationTrafficState: new FormControl<CustomRoutingDestinationTrafficState | null | undefined>(undefined),
		});

	}

	export interface ListCustomRoutingPortMappingsByDestinationRequest {

		/** Required */
		EndpointId: string;

		/** Required */
		DestinationAddress: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCustomRoutingPortMappingsByDestinationRequestFormProperties {

		/** Required */
		EndpointId: FormControl<string | null | undefined>,

		/** Required */
		DestinationAddress: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomRoutingPortMappingsByDestinationRequestFormGroup() {
		return new FormGroup<ListCustomRoutingPortMappingsByDestinationRequestFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndpointNotFoundException {
	}
	export interface EndpointNotFoundExceptionFormProperties {
	}
	export function CreateEndpointNotFoundExceptionFormGroup() {
		return new FormGroup<EndpointNotFoundExceptionFormProperties>({
		});

	}

	export interface ListEndpointGroupsResponse {
		EndpointGroups?: Array<EndpointGroup>;
		NextToken?: string;
	}
	export interface ListEndpointGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointGroupsResponseFormGroup() {
		return new FormGroup<ListEndpointGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEndpointGroupsRequest {

		/** Required */
		ListenerArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListEndpointGroupsRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointGroupsRequestFormGroup() {
		return new FormGroup<ListEndpointGroupsRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListListenersResponse {
		Listeners?: Array<Listener>;
		NextToken?: string;
	}
	export interface ListListenersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListListenersResponseFormGroup() {
		return new FormGroup<ListListenersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListListenersRequest {

		/** Required */
		AcceleratorArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListListenersRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListListenersRequestFormGroup() {
		return new FormGroup<ListListenersRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProvisionByoipCidrResponse {
		ByoipCidr?: ByoipCidr;
	}
	export interface ProvisionByoipCidrResponseFormProperties {
	}
	export function CreateProvisionByoipCidrResponseFormGroup() {
		return new FormGroup<ProvisionByoipCidrResponseFormProperties>({
		});

	}

	export interface ProvisionByoipCidrRequest {

		/** Required */
		Cidr: string;

		/** Required */
		CidrAuthorizationContext: CidrAuthorizationContext;
	}
	export interface ProvisionByoipCidrRequestFormProperties {

		/** Required */
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateProvisionByoipCidrRequestFormGroup() {
		return new FormGroup<ProvisionByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p> */
	export interface CidrAuthorizationContext {

		/** Required */
		Message: string;

		/** Required */
		Signature: string;
	}

	/** <p>Provides authorization for Amazon to bring a specific IP address range to a specific Amazon Web Services account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p> */
	export interface CidrAuthorizationContextFormProperties {

		/** Required */
		Message: FormControl<string | null | undefined>,

		/** Required */
		Signature: FormControl<string | null | undefined>,
	}
	export function CreateCidrAuthorizationContextFormGroup() {
		return new FormGroup<CidrAuthorizationContextFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Signature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveCustomRoutingEndpointsRequest {

		/** Required */
		EndpointIds: Array<string>;

		/** Required */
		EndpointGroupArn: string;
	}
	export interface RemoveCustomRoutingEndpointsRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveCustomRoutingEndpointsRequestFormGroup() {
		return new FormGroup<RemoveCustomRoutingEndpointsRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveEndpointsRequest {

		/** Required */
		EndpointIdentifiers: Array<EndpointIdentifier>;

		/** Required */
		EndpointGroupArn: string;
	}
	export interface RemoveEndpointsRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveEndpointsRequestFormGroup() {
		return new FormGroup<RemoveEndpointsRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type for an endpoint. Specifies information about the endpoint to remove from the endpoint group. */
	export interface EndpointIdentifier {

		/** Required */
		EndpointId: string;
		ClientIPPreservationEnabled?: boolean | null;
	}

	/** A complex type for an endpoint. Specifies information about the endpoint to remove from the endpoint group. */
	export interface EndpointIdentifierFormProperties {

		/** Required */
		EndpointId: FormControl<string | null | undefined>,
		ClientIPPreservationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndpointIdentifierFormGroup() {
		return new FormGroup<EndpointIdentifierFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientIPPreservationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAcceleratorResponse {
		Accelerator?: Accelerator;
	}
	export interface UpdateAcceleratorResponseFormProperties {
	}
	export function CreateUpdateAcceleratorResponseFormGroup() {
		return new FormGroup<UpdateAcceleratorResponseFormProperties>({
		});

	}

	export interface UpdateAcceleratorRequest {

		/** Required */
		AcceleratorArn: string;
		Name?: string;
		IpAddressType?: IpAddressType;
		Enabled?: boolean | null;
	}
	export interface UpdateAcceleratorRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAcceleratorRequestFormGroup() {
		return new FormGroup<UpdateAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateAcceleratorAttributesResponse {
		AcceleratorAttributes?: AcceleratorAttributes;
	}
	export interface UpdateAcceleratorAttributesResponseFormProperties {
	}
	export function CreateUpdateAcceleratorAttributesResponseFormGroup() {
		return new FormGroup<UpdateAcceleratorAttributesResponseFormProperties>({
		});

	}

	export interface UpdateAcceleratorAttributesRequest {

		/** Required */
		AcceleratorArn: string;
		FlowLogsEnabled?: boolean | null;
		FlowLogsS3Bucket?: string;
		FlowLogsS3Prefix?: string;
	}
	export interface UpdateAcceleratorAttributesRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
		FlowLogsEnabled: FormControl<boolean | null | undefined>,
		FlowLogsS3Bucket: FormControl<string | null | undefined>,
		FlowLogsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAcceleratorAttributesRequestFormGroup() {
		return new FormGroup<UpdateAcceleratorAttributesRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlowLogsEnabled: new FormControl<boolean | null | undefined>(undefined),
			FlowLogsS3Bucket: new FormControl<string | null | undefined>(undefined),
			FlowLogsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCustomRoutingAcceleratorResponse {
		Accelerator?: CustomRoutingAccelerator;
	}
	export interface UpdateCustomRoutingAcceleratorResponseFormProperties {
	}
	export function CreateUpdateCustomRoutingAcceleratorResponseFormGroup() {
		return new FormGroup<UpdateCustomRoutingAcceleratorResponseFormProperties>({
		});

	}

	export interface UpdateCustomRoutingAcceleratorRequest {

		/** Required */
		AcceleratorArn: string;
		Name?: string;
		IpAddressType?: IpAddressType;
		Enabled?: boolean | null;
	}
	export interface UpdateCustomRoutingAcceleratorRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<IpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateCustomRoutingAcceleratorRequestFormGroup() {
		return new FormGroup<UpdateCustomRoutingAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<IpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateCustomRoutingAcceleratorAttributesResponse {
		AcceleratorAttributes?: CustomRoutingAcceleratorAttributes;
	}
	export interface UpdateCustomRoutingAcceleratorAttributesResponseFormProperties {
	}
	export function CreateUpdateCustomRoutingAcceleratorAttributesResponseFormGroup() {
		return new FormGroup<UpdateCustomRoutingAcceleratorAttributesResponseFormProperties>({
		});

	}

	export interface UpdateCustomRoutingAcceleratorAttributesRequest {

		/** Required */
		AcceleratorArn: string;
		FlowLogsEnabled?: boolean | null;
		FlowLogsS3Bucket?: string;
		FlowLogsS3Prefix?: string;
	}
	export interface UpdateCustomRoutingAcceleratorAttributesRequestFormProperties {

		/** Required */
		AcceleratorArn: FormControl<string | null | undefined>,
		FlowLogsEnabled: FormControl<boolean | null | undefined>,
		FlowLogsS3Bucket: FormControl<string | null | undefined>,
		FlowLogsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomRoutingAcceleratorAttributesRequestFormGroup() {
		return new FormGroup<UpdateCustomRoutingAcceleratorAttributesRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlowLogsEnabled: new FormControl<boolean | null | undefined>(undefined),
			FlowLogsS3Bucket: new FormControl<string | null | undefined>(undefined),
			FlowLogsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCustomRoutingListenerResponse {
		Listener?: CustomRoutingListener;
	}
	export interface UpdateCustomRoutingListenerResponseFormProperties {
	}
	export function CreateUpdateCustomRoutingListenerResponseFormGroup() {
		return new FormGroup<UpdateCustomRoutingListenerResponseFormProperties>({
		});

	}

	export interface UpdateCustomRoutingListenerRequest {

		/** Required */
		ListenerArn: string;

		/** Required */
		PortRanges: Array<PortRange>;
	}
	export interface UpdateCustomRoutingListenerRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomRoutingListenerRequestFormGroup() {
		return new FormGroup<UpdateCustomRoutingListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEndpointGroupResponse {
		EndpointGroup?: EndpointGroup;
	}
	export interface UpdateEndpointGroupResponseFormProperties {
	}
	export function CreateUpdateEndpointGroupResponseFormGroup() {
		return new FormGroup<UpdateEndpointGroupResponseFormProperties>({
		});

	}

	export interface UpdateEndpointGroupRequest {

		/** Required */
		EndpointGroupArn: string;
		EndpointConfigurations?: Array<EndpointConfiguration>;
		TrafficDialPercentage?: number;
		HealthCheckPort?: number | null;
		HealthCheckProtocol?: HealthCheckProtocol;
		HealthCheckPath?: string;
		HealthCheckIntervalSeconds?: number | null;
		ThresholdCount?: number | null;
		PortOverrides?: Array<PortOverride>;
	}
	export interface UpdateEndpointGroupRequestFormProperties {

		/** Required */
		EndpointGroupArn: FormControl<string | null | undefined>,
		TrafficDialPercentage: FormControl<number | null | undefined>,
		HealthCheckPort: FormControl<number | null | undefined>,
		HealthCheckProtocol: FormControl<HealthCheckProtocol | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		ThresholdCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEndpointGroupRequestFormGroup() {
		return new FormGroup<UpdateEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrafficDialPercentage: new FormControl<number | null | undefined>(undefined),
			HealthCheckPort: new FormControl<number | null | undefined>(undefined),
			HealthCheckProtocol: new FormControl<HealthCheckProtocol | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			ThresholdCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateListenerResponse {
		Listener?: Listener;
	}
	export interface UpdateListenerResponseFormProperties {
	}
	export function CreateUpdateListenerResponseFormGroup() {
		return new FormGroup<UpdateListenerResponseFormProperties>({
		});

	}

	export interface UpdateListenerRequest {

		/** Required */
		ListenerArn: string;
		PortRanges?: Array<PortRange>;
		Protocol?: Protocol;
		ClientAffinity?: ClientAffinity;
	}
	export interface UpdateListenerRequestFormProperties {

		/** Required */
		ListenerArn: FormControl<string | null | undefined>,
		Protocol: FormControl<Protocol | null | undefined>,
		ClientAffinity: FormControl<ClientAffinity | null | undefined>,
	}
	export function CreateUpdateListenerRequestFormGroup() {
		return new FormGroup<UpdateListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<Protocol | null | undefined>(undefined),
			ClientAffinity: new FormControl<ClientAffinity | null | undefined>(undefined),
		});

	}

	export interface WithdrawByoipCidrResponse {
		ByoipCidr?: ByoipCidr;
	}
	export interface WithdrawByoipCidrResponseFormProperties {
	}
	export function CreateWithdrawByoipCidrResponseFormGroup() {
		return new FormGroup<WithdrawByoipCidrResponseFormProperties>({
		});

	}

	export interface WithdrawByoipCidrRequest {

		/** Required */
		Cidr: string;
	}
	export interface WithdrawByoipCidrRequestFormProperties {

		/** Required */
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateWithdrawByoipCidrRequestFormGroup() {
		return new FormGroup<WithdrawByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomRoutingAcceleratorStatus { DEPLOYED = 0, IN_PROGRESS = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints
		 * @return {AddCustomRoutingEndpointsResponse} Success
		 */
		AddCustomRoutingEndpoints(requestBody: AddCustomRoutingEndpointsRequest): Observable<AddCustomRoutingEndpointsResponse> {
			return this.http.post<AddCustomRoutingEndpointsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints
		 * @return {AddEndpointsResponse} Success
		 */
		AddEndpoints(requestBody: AddEndpointsRequest): Observable<AddEndpointsResponse> {
			return this.http.post<AddEndpointsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr
		 * @return {AdvertiseByoipCidrResponse} Success
		 */
		AdvertiseByoipCidr(requestBody: AdvertiseByoipCidrRequest): Observable<AdvertiseByoipCidrResponse> {
			return this.http.post<AdvertiseByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic
		 * @return {void} Success
		 */
		AllowCustomRoutingTraffic(requestBody: AllowCustomRoutingTrafficRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator
		 * @return {CreateAcceleratorResponse} Success
		 */
		CreateAccelerator(requestBody: CreateAcceleratorRequest): Observable<CreateAcceleratorResponse> {
			return this.http.post<CreateAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator
		 * @return {CreateCustomRoutingAcceleratorResponse} Success
		 */
		CreateCustomRoutingAccelerator(requestBody: CreateCustomRoutingAcceleratorRequest): Observable<CreateCustomRoutingAcceleratorResponse> {
			return this.http.post<CreateCustomRoutingAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup
		 * @return {CreateCustomRoutingEndpointGroupResponse} Success
		 */
		CreateCustomRoutingEndpointGroup(requestBody: CreateCustomRoutingEndpointGroupRequest): Observable<CreateCustomRoutingEndpointGroupResponse> {
			return this.http.post<CreateCustomRoutingEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener
		 * @return {CreateCustomRoutingListenerResponse} Success
		 */
		CreateCustomRoutingListener(requestBody: CreateCustomRoutingListenerRequest): Observable<CreateCustomRoutingListenerResponse> {
			return this.http.post<CreateCustomRoutingListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup
		 * @return {CreateEndpointGroupResponse} Success
		 */
		CreateEndpointGroup(requestBody: CreateEndpointGroupRequest): Observable<CreateEndpointGroupResponse> {
			return this.http.post<CreateEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateListener
		 * @return {CreateListenerResponse} Success
		 */
		CreateListener(requestBody: CreateListenerRequest): Observable<CreateListenerResponse> {
			return this.http.post<CreateListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator
		 * @return {void} Success
		 */
		DeleteAccelerator(requestBody: DeleteAcceleratorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator
		 * @return {void} Success
		 */
		DeleteCustomRoutingAccelerator(requestBody: DeleteCustomRoutingAcceleratorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an endpoint group from a listener for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup
		 * @return {void} Success
		 */
		DeleteCustomRoutingEndpointGroup(requestBody: DeleteCustomRoutingEndpointGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a listener for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener
		 * @return {void} Success
		 */
		DeleteCustomRoutingListener(requestBody: DeleteCustomRoutingListenerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an endpoint group from a listener.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup
		 * @return {void} Success
		 */
		DeleteEndpointGroup(requestBody: DeleteEndpointGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a listener from an accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener
		 * @return {void} Success
		 */
		DeleteListener(requestBody: DeleteListenerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic
		 * @return {void} Success
		 */
		DenyCustomRoutingTraffic(requestBody: DenyCustomRoutingTrafficRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr
		 * @return {DeprovisionByoipCidrResponse} Success
		 */
		DeprovisionByoipCidr(requestBody: DeprovisionByoipCidrRequest): Observable<DeprovisionByoipCidrResponse> {
			return this.http.post<DeprovisionByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe an accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator
		 * @return {DescribeAcceleratorResponse} Success
		 */
		DescribeAccelerator(requestBody: DescribeAcceleratorRequest): Observable<DescribeAcceleratorResponse> {
			return this.http.post<DescribeAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe the attributes of an accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes
		 * @return {DescribeAcceleratorAttributesResponse} Success
		 */
		DescribeAcceleratorAttributes(requestBody: DescribeAcceleratorAttributesRequest): Observable<DescribeAcceleratorAttributesResponse> {
			return this.http.post<DescribeAcceleratorAttributesResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator
		 * @return {DescribeCustomRoutingAcceleratorResponse} Success
		 */
		DescribeCustomRoutingAccelerator(requestBody: DescribeCustomRoutingAcceleratorRequest): Observable<DescribeCustomRoutingAcceleratorResponse> {
			return this.http.post<DescribeCustomRoutingAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe the attributes of a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes
		 * @return {DescribeCustomRoutingAcceleratorAttributesResponse} Success
		 */
		DescribeCustomRoutingAcceleratorAttributes(requestBody: DescribeCustomRoutingAcceleratorAttributesRequest): Observable<DescribeCustomRoutingAcceleratorAttributesResponse> {
			return this.http.post<DescribeCustomRoutingAcceleratorAttributesResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe an endpoint group for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup
		 * @return {DescribeCustomRoutingEndpointGroupResponse} Success
		 */
		DescribeCustomRoutingEndpointGroup(requestBody: DescribeCustomRoutingEndpointGroupRequest): Observable<DescribeCustomRoutingEndpointGroupResponse> {
			return this.http.post<DescribeCustomRoutingEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The description of a listener for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener
		 * @return {DescribeCustomRoutingListenerResponse} Success
		 */
		DescribeCustomRoutingListener(requestBody: DescribeCustomRoutingListenerRequest): Observable<DescribeCustomRoutingListenerResponse> {
			return this.http.post<DescribeCustomRoutingListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe an endpoint group.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup
		 * @return {DescribeEndpointGroupResponse} Success
		 */
		DescribeEndpointGroup(requestBody: DescribeEndpointGroupRequest): Observable<DescribeEndpointGroupResponse> {
			return this.http.post<DescribeEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe a listener.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener
		 * @return {DescribeListenerResponse} Success
		 */
		DescribeListener(requestBody: DescribeListenerRequest): Observable<DescribeListenerResponse> {
			return this.http.post<DescribeListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the accelerators for an Amazon Web Services account.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAcceleratorsResponse} Success
		 */
		ListAccelerators(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAcceleratorsRequest): Observable<ListAcceleratorsResponse> {
			return this.http.post<ListAcceleratorsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListByoipCidrsResponse} Success
		 */
		ListByoipCidrs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListByoipCidrsRequest): Observable<ListByoipCidrsResponse> {
			return this.http.post<ListByoipCidrsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the custom routing accelerators for an Amazon Web Services account.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomRoutingAcceleratorsResponse} Success
		 */
		ListCustomRoutingAccelerators(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomRoutingAcceleratorsRequest): Observable<ListCustomRoutingAcceleratorsResponse> {
			return this.http.post<ListCustomRoutingAcceleratorsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the endpoint groups that are associated with a listener for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomRoutingEndpointGroupsResponse} Success
		 */
		ListCustomRoutingEndpointGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomRoutingEndpointGroupsRequest): Observable<ListCustomRoutingEndpointGroupsResponse> {
			return this.http.post<ListCustomRoutingEndpointGroupsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the listeners for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomRoutingListenersResponse} Success
		 */
		ListCustomRoutingListeners(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomRoutingListenersRequest): Observable<ListCustomRoutingListenersResponse> {
			return this.http.post<ListCustomRoutingListenersResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomRoutingPortMappingsResponse} Success
		 */
		ListCustomRoutingPortMappings(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomRoutingPortMappingsRequest): Observable<ListCustomRoutingPortMappingsResponse> {
			return this.http.post<ListCustomRoutingPortMappingsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomRoutingPortMappingsByDestinationResponse} Success
		 */
		ListCustomRoutingPortMappingsByDestination(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomRoutingPortMappingsByDestinationRequest): Observable<ListCustomRoutingPortMappingsByDestinationResponse> {
			return this.http.post<ListCustomRoutingPortMappingsByDestinationResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the endpoint groups that are associated with a listener.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEndpointGroupsResponse} Success
		 */
		ListEndpointGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEndpointGroupsRequest): Observable<ListEndpointGroupsResponse> {
			return this.http.post<ListEndpointGroupsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the listeners for an accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListListeners
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListListenersResponse} Success
		 */
		ListListeners(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListListenersRequest): Observable<ListListenersResponse> {
			return this.http.post<ListListenersResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr
		 * @return {ProvisionByoipCidrResponse} Success
		 */
		ProvisionByoipCidr(requestBody: ProvisionByoipCidrRequest): Observable<ProvisionByoipCidrResponse> {
			return this.http.post<ProvisionByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove endpoints from a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints
		 * @return {void} Success
		 */
		RemoveCustomRoutingEndpoints(requestBody: RemoveCustomRoutingEndpointsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints
		 * @return {void} Success
		 */
		RemoveEndpoints(requestBody: RemoveEndpointsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator
		 * @return {UpdateAcceleratorResponse} Success
		 */
		UpdateAccelerator(requestBody: UpdateAcceleratorRequest): Observable<UpdateAcceleratorResponse> {
			return this.http.post<UpdateAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the attributes for an accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes
		 * @return {UpdateAcceleratorAttributesResponse} Success
		 */
		UpdateAcceleratorAttributes(requestBody: UpdateAcceleratorAttributesRequest): Observable<UpdateAcceleratorAttributesResponse> {
			return this.http.post<UpdateAcceleratorAttributesResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator
		 * @return {UpdateCustomRoutingAcceleratorResponse} Success
		 */
		UpdateCustomRoutingAccelerator(requestBody: UpdateCustomRoutingAcceleratorRequest): Observable<UpdateCustomRoutingAcceleratorResponse> {
			return this.http.post<UpdateCustomRoutingAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the attributes for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes
		 * @return {UpdateCustomRoutingAcceleratorAttributesResponse} Success
		 */
		UpdateCustomRoutingAcceleratorAttributes(requestBody: UpdateCustomRoutingAcceleratorAttributesRequest): Observable<UpdateCustomRoutingAcceleratorAttributesResponse> {
			return this.http.post<UpdateCustomRoutingAcceleratorAttributesResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a listener for a custom routing accelerator.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener
		 * @return {UpdateCustomRoutingListenerResponse} Success
		 */
		UpdateCustomRoutingListener(requestBody: UpdateCustomRoutingListenerRequest): Observable<UpdateCustomRoutingListenerResponse> {
			return this.http.post<UpdateCustomRoutingListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup
		 * @return {UpdateEndpointGroupResponse} Success
		 */
		UpdateEndpointGroup(requestBody: UpdateEndpointGroupRequest): Observable<UpdateEndpointGroupResponse> {
			return this.http.post<UpdateEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a listener.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener
		 * @return {UpdateListenerResponse} Success
		 */
		UpdateListener(requestBody: UpdateListenerRequest): Observable<UpdateListenerResponse> {
			return this.http.post<UpdateListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr
		 * @return {WithdrawByoipCidrResponse} Success
		 */
		WithdrawByoipCidr(requestBody: WithdrawByoipCidrRequest): Observable<WithdrawByoipCidrResponse> {
			return this.http.post<WithdrawByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddCustomRoutingEndpointsX_Amz_Target { 'GlobalAccelerator_V20180706.AddCustomRoutingEndpoints' = 0 }

	export enum AddEndpointsX_Amz_Target { 'GlobalAccelerator_V20180706.AddEndpoints' = 0 }

	export enum AdvertiseByoipCidrX_Amz_Target { 'GlobalAccelerator_V20180706.AdvertiseByoipCidr' = 0 }

	export enum AllowCustomRoutingTrafficX_Amz_Target { 'GlobalAccelerator_V20180706.AllowCustomRoutingTraffic' = 0 }

	export enum CreateAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.CreateAccelerator' = 0 }

	export enum CreateCustomRoutingAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator' = 0 }

	export enum CreateCustomRoutingEndpointGroupX_Amz_Target { 'GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup' = 0 }

	export enum CreateCustomRoutingListenerX_Amz_Target { 'GlobalAccelerator_V20180706.CreateCustomRoutingListener' = 0 }

	export enum CreateEndpointGroupX_Amz_Target { 'GlobalAccelerator_V20180706.CreateEndpointGroup' = 0 }

	export enum CreateListenerX_Amz_Target { 'GlobalAccelerator_V20180706.CreateListener' = 0 }

	export enum DeleteAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.DeleteAccelerator' = 0 }

	export enum DeleteCustomRoutingAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator' = 0 }

	export enum DeleteCustomRoutingEndpointGroupX_Amz_Target { 'GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup' = 0 }

	export enum DeleteCustomRoutingListenerX_Amz_Target { 'GlobalAccelerator_V20180706.DeleteCustomRoutingListener' = 0 }

	export enum DeleteEndpointGroupX_Amz_Target { 'GlobalAccelerator_V20180706.DeleteEndpointGroup' = 0 }

	export enum DeleteListenerX_Amz_Target { 'GlobalAccelerator_V20180706.DeleteListener' = 0 }

	export enum DenyCustomRoutingTrafficX_Amz_Target { 'GlobalAccelerator_V20180706.DenyCustomRoutingTraffic' = 0 }

	export enum DeprovisionByoipCidrX_Amz_Target { 'GlobalAccelerator_V20180706.DeprovisionByoipCidr' = 0 }

	export enum DescribeAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeAccelerator' = 0 }

	export enum DescribeAcceleratorAttributesX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeAcceleratorAttributes' = 0 }

	export enum DescribeCustomRoutingAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator' = 0 }

	export enum DescribeCustomRoutingAcceleratorAttributesX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes' = 0 }

	export enum DescribeCustomRoutingEndpointGroupX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup' = 0 }

	export enum DescribeCustomRoutingListenerX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeCustomRoutingListener' = 0 }

	export enum DescribeEndpointGroupX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeEndpointGroup' = 0 }

	export enum DescribeListenerX_Amz_Target { 'GlobalAccelerator_V20180706.DescribeListener' = 0 }

	export enum ListAcceleratorsX_Amz_Target { 'GlobalAccelerator_V20180706.ListAccelerators' = 0 }

	export enum ListByoipCidrsX_Amz_Target { 'GlobalAccelerator_V20180706.ListByoipCidrs' = 0 }

	export enum ListCustomRoutingAcceleratorsX_Amz_Target { 'GlobalAccelerator_V20180706.ListCustomRoutingAccelerators' = 0 }

	export enum ListCustomRoutingEndpointGroupsX_Amz_Target { 'GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups' = 0 }

	export enum ListCustomRoutingListenersX_Amz_Target { 'GlobalAccelerator_V20180706.ListCustomRoutingListeners' = 0 }

	export enum ListCustomRoutingPortMappingsX_Amz_Target { 'GlobalAccelerator_V20180706.ListCustomRoutingPortMappings' = 0 }

	export enum ListCustomRoutingPortMappingsByDestinationX_Amz_Target { 'GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination' = 0 }

	export enum ListEndpointGroupsX_Amz_Target { 'GlobalAccelerator_V20180706.ListEndpointGroups' = 0 }

	export enum ListListenersX_Amz_Target { 'GlobalAccelerator_V20180706.ListListeners' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'GlobalAccelerator_V20180706.ListTagsForResource' = 0 }

	export enum ProvisionByoipCidrX_Amz_Target { 'GlobalAccelerator_V20180706.ProvisionByoipCidr' = 0 }

	export enum RemoveCustomRoutingEndpointsX_Amz_Target { 'GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints' = 0 }

	export enum RemoveEndpointsX_Amz_Target { 'GlobalAccelerator_V20180706.RemoveEndpoints' = 0 }

	export enum TagResourceX_Amz_Target { 'GlobalAccelerator_V20180706.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'GlobalAccelerator_V20180706.UntagResource' = 0 }

	export enum UpdateAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.UpdateAccelerator' = 0 }

	export enum UpdateAcceleratorAttributesX_Amz_Target { 'GlobalAccelerator_V20180706.UpdateAcceleratorAttributes' = 0 }

	export enum UpdateCustomRoutingAcceleratorX_Amz_Target { 'GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator' = 0 }

	export enum UpdateCustomRoutingAcceleratorAttributesX_Amz_Target { 'GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes' = 0 }

	export enum UpdateCustomRoutingListenerX_Amz_Target { 'GlobalAccelerator_V20180706.UpdateCustomRoutingListener' = 0 }

	export enum UpdateEndpointGroupX_Amz_Target { 'GlobalAccelerator_V20180706.UpdateEndpointGroup' = 0 }

	export enum UpdateListenerX_Amz_Target { 'GlobalAccelerator_V20180706.UpdateListener' = 0 }

	export enum WithdrawByoipCidrX_Amz_Target { 'GlobalAccelerator_V20180706.WithdrawByoipCidr' = 0 }

}

