import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SendCommandResult {

		/** Contains the details of the started session. */
		StartSession?: StartSessionResult;

		/** Contains the details of the started transaction. */
		StartTransaction?: StartTransactionResult;

		/** Contains the details of the ended session. */
		EndSession?: EndSessionResult;

		/** Contains the details of the committed transaction. */
		CommitTransaction?: CommitTransactionResult;

		/** Contains the details of the aborted transaction. */
		AbortTransaction?: AbortTransactionResult;

		/** Contains the details of the executed statement. */
		ExecuteStatement?: ExecuteStatementResult;

		/** Contains the page that was fetched. */
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
		SessionToken?: string | null;
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


	/** Contains the details of the started transaction. */
	export interface StartTransactionResult {
		TransactionId?: string | null;
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
		TransactionId?: string | null;
		CommitDigest?: string | null;
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


	/** Contains the details of the aborted transaction. */
	export interface AbortTransactionResult {
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

		/** Contains details of the fetched page. */
		FirstPage?: Page;
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
		NextPageToken?: string | null;
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


	/** A structure that can contain an Amazon Ion value in multiple encoding formats. */
	export interface ValueHolder {
		IonBinary?: string | null;
		IonText?: string | null;
	}

	/** A structure that can contain an Amazon Ion value in multiple encoding formats. */
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

		/** Contains details of the fetched page. */
		Page?: Page;
	}

	/** Contains the page that was fetched. */
	export interface FetchPageResultFormProperties {
	}
	export function CreateFetchPageResultFormGroup() {
		return new FormGroup<FetchPageResultFormProperties>({
		});

	}

	export interface SendCommandRequest {
		SessionToken?: string | null;

		/** Specifies a request to start a new session. */
		StartSession?: StartSessionRequest;

		/** Specifies a request to start a transaction. */
		StartTransaction?: StartTransactionRequest;

		/** Specifies a request to end the session. */
		EndSession?: EndSessionRequest;

		/** Contains the details of the transaction to commit. */
		CommitTransaction?: CommitTransactionRequest;

		/** Contains the details of the transaction to abort. */
		AbortTransaction?: AbortTransactionRequest;

		/** Specifies a request to execute a statement. */
		ExecuteStatement?: ExecuteStatementRequest;

		/** Specifies the details of the page to be fetched. */
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
		LedgerName: string;
	}

	/** Specifies a request to start a new session. */
	export interface StartSessionRequestFormProperties {
		LedgerName: FormControl<string | null | undefined>,
	}
	export function CreateStartSessionRequestFormGroup() {
		return new FormGroup<StartSessionRequestFormProperties>({
			LedgerName: new FormControl<string | null | undefined>(undefined),
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
		TransactionId: string;
		CommitDigest: string;
	}

	/** Contains the details of the transaction to commit. */
	export interface CommitTransactionRequestFormProperties {
		TransactionId: FormControl<string | null | undefined>,
		CommitDigest: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionRequestFormGroup() {
		return new FormGroup<CommitTransactionRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
			CommitDigest: new FormControl<string | null | undefined>(undefined),
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
		TransactionId: string;
		Statement: string;
		Parameters?: Array<ValueHolder>;
	}

	/** Specifies a request to execute a statement. */
	export interface ExecuteStatementRequestFormProperties {
		TransactionId: FormControl<string | null | undefined>,
		Statement: FormControl<string | null | undefined>,
	}
	export function CreateExecuteStatementRequestFormGroup() {
		return new FormGroup<ExecuteStatementRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
			Statement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the details of the page to be fetched. */
	export interface FetchPageRequest {
		TransactionId: string;
		NextPageToken: string;
	}

	/** Specifies the details of the page to be fetched. */
	export interface FetchPageRequestFormProperties {
		TransactionId: FormControl<string | null | undefined>,
		NextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchPageRequestFormGroup() {
		return new FormGroup<FetchPageRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
			NextPageToken: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Sends a command to an Amazon QLDB ledger.</p> <note> <p>Instead of interacting directly with this API, we recommend that you use the Amazon QLDB Driver or the QLDB Shell to execute data transactions on a ledger.</p> <ul> <li> <p>If you are working with an AWS SDK, use the QLDB Driver. The driver provides a high-level abstraction layer above this <code>qldbsession</code> data plane and manages <code>SendCommand</code> API calls for you. For information and a list of supported programming languages, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-driver.html">Getting started with the driver</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> <li> <p>If you are working with the AWS Command Line Interface (AWS CLI), use the QLDB Shell. The shell is a command line interface that uses the QLDB Driver to interact with a ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/data-shell.html">Accessing Amazon QLDB using the QLDB Shell</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=QLDBSession.SendCommand
		 * @return {SendCommandResult} Success
		 */
		SendCommand(requestBody: SendCommandRequest): Observable<SendCommandResult> {
			return this.http.post<SendCommandResult>(this.baseUri + '#X-Amz-Target=QLDBSession.SendCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum SendCommandX_Amz_Target { QLDBSession_SendCommand = 0 }

}

