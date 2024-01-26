import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SendCommandResult {
		StartSession?: StartSessionResult;
		StartTransaction?: StartTransactionResult;
		EndSession?: EndSessionResult;
		CommitTransaction?: CommitTransactionResult;
		AbortTransaction?: AbortTransactionResult;
		ExecuteStatement?: ExecuteStatementResult;
		FetchPage?: FetchPageResult;
	}
	export interface SendCommandResultFormProperties {
	}
	export function CreateSendCommandResultFormGroup() {
		return new FormGroup<SendCommandResultFormProperties>({
		});

	}


	/** Contains the details of the started session. */
	export interface StartSessionResult {
		SessionToken?: string;
		TimingInformation?: TimingInformation;
	}

	/** Contains the details of the started session. */
	export interface StartSessionResultFormProperties {
		SessionToken: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionResultFormGroup() {
		return new FormGroup<StartSessionResultFormProperties>({
			SessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains server-side performance information for a command. Amazon QLDB captures timing information between the times when it receives the request and when it sends the corresponding response. */
	export interface TimingInformation {
		ProcessingTimeMilliseconds?: number | null;
	}

	/** Contains server-side performance information for a command. Amazon QLDB captures timing information between the times when it receives the request and when it sends the corresponding response. */
	export interface TimingInformationFormProperties {
		ProcessingTimeMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreateTimingInformationFormGroup() {
		return new FormGroup<TimingInformationFormProperties>({
			ProcessingTimeMilliseconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the details of the started transaction. */
	export interface StartTransactionResult {
		TransactionId?: string;
		TimingInformation?: TimingInformation;
	}

	/** Contains the details of the started transaction. */
	export interface StartTransactionResultFormProperties {
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateStartTransactionResultFormGroup() {
		return new FormGroup<StartTransactionResultFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of the ended session. */
	export interface EndSessionResult {
		TimingInformation?: TimingInformation;
	}

	/** Contains the details of the ended session. */
	export interface EndSessionResultFormProperties {
	}
	export function CreateEndSessionResultFormGroup() {
		return new FormGroup<EndSessionResultFormProperties>({
		});

	}


	/** Contains the details of the committed transaction. */
	export interface CommitTransactionResult {
		TransactionId?: string;
		CommitDigest?: string;
		TimingInformation?: TimingInformation;
		ConsumedIOs?: IOUsage;
	}

	/** Contains the details of the committed transaction. */
	export interface CommitTransactionResultFormProperties {
		TransactionId: FormControl<string | null | undefined>,
		CommitDigest: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionResultFormGroup() {
		return new FormGroup<CommitTransactionResultFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
			CommitDigest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains I/O usage metrics for a command that was invoked. */
	export interface IOUsage {
		ReadIOs?: number | null;
		WriteIOs?: number | null;
	}

	/** Contains I/O usage metrics for a command that was invoked. */
	export interface IOUsageFormProperties {
		ReadIOs: FormControl<number | null | undefined>,
		WriteIOs: FormControl<number | null | undefined>,
	}
	export function CreateIOUsageFormGroup() {
		return new FormGroup<IOUsageFormProperties>({
			ReadIOs: new FormControl<number | null | undefined>(undefined),
			WriteIOs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the details of the aborted transaction. */
	export interface AbortTransactionResult {
		TimingInformation?: TimingInformation;
	}

	/** Contains the details of the aborted transaction. */
	export interface AbortTransactionResultFormProperties {
	}
	export function CreateAbortTransactionResultFormGroup() {
		return new FormGroup<AbortTransactionResultFormProperties>({
		});

	}


	/** Contains the details of the executed statement. */
	export interface ExecuteStatementResult {
		FirstPage?: Page;
		TimingInformation?: TimingInformation;
		ConsumedIOs?: IOUsage;
	}

	/** Contains the details of the executed statement. */
	export interface ExecuteStatementResultFormProperties {
	}
	export function CreateExecuteStatementResultFormGroup() {
		return new FormGroup<ExecuteStatementResultFormProperties>({
		});

	}


	/** Contains details of the fetched page. */
	export interface Page {
		Values?: Array<ValueHolder>;
		NextPageToken?: string;
	}

	/** Contains details of the fetched page. */
	export interface PageFormProperties {
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			NextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that can contain a value in multiple encoding formats. */
	export interface ValueHolder {
		IonBinary?: string;
		IonText?: string;
	}

	/** A structure that can contain a value in multiple encoding formats. */
	export interface ValueHolderFormProperties {
		IonBinary: FormControl<string | null | undefined>,
		IonText: FormControl<string | null | undefined>,
	}
	export function CreateValueHolderFormGroup() {
		return new FormGroup<ValueHolderFormProperties>({
			IonBinary: new FormControl<string | null | undefined>(undefined),
			IonText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the page that was fetched. */
	export interface FetchPageResult {
		Page?: Page;
		TimingInformation?: TimingInformation;
		ConsumedIOs?: IOUsage;
	}

	/** Contains the page that was fetched. */
	export interface FetchPageResultFormProperties {
	}
	export function CreateFetchPageResultFormGroup() {
		return new FormGroup<FetchPageResultFormProperties>({
		});

	}

	export interface SendCommandRequest {
		SessionToken?: string;
		StartSession?: StartSessionRequest;
		StartTransaction?: StartTransactionRequest;
		EndSession?: EndSessionRequest;
		CommitTransaction?: CommitTransactionRequest;
		AbortTransaction?: AbortTransactionRequest;
		ExecuteStatement?: ExecuteStatementRequest;
		FetchPage?: FetchPageRequest;
	}
	export interface SendCommandRequestFormProperties {
		SessionToken: FormControl<string | null | undefined>,
	}
	export function CreateSendCommandRequestFormGroup() {
		return new FormGroup<SendCommandRequestFormProperties>({
			SessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a request to start a new session. */
	export interface StartSessionRequest {

		/** Required */
		LedgerName: string;
	}

	/** Specifies a request to start a new session. */
	export interface StartSessionRequestFormProperties {

		/** Required */
		LedgerName: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionRequestFormGroup() {
		return new FormGroup<StartSessionRequestFormProperties>({
			LedgerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a request to start a transaction. */
	export interface StartTransactionRequest {
	}

	/** Specifies a request to start a transaction. */
	export interface StartTransactionRequestFormProperties {
	}
	export function CreateStartTransactionRequestFormGroup() {
		return new FormGroup<StartTransactionRequestFormProperties>({
		});

	}


	/** Specifies a request to end the session. */
	export interface EndSessionRequest {
	}

	/** Specifies a request to end the session. */
	export interface EndSessionRequestFormProperties {
	}
	export function CreateEndSessionRequestFormGroup() {
		return new FormGroup<EndSessionRequestFormProperties>({
		});

	}


	/** Contains the details of the transaction to commit. */
	export interface CommitTransactionRequest {

		/** Required */
		TransactionId: string;

		/** Required */
		CommitDigest: string;
	}

	/** Contains the details of the transaction to commit. */
	export interface CommitTransactionRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,

		/** Required */
		CommitDigest: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionRequestFormGroup() {
		return new FormGroup<CommitTransactionRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CommitDigest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the details of the transaction to abort. */
	export interface AbortTransactionRequest {
	}

	/** Contains the details of the transaction to abort. */
	export interface AbortTransactionRequestFormProperties {
	}
	export function CreateAbortTransactionRequestFormGroup() {
		return new FormGroup<AbortTransactionRequestFormProperties>({
		});

	}


	/** Specifies a request to execute a statement. */
	export interface ExecuteStatementRequest {

		/** Required */
		TransactionId: string;

		/** Required */
		Statement: string;
		Parameters?: Array<ValueHolder>;
	}

	/** Specifies a request to execute a statement. */
	export interface ExecuteStatementRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,

		/** Required */
		Statement: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementRequestFormGroup() {
		return new FormGroup<ExecuteStatementRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Statement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the details of the page to be fetched. */
	export interface FetchPageRequest {

		/** Required */
		TransactionId: string;

		/** Required */
		NextPageToken: string;
	}

	/** Specifies the details of the page to be fetched. */
	export interface FetchPageRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,

		/** Required */
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchPageRequestFormGroup() {
		return new FormGroup<FetchPageRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface InvalidSessionException {
	}
	export interface InvalidSessionExceptionFormProperties {
	}
	export function CreateInvalidSessionExceptionFormGroup() {
		return new FormGroup<InvalidSessionExceptionFormProperties>({
		});

	}

	export interface OccConflictException {
	}
	export interface OccConflictExceptionFormProperties {
	}
	export function CreateOccConflictExceptionFormGroup() {
		return new FormGroup<OccConflictExceptionFormProperties>({
		});

	}

	export interface RateExceededException {
	}
	export interface RateExceededExceptionFormProperties {
	}
	export function CreateRateExceededExceptionFormGroup() {
		return new FormGroup<RateExceededExceptionFormProperties>({
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

	export interface CapacityExceededException {
	}
	export interface CapacityExceededExceptionFormProperties {
	}
	export function CreateCapacityExceededExceptionFormGroup() {
		return new FormGroup<CapacityExceededExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend using the QLDB driver or the QLDB shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB driver. The driver provides a high-level abstraction layer above this <i>QLDB Session</i> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB shell. The shell is a command line interface that uses the QLDB driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB shell</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=QLDBSession.SendCommand
		 * @return {SendCommandResult} Success
		 */
		SendCommand(requestBody: SendCommandRequest): Observable<SendCommandResult> {
			return this.http.post<SendCommandResult>(this.baseUri + '#X-Amz-Target=QLDBSession.SendCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum SendCommandX_Amz_Target { 'QLDBSession.SendCommand' = 0 }

}

