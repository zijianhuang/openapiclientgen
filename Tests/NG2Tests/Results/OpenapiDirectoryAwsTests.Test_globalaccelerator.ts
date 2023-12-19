import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AdvertiseByoipCidrResponse {

		/** <p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}
	export interface AdvertiseByoipCidrResponseFormProperties {
	}
	export function CreateAdvertiseByoipCidrResponseFormGroup() {
		return new FormGroup<AdvertiseByoipCidrResponseFormProperties>({
		});

	}


	/** <p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
	export interface ByoipCidr {
		Cidr?: string | null;
		State?: ByoipCidrState | null;
		Events?: Array<ByoipCidrEvent>;
	}

	/** <p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
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


	/** A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP). */
	export interface ByoipCidrEvent {
		Message?: string | null;
		Timestamp?: Date | null;
	}

	/** A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP). */
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
		Cidr: string;
	}
	export interface AdvertiseByoipCidrRequestFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiseByoipCidrRequestFormGroup() {
		return new FormGroup<AdvertiseByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface CreateAcceleratorResponse {

		/** An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
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
		AcceleratorArn?: string | null;
		Name?: string | null;
		IpAddressType?: AcceleratorIpAddressType | null;
		Enabled?: boolean | null;
		IpSets?: Array<IpSet>;
		DnsName?: string | null;
		Status?: AcceleratorStatus | null;
		CreatedTime?: Date | null;
		LastModifiedTime?: Date | null;
	}

	/** An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
	export interface AcceleratorFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<AcceleratorIpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		Status: FormControl<AcceleratorStatus | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateAcceleratorFormGroup() {
		return new FormGroup<AcceleratorFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<AcceleratorIpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AcceleratorStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AcceleratorIpAddressType { IPV4 = 0 }


	/** A complex type for the set of IP addresses for an accelerator. */
	export interface IpSet {
		IpFamily?: string | null;
		IpAddresses?: Array<string>;
	}

	/** A complex type for the set of IP addresses for an accelerator. */
	export interface IpSetFormProperties {
		IpFamily: FormControl<string | null | undefined>,
	}
	export function CreateIpSetFormGroup() {
		return new FormGroup<IpSetFormProperties>({
			IpFamily: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AcceleratorStatus { DEPLOYED = 0, IN_PROGRESS = 1 }

	export interface CreateAcceleratorRequest {
		Name: string;
		IpAddressType?: AcceleratorIpAddressType | null;
		IpAddresses?: Array<string>;
		Enabled?: boolean | null;
		IdempotencyToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateAcceleratorRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<AcceleratorIpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAcceleratorRequestFormGroup() {
		return new FormGroup<CreateAcceleratorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<AcceleratorIpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains a <code>Tag</code> key and <code>Tag</code> value. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** A complex type that contains a <code>Tag</code> key and <code>Tag</code> value. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateEndpointGroupResponse {

		/** A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. */
		EndpointGroup?: EndpointGroup;
	}
	export interface CreateEndpointGroupResponseFormProperties {
	}
	export function CreateCreateEndpointGroupResponseFormGroup() {
		return new FormGroup<CreateEndpointGroupResponseFormProperties>({
		});

	}


	/** A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.  */
	export interface EndpointGroup {
		EndpointGroupArn?: string | null;
		EndpointGroupRegion?: string | null;
		EndpointDescriptions?: Array<EndpointDescription>;
		TrafficDialPercentage?: number | null;
		HealthCheckPort?: number | null;
		HealthCheckProtocol?: EndpointGroupHealthCheckProtocol | null;
		HealthCheckPath?: string | null;
		HealthCheckIntervalSeconds?: number | null;
		ThresholdCount?: number | null;
	}

	/** A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener.  */
	export interface EndpointGroupFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
		EndpointGroupRegion: FormControl<string | null | undefined>,
		TrafficDialPercentage: FormControl<number | null | undefined>,
		HealthCheckPort: FormControl<number | null | undefined>,
		HealthCheckProtocol: FormControl<EndpointGroupHealthCheckProtocol | null | undefined>,
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
			HealthCheckProtocol: new FormControl<EndpointGroupHealthCheckProtocol | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			ThresholdCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers. */
	export interface EndpointDescription {
		EndpointId?: string | null;
		Weight?: number | null;
		HealthState?: EndpointDescriptionHealthState | null;
		HealthReason?: string | null;
		ClientIPPreservationEnabled?: boolean | null;
	}

	/** A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers. */
	export interface EndpointDescriptionFormProperties {
		EndpointId: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
		HealthState: FormControl<EndpointDescriptionHealthState | null | undefined>,
		HealthReason: FormControl<string | null | undefined>,
		ClientIPPreservationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndpointDescriptionFormGroup() {
		return new FormGroup<EndpointDescriptionFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
			HealthState: new FormControl<EndpointDescriptionHealthState | null | undefined>(undefined),
			HealthReason: new FormControl<string | null | undefined>(undefined),
			ClientIPPreservationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EndpointDescriptionHealthState { INITIAL = 0, HEALTHY = 1, UNHEALTHY = 2 }

	export enum EndpointGroupHealthCheckProtocol { TCP = 0, HTTP = 1, HTTPS = 2 }

	export interface CreateEndpointGroupRequest {
		ListenerArn: string;
		EndpointGroupRegion: string;
		EndpointConfigurations?: Array<EndpointConfiguration>;
		TrafficDialPercentage?: number | null;
		HealthCheckPort?: number | null;
		HealthCheckProtocol?: EndpointGroupHealthCheckProtocol | null;
		HealthCheckPath?: string | null;
		HealthCheckIntervalSeconds?: number | null;
		ThresholdCount?: number | null;
		IdempotencyToken: string;
	}
	export interface CreateEndpointGroupRequestFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
		EndpointGroupRegion: FormControl<string | null | undefined>,
		TrafficDialPercentage: FormControl<number | null | undefined>,
		HealthCheckPort: FormControl<number | null | undefined>,
		HealthCheckProtocol: FormControl<EndpointGroupHealthCheckProtocol | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		ThresholdCount: FormControl<number | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointGroupRequestFormGroup() {
		return new FormGroup<CreateEndpointGroupRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
			EndpointGroupRegion: new FormControl<string | null | undefined>(undefined),
			TrafficDialPercentage: new FormControl<number | null | undefined>(undefined),
			HealthCheckPort: new FormControl<number | null | undefined>(undefined),
			HealthCheckProtocol: new FormControl<EndpointGroupHealthCheckProtocol | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			ThresholdCount: new FormControl<number | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type for endpoints. */
	export interface EndpointConfiguration {
		EndpointId?: string | null;
		Weight?: number | null;
		ClientIPPreservationEnabled?: boolean | null;
	}

	/** A complex type for endpoints. */
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

	export interface CreateListenerResponse {

		/** A complex type for a listener. */
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
		ListenerArn?: string | null;
		PortRanges?: Array<PortRange>;
		Protocol?: ListenerProtocol | null;
		ClientAffinity?: ListenerClientAffinity | null;
	}

	/** A complex type for a listener. */
	export interface ListenerFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
		Protocol: FormControl<ListenerProtocol | null | undefined>,
		ClientAffinity: FormControl<ListenerClientAffinity | null | undefined>,
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			ClientAffinity: new FormControl<ListenerClientAffinity | null | undefined>(undefined),
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

	export enum ListenerProtocol { TCP = 0, UDP = 1 }

	export enum ListenerClientAffinity { NONE = 0, SOURCE_IP = 1 }

	export interface CreateListenerRequest {
		AcceleratorArn: string;
		PortRanges: Array<PortRange>;
		Protocol: ListenerProtocol;
		ClientAffinity?: ListenerClientAffinity | null;
		IdempotencyToken: string;
	}
	export interface CreateListenerRequestFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		Protocol: FormControl<ListenerProtocol | null | undefined>,
		ClientAffinity: FormControl<ListenerClientAffinity | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateListenerRequestFormGroup() {
		return new FormGroup<CreateListenerRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			ClientAffinity: new FormControl<ListenerClientAffinity | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteAcceleratorRequest {
		AcceleratorArn: string;
	}
	export interface DeleteAcceleratorRequestFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAcceleratorRequestFormGroup() {
		return new FormGroup<DeleteAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteEndpointGroupRequest {
		EndpointGroupArn: string;
	}
	export interface DeleteEndpointGroupRequestFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointGroupRequestFormGroup() {
		return new FormGroup<DeleteEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteListenerRequest {
		ListenerArn: string;
	}
	export interface DeleteListenerRequestFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteListenerRequestFormGroup() {
		return new FormGroup<DeleteListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
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

	export interface DeprovisionByoipCidrResponse {

		/** <p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}
	export interface DeprovisionByoipCidrResponseFormProperties {
	}
	export function CreateDeprovisionByoipCidrResponseFormGroup() {
		return new FormGroup<DeprovisionByoipCidrResponseFormProperties>({
		});

	}

	export interface DeprovisionByoipCidrRequest {
		Cidr: string;
	}
	export interface DeprovisionByoipCidrRequestFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateDeprovisionByoipCidrRequestFormGroup() {
		return new FormGroup<DeprovisionByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAcceleratorResponse {

		/** An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
		Accelerator?: Accelerator;
	}
	export interface DescribeAcceleratorResponseFormProperties {
	}
	export function CreateDescribeAcceleratorResponseFormGroup() {
		return new FormGroup<DescribeAcceleratorResponseFormProperties>({
		});

	}

	export interface DescribeAcceleratorRequest {
		AcceleratorArn: string;
	}
	export interface DescribeAcceleratorRequestFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAcceleratorAttributesResponse {

		/** Attributes of an accelerator. */
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
		FlowLogsS3Bucket?: string | null;
		FlowLogsS3Prefix?: string | null;
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
		AcceleratorArn: string;
	}
	export interface DescribeAcceleratorAttributesRequestFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAcceleratorAttributesRequestFormGroup() {
		return new FormGroup<DescribeAcceleratorAttributesRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEndpointGroupResponse {

		/** A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. */
		EndpointGroup?: EndpointGroup;
	}
	export interface DescribeEndpointGroupResponseFormProperties {
	}
	export function CreateDescribeEndpointGroupResponseFormGroup() {
		return new FormGroup<DescribeEndpointGroupResponseFormProperties>({
		});

	}

	export interface DescribeEndpointGroupRequest {
		EndpointGroupArn: string;
	}
	export interface DescribeEndpointGroupRequestFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointGroupRequestFormGroup() {
		return new FormGroup<DescribeEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeListenerResponse {

		/** A complex type for a listener. */
		Listener?: Listener;
	}
	export interface DescribeListenerResponseFormProperties {
	}
	export function CreateDescribeListenerResponseFormGroup() {
		return new FormGroup<DescribeListenerResponseFormProperties>({
		});

	}

	export interface DescribeListenerRequest {
		ListenerArn: string;
	}
	export interface DescribeListenerRequestFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeListenerRequestFormGroup() {
		return new FormGroup<DescribeListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAcceleratorsResponse {
		Accelerators?: Array<Accelerator>;
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		NextToken?: string | null;
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

	export interface ListEndpointGroupsResponse {
		EndpointGroups?: Array<EndpointGroup>;
		NextToken?: string | null;
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
		ListenerArn: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListEndpointGroupsRequestFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointGroupsRequestFormGroup() {
		return new FormGroup<ListEndpointGroupsRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListListenersResponse {
		Listeners?: Array<Listener>;
		NextToken?: string | null;
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
		AcceleratorArn: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListListenersRequestFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListListenersRequestFormGroup() {
		return new FormGroup<ListListenersRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
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
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionByoipCidrResponse {

		/** <p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}
	export interface ProvisionByoipCidrResponseFormProperties {
	}
	export function CreateProvisionByoipCidrResponseFormGroup() {
		return new FormGroup<ProvisionByoipCidrResponseFormProperties>({
		});

	}

	export interface ProvisionByoipCidrRequest {
		Cidr: string;

		/**
		 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Required
		 */
		CidrAuthorizationContext: CidrAuthorizationContext;
	}
	export interface ProvisionByoipCidrRequestFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateProvisionByoipCidrRequestFormGroup() {
		return new FormGroup<ProvisionByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> */
	export interface CidrAuthorizationContext {
		Message: string;
		Signature: string;
	}

	/** <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> */
	export interface CidrAuthorizationContextFormProperties {
		Message: FormControl<string | null | undefined>,
		Signature: FormControl<string | null | undefined>,
	}
	export function CreateCidrAuthorizationContextFormGroup() {
		return new FormGroup<CidrAuthorizationContextFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
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
		ResourceArn: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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
		ResourceArn: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAcceleratorResponse {

		/** An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers. */
		Accelerator?: Accelerator;
	}
	export interface UpdateAcceleratorResponseFormProperties {
	}
	export function CreateUpdateAcceleratorResponseFormGroup() {
		return new FormGroup<UpdateAcceleratorResponseFormProperties>({
		});

	}

	export interface UpdateAcceleratorRequest {
		AcceleratorArn: string;
		Name?: string | null;
		IpAddressType?: AcceleratorIpAddressType | null;
		Enabled?: boolean | null;
	}
	export interface UpdateAcceleratorRequestFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		IpAddressType: FormControl<AcceleratorIpAddressType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAcceleratorRequestFormGroup() {
		return new FormGroup<UpdateAcceleratorRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			IpAddressType: new FormControl<AcceleratorIpAddressType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateAcceleratorAttributesResponse {

		/** Attributes of an accelerator. */
		AcceleratorAttributes?: AcceleratorAttributes;
	}
	export interface UpdateAcceleratorAttributesResponseFormProperties {
	}
	export function CreateUpdateAcceleratorAttributesResponseFormGroup() {
		return new FormGroup<UpdateAcceleratorAttributesResponseFormProperties>({
		});

	}

	export interface UpdateAcceleratorAttributesRequest {
		AcceleratorArn: string;
		FlowLogsEnabled?: boolean | null;
		FlowLogsS3Bucket?: string | null;
		FlowLogsS3Prefix?: string | null;
	}
	export interface UpdateAcceleratorAttributesRequestFormProperties {
		AcceleratorArn: FormControl<string | null | undefined>,
		FlowLogsEnabled: FormControl<boolean | null | undefined>,
		FlowLogsS3Bucket: FormControl<string | null | undefined>,
		FlowLogsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAcceleratorAttributesRequestFormGroup() {
		return new FormGroup<UpdateAcceleratorAttributesRequestFormProperties>({
			AcceleratorArn: new FormControl<string | null | undefined>(undefined),
			FlowLogsEnabled: new FormControl<boolean | null | undefined>(undefined),
			FlowLogsS3Bucket: new FormControl<string | null | undefined>(undefined),
			FlowLogsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEndpointGroupResponse {

		/** A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. */
		EndpointGroup?: EndpointGroup;
	}
	export interface UpdateEndpointGroupResponseFormProperties {
	}
	export function CreateUpdateEndpointGroupResponseFormGroup() {
		return new FormGroup<UpdateEndpointGroupResponseFormProperties>({
		});

	}

	export interface UpdateEndpointGroupRequest {
		EndpointGroupArn: string;
		EndpointConfigurations?: Array<EndpointConfiguration>;
		TrafficDialPercentage?: number | null;
		HealthCheckPort?: number | null;
		HealthCheckProtocol?: EndpointGroupHealthCheckProtocol | null;
		HealthCheckPath?: string | null;
		HealthCheckIntervalSeconds?: number | null;
		ThresholdCount?: number | null;
	}
	export interface UpdateEndpointGroupRequestFormProperties {
		EndpointGroupArn: FormControl<string | null | undefined>,
		TrafficDialPercentage: FormControl<number | null | undefined>,
		HealthCheckPort: FormControl<number | null | undefined>,
		HealthCheckProtocol: FormControl<EndpointGroupHealthCheckProtocol | null | undefined>,
		HealthCheckPath: FormControl<string | null | undefined>,
		HealthCheckIntervalSeconds: FormControl<number | null | undefined>,
		ThresholdCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEndpointGroupRequestFormGroup() {
		return new FormGroup<UpdateEndpointGroupRequestFormProperties>({
			EndpointGroupArn: new FormControl<string | null | undefined>(undefined),
			TrafficDialPercentage: new FormControl<number | null | undefined>(undefined),
			HealthCheckPort: new FormControl<number | null | undefined>(undefined),
			HealthCheckProtocol: new FormControl<EndpointGroupHealthCheckProtocol | null | undefined>(undefined),
			HealthCheckPath: new FormControl<string | null | undefined>(undefined),
			HealthCheckIntervalSeconds: new FormControl<number | null | undefined>(undefined),
			ThresholdCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateListenerResponse {

		/** A complex type for a listener. */
		Listener?: Listener;
	}
	export interface UpdateListenerResponseFormProperties {
	}
	export function CreateUpdateListenerResponseFormGroup() {
		return new FormGroup<UpdateListenerResponseFormProperties>({
		});

	}

	export interface UpdateListenerRequest {
		ListenerArn: string;
		PortRanges?: Array<PortRange>;
		Protocol?: ListenerProtocol | null;
		ClientAffinity?: ListenerClientAffinity | null;
	}
	export interface UpdateListenerRequestFormProperties {
		ListenerArn: FormControl<string | null | undefined>,
		Protocol: FormControl<ListenerProtocol | null | undefined>,
		ClientAffinity: FormControl<ListenerClientAffinity | null | undefined>,
	}
	export function CreateUpdateListenerRequestFormGroup() {
		return new FormGroup<UpdateListenerRequestFormProperties>({
			ListenerArn: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<ListenerProtocol | null | undefined>(undefined),
			ClientAffinity: new FormControl<ListenerClientAffinity | null | undefined>(undefined),
		});

	}

	export interface WithdrawByoipCidrResponse {

		/** <p>Information about an IP address range that is provisioned for use with your AWS resources through bring your own IP address (BYOIP).</p> <p>The following describes each BYOIP <code>State</code> that your IP address range can be in.</p> <ul> <li> <p> <b>PENDING_PROVISIONING</b> — You’ve submitted a request to provision an IP address range but it is not yet provisioned with AWS Global Accelerator.</p> </li> <li> <p> <b>READY</b> — The address range is provisioned with AWS Global Accelerator and can be advertised.</p> </li> <li> <p> <b>PENDING_ADVERTISING</b> — You’ve submitted a request for AWS Global Accelerator to advertise an address range but it is not yet being advertised.</p> </li> <li> <p> <b>ADVERTISING</b> — The address range is being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_WITHDRAWING</b> — You’ve submitted a request to withdraw an address range from being advertised but it is still being advertised by AWS Global Accelerator.</p> </li> <li> <p> <b>PENDING_DEPROVISIONING</b> — You’ve submitted a request to deprovision an address range from AWS Global Accelerator but it is still provisioned.</p> </li> <li> <p> <b>DEPROVISIONED</b> — The address range is deprovisioned from AWS Global Accelerator.</p> </li> <li> <p> <b>FAILED_PROVISION </b> — The request to provision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_ADVERTISING</b> — The request for AWS Global Accelerator to advertise the address range was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_WITHDRAW</b> — The request to withdraw the address range from advertising by AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> <li> <p> <b>FAILED_DEPROVISION </b> — The request to deprovision the address range from AWS Global Accelerator was not successful. Please make sure that you provide all of the correct information, and try again. If the request fails a second time, contact AWS support.</p> </li> </ul> */
		ByoipCidr?: ByoipCidr;
	}
	export interface WithdrawByoipCidrResponseFormProperties {
	}
	export function CreateWithdrawByoipCidrResponseFormGroup() {
		return new FormGroup<WithdrawByoipCidrResponseFormProperties>({
		});

	}

	export interface WithdrawByoipCidrRequest {
		Cidr: string;
	}
	export interface WithdrawByoipCidrRequestFormProperties {
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateWithdrawByoipCidrRequestFormGroup() {
		return new FormGroup<WithdrawByoipCidrRequestFormProperties>({
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpAddressType { IPV4 = 0 }

	export enum ClientAffinity { NONE = 0, SOURCE_IP = 1 }

	export enum HealthCheckProtocol { TCP = 0, HTTP = 1, HTTPS = 2 }

	export enum Protocol { TCP = 0, UDP = 1 }

	export enum HealthState { INITIAL = 0, HEALTHY = 1, UNHEALTHY = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to AWS because of propagation delays. To see an AWS CLI example of advertising an address range, scroll down to <b>Example</b>.</p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr
		 * @return {AdvertiseByoipCidrResponse} Success
		 */
		AdvertiseByoipCidr(requestBody: AdvertiseByoipCidrRequest): Observable<AdvertiseByoipCidrResponse> {
			return this.http.post<AdvertiseByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI example of creating an accelerator, scroll down to <b>Example</b>.</p> <p>If you bring your own IP address ranges to AWS Global Accelerator (BYOIP), you can assign IP addresses from your own pool to your accelerator as the static IP address entry points. Only one IP address from each of your IP address ranges can be used for each accelerator.</p> <important> <p>You must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator
		 * @return {CreateAcceleratorResponse} Success
		 */
		CreateAccelerator(requestBody: CreateAcceleratorRequest): Observable<CreateAcceleratorResponse> {
			return this.http.post<CreateAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS Region. To see an AWS CLI example of creating an endpoint group, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup
		 * @return {CreateEndpointGroupResponse} Success
		 */
		CreateEndpointGroup(requestBody: CreateEndpointGroupRequest): Observable<CreateEndpointGroupResponse> {
			return this.http.post<CreateEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. To see an AWS CLI example of creating a listener, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.CreateListener
		 * @return {CreateListenerResponse} Success
		 */
		CreateListener(requestBody: CreateListenerRequest): Observable<CreateListenerResponse> {
			return this.http.post<CreateListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator
		 * @return {void} Success
		 */
		DeleteAccelerator(requestBody: DeleteAcceleratorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * <p>Releases the specified address range that you provisioned to use with your AWS resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. To see an AWS CLI example of deprovisioning an address range, scroll down to <b>Example</b>.</p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr
		 * @return {DeprovisionByoipCidrResponse} Success
		 */
		DeprovisionByoipCidr(requestBody: DeprovisionByoipCidrRequest): Observable<DeprovisionByoipCidrResponse> {
			return this.http.post<DeprovisionByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe an accelerator. To see an AWS CLI example of describing an accelerator, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator
		 * @return {DescribeAcceleratorResponse} Success
		 */
		DescribeAccelerator(requestBody: DescribeAcceleratorRequest): Observable<DescribeAcceleratorResponse> {
			return this.http.post<DescribeAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe the attributes of an accelerator. To see an AWS CLI example of describing the attributes of an accelerator, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes
		 * @return {DescribeAcceleratorAttributesResponse} Success
		 */
		DescribeAcceleratorAttributes(requestBody: DescribeAcceleratorAttributesRequest): Observable<DescribeAcceleratorAttributesResponse> {
			return this.http.post<DescribeAcceleratorAttributesResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe an endpoint group. To see an AWS CLI example of describing an endpoint group, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup
		 * @return {DescribeEndpointGroupResponse} Success
		 */
		DescribeEndpointGroup(requestBody: DescribeEndpointGroupRequest): Observable<DescribeEndpointGroupResponse> {
			return this.http.post<DescribeEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe a listener. To see an AWS CLI example of describing a listener, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener
		 * @return {DescribeListenerResponse} Success
		 */
		DescribeListener(requestBody: DescribeListenerRequest): Observable<DescribeListenerResponse> {
			return this.http.post<DescribeListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the accelerators for an AWS account. To see an AWS CLI example of listing the accelerators for an AWS account, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators
		 * @return {ListAcceleratorsResponse} Success
		 */
		ListAccelerators(requestBody: ListAcceleratorsRequest): Observable<ListAcceleratorsResponse> {
			return this.http.post<ListAcceleratorsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.</p> <p>To see an AWS CLI example of listing BYOIP CIDR addresses, scroll down to <b>Example</b>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs
		 * @return {ListByoipCidrsResponse} Success
		 */
		ListByoipCidrs(requestBody: ListByoipCidrsRequest): Observable<ListByoipCidrsResponse> {
			return this.http.post<ListByoipCidrsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the endpoint groups that are associated with a listener. To see an AWS CLI example of listing the endpoint groups for listener, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups
		 * @return {ListEndpointGroupsResponse} Success
		 */
		ListEndpointGroups(requestBody: ListEndpointGroupsRequest): Observable<ListEndpointGroupsResponse> {
			return this.http.post<ListEndpointGroupsResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the listeners for an accelerator. To see an AWS CLI example of listing the listeners for an accelerator, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListListeners
		 * @return {ListListenersResponse} Success
		 */
		ListListeners(requestBody: ListListenersRequest): Observable<ListListenersResponse> {
			return this.http.post<ListListenersResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List all tags for an accelerator. To see an AWS CLI example of listing tags for an accelerator, scroll down to <b>Example</b>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provisions an IP address range to use with your AWS resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>To see an AWS CLI example of provisioning an address range for BYOIP, scroll down to <b>Example</b>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr
		 * @return {ProvisionByoipCidrResponse} Success
		 */
		ProvisionByoipCidr(requestBody: ProvisionByoipCidrRequest): Observable<ProvisionByoipCidrResponse> {
			return this.http.post<ProvisionByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add tags to an accelerator resource. To see an AWS CLI example of adding tags to an accelerator, scroll down to <b>Example</b>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. To see an AWS CLI example of removing tags from an accelerator, scroll down to <b>Example</b>. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update an accelerator. To see an AWS CLI example of updating an accelerator, scroll down to <b>Example</b>.</p> <important> <p>You must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator
		 * @return {UpdateAcceleratorResponse} Success
		 */
		UpdateAccelerator(requestBody: UpdateAcceleratorRequest): Observable<UpdateAcceleratorResponse> {
			return this.http.post<UpdateAcceleratorResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the attributes for an accelerator. To see an AWS CLI example of updating an accelerator to enable flow logs, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes
		 * @return {UpdateAcceleratorAttributesResponse} Success
		 */
		UpdateAcceleratorAttributes(requestBody: UpdateAcceleratorAttributesRequest): Observable<UpdateAcceleratorAttributesResponse> {
			return this.http.post<UpdateAcceleratorAttributesResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an endpoint group. To see an AWS CLI example of updating an endpoint group, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup
		 * @return {UpdateEndpointGroupResponse} Success
		 */
		UpdateEndpointGroup(requestBody: UpdateEndpointGroupRequest): Observable<UpdateEndpointGroupResponse> {
			return this.http.post<UpdateEndpointGroupResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a listener. To see an AWS CLI example of updating listener, scroll down to <b>Example</b>.
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener
		 * @return {UpdateListenerResponse} Success
		 */
		UpdateListener(requestBody: UpdateListenerRequest): Observable<UpdateListenerResponse> {
			return this.http.post<UpdateListenerResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. To see an AWS CLI example of withdrawing an address range for BYOIP so it will no longer be advertised by AWS, scroll down to <b>Example</b>.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
		 * Post #X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr
		 * @return {WithdrawByoipCidrResponse} Success
		 */
		WithdrawByoipCidr(requestBody: WithdrawByoipCidrRequest): Observable<WithdrawByoipCidrResponse> {
			return this.http.post<WithdrawByoipCidrResponse>(this.baseUri + '#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AdvertiseByoipCidrX_Amz_Target { GlobalAccelerator_V20180706_AdvertiseByoipCidr = 0 }

	export enum CreateAcceleratorX_Amz_Target { GlobalAccelerator_V20180706_CreateAccelerator = 0 }

	export enum CreateEndpointGroupX_Amz_Target { GlobalAccelerator_V20180706_CreateEndpointGroup = 0 }

	export enum CreateListenerX_Amz_Target { GlobalAccelerator_V20180706_CreateListener = 0 }

	export enum DeleteAcceleratorX_Amz_Target { GlobalAccelerator_V20180706_DeleteAccelerator = 0 }

	export enum DeleteEndpointGroupX_Amz_Target { GlobalAccelerator_V20180706_DeleteEndpointGroup = 0 }

	export enum DeleteListenerX_Amz_Target { GlobalAccelerator_V20180706_DeleteListener = 0 }

	export enum DeprovisionByoipCidrX_Amz_Target { GlobalAccelerator_V20180706_DeprovisionByoipCidr = 0 }

	export enum DescribeAcceleratorX_Amz_Target { GlobalAccelerator_V20180706_DescribeAccelerator = 0 }

	export enum DescribeAcceleratorAttributesX_Amz_Target { GlobalAccelerator_V20180706_DescribeAcceleratorAttributes = 0 }

	export enum DescribeEndpointGroupX_Amz_Target { GlobalAccelerator_V20180706_DescribeEndpointGroup = 0 }

	export enum DescribeListenerX_Amz_Target { GlobalAccelerator_V20180706_DescribeListener = 0 }

	export enum ListAcceleratorsX_Amz_Target { GlobalAccelerator_V20180706_ListAccelerators = 0 }

	export enum ListByoipCidrsX_Amz_Target { GlobalAccelerator_V20180706_ListByoipCidrs = 0 }

	export enum ListEndpointGroupsX_Amz_Target { GlobalAccelerator_V20180706_ListEndpointGroups = 0 }

	export enum ListListenersX_Amz_Target { GlobalAccelerator_V20180706_ListListeners = 0 }

	export enum ListTagsForResourceX_Amz_Target { GlobalAccelerator_V20180706_ListTagsForResource = 0 }

	export enum ProvisionByoipCidrX_Amz_Target { GlobalAccelerator_V20180706_ProvisionByoipCidr = 0 }

	export enum TagResourceX_Amz_Target { GlobalAccelerator_V20180706_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { GlobalAccelerator_V20180706_UntagResource = 0 }

	export enum UpdateAcceleratorX_Amz_Target { GlobalAccelerator_V20180706_UpdateAccelerator = 0 }

	export enum UpdateAcceleratorAttributesX_Amz_Target { GlobalAccelerator_V20180706_UpdateAcceleratorAttributes = 0 }

	export enum UpdateEndpointGroupX_Amz_Target { GlobalAccelerator_V20180706_UpdateEndpointGroup = 0 }

	export enum UpdateListenerX_Amz_Target { GlobalAccelerator_V20180706_UpdateListener = 0 }

	export enum WithdrawByoipCidrX_Amz_Target { GlobalAccelerator_V20180706_WithdrawByoipCidr = 0 }

}

