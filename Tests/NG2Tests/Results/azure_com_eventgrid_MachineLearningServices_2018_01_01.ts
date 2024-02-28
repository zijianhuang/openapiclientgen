import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.DatasetDriftDetected event. */
	export interface MachineLearningServicesDatasetDriftDetectedEventData {

		/** The ID of the base Dataset used to detect drift. */
		baseDatasetId?: string | null;

		/** The ID of the data drift monitor that triggered the event. */
		dataDriftId?: string | null;

		/** The name of the data drift monitor that triggered the event. */
		dataDriftName?: string | null;

		/**
		 * The coefficient result that triggered the event.
		 * Type: double
		 */
		driftCoefficient?: number | null;

		/** The end time of the target dataset time series that resulted in drift detection. */
		endTime?: Date | null;

		/** The ID of the Run that detected data drift. */
		runId?: string | null;

		/** The start time of the target dataset time series that resulted in drift detection. */
		startTime?: Date | null;

		/** The ID of the target Dataset used to detect drift. */
		targetDatasetId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.DatasetDriftDetected event. */
	export interface MachineLearningServicesDatasetDriftDetectedEventDataFormProperties {

		/** The ID of the base Dataset used to detect drift. */
		baseDatasetId: FormControl<string | null | undefined>,

		/** The ID of the data drift monitor that triggered the event. */
		dataDriftId: FormControl<string | null | undefined>,

		/** The name of the data drift monitor that triggered the event. */
		dataDriftName: FormControl<string | null | undefined>,

		/**
		 * The coefficient result that triggered the event.
		 * Type: double
		 */
		driftCoefficient: FormControl<number | null | undefined>,

		/** The end time of the target dataset time series that resulted in drift detection. */
		endTime: FormControl<Date | null | undefined>,

		/** The ID of the Run that detected data drift. */
		runId: FormControl<string | null | undefined>,

		/** The start time of the target dataset time series that resulted in drift detection. */
		startTime: FormControl<Date | null | undefined>,

		/** The ID of the target Dataset used to detect drift. */
		targetDatasetId: FormControl<string | null | undefined>,
	}
	export function CreateMachineLearningServicesDatasetDriftDetectedEventDataFormGroup() {
		return new FormGroup<MachineLearningServicesDatasetDriftDetectedEventDataFormProperties>({
			baseDatasetId: new FormControl<string | null | undefined>(undefined),
			dataDriftId: new FormControl<string | null | undefined>(undefined),
			dataDriftName: new FormControl<string | null | undefined>(undefined),
			driftCoefficient: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDatasetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.ModelDeployed event. */
	export interface MachineLearningServicesModelDeployedEventData {

		/** A common separated list of model IDs. The IDs of the models deployed in the service. */
		modelIds?: string | null;

		/** The compute type (e.g. ACI, AKS) of the deployed service. */
		serviceComputeType?: string | null;

		/** The name of the deployed service. */
		serviceName?: string | null;

		/** The properties of the deployed service. */
		serviceProperties?: string | null;

		/** The tags of the deployed service. */
		serviceTags?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.ModelDeployed event. */
	export interface MachineLearningServicesModelDeployedEventDataFormProperties {

		/** A common separated list of model IDs. The IDs of the models deployed in the service. */
		modelIds: FormControl<string | null | undefined>,

		/** The compute type (e.g. ACI, AKS) of the deployed service. */
		serviceComputeType: FormControl<string | null | undefined>,

		/** The name of the deployed service. */
		serviceName: FormControl<string | null | undefined>,

		/** The properties of the deployed service. */
		serviceProperties: FormControl<string | null | undefined>,

		/** The tags of the deployed service. */
		serviceTags: FormControl<string | null | undefined>,
	}
	export function CreateMachineLearningServicesModelDeployedEventDataFormGroup() {
		return new FormGroup<MachineLearningServicesModelDeployedEventDataFormProperties>({
			modelIds: new FormControl<string | null | undefined>(undefined),
			serviceComputeType: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceProperties: new FormControl<string | null | undefined>(undefined),
			serviceTags: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.ModelRegistered event. */
	export interface MachineLearningServicesModelRegisteredEventData {

		/** The name of the model that was registered. */
		modelName?: string | null;

		/** The properties of the model that was registered. */
		modelProperties?: string | null;

		/** The tags of the model that was registered. */
		modelTags?: string | null;

		/**
		 * The version of the model that was registered.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		modelVersion?: number | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.ModelRegistered event. */
	export interface MachineLearningServicesModelRegisteredEventDataFormProperties {

		/** The name of the model that was registered. */
		modelName: FormControl<string | null | undefined>,

		/** The properties of the model that was registered. */
		modelProperties: FormControl<string | null | undefined>,

		/** The tags of the model that was registered. */
		modelTags: FormControl<string | null | undefined>,

		/**
		 * The version of the model that was registered.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		modelVersion: FormControl<number | null | undefined>,
	}
	export function CreateMachineLearningServicesModelRegisteredEventDataFormGroup() {
		return new FormGroup<MachineLearningServicesModelRegisteredEventDataFormProperties>({
			modelName: new FormControl<string | null | undefined>(undefined),
			modelProperties: new FormControl<string | null | undefined>(undefined),
			modelTags: new FormControl<string | null | undefined>(undefined),
			modelVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.RunCompleted event. */
	export interface MachineLearningServicesRunCompletedEventData {

		/** The ID of the experiment that the run belongs to. */
		experimentId?: string | null;

		/** The name of the experiment that the run belongs to. */
		experimentName?: string | null;

		/** The ID of the Run that was completed. */
		runId?: string | null;

		/** The properties of the completed Run. */
		runProperties?: string | null;

		/** The tags of the completed Run. */
		runTags?: string | null;

		/** The Run Type of the completed Run. */
		runType?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.MachineLearningServices.RunCompleted event. */
	export interface MachineLearningServicesRunCompletedEventDataFormProperties {

		/** The ID of the experiment that the run belongs to. */
		experimentId: FormControl<string | null | undefined>,

		/** The name of the experiment that the run belongs to. */
		experimentName: FormControl<string | null | undefined>,

		/** The ID of the Run that was completed. */
		runId: FormControl<string | null | undefined>,

		/** The properties of the completed Run. */
		runProperties: FormControl<string | null | undefined>,

		/** The tags of the completed Run. */
		runTags: FormControl<string | null | undefined>,

		/** The Run Type of the completed Run. */
		runType: FormControl<string | null | undefined>,
	}
	export function CreateMachineLearningServicesRunCompletedEventDataFormGroup() {
		return new FormGroup<MachineLearningServicesRunCompletedEventDataFormProperties>({
			experimentId: new FormControl<string | null | undefined>(undefined),
			experimentName: new FormControl<string | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			runProperties: new FormControl<string | null | undefined>(undefined),
			runTags: new FormControl<string | null | undefined>(undefined),
			runType: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

