import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error401 {

		/** Required */
		meta: Error401Meta;
	}
	export interface Error401FormProperties {
	}
	export function CreateError401FormGroup() {
		return new FormGroup<Error401FormProperties>({
		});

	}

	export interface Error401Meta {
		code?: string | null;
		description?: string | null;
		links?: Array<string>;
		message?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
	}
	export interface Error401MetaFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateError401MetaFormGroup() {
		return new FormGroup<Error401MetaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error403 {

		/** Required */
		meta: Error403Meta;
	}
	export interface Error403FormProperties {
	}
	export function CreateError403FormGroup() {
		return new FormGroup<Error403FormProperties>({
		});

	}

	export interface Error403Meta {
		code?: string | null;
		description?: string | null;
		links?: Array<string>;
		message?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
	}
	export interface Error403MetaFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateError403MetaFormGroup() {
		return new FormGroup<Error403MetaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error404 {

		/** Required */
		meta: Error404Meta;
	}
	export interface Error404FormProperties {
	}
	export function CreateError404FormGroup() {
		return new FormGroup<Error404FormProperties>({
		});

	}

	export interface Error404Meta {
		code?: string | null;
		description?: string | null;
		links?: Array<string>;
		message?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
	}
	export interface Error404MetaFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateError404MetaFormGroup() {
		return new FormGroup<Error404MetaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error410 {

		/** Required */
		meta: Error410Meta;
	}
	export interface Error410FormProperties {
	}
	export function CreateError410FormGroup() {
		return new FormGroup<Error410FormProperties>({
		});

	}

	export interface Error410Meta {
		code?: string | null;
		description?: string | null;
		links?: Array<string>;
		message?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
	}
	export interface Error410MetaFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateError410MetaFormGroup() {
		return new FormGroup<Error410MetaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error422 {

		/** Required */
		meta: Error422Meta;
	}
	export interface Error422FormProperties {
	}
	export function CreateError422FormGroup() {
		return new FormGroup<Error422FormProperties>({
		});

	}

	export interface Error422Meta {
		code?: string | null;
		description?: string | null;
		links?: Array<string>;
		message?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
	}
	export interface Error422MetaFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateError422MetaFormGroup() {
		return new FormGroup<Error422MetaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error422InvalidTimeFormat {

		/** Required */
		meta: Error422InvalidTimeFormatMeta;
	}
	export interface Error422InvalidTimeFormatFormProperties {
	}
	export function CreateError422InvalidTimeFormatFormGroup() {
		return new FormGroup<Error422InvalidTimeFormatFormProperties>({
		});

	}

	export interface Error422InvalidTimeFormatMeta {
		code?: string | null;
		description?: string | null;
		links?: Array<string>;
		message?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;
	}
	export interface Error422InvalidTimeFormatMetaFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateError422InvalidTimeFormatMetaFormGroup() {
		return new FormGroup<Error422InvalidTimeFormatMetaFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Spec {

		/** The base path on which the API is served, relative to the **host**. */
		basePath?: string | null;

		/** A list of MIME types that the API can consume. */
		consumes?: Array<string>;

		/** The data types produced and consumed by operations. */
		definitions?: string | null;

		/** Links to and descriptions of related external documentation. */
		externalDocs?: string | null;

		/** The host (domain name or IP address) serving the API. */
		host?: string | null;

		/** Metadata about the API. */
		info?: string | null;

		/** The paths and operations available to the API. */
		paths?: string | null;

		/** A list of MIME types that the API can produce. */
		produces?: Array<string>;

		/** The transfer protocol being used by the API. */
		schemes?: Array<string>;

		/** A list of the security schemes being used by the API. */
		security?: Array<string>;

		/** The security scheme definitions being used by the API. */
		securityDefinitions?: string | null;

		/** The version of the Swagger specification that's being used. */
		swagger?: string | null;

		/** A list of tags used by the specification, with metadata. */
		tags?: Array<string>;

		/** A list of the groups and tags used in the left column of the Swagger page. */
		'x-tagGroups'?: Array<string>;
	}
	export interface SpecFormProperties {

		/** The base path on which the API is served, relative to the **host**. */
		basePath: FormControl<string | null | undefined>,

		/** The data types produced and consumed by operations. */
		definitions: FormControl<string | null | undefined>,

		/** Links to and descriptions of related external documentation. */
		externalDocs: FormControl<string | null | undefined>,

		/** The host (domain name or IP address) serving the API. */
		host: FormControl<string | null | undefined>,

		/** Metadata about the API. */
		info: FormControl<string | null | undefined>,

		/** The paths and operations available to the API. */
		paths: FormControl<string | null | undefined>,

		/** The security scheme definitions being used by the API. */
		securityDefinitions: FormControl<string | null | undefined>,

		/** The version of the Swagger specification that's being used. */
		swagger: FormControl<string | null | undefined>,
	}
	export function CreateSpecFormGroup() {
		return new FormGroup<SpecFormProperties>({
			basePath: new FormControl<string | null | undefined>(undefined),
			definitions: new FormControl<string | null | undefined>(undefined),
			externalDocs: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			paths: new FormControl<string | null | undefined>(undefined),
			securityDefinitions: new FormControl<string | null | undefined>(undefined),
			swagger: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Audio_codec_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/** The value of the associated key. */
		value?: string | null;
	}
	export interface Audio_codec_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/** The value of the associated key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAudio_codec_metricFormGroup() {
		return new FormGroup<Audio_codec_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bits_in_rate_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value?: number | null;
	}
	export interface Bits_in_rate_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBits_in_rate_metricFormGroup() {
		return new FormGroup<Bits_in_rate_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Bits_out_rate_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value?: number | null;
	}
	export interface Bits_out_rate_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBits_out_rate_metricFormGroup() {
		return new FormGroup<Bits_out_rate_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Bytes_in_rate_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value?: number | null;
	}
	export interface Bytes_in_rate_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBytes_in_rate_metricFormGroup() {
		return new FormGroup<Bytes_in_rate_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Bytes_out_rate_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value?: number | null;
	}
	export interface Bytes_out_rate_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: float
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateBytes_out_rate_metricFormGroup() {
		return new FormGroup<Bytes_out_rate_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Configured_bytes_out_rate_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Configured_bytes_out_rate_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateConfigured_bytes_out_rate_metricFormGroup() {
		return new FormGroup<Configured_bytes_out_rate_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Connected_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/** The value of the associated key. */
		value?: string | null;
	}
	export interface Connected_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/** The value of the associated key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateConnected_metricFormGroup() {
		return new FormGroup<Connected_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cpu_idle_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Cpu_idle_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCpu_idle_metricFormGroup() {
		return new FormGroup<Cpu_idle_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Cpu_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Cpu_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCpu_metricFormGroup() {
		return new FormGroup<Cpu_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Custom_stream_target_input {

		/** Required */
		stream_target: Custom_stream_target_inputStream_target;
	}
	export interface Custom_stream_target_inputFormProperties {
	}
	export function CreateCustom_stream_target_inputFormGroup() {
		return new FormGroup<Custom_stream_target_inputFormProperties>({
		});

	}

	export interface Custom_stream_target_inputStream_target {

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). */
		backup_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url?: string | null;

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: string;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password?: string | null;

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
		 * Required
		 */
		primary_url: string;

		/**
		 * The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
		 * Required
		 */
		provider: string;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url?: string | null;

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
		 * Required
		 */
		stream_name: string;

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username?: string | null;
	}
	export interface Custom_stream_target_inputStream_targetFormProperties {

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). */
		backup_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url: FormControl<string | null | undefined>,

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
		 * Required
		 */
		primary_url: FormControl<string | null | undefined>,

		/**
		 * The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
		 * Required
		 */
		provider: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
		 * Required
		 */
		stream_name: FormControl<string | null | undefined>,

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCustom_stream_target_inputStream_targetFormGroup() {
		return new FormGroup<Custom_stream_target_inputStream_targetFormProperties>({
			backup_url: new FormControl<string | null | undefined>(undefined),
			hds_playback_url: new FormControl<string | null | undefined>(undefined),
			hls_playback_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			primary_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rtmp_playback_url: new FormControl<string | null | undefined>(undefined),
			stream_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Frame_rate_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Frame_rate_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFrame_rate_metricFormGroup() {
		return new FormGroup<Frame_rate_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Frame_size_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/** The value of the associated key. */
		value?: string | null;
	}
	export interface Frame_size_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/** The value of the associated key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFrame_size_metricFormGroup() {
		return new FormGroup<Frame_size_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Geoblock {

		/** Required when <em>type</em> is <strong>allow</strong> or <strong>deny</strong>. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1</a> on wikipedia. */
		countries?: Array<string>;

		/** The date and time that the geo-blocking rendition was created. */
		created_at?: Date | null;

		/** The state of the geo-blocking. */
		state?: GeoblockState | null;

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id?: string | null;

		/** The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere. */
		type?: GeoblockType | null;

		/** The date and time that the geo-blocking rendition was updated. */
		updated_at?: Date | null;

		/** Whitelisted addresses can be viewed even if they're within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming. */
		whitelist?: Array<string>;
	}
	export interface GeoblockFormProperties {

		/** The date and time that the geo-blocking rendition was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The state of the geo-blocking. */
		state: FormControl<GeoblockState | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id: FormControl<string | null | undefined>,

		/** The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere. */
		type: FormControl<GeoblockType | null | undefined>,

		/** The date and time that the geo-blocking rendition was updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateGeoblockFormGroup() {
		return new FormGroup<GeoblockFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<GeoblockState | null | undefined>(undefined),
			stream_target_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GeoblockType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GeoblockState { requested = 'requested', activated = 'activated', update_requested = 'update_requested', delete_requested = 'delete_requested', failed = 'failed' }

	export enum GeoblockType { disabled = 'disabled', allow = 'allow', deny = 'deny' }

	export interface Geoblock_create_input {
	}
	export interface Geoblock_create_inputFormProperties {
	}
	export function CreateGeoblock_create_inputFormGroup() {
		return new FormGroup<Geoblock_create_inputFormProperties>({
		});

	}

	export interface Geoblock_input {

		/** Required */
		geoblock: Geoblock_inputGeoblock;
	}
	export interface Geoblock_inputFormProperties {
	}
	export function CreateGeoblock_inputFormGroup() {
		return new FormGroup<Geoblock_inputFormProperties>({
		});

	}

	export interface Geoblock_inputGeoblock {

		/** Required when <em>type</em> is <strong>allow</strong> or <strong>deny</strong>. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1</a> on wikipedia. */
		countries?: Array<string>;

		/**
		 * The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere.
		 * Required
		 */
		type: GeoblockType;

		/** Whitelisted addresses can be viewed even if they're within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming. */
		whitelist?: Array<string>;
	}
	export interface Geoblock_inputGeoblockFormProperties {

		/**
		 * The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere.
		 * Required
		 */
		type: FormControl<GeoblockType | null | undefined>,
	}
	export function CreateGeoblock_inputGeoblockFormGroup() {
		return new FormGroup<Geoblock_inputGeoblockFormProperties>({
			type: new FormControl<GeoblockType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Geoblock_update_input {
	}
	export interface Geoblock_update_inputFormProperties {
	}
	export function CreateGeoblock_update_inputFormGroup() {
		return new FormGroup<Geoblock_update_inputFormProperties>({
		});

	}

	export interface Gpu_decoder_usage_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Gpu_decoder_usage_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGpu_decoder_usage_metricFormGroup() {
		return new FormGroup<Gpu_decoder_usage_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gpu_driver_version_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/** The value of the associated key. */
		value?: string | null;
	}
	export interface Gpu_driver_version_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/** The value of the associated key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGpu_driver_version_metricFormGroup() {
		return new FormGroup<Gpu_driver_version_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gpu_encoder_usage_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Gpu_encoder_usage_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGpu_encoder_usage_metricFormGroup() {
		return new FormGroup<Gpu_encoder_usage_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gpu_memory_usage_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Gpu_memory_usage_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGpu_memory_usage_metricFormGroup() {
		return new FormGroup<Gpu_memory_usage_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gpu_usage_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Gpu_usage_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGpu_usage_metricFormGroup() {
		return new FormGroup<Gpu_usage_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Height_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Height_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateHeight_metricFormGroup() {
		return new FormGroup<Height_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Index_stream_target {

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size?: Index_stream_targetChunk_size | null;

		/** A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created. */
		connection_code?: string | null;

		/** The date and time that the <em>connection_code</em> expires. */
		connection_code_expires_at?: Date | null;

		/** The date and time that the stream target was created. */
		created_at?: Date | null;

		/** The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url?: string | null;

		/** Only for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url?: string | null;

		/** The unique alphanumeric string that identifies the stream target. */
		id?: string | null;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source. */
		location?: Index_stream_targetLocation | null;

		/** A descriptive name for the stream target. Maximum 255 characters. */
		name?: string | null;

		/** The primary ingest URL of the target. */
		primary_url?: string | null;

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url?: string | null;

		/** The name of the stream being ingested into the target. Returned for all targets except those whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and whose <em>source_delivery_method</em> is **pull**. */
		stream_name?: string | null;

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type?: Index_stream_targetType | null;

		/** The date and time that the stream target was updated. */
		updated_at?: Date | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username?: string | null;
	}
	export interface Index_stream_targetFormProperties {

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size: FormControl<Index_stream_targetChunk_size | null | undefined>,

		/** A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created. */
		connection_code: FormControl<string | null | undefined>,

		/** The date and time that the <em>connection_code</em> expires. */
		connection_code_expires_at: FormControl<Date | null | undefined>,

		/** The date and time that the stream target was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		id: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source. */
		location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** A descriptive name for the stream target. Maximum 255 characters. */
		name: FormControl<string | null | undefined>,

		/** The primary ingest URL of the target. */
		primary_url: FormControl<string | null | undefined>,

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url: FormControl<string | null | undefined>,

		/** The name of the stream being ingested into the target. Returned for all targets except those whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and whose <em>source_delivery_method</em> is **pull**. */
		stream_name: FormControl<string | null | undefined>,

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type: FormControl<Index_stream_targetType | null | undefined>,

		/** The date and time that the stream target was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateIndex_stream_targetFormGroup() {
		return new FormGroup<Index_stream_targetFormProperties>({
			chunk_size: new FormControl<Index_stream_targetChunk_size | null | undefined>(undefined),
			connection_code: new FormControl<string | null | undefined>(undefined),
			connection_code_expires_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			hds_playback_url: new FormControl<string | null | undefined>(undefined),
			hls_playback_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primary_url: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			rtmp_playback_url: new FormControl<string | null | undefined>(undefined),
			stream_name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Index_stream_targetType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Index_stream_targetChunk_size { _2 = '2', _4 = '4', _6 = '6', _8 = '8', _10 = '10' }

	export enum Index_stream_targetLocation { asia_pacific_australia = 'asia_pacific_australia', asia_pacific_japan = 'asia_pacific_japan', asia_pacific_singapore = 'asia_pacific_singapore', asia_pacific_taiwan = 'asia_pacific_taiwan', eu_belgium = 'eu_belgium', eu_germany = 'eu_germany', eu_ireland = 'eu_ireland', south_america_brazil = 'south_america_brazil', us_central_iowa = 'us_central_iowa', us_east_s_carolina = 'us_east_s_carolina', us_east_virginia = 'us_east_virginia', us_west_california = 'us_west_california', us_west_oregon = 'us_west_oregon' }

	export enum Index_stream_targetType { WowzaStreamTarget = 'WowzaStreamTarget', UltraLowLatencyStreamTarget = 'UltraLowLatencyStreamTarget', CustomStreamTarget = 'CustomStreamTarget' }

	export interface Keyframe_interval_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Keyframe_interval_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateKeyframe_interval_metricFormGroup() {
		return new FormGroup<Keyframe_interval_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Live_stream {

		/**
		 * The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height?: number | null;

		/**
		 * The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width?: number | null;

		/** The billing mode for the stream. The default is <strong>pay_as_you_go</strong>. */
		billing_mode?: Live_streamBilling_mode | null;

		/** The location of your stream. Choose a location as close as possible to your video source. */
		broadcast_location?: Index_stream_targetLocation | null;

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type?: Live_streamClosed_caption_type | null;

		/** A six-character, alphanumeric string that allows certain encoders, including Wowza Streaming Engine and the Wowza GoCoder app, to connect with Wowza Streaming Cloud. The code can be used once and expires 24 hours after it's created. */
		connection_code?: string | null;

		/** The date and time that the <em>connection_code</em> expires. */
		connection_code_expires_at?: Date | null;

		/** The date and time that the live stream was created. */
		created_at?: Date | null;

		/** The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method?: Live_streamDelivery_method | null;

		/** <strong>The <em>delivery_protocol</em> parameter is deprecated. To set the delivery protocol of a transcoder's target, use <em>target_delivery_protocol</em>.</strong> */
		delivery_protocol?: Live_streamDelivery_protocol | null;

		/** An array of direct delivery protocols enabled for this live stream. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are enabled. */
		delivery_protocols?: Array<string>;

		/** For streams whose <em>encoder</em> is <strong>wowza_streaming_engine</strong>. The default is <strong>multi-bitrate</strong>, which means you're sending one or more bitrate renditions from Wowza Streaming Engine directly to a Wowza CDN target without transcoding in Wowza Streaming Cloud. The value <strong>single-bitrate</strong> means you're sending a single source stream to Wowza Streaming Cloud for transcoding and/or to deliver the source stream to multiple stream targets in Wowza Streaming Cloud. */
		delivery_type?: Live_streamDelivery_type | null;

		/** An array of direct playback URLs for the live stream's delivery protocols. Each protocol has a URL for the source and a URL for each output rendition. */
		Live_streamDirect_playback_urls?: Array<Live_streamDirect_playback_urls>;

		/** The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>. */
		encoder?: Live_streamEncoder | null;

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page?: boolean | null;

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description?: string | null;

		/** The path to a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image_url?: string | null;

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons?: boolean | null;

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title?: string | null;

		/** The URL of the Wowza Streaming Cloud-hosted webpage that viewers can visit to watch the stream. */
		hosted_page_url?: string | null;

		/** The unique alphanumeric string that identifies the live stream. */
		id?: string | null;

		/** For streams whose <em>target_delivery_protocol</em> is <strong>hls-https</strong>. If <strong>true</strong>, turns off incoming and sort packet buffers and delivers smaller video packets to the player, which can reduce latency as long as networks can handle the increased overhead. The default is <strong>false</strong>. <br /><br />This parameter only affects streams played over a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> and whose <em>provider</em> is <strong>akamai_cupertino</strong>. It does <em>not</em> reduce latency in streams played over a hosted page and is unrelated to Wowza ultra low latency stream targets. */
		low_latency?: boolean | null;

		/** A descriptive name for the live stream. Maximum 200 characters. */
		name?: string | null;

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		player_countdown?: boolean | null;

		/** The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC. */
		player_countdown_at?: Date | null;

		/** The HTML code that can be used in an external webpage to host the Wowza Streaming Cloud player. */
		player_embed_code?: string | null;

		/** The address that can be used to configure playback of the stream using the Adobe HDS protocol. */
		player_hds_playback_url?: string | null;

		/** The address that can be used to configure playback of the stream using the Apple HLS protocol. */
		player_hls_playback_url?: string | null;

		/** The unique alphanumeric string that identifies the player. */
		player_id?: string | null;

		/** The path to a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		player_logo_image_url?: string | null;

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		player_logo_position?: Live_streamPlayer_logo_position | null;

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>. */
		player_responsive?: boolean | null;

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		player_type?: string | null;

		/** The path to a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		player_video_poster_image_url?: string | null;

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		player_width?: number | null;

		/** If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>. */
		recording?: boolean | null;

		/** Details that you can use to manually configure and connect a video source to the live stream. */
		source_connection_information?: string | null;

		/** The unique alphanumeric string that identifies the stream source, if a stream source is used. */
		stream_source_id?: string | null;

		/** An array of unique alphanumeric strings that identify the stream targets used by the live stream. */
		Live_streamStream_targets?: Array<Live_streamStream_targets>;

		/** The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>. */
		target_delivery_protocol?: Live_streamDelivery_protocol | null;

		/** The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>. */
		transcoder_type?: Live_streamTranscoder_type | null;

		/** The date and time that the live stream was updated. */
		updated_at?: Date | null;

		/** If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud. */
		use_stream_source?: boolean | null;

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets. */
		video_fallback?: boolean | null;
	}
	export interface Live_streamFormProperties {

		/**
		 * The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height: FormControl<number | null | undefined>,

		/**
		 * The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width: FormControl<number | null | undefined>,

		/** The billing mode for the stream. The default is <strong>pay_as_you_go</strong>. */
		billing_mode: FormControl<Live_streamBilling_mode | null | undefined>,

		/** The location of your stream. Choose a location as close as possible to your video source. */
		broadcast_location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type: FormControl<Live_streamClosed_caption_type | null | undefined>,

		/** A six-character, alphanumeric string that allows certain encoders, including Wowza Streaming Engine and the Wowza GoCoder app, to connect with Wowza Streaming Cloud. The code can be used once and expires 24 hours after it's created. */
		connection_code: FormControl<string | null | undefined>,

		/** The date and time that the <em>connection_code</em> expires. */
		connection_code_expires_at: FormControl<Date | null | undefined>,

		/** The date and time that the live stream was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method: FormControl<Live_streamDelivery_method | null | undefined>,

		/** <strong>The <em>delivery_protocol</em> parameter is deprecated. To set the delivery protocol of a transcoder's target, use <em>target_delivery_protocol</em>.</strong> */
		delivery_protocol: FormControl<Live_streamDelivery_protocol | null | undefined>,

		/** For streams whose <em>encoder</em> is <strong>wowza_streaming_engine</strong>. The default is <strong>multi-bitrate</strong>, which means you're sending one or more bitrate renditions from Wowza Streaming Engine directly to a Wowza CDN target without transcoding in Wowza Streaming Cloud. The value <strong>single-bitrate</strong> means you're sending a single source stream to Wowza Streaming Cloud for transcoding and/or to deliver the source stream to multiple stream targets in Wowza Streaming Cloud. */
		delivery_type: FormControl<Live_streamDelivery_type | null | undefined>,

		/** The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>. */
		encoder: FormControl<Live_streamEncoder | null | undefined>,

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page: FormControl<boolean | null | undefined>,

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description: FormControl<string | null | undefined>,

		/** The path to a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image_url: FormControl<string | null | undefined>,

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons: FormControl<boolean | null | undefined>,

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title: FormControl<string | null | undefined>,

		/** The URL of the Wowza Streaming Cloud-hosted webpage that viewers can visit to watch the stream. */
		hosted_page_url: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the live stream. */
		id: FormControl<string | null | undefined>,

		/** For streams whose <em>target_delivery_protocol</em> is <strong>hls-https</strong>. If <strong>true</strong>, turns off incoming and sort packet buffers and delivers smaller video packets to the player, which can reduce latency as long as networks can handle the increased overhead. The default is <strong>false</strong>. <br /><br />This parameter only affects streams played over a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> and whose <em>provider</em> is <strong>akamai_cupertino</strong>. It does <em>not</em> reduce latency in streams played over a hosted page and is unrelated to Wowza ultra low latency stream targets. */
		low_latency: FormControl<boolean | null | undefined>,

		/** A descriptive name for the live stream. Maximum 200 characters. */
		name: FormControl<string | null | undefined>,

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		player_countdown: FormControl<boolean | null | undefined>,

		/** The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC. */
		player_countdown_at: FormControl<Date | null | undefined>,

		/** The HTML code that can be used in an external webpage to host the Wowza Streaming Cloud player. */
		player_embed_code: FormControl<string | null | undefined>,

		/** The address that can be used to configure playback of the stream using the Adobe HDS protocol. */
		player_hds_playback_url: FormControl<string | null | undefined>,

		/** The address that can be used to configure playback of the stream using the Apple HLS protocol. */
		player_hls_playback_url: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the player. */
		player_id: FormControl<string | null | undefined>,

		/** The path to a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		player_logo_image_url: FormControl<string | null | undefined>,

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		player_logo_position: FormControl<Live_streamPlayer_logo_position | null | undefined>,

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>. */
		player_responsive: FormControl<boolean | null | undefined>,

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		player_type: FormControl<string | null | undefined>,

		/** The path to a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		player_video_poster_image_url: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		player_width: FormControl<number | null | undefined>,

		/** If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>. */
		recording: FormControl<boolean | null | undefined>,

		/** Details that you can use to manually configure and connect a video source to the live stream. */
		source_connection_information: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the stream source, if a stream source is used. */
		stream_source_id: FormControl<string | null | undefined>,

		/** The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>. */
		target_delivery_protocol: FormControl<Live_streamDelivery_protocol | null | undefined>,

		/** The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>. */
		transcoder_type: FormControl<Live_streamTranscoder_type | null | undefined>,

		/** The date and time that the live stream was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud. */
		use_stream_source: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets. */
		video_fallback: FormControl<boolean | null | undefined>,
	}
	export function CreateLive_streamFormGroup() {
		return new FormGroup<Live_streamFormProperties>({
			aspect_ratio_height: new FormControl<number | null | undefined>(undefined),
			aspect_ratio_width: new FormControl<number | null | undefined>(undefined),
			billing_mode: new FormControl<Live_streamBilling_mode | null | undefined>(undefined),
			broadcast_location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined),
			closed_caption_type: new FormControl<Live_streamClosed_caption_type | null | undefined>(undefined),
			connection_code: new FormControl<string | null | undefined>(undefined),
			connection_code_expires_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			delivery_method: new FormControl<Live_streamDelivery_method | null | undefined>(undefined),
			delivery_protocol: new FormControl<Live_streamDelivery_protocol | null | undefined>(undefined),
			delivery_type: new FormControl<Live_streamDelivery_type | null | undefined>(undefined),
			encoder: new FormControl<Live_streamEncoder | null | undefined>(undefined),
			hosted_page: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_description: new FormControl<string | null | undefined>(undefined),
			hosted_page_logo_image_url: new FormControl<string | null | undefined>(undefined),
			hosted_page_sharing_icons: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_title: new FormControl<string | null | undefined>(undefined),
			hosted_page_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			low_latency: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			player_countdown: new FormControl<boolean | null | undefined>(undefined),
			player_countdown_at: new FormControl<Date | null | undefined>(undefined),
			player_embed_code: new FormControl<string | null | undefined>(undefined),
			player_hds_playback_url: new FormControl<string | null | undefined>(undefined),
			player_hls_playback_url: new FormControl<string | null | undefined>(undefined),
			player_id: new FormControl<string | null | undefined>(undefined),
			player_logo_image_url: new FormControl<string | null | undefined>(undefined),
			player_logo_position: new FormControl<Live_streamPlayer_logo_position | null | undefined>(undefined),
			player_responsive: new FormControl<boolean | null | undefined>(undefined),
			player_type: new FormControl<string | null | undefined>(undefined),
			player_video_poster_image_url: new FormControl<string | null | undefined>(undefined),
			player_width: new FormControl<number | null | undefined>(undefined),
			recording: new FormControl<boolean | null | undefined>(undefined),
			source_connection_information: new FormControl<string | null | undefined>(undefined),
			stream_source_id: new FormControl<string | null | undefined>(undefined),
			target_delivery_protocol: new FormControl<Live_streamDelivery_protocol | null | undefined>(undefined),
			transcoder_type: new FormControl<Live_streamTranscoder_type | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			use_stream_source: new FormControl<boolean | null | undefined>(undefined),
			video_fallback: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Live_streamBilling_mode { pay_as_you_go = 'pay_as_you_go', twentyfour_seven = 'twentyfour_seven' }

	export enum Live_streamClosed_caption_type { none = 'none', cea = 'cea', on_text = 'on_text', both = 'both' }

	export enum Live_streamDelivery_method { pull = 'pull', cdn = 'cdn', push = 'push' }

	export enum Live_streamDelivery_protocol { 'hls-https' = 'hls-https', 'hls-hds' = 'hls-hds' }

	export enum Live_streamDelivery_type { 'single-bitrate' = 'single-bitrate', 'multi-bitrate' = 'multi-bitrate' }

	export interface Live_streamDirect_playback_urls {

		/** The name of the playback URL: <strong>source</strong>, <strong>default</strong>, <strong>passthrough</strong>, or the output rendition's resolution. */
		name?: string | null;

		/** Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition. */
		output_id?: string | null;

		/** The playback URL for the source or output rendition. */
		url?: string | null;
	}
	export interface Live_streamDirect_playback_urlsFormProperties {

		/** The name of the playback URL: <strong>source</strong>, <strong>default</strong>, <strong>passthrough</strong>, or the output rendition's resolution. */
		name: FormControl<string | null | undefined>,

		/** Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition. */
		output_id: FormControl<string | null | undefined>,

		/** The playback URL for the source or output rendition. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLive_streamDirect_playback_urlsFormGroup() {
		return new FormGroup<Live_streamDirect_playback_urlsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			output_id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Live_streamEncoder { wowza_streaming_engine = 'wowza_streaming_engine', wowza_gocoder = 'wowza_gocoder', media_ds = 'media_ds', axis = 'axis', epiphan = 'epiphan', hauppauge = 'hauppauge', jvc = 'jvc', live_u = 'live_u', matrox = 'matrox', newtek_tricaster = 'newtek_tricaster', osprey = 'osprey', sony = 'sony', telestream_wirecast = 'telestream_wirecast', teradek_cube = 'teradek_cube', vmix = 'vmix', x_split = 'x_split', ipcamera = 'ipcamera', other_rtmp = 'other_rtmp', other_rtsp = 'other_rtsp' }

	export enum Live_streamPlayer_logo_position { 'top-left' = 'top-left', 'top-right' = 'top-right', 'bottom-left' = 'bottom-left', 'bottom-right' = 'bottom-right' }

	export interface Live_streamStream_targets {

		/** The unique alphanumeric string that identifies the stream target. */
		id?: string | null;
	}
	export interface Live_streamStream_targetsFormProperties {

		/** The unique alphanumeric string that identifies the stream target. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLive_streamStream_targetsFormGroup() {
		return new FormGroup<Live_streamStream_targetsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Live_streamTranscoder_type { transcoded = 'transcoded', passthrough = 'passthrough' }

	export interface Live_stream_create_input {

		/** Required */
		live_stream: Live_stream_create_inputLive_stream;
	}
	export interface Live_stream_create_inputFormProperties {
	}
	export function CreateLive_stream_create_inputFormGroup() {
		return new FormGroup<Live_stream_create_inputFormProperties>({
		});

	}

	export interface Live_stream_create_inputLive_stream {

		/**
		 * The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height: number;

		/**
		 * The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width: number;

		/**
		 * The billing mode for the stream. The default is <strong>pay_as_you_go</strong>.
		 * Required
		 */
		billing_mode: Live_streamBilling_mode;

		/**
		 * The location of your stream. Choose a location as close as possible to your video source.
		 * Required
		 */
		broadcast_location: Index_stream_targetLocation;

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type?: Live_streamClosed_caption_type | null;

		/** The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method?: Live_streamDelivery_method | null;

		/** An array of direct delivery protocols enabled for this live stream. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are enabled. */
		delivery_protocols?: Array<string>;

		/** For streams whose <em>encoder</em> is <strong>wowza_streaming_engine</strong>. The default is <strong>multi-bitrate</strong>, which means you're sending one or more bitrate renditions from Wowza Streaming Engine directly to a Wowza CDN target without transcoding in Wowza Streaming Cloud. The value <strong>single-bitrate</strong> means you're sending a single source stream to Wowza Streaming Cloud for transcoding and/or to deliver the source stream to multiple stream targets in Wowza Streaming Cloud. */
		delivery_type?: Live_streamDelivery_type | null;

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to Wowza Streaming Cloud. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication?: boolean | null;

		/**
		 * The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>.
		 * Required
		 */
		encoder: Live_streamEncoder;

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page?: boolean | null;

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description?: string | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image?: string | null;

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons?: boolean | null;

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title?: string | null;

		/** For streams whose <em>target_delivery_protocol</em> is <strong>hls-https</strong>. If <strong>true</strong>, turns off incoming and sort packet buffers and delivers smaller video packets to the player, which can reduce latency as long as networks can handle the increased overhead. The default is <strong>false</strong>. <br /><br />This parameter only affects streams played over a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> and whose <em>provider</em> is <strong>akamai_cupertino</strong>. It does <em>not</em> reduce latency in streams played over a hosted page and is unrelated to Wowza ultra low latency stream targets. */
		low_latency?: boolean | null;

		/**
		 * A descriptive name for the live stream. Maximum 200 characters.
		 * Required
		 */
		name: string;

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password?: string | null;

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		player_countdown?: boolean | null;

		/** The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC. */
		player_countdown_at?: Date | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		player_logo_image?: string | null;

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		player_logo_position?: Live_streamPlayer_logo_position | null;

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>. */
		player_responsive?: boolean | null;

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		player_type?: string | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		player_video_poster_image?: string | null;

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		player_width?: number | null;

		/** If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>. */
		recording?: boolean | null;

		/** If <strong>true</strong>, removes the logo file from the hosted page. The default is <strong>false</strong>. */
		remove_hosted_page_logo_image?: boolean | null;

		/** If <strong>true</strong>, removes the logo file from the player. The default is <strong>false</strong>. */
		remove_player_logo_image?: boolean | null;

		/** If <strong>true</strong>, removes the poster image. The default is <strong>false</strong>. */
		remove_player_video_poster_image?: boolean | null;

		/** The URL of an IP camera or video encoder using an RTMP and RTSP pull connection to Wowza Streaming Cloud. Consult the camera or encoder documentation for the URL syntax. */
		source_url?: string | null;

		/** The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>. */
		target_delivery_protocol?: Live_streamDelivery_protocol | null;

		/**
		 * The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
		 * Required
		 */
		transcoder_type: Live_streamTranscoder_type;

		/** If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud. */
		use_stream_source?: boolean | null;

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username?: string | null;

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets. */
		video_fallback?: boolean | null;
	}
	export interface Live_stream_create_inputLive_streamFormProperties {

		/**
		 * The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height: FormControl<number | null | undefined>,

		/**
		 * The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width: FormControl<number | null | undefined>,

		/**
		 * The billing mode for the stream. The default is <strong>pay_as_you_go</strong>.
		 * Required
		 */
		billing_mode: FormControl<Live_streamBilling_mode | null | undefined>,

		/**
		 * The location of your stream. Choose a location as close as possible to your video source.
		 * Required
		 */
		broadcast_location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type: FormControl<Live_streamClosed_caption_type | null | undefined>,

		/** The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method: FormControl<Live_streamDelivery_method | null | undefined>,

		/** For streams whose <em>encoder</em> is <strong>wowza_streaming_engine</strong>. The default is <strong>multi-bitrate</strong>, which means you're sending one or more bitrate renditions from Wowza Streaming Engine directly to a Wowza CDN target without transcoding in Wowza Streaming Cloud. The value <strong>single-bitrate</strong> means you're sending a single source stream to Wowza Streaming Cloud for transcoding and/or to deliver the source stream to multiple stream targets in Wowza Streaming Cloud. */
		delivery_type: FormControl<Live_streamDelivery_type | null | undefined>,

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to Wowza Streaming Cloud. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication: FormControl<boolean | null | undefined>,

		/**
		 * The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>.
		 * Required
		 */
		encoder: FormControl<Live_streamEncoder | null | undefined>,

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page: FormControl<boolean | null | undefined>,

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description: FormControl<string | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image: FormControl<string | null | undefined>,

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons: FormControl<boolean | null | undefined>,

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title: FormControl<string | null | undefined>,

		/** For streams whose <em>target_delivery_protocol</em> is <strong>hls-https</strong>. If <strong>true</strong>, turns off incoming and sort packet buffers and delivers smaller video packets to the player, which can reduce latency as long as networks can handle the increased overhead. The default is <strong>false</strong>. <br /><br />This parameter only affects streams played over a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> and whose <em>provider</em> is <strong>akamai_cupertino</strong>. It does <em>not</em> reduce latency in streams played over a hosted page and is unrelated to Wowza ultra low latency stream targets. */
		low_latency: FormControl<boolean | null | undefined>,

		/**
		 * A descriptive name for the live stream. Maximum 200 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password: FormControl<string | null | undefined>,

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		player_countdown: FormControl<boolean | null | undefined>,

		/** The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC. */
		player_countdown_at: FormControl<Date | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		player_logo_image: FormControl<string | null | undefined>,

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		player_logo_position: FormControl<Live_streamPlayer_logo_position | null | undefined>,

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>. */
		player_responsive: FormControl<boolean | null | undefined>,

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		player_type: FormControl<string | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		player_video_poster_image: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		player_width: FormControl<number | null | undefined>,

		/** If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>. */
		recording: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the logo file from the hosted page. The default is <strong>false</strong>. */
		remove_hosted_page_logo_image: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the logo file from the player. The default is <strong>false</strong>. */
		remove_player_logo_image: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the poster image. The default is <strong>false</strong>. */
		remove_player_video_poster_image: FormControl<boolean | null | undefined>,

		/** The URL of an IP camera or video encoder using an RTMP and RTSP pull connection to Wowza Streaming Cloud. Consult the camera or encoder documentation for the URL syntax. */
		source_url: FormControl<string | null | undefined>,

		/** The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>. */
		target_delivery_protocol: FormControl<Live_streamDelivery_protocol | null | undefined>,

		/**
		 * The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
		 * Required
		 */
		transcoder_type: FormControl<Live_streamTranscoder_type | null | undefined>,

		/** If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud. */
		use_stream_source: FormControl<boolean | null | undefined>,

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets. */
		video_fallback: FormControl<boolean | null | undefined>,
	}
	export function CreateLive_stream_create_inputLive_streamFormGroup() {
		return new FormGroup<Live_stream_create_inputLive_streamFormProperties>({
			aspect_ratio_height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			aspect_ratio_width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			billing_mode: new FormControl<Live_streamBilling_mode | null | undefined>(undefined, [Validators.required]),
			broadcast_location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined, [Validators.required]),
			closed_caption_type: new FormControl<Live_streamClosed_caption_type | null | undefined>(undefined),
			delivery_method: new FormControl<Live_streamDelivery_method | null | undefined>(undefined),
			delivery_type: new FormControl<Live_streamDelivery_type | null | undefined>(undefined),
			disable_authentication: new FormControl<boolean | null | undefined>(undefined),
			encoder: new FormControl<Live_streamEncoder | null | undefined>(undefined, [Validators.required]),
			hosted_page: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_description: new FormControl<string | null | undefined>(undefined),
			hosted_page_logo_image: new FormControl<string | null | undefined>(undefined),
			hosted_page_sharing_icons: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_title: new FormControl<string | null | undefined>(undefined),
			low_latency: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			player_countdown: new FormControl<boolean | null | undefined>(undefined),
			player_countdown_at: new FormControl<Date | null | undefined>(undefined),
			player_logo_image: new FormControl<string | null | undefined>(undefined),
			player_logo_position: new FormControl<Live_streamPlayer_logo_position | null | undefined>(undefined),
			player_responsive: new FormControl<boolean | null | undefined>(undefined),
			player_type: new FormControl<string | null | undefined>(undefined),
			player_video_poster_image: new FormControl<string | null | undefined>(undefined),
			player_width: new FormControl<number | null | undefined>(undefined),
			recording: new FormControl<boolean | null | undefined>(undefined),
			remove_hosted_page_logo_image: new FormControl<boolean | null | undefined>(undefined),
			remove_player_logo_image: new FormControl<boolean | null | undefined>(undefined),
			remove_player_video_poster_image: new FormControl<boolean | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			target_delivery_protocol: new FormControl<Live_streamDelivery_protocol | null | undefined>(undefined),
			transcoder_type: new FormControl<Live_streamTranscoder_type | null | undefined>(undefined, [Validators.required]),
			use_stream_source: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			video_fallback: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Live_stream_update_input {

		/** Required */
		live_stream: Live_stream_update_inputLive_stream;
	}
	export interface Live_stream_update_inputFormProperties {
	}
	export function CreateLive_stream_update_inputFormGroup() {
		return new FormGroup<Live_stream_update_inputFormProperties>({
		});

	}

	export interface Live_stream_update_inputLive_stream {

		/**
		 * The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height: number;

		/**
		 * The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width: number;

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type?: Live_streamClosed_caption_type | null;

		/** The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method?: Live_streamDelivery_method | null;

		/** An array of direct delivery protocols enabled for this live stream. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are enabled. */
		delivery_protocols?: Array<string>;

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to Wowza Streaming Cloud. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication?: boolean | null;

		/**
		 * The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>.
		 * Required
		 */
		encoder: Live_streamEncoder;

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description?: string | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image?: string | null;

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons?: boolean | null;

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title?: string | null;

		/**
		 * A descriptive name for the live stream. Maximum 200 characters.
		 * Required
		 */
		name: string;

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password?: string | null;

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		player_countdown?: boolean | null;

		/** The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC. */
		player_countdown_at?: Date | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		player_logo_image?: string | null;

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		player_logo_position?: Live_streamPlayer_logo_position | null;

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>. */
		player_responsive?: boolean | null;

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		player_type?: string | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		player_video_poster_image?: string | null;

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		player_width?: number | null;

		/** If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>. */
		recording?: boolean | null;

		/** If <strong>true</strong>, removes the logo file from the hosted page. The default is <strong>false</strong>. */
		remove_hosted_page_logo_image?: boolean | null;

		/** If <strong>true</strong>, removes the logo file from the player. The default is <strong>false</strong>. */
		remove_player_logo_image?: boolean | null;

		/** If <strong>true</strong>, removes the poster image. The default is <strong>false</strong>. */
		remove_player_video_poster_image?: boolean | null;

		/** The URL of an IP camera or video encoder using an RTMP and RTSP pull connection to Wowza Streaming Cloud. Consult the camera or encoder documentation for the URL syntax. */
		source_url?: string | null;

		/** The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>. */
		target_delivery_protocol?: Live_streamDelivery_protocol | null;

		/** If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud. */
		use_stream_source?: boolean | null;

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username?: string | null;

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets. */
		video_fallback?: boolean | null;
	}
	export interface Live_stream_update_inputLive_streamFormProperties {

		/**
		 * The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height: FormControl<number | null | undefined>,

		/**
		 * The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width: FormControl<number | null | undefined>,

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type: FormControl<Live_streamClosed_caption_type | null | undefined>,

		/** The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method: FormControl<Live_streamDelivery_method | null | undefined>,

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to Wowza Streaming Cloud. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication: FormControl<boolean | null | undefined>,

		/**
		 * The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>.
		 * Required
		 */
		encoder: FormControl<Live_streamEncoder | null | undefined>,

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description: FormControl<string | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image: FormControl<string | null | undefined>,

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons: FormControl<boolean | null | undefined>,

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title: FormControl<string | null | undefined>,

		/**
		 * A descriptive name for the live stream. Maximum 200 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password: FormControl<string | null | undefined>,

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		player_countdown: FormControl<boolean | null | undefined>,

		/** The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC. */
		player_countdown_at: FormControl<Date | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		player_logo_image: FormControl<string | null | undefined>,

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		player_logo_position: FormControl<Live_streamPlayer_logo_position | null | undefined>,

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>. */
		player_responsive: FormControl<boolean | null | undefined>,

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		player_type: FormControl<string | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		player_video_poster_image: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		player_width: FormControl<number | null | undefined>,

		/** If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>. */
		recording: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the logo file from the hosted page. The default is <strong>false</strong>. */
		remove_hosted_page_logo_image: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the logo file from the player. The default is <strong>false</strong>. */
		remove_player_logo_image: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the poster image. The default is <strong>false</strong>. */
		remove_player_video_poster_image: FormControl<boolean | null | undefined>,

		/** The URL of an IP camera or video encoder using an RTMP and RTSP pull connection to Wowza Streaming Cloud. Consult the camera or encoder documentation for the URL syntax. */
		source_url: FormControl<string | null | undefined>,

		/** The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>. */
		target_delivery_protocol: FormControl<Live_streamDelivery_protocol | null | undefined>,

		/** If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud. */
		use_stream_source: FormControl<boolean | null | undefined>,

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets. */
		video_fallback: FormControl<boolean | null | undefined>,
	}
	export function CreateLive_stream_update_inputLive_streamFormGroup() {
		return new FormGroup<Live_stream_update_inputLive_streamFormProperties>({
			aspect_ratio_height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			aspect_ratio_width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			closed_caption_type: new FormControl<Live_streamClosed_caption_type | null | undefined>(undefined),
			delivery_method: new FormControl<Live_streamDelivery_method | null | undefined>(undefined),
			disable_authentication: new FormControl<boolean | null | undefined>(undefined),
			encoder: new FormControl<Live_streamEncoder | null | undefined>(undefined, [Validators.required]),
			hosted_page_description: new FormControl<string | null | undefined>(undefined),
			hosted_page_logo_image: new FormControl<string | null | undefined>(undefined),
			hosted_page_sharing_icons: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_title: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			player_countdown: new FormControl<boolean | null | undefined>(undefined),
			player_countdown_at: new FormControl<Date | null | undefined>(undefined),
			player_logo_image: new FormControl<string | null | undefined>(undefined),
			player_logo_position: new FormControl<Live_streamPlayer_logo_position | null | undefined>(undefined),
			player_responsive: new FormControl<boolean | null | undefined>(undefined),
			player_type: new FormControl<string | null | undefined>(undefined),
			player_video_poster_image: new FormControl<string | null | undefined>(undefined),
			player_width: new FormControl<number | null | undefined>(undefined),
			recording: new FormControl<boolean | null | undefined>(undefined),
			remove_hosted_page_logo_image: new FormControl<boolean | null | undefined>(undefined),
			remove_player_logo_image: new FormControl<boolean | null | undefined>(undefined),
			remove_player_video_poster_image: new FormControl<boolean | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			target_delivery_protocol: new FormControl<Live_streamDelivery_protocol | null | undefined>(undefined),
			use_stream_source: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			video_fallback: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Live_streams {

		/** Required */
		live_streams: Array<Live_stream>;
	}
	export interface Live_streamsFormProperties {
	}
	export function CreateLive_streamsFormGroup() {
		return new FormGroup<Live_streamsFormProperties>({
		});

	}

	export interface Output {

		/**
		 * The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height?: number | null;

		/**
		 * The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width?: number | null;

		/**
		 * The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_audio?: number | null;

		/**
		 * The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_video?: number | null;

		/** The date and time that the output rendition was created. */
		created_at?: Date | null;

		/** Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction. */
		framerate_reduction?: OutputFramerate_reduction | null;

		/** The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>. */
		h264_profile?: OutputH264_profile | null;

		/** The unique alphanumeric string that identifies the output rendition. */
		id?: string | null;

		/** The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video. */
		keyframes?: OutputKeyframes | null;

		/** A descriptive name for the output (generated, not writable). */
		name?: string | null;
		output_stream_targets?: Array<Output_stream_target>;

		/** If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_audio?: boolean | null;

		/** If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_video?: boolean | null;

		/** The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>). */
		stream_format?: OutputStream_format | null;

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id?: string | null;

		/** The date and time that the output rendition was updated. */
		updated_at?: Date | null;
	}
	export interface OutputFormProperties {

		/**
		 * The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height: FormControl<number | null | undefined>,

		/**
		 * The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width: FormControl<number | null | undefined>,

		/**
		 * The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_audio: FormControl<number | null | undefined>,

		/**
		 * The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_video: FormControl<number | null | undefined>,

		/** The date and time that the output rendition was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction. */
		framerate_reduction: FormControl<OutputFramerate_reduction | null | undefined>,

		/** The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>. */
		h264_profile: FormControl<OutputH264_profile | null | undefined>,

		/** The unique alphanumeric string that identifies the output rendition. */
		id: FormControl<string | null | undefined>,

		/** The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video. */
		keyframes: FormControl<OutputKeyframes | null | undefined>,

		/** A descriptive name for the output (generated, not writable). */
		name: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_audio: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_video: FormControl<boolean | null | undefined>,

		/** The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>). */
		stream_format: FormControl<OutputStream_format | null | undefined>,

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id: FormControl<string | null | undefined>,

		/** The date and time that the output rendition was updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			aspect_ratio_height: new FormControl<number | null | undefined>(undefined),
			aspect_ratio_width: new FormControl<number | null | undefined>(undefined),
			bitrate_audio: new FormControl<number | null | undefined>(undefined),
			bitrate_video: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			framerate_reduction: new FormControl<OutputFramerate_reduction | null | undefined>(undefined),
			h264_profile: new FormControl<OutputH264_profile | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			keyframes: new FormControl<OutputKeyframes | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			passthrough_audio: new FormControl<boolean | null | undefined>(undefined),
			passthrough_video: new FormControl<boolean | null | undefined>(undefined),
			stream_format: new FormControl<OutputStream_format | null | undefined>(undefined),
			transcoder_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OutputFramerate_reduction { _0 = '0', '1/2' = '1/2', '1/4' = '1/4', '1/25' = '1/25', '1/30' = '1/30', '1/50' = '1/50', '1/60' = '1/60' }

	export enum OutputH264_profile { main = 'main', baseline = 'baseline', high = 'high' }

	export enum OutputKeyframes { follow_source = 'follow_source', _25 = '25', _30 = '30', _50 = '50', _60 = '60', _100 = '100', _120 = '120' }

	export interface Output_stream_target {

		/** The date and time that the output stream target was created. */
		created_at?: Date | null;

		/** The unique alphanumeric string that identifies the output stream target. */
		id?: string | null;

		/** The unique alphanumeric string that identifies the output rendition. */
		output_id?: string | null;
		stream_target?: Stream_target;

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id?: string | null;

		/** The date and time that the output stream target was updated. */
		updated_at?: Date | null;

		/** Specifies whether to use the stream target's primary or backup URL. */
		use_stream_target_backup_url?: boolean | null;
	}
	export interface Output_stream_targetFormProperties {

		/** The date and time that the output stream target was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The unique alphanumeric string that identifies the output stream target. */
		id: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the output rendition. */
		output_id: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id: FormControl<string | null | undefined>,

		/** The date and time that the output stream target was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** Specifies whether to use the stream target's primary or backup URL. */
		use_stream_target_backup_url: FormControl<boolean | null | undefined>,
	}
	export function CreateOutput_stream_targetFormGroup() {
		return new FormGroup<Output_stream_targetFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			output_id: new FormControl<string | null | undefined>(undefined),
			stream_target_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			use_stream_target_backup_url: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Stream_target {

		/** The backup ingest URL for a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> or <strong>CustomStreamTarget</strong>. */
		backup_url?: string | null;

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size?: Index_stream_targetChunk_size | null;

		/** A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created. */
		connection_code?: string | null;

		/** The date and time that the <em>connection_code</em> expires. */
		connection_code_expires_at?: Date | null;

		/** The date and time that the stream target was created. */
		created_at?: Date | null;

		/** Returned only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. Indicates whether Apple HLS playback is enabled for the stream target. */
		enable_hls?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled?: boolean | null;

		/** The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url?: string | null;

		/** Only for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url?: string | null;

		/** The unique alphanumeric string that identifies the stream target. */
		id?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server. */
		ingest_ip_whitelist?: Array<string>;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source. */
		location?: Index_stream_targetLocation | null;

		/** A descriptive name for the stream target. Maximum 255 characters. */
		name?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. A hash of **hls**, **wowz**, and **ws** URLs that can be used by the player. */
		playback_urls?: Stream_targetPlayback_urls;

		/** The primary ingest URL of the target. */
		primary_url?: string | null;

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server. */
		region_override?: Stream_targetRegion_override | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url?: string | null;

		/** Only for targets whose <em>use_secure_ingest</em> is <strong>true</strong>. The query parameter needed for secure stream delivery between the transcoder and the target. */
		secure_ingest_query_param?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source. */
		source_delivery_method?: Stream_targetSource_delivery_method | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target. */
		source_url?: string | null;

		/** The name of the stream being ingested into the target. Returned for all targets except those whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and whose <em>source_delivery_method</em> is **pull**. */
		stream_name?: string | null;

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type?: Index_stream_targetType | null;

		/** The date and time that the stream target was updated. */
		updated_at?: Date | null;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. */
		use_cors?: boolean | null;

		/** <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong> */
		use_https?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider. */
		use_secure_ingest?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username?: string | null;
	}
	export interface Stream_targetFormProperties {

		/** The backup ingest URL for a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> or <strong>CustomStreamTarget</strong>. */
		backup_url: FormControl<string | null | undefined>,

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size: FormControl<Index_stream_targetChunk_size | null | undefined>,

		/** A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created. */
		connection_code: FormControl<string | null | undefined>,

		/** The date and time that the <em>connection_code</em> expires. */
		connection_code_expires_at: FormControl<Date | null | undefined>,

		/** The date and time that the stream target was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Returned only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. Indicates whether Apple HLS playback is enabled for the stream target. */
		enable_hls: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled: FormControl<boolean | null | undefined>,

		/** The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		id: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source. */
		location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** A descriptive name for the stream target. Maximum 255 characters. */
		name: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password: FormControl<string | null | undefined>,

		/** The primary ingest URL of the target. */
		primary_url: FormControl<string | null | undefined>,

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server. */
		region_override: FormControl<Stream_targetRegion_override | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>use_secure_ingest</em> is <strong>true</strong>. The query parameter needed for secure stream delivery between the transcoder and the target. */
		secure_ingest_query_param: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source. */
		source_delivery_method: FormControl<Stream_targetSource_delivery_method | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target. */
		source_url: FormControl<string | null | undefined>,

		/** The name of the stream being ingested into the target. Returned for all targets except those whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and whose <em>source_delivery_method</em> is **pull**. */
		stream_name: FormControl<string | null | undefined>,

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type: FormControl<Index_stream_targetType | null | undefined>,

		/** The date and time that the stream target was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. */
		use_cors: FormControl<boolean | null | undefined>,

		/** <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong> */
		use_https: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider. */
		use_secure_ingest: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateStream_targetFormGroup() {
		return new FormGroup<Stream_targetFormProperties>({
			backup_url: new FormControl<string | null | undefined>(undefined),
			chunk_size: new FormControl<Index_stream_targetChunk_size | null | undefined>(undefined),
			connection_code: new FormControl<string | null | undefined>(undefined),
			connection_code_expires_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			enable_hls: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			hds_playback_url: new FormControl<string | null | undefined>(undefined),
			hls_playback_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			primary_url: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			region_override: new FormControl<Stream_targetRegion_override | null | undefined>(undefined),
			rtmp_playback_url: new FormControl<string | null | undefined>(undefined),
			secure_ingest_query_param: new FormControl<string | null | undefined>(undefined),
			source_delivery_method: new FormControl<Stream_targetSource_delivery_method | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			stream_name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<Index_stream_targetType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			use_cors: new FormControl<boolean | null | undefined>(undefined),
			use_https: new FormControl<boolean | null | undefined>(undefined),
			use_secure_ingest: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Stream_targetPlayback_urls {

		/** The web address that the ultra low latency target can use to play the Apple HLS stream. */
		hls?: string | null;

		/** The **wowz** and **wowzs** web addresses that the ultra low latency target can use to play WOWZ streams. */
		wowz?: string | null;

		/** The **ws** and **wss** web addresses that the ultra low latency target can use to play the WebSocket stream. */
		ws?: string | null;
	}
	export interface Stream_targetPlayback_urlsFormProperties {

		/** The web address that the ultra low latency target can use to play the Apple HLS stream. */
		hls: FormControl<string | null | undefined>,

		/** The **wowz** and **wowzs** web addresses that the ultra low latency target can use to play WOWZ streams. */
		wowz: FormControl<string | null | undefined>,

		/** The **ws** and **wss** web addresses that the ultra low latency target can use to play the WebSocket stream. */
		ws: FormControl<string | null | undefined>,
	}
	export function CreateStream_targetPlayback_urlsFormGroup() {
		return new FormGroup<Stream_targetPlayback_urlsFormProperties>({
			hls: new FormControl<string | null | undefined>(undefined),
			wowz: new FormControl<string | null | undefined>(undefined),
			ws: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Stream_targetRegion_override { 'azure-westus' = 'azure-westus', 'azure-eastus2' = 'azure-eastus2', 'azure-northeurope' = 'azure-northeurope', null = 'null' }

	export enum Stream_targetSource_delivery_method { push = 'push', pull = 'pull' }

	export enum OutputStream_format { audiovideo = 'audiovideo', videoonly = 'videoonly', audioonly = 'audioonly' }

	export interface Output_add_stream_target_input {

		/** Required */
		output_stream_target: Output_add_stream_target_inputOutput_stream_target;
	}
	export interface Output_add_stream_target_inputFormProperties {
	}
	export function CreateOutput_add_stream_target_inputFormGroup() {
		return new FormGroup<Output_add_stream_target_inputFormProperties>({
		});

	}

	export interface Output_add_stream_target_inputOutput_stream_target {

		/**
		 * The unique alphanumeric string that identifies the stream target.
		 * Required
		 */
		stream_target_id: string;

		/** Use the target's backup URL. Not available for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The default is <strong>false</strong>. */
		use_stream_target_backup_url?: boolean | null;
	}
	export interface Output_add_stream_target_inputOutput_stream_targetFormProperties {

		/**
		 * The unique alphanumeric string that identifies the stream target.
		 * Required
		 */
		stream_target_id: FormControl<string | null | undefined>,

		/** Use the target's backup URL. Not available for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The default is <strong>false</strong>. */
		use_stream_target_backup_url: FormControl<boolean | null | undefined>,
	}
	export function CreateOutput_add_stream_target_inputOutput_stream_targetFormGroup() {
		return new FormGroup<Output_add_stream_target_inputOutput_stream_targetFormProperties>({
			stream_target_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			use_stream_target_backup_url: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Output_create_input {
	}
	export interface Output_create_inputFormProperties {
	}
	export function CreateOutput_create_inputFormGroup() {
		return new FormGroup<Output_create_inputFormProperties>({
		});

	}

	export interface Output_input {

		/** Required */
		output: Output_inputOutput;
	}
	export interface Output_inputFormProperties {
	}
	export function CreateOutput_inputFormGroup() {
		return new FormGroup<Output_inputFormProperties>({
		});

	}

	export interface Output_inputOutput {

		/**
		 * The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height?: number | null;

		/**
		 * The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width?: number | null;

		/**
		 * The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_audio?: number | null;

		/**
		 * The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_video?: number | null;

		/** Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction. */
		framerate_reduction?: OutputFramerate_reduction | null;

		/** The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>. */
		h264_profile?: OutputH264_profile | null;

		/** The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video. */
		keyframes?: OutputKeyframes | null;

		/** If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_audio?: boolean | null;

		/** If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_video?: boolean | null;

		/**
		 * The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>).
		 * Required
		 */
		stream_format: OutputStream_format;
	}
	export interface Output_inputOutputFormProperties {

		/**
		 * The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_height: FormControl<number | null | undefined>,

		/**
		 * The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		aspect_ratio_width: FormControl<number | null | undefined>,

		/**
		 * The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_audio: FormControl<number | null | undefined>,

		/**
		 * The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate_video: FormControl<number | null | undefined>,

		/** Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction. */
		framerate_reduction: FormControl<OutputFramerate_reduction | null | undefined>,

		/** The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>. */
		h264_profile: FormControl<OutputH264_profile | null | undefined>,

		/** The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video. */
		keyframes: FormControl<OutputKeyframes | null | undefined>,

		/** If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_audio: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>. */
		passthrough_video: FormControl<boolean | null | undefined>,

		/**
		 * The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>).
		 * Required
		 */
		stream_format: FormControl<OutputStream_format | null | undefined>,
	}
	export function CreateOutput_inputOutputFormGroup() {
		return new FormGroup<Output_inputOutputFormProperties>({
			aspect_ratio_height: new FormControl<number | null | undefined>(undefined),
			aspect_ratio_width: new FormControl<number | null | undefined>(undefined),
			bitrate_audio: new FormControl<number | null | undefined>(undefined),
			bitrate_video: new FormControl<number | null | undefined>(undefined),
			framerate_reduction: new FormControl<OutputFramerate_reduction | null | undefined>(undefined),
			h264_profile: new FormControl<OutputH264_profile | null | undefined>(undefined),
			keyframes: new FormControl<OutputKeyframes | null | undefined>(undefined),
			passthrough_audio: new FormControl<boolean | null | undefined>(undefined),
			passthrough_video: new FormControl<boolean | null | undefined>(undefined),
			stream_format: new FormControl<OutputStream_format | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Output_remove_stream_target_input {

		/** Required */
		output_stream_target: Output_remove_stream_target_inputOutput_stream_target;
	}
	export interface Output_remove_stream_target_inputFormProperties {
	}
	export function CreateOutput_remove_stream_target_inputFormGroup() {
		return new FormGroup<Output_remove_stream_target_inputFormProperties>({
		});

	}

	export interface Output_remove_stream_target_inputOutput_stream_target {

		/**
		 * The unique alphanumeric string that identifies the stream target.
		 * Required
		 */
		stream_target_id: string;
	}
	export interface Output_remove_stream_target_inputOutput_stream_targetFormProperties {

		/**
		 * The unique alphanumeric string that identifies the stream target.
		 * Required
		 */
		stream_target_id: FormControl<string | null | undefined>,
	}
	export function CreateOutput_remove_stream_target_inputOutput_stream_targetFormGroup() {
		return new FormGroup<Output_remove_stream_target_inputOutput_stream_targetFormProperties>({
			stream_target_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Output_stream_target_create_input {
	}
	export interface Output_stream_target_create_inputFormProperties {
	}
	export function CreateOutput_stream_target_create_inputFormGroup() {
		return new FormGroup<Output_stream_target_create_inputFormProperties>({
		});

	}

	export interface Output_stream_target_input {

		/** Required */
		output_stream_target: Output_stream_target_inputOutput_stream_target;
	}
	export interface Output_stream_target_inputFormProperties {
	}
	export function CreateOutput_stream_target_inputFormGroup() {
		return new FormGroup<Output_stream_target_inputFormProperties>({
		});

	}

	export interface Output_stream_target_inputOutput_stream_target {

		/**
		 * The unique alphanumeric string that identifies the stream target.
		 * Required
		 */
		stream_target_id: string;

		/** Specifies whether to use the stream target's primary or backup URL. */
		use_stream_target_backup_url?: boolean | null;
	}
	export interface Output_stream_target_inputOutput_stream_targetFormProperties {

		/**
		 * The unique alphanumeric string that identifies the stream target.
		 * Required
		 */
		stream_target_id: FormControl<string | null | undefined>,

		/** Specifies whether to use the stream target's primary or backup URL. */
		use_stream_target_backup_url: FormControl<boolean | null | undefined>,
	}
	export function CreateOutput_stream_target_inputOutput_stream_targetFormGroup() {
		return new FormGroup<Output_stream_target_inputOutput_stream_targetFormProperties>({
			stream_target_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			use_stream_target_backup_url: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Output_stream_target_update_input {
	}
	export interface Output_stream_target_update_inputFormProperties {
	}
	export function CreateOutput_stream_target_update_inputFormGroup() {
		return new FormGroup<Output_stream_target_update_inputFormProperties>({
		});

	}

	export interface Output_stream_targets {

		/** Required */
		output_stream_targets: Array<Output_stream_target>;
	}
	export interface Output_stream_targetsFormProperties {
	}
	export function CreateOutput_stream_targetsFormGroup() {
		return new FormGroup<Output_stream_targetsFormProperties>({
		});

	}

	export interface Output_update_input {
	}
	export interface Output_update_inputFormProperties {
	}
	export function CreateOutput_update_inputFormGroup() {
		return new FormGroup<Output_update_inputFormProperties>({
		});

	}

	export interface Outputs {

		/** Required */
		outputs: Array<Output>;
	}
	export interface OutputsFormProperties {
	}
	export function CreateOutputsFormGroup() {
		return new FormGroup<OutputsFormProperties>({
		});

	}

	export interface Player {

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		countdown?: boolean | null;

		/** The date and time that the event starts, used by the countdown clock. Enter <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		countdown_at?: Date | null;

		/** The date and time that the player was created. */
		created_at?: Date | null;

		/** The HTML code that can be used in an external webpage to host the Wowza Streaming Cloud player. */
		embed_code?: string | null;

		/** The address that can be used to configure playback of the stream using the Adobe HDS protocol. */
		hds_playback_url?: string | null;

		/** The address that can be used to configure playback of the stream using the Apple HLS protocol. */
		hls_playback_url?: string | null;

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page?: boolean | null;

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description?: string | null;

		/** The path to a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image_url?: string | null;

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons?: string | null;

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title?: string | null;

		/** The URL of the Wowza Streaming Cloud-hosted webpage that viewers can visit to watch the stream. */
		hosted_page_url?: string | null;

		/** The unique alphanumeric string that identifies the player. */
		id?: string | null;

		/** The path to a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		logo_image_url?: string | null;

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		logo_position?: string | null;

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <strong>width</strong>. */
		responsive?: boolean | null;

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id?: string | null;

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <em>target_delivery_protocol</em> be <strong>hls-https</strong> and <em>closed_caption_type</em> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		type?: string | null;

		/** The date and time that the player was updated. */
		updated_at?: Date | null;

		/** The path to a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		video_poster_image_url?: string | null;

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface PlayerFormProperties {

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		countdown: FormControl<boolean | null | undefined>,

		/** The date and time that the event starts, used by the countdown clock. Enter <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		countdown_at: FormControl<Date | null | undefined>,

		/** The date and time that the player was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The HTML code that can be used in an external webpage to host the Wowza Streaming Cloud player. */
		embed_code: FormControl<string | null | undefined>,

		/** The address that can be used to configure playback of the stream using the Adobe HDS protocol. */
		hds_playback_url: FormControl<string | null | undefined>,

		/** The address that can be used to configure playback of the stream using the Apple HLS protocol. */
		hls_playback_url: FormControl<string | null | undefined>,

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page: FormControl<boolean | null | undefined>,

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description: FormControl<string | null | undefined>,

		/** The path to a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image_url: FormControl<string | null | undefined>,

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons: FormControl<string | null | undefined>,

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title: FormControl<string | null | undefined>,

		/** The URL of the Wowza Streaming Cloud-hosted webpage that viewers can visit to watch the stream. */
		hosted_page_url: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the player. */
		id: FormControl<string | null | undefined>,

		/** The path to a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		logo_image_url: FormControl<string | null | undefined>,

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		logo_position: FormControl<string | null | undefined>,

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <strong>width</strong>. */
		responsive: FormControl<boolean | null | undefined>,

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id: FormControl<string | null | undefined>,

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <em>target_delivery_protocol</em> be <strong>hls-https</strong> and <em>closed_caption_type</em> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		type: FormControl<string | null | undefined>,

		/** The date and time that the player was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The path to a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		video_poster_image_url: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			countdown: new FormControl<boolean | null | undefined>(undefined),
			countdown_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			embed_code: new FormControl<string | null | undefined>(undefined),
			hds_playback_url: new FormControl<string | null | undefined>(undefined),
			hls_playback_url: new FormControl<string | null | undefined>(undefined),
			hosted_page: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_description: new FormControl<string | null | undefined>(undefined),
			hosted_page_logo_image_url: new FormControl<string | null | undefined>(undefined),
			hosted_page_sharing_icons: new FormControl<string | null | undefined>(undefined),
			hosted_page_title: new FormControl<string | null | undefined>(undefined),
			hosted_page_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logo_image_url: new FormControl<string | null | undefined>(undefined),
			logo_position: new FormControl<string | null | undefined>(undefined),
			responsive: new FormControl<boolean | null | undefined>(undefined),
			transcoder_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			video_poster_image_url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Player_update_input {

		/** Required */
		player: Player_update_inputPlayer;
	}
	export interface Player_update_inputFormProperties {
	}
	export function CreatePlayer_update_inputFormGroup() {
		return new FormGroup<Player_update_inputFormProperties>({
		});

	}

	export interface Player_update_inputPlayer {

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		countdown?: boolean | null;

		/** The date and time that the event starts, used by the countdown clock. Enter <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		countdown_at?: Date | null;

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page?: boolean | null;

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description?: string | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image?: string | null;

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons?: boolean | null;

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title?: string | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		logo_image?: string | null;

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		logo_position?: string | null;

		/** If <strong>true</strong>, removes the logo file from the output. The default is <strong>false</strong>. */
		remove_hosted_page_logo_image?: boolean | null;

		/** If <strong>true</strong>, removes the logo file from the output. The default is <strong>false</strong>. */
		remove_logo_image?: boolean | null;

		/** If <strong>true</strong>, removes the poster image from the output. The default is <strong>false</strong>. */
		remove_video_poster_image?: boolean | null;

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <strong>width</strong>. */
		responsive?: boolean | null;

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <em>target_delivery_protocol</em> be <strong>hls-https</strong> and <em>closed_caption_type</em> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		type?: string | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		video_poster_image?: string | null;

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface Player_update_inputPlayerFormProperties {

		/** A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>. */
		countdown: FormControl<boolean | null | undefined>,

		/** The date and time that the event starts, used by the countdown clock. Enter <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		countdown_at: FormControl<Date | null | undefined>,

		/** A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page. */
		hosted_page: FormControl<boolean | null | undefined>,

		/** A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_description: FormControl<string | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller. */
		hosted_page_logo_image: FormControl<string | null | undefined>,

		/** Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons. */
		hosted_page_sharing_icons: FormControl<boolean | null | undefined>,

		/** A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags. */
		hosted_page_title: FormControl<string | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller. */
		logo_image: FormControl<string | null | undefined>,

		/** The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>. */
		logo_position: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, removes the logo file from the output. The default is <strong>false</strong>. */
		remove_hosted_page_logo_image: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the logo file from the output. The default is <strong>false</strong>. */
		remove_logo_image: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the poster image from the output. The default is <strong>false</strong>. */
		remove_video_poster_image: FormControl<boolean | null | undefined>,

		/** A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <strong>width</strong>. */
		responsive: FormControl<boolean | null | undefined>,

		/** The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <em>target_delivery_protocol</em> be <strong>hls-https</strong> and <em>closed_caption_type</em> be <strong>none</strong>. The default is <strong>original_html5</strong>. */
		type: FormControl<string | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller. */
		video_poster_image: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePlayer_update_inputPlayerFormGroup() {
		return new FormGroup<Player_update_inputPlayerFormProperties>({
			countdown: new FormControl<boolean | null | undefined>(undefined),
			countdown_at: new FormControl<Date | null | undefined>(undefined),
			hosted_page: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_description: new FormControl<string | null | undefined>(undefined),
			hosted_page_logo_image: new FormControl<string | null | undefined>(undefined),
			hosted_page_sharing_icons: new FormControl<boolean | null | undefined>(undefined),
			hosted_page_title: new FormControl<string | null | undefined>(undefined),
			logo_image: new FormControl<string | null | undefined>(undefined),
			logo_position: new FormControl<string | null | undefined>(undefined),
			remove_hosted_page_logo_image: new FormControl<boolean | null | undefined>(undefined),
			remove_logo_image: new FormControl<boolean | null | undefined>(undefined),
			remove_video_poster_image: new FormControl<boolean | null | undefined>(undefined),
			responsive: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			video_poster_image: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Players {

		/** Required */
		players: Array<Player>;
	}
	export interface PlayersFormProperties {
	}
	export function CreatePlayersFormGroup() {
		return new FormGroup<PlayersFormProperties>({
		});

	}

	export interface Recording {

		/** The date and time that the recording was created. */
		created_at?: Date | null;

		/** The URL that can be used to download the recording. */
		download_url?: string | null;

		/**
		 * The length of the recording, in hours, minutes, and seconds.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration?: string | null;

		/** The file name of the recording. */
		file_name?: string | null;

		/**
		 * The file size of the recording.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		file_size?: string | null;

		/** The unique alphanumeric string that identifies the recording. */
		id?: string | null;

		/** The reason that a recording has the state <strong>failed</strong>. */
		reason?: string | null;

		/** The date and time that the recording started. */
		starts_at?: string | null;

		/** The state of the recording. */
		state?: RecordingState | null;

		/** The unique alphanumeric string that identifies the transcoder that was recorded. */
		transcoder_id?: string | null;

		/** The descriptive name of the transcoder that was recorded. */
		transcoder_name?: string | null;

		/** The unique identifier associated with the transcoding uptime for this recording. */
		transcoding_uptime_id?: Date | null;

		/** The date and time that the recording was updated. */
		updated_at?: Date | null;
	}
	export interface RecordingFormProperties {

		/** The date and time that the recording was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The URL that can be used to download the recording. */
		download_url: FormControl<string | null | undefined>,

		/**
		 * The length of the recording, in hours, minutes, and seconds.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration: FormControl<string | null | undefined>,

		/** The file name of the recording. */
		file_name: FormControl<string | null | undefined>,

		/**
		 * The file size of the recording.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		file_size: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the recording. */
		id: FormControl<string | null | undefined>,

		/** The reason that a recording has the state <strong>failed</strong>. */
		reason: FormControl<string | null | undefined>,

		/** The date and time that the recording started. */
		starts_at: FormControl<string | null | undefined>,

		/** The state of the recording. */
		state: FormControl<RecordingState | null | undefined>,

		/** The unique alphanumeric string that identifies the transcoder that was recorded. */
		transcoder_id: FormControl<string | null | undefined>,

		/** The descriptive name of the transcoder that was recorded. */
		transcoder_name: FormControl<string | null | undefined>,

		/** The unique identifier associated with the transcoding uptime for this recording. */
		transcoding_uptime_id: FormControl<Date | null | undefined>,

		/** The date and time that the recording was updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateRecordingFormGroup() {
		return new FormGroup<RecordingFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			download_url: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			file_size: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			starts_at: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RecordingState | null | undefined>(undefined),
			transcoder_id: new FormControl<string | null | undefined>(undefined),
			transcoder_name: new FormControl<string | null | undefined>(undefined),
			transcoding_uptime_id: new FormControl<Date | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RecordingState { uploading = 'uploading', converting = 'converting', removing = 'removing', completed = 'completed', failed = 'failed' }

	export interface Recordings {

		/** Required */
		recordings: Array<Recording>;
	}
	export interface RecordingsFormProperties {
	}
	export function CreateRecordingsFormGroup() {
		return new FormGroup<RecordingsFormProperties>({
		});

	}

	export interface Schedule {

		/** The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>. */
		action_type?: ScheduleAction_type | null;

		/** The date and time that the schedule was created. */
		created_at?: Date | null;

		/**
		 * The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		end_repeat?: Date | null;

		/** The unique alphanumeric string that identifies the schedule. */
		id?: string | null;

		/** A descriptive name for the schedule. Maximum 255 characters. */
		name?: string | null;

		/** The day or days of the week that a recurring schedule should run. */
		recurrence_data?: ScheduleRecurrence_data | null;

		/** A schedule can run one time only (<strong>once</strong>) or repeat (<strong>recur</strong>) until a specified <em>end_repeat</em> date. The default is <strong>once</strong>. */
		recurrence_type?: ScheduleRecurrence_type | null;

		/**
		 * The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		start_repeat?: Date | null;

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		start_transcoder?: Date | null;

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state?: ScheduleState | null;

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		stop_transcoder?: Date | null;

		/** The unique alphanumeric string that identifies the transcoder being scheduled. */
		transcoder_id?: string | null;

		/** The name of the transcoder being scheduled. */
		transcoder_name?: string | null;

		/** The date and time that the schedule was updated. */
		updated_at?: Date | null;
	}
	export interface ScheduleFormProperties {

		/** The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>. */
		action_type: FormControl<ScheduleAction_type | null | undefined>,

		/** The date and time that the schedule was created. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		end_repeat: FormControl<Date | null | undefined>,

		/** The unique alphanumeric string that identifies the schedule. */
		id: FormControl<string | null | undefined>,

		/** A descriptive name for the schedule. Maximum 255 characters. */
		name: FormControl<string | null | undefined>,

		/** The day or days of the week that a recurring schedule should run. */
		recurrence_data: FormControl<ScheduleRecurrence_data | null | undefined>,

		/** A schedule can run one time only (<strong>once</strong>) or repeat (<strong>recur</strong>) until a specified <em>end_repeat</em> date. The default is <strong>once</strong>. */
		recurrence_type: FormControl<ScheduleRecurrence_type | null | undefined>,

		/**
		 * The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		start_repeat: FormControl<Date | null | undefined>,

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		start_transcoder: FormControl<Date | null | undefined>,

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state: FormControl<ScheduleState | null | undefined>,

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		stop_transcoder: FormControl<Date | null | undefined>,

		/** The unique alphanumeric string that identifies the transcoder being scheduled. */
		transcoder_id: FormControl<string | null | undefined>,

		/** The name of the transcoder being scheduled. */
		transcoder_name: FormControl<string | null | undefined>,

		/** The date and time that the schedule was updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			action_type: new FormControl<ScheduleAction_type | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			end_repeat: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recurrence_data: new FormControl<ScheduleRecurrence_data | null | undefined>(undefined),
			recurrence_type: new FormControl<ScheduleRecurrence_type | null | undefined>(undefined),
			start_repeat: new FormControl<Date | null | undefined>(undefined),
			start_transcoder: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<ScheduleState | null | undefined>(undefined),
			stop_transcoder: new FormControl<Date | null | undefined>(undefined),
			transcoder_id: new FormControl<string | null | undefined>(undefined),
			transcoder_name: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ScheduleAction_type { start = 'start', stop = 'stop', start_stop = 'start_stop' }

	export enum ScheduleRecurrence_data { sunday = 'sunday', monday = 'monday', tuesday = 'tuesday', wednesday = 'wednesday', thursday = 'thursday', friday = 'friday', saturday = 'saturday' }

	export enum ScheduleRecurrence_type { once = 'once', recur = 'recur' }

	export enum ScheduleState { enabled = 'enabled', disabled = 'disabled', expired = 'expired' }

	export interface Schedule_create_input {

		/** Required */
		schedule: Schedule_create_inputSchedule;
	}
	export interface Schedule_create_inputFormProperties {
	}
	export function CreateSchedule_create_inputFormGroup() {
		return new FormGroup<Schedule_create_inputFormProperties>({
		});

	}

	export interface Schedule_create_inputSchedule {

		/**
		 * The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>.
		 * Required
		 */
		action_type: ScheduleAction_type;

		/**
		 * The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		end_repeat?: Date | null;

		/**
		 * A descriptive name for the schedule. Maximum 255 characters.
		 * Required
		 */
		name: string;

		/** The day or days of the week that a recurring schedule should run. */
		recurrence_data?: ScheduleRecurrence_data | null;

		/**
		 * A schedule can run one time only (<strong>once</strong>) or repeat (<strong>recur</strong>) until a specified <em>end_repeat</em> date. The default is <strong>once</strong>.
		 * Required
		 */
		recurrence_type: ScheduleRecurrence_type;

		/**
		 * The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		start_repeat?: Date | null;

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		start_transcoder?: Date | null;

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		stop_transcoder?: Date | null;

		/**
		 * The unique alphanumeric string that identifies the transcoder being scheduled.
		 * Required
		 */
		transcoder_id: string;
	}
	export interface Schedule_create_inputScheduleFormProperties {

		/**
		 * The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>.
		 * Required
		 */
		action_type: FormControl<ScheduleAction_type | null | undefined>,

		/**
		 * The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		end_repeat: FormControl<Date | null | undefined>,

		/**
		 * A descriptive name for the schedule. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The day or days of the week that a recurring schedule should run. */
		recurrence_data: FormControl<ScheduleRecurrence_data | null | undefined>,

		/**
		 * A schedule can run one time only (<strong>once</strong>) or repeat (<strong>recur</strong>) until a specified <em>end_repeat</em> date. The default is <strong>once</strong>.
		 * Required
		 */
		recurrence_type: FormControl<ScheduleRecurrence_type | null | undefined>,

		/**
		 * The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		start_repeat: FormControl<Date | null | undefined>,

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		start_transcoder: FormControl<Date | null | undefined>,

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		stop_transcoder: FormControl<Date | null | undefined>,

		/**
		 * The unique alphanumeric string that identifies the transcoder being scheduled.
		 * Required
		 */
		transcoder_id: FormControl<string | null | undefined>,
	}
	export function CreateSchedule_create_inputScheduleFormGroup() {
		return new FormGroup<Schedule_create_inputScheduleFormProperties>({
			action_type: new FormControl<ScheduleAction_type | null | undefined>(undefined, [Validators.required]),
			end_repeat: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recurrence_data: new FormControl<ScheduleRecurrence_data | null | undefined>(undefined),
			recurrence_type: new FormControl<ScheduleRecurrence_type | null | undefined>(undefined, [Validators.required]),
			start_repeat: new FormControl<Date | null | undefined>(undefined),
			start_transcoder: new FormControl<Date | null | undefined>(undefined),
			stop_transcoder: new FormControl<Date | null | undefined>(undefined),
			transcoder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Schedule_update_input {

		/** Required */
		schedule: Schedule_update_inputSchedule;
	}
	export interface Schedule_update_inputFormProperties {
	}
	export function CreateSchedule_update_inputFormGroup() {
		return new FormGroup<Schedule_update_inputFormProperties>({
		});

	}

	export interface Schedule_update_inputSchedule {

		/**
		 * The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>.
		 * Required
		 */
		action_type: ScheduleAction_type;

		/**
		 * The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		end_repeat?: Date | null;

		/**
		 * A descriptive name for the schedule. Maximum 255 characters.
		 * Required
		 */
		name: string;

		/** The day or days of the week that a recurring schedule should run. */
		recurrence_data?: ScheduleRecurrence_data | null;

		/**
		 * The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		start_repeat?: Date | null;

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		start_transcoder?: Date | null;

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		stop_transcoder?: Date | null;
	}
	export interface Schedule_update_inputScheduleFormProperties {

		/**
		 * The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>.
		 * Required
		 */
		action_type: FormControl<ScheduleAction_type | null | undefined>,

		/**
		 * The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		end_repeat: FormControl<Date | null | undefined>,

		/**
		 * A descriptive name for the schedule. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The day or days of the week that a recurring schedule should run. */
		recurrence_data: FormControl<ScheduleRecurrence_data | null | undefined>,

		/**
		 * The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
		 * Type: DateOnly
		 */
		start_repeat: FormControl<Date | null | undefined>,

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		start_transcoder: FormControl<Date | null | undefined>,

		/** The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. */
		stop_transcoder: FormControl<Date | null | undefined>,
	}
	export function CreateSchedule_update_inputScheduleFormGroup() {
		return new FormGroup<Schedule_update_inputScheduleFormProperties>({
			action_type: new FormControl<ScheduleAction_type | null | undefined>(undefined, [Validators.required]),
			end_repeat: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recurrence_data: new FormControl<ScheduleRecurrence_data | null | undefined>(undefined),
			start_repeat: new FormControl<Date | null | undefined>(undefined),
			start_transcoder: new FormControl<Date | null | undefined>(undefined),
			stop_transcoder: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Schedules {

		/** Required */
		schedules: Array<Schedule>;
	}
	export interface SchedulesFormProperties {
	}
	export function CreateSchedulesFormGroup() {
		return new FormGroup<SchedulesFormProperties>({
		});

	}

	export interface Shm_historic_metrics {
		audio_codec?: Audio_codec_metric;
		bits_in_rate?: Bits_in_rate_metric;
		bits_out_rate?: Bits_out_rate_metric;
		cpu_idle?: Cpu_idle_metric;

		/** The date and time that the stream health record was created. */
		created_at?: string | null;
		frame_rate?: Frame_rate_metric;
		height?: Height_metric;
		keyframe_interval?: Keyframe_interval_metric;
		video_codec?: Video_codec_metric;
		width?: Width_metric;
	}
	export interface Shm_historic_metricsFormProperties {

		/** The date and time that the stream health record was created. */
		created_at: FormControl<string | null | undefined>,
	}
	export function CreateShm_historic_metricsFormGroup() {
		return new FormGroup<Shm_historic_metricsFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Video_codec_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/** The value of the associated key. */
		value?: string | null;
	}
	export interface Video_codec_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/** The value of the associated key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVideo_codec_metricFormGroup() {
		return new FormGroup<Video_codec_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Width_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Width_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateWidth_metricFormGroup() {
		return new FormGroup<Width_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Shm_metrics {
		audio_codec?: Audio_codec_metric;
		bits_in_rate?: Bits_in_rate_metric;
		bits_out_rate?: Bits_out_rate_metric;
		bytes_in_rate?: Bytes_in_rate_metric;
		bytes_out_rate?: Bytes_out_rate_metric;
		configured_bytes_out_rate?: Configured_bytes_out_rate_metric;
		connected?: Connected_metric;
		cpu?: Cpu_metric;
		frame_rate?: Frame_rate_metric;
		frame_size?: Frame_size_metric;
		gpu_decoder_usage?: Gpu_decoder_usage_metric;
		gpu_driver_version?: Gpu_driver_version_metric;
		gpu_encoder_usage?: Gpu_encoder_usage_metric;
		gpu_memory_usage?: Gpu_memory_usage_metric;
		gpu_usage?: Gpu_usage_metric;
		height?: Height_metric;
		keyframe_interval?: Keyframe_interval_metric;
		stream_target_status_OUTPUTIDX_STREAMTARGETIDX?: Stream_target_status_OUTPUTIDX_STREAMTARGETIDX_metric;
		unique_views?: Unique_views_metric;
		video_codec?: Video_codec_metric;
		width?: Width_metric;
	}
	export interface Shm_metricsFormProperties {
	}
	export function CreateShm_metricsFormGroup() {
		return new FormGroup<Shm_metricsFormProperties>({
		});

	}

	export interface Stream_target_status_OUTPUTIDX_STREAMTARGETIDX_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/** The value of the associated key. */
		value?: string | null;
	}
	export interface Stream_target_status_OUTPUTIDX_STREAMTARGETIDX_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/** The value of the associated key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStream_target_status_OUTPUTIDX_STREAMTARGETIDX_metricFormGroup() {
		return new FormGroup<Stream_target_status_OUTPUTIDX_STREAMTARGETIDX_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Unique_views_metric {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status?: string | null;

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text?: string | null;

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units?: string | null;

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Unique_views_metricFormProperties {

		/** The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running). */
		status: FormControl<string | null | undefined>,

		/** A message related to the value and status of the current key. Usually blank unless there's a warning status. */
		text: FormControl<string | null | undefined>,

		/** The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>. */
		units: FormControl<string | null | undefined>,

		/**
		 * The value of the associated key.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateUnique_views_metricFormGroup() {
		return new FormGroup<Unique_views_metricFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stream_source {

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the backup IP address of the source encoder. */
		backup_ip_address?: string | null;

		/** The backup RTMP playback URL of the transcoded stream. */
		backup_url?: string | null;

		/** The date and time that the stream source was created. */
		created_at?: Date | null;

		/** The unique alphanumeric string that identifies the stream source. */
		id?: string | null;

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the primary IP address of the source encoder. */
		ip_address?: string | null;

		/** If <em>location_method</em> is <strong>region</strong>, specify a location as close as possible to the source encoder. */
		location?: Index_stream_targetLocation | null;

		/** The method used to determine the location of the stream source, either by <strong>region</strong> or based on the source encoder's <strong>ip_address</strong>. */
		location_method?: Stream_sourceLocation_method | null;

		/** A descriptive name for the stream source. Maximum 255 characters. */
		name?: string | null;

		/** The password that you can use to configure the source encoder to authenticate to the stream source. */
		password?: string | null;

		/** The full RTMP playback URL. */
		playback_url?: string | null;

		/** The primary RTMP playback URL of the transcoded stream. */
		primary_url?: string | null;

		/** The provider of the Wowza Streaming Cloud stream source. */
		provider?: string | null;

		/** The name of the stream that you can use to configure the source encoder to connect to the stream source. */
		stream_name?: string | null;

		/** The date and time that the stream source was updated. */
		updated_at?: Date | null;

		/** The username that you can use to configure the source encoder to authenticate to the stream source. */
		username?: string | null;
	}
	export interface Stream_sourceFormProperties {

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the backup IP address of the source encoder. */
		backup_ip_address: FormControl<string | null | undefined>,

		/** The backup RTMP playback URL of the transcoded stream. */
		backup_url: FormControl<string | null | undefined>,

		/** The date and time that the stream source was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The unique alphanumeric string that identifies the stream source. */
		id: FormControl<string | null | undefined>,

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the primary IP address of the source encoder. */
		ip_address: FormControl<string | null | undefined>,

		/** If <em>location_method</em> is <strong>region</strong>, specify a location as close as possible to the source encoder. */
		location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** The method used to determine the location of the stream source, either by <strong>region</strong> or based on the source encoder's <strong>ip_address</strong>. */
		location_method: FormControl<Stream_sourceLocation_method | null | undefined>,

		/** A descriptive name for the stream source. Maximum 255 characters. */
		name: FormControl<string | null | undefined>,

		/** The password that you can use to configure the source encoder to authenticate to the stream source. */
		password: FormControl<string | null | undefined>,

		/** The full RTMP playback URL. */
		playback_url: FormControl<string | null | undefined>,

		/** The primary RTMP playback URL of the transcoded stream. */
		primary_url: FormControl<string | null | undefined>,

		/** The provider of the Wowza Streaming Cloud stream source. */
		provider: FormControl<string | null | undefined>,

		/** The name of the stream that you can use to configure the source encoder to connect to the stream source. */
		stream_name: FormControl<string | null | undefined>,

		/** The date and time that the stream source was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The username that you can use to configure the source encoder to authenticate to the stream source. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateStream_sourceFormGroup() {
		return new FormGroup<Stream_sourceFormProperties>({
			backup_ip_address: new FormControl<string | null | undefined>(undefined),
			backup_url: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined),
			location_method: new FormControl<Stream_sourceLocation_method | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			playback_url: new FormControl<string | null | undefined>(undefined),
			primary_url: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			stream_name: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Stream_sourceLocation_method { region = 'region', ip_address = 'ip_address' }

	export interface Stream_source_create_input {

		/** Required */
		stream_source: Stream_source_create_inputStream_source;
	}
	export interface Stream_source_create_inputFormProperties {
	}
	export function CreateStream_source_create_inputFormGroup() {
		return new FormGroup<Stream_source_create_inputFormProperties>({
		});

	}

	export interface Stream_source_create_inputStream_source {

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the backup IP address of the source encoder. */
		backup_ip_address?: string | null;

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the primary IP address of the source encoder. */
		ip_address?: string | null;

		/** If <em>location_method</em> is <strong>region</strong>, specify a location as close as possible to the source encoder. */
		location?: Index_stream_targetLocation | null;

		/**
		 * The method used to determine the location of the stream source, either by <strong>region</strong> or based on the source encoder's <strong>ip_address</strong>.
		 * Required
		 */
		location_method: Stream_sourceLocation_method;

		/**
		 * A descriptive name for the stream source. Maximum 255 characters.
		 * Required
		 */
		name: string;
	}
	export interface Stream_source_create_inputStream_sourceFormProperties {

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the backup IP address of the source encoder. */
		backup_ip_address: FormControl<string | null | undefined>,

		/** If <em>location_method</em> is <strong>ip_address</strong>, specify the primary IP address of the source encoder. */
		ip_address: FormControl<string | null | undefined>,

		/** If <em>location_method</em> is <strong>region</strong>, specify a location as close as possible to the source encoder. */
		location: FormControl<Index_stream_targetLocation | null | undefined>,

		/**
		 * The method used to determine the location of the stream source, either by <strong>region</strong> or based on the source encoder's <strong>ip_address</strong>.
		 * Required
		 */
		location_method: FormControl<Stream_sourceLocation_method | null | undefined>,

		/**
		 * A descriptive name for the stream source. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStream_source_create_inputStream_sourceFormGroup() {
		return new FormGroup<Stream_source_create_inputStream_sourceFormProperties>({
			backup_ip_address: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined),
			location_method: new FormControl<Stream_sourceLocation_method | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Stream_source_update_input {

		/** Required */
		stream_source: Stream_source_update_inputStream_source;
	}
	export interface Stream_source_update_inputFormProperties {
	}
	export function CreateStream_source_update_inputFormGroup() {
		return new FormGroup<Stream_source_update_inputFormProperties>({
		});

	}

	export interface Stream_source_update_inputStream_source {

		/**
		 * A descriptive name for the stream source. Maximum 255 characters.
		 * Required
		 */
		name: string;
	}
	export interface Stream_source_update_inputStream_sourceFormProperties {

		/**
		 * A descriptive name for the stream source. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStream_source_update_inputStream_sourceFormGroup() {
		return new FormGroup<Stream_source_update_inputStream_sourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Stream_sources {

		/** Required */
		stream_sources: Array<Stream_source>;
	}
	export interface Stream_sourcesFormProperties {
	}
	export function CreateStream_sourcesFormGroup() {
		return new FormGroup<Stream_sourcesFormProperties>({
		});

	}

	export interface Stream_target_create_input {
	}
	export interface Stream_target_create_inputFormProperties {
	}
	export function CreateStream_target_create_inputFormGroup() {
		return new FormGroup<Stream_target_create_inputFormProperties>({
		});

	}

	export interface Stream_target_input {

		/** Required */
		stream_target: Stream_target_inputStream_target;
	}
	export interface Stream_target_inputFormProperties {
	}
	export function CreateStream_target_inputFormGroup() {
		return new FormGroup<Stream_target_inputFormProperties>({
		});

	}

	export interface Stream_target_inputStream_target {

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). */
		backup_url?: string | null;

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size?: Index_stream_targetChunk_size | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong>, creates an Apple HLS URL for playback on iOS devices (<em>hls_playback_url</em>). The default is <strong>false</strong>. */
		enable_hls?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server. */
		ingest_ip_whitelist?: Array<string>;

		/**
		 * Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
		 * Required
		 */
		location: Index_stream_targetLocation;

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: string;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password?: string | null;

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
		 * Required
		 */
		primary_url: string;

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server. */
		region_override?: Stream_target_inputStream_targetRegion_override | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url?: string | null;

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
		 * Required
		 */
		source_delivery_method: Stream_targetSource_delivery_method;

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
		 * Required
		 */
		source_url: string;

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
		 * Required
		 */
		stream_name: string;

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type?: Index_stream_targetType | null;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. */
		use_cors?: boolean | null;

		/** <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong> */
		use_https?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider. */
		use_secure_ingest?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username?: string | null;
	}
	export interface Stream_target_inputStream_targetFormProperties {

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). */
		backup_url: FormControl<string | null | undefined>,

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size: FormControl<Index_stream_targetChunk_size | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong>, creates an Apple HLS URL for playback on iOS devices (<em>hls_playback_url</em>). The default is <strong>false</strong>. */
		enable_hls: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
		 * Required
		 */
		location: FormControl<Index_stream_targetLocation | null | undefined>,

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
		 * Required
		 */
		primary_url: FormControl<string | null | undefined>,

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server. */
		region_override: FormControl<Stream_target_inputStream_targetRegion_override | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
		 * Required
		 */
		source_delivery_method: FormControl<Stream_targetSource_delivery_method | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
		 * Required
		 */
		source_url: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
		 * Required
		 */
		stream_name: FormControl<string | null | undefined>,

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type: FormControl<Index_stream_targetType | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. */
		use_cors: FormControl<boolean | null | undefined>,

		/** <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong> */
		use_https: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider. */
		use_secure_ingest: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateStream_target_inputStream_targetFormGroup() {
		return new FormGroup<Stream_target_inputStream_targetFormProperties>({
			backup_url: new FormControl<string | null | undefined>(undefined),
			chunk_size: new FormControl<Index_stream_targetChunk_size | null | undefined>(undefined),
			enable_hls: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			hds_playback_url: new FormControl<string | null | undefined>(undefined),
			hls_playback_url: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			primary_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined),
			region_override: new FormControl<Stream_target_inputStream_targetRegion_override | null | undefined>(undefined),
			rtmp_playback_url: new FormControl<string | null | undefined>(undefined),
			source_delivery_method: new FormControl<Stream_targetSource_delivery_method | null | undefined>(undefined, [Validators.required]),
			source_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stream_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Index_stream_targetType | null | undefined>(undefined),
			use_cors: new FormControl<boolean | null | undefined>(undefined),
			use_https: new FormControl<boolean | null | undefined>(undefined),
			use_secure_ingest: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Stream_target_inputStream_targetRegion_override { 'azure-westus' = 'azure-westus', 'azure-eastus2' = 'azure-eastus2', 'azure-northeurope' = 'azure-northeurope' }

	export interface Stream_target_metrics {

		/**
		 * The average number of bytes transfered to the origin server by the source.
		 * Type: float
		 */
		average_bytes_in?: number | null;

		/**
		 * The total number of current connections.
		 * Type: float
		 */
		average_total_connections?: number | null;

		/** The date and time, in UTC, that the metrics were recorded. */
		created_at?: Date | null;

		/**
		 * The total number of dropped connections since the last interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dropped_connections?: number | null;

		/**
		 * The maximum number of connections during the interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximum_total_connections?: number | null;

		/**
		 * The minimum number of connections during the interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimum_total_connections?: number | null;

		/**
		 * The total number of new connections since the last interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		new_connections?: number | null;
	}
	export interface Stream_target_metricsFormProperties {

		/**
		 * The average number of bytes transfered to the origin server by the source.
		 * Type: float
		 */
		average_bytes_in: FormControl<number | null | undefined>,

		/**
		 * The total number of current connections.
		 * Type: float
		 */
		average_total_connections: FormControl<number | null | undefined>,

		/** The date and time, in UTC, that the metrics were recorded. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The total number of dropped connections since the last interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dropped_connections: FormControl<number | null | undefined>,

		/**
		 * The maximum number of connections during the interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximum_total_connections: FormControl<number | null | undefined>,

		/**
		 * The minimum number of connections during the interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimum_total_connections: FormControl<number | null | undefined>,

		/**
		 * The total number of new connections since the last interval.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		new_connections: FormControl<number | null | undefined>,
	}
	export function CreateStream_target_metricsFormGroup() {
		return new FormGroup<Stream_target_metricsFormProperties>({
			average_bytes_in: new FormControl<number | null | undefined>(undefined),
			average_total_connections: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			dropped_connections: new FormControl<number | null | undefined>(undefined),
			maximum_total_connections: new FormControl<number | null | undefined>(undefined),
			minimum_total_connections: new FormControl<number | null | undefined>(undefined),
			new_connections: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stream_target_properties {

		/** Required */
		properties: Array<Stream_target_property>;
	}
	export interface Stream_target_propertiesFormProperties {
	}
	export function CreateStream_target_propertiesFormGroup() {
		return new FormGroup<Stream_target_propertiesFormProperties>({
		});

	}

	export interface Stream_target_property {

		/** <strong>chunkSize</strong> defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. <strong>playSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). <strong>relativePlaylists</strong> allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. <strong>sendSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS). */
		key?: Stream_target_propertyKey | null;

		/** The section of the stream target configuration table that contains the property. For <strong>chunkSize</strong> and <strong>sendSSL</strong>, use <strong>hls</strong>. For <strong>playSSL</strong> and <strong>relativePlaylists</strong>, use <strong>playlist</strong>. */
		section?: Stream_target_propertySection | null;

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id?: string | null;

		/** For <strong>chunkSize</strong> use <strong>2</strong>, <strong>4</strong>, <strong>6</strong>, <strong>8</strong>, or <strong>10</strong>. For <strong>playSSL</strong>, <strong>relativePlaylists</strong>, and <strong>sendSSL</strong> use <strong>true</strong> or <strong>false</strong>. */
		value?: Stream_target_propertyValue | null;
	}
	export interface Stream_target_propertyFormProperties {

		/** <strong>chunkSize</strong> defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. <strong>playSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). <strong>relativePlaylists</strong> allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. <strong>sendSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS). */
		key: FormControl<Stream_target_propertyKey | null | undefined>,

		/** The section of the stream target configuration table that contains the property. For <strong>chunkSize</strong> and <strong>sendSSL</strong>, use <strong>hls</strong>. For <strong>playSSL</strong> and <strong>relativePlaylists</strong>, use <strong>playlist</strong>. */
		section: FormControl<Stream_target_propertySection | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id: FormControl<string | null | undefined>,

		/** For <strong>chunkSize</strong> use <strong>2</strong>, <strong>4</strong>, <strong>6</strong>, <strong>8</strong>, or <strong>10</strong>. For <strong>playSSL</strong>, <strong>relativePlaylists</strong>, and <strong>sendSSL</strong> use <strong>true</strong> or <strong>false</strong>. */
		value: FormControl<Stream_target_propertyValue | null | undefined>,
	}
	export function CreateStream_target_propertyFormGroup() {
		return new FormGroup<Stream_target_propertyFormProperties>({
			key: new FormControl<Stream_target_propertyKey | null | undefined>(undefined),
			section: new FormControl<Stream_target_propertySection | null | undefined>(undefined),
			stream_target_id: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<Stream_target_propertyValue | null | undefined>(undefined),
		});

	}

	export enum Stream_target_propertyKey { chunkSize = 'chunkSize', playSSL = 'playSSL', relativePlaylists = 'relativePlaylists', sendSSL = 'sendSSL' }

	export enum Stream_target_propertySection { hls = 'hls', playlist = 'playlist' }

	export enum Stream_target_propertyValue { _2 = '2', _4 = '4', _6 = '6', _8 = '8', _10 = '10', true = 'true', false = 'false' }

	export interface Stream_target_property_create_input {

		/** Required */
		property: Stream_target_property_create_inputProperty;
	}
	export interface Stream_target_property_create_inputFormProperties {
	}
	export function CreateStream_target_property_create_inputFormGroup() {
		return new FormGroup<Stream_target_property_create_inputFormProperties>({
		});

	}

	export interface Stream_target_property_create_inputProperty {

		/**
		 * <strong>chunkSize</strong> defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. <strong>playSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). <strong>relativePlaylists</strong> allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. <strong>sendSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS).
		 * Required
		 */
		key: Stream_target_propertyKey;

		/**
		 * The section of the stream target configuration table that contains the property. For <strong>chunkSize</strong> and <strong>sendSSL</strong>, use <strong>hls</strong>. For <strong>playSSL</strong> and <strong>relativePlaylists</strong>, use <strong>playlist</strong>.
		 * Required
		 */
		section: Stream_target_propertySection;

		/**
		 * For <strong>chunkSize</strong> use <strong>2</strong>, <strong>4</strong>, <strong>6</strong>, <strong>8</strong>, or <strong>10</strong>. For <strong>playSSL</strong>, <strong>relativePlaylists</strong>, and <strong>sendSSL</strong> use <strong>true</strong> or <strong>false</strong>.
		 * Required
		 */
		value: Stream_target_propertyValue;
	}
	export interface Stream_target_property_create_inputPropertyFormProperties {

		/**
		 * <strong>chunkSize</strong> defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. <strong>playSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). <strong>relativePlaylists</strong> allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. <strong>sendSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS).
		 * Required
		 */
		key: FormControl<Stream_target_propertyKey | null | undefined>,

		/**
		 * The section of the stream target configuration table that contains the property. For <strong>chunkSize</strong> and <strong>sendSSL</strong>, use <strong>hls</strong>. For <strong>playSSL</strong> and <strong>relativePlaylists</strong>, use <strong>playlist</strong>.
		 * Required
		 */
		section: FormControl<Stream_target_propertySection | null | undefined>,

		/**
		 * For <strong>chunkSize</strong> use <strong>2</strong>, <strong>4</strong>, <strong>6</strong>, <strong>8</strong>, or <strong>10</strong>. For <strong>playSSL</strong>, <strong>relativePlaylists</strong>, and <strong>sendSSL</strong> use <strong>true</strong> or <strong>false</strong>.
		 * Required
		 */
		value: FormControl<Stream_target_propertyValue | null | undefined>,
	}
	export function CreateStream_target_property_create_inputPropertyFormGroup() {
		return new FormGroup<Stream_target_property_create_inputPropertyFormProperties>({
			key: new FormControl<Stream_target_propertyKey | null | undefined>(undefined, [Validators.required]),
			section: new FormControl<Stream_target_propertySection | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<Stream_target_propertyValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Stream_target_update_input {

		/** Required */
		stream_target: Stream_target_update_inputStream_target;
	}
	export interface Stream_target_update_inputFormProperties {
	}
	export function CreateStream_target_update_inputFormGroup() {
		return new FormGroup<Stream_target_update_inputFormProperties>({
		});

	}

	export interface Stream_target_update_inputStream_target {

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). */
		backup_url?: string | null;

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size?: Index_stream_targetChunk_size | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server. */
		ingest_ip_whitelist?: Array<string>;

		/** A descriptive name for the stream target. Maximum 255 characters. */
		name?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/). */
		primary_url?: string | null;

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target. */
		source_url?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings. */
		stream_name?: string | null;

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username?: string | null;
	}
	export interface Stream_target_update_inputStream_targetFormProperties {

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). */
		backup_url: FormControl<string | null | undefined>,

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size: FormControl<Index_stream_targetChunk_size | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams. */
		hds_playback_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams. */
		hls_playback_url: FormControl<string | null | undefined>,

		/** A descriptive name for the stream target. Maximum 255 characters. */
		name: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication. */
		password: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/). */
		primary_url: FormControl<string | null | undefined>,

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams. */
		rtmp_playback_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target. */
		source_url: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings. */
		stream_name: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateStream_target_update_inputStream_targetFormGroup() {
		return new FormGroup<Stream_target_update_inputStream_targetFormProperties>({
			backup_url: new FormControl<string | null | undefined>(undefined),
			chunk_size: new FormControl<Index_stream_targetChunk_size | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			hds_playback_url: new FormControl<string | null | undefined>(undefined),
			hls_playback_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			primary_url: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			rtmp_playback_url: new FormControl<string | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			stream_name: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Stream_targets {

		/** Required */
		stream_targets: Array<Index_stream_target>;
	}
	export interface Stream_targetsFormProperties {
	}
	export function CreateStream_targetsFormGroup() {
		return new FormGroup<Stream_targetsFormProperties>({
		});

	}

	export interface Token_auth {

		/** The date and time that the token authorization was created. */
		created_at?: Date | null;

		/** Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable. */
		enabled?: boolean | null;

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id?: string | null;

		/** The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32. */
		trusted_shared_secret?: string | null;

		/** The date and time that the token authorization was updated. */
		updated_at?: Date | null;
	}
	export interface Token_authFormProperties {

		/** The date and time that the token authorization was created. */
		created_at: FormControl<Date | null | undefined>,

		/** Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable. */
		enabled: FormControl<boolean | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		stream_target_id: FormControl<string | null | undefined>,

		/** The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32. */
		trusted_shared_secret: FormControl<string | null | undefined>,

		/** The date and time that the token authorization was updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateToken_authFormGroup() {
		return new FormGroup<Token_authFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			stream_target_id: new FormControl<string | null | undefined>(undefined),
			trusted_shared_secret: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Token_auth_create_input {

		/** Required */
		token_auth: Token_auth_create_inputToken_auth;
	}
	export interface Token_auth_create_inputFormProperties {
	}
	export function CreateToken_auth_create_inputFormGroup() {
		return new FormGroup<Token_auth_create_inputFormProperties>({
		});

	}

	export interface Token_auth_create_inputToken_auth {

		/**
		 * Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable.
		 * Required
		 */
		enabled: boolean;

		/**
		 * The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32.
		 * Required
		 */
		trusted_shared_secret: string;
	}
	export interface Token_auth_create_inputToken_authFormProperties {

		/**
		 * Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32.
		 * Required
		 */
		trusted_shared_secret: FormControl<string | null | undefined>,
	}
	export function CreateToken_auth_create_inputToken_authFormGroup() {
		return new FormGroup<Token_auth_create_inputToken_authFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			trusted_shared_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Token_auth_update_input {

		/** Required */
		token_auth: Token_auth_update_inputToken_auth;
	}
	export interface Token_auth_update_inputFormProperties {
	}
	export function CreateToken_auth_update_inputFormGroup() {
		return new FormGroup<Token_auth_update_inputFormProperties>({
		});

	}

	export interface Token_auth_update_inputToken_auth {

		/** Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable. */
		enabled?: boolean | null;

		/** The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32. */
		trusted_shared_secret?: string | null;
	}
	export interface Token_auth_update_inputToken_authFormProperties {

		/** Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable. */
		enabled: FormControl<boolean | null | undefined>,

		/** The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32. */
		trusted_shared_secret: FormControl<string | null | undefined>,
	}
	export function CreateToken_auth_update_inputToken_authFormGroup() {
		return new FormGroup<Token_auth_update_inputToken_authFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			trusted_shared_secret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transcoder {

		/** The application name from the pull stream source URL. */
		application_name?: string | null;

		/** The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>. */
		billing_mode?: Live_streamBilling_mode | null;

		/** The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source. */
		broadcast_location?: Index_stream_targetLocation | null;

		/** The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds). */
		buffer_size?: TranscoderBuffer_size;

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type?: Live_streamClosed_caption_type | null;

		/** The date and time that the transcoder was created. */
		created_at?: Date | null;

		/** The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method?: Live_streamDelivery_method | null;

		/** An array of playback protocols enabled for this transcoder. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are returned. */
		delivery_protocols?: Array<string>;

		/** An optional description of the transcoder. */
		description?: string | null;

		/** An array of direct playback URLs the transcoder's delivery protocols. Each protocol has a URL for the source and a URL for each output rendition. */
		TranscoderDirect_playback_urls?: Array<TranscoderDirect_playback_urls>;

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication?: boolean | null;

		/** The domain name from the pull stream source URL. */
		domain_name?: string | null;

		/** The unique alphanumeric string that identifies the transcoder. */
		id?: string | null;

		/**
		 * The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idle_timeout?: number | null;

		/** If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>. */
		low_latency?: boolean | null;

		/** A descriptive name for the transcoder. Maximum 200 characters. */
		name?: string | null;

		/** Output renditions associated with the transcoder. */
		outputs?: Array<Output>;

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password?: string | null;

		/** The number of users who are allowed to connect directly to the transcoder. */
		play_maximum_connections?: TranscoderPlay_maximum_connections;

		/** The transport protocol for the source video. The default is <strong>rtmp</strong>. */
		protocol?: TranscoderProtocol | null;

		/** If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>. */
		recording?: boolean | null;

		/**
		 * The port used for RTMP pull connections to Wowza Streaming Cloud.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		source_port?: number | null;

		/** For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/). */
		source_url?: string | null;

		/** For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension. */
		stream_extension?: string | null;

		/** The stream name from the pull stream source URL. */
		stream_name?: string | null;

		/** A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>. */
		stream_smoother?: boolean | null;

		/** For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder. */
		stream_source_id?: string | null;

		/** If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts. */
		suppress_stream_target_start?: boolean | null;

		/** The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>. */
		transcoder_type?: Live_streamTranscoder_type | null;

		/** The date and time that the transcoder was updated. */
		updated_at?: Date | null;

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username?: string | null;

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. */
		video_fallback?: boolean | null;

		/** Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image. */
		watermark?: boolean | null;

		/**
		 * The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_height?: number | null;

		/** The path to a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller. */
		watermark_image_url?: string | null;

		/** The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque. */
		watermark_opacity?: TranscoderWatermark_opacity;

		/** The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>. */
		watermark_position?: Live_streamPlayer_logo_position | null;

		/**
		 * The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_width?: number | null;
	}
	export interface TranscoderFormProperties {

		/** The application name from the pull stream source URL. */
		application_name: FormControl<string | null | undefined>,

		/** The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>. */
		billing_mode: FormControl<Live_streamBilling_mode | null | undefined>,

		/** The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source. */
		broadcast_location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds). */
		buffer_size: FormControl<TranscoderBuffer_size | null | undefined>,

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type: FormControl<Live_streamClosed_caption_type | null | undefined>,

		/** The date and time that the transcoder was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder. */
		delivery_method: FormControl<Live_streamDelivery_method | null | undefined>,

		/** An optional description of the transcoder. */
		description: FormControl<string | null | undefined>,

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication: FormControl<boolean | null | undefined>,

		/** The domain name from the pull stream source URL. */
		domain_name: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the transcoder. */
		id: FormControl<string | null | undefined>,

		/**
		 * The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idle_timeout: FormControl<number | null | undefined>,

		/** If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>. */
		low_latency: FormControl<boolean | null | undefined>,

		/** A descriptive name for the transcoder. Maximum 200 characters. */
		name: FormControl<string | null | undefined>,

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password: FormControl<string | null | undefined>,

		/** The number of users who are allowed to connect directly to the transcoder. */
		play_maximum_connections: FormControl<TranscoderPlay_maximum_connections | null | undefined>,

		/** The transport protocol for the source video. The default is <strong>rtmp</strong>. */
		protocol: FormControl<TranscoderProtocol | null | undefined>,

		/** If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>. */
		recording: FormControl<boolean | null | undefined>,

		/**
		 * The port used for RTMP pull connections to Wowza Streaming Cloud.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		source_port: FormControl<number | null | undefined>,

		/** For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/). */
		source_url: FormControl<string | null | undefined>,

		/** For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension. */
		stream_extension: FormControl<string | null | undefined>,

		/** The stream name from the pull stream source URL. */
		stream_name: FormControl<string | null | undefined>,

		/** A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>. */
		stream_smoother: FormControl<boolean | null | undefined>,

		/** For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder. */
		stream_source_id: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts. */
		suppress_stream_target_start: FormControl<boolean | null | undefined>,

		/** The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>. */
		transcoder_type: FormControl<Live_streamTranscoder_type | null | undefined>,

		/** The date and time that the transcoder was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. */
		video_fallback: FormControl<boolean | null | undefined>,

		/** Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image. */
		watermark: FormControl<boolean | null | undefined>,

		/**
		 * The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_height: FormControl<number | null | undefined>,

		/** The path to a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller. */
		watermark_image_url: FormControl<string | null | undefined>,

		/** The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque. */
		watermark_opacity: FormControl<TranscoderWatermark_opacity | null | undefined>,

		/** The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>. */
		watermark_position: FormControl<Live_streamPlayer_logo_position | null | undefined>,

		/**
		 * The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_width: FormControl<number | null | undefined>,
	}
	export function CreateTranscoderFormGroup() {
		return new FormGroup<TranscoderFormProperties>({
			application_name: new FormControl<string | null | undefined>(undefined),
			billing_mode: new FormControl<Live_streamBilling_mode | null | undefined>(undefined),
			broadcast_location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined),
			buffer_size: new FormControl<TranscoderBuffer_size | null | undefined>(undefined),
			closed_caption_type: new FormControl<Live_streamClosed_caption_type | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			delivery_method: new FormControl<Live_streamDelivery_method | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disable_authentication: new FormControl<boolean | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			idle_timeout: new FormControl<number | null | undefined>(undefined),
			low_latency: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			play_maximum_connections: new FormControl<TranscoderPlay_maximum_connections | null | undefined>(undefined),
			protocol: new FormControl<TranscoderProtocol | null | undefined>(undefined),
			recording: new FormControl<boolean | null | undefined>(undefined),
			source_port: new FormControl<number | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			stream_extension: new FormControl<string | null | undefined>(undefined),
			stream_name: new FormControl<string | null | undefined>(undefined),
			stream_smoother: new FormControl<boolean | null | undefined>(undefined),
			stream_source_id: new FormControl<string | null | undefined>(undefined),
			suppress_stream_target_start: new FormControl<boolean | null | undefined>(undefined),
			transcoder_type: new FormControl<Live_streamTranscoder_type | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			video_fallback: new FormControl<boolean | null | undefined>(undefined),
			watermark: new FormControl<boolean | null | undefined>(undefined),
			watermark_height: new FormControl<number | null | undefined>(undefined),
			watermark_image_url: new FormControl<string | null | undefined>(undefined),
			watermark_opacity: new FormControl<TranscoderWatermark_opacity | null | undefined>(undefined),
			watermark_position: new FormControl<Live_streamPlayer_logo_position | null | undefined>(undefined),
			watermark_width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TranscoderBuffer_size { _0 = 0, _1000 = 1, _2000 = 2, _3000 = 3, _4000 = 4, _5000 = 5, _6000 = 6, _7000 = 7, _8000 = 8 }

	export interface TranscoderDirect_playback_urls {

		/** The name of the playback URL: <strong>source</strong>, <strong>passthrough</strong>, or the output rendition's resolution. */
		name?: string | null;

		/** Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition. */
		output_id?: string | null;

		/** The playback URL for the source or output rendition. */
		url?: string | null;
	}
	export interface TranscoderDirect_playback_urlsFormProperties {

		/** The name of the playback URL: <strong>source</strong>, <strong>passthrough</strong>, or the output rendition's resolution. */
		name: FormControl<string | null | undefined>,

		/** Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition. */
		output_id: FormControl<string | null | undefined>,

		/** The playback URL for the source or output rendition. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTranscoderDirect_playback_urlsFormGroup() {
		return new FormGroup<TranscoderDirect_playback_urlsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			output_id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TranscoderPlay_maximum_connections { _10 = 0, _11 = 1, _12 = 2, _13 = 3, _14 = 4, _15 = 5, _16 = 6, _17 = 7, _18 = 8, _19 = 9, _20 = 10, _21 = 11, _22 = 12, _23 = 13, _24 = 14, _25 = 15, _26 = 16, _27 = 17, _28 = 18, _29 = 19, _30 = 20, _31 = 21, _32 = 22, _33 = 23, _34 = 24, _35 = 25, _36 = 26, _37 = 27, _38 = 28, _39 = 29, _40 = 30, _41 = 31, _42 = 32, _43 = 33, _44 = 34, _45 = 35, _46 = 36, _47 = 37, _48 = 38, _49 = 39, _50 = 40, _51 = 41, _52 = 42, _53 = 43, _54 = 44, _55 = 45, _56 = 46, _57 = 47, _58 = 48, _59 = 49, _60 = 50, _61 = 51, _62 = 52, _63 = 53, _64 = 54, _65 = 55, _66 = 56, _67 = 57, _68 = 58, _69 = 59, _70 = 60, _71 = 61, _72 = 62, _73 = 63, _74 = 64, _75 = 65, _76 = 66, _77 = 67, _78 = 68, _79 = 69, _80 = 70, _81 = 71, _82 = 72, _83 = 73, _84 = 74, _85 = 75, _86 = 76, _87 = 77, _88 = 78, _89 = 79, _90 = 80, _91 = 81, _92 = 82, _93 = 83, _94 = 84, _95 = 85, _96 = 86, _97 = 87, _98 = 88, _99 = 89, _100 = 90 }

	export enum TranscoderProtocol { rtmp = 'rtmp', rtsp = 'rtsp' }

	export enum TranscoderWatermark_opacity { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22, _23 = 23, _24 = 24, _25 = 25, _26 = 26, _27 = 27, _28 = 28, _29 = 29, _30 = 30, _31 = 31, _32 = 32, _33 = 33, _34 = 34, _35 = 35, _36 = 36, _37 = 37, _38 = 38, _39 = 39, _40 = 40, _41 = 41, _42 = 42, _43 = 43, _44 = 44, _45 = 45, _46 = 46, _47 = 47, _48 = 48, _49 = 49, _50 = 50, _51 = 51, _52 = 52, _53 = 53, _54 = 54, _55 = 55, _56 = 56, _57 = 57, _58 = 58, _59 = 59, _60 = 60, _61 = 61, _62 = 62, _63 = 63, _64 = 64, _65 = 65, _66 = 66, _67 = 67, _68 = 68, _69 = 69, _70 = 70, _71 = 71, _72 = 72, _73 = 73, _74 = 74, _75 = 75, _76 = 76, _77 = 77, _78 = 78, _79 = 79, _80 = 80, _81 = 81, _82 = 82, _83 = 83, _84 = 84, _85 = 85, _86 = 86, _87 = 87, _88 = 88, _89 = 89, _90 = 90, _91 = 91, _92 = 92, _93 = 93, _94 = 94, _95 = 95, _96 = 96, _97 = 97, _98 = 98, _99 = 99, _100 = 100 }

	export interface Transcoder_create_input {

		/** Required */
		transcoder: Transcoder_create_inputTranscoder;
	}
	export interface Transcoder_create_inputFormProperties {
	}
	export function CreateTranscoder_create_inputFormGroup() {
		return new FormGroup<Transcoder_create_inputFormProperties>({
		});

	}

	export interface Transcoder_create_inputTranscoder {

		/**
		 * The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
		 * Required
		 */
		billing_mode: Live_streamBilling_mode;

		/**
		 * The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source.
		 * Required
		 */
		broadcast_location: Index_stream_targetLocation;

		/** The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds). */
		buffer_size?: Transcoder_create_inputTranscoderBuffer_size;

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type?: Live_streamClosed_caption_type | null;

		/**
		 * The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
		 * Required
		 */
		delivery_method: Live_streamDelivery_method;

		/** An array of playback protocols enabled for this transcoder. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are returned. */
		delivery_protocols?: Array<string>;

		/** An optional description of the transcoder. */
		description?: string | null;

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication?: boolean | null;

		/**
		 * The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idle_timeout?: number | null;

		/** If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>. */
		low_latency?: boolean | null;

		/**
		 * A descriptive name for the transcoder. Maximum 200 characters.
		 * Required
		 */
		name: string;

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password?: string | null;

		/** The number of users who are allowed to connect directly to the transcoder. */
		play_maximum_connections?: Transcoder_create_inputTranscoderPlay_maximum_connections;

		/**
		 * The transport protocol for the source video. The default is <strong>rtmp</strong>.
		 * Required
		 */
		protocol: TranscoderProtocol;

		/** If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>. */
		recording?: boolean | null;

		/** For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/). */
		source_url?: string | null;

		/** For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension. */
		stream_extension?: string | null;

		/** A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>. */
		stream_smoother?: boolean | null;

		/** For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder. */
		stream_source_id?: string | null;

		/** If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts. */
		suppress_stream_target_start?: boolean | null;

		/**
		 * The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
		 * Required
		 */
		transcoder_type: Live_streamTranscoder_type;

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username?: string | null;

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. */
		video_fallback?: boolean | null;

		/** Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image. */
		watermark?: boolean | null;

		/**
		 * The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_height?: number | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller. */
		watermark_image?: string | null;

		/** The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque. */
		watermark_opacity?: Transcoder_create_inputTranscoderWatermark_opacity;

		/** The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>. */
		watermark_position?: Live_streamPlayer_logo_position | null;

		/**
		 * The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_width?: number | null;
	}
	export interface Transcoder_create_inputTranscoderFormProperties {

		/**
		 * The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
		 * Required
		 */
		billing_mode: FormControl<Live_streamBilling_mode | null | undefined>,

		/**
		 * The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source.
		 * Required
		 */
		broadcast_location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds). */
		buffer_size: FormControl<Transcoder_create_inputTranscoderBuffer_size | null | undefined>,

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type: FormControl<Live_streamClosed_caption_type | null | undefined>,

		/**
		 * The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
		 * Required
		 */
		delivery_method: FormControl<Live_streamDelivery_method | null | undefined>,

		/** An optional description of the transcoder. */
		description: FormControl<string | null | undefined>,

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication: FormControl<boolean | null | undefined>,

		/**
		 * The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idle_timeout: FormControl<number | null | undefined>,

		/** If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>. */
		low_latency: FormControl<boolean | null | undefined>,

		/**
		 * A descriptive name for the transcoder. Maximum 200 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password: FormControl<string | null | undefined>,

		/** The number of users who are allowed to connect directly to the transcoder. */
		play_maximum_connections: FormControl<Transcoder_create_inputTranscoderPlay_maximum_connections | null | undefined>,

		/**
		 * The transport protocol for the source video. The default is <strong>rtmp</strong>.
		 * Required
		 */
		protocol: FormControl<TranscoderProtocol | null | undefined>,

		/** If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>. */
		recording: FormControl<boolean | null | undefined>,

		/** For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/). */
		source_url: FormControl<string | null | undefined>,

		/** For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension. */
		stream_extension: FormControl<string | null | undefined>,

		/** A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>. */
		stream_smoother: FormControl<boolean | null | undefined>,

		/** For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder. */
		stream_source_id: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts. */
		suppress_stream_target_start: FormControl<boolean | null | undefined>,

		/**
		 * The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
		 * Required
		 */
		transcoder_type: FormControl<Live_streamTranscoder_type | null | undefined>,

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. */
		video_fallback: FormControl<boolean | null | undefined>,

		/** Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image. */
		watermark: FormControl<boolean | null | undefined>,

		/**
		 * The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_height: FormControl<number | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller. */
		watermark_image: FormControl<string | null | undefined>,

		/** The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque. */
		watermark_opacity: FormControl<Transcoder_create_inputTranscoderWatermark_opacity | null | undefined>,

		/** The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>. */
		watermark_position: FormControl<Live_streamPlayer_logo_position | null | undefined>,

		/**
		 * The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_width: FormControl<number | null | undefined>,
	}
	export function CreateTranscoder_create_inputTranscoderFormGroup() {
		return new FormGroup<Transcoder_create_inputTranscoderFormProperties>({
			billing_mode: new FormControl<Live_streamBilling_mode | null | undefined>(undefined, [Validators.required]),
			broadcast_location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined, [Validators.required]),
			buffer_size: new FormControl<Transcoder_create_inputTranscoderBuffer_size | null | undefined>(undefined),
			closed_caption_type: new FormControl<Live_streamClosed_caption_type | null | undefined>(undefined),
			delivery_method: new FormControl<Live_streamDelivery_method | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			disable_authentication: new FormControl<boolean | null | undefined>(undefined),
			idle_timeout: new FormControl<number | null | undefined>(undefined),
			low_latency: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			play_maximum_connections: new FormControl<Transcoder_create_inputTranscoderPlay_maximum_connections | null | undefined>(undefined),
			protocol: new FormControl<TranscoderProtocol | null | undefined>(undefined, [Validators.required]),
			recording: new FormControl<boolean | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			stream_extension: new FormControl<string | null | undefined>(undefined),
			stream_smoother: new FormControl<boolean | null | undefined>(undefined),
			stream_source_id: new FormControl<string | null | undefined>(undefined),
			suppress_stream_target_start: new FormControl<boolean | null | undefined>(undefined),
			transcoder_type: new FormControl<Live_streamTranscoder_type | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
			video_fallback: new FormControl<boolean | null | undefined>(undefined),
			watermark: new FormControl<boolean | null | undefined>(undefined),
			watermark_height: new FormControl<number | null | undefined>(undefined),
			watermark_image: new FormControl<string | null | undefined>(undefined),
			watermark_opacity: new FormControl<Transcoder_create_inputTranscoderWatermark_opacity | null | undefined>(undefined),
			watermark_position: new FormControl<Live_streamPlayer_logo_position | null | undefined>(undefined),
			watermark_width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Transcoder_create_inputTranscoderBuffer_size { _0 = 0, _1000 = 1, _2000 = 2, _3000 = 3, _4000 = 4, _5000 = 5, _6000 = 6, _7000 = 7, _8000 = 8 }

	export enum Transcoder_create_inputTranscoderPlay_maximum_connections { _10 = 0, _11 = 1, _12 = 2, _13 = 3, _14 = 4, _15 = 5, _16 = 6, _17 = 7, _18 = 8, _19 = 9, _20 = 10, _21 = 11, _22 = 12, _23 = 13, _24 = 14, _25 = 15, _26 = 16, _27 = 17, _28 = 18, _29 = 19, _30 = 20, _31 = 21, _32 = 22, _33 = 23, _34 = 24, _35 = 25, _36 = 26, _37 = 27, _38 = 28, _39 = 29, _40 = 30, _41 = 31, _42 = 32, _43 = 33, _44 = 34, _45 = 35, _46 = 36, _47 = 37, _48 = 38, _49 = 39, _50 = 40, _51 = 41, _52 = 42, _53 = 43, _54 = 44, _55 = 45, _56 = 46, _57 = 47, _58 = 48, _59 = 49, _60 = 50, _61 = 51, _62 = 52, _63 = 53, _64 = 54, _65 = 55, _66 = 56, _67 = 57, _68 = 58, _69 = 59, _70 = 60, _71 = 61, _72 = 62, _73 = 63, _74 = 64, _75 = 65, _76 = 66, _77 = 67, _78 = 68, _79 = 69, _80 = 70, _81 = 71, _82 = 72, _83 = 73, _84 = 74, _85 = 75, _86 = 76, _87 = 77, _88 = 78, _89 = 79, _90 = 80, _91 = 81, _92 = 82, _93 = 83, _94 = 84, _95 = 85, _96 = 86, _97 = 87, _98 = 88, _99 = 89, _100 = 90 }

	export enum Transcoder_create_inputTranscoderWatermark_opacity { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22, _23 = 23, _24 = 24, _25 = 25, _26 = 26, _27 = 27, _28 = 28, _29 = 29, _30 = 30, _31 = 31, _32 = 32, _33 = 33, _34 = 34, _35 = 35, _36 = 36, _37 = 37, _38 = 38, _39 = 39, _40 = 40, _41 = 41, _42 = 42, _43 = 43, _44 = 44, _45 = 45, _46 = 46, _47 = 47, _48 = 48, _49 = 49, _50 = 50, _51 = 51, _52 = 52, _53 = 53, _54 = 54, _55 = 55, _56 = 56, _57 = 57, _58 = 58, _59 = 59, _60 = 60, _61 = 61, _62 = 62, _63 = 63, _64 = 64, _65 = 65, _66 = 66, _67 = 67, _68 = 68, _69 = 69, _70 = 70, _71 = 71, _72 = 72, _73 = 73, _74 = 74, _75 = 75, _76 = 76, _77 = 77, _78 = 78, _79 = 79, _80 = 80, _81 = 81, _82 = 82, _83 = 83, _84 = 84, _85 = 85, _86 = 86, _87 = 87, _88 = 88, _89 = 89, _90 = 90, _91 = 91, _92 = 92, _93 = 93, _94 = 94, _95 = 95, _96 = 96, _97 = 97, _98 = 98, _99 = 99, _100 = 100 }

	export interface Transcoder_properties {

		/** Required */
		properties: Array<Transcoder_property>;
	}
	export interface Transcoder_propertiesFormProperties {
	}
	export function CreateTranscoder_propertiesFormGroup() {
		return new FormGroup<Transcoder_propertiesFormProperties>({
		});

	}

	export interface Transcoder_property {

		/** The key of the property. For <strong>rtsp</strong>, valid values are <strong>debugRtspSession</strong>, <strong>maxRtcpWaitTime</strong>, <strong>avSyncMethod</strong>, <strong>rtspValidationFrequency</strong>, <strong>rtpTransportMode</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, and <strong>rtpIgnoreProfileLevelId</strong>. For <strong>cupertino</strong>, valid values are <strong>cupertinoEnableProgramDateTime</strong>, <strong>cupertinoEnableId3ProgramDateTime</strong>, and <strong>cupertinoProgramDateTimeOffset</strong>. */
		key?: string | null;

		/** The section of the transcoder configuration table that contains the property. Valid values are <strong>rtsp</strong> and <strong>cupertino</strong>. */
		section?: string | null;

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id?: string | null;

		/** The value of the property. For <strong>debugRtspSession</strong>, <strong>avSyncMethod</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, <strong>rtpIgnoreProfileLevelId</strong>, <strong>cupertinoEnableProgramDateTime</strong>, and <strong>cupertinoEnableId3ProgramDateTime</strong>, valid values are <strong>true</strong> or <strong>false</strong>. <strong>maxRtcpWaitTime</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>2000</strong>. Valid values for <strong>rtpTransportMode</strong> are <strong>udp</strong> or <strong>interleave</strong> (the default). <strong>rtspValidationFrequency</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>15000</strong>. <strong>cupertinoProgramDateTimeOffset</strong> must be an integer, positive or negative. The default is <strong>0</strong> (ms). */
		value?: string | null;
	}
	export interface Transcoder_propertyFormProperties {

		/** The key of the property. For <strong>rtsp</strong>, valid values are <strong>debugRtspSession</strong>, <strong>maxRtcpWaitTime</strong>, <strong>avSyncMethod</strong>, <strong>rtspValidationFrequency</strong>, <strong>rtpTransportMode</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, and <strong>rtpIgnoreProfileLevelId</strong>. For <strong>cupertino</strong>, valid values are <strong>cupertinoEnableProgramDateTime</strong>, <strong>cupertinoEnableId3ProgramDateTime</strong>, and <strong>cupertinoProgramDateTimeOffset</strong>. */
		key: FormControl<string | null | undefined>,

		/** The section of the transcoder configuration table that contains the property. Valid values are <strong>rtsp</strong> and <strong>cupertino</strong>. */
		section: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id: FormControl<string | null | undefined>,

		/** The value of the property. For <strong>debugRtspSession</strong>, <strong>avSyncMethod</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, <strong>rtpIgnoreProfileLevelId</strong>, <strong>cupertinoEnableProgramDateTime</strong>, and <strong>cupertinoEnableId3ProgramDateTime</strong>, valid values are <strong>true</strong> or <strong>false</strong>. <strong>maxRtcpWaitTime</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>2000</strong>. Valid values for <strong>rtpTransportMode</strong> are <strong>udp</strong> or <strong>interleave</strong> (the default). <strong>rtspValidationFrequency</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>15000</strong>. <strong>cupertinoProgramDateTimeOffset</strong> must be an integer, positive or negative. The default is <strong>0</strong> (ms). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTranscoder_propertyFormGroup() {
		return new FormGroup<Transcoder_propertyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			section: new FormControl<string | null | undefined>(undefined),
			transcoder_id: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Transcoder_property_create_input {

		/** Required */
		property: Transcoder_property_create_inputProperty;
	}
	export interface Transcoder_property_create_inputFormProperties {
	}
	export function CreateTranscoder_property_create_inputFormGroup() {
		return new FormGroup<Transcoder_property_create_inputFormProperties>({
		});

	}

	export interface Transcoder_property_create_inputProperty {

		/**
		 * The key of the property. For <strong>rtsp</strong>, valid values are <strong>debugRtspSession</strong>, <strong>maxRtcpWaitTime</strong>, <strong>avSyncMethod</strong>, <strong>rtspValidationFrequency</strong>, <strong>rtpTransportMode</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, and <strong>rtpIgnoreProfileLevelId</strong>. For <strong>cupertino</strong>, valid values are <strong>cupertinoEnableProgramDateTime</strong>, <strong>cupertinoEnableId3ProgramDateTime</strong>, and <strong>cupertinoProgramDateTimeOffset</strong>.
		 * Required
		 */
		key: string;

		/**
		 * The section of the transcoder configuration table that contains the property. Valid values are <strong>rtsp</strong> and <strong>cupertino</strong>.
		 * Required
		 */
		section: string;

		/**
		 * The value of the property. For <strong>debugRtspSession</strong>, <strong>avSyncMethod</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, <strong>rtpIgnoreProfileLevelId</strong>, <strong>cupertinoEnableProgramDateTime</strong>, and <strong>cupertinoEnableId3ProgramDateTime</strong>, valid values are <strong>true</strong> or <strong>false</strong>. <strong>maxRtcpWaitTime</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>2000</strong>. Valid values for <strong>rtpTransportMode</strong> are <strong>udp</strong> or <strong>interleave</strong> (the default). <strong>rtspValidationFrequency</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>15000</strong>. <strong>cupertinoProgramDateTimeOffset</strong> must be an integer, positive or negative. The default is <strong>0</strong> (ms).
		 * Required
		 */
		value: string;
	}
	export interface Transcoder_property_create_inputPropertyFormProperties {

		/**
		 * The key of the property. For <strong>rtsp</strong>, valid values are <strong>debugRtspSession</strong>, <strong>maxRtcpWaitTime</strong>, <strong>avSyncMethod</strong>, <strong>rtspValidationFrequency</strong>, <strong>rtpTransportMode</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, and <strong>rtpIgnoreProfileLevelId</strong>. For <strong>cupertino</strong>, valid values are <strong>cupertinoEnableProgramDateTime</strong>, <strong>cupertinoEnableId3ProgramDateTime</strong>, and <strong>cupertinoProgramDateTimeOffset</strong>.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * The section of the transcoder configuration table that contains the property. Valid values are <strong>rtsp</strong> and <strong>cupertino</strong>.
		 * Required
		 */
		section: FormControl<string | null | undefined>,

		/**
		 * The value of the property. For <strong>debugRtspSession</strong>, <strong>avSyncMethod</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, <strong>rtpIgnoreProfileLevelId</strong>, <strong>cupertinoEnableProgramDateTime</strong>, and <strong>cupertinoEnableId3ProgramDateTime</strong>, valid values are <strong>true</strong> or <strong>false</strong>. <strong>maxRtcpWaitTime</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>2000</strong>. Valid values for <strong>rtpTransportMode</strong> are <strong>udp</strong> or <strong>interleave</strong> (the default). <strong>rtspValidationFrequency</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>15000</strong>. <strong>cupertinoProgramDateTimeOffset</strong> must be an integer, positive or negative. The default is <strong>0</strong> (ms).
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTranscoder_property_create_inputPropertyFormGroup() {
		return new FormGroup<Transcoder_property_create_inputPropertyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			section: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transcoder_update_input {

		/** Required */
		transcoder: Transcoder_update_inputTranscoder;
	}
	export interface Transcoder_update_inputFormProperties {
	}
	export function CreateTranscoder_update_inputFormGroup() {
		return new FormGroup<Transcoder_update_inputFormProperties>({
		});

	}

	export interface Transcoder_update_inputTranscoder {

		/** The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source. */
		broadcast_location?: Index_stream_targetLocation | null;

		/** The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds). */
		buffer_size?: Transcoder_update_inputTranscoderBuffer_size;

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type?: Live_streamClosed_caption_type | null;

		/**
		 * The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
		 * Required
		 */
		delivery_method: Live_streamDelivery_method;

		/** An array of playback protocols enabled for this transcoder. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are returned. */
		delivery_protocols?: Array<string>;

		/** An optional description of the transcoder. */
		description?: string | null;

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication?: boolean | null;

		/**
		 * The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idle_timeout?: number | null;

		/** If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>. */
		low_latency?: boolean | null;

		/**
		 * A descriptive name for the transcoder. Maximum 200 characters.
		 * Required
		 */
		name: string;

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password?: string | null;

		/** The number of users who are allowed to connect directly to the transcoder. */
		play_maximum_connections?: Transcoder_update_inputTranscoderPlay_maximum_connections;

		/**
		 * The transport protocol for the source video. The default is <strong>rtmp</strong>.
		 * Required
		 */
		protocol: TranscoderProtocol;

		/** If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>. */
		recording?: boolean | null;

		/** If <strong>true</strong>, removes the watermark from the output. The default is <strong>false</strong>. */
		remove_watermark_image?: boolean | null;

		/** For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/). */
		source_url?: string | null;

		/** For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension. */
		stream_extension?: string | null;

		/** A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>. */
		stream_smoother?: boolean | null;

		/** For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder. */
		stream_source_id?: string | null;

		/** If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts. */
		suppress_stream_target_start?: boolean | null;

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username?: string | null;

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. */
		video_fallback?: boolean | null;

		/** Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image. */
		watermark?: boolean | null;

		/**
		 * The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_height?: number | null;

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller. */
		watermark_image?: string | null;

		/** The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque. */
		watermark_opacity?: Transcoder_update_inputTranscoderWatermark_opacity;

		/** The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>. */
		watermark_position?: Live_streamPlayer_logo_position | null;

		/**
		 * The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_width?: number | null;
	}
	export interface Transcoder_update_inputTranscoderFormProperties {

		/** The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source. */
		broadcast_location: FormControl<Index_stream_targetLocation | null | undefined>,

		/** The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds). */
		buffer_size: FormControl<Transcoder_update_inputTranscoderBuffer_size | null | undefined>,

		/** The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided. */
		closed_caption_type: FormControl<Live_streamClosed_caption_type | null | undefined>,

		/**
		 * The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
		 * Required
		 */
		delivery_method: FormControl<Live_streamDelivery_method | null | undefined>,

		/** An optional description of the transcoder. */
		description: FormControl<string | null | undefined>,

		/** Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source. */
		disable_authentication: FormControl<boolean | null | undefined>,

		/**
		 * The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idle_timeout: FormControl<number | null | undefined>,

		/** If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>. */
		low_latency: FormControl<boolean | null | undefined>,

		/**
		 * A descriptive name for the transcoder. Maximum 200 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		password: FormControl<string | null | undefined>,

		/** The number of users who are allowed to connect directly to the transcoder. */
		play_maximum_connections: FormControl<Transcoder_update_inputTranscoderPlay_maximum_connections | null | undefined>,

		/**
		 * The transport protocol for the source video. The default is <strong>rtmp</strong>.
		 * Required
		 */
		protocol: FormControl<TranscoderProtocol | null | undefined>,

		/** If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>. */
		recording: FormControl<boolean | null | undefined>,

		/** If <strong>true</strong>, removes the watermark from the output. The default is <strong>false</strong>. */
		remove_watermark_image: FormControl<boolean | null | undefined>,

		/** For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/). */
		source_url: FormControl<string | null | undefined>,

		/** For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension. */
		stream_extension: FormControl<string | null | undefined>,

		/** A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>. */
		stream_smoother: FormControl<boolean | null | undefined>,

		/** For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder. */
		stream_source_id: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts. */
		suppress_stream_target_start: FormControl<boolean | null | undefined>,

		/** A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used. */
		username: FormControl<string | null | undefined>,

		/** If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. */
		video_fallback: FormControl<boolean | null | undefined>,

		/** Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image. */
		watermark: FormControl<boolean | null | undefined>,

		/**
		 * The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_height: FormControl<number | null | undefined>,

		/** A Base64-encoded string representation of a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller. */
		watermark_image: FormControl<string | null | undefined>,

		/** The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque. */
		watermark_opacity: FormControl<Transcoder_update_inputTranscoderWatermark_opacity | null | undefined>,

		/** The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>. */
		watermark_position: FormControl<Live_streamPlayer_logo_position | null | undefined>,

		/**
		 * The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		watermark_width: FormControl<number | null | undefined>,
	}
	export function CreateTranscoder_update_inputTranscoderFormGroup() {
		return new FormGroup<Transcoder_update_inputTranscoderFormProperties>({
			broadcast_location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined),
			buffer_size: new FormControl<Transcoder_update_inputTranscoderBuffer_size | null | undefined>(undefined),
			closed_caption_type: new FormControl<Live_streamClosed_caption_type | null | undefined>(undefined),
			delivery_method: new FormControl<Live_streamDelivery_method | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			disable_authentication: new FormControl<boolean | null | undefined>(undefined),
			idle_timeout: new FormControl<number | null | undefined>(undefined),
			low_latency: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			play_maximum_connections: new FormControl<Transcoder_update_inputTranscoderPlay_maximum_connections | null | undefined>(undefined),
			protocol: new FormControl<TranscoderProtocol | null | undefined>(undefined, [Validators.required]),
			recording: new FormControl<boolean | null | undefined>(undefined),
			remove_watermark_image: new FormControl<boolean | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			stream_extension: new FormControl<string | null | undefined>(undefined),
			stream_smoother: new FormControl<boolean | null | undefined>(undefined),
			stream_source_id: new FormControl<string | null | undefined>(undefined),
			suppress_stream_target_start: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			video_fallback: new FormControl<boolean | null | undefined>(undefined),
			watermark: new FormControl<boolean | null | undefined>(undefined),
			watermark_height: new FormControl<number | null | undefined>(undefined),
			watermark_image: new FormControl<string | null | undefined>(undefined),
			watermark_opacity: new FormControl<Transcoder_update_inputTranscoderWatermark_opacity | null | undefined>(undefined),
			watermark_position: new FormControl<Live_streamPlayer_logo_position | null | undefined>(undefined),
			watermark_width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Transcoder_update_inputTranscoderBuffer_size { _0 = 0, _1000 = 1, _2000 = 2, _3000 = 3, _4000 = 4, _5000 = 5, _6000 = 6, _7000 = 7, _8000 = 8 }

	export enum Transcoder_update_inputTranscoderPlay_maximum_connections { _10 = 0, _11 = 1, _12 = 2, _13 = 3, _14 = 4, _15 = 5, _16 = 6, _17 = 7, _18 = 8, _19 = 9, _20 = 10, _21 = 11, _22 = 12, _23 = 13, _24 = 14, _25 = 15, _26 = 16, _27 = 17, _28 = 18, _29 = 19, _30 = 20, _31 = 21, _32 = 22, _33 = 23, _34 = 24, _35 = 25, _36 = 26, _37 = 27, _38 = 28, _39 = 29, _40 = 30, _41 = 31, _42 = 32, _43 = 33, _44 = 34, _45 = 35, _46 = 36, _47 = 37, _48 = 38, _49 = 39, _50 = 40, _51 = 41, _52 = 42, _53 = 43, _54 = 44, _55 = 45, _56 = 46, _57 = 47, _58 = 48, _59 = 49, _60 = 50, _61 = 51, _62 = 52, _63 = 53, _64 = 54, _65 = 55, _66 = 56, _67 = 57, _68 = 58, _69 = 59, _70 = 60, _71 = 61, _72 = 62, _73 = 63, _74 = 64, _75 = 65, _76 = 66, _77 = 67, _78 = 68, _79 = 69, _80 = 70, _81 = 71, _82 = 72, _83 = 73, _84 = 74, _85 = 75, _86 = 76, _87 = 77, _88 = 78, _89 = 79, _90 = 80, _91 = 81, _92 = 82, _93 = 83, _94 = 84, _95 = 85, _96 = 86, _97 = 87, _98 = 88, _99 = 89, _100 = 90 }

	export enum Transcoder_update_inputTranscoderWatermark_opacity { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22, _23 = 23, _24 = 24, _25 = 25, _26 = 26, _27 = 27, _28 = 28, _29 = 29, _30 = 30, _31 = 31, _32 = 32, _33 = 33, _34 = 34, _35 = 35, _36 = 36, _37 = 37, _38 = 38, _39 = 39, _40 = 40, _41 = 41, _42 = 42, _43 = 43, _44 = 44, _45 = 45, _46 = 46, _47 = 47, _48 = 48, _49 = 49, _50 = 50, _51 = 51, _52 = 52, _53 = 53, _54 = 54, _55 = 55, _56 = 56, _57 = 57, _58 = 58, _59 = 59, _60 = 60, _61 = 61, _62 = 62, _63 = 63, _64 = 64, _65 = 65, _66 = 66, _67 = 67, _68 = 68, _69 = 69, _70 = 70, _71 = 71, _72 = 72, _73 = 73, _74 = 74, _75 = 75, _76 = 76, _77 = 77, _78 = 78, _79 = 79, _80 = 80, _81 = 81, _82 = 82, _83 = 83, _84 = 84, _85 = 85, _86 = 86, _87 = 87, _88 = 88, _89 = 89, _90 = 90, _91 = 91, _92 = 92, _93 = 93, _94 = 94, _95 = 95, _96 = 96, _97 = 97, _98 = 98, _99 = 99, _100 = 100 }

	export interface Transcoders {

		/** Required */
		transcoders: Array<Transcoder>;
	}
	export interface TranscodersFormProperties {
	}
	export function CreateTranscodersFormGroup() {
		return new FormGroup<TranscodersFormProperties>({
		});

	}

	export interface Ull_stream_target_input {

		/** Required */
		stream_target: Ull_stream_target_inputStream_target;
	}
	export interface Ull_stream_target_inputFormProperties {
	}
	export function CreateUll_stream_target_inputFormGroup() {
		return new FormGroup<Ull_stream_target_inputFormProperties>({
		});

	}

	export interface Ull_stream_target_inputStream_target {

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong>, creates an Apple HLS URL for playback on iOS devices (<em>hls_playback_url</em>). The default is <strong>false</strong>. */
		enable_hls?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server. */
		ingest_ip_whitelist?: Array<string>;

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: string;

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider?: string | null;

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server. */
		region_override?: string | null;

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
		 * Required
		 */
		source_delivery_method: string;

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
		 * Required
		 */
		source_url: string;

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type?: string | null;
	}
	export interface Ull_stream_target_inputStream_targetFormProperties {

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong>, creates an Apple HLS URL for playback on iOS devices (<em>hls_playback_url</em>). The default is <strong>false</strong>. */
		enable_hls: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server. */
		region_override: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
		 * Required
		 */
		source_delivery_method: FormControl<string | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
		 * Required
		 */
		source_url: FormControl<string | null | undefined>,

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUll_stream_target_inputStream_targetFormGroup() {
		return new FormGroup<Ull_stream_target_inputStream_targetFormProperties>({
			enable_hls: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined),
			region_override: new FormControl<string | null | undefined>(undefined),
			source_delivery_method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Uptime {

		/** A Boolean value that indicates if the usage generated by this uptime has been sent for billing processing. */
		billed?: boolean | null;

		/** The date and time that the uptime record was created. */
		created_at?: Date | null;

		/** The date and time that the transcoder was stopped for this uptime. If this value is not present, it indicates that the transcoder is currently running. */
		ended_at?: Date | null;

		/** The unique alphanumeric string that identifies the uptime record. */
		id?: string | null;

		/** A Boolean value that indicates if the transcoder is still running for this uptime. */
		running?: boolean | null;

		/** The date and time that the transcoder started for this uptime. */
		started_at?: Date | null;

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id?: string | null;

		/** The date and time that the uptime record was updated. */
		updated_at?: string | null;
	}
	export interface UptimeFormProperties {

		/** A Boolean value that indicates if the usage generated by this uptime has been sent for billing processing. */
		billed: FormControl<boolean | null | undefined>,

		/** The date and time that the uptime record was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The date and time that the transcoder was stopped for this uptime. If this value is not present, it indicates that the transcoder is currently running. */
		ended_at: FormControl<Date | null | undefined>,

		/** The unique alphanumeric string that identifies the uptime record. */
		id: FormControl<string | null | undefined>,

		/** A Boolean value that indicates if the transcoder is still running for this uptime. */
		running: FormControl<boolean | null | undefined>,

		/** The date and time that the transcoder started for this uptime. */
		started_at: FormControl<Date | null | undefined>,

		/** The unique alphanumeric string that identifies the transcoder. */
		transcoder_id: FormControl<string | null | undefined>,

		/** The date and time that the uptime record was updated. */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateUptimeFormGroup() {
		return new FormGroup<UptimeFormProperties>({
			billed: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			ended_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			running: new FormControl<boolean | null | undefined>(undefined),
			started_at: new FormControl<Date | null | undefined>(undefined),
			transcoder_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Uptimes {

		/** Required */
		uptimes: Array<Uptime>;
	}
	export interface UptimesFormProperties {
	}
	export function CreateUptimesFormGroup() {
		return new FormGroup<UptimesFormProperties>({
		});

	}

	export interface Url {

		/**
		 * The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate?: number | null;

		/** The date and time that the player URL was created. */
		created_at?: Date | null;

		/**
		 * The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** The unique alphanumeric string that identifies the player URL. */
		id?: string | null;

		/** A descriptive name for the player URL. Maximum 255 characters. */
		label?: string | null;

		/** The unique alphanumeric string that identifies the player. */
		player_id?: string | null;

		/** The date and time that the player URL was updated. */
		updated_at?: Date | null;

		/** The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback. */
		url?: string | null;

		/**
		 * The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface UrlFormProperties {

		/**
		 * The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate: FormControl<number | null | undefined>,

		/** The date and time that the player URL was created. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** The unique alphanumeric string that identifies the player URL. */
		id: FormControl<string | null | undefined>,

		/** A descriptive name for the player URL. Maximum 255 characters. */
		label: FormControl<string | null | undefined>,

		/** The unique alphanumeric string that identifies the player. */
		player_id: FormControl<string | null | undefined>,

		/** The date and time that the player URL was updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback. */
		url: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateUrlFormGroup() {
		return new FormGroup<UrlFormProperties>({
			bitrate: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			player_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Url_create_input {
	}
	export interface Url_create_inputFormProperties {
	}
	export function CreateUrl_create_inputFormGroup() {
		return new FormGroup<Url_create_inputFormProperties>({
		});

	}

	export interface Url_input {

		/** Required */
		url: Url_inputUrl;
	}
	export interface Url_inputFormProperties {
	}
	export function CreateUrl_inputFormGroup() {
		return new FormGroup<Url_inputFormProperties>({
		});

	}

	export interface Url_inputUrl {

		/**
		 * The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate?: number | null;

		/**
		 * The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** A descriptive name for the player URL. Maximum 255 characters. */
		label?: string | null;

		/** The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback. */
		url?: string | null;

		/**
		 * The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface Url_inputUrlFormProperties {

		/**
		 * The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bitrate: FormControl<number | null | undefined>,

		/**
		 * The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** A descriptive name for the player URL. Maximum 255 characters. */
		label: FormControl<string | null | undefined>,

		/** The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback. */
		url: FormControl<string | null | undefined>,

		/**
		 * The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateUrl_inputUrlFormGroup() {
		return new FormGroup<Url_inputUrlFormProperties>({
			bitrate: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Url_update_input {
	}
	export interface Url_update_inputFormProperties {
	}
	export function CreateUrl_update_inputFormGroup() {
		return new FormGroup<Url_update_inputFormProperties>({
		});

	}

	export interface Urls {

		/** Required */
		urls: Array<Url>;
	}
	export interface UrlsFormProperties {
	}
	export function CreateUrlsFormGroup() {
		return new FormGroup<UrlsFormProperties>({
		});

	}

	export interface Usage_network_stream_source {

		/**
		 * The amount of usage, in bytes, that was billed for the stream source during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the stream source during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;

		/** A value of <strong>true</strong> indicates that the stream source has been removed from Wowza Streaming Cloud. */
		deleted?: boolean | null;

		/** The unique alphanumeric string that identifies the stream source. */
		id?: string | null;

		/** A descriptive name for the stream source. */
		name?: string | null;
	}
	export interface Usage_network_stream_sourceFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the stream source during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the stream source during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,

		/** A value of <strong>true</strong> indicates that the stream source has been removed from Wowza Streaming Cloud. */
		deleted: FormControl<boolean | null | undefined>,

		/** The unique alphanumeric string that identifies the stream source. */
		id: FormControl<string | null | undefined>,

		/** A descriptive name for the stream source. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsage_network_stream_sourceFormGroup() {
		return new FormGroup<Usage_network_stream_sourceFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_sources {
		stream_sources?: Array<Usage_network_stream_source>;
	}
	export interface Usage_network_stream_sourcesFormProperties {
	}
	export function CreateUsage_network_stream_sourcesFormGroup() {
		return new FormGroup<Usage_network_stream_sourcesFormProperties>({
		});

	}

	export interface Usage_network_stream_target {

		/** An array of stream targets and their usage by protocol and zone. */
		stream_targets?: Usage_network_stream_targetStream_targets;

		/** A hash of total usage, including overall total billed and used for all targets, and totals by zone for each protocol. */
		total?: Usage_network_stream_targetTotal;
	}
	export interface Usage_network_stream_targetFormProperties {
	}
	export function CreateUsage_network_stream_targetFormGroup() {
		return new FormGroup<Usage_network_stream_targetFormProperties>({
		});

	}

	export interface Usage_network_stream_targetStream_targets {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;

		/** A value of <strong>true</strong> indicates that the stream target has been removed from Wowza Streaming Cloud. */
		deleted?: boolean | null;

		/** The unique alphanumeric string that identifies the stream target. */
		id?: string | null;

		/** A descriptive name for the stream target. */
		name?: string | null;

		/** A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage. */
		protocols?: Usage_network_stream_targetStream_targetsProtocols;
	}
	export interface Usage_network_stream_targetStream_targetsFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,

		/** A value of <strong>true</strong> indicates that the stream target has been removed from Wowza Streaming Cloud. */
		deleted: FormControl<boolean | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		id: FormControl<string | null | undefined>,

		/** A descriptive name for the stream target. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsage_network_stream_targetStream_targetsFormGroup() {
		return new FormGroup<Usage_network_stream_targetStream_targetsFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_targetStream_targetsProtocols {

		/** A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated. */
		zones?: Usage_network_stream_targetStream_targetsProtocolsZones;
	}
	export interface Usage_network_stream_targetStream_targetsProtocolsFormProperties {
	}
	export function CreateUsage_network_stream_targetStream_targetsProtocolsFormGroup() {
		return new FormGroup<Usage_network_stream_targetStream_targetsProtocolsFormProperties>({
		});

	}

	export interface Usage_network_stream_targetStream_targetsProtocolsZones {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;
	}
	export interface Usage_network_stream_targetStream_targetsProtocolsZonesFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,
	}
	export function CreateUsage_network_stream_targetStream_targetsProtocolsZonesFormGroup() {
		return new FormGroup<Usage_network_stream_targetStream_targetsProtocolsZonesFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_targetTotal {

		/**
		 * The amount of usage, in bytes, that was billed for all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;

		/** A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage. */
		protocols?: Usage_network_stream_targetTotalProtocols;
	}
	export interface Usage_network_stream_targetTotalFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,
	}
	export function CreateUsage_network_stream_targetTotalFormGroup() {
		return new FormGroup<Usage_network_stream_targetTotalFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_targetTotalProtocols {

		/** A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated. */
		zones?: Usage_network_stream_targetTotalProtocolsZones;
	}
	export interface Usage_network_stream_targetTotalProtocolsFormProperties {
	}
	export function CreateUsage_network_stream_targetTotalProtocolsFormGroup() {
		return new FormGroup<Usage_network_stream_targetTotalProtocolsFormProperties>({
		});

	}

	export interface Usage_network_stream_targetTotalProtocolsZones {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;
	}
	export interface Usage_network_stream_targetTotalProtocolsZonesFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,
	}
	export function CreateUsage_network_stream_targetTotalProtocolsZonesFormGroup() {
		return new FormGroup<Usage_network_stream_targetTotalProtocolsZonesFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_targets {

		/** An array of stream targets and their usage by protocol and zone. */
		stream_targets?: Usage_network_stream_targetsStream_targets;

		/** A hash of total usage, including overall total billed and used for all targets, and totals by zone for each protocol. */
		total?: Usage_network_stream_targetsTotal;
	}
	export interface Usage_network_stream_targetsFormProperties {
	}
	export function CreateUsage_network_stream_targetsFormGroup() {
		return new FormGroup<Usage_network_stream_targetsFormProperties>({
		});

	}

	export interface Usage_network_stream_targetsStream_targets {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;

		/** A value of <strong>true</strong> indicates that the stream target has been removed from Wowza Streaming Cloud. */
		deleted?: boolean | null;

		/** The unique alphanumeric string that identifies the stream target. */
		id?: string | null;

		/** A descriptive name for the stream target. */
		name?: string | null;

		/** A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage. */
		protocols?: Usage_network_stream_targetsStream_targetsProtocols;
	}
	export interface Usage_network_stream_targetsStream_targetsFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,

		/** A value of <strong>true</strong> indicates that the stream target has been removed from Wowza Streaming Cloud. */
		deleted: FormControl<boolean | null | undefined>,

		/** The unique alphanumeric string that identifies the stream target. */
		id: FormControl<string | null | undefined>,

		/** A descriptive name for the stream target. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsage_network_stream_targetsStream_targetsFormGroup() {
		return new FormGroup<Usage_network_stream_targetsStream_targetsFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_targetsStream_targetsProtocols {

		/** A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated. */
		zones?: Usage_network_stream_targetsStream_targetsProtocolsZones;
	}
	export interface Usage_network_stream_targetsStream_targetsProtocolsFormProperties {
	}
	export function CreateUsage_network_stream_targetsStream_targetsProtocolsFormGroup() {
		return new FormGroup<Usage_network_stream_targetsStream_targetsProtocolsFormProperties>({
		});

	}

	export interface Usage_network_stream_targetsStream_targetsProtocolsZones {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;
	}
	export interface Usage_network_stream_targetsStream_targetsProtocolsZonesFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,
	}
	export function CreateUsage_network_stream_targetsStream_targetsProtocolsZonesFormGroup() {
		return new FormGroup<Usage_network_stream_targetsStream_targetsProtocolsZonesFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_targetsTotal {

		/**
		 * The amount of usage, in bytes, that was billed for all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;

		/** A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage. */
		protocols?: Usage_network_stream_targetsTotalProtocols;
	}
	export interface Usage_network_stream_targetsTotalFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through all stream targets during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,
	}
	export function CreateUsage_network_stream_targetsTotalFormGroup() {
		return new FormGroup<Usage_network_stream_targetsTotalFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_network_stream_targetsTotalProtocols {

		/** A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated. */
		zones?: Usage_network_stream_targetsTotalProtocolsZones;
	}
	export interface Usage_network_stream_targetsTotalProtocolsFormProperties {
	}
	export function CreateUsage_network_stream_targetsTotalProtocolsFormGroup() {
		return new FormGroup<Usage_network_stream_targetsTotalProtocolsFormProperties>({
		});

	}

	export interface Usage_network_stream_targetsTotalProtocolsZones {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;
	}
	export interface Usage_network_stream_targetsTotalProtocolsZonesFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the stream target during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,
	}
	export function CreateUsage_network_stream_targetsTotalProtocolsZonesFormGroup() {
		return new FormGroup<Usage_network_stream_targetsTotalProtocolsZonesFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_network_transcoder {

		/**
		 * The amount of usage, in bytes, that was billed for the live stream or transcoder during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed?: number | null;

		/**
		 * The amount of content, in bytes, that went through the live stream or transcoder during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used?: number | null;

		/** A value of <strong>true</strong> indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud. */
		deleted?: boolean | null;

		/**
		 * The unique alphanumeric string that identifies the live stream or transcoder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** A descriptive name for the live stream or transcoder. */
		name?: string | null;
	}
	export interface Usage_network_transcoderFormProperties {

		/**
		 * The amount of usage, in bytes, that was billed for the live stream or transcoder during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of content, in bytes, that went through the live stream or transcoder during the selected time frame.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_used: FormControl<number | null | undefined>,

		/** A value of <strong>true</strong> indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud. */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * The unique alphanumeric string that identifies the live stream or transcoder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** A descriptive name for the live stream or transcoder. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsage_network_transcoderFormGroup() {
		return new FormGroup<Usage_network_transcoderFormProperties>({
			bytes_billed: new FormControl<number | null | undefined>(undefined),
			bytes_used: new FormControl<number | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Usage_network_transcoders {
		transcoders?: Array<Usage_network_transcoder>;
	}
	export interface Usage_network_transcodersFormProperties {
	}
	export function CreateUsage_network_transcodersFormGroup() {
		return new FormGroup<Usage_network_transcodersFormProperties>({
		});

	}

	export interface Usage_storage_peak_recording {
		peak_recording?: Usage_storage_peak_recordingPeak_recording;
	}
	export interface Usage_storage_peak_recordingFormProperties {
	}
	export function CreateUsage_storage_peak_recordingFormGroup() {
		return new FormGroup<Usage_storage_peak_recordingFormProperties>({
		});

	}

	export interface Usage_storage_peak_recordingPeak_recording {

		/**
		 * The amount, in bytes, used to store recordings during the selected time frame. If the time frame is in the past, <em>bytes_total</em> is the amount of storage that was used and billed. If the time frame includes the current billing period, <em>bytes_total</em> is the greatest amount of content stored in Wowza Streaming Cloud at any point to date in the billing period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_total?: number | null;
	}
	export interface Usage_storage_peak_recordingPeak_recordingFormProperties {

		/**
		 * The amount, in bytes, used to store recordings during the selected time frame. If the time frame is in the past, <em>bytes_total</em> is the amount of storage that was used and billed. If the time frame includes the current billing period, <em>bytes_total</em> is the greatest amount of content stored in Wowza Streaming Cloud at any point to date in the billing period.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_total: FormControl<number | null | undefined>,
	}
	export function CreateUsage_storage_peak_recordingPeak_recordingFormGroup() {
		return new FormGroup<Usage_storage_peak_recordingPeak_recordingFormProperties>({
			bytes_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_time_transcoder {

		/** A value of <strong>true</strong> indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud. */
		deleted?: boolean | null;

		/**
		 * The unique alphanumeric string that identifies the live stream or transcoder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** A descriptive name for the live stream or transcoder. */
		name?: string | null;

		/**
		 * The amount of stream processing time, in seconds, that was billed for the live stream or transcoder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_billed?: number | null;

		/**
		 * The amount of time, in seconds, that it took for the live stream or transcoder to be processed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_used?: number | null;
	}
	export interface Usage_time_transcoderFormProperties {

		/** A value of <strong>true</strong> indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud. */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * The unique alphanumeric string that identifies the live stream or transcoder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** A descriptive name for the live stream or transcoder. */
		name: FormControl<string | null | undefined>,

		/**
		 * The amount of stream processing time, in seconds, that was billed for the live stream or transcoder.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_billed: FormControl<number | null | undefined>,

		/**
		 * The amount of time, in seconds, that it took for the live stream or transcoder to be processed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_used: FormControl<number | null | undefined>,
	}
	export function CreateUsage_time_transcoderFormGroup() {
		return new FormGroup<Usage_time_transcoderFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			seconds_billed: new FormControl<number | null | undefined>(undefined),
			seconds_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_time_transcoders {
		transcoders?: Array<Usage_time_transcoder>;
	}
	export interface Usage_time_transcodersFormProperties {
	}
	export function CreateUsage_time_transcodersFormGroup() {
		return new FormGroup<Usage_time_transcodersFormProperties>({
		});

	}

	export interface Usage_viewer_data_countriesElement {
		country_code?: Usage_viewer_data_countriesElementCountry_code;
	}
	export interface Usage_viewer_data_countriesElementFormProperties {
	}
	export function CreateUsage_viewer_data_countriesElementFormGroup() {
		return new FormGroup<Usage_viewer_data_countriesElementFormProperties>({
		});

	}

	export interface Usage_viewer_data_countriesElementCountry_code {

		/** The name of the country. */
		name?: string | null;

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers?: number | null;

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time?: number | null;
		Usage_viewer_data_countriesElementCountry_codeProtocols?: Array<Usage_viewer_data_countriesElementCountry_codeProtocols>;

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time?: number | null;

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time?: number | null;

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers?: number | null;
	}
	export interface Usage_viewer_data_countriesElementCountry_codeFormProperties {

		/** The name of the country. */
		name: FormControl<string | null | undefined>,

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers: FormControl<number | null | undefined>,

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers: FormControl<number | null | undefined>,
	}
	export function CreateUsage_viewer_data_countriesElementCountry_codeFormGroup() {
		return new FormGroup<Usage_viewer_data_countriesElementCountry_codeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentage_viewers: new FormControl<number | null | undefined>(undefined),
			percentage_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_avg_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_total_viewing_time: new FormControl<number | null | undefined>(undefined),
			total_unique_viewers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_viewer_data_countriesElementCountry_codeProtocols {
		protocol_name?: Usage_viewer_data_countriesElementCountry_codeProtocolsProtocol_name;
	}
	export interface Usage_viewer_data_countriesElementCountry_codeProtocolsFormProperties {
	}
	export function CreateUsage_viewer_data_countriesElementCountry_codeProtocolsFormGroup() {
		return new FormGroup<Usage_viewer_data_countriesElementCountry_codeProtocolsFormProperties>({
		});

	}

	export interface Usage_viewer_data_countriesElementCountry_codeProtocolsProtocol_name {

		/** The name of the protocol. */
		name?: string | null;

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers?: number | null;

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time?: number | null;

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time?: number | null;

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time?: number | null;

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers?: number | null;
	}
	export interface Usage_viewer_data_countriesElementCountry_codeProtocolsProtocol_nameFormProperties {

		/** The name of the protocol. */
		name: FormControl<string | null | undefined>,

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers: FormControl<number | null | undefined>,

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers: FormControl<number | null | undefined>,
	}
	export function CreateUsage_viewer_data_countriesElementCountry_codeProtocolsProtocol_nameFormGroup() {
		return new FormGroup<Usage_viewer_data_countriesElementCountry_codeProtocolsProtocol_nameFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentage_viewers: new FormControl<number | null | undefined>(undefined),
			percentage_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_avg_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_total_viewing_time: new FormControl<number | null | undefined>(undefined),
			total_unique_viewers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_viewer_data_protocolsElement {
		protocol_name?: Usage_viewer_data_protocolsElementProtocol_name;
	}
	export interface Usage_viewer_data_protocolsElementFormProperties {
	}
	export function CreateUsage_viewer_data_protocolsElementFormGroup() {
		return new FormGroup<Usage_viewer_data_protocolsElementFormProperties>({
		});

	}

	export interface Usage_viewer_data_protocolsElementProtocol_name {

		/** The name of the protocol. */
		name?: string | null;

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers?: number | null;

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time?: number | null;

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time?: number | null;

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time?: number | null;

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers?: number | null;
	}
	export interface Usage_viewer_data_protocolsElementProtocol_nameFormProperties {

		/** The name of the protocol. */
		name: FormControl<string | null | undefined>,

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers: FormControl<number | null | undefined>,

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers: FormControl<number | null | undefined>,
	}
	export function CreateUsage_viewer_data_protocolsElementProtocol_nameFormGroup() {
		return new FormGroup<Usage_viewer_data_protocolsElementProtocol_nameFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentage_viewers: new FormControl<number | null | undefined>(undefined),
			percentage_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_avg_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_total_viewing_time: new FormControl<number | null | undefined>(undefined),
			total_unique_viewers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_viewer_data_renditionsElement {
		rendition_name?: Usage_viewer_data_renditionsElementRendition_name;
	}
	export interface Usage_viewer_data_renditionsElementFormProperties {
	}
	export function CreateUsage_viewer_data_renditionsElementFormGroup() {
		return new FormGroup<Usage_viewer_data_renditionsElementFormProperties>({
		});

	}

	export interface Usage_viewer_data_renditionsElementRendition_name {
		countries?: Array<Usage_viewer_data_countriesElement>;

		/** The name of the rendition. */
		name?: string | null;

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers?: number | null;

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time?: number | null;
		protocols?: Array<Usage_viewer_data_protocolsElement>;

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time?: number | null;

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time?: number | null;

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers?: number | null;
	}
	export interface Usage_viewer_data_renditionsElementRendition_nameFormProperties {

		/** The name of the rendition. */
		name: FormControl<string | null | undefined>,

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers: FormControl<number | null | undefined>,

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers: FormControl<number | null | undefined>,
	}
	export function CreateUsage_viewer_data_renditionsElementRendition_nameFormGroup() {
		return new FormGroup<Usage_viewer_data_renditionsElementRendition_nameFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentage_viewers: new FormControl<number | null | undefined>(undefined),
			percentage_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_avg_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_total_viewing_time: new FormControl<number | null | undefined>(undefined),
			total_unique_viewers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Usage_viewer_data_stream_target {
		stream_target?: Usage_viewer_data_stream_targetStream_target;
	}
	export interface Usage_viewer_data_stream_targetFormProperties {
	}
	export function CreateUsage_viewer_data_stream_targetFormGroup() {
		return new FormGroup<Usage_viewer_data_stream_targetFormProperties>({
		});

	}

	export interface Usage_viewer_data_stream_targetStream_target {
		countries?: Array<Usage_viewer_data_countriesElement>;

		/** A comma-separated list of all viewed country codes shown as strings, for quick reference. */
		country_list?: Array<string>;

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers?: number | null;

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time?: number | null;
		protocols?: Array<Usage_viewer_data_protocolsElement>;

		/** A comma-separated list of all viewed renditions shown as numbers, for quick reference. */
		rendition_list?: Array<string>;
		renditions?: Array<Usage_viewer_data_renditionsElement>;

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time?: number | null;

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time?: number | null;

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers?: number | null;
	}
	export interface Usage_viewer_data_stream_targetStream_targetFormProperties {

		/**
		 * Total percentage of viewers (<strong>100</strong>).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewers: FormControl<number | null | undefined>,

		/**
		 * The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The average length of time, in seconds, that viewers played the stream at the target.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_avg_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds_total_viewing_time: FormControl<number | null | undefined>,

		/**
		 * The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_unique_viewers: FormControl<number | null | undefined>,
	}
	export function CreateUsage_viewer_data_stream_targetStream_targetFormGroup() {
		return new FormGroup<Usage_viewer_data_stream_targetStream_targetFormProperties>({
			percentage_viewers: new FormControl<number | null | undefined>(undefined),
			percentage_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_avg_viewing_time: new FormControl<number | null | undefined>(undefined),
			seconds_total_viewing_time: new FormControl<number | null | undefined>(undefined),
			total_unique_viewers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Wowza_stream_target_input {

		/** Required */
		stream_target: Wowza_stream_target_inputStream_target;
	}
	export interface Wowza_stream_target_inputFormProperties {
	}
	export function CreateWowza_stream_target_inputFormGroup() {
		return new FormGroup<Wowza_stream_target_inputFormProperties>({
		});

	}

	export interface Wowza_stream_target_inputStream_target {

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size?: Index_stream_targetChunk_size | null;

		/**
		 * Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
		 * Required
		 */
		location: Index_stream_targetLocation;

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: string;

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider?: string | null;

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type?: string | null;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. */
		use_cors?: boolean | null;

		/** <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong> */
		use_https?: boolean | null;

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider. */
		use_secure_ingest?: boolean | null;
	}
	export interface Wowza_stream_target_inputStream_targetFormProperties {

		/** <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>. */
		chunk_size: FormControl<Index_stream_targetChunk_size | null | undefined>,

		/**
		 * Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
		 * Required
		 */
		location: FormControl<Index_stream_targetLocation | null | undefined>,

		/**
		 * A descriptive name for the stream target. Maximum 255 characters.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>. */
		provider: FormControl<string | null | undefined>,

		/** <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).--> */
		type: FormControl<string | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. */
		use_cors: FormControl<boolean | null | undefined>,

		/** <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong> */
		use_https: FormControl<boolean | null | undefined>,

		/** Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider. */
		use_secure_ingest: FormControl<boolean | null | undefined>,
	}
	export function CreateWowza_stream_target_inputStream_targetFormGroup() {
		return new FormGroup<Wowza_stream_target_inputStream_targetFormProperties>({
			chunk_size: new FormControl<Index_stream_targetChunk_size | null | undefined>(undefined),
			location: new FormControl<Index_stream_targetLocation | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			use_cors: new FormControl<boolean | null | undefined>(undefined),
			use_https: new FormControl<boolean | null | undefined>(undefined),
			use_secure_ingest: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch Swagger information
		 * This operation shows the details of the Swagger specification.
		 * Get api/v1/specs
		 * @return {Spec} OK
		 */
		Specs(): Observable<Spec> {
			return this.http.get<Spec>(this.baseUri + 'api/v1/specs', {});
		}

		/**
		 * Fetch all live streams
		 * This operation shows the details of all of your live streams.
		 * Get live_streams
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Live_streams} Success
		 */
		ListLiveStreams(page: number | null | undefined, per_page: number | null | undefined): Observable<Live_streams> {
			return this.http.get<Live_streams>(this.baseUri + 'live_streams?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create a live stream
		 * This operation creates a live stream.
		 * Post live_streams
		 * @param {Live_stream_create_input} requestBody Provide the details of the live stream to create in the body of the request.
		 * @return {CreateLiveStreamReturn} Success
		 */
		CreateLiveStream(requestBody: Live_stream_create_input): Observable<CreateLiveStreamReturn> {
			return this.http.post<CreateLiveStreamReturn>(this.baseUri + 'live_streams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a live stream
		 * This operation shows the details of a specific live stream.
		 * Get live_streams/{id}
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {ShowLiveStreamReturn} Success
		 */
		ShowLiveStream(id: string): Observable<ShowLiveStreamReturn> {
			return this.http.get<ShowLiveStreamReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a live stream
		 * This operation deletes a live stream, including all assigned outputs and targets.
		 * Delete live_streams/{id}
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {void} 
		 */
		DeleteLiveStream(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a live stream
		 * This operation updates a live stream.
		 * Patch live_streams/{id}
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @param {Live_stream_update_input} requestBody Provide the details of the live stream to update in the body of the request.
		 * @return {UpdateLiveStreamReturn} Success
		 */
		UpdateLiveStream(id: string, requestBody: Live_stream_update_input): Observable<UpdateLiveStreamReturn> {
			return this.http.patch<UpdateLiveStreamReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Regenerate the connection code for a live stream
		 * This operation regenerates the connection code of a live stream.
		 * Put live_streams/{id}/regenerate_connection_code
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {RegenerateConnectionCodeLiveStreamReturn} Success
		 */
		RegenerateConnectionCodeLiveStream(id: string): Observable<RegenerateConnectionCodeLiveStreamReturn> {
			return this.http.put<RegenerateConnectionCodeLiveStreamReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)) + '/regenerate_connection_code', null, {});
		}

		/**
		 * Reset a live stream
		 * This operation resets a live stream.
		 * Put live_streams/{id}/reset
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {ResetLiveStreamReturn} Success
		 */
		ResetLiveStream(id: string): Observable<ResetLiveStreamReturn> {
			return this.http.put<ResetLiveStreamReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)) + '/reset', null, {});
		}

		/**
		 * Start a live stream
		 * This operation starts a live stream.
		 * Put live_streams/{id}/start
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {StartLiveStreamReturn} Success
		 */
		StartLiveStream(id: string): Observable<StartLiveStreamReturn> {
			return this.http.put<StartLiveStreamReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)) + '/start', null, {});
		}

		/**
		 * Fetch the state of a live stream
		 * This operation shows the current state of a live stream.
		 * Get live_streams/{id}/state
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {ShowLiveStreamStateReturn} Success
		 */
		ShowLiveStreamState(id: string): Observable<ShowLiveStreamStateReturn> {
			return this.http.get<ShowLiveStreamStateReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)) + '/state', {});
		}

		/**
		 * Fetch metrics for an active live stream
		 * This operation returns a hash of metrics keys, each of which identifies a status, text description, unit, and value.
		 * Get live_streams/{id}/stats
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {ShowLiveStreamStatsReturn} Success
		 */
		ShowLiveStreamStats(id: string): Observable<ShowLiveStreamStatsReturn> {
			return this.http.get<ShowLiveStreamStatsReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)) + '/stats', {});
		}

		/**
		 * Stop a live stream
		 * This operation stops a live stream.
		 * Put live_streams/{id}/stop
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {StopLiveStreamReturn} Success
		 */
		StopLiveStream(id: string): Observable<StopLiveStreamReturn> {
			return this.http.put<StopLiveStreamReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)) + '/stop', null, {});
		}

		/**
		 * Fetch the thumbnail URL of a live stream
		 * This operation shows the thumbnail URL of a started live stream.
		 * Get live_streams/{id}/thumbnail_url
		 * @param {string} id The unique alphanumeric string that identifies the live stream.
		 * @return {ShowLiveStreamThumbnailUrlReturn} Success
		 */
		ShowLiveStreamThumbnailUrl(id: string): Observable<ShowLiveStreamThumbnailUrlReturn> {
			return this.http.get<ShowLiveStreamThumbnailUrlReturn>(this.baseUri + 'live_streams/' + (id == null ? '' : encodeURIComponent(id)) + '/thumbnail_url', {});
		}

		/**
		 * Fetch all players
		 * This operation shows the details of all of your players.
		 * Get players
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Players} Success
		 */
		ListPlayers(page: number | null | undefined, per_page: number | null | undefined): Observable<Players> {
			return this.http.get<Players>(this.baseUri + 'players?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Fetch a player
		 * This operation shows details of a specific player.
		 * Get players/{id}
		 * @param {string} id The unique alphanumeric string that identifies the player.
		 * @return {ShowPlayerReturn} Success
		 */
		ShowPlayer(id: string): Observable<ShowPlayerReturn> {
			return this.http.get<ShowPlayerReturn>(this.baseUri + 'players/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a player
		 * This operation updates a player.
		 * Patch players/{id}
		 * @param {string} id The unique alphanumeric string that identifies the player.
		 * @param {Player_update_input} requestBody Provide the details of the player to update in the body of the request.
		 * @return {UpdatePlayerReturn} Success
		 */
		UpdatePlayer(id: string, requestBody: Player_update_input): Observable<UpdatePlayerReturn> {
			return this.http.patch<UpdatePlayerReturn>(this.baseUri + 'players/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rebuild player code
		 * This operation rebuilds the player with the current configuration.
		 * Post players/{id}/rebuild
		 * @param {string} id The unique alphanumeric string that identifies the player.
		 * @return {RequestPlayerRebuildReturn} Success
		 */
		RequestPlayerRebuild(id: string): Observable<RequestPlayerRebuildReturn> {
			return this.http.post<RequestPlayerRebuildReturn>(this.baseUri + 'players/' + (id == null ? '' : encodeURIComponent(id)) + '/rebuild', null, {});
		}

		/**
		 * Fetch the state of a player
		 * This operation shows the current state of a player.
		 * Get players/{id}/state
		 * @param {string} id The unique alphanumeric string that identifies the player.
		 * @return {ShowPlayerStateReturn} Success
		 */
		ShowPlayerState(id: string): Observable<ShowPlayerStateReturn> {
			return this.http.get<ShowPlayerStateReturn>(this.baseUri + 'players/' + (id == null ? '' : encodeURIComponent(id)) + '/state', {});
		}

		/**
		 * Fetch all player URLs
		 * This operation shows the details of all player URLs.
		 * Get players/{player_id}/urls
		 * @param {string} player_id The unique alphanumeric string that identifies the player.
		 * @return {Urls} Success
		 */
		ListPlayerUrls(player_id: string): Observable<Urls> {
			return this.http.get<Urls>(this.baseUri + 'players/' + (player_id == null ? '' : encodeURIComponent(player_id)) + '/urls', {});
		}

		/**
		 * Create a player URL
		 * This operation creates a new player URL.
		 * Post players/{player_id}/urls
		 * @param {string} player_id The unique alphanumeric string that identifies the player.
		 * @param {Url_create_input} requestBody Provide the details of the player URL to create in the body of the request.
		 * @return {CreatePlayerUrlReturn} Success
		 */
		CreatePlayerUrl(player_id: string, requestBody: Url_create_input): Observable<CreatePlayerUrlReturn> {
			return this.http.post<CreatePlayerUrlReturn>(this.baseUri + 'players/' + (player_id == null ? '' : encodeURIComponent(player_id)) + '/urls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a player URL
		 * This operation shows the details of a player URL.
		 * Get players/{player_id}/urls/{id}
		 * @param {string} player_id The unique alphanumeric string that identifies the player.
		 * @param {string} id The unique alphanumeric string that identifies the player URL.
		 * @return {ShowPlayerUrlReturn} Success
		 */
		ShowPlayerUrl(player_id: string, id: string): Observable<ShowPlayerUrlReturn> {
			return this.http.get<ShowPlayerUrlReturn>(this.baseUri + 'players/' + (player_id == null ? '' : encodeURIComponent(player_id)) + '/urls/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a player URL
		 * This operation deletes a player URL.
		 * Delete players/{player_id}/urls/{id}
		 * @param {string} player_id The unique alphanumeric string that identifies the player.
		 * @param {string} id The unique alphanumeric string that identifies the player URL.
		 * @return {void} 
		 */
		DeletePlayerUrl(player_id: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'players/' + (player_id == null ? '' : encodeURIComponent(player_id)) + '/urls/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a player URL
		 * This operation updates a player URL.
		 * Patch players/{player_id}/urls/{id}
		 * @param {string} player_id The unique alphanumeric string that identifies the player.
		 * @param {string} id The unique alphanumeric string that identifies the player URL.
		 * @param {Url_update_input} requestBody Provide the details of the player URL to update in the body of the request.
		 * @return {UpdatePlayerUrlReturn} Success
		 */
		UpdatePlayerUrl(player_id: string, id: string, requestBody: Url_update_input): Observable<UpdatePlayerUrlReturn> {
			return this.http.patch<UpdatePlayerUrlReturn>(this.baseUri + 'players/' + (player_id == null ? '' : encodeURIComponent(player_id)) + '/urls/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch all recordings
		 * This operation shows the details of all of your recordings.
		 * Get recordings
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Recordings} Success
		 */
		ListRecordings(page: number | null | undefined, per_page: number | null | undefined): Observable<Recordings> {
			return this.http.get<Recordings>(this.baseUri + 'recordings?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Fetch a recording
		 * This operation shows the details of a specific recording.
		 * Get recordings/{id}
		 * @param {string} id The unique alphanumeric string that identifies the recording.
		 * @return {ShowRecordingReturn} Success
		 */
		ShowRecording(id: string): Observable<ShowRecordingReturn> {
			return this.http.get<ShowRecordingReturn>(this.baseUri + 'recordings/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a recording
		 * This operation deletes a recording.
		 * Delete recordings/{id}
		 * @param {string} id The unique alphanumeric string that identifies the recording.
		 * @return {void} 
		 */
		DeleteRecording(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'recordings/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the state of a recording
		 * This operation shows the current state of a recording.
		 * Get recordings/{id}/state
		 * @param {string} id The unique alphanumeric string that identifies the recording.
		 * @return {ShowRecordingStateReturn} Success
		 */
		ShowRecordingState(id: string): Observable<ShowRecordingStateReturn> {
			return this.http.get<ShowRecordingStateReturn>(this.baseUri + 'recordings/' + (id == null ? '' : encodeURIComponent(id)) + '/state', {});
		}

		/**
		 * Fetch all schedules
		 * This operation shows the details of all of your schedules.
		 * Get schedules
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Schedules} Success
		 */
		ListSchedules(page: number | null | undefined, per_page: number | null | undefined): Observable<Schedules> {
			return this.http.get<Schedules>(this.baseUri + 'schedules?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create a schedule
		 * This operation creates a schedule.
		 * Post schedules
		 * @param {Schedule_create_input} requestBody Provide the details of the schedule to create in the body of the request.
		 * @return {CreateScheduleReturn} Success
		 */
		CreateSchedule(requestBody: Schedule_create_input): Observable<CreateScheduleReturn> {
			return this.http.post<CreateScheduleReturn>(this.baseUri + 'schedules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a schedule
		 * This operation shows the details of a specific schedule.
		 * Get schedules/{id}
		 * @param {string} id The unique alphanumeric string that identifies the schedule.
		 * @return {ShowScheduleReturn} Success
		 */
		ShowSchedule(id: string): Observable<ShowScheduleReturn> {
			return this.http.get<ShowScheduleReturn>(this.baseUri + 'schedules/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a schedule
		 * This operation deletes a schedule.
		 * Delete schedules/{id}
		 * @param {string} id The unique alphanumeric string that identifies the schedule.
		 * @return {void} 
		 */
		DeleteSchedule(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'schedules/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a schedule
		 * This operation updates a schedule.
		 * Patch schedules/{id}
		 * @param {string} id The unique alphanumeric string that identifies the schedule.
		 * @param {Schedule_update_input} requestBody Provide the details of the schedule to update in the body of the request.
		 * @return {UpdateScheduleReturn} Success
		 */
		UpdateSchedule(id: string, requestBody: Schedule_update_input): Observable<UpdateScheduleReturn> {
			return this.http.patch<UpdateScheduleReturn>(this.baseUri + 'schedules/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a schedule
		 * This operation disables a schedule.
		 * Put schedules/{id}/disable
		 * @param {string} id The unique alphanumeric string that identifies the schedule.
		 * @return {DisableScheduleReturn} Success
		 */
		DisableSchedule(id: string): Observable<DisableScheduleReturn> {
			return this.http.put<DisableScheduleReturn>(this.baseUri + 'schedules/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, {});
		}

		/**
		 * Enable a schedule
		 * This operation enables a schedule.
		 * Put schedules/{id}/enable
		 * @param {string} id The unique alphanumeric string that identifies the schedule.
		 * @return {EnableScheduleReturn} Success
		 */
		EnableSchedule(id: string): Observable<EnableScheduleReturn> {
			return this.http.put<EnableScheduleReturn>(this.baseUri + 'schedules/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, {});
		}

		/**
		 * Fetch the state of a schedule
		 * This operation shows the current state of a schedule.
		 * Get schedules/{id}/state
		 * @param {string} id The unique alphanumeric string that identifies the schedule.
		 * @return {ShowScheduleStateReturn} Success
		 */
		ShowScheduleState(id: string): Observable<ShowScheduleStateReturn> {
			return this.http.get<ShowScheduleStateReturn>(this.baseUri + 'schedules/' + (id == null ? '' : encodeURIComponent(id)) + '/state', {});
		}

		/**
		 * Fetch all stream sources
		 * This operation shows the details of all of your stream sources.
		 * Get stream_sources
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Stream_sources} Success
		 */
		ListStreamSources(page: number | null | undefined, per_page: number | null | undefined): Observable<Stream_sources> {
			return this.http.get<Stream_sources>(this.baseUri + 'stream_sources?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Add a stream source
		 * This operation adds a stream source.
		 * Post stream_sources
		 * @param {Stream_source_create_input} requestBody Provide the details of the stream source to add in the body of the request.
		 * @return {CreateStreamSourceReturn} Success
		 */
		CreateStreamSource(requestBody: Stream_source_create_input): Observable<CreateStreamSourceReturn> {
			return this.http.post<CreateStreamSourceReturn>(this.baseUri + 'stream_sources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated operation
		 * POST /stream_sources/add/ is deprecated. To add a stream source, use POST /stream_sources instead.
		 * Post stream_sources/add
		 * @param {Stream_source_create_input} requestBody Provide the details of the stream source to add in the body of the request.
		 * @return {AddStreamSourceReturn} Success
		 */
		AddStreamSource(requestBody: Stream_source_create_input): Observable<AddStreamSourceReturn> {
			return this.http.post<AddStreamSourceReturn>(this.baseUri + 'stream_sources/add', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a stream source
		 * This operation shows details of a specific stream source.
		 * Get stream_sources/{id}
		 * @param {string} id The unique alphanumeric string that identifies the stream source.
		 * @return {ShowStreamSourceReturn} Success
		 */
		ShowStreamSource(id: string): Observable<ShowStreamSourceReturn> {
			return this.http.get<ShowStreamSourceReturn>(this.baseUri + 'stream_sources/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a stream source
		 * This operation deletes a stream source.
		 * Delete stream_sources/{id}
		 * @param {string} id The unique alphanumeric string that identifies the stream source.
		 * @return {void} 
		 */
		DeleteStreamSource(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'stream_sources/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a stream source
		 * This operation updates a stream source.
		 * Patch stream_sources/{id}
		 * @param {string} id The unique alphanumeric string that identifies the stream source.
		 * @param {Stream_source_update_input} requestBody Provide the details of the stream source to update in the body of the request.
		 * @return {UpdateStreamSourceReturn} Success
		 */
		UpdateStreamSource(id: string, requestBody: Stream_source_update_input): Observable<UpdateStreamSourceReturn> {
			return this.http.patch<UpdateStreamSourceReturn>(this.baseUri + 'stream_sources/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch all stream targets
		 * This operation lists the details of all of your stream targets.
		 * Get stream_targets
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Stream_targets} Success
		 */
		ListStreamTargets(page: number | null | undefined, per_page: number | null | undefined): Observable<Stream_targets> {
			return this.http.get<Stream_targets>(this.baseUri + 'stream_targets?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create a stream target
		 * This operation creates a stream target. There are three types of targets that you can create: <strong>CustomStreamTarget</strong> for an an external, third-party destination; <strong>WowzaStreamTarget</strong> for a Wowza CDN target; or <strong>UltraLowLatencyStreamTarget</strong> for an ultra low latency Wowza CDN target. The availability of many parameters depends on the type of target you create.
		 * Post stream_targets
		 * @param {Stream_target_create_input} requestBody Provide the details of the stream target to create in the body of the request.
		 * @return {CreateStreamTargetReturn} Success
		 */
		CreateStreamTarget(requestBody: Stream_target_create_input): Observable<CreateStreamTargetReturn> {
			return this.http.post<CreateStreamTargetReturn>(this.baseUri + 'stream_targets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated operation
		 * POST /stream_targets/add/ is deprecated. To add a stream target, use POST /stream_targets instead.
		 * Post stream_targets/add
		 * @param {Wowza_stream_target_input} requestBody Provide the details of the stream target to add in the body of the request.
		 * @return {AddStreamTargetReturn} Success
		 */
		AddStreamTarget(requestBody: Wowza_stream_target_input): Observable<AddStreamTargetReturn> {
			return this.http.post<AddStreamTargetReturn>(this.baseUri + 'stream_targets/add', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a stream target
		 * This operation shows details of a specific stream target.
		 * Get stream_targets/{id}
		 * @param {string} id The unique alphanumeric string that identifies the stream target.
		 * @return {ShowStreamTargetReturn} Success
		 */
		ShowStreamTarget(id: string): Observable<ShowStreamTargetReturn> {
			return this.http.get<ShowStreamTargetReturn>(this.baseUri + 'stream_targets/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a stream target
		 * This operation deletes a stream target.
		 * Delete stream_targets/{id}
		 * @param {string} id The unique alphanumeric string that identifies the stream target.
		 * @return {void} 
		 */
		DeleteStreamTarget(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'stream_targets/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a stream target
		 * This operation updates a stream target.
		 * Patch stream_targets/{id}
		 * @param {string} id The unique alphanumeric string that identifies the stream target.
		 * @param {Stream_target_update_input} requestBody Provide the details of the stream target to update in the body of the request.
		 * @return {UpdateStreamTargetReturn} Success
		 */
		UpdateStreamTarget(id: string, requestBody: Stream_target_update_input): Observable<UpdateStreamTargetReturn> {
			return this.http.patch<UpdateStreamTargetReturn>(this.baseUri + 'stream_targets/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch current health metrics for an active Wowza ultra low latency stream target
		 * This operation returns a snapshot of the current connection and throughput details for an active target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The interval for current metrics is 30 seconds from the moment of the query.
		 * Get stream_targets/{id}/metrics/current
		 * @param {string} id The unique alphanumeric string that identifies the stream target.
		 * @return {ShowStreamTargetMetricsCurrentReturn} Success
		 */
		ShowStreamTargetMetricsCurrent(id: string): Observable<ShowStreamTargetMetricsCurrentReturn> {
			return this.http.get<ShowStreamTargetMetricsCurrentReturn>(this.baseUri + 'stream_targets/' + (id == null ? '' : encodeURIComponent(id)) + '/metrics/current', {});
		}

		/**
		 * Fetch historic health metrics for a Wowza ultra low latency stream target
		 * This operation shows historic connection and throughput details for target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>.
		 * Get stream_targets/{id}/metrics/historic
		 * @param {string} id The unique alphanumeric string that identifies the stream target.
		 * @param {string} from The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
		 * @param {string} to The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
		 * @param {ShowStreamTargetMetricsHistoricInterval} interval The length of time for a block of metrics. The default is **10m** (10 minutes).
		 * @return {ShowStreamTargetMetricsHistoricReturn} Success
		 */
		ShowStreamTargetMetricsHistoric(id: string, from: string | null | undefined, to: string | null | undefined, interval: ShowStreamTargetMetricsHistoricInterval | null | undefined): Observable<ShowStreamTargetMetricsHistoricReturn> {
			return this.http.get<ShowStreamTargetMetricsHistoricReturn>(this.baseUri + 'stream_targets/' + (id == null ? '' : encodeURIComponent(id)) + '/metrics/historic&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)) + '&interval=' + interval, {});
		}

		/**
		 * Regenerate the connection code for a stream target
		 * This operation regenerates the connection code of a stream target.
		 * Put stream_targets/{id}/regenerate_connection_code
		 * @param {string} id The unique alphanumeric string that identifies the stream target.
		 * @return {RegenerateConnectionCodeStreamTargetReturn} Success
		 */
		RegenerateConnectionCodeStreamTarget(id: string): Observable<RegenerateConnectionCodeStreamTargetReturn> {
			return this.http.put<RegenerateConnectionCodeStreamTargetReturn>(this.baseUri + 'stream_targets/' + (id == null ? '' : encodeURIComponent(id)) + '/regenerate_connection_code', null, {});
		}

		/**
		 * Fetch geo-blocking for a stream target
		 * This operation shows the details of geo-blocking applied to a specific stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.
		 * Get stream_targets/{stream_target_id}/geoblock
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {ShowStreamTargetGeoblockReturn} Success
		 */
		ShowStreamTargetGeoblock(stream_target_id: string): Observable<ShowStreamTargetGeoblockReturn> {
			return this.http.get<ShowStreamTargetGeoblockReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/geoblock', {});
		}

		/**
		 * Create geo-blocking for a stream target
		 * This operation allows you to block or whitelist viewing of a stream target by geographic location. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked. For more information see the technical article [How to geo-block stream targets by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-geo-block-stream-targets-by-using-the-wowza-streaming-cloud-rest-api).
		 * Post stream_targets/{stream_target_id}/geoblock
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {Geoblock_create_input} requestBody Provide the details of the geo-blocking to create in the body of the request.
		 * @return {CreateStreamTargetGeoblockReturn} Success
		 */
		CreateStreamTargetGeoblock(stream_target_id: string, requestBody: Geoblock_create_input): Observable<CreateStreamTargetGeoblockReturn> {
			return this.http.post<CreateStreamTargetGeoblockReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/geoblock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update geo-blocking for a stream target
		 * This operation updates the geo-blocking applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.
		 * Patch stream_targets/{stream_target_id}/geoblock
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {Geoblock_update_input} requestBody Provide the details of the geo-blocking to update in the body of the request.
		 * @return {UpdateStreamTargetGeoblockReturn} Success
		 */
		UpdateStreamTargetGeoblock(stream_target_id: string, requestBody: Geoblock_update_input): Observable<UpdateStreamTargetGeoblockReturn> {
			return this.http.patch<UpdateStreamTargetGeoblockReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/geoblock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch all properties of a stream target
		 * This operation shows the details of all of the properties assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.
		 * Get stream_targets/{stream_target_id}/properties
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {Stream_target_properties} Success
		 */
		ListStreamTargetProperties(stream_target_id: string): Observable<Stream_target_properties> {
			return this.http.get<Stream_target_properties>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/properties', {});
		}

		/**
		 * Create a property for a stream target
		 * This operation creates a property for a stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).
		 * Post stream_targets/{stream_target_id}/properties
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {Stream_target_property_create_input} requestBody Provide the details of the property to create in the body of the request.
		 * @return {CreateStreamTargetPropertyReturn} Success
		 */
		CreateStreamTargetProperty(stream_target_id: string, requestBody: Stream_target_property_create_input): Observable<CreateStreamTargetPropertyReturn> {
			return this.http.post<CreateStreamTargetPropertyReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a property of a stream target
		 * This operation shows the details of a specific property assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.
		 * Get stream_targets/{stream_target_id}/properties/{id}
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {string} id The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.
		 * @return {ShowStreamTargetPropertyReturn} Success
		 */
		ShowStreamTargetProperty(stream_target_id: string, id: string): Observable<ShowStreamTargetPropertyReturn> {
			return this.http.get<ShowStreamTargetPropertyReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/properties/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a stream target property
		 * This operation removes a property from a stream target.
		 * Delete stream_targets/{stream_target_id}/properties/{id}
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {string} id The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.
		 * @return {void} 
		 */
		DeleteStreamTargetProperty(stream_target_id: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/properties/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch token authorization for a stream target
		 * This operation shows the details of the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.
		 * Get stream_targets/{stream_target_id}/token_auth
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {ShowStreamTargetTokenAuthReturn} Success
		 */
		ShowStreamTargetTokenAuth(stream_target_id: string): Observable<ShowStreamTargetTokenAuthReturn> {
			return this.http.get<ShowStreamTargetTokenAuthReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/token_auth', {});
		}

		/**
		 * Create token authorization for a stream target
		 * This operation creates token authorization for a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization. For more information see the technical article [How to protect stream targets with token authorization by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-protect-streams-with-token-authorization-by-using-the-wowza-streaming-cloud-rest-api).
		 * Post stream_targets/{stream_target_id}/token_auth
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {Token_auth_create_input} requestBody Provide the details of the token authorization to create in the body of the request.
		 * @return {CreateStreamTargetTokenAuthReturn} Success
		 */
		CreateStreamTargetTokenAuth(stream_target_id: string, requestBody: Token_auth_create_input): Observable<CreateStreamTargetTokenAuthReturn> {
			return this.http.post<CreateStreamTargetTokenAuthReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/token_auth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update token authorization for a stream target
		 * This operation updates the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.
		 * Patch stream_targets/{stream_target_id}/token_auth
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {Token_auth_update_input} requestBody Provide the details of the token authorization to update in the body of the request.
		 * @return {UpdateStreamTargetTokenAuthReturn} Success
		 */
		UpdateStreamTargetTokenAuth(stream_target_id: string, requestBody: Token_auth_update_input): Observable<UpdateStreamTargetTokenAuthReturn> {
			return this.http.patch<UpdateStreamTargetTokenAuthReturn>(this.baseUri + 'stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/token_auth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch all transcoders
		 * This operation shows the details of all of your transcoders.
		 * Get transcoders
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Transcoders} Success
		 */
		ListTranscoders(page: number | null | undefined, per_page: number | null | undefined): Observable<Transcoders> {
			return this.http.get<Transcoders>(this.baseUri + 'transcoders?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Create a transcoder
		 * This operation creates a transcoder.
		 * Post transcoders
		 * @param {Transcoder_create_input} requestBody Provide the details of the transcoder to create in the body of the request.
		 * @return {CreateTranscoderReturn} Success
		 */
		CreateTranscoder(requestBody: Transcoder_create_input): Observable<CreateTranscoderReturn> {
			return this.http.post<CreateTranscoderReturn>(this.baseUri + 'transcoders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a transcoder
		 * This operation shows the details of a specific transcoder.
		 * Get transcoders/{id}
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {ShowTranscoderReturn} Success
		 */
		ShowTranscoder(id: string): Observable<ShowTranscoderReturn> {
			return this.http.get<ShowTranscoderReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a transcoder
		 * This operation deletes a transcoder, including all of its assigned output renditions and stream targets.
		 * Delete transcoders/{id}
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {void} 
		 */
		DeleteTranscoder(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a transcoder
		 * This operation updates a transcoder.
		 * Patch transcoders/{id}
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @param {Transcoder_update_input} requestBody Provide the details of the transcoder to update in the body of the request.
		 * @return {UpdateTranscoderReturn} Success
		 */
		UpdateTranscoder(id: string, requestBody: Transcoder_update_input): Observable<UpdateTranscoderReturn> {
			return this.http.patch<UpdateTranscoderReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a transcoder's stream targets
		 * This operation disables all of the stream targets assigned to a specific transcoder.
		 * Put transcoders/{id}/disable_all_stream_targets
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {DisableAllStreamTargetsTranscoderReturn} Success
		 */
		DisableAllStreamTargetsTranscoder(id: string): Observable<DisableAllStreamTargetsTranscoderReturn> {
			return this.http.put<DisableAllStreamTargetsTranscoderReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/disable_all_stream_targets', null, {});
		}

		/**
		 * Enable a transcoder's stream targets
		 * This operation enables all of the stream targets assigned to a specific transcoder.
		 * Put transcoders/{id}/enable_all_stream_targets
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {EnableAllStreamTargetsTranscoderReturn} Success
		 */
		EnableAllStreamTargetsTranscoder(id: string): Observable<EnableAllStreamTargetsTranscoderReturn> {
			return this.http.put<EnableAllStreamTargetsTranscoderReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/enable_all_stream_targets', null, {});
		}

		/**
		 * Fetch a transcoder's recordings
		 * This operation shows the details of all of the recordings for a specific transcoder.
		 * Get transcoders/{id}/recordings
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {ListTranscoderRecordingsReturn} Success
		 */
		ListTranscoderRecordings(id: string): Observable<ListTranscoderRecordingsReturn> {
			return this.http.get<ListTranscoderRecordingsReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/recordings', {});
		}

		/**
		 * Reset a transcoder
		 * This operation resets a transcoder.
		 * Put transcoders/{id}/reset
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {ResetTranscoderReturn} Success
		 */
		ResetTranscoder(id: string): Observable<ResetTranscoderReturn> {
			return this.http.put<ResetTranscoderReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/reset', null, {});
		}

		/**
		 * Fetch transcoder's schedules
		 * This operation shows the details of all of the schedules for a specific transcoder.
		 * Get transcoders/{id}/schedules
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {ListTranscoderSchedulesReturn} Success
		 */
		ListTranscoderSchedules(id: string): Observable<ListTranscoderSchedulesReturn> {
			return this.http.get<ListTranscoderSchedulesReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/schedules', {});
		}

		/**
		 * Start a transcoder
		 * This operation starts a transcoder.
		 * Put transcoders/{id}/start
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {StartTranscoderReturn} Success
		 */
		StartTranscoder(id: string): Observable<StartTranscoderReturn> {
			return this.http.put<StartTranscoderReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/start', null, {});
		}

		/**
		 * Fetch the state and uptime ID of a transcoder
		 * This operation shows the current state and uptime ID of a transcoder.
		 * Get transcoders/{id}/state
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {ShowTranscoderStateReturn} Success
		 */
		ShowTranscoderState(id: string): Observable<ShowTranscoderStateReturn> {
			return this.http.get<ShowTranscoderStateReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/state', {});
		}

		/**
		 * Fetch statistics for a current transcoder
		 * This operation responds with a hash of metrics (keys) for a currently running transcoder. Each key has a <strong>status</strong>, <strong>text</strong> (description), <strong>units</strong>, and <strong>value</strong>.
		 * Get transcoders/{id}/stats
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {ShowTranscoderStatsReturn} Success
		 */
		ShowTranscoderStats(id: string): Observable<ShowTranscoderStatsReturn> {
			return this.http.get<ShowTranscoderStatsReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/stats', {});
		}

		/**
		 * Stop a transcoder
		 * This operation stops a transcoder.
		 * Put transcoders/{id}/stop
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {StopTranscoderReturn} Success
		 */
		StopTranscoder(id: string): Observable<StopTranscoderReturn> {
			return this.http.put<StopTranscoderReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/stop', null, {});
		}

		/**
		 * Fetch the thumbnail URL of a transcoder
		 * This operation shows the thumbnail URL of a started transcoder.
		 * Get transcoders/{id}/thumbnail_url
		 * @param {string} id The unique alphanumeric string that identifies the transcoder.
		 * @return {ShowTranscoderThumbnailUrlReturn} Success
		 */
		ShowTranscoderThumbnailUrl(id: string): Observable<ShowTranscoderThumbnailUrlReturn> {
			return this.http.get<ShowTranscoderThumbnailUrlReturn>(this.baseUri + 'transcoders/' + (id == null ? '' : encodeURIComponent(id)) + '/thumbnail_url', {});
		}

		/**
		 * Fetch all outputs of a transcoder
		 * This operation shows the details of all of the output renditions of a specific transcoder.
		 * Get transcoders/{transcoder_id}/outputs
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @return {Outputs} Success
		 */
		ListTranscoderOutputs(transcoder_id: string): Observable<Outputs> {
			return this.http.get<Outputs>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs', {});
		}

		/**
		 * Create an output
		 * This operation creates an output rendition for a specific transcoder.
		 * Post transcoders/{transcoder_id}/outputs
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {Output_create_input} requestBody Provide the details of the output rendition to create in the body of the request.
		 * @return {CreateTranscoderOutputReturn} Success
		 */
		CreateTranscoderOutput(transcoder_id: string, requestBody: Output_create_input): Observable<CreateTranscoderOutputReturn> {
			return this.http.post<CreateTranscoderOutputReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch an output
		 * This operation shows the details of a specific output rendition for a specific transcoder.
		 * Get transcoders/{transcoder_id}/outputs/{id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the output rendition.
		 * @return {ShowTranscoderOutputReturn} Success
		 */
		ShowTranscoderOutput(transcoder_id: string, id: string): Observable<ShowTranscoderOutputReturn> {
			return this.http.get<ShowTranscoderOutputReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete an output
		 * This operation deletes an output, including all of its assigned targets.
		 * Delete transcoders/{transcoder_id}/outputs/{id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the output rendition.
		 * @return {void} 
		 */
		DeleteTranscoderOutput(transcoder_id: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an output
		 * This operation updates an output rendition.
		 * Patch transcoders/{transcoder_id}/outputs/{id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the output rendition.
		 * @param {Output_update_input} requestBody Provide the details of the output rendition to update in the body of the request.
		 * @return {UpdateTranscoderOutputReturn} Success
		 */
		UpdateTranscoderOutput(transcoder_id: string, id: string, requestBody: Output_update_input): Observable<UpdateTranscoderOutputReturn> {
			return this.http.patch<UpdateTranscoderOutputReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated operation
		 * The operation POST /transcoders/{transcoder_id}/outputs/{id}/add_stream_target is deprecated. Use POST /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets to add an existing stream target to an output.
		 * Post transcoders/{transcoder_id}/outputs/{id}/add_stream_target
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the output rendition.
		 * @param {Output_add_stream_target_input} requestBody Provide the details of the stream target to add in the body of the request.
		 * @return {AddStreamTargetToTranscoderOutputReturn} Success
		 */
		AddStreamTargetToTranscoderOutput(transcoder_id: string, id: string, requestBody: Output_add_stream_target_input): Observable<AddStreamTargetToTranscoderOutputReturn> {
			return this.http.post<AddStreamTargetToTranscoderOutputReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (id == null ? '' : encodeURIComponent(id)) + '/add_stream_target', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated operation
		 * The operation DELETE /transcoders/{transcoder_id}/outputs/{id}/remove_stream_target is deprecated. Use DELETE /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{id} to remove a stream target from an output.
		 * Delete transcoders/{transcoder_id}/outputs/{id}/remove_stream_target
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the output rendition.
		 * @return {void} 
		 */
		RemoveStreamTargetToTranscoderOutput(transcoder_id: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (id == null ? '' : encodeURIComponent(id)) + '/remove_stream_target', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch all output stream targets of an output of a transcoder
		 * This operation shows the details of all of the output stream targets of an output of a transcoder.
		 * Get transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @return {Output_stream_target} Success
		 */
		ListTranscoderOutputOutputStreamTargets(transcoder_id: string, output_id: string): Observable<Output_stream_target> {
			return this.http.get<Output_stream_target>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets', {});
		}

		/**
		 * Create an output stream target
		 * This operation creates an output stream target. Targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> can't be added to output renditions.
		 * Post transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @param {Output_stream_target_create_input} requestBody Provide the details of the output stream target to create in the body of the request. Targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> can't be added to output renditions.
		 * @return {CreateTranscoderOutputOutputStreamTargetReturn} Success
		 */
		CreateTranscoderOutputOutputStreamTarget(transcoder_id: string, output_id: string, requestBody: Output_stream_target_create_input): Observable<CreateTranscoderOutputOutputStreamTargetReturn> {
			return this.http.post<CreateTranscoderOutputOutputStreamTargetReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch an output stream target
		 * This operation shows the details of an output stream target.
		 * Get transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {ShowTranscoderOutputOutputStreamTargetReturn} Success
		 */
		ShowTranscoderOutputOutputStreamTarget(transcoder_id: string, output_id: string, stream_target_id: string): Observable<ShowTranscoderOutputOutputStreamTargetReturn> {
			return this.http.get<ShowTranscoderOutputOutputStreamTargetReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)), {});
		}

		/**
		 * Delete an output stream target
		 * This operation deletes an output stream target, including all of its assigned targets.
		 * Delete transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {void} 
		 */
		DeleteTranscoderOutputOutputStreamTarget(transcoder_id: string, output_id: string, stream_target_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an output stream target
		 * This operation updates an output stream target.
		 * Patch transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @param {Output_stream_target_update_input} requestBody Provide the details of the output stream target to update in the body of the request.
		 * @return {UpdateTranscoderOutputOutputStreamTargetReturn} Success
		 */
		UpdateTranscoderOutputOutputStreamTarget(transcoder_id: string, output_id: string, stream_target_id: string, requestBody: Output_stream_target_update_input): Observable<UpdateTranscoderOutputOutputStreamTargetReturn> {
			return this.http.patch<UpdateTranscoderOutputOutputStreamTargetReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable an output stream target
		 * This operation disables an output stream target.
		 * Put transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}/disable
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {DisableTranscoderOutputOutputStreamTargetReturn} Success
		 */
		DisableTranscoderOutputOutputStreamTarget(transcoder_id: string, output_id: string, stream_target_id: string): Observable<DisableTranscoderOutputOutputStreamTargetReturn> {
			return this.http.put<DisableTranscoderOutputOutputStreamTargetReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/disable', null, {});
		}

		/**
		 * Enable an output stream target
		 * This operation enables an output stream target.
		 * Put transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}/enable
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {EnableTranscoderOutputOutputStreamTargetReturn} Success
		 */
		EnableTranscoderOutputOutputStreamTarget(transcoder_id: string, output_id: string, stream_target_id: string): Observable<EnableTranscoderOutputOutputStreamTargetReturn> {
			return this.http.put<EnableTranscoderOutputOutputStreamTargetReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/enable', null, {});
		}

		/**
		 * Restart an output stream target
		 * This operation restarts an output stream target.
		 * Put transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{stream_target_id}/restart
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} output_id The unique alphanumeric string that identifies the output rendition.
		 * @param {string} stream_target_id The unique alphanumeric string that identifies the stream target.
		 * @return {RestartTranscoderOutputOutputStreamTargetReturn} Success
		 */
		RestartTranscoderOutputOutputStreamTarget(transcoder_id: string, output_id: string, stream_target_id: string): Observable<RestartTranscoderOutputOutputStreamTargetReturn> {
			return this.http.put<RestartTranscoderOutputOutputStreamTargetReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/outputs/' + (output_id == null ? '' : encodeURIComponent(output_id)) + '/output_stream_targets/' + (stream_target_id == null ? '' : encodeURIComponent(stream_target_id)) + '/restart', null, {});
		}

		/**
		 * Fetch a transcoder's properties
		 * This operation shows all of the properties of a specific transcoder.
		 * Get transcoders/{transcoder_id}/properties
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @return {Transcoder_properties} Success
		 */
		ListTranscoderProperties(transcoder_id: string): Observable<Transcoder_properties> {
			return this.http.get<Transcoder_properties>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/properties', {});
		}

		/**
		 * Create a property for a transcoder
		 * This operation creates a property for a transcoder. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).
		 * Post transcoders/{transcoder_id}/properties
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {Transcoder_property_create_input} requestBody Provide the details of the property to create in the body of the request.
		 * @return {CreateTranscoderPropertyReturn} Success
		 */
		CreateTranscoderProperty(transcoder_id: string, requestBody: Transcoder_property_create_input): Observable<CreateTranscoderPropertyReturn> {
			return this.http.post<CreateTranscoderPropertyReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch a property for a transcoder
		 * This operation shows the details of a specific property for a specific transcoder.
		 * Get transcoders/{transcoder_id}/properties/{id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.
		 * @return {ShowTranscoderPropertyReturn} Success
		 */
		ShowTranscoderProperty(transcoder_id: string, id: string): Observable<ShowTranscoderPropertyReturn> {
			return this.http.get<ShowTranscoderPropertyReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/properties/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete a transcoder's property
		 * This operation deletes a specific property from a specific transcoder.
		 * Delete transcoders/{transcoder_id}/properties/{id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.
		 * @return {void} 
		 */
		DeleteTranscoderProperty(transcoder_id: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/properties/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch all uptime records for a transcoder
		 * This operation shows all of the uptime records for a specific transcoder. An <em>uptime record</em> identifies a specific transcoding session.
		 * Get transcoders/{transcoder_id}/uptimes
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {number} page Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Uptimes} Success
		 */
		IndexUptimes(transcoder_id: string, page: number | null | undefined, per_page: number | null | undefined): Observable<Uptimes> {
			return this.http.get<Uptimes>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/uptimes&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Fetch an uptime record
		 * This operation shows the details of a specific uptime record for a specific transcoder. An <em>uptime record</em> identifies a transcoding session.
		 * Get transcoders/{transcoder_id}/uptimes/{id}
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the uptime record.
		 * @return {Uptime} Success
		 */
		ShowUptime(transcoder_id: string, id: string): Observable<Uptime> {
			return this.http.get<Uptime>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/uptimes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Fetch current stream health metrics for an active transcoder
		 * This operation returns a snapshot of the current source connection and processing details of an active (running) transcoder.
		 * Get transcoders/{transcoder_id}/uptimes/{id}/metrics/current
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the uptime record.
		 * @param {string} fields A comma-separated list of fields to return.
		 * @return {ShowUptimeMetricsCurrentReturn} Success
		 */
		ShowUptimeMetricsCurrent(transcoder_id: string, id: string, fields: string | null | undefined): Observable<ShowUptimeMetricsCurrentReturn> {
			return this.http.get<ShowUptimeMetricsCurrentReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/uptimes/' + (id == null ? '' : encodeURIComponent(id)) + '/metrics/current&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Fetch historic stream health metrics for a transcoder
		 * This operation shows the historic source connection and processing details for a transcoding session (uptime record). The transcoder can be running or stopped. Metrics are recorded every 20 seconds.
		 * Get transcoders/{transcoder_id}/uptimes/{id}/metrics/historic
		 * @param {string} transcoder_id The unique alphanumeric string that identifies the transcoder.
		 * @param {string} id The unique alphanumeric string that identifies the uptime record.
		 * @param {string} fields A comma-separated list of fields to return.
		 * @param {string} from The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
		 * @param {string} to The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
		 * @return {ShowUptimeMetricsHistoricReturn} Success
		 */
		ShowUptimeMetricsHistoric(transcoder_id: string, id: string, fields: string | null | undefined, from: string | null | undefined, to: string | null | undefined): Observable<ShowUptimeMetricsHistoricReturn> {
			return this.http.get<ShowUptimeMetricsHistoricReturn>(this.baseUri + 'transcoders/' + (transcoder_id == null ? '' : encodeURIComponent(transcoder_id)) + '/uptimes/' + (id == null ? '' : encodeURIComponent(id)) + '/metrics/historic&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), {});
		}

		/**
		 * Fetch network usage for all stream sources
		 * This operation shows the amount of network usage for all stream sources in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.
		 * Get usage/network/stream_sources
		 * @param {Date} from The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
		 * @param {Date} to The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
		 * @return {Usage_network_stream_sources} Success
		 */
		UsageNetworkStreamSourcesIndex(from: Date | null | undefined, to: Date | null | undefined): Observable<Usage_network_stream_sources> {
			return this.http.get<Usage_network_stream_sources>(this.baseUri + 'usage/network/stream_sources?from=' + from?.toISOString() + '&to=' + to?.toISOString(), {});
		}

		/**
		 * Fetch network usage for all stream targets
		 * This operation shows the amount of network usage for all stream targets in the account cumulatively and individually. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.
		 * Get usage/network/stream_targets
		 * @param {Date} from The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
		 * @param {Date} to The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
		 * @return {Usage_network_stream_targets} Success
		 */
		UsageNetworkStreamTargetsIndex(from: Date | null | undefined, to: Date | null | undefined): Observable<Usage_network_stream_targets> {
			return this.http.get<Usage_network_stream_targets>(this.baseUri + 'usage/network/stream_targets?from=' + from?.toISOString() + '&to=' + to?.toISOString(), {});
		}

		/**
		 * Fetch network usage for all transcoders
		 * This operation shows the amount of network usage (egress) for all transcoders in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.
		 * Get usage/network/transcoders
		 * @param {Date} from The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
		 * @param {Date} to The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
		 * @param {Live_streamTranscoder_type} transcoder_type The type of transcoder. The default is <strong>transcoded</strong>.
		 * @param {Live_streamBilling_mode} billing_mode The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
		 * @return {Usage_network_transcoders} Success
		 */
		UsageNetworkTranscodersIndex(from: Date | null | undefined, to: Date | null | undefined, transcoder_type: Live_streamTranscoder_type | null | undefined, billing_mode: Live_streamBilling_mode | null | undefined): Observable<Usage_network_transcoders> {
			return this.http.get<Usage_network_transcoders>(this.baseUri + 'usage/network/transcoders?from=' + from?.toISOString() + '&to=' + to?.toISOString() + '&transcoder_type=' + transcoder_type + '&billing_mode=' + billing_mode, {});
		}

		/**
		 * Fetch peak recording storage
		 * This operation shows the amount of peak recording storage used for the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.
		 * Get usage/storage/peak_recording
		 * @param {Date} from The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
		 * @param {Date} to The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
		 * @return {Usage_storage_peak_recording} Success
		 */
		UsageStoragePeakRecordingIndex(from: Date | null | undefined, to: Date | null | undefined): Observable<Usage_storage_peak_recording> {
			return this.http.get<Usage_storage_peak_recording>(this.baseUri + 'usage/storage/peak_recording?from=' + from?.toISOString() + '&to=' + to?.toISOString(), {});
		}

		/**
		 * Fetch stream processing time
		 * This operation shows the amount of stream processing time used by all transcoders in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.
		 * Get usage/time/transcoders
		 * @param {Date} from The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
		 * @param {Date} to The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
		 * @param {Live_streamTranscoder_type} transcoder_type The type of transcoder. The default is <strong>transcoded</strong>.
		 * @param {Live_streamBilling_mode} billing_mode The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
		 * @return {Usage_time_transcoders} Success
		 */
		UsageTimeTranscodersIndex(from: Date | null | undefined, to: Date | null | undefined, transcoder_type: Live_streamTranscoder_type | null | undefined, billing_mode: Live_streamBilling_mode | null | undefined): Observable<Usage_time_transcoders> {
			return this.http.get<Usage_time_transcoders>(this.baseUri + 'usage/time/transcoders?from=' + from?.toISOString() + '&to=' + to?.toISOString() + '&transcoder_type=' + transcoder_type + '&billing_mode=' + billing_mode, {});
		}

		/**
		 * Fetch viewer data for a stream target
		 * This operation shows viewer data for a specific stream target. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.
		 * Get usage/viewer_data/stream_targets/{id}
		 * @param {string} id The unique alphanumeric string that identifies the stream target.
		 * @param {Date} from The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
		 * @param {Date} to The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
		 * @return {Usage_viewer_data_stream_target} Success
		 */
		ShowViewerDataStreamTarget(id: string, from: Date | null | undefined, to: Date | null | undefined): Observable<Usage_viewer_data_stream_target> {
			return this.http.get<Usage_viewer_data_stream_target>(this.baseUri + 'usage/viewer_data/stream_targets/' + (id == null ? '' : encodeURIComponent(id)) + '&from=' + from?.toISOString() + '&to=' + to?.toISOString(), {});
		}
	}

	export interface CreateLiveStreamReturn {

		/** Required */
		live_stream: Live_stream;
	}
	export interface CreateLiveStreamReturnFormProperties {
	}
	export function CreateCreateLiveStreamReturnFormGroup() {
		return new FormGroup<CreateLiveStreamReturnFormProperties>({
		});

	}

	export interface ShowLiveStreamReturn {

		/** Required */
		live_stream: Live_stream;
	}
	export interface ShowLiveStreamReturnFormProperties {
	}
	export function CreateShowLiveStreamReturnFormGroup() {
		return new FormGroup<ShowLiveStreamReturnFormProperties>({
		});

	}

	export interface UpdateLiveStreamReturn {

		/** Required */
		live_stream: Live_stream;
	}
	export interface UpdateLiveStreamReturnFormProperties {
	}
	export function CreateUpdateLiveStreamReturnFormGroup() {
		return new FormGroup<UpdateLiveStreamReturnFormProperties>({
		});

	}

	export interface RegenerateConnectionCodeLiveStreamReturn {

		/** Required */
		live_stream: RegenerateConnectionCodeLiveStreamReturnLive_stream;
	}
	export interface RegenerateConnectionCodeLiveStreamReturnFormProperties {
	}
	export function CreateRegenerateConnectionCodeLiveStreamReturnFormGroup() {
		return new FormGroup<RegenerateConnectionCodeLiveStreamReturnFormProperties>({
		});

	}

	export interface RegenerateConnectionCodeLiveStreamReturnLive_stream {

		/** A six-character, alphanumeric string that allows certain encoders, including Wowza Streaming Engine and the Wowza GoCoder app, to connect with Wowza Streaming Cloud. The code can be used once and expires 24 hours after it's created. */
		connection_code?: string | null;
	}
	export interface RegenerateConnectionCodeLiveStreamReturnLive_streamFormProperties {

		/** A six-character, alphanumeric string that allows certain encoders, including Wowza Streaming Engine and the Wowza GoCoder app, to connect with Wowza Streaming Cloud. The code can be used once and expires 24 hours after it's created. */
		connection_code: FormControl<string | null | undefined>,
	}
	export function CreateRegenerateConnectionCodeLiveStreamReturnLive_streamFormGroup() {
		return new FormGroup<RegenerateConnectionCodeLiveStreamReturnLive_streamFormProperties>({
			connection_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetLiveStreamReturn {

		/** Required */
		live_stream: ResetLiveStreamReturnLive_stream;
	}
	export interface ResetLiveStreamReturnFormProperties {
	}
	export function CreateResetLiveStreamReturnFormGroup() {
		return new FormGroup<ResetLiveStreamReturnFormProperties>({
		});

	}

	export interface ResetLiveStreamReturnLive_stream {

		/** The state of the live stream. */
		state?: ResetLiveStreamReturnLive_streamState | null;
	}
	export interface ResetLiveStreamReturnLive_streamFormProperties {

		/** The state of the live stream. */
		state: FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>,
	}
	export function CreateResetLiveStreamReturnLive_streamFormGroup() {
		return new FormGroup<ResetLiveStreamReturnLive_streamFormProperties>({
			state: new FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>(undefined),
		});

	}

	export enum ResetLiveStreamReturnLive_streamState { started = 'started', stopped = 'stopped', starting = 'starting', stopping = 'stopping', resetting = 'resetting' }

	export interface StartLiveStreamReturn {

		/** Required */
		live_stream: StartLiveStreamReturnLive_stream;
	}
	export interface StartLiveStreamReturnFormProperties {
	}
	export function CreateStartLiveStreamReturnFormGroup() {
		return new FormGroup<StartLiveStreamReturnFormProperties>({
		});

	}

	export interface StartLiveStreamReturnLive_stream {

		/** The state of the live stream. */
		state?: ResetLiveStreamReturnLive_streamState | null;
	}
	export interface StartLiveStreamReturnLive_streamFormProperties {

		/** The state of the live stream. */
		state: FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>,
	}
	export function CreateStartLiveStreamReturnLive_streamFormGroup() {
		return new FormGroup<StartLiveStreamReturnLive_streamFormProperties>({
			state: new FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>(undefined),
		});

	}

	export interface ShowLiveStreamStateReturn {

		/** Required */
		live_stream: ShowLiveStreamStateReturnLive_stream;
	}
	export interface ShowLiveStreamStateReturnFormProperties {
	}
	export function CreateShowLiveStreamStateReturnFormGroup() {
		return new FormGroup<ShowLiveStreamStateReturnFormProperties>({
		});

	}

	export interface ShowLiveStreamStateReturnLive_stream {

		/** The state of the live stream. */
		state?: ResetLiveStreamReturnLive_streamState | null;
	}
	export interface ShowLiveStreamStateReturnLive_streamFormProperties {

		/** The state of the live stream. */
		state: FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>,
	}
	export function CreateShowLiveStreamStateReturnLive_streamFormGroup() {
		return new FormGroup<ShowLiveStreamStateReturnLive_streamFormProperties>({
			state: new FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>(undefined),
		});

	}

	export interface ShowLiveStreamStatsReturn {

		/** Required */
		live_stream: Shm_metrics;
	}
	export interface ShowLiveStreamStatsReturnFormProperties {
	}
	export function CreateShowLiveStreamStatsReturnFormGroup() {
		return new FormGroup<ShowLiveStreamStatsReturnFormProperties>({
		});

	}

	export interface StopLiveStreamReturn {

		/** Required */
		live_stream: StopLiveStreamReturnLive_stream;
	}
	export interface StopLiveStreamReturnFormProperties {
	}
	export function CreateStopLiveStreamReturnFormGroup() {
		return new FormGroup<StopLiveStreamReturnFormProperties>({
		});

	}

	export interface StopLiveStreamReturnLive_stream {

		/** The state of the live stream. */
		state?: ResetLiveStreamReturnLive_streamState | null;
	}
	export interface StopLiveStreamReturnLive_streamFormProperties {

		/** The state of the live stream. */
		state: FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>,
	}
	export function CreateStopLiveStreamReturnLive_streamFormGroup() {
		return new FormGroup<StopLiveStreamReturnLive_streamFormProperties>({
			state: new FormControl<ResetLiveStreamReturnLive_streamState | null | undefined>(undefined),
		});

	}

	export interface ShowLiveStreamThumbnailUrlReturn {

		/** Required */
		live_stream: ShowLiveStreamThumbnailUrlReturnLive_stream;
	}
	export interface ShowLiveStreamThumbnailUrlReturnFormProperties {
	}
	export function CreateShowLiveStreamThumbnailUrlReturnFormGroup() {
		return new FormGroup<ShowLiveStreamThumbnailUrlReturnFormProperties>({
		});

	}

	export interface ShowLiveStreamThumbnailUrlReturnLive_stream {

		/** The URL to receive the preview thumbnail. */
		thumbnail_url?: string | null;
	}
	export interface ShowLiveStreamThumbnailUrlReturnLive_streamFormProperties {

		/** The URL to receive the preview thumbnail. */
		thumbnail_url: FormControl<string | null | undefined>,
	}
	export function CreateShowLiveStreamThumbnailUrlReturnLive_streamFormGroup() {
		return new FormGroup<ShowLiveStreamThumbnailUrlReturnLive_streamFormProperties>({
			thumbnail_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShowPlayerReturn {

		/** Required */
		player: Player;
	}
	export interface ShowPlayerReturnFormProperties {
	}
	export function CreateShowPlayerReturnFormGroup() {
		return new FormGroup<ShowPlayerReturnFormProperties>({
		});

	}

	export interface UpdatePlayerReturn {

		/** Required */
		player: Player;
	}
	export interface UpdatePlayerReturnFormProperties {
	}
	export function CreateUpdatePlayerReturnFormGroup() {
		return new FormGroup<UpdatePlayerReturnFormProperties>({
		});

	}

	export interface RequestPlayerRebuildReturn {

		/** Required */
		player: RequestPlayerRebuildReturnPlayer;
	}
	export interface RequestPlayerRebuildReturnFormProperties {
	}
	export function CreateRequestPlayerRebuildReturnFormGroup() {
		return new FormGroup<RequestPlayerRebuildReturnFormProperties>({
		});

	}

	export interface RequestPlayerRebuildReturnPlayer {

		/** The state of the player. */
		state?: RequestPlayerRebuildReturnPlayerState | null;
	}
	export interface RequestPlayerRebuildReturnPlayerFormProperties {

		/** The state of the player. */
		state: FormControl<RequestPlayerRebuildReturnPlayerState | null | undefined>,
	}
	export function CreateRequestPlayerRebuildReturnPlayerFormGroup() {
		return new FormGroup<RequestPlayerRebuildReturnPlayerFormProperties>({
			state: new FormControl<RequestPlayerRebuildReturnPlayerState | null | undefined>(undefined),
		});

	}

	export enum RequestPlayerRebuildReturnPlayerState { requested = 'requested', already_requested = 'already_requested', activated = 'activated', archived = 'archived' }

	export interface ShowPlayerStateReturn {

		/** Required */
		player: ShowPlayerStateReturnPlayer;
	}
	export interface ShowPlayerStateReturnFormProperties {
	}
	export function CreateShowPlayerStateReturnFormGroup() {
		return new FormGroup<ShowPlayerStateReturnFormProperties>({
		});

	}

	export interface ShowPlayerStateReturnPlayer {

		/** The state of the player. */
		state?: RequestPlayerRebuildReturnPlayerState | null;
	}
	export interface ShowPlayerStateReturnPlayerFormProperties {

		/** The state of the player. */
		state: FormControl<RequestPlayerRebuildReturnPlayerState | null | undefined>,
	}
	export function CreateShowPlayerStateReturnPlayerFormGroup() {
		return new FormGroup<ShowPlayerStateReturnPlayerFormProperties>({
			state: new FormControl<RequestPlayerRebuildReturnPlayerState | null | undefined>(undefined),
		});

	}

	export interface CreatePlayerUrlReturn {

		/** Required */
		url: Url;
	}
	export interface CreatePlayerUrlReturnFormProperties {
	}
	export function CreateCreatePlayerUrlReturnFormGroup() {
		return new FormGroup<CreatePlayerUrlReturnFormProperties>({
		});

	}

	export interface ShowPlayerUrlReturn {

		/** Required */
		url: Url;
	}
	export interface ShowPlayerUrlReturnFormProperties {
	}
	export function CreateShowPlayerUrlReturnFormGroup() {
		return new FormGroup<ShowPlayerUrlReturnFormProperties>({
		});

	}

	export interface UpdatePlayerUrlReturn {

		/** Required */
		url: Url;
	}
	export interface UpdatePlayerUrlReturnFormProperties {
	}
	export function CreateUpdatePlayerUrlReturnFormGroup() {
		return new FormGroup<UpdatePlayerUrlReturnFormProperties>({
		});

	}

	export interface ShowRecordingReturn {

		/** Required */
		recording: Recording;
	}
	export interface ShowRecordingReturnFormProperties {
	}
	export function CreateShowRecordingReturnFormGroup() {
		return new FormGroup<ShowRecordingReturnFormProperties>({
		});

	}

	export interface ShowRecordingStateReturn {

		/** Required */
		recording: ShowRecordingStateReturnRecording;
	}
	export interface ShowRecordingStateReturnFormProperties {
	}
	export function CreateShowRecordingStateReturnFormGroup() {
		return new FormGroup<ShowRecordingStateReturnFormProperties>({
		});

	}

	export interface ShowRecordingStateReturnRecording {

		/** The state of the recording. */
		state?: RecordingState | null;
	}
	export interface ShowRecordingStateReturnRecordingFormProperties {

		/** The state of the recording. */
		state: FormControl<RecordingState | null | undefined>,
	}
	export function CreateShowRecordingStateReturnRecordingFormGroup() {
		return new FormGroup<ShowRecordingStateReturnRecordingFormProperties>({
			state: new FormControl<RecordingState | null | undefined>(undefined),
		});

	}

	export interface CreateScheduleReturn {

		/** Required */
		schedule: Schedule;
	}
	export interface CreateScheduleReturnFormProperties {
	}
	export function CreateCreateScheduleReturnFormGroup() {
		return new FormGroup<CreateScheduleReturnFormProperties>({
		});

	}

	export interface ShowScheduleReturn {

		/** Required */
		schedule: Schedule;
	}
	export interface ShowScheduleReturnFormProperties {
	}
	export function CreateShowScheduleReturnFormGroup() {
		return new FormGroup<ShowScheduleReturnFormProperties>({
		});

	}

	export interface UpdateScheduleReturn {

		/** Required */
		schedule: Schedule;
	}
	export interface UpdateScheduleReturnFormProperties {
	}
	export function CreateUpdateScheduleReturnFormGroup() {
		return new FormGroup<UpdateScheduleReturnFormProperties>({
		});

	}

	export interface DisableScheduleReturn {

		/** Required */
		schedule: DisableScheduleReturnSchedule;
	}
	export interface DisableScheduleReturnFormProperties {
	}
	export function CreateDisableScheduleReturnFormGroup() {
		return new FormGroup<DisableScheduleReturnFormProperties>({
		});

	}

	export interface DisableScheduleReturnSchedule {

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state?: ScheduleState | null;
	}
	export interface DisableScheduleReturnScheduleFormProperties {

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state: FormControl<ScheduleState | null | undefined>,
	}
	export function CreateDisableScheduleReturnScheduleFormGroup() {
		return new FormGroup<DisableScheduleReturnScheduleFormProperties>({
			state: new FormControl<ScheduleState | null | undefined>(undefined),
		});

	}

	export interface EnableScheduleReturn {

		/** Required */
		schedule: EnableScheduleReturnSchedule;
	}
	export interface EnableScheduleReturnFormProperties {
	}
	export function CreateEnableScheduleReturnFormGroup() {
		return new FormGroup<EnableScheduleReturnFormProperties>({
		});

	}

	export interface EnableScheduleReturnSchedule {

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state?: ScheduleState | null;
	}
	export interface EnableScheduleReturnScheduleFormProperties {

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state: FormControl<ScheduleState | null | undefined>,
	}
	export function CreateEnableScheduleReturnScheduleFormGroup() {
		return new FormGroup<EnableScheduleReturnScheduleFormProperties>({
			state: new FormControl<ScheduleState | null | undefined>(undefined),
		});

	}

	export interface ShowScheduleStateReturn {

		/** Required */
		schedule: ShowScheduleStateReturnSchedule;
	}
	export interface ShowScheduleStateReturnFormProperties {
	}
	export function CreateShowScheduleStateReturnFormGroup() {
		return new FormGroup<ShowScheduleStateReturnFormProperties>({
		});

	}

	export interface ShowScheduleStateReturnSchedule {

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state?: ScheduleState | null;
	}
	export interface ShowScheduleStateReturnScheduleFormProperties {

		/** A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run. */
		state: FormControl<ScheduleState | null | undefined>,
	}
	export function CreateShowScheduleStateReturnScheduleFormGroup() {
		return new FormGroup<ShowScheduleStateReturnScheduleFormProperties>({
			state: new FormControl<ScheduleState | null | undefined>(undefined),
		});

	}

	export interface CreateStreamSourceReturn {

		/** Required */
		stream_source: Stream_source;
	}
	export interface CreateStreamSourceReturnFormProperties {
	}
	export function CreateCreateStreamSourceReturnFormGroup() {
		return new FormGroup<CreateStreamSourceReturnFormProperties>({
		});

	}

	export interface AddStreamSourceReturn {

		/** Required */
		stream_source: Stream_source;
	}
	export interface AddStreamSourceReturnFormProperties {
	}
	export function CreateAddStreamSourceReturnFormGroup() {
		return new FormGroup<AddStreamSourceReturnFormProperties>({
		});

	}

	export interface ShowStreamSourceReturn {

		/** Required */
		stream_source: Stream_source;
	}
	export interface ShowStreamSourceReturnFormProperties {
	}
	export function CreateShowStreamSourceReturnFormGroup() {
		return new FormGroup<ShowStreamSourceReturnFormProperties>({
		});

	}

	export interface UpdateStreamSourceReturn {

		/** Required */
		stream_source: Stream_source;
	}
	export interface UpdateStreamSourceReturnFormProperties {
	}
	export function CreateUpdateStreamSourceReturnFormGroup() {
		return new FormGroup<UpdateStreamSourceReturnFormProperties>({
		});

	}

	export interface CreateStreamTargetReturn {

		/** Required */
		stream_target: Stream_target;
	}
	export interface CreateStreamTargetReturnFormProperties {
	}
	export function CreateCreateStreamTargetReturnFormGroup() {
		return new FormGroup<CreateStreamTargetReturnFormProperties>({
		});

	}

	export interface AddStreamTargetReturn {

		/** Required */
		stream_target: Stream_target;
	}
	export interface AddStreamTargetReturnFormProperties {
	}
	export function CreateAddStreamTargetReturnFormGroup() {
		return new FormGroup<AddStreamTargetReturnFormProperties>({
		});

	}

	export interface ShowStreamTargetReturn {

		/** Required */
		stream_target: Stream_target;
	}
	export interface ShowStreamTargetReturnFormProperties {
	}
	export function CreateShowStreamTargetReturnFormGroup() {
		return new FormGroup<ShowStreamTargetReturnFormProperties>({
		});

	}

	export interface UpdateStreamTargetReturn {

		/** Required */
		stream_target: Stream_target;
	}
	export interface UpdateStreamTargetReturnFormProperties {
	}
	export function CreateUpdateStreamTargetReturnFormGroup() {
		return new FormGroup<UpdateStreamTargetReturnFormProperties>({
		});

	}

	export interface ShowStreamTargetMetricsCurrentReturn {

		/** The unique alphanumeric string that identifies the stream target. */
		id?: string | null;
		metrics?: Stream_target_metrics;
	}
	export interface ShowStreamTargetMetricsCurrentReturnFormProperties {

		/** The unique alphanumeric string that identifies the stream target. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateShowStreamTargetMetricsCurrentReturnFormGroup() {
		return new FormGroup<ShowStreamTargetMetricsCurrentReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShowStreamTargetMetricsHistoricInterval { second = 'second', minute = 'minute', hour = 'hour', day = 'day', month = 'month', '#s' = '#s', '#m' = '#m', '#h' = '#h', '#d' = '#d' }

	export interface ShowStreamTargetMetricsHistoricReturn {

		/** The unique alphanumeric string that identifies the stream target. */
		id?: string | null;

		/** The length of time for a block of metrics. The default is **10m** (10 minutes). */
		interval?: string | null;
		metrics?: Array<Stream_target_metrics>;
	}
	export interface ShowStreamTargetMetricsHistoricReturnFormProperties {

		/** The unique alphanumeric string that identifies the stream target. */
		id: FormControl<string | null | undefined>,

		/** The length of time for a block of metrics. The default is **10m** (10 minutes). */
		interval: FormControl<string | null | undefined>,
	}
	export function CreateShowStreamTargetMetricsHistoricReturnFormGroup() {
		return new FormGroup<ShowStreamTargetMetricsHistoricReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegenerateConnectionCodeStreamTargetReturn {

		/** Required */
		stream_target: RegenerateConnectionCodeStreamTargetReturnStream_target;
	}
	export interface RegenerateConnectionCodeStreamTargetReturnFormProperties {
	}
	export function CreateRegenerateConnectionCodeStreamTargetReturnFormGroup() {
		return new FormGroup<RegenerateConnectionCodeStreamTargetReturnFormProperties>({
		});

	}

	export interface RegenerateConnectionCodeStreamTargetReturnStream_target {

		/** A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created. */
		connection_code?: string | null;
	}
	export interface RegenerateConnectionCodeStreamTargetReturnStream_targetFormProperties {

		/** A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created. */
		connection_code: FormControl<string | null | undefined>,
	}
	export function CreateRegenerateConnectionCodeStreamTargetReturnStream_targetFormGroup() {
		return new FormGroup<RegenerateConnectionCodeStreamTargetReturnStream_targetFormProperties>({
			connection_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShowStreamTargetGeoblockReturn {

		/** Required */
		geoblock: Geoblock;
	}
	export interface ShowStreamTargetGeoblockReturnFormProperties {
	}
	export function CreateShowStreamTargetGeoblockReturnFormGroup() {
		return new FormGroup<ShowStreamTargetGeoblockReturnFormProperties>({
		});

	}

	export interface CreateStreamTargetGeoblockReturn {

		/** Required */
		geoblock: Geoblock;
	}
	export interface CreateStreamTargetGeoblockReturnFormProperties {
	}
	export function CreateCreateStreamTargetGeoblockReturnFormGroup() {
		return new FormGroup<CreateStreamTargetGeoblockReturnFormProperties>({
		});

	}

	export interface UpdateStreamTargetGeoblockReturn {

		/** Required */
		geoblock: Geoblock;
	}
	export interface UpdateStreamTargetGeoblockReturnFormProperties {
	}
	export function CreateUpdateStreamTargetGeoblockReturnFormGroup() {
		return new FormGroup<UpdateStreamTargetGeoblockReturnFormProperties>({
		});

	}

	export interface CreateStreamTargetPropertyReturn {

		/** Required */
		property: Stream_target_property;
	}
	export interface CreateStreamTargetPropertyReturnFormProperties {
	}
	export function CreateCreateStreamTargetPropertyReturnFormGroup() {
		return new FormGroup<CreateStreamTargetPropertyReturnFormProperties>({
		});

	}

	export interface ShowStreamTargetPropertyReturn {

		/** Required */
		property: Stream_target_property;
	}
	export interface ShowStreamTargetPropertyReturnFormProperties {
	}
	export function CreateShowStreamTargetPropertyReturnFormGroup() {
		return new FormGroup<ShowStreamTargetPropertyReturnFormProperties>({
		});

	}

	export interface ShowStreamTargetTokenAuthReturn {

		/** Required */
		token_auth: Token_auth;
	}
	export interface ShowStreamTargetTokenAuthReturnFormProperties {
	}
	export function CreateShowStreamTargetTokenAuthReturnFormGroup() {
		return new FormGroup<ShowStreamTargetTokenAuthReturnFormProperties>({
		});

	}

	export interface CreateStreamTargetTokenAuthReturn {

		/** Required */
		token_auth: Token_auth;
	}
	export interface CreateStreamTargetTokenAuthReturnFormProperties {
	}
	export function CreateCreateStreamTargetTokenAuthReturnFormGroup() {
		return new FormGroup<CreateStreamTargetTokenAuthReturnFormProperties>({
		});

	}

	export interface UpdateStreamTargetTokenAuthReturn {

		/** Required */
		token_auth: Token_auth;
	}
	export interface UpdateStreamTargetTokenAuthReturnFormProperties {
	}
	export function CreateUpdateStreamTargetTokenAuthReturnFormGroup() {
		return new FormGroup<UpdateStreamTargetTokenAuthReturnFormProperties>({
		});

	}

	export interface CreateTranscoderReturn {

		/** Required */
		transcoder: Transcoder;
	}
	export interface CreateTranscoderReturnFormProperties {
	}
	export function CreateCreateTranscoderReturnFormGroup() {
		return new FormGroup<CreateTranscoderReturnFormProperties>({
		});

	}

	export interface ShowTranscoderReturn {

		/** Required */
		transcoder: Transcoder;
	}
	export interface ShowTranscoderReturnFormProperties {
	}
	export function CreateShowTranscoderReturnFormGroup() {
		return new FormGroup<ShowTranscoderReturnFormProperties>({
		});

	}

	export interface UpdateTranscoderReturn {

		/** Required */
		transcoder: Transcoder;
	}
	export interface UpdateTranscoderReturnFormProperties {
	}
	export function CreateUpdateTranscoderReturnFormGroup() {
		return new FormGroup<UpdateTranscoderReturnFormProperties>({
		});

	}

	export interface DisableAllStreamTargetsTranscoderReturn {

		/** Required */
		transcoder: DisableAllStreamTargetsTranscoderReturnTranscoder;
	}
	export interface DisableAllStreamTargetsTranscoderReturnFormProperties {
	}
	export function CreateDisableAllStreamTargetsTranscoderReturnFormGroup() {
		return new FormGroup<DisableAllStreamTargetsTranscoderReturnFormProperties>({
		});

	}

	export interface DisableAllStreamTargetsTranscoderReturnTranscoder {

		/** Required */
		stream_targets: DisableAllStreamTargetsTranscoderReturnTranscoderStream_targets;
	}
	export interface DisableAllStreamTargetsTranscoderReturnTranscoderFormProperties {
	}
	export function CreateDisableAllStreamTargetsTranscoderReturnTranscoderFormGroup() {
		return new FormGroup<DisableAllStreamTargetsTranscoderReturnTranscoderFormProperties>({
		});

	}

	export interface DisableAllStreamTargetsTranscoderReturnTranscoderStream_targets {

		/** The state of the transcoder's stream targets. */
		state?: DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsState | null;
	}
	export interface DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsFormProperties {

		/** The state of the transcoder's stream targets. */
		state: FormControl<DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsState | null | undefined>,
	}
	export function CreateDisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsFormGroup() {
		return new FormGroup<DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsFormProperties>({
			state: new FormControl<DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsState | null | undefined>(undefined),
		});

	}

	export enum DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsState { enabled = 'enabled', disabled = 'disabled' }

	export interface EnableAllStreamTargetsTranscoderReturn {

		/** Required */
		transcoder: EnableAllStreamTargetsTranscoderReturnTranscoder;
	}
	export interface EnableAllStreamTargetsTranscoderReturnFormProperties {
	}
	export function CreateEnableAllStreamTargetsTranscoderReturnFormGroup() {
		return new FormGroup<EnableAllStreamTargetsTranscoderReturnFormProperties>({
		});

	}

	export interface EnableAllStreamTargetsTranscoderReturnTranscoder {

		/** Required */
		stream_targets: EnableAllStreamTargetsTranscoderReturnTranscoderStream_targets;
	}
	export interface EnableAllStreamTargetsTranscoderReturnTranscoderFormProperties {
	}
	export function CreateEnableAllStreamTargetsTranscoderReturnTranscoderFormGroup() {
		return new FormGroup<EnableAllStreamTargetsTranscoderReturnTranscoderFormProperties>({
		});

	}

	export interface EnableAllStreamTargetsTranscoderReturnTranscoderStream_targets {

		/** The state of the transcoder's stream targets. */
		state?: DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsState | null;
	}
	export interface EnableAllStreamTargetsTranscoderReturnTranscoderStream_targetsFormProperties {

		/** The state of the transcoder's stream targets. */
		state: FormControl<DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsState | null | undefined>,
	}
	export function CreateEnableAllStreamTargetsTranscoderReturnTranscoderStream_targetsFormGroup() {
		return new FormGroup<EnableAllStreamTargetsTranscoderReturnTranscoderStream_targetsFormProperties>({
			state: new FormControl<DisableAllStreamTargetsTranscoderReturnTranscoderStream_targetsState | null | undefined>(undefined),
		});

	}

	export interface ListTranscoderRecordingsReturn {

		/** Required */
		transcoder: ListTranscoderRecordingsReturnTranscoder;
	}
	export interface ListTranscoderRecordingsReturnFormProperties {
	}
	export function CreateListTranscoderRecordingsReturnFormGroup() {
		return new FormGroup<ListTranscoderRecordingsReturnFormProperties>({
		});

	}

	export interface ListTranscoderRecordingsReturnTranscoder {

		/** Array of recordings of this transcoder. See /recordings for more details. */
		recordings?: Array<Recording>;
	}
	export interface ListTranscoderRecordingsReturnTranscoderFormProperties {
	}
	export function CreateListTranscoderRecordingsReturnTranscoderFormGroup() {
		return new FormGroup<ListTranscoderRecordingsReturnTranscoderFormProperties>({
		});

	}

	export interface ResetTranscoderReturn {

		/** Required */
		transcoder: ResetTranscoderReturnTranscoder;
	}
	export interface ResetTranscoderReturnFormProperties {
	}
	export function CreateResetTranscoderReturnFormGroup() {
		return new FormGroup<ResetTranscoderReturnFormProperties>({
		});

	}

	export interface ResetTranscoderReturnTranscoder {

		/** The state of the transcoder. */
		state?: ResetTranscoderReturnTranscoderState | null;
	}
	export interface ResetTranscoderReturnTranscoderFormProperties {

		/** The state of the transcoder. */
		state: FormControl<ResetTranscoderReturnTranscoderState | null | undefined>,
	}
	export function CreateResetTranscoderReturnTranscoderFormGroup() {
		return new FormGroup<ResetTranscoderReturnTranscoderFormProperties>({
			state: new FormControl<ResetTranscoderReturnTranscoderState | null | undefined>(undefined),
		});

	}

	export enum ResetTranscoderReturnTranscoderState { starting = 'starting', stopping = 'stopping', started = 'started', stopped = 'stopped', resetting = 'resetting' }

	export interface ListTranscoderSchedulesReturn {

		/** Required */
		transcoder: ListTranscoderSchedulesReturnTranscoder;
	}
	export interface ListTranscoderSchedulesReturnFormProperties {
	}
	export function CreateListTranscoderSchedulesReturnFormGroup() {
		return new FormGroup<ListTranscoderSchedulesReturnFormProperties>({
		});

	}

	export interface ListTranscoderSchedulesReturnTranscoder {

		/** Array of schedules of this transcoder. See /schedules for more details. */
		schedules?: Array<Schedule>;
	}
	export interface ListTranscoderSchedulesReturnTranscoderFormProperties {
	}
	export function CreateListTranscoderSchedulesReturnTranscoderFormGroup() {
		return new FormGroup<ListTranscoderSchedulesReturnTranscoderFormProperties>({
		});

	}

	export interface StartTranscoderReturn {

		/** Required */
		transcoder: StartTranscoderReturnTranscoder;
	}
	export interface StartTranscoderReturnFormProperties {
	}
	export function CreateStartTranscoderReturnFormGroup() {
		return new FormGroup<StartTranscoderReturnFormProperties>({
		});

	}

	export interface StartTranscoderReturnTranscoder {

		/** The state of the transcoder. */
		state?: ResetTranscoderReturnTranscoderState | null;

		/** <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder. */
		transcoding_uptime_id?: string | null;
	}
	export interface StartTranscoderReturnTranscoderFormProperties {

		/** The state of the transcoder. */
		state: FormControl<ResetTranscoderReturnTranscoderState | null | undefined>,

		/** <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder. */
		transcoding_uptime_id: FormControl<string | null | undefined>,
	}
	export function CreateStartTranscoderReturnTranscoderFormGroup() {
		return new FormGroup<StartTranscoderReturnTranscoderFormProperties>({
			state: new FormControl<ResetTranscoderReturnTranscoderState | null | undefined>(undefined),
			transcoding_uptime_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShowTranscoderStateReturn {

		/** Required */
		transcoder: ShowTranscoderStateReturnTranscoder;
	}
	export interface ShowTranscoderStateReturnFormProperties {
	}
	export function CreateShowTranscoderStateReturnFormGroup() {
		return new FormGroup<ShowTranscoderStateReturnFormProperties>({
		});

	}

	export interface ShowTranscoderStateReturnTranscoder {

		/** The state of the transcoder. */
		state?: ResetTranscoderReturnTranscoderState | null;

		/** <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder. */
		transcoding_uptime_id?: string | null;

		/** The unique identifier associated with a specific uptime period of a transcoder. */
		uptime_id?: string | null;
	}
	export interface ShowTranscoderStateReturnTranscoderFormProperties {

		/** The state of the transcoder. */
		state: FormControl<ResetTranscoderReturnTranscoderState | null | undefined>,

		/** <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder. */
		transcoding_uptime_id: FormControl<string | null | undefined>,

		/** The unique identifier associated with a specific uptime period of a transcoder. */
		uptime_id: FormControl<string | null | undefined>,
	}
	export function CreateShowTranscoderStateReturnTranscoderFormGroup() {
		return new FormGroup<ShowTranscoderStateReturnTranscoderFormProperties>({
			state: new FormControl<ResetTranscoderReturnTranscoderState | null | undefined>(undefined),
			transcoding_uptime_id: new FormControl<string | null | undefined>(undefined),
			uptime_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShowTranscoderStatsReturn {

		/** Required */
		transcoder: Shm_metrics;
	}
	export interface ShowTranscoderStatsReturnFormProperties {
	}
	export function CreateShowTranscoderStatsReturnFormGroup() {
		return new FormGroup<ShowTranscoderStatsReturnFormProperties>({
		});

	}

	export interface StopTranscoderReturn {

		/** Required */
		transcoder: StopTranscoderReturnTranscoder;
	}
	export interface StopTranscoderReturnFormProperties {
	}
	export function CreateStopTranscoderReturnFormGroup() {
		return new FormGroup<StopTranscoderReturnFormProperties>({
		});

	}

	export interface StopTranscoderReturnTranscoder {

		/** The state of the transcoder. */
		state?: ResetTranscoderReturnTranscoderState | null;

		/** <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder. */
		transcoding_uptime_id?: string | null;
	}
	export interface StopTranscoderReturnTranscoderFormProperties {

		/** The state of the transcoder. */
		state: FormControl<ResetTranscoderReturnTranscoderState | null | undefined>,

		/** <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder. */
		transcoding_uptime_id: FormControl<string | null | undefined>,
	}
	export function CreateStopTranscoderReturnTranscoderFormGroup() {
		return new FormGroup<StopTranscoderReturnTranscoderFormProperties>({
			state: new FormControl<ResetTranscoderReturnTranscoderState | null | undefined>(undefined),
			transcoding_uptime_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShowTranscoderThumbnailUrlReturn {

		/** Required */
		transcoder: ShowTranscoderThumbnailUrlReturnTranscoder;
	}
	export interface ShowTranscoderThumbnailUrlReturnFormProperties {
	}
	export function CreateShowTranscoderThumbnailUrlReturnFormGroup() {
		return new FormGroup<ShowTranscoderThumbnailUrlReturnFormProperties>({
		});

	}

	export interface ShowTranscoderThumbnailUrlReturnTranscoder {

		/** The URL to receive the preview thumbnail. */
		thumbnail_url?: string | null;
	}
	export interface ShowTranscoderThumbnailUrlReturnTranscoderFormProperties {

		/** The URL to receive the preview thumbnail. */
		thumbnail_url: FormControl<string | null | undefined>,
	}
	export function CreateShowTranscoderThumbnailUrlReturnTranscoderFormGroup() {
		return new FormGroup<ShowTranscoderThumbnailUrlReturnTranscoderFormProperties>({
			thumbnail_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTranscoderOutputReturn {

		/** Required */
		output: Output;
	}
	export interface CreateTranscoderOutputReturnFormProperties {
	}
	export function CreateCreateTranscoderOutputReturnFormGroup() {
		return new FormGroup<CreateTranscoderOutputReturnFormProperties>({
		});

	}

	export interface ShowTranscoderOutputReturn {

		/** Required */
		output: Output;
	}
	export interface ShowTranscoderOutputReturnFormProperties {
	}
	export function CreateShowTranscoderOutputReturnFormGroup() {
		return new FormGroup<ShowTranscoderOutputReturnFormProperties>({
		});

	}

	export interface UpdateTranscoderOutputReturn {

		/** Required */
		output: Output;
	}
	export interface UpdateTranscoderOutputReturnFormProperties {
	}
	export function CreateUpdateTranscoderOutputReturnFormGroup() {
		return new FormGroup<UpdateTranscoderOutputReturnFormProperties>({
		});

	}

	export interface AddStreamTargetToTranscoderOutputReturn {

		/** Required */
		output_stream_target: Output_stream_target;
	}
	export interface AddStreamTargetToTranscoderOutputReturnFormProperties {
	}
	export function CreateAddStreamTargetToTranscoderOutputReturnFormGroup() {
		return new FormGroup<AddStreamTargetToTranscoderOutputReturnFormProperties>({
		});

	}

	export interface CreateTranscoderOutputOutputStreamTargetReturn {

		/** Required */
		output_stream_target: Output_stream_target;
	}
	export interface CreateTranscoderOutputOutputStreamTargetReturnFormProperties {
	}
	export function CreateCreateTranscoderOutputOutputStreamTargetReturnFormGroup() {
		return new FormGroup<CreateTranscoderOutputOutputStreamTargetReturnFormProperties>({
		});

	}

	export interface ShowTranscoderOutputOutputStreamTargetReturn {

		/** Required */
		output_stream_target: Output_stream_target;
	}
	export interface ShowTranscoderOutputOutputStreamTargetReturnFormProperties {
	}
	export function CreateShowTranscoderOutputOutputStreamTargetReturnFormGroup() {
		return new FormGroup<ShowTranscoderOutputOutputStreamTargetReturnFormProperties>({
		});

	}

	export interface UpdateTranscoderOutputOutputStreamTargetReturn {

		/** Required */
		output_stream_target: Output_stream_target;
	}
	export interface UpdateTranscoderOutputOutputStreamTargetReturnFormProperties {
	}
	export function CreateUpdateTranscoderOutputOutputStreamTargetReturnFormGroup() {
		return new FormGroup<UpdateTranscoderOutputOutputStreamTargetReturnFormProperties>({
		});

	}

	export interface DisableTranscoderOutputOutputStreamTargetReturn {

		/** Required */
		stream_target: DisableTranscoderOutputOutputStreamTargetReturnStream_target;
	}
	export interface DisableTranscoderOutputOutputStreamTargetReturnFormProperties {
	}
	export function CreateDisableTranscoderOutputOutputStreamTargetReturnFormGroup() {
		return new FormGroup<DisableTranscoderOutputOutputStreamTargetReturnFormProperties>({
		});

	}

	export interface DisableTranscoderOutputOutputStreamTargetReturnStream_target {

		/** The state of the output stream target. */
		state?: DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null;
	}
	export interface DisableTranscoderOutputOutputStreamTargetReturnStream_targetFormProperties {

		/** The state of the output stream target. */
		state: FormControl<DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null | undefined>,
	}
	export function CreateDisableTranscoderOutputOutputStreamTargetReturnStream_targetFormGroup() {
		return new FormGroup<DisableTranscoderOutputOutputStreamTargetReturnStream_targetFormProperties>({
			state: new FormControl<DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null | undefined>(undefined),
		});

	}

	export enum DisableTranscoderOutputOutputStreamTargetReturnStream_targetState { enabled = 'enabled', disabled = 'disabled', restarted = 'restarted' }

	export interface EnableTranscoderOutputOutputStreamTargetReturn {

		/** Required */
		stream_target: EnableTranscoderOutputOutputStreamTargetReturnStream_target;
	}
	export interface EnableTranscoderOutputOutputStreamTargetReturnFormProperties {
	}
	export function CreateEnableTranscoderOutputOutputStreamTargetReturnFormGroup() {
		return new FormGroup<EnableTranscoderOutputOutputStreamTargetReturnFormProperties>({
		});

	}

	export interface EnableTranscoderOutputOutputStreamTargetReturnStream_target {

		/** The state of the output stream target. */
		state?: DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null;
	}
	export interface EnableTranscoderOutputOutputStreamTargetReturnStream_targetFormProperties {

		/** The state of the output stream target. */
		state: FormControl<DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null | undefined>,
	}
	export function CreateEnableTranscoderOutputOutputStreamTargetReturnStream_targetFormGroup() {
		return new FormGroup<EnableTranscoderOutputOutputStreamTargetReturnStream_targetFormProperties>({
			state: new FormControl<DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null | undefined>(undefined),
		});

	}

	export interface RestartTranscoderOutputOutputStreamTargetReturn {

		/** Required */
		stream_target: RestartTranscoderOutputOutputStreamTargetReturnStream_target;
	}
	export interface RestartTranscoderOutputOutputStreamTargetReturnFormProperties {
	}
	export function CreateRestartTranscoderOutputOutputStreamTargetReturnFormGroup() {
		return new FormGroup<RestartTranscoderOutputOutputStreamTargetReturnFormProperties>({
		});

	}

	export interface RestartTranscoderOutputOutputStreamTargetReturnStream_target {

		/** The state of the output stream target. */
		state?: DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null;
	}
	export interface RestartTranscoderOutputOutputStreamTargetReturnStream_targetFormProperties {

		/** The state of the output stream target. */
		state: FormControl<DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null | undefined>,
	}
	export function CreateRestartTranscoderOutputOutputStreamTargetReturnStream_targetFormGroup() {
		return new FormGroup<RestartTranscoderOutputOutputStreamTargetReturnStream_targetFormProperties>({
			state: new FormControl<DisableTranscoderOutputOutputStreamTargetReturnStream_targetState | null | undefined>(undefined),
		});

	}

	export interface CreateTranscoderPropertyReturn {

		/** Required */
		property: Transcoder_property;
	}
	export interface CreateTranscoderPropertyReturnFormProperties {
	}
	export function CreateCreateTranscoderPropertyReturnFormGroup() {
		return new FormGroup<CreateTranscoderPropertyReturnFormProperties>({
		});

	}

	export interface ShowTranscoderPropertyReturn {

		/** Required */
		property: Transcoder_property;
	}
	export interface ShowTranscoderPropertyReturnFormProperties {
	}
	export function CreateShowTranscoderPropertyReturnFormGroup() {
		return new FormGroup<ShowTranscoderPropertyReturnFormProperties>({
		});

	}

	export interface ShowUptimeMetricsCurrentReturn {

		/** Required */
		current: Shm_metrics;

		/** Required */
		limits: ShowUptimeMetricsCurrentReturnLimits;
	}
	export interface ShowUptimeMetricsCurrentReturnFormProperties {
	}
	export function CreateShowUptimeMetricsCurrentReturnFormGroup() {
		return new FormGroup<ShowUptimeMetricsCurrentReturnFormProperties>({
		});

	}

	export interface ShowUptimeMetricsCurrentReturnLimits {

		/**
		 * A comma-separated list of fields that were returned in the request.
		 * Required
		 */
		fields: string;
	}
	export interface ShowUptimeMetricsCurrentReturnLimitsFormProperties {

		/**
		 * A comma-separated list of fields that were returned in the request.
		 * Required
		 */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateShowUptimeMetricsCurrentReturnLimitsFormGroup() {
		return new FormGroup<ShowUptimeMetricsCurrentReturnLimitsFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShowUptimeMetricsHistoricReturn {

		/** Required */
		historic: Array<Shm_historic_metrics>;

		/** Required */
		limits: ShowUptimeMetricsHistoricReturnLimits;
	}
	export interface ShowUptimeMetricsHistoricReturnFormProperties {
	}
	export function CreateShowUptimeMetricsHistoricReturnFormGroup() {
		return new FormGroup<ShowUptimeMetricsHistoricReturnFormProperties>({
		});

	}

	export interface ShowUptimeMetricsHistoricReturnLimits {

		/**
		 * A comma-separated list of fields that were returned in the request.
		 * Required
		 */
		fields: string;

		/**
		 * The start of range of time when the metrics were aggregated for the query.
		 * Required
		 */
		from: Date;

		/**
		 * The end of the range of time when the metrics were aggregated for the query.
		 * Required
		 */
		to: Date;
	}
	export interface ShowUptimeMetricsHistoricReturnLimitsFormProperties {

		/**
		 * A comma-separated list of fields that were returned in the request.
		 * Required
		 */
		fields: FormControl<string | null | undefined>,

		/**
		 * The start of range of time when the metrics were aggregated for the query.
		 * Required
		 */
		from: FormControl<Date | null | undefined>,

		/**
		 * The end of the range of time when the metrics were aggregated for the query.
		 * Required
		 */
		to: FormControl<Date | null | undefined>,
	}
	export function CreateShowUptimeMetricsHistoricReturnLimitsFormGroup() {
		return new FormGroup<ShowUptimeMetricsHistoricReturnLimitsFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

}

