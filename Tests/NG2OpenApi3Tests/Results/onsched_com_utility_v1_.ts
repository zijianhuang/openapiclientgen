import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ThreadPoolInfo {
		availableCompletionThreads?: number | null;
		availableWorkerThreads?: number | null;
		maxCompletionThreads?: number | null;
		maxWorkerThreads?: number | null;
		minCompletionThreads?: number | null;
		minWorkerThreads?: number | null;
		occupiedCompletionThreads?: number | null;
		occupiedWorkerThreads?: number | null;
	}
	export interface ThreadPoolInfoFormProperties {
		availableCompletionThreads: FormControl<number | null | undefined>,
		availableWorkerThreads: FormControl<number | null | undefined>,
		maxCompletionThreads: FormControl<number | null | undefined>,
		maxWorkerThreads: FormControl<number | null | undefined>,
		minCompletionThreads: FormControl<number | null | undefined>,
		minWorkerThreads: FormControl<number | null | undefined>,
		occupiedCompletionThreads: FormControl<number | null | undefined>,
		occupiedWorkerThreads: FormControl<number | null | undefined>,
	}
	export function CreateThreadPoolInfoFormGroup() {
		return new FormGroup<ThreadPoolInfoFormProperties>({
			availableCompletionThreads: new FormControl<number | null | undefined>(undefined),
			availableWorkerThreads: new FormControl<number | null | undefined>(undefined),
			maxCompletionThreads: new FormControl<number | null | undefined>(undefined),
			maxWorkerThreads: new FormControl<number | null | undefined>(undefined),
			minCompletionThreads: new FormControl<number | null | undefined>(undefined),
			minWorkerThreads: new FormControl<number | null | undefined>(undefined),
			occupiedCompletionThreads: new FormControl<number | null | undefined>(undefined),
			occupiedWorkerThreads: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get utility/v1/health/heartbeat
		 * @return {string} Success
		 */
		UtilityV1HealthHeartbeatGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'utility/v1/health/heartbeat', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get utility/v1/health/threadinfo
		 * @return {ThreadPoolInfo} Success
		 */
		UtilityV1HealthThreadinfoGet(headersHandler?: () => HttpHeaders): Observable<ThreadPoolInfo> {
			return this.http.get<ThreadPoolInfo>(this.baseUri + 'utility/v1/health/threadinfo', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

