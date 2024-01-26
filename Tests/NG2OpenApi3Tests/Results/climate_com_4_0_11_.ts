import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A batch of application activities */
	export interface ApplicationActivities {

		/** Required */
		results: Array<ApplicationActivitySummary>;
	}

	/** A batch of application activities */
	export interface ApplicationActivitiesFormProperties {
	}
	export function CreateApplicationActivitiesFormGroup() {
		return new FormGroup<ApplicationActivitiesFormProperties>({
		});

	}

	export interface ApplicationActivitySummary {

		/**
		 * The time the application activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		createdAt: Date;

		/**
		 * The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: Date;

		/**
		 * Array of field ids associated the application activity.
		 * Required
		 */
		fieldIds: Array<string>;

		/**
		 * The id of an application activity.
		 * Required
		 */
		id: string;

		/**
		 * The size in bytes of the raw application activity file.
		 * Required
		 */
		length: number;

		/**
		 * The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: Date;

		/**
		 * The time the application activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: Date;
	}
	export interface ApplicationActivitySummaryFormProperties {

		/**
		 * The time the application activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The id of an application activity.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The size in bytes of the raw application activity file.
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The time the application activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationActivitySummaryFormGroup() {
		return new FormGroup<ApplicationActivitySummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApplicationActivityContents {

		/**
		 * Binary contents
		 * Required
		 */
		body: string;
	}
	export interface ApplicationActivityContentsFormProperties {

		/**
		 * Binary contents
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateApplicationActivityContentsFormGroup() {
		return new FormGroup<ApplicationActivityContentsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Area with units. Units are always "hectare". */
	export interface Area {

		/** Required */
		q: number;

		/** Required */
		u: string;
	}

	/** Area with units. Units are always "hectare". */
	export interface AreaFormProperties {

		/** Required */
		q: FormControl<number | null | undefined>,

		/** Required */
		u: FormControl<string | null | undefined>,
	}
	export function CreateAreaFormGroup() {
		return new FormGroup<AreaFormProperties>({
			q: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			u: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A batch of boundary results */
	export interface Boundaries {

		/** Required */
		features: Array<Boundary>;

		/** Required */
		type: BoundariesType;
	}

	/** A batch of boundary results */
	export interface BoundariesFormProperties {

		/** Required */
		type: FormControl<BoundariesType | null | undefined>,
	}
	export function CreateBoundariesFormGroup() {
		return new FormGroup<BoundariesFormProperties>({
			type: new FormControl<BoundariesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Arbitrary boundary.  GeoJSON Feature. */
	export interface Boundary {

		/**
		 * GeoJSON
		 * Required
		 */
		geometry: Geometry;

		/** Required */
		id: string;

		/**
		 * Properties map.
		 * Required
		 */
		properties: BoundaryProperties;

		/** Required */
		type: BoundaryType;
	}

	/** Arbitrary boundary.  GeoJSON Feature. */
	export interface BoundaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BoundaryType | null | undefined>,
	}
	export function CreateBoundaryFormGroup() {
		return new FormGroup<BoundaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BoundaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BoundaryType { Feature = 'Feature' }

	export enum BoundariesType { FeatureCollection = 'FeatureCollection' }

	export interface BoundariesQuery {

		/** Required */
		ids: Array<string>;
	}
	export interface BoundariesQueryFormProperties {
	}
	export function CreateBoundariesQueryFormGroup() {
		return new FormGroup<BoundariesQueryFormProperties>({
		});

	}


	/** Properties map. */
	export interface BoundaryProperties {

		/**
		 * Area with units. Units are always "hectare".
		 * Required
		 */
		area: Area;

		/** Required */
		centroid: Point;
	}

	/** Properties map. */
	export interface BoundaryPropertiesFormProperties {
	}
	export function CreateBoundaryPropertiesFormGroup() {
		return new FormGroup<BoundaryPropertiesFormProperties>({
		});

	}


	/** Arbitrary boundary in a geometry map */
	export interface BoundaryUpload {

		/**
		 * GeoJSON
		 * Required
		 */
		geometry: Geometry;
	}

	/** Arbitrary boundary in a geometry map */
	export interface BoundaryUploadFormProperties {
	}
	export function CreateBoundaryUploadFormGroup() {
		return new FormGroup<BoundaryUploadFormProperties>({
		});

	}

	export interface CreatedExport {

		/**
		 * Unique identifier for the export.
		 * Required
		 */
		id: string;
	}
	export interface CreatedExportFormProperties {

		/**
		 * Unique identifier for the export.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreatedExportFormGroup() {
		return new FormGroup<CreatedExportFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Empty {
	}
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}

	export interface Error {
		error?: ErrorError;
	}
	export interface ErrorFormProperties {
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
		});

	}

	export interface ErrorError {

		/** Required */
		code: string;

		/** Required */
		id: string;

		/**
		 * Description of the error encountered.
		 * Required
		 */
		message: string;
	}
	export interface ErrorErrorFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Description of the error encountered.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorErrorFormGroup() {
		return new FormGroup<ErrorErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Client request to export data from a user. */
	export interface Export {

		/**
		 * Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson).
		 * Required
		 */
		contentType: ExportContentType;

		/** Additional specifications for a client's data export request, dependent on the content type. */
		definition?: string | null;
	}

	/** Client request to export data from a user. */
	export interface ExportFormProperties {

		/**
		 * Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson).
		 * Required
		 */
		contentType: FormControl<ExportContentType | null | undefined>,

		/** Additional specifications for a client's data export request, dependent on the content type. */
		definition: FormControl<string | null | undefined>,
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
			contentType: new FormControl<ExportContentType | null | undefined>(undefined, [Validators.required]),
			definition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportContentType { 'application/vnd.climate.acrsi.geojson' = 'application/vnd.climate.acrsi.geojson', 'application/vnd.climate.harvest.geojson' = 'application/vnd.climate.harvest.geojson' }

	export interface ExportContents {

		/**
		 * Binary contents
		 * Required
		 */
		body: string;
	}
	export interface ExportContentsFormProperties {

		/**
		 * Binary contents
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateExportContentsFormGroup() {
		return new FormGroup<ExportContentsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportStatus {

		/** Base64 encoded MD5 hash of the export's contents. */
		checksum?: string | null;

		/** Message indicating reason for validation failure. */
		error?: string | null;

		/** Size of the export's contents in bytes. */
		size?: number | null;

		/**
		 * Current status of the export request:
		 * * `PROCESSING` - Export request has been received by Climate and is being processed.
		 * * `INVALID` - Export request has failed validity check.
		 * * `EXPIRED` - Export contents have expired, and are no longer available for retrieval.
		 * * `COMPLETED` - The export request has been successfully processed, and its contents are available for retrieval.
		 * * `NO_DATA` - The export request completed successfully but generated no data.
		 * Required
		 */
		status: ExportStatusStatus;

		/**
		 * Token which may be used when executing an identical export in
		 * the future, but which only wants export data which was not
		 * previously exported.
		 * Assume a given field export request matches 12 fields today. And
		 * tomorrow it matches 15 fields. By passing the xNextToken in the
		 * definition section of tomorrow's field export request, only the
		 * 3 additional fields would be exported. Note, all other parameters
		 * passed in the definition section must be identical to the original
		 * request.
		 */
		xNextToken?: string | null;
	}
	export interface ExportStatusFormProperties {

		/** Base64 encoded MD5 hash of the export's contents. */
		checksum: FormControl<string | null | undefined>,

		/** Message indicating reason for validation failure. */
		error: FormControl<string | null | undefined>,

		/** Size of the export's contents in bytes. */
		size: FormControl<number | null | undefined>,

		/**
		 * Current status of the export request:
		 * * `PROCESSING` - Export request has been received by Climate and is being processed.
		 * * `INVALID` - Export request has failed validity check.
		 * * `EXPIRED` - Export contents have expired, and are no longer available for retrieval.
		 * * `COMPLETED` - The export request has been successfully processed, and its contents are available for retrieval.
		 * * `NO_DATA` - The export request completed successfully but generated no data.
		 * Required
		 */
		status: FormControl<ExportStatusStatus | null | undefined>,

		/**
		 * Token which may be used when executing an identical export in
		 * the future, but which only wants export data which was not
		 * previously exported.
		 * Assume a given field export request matches 12 fields today. And
		 * tomorrow it matches 15 fields. By passing the xNextToken in the
		 * definition section of tomorrow's field export request, only the
		 * 3 additional fields would be exported. Note, all other parameters
		 * passed in the definition section must be identical to the original
		 * request.
		 */
		xNextToken: FormControl<string | null | undefined>,
	}
	export function CreateExportStatusFormGroup() {
		return new FormGroup<ExportStatusFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ExportStatusStatus | null | undefined>(undefined, [Validators.required]),
			xNextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportStatusStatus { PROCESSING = 'PROCESSING', INVALID = 'INVALID', EXPIRED = 'EXPIRED', COMPLETED = 'COMPLETED', NO_DATA = 'NO_DATA' }


	/** Logical representation of a farm organization with a name and type. */
	export interface FarmOrganization {

		/**
		 * Unique identifier for a farm organization.
		 * Required
		 */
		id: string;

		/**
		 * Name of the farm organization.
		 * Required
		 */
		name: string;

		/**
		 * Type of the farm organization.
		 * Required
		 */
		type: FarmOrganizationType;
	}

	/** Logical representation of a farm organization with a name and type. */
	export interface FarmOrganizationFormProperties {

		/**
		 * Unique identifier for a farm organization.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the farm organization.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the farm organization.
		 * Required
		 */
		type: FormControl<FarmOrganizationType | null | undefined>,
	}
	export function CreateFarmOrganizationFormGroup() {
		return new FormGroup<FarmOrganizationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FarmOrganizationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FarmOrganizationType { farm = 'farm' }


	/** Logical representation of a Field with a name.  Spatial attributes of the Field are provided in the Boundary. */
	export interface Field {

		/**
		 * Unique identifier for the current Field's Boundary.
		 * Required
		 */
		boundaryId: string;

		/**
		 * Unique identifier for a Field.
		 * Required
		 */
		id: string;

		/**
		 * Name of the Field.
		 * Required
		 */
		name: string;

		/**
		 * A minimal set of attributes regarding the parent of a farm organization.
		 * Required
		 */
		parent: Parent;

		/**
		 * Unique identifier of the resource owner that owns the Field.
		 * Required
		 */
		resourceOwnerId: string;
	}

	/** Logical representation of a Field with a name.  Spatial attributes of the Field are provided in the Boundary. */
	export interface FieldFormProperties {

		/**
		 * Unique identifier for the current Field's Boundary.
		 * Required
		 */
		boundaryId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for a Field.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the Field.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the resource owner that owns the Field.
		 * Required
		 */
		resourceOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			boundaryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwnerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A batch of field results */
	export interface Fields {

		/** Required */
		results: Array<Field>;
	}

	/** A batch of field results */
	export interface FieldsFormProperties {
	}
	export function CreateFieldsFormGroup() {
		return new FormGroup<FieldsFormProperties>({
		});

	}


	/** GeoJSON */
	export interface Geometry {

		/** Required */
		coordinates: Array<string>;

		/** Required */
		type: GeometryType;
	}

	/** GeoJSON */
	export interface GeometryFormProperties {

		/** Required */
		type: FormControl<GeometryType | null | undefined>,
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
			type: new FormControl<GeometryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeometryType { Point = 'Point', Polygon = 'Polygon', MultiPolygon = 'MultiPolygon' }


	/** A batch of harvest activities */
	export interface HarvestActivities {

		/** Required */
		results: Array<HarvestActivitySummary>;
	}

	/** A batch of harvest activities */
	export interface HarvestActivitiesFormProperties {
	}
	export function CreateHarvestActivitiesFormGroup() {
		return new FormGroup<HarvestActivitiesFormProperties>({
		});

	}

	export interface HarvestActivitySummary {

		/**
		 * The time the harvest activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		createdAt: Date;

		/**
		 * The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: Date;

		/**
		 * Array of field ids associated the harvest activity.
		 * Required
		 */
		fieldIds: Array<string>;

		/**
		 * The id of a harvest activity.
		 * Required
		 */
		id: string;

		/**
		 * The size in bytes of the raw harvest activity file.
		 * Required
		 */
		length: number;

		/**
		 * The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: Date;

		/**
		 * The time the harvest activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: Date;
	}
	export interface HarvestActivitySummaryFormProperties {

		/**
		 * The time the harvest activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The id of a harvest activity.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The size in bytes of the raw harvest activity file.
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The time the harvest activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateHarvestActivitySummaryFormGroup() {
		return new FormGroup<HarvestActivitySummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HarvestActivityContents {

		/**
		 * Binary contents
		 * Required
		 */
		body: string;
	}
	export interface HarvestActivityContentsFormProperties {

		/**
		 * Binary contents
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateHarvestActivityContentsFormGroup() {
		return new FormGroup<HarvestActivityContentsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Metadata {
	}
	export interface MetadataFormProperties {
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
		});

	}


	/** Logical representation of an operation with a name and resource owner. */
	export interface Operation {

		/**
		 * Unique identifier for the operation.
		 * Required
		 */
		id: string;

		/**
		 * Name of the operation.
		 * Required
		 */
		name: string;

		/**
		 * Unique identifier of the resource owner that owns the Operation.
		 * Required
		 */
		resourceOwnerId: string;
	}

	/** Logical representation of an operation with a name and resource owner. */
	export interface OperationFormProperties {

		/**
		 * Unique identifier for the operation.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the operation.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the resource owner that owns the Operation.
		 * Required
		 */
		resourceOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwnerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A batch of operation results. */
	export interface Operations {

		/** Required */
		results: Array<Operation>;
	}

	/** A batch of operation results. */
	export interface OperationsFormProperties {
	}
	export function CreateOperationsFormGroup() {
		return new FormGroup<OperationsFormProperties>({
		});

	}


	/** A minimal set of attributes regarding the parent of a farm organization. */
	export interface Parent {

		/**
		 * Unique identifier for the parent of a farm organization.
		 * Required
		 */
		id: string;

		/**
		 * Type of the parent of a farm organization.
		 * Required
		 */
		type: FarmOrganizationType;
	}

	/** A minimal set of attributes regarding the parent of a farm organization. */
	export interface ParentFormProperties {

		/**
		 * Unique identifier for the parent of a farm organization.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Type of the parent of a farm organization.
		 * Required
		 */
		type: FormControl<FarmOrganizationType | null | undefined>,
	}
	export function CreateParentFormGroup() {
		return new FormGroup<ParentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FarmOrganizationType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A batch of planting activities */
	export interface PlantingActivities {

		/** Required */
		results: Array<PlantingActivitySummary>;
	}

	/** A batch of planting activities */
	export interface PlantingActivitiesFormProperties {
	}
	export function CreatePlantingActivitiesFormGroup() {
		return new FormGroup<PlantingActivitiesFormProperties>({
		});

	}

	export interface PlantingActivitySummary {

		/**
		 * The time the planting activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		createdAt: Date;

		/**
		 * The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: Date;

		/**
		 * Array of field ids associated the planting activity.
		 * Required
		 */
		fieldIds: Array<string>;

		/**
		 * The id of a planting activity.
		 * Required
		 */
		id: string;

		/**
		 * The size in bytes of the raw planting activity file.
		 * Required
		 */
		length: number;

		/**
		 * The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: Date;

		/**
		 * The time the planting activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: Date;
	}
	export interface PlantingActivitySummaryFormProperties {

		/**
		 * The time the planting activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The id of a planting activity.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The size in bytes of the raw planting activity file.
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The time the planting activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePlantingActivitySummaryFormGroup() {
		return new FormGroup<PlantingActivitySummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlantingActivityContents {

		/**
		 * Binary contents
		 * Required
		 */
		body: string;
	}
	export interface PlantingActivityContentsFormProperties {

		/**
		 * Binary contents
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreatePlantingActivityContentsFormGroup() {
		return new FormGroup<PlantingActivityContentsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Point {

		/** Required */
		coordinates: Array<number>;

		/** Required */
		type: string;
	}
	export interface PointFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceOwner {

		/** Required */
		email: string;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface ResourceOwnerFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceOwnerFormGroup() {
		return new FormGroup<ResourceOwnerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScoutingObservation {

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: Date;

		/**
		 * Array of field ids associated with this observation.
		 * Required
		 */
		fieldIds: Array<string>;

		/**
		 * The id of a scouting observation.
		 * Required
		 */
		id: string;

		/**
		 * GeoJSON
		 * Required
		 */
		location: Geometry;

		/**
		 * Color of scouting pin assigned in the Climate FieldView app.
		 * Limited in the Ux to a set of RGB values.
		 * * #307af7
		 * * #38d753
		 * * #b037e4
		 * * #ef3e3e
		 * * #f7ec41
		 * * #ff8439
		 * * #808080
		 * Required
		 */
		locationDisplayColor: ScoutingObservationLocationDisplayColor;

		/**
		 * The text of the scouting observation. Maximum of 4000 characters.
		 * Required
		 */
		note: string;

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: Date;

		/**
		 * The status of the scouting observation For example : ACTIVE, DELETED
		 * Required
		 */
		status: ScoutingObservationStatus;

		/**
		 * For example, ROCK_STONE, PONDING_WET, HAIL Maximum 20 tags allowed, 40 characters per tag.
		 * Required
		 */
		tags: Array<ScoutingTag>;

		/**
		 * Permanent or seasonal
		 * Required
		 */
		timespan: ScoutingObservationTimespan;

		/**
		 * The title or summary of the scouting observation. 40 Characters long, no emojis, and leading and trailing whitespace will be trimmed.
		 * Required
		 */
		title: string;

		/**
		 * The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: Date;
	}
	export interface ScoutingObservationFormProperties {

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The id of a scouting observation.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Color of scouting pin assigned in the Climate FieldView app.
		 * Limited in the Ux to a set of RGB values.
		 * * #307af7
		 * * #38d753
		 * * #b037e4
		 * * #ef3e3e
		 * * #f7ec41
		 * * #ff8439
		 * * #808080
		 * Required
		 */
		locationDisplayColor: FormControl<ScoutingObservationLocationDisplayColor | null | undefined>,

		/**
		 * The text of the scouting observation. Maximum of 4000 characters.
		 * Required
		 */
		note: FormControl<string | null | undefined>,

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The status of the scouting observation For example : ACTIVE, DELETED
		 * Required
		 */
		status: FormControl<ScoutingObservationStatus | null | undefined>,

		/**
		 * Permanent or seasonal
		 * Required
		 */
		timespan: FormControl<ScoutingObservationTimespan | null | undefined>,

		/**
		 * The title or summary of the scouting observation. 40 Characters long, no emojis, and leading and trailing whitespace will be trimmed.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateScoutingObservationFormGroup() {
		return new FormGroup<ScoutingObservationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locationDisplayColor: new FormControl<ScoutingObservationLocationDisplayColor | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ScoutingObservationStatus | null | undefined>(undefined, [Validators.required]),
			timespan: new FormControl<ScoutingObservationTimespan | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScoutingObservationLocationDisplayColor { '#307af7' = '#307af7', '#38d753' = '#38d753', '#b037e4' = '#b037e4', '#ef3e3e' = '#ef3e3e', '#f7ec41' = '#f7ec41', '#ff8439' = '#ff8439', '#808080' = '#808080' }

	export enum ScoutingObservationStatus { ACTIVE = 'ACTIVE', DELETED = 'DELETED' }

	export interface ScoutingTag {

		/** Required */
		code: string;
	}
	export interface ScoutingTagFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,
	}
	export function CreateScoutingTagFormGroup() {
		return new FormGroup<ScoutingTagFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScoutingObservationTimespan { PERMANENT = 'PERMANENT', SEASONAL = 'SEASONAL' }

	export interface ScoutingObservationAttachment {

		/**
		 * The content type of the attachment, e.g. image/png.
		 * Required
		 */
		contentType: string;

		/**
		 * id of the attachment
		 * Required
		 */
		id: string;

		/**
		 * The number of bytes in the attachment.
		 * Required
		 */
		length: number;

		/**
		 * The status of the attachment. For example : ACTIVE, DELETED
		 * Required
		 */
		status: ScoutingObservationStatus;

		/**
		 * The time the attachment was last updated.
		 * Time in ISO 8601 format with UTC timezone, 3 fractional seconds.
		 * (https://tools.ietf.org/html/rfc3339)
		 * Required
		 */
		updatedAt: Date;
	}
	export interface ScoutingObservationAttachmentFormProperties {

		/**
		 * The content type of the attachment, e.g. image/png.
		 * Required
		 */
		contentType: FormControl<string | null | undefined>,

		/**
		 * id of the attachment
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The number of bytes in the attachment.
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * The status of the attachment. For example : ACTIVE, DELETED
		 * Required
		 */
		status: FormControl<ScoutingObservationStatus | null | undefined>,

		/**
		 * The time the attachment was last updated.
		 * Time in ISO 8601 format with UTC timezone, 3 fractional seconds.
		 * (https://tools.ietf.org/html/rfc3339)
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateScoutingObservationAttachmentFormGroup() {
		return new FormGroup<ScoutingObservationAttachmentFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ScoutingObservationStatus | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScoutingObservationAttachmentContents {

		/**
		 * Binary contents
		 * Required
		 */
		body: string;
	}
	export interface ScoutingObservationAttachmentContentsFormProperties {

		/**
		 * Binary contents
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateScoutingObservationAttachmentContentsFormGroup() {
		return new FormGroup<ScoutingObservationAttachmentContentsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A batch of scouting attachments */
	export interface ScoutingObservationAttachments {

		/** Required */
		results: Array<ScoutingObservationAttachment>;
	}

	/** A batch of scouting attachments */
	export interface ScoutingObservationAttachmentsFormProperties {
	}
	export function CreateScoutingObservationAttachmentsFormGroup() {
		return new FormGroup<ScoutingObservationAttachmentsFormProperties>({
		});

	}

	export interface ScoutingObservationSummary {

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: Date;

		/**
		 * The id of a scouting observation.
		 * Required
		 */
		id: string;

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: Date;

		/**
		 * The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: Date;
	}
	export interface ScoutingObservationSummaryFormProperties {

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The id of a scouting observation.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateScoutingObservationSummaryFormGroup() {
		return new FormGroup<ScoutingObservationSummaryFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A batch of scouting observations */
	export interface ScoutingObservations {

		/** Required */
		results: Array<ScoutingObservationSummary>;
	}

	/** A batch of scouting observations */
	export interface ScoutingObservationsFormProperties {
	}
	export function CreateScoutingObservationsFormGroup() {
		return new FormGroup<ScoutingObservationsFormProperties>({
		});

	}


	/** Client request to upload data for a user. */
	export interface Upload {

		/**
		 * Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)
		 * Required
		 */
		contentType: UploadContentType;

		/**
		 * Content size in bytes
		 * Required
		 */
		length: number;

		/**
		 * Base64 encoded md5 hash of the content
		 * Required
		 */
		md5: string;
		metadata?: Metadata;
	}

	/** Client request to upload data for a user. */
	export interface UploadFormProperties {

		/**
		 * Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)
		 * Required
		 */
		contentType: FormControl<UploadContentType | null | undefined>,

		/**
		 * Content size in bytes
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Base64 encoded md5 hash of the content
		 * Required
		 */
		md5: FormControl<string | null | undefined>,
	}
	export function CreateUploadFormGroup() {
		return new FormGroup<UploadFormProperties>({
			contentType: new FormControl<UploadContentType | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			md5: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UploadContentType { 'image/vnd.climate.thermal.geotiff' = 'image/vnd.climate.thermal.geotiff', 'image/vnd.climate.ndvi.geotiff' = 'image/vnd.climate.ndvi.geotiff', 'image/vnd.climate.rgb.geotiff' = 'image/vnd.climate.rgb.geotiff', 'image/vnd.climate.rgb-nir.geotiff' = 'image/vnd.climate.rgb-nir.geotiff', 'image/vnd.climate.rgb-cir.geotiff' = 'image/vnd.climate.rgb-cir.geotiff', 'image/vnd.climate.waterstress.geotiff' = 'image/vnd.climate.waterstress.geotiff', 'image/vnd.climate.elevation.geotiff' = 'image/vnd.climate.elevation.geotiff', 'image/vnd.climate.raw.geotiff' = 'image/vnd.climate.raw.geotiff', 'application/vnd.climate.field.geojson' = 'application/vnd.climate.field.geojson', 'application/vnd.climate.rx.planting.shp' = 'application/vnd.climate.rx.planting.shp', 'application/vnd.climate.prescription.zones.shp' = 'application/vnd.climate.prescription.zones.shp', 'application/vnd.climate.modus.xml' = 'application/vnd.climate.modus.xml', 'application/vnd.climate.stand-count.geojson' = 'application/vnd.climate.stand-count.geojson', 'application/vnd.climate.weed-count.geojson' = 'application/vnd.climate.weed-count.geojson', 'application/vnd.climate.as-applied.zip' = 'application/vnd.climate.as-applied.zip', 'application/vnd.climate.as-planted.zip' = 'application/vnd.climate.as-planted.zip', 'application/vnd.climate.as-harvested.zip' = 'application/vnd.climate.as-harvested.zip' }

	export interface UploadStatus {

		/**
		 * Unique identifier for the upload.
		 * Required
		 */
		id: string;

		/**
		 * Current status of the upload:
		 * * `UPLOADING` - Uploading has started, parts are still coming in.
		 * * `INVALID` - Upload has failed validity check.
		 * * `PENDING` - Upload has been received by Climate and is being processed.
		 * * `INBOX` - The upload is awaiting user acceptance in their Data Inbox.
		 * * `DECLINED` - The user has declined the upload in their Data Inbox.
		 * * `IMPORTING` - The user has accepted the upload and it is being imported into their account.
		 * * `SUCCESS` - The upload has been successfully imported.
		 * Required
		 */
		status: UploadStatusStatus;
	}
	export interface UploadStatusFormProperties {

		/**
		 * Unique identifier for the upload.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Current status of the upload:
		 * * `UPLOADING` - Uploading has started, parts are still coming in.
		 * * `INVALID` - Upload has failed validity check.
		 * * `PENDING` - Upload has been received by Climate and is being processed.
		 * * `INBOX` - The upload is awaiting user acceptance in their Data Inbox.
		 * * `DECLINED` - The user has declined the upload in their Data Inbox.
		 * * `IMPORTING` - The user has accepted the upload and it is being imported into their account.
		 * * `SUCCESS` - The upload has been successfully imported.
		 * Required
		 */
		status: FormControl<UploadStatusStatus | null | undefined>,
	}
	export function CreateUploadStatusFormGroup() {
		return new FormGroup<UploadStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<UploadStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UploadStatusStatus { UPLOADING = 'UPLOADING', INVALID = 'INVALID', PENDING = 'PENDING', INBOX = 'INBOX', DECLINED = 'DECLINED', IMPORTING = 'IMPORTING', SUCCESS = 'SUCCESS' }

	export interface UploadStatusQuery {

		/** Required */
		ids: Array<string>;
	}
	export interface UploadStatusQueryFormProperties {
	}
	export function CreateUploadStatusQueryFormGroup() {
		return new FormGroup<UploadStatusQueryFormProperties>({
		});

	}

	export interface UploadStatuses {

		/** Required */
		results: Array<UploadStatus>;
	}
	export interface UploadStatusesFormProperties {
	}
	export function CreateUploadStatusesFormGroup() {
		return new FormGroup<UploadStatusesFormProperties>({
		});

	}


	/** Unique identifier of a successfully uploaded boundary */
	export interface UploadedBoundaryId {

		/** Required */
		id: string;
	}

	/** Unique identifier of a successfully uploaded boundary */
	export interface UploadedBoundaryIdFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUploadedBoundaryIdFormGroup() {
		return new FormGroup<UploadedBoundaryIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Upload a boundary
		 * Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
		 * This is restricted to callers with **boundaries:write** scope.
		 * To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.
		 * Post v4/boundaries
		 * @return {UploadedBoundaryId} OK
		 */
		V4BoundariesPost(requestBody: BoundaryUpload, headersHandler?: () => HttpHeaders): Observable<UploadedBoundaryId> {
			return this.http.post<UploadedBoundaryId>(this.baseUri + 'v4/boundaries', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Boundaries in batch
		 * Retrieve multiple **Boundaries** (up to 10 per request).
		 * Post v4/boundaries/query
		 * @return {Boundaries} OK
		 */
		V4BoundariesQueryPost(requestBody: BoundariesQuery, headersHandler?: () => HttpHeaders): Observable<Boundaries> {
			return this.http.post<Boundaries>(this.baseUri + 'v4/boundaries/query', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a Boundary by ID
		 * Retrieve a **Boundary** by ID.
		 * Get v4/boundaries/{boundaryId}
		 * @param {string} boundaryId Unique identifier of the Boundary
		 * @return {Boundary} OK
		 */
		V4Boundaries_boundaryIdGet(boundaryId: string, headersHandler?: () => HttpHeaders): Observable<Boundary> {
			return this.http.get<Boundary>(this.baseUri + 'v4/boundaries/' + (boundaryId == null ? '' : encodeURIComponent(boundaryId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Initiate a new export request.
		 * Step one in requesting a data product. The method will return an **Export** ID which the caller will use in subsequent `GET` requests.
		 * The following `contentTypes` may be requested:
		 * * __application/vnd.climate.acrsi.geojson__ (Beta)
		 * Exports the planting activities accessible by the authenticated user and optionally filtered by resource owner
		 * as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).
		 * The export request definition must contain the following properties:
		 * * plantingStartDate
		 * * plantingEndDate
		 * * resourceOwnerId
		 * Requires `exports:read` and `plantingActivitySummary:read` scope.
		 * * __application/vnd.climate.harvest.geojson__
		 * Exports the harvesting activities accessible by the authenticated user and optionally filtered by resource owner
		 * as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).
		 * The export request definition must contain the following properties:
		 * * harvestStartDate
		 * * harvestEndDate
		 * * resourceOwnerId
		 * Requires `exports:read` and `plantingActivitySummary:read` scope.
		 * Post v4/exports
		 * @return {void} 
		 */
		V4ExportsPost(requestBody: Export, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/exports', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the binary contents of a processed export request.
		 * Downloads larger than `5MiB` (`5242880 bytes`) in size must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).
		 * Get v4/exports/{exportId}/contents
		 * @param {string} exportId Unique identifier of an Export.
		 * @return {void} 
		 */
		V4Exports_exportIdContentsGet(exportId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/exports/' + (exportId == null ? '' : encodeURIComponent(exportId)) + '/contents', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the status of an Export.
		 * Check the status of an **Export** by ID.
		 * Get v4/exports/{exportId}/status
		 * @param {string} exportId Unique identifier of an Export.
		 * @return {ExportStatus} OK
		 */
		V4Exports_exportIdStatusGet(exportId: string, headersHandler?: () => HttpHeaders): Observable<ExportStatus> {
			return this.http.get<ExportStatus>(this.baseUri + 'v4/exports/' + (exportId == null ? '' : encodeURIComponent(exportId)) + '/status', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a specific farm organization by organization type and ID
		 * Retrieve a given **farm organization** by organization type and ID.
		 * Get v4/farmOrganizations/{farmOrganizationType}/{farmOrganizationId}
		 * @param {FarmOrganizationType} farmOrganizationType Type of the farm organization.
		 * @param {string} farmOrganizationId Unique identifier of the farm organization.
		 * @return {FarmOrganization} Returns the requested farm organization.
		 */
		V4FarmOrganizations_farmOrganizationType_farmOrganizationIdGet(farmOrganizationType: FarmOrganizationType, farmOrganizationId: string, headersHandler?: () => HttpHeaders): Observable<FarmOrganization> {
			return this.http.get<FarmOrganization>(this.baseUri + 'v4/farmOrganizations/' + farmOrganizationType + '/' + (farmOrganizationId == null ? '' : encodeURIComponent(farmOrganizationId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve list of Fields
		 * Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.
		 * Get v4/fields
		 * @param {string} fieldName Optional prefix filter for field name. Must be at least 3 characters.
		 * @return {Fields} OK
		 */
		V4FieldsGetByFieldName(fieldName: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Fields> {
			return this.http.get<Fields>(this.baseUri + 'v4/fields?fieldName=' + (fieldName == null ? '' : encodeURIComponent(fieldName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve list of all Fields the user has access to.
		 * Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.
		 * A 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.
		 * Get v4/fields/all
		 * @param {string} fieldName Optional prefix filter for field name. Must be at least 3 characters.
		 * @return {Fields} OK
		 */
		V4FieldsAllGetByFieldName(fieldName: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Fields> {
			return this.http.get<Fields>(this.baseUri + 'v4/fields/all?fieldName=' + (fieldName == null ? '' : encodeURIComponent(fieldName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a specific Field by ID
		 * Retrieve a given **Field** by ID.
		 * Get v4/fields/{fieldId}
		 * @param {string} fieldId Unique identifier of the Field.
		 * @return {Field} Returns the requested Field.
		 */
		V4Fields_fieldIdGet(fieldId: string, headersHandler?: () => HttpHeaders): Observable<Field> {
			return this.http.get<Field>(this.baseUri + 'v4/fields/' + (fieldId == null ? '' : encodeURIComponent(fieldId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a list of application activities
		 * Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.
		 * Get v4/layers/asApplied
		 * @param {string} resourceOwnerId Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.
		 * @param {Date} occurredAfter Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @param {Date} occurredBefore Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @param {Date} updatedAfter Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.
		 * @return {ApplicationActivities} OK
		 */
		V4LayersAsAppliedGetByResourceOwnerIdAndOccurredAfterAndOccurredBeforeAndUpdatedAfter(resourceOwnerId: string | null | undefined, occurredAfter: Date | null | undefined, occurredBefore: Date | null | undefined, updatedAfter: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<ApplicationActivities> {
			return this.http.get<ApplicationActivities>(this.baseUri + 'v4/layers/asApplied?resourceOwnerId=' + (resourceOwnerId == null ? '' : encodeURIComponent(resourceOwnerId)) + '&occurredAfter=' + occurredAfter?.toISOString() + '&occurredBefore=' + occurredBefore?.toISOString() + '&updatedAfter=' + updatedAfter?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the raw application activity
		 * Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
		 * Get v4/layers/asApplied/{activityId}/contents
		 * @param {string} activityId Unique identifier of the Application Activity.
		 * @return {void} OK
		 */
		V4LayersAsApplied_activityIdContentsGet(activityId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/layers/asApplied/' + (activityId == null ? '' : encodeURIComponent(activityId)) + '/contents', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of harvest activities
		 * Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.
		 * Get v4/layers/asHarvested
		 * @param {string} resourceOwnerId Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.
		 * @param {Date} occurredAfter Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @param {Date} occurredBefore Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @param {Date} updatedAfter Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.
		 * @return {HarvestActivities} OK
		 */
		V4LayersAsHarvestedGetByResourceOwnerIdAndOccurredAfterAndOccurredBeforeAndUpdatedAfter(resourceOwnerId: string | null | undefined, occurredAfter: Date | null | undefined, occurredBefore: Date | null | undefined, updatedAfter: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HarvestActivities> {
			return this.http.get<HarvestActivities>(this.baseUri + 'v4/layers/asHarvested?resourceOwnerId=' + (resourceOwnerId == null ? '' : encodeURIComponent(resourceOwnerId)) + '&occurredAfter=' + occurredAfter?.toISOString() + '&occurredBefore=' + occurredBefore?.toISOString() + '&updatedAfter=' + updatedAfter?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the raw harvest activity
		 * Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
		 * Get v4/layers/asHarvested/{activityId}/contents
		 * @param {string} activityId Unique identifier of the Harvest Activity.
		 * @return {void} OK
		 */
		V4LayersAsHarvested_activityIdContentsGet(activityId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/layers/asHarvested/' + (activityId == null ? '' : encodeURIComponent(activityId)) + '/contents', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of planting activities
		 * Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.
		 * Get v4/layers/asPlanted
		 * @param {string} resourceOwnerId Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.
		 * @param {Date} occurredAfter Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @param {Date} occurredBefore Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @param {Date} updatedAfter Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.
		 * @return {PlantingActivities} OK
		 */
		V4LayersAsPlantedGetByResourceOwnerIdAndOccurredAfterAndOccurredBeforeAndUpdatedAfter(resourceOwnerId: string | null | undefined, occurredAfter: Date | null | undefined, occurredBefore: Date | null | undefined, updatedAfter: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<PlantingActivities> {
			return this.http.get<PlantingActivities>(this.baseUri + 'v4/layers/asPlanted?resourceOwnerId=' + (resourceOwnerId == null ? '' : encodeURIComponent(resourceOwnerId)) + '&occurredAfter=' + occurredAfter?.toISOString() + '&occurredBefore=' + occurredBefore?.toISOString() + '&updatedAfter=' + updatedAfter?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the raw planting activity
		 * Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.
		 * Get v4/layers/asPlanted/{activityId}/contents
		 * @param {string} activityId Unique identifier of the Planting Activity.
		 * @return {void} OK
		 */
		V4LayersAsPlanted_activityIdContentsGet(activityId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/layers/asPlanted/' + (activityId == null ? '' : encodeURIComponent(activityId)) + '/contents', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of scouting observations
		 * Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.
		 * Get v4/layers/scoutingObservations
		 * @param {Date} occurredAfter Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @param {Date} occurredBefore Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.
		 * @return {ScoutingObservations} OK
		 */
		V4LayersScoutingObservationsGetByOccurredAfterAndOccurredBefore(occurredAfter: Date | null | undefined, occurredBefore: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<ScoutingObservations> {
			return this.http.get<ScoutingObservations>(this.baseUri + 'v4/layers/scoutingObservations?occurredAfter=' + occurredAfter?.toISOString() + '&occurredBefore=' + occurredBefore?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve individual scouting observation
		 * Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.
		 * Get v4/layers/scoutingObservations/{scoutingObservationId}
		 * @param {string} scoutingObservationId Unique identifier of the Scouting Observation.
		 * @return {ScoutingObservation} Returns the requested scouting observation.
		 */
		V4LayersScoutingObservations_scoutingObservationIdGet(scoutingObservationId: string, headersHandler?: () => HttpHeaders): Observable<ScoutingObservation> {
			return this.http.get<ScoutingObservation>(this.baseUri + 'v4/layers/scoutingObservations/' + (scoutingObservationId == null ? '' : encodeURIComponent(scoutingObservationId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve attachments associated with a given scouting observation.
		 * Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.
		 * Get v4/layers/scoutingObservations/{scoutingObservationId}/attachments
		 * @param {string} scoutingObservationId Unique identifier of the Scouting Observation.
		 * @return {ScoutingObservationAttachments} OK
		 */
		V4LayersScoutingObservations_scoutingObservationIdAttachmentsGet(scoutingObservationId: string, headersHandler?: () => HttpHeaders): Observable<ScoutingObservationAttachments> {
			return this.http.get<ScoutingObservationAttachments>(this.baseUri + 'v4/layers/scoutingObservations/' + (scoutingObservationId == null ? '' : encodeURIComponent(scoutingObservationId)) + '/attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the binary contents of a scouting observation’s attachment.
		 * Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).
		 * Get v4/layers/scoutingObservations/{scoutingObservationId}/attachments/{attachmentId}/contents
		 * @param {string} scoutingObservationId Unique identifier of the Scouting Observation.
		 * @param {string} attachmentId Unique identifier of the attachment.
		 * @return {void} OK
		 */
		V4LayersScoutingObservations_scoutingObservationIdAttachments_attachmentIdContentsGet(scoutingObservationId: string, attachmentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/layers/scoutingObservations/' + (scoutingObservationId == null ? '' : encodeURIComponent(scoutingObservationId)) + '/attachments/' + (attachmentId == null ? '' : encodeURIComponent(attachmentId)) + '/contents', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the operations accessible to a a given user.
		 * Retrieve the **operations** accessible to the authenticated user. Filter the results by resource owner if the `resourceOwnerId` query parameter is specified.
		 * Get v4/operations/all
		 * @param {string} resourceOwnerId Optional comma-separated list of resource owner unique identifiers by which to filter results.
		 * @return {Operations} Returns the requested operations.
		 */
		V4OperationsAllGetByResourceOwnerId(resourceOwnerId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Operations> {
			return this.http.get<Operations>(this.baseUri + 'v4/operations/all?resourceOwnerId=' + (resourceOwnerId == null ? '' : encodeURIComponent(resourceOwnerId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a resource owner by ID
		 * Retrieve a resource owner for the given `resourceOwnerId`.
		 * Get v4/resourceOwners/{resourceOwnerId}
		 * @param {string} resourceOwnerId Unique identifier of the resource owner.
		 * @return {ResourceOwner} OK
		 */
		V4ResourceOwners_resourceOwnerIdGet(resourceOwnerId: string, headersHandler?: () => HttpHeaders): Observable<ResourceOwner> {
			return this.http.get<ResourceOwner>(this.baseUri + 'v4/resourceOwners/' + (resourceOwnerId == null ? '' : encodeURIComponent(resourceOwnerId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Initiate a new upload
		 * Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.
		 * The following `contentTypes` may be uploaded:
		 * <details><summary>__image/vnd.climate.thermal.geotiff__</summary>
		 * Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
		 * The following metadata entries are required to be embedded in the geotiff:
		 * * acquisitionStartDate - ISO8601 date
		 * * acquisitionEndDate - ISO8601 date
		 * * isCalibrated - boolean
		 * The following metadata entries are optional:
		 * * sourceId - uuid referencing the asset in the partner's system
		 * * fieldId - uuid referencing a field in the Climate system
		 * * boundaryId - uuid referencing a boundary in the Climate system
		 * * brandId - uuid referencing a partner's branding in the Climate system
		 * * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
		 * Requires either imagery:write or platform scope.
		 * </details>
		 * <details><summary>__image/vnd.climate.ndvi.geotiff__</summary>
		 * Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
		 * The following metadata entries are required to be embedded in the geotiff:
		 * * acquisitionStartDate - ISO8601 date
		 * * acquisitionEndDate - ISO8601 date
		 * The following metadata entries are optional:
		 * * sourceId - uuid referencing the asset in the partner's system
		 * * fieldId - uuid referencing a field in the Climate system
		 * * boundaryId - uuid referencing a boundary in the Climate system
		 * * brandId - uuid referencing a partner's branding in the Climate system
		 * * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
		 * Requires either imagery:write or platform scope.
		 * </details>
		 * <details><summary> __image/vnd.climate.rgb.geotiff__</summary>
		 * Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.
		 * The following metadata entries are required to be embedded in the geotiff:
		 * * acquisitionStartDate - ISO8601 date
		 * * acquisitionEndDate - ISO8601 date
		 * * isCalibrated - boolean
		 * The following metadata entries are optional:
		 * * sourceId - uuid referencing the asset in the partner's system
		 * * fieldId - uuid referencing a field in the Climate system
		 * * boundaryId - uuid referencing a boundary in the Climate system
		 * * brandId - uuid referencing a partner's branding in the Climate system
		 * * reflectanceComputeMethod - either TOA or GROUND
		 * * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
		 * Requires either imagery:write or platform scope.
		 * </details>
		 * <details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>
		 * Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
		 * The following metadata entries are required to be embedded in the geotiff:
		 * * acquisitionStartDate - ISO8601 date
		 * * acquisitionEndDate - ISO8601 date
		 * * isCalibrated - boolean
		 * The following metadata entries are optional:
		 * * sourceId - uuid referencing the asset in the partner's system
		 * * fieldId - uuid referencing a field in the Climate system
		 * * boundaryId - uuid referencing a boundary in the Climate system
		 * * brandId - uuid referencing a partner's branding in the Climate system
		 * * reflectanceComputeMethod - either TOA or GROUND
		 * * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
		 * Requires either imagery:write or platform scope.
		 * </details>
		 * <details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>
		 * Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
		 * The following metadata entries are required to be embedded in the geotiff:
		 * * acquisitionStartDate - ISO8601 date
		 * * acquisitionEndDate - ISO8601 date
		 * * isCalibrated - boolean
		 * The following metadata entries are optional:
		 * * sourceId - uuid referencing the asset in the partner's system
		 * * fieldId - uuid referencing a field in the Climate system
		 * * boundaryId - uuid referencing a boundary in the Climate system
		 * * brandId - uuid referencing a partner's branding in the Climate system
		 * * reflectanceComputeMethod - either TOA or GROUND
		 * * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
		 * Requires either imagery:write or platform scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.rx.planting.shp__</summary>
		 * Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
		 * * .shp
		 * * .shx
		 * * .dbf
		 * All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.
		 * Requires either rx:write or platform scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.prescription.zones.shp__</summary>
		 * Allows for the upload of a zones prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
		 * * .shp
		 * * .shx
		 * * .dbf
		 * All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.
		 * The following metadata entries are required:
		 * * fieldId - field identifier for prescription zones.
		 * Requires either rxZones:write or platform scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.modus.xml__</summary>
		 * Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.
		 * The following elements are required to be present in the modus file.
		 * * EventCode - Max length of 64 bytes
		 * * EventDate - Must be in ISO8601
		 * * SoilSample - Has a maxOccurs of 20k
		 * * Depth - Has a maxOccurs of 50
		 * * LabName - Must be non-empty.
		 * * StartingDepth - 0 to 36 inclusive, default 0
		 * * EndingDepth - 1 - 36 inclusive, default 1
		 * * ColumnDepth
		 * * DepthUnit - must be inches
		 * * Geometry - point in wgs84
		 * Requires the soil:write scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.stand-count.geojson__</summary>
		 * Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
		 * Each feature in the collection must contain the following entry in its properties section:
		 * * StandPPA - A count of the number of plants per acre:
		 * Additionally, the type field of each feature's geometry field must be:
		 * * Point
		 * Requires `imagery:write` scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.weed-count.geojson__</summary>
		 * Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
		 * Each feature in the collection must contain the following entry in its properties section:
		 * * StandPPA - A count of the number of plants per acre:
		 * Additionally, the type field of each feature's geometry field must be:
		 * * Point
		 * Requires `imagery:write` scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.as-applied.zip__</summary>
		 * Allows for the upload of a valid application data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).
		 * The following metadata entries are required:
		 * * fileName - name of the file being uploaded.
		 * The following metadata entries are optional:
		 * * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.
		 * Requires `asApplied:write` scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.as-planted.zip__</summary>
		 * Allows for the upload of a valid planting data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).
		 * The following metadata entries are required:
		 * * fileName - name of the file being uploaded.
		 * The following metadata entries are optional:
		 * * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.
		 * Requires `asPlanted:write` scope.
		 * </details>
		 * <details><summary> __application/vnd.climate.as-harvested.zip__</summary>
		 * Allows for the upload of a valid harvest data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).
		 * The following metadata entries are required:
		 * * fileName - name of the file being uploaded.
		 * The following metadata entries are optional:
		 * * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.
		 * Requires `asHarvested:write` scope.
		 * </details>
		 * Post v4/uploads
		 * @return {void} 
		 */
		V4UploadsPost(requestBody: Upload, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/uploads', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Upload statuses in batch
		 * Check the status of multiple **Uploads** (up to 100 per request).
		 * Post v4/uploads/status/query
		 * @return {UploadStatuses} OK
		 */
		V4UploadsStatusQueryPost(requestBody: UploadStatusQuery, headersHandler?: () => HttpHeaders): Observable<UploadStatuses> {
			return this.http.post<UploadStatuses>(this.baseUri + 'v4/uploads/status/query', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Chunked upload of data
		 * Send chunked data for an **Upload**.
		 * Put v4/uploads/{uploadId}
		 * @param {string} uploadId Unique identifier of an Upload.
		 * @return {void} 
		 */
		V4Uploads_uploadIdPut(uploadId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Upload status
		 * Check the status of an **Upload** by ID.
		 * Get v4/uploads/{uploadId}/status
		 * @param {string} uploadId Unique identifier of an Upload.
		 * @return {UploadStatus} OK
		 */
		V4Uploads_uploadIdStatusGet(uploadId: string, headersHandler?: () => HttpHeaders): Observable<UploadStatus> {
			return this.http.get<UploadStatus>(this.baseUri + 'v4/uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '/status', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

