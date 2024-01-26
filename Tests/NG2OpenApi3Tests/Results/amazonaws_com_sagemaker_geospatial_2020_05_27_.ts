import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteEarthObservationJobOutput {
	}
	export interface DeleteEarthObservationJobOutputFormProperties {
	}
	export function CreateDeleteEarthObservationJobOutputFormGroup() {
		return new FormGroup<DeleteEarthObservationJobOutputFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface DeleteVectorEnrichmentJobOutput {
	}
	export interface DeleteVectorEnrichmentJobOutputFormProperties {
	}
	export function CreateDeleteVectorEnrichmentJobOutputFormGroup() {
		return new FormGroup<DeleteVectorEnrichmentJobOutputFormProperties>({
		});

	}

	export interface ExportEarthObservationJobOutput {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		ExecutionRoleArn: string;
		ExportSourceImages?: boolean | null;

		/** Required */
		ExportStatus: EarthObservationJobExportStatus;

		/** Required */
		OutputConfig: OutputConfigInput;
	}
	export interface ExportEarthObservationJobOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		ExportSourceImages: FormControl<boolean | null | undefined>,

		/** Required */
		ExportStatus: FormControl<EarthObservationJobExportStatus | null | undefined>,
	}
	export function CreateExportEarthObservationJobOutputFormGroup() {
		return new FormGroup<ExportEarthObservationJobOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportSourceImages: new FormControl<boolean | null | undefined>(undefined),
			ExportStatus: new FormControl<EarthObservationJobExportStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EarthObservationJobExportStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }


	/** The response structure for an OutputConfig returned by an ExportEarthObservationJob. */
	export interface OutputConfigInput {

		/** Required */
		S3Data: ExportS3DataInput;
	}

	/** The response structure for an OutputConfig returned by an ExportEarthObservationJob. */
	export interface OutputConfigInputFormProperties {
	}
	export function CreateOutputConfigInputFormGroup() {
		return new FormGroup<OutputConfigInputFormProperties>({
		});

	}


	/** The structure containing the Amazon S3 path to export the Earth Observation job output. */
	export interface ExportS3DataInput {
		KmsKeyId?: string;

		/** Required */
		S3Uri: string;
	}

	/** The structure containing the Amazon S3 path to export the Earth Observation job output. */
	export interface ExportS3DataInputFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateExportS3DataInputFormGroup() {
		return new FormGroup<ExportS3DataInputFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ExportVectorEnrichmentJobOutput {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		ExportStatus: EarthObservationJobExportStatus;

		/** Required */
		OutputConfig: ExportVectorEnrichmentJobOutputConfig;
	}
	export interface ExportVectorEnrichmentJobOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** Required */
		ExportStatus: FormControl<EarthObservationJobExportStatus | null | undefined>,
	}
	export function CreateExportVectorEnrichmentJobOutputFormGroup() {
		return new FormGroup<ExportVectorEnrichmentJobOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportStatus: new FormControl<EarthObservationJobExportStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object containing information about the output file. */
	export interface ExportVectorEnrichmentJobOutputConfig {

		/** Required */
		S3Data: VectorEnrichmentJobS3Data;
	}

	/** An object containing information about the output file. */
	export interface ExportVectorEnrichmentJobOutputConfigFormProperties {
	}
	export function CreateExportVectorEnrichmentJobOutputConfigFormGroup() {
		return new FormGroup<ExportVectorEnrichmentJobOutputConfigFormProperties>({
		});

	}


	/** The Amazon S3 data for the Vector Enrichment job. */
	export interface VectorEnrichmentJobS3Data {
		KmsKeyId?: string;

		/** Required */
		S3Uri: string;
	}

	/** The Amazon S3 data for the Vector Enrichment job. */
	export interface VectorEnrichmentJobS3DataFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateVectorEnrichmentJobS3DataFormGroup() {
		return new FormGroup<VectorEnrichmentJobS3DataFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEarthObservationJobOutput {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		DurationInSeconds: number;
		ErrorDetails?: EarthObservationJobErrorDetails;
		ExecutionRoleArn?: string;
		ExportErrorDetails?: ExportErrorDetails;
		ExportStatus?: EarthObservationJobExportStatus;

		/** Required */
		InputConfig: InputConfigOutput;

		/** Required */
		JobConfig: JobConfigInput;
		KmsKeyId?: string;

		/** Required */
		Name: string;
		OutputBands?: Array<OutputBand>;

		/** Required */
		Status: EarthObservationJobStatus;
		Tags?: Tags;
	}
	export interface GetEarthObservationJobOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		DurationInSeconds: FormControl<number | null | undefined>,
		ExecutionRoleArn: FormControl<string | null | undefined>,
		ExportStatus: FormControl<EarthObservationJobExportStatus | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EarthObservationJobStatus | null | undefined>,
	}
	export function CreateGetEarthObservationJobOutputFormGroup() {
		return new FormGroup<GetEarthObservationJobOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			ExportStatus: new FormControl<EarthObservationJobExportStatus | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EarthObservationJobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the errors in an EarthObservationJob. */
	export interface EarthObservationJobErrorDetails {
		Message?: string;
		Type?: EarthObservationJobErrorType;
	}

	/** The structure representing the errors in an EarthObservationJob. */
	export interface EarthObservationJobErrorDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
		Type: FormControl<EarthObservationJobErrorType | null | undefined>,
	}
	export function CreateEarthObservationJobErrorDetailsFormGroup() {
		return new FormGroup<EarthObservationJobErrorDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EarthObservationJobErrorType | null | undefined>(undefined),
		});

	}

	export enum EarthObservationJobErrorType { CLIENT_ERROR = 0, SERVER_ERROR = 1 }


	/** The structure for returning the export error details in a GetEarthObservationJob. */
	export interface ExportErrorDetails {
		ExportResults?: ExportErrorDetailsOutput;
		ExportSourceImages?: ExportErrorDetailsOutput;
	}

	/** The structure for returning the export error details in a GetEarthObservationJob. */
	export interface ExportErrorDetailsFormProperties {
	}
	export function CreateExportErrorDetailsFormGroup() {
		return new FormGroup<ExportErrorDetailsFormProperties>({
		});

	}


	/** The structure representing the errors in an export EarthObservationJob operation. */
	export interface ExportErrorDetailsOutput {
		Message?: string;
		Type?: EarthObservationJobErrorType;
	}

	/** The structure representing the errors in an export EarthObservationJob operation. */
	export interface ExportErrorDetailsOutputFormProperties {
		Message: FormControl<string | null | undefined>,
		Type: FormControl<EarthObservationJobErrorType | null | undefined>,
	}
	export function CreateExportErrorDetailsOutputFormGroup() {
		return new FormGroup<ExportErrorDetailsOutputFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EarthObservationJobErrorType | null | undefined>(undefined),
		});

	}


	/** The InputConfig for an EarthObservationJob response. */
	export interface InputConfigOutput {
		PreviousEarthObservationJobArn?: string;
		RasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
	}

	/** The InputConfig for an EarthObservationJob response. */
	export interface InputConfigOutputFormProperties {
		PreviousEarthObservationJobArn: FormControl<string | null | undefined>,
	}
	export function CreateInputConfigOutputFormGroup() {
		return new FormGroup<InputConfigOutputFormProperties>({
			PreviousEarthObservationJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output structure contains the Raster Data Collection Query input along with some additional metadata. */
	export interface RasterDataCollectionQueryOutput {
		AreaOfInterest?: AreaOfInterest;
		PropertyFilters?: PropertyFilters;

		/** Required */
		RasterDataCollectionArn: string;

		/** Required */
		RasterDataCollectionName: string;

		/** Required */
		TimeRangeFilter: TimeRangeFilterOutput;
	}

	/** The output structure contains the Raster Data Collection Query input along with some additional metadata. */
	export interface RasterDataCollectionQueryOutputFormProperties {

		/** Required */
		RasterDataCollectionArn: FormControl<string | null | undefined>,

		/** Required */
		RasterDataCollectionName: FormControl<string | null | undefined>,
	}
	export function CreateRasterDataCollectionQueryOutputFormGroup() {
		return new FormGroup<RasterDataCollectionQueryOutputFormProperties>({
			RasterDataCollectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RasterDataCollectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The geographic extent of the Earth Observation job. */
	export interface AreaOfInterest {
		AreaOfInterestGeometry?: AreaOfInterestGeometry;
	}

	/** The geographic extent of the Earth Observation job. */
	export interface AreaOfInterestFormProperties {
	}
	export function CreateAreaOfInterestFormGroup() {
		return new FormGroup<AreaOfInterestFormProperties>({
		});

	}


	/** A GeoJSON object representing the geographic extent in the coordinate space. */
	export interface AreaOfInterestGeometry {
		MultiPolygonGeometry?: MultiPolygonGeometryInput;
		PolygonGeometry?: PolygonGeometryInput;
	}

	/** A GeoJSON object representing the geographic extent in the coordinate space. */
	export interface AreaOfInterestGeometryFormProperties {
	}
	export function CreateAreaOfInterestGeometryFormGroup() {
		return new FormGroup<AreaOfInterestGeometryFormProperties>({
		});

	}


	/** The structure representing Polygon Geometry based on the <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6">GeoJson spec</a>. */
	export interface MultiPolygonGeometryInput {

		/** Required */
		Coordinates: Array<Array<Array<Array<number>>>>;
	}

	/** The structure representing Polygon Geometry based on the <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6">GeoJson spec</a>. */
	export interface MultiPolygonGeometryInputFormProperties {
	}
	export function CreateMultiPolygonGeometryInputFormGroup() {
		return new FormGroup<MultiPolygonGeometryInputFormProperties>({
		});

	}


	/** The structure representing Polygon Geometry based on the <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6">GeoJson spec</a>. */
	export interface PolygonGeometryInput {

		/** Required */
		Coordinates: Array<Array<Array<number>>>;
	}

	/** The structure representing Polygon Geometry based on the <a href="https://www.rfc-editor.org/rfc/rfc7946#section-3.1.6">GeoJson spec</a>. */
	export interface PolygonGeometryInputFormProperties {
	}
	export function CreatePolygonGeometryInputFormGroup() {
		return new FormGroup<PolygonGeometryInputFormProperties>({
		});

	}


	/** A list of PropertyFilter objects. */
	export interface PropertyFilters {
		LogicalOperator?: LogicalOperator;
		Properties?: Array<PropertyFilter>;
	}

	/** A list of PropertyFilter objects. */
	export interface PropertyFiltersFormProperties {
		LogicalOperator: FormControl<LogicalOperator | null | undefined>,
	}
	export function CreatePropertyFiltersFormGroup() {
		return new FormGroup<PropertyFiltersFormProperties>({
			LogicalOperator: new FormControl<LogicalOperator | null | undefined>(undefined),
		});

	}

	export enum LogicalOperator { AND = 0 }


	/** The structure representing a single PropertyFilter. */
	export interface PropertyFilter {

		/** Required */
		Property: Property;
	}

	/** The structure representing a single PropertyFilter. */
	export interface PropertyFilterFormProperties {
	}
	export function CreatePropertyFilterFormGroup() {
		return new FormGroup<PropertyFilterFormProperties>({
		});

	}


	/** Represents a single searchable property to search on. */
	export interface Property {
		EoCloudCover?: EoCloudCoverInput;
		LandsatCloudCoverLand?: LandsatCloudCoverLandInput;
		Platform?: PlatformInput;
		ViewOffNadir?: ViewOffNadirInput;
		ViewSunAzimuth?: ViewSunAzimuthInput;
		ViewSunElevation?: ViewSunElevationInput;
	}

	/** Represents a single searchable property to search on. */
	export interface PropertyFormProperties {
	}
	export function CreatePropertyFormGroup() {
		return new FormGroup<PropertyFormProperties>({
		});

	}


	/** The structure representing the EoCloudCover filter. */
	export interface EoCloudCoverInput {

		/** Required */
		LowerBound: number;

		/** Required */
		UpperBound: number;
	}

	/** The structure representing the EoCloudCover filter. */
	export interface EoCloudCoverInputFormProperties {

		/** Required */
		LowerBound: FormControl<number | null | undefined>,

		/** Required */
		UpperBound: FormControl<number | null | undefined>,
	}
	export function CreateEoCloudCoverInputFormGroup() {
		return new FormGroup<EoCloudCoverInputFormProperties>({
			LowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing Land Cloud Cover property for Landsat data collection. */
	export interface LandsatCloudCoverLandInput {

		/** Required */
		LowerBound: number;

		/** Required */
		UpperBound: number;
	}

	/** The structure representing Land Cloud Cover property for Landsat data collection. */
	export interface LandsatCloudCoverLandInputFormProperties {

		/** Required */
		LowerBound: FormControl<number | null | undefined>,

		/** Required */
		UpperBound: FormControl<number | null | undefined>,
	}
	export function CreateLandsatCloudCoverLandInputFormGroup() {
		return new FormGroup<LandsatCloudCoverLandInputFormProperties>({
			LowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input structure for specifying Platform. Platform refers to the unique name of the specific platform the instrument is attached to. For satellites it is the name of the satellite, eg. landsat-8 (Landsat-8), sentinel-2a. */
	export interface PlatformInput {
		ComparisonOperator?: ComparisonOperator;

		/** Required */
		Value: string;
	}

	/** The input structure for specifying Platform. Platform refers to the unique name of the specific platform the instrument is attached to. For satellites it is the name of the satellite, eg. landsat-8 (Landsat-8), sentinel-2a. */
	export interface PlatformInputFormProperties {
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreatePlatformInputFormGroup() {
		return new FormGroup<PlatformInputFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComparisonOperator { EQUALS = 0, NOT_EQUALS = 1, STARTS_WITH = 2 }


	/** The input structure for specifying ViewOffNadir property filter. ViewOffNadir refers to the angle from the sensor between nadir (straight down) and the scene center. Measured in degrees (0-90). */
	export interface ViewOffNadirInput {

		/** Required */
		LowerBound: number;

		/** Required */
		UpperBound: number;
	}

	/** The input structure for specifying ViewOffNadir property filter. ViewOffNadir refers to the angle from the sensor between nadir (straight down) and the scene center. Measured in degrees (0-90). */
	export interface ViewOffNadirInputFormProperties {

		/** Required */
		LowerBound: FormControl<number | null | undefined>,

		/** Required */
		UpperBound: FormControl<number | null | undefined>,
	}
	export function CreateViewOffNadirInputFormGroup() {
		return new FormGroup<ViewOffNadirInputFormProperties>({
			LowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input structure for specifying ViewSunAzimuth property filter. ViewSunAzimuth refers to the Sun azimuth angle. From the scene center point on the ground, this is the angle between truth north and the sun. Measured clockwise in degrees (0-360). */
	export interface ViewSunAzimuthInput {

		/** Required */
		LowerBound: number;

		/** Required */
		UpperBound: number;
	}

	/** The input structure for specifying ViewSunAzimuth property filter. ViewSunAzimuth refers to the Sun azimuth angle. From the scene center point on the ground, this is the angle between truth north and the sun. Measured clockwise in degrees (0-360). */
	export interface ViewSunAzimuthInputFormProperties {

		/** Required */
		LowerBound: FormControl<number | null | undefined>,

		/** Required */
		UpperBound: FormControl<number | null | undefined>,
	}
	export function CreateViewSunAzimuthInputFormGroup() {
		return new FormGroup<ViewSunAzimuthInputFormProperties>({
			LowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input structure for specifying ViewSunElevation angle property filter.  */
	export interface ViewSunElevationInput {

		/** Required */
		LowerBound: number;

		/** Required */
		UpperBound: number;
	}

	/** The input structure for specifying ViewSunElevation angle property filter.  */
	export interface ViewSunElevationInputFormProperties {

		/** Required */
		LowerBound: FormControl<number | null | undefined>,

		/** Required */
		UpperBound: FormControl<number | null | undefined>,
	}
	export function CreateViewSunElevationInputFormGroup() {
		return new FormGroup<ViewSunElevationInputFormProperties>({
			LowerBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			UpperBound: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The output structure of the time range filter. */
	export interface TimeRangeFilterOutput {

		/** Required */
		EndTime: Date;

		/** Required */
		StartTime: Date;
	}

	/** The output structure of the time range filter. */
	export interface TimeRangeFilterOutputFormProperties {

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeRangeFilterOutputFormGroup() {
		return new FormGroup<TimeRangeFilterOutputFormProperties>({
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input structure for the JobConfig in an EarthObservationJob. */
	export interface JobConfigInput {
		BandMathConfig?: BandMathConfigInput;
		CloudMaskingConfig?: CloudMaskingConfigInput;
		CloudRemovalConfig?: CloudRemovalConfigInput;
		GeoMosaicConfig?: GeoMosaicConfigInput;
		LandCoverSegmentationConfig?: LandCoverSegmentationConfigInput;
		ResamplingConfig?: ResamplingConfigInput;
		StackConfig?: StackConfigInput;
		TemporalStatisticsConfig?: TemporalStatisticsConfigInput;
		ZonalStatisticsConfig?: ZonalStatisticsConfigInput;
	}

	/** The input structure for the JobConfig in an EarthObservationJob. */
	export interface JobConfigInputFormProperties {
	}
	export function CreateJobConfigInputFormGroup() {
		return new FormGroup<JobConfigInputFormProperties>({
		});

	}


	/** Input structure for the BandMath operation type. Defines Predefined and CustomIndices to be computed using BandMath. */
	export interface BandMathConfigInput {
		CustomIndices?: CustomIndicesInput;
		PredefinedIndices?: Array<string>;
	}

	/** Input structure for the BandMath operation type. Defines Predefined and CustomIndices to be computed using BandMath. */
	export interface BandMathConfigInputFormProperties {
	}
	export function CreateBandMathConfigInputFormGroup() {
		return new FormGroup<BandMathConfigInputFormProperties>({
		});

	}


	/** Input object defining the custom BandMath indices to compute. */
	export interface CustomIndicesInput {
		Operations?: Array<Operation>;
	}

	/** Input object defining the custom BandMath indices to compute. */
	export interface CustomIndicesInputFormProperties {
	}
	export function CreateCustomIndicesInputFormGroup() {
		return new FormGroup<CustomIndicesInputFormProperties>({
		});

	}


	/** Represents an arithmetic operation to compute spectral index. */
	export interface Operation {

		/** Required */
		Equation: string;

		/** Required */
		Name: string;
		OutputType?: OutputType;
	}

	/** Represents an arithmetic operation to compute spectral index. */
	export interface OperationFormProperties {

		/** Required */
		Equation: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		OutputType: FormControl<OutputType | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			Equation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputType: new FormControl<OutputType | null | undefined>(undefined),
		});

	}

	export enum OutputType { INT32 = 0, FLOAT32 = 1, INT16 = 2, FLOAT64 = 3, UINT16 = 4 }


	/** Input structure for CloudMasking operation type. */
	export interface CloudMaskingConfigInput {
	}

	/** Input structure for CloudMasking operation type. */
	export interface CloudMaskingConfigInputFormProperties {
	}
	export function CreateCloudMaskingConfigInputFormGroup() {
		return new FormGroup<CloudMaskingConfigInputFormProperties>({
		});

	}


	/** Input structure for Cloud Removal Operation type */
	export interface CloudRemovalConfigInput {
		AlgorithmName?: AlgorithmNameCloudRemoval;
		InterpolationValue?: string;
		TargetBands?: Array<string>;
	}

	/** Input structure for Cloud Removal Operation type */
	export interface CloudRemovalConfigInputFormProperties {
		AlgorithmName: FormControl<AlgorithmNameCloudRemoval | null | undefined>,
		InterpolationValue: FormControl<string | null | undefined>,
	}
	export function CreateCloudRemovalConfigInputFormGroup() {
		return new FormGroup<CloudRemovalConfigInputFormProperties>({
			AlgorithmName: new FormControl<AlgorithmNameCloudRemoval | null | undefined>(undefined),
			InterpolationValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlgorithmNameCloudRemoval { INTERPOLATION = 0 }


	/** Input configuration information for the geomosaic. */
	export interface GeoMosaicConfigInput {
		AlgorithmName?: AlgorithmNameGeoMosaic;
		TargetBands?: Array<string>;
	}

	/** Input configuration information for the geomosaic. */
	export interface GeoMosaicConfigInputFormProperties {
		AlgorithmName: FormControl<AlgorithmNameGeoMosaic | null | undefined>,
	}
	export function CreateGeoMosaicConfigInputFormGroup() {
		return new FormGroup<GeoMosaicConfigInputFormProperties>({
			AlgorithmName: new FormControl<AlgorithmNameGeoMosaic | null | undefined>(undefined),
		});

	}

	export enum AlgorithmNameGeoMosaic { NEAR = 0, BILINEAR = 1, CUBIC = 2, CUBICSPLINE = 3, LANCZOS = 4, AVERAGE = 5, RMS = 6, MODE = 7, MAX = 8, MIN = 9, MED = 10, Q1 = 11, Q3 = 12, SUM = 13 }


	/** The input structure for Land Cover Operation type. */
	export interface LandCoverSegmentationConfigInput {
	}

	/** The input structure for Land Cover Operation type. */
	export interface LandCoverSegmentationConfigInputFormProperties {
	}
	export function CreateLandCoverSegmentationConfigInputFormGroup() {
		return new FormGroup<LandCoverSegmentationConfigInputFormProperties>({
		});

	}


	/** The structure representing input for resampling operation. */
	export interface ResamplingConfigInput {
		AlgorithmName?: AlgorithmNameGeoMosaic;

		/** Required */
		OutputResolution: OutputResolutionResamplingInput;
		TargetBands?: Array<string>;
	}

	/** The structure representing input for resampling operation. */
	export interface ResamplingConfigInputFormProperties {
		AlgorithmName: FormControl<AlgorithmNameGeoMosaic | null | undefined>,
	}
	export function CreateResamplingConfigInputFormGroup() {
		return new FormGroup<ResamplingConfigInputFormProperties>({
			AlgorithmName: new FormControl<AlgorithmNameGeoMosaic | null | undefined>(undefined),
		});

	}


	/** OutputResolution Configuration indicating the target resolution for the output of Resampling operation. */
	export interface OutputResolutionResamplingInput {

		/** Required */
		UserDefined: UserDefined;
	}

	/** OutputResolution Configuration indicating the target resolution for the output of Resampling operation. */
	export interface OutputResolutionResamplingInputFormProperties {
	}
	export function CreateOutputResolutionResamplingInputFormGroup() {
		return new FormGroup<OutputResolutionResamplingInputFormProperties>({
		});

	}


	/** The output resolution (in target georeferenced units) of the result of the operation */
	export interface UserDefined {

		/** Required */
		Unit: Unit;

		/** Required */
		Value: number;
	}

	/** The output resolution (in target georeferenced units) of the result of the operation */
	export interface UserDefinedFormProperties {

		/** Required */
		Unit: FormControl<Unit | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateUserDefinedFormGroup() {
		return new FormGroup<UserDefinedFormProperties>({
			Unit: new FormControl<Unit | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Unit { METERS = 0 }


	/** The input structure for Stacking Operation. */
	export interface StackConfigInput {
		OutputResolution?: OutputResolutionStackInput;
		TargetBands?: Array<string>;
	}

	/** The input structure for Stacking Operation. */
	export interface StackConfigInputFormProperties {
	}
	export function CreateStackConfigInputFormGroup() {
		return new FormGroup<StackConfigInputFormProperties>({
		});

	}


	/** The input structure representing Output Resolution for Stacking Operation. */
	export interface OutputResolutionStackInput {
		Predefined?: PredefinedResolution;
		UserDefined?: UserDefined;
	}

	/** The input structure representing Output Resolution for Stacking Operation. */
	export interface OutputResolutionStackInputFormProperties {
		Predefined: FormControl<PredefinedResolution | null | undefined>,
	}
	export function CreateOutputResolutionStackInputFormGroup() {
		return new FormGroup<OutputResolutionStackInputFormProperties>({
			Predefined: new FormControl<PredefinedResolution | null | undefined>(undefined),
		});

	}

	export enum PredefinedResolution { HIGHEST = 0, LOWEST = 1, AVERAGE = 2 }


	/** The structure representing the configuration for Temporal Statistics operation. */
	export interface TemporalStatisticsConfigInput {
		GroupBy?: GroupBy;

		/** Required */
		Statistics: Array<TemporalStatistics>;
		TargetBands?: Array<string>;
	}

	/** The structure representing the configuration for Temporal Statistics operation. */
	export interface TemporalStatisticsConfigInputFormProperties {
		GroupBy: FormControl<GroupBy | null | undefined>,
	}
	export function CreateTemporalStatisticsConfigInputFormGroup() {
		return new FormGroup<TemporalStatisticsConfigInputFormProperties>({
			GroupBy: new FormControl<GroupBy | null | undefined>(undefined),
		});

	}

	export enum GroupBy { ALL = 0, YEARLY = 1 }

	export enum TemporalStatistics { MEAN = 0, MEDIAN = 1, STANDARD_DEVIATION = 2 }


	/** The structure representing input configuration of ZonalStatistics operation. */
	export interface ZonalStatisticsConfigInput {

		/** Required */
		Statistics: Array<ZonalStatistics>;
		TargetBands?: Array<string>;

		/** Required */
		ZoneS3Path: string;
		ZoneS3PathKmsKeyId?: string;
	}

	/** The structure representing input configuration of ZonalStatistics operation. */
	export interface ZonalStatisticsConfigInputFormProperties {

		/** Required */
		ZoneS3Path: FormControl<string | null | undefined>,
		ZoneS3PathKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateZonalStatisticsConfigInputFormGroup() {
		return new FormGroup<ZonalStatisticsConfigInputFormProperties>({
			ZoneS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ZoneS3PathKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ZonalStatistics { MEAN = 0, MEDIAN = 1, STANDARD_DEVIATION = 2, MAX = 3, MIN = 4, SUM = 5 }


	/** A single EarthObservationJob output band. */
	export interface OutputBand {

		/** Required */
		BandName: string;

		/** Required */
		OutputDataType: OutputType;
	}

	/** A single EarthObservationJob output band. */
	export interface OutputBandFormProperties {

		/** Required */
		BandName: FormControl<string | null | undefined>,

		/** Required */
		OutputDataType: FormControl<OutputType | null | undefined>,
	}
	export function CreateOutputBandFormGroup() {
		return new FormGroup<OutputBandFormProperties>({
			BandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputDataType: new FormControl<OutputType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EarthObservationJobStatus { INITIALIZING = 0, IN_PROGRESS = 1, STOPPING = 2, COMPLETED = 3, STOPPED = 4, FAILED = 5, DELETING = 6, DELETED = 7 }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface GetRasterDataCollectionOutput {

		/** Required */
		Arn: string;

		/** Required */
		Description: string;

		/** Required */
		DescriptionPageUrl: string;

		/** Required */
		ImageSourceBands: Array<string>;

		/** Required */
		Name: string;

		/** Required */
		SupportedFilters: Array<Filter>;
		Tags?: Tags;

		/** Required */
		Type: DataCollectionType;
	}
	export interface GetRasterDataCollectionOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		DescriptionPageUrl: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DataCollectionType | null | undefined>,
	}
	export function CreateGetRasterDataCollectionOutputFormGroup() {
		return new FormGroup<GetRasterDataCollectionOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DescriptionPageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DataCollectionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the filters supported by a RasterDataCollection. */
	export interface Filter {
		Maximum?: number;
		Minimum?: number;

		/** Required */
		Name: string;

		/** Required */
		Type: string;
	}

	/** The structure representing the filters supported by a RasterDataCollection. */
	export interface FilterFormProperties {
		Maximum: FormControl<number | null | undefined>,
		Minimum: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Maximum: new FormControl<number | null | undefined>(undefined),
			Minimum: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataCollectionType { PUBLIC = 0, PREMIUM = 1, USER = 2 }

	export interface GetTileOutput {
		BinaryFile?: string;
	}
	export interface GetTileOutputFormProperties {
		BinaryFile: FormControl<string | null | undefined>,
	}
	export function CreateGetTileOutputFormGroup() {
		return new FormGroup<GetTileOutputFormProperties>({
			BinaryFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVectorEnrichmentJobOutput {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		DurationInSeconds: number;
		ErrorDetails?: VectorEnrichmentJobErrorDetails;

		/** Required */
		ExecutionRoleArn: string;
		ExportErrorDetails?: VectorEnrichmentJobExportErrorDetails;
		ExportStatus?: EarthObservationJobExportStatus;

		/** Required */
		InputConfig: VectorEnrichmentJobInputConfig;

		/** Required */
		JobConfig: VectorEnrichmentJobConfig;
		KmsKeyId?: string;

		/** Required */
		Name: string;

		/** Required */
		Status: VectorEnrichmentJobStatus;
		Tags?: Tags;

		/** Required */
		Type: VectorEnrichmentJobType;
	}
	export interface GetVectorEnrichmentJobOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		DurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		ExportStatus: FormControl<EarthObservationJobExportStatus | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<VectorEnrichmentJobStatus | null | undefined>,

		/** Required */
		Type: FormControl<VectorEnrichmentJobType | null | undefined>,
	}
	export function CreateGetVectorEnrichmentJobOutputFormGroup() {
		return new FormGroup<GetVectorEnrichmentJobOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportStatus: new FormControl<EarthObservationJobExportStatus | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<VectorEnrichmentJobStatus | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<VectorEnrichmentJobType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** VectorEnrichmentJob error details in response from GetVectorEnrichmentJob. */
	export interface VectorEnrichmentJobErrorDetails {
		ErrorMessage?: string;
		ErrorType?: EarthObservationJobErrorType;
	}

	/** VectorEnrichmentJob error details in response from GetVectorEnrichmentJob. */
	export interface VectorEnrichmentJobErrorDetailsFormProperties {
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorType: FormControl<EarthObservationJobErrorType | null | undefined>,
	}
	export function CreateVectorEnrichmentJobErrorDetailsFormGroup() {
		return new FormGroup<VectorEnrichmentJobErrorDetailsFormProperties>({
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorType: new FormControl<EarthObservationJobErrorType | null | undefined>(undefined),
		});

	}


	/** VectorEnrichmentJob export error details in response from GetVectorEnrichmentJob. */
	export interface VectorEnrichmentJobExportErrorDetails {
		Message?: string;
		Type?: EarthObservationJobErrorType;
	}

	/** VectorEnrichmentJob export error details in response from GetVectorEnrichmentJob. */
	export interface VectorEnrichmentJobExportErrorDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
		Type: FormControl<EarthObservationJobErrorType | null | undefined>,
	}
	export function CreateVectorEnrichmentJobExportErrorDetailsFormGroup() {
		return new FormGroup<VectorEnrichmentJobExportErrorDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EarthObservationJobErrorType | null | undefined>(undefined),
		});

	}


	/** The input structure for the InputConfig in a VectorEnrichmentJob. */
	export interface VectorEnrichmentJobInputConfig {

		/** Required */
		DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput;

		/** Required */
		DocumentType: VectorEnrichmentJobDocumentType;
	}

	/** The input structure for the InputConfig in a VectorEnrichmentJob. */
	export interface VectorEnrichmentJobInputConfigFormProperties {

		/** Required */
		DocumentType: FormControl<VectorEnrichmentJobDocumentType | null | undefined>,
	}
	export function CreateVectorEnrichmentJobInputConfigFormGroup() {
		return new FormGroup<VectorEnrichmentJobInputConfigFormProperties>({
			DocumentType: new FormControl<VectorEnrichmentJobDocumentType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input structure for the data source that represents the storage type of the input data objects. */
	export interface VectorEnrichmentJobDataSourceConfigInput {
		S3Data?: VectorEnrichmentJobS3Data;
	}

	/** The input structure for the data source that represents the storage type of the input data objects. */
	export interface VectorEnrichmentJobDataSourceConfigInputFormProperties {
	}
	export function CreateVectorEnrichmentJobDataSourceConfigInputFormGroup() {
		return new FormGroup<VectorEnrichmentJobDataSourceConfigInputFormProperties>({
		});

	}

	export enum VectorEnrichmentJobDocumentType { CSV = 0 }


	/** It contains configs such as ReverseGeocodingConfig and MapMatchingConfig. */
	export interface VectorEnrichmentJobConfig {
		MapMatchingConfig?: MapMatchingConfig;
		ReverseGeocodingConfig?: ReverseGeocodingConfig;
	}

	/** It contains configs such as ReverseGeocodingConfig and MapMatchingConfig. */
	export interface VectorEnrichmentJobConfigFormProperties {
	}
	export function CreateVectorEnrichmentJobConfigFormGroup() {
		return new FormGroup<VectorEnrichmentJobConfigFormProperties>({
		});

	}


	/** The input structure for Map Matching operation type. */
	export interface MapMatchingConfig {

		/** Required */
		IdAttributeName: string;

		/** Required */
		TimestampAttributeName: string;

		/** Required */
		XAttributeName: string;

		/** Required */
		YAttributeName: string;
	}

	/** The input structure for Map Matching operation type. */
	export interface MapMatchingConfigFormProperties {

		/** Required */
		IdAttributeName: FormControl<string | null | undefined>,

		/** Required */
		TimestampAttributeName: FormControl<string | null | undefined>,

		/** Required */
		XAttributeName: FormControl<string | null | undefined>,

		/** Required */
		YAttributeName: FormControl<string | null | undefined>,
	}
	export function CreateMapMatchingConfigFormGroup() {
		return new FormGroup<MapMatchingConfigFormProperties>({
			IdAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimestampAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			XAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			YAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input structure for Reverse Geocoding operation type. */
	export interface ReverseGeocodingConfig {

		/** Required */
		XAttributeName: string;

		/** Required */
		YAttributeName: string;
	}

	/** The input structure for Reverse Geocoding operation type. */
	export interface ReverseGeocodingConfigFormProperties {

		/** Required */
		XAttributeName: FormControl<string | null | undefined>,

		/** Required */
		YAttributeName: FormControl<string | null | undefined>,
	}
	export function CreateReverseGeocodingConfigFormGroup() {
		return new FormGroup<ReverseGeocodingConfigFormProperties>({
			XAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			YAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VectorEnrichmentJobStatus { INITIALIZING = 0, IN_PROGRESS = 1, STOPPING = 2, STOPPED = 3, COMPLETED = 4, FAILED = 5, DELETING = 6, DELETED = 7 }

	export enum VectorEnrichmentJobType { REVERSE_GEOCODING = 0, MAP_MATCHING = 1 }

	export interface ListEarthObservationJobOutput {

		/** Required */
		EarthObservationJobSummaries: Array<ListEarthObservationJobOutputConfig>;
		NextToken?: string;
	}
	export interface ListEarthObservationJobOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEarthObservationJobOutputFormGroup() {
		return new FormGroup<ListEarthObservationJobOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing information about the output file. */
	export interface ListEarthObservationJobOutputConfig {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		DurationInSeconds: number;

		/** Required */
		Name: string;

		/** Required */
		OperationType: string;

		/** Required */
		Status: EarthObservationJobStatus;
		Tags?: Tags;
	}

	/** An object containing information about the output file. */
	export interface ListEarthObservationJobOutputConfigFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		DurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		OperationType: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EarthObservationJobStatus | null | undefined>,
	}
	export function CreateListEarthObservationJobOutputConfigFormGroup() {
		return new FormGroup<ListEarthObservationJobOutputConfigFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OperationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EarthObservationJobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRasterDataCollectionsOutput {
		NextToken?: string;

		/** Required */
		RasterDataCollectionSummaries: Array<RasterDataCollectionMetadata>;
	}
	export interface ListRasterDataCollectionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRasterDataCollectionsOutputFormGroup() {
		return new FormGroup<ListRasterDataCollectionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response object containing details for a specific RasterDataCollection. */
	export interface RasterDataCollectionMetadata {

		/** Required */
		Arn: string;

		/** Required */
		Description: string;
		DescriptionPageUrl?: string;

		/** Required */
		Name: string;

		/** Required */
		SupportedFilters: Array<Filter>;
		Tags?: Tags;

		/** Required */
		Type: DataCollectionType;
	}

	/** Response object containing details for a specific RasterDataCollection. */
	export interface RasterDataCollectionMetadataFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
		DescriptionPageUrl: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DataCollectionType | null | undefined>,
	}
	export function CreateRasterDataCollectionMetadataFormGroup() {
		return new FormGroup<RasterDataCollectionMetadataFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DescriptionPageUrl: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DataCollectionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListVectorEnrichmentJobOutput {
		NextToken?: string;

		/** Required */
		VectorEnrichmentJobSummaries: Array<ListVectorEnrichmentJobOutputConfig>;
	}
	export interface ListVectorEnrichmentJobOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVectorEnrichmentJobOutputFormGroup() {
		return new FormGroup<ListVectorEnrichmentJobOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing information about the output file. */
	export interface ListVectorEnrichmentJobOutputConfig {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		DurationInSeconds: number;

		/** Required */
		Name: string;

		/** Required */
		Status: VectorEnrichmentJobStatus;
		Tags?: Tags;

		/** Required */
		Type: VectorEnrichmentJobType;
	}

	/** An object containing information about the output file. */
	export interface ListVectorEnrichmentJobOutputConfigFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		DurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<VectorEnrichmentJobStatus | null | undefined>,

		/** Required */
		Type: FormControl<VectorEnrichmentJobType | null | undefined>,
	}
	export function CreateListVectorEnrichmentJobOutputConfigFormGroup() {
		return new FormGroup<ListVectorEnrichmentJobOutputConfigFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<VectorEnrichmentJobStatus | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<VectorEnrichmentJobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchRasterDataCollectionOutput {

		/** Required */
		ApproximateResultCount: number;
		Items?: Array<ItemSource>;
		NextToken?: string;
	}
	export interface SearchRasterDataCollectionOutputFormProperties {

		/** Required */
		ApproximateResultCount: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchRasterDataCollectionOutputFormGroup() {
		return new FormGroup<SearchRasterDataCollectionOutputFormProperties>({
			ApproximateResultCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure representing the items in the response for SearchRasterDataCollection. */
	export interface ItemSource {
		Assets?: AssetsMap;

		/** Required */
		DateTime: Date;

		/** Required */
		Geometry: Geometry;

		/** Required */
		Id: string;
		Properties?: Properties;
	}

	/** The structure representing the items in the response for SearchRasterDataCollection. */
	export interface ItemSourceFormProperties {

		/** Required */
		DateTime: FormControl<Date | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateItemSourceFormGroup() {
		return new FormGroup<ItemSourceFormProperties>({
			DateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsMap {
	}
	export interface AssetsMapFormProperties {
	}
	export function CreateAssetsMapFormGroup() {
		return new FormGroup<AssetsMapFormProperties>({
		});

	}


	/** The structure representing a Geometry in terms of Type and Coordinates as per GeoJson spec. */
	export interface Geometry {

		/** Required */
		Coordinates: Array<Array<Array<number>>>;

		/** Required */
		Type: string;
	}

	/** The structure representing a Geometry in terms of Type and Coordinates as per GeoJson spec. */
	export interface GeometryFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Properties associated with the Item. */
	export interface Properties {
		EoCloudCover?: number;
		LandsatCloudCoverLand?: number;
		Platform?: string;
		ViewOffNadir?: number;
		ViewSunAzimuth?: number;
		ViewSunElevation?: number;
	}

	/** Properties associated with the Item. */
	export interface PropertiesFormProperties {
		EoCloudCover: FormControl<number | null | undefined>,
		LandsatCloudCoverLand: FormControl<number | null | undefined>,
		Platform: FormControl<string | null | undefined>,
		ViewOffNadir: FormControl<number | null | undefined>,
		ViewSunAzimuth: FormControl<number | null | undefined>,
		ViewSunElevation: FormControl<number | null | undefined>,
	}
	export function CreatePropertiesFormGroup() {
		return new FormGroup<PropertiesFormProperties>({
			EoCloudCover: new FormControl<number | null | undefined>(undefined),
			LandsatCloudCoverLand: new FormControl<number | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
			ViewOffNadir: new FormControl<number | null | undefined>(undefined),
			ViewSunAzimuth: new FormControl<number | null | undefined>(undefined),
			ViewSunElevation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The input for the time-range filter. */
	export interface TimeRangeFilterInput {

		/** Required */
		EndTime: Date;

		/** Required */
		StartTime: Date;
	}

	/** The input for the time-range filter. */
	export interface TimeRangeFilterInputFormProperties {

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeRangeFilterInputFormGroup() {
		return new FormGroup<TimeRangeFilterInputFormProperties>({
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartEarthObservationJobOutput {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		DurationInSeconds: number;

		/** Required */
		ExecutionRoleArn: string;
		InputConfig?: InputConfigOutput;

		/** Required */
		JobConfig: JobConfigInput;
		KmsKeyId?: string;

		/** Required */
		Name: string;

		/** Required */
		Status: EarthObservationJobStatus;
		Tags?: Tags;
	}
	export interface StartEarthObservationJobOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		DurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<EarthObservationJobStatus | null | undefined>,
	}
	export function CreateStartEarthObservationJobOutputFormGroup() {
		return new FormGroup<StartEarthObservationJobOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<EarthObservationJobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input structure for Raster Data Collection Query containing the Area of Interest, TimeRange Filters, and Property Filters. */
	export interface RasterDataCollectionQueryInput {
		AreaOfInterest?: AreaOfInterest;
		PropertyFilters?: PropertyFilters;

		/** Required */
		RasterDataCollectionArn: string;

		/** Required */
		TimeRangeFilter: TimeRangeFilterInput;
	}

	/** The input structure for Raster Data Collection Query containing the Area of Interest, TimeRange Filters, and Property Filters. */
	export interface RasterDataCollectionQueryInputFormProperties {

		/** Required */
		RasterDataCollectionArn: FormControl<string | null | undefined>,
	}
	export function CreateRasterDataCollectionQueryInputFormGroup() {
		return new FormGroup<RasterDataCollectionQueryInputFormProperties>({
			RasterDataCollectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartVectorEnrichmentJobOutput {

		/** Required */
		Arn: string;

		/** Required */
		CreationTime: Date;

		/** Required */
		DurationInSeconds: number;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		InputConfig: VectorEnrichmentJobInputConfig;

		/** Required */
		JobConfig: VectorEnrichmentJobConfig;
		KmsKeyId?: string;

		/** Required */
		Name: string;

		/** Required */
		Status: VectorEnrichmentJobStatus;
		Tags?: Tags;

		/** Required */
		Type: VectorEnrichmentJobType;
	}
	export interface StartVectorEnrichmentJobOutputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		DurationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<VectorEnrichmentJobStatus | null | undefined>,

		/** Required */
		Type: FormControl<VectorEnrichmentJobType | null | undefined>,
	}
	export function CreateStartVectorEnrichmentJobOutputFormGroup() {
		return new FormGroup<StartVectorEnrichmentJobOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DurationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<VectorEnrichmentJobStatus | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<VectorEnrichmentJobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopEarthObservationJobOutput {
	}
	export interface StopEarthObservationJobOutputFormProperties {
	}
	export function CreateStopEarthObservationJobOutputFormGroup() {
		return new FormGroup<StopEarthObservationJobOutputFormProperties>({
		});

	}

	export interface StopVectorEnrichmentJobOutput {
	}
	export interface StopVectorEnrichmentJobOutputFormProperties {
	}
	export function CreateStopVectorEnrichmentJobOutputFormGroup() {
		return new FormGroup<StopVectorEnrichmentJobOutputFormProperties>({
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export enum AlgorithmNameResampling { NEAR = 0, BILINEAR = 1, CUBIC = 2, CUBICSPLINE = 3, LANCZOS = 4, AVERAGE = 5, RMS = 6, MODE = 7, MAX = 8, MIN = 9, MED = 10, Q1 = 11, Q3 = 12, SUM = 13 }


	/** The structure containing the asset properties. */
	export interface AssetValue {
		Href?: string;
	}

	/** The structure containing the asset properties. */
	export interface AssetValueFormProperties {
		Href: FormControl<string | null | undefined>,
	}
	export function CreateAssetValueFormGroup() {
		return new FormGroup<AssetValueFormProperties>({
			Href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEarthObservationJobInput {
	}
	export interface DeleteEarthObservationJobInputFormProperties {
	}
	export function CreateDeleteEarthObservationJobInputFormGroup() {
		return new FormGroup<DeleteEarthObservationJobInputFormProperties>({
		});

	}

	export interface DeleteVectorEnrichmentJobInput {
	}
	export interface DeleteVectorEnrichmentJobInputFormProperties {
	}
	export function CreateDeleteVectorEnrichmentJobInputFormGroup() {
		return new FormGroup<DeleteVectorEnrichmentJobInputFormProperties>({
		});

	}

	export interface ExportEarthObservationJobInput {

		/** Required */
		Arn: string;
		ClientToken?: string;

		/** Required */
		ExecutionRoleArn: string;
		ExportSourceImages?: boolean | null;

		/** Required */
		OutputConfig: OutputConfigInput;
	}
	export interface ExportEarthObservationJobInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		ExportSourceImages: FormControl<boolean | null | undefined>,
	}
	export function CreateExportEarthObservationJobInputFormGroup() {
		return new FormGroup<ExportEarthObservationJobInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportSourceImages: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ExportErrorType { CLIENT_ERROR = 0, SERVER_ERROR = 1 }

	export interface ExportVectorEnrichmentJobInput {

		/** Required */
		Arn: string;
		ClientToken?: string;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		OutputConfig: ExportVectorEnrichmentJobOutputConfig;
	}
	export interface ExportVectorEnrichmentJobInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateExportVectorEnrichmentJobInputFormGroup() {
		return new FormGroup<ExportVectorEnrichmentJobInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VectorEnrichmentJobExportStatus { IN_PROGRESS = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface GetEarthObservationJobInput {
	}
	export interface GetEarthObservationJobInputFormProperties {
	}
	export function CreateGetEarthObservationJobInputFormGroup() {
		return new FormGroup<GetEarthObservationJobInputFormProperties>({
		});

	}

	export interface GetRasterDataCollectionInput {
	}
	export interface GetRasterDataCollectionInputFormProperties {
	}
	export function CreateGetRasterDataCollectionInputFormGroup() {
		return new FormGroup<GetRasterDataCollectionInputFormProperties>({
		});

	}

	export enum TargetOptions { INPUT = 0, OUTPUT = 1 }

	export interface GetTileInput {
	}
	export interface GetTileInputFormProperties {
	}
	export function CreateGetTileInputFormGroup() {
		return new FormGroup<GetTileInputFormProperties>({
		});

	}

	export interface GetVectorEnrichmentJobInput {
	}
	export interface GetVectorEnrichmentJobInputFormProperties {
	}
	export function CreateGetVectorEnrichmentJobInputFormGroup() {
		return new FormGroup<GetVectorEnrichmentJobInputFormProperties>({
		});

	}


	/** Input configuration information. */
	export interface InputConfigInput {
		PreviousEarthObservationJobArn?: string;
		RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
	}

	/** Input configuration information. */
	export interface InputConfigInputFormProperties {
		PreviousEarthObservationJobArn: FormControl<string | null | undefined>,
	}
	export function CreateInputConfigInputFormGroup() {
		return new FormGroup<InputConfigInputFormProperties>({
			PreviousEarthObservationJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListEarthObservationJobInput {
		MaxResults?: number | null;
		NextToken?: string;
		SortBy?: string;
		SortOrder?: SortOrder;
		StatusEquals?: EarthObservationJobStatus;
	}
	export interface ListEarthObservationJobInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
		StatusEquals: FormControl<EarthObservationJobStatus | null | undefined>,
	}
	export function CreateListEarthObservationJobInputFormGroup() {
		return new FormGroup<ListEarthObservationJobInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			StatusEquals: new FormControl<EarthObservationJobStatus | null | undefined>(undefined),
		});

	}

	export interface ListRasterDataCollectionsInput {
	}
	export interface ListRasterDataCollectionsInputFormProperties {
	}
	export function CreateListRasterDataCollectionsInputFormGroup() {
		return new FormGroup<ListRasterDataCollectionsInputFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface ListVectorEnrichmentJobInput {
		MaxResults?: number | null;
		NextToken?: string;
		SortBy?: string;
		SortOrder?: SortOrder;
		StatusEquals?: string;
	}
	export interface ListVectorEnrichmentJobInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
		StatusEquals: FormControl<string | null | undefined>,
	}
	export function CreateListVectorEnrichmentJobInputFormGroup() {
		return new FormGroup<ListVectorEnrichmentJobInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			StatusEquals: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters. */
	export interface RasterDataCollectionQueryWithBandFilterInput {
		AreaOfInterest?: AreaOfInterest;
		BandFilter?: Array<string>;
		PropertyFilters?: PropertyFilters;

		/** Required */
		TimeRangeFilter: TimeRangeFilterInput;
	}

	/** This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters. */
	export interface RasterDataCollectionQueryWithBandFilterInputFormProperties {
	}
	export function CreateRasterDataCollectionQueryWithBandFilterInputFormGroup() {
		return new FormGroup<RasterDataCollectionQueryWithBandFilterInputFormProperties>({
		});

	}

	export interface SearchRasterDataCollectionInput {

		/** Required */
		Arn: string;
		NextToken?: string;

		/** Required */
		RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput;
	}
	export interface SearchRasterDataCollectionInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchRasterDataCollectionInputFormGroup() {
		return new FormGroup<SearchRasterDataCollectionInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartEarthObservationJobInput {
		ClientToken?: string;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		InputConfig: InputConfigInput;

		/** Required */
		JobConfig: JobConfigInput;
		KmsKeyId?: string;

		/** Required */
		Name: string;
		Tags?: Tags;
	}
	export interface StartEarthObservationJobInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartEarthObservationJobInputFormGroup() {
		return new FormGroup<StartEarthObservationJobInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartVectorEnrichmentJobInput {
		ClientToken?: string;

		/** Required */
		ExecutionRoleArn: string;

		/** Required */
		InputConfig: VectorEnrichmentJobInputConfig;

		/** Required */
		JobConfig: VectorEnrichmentJobConfig;
		KmsKeyId?: string;

		/** Required */
		Name: string;
		Tags?: Tags;
	}
	export interface StartVectorEnrichmentJobInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartVectorEnrichmentJobInputFormGroup() {
		return new FormGroup<StartVectorEnrichmentJobInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopEarthObservationJobInput {

		/** Required */
		Arn: string;
	}
	export interface StopEarthObservationJobInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateStopEarthObservationJobInputFormGroup() {
		return new FormGroup<StopEarthObservationJobInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopVectorEnrichmentJobInput {

		/** Required */
		Arn: string;
	}
	export interface StopVectorEnrichmentJobInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateStopVectorEnrichmentJobInputFormGroup() {
		return new FormGroup<StopVectorEnrichmentJobInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Tags;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export enum VectorEnrichmentJobErrorType { CLIENT_ERROR = 0, SERVER_ERROR = 1 }

	export enum VectorEnrichmentJobExportErrorType { CLIENT_ERROR = 0, SERVER_ERROR = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use this operation to delete an Earth Observation job.
		 * Delete earth-observation-jobs/{Arn}
		 * @param {string} Arn The Amazon Resource Name (ARN) of the Earth Observation job being deleted.
		 * @return {DeleteEarthObservationJobOutput} Success
		 */
		DeleteEarthObservationJob(Arn: string): Observable<DeleteEarthObservationJobOutput> {
			return this.http.delete<DeleteEarthObservationJobOutput>(this.baseUri + 'earth-observation-jobs/' + (Arn == null ? '' : encodeURIComponent(Arn)), {});
		}

		/**
		 * Get the details for a previously initiated Earth Observation job.
		 * Get earth-observation-jobs/{Arn}
		 * @param {string} Arn The Amazon Resource Name (ARN) of the Earth Observation job.
		 * @return {GetEarthObservationJobOutput} Success
		 */
		GetEarthObservationJob(Arn: string): Observable<GetEarthObservationJobOutput> {
			return this.http.get<GetEarthObservationJobOutput>(this.baseUri + 'earth-observation-jobs/' + (Arn == null ? '' : encodeURIComponent(Arn)), {});
		}

		/**
		 * Use this operation to delete a Vector Enrichment job.
		 * Delete vector-enrichment-jobs/{Arn}
		 * @param {string} Arn The Amazon Resource Name (ARN) of the Vector Enrichment job being deleted.
		 * @return {DeleteVectorEnrichmentJobOutput} Success
		 */
		DeleteVectorEnrichmentJob(Arn: string): Observable<DeleteVectorEnrichmentJobOutput> {
			return this.http.delete<DeleteVectorEnrichmentJobOutput>(this.baseUri + 'vector-enrichment-jobs/' + (Arn == null ? '' : encodeURIComponent(Arn)), {});
		}

		/**
		 * Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
		 * Get vector-enrichment-jobs/{Arn}
		 * @param {string} Arn The Amazon Resource Name (ARN) of the Vector Enrichment job.
		 * @return {GetVectorEnrichmentJobOutput} Success
		 */
		GetVectorEnrichmentJob(Arn: string): Observable<GetVectorEnrichmentJobOutput> {
			return this.http.get<GetVectorEnrichmentJobOutput>(this.baseUri + 'vector-enrichment-jobs/' + (Arn == null ? '' : encodeURIComponent(Arn)), {});
		}

		/**
		 * Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.
		 * Post export-earth-observation-job
		 * @return {ExportEarthObservationJobOutput} Success
		 */
		ExportEarthObservationJob(requestBody: ExportEarthObservationJobPostBody): Observable<ExportEarthObservationJobOutput> {
			return this.http.post<ExportEarthObservationJobOutput>(this.baseUri + 'export-earth-observation-job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.
		 * Post export-vector-enrichment-jobs
		 * @return {ExportVectorEnrichmentJobOutput} Success
		 */
		ExportVectorEnrichmentJob(requestBody: ExportVectorEnrichmentJobPostBody): Observable<ExportVectorEnrichmentJobOutput> {
			return this.http.post<ExportVectorEnrichmentJobOutput>(this.baseUri + 'export-vector-enrichment-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to get details of a specific raster data collection.
		 * Get raster-data-collection/{Arn}
		 * @param {string} Arn The Amazon Resource Name (ARN) of the raster data collection.
		 * @return {GetRasterDataCollectionOutput} Success
		 */
		GetRasterDataCollection(Arn: string): Observable<GetRasterDataCollectionOutput> {
			return this.http.get<GetRasterDataCollectionOutput>(this.baseUri + 'raster-data-collection/' + (Arn == null ? '' : encodeURIComponent(Arn)), {});
		}

		/**
		 * Gets a web mercator tile for the given Earth Observation job.
		 * Get tile/{z}/{x}/{y}#Arn&ImageAssets&Target
		 * @param {string} Arn The Amazon Resource Name (ARN) of the tile operation.
		 * @param {string} ExecutionRoleArn The Amazon Resource Name (ARN) of the IAM role that you specify.
		 * @param {Array<string>} ImageAssets The particular assets or bands to tile.
		 * @param {boolean} ImageMask Determines whether or not to return a valid data mask.
		 * @param {OutputType} OutputDataType The output data type of the tile operation.
		 * @param {string} OutputFormat The data format of the output tile. The formats include .npy, .png and .jpg.
		 * @param {string} PropertyFilters Property filters for the imagery to tile.
		 * @param {TargetOptions} Target Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options.
		 * @param {string} TimeRangeFilter Time range filter applied to imagery to find the images to tile.
		 * @param {number} x The x coordinate of the tile input.
		 * @param {number} y The y coordinate of the tile input.
		 * @param {number} z The z coordinate of the tile input.
		 * @return {GetTileOutput} Success
		 */
		GetTile(Arn: string, ExecutionRoleArn: string | null | undefined, ImageAssets: Array<string>, ImageMask: boolean | null | undefined, OutputDataType: OutputType | null | undefined, OutputFormat: string | null | undefined, PropertyFilters: string | null | undefined, Target: TargetOptions, TimeRangeFilter: string | null | undefined, x: number, y: number, z: number): Observable<GetTileOutput> {
			return this.http.get<GetTileOutput>(this.baseUri + 'tile/' + z + '/' + x + '/' + y + '#Arn&ImageAssets&Target?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&ExecutionRoleArn=' + (ExecutionRoleArn == null ? '' : encodeURIComponent(ExecutionRoleArn)) + '&' + ImageAssets.map(z => `ImageAssets=${encodeURIComponent(z)}`).join('&') + '&ImageMask=' + ImageMask + '&OutputDataType=' + OutputDataType + '&OutputFormat=' + (OutputFormat == null ? '' : encodeURIComponent(OutputFormat)) + '&PropertyFilters=' + (PropertyFilters == null ? '' : encodeURIComponent(PropertyFilters)) + '&Target=' + Target + '&TimeRangeFilter=' + (TimeRangeFilter == null ? '' : encodeURIComponent(TimeRangeFilter)), {});
		}

		/**
		 * Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
		 * Post list-earth-observation-jobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEarthObservationJobOutput} Success
		 */
		ListEarthObservationJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEarthObservationJobsPostBody): Observable<ListEarthObservationJobOutput> {
			return this.http.post<ListEarthObservationJobOutput>(this.baseUri + 'list-earth-observation-jobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to get raster data collections.
		 * Get raster-data-collections
		 * @param {number} MaxResults The total number of items to return.
		 * @param {string} NextToken If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
		 * @return {ListRasterDataCollectionsOutput} Success
		 */
		ListRasterDataCollections(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListRasterDataCollectionsOutput> {
			return this.http.get<ListRasterDataCollectionsOutput>(this.baseUri + 'raster-data-collections?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags attached to the resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource you want to tag.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * The resource you want to tag.
		 * Put tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource you want to tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePutBody): Observable<TagResourceResponse> {
			return this.http.put<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of vector enrichment jobs.
		 * Post list-vector-enrichment-jobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVectorEnrichmentJobOutput} Success
		 */
		ListVectorEnrichmentJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListVectorEnrichmentJobsPostBody): Observable<ListVectorEnrichmentJobOutput> {
			return this.http.post<ListVectorEnrichmentJobOutput>(this.baseUri + 'list-vector-enrichment-jobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
		 * Post search-raster-data-collection
		 * @param {string} NextToken Pagination token
		 * @return {SearchRasterDataCollectionOutput} Success
		 */
		SearchRasterDataCollection(NextToken: string | null | undefined, requestBody: SearchRasterDataCollectionPostBody): Observable<SearchRasterDataCollectionOutput> {
			return this.http.post<SearchRasterDataCollectionOutput>(this.baseUri + 'search-raster-data-collection?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to create an Earth observation job.
		 * Post earth-observation-jobs
		 * @return {StartEarthObservationJobOutput} Success
		 */
		StartEarthObservationJob(requestBody: StartEarthObservationJobPostBody): Observable<StartEarthObservationJobOutput> {
			return this.http.post<StartEarthObservationJobOutput>(this.baseUri + 'earth-observation-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
		 * Post vector-enrichment-jobs
		 * @return {StartVectorEnrichmentJobOutput} Success
		 */
		StartVectorEnrichmentJob(requestBody: StartVectorEnrichmentJobPostBody): Observable<StartVectorEnrichmentJobOutput> {
			return this.http.post<StartVectorEnrichmentJobOutput>(this.baseUri + 'vector-enrichment-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to stop an existing earth observation job.
		 * Post earth-observation-jobs/stop
		 * @return {StopEarthObservationJobOutput} Success
		 */
		StopEarthObservationJob(requestBody: StopEarthObservationJobPostBody): Observable<StopEarthObservationJobOutput> {
			return this.http.post<StopEarthObservationJobOutput>(this.baseUri + 'earth-observation-jobs/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the Vector Enrichment job for a given job ARN.
		 * Post vector-enrichment-jobs/stop
		 * @return {StopVectorEnrichmentJobOutput} Success
		 */
		StopVectorEnrichmentJob(requestBody: StopVectorEnrichmentJobPostBody): Observable<StopVectorEnrichmentJobOutput> {
			return this.http.post<StopVectorEnrichmentJobOutput>(this.baseUri + 'vector-enrichment-jobs/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The resource you want to untag.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource you want to untag.
		 * @param {Array<string>} tagKeys Keys of the tags you want to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface ExportEarthObservationJobPostBody {

		/**
		 * The input Amazon Resource Name (ARN) of the Earth Observation job being exported.
		 * Required
		 */
		Arn: string;

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: string;

		/** The source images provided to the Earth Observation job being exported. */
		ExportSourceImages?: boolean | null;

		/**
		 * The response structure for an OutputConfig returned by an ExportEarthObservationJob.
		 * Required
		 */
		OutputConfig: ExportEarthObservationJobPostBodyOutputConfig;
	}
	export interface ExportEarthObservationJobPostBodyFormProperties {

		/**
		 * The input Amazon Resource Name (ARN) of the Earth Observation job being exported.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/** The source images provided to the Earth Observation job being exported. */
		ExportSourceImages: FormControl<boolean | null | undefined>,
	}
	export function CreateExportEarthObservationJobPostBodyFormGroup() {
		return new FormGroup<ExportEarthObservationJobPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[a-z-]{0,12}:sagemaker-geospatial:[a-z0-9-]{1,25}:[0-9]{12}:earth-observation-job/[a-z0-9]{12,}$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-z-]*):iam::([0-9]{12}):role/[a-zA-Z0-9+=,.@_/-]+$')]),
			ExportSourceImages: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExportEarthObservationJobPostBodyOutputConfig {
		S3Data?: ExportS3DataInput;
	}
	export interface ExportEarthObservationJobPostBodyOutputConfigFormProperties {
	}
	export function CreateExportEarthObservationJobPostBodyOutputConfigFormGroup() {
		return new FormGroup<ExportEarthObservationJobPostBodyOutputConfigFormProperties>({
		});

	}

	export interface ExportVectorEnrichmentJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Vector Enrichment job.
		 * Required
		 */
		Arn: string;

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the IAM rolewith permission to upload to the location in OutputConfig.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: string;

		/**
		 * An object containing information about the output file.
		 * Required
		 */
		OutputConfig: ExportVectorEnrichmentJobPostBodyOutputConfig;
	}
	export interface ExportVectorEnrichmentJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Vector Enrichment job.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM rolewith permission to upload to the location in OutputConfig.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateExportVectorEnrichmentJobPostBodyFormGroup() {
		return new FormGroup<ExportVectorEnrichmentJobPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[a-z-]{0,12}:sagemaker-geospatial:[a-z0-9-]{1,25}:[0-9]{12}:vector-enrichment-job/[a-z0-9]{12,}$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-z-]*):iam::([0-9]{12}):role/[a-zA-Z0-9+=,.@_/-]+$')]),
		});

	}

	export interface ExportVectorEnrichmentJobPostBodyOutputConfig {
		S3Data?: VectorEnrichmentJobS3Data;
	}
	export interface ExportVectorEnrichmentJobPostBodyOutputConfigFormProperties {
	}
	export function CreateExportVectorEnrichmentJobPostBodyOutputConfigFormGroup() {
		return new FormGroup<ExportVectorEnrichmentJobPostBodyOutputConfigFormProperties>({
		});

	}

	export interface ListEarthObservationJobsPostBody {

		/**
		 * The total number of items to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;

		/**
		 * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
		 * Max length: 8192
		 * Min length: 0
		 */
		NextToken?: string | null;

		/** The parameter by which to sort the results. */
		SortBy?: string | null;

		/** An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order. */
		SortOrder?: SortOrder | null;

		/** A filter that retrieves only jobs with a specific status. */
		StatusEquals?: EarthObservationJobStatus | null;
	}
	export interface ListEarthObservationJobsPostBodyFormProperties {

		/**
		 * The total number of items to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
		 * Max length: 8192
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,

		/** The parameter by which to sort the results. */
		SortBy: FormControl<string | null | undefined>,

		/** An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order. */
		SortOrder: FormControl<SortOrder | null | undefined>,

		/** A filter that retrieves only jobs with a specific status. */
		StatusEquals: FormControl<EarthObservationJobStatus | null | undefined>,
	}
	export function CreateListEarthObservationJobsPostBodyFormGroup() {
		return new FormGroup<ListEarthObservationJobsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8192)]),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			StatusEquals: new FormControl<EarthObservationJobStatus | null | undefined>(undefined),
		});

	}

	export interface TagResourcePutBody {

		/**
		 * Each tag consists of a key and a value.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePutBodyFormProperties {

		/**
		 * Each tag consists of a key and a value.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePutBodyFormGroup() {
		return new FormGroup<TagResourcePutBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListVectorEnrichmentJobsPostBody {

		/**
		 * The maximum number of items to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;

		/**
		 * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
		 * Max length: 8192
		 * Min length: 0
		 */
		NextToken?: string | null;

		/** The parameter by which to sort the results. */
		SortBy?: string | null;

		/** An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order. */
		SortOrder?: SortOrder | null;

		/** A filter that retrieves only jobs with a specific status. */
		StatusEquals?: string | null;
	}
	export interface ListVectorEnrichmentJobsPostBodyFormProperties {

		/**
		 * The maximum number of items to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
		 * Max length: 8192
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,

		/** The parameter by which to sort the results. */
		SortBy: FormControl<string | null | undefined>,

		/** An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order. */
		SortOrder: FormControl<SortOrder | null | undefined>,

		/** A filter that retrieves only jobs with a specific status. */
		StatusEquals: FormControl<string | null | undefined>,
	}
	export function CreateListVectorEnrichmentJobsPostBodyFormGroup() {
		return new FormGroup<ListVectorEnrichmentJobsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8192)]),
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			StatusEquals: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchRasterDataCollectionPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the raster data collection.
		 * Required
		 */
		Arn: string;

		/**
		 * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
		 * Max length: 8192
		 * Min length: 0
		 */
		NextToken?: string | null;

		/**
		 * This is a RasterDataCollectionQueryInput containing AreaOfInterest, Time Range filter and Property filters.
		 * Required
		 */
		RasterDataCollectionQuery: SearchRasterDataCollectionPostBodyRasterDataCollectionQuery;
	}
	export interface SearchRasterDataCollectionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the raster data collection.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
		 * Max length: 8192
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchRasterDataCollectionPostBodyFormGroup() {
		return new FormGroup<SearchRasterDataCollectionPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[a-z-]{0,12}:sagemaker-geospatial:[a-z0-9-]{1,25}:[0-9]{12}:raster-data-collection/(public|premium|user)/[a-z0-9]{12,}$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8192)]),
		});

	}

	export interface SearchRasterDataCollectionPostBodyRasterDataCollectionQuery {
		AreaOfInterest?: AreaOfInterest;
		BandFilter?: Array<string>;
		PropertyFilters?: PropertyFilters;
		TimeRangeFilter?: TimeRangeFilterInput;
	}
	export interface SearchRasterDataCollectionPostBodyRasterDataCollectionQueryFormProperties {
	}
	export function CreateSearchRasterDataCollectionPostBodyRasterDataCollectionQueryFormGroup() {
		return new FormGroup<SearchRasterDataCollectionPostBodyRasterDataCollectionQueryFormProperties>({
		});

	}

	export interface StartEarthObservationJobPostBody {

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: string;

		/**
		 * Input configuration information.
		 * Required
		 */
		InputConfig: StartEarthObservationJobPostBodyInputConfig;

		/**
		 * The input structure for the JobConfig in an EarthObservationJob.
		 * Required
		 */
		JobConfig: StartEarthObservationJobPostBodyJobConfig;

		/**
		 * The Key Management Service key ID for server-side encryption.
		 * Max length: 2048
		 * Min length: 0
		 */
		KmsKeyId?: string | null;

		/**
		 * The name of the Earth Observation job.
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		Name: string;

		/** Each tag consists of a key and a value. */
		Tags?: {[id: string]: string };
	}
	export interface StartEarthObservationJobPostBodyFormProperties {

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The Key Management Service key ID for server-side encryption.
		 * Max length: 2048
		 * Min length: 0
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The name of the Earth Observation job.
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/** Each tag consists of a key and a value. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartEarthObservationJobPostBodyFormGroup() {
		return new FormGroup<StartEarthObservationJobPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-z-]*):iam::([0-9]{12}):role/[a-zA-Z0-9+=,.@_/-]+$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(200)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartEarthObservationJobPostBodyInputConfig {
		PreviousEarthObservationJobArn?: string;
		RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
	}
	export interface StartEarthObservationJobPostBodyInputConfigFormProperties {
		PreviousEarthObservationJobArn: FormControl<string | null | undefined>,
	}
	export function CreateStartEarthObservationJobPostBodyInputConfigFormGroup() {
		return new FormGroup<StartEarthObservationJobPostBodyInputConfigFormProperties>({
			PreviousEarthObservationJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartEarthObservationJobPostBodyJobConfig {
		BandMathConfig?: BandMathConfigInput;
		CloudMaskingConfig?: CloudMaskingConfigInput;
		CloudRemovalConfig?: CloudRemovalConfigInput;
		GeoMosaicConfig?: GeoMosaicConfigInput;
		LandCoverSegmentationConfig?: LandCoverSegmentationConfigInput;
		ResamplingConfig?: ResamplingConfigInput;
		StackConfig?: StackConfigInput;
		TemporalStatisticsConfig?: TemporalStatisticsConfigInput;
		ZonalStatisticsConfig?: ZonalStatisticsConfigInput;
	}
	export interface StartEarthObservationJobPostBodyJobConfigFormProperties {
	}
	export function CreateStartEarthObservationJobPostBodyJobConfigFormGroup() {
		return new FormGroup<StartEarthObservationJobPostBodyJobConfigFormProperties>({
		});

	}

	export interface StartVectorEnrichmentJobPostBody {

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: string;

		/**
		 * The input structure for the InputConfig in a VectorEnrichmentJob.
		 * Required
		 */
		InputConfig: StartVectorEnrichmentJobPostBodyInputConfig;

		/**
		 * It contains configs such as ReverseGeocodingConfig and MapMatchingConfig.
		 * Required
		 */
		JobConfig: StartVectorEnrichmentJobPostBodyJobConfig;

		/**
		 * The Key Management Service key ID for server-side encryption.
		 * Max length: 2048
		 * Min length: 0
		 */
		KmsKeyId?: string | null;

		/**
		 * The name of the Vector Enrichment job.
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		Name: string;

		/** Each tag consists of a key and a value. */
		Tags?: {[id: string]: string };
	}
	export interface StartVectorEnrichmentJobPostBodyFormProperties {

		/**
		 * A unique token that guarantees that the call to this API is idempotent.
		 * Max length: 64
		 * Min length: 36
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ExecutionRoleArn: FormControl<string | null | undefined>,

		/**
		 * The Key Management Service key ID for server-side encryption.
		 * Max length: 2048
		 * Min length: 0
		 */
		KmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The name of the Vector Enrichment job.
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,

		/** Each tag consists of a key and a value. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartVectorEnrichmentJobPostBodyFormGroup() {
		return new FormGroup<StartVectorEnrichmentJobPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64)]),
			ExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-z-]*):iam::([0-9]{12}):role/[a-zA-Z0-9+=,.@_/-]+$')]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(200)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartVectorEnrichmentJobPostBodyInputConfig {
		DataSourceConfig?: VectorEnrichmentJobDataSourceConfigInput;
		DocumentType?: VectorEnrichmentJobDocumentType;
	}
	export interface StartVectorEnrichmentJobPostBodyInputConfigFormProperties {
		DocumentType: FormControl<VectorEnrichmentJobDocumentType | null | undefined>,
	}
	export function CreateStartVectorEnrichmentJobPostBodyInputConfigFormGroup() {
		return new FormGroup<StartVectorEnrichmentJobPostBodyInputConfigFormProperties>({
			DocumentType: new FormControl<VectorEnrichmentJobDocumentType | null | undefined>(undefined),
		});

	}

	export interface StartVectorEnrichmentJobPostBodyJobConfig {
		MapMatchingConfig?: MapMatchingConfig;
		ReverseGeocodingConfig?: ReverseGeocodingConfig;
	}
	export interface StartVectorEnrichmentJobPostBodyJobConfigFormProperties {
	}
	export function CreateStartVectorEnrichmentJobPostBodyJobConfigFormGroup() {
		return new FormGroup<StartVectorEnrichmentJobPostBodyJobConfigFormProperties>({
		});

	}

	export interface StopEarthObservationJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Earth Observation job being stopped.
		 * Required
		 */
		Arn: string;
	}
	export interface StopEarthObservationJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Earth Observation job being stopped.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateStopEarthObservationJobPostBodyFormGroup() {
		return new FormGroup<StopEarthObservationJobPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[a-z-]{0,12}:sagemaker-geospatial:[a-z0-9-]{1,25}:[0-9]{12}:earth-observation-job/[a-z0-9]{12,}$')]),
		});

	}

	export interface StopVectorEnrichmentJobPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Vector Enrichment job.
		 * Required
		 */
		Arn: string;
	}
	export interface StopVectorEnrichmentJobPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Vector Enrichment job.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateStopVectorEnrichmentJobPostBodyFormGroup() {
		return new FormGroup<StopVectorEnrichmentJobPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[a-z-]{0,12}:sagemaker-geospatial:[a-z0-9-]{1,25}:[0-9]{12}:vector-enrichment-job/[a-z0-9]{12,}$')]),
		});

	}

}

