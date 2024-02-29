import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorModel {
		fault?: ErrorModelFault;
	}
	export interface ErrorModelFormProperties {
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
		});

	}

	export interface ErrorModelFault {
		detail?: ErrorModelFaultDetail;
		faultString?: string | null;
	}
	export interface ErrorModelFaultFormProperties {
		faultString: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelFaultFormGroup() {
		return new FormGroup<ErrorModelFaultFormProperties>({
			faultString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorModelFaultDetail {
		errorcode?: string | null;
	}
	export interface ErrorModelFaultDetailFormProperties {
		errorcode: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelFaultDetailFormGroup() {
		return new FormGroup<ErrorModelFaultDetailFormProperties>({
			errorcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accurate_programme_time {
		end?: Date | null;
		start?: Date | null;
	}
	export interface Accurate_programme_timeFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateAccurate_programme_timeFormGroup() {
		return new FormGroup<Accurate_programme_timeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Accurate_time extends DateRange {
		duration?: string | null;
	}
	export interface Accurate_timeFormProperties extends DateRangeFormProperties {
		duration: FormControl<string | null | undefined>,
	}
	export function CreateAccurate_timeFormGroup() {
		return new FormGroup<Accurate_timeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
		});

	}

	export interface Affected_by {
		Affected_byFilter?: Array<Affected_byFilter>;
	}
	export interface Affected_byFormProperties {
	}
	export function CreateAffected_byFormGroup() {
		return new FormGroup<Affected_byFormProperties>({
		});

	}

	export interface Affected_byFilter {

		/** Required */
		description: string;
		Affected_byFilterFilter?: Array<Affected_byFilterFilter>;

		/** Required */
		name: string;
	}
	export interface Affected_byFilterFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAffected_byFilterFormGroup() {
		return new FormGroup<Affected_byFilterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Affected_byFilterFilter {

		/** Required */
		description: string;

		/** Required */
		name: string;
	}
	export interface Affected_byFilterFilterFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAffected_byFilterFilterFormGroup() {
		return new FormGroup<Affected_byFilterFilterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Alternate_images_mixin {

		/** Required */
		alternate_images: Alternate_images_mixinAlternate_images;
	}
	export interface Alternate_images_mixinFormProperties {
	}
	export function CreateAlternate_images_mixinFormGroup() {
		return new FormGroup<Alternate_images_mixinFormProperties>({
		});

	}

	export interface Alternate_images_mixinAlternate_images {
		Alternate_images_mixinAlternate_imagesAlternate_image?: Array<Alternate_images_mixinAlternate_imagesAlternate_image>;
	}
	export interface Alternate_images_mixinAlternate_imagesFormProperties {
	}
	export function CreateAlternate_images_mixinAlternate_imagesFormGroup() {
		return new FormGroup<Alternate_images_mixinAlternate_imagesFormProperties>({
		});

	}

	export interface Alternate_images_mixinAlternate_imagesAlternate_image {

		/** Required */
		alternate_images: Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_images;
		href?: string | null;

		/** Required */
		template_url: string;
		type?: string | null;
	}
	export interface Alternate_images_mixinAlternate_imagesAlternate_imageFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		template_url: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAlternate_images_mixinAlternate_imagesAlternate_imageFormGroup() {
		return new FormGroup<Alternate_images_mixinAlternate_imagesAlternate_imageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			template_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_images {
		Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesAlternate_image?: Array<Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesAlternate_image>;
	}
	export interface Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesFormProperties {
	}
	export function CreateAlternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesFormGroup() {
		return new FormGroup<Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesFormProperties>({
		});

	}

	export interface Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesAlternate_image {
		href?: string | null;

		/** Required */
		template_url: string;
		type?: string | null;
	}
	export interface Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesAlternate_imageFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		template_url: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAlternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesAlternate_imageFormGroup() {
		return new FormGroup<Alternate_images_mixinAlternate_imagesAlternate_imageAlternate_imagesAlternate_imageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			template_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestor_titles {
		brand?: Ancestor_titlesBrand;
		episode?: Ancestor_titlesEpisode;

		/** Maximum items: 5 */
		Ancestor_titlesSeries?: Array<Ancestor_titlesSeries>;
	}
	export interface Ancestor_titlesFormProperties {
	}
	export function CreateAncestor_titlesFormGroup() {
		return new FormGroup<Ancestor_titlesFormProperties>({
		});

	}

	export interface Ancestor_titlesBrand {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestor_titlesBrandFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestor_titlesBrandFormGroup() {
		return new FormGroup<Ancestor_titlesBrandFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestor_titlesEpisode {
		brand?: Ancestor_titlesEpisodeBrand;
		containers_title?: string | null;
		episode?: Ancestor_titlesEpisodeEpisode;

		/** Required */
		pid: string;
		presentation_title?: string | null;

		/** Maximum items: 5 */
		Ancestor_titlesEpisodeSeries?: Array<Ancestor_titlesEpisodeSeries>;
		title?: string | null;
	}
	export interface Ancestor_titlesEpisodeFormProperties {
		containers_title: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		presentation_title: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestor_titlesEpisodeFormGroup() {
		return new FormGroup<Ancestor_titlesEpisodeFormProperties>({
			containers_title: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			presentation_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestor_titlesEpisodeBrand {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestor_titlesEpisodeBrandFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestor_titlesEpisodeBrandFormGroup() {
		return new FormGroup<Ancestor_titlesEpisodeBrandFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestor_titlesEpisodeEpisode {
		containers_title?: string | null;

		/** Required */
		pid: string;
		presentation_title?: string | null;
		title?: string | null;
	}
	export interface Ancestor_titlesEpisodeEpisodeFormProperties {
		containers_title: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		presentation_title: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestor_titlesEpisodeEpisodeFormGroup() {
		return new FormGroup<Ancestor_titlesEpisodeEpisodeFormProperties>({
			containers_title: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			presentation_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestor_titlesEpisodeSeries {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestor_titlesEpisodeSeriesFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestor_titlesEpisodeSeriesFormGroup() {
		return new FormGroup<Ancestor_titlesEpisodeSeriesFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestor_titlesSeries {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestor_titlesSeriesFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestor_titlesSeriesFormGroup() {
		return new FormGroup<Ancestor_titlesSeriesFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestors extends ReferenceAttributes {
		href_deprecated?: boolean | null;
		result_type_deprecated?: boolean | null;
	}
	export interface AncestorsFormProperties extends ReferenceAttributesFormProperties {
		href_deprecated: FormControl<boolean | null | undefined>,
		result_type_deprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateAncestorsFormGroup() {
		return new FormGroup<AncestorsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href_deprecated: new FormControl<boolean | null | undefined>(undefined),
			result_type_deprecated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Ancestors_titles {
		brand?: Ancestors_titlesBrand;
		episode?: Ancestors_titlesEpisode;

		/** Maximum items: 5 */
		Ancestors_titlesSeries?: Array<Ancestors_titlesSeries>;
	}
	export interface Ancestors_titlesFormProperties {
	}
	export function CreateAncestors_titlesFormGroup() {
		return new FormGroup<Ancestors_titlesFormProperties>({
		});

	}

	export interface Ancestors_titlesBrand {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestors_titlesBrandFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestors_titlesBrandFormGroup() {
		return new FormGroup<Ancestors_titlesBrandFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestors_titlesEpisode {
		brand?: Ancestors_titlesEpisodeBrand;
		containers_title?: string | null;
		episode?: Ancestors_titlesEpisodeEpisode;

		/** Required */
		pid: string;
		presentation_title?: string | null;

		/** Maximum items: 5 */
		Ancestors_titlesEpisodeSeries?: Array<Ancestors_titlesEpisodeSeries>;
		title?: string | null;
	}
	export interface Ancestors_titlesEpisodeFormProperties {
		containers_title: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		presentation_title: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestors_titlesEpisodeFormGroup() {
		return new FormGroup<Ancestors_titlesEpisodeFormProperties>({
			containers_title: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			presentation_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestors_titlesEpisodeBrand {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestors_titlesEpisodeBrandFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestors_titlesEpisodeBrandFormGroup() {
		return new FormGroup<Ancestors_titlesEpisodeBrandFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestors_titlesEpisodeEpisode {
		containers_title?: string | null;

		/** Required */
		pid: string;
		presentation_title?: string | null;
		title?: string | null;
	}
	export interface Ancestors_titlesEpisodeEpisodeFormProperties {
		containers_title: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		presentation_title: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestors_titlesEpisodeEpisodeFormGroup() {
		return new FormGroup<Ancestors_titlesEpisodeEpisodeFormProperties>({
			containers_title: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			presentation_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestors_titlesEpisodeSeries {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestors_titlesEpisodeSeriesFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestors_titlesEpisodeSeriesFormGroup() {
		return new FormGroup<Ancestors_titlesEpisodeSeriesFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ancestors_titlesSeries {

		/** Required */
		pid: string;
		title?: string | null;
	}
	export interface Ancestors_titlesSeriesFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAncestors_titlesSeriesFormGroup() {
		return new FormGroup<Ancestors_titlesSeriesFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Availability {
		accurate_programme_time?: DateRange;
		actual_start?: Date | null;
		'availability-debug'?: Availability_debug;
		availability_of?: Array<Availability_of>;

		/** Required */
		availability_type: AvailabilityAvailability_type;
		media_availability_time?: DateRange;
		media_set?: Array<string>;
		revocation_status?: string | null;
		scheduled_time?: Scheduled_time;

		/** Required */
		status: string;
	}
	export interface AvailabilityFormProperties {
		actual_start: FormControl<Date | null | undefined>,

		/** Required */
		availability_type: FormControl<AvailabilityAvailability_type | null | undefined>,
		revocation_status: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityFormGroup() {
		return new FormGroup<AvailabilityFormProperties>({
			actual_start: new FormControl<Date | null | undefined>(undefined),
			availability_type: new FormControl<AvailabilityAvailability_type | null | undefined>(undefined, [Validators.required]),
			revocation_status: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DateRange {
		end?: Date | null;
		start?: Date | null;
	}
	export interface DateRangeFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Availability_debug {

		/** Required */
		availability_of: PidReference;
		media_profile_groups?: Media_profile_groups;
		service?: ServiceReference;
		territory?: string | null;
	}
	export interface Availability_debugFormProperties {
		territory: FormControl<string | null | undefined>,
	}
	export function CreateAvailability_debugFormGroup() {
		return new FormGroup<Availability_debugFormProperties>({
			territory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PidReference {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface PidReferenceFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreatePidReferenceFormGroup() {
		return new FormGroup<PidReferenceFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Media_profile_groups {
		media_profile_group?: Array<Media_profile_group>;
	}
	export interface Media_profile_groupsFormProperties {
	}
	export function CreateMedia_profile_groupsFormGroup() {
		return new FormGroup<Media_profile_groupsFormProperties>({
		});

	}

	export interface Media_profile_group {
		'#text'?: string | null;
		context?: string | null;
		pid?: string | null;
		platform?: string | null;
		territory?: string | null;
		transport?: string | null;
	}
	export interface Media_profile_groupFormProperties {
		'#text': FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		territory: FormControl<string | null | undefined>,
		transport: FormControl<string | null | undefined>,
	}
	export function CreateMedia_profile_groupFormGroup() {
		return new FormGroup<Media_profile_groupFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			platform: new FormControl<string | null | undefined>(undefined),
			territory: new FormControl<string | null | undefined>(undefined),
			transport: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceReference {

		/** Required */
		href: string;

		/** Required */
		result_type: string;

		/** Required */
		sid: string;
	}
	export interface ServiceReferenceFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,

		/** Required */
		sid: FormControl<string | null | undefined>,
	}
	export function CreateServiceReferenceFormGroup() {
		return new FormGroup<ServiceReferenceFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Availability_of {

		/** Required */
		href: string;

		/** Required */
		pid: string;

		/** Required */
		result_type: string;
		type?: string | null;
	}
	export interface Availability_ofFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailability_ofFormGroup() {
		return new FormGroup<Availability_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AvailabilityAvailability_type { ondemand = 'ondemand', simulcast = 'simulcast', webcast = 'webcast' }

	export interface Scheduled_time {
		end?: Date | null;
		start?: Date | null;
	}
	export interface Scheduled_timeFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateScheduled_timeFormGroup() {
		return new FormGroup<Scheduled_timeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Availability_mixin {
		Availability_mixinAvailability?: Array<Availability_mixinAvailability>;
	}
	export interface Availability_mixinFormProperties {
	}
	export function CreateAvailability_mixinFormGroup() {
		return new FormGroup<Availability_mixinFormProperties>({
		});

	}

	export interface Availability_mixinAvailability {

		/** Required */
		status: string;

		/** Required */
		version_types: Availability_mixinAvailabilityVersion_types;
	}
	export interface Availability_mixinAvailabilityFormProperties {

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAvailability_mixinAvailabilityFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Availability_mixinAvailabilityVersion_types {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Availability_mixinAvailabilityVersion_typesVersion_type: Array<Availability_mixinAvailabilityVersion_typesVersion_type>;
	}
	export interface Availability_mixinAvailabilityVersion_typesFormProperties {
	}
	export function CreateAvailability_mixinAvailabilityVersion_typesFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityVersion_typesFormProperties>({
		});

	}

	export interface Availability_mixinAvailabilityVersion_typesVersion_type {
		end?: Date | null;
		id?: string | null;
		start?: Date | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Availability_mixinAvailabilityVersion_typesVersion_typeVersion_type: Array<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_type>;
	}
	export interface Availability_mixinAvailabilityVersion_typesVersion_typeFormProperties {
		end: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateAvailability_mixinAvailabilityVersion_typesVersion_typeFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityVersion_typesVersion_typeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_type {
		Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailability?: Array<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailability>;
		end?: Date | null;
		id?: string | null;
		start?: Date | null;
	}
	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeFormProperties {
		end: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateAvailability_mixinAvailabilityVersion_typesVersion_typeVersion_typeFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailability {

		/** Required */
		status: string;

		/** Required */
		version_types: Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_types;
	}
	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityFormProperties {

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAvailability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_types {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_type: Array<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_type>;
	}
	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesFormProperties {
	}
	export function CreateAvailability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesFormProperties>({
		});

	}

	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_type {
		end?: Date | null;
		id?: string | null;
		start?: Date | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeVersion_type: Array<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeVersion_type>;
	}
	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeFormProperties {
		end: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateAvailability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeVersion_type {
		end?: Date | null;
		id?: string | null;
		start?: Date | null;
	}
	export interface Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeVersion_typeFormProperties {
		end: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateAvailability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeVersion_typeFormGroup() {
		return new FormGroup<Availability_mixinAvailabilityVersion_typesVersion_typeVersion_typeAvailabilityVersion_typesVersion_typeVersion_typeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum Availability_type { ondemand = 'ondemand', simulcast = 'simulcast', webcast = 'webcast' }

	export interface Available_media_sets {
		media_sets?: Available_media_setsMedia_sets;
	}
	export interface Available_media_setsFormProperties {
	}
	export function CreateAvailable_media_setsFormGroup() {
		return new FormGroup<Available_media_setsFormProperties>({
		});

	}

	export interface Available_media_setsMedia_sets {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_media_setsMedia_setsMedia_set: Array<Available_media_setsMedia_setsMedia_set>;
	}
	export interface Available_media_setsMedia_setsFormProperties {
	}
	export function CreateAvailable_media_setsMedia_setsFormGroup() {
		return new FormGroup<Available_media_setsMedia_setsFormProperties>({
		});

	}

	export interface Available_media_setsMedia_setsMedia_set {
		'#text'?: string | null;
		media_sets?: Available_media_setsMedia_setsMedia_setMedia_sets;
	}
	export interface Available_media_setsMedia_setsMedia_setFormProperties {
		'#text': FormControl<string | null | undefined>,
	}
	export function CreateAvailable_media_setsMedia_setsMedia_setFormGroup() {
		return new FormGroup<Available_media_setsMedia_setsMedia_setFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Available_media_setsMedia_setsMedia_setMedia_sets {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_media_setsMedia_setsMedia_setMedia_setsMedia_set: Array<Available_media_setsMedia_setsMedia_setMedia_setsMedia_set>;
	}
	export interface Available_media_setsMedia_setsMedia_setMedia_setsFormProperties {
	}
	export function CreateAvailable_media_setsMedia_setsMedia_setMedia_setsFormGroup() {
		return new FormGroup<Available_media_setsMedia_setsMedia_setMedia_setsFormProperties>({
		});

	}

	export interface Available_media_setsMedia_setsMedia_setMedia_setsMedia_set {
		'#text'?: string | null;
	}
	export interface Available_media_setsMedia_setsMedia_setMedia_setsMedia_setFormProperties {
		'#text': FormControl<string | null | undefined>,
	}
	export function CreateAvailable_media_setsMedia_setsMedia_setMedia_setsMedia_setFormGroup() {
		return new FormGroup<Available_media_setsMedia_setsMedia_setMedia_setsMedia_setFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Available_mixins {

		/** Required */
		availabilities: Available_mixinsAvailabilities;
	}
	export interface Available_mixinsFormProperties {
	}
	export function CreateAvailable_mixinsFormGroup() {
		return new FormGroup<Available_mixinsFormProperties>({
		});

	}

	export interface Available_mixinsAvailabilities {

		/** Required */
		availabilities: Available_mixinsAvailabilitiesAvailabilities;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_mixinsAvailabilitiesAvailability: Array<Available_mixinsAvailabilitiesAvailability>;
		type?: string | null;
	}
	export interface Available_mixinsAvailabilitiesFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_mixinsAvailabilitiesFormGroup() {
		return new FormGroup<Available_mixinsAvailabilitiesFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Available_mixinsAvailabilitiesAvailabilities {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_mixinsAvailabilitiesAvailabilitiesAvailability: Array<Available_mixinsAvailabilitiesAvailabilitiesAvailability>;
		type?: string | null;
	}
	export interface Available_mixinsAvailabilitiesAvailabilitiesFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_mixinsAvailabilitiesAvailabilitiesFormGroup() {
		return new FormGroup<Available_mixinsAvailabilitiesAvailabilitiesFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Available_mixinsAvailabilitiesAvailabilitiesAvailability {
		accurate_end?: Date | null;
		accurate_start?: Date | null;

		/** Required */
		available_versions_media_sets: Available_versions_media_sets;
		media_availability_end?: Date | null;
		media_availability_start?: Date | null;
		payment_type?: string | null;
		scheduled_end?: Date | null;
		scheduled_start?: Date | null;
		status?: string | null;
		type?: string | null;
	}
	export interface Available_mixinsAvailabilitiesAvailabilitiesAvailabilityFormProperties {
		accurate_end: FormControl<Date | null | undefined>,
		accurate_start: FormControl<Date | null | undefined>,
		media_availability_end: FormControl<Date | null | undefined>,
		media_availability_start: FormControl<Date | null | undefined>,
		payment_type: FormControl<string | null | undefined>,
		scheduled_end: FormControl<Date | null | undefined>,
		scheduled_start: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_mixinsAvailabilitiesAvailabilitiesAvailabilityFormGroup() {
		return new FormGroup<Available_mixinsAvailabilitiesAvailabilitiesAvailabilityFormProperties>({
			accurate_end: new FormControl<Date | null | undefined>(undefined),
			accurate_start: new FormControl<Date | null | undefined>(undefined),
			media_availability_end: new FormControl<Date | null | undefined>(undefined),
			media_availability_start: new FormControl<Date | null | undefined>(undefined),
			payment_type: new FormControl<string | null | undefined>(undefined),
			scheduled_end: new FormControl<Date | null | undefined>(undefined),
			scheduled_start: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Available_versions_media_sets {
		media_sets?: Available_versions_media_setsMedia_sets;
	}
	export interface Available_versions_media_setsFormProperties {
	}
	export function CreateAvailable_versions_media_setsFormGroup() {
		return new FormGroup<Available_versions_media_setsFormProperties>({
		});

	}

	export interface Available_versions_media_setsMedia_sets {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_versions_media_setsMedia_setsMedia_set: Array<Available_versions_media_setsMedia_setsMedia_set>;
	}
	export interface Available_versions_media_setsMedia_setsFormProperties {
	}
	export function CreateAvailable_versions_media_setsMedia_setsFormGroup() {
		return new FormGroup<Available_versions_media_setsMedia_setsFormProperties>({
		});

	}

	export interface Available_versions_media_setsMedia_setsMedia_set {
		actual_start?: Date | null;

		/** Required */
		name: string;
		territories?: Available_versions_media_setsMedia_setsMedia_setTerritories;
	}
	export interface Available_versions_media_setsMedia_setsMedia_setFormProperties {
		actual_start: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_versions_media_setsMedia_setsMedia_setFormGroup() {
		return new FormGroup<Available_versions_media_setsMedia_setsMedia_setFormProperties>({
			actual_start: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Available_versions_media_setsMedia_setsMedia_setTerritories {
		media_sets?: Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_sets;
		territory?: Array<string>;
	}
	export interface Available_versions_media_setsMedia_setsMedia_setTerritoriesFormProperties {
	}
	export function CreateAvailable_versions_media_setsMedia_setsMedia_setTerritoriesFormGroup() {
		return new FormGroup<Available_versions_media_setsMedia_setsMedia_setTerritoriesFormProperties>({
		});

	}

	export interface Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_sets {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_set: Array<Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_set>;
	}
	export interface Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsFormProperties {
	}
	export function CreateAvailable_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsFormGroup() {
		return new FormGroup<Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsFormProperties>({
		});

	}

	export interface Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_set {
		actual_start?: Date | null;

		/** Required */
		name: string;
		territories?: Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setTerritories;
	}
	export interface Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setFormProperties {
		actual_start: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setFormGroup() {
		return new FormGroup<Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setFormProperties>({
			actual_start: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setTerritories {
		territory?: Array<string>;
	}
	export interface Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setTerritoriesFormProperties {
	}
	export function CreateAvailable_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setTerritoriesFormGroup() {
		return new FormGroup<Available_versions_media_setsMedia_setsMedia_setTerritoriesMedia_setsMedia_setTerritoriesFormProperties>({
		});

	}

	export interface Available_mixinsAvailabilitiesAvailability {
		accurate_end?: Date | null;
		accurate_start?: Date | null;

		/** Required */
		available_versions_media_sets: Available_versions_media_sets;
		media_availability_end?: Date | null;
		media_availability_start?: Date | null;
		payment_type?: string | null;
		scheduled_end?: Date | null;
		scheduled_start?: Date | null;
		status?: string | null;
		type?: string | null;
	}
	export interface Available_mixinsAvailabilitiesAvailabilityFormProperties {
		accurate_end: FormControl<Date | null | undefined>,
		accurate_start: FormControl<Date | null | undefined>,
		media_availability_end: FormControl<Date | null | undefined>,
		media_availability_start: FormControl<Date | null | undefined>,
		payment_type: FormControl<string | null | undefined>,
		scheduled_end: FormControl<Date | null | undefined>,
		scheduled_start: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_mixinsAvailabilitiesAvailabilityFormGroup() {
		return new FormGroup<Available_mixinsAvailabilitiesAvailabilityFormProperties>({
			accurate_end: new FormControl<Date | null | undefined>(undefined),
			accurate_start: new FormControl<Date | null | undefined>(undefined),
			media_availability_end: new FormControl<Date | null | undefined>(undefined),
			media_availability_start: new FormControl<Date | null | undefined>(undefined),
			payment_type: new FormControl<string | null | undefined>(undefined),
			scheduled_end: new FormControl<Date | null | undefined>(undefined),
			scheduled_start: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Available_simulcasts {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: number;

		/** Required */
		available_versions_element: Available_versions_element;
	}
	export interface Available_simulcastsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: FormControl<number | null | undefined>,
	}
	export function CreateAvailable_simulcastsFormGroup() {
		return new FormGroup<Available_simulcastsFormProperties>({
			available: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Available_versions_element {
		Available_versions_elementVersion?: Array<Available_versions_elementVersion>;
	}
	export interface Available_versions_elementFormProperties {
	}
	export function CreateAvailable_versions_elementFormGroup() {
		return new FormGroup<Available_versions_elementFormProperties>({
		});

	}

	export interface Available_versions_elementVersion {
		available_mixins?: Available_mixins;
		competition_warning?: boolean | null;
		duration?: string | null;
		guidance_warnings?: Guidance_warnings;
		pid?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_versions_elementVersionTypes: Array<Available_versions_elementVersionTypes>;
		Available_versions_elementVersionVersion?: Array<Available_versions_elementVersionVersion>;
	}
	export interface Available_versions_elementVersionFormProperties {
		competition_warning: FormControl<boolean | null | undefined>,
		duration: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_versions_elementVersionFormGroup() {
		return new FormGroup<Available_versions_elementVersionFormProperties>({
			competition_warning: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Guidance_warnings {
		warnings?: Guidance_warningsWarnings;
	}
	export interface Guidance_warningsFormProperties {
	}
	export function CreateGuidance_warningsFormGroup() {
		return new FormGroup<Guidance_warningsFormProperties>({
		});

	}

	export interface Guidance_warningsWarnings {
		warning_items?: Warning_items;
		warning_texts?: Warning_texts;
		warnings?: Guidance_warningsWarningsWarnings;
	}
	export interface Guidance_warningsWarningsFormProperties {
	}
	export function CreateGuidance_warningsWarningsFormGroup() {
		return new FormGroup<Guidance_warningsWarningsFormProperties>({
		});

	}

	export interface Warning_items {
		Warning_itemsWarning?: Array<Warning_itemsWarning>;
	}
	export interface Warning_itemsFormProperties {
	}
	export function CreateWarning_itemsFormGroup() {
		return new FormGroup<Warning_itemsFormProperties>({
		});

	}

	export interface Warning_itemsWarning {
		'#text'?: string | null;
		short_description?: string | null;
		Warning_itemsWarningWarning?: Array<Warning_itemsWarningWarning>;
		warning_code?: string | null;
	}
	export interface Warning_itemsWarningFormProperties {
		'#text': FormControl<string | null | undefined>,
		short_description: FormControl<string | null | undefined>,
		warning_code: FormControl<string | null | undefined>,
	}
	export function CreateWarning_itemsWarningFormGroup() {
		return new FormGroup<Warning_itemsWarningFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			short_description: new FormControl<string | null | undefined>(undefined),
			warning_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Warning_itemsWarningWarning {
		'#text'?: string | null;
		short_description?: string | null;
		warning_code?: string | null;
	}
	export interface Warning_itemsWarningWarningFormProperties {
		'#text': FormControl<string | null | undefined>,
		short_description: FormControl<string | null | undefined>,
		warning_code: FormControl<string | null | undefined>,
	}
	export function CreateWarning_itemsWarningWarningFormGroup() {
		return new FormGroup<Warning_itemsWarningWarningFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			short_description: new FormControl<string | null | undefined>(undefined),
			warning_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Warning_texts {
		Warning_textsWarning_text?: Array<Warning_textsWarning_text>;
	}
	export interface Warning_textsFormProperties {
	}
	export function CreateWarning_textsFormGroup() {
		return new FormGroup<Warning_textsFormProperties>({
		});

	}

	export interface Warning_textsWarning_text {
		'#text'?: string | null;
		length?: string | null;
		Warning_textsWarning_textWarning_text?: Array<Warning_textsWarning_textWarning_text>;
	}
	export interface Warning_textsWarning_textFormProperties {
		'#text': FormControl<string | null | undefined>,
		length: FormControl<string | null | undefined>,
	}
	export function CreateWarning_textsWarning_textFormGroup() {
		return new FormGroup<Warning_textsWarning_textFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Warning_textsWarning_textWarning_text {
		'#text'?: string | null;
		length?: string | null;
	}
	export interface Warning_textsWarning_textWarning_textFormProperties {
		'#text': FormControl<string | null | undefined>,
		length: FormControl<string | null | undefined>,
	}
	export function CreateWarning_textsWarning_textWarning_textFormGroup() {
		return new FormGroup<Warning_textsWarning_textWarning_textFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Guidance_warningsWarningsWarnings {
		warning_items?: Warning_items;
		warning_texts?: Warning_texts;
	}
	export interface Guidance_warningsWarningsWarningsFormProperties {
	}
	export function CreateGuidance_warningsWarningsWarningsFormGroup() {
		return new FormGroup<Guidance_warningsWarningsWarningsFormProperties>({
		});

	}

	export interface Available_versions_elementVersionTypes {
		type?: Array<string>;
	}
	export interface Available_versions_elementVersionTypesFormProperties {
	}
	export function CreateAvailable_versions_elementVersionTypesFormGroup() {
		return new FormGroup<Available_versions_elementVersionTypesFormProperties>({
		});

	}

	export interface Available_versions_elementVersionVersion {
		available_mixins?: Available_mixins;
		competition_warning?: boolean | null;
		duration?: string | null;
		guidance_warnings?: Guidance_warnings;
		pid?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Available_versions_elementVersionVersionTypes: Array<Available_versions_elementVersionVersionTypes>;
	}
	export interface Available_versions_elementVersionVersionFormProperties {
		competition_warning: FormControl<boolean | null | undefined>,
		duration: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
	}
	export function CreateAvailable_versions_elementVersionVersionFormGroup() {
		return new FormGroup<Available_versions_elementVersionVersionFormProperties>({
			competition_warning: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Available_versions_elementVersionVersionTypes {
		type?: Array<string>;
	}
	export interface Available_versions_elementVersionVersionTypesFormProperties {
	}
	export function CreateAvailable_versions_elementVersionVersionTypesFormGroup() {
		return new FormGroup<Available_versions_elementVersionVersionTypesFormProperties>({
		});

	}

	export interface Available_versions {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: number;

		/** Required */
		available_versions_element: Available_versions_element;
	}
	export interface Available_versionsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: FormControl<number | null | undefined>,
	}
	export function CreateAvailable_versionsFormGroup() {
		return new FormGroup<Available_versionsFormProperties>({
			available: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Available_webcasts {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: number;

		/** Required */
		available_versions_element: Available_versions_element;
	}
	export interface Available_webcastsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: FormControl<number | null | undefined>,
	}
	export function CreateAvailable_webcastsFormGroup() {
		return new FormGroup<Available_webcastsFormProperties>({
			available: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Brand {
		alternate_images_mixin?: Alternate_images_mixin;
		availability_mixin?: Availability_mixin;
		contributions_mixin?: Contributions_mixin;

		/** Required */
		embargoed: BrandEmbargoed;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expected_child_count?: number | null;
		franchises?: Reference;
		genre_groupings?: GenreGroupingsType;
		identifiers?: Identifiers;
		image_link?: Image_link;
		images_mixin?: Images_mixin;
		is_embeddable?: boolean | null;
		items_for?: Reference;
		master_brand_link?: Master_brand_link;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		previous_next_mixin?: Previous_next_mixin;
		programme_formats?: Programme_formats;
		programme_type?: Programme_type;
		related_links?: Related_links;
		release_date_group?: Release_date_group;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		uri?: string | null;
	}
	export interface BrandFormProperties {

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expected_child_count: FormControl<number | null | undefined>,
		is_embeddable: FormControl<boolean | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateBrandFormGroup() {
		return new FormGroup<BrandFormProperties>({
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			expected_child_count: new FormControl<number | null | undefined>(undefined),
			is_embeddable: new FormControl<boolean | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin {

		/** Required */
		contributions: Contributions_mixinContributions;
	}
	export interface Contributions_mixinFormProperties {
	}
	export function CreateContributions_mixinFormGroup() {
		return new FormGroup<Contributions_mixinFormProperties>({
		});

	}

	export interface Contributions_mixinContributions {

		/** Required */
		contributions: Contributions_mixinContributionsContributions;
		contributions_mixin_contribution?: Array<Contributions_mixin_contribution>;
		href?: string | null;
	}
	export interface Contributions_mixinContributionsFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixinContributionsFormGroup() {
		return new FormGroup<Contributions_mixinContributionsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixinContributionsContributions {
		contributions_mixin_contribution?: Array<Contributions_mixin_contribution>;
		href?: string | null;
	}
	export interface Contributions_mixinContributionsContributionsFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixinContributionsContributionsFormGroup() {
		return new FormGroup<Contributions_mixinContributionsContributionsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contribution {

		/** Required */
		contribution: Contributions_mixin_contributionContribution;
	}
	export interface Contributions_mixin_contributionFormProperties {
	}
	export function CreateContributions_mixin_contributionFormGroup() {
		return new FormGroup<Contributions_mixin_contributionFormProperties>({
		});

	}

	export interface Contributions_mixin_contributionContribution {
		character_name?: string | null;

		/** Required */
		contribution: Contributions_mixin_contributionContributionContribution;
		contributions_mixin_contributor?: Contributions_mixin_contributor;
		credit_role?: Contributions_mixin_contributionContributionCredit_role;
	}
	export interface Contributions_mixin_contributionContributionFormProperties {
		character_name: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributionContributionFormGroup() {
		return new FormGroup<Contributions_mixin_contributionContributionFormProperties>({
			character_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contributionContributionContribution {
		character_name?: string | null;
		contributions_mixin_contributor?: Contributions_mixin_contributor;
		credit_role?: Contributions_mixin_contributionContributionContributionCredit_role;
	}
	export interface Contributions_mixin_contributionContributionContributionFormProperties {
		character_name: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributionContributionContributionFormGroup() {
		return new FormGroup<Contributions_mixin_contributionContributionContributionFormProperties>({
			character_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contributor {

		/** Required */
		contributor: Contributions_mixin_contributorContributor;
	}
	export interface Contributions_mixin_contributorFormProperties {
	}
	export function CreateContributions_mixin_contributorFormGroup() {
		return new FormGroup<Contributions_mixin_contributorFormProperties>({
		});

	}

	export interface Contributions_mixin_contributorContributor {
		contributions_mixin_contributor_name?: Contributions_mixin_contributor_name;

		/** Required */
		contributor: Contributions_mixin_contributorContributorContributor;
		href?: string | null;
		type?: string | null;
	}
	export interface Contributions_mixin_contributorContributorFormProperties {
		href: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributorContributorFormGroup() {
		return new FormGroup<Contributions_mixin_contributorContributorFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contributor_name {

		/** Required */
		name: Contributions_mixin_contributor_nameName;
	}
	export interface Contributions_mixin_contributor_nameFormProperties {
	}
	export function CreateContributions_mixin_contributor_nameFormGroup() {
		return new FormGroup<Contributions_mixin_contributor_nameFormProperties>({
		});

	}

	export interface Contributions_mixin_contributor_nameName {
		family?: string | null;
		given?: string | null;

		/** Required */
		name: Contributions_mixin_contributor_nameNameName;
		presentation?: string | null;
		title?: string | null;
	}
	export interface Contributions_mixin_contributor_nameNameFormProperties {
		family: FormControl<string | null | undefined>,
		given: FormControl<string | null | undefined>,
		presentation: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributor_nameNameFormGroup() {
		return new FormGroup<Contributions_mixin_contributor_nameNameFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			given: new FormControl<string | null | undefined>(undefined),
			presentation: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contributor_nameNameName {
		family?: string | null;
		given?: string | null;
		presentation?: string | null;
		title?: string | null;
	}
	export interface Contributions_mixin_contributor_nameNameNameFormProperties {
		family: FormControl<string | null | undefined>,
		given: FormControl<string | null | undefined>,
		presentation: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributor_nameNameNameFormGroup() {
		return new FormGroup<Contributions_mixin_contributor_nameNameNameFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			given: new FormControl<string | null | undefined>(undefined),
			presentation: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contributorContributorContributor {
		contributions_mixin_contributor_name?: Contributions_mixin_contributor_name;
		href?: string | null;
		type?: string | null;
	}
	export interface Contributions_mixin_contributorContributorContributorFormProperties {
		href: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributorContributorContributorFormGroup() {
		return new FormGroup<Contributions_mixin_contributorContributorContributorFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contributionContributionContributionCredit_role {
		'#text'?: string | null;
		id?: string | null;
	}
	export interface Contributions_mixin_contributionContributionContributionCredit_roleFormProperties {
		'#text': FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributionContributionContributionCredit_roleFormGroup() {
		return new FormGroup<Contributions_mixin_contributionContributionContributionCredit_roleFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributions_mixin_contributionContributionCredit_role {
		'#text'?: string | null;
		id?: string | null;
	}
	export interface Contributions_mixin_contributionContributionCredit_roleFormProperties {
		'#text': FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateContributions_mixin_contributionContributionCredit_roleFormGroup() {
		return new FormGroup<Contributions_mixin_contributionContributionCredit_roleFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BrandEmbargoed { true = 'true', false = 'false' }

	export interface GenreGroupingsType {
		genre_group?: Array<Genre_group>;
	}
	export interface GenreGroupingsTypeFormProperties {
	}
	export function CreateGenreGroupingsTypeFormGroup() {
		return new FormGroup<GenreGroupingsTypeFormProperties>({
		});

	}

	export interface Genre_group {

		/** Required */
		genres: Genre_groupGenres;
		id?: string | null;
		type?: string | null;
	}
	export interface Genre_groupFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGenre_groupFormGroup() {
		return new FormGroup<Genre_groupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Genre_groupGenres {
		genre?: Array<Genre>;
	}
	export interface Genre_groupGenresFormProperties {
	}
	export function CreateGenre_groupGenresFormGroup() {
		return new FormGroup<Genre_groupGenresFormProperties>({
		});

	}

	export interface Genre {
		'#text'?: string | null;
		id?: string | null;
		type?: string | null;
	}
	export interface GenreFormProperties {
		'#text': FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGenreFormGroup() {
		return new FormGroup<GenreFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Identifiers {

		/**
		 * Required
		 * Minimum items: 1
		 */
		identifier: Array<Identifier>;
	}
	export interface IdentifiersFormProperties {
	}
	export function CreateIdentifiersFormGroup() {
		return new FormGroup<IdentifiersFormProperties>({
		});

	}

	export interface Identifier {
		'#text'?: string | null;
		authority?: string | null;
		type?: string | null;
	}
	export interface IdentifierFormProperties {
		'#text': FormControl<string | null | undefined>,
		authority: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateIdentifierFormGroup() {
		return new FormGroup<IdentifierFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			authority: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Image_link {

		/** Required */
		image: string;
	}
	export interface Image_linkFormProperties {

		/** Required */
		image: FormControl<string | null | undefined>,
	}
	export function CreateImage_linkFormGroup() {
		return new FormGroup<Image_linkFormProperties>({
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Images_mixin {

		/** Required */
		images: Images_mixinImages;
	}
	export interface Images_mixinFormProperties {
	}
	export function CreateImages_mixinFormGroup() {
		return new FormGroup<Images_mixinFormProperties>({
		});

	}

	export interface Images_mixinImages {
		image?: Images_mixinImagesImage;
	}
	export interface Images_mixinImagesFormProperties {
	}
	export function CreateImages_mixinImagesFormGroup() {
		return new FormGroup<Images_mixinImagesFormProperties>({
		});

	}

	export interface Images_mixinImagesImage {
		href?: string | null;

		/** Required */
		images: Images_mixinImagesImageImages;
		inherited_from?: Images_mixinImagesImageInherited_from;

		/** Required */
		template_url: string;
		type?: string | null;
	}
	export interface Images_mixinImagesImageFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		template_url: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateImages_mixinImagesImageFormGroup() {
		return new FormGroup<Images_mixinImagesImageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			template_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Images_mixinImagesImageImages {
		image?: Images_mixinImagesImageImagesImage;
	}
	export interface Images_mixinImagesImageImagesFormProperties {
	}
	export function CreateImages_mixinImagesImageImagesFormGroup() {
		return new FormGroup<Images_mixinImagesImageImagesFormProperties>({
		});

	}

	export interface Images_mixinImagesImageImagesImage {
		href?: string | null;
		inherited_from?: Images_mixinImagesImageImagesImageInherited_from;

		/** Required */
		template_url: string;
		type?: string | null;
	}
	export interface Images_mixinImagesImageImagesImageFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		template_url: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateImages_mixinImagesImageImagesImageFormGroup() {
		return new FormGroup<Images_mixinImagesImageImagesImageFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			template_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Images_mixinImagesImageImagesImageInherited_from {
		href?: string | null;
		result_type?: string | null;
	}
	export interface Images_mixinImagesImageImagesImageInherited_fromFormProperties {
		href: FormControl<string | null | undefined>,
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateImages_mixinImagesImageImagesImageInherited_fromFormGroup() {
		return new FormGroup<Images_mixinImagesImageImagesImageInherited_fromFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Images_mixinImagesImageInherited_from {
		href?: string | null;
		result_type?: string | null;
	}
	export interface Images_mixinImagesImageInherited_fromFormProperties {
		href: FormControl<string | null | undefined>,
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateImages_mixinImagesImageInherited_fromFormGroup() {
		return new FormGroup<Images_mixinImagesImageInherited_fromFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Master_brand_link {

		/** Required */
		master_brand: Master_brand_linkMaster_brand;
	}
	export interface Master_brand_linkFormProperties {
	}
	export function CreateMaster_brand_linkFormGroup() {
		return new FormGroup<Master_brand_linkFormProperties>({
		});

	}

	export interface Master_brand_linkMaster_brand {

		/** Required */
		href: string;

		/** Required */
		master_brand: Master_brand_linkMaster_brandMaster_brand;

		/** Required */
		mid: string;

		/** Required */
		result_type: string;
	}
	export interface Master_brand_linkMaster_brandFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		mid: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateMaster_brand_linkMaster_brandFormGroup() {
		return new FormGroup<Master_brand_linkMaster_brandFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Master_brand_linkMaster_brandMaster_brand {

		/** Required */
		href: string;

		/** Required */
		mid: string;

		/** Required */
		result_type: string;
	}
	export interface Master_brand_linkMaster_brandMaster_brandFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		mid: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateMaster_brand_linkMaster_brandMaster_brandFormGroup() {
		return new FormGroup<Master_brand_linkMaster_brandMaster_brandFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Previous_next_mixin {

		/** Required */
		previous_next: Previous_next_mixinPrevious_next;
	}
	export interface Previous_next_mixinFormProperties {
	}
	export function CreatePrevious_next_mixinFormGroup() {
		return new FormGroup<Previous_next_mixinFormProperties>({
		});

	}

	export interface Previous_next_mixinPrevious_next {
		next?: Reference;
		previous?: Reference;

		/** Required */
		previous_next: Previous_next_mixinPrevious_nextPrevious_next;
	}
	export interface Previous_next_mixinPrevious_nextFormProperties {
	}
	export function CreatePrevious_next_mixinPrevious_nextFormGroup() {
		return new FormGroup<Previous_next_mixinPrevious_nextFormProperties>({
		});

	}

	export interface Previous_next_mixinPrevious_nextPrevious_next {
		next?: Reference;
		previous?: Reference;
	}
	export interface Previous_next_mixinPrevious_nextPrevious_nextFormProperties {
	}
	export function CreatePrevious_next_mixinPrevious_nextPrevious_nextFormGroup() {
		return new FormGroup<Previous_next_mixinPrevious_nextPrevious_nextFormProperties>({
		});

	}

	export interface Programme_formats {

		/**
		 * Required
		 * Minimum items: 1
		 */
		format: Array<Format>;
	}
	export interface Programme_formatsFormProperties {
	}
	export function CreateProgramme_formatsFormGroup() {
		return new FormGroup<Programme_formatsFormProperties>({
		});

	}

	export interface Format {
		'#text'?: string | null;
		format_id?: string | null;
	}
	export interface FormatFormProperties {
		'#text': FormControl<string | null | undefined>,
		format_id: FormControl<string | null | undefined>,
	}
	export function CreateFormatFormGroup() {
		return new FormGroup<FormatFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			format_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Programme_type {

		/** Required */
		value: string;
	}
	export interface Programme_typeFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateProgramme_typeFormGroup() {
		return new FormGroup<Programme_typeFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Related_links {
		related_link?: Array<Related_link>;
	}
	export interface Related_linksFormProperties {
	}
	export function CreateRelated_linksFormGroup() {
		return new FormGroup<Related_linksFormProperties>({
		});

	}

	export interface Related_link {
		availability?: Related_linkAvailability;
		is_external?: boolean | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;
		synopses?: Synopses;
		title?: string | null;
		type?: string | null;
		uri?: string | null;
	}
	export interface Related_linkFormProperties {
		is_external: FormControl<boolean | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRelated_linkFormGroup() {
		return new FormGroup<Related_linkFormProperties>({
			is_external: new FormControl<boolean | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Related_linkAvailability {
		end?: Date | null;
		start?: Date | null;
	}
	export interface Related_linkAvailabilityFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateRelated_linkAvailabilityFormGroup() {
		return new FormGroup<Related_linkAvailabilityFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Synopses {
		long?: string | null;
		medium?: string | null;
		short?: string | null;
	}
	export interface SynopsesFormProperties {
		long: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		short: FormControl<string | null | undefined>,
	}
	export function CreateSynopsesFormGroup() {
		return new FormGroup<SynopsesFormProperties>({
			long: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			short: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Release_date_group {
		release_date?: string | null;
		release_year?: string | null;
		release_year_month?: string | null;
	}
	export interface Release_date_groupFormProperties {
		release_date: FormControl<string | null | undefined>,
		release_year: FormControl<string | null | undefined>,
		release_year_month: FormControl<string | null | undefined>,
	}
	export function CreateRelease_date_groupFormGroup() {
		return new FormGroup<Release_date_groupFormProperties>({
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			release_year: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{4}')]),
			release_year_month: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]{4}-[0-9]{2}')]),
		});

	}

	export interface Broadcast {
		ancestor_titles?: Ancestor_titles;
		ancestors_titles?: Ancestors_titles;
		broadcast_of?: Array<PidReference>;
		identifiers?: Identifiers;
		ids?: Ids;
		image_link?: Image_link;
		images_mixin?: Images_mixin;
		is_audio_described?: boolean | null;
		is_blanked?: boolean | null;
		is_critical?: boolean | null;
		is_repeat?: boolean | null;
		is_simulcast?: boolean | null;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		published_time?: BroadcastTime;
		service?: ServiceReference;
		tx_time?: Tx_time;
		updated_time?: Date | null;
	}
	export interface BroadcastFormProperties {
		is_audio_described: FormControl<boolean | null | undefined>,
		is_blanked: FormControl<boolean | null | undefined>,
		is_critical: FormControl<boolean | null | undefined>,
		is_repeat: FormControl<boolean | null | undefined>,
		is_simulcast: FormControl<boolean | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateBroadcastFormGroup() {
		return new FormGroup<BroadcastFormProperties>({
			is_audio_described: new FormControl<boolean | null | undefined>(undefined),
			is_blanked: new FormControl<boolean | null | undefined>(undefined),
			is_critical: new FormControl<boolean | null | undefined>(undefined),
			is_repeat: new FormControl<boolean | null | undefined>(undefined),
			is_simulcast: new FormControl<boolean | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Ids {

		/**
		 * Required
		 * Minimum items: 1
		 */
		id: Array<Id>;
	}
	export interface IdsFormProperties {
	}
	export function CreateIdsFormGroup() {
		return new FormGroup<IdsFormProperties>({
		});

	}

	export interface Id {
		'#text'?: string | null;
		authority?: string | null;
		type?: string | null;
	}
	export interface IdFormProperties {
		'#text': FormControl<string | null | undefined>,
		authority: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateIdFormGroup() {
		return new FormGroup<IdFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			authority: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tx_time {
		credits_showing?: Date | null;
		end?: Date | null;
		start?: Date | null;
	}
	export interface Tx_timeFormProperties {
		credits_showing: FormControl<Date | null | undefined>,
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateTx_timeFormGroup() {
		return new FormGroup<Tx_timeFormProperties>({
			credits_showing: new FormControl<Date | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BroadcastTime extends DateRange {
		duration?: string | null;
	}
	export interface BroadcastTimeFormProperties extends DateRangeFormProperties {
		duration: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastTimeFormGroup() {
		return new FormGroup<BroadcastTimeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
		});

	}

	export interface Broadcast_of {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface Broadcast_ofFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateBroadcast_ofFormGroup() {
		return new FormGroup<Broadcast_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Broadcaster {

		/** Required */
		href: string;

		/** Required */
		result_type: string;

		/** Required */
		sid: string;
	}
	export interface BroadcasterFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,

		/** Required */
		sid: FormControl<string | null | undefined>,
	}
	export function CreateBroadcasterFormGroup() {
		return new FormGroup<BroadcasterFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-z0-9A-Z_\.\-]+')]),
		});

	}

	export interface Chapter {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number?: string | null;
		contributions_mixin?: Contributions_mixin;

		/** Type: float */
		duration?: number | null;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		item_of?: Reference;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code?: string | null;
		offsets?: Offsets;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		play_events?: Play_events;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label?: string | null;

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title?: string | null;
		snippet_url?: string | null;

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media?: string | null;
		synopses?: Synopses;
		title?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side?: string | null;
		type?: string | null;
		updated_time?: Date | null;
	}
	export interface ChapterFormProperties {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number: FormControl<string | null | undefined>,

		/** Type: float */
		duration: FormControl<number | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label: FormControl<string | null | undefined>,

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title: FormControl<string | null | undefined>,
		snippet_url: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateChapterFormGroup() {
		return new FormGroup<ChapterFormProperties>({
			catalogue_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			duration: new FormControl<number | null | undefined>(undefined),
			music_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			record_label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			recording_date: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(10)]),
			release_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			snippet_url: new FormControl<string | null | undefined>(undefined),
			source_media: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			title: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			track_side: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Offsets {
		offset_in?: Array<Offset_in>;
	}
	export interface OffsetsFormProperties {
	}
	export function CreateOffsetsFormGroup() {
		return new FormGroup<OffsetsFormProperties>({
		});

	}

	export interface Offset_in {

		/** Required */
		href: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset?: number | null;

		/** Type: double */
		position?: number | null;

		/** Required */
		programme: string;

		/** Required */
		version: string;
	}
	export interface Offset_inFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset: FormControl<number | null | undefined>,

		/** Type: double */
		position: FormControl<number | null | undefined>,

		/** Required */
		programme: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateOffset_inFormGroup() {
		return new FormGroup<Offset_inFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			programme: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Play_events {
		play_event?: Array<Play_event>;
	}
	export interface Play_eventsFormProperties {
	}
	export function CreatePlay_eventsFormGroup() {
		return new FormGroup<Play_eventsFormProperties>({
		});

	}

	export interface Play_event {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset?: number | null;

		/** Required */
		pid: string;
		played_in_links?: Array<Played_in_links>;

		/** Type: double */
		position?: number | null;
		synopses?: Synopses;
		title?: string | null;
	}
	export interface Play_eventFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset: FormControl<number | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: double */
		position: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePlay_eventFormGroup() {
		return new FormGroup<Play_eventFormProperties>({
			offset: new FormControl<number | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Played_in_links {
		played_in?: Played_in_linksPlayed_in;
	}
	export interface Played_in_linksFormProperties {
	}
	export function CreatePlayed_in_linksFormGroup() {
		return new FormGroup<Played_in_linksFormProperties>({
		});

	}

	export interface Played_in_linksPlayed_in {
		href?: string | null;
		played_in?: Played_in_linksPlayed_inPlayed_in;
		result_type?: string | null;
	}
	export interface Played_in_linksPlayed_inFormProperties {
		href: FormControl<string | null | undefined>,
		result_type: FormControl<string | null | undefined>,
	}
	export function CreatePlayed_in_linksPlayed_inFormGroup() {
		return new FormGroup<Played_in_linksPlayed_inFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Played_in_linksPlayed_inPlayed_in {
		href?: string | null;
		result_type?: string | null;
	}
	export interface Played_in_linksPlayed_inPlayed_inFormProperties {
		href: FormControl<string | null | undefined>,
		result_type: FormControl<string | null | undefined>,
	}
	export function CreatePlayed_in_linksPlayed_inPlayed_inFormGroup() {
		return new FormGroup<Played_in_linksPlayed_inPlayed_inFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Clip {

		/** Required */
		advertising_allowed: string;
		alternate_images_mixin?: Alternate_images_mixin;
		ancestor_titles?: Ancestor_titles;
		ancestors?: Reference;
		ancestors_titles?: Ancestors_titles;
		availability_mixin?: Availability_mixin;
		caption?: string | null;
		clip_of?: PidReference;
		contributions_mixin?: Contributions_mixin;

		/** Required */
		embargoed: BrandEmbargoed;
		genre_groupings?: GenreGroupingsType;
		genre_groups?: GenreGroupsType;
		identifiers?: Identifiers;
		image_link?: Image_link;
		images_mixin?: Images_mixin;
		is_embeddable?: boolean | null;
		items_for?: Reference;
		master_brand_link?: Master_brand_link;
		media_type?: ClipMedia_type | null;
		original_version_duration?: Original_version_duration;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		previous_next_mixin?: Previous_next_mixin;
		programme_formats?: Programme_formats;
		related_links?: Related_links;
		release_date_group?: Release_date_group;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		uri?: string | null;
		versions_mixin?: Versions_mixin;
	}
	export interface ClipFormProperties {

		/** Required */
		advertising_allowed: FormControl<string | null | undefined>,
		caption: FormControl<string | null | undefined>,

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,
		is_embeddable: FormControl<boolean | null | undefined>,
		media_type: FormControl<ClipMedia_type | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateClipFormGroup() {
		return new FormGroup<ClipFormProperties>({
			advertising_allowed: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-z0-9_]+')]),
			caption: new FormControl<string | null | undefined>(undefined),
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			is_embeddable: new FormControl<boolean | null | undefined>(undefined),
			media_type: new FormControl<ClipMedia_type | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClipMedia_type { Video = 'Video', Audio = 'Audio' }

	export interface Original_version_duration {
		version?: Original_version_durationVersion;
	}
	export interface Original_version_durationFormProperties {
	}
	export function CreateOriginal_version_durationFormGroup() {
		return new FormGroup<Original_version_durationFormProperties>({
		});

	}

	export interface Original_version_durationVersion {
		duration?: string | null;

		/** Required */
		href: string;

		/** Required */
		pid: string;
		version?: Original_version_durationVersionVersion;
	}
	export interface Original_version_durationVersionFormProperties {
		duration: FormControl<string | null | undefined>,

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
	}
	export function CreateOriginal_version_durationVersionFormGroup() {
		return new FormGroup<Original_version_durationVersionFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Original_version_durationVersionVersion {
		duration?: string | null;

		/** Required */
		href: string;

		/** Required */
		pid: string;
	}
	export interface Original_version_durationVersionVersionFormProperties {
		duration: FormControl<string | null | undefined>,

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
	}
	export function CreateOriginal_version_durationVersionVersionFormGroup() {
		return new FormGroup<Original_version_durationVersionVersionFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Versions_mixin {
		available_simulcasts?: Available_simulcasts;
		available_versions?: Available_versions;
		available_webcasts?: Available_webcasts;
		versions?: Array<Versions>;
	}
	export interface Versions_mixinFormProperties {
	}
	export function CreateVersions_mixinFormGroup() {
		return new FormGroup<Versions_mixinFormProperties>({
		});

	}

	export interface Versions {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: number;

		/** Required */
		version_availability_mixin: Version_availability_mixin;
	}
	export interface VersionsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		available: FormControl<number | null | undefined>,
	}
	export function CreateVersionsFormGroup() {
		return new FormGroup<VersionsFormProperties>({
			available: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Version_availability_mixin {
		Version_availability_mixinVersion?: Array<Version_availability_mixinVersion>;
	}
	export interface Version_availability_mixinFormProperties {
	}
	export function CreateVersion_availability_mixinFormGroup() {
		return new FormGroup<Version_availability_mixinFormProperties>({
		});

	}

	export interface Version_availability_mixinVersion {
		Version_availability_mixinVersionAvailabilities?: Array<Version_availability_mixinVersionAvailabilities>;
		competition_warning?: string | null;
		duration?: string | null;
		guidance_warnings?: Guidance_warnings;
		pid?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Version_availability_mixinVersionTypes: Array<Version_availability_mixinVersionTypes>;
		Version_availability_mixinVersionVersion?: Array<Version_availability_mixinVersionVersion>;
	}
	export interface Version_availability_mixinVersionFormProperties {
		competition_warning: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
	}
	export function CreateVersion_availability_mixinVersionFormGroup() {
		return new FormGroup<Version_availability_mixinVersionFormProperties>({
			competition_warning: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Version_availability_mixinVersionAvailabilities {

		/**
		 * Required
		 * Minimum items: 1
		 */
		version_availability: Array<Version_availability>;
	}
	export interface Version_availability_mixinVersionAvailabilitiesFormProperties {
	}
	export function CreateVersion_availability_mixinVersionAvailabilitiesFormGroup() {
		return new FormGroup<Version_availability_mixinVersionAvailabilitiesFormProperties>({
		});

	}

	export interface Version_availability {

		/** Required */
		availability: Version_availabilityAvailability;
	}
	export interface Version_availabilityFormProperties {
	}
	export function CreateVersion_availabilityFormGroup() {
		return new FormGroup<Version_availabilityFormProperties>({
		});

	}

	export interface Version_availabilityAvailability {

		/** Required */
		availability: Version_availabilityAvailabilityAvailability;
		availability_end?: Date | null;
		availability_start?: Date | null;

		/** Required */
		available_media_sets: Available_media_sets;
		status?: string | null;
	}
	export interface Version_availabilityAvailabilityFormProperties {
		availability_end: FormControl<Date | null | undefined>,
		availability_start: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateVersion_availabilityAvailabilityFormGroup() {
		return new FormGroup<Version_availabilityAvailabilityFormProperties>({
			availability_end: new FormControl<Date | null | undefined>(undefined),
			availability_start: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Version_availabilityAvailabilityAvailability {
		availability_end?: Date | null;
		availability_start?: Date | null;

		/** Required */
		available_media_sets: Available_media_sets;
		status?: string | null;
	}
	export interface Version_availabilityAvailabilityAvailabilityFormProperties {
		availability_end: FormControl<Date | null | undefined>,
		availability_start: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateVersion_availabilityAvailabilityAvailabilityFormGroup() {
		return new FormGroup<Version_availabilityAvailabilityAvailabilityFormProperties>({
			availability_end: new FormControl<Date | null | undefined>(undefined),
			availability_start: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Version_availability_mixinVersionTypes {
		type?: Array<string>;
	}
	export interface Version_availability_mixinVersionTypesFormProperties {
	}
	export function CreateVersion_availability_mixinVersionTypesFormGroup() {
		return new FormGroup<Version_availability_mixinVersionTypesFormProperties>({
		});

	}

	export interface Version_availability_mixinVersionVersion {
		Version_availability_mixinVersionVersionAvailabilities?: Array<Version_availability_mixinVersionVersionAvailabilities>;
		competition_warning?: string | null;
		duration?: string | null;
		guidance_warnings?: Guidance_warnings;
		pid?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Version_availability_mixinVersionVersionTypes: Array<Version_availability_mixinVersionVersionTypes>;
	}
	export interface Version_availability_mixinVersionVersionFormProperties {
		competition_warning: FormControl<string | null | undefined>,
		duration: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
	}
	export function CreateVersion_availability_mixinVersionVersionFormGroup() {
		return new FormGroup<Version_availability_mixinVersionVersionFormProperties>({
			competition_warning: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Version_availability_mixinVersionVersionAvailabilities {

		/**
		 * Required
		 * Minimum items: 1
		 */
		version_availability: Array<Version_availability>;
	}
	export interface Version_availability_mixinVersionVersionAvailabilitiesFormProperties {
	}
	export function CreateVersion_availability_mixinVersionVersionAvailabilitiesFormGroup() {
		return new FormGroup<Version_availability_mixinVersionVersionAvailabilitiesFormProperties>({
		});

	}

	export interface Version_availability_mixinVersionVersionTypes {
		type?: Array<string>;
	}
	export interface Version_availability_mixinVersionVersionTypesFormProperties {
	}
	export function CreateVersion_availability_mixinVersionVersionTypesFormGroup() {
		return new FormGroup<Version_availability_mixinVersionVersionTypesFormProperties>({
		});

	}

	export interface Clip_of {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface Clip_ofFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateClip_ofFormGroup() {
		return new FormGroup<Clip_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Collection {
		alternate_images_mixin?: Alternate_images_mixin;

		/** Required */
		embargoed: BrandEmbargoed;
		for_programmes?: For_programmes;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		master_brand_link?: Master_brand_link;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		related_links?: Related_links;
		scheduled?: Scheduled;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		url_key?: string | null;
	}
	export interface CollectionFormProperties {

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface For_programmes {
		for_programme?: Array<For_programme>;
	}
	export interface For_programmesFormProperties {
	}
	export function CreateFor_programmesFormGroup() {
		return new FormGroup<For_programmesFormProperties>({
		});

	}

	export interface For_programme {
		href?: string | null;
	}
	export interface For_programmeFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateFor_programmeFormGroup() {
		return new FormGroup<For_programmeFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Scheduled {
		end?: Date | null;
		start?: Date | null;
	}
	export interface ScheduledFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledFormGroup() {
		return new FormGroup<ScheduledFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Context {
		cascades_to_descendants?: boolean | null;
		href?: string | null;

		/** Required */
		pid: string;

		/** Required */
		result_type: string;
	}
	export interface ContextFormProperties {
		cascades_to_descendants: FormControl<boolean | null | undefined>,
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateContextFormGroup() {
		return new FormGroup<ContextFormProperties>({
			cascades_to_descendants: new FormControl<boolean | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Contributor {
		contributor_name?: Contributor_name;
		contributor_to?: Array<Contributor_to>;
		disambiguation?: string | null;
		href?: string | null;
		identifiers?: Identifiers;
		ids?: Ids;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		type?: string | null;
	}
	export interface ContributorFormProperties {
		disambiguation: FormControl<string | null | undefined>,
		href: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateContributorFormGroup() {
		return new FormGroup<ContributorFormProperties>({
			disambiguation: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributor_name {

		/** Required */
		name: Contributor_nameName;
	}
	export interface Contributor_nameFormProperties {
	}
	export function CreateContributor_nameFormGroup() {
		return new FormGroup<Contributor_nameFormProperties>({
		});

	}

	export interface Contributor_nameName {
		family?: string | null;
		given?: string | null;
		lang?: string | null;

		/** Required */
		name: Contributor_nameNameName;
		presentation?: string | null;
		title?: string | null;
	}
	export interface Contributor_nameNameFormProperties {
		family: FormControl<string | null | undefined>,
		given: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		presentation: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateContributor_nameNameFormGroup() {
		return new FormGroup<Contributor_nameNameFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			given: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			presentation: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributor_nameNameName {
		family?: string | null;
		given?: string | null;
		lang?: string | null;
		presentation?: string | null;
		title?: string | null;
	}
	export interface Contributor_nameNameNameFormProperties {
		family: FormControl<string | null | undefined>,
		given: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		presentation: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateContributor_nameNameNameFormGroup() {
		return new FormGroup<Contributor_nameNameNameFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			given: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			presentation: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contributor_to {

		/** Required */
		href: string;

		/** Required */
		result_type: string;
	}
	export interface Contributor_toFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateContributor_toFormGroup() {
		return new FormGroup<Contributor_toFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Credits_time {
		squeeze_end?: Date | null;
		squeeze_start?: Date | null;
	}
	export interface Credits_timeFormProperties {
		squeeze_end: FormControl<Date | null | undefined>,
		squeeze_start: FormControl<Date | null | undefined>,
	}
	export function CreateCredits_timeFormGroup() {
		return new FormGroup<Credits_timeFormProperties>({
			squeeze_end: new FormControl<Date | null | undefined>(undefined),
			squeeze_start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Data {
		datum?: string | null;
	}
	export interface DataFormProperties {
		datum: FormControl<string | null | undefined>,
	}
	export function CreateDataFormGroup() {
		return new FormGroup<DataFormProperties>({
			datum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Date_range {
		end?: Date | null;
		start?: Date | null;
	}
	export interface Date_rangeFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateDate_rangeFormGroup() {
		return new FormGroup<Date_rangeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Dependency_on {
		filter?: string | null;
		value?: string | null;
	}
	export interface Dependency_onFormProperties {
		filter: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateDependency_onFormGroup() {
		return new FormGroup<Dependency_onFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Deprecated {

		/** Required */
		deprecated_since: string;

		/** Required */
		name: string;
		replaced_by?: string | null;
		replacement_type?: string | null;

		/** Required */
		type: string;
	}
	export interface DeprecatedFormProperties {

		/** Required */
		deprecated_since: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		replaced_by: FormControl<string | null | undefined>,
		replacement_type: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDeprecatedFormGroup() {
		return new FormGroup<DeprecatedFormProperties>({
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replaced_by: new FormControl<string | null | undefined>(undefined),
			replacement_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeprecatedReferenceElement extends ReferenceAttributes {

		/** Required */
		deprecated: boolean;

		/** Required */
		deprecated_since: string;

		/** Required */
		replaced_by: string;
	}
	export interface DeprecatedReferenceElementFormProperties extends ReferenceAttributesFormProperties {

		/** Required */
		deprecated: FormControl<boolean | null | undefined>,

		/** Required */
		deprecated_since: FormControl<string | null | undefined>,

		/** Required */
		replaced_by: FormControl<string | null | undefined>,
	}
	export function CreateDeprecatedReferenceElementFormGroup() {
		return new FormGroup<DeprecatedReferenceElementFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			replaced_by: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeprecationAttributes {

		/** Required */
		deprecated: boolean;

		/** Required */
		deprecated_since: string;

		/** Required */
		replaced_by: string;
	}
	export interface DeprecationAttributesFormProperties {

		/** Required */
		deprecated: FormControl<boolean | null | undefined>,

		/** Required */
		deprecated_since: FormControl<string | null | undefined>,

		/** Required */
		replaced_by: FormControl<string | null | undefined>,
	}
	export function CreateDeprecationAttributesFormGroup() {
		return new FormGroup<DeprecationAttributesFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			replaced_by: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Deprecations {
		deprecated?: Array<Deprecated>;
	}
	export interface DeprecationsFormProperties {
	}
	export function CreateDeprecationsFormGroup() {
		return new FormGroup<DeprecationsFormProperties>({
		});

	}

	export interface Dimensions {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface DimensionsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Embargoed { true = 'true', false = 'false' }

	export interface Episode {

		/** Required */
		advertising_allowed: string;
		alternate_images_mixin?: Alternate_images_mixin;
		ancestor_titles?: Ancestor_titles;
		ancestors?: Reference;
		ancestors_titles?: Ancestors_titles;
		availability_mixin?: Availability_mixin;
		contributions_mixin?: Contributions_mixin;

		/** Required */
		embargoed: BrandEmbargoed;
		episode_of?: PidReference;
		genre_groupings?: GenreGroupingsType;
		genre_groups?: GenreGroupsType;
		has_guidance?: boolean | null;
		identifiers?: Identifiers;
		image_link?: Image_link;
		images_mixin?: Images_mixin;
		is_embeddable?: boolean | null;
		is_stacked?: boolean | null;
		items_for?: Reference;
		master_brand_link?: Master_brand_link;
		media_type?: ClipMedia_type | null;
		original_version_duration?: Original_version_duration;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		presentation_title?: string | null;
		previous_next_mixin?: Previous_next_mixin;
		programme_formats?: Programme_formats;
		programme_type?: Programme_type;
		related_links?: Related_links;
		release_date_group?: Release_date_group;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		uri?: string | null;
		versions_mixin?: Versions_mixin;
	}
	export interface EpisodeFormProperties {

		/** Required */
		advertising_allowed: FormControl<string | null | undefined>,

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,
		has_guidance: FormControl<boolean | null | undefined>,
		is_embeddable: FormControl<boolean | null | undefined>,
		is_stacked: FormControl<boolean | null | undefined>,
		media_type: FormControl<ClipMedia_type | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		presentation_title: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeFormGroup() {
		return new FormGroup<EpisodeFormProperties>({
			advertising_allowed: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-z0-9_]+')]),
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			has_guidance: new FormControl<boolean | null | undefined>(undefined),
			is_embeddable: new FormControl<boolean | null | undefined>(undefined),
			is_stacked: new FormControl<boolean | null | undefined>(undefined),
			media_type: new FormControl<ClipMedia_type | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			presentation_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Episode_of {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface Episode_ofFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateEpisode_ofFormGroup() {
		return new FormGroup<Episode_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Required */
		code: string;

		/** Required */
		data: Data;

		/** Required */
		'error-name': string;

		/** Required */
		expr: string;

		/** Required */
		'format-string': string;

		/** Required */
		message: string;

		/** Required */
		retryable: boolean;

		/**
		 * The XQuery language version.
		 * Required
		 */
		'xquery-version': ErrorXquery_version;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		'error-name': FormControl<string | null | undefined>,

		/** Required */
		expr: FormControl<string | null | undefined>,

		/** Required */
		'format-string': FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		retryable: FormControl<boolean | null | undefined>,

		/**
		 * The XQuery language version.
		 * Required
		 */
		'xquery-version': FormControl<ErrorXquery_version | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'error-name': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'format-string': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			retryable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'xquery-version': new FormControl<ErrorXquery_version | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ErrorXquery_version { '1.0-ml' = '1.0-ml', '0.9-ml' = '0.9-ml', _1_0 = '1.0', XSLT = 'XSLT' }

	export interface Errors {
		error?: Error;
	}
	export interface ErrorsFormProperties {
	}
	export function CreateErrorsFormGroup() {
		return new FormGroup<ErrorsFormProperties>({
		});

	}

	export interface Feed {
		deprecations?: Deprecations;
		filters?: Filters;

		/** Required */
		href: string;
		mixins?: Mixins;

		/** Required */
		name: string;

		/** Required */
		rel: string;
		release_status?: OptionRelease_status | null;
		sorts?: Sorts;

		/** Required */
		title: string;
	}
	export interface FeedFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		rel: FormControl<string | null | undefined>,
		release_status: FormControl<OptionRelease_status | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateFeedFormGroup() {
		return new FormGroup<FeedFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_status: new FormControl<OptionRelease_status | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Filters {
		filter?: Array<Filter>;
		unstable_filters?: Unstable_filters;
	}
	export interface FiltersFormProperties {
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
		});

	}

	export interface Filter {
		default?: string | null;
		depends_on?: string | null;
		deprecated?: boolean | null;
		deprecated_since?: string | null;
		guaranteed_until?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		max_value?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		min_value?: number | null;
		multiple_values?: boolean | null;

		/** Required */
		name: string;
		option?: Array<Option>;
		prefer?: string | null;
		prohibits?: Array<Prohibits>;
		release_status?: OptionRelease_status | null;
		replaced_by?: string | null;
		required?: boolean | null;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}
	export interface FilterFormProperties {
		default: FormControl<string | null | undefined>,
		depends_on: FormControl<string | null | undefined>,
		deprecated: FormControl<boolean | null | undefined>,
		deprecated_since: FormControl<string | null | undefined>,
		guaranteed_until: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		max_value: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		min_value: FormControl<number | null | undefined>,
		multiple_values: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		prefer: FormControl<string | null | undefined>,
		release_status: FormControl<OptionRelease_status | null | undefined>,
		replaced_by: FormControl<string | null | undefined>,
		required: FormControl<boolean | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
			depends_on: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			guaranteed_until: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			max_value: new FormControl<number | null | undefined>(undefined),
			min_value: new FormControl<number | null | undefined>(undefined),
			multiple_values: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefer: new FormControl<string | null | undefined>(undefined),
			release_status: new FormControl<OptionRelease_status | null | undefined>(undefined),
			replaced_by: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Option {
		href?: string | null;
		release_status?: OptionRelease_status | null;

		/** Required */
		title: string;

		/** Required */
		value: string;
	}
	export interface OptionFormProperties {
		href: FormControl<string | null | undefined>,
		release_status: FormControl<OptionRelease_status | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			release_status: new FormControl<OptionRelease_status | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OptionRelease_status { alpha = 'alpha', beta = 'beta', supported = 'supported', deprecated = 'deprecated' }

	export interface Prohibits {
		ProhibitsFilter?: Array<ProhibitsFilter>;
		ProhibitsMixin?: Array<ProhibitsMixin>;
	}
	export interface ProhibitsFormProperties {
	}
	export function CreateProhibitsFormGroup() {
		return new FormGroup<ProhibitsFormProperties>({
		});

	}

	export interface ProhibitsFilter {

		/** Required */
		name: string;
	}
	export interface ProhibitsFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProhibitsFilterFormGroup() {
		return new FormGroup<ProhibitsFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProhibitsMixin {
		ProhibitsMixinFilter?: Array<ProhibitsMixinFilter>;
		ProhibitsMixinMixin?: Array<ProhibitsMixinMixin>;

		/** Required */
		name: string;
	}
	export interface ProhibitsMixinFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProhibitsMixinFormGroup() {
		return new FormGroup<ProhibitsMixinFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProhibitsMixinFilter {

		/** Required */
		name: string;
	}
	export interface ProhibitsMixinFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProhibitsMixinFilterFormGroup() {
		return new FormGroup<ProhibitsMixinFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProhibitsMixinMixin {

		/** Required */
		name: string;
	}
	export interface ProhibitsMixinMixinFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProhibitsMixinMixinFormGroup() {
		return new FormGroup<ProhibitsMixinMixinFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Unstable_filters {
		filter?: Array<Filter>;
	}
	export interface Unstable_filtersFormProperties {
	}
	export function CreateUnstable_filtersFormGroup() {
		return new FormGroup<Unstable_filtersFormProperties>({
		});

	}

	export interface Mixins {
		mixin?: Array<Mixin>;
		unstable_mixins?: Unstable_mixins;
	}
	export interface MixinsFormProperties {
	}
	export function CreateMixinsFormGroup() {
		return new FormGroup<MixinsFormProperties>({
		});

	}

	export interface Mixin {
		affected_by?: Array<Affected_by>;
		dependency_on?: Array<Dependency_on>;
		depends_on?: string | null;
		deprecated?: boolean | null;
		deprecated_since?: string | null;
		guaranteed_until?: string | null;
		href?: string | null;

		/** Required */
		name: string;
		prohibits?: Array<Prohibits>;
		release_status?: OptionRelease_status | null;
		replaced_by?: string | null;

		/** Required */
		title: string;
	}
	export interface MixinFormProperties {
		depends_on: FormControl<string | null | undefined>,
		deprecated: FormControl<boolean | null | undefined>,
		deprecated_since: FormControl<string | null | undefined>,
		guaranteed_until: FormControl<string | null | undefined>,
		href: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		release_status: FormControl<OptionRelease_status | null | undefined>,
		replaced_by: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateMixinFormGroup() {
		return new FormGroup<MixinFormProperties>({
			depends_on: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			guaranteed_until: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			href: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_status: new FormControl<OptionRelease_status | null | undefined>(undefined),
			replaced_by: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Unstable_mixins {
		mixin?: Array<Mixin>;
	}
	export interface Unstable_mixinsFormProperties {
	}
	export function CreateUnstable_mixinsFormGroup() {
		return new FormGroup<Unstable_mixinsFormProperties>({
		});

	}

	export interface Sorts {
		sort?: Array<Sort>;
		unstable_sorts?: Unstable_sorts;
	}
	export interface SortsFormProperties {
	}
	export function CreateSortsFormGroup() {
		return new FormGroup<SortsFormProperties>({
		});

	}

	export interface Sort {
		deprecated?: boolean | null;
		deprecated_since?: string | null;
		guaranteed_until?: string | null;
		is_default?: string | null;

		/** Required */
		name: string;
		release_status?: OptionRelease_status | null;
		replaced_by?: string | null;
		sort_direction?: Array<Sort_direction>;

		/** Required */
		title: string;
	}
	export interface SortFormProperties {
		deprecated: FormControl<boolean | null | undefined>,
		deprecated_since: FormControl<string | null | undefined>,
		guaranteed_until: FormControl<string | null | undefined>,
		is_default: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		release_status: FormControl<OptionRelease_status | null | undefined>,
		replaced_by: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSortFormGroup() {
		return new FormGroup<SortFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			guaranteed_until: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			is_default: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_status: new FormControl<OptionRelease_status | null | undefined>(undefined),
			replaced_by: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sort_direction {

		/** Required */
		href: string;

		/** Required */
		is_default: string;

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface Sort_directionFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		is_default: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSort_directionFormGroup() {
		return new FormGroup<Sort_directionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_default: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Unstable_sorts {
		sort?: Array<Sort>;
	}
	export interface Unstable_sortsFormProperties {
	}
	export function CreateUnstable_sortsFormGroup() {
		return new FormGroup<Unstable_sortsFormProperties>({
		});

	}

	export interface Feeds {
		deployment_root?: string | null;
		deprecations?: Deprecations;
		feed?: Array<Feed>;
	}
	export interface FeedsFormProperties {
		deployment_root: FormControl<string | null | undefined>,
	}
	export function CreateFeedsFormGroup() {
		return new FormGroup<FeedsFormProperties>({
			deployment_root: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Focus_point {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		x?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		y?: number | null;
	}
	export interface Focus_pointFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		x: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateFocus_pointFormGroup() {
		return new FormGroup<Focus_pointFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Franchise {
		alternate_images_mixin?: Alternate_images_mixin;

		/** Required */
		embargoed: BrandEmbargoed;
		for_programmes?: For_programmes;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		master_brand_link?: Master_brand_link;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		related_links?: Related_links;
		scheduled?: Scheduled;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		url_key?: string | null;
	}
	export interface FranchiseFormProperties {

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateFranchiseFormGroup() {
		return new FormGroup<FranchiseFormProperties>({
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Franchises extends ReferenceAttributes {
		href_deprecated?: boolean | null;
		result_type_deprecated?: boolean | null;
	}
	export interface FranchisesFormProperties extends ReferenceAttributesFormProperties {
		href_deprecated: FormControl<boolean | null | undefined>,
		result_type_deprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateFranchisesFormGroup() {
		return new FormGroup<FranchisesFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href_deprecated: new FormControl<boolean | null | undefined>(undefined),
			result_type_deprecated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Gallery {
		alternate_images_mixin?: Alternate_images_mixin;

		/** Required */
		embargoed: BrandEmbargoed;
		for_programmes?: For_programmes;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		master_brand_link?: Master_brand_link;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		related_links?: Related_links;
		scheduled?: Scheduled;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		url_key?: string | null;
	}
	export interface GalleryFormProperties {

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateGalleryFormGroup() {
		return new FormGroup<GalleryFormProperties>({
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenreGroupsType extends DeprecatedReferenceElement {
		genre_group?: Array<Genre_group>;
	}
	export interface GenreGroupsTypeFormProperties extends DeprecatedReferenceElementFormProperties {
	}
	export function CreateGenreGroupsTypeFormGroup() {
		return new FormGroup<GenreGroupsTypeFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			replaced_by: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Genre_groupings {
		genre_group?: Array<Genre_group>;
	}
	export interface Genre_groupingsFormProperties {
	}
	export function CreateGenre_groupingsFormGroup() {
		return new FormGroup<Genre_groupingsFormProperties>({
		});

	}

	export interface Genre_groups extends DeprecatedReferenceElement {
		genre_group?: Array<Genre_group>;
	}
	export interface Genre_groupsFormProperties extends DeprecatedReferenceElementFormProperties {
	}
	export function CreateGenre_groupsFormGroup() {
		return new FormGroup<Genre_groupsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			deprecated_since: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$')]),
			replaced_by: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Group_body {
		alternate_images_mixin?: Alternate_images_mixin;

		/** Required */
		embargoed: BrandEmbargoed;
		for_programmes?: For_programmes;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		master_brand_link?: Master_brand_link;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		related_links?: Related_links;
		scheduled?: Scheduled;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		url_key?: string | null;
	}
	export interface Group_bodyFormProperties {

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateGroup_bodyFormGroup() {
		return new FormGroup<Group_bodyFormProperties>({
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Highlight {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number?: string | null;
		contributions_mixin?: Contributions_mixin;

		/** Type: float */
		duration?: number | null;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		item_of?: Reference;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code?: string | null;
		offsets?: Offsets;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		play_events?: Play_events;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label?: string | null;

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title?: string | null;
		snippet_url?: string | null;

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media?: string | null;
		synopses?: Synopses;
		title?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side?: string | null;
		type?: string | null;
		updated_time?: Date | null;
	}
	export interface HighlightFormProperties {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number: FormControl<string | null | undefined>,

		/** Type: float */
		duration: FormControl<number | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label: FormControl<string | null | undefined>,

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title: FormControl<string | null | undefined>,
		snippet_url: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateHighlightFormGroup() {
		return new FormGroup<HighlightFormProperties>({
			catalogue_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			duration: new FormControl<number | null | undefined>(undefined),
			music_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			record_label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			recording_date: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(10)]),
			release_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			snippet_url: new FormControl<string | null | undefined>(undefined),
			source_media: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			title: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			track_side: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Image {
		author?: string | null;

		/** Required */
		embargoed: BrandEmbargoed;
		identifiers?: Identifiers;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		shoot_date?: Date | null;
		source_asset?: Source_asset;
		synopses?: Synopses;
		template_url?: string | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ImageFormProperties {
		author: FormControl<string | null | undefined>,

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		shoot_date: FormControl<Date | null | undefined>,
		template_url: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			shoot_date: new FormControl<Date | null | undefined>(undefined),
			template_url: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Source_asset {
		dimensions?: Dimensions;
		focus_point?: Focus_point;
		mime_type?: string | null;
		size?: Size;
		uri?: string | null;
	}
	export interface Source_assetFormProperties {
		mime_type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSource_assetFormGroup() {
		return new FormGroup<Source_assetFormProperties>({
			mime_type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Size {
		units?: string | null;
	}
	export interface SizeFormProperties {
		units: FormControl<string | null | undefined>,
	}
	export function CreateSizeFormGroup() {
		return new FormGroup<SizeFormProperties>({
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Item {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number?: string | null;
		contributions_mixin?: Contributions_mixin;

		/** Type: float */
		duration?: number | null;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		item_of?: Reference;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code?: string | null;
		offsets?: Offsets;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		play_events?: Play_events;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label?: string | null;

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title?: string | null;
		snippet_url?: string | null;

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media?: string | null;
		synopses?: Synopses;
		title?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side?: string | null;
		type?: string | null;
		updated_time?: Date | null;
	}
	export interface ItemFormProperties {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number: FormControl<string | null | undefined>,

		/** Type: float */
		duration: FormControl<number | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label: FormControl<string | null | undefined>,

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title: FormControl<string | null | undefined>,
		snippet_url: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			catalogue_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			duration: new FormControl<number | null | undefined>(undefined),
			music_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			record_label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			recording_date: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(10)]),
			release_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			snippet_url: new FormControl<string | null | undefined>(undefined),
			source_media: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			title: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			track_side: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Item_of extends ReferenceAttributes {
		href_deprecated?: boolean | null;
		result_type_deprecated?: boolean | null;
	}
	export interface Item_ofFormProperties extends ReferenceAttributesFormProperties {
		href_deprecated: FormControl<boolean | null | undefined>,
		result_type_deprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateItem_ofFormGroup() {
		return new FormGroup<Item_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href_deprecated: new FormControl<boolean | null | undefined>(undefined),
			result_type_deprecated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Items_for extends ReferenceAttributes {
		href_deprecated?: boolean | null;
		result_type_deprecated?: boolean | null;
	}
	export interface Items_forFormProperties extends ReferenceAttributesFormProperties {
		href_deprecated: FormControl<boolean | null | undefined>,
		result_type_deprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateItems_forFormGroup() {
		return new FormGroup<Items_forFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href_deprecated: new FormControl<boolean | null | undefined>(undefined),
			result_type_deprecated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Master_brand {
		colour?: string | null;
		competition_warning?: Master_brandCompetition_warning;
		ident?: string | null;
		identifiers?: Identifiers;
		image_link?: Image_link;
		images_mixin?: Images_mixin;
		master_brand_date_range?: Master_brandMaster_brand_date_range;

		/** Required */
		mid: string;
		name?: string | null;

		/** Required */
		partner: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;
		synopses?: Master_brandSynopses;
		title?: string | null;
		url_key?: string | null;
	}
	export interface Master_brandFormProperties {
		colour: FormControl<string | null | undefined>,
		ident: FormControl<string | null | undefined>,

		/** Required */
		mid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateMaster_brandFormGroup() {
		return new FormGroup<Master_brandFormProperties>({
			colour: new FormControl<string | null | undefined>(undefined),
			ident: new FormControl<string | null | undefined>(undefined),
			mid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Master_brandCompetition_warning {

		/** Required */
		href: string;

		/** Required */
		pid: string;
	}
	export interface Master_brandCompetition_warningFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
	}
	export function CreateMaster_brandCompetition_warningFormGroup() {
		return new FormGroup<Master_brandCompetition_warningFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
		});

	}

	export interface Master_brandMaster_brand_date_range {
		end?: Date | null;
		start?: Date | null;
	}
	export interface Master_brandMaster_brand_date_rangeFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateMaster_brandMaster_brand_date_rangeFormGroup() {
		return new FormGroup<Master_brandMaster_brand_date_rangeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Master_brandSynopses {
		long?: string | null;
		medium?: string | null;
		short?: string | null;
	}
	export interface Master_brandSynopsesFormProperties {
		long: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		short: FormControl<string | null | undefined>,
	}
	export function CreateMaster_brandSynopsesFormGroup() {
		return new FormGroup<Master_brandSynopsesFormProperties>({
			long: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			short: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media_availability_time {
		end?: Date | null;
		start?: Date | null;
	}
	export interface Media_availability_timeFormProperties {
		end: FormControl<Date | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateMedia_availability_timeFormGroup() {
		return new FormGroup<Media_availability_timeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum Media_type { Video = 'Video', Audio = 'Audio' }

	export interface Music {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number?: string | null;
		contributions_mixin?: Contributions_mixin;

		/** Type: float */
		duration?: number | null;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		item_of?: Reference;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code?: string | null;
		offsets?: Offsets;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		play_events?: Play_events;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label?: string | null;

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title?: string | null;
		snippet_url?: string | null;

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media?: string | null;
		synopses?: Synopses;
		title?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side?: string | null;
		type?: string | null;
		updated_time?: Date | null;
	}
	export interface MusicFormProperties {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number: FormControl<string | null | undefined>,

		/** Type: float */
		duration: FormControl<number | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label: FormControl<string | null | undefined>,

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title: FormControl<string | null | undefined>,
		snippet_url: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateMusicFormGroup() {
		return new FormGroup<MusicFormProperties>({
			catalogue_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			duration: new FormControl<number | null | undefined>(undefined),
			music_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			record_label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			recording_date: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(10)]),
			release_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			snippet_url: new FormControl<string | null | undefined>(undefined),
			source_media: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			title: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			track_side: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Next {

		/** Required */
		href: string;
	}
	export interface NextFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateNextFormGroup() {
		return new FormGroup<NextFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Nitro {
		deprecations?: Deprecations;
		filters?: Filters;
		mixins?: Mixins;
		pagination?: Pagination;
		results?: Results;
		sorts?: Sorts;
	}
	export interface NitroFormProperties {
	}
	export function CreateNitroFormGroup() {
		return new FormGroup<NitroFormProperties>({
		});

	}

	export interface Pagination {
		next?: Next;
		previous?: Previous;
	}
	export interface PaginationFormProperties {
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
		});

	}

	export interface Previous {

		/** Required */
		href: string;
	}
	export interface PreviousFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreatePreviousFormGroup() {
		return new FormGroup<PreviousFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Results {
		availability?: Availability;
		brand?: Brand;
		broadcast?: Broadcast;
		chapter?: Item;
		clip?: Clip;
		collection?: Group_body;
		contributor?: Contributor;
		episode?: Episode;
		franchise?: Group_body;
		gallery?: Group_body;
		highlight?: Item;
		image?: Image;
		master_brand?: Master_brand;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		more_than?: number | null;
		music?: Item;
		other?: Item;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_size: number;
		promotion?: Promotion;
		season?: Group_body;
		series?: Series;
		service?: Service;
		speech?: Item;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		version_group?: Version_group;
		window?: Window;
	}
	export interface ResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		more_than: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_size: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateResultsFormGroup() {
		return new FormGroup<ResultsFormProperties>({
			more_than: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Promotion {
		context?: Context;
		end_time?: Date | null;
		identifiers?: Identifiers;

		/** Required */
		partner: string;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		priority?: number | null;
		promoted_by?: string | null;
		promoted_for?: string | null;
		promotion_of?: PidReference;
		related_links?: Related_links;
		start_time?: Date | null;
		status?: string | null;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		uri?: string | null;
		url?: string | null;
	}
	export interface PromotionFormProperties {
		end_time: FormControl<Date | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		priority: FormControl<number | null | undefined>,
		promoted_by: FormControl<string | null | undefined>,
		promoted_for: FormControl<string | null | undefined>,
		start_time: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		uri: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
			end_time: new FormControl<Date | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			priority: new FormControl<number | null | undefined>(undefined),
			promoted_by: new FormControl<string | null | undefined>(undefined),
			promoted_for: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Series {
		alternate_images_mixin?: Alternate_images_mixin;
		ancestor_titles?: Ancestor_titles;
		ancestors?: Reference;
		ancestors_titles?: Ancestors_titles;
		availability_mixin?: Availability_mixin;
		contributions_mixin?: Contributions_mixin;

		/** Required */
		embargoed: BrandEmbargoed;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expected_child_count?: number | null;
		genre_groupings?: GenreGroupingsType;
		identifiers?: Identifiers;
		image_link?: Image_link;
		images_mixin?: Images_mixin;
		is_embeddable?: boolean | null;
		items_for?: Reference;
		master_brand_link?: Master_brand_link;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		previous_next_mixin?: Previous_next_mixin;
		programme_formats?: Programme_formats;
		programme_type?: Programme_type;
		related_links?: Related_links;
		release_date_group?: Release_date_group;
		series_of?: PidReference;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		uri?: string | null;
	}
	export interface SeriesFormProperties {

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expected_child_count: FormControl<number | null | undefined>,
		is_embeddable: FormControl<boolean | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSeriesFormGroup() {
		return new FormGroup<SeriesFormProperties>({
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			expected_child_count: new FormControl<number | null | undefined>(undefined),
			is_embeddable: new FormControl<boolean | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Service {
		date_range?: DateRange;
		description?: string | null;
		identifiers?: Identifiers;
		ids?: Ids;
		is_concrete?: boolean | null;
		is_downloadable?: boolean | null;
		is_streamable?: boolean | null;
		master_brand_link?: Master_brand_link;
		media_type?: ClipMedia_type | null;
		name?: string | null;

		/** Required */
		partner: string;
		region?: string | null;

		/** Required */
		sid: string;
		type?: string | null;
		updated_time?: Date | null;
	}
	export interface ServiceFormProperties {
		description: FormControl<string | null | undefined>,
		is_concrete: FormControl<boolean | null | undefined>,
		is_downloadable: FormControl<boolean | null | undefined>,
		is_streamable: FormControl<boolean | null | undefined>,
		media_type: FormControl<ClipMedia_type | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,

		/** Required */
		sid: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			is_concrete: new FormControl<boolean | null | undefined>(undefined),
			is_downloadable: new FormControl<boolean | null | undefined>(undefined),
			is_streamable: new FormControl<boolean | null | undefined>(undefined),
			media_type: new FormControl<ClipMedia_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			region: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-z0-9A-Z_\.\-]+')]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Version_group {

		/** Required */
		version: Version_groupVersion;
	}
	export interface Version_groupFormProperties {
	}
	export function CreateVersion_groupFormGroup() {
		return new FormGroup<Version_groupFormProperties>({
		});

	}

	export interface Version_groupVersion {
		aspect_ratio?: string | null;
		competition_warning?: boolean | null;
		duration?: string | null;
		identifiers?: Identifiers;
		ids?: Ids;

		/** Required */
		pid: string;
		types_with_id?: Types_with_id;

		/** Required */
		updated_time: Date;

		/** Required */
		version: Version_groupVersionVersion;
		version_of?: PidReference;
		version_types_with_id?: Version_types_with_id;
		warnings?: Warnings;
	}
	export interface Version_groupVersionFormProperties {
		aspect_ratio: FormControl<string | null | undefined>,
		competition_warning: FormControl<boolean | null | undefined>,
		duration: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateVersion_groupVersionFormGroup() {
		return new FormGroup<Version_groupVersionFormProperties>({
			aspect_ratio: new FormControl<string | null | undefined>(undefined),
			competition_warning: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Types_with_id {

		/** Required */
		types: Types_with_idTypes;
	}
	export interface Types_with_idFormProperties {
	}
	export function CreateTypes_with_idFormGroup() {
		return new FormGroup<Types_with_idFormProperties>({
		});

	}

	export interface Types_with_idTypes {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Types_with_idTypesType: Array<Types_with_idTypesType>;
	}
	export interface Types_with_idTypesFormProperties {
	}
	export function CreateTypes_with_idTypesFormGroup() {
		return new FormGroup<Types_with_idTypesFormProperties>({
		});

	}

	export interface Types_with_idTypesType {
		id?: string | null;

		/** Required */
		types: Types_with_idTypesTypeTypes;
	}
	export interface Types_with_idTypesTypeFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateTypes_with_idTypesTypeFormGroup() {
		return new FormGroup<Types_with_idTypesTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Types_with_idTypesTypeTypes {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Types_with_idTypesTypeTypesType: Array<Types_with_idTypesTypeTypesType>;
	}
	export interface Types_with_idTypesTypeTypesFormProperties {
	}
	export function CreateTypes_with_idTypesTypeTypesFormGroup() {
		return new FormGroup<Types_with_idTypesTypeTypesFormProperties>({
		});

	}

	export interface Types_with_idTypesTypeTypesType {
		id?: string | null;
	}
	export interface Types_with_idTypesTypeTypesTypeFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateTypes_with_idTypesTypeTypesTypeFormGroup() {
		return new FormGroup<Types_with_idTypesTypeTypesTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Version_groupVersionVersion {
		aspect_ratio?: string | null;
		competition_warning?: boolean | null;
		duration?: string | null;
		identifiers?: Identifiers;
		ids?: Ids;

		/** Required */
		pid: string;
		types_with_id?: Types_with_id;

		/** Required */
		updated_time: Date;
		version_of?: PidReference;
		version_types_with_id?: Version_types_with_id;
		warnings?: Warnings;
	}
	export interface Version_groupVersionVersionFormProperties {
		aspect_ratio: FormControl<string | null | undefined>,
		competition_warning: FormControl<boolean | null | undefined>,
		duration: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateVersion_groupVersionVersionFormGroup() {
		return new FormGroup<Version_groupVersionVersionFormProperties>({
			aspect_ratio: new FormControl<string | null | undefined>(undefined),
			competition_warning: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Version_types_with_id {

		/** Required */
		version_types: Version_types_with_idVersion_types;
	}
	export interface Version_types_with_idFormProperties {
	}
	export function CreateVersion_types_with_idFormGroup() {
		return new FormGroup<Version_types_with_idFormProperties>({
		});

	}

	export interface Version_types_with_idVersion_types {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Version_types_with_idVersion_typesVersion_type: Array<Version_types_with_idVersion_typesVersion_type>;
	}
	export interface Version_types_with_idVersion_typesFormProperties {
	}
	export function CreateVersion_types_with_idVersion_typesFormGroup() {
		return new FormGroup<Version_types_with_idVersion_typesFormProperties>({
		});

	}

	export interface Version_types_with_idVersion_typesVersion_type {
		id?: string | null;

		/** Required */
		version_types: Version_types_with_idVersion_typesVersion_typeVersion_types;
	}
	export interface Version_types_with_idVersion_typesVersion_typeFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateVersion_types_with_idVersion_typesVersion_typeFormGroup() {
		return new FormGroup<Version_types_with_idVersion_typesVersion_typeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Version_types_with_idVersion_typesVersion_typeVersion_types {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Version_types_with_idVersion_typesVersion_typeVersion_typesVersion_type: Array<Version_types_with_idVersion_typesVersion_typeVersion_typesVersion_type>;
	}
	export interface Version_types_with_idVersion_typesVersion_typeVersion_typesFormProperties {
	}
	export function CreateVersion_types_with_idVersion_typesVersion_typeVersion_typesFormGroup() {
		return new FormGroup<Version_types_with_idVersion_typesVersion_typeVersion_typesFormProperties>({
		});

	}

	export interface Version_types_with_idVersion_typesVersion_typeVersion_typesVersion_type {
		id?: string | null;
	}
	export interface Version_types_with_idVersion_typesVersion_typeVersion_typesVersion_typeFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateVersion_types_with_idVersion_typesVersion_typeVersion_typesVersion_typeFormGroup() {
		return new FormGroup<Version_types_with_idVersion_typesVersion_typeVersion_typesVersion_typeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Warnings {
		warning?: Array<Warning>;
		warning_text?: Array<Warning_text>;
	}
	export interface WarningsFormProperties {
	}
	export function CreateWarningsFormGroup() {
		return new FormGroup<WarningsFormProperties>({
		});

	}

	export interface Warning {
		'#text'?: string | null;
		short_description?: string | null;
		warning_code?: string | null;
	}
	export interface WarningFormProperties {
		'#text': FormControl<string | null | undefined>,
		short_description: FormControl<string | null | undefined>,
		warning_code: FormControl<string | null | undefined>,
	}
	export function CreateWarningFormGroup() {
		return new FormGroup<WarningFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			short_description: new FormControl<string | null | undefined>(undefined),
			warning_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Warning_text {
		'#text'?: string | null;
		length?: string | null;
	}
	export interface Warning_textFormProperties {
		'#text': FormControl<string | null | undefined>,
		length: FormControl<string | null | undefined>,
	}
	export function CreateWarning_textFormGroup() {
		return new FormGroup<Warning_textFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Window {
		accurate_programme_time?: DateRange;
		ancestor_titles?: Ancestor_titles;
		ancestors_titles?: Ancestors_titles;
		identifiers?: Identifiers;
		ids?: Ids;
		image_link?: Image_link;
		images_mixin?: Images_mixin;
		media_availability_time?: DateRange;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		scheduled_publication_rights?: Scheduled_publication_rights;
		scheduled_time?: Scheduled_time;
		service?: ServiceReference;
		updated_time?: Date | null;
		window_of?: Array<PidReference>;
	}
	export interface WindowFormProperties {

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateWindowFormGroup() {
		return new FormGroup<WindowFormProperties>({
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Scheduled_publication_rights {
		publication_rights?: Array<Publication_rights>;
	}
	export interface Scheduled_publication_rightsFormProperties {
	}
	export function CreateScheduled_publication_rightsFormGroup() {
		return new FormGroup<Scheduled_publication_rightsFormProperties>({
		});

	}

	export interface Publication_rights {
		'#text'?: string | null;
		context?: string | null;
		platform?: string | null;
		territory?: string | null;
		transport?: string | null;
	}
	export interface Publication_rightsFormProperties {
		'#text': FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		territory: FormControl<string | null | undefined>,
		transport: FormControl<string | null | undefined>,
	}
	export function CreatePublication_rightsFormGroup() {
		return new FormGroup<Publication_rightsFormProperties>({
			'#text': new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			territory: new FormControl<string | null | undefined>(undefined),
			transport: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Other {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number?: string | null;
		contributions_mixin?: Contributions_mixin;

		/** Type: float */
		duration?: number | null;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		item_of?: Reference;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code?: string | null;
		offsets?: Offsets;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		play_events?: Play_events;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label?: string | null;

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title?: string | null;
		snippet_url?: string | null;

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media?: string | null;
		synopses?: Synopses;
		title?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side?: string | null;
		type?: string | null;
		updated_time?: Date | null;
	}
	export interface OtherFormProperties {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number: FormControl<string | null | undefined>,

		/** Type: float */
		duration: FormControl<number | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label: FormControl<string | null | undefined>,

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title: FormControl<string | null | undefined>,
		snippet_url: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateOtherFormGroup() {
		return new FormGroup<OtherFormProperties>({
			catalogue_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			duration: new FormControl<number | null | undefined>(undefined),
			music_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			record_label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			recording_date: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(10)]),
			release_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			snippet_url: new FormControl<string | null | undefined>(undefined),
			source_media: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			title: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			track_side: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Promotion_of {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface Promotion_ofFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreatePromotion_ofFormGroup() {
		return new FormGroup<Promotion_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Published_time extends DateRange {
		duration?: string | null;
	}
	export interface Published_timeFormProperties extends DateRangeFormProperties {
		duration: FormControl<string | null | undefined>,
	}
	export function CreatePublished_timeFormGroup() {
		return new FormGroup<Published_timeFormProperties>({
			end: new FormControl<Date | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$')]),
		});

	}

	export interface Reference extends ReferenceAttributes {
		href_deprecated?: boolean | null;
		result_type_deprecated?: boolean | null;
	}
	export interface ReferenceFormProperties extends ReferenceAttributesFormProperties {
		href_deprecated: FormControl<boolean | null | undefined>,
		result_type_deprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href_deprecated: new FormControl<boolean | null | undefined>(undefined),
			result_type_deprecated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReferenceAttributes {

		/** Required */
		href: string;

		/** Required */
		result_type: string;
	}
	export interface ReferenceAttributesFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateReferenceAttributesFormGroup() {
		return new FormGroup<ReferenceAttributesFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Release_status_type { alpha = 'alpha', beta = 'beta', supported = 'supported', deprecated = 'deprecated' }

	export interface Season {
		alternate_images_mixin?: Alternate_images_mixin;

		/** Required */
		embargoed: BrandEmbargoed;
		for_programmes?: For_programmes;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		master_brand_link?: Master_brand_link;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		related_links?: Related_links;
		scheduled?: Scheduled;
		synopses?: Synopses;
		title?: string | null;

		/** Required */
		updated_time: Date;
		url_key?: string | null;
	}
	export interface SeasonFormProperties {

		/** Required */
		embargoed: FormControl<BrandEmbargoed | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		updated_time: FormControl<Date | null | undefined>,
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
			embargoed: new FormControl<BrandEmbargoed | null | undefined>(undefined, [Validators.required]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			title: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Series_of {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface Series_ofFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateSeries_ofFormGroup() {
		return new FormGroup<Series_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Speech {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number?: string | null;
		contributions_mixin?: Contributions_mixin;

		/** Type: float */
		duration?: number | null;
		identifiers?: Identifiers;
		ids?: Ids;
		images_mixin?: Images_mixin;
		item_of?: Reference;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code?: string | null;
		offsets?: Offsets;

		/** Required */
		partner: string;

		/** Required */
		pid: string;
		play_events?: Play_events;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label?: string | null;

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date?: string | null;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title?: string | null;
		snippet_url?: string | null;

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media?: string | null;
		synopses?: Synopses;
		title?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number?: string | null;

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side?: string | null;
		type?: string | null;
		updated_time?: Date | null;
	}
	export interface SpeechFormProperties {

		/**
		 * Min length: 1
		 * Max length: 32
		 */
		catalogue_number: FormControl<string | null | undefined>,

		/** Type: float */
		duration: FormControl<number | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		music_code: FormControl<string | null | undefined>,

		/** Required */
		partner: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		record_label: FormControl<string | null | undefined>,

		/**
		 * Min length: 4
		 * Max length: 10
		 */
		recording_date: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		release_title: FormControl<string | null | undefined>,
		snippet_url: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 64
		 */
		source_media: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_number: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 8
		 */
		track_side: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_time: FormControl<Date | null | undefined>,
	}
	export function CreateSpeechFormGroup() {
		return new FormGroup<SpeechFormProperties>({
			catalogue_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			duration: new FormControl<number | null | undefined>(undefined),
			music_code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			partner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			record_label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			recording_date: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(10)]),
			release_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			snippet_url: new FormControl<string | null | undefined>(undefined),
			source_media: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			title: new FormControl<string | null | undefined>(undefined),
			track_number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			track_side: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(8)]),
			type: new FormControl<string | null | undefined>(undefined),
			updated_time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Version_of {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface Version_ofFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateVersion_ofFormGroup() {
		return new FormGroup<Version_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Window_of {
		href?: string | null;

		/** Required */
		pid: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Required */
		result_type: string;
	}
	export interface Window_ofFormProperties {
		href: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Required */
		result_type: FormControl<string | null | undefined>,
	}
	export function CreateWindow_ofFormGroup() {
		return new FormGroup<Window_ofFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('([a-z0-9\.\-]+|.*PID.*)')]),
			position: new FormControl<number | null | undefined>(undefined),
			result_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The XQuery language version. */
	export enum Xquery_version { '1.0-ml' = '1.0-ml', '0.9-ml' = '0.9-ml', _1_0 = '1.0', XSLT = 'XSLT' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get API definition
		 * Get API definition
		 * Get 
		 * @return {void} Metadata response
		 */
		GetAPI(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Discover details of on-demand availability for programmes and their versions
		 * Discover details of on-demand availability for programmes and their versions
		 * Get availabilities
		 * @param {ListAvailabilitySort} sort Sorts:
		 * * scheduled_start: sort chronologically by scheduled start time/date, ascending
		 * @param {ListAvailabilitySort_direction} sort_direction Sort direction
		 * @param {Array<string>} availability filter for subset of availabilities
		 * @param {Array<string>} descendants_of filter for subset of availabilities that have PID as ancestor
		 * @param {Array<string>} media_set filter for subset of availabilities with media set
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} territory filter for availabilities in given territory
		 * @param {boolean} debug Turn on debug information (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListAvailability(sort: ListAvailabilitySort | null | undefined, sort_direction: ListAvailabilitySort_direction | null | undefined, availability: Array<string> | null | undefined, descendants_of: Array<string> | null | undefined, media_set: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, territory: Array<string> | null | undefined, debug: boolean | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'availabilities?sort=' + sort + '&sort_direction=' + sort_direction + '&' + availability?.map(z => `availability=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of?.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&' + media_set?.map(z => `media_set=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + territory?.map(z => `territory=${encodeURIComponent(z)}`).join('&') + '&debug=' + debug, {});
		}

		/**
		 * Build schedules and find metadata for TV and radio broadcasts
		 * Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.
		 * Get broadcasts
		 * @param {ListBroadcastsSort} sort Sorts:
		 * * start_date: sort chronologically by scheduled start time/date, ascending
		 * @param {ListAvailabilitySort_direction} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * titles: return ancestor programme titles
		 * @param {Array<string>} authority filter for subset of broadcasts that have given authority
		 * @param {Array<string>} descendants_of filter for subset of broadcasts that are descendants of the given programme PID
		 * @param {Date} end_from filter for subset of broadcasts that end on or later than the specified datetime
		 * @param {Date} end_to filter for subset of broadcasts that end on or earlier than the specified datetime
		 * @param {Array<string>} format filter for subset of broadcasts that are classified in the given format ID
		 * @param {Array<string>} genre filter for subset of broadcasts that are classified in the given genre ID
		 * @param {Array<string>} id filter for subset of broadcasts that have given identifier
		 * @param {Array<string>} item filter for subset of broadcasts with the given item performed on it
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {string} people filter for subset of broadcasts that have given contributor
		 * @param {Array<string>} pid filter for subset of broadcasts having given PID
		 * @param {string} q filter for subset of broadcasts matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Date} schedule_day filter for subset of broadcasts that start on the specified day (BBC time)
		 *     Type: DateOnly
		 * @param {Date} schedule_day_from filter for subset of broadcasts that start on or after the specified day (BBC time)
		 *     Type: DateOnly
		 * @param {Date} schedule_day_to filter for subset of broadcasts that start on or before the specified day (BBC time)
		 *     Type: DateOnly
		 * @param {Array<string>} service_master_brand filter for subset of broadcasts with given service master brand
		 * @param {Array<string>} sid filter for subset of broadcasts that are on the specified linear service
		 * @param {Date} start_from filter for subset of broadcasts that start on or later than the specified datetime
		 * @param {Date} start_to filter for subset of broadcasts that start on or earlier than the specified datetime
		 * @param {Array<string>} version filter for subset of broadcasts with given PID as their parent version
		 * @return {Nitro} Nitro response
		 */
		ListBroadcasts(sort: ListBroadcastsSort | null | undefined, sort_direction: ListAvailabilitySort_direction | null | undefined, mixin: Array<string> | null | undefined, authority: Array<string> | null | undefined, descendants_of: Array<string> | null | undefined, end_from: Date | null | undefined, end_to: Date | null | undefined, format: Array<string> | null | undefined, genre: Array<string> | null | undefined, id: Array<string> | null | undefined, item: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, people: string | null | undefined, pid: Array<string> | null | undefined, q: string | null | undefined, schedule_day: Date | null | undefined, schedule_day_from: Date | null | undefined, schedule_day_to: Date | null | undefined, service_master_brand: Array<string> | null | undefined, sid: Array<string> | null | undefined, start_from: Date | null | undefined, start_to: Date | null | undefined, version: Array<string> | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'broadcasts?sort=' + sort + '&sort_direction=' + sort_direction + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + authority?.map(z => `authority=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of?.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&end_from=' + end_from?.toISOString() + '&end_to=' + end_to?.toISOString() + '&' + format?.map(z => `format=${encodeURIComponent(z)}`).join('&') + '&' + genre?.map(z => `genre=${encodeURIComponent(z)}`).join('&') + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&' + item?.map(z => `item=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&schedule_day=' + schedule_day?.toISOString() + '&schedule_day_from=' + schedule_day_from?.toISOString() + '&schedule_day_to=' + schedule_day_to?.toISOString() + '&' + service_master_brand?.map(z => `service_master_brand=${encodeURIComponent(z)}`).join('&') + '&' + sid?.map(z => `sid=${encodeURIComponent(z)}`).join('&') + '&start_from=' + start_from?.toISOString() + '&start_to=' + start_to?.toISOString() + '&' + version?.map(z => `version=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Find metadata for curated groups: seasons, collections, galleries or franchises
		 * Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries
		 * Get groups
		 * @param {ListGroupsSort} sort Sorts:
		 * * pid: sort alphabetically by PID
		 * @param {ListGroupsSort_direction} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * alternate_images: mixin to return the alternate images for a group
		 * * group_for: mixin to return links to programme entities that group belongs to
		 * * images: mixin to add image information for a group
		 * * related_links: mixin to return related links for the group
		 * @param {string} for_descendants_of filter for groups related to given programme or its descendants
		 *     Min length: 8
		 * @param {string} for_programme filter for subset of groups directly related to a given programme
		 *     Min length: 8
		 * @param {string} group filter for subset of groups which belong to the given group pid
		 *     Min length: 8
		 * @param {Array<string>} group_type filter for subset of groups that have the given group type
		 * @param {string} member filter for subset of groups which contain an entity with the given pid as a member
		 *     Min length: 8
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for groups by partner ID
		 * @param {Array<string>} partner_pid filter for groups by partner PID
		 * @param {Array<string>} pid filter for subset of seasons, collections, galleries or franchises having given PID
		 * @param {string} q filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)
		 * @param {ListGroupsEmbargoed} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListGroups(sort: ListGroupsSort | null | undefined, sort_direction: ListGroupsSort_direction | null | undefined, mixin: Array<string> | null | undefined, for_descendants_of: string | null | undefined, for_programme: string | null | undefined, group: string | null | undefined, group_type: Array<string> | null | undefined, member: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, pid: Array<string> | null | undefined, q: string | null | undefined, embargoed: ListGroupsEmbargoed | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'groups?sort=' + sort + '&sort_direction=' + sort_direction + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&for_descendants_of=' + (for_descendants_of == null ? '' : encodeURIComponent(for_descendants_of)) + '&for_programme=' + (for_programme == null ? '' : encodeURIComponent(for_programme)) + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&' + group_type?.map(z => `group_type=${encodeURIComponent(z)}`).join('&') + '&member=' + (member == null ? '' : encodeURIComponent(member)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&embargoed=' + embargoed, {});
		}

		/**
		 * Find metadata for images
		 * Find metadata for images, particularly those in galleries
		 * Get images
		 * @param {ListImagesSort} sort Sorts:
		 * * group_position: sort numerically by position, ascending only
		 * * pid: sort alphabetically by PID
		 * @param {ListAvailabilitySort_direction} sort_direction Sort direction
		 * @param {string} group filter for images belonging to the given group (i.e. Gallery)
		 *     Min length: 8
		 * @param {Array<string>} image_type filter for images by type
		 * @param {string} is_alternate_image_for filter for alternate images by entity PID
		 *     Min length: 8
		 * @param {string} is_image_for filter for images by entity PID
		 *     Min length: 8
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for images by partner ID
		 * @param {Array<string>} partner_pid filter for images by partner PID
		 * @param {Array<string>} pid filter for subset of images having given PID
		 * @param {string} q filter for subset of images matching supplied keyword/phrase (boolean operators permitted)
		 * @param {ListGroupsEmbargoed} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListImages(sort: ListImagesSort | null | undefined, sort_direction: ListAvailabilitySort_direction | null | undefined, group: string | null | undefined, image_type: Array<string> | null | undefined, is_alternate_image_for: string | null | undefined, is_image_for: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, pid: Array<string> | null | undefined, q: string | null | undefined, embargoed: ListGroupsEmbargoed | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'images?sort=' + sort + '&sort_direction=' + sort_direction + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&' + image_type?.map(z => `image_type=${encodeURIComponent(z)}`).join('&') + '&is_alternate_image_for=' + (is_alternate_image_for == null ? '' : encodeURIComponent(is_alternate_image_for)) + '&is_image_for=' + (is_image_for == null ? '' : encodeURIComponent(is_image_for)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&embargoed=' + embargoed, {});
		}

		/**
		 * Look inside programmes to find segments: chapters, tracks and more
		 * Look inside programmes to find segments: chapters, tracks and more
		 * Get items
		 * @param {ListGroupsSort} sort Sorts:
		 * * pid: sort by pid, descending
		 * @param {ListGroupsSort_direction} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * contributions: mixin to return information about contributors to items
		 * * images: mixin to add image information for an item
		 * * offset: mixin to return programme segment offsets, works in conjunction with programme filter
		 * * play_event: mixin to return programme segment events, works in conjunction with programme or segment_event filters
		 * @param {string} authority filter for subset of items that have an ID issued by the given authority
		 * @param {Array<string>} id filter for subset of items having given ID
		 * @param {string} id_type filter for subset of items that have given an ID of the given type
		 * @param {Array<string>} item_type filter for specific type(s) of items
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for items by partner ID
		 * @param {Array<string>} partner_pid filter for items by partner PID
		 * @param {string} people filter for subset of items that have specified person involved
		 * @param {Array<string>} pid filter for subset of items matching one of the given PIDs
		 * @param {string} programme filter for subset of items that are part of the given programme
		 *     Min length: 8
		 * @param {string} q filter for subset of items matching supplied keyword/phrase (boolean operators permitted)
		 * @param {string} segment_event filter for item with the given segment_event
		 * @return {Nitro} Nitro response
		 */
		ListItems(sort: ListGroupsSort | null | undefined, sort_direction: ListGroupsSort_direction | null | undefined, mixin: Array<string> | null | undefined, authority: string | null | undefined, id: Array<string> | null | undefined, id_type: string | null | undefined, item_type: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, people: string | null | undefined, pid: Array<string> | null | undefined, programme: string | null | undefined, q: string | null | undefined, segment_event: string | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'items?sort=' + sort + '&sort_direction=' + sort_direction + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&authority=' + (authority == null ? '' : encodeURIComponent(authority)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&id_type=' + (id_type == null ? '' : encodeURIComponent(id_type)) + '&' + item_type?.map(z => `item_type=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&segment_event=' + (segment_event == null ? '' : encodeURIComponent(segment_event)), {});
		}

		/**
		 * List all Master Brands
		 * List all Master Brands
		 * Get master_brands
		 * @param {ListMasterbrandsSort} sort Sorts:
		 * * mid: sort by mid, ascending
		 * @param {ListMasterbrandsSort_direction} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * images: mixin to add image information for a masterbrand
		 * @param {Array<string>} mid filter for subset of masterbrands that have given identifier
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for masterbrands by partner ID
		 * @param {Array<string>} partner_pid filter for masterbrands by partner PID
		 * @param {string} q filter for subset of masterbrands matching supplied keyword/phrase (boolean operators permitted)
		 * @return {Nitro} Nitro response
		 */
		ListMasterbrands(sort: ListMasterbrandsSort | null | undefined, sort_direction: ListMasterbrandsSort_direction | null | undefined, mixin: Array<string> | null | undefined, mid: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, q: string | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'master_brands?sort=' + sort + '&sort_direction=' + sort_direction + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + mid?.map(z => `mid=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Find the people behind and in programmes: cast, crew, guests and more
		 * The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)
		 * Get people
		 * @param {string} authority filter for subset of people that have an ID issued by the given authority
		 * @param {Array<BrandEmbargoed>} has_external_id filter for people who have an external identifier
		 * @param {Array<string>} id filter for subset of people having given ID
		 * @param {string} id_type filter for subset of people that have given an ID of the given type
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for people by partner ID
		 * @param {Array<string>} partner_pid filter for people by partner PID
		 * @param {Array<string>} pid filter for subset of people having given PID
		 * @param {string} programme filter for subset of people that have contributed to the given programme pid
		 * @param {string} q filter for subset of people matching supplied keyword/phrase (boolean operators permitted)
		 * @return {Nitro} Nitro response
		 */
		ListPeople(authority: string | null | undefined, has_external_id: Array<BrandEmbargoed> | null | undefined, id: Array<string> | null | undefined, id_type: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, pid: Array<string> | null | undefined, programme: string | null | undefined, q: string | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'people?authority=' + (authority == null ? '' : encodeURIComponent(authority)) + '&' + has_external_id?.map(z => `has_external_id=${z}`).join('&') + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&id_type=' + (id_type == null ? '' : encodeURIComponent(id_type)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Look inside pips entities
		 * Look inside pips entities
		 * Get pips
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {string} q filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)
		 * @return {Nitro} Nitro response
		 */
		ListPips(page: number | null | undefined, page_size: number | null | undefined, q: string | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'pips?page=' + page + '&page_size=' + page_size + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Exposes programme information for a single pid
		 * Exposes programme information for a single pid
		 * Get programme_details
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {string} partner_pid Filter for programme information by partner PID
		 *     Min length: 8
		 * @param {string} pid Filter for programme information for the provided PID
		 *     Min length: 8
		 * @return {Nitro} Nitro response
		 */
		ListProgrammeDetails(page: number | null | undefined, page_size: number | null | undefined, partner_pid: string | null | undefined, pid: string | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'programme_details?page=' + page + '&page_size=' + page_size + '&partner_pid=' + (partner_pid == null ? '' : encodeURIComponent(partner_pid)) + '&pid=' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Start here for programmes metadata: Brands, Series, Episodes and Clips
		 * Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.
		 * Get programmes
		 * @param {ListProgrammesSort} sort Sorts:
		 * * group_position: sort numerically by position in group, ascending
		 * * pid: sort alphabetically by PID, descending
		 * * position: sort numerically by position, ascending
		 * * promotion: sort by promotion rank, ascending
		 * * release_date: sort chronologically by release date, descending
		 * * relevance: sort by weighting of search term (use with q parameter)
		 * * scheduled_start: sort chronologically by scheduled start time/date, ascending
		 * * strict_title: sort alphabetically by title, ascending
		 * * title: sort by title librarian style (ignoring leading 'The', 'A', etc), ascending
		 * * tree: sort by root pid and then preorder tree sort. Requires entities to have release date.
		 * @param {ListAvailabilitySort_direction} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * alternate_images: mixin to return the alternate images for a programme
		 * * ancestor_titles: mixin to return ancestor programme titles
		 * * availability: mixin to return programme availability information
		 * * available_simulcasts: mixin to return information about programmes that are currently available as simulcasts
		 * * available_versions: mixin to return information about programmes that are currently available on demand
		 * * available_webcasts: mixin to return information about programmes that are currently available as webcasts
		 * * contributions: mixin to return information about contributors to a programme
		 * * duration: mixin to return original version duration in programme concept entities
		 * * genre_groupings: mixin to return list of genre groupings
		 * * genre_groups: mixin to return list of genre groups
		 * * images: mixin to add image information for a programme
		 * * is_embeddable: mixin to add embeddable information for a programme
		 * * previous_next: mixin to return the programmes which appear before and after a programme (as determined by the sort applied in the request)
		 * * programme_type: mixin to return the programme type
		 * * related_links: mixin to return information about related links to a programme
		 * * titles: mixin to return ancestor programme titles
		 * * versions_availability: mixin to return information about programmes that are currently available
		 * @param {Array<BrandEmbargoed>} audio_described filter for subset of programmes that are audio-described
		 * @param {Array<string>} availability filter for subset of programmes that have availability
		 * @param {Array<string>} availability_entity_type additional filter when availability=available
		 * @param {Date} availability_from filter for subset of programmes that are available after or at the specified datetime
		 * @param {Array<string>} availability_type filter for a subset of programmes that are available for a given type
		 * @param {Array<string>} children_of filter for subset of programmes that have PID as immediate parent
		 * @param {Array<string>} descendants_of filter for subset of programmes that have PID as ancestor
		 * @param {Array<string>} duration filter for subset of programmes that have given duration
		 * @param {Array<string>} entity_type filter for subset of programmes that have given entity type
		 * @param {Array<string>} format filter for subset of programmes with format
		 * @param {Array<string>} genre filter for subset of programmes with genre
		 * @param {string} group filter for subset of programmes which belong to the given group pid
		 *     Min length: 8
		 * @param {string} initial_letter filter for subset of programmes with title beginning with initial letter librarian style (ignoring leading 'The', 'An' (Welsh), etc) 0-9 a-z
		 *     Min length: 1    Max length: 1
		 * @param {string} initial_letter_end Programmes with (librarian) titles whose initial letter is equal/before given letter. Use with initial_letter_start for a range
		 *     Min length: 1    Max length: 1
		 * @param {string} initial_letter_start Programmes with (librarian) titles whose initial letter is equal/after given letter. Use with initial_letter_end for range.
		 *     Min length: 1    Max length: 1
		 * @param {Array<string>} initial_letter_strict filter for subset of programmes with title beginning with initial letter
		 * @param {Array<string>} item filter for subset of programmes with linked to versions which have the given item pids
		 * @param {Array<string>} master_brand filter for subset of programmes with master_brand
		 * @param {string} media_set filter for subset of programmes with media set
		 * @param {Array<string>} media_type filter for subset of programmes with media type
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for programmes by partner ID
		 * @param {Array<string>} partner_pid filter for programmes by partner PID
		 * @param {Array<string>} payment_type filter for a subset of programmes that are of the given payment_type
		 * @param {string} people filter for subset of programmes with contributions by given people PID
		 *     Min length: 8
		 * @param {Array<string>} pid filter for subset of programmes having given PID
		 * @param {string} promoted_for filter for subset of programmes which are promoted for given service
		 * @param {string} q filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Array<string>} signed filter for subset of programmes that are signed
		 * @param {string} tag_name filter for subset of programmes with tag
		 * @param {string} tag_scheme filter for subset of programmes with a tag
		 * @param {Array<BrandEmbargoed>} tleo filter for subset of programmes that are TLEOs
		 * @param {Array<string>} version filter for subset of programmes with given PID as one of their versions
		 * @param {ListGroupsEmbargoed} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListProgrammes(sort: ListProgrammesSort | null | undefined, sort_direction: ListAvailabilitySort_direction | null | undefined, mixin: Array<string> | null | undefined, audio_described: Array<BrandEmbargoed> | null | undefined, availability: Array<string> | null | undefined, availability_entity_type: Array<string> | null | undefined, availability_from: Date | null | undefined, availability_type: Array<string> | null | undefined, children_of: Array<string> | null | undefined, descendants_of: Array<string> | null | undefined, duration: Array<string> | null | undefined, entity_type: Array<string> | null | undefined, format: Array<string> | null | undefined, genre: Array<string> | null | undefined, group: string | null | undefined, initial_letter: string | null | undefined, initial_letter_end: string | null | undefined, initial_letter_start: string | null | undefined, initial_letter_strict: Array<string> | null | undefined, item: Array<string> | null | undefined, master_brand: Array<string> | null | undefined, media_set: string | null | undefined, media_type: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, payment_type: Array<string> | null | undefined, people: string | null | undefined, pid: Array<string> | null | undefined, promoted_for: string | null | undefined, q: string | null | undefined, signed: Array<string> | null | undefined, tag_name: string | null | undefined, tag_scheme: string | null | undefined, tleo: Array<BrandEmbargoed> | null | undefined, version: Array<string> | null | undefined, embargoed: ListGroupsEmbargoed | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'programmes?sort=' + sort + '&sort_direction=' + sort_direction + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + audio_described?.map(z => `audio_described=${z}`).join('&') + '&' + availability?.map(z => `availability=${encodeURIComponent(z)}`).join('&') + '&' + availability_entity_type?.map(z => `availability_entity_type=${encodeURIComponent(z)}`).join('&') + '&availability_from=' + availability_from?.toISOString() + '&' + availability_type?.map(z => `availability_type=${encodeURIComponent(z)}`).join('&') + '&' + children_of?.map(z => `children_of=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of?.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&' + duration?.map(z => `duration=${encodeURIComponent(z)}`).join('&') + '&' + entity_type?.map(z => `entity_type=${encodeURIComponent(z)}`).join('&') + '&' + format?.map(z => `format=${encodeURIComponent(z)}`).join('&') + '&' + genre?.map(z => `genre=${encodeURIComponent(z)}`).join('&') + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&initial_letter=' + (initial_letter == null ? '' : encodeURIComponent(initial_letter)) + '&initial_letter_end=' + (initial_letter_end == null ? '' : encodeURIComponent(initial_letter_end)) + '&initial_letter_start=' + (initial_letter_start == null ? '' : encodeURIComponent(initial_letter_start)) + '&' + initial_letter_strict?.map(z => `initial_letter_strict=${encodeURIComponent(z)}`).join('&') + '&' + item?.map(z => `item=${encodeURIComponent(z)}`).join('&') + '&' + master_brand?.map(z => `master_brand=${encodeURIComponent(z)}`).join('&') + '&media_set=' + (media_set == null ? '' : encodeURIComponent(media_set)) + '&' + media_type?.map(z => `media_type=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + payment_type?.map(z => `payment_type=${encodeURIComponent(z)}`).join('&') + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&promoted_for=' + (promoted_for == null ? '' : encodeURIComponent(promoted_for)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + signed?.map(z => `signed=${encodeURIComponent(z)}`).join('&') + '&tag_name=' + (tag_name == null ? '' : encodeURIComponent(tag_name)) + '&tag_scheme=' + (tag_scheme == null ? '' : encodeURIComponent(tag_scheme)) + '&' + tleo?.map(z => `tleo=${z}`).join('&') + '&' + version?.map(z => `version=${encodeURIComponent(z)}`).join('&') + '&embargoed=' + embargoed, {});
		}

		/**
		 * Discover metadata for content promotions
		 * Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today
		 * Get promotions
		 * @param {Array<string>} mixin Mixins:
		 * * related_links: mixin to return information about related links to a promotion
		 * @param {string} context filter for subset of promotions belonging to a given context
		 *     Min length: 8
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for promotions by partner ID
		 * @param {Array<string>} partner_pid filter for promotions by partner PID
		 * @param {Array<string>} pid filter for subset of promotions having given PID
		 * @param {Array<string>} promoted_by filter for subset of promotions having given promoted by
		 * @param {Array<string>} promoted_for filter for subset of promotions having given promoted for
		 * @param {string} q filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Array<string>} status filter for subset of promotions with status
		 * @return {Nitro} Nitro response
		 */
		ListPromotions(mixin: Array<string> | null | undefined, context: string | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, pid: Array<string> | null | undefined, promoted_by: Array<string> | null | undefined, promoted_for: Array<string> | null | undefined, q: string | null | undefined, status: Array<string> | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'promotions?' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&context=' + (context == null ? '' : encodeURIComponent(context)) + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&' + promoted_by?.map(z => `promoted_by=${encodeURIComponent(z)}`).join('&') + '&' + promoted_for?.map(z => `promoted_for=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + status?.map(z => `status=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Build schedules and find metadata for TV and radio broadcasts and webcasts
		 * Dates, Times, Schedules: when and where are programmes being shown?
		 * Get schedules
		 * @param {ListBroadcastsSort} sort Sorts:
		 * * start_date: sort chronologically by scheduled start time/date, ascending
		 * @param {ListAvailabilitySort_direction} sort_direction Sort direction
		 * @param {Array<string>} mixin Mixins:
		 * * ancestor_titles: return ancestor programme titles
		 * * images: mixin to add image information for broadcasts and webcasts
		 * * titles: return ancestor programme titles
		 * @param {Array<string>} authority filter for subset of broadcasts and webcasts that have given authority
		 * @param {Array<string>} descendants_of filter for subset of broadcasts and webcasts that are descendants of the given programme PID
		 * @param {Date} end_from filter for subset of broadcasts and webcasts that end on or later than the specified datetime
		 * @param {Date} end_to filter for subset of broadcasts and webcasts that end on or earlier than the specified datetime
		 * @param {Array<string>} format filter for subset of broadcasts and webcasts that are classified in the given format ID
		 * @param {Array<string>} genre filter for subset of broadcasts and webcasts that are classified in the given genre ID
		 * @param {string} group filter for subset of broadcasts and webcasts that have programmes in the given group
		 *     Min length: 8
		 * @param {Array<string>} id filter for subset of broadcasts and webcasts that have given identifier
		 * @param {Array<string>} id_type filter for subset of broadcasts and webcasts that have given id type
		 * @param {Array<string>} item filter for subset of broadcasts and webcasts with the given item performed on it
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for broadcasts and webcasts by partner ID
		 * @param {Array<string>} partner_pid filter for broadcasts and webcasts by partner PID
		 * @param {string} people filter for subset of broadcasts and webcasts that have given contributor
		 * @param {Array<string>} pid filter for subset of broadcasts and webcasts having given PID
		 * @param {string} q filter for subset of broadcasts and webcasts matching supplied keyword/phrase (boolean operators permitted)
		 * @param {boolean} repeat filter to show either only repeats or non-repeats
		 * @param {Date} schedule_day filter for subset of broadcasts and webcasts that start on the specified day (BBC time)
		 *     Type: DateOnly
		 * @param {Date} schedule_day_from filter for subset of broadcasts and webcasts that start on or after the specified day (BBC time)
		 *     Type: DateOnly
		 * @param {Date} schedule_day_to filter for subset of broadcasts and webcasts that start on or before the specified day (BBC time)
		 *     Type: DateOnly
		 * @param {Array<string>} service_master_brand filter for subset of broadcasts and webcasts with given service master brand
		 * @param {Array<string>} sid filter for subset of broadcasts and webcasts that are on the specified linear service
		 * @param {Date} start_from filter for subset of broadcasts and webcasts that start on or later than the specified datetime
		 * @param {Date} start_to filter for subset of broadcasts and webcasts that start on or earlier than the specified datetime
		 * @param {Array<string>} version filter for subset of broadcasts and webcasts with given PID as their parent version
		 * @return {Nitro} Nitro response
		 */
		ListSchedules(sort: ListBroadcastsSort | null | undefined, sort_direction: ListAvailabilitySort_direction | null | undefined, mixin: Array<string> | null | undefined, authority: Array<string> | null | undefined, descendants_of: Array<string> | null | undefined, end_from: Date | null | undefined, end_to: Date | null | undefined, format: Array<string> | null | undefined, genre: Array<string> | null | undefined, group: string | null | undefined, id: Array<string> | null | undefined, id_type: Array<string> | null | undefined, item: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, people: string | null | undefined, pid: Array<string> | null | undefined, q: string | null | undefined, repeat: boolean | null | undefined, schedule_day: Date | null | undefined, schedule_day_from: Date | null | undefined, schedule_day_to: Date | null | undefined, service_master_brand: Array<string> | null | undefined, sid: Array<string> | null | undefined, start_from: Date | null | undefined, start_to: Date | null | undefined, version: Array<string> | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'schedules?sort=' + sort + '&sort_direction=' + sort_direction + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&' + authority?.map(z => `authority=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of?.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&end_from=' + end_from?.toISOString() + '&end_to=' + end_to?.toISOString() + '&' + format?.map(z => `format=${encodeURIComponent(z)}`).join('&') + '&' + genre?.map(z => `genre=${encodeURIComponent(z)}`).join('&') + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&' + id_type?.map(z => `id_type=${encodeURIComponent(z)}`).join('&') + '&' + item?.map(z => `item=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&people=' + (people == null ? '' : encodeURIComponent(people)) + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&repeat=' + repeat + '&schedule_day=' + schedule_day?.toISOString() + '&schedule_day_from=' + schedule_day_from?.toISOString() + '&schedule_day_to=' + schedule_day_to?.toISOString() + '&' + service_master_brand?.map(z => `service_master_brand=${encodeURIComponent(z)}`).join('&') + '&' + sid?.map(z => `sid=${encodeURIComponent(z)}`).join('&') + '&start_from=' + start_from?.toISOString() + '&start_to=' + start_to?.toISOString() + '&' + version?.map(z => `version=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get Schema definition
		 * Get Schema definition
		 * Get schema
		 * @return {void} Metadata response
		 */
		GetXSD(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'schema', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Information about the linear services used for broadcast transmissions
		 * The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).
		 * Get services
		 * @param {Date} end_from Return services that end on or later than the specified datetime
		 * @param {Date} end_to filter for subset of broadcasts that end on or earlier than the specified datetime
		 * @param {Array<string>} mid filter for services by masterbrand MID
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for services by partner ID
		 * @param {Array<string>} partner_pid filter for services by partner PID
		 * @param {string} q filter for subset of services matching supplied keyword/phrase (boolean operators permitted)
		 * @param {Array<string>} service_type filter for specified type of linear services
		 * @param {Array<string>} sid filter for specified linear service
		 * @param {Date} start_from Return services that start on or later than the specified datetime
		 * @param {Date} start_to Return services that start earlier than the specified datetime
		 * @return {Nitro} Nitro response
		 */
		ListServices(end_from: Date | null | undefined, end_to: Date | null | undefined, mid: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, q: string | null | undefined, service_type: Array<string> | null | undefined, sid: Array<string> | null | undefined, start_from: Date | null | undefined, start_to: Date | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'services?end_from=' + end_from?.toISOString() + '&end_to=' + end_to?.toISOString() + '&' + mid?.map(z => `mid=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + service_type?.map(z => `service_type=${encodeURIComponent(z)}`).join('&') + '&' + sid?.map(z => `sid=${encodeURIComponent(z)}`).join('&') + '&start_from=' + start_from?.toISOString() + '&start_to=' + start_to?.toISOString(), {});
		}

		/**
		 * Get raw brand
		 * Get raw brand
		 * Get v1/brands/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_brand(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/brands/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Get raw brand franchise
		 * Get raw brand franchises
		 * Get v1/brands/{pid}/franchises/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_brand_franchises(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/brands/' + (pid == null ? '' : encodeURIComponent(pid)) + '/franchises/', {});
		}

		/**
		 * Get raw episode
		 * Get raw episode
		 * Get v1/episodes/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_episode(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Get raw ancestors
		 * Get raw ancestors
		 * Get v1/episodes/{pid}/ancestors/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_ancestors(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/ancestors/', {});
		}

		/**
		 * Get raw formats
		 * Get raw formats
		 * Get v1/episodes/{pid}/formats/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_formats(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/formats/', {});
		}

		/**
		 * Get raw genre groups
		 * Get raw genre groups
		 * Get v1/episodes/{pid}/genre_groups/
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_genre_groups(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/genre_groups/', {});
		}

		/**
		 * Get raw image
		 * Get raw image
		 * Get v1/images/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_image(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/images/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Get raw masterbrand
		 * Get raw masterbrand
		 * Get v1/master_brands/{mbid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_masterbrand(mbid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/master_brands/' + (mbid == null ? '' : encodeURIComponent(mbid)), {});
		}

		/**
		 * Get raw promotion
		 * Get raw promotion
		 * Get v1/promotions/{pid}
		 * @return {Nitro} Nitro response
		 */
		Get_Raw_promotion(pid: string): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'v1/promotions/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Metadata on editorial programme versions: original, signed, audio-described, etc
		 * The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.
		 * Get versions
		 * @param {Array<string>} availability filter for subset of versions that have availability
		 * @param {Array<string>} descendants_of filter for subset of versions having given programme PID
		 * @param {Array<string>} media_set filter for subset of versions with availability in the given media set
		 * @param {number} page which page of results to return
		 *     Minimum: 1
		 * @param {number} page_size number of results in each page
		 *     Maximum: 300
		 * @param {Array<string>} partner_id filter for versions by partner ID
		 * @param {Array<string>} partner_pid filter for versions by partner PID
		 * @param {Array<string>} payment_type filter for a subset of versions that are of the given payment_type
		 * @param {Array<string>} pid filter for subset of versions having given PID
		 * @param {ListGroupsEmbargoed} embargoed Control return of embargoed items (undocumented)
		 * @return {Nitro} Nitro response
		 */
		ListVersions(availability: Array<string> | null | undefined, descendants_of: Array<string> | null | undefined, media_set: Array<string> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, partner_id: Array<string> | null | undefined, partner_pid: Array<string> | null | undefined, payment_type: Array<string> | null | undefined, pid: Array<string> | null | undefined, embargoed: ListGroupsEmbargoed | null | undefined): Observable<Nitro> {
			return this.http.get<Nitro>(this.baseUri + 'versions?' + availability?.map(z => `availability=${encodeURIComponent(z)}`).join('&') + '&' + descendants_of?.map(z => `descendants_of=${encodeURIComponent(z)}`).join('&') + '&' + media_set?.map(z => `media_set=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&' + partner_id?.map(z => `partner_id=${encodeURIComponent(z)}`).join('&') + '&' + partner_pid?.map(z => `partner_pid=${encodeURIComponent(z)}`).join('&') + '&' + payment_type?.map(z => `payment_type=${encodeURIComponent(z)}`).join('&') + '&' + pid?.map(z => `pid=${encodeURIComponent(z)}`).join('&') + '&embargoed=' + embargoed, {});
		}
	}

	export enum ListAvailabilitySort { scheduled_start = 'scheduled_start' }

	export enum ListAvailabilitySort_direction { ascending = 'ascending', descending = 'descending' }

	export enum ListBroadcastsSort { start_date = 'start_date' }

	export enum ListGroupsSort { pid = 'pid' }

	export enum ListGroupsSort_direction { descending = 'descending' }

	export enum ListGroupsEmbargoed { include = 'include', exclude = 'exclude', only = 'only' }

	export enum ListImagesSort { group_position = 'group_position', pid = 'pid' }

	export enum ListMasterbrandsSort { mid = 'mid' }

	export enum ListMasterbrandsSort_direction { ascending = 'ascending' }

	export enum ListProgrammesSort { group_position = 'group_position', pid = 'pid', position = 'position', promotion = 'promotion', release_date = 'release_date', relevance = 'relevance', scheduled_start = 'scheduled_start', strict_title = 'strict_title', title = 'title', tree = 'tree' }

}

