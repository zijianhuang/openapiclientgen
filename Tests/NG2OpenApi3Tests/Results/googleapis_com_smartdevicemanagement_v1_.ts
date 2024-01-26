import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Device resource represents an instance of enterprise managed device in the property. */
	export interface GoogleHomeEnterpriseSdmV1Device {

		/** Required. The resource name of the device. For example: "enterprises/XYZ/devices/123". */
		name?: string | null;

		/** Assignee details of the device. */
		parentRelations?: Array<GoogleHomeEnterpriseSdmV1ParentRelation>;

		/** Output only. Device traits. */
		traits?: {[id: string]: any };

		/** Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device. */
		type?: string | null;
	}

	/** Device resource represents an instance of enterprise managed device in the property. */
	export interface GoogleHomeEnterpriseSdmV1DeviceFormProperties {

		/** Required. The resource name of the device. For example: "enterprises/XYZ/devices/123". */
		name: FormControl<string | null | undefined>,

		/** Output only. Device traits. */
		traits: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleHomeEnterpriseSdmV1DeviceFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1DeviceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			traits: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents device relationships, for instance, structure/room to which the device is assigned to. */
	export interface GoogleHomeEnterpriseSdmV1ParentRelation {

		/** Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to. */
		displayName?: string | null;

		/** Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123" */
		parent?: string | null;
	}

	/** Represents device relationships, for instance, structure/room to which the device is assigned to. */
	export interface GoogleHomeEnterpriseSdmV1ParentRelationFormProperties {

		/** Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123" */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleHomeEnterpriseSdmV1ParentRelationFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1ParentRelationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for SmartDeviceManagementService.ExecuteDeviceCommand */
	export interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest {

		/** The command name to execute, represented by the fully qualified protobuf message name. */
		command?: string | null;

		/** The command message to execute, represented as a Struct. */
		params?: {[id: string]: any };
	}

	/** Request message for SmartDeviceManagementService.ExecuteDeviceCommand */
	export interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequestFormProperties {

		/** The command name to execute, represented by the fully qualified protobuf message name. */
		command: FormControl<string | null | undefined>,

		/** The command message to execute, represented as a Struct. */
		params: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequestFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequestFormProperties>({
			command: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response message for SmartDeviceManagementService.ExecuteDeviceCommand */
	export interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse {

		/** The results of executing the command. */
		results?: {[id: string]: any };
	}

	/** Response message for SmartDeviceManagementService.ExecuteDeviceCommand */
	export interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponseFormProperties {

		/** The results of executing the command. */
		results: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponseFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponseFormProperties>({
			results: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response message for SmartDeviceManagementService.ListDevices */
	export interface GoogleHomeEnterpriseSdmV1ListDevicesResponse {

		/** The list of devices. */
		devices?: Array<GoogleHomeEnterpriseSdmV1Device>;
	}

	/** Response message for SmartDeviceManagementService.ListDevices */
	export interface GoogleHomeEnterpriseSdmV1ListDevicesResponseFormProperties {
	}
	export function CreateGoogleHomeEnterpriseSdmV1ListDevicesResponseFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1ListDevicesResponseFormProperties>({
		});

	}


	/** Response message for SmartDeviceManagementService.ListRooms */
	export interface GoogleHomeEnterpriseSdmV1ListRoomsResponse {

		/** The list of rooms. */
		rooms?: Array<GoogleHomeEnterpriseSdmV1Room>;
	}

	/** Response message for SmartDeviceManagementService.ListRooms */
	export interface GoogleHomeEnterpriseSdmV1ListRoomsResponseFormProperties {
	}
	export function CreateGoogleHomeEnterpriseSdmV1ListRoomsResponseFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1ListRoomsResponseFormProperties>({
		});

	}


	/** Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment. */
	export interface GoogleHomeEnterpriseSdmV1Room {

		/** Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123". */
		name?: string | null;

		/** Room traits. */
		traits?: {[id: string]: any };
	}

	/** Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment. */
	export interface GoogleHomeEnterpriseSdmV1RoomFormProperties {

		/** Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123". */
		name: FormControl<string | null | undefined>,

		/** Room traits. */
		traits: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleHomeEnterpriseSdmV1RoomFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1RoomFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			traits: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response message for SmartDeviceManagementService.ListStructures */
	export interface GoogleHomeEnterpriseSdmV1ListStructuresResponse {

		/** The list of structures. */
		structures?: Array<GoogleHomeEnterpriseSdmV1Structure>;
	}

	/** Response message for SmartDeviceManagementService.ListStructures */
	export interface GoogleHomeEnterpriseSdmV1ListStructuresResponseFormProperties {
	}
	export function CreateGoogleHomeEnterpriseSdmV1ListStructuresResponseFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1ListStructuresResponseFormProperties>({
		});

	}


	/** Structure resource represents an instance of enterprise managed home or hotel room. */
	export interface GoogleHomeEnterpriseSdmV1Structure {

		/** Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC". */
		name?: string | null;

		/** Structure traits. */
		traits?: {[id: string]: any };
	}

	/** Structure resource represents an instance of enterprise managed home or hotel room. */
	export interface GoogleHomeEnterpriseSdmV1StructureFormProperties {

		/** Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC". */
		name: FormControl<string | null | undefined>,

		/** Structure traits. */
		traits: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleHomeEnterpriseSdmV1StructureFormGroup() {
		return new FormGroup<GoogleHomeEnterpriseSdmV1StructureFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			traits: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a room managed by the enterprise.
		 * Get v1/{name}
		 * @param {string} name The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".
		 * @return {GoogleHomeEnterpriseSdmV1Room} Successful response
		 */
		Smartdevicemanagement_enterprises_structures_rooms_get(name: string): Observable<GoogleHomeEnterpriseSdmV1Room> {
			return this.http.get<GoogleHomeEnterpriseSdmV1Room>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Executes a command to device managed by the enterprise.
		 * Post v1/{name}:executeCommand
		 * @param {string} name The name of the device requested. For example: "enterprises/XYZ/devices/123"
		 * @return {GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse} Successful response
		 */
		Smartdevicemanagement_enterprises_devices_executeCommand(name: string, requestBody: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest): Observable<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse> {
			return this.http.post<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':executeCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists devices managed by the enterprise.
		 * Get v1/{parent}/devices
		 * @param {string} parent The parent enterprise to list devices under. E.g. "enterprises/XYZ".
		 * @param {string} filter Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'
		 * @return {GoogleHomeEnterpriseSdmV1ListDevicesResponse} Successful response
		 */
		Smartdevicemanagement_enterprises_devices_list(parent: string, filter: string | null | undefined): Observable<GoogleHomeEnterpriseSdmV1ListDevicesResponse> {
			return this.http.get<GoogleHomeEnterpriseSdmV1ListDevicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Lists rooms managed by the enterprise.
		 * Get v1/{parent}/rooms
		 * @param {string} parent The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".
		 * @return {GoogleHomeEnterpriseSdmV1ListRoomsResponse} Successful response
		 */
		Smartdevicemanagement_enterprises_structures_rooms_list(parent: string): Observable<GoogleHomeEnterpriseSdmV1ListRoomsResponse> {
			return this.http.get<GoogleHomeEnterpriseSdmV1ListRoomsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rooms', {});
		}

		/**
		 * Lists structures managed by the enterprise.
		 * Get v1/{parent}/structures
		 * @param {string} parent The parent enterprise to list structures under. E.g. "enterprises/XYZ".
		 * @param {string} filter Optional filter to list structures.
		 * @return {GoogleHomeEnterpriseSdmV1ListStructuresResponse} Successful response
		 */
		Smartdevicemanagement_enterprises_structures_list(parent: string, filter: string | null | undefined): Observable<GoogleHomeEnterpriseSdmV1ListStructuresResponse> {
			return this.http.get<GoogleHomeEnterpriseSdmV1ListStructuresResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/structures&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}
	}

}

