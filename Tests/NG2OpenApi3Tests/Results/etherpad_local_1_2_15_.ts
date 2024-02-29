import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Message {
		text?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;
		userId?: string | null;
		userName?: string | null;
	}
	export interface MessageFormProperties {
		text: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SessionInfo {
		authorID?: string | null;
		groupID?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil?: number | null;
	}
	export interface SessionInfoFormProperties {
		authorID: FormControl<string | null | undefined>,
		groupID: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateSessionInfoFormGroup() {
		return new FormGroup<SessionInfoFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
			groupID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserInfo {
		colorId?: string | null;
		id?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp?: number | null;
	}
	export interface UserInfoFormProperties {
		colorId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			colorId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * appends a chat message
		 * Get appendChatMessage
		 * @return {AppendChatMessageUsingGETReturn} ok (code 0)
		 */
		AppendChatMessageUsingGET(padID: string | null | undefined, text: string | null | undefined, authorID: string | null | undefined, time: string | null | undefined): Observable<AppendChatMessageUsingGETReturn> {
			return this.http.get<AppendChatMessageUsingGETReturn>(this.baseUri + 'appendChatMessage?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)) + '&authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)) + '&time=' + (time == null ? '' : encodeURIComponent(time)), {});
		}

		/**
		 * appends a chat message
		 * Post appendChatMessage
		 * @return {AppendChatMessageUsingPOSTReturn} ok (code 0)
		 */
		AppendChatMessageUsingPOST(padID: string | null | undefined, text: string | null | undefined, authorID: string | null | undefined, time: string | null | undefined): Observable<AppendChatMessageUsingPOSTReturn> {
			return this.http.post<AppendChatMessageUsingPOSTReturn>(this.baseUri + 'appendChatMessage?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)) + '&authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)) + '&time=' + (time == null ? '' : encodeURIComponent(time)), null, {});
		}

		/**
		 * Get appendText
		 * @return {AppendTextUsingGETReturn} ok (code 0)
		 */
		AppendTextUsingGET(padID: string | null | undefined, text: string | null | undefined): Observable<AppendTextUsingGETReturn> {
			return this.http.get<AppendTextUsingGETReturn>(this.baseUri + 'appendText?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), {});
		}

		/**
		 * Post appendText
		 * @return {AppendTextUsingPOSTReturn} ok (code 0)
		 */
		AppendTextUsingPOST(padID: string | null | undefined, text: string | null | undefined): Observable<AppendTextUsingPOSTReturn> {
			return this.http.post<AppendTextUsingPOSTReturn>(this.baseUri + 'appendText?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), null, {});
		}

		/**
		 * returns ok when the current api token is valid
		 * Get checkToken
		 * @return {CheckTokenUsingGETReturn} ok (code 0)
		 */
		CheckTokenUsingGET(): Observable<CheckTokenUsingGETReturn> {
			return this.http.get<CheckTokenUsingGETReturn>(this.baseUri + 'checkToken', {});
		}

		/**
		 * returns ok when the current api token is valid
		 * Post checkToken
		 * @return {CheckTokenUsingPOSTReturn} ok (code 0)
		 */
		CheckTokenUsingPOST(): Observable<CheckTokenUsingPOSTReturn> {
			return this.http.post<CheckTokenUsingPOSTReturn>(this.baseUri + 'checkToken', null, {});
		}

		/**
		 * Get copyPad
		 * @return {CopyPadUsingGETReturn} ok (code 0)
		 */
		CopyPadUsingGET(sourceID: string | null | undefined, destinationID: string | null | undefined, force: string | null | undefined): Observable<CopyPadUsingGETReturn> {
			return this.http.get<CopyPadUsingGETReturn>(this.baseUri + 'copyPad?sourceID=' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '&destinationID=' + (destinationID == null ? '' : encodeURIComponent(destinationID)) + '&force=' + (force == null ? '' : encodeURIComponent(force)), {});
		}

		/**
		 * Post copyPad
		 * @return {CopyPadUsingPOSTReturn} ok (code 0)
		 */
		CopyPadUsingPOST(sourceID: string | null | undefined, destinationID: string | null | undefined, force: string | null | undefined): Observable<CopyPadUsingPOSTReturn> {
			return this.http.post<CopyPadUsingPOSTReturn>(this.baseUri + 'copyPad?sourceID=' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '&destinationID=' + (destinationID == null ? '' : encodeURIComponent(destinationID)) + '&force=' + (force == null ? '' : encodeURIComponent(force)), null, {});
		}

		/**
		 * Get copyPadWithoutHistory
		 * @return {CopyPadWithoutHistoryUsingGETReturn} ok (code 0)
		 */
		CopyPadWithoutHistoryUsingGET(sourceID: string | null | undefined, destinationID: string | null | undefined, force: string | null | undefined): Observable<CopyPadWithoutHistoryUsingGETReturn> {
			return this.http.get<CopyPadWithoutHistoryUsingGETReturn>(this.baseUri + 'copyPadWithoutHistory?sourceID=' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '&destinationID=' + (destinationID == null ? '' : encodeURIComponent(destinationID)) + '&force=' + (force == null ? '' : encodeURIComponent(force)), {});
		}

		/**
		 * Post copyPadWithoutHistory
		 * @return {CopyPadWithoutHistoryUsingPOSTReturn} ok (code 0)
		 */
		CopyPadWithoutHistoryUsingPOST(sourceID: string | null | undefined, destinationID: string | null | undefined, force: string | null | undefined): Observable<CopyPadWithoutHistoryUsingPOSTReturn> {
			return this.http.post<CopyPadWithoutHistoryUsingPOSTReturn>(this.baseUri + 'copyPadWithoutHistory?sourceID=' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '&destinationID=' + (destinationID == null ? '' : encodeURIComponent(destinationID)) + '&force=' + (force == null ? '' : encodeURIComponent(force)), null, {});
		}

		/**
		 * creates a new author
		 * Get createAuthor
		 * @return {CreateAuthorUsingGETReturn} ok (code 0)
		 */
		CreateAuthorUsingGET(name: string | null | undefined): Observable<CreateAuthorUsingGETReturn> {
			return this.http.get<CreateAuthorUsingGETReturn>(this.baseUri + 'createAuthor?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * creates a new author
		 * Post createAuthor
		 * @return {CreateAuthorUsingPOSTReturn} ok (code 0)
		 */
		CreateAuthorUsingPOST(name: string | null | undefined): Observable<CreateAuthorUsingPOSTReturn> {
			return this.http.post<CreateAuthorUsingPOSTReturn>(this.baseUri + 'createAuthor?name=' + (name == null ? '' : encodeURIComponent(name)), null, {});
		}

		/**
		 * this functions helps you to map your application author ids to Etherpad author ids
		 * Get createAuthorIfNotExistsFor
		 * @return {CreateAuthorIfNotExistsForUsingGETReturn} ok (code 0)
		 */
		CreateAuthorIfNotExistsForUsingGET(authorMapper: string | null | undefined, name: string | null | undefined): Observable<CreateAuthorIfNotExistsForUsingGETReturn> {
			return this.http.get<CreateAuthorIfNotExistsForUsingGETReturn>(this.baseUri + 'createAuthorIfNotExistsFor?authorMapper=' + (authorMapper == null ? '' : encodeURIComponent(authorMapper)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * this functions helps you to map your application author ids to Etherpad author ids
		 * Post createAuthorIfNotExistsFor
		 * @return {CreateAuthorIfNotExistsForUsingPOSTReturn} ok (code 0)
		 */
		CreateAuthorIfNotExistsForUsingPOST(authorMapper: string | null | undefined, name: string | null | undefined): Observable<CreateAuthorIfNotExistsForUsingPOSTReturn> {
			return this.http.post<CreateAuthorIfNotExistsForUsingPOSTReturn>(this.baseUri + 'createAuthorIfNotExistsFor?authorMapper=' + (authorMapper == null ? '' : encodeURIComponent(authorMapper)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), null, {});
		}

		/**
		 * Get createDiffHTML
		 * @return {CreateDiffHTMLUsingGETReturn} ok (code 0)
		 */
		CreateDiffHTMLUsingGET(padID: string | null | undefined, startRev: string | null | undefined, endRev: string | null | undefined): Observable<CreateDiffHTMLUsingGETReturn> {
			return this.http.get<CreateDiffHTMLUsingGETReturn>(this.baseUri + 'createDiffHTML?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&startRev=' + (startRev == null ? '' : encodeURIComponent(startRev)) + '&endRev=' + (endRev == null ? '' : encodeURIComponent(endRev)), {});
		}

		/**
		 * Post createDiffHTML
		 * @return {CreateDiffHTMLUsingPOSTReturn} ok (code 0)
		 */
		CreateDiffHTMLUsingPOST(padID: string | null | undefined, startRev: string | null | undefined, endRev: string | null | undefined): Observable<CreateDiffHTMLUsingPOSTReturn> {
			return this.http.post<CreateDiffHTMLUsingPOSTReturn>(this.baseUri + 'createDiffHTML?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&startRev=' + (startRev == null ? '' : encodeURIComponent(startRev)) + '&endRev=' + (endRev == null ? '' : encodeURIComponent(endRev)), null, {});
		}

		/**
		 * creates a new group
		 * Get createGroup
		 * @return {CreateGroupUsingGETReturn} ok (code 0)
		 */
		CreateGroupUsingGET(): Observable<CreateGroupUsingGETReturn> {
			return this.http.get<CreateGroupUsingGETReturn>(this.baseUri + 'createGroup', {});
		}

		/**
		 * creates a new group
		 * Post createGroup
		 * @return {CreateGroupUsingPOSTReturn} ok (code 0)
		 */
		CreateGroupUsingPOST(): Observable<CreateGroupUsingPOSTReturn> {
			return this.http.post<CreateGroupUsingPOSTReturn>(this.baseUri + 'createGroup', null, {});
		}

		/**
		 * this functions helps you to map your application group ids to Etherpad group ids
		 * Get createGroupIfNotExistsFor
		 * @return {CreateGroupIfNotExistsForUsingGETReturn} ok (code 0)
		 */
		CreateGroupIfNotExistsForUsingGET(groupMapper: string | null | undefined): Observable<CreateGroupIfNotExistsForUsingGETReturn> {
			return this.http.get<CreateGroupIfNotExistsForUsingGETReturn>(this.baseUri + 'createGroupIfNotExistsFor?groupMapper=' + (groupMapper == null ? '' : encodeURIComponent(groupMapper)), {});
		}

		/**
		 * this functions helps you to map your application group ids to Etherpad group ids
		 * Post createGroupIfNotExistsFor
		 * @return {CreateGroupIfNotExistsForUsingPOSTReturn} ok (code 0)
		 */
		CreateGroupIfNotExistsForUsingPOST(groupMapper: string | null | undefined): Observable<CreateGroupIfNotExistsForUsingPOSTReturn> {
			return this.http.post<CreateGroupIfNotExistsForUsingPOSTReturn>(this.baseUri + 'createGroupIfNotExistsFor?groupMapper=' + (groupMapper == null ? '' : encodeURIComponent(groupMapper)), null, {});
		}

		/**
		 * creates a new pad in this group
		 * Get createGroupPad
		 * @return {CreateGroupPadUsingGETReturn} ok (code 0)
		 */
		CreateGroupPadUsingGET(groupID: string | null | undefined, padName: string | null | undefined, text: string | null | undefined): Observable<CreateGroupPadUsingGETReturn> {
			return this.http.get<CreateGroupPadUsingGETReturn>(this.baseUri + 'createGroupPad?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)) + '&padName=' + (padName == null ? '' : encodeURIComponent(padName)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), {});
		}

		/**
		 * creates a new pad in this group
		 * Post createGroupPad
		 * @return {CreateGroupPadUsingPOSTReturn} ok (code 0)
		 */
		CreateGroupPadUsingPOST(groupID: string | null | undefined, padName: string | null | undefined, text: string | null | undefined): Observable<CreateGroupPadUsingPOSTReturn> {
			return this.http.post<CreateGroupPadUsingPOSTReturn>(this.baseUri + 'createGroupPad?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)) + '&padName=' + (padName == null ? '' : encodeURIComponent(padName)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), null, {});
		}

		/**
		 * creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
		 * Get createPad
		 * @return {CreatePadUsingGETReturn} ok (code 0)
		 */
		CreatePadUsingGET(padID: string | null | undefined, text: string | null | undefined): Observable<CreatePadUsingGETReturn> {
			return this.http.get<CreatePadUsingGETReturn>(this.baseUri + 'createPad?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), {});
		}

		/**
		 * creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
		 * Post createPad
		 * @return {CreatePadUsingPOSTReturn} ok (code 0)
		 */
		CreatePadUsingPOST(padID: string | null | undefined, text: string | null | undefined): Observable<CreatePadUsingPOSTReturn> {
			return this.http.post<CreatePadUsingPOSTReturn>(this.baseUri + 'createPad?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), null, {});
		}

		/**
		 * creates a new session. validUntil is an unix timestamp in seconds
		 * Get createSession
		 * @return {CreateSessionUsingGETReturn} ok (code 0)
		 */
		CreateSessionUsingGET(groupID: string | null | undefined, authorID: string | null | undefined, validUntil: string | null | undefined): Observable<CreateSessionUsingGETReturn> {
			return this.http.get<CreateSessionUsingGETReturn>(this.baseUri + 'createSession?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)) + '&authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)) + '&validUntil=' + (validUntil == null ? '' : encodeURIComponent(validUntil)), {});
		}

		/**
		 * creates a new session. validUntil is an unix timestamp in seconds
		 * Post createSession
		 * @return {CreateSessionUsingPOSTReturn} ok (code 0)
		 */
		CreateSessionUsingPOST(groupID: string | null | undefined, authorID: string | null | undefined, validUntil: string | null | undefined): Observable<CreateSessionUsingPOSTReturn> {
			return this.http.post<CreateSessionUsingPOSTReturn>(this.baseUri + 'createSession?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)) + '&authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)) + '&validUntil=' + (validUntil == null ? '' : encodeURIComponent(validUntil)), null, {});
		}

		/**
		 * deletes a group
		 * Get deleteGroup
		 * @return {DeleteGroupUsingGETReturn} ok (code 0)
		 */
		DeleteGroupUsingGET(groupID: string | null | undefined): Observable<DeleteGroupUsingGETReturn> {
			return this.http.get<DeleteGroupUsingGETReturn>(this.baseUri + 'deleteGroup?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)), {});
		}

		/**
		 * deletes a group
		 * Post deleteGroup
		 * @return {DeleteGroupUsingPOSTReturn} ok (code 0)
		 */
		DeleteGroupUsingPOST(groupID: string | null | undefined): Observable<DeleteGroupUsingPOSTReturn> {
			return this.http.post<DeleteGroupUsingPOSTReturn>(this.baseUri + 'deleteGroup?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)), null, {});
		}

		/**
		 * deletes a pad
		 * Get deletePad
		 * @return {DeletePadUsingGETReturn} ok (code 0)
		 */
		DeletePadUsingGET(padID: string | null | undefined): Observable<DeletePadUsingGETReturn> {
			return this.http.get<DeletePadUsingGETReturn>(this.baseUri + 'deletePad?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * deletes a pad
		 * Post deletePad
		 * @return {DeletePadUsingPOSTReturn} ok (code 0)
		 */
		DeletePadUsingPOST(padID: string | null | undefined): Observable<DeletePadUsingPOSTReturn> {
			return this.http.post<DeletePadUsingPOSTReturn>(this.baseUri + 'deletePad?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * deletes a session
		 * Get deleteSession
		 * @return {DeleteSessionUsingGETReturn} ok (code 0)
		 */
		DeleteSessionUsingGET(sessionID: string | null | undefined): Observable<DeleteSessionUsingGETReturn> {
			return this.http.get<DeleteSessionUsingGETReturn>(this.baseUri + 'deleteSession?sessionID=' + (sessionID == null ? '' : encodeURIComponent(sessionID)), {});
		}

		/**
		 * deletes a session
		 * Post deleteSession
		 * @return {DeleteSessionUsingPOSTReturn} ok (code 0)
		 */
		DeleteSessionUsingPOST(sessionID: string | null | undefined): Observable<DeleteSessionUsingPOSTReturn> {
			return this.http.post<DeleteSessionUsingPOSTReturn>(this.baseUri + 'deleteSession?sessionID=' + (sessionID == null ? '' : encodeURIComponent(sessionID)), null, {});
		}

		/**
		 * Get getAttributePool
		 * @return {GetAttributePoolUsingGETReturn} ok (code 0)
		 */
		GetAttributePoolUsingGET(padID: string | null | undefined): Observable<GetAttributePoolUsingGETReturn> {
			return this.http.get<GetAttributePoolUsingGETReturn>(this.baseUri + 'getAttributePool?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * Post getAttributePool
		 * @return {GetAttributePoolUsingPOSTReturn} ok (code 0)
		 */
		GetAttributePoolUsingPOST(padID: string | null | undefined): Observable<GetAttributePoolUsingPOSTReturn> {
			return this.http.post<GetAttributePoolUsingPOSTReturn>(this.baseUri + 'getAttributePool?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * Returns the Author Name of the author
		 * Get getAuthorName
		 * @return {GetAuthorNameUsingGETReturn} ok (code 0)
		 */
		GetAuthorNameUsingGET(authorID: string | null | undefined): Observable<GetAuthorNameUsingGETReturn> {
			return this.http.get<GetAuthorNameUsingGETReturn>(this.baseUri + 'getAuthorName?authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)), {});
		}

		/**
		 * Returns the Author Name of the author
		 * Post getAuthorName
		 * @return {GetAuthorNameUsingPOSTReturn} ok (code 0)
		 */
		GetAuthorNameUsingPOST(authorID: string | null | undefined): Observable<GetAuthorNameUsingPOSTReturn> {
			return this.http.post<GetAuthorNameUsingPOSTReturn>(this.baseUri + 'getAuthorName?authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)), null, {});
		}

		/**
		 * returns the chatHead (chat-message) of the pad
		 * Get getChatHead
		 * @return {GetChatHeadUsingGETReturn} ok (code 0)
		 */
		GetChatHeadUsingGET(padID: string | null | undefined): Observable<GetChatHeadUsingGETReturn> {
			return this.http.get<GetChatHeadUsingGETReturn>(this.baseUri + 'getChatHead?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * returns the chatHead (chat-message) of the pad
		 * Post getChatHead
		 * @return {GetChatHeadUsingPOSTReturn} ok (code 0)
		 */
		GetChatHeadUsingPOST(padID: string | null | undefined): Observable<GetChatHeadUsingPOSTReturn> {
			return this.http.post<GetChatHeadUsingPOSTReturn>(this.baseUri + 'getChatHead?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * returns the chat history
		 * Get getChatHistory
		 * @return {GetChatHistoryUsingGETReturn} ok (code 0)
		 */
		GetChatHistoryUsingGET(padID: string | null | undefined, start: string | null | undefined, end: string | null | undefined): Observable<GetChatHistoryUsingGETReturn> {
			return this.http.get<GetChatHistoryUsingGETReturn>(this.baseUri + 'getChatHistory?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)), {});
		}

		/**
		 * returns the chat history
		 * Post getChatHistory
		 * @return {GetChatHistoryUsingPOSTReturn} ok (code 0)
		 */
		GetChatHistoryUsingPOST(padID: string | null | undefined, start: string | null | undefined, end: string | null | undefined): Observable<GetChatHistoryUsingPOSTReturn> {
			return this.http.post<GetChatHistoryUsingPOSTReturn>(this.baseUri + 'getChatHistory?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&start=' + (start == null ? '' : encodeURIComponent(start)) + '&end=' + (end == null ? '' : encodeURIComponent(end)), null, {});
		}

		/**
		 * returns the text of a pad formatted as HTML
		 * Get getHTML
		 * @return {GetHTMLUsingGETReturn} ok (code 0)
		 */
		GetHTMLUsingGET(padID: string | null | undefined, rev: string | null | undefined): Observable<GetHTMLUsingGETReturn> {
			return this.http.get<GetHTMLUsingGETReturn>(this.baseUri + 'getHTML?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), {});
		}

		/**
		 * returns the text of a pad formatted as HTML
		 * Post getHTML
		 * @return {GetHTMLUsingPOSTReturn} ok (code 0)
		 */
		GetHTMLUsingPOST(padID: string | null | undefined, rev: string | null | undefined): Observable<GetHTMLUsingPOSTReturn> {
			return this.http.post<GetHTMLUsingPOSTReturn>(this.baseUri + 'getHTML?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), null, {});
		}

		/**
		 * returns the timestamp of the last revision of the pad
		 * Get getLastEdited
		 * @return {GetLastEditedUsingGETReturn} ok (code 0)
		 */
		GetLastEditedUsingGET(padID: string | null | undefined): Observable<GetLastEditedUsingGETReturn> {
			return this.http.get<GetLastEditedUsingGETReturn>(this.baseUri + 'getLastEdited?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * returns the timestamp of the last revision of the pad
		 * Post getLastEdited
		 * @return {GetLastEditedUsingPOSTReturn} ok (code 0)
		 */
		GetLastEditedUsingPOST(padID: string | null | undefined): Observable<GetLastEditedUsingPOSTReturn> {
			return this.http.post<GetLastEditedUsingPOSTReturn>(this.baseUri + 'getLastEdited?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * Get getPadID
		 * @return {GetPadIDUsingGETReturn} ok (code 0)
		 */
		GetPadIDUsingGET(roID: string | null | undefined): Observable<GetPadIDUsingGETReturn> {
			return this.http.get<GetPadIDUsingGETReturn>(this.baseUri + 'getPadID?roID=' + (roID == null ? '' : encodeURIComponent(roID)), {});
		}

		/**
		 * Post getPadID
		 * @return {GetPadIDUsingPOSTReturn} ok (code 0)
		 */
		GetPadIDUsingPOST(roID: string | null | undefined): Observable<GetPadIDUsingPOSTReturn> {
			return this.http.post<GetPadIDUsingPOSTReturn>(this.baseUri + 'getPadID?roID=' + (roID == null ? '' : encodeURIComponent(roID)), null, {});
		}

		/**
		 * return true of false
		 * Get getPublicStatus
		 * @return {GetPublicStatusUsingGETReturn} ok (code 0)
		 */
		GetPublicStatusUsingGET(padID: string | null | undefined): Observable<GetPublicStatusUsingGETReturn> {
			return this.http.get<GetPublicStatusUsingGETReturn>(this.baseUri + 'getPublicStatus?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * return true of false
		 * Post getPublicStatus
		 * @return {GetPublicStatusUsingPOSTReturn} ok (code 0)
		 */
		GetPublicStatusUsingPOST(padID: string | null | undefined): Observable<GetPublicStatusUsingPOSTReturn> {
			return this.http.post<GetPublicStatusUsingPOSTReturn>(this.baseUri + 'getPublicStatus?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * returns the read only link of a pad
		 * Get getReadOnlyID
		 * @return {GetReadOnlyIDUsingGETReturn} ok (code 0)
		 */
		GetReadOnlyIDUsingGET(padID: string | null | undefined): Observable<GetReadOnlyIDUsingGETReturn> {
			return this.http.get<GetReadOnlyIDUsingGETReturn>(this.baseUri + 'getReadOnlyID?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * returns the read only link of a pad
		 * Post getReadOnlyID
		 * @return {GetReadOnlyIDUsingPOSTReturn} ok (code 0)
		 */
		GetReadOnlyIDUsingPOST(padID: string | null | undefined): Observable<GetReadOnlyIDUsingPOSTReturn> {
			return this.http.post<GetReadOnlyIDUsingPOSTReturn>(this.baseUri + 'getReadOnlyID?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * Get getRevisionChangeset
		 * @return {GetRevisionChangesetUsingGETReturn} ok (code 0)
		 */
		GetRevisionChangesetUsingGET(padID: string | null | undefined, rev: string | null | undefined): Observable<GetRevisionChangesetUsingGETReturn> {
			return this.http.get<GetRevisionChangesetUsingGETReturn>(this.baseUri + 'getRevisionChangeset?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), {});
		}

		/**
		 * Post getRevisionChangeset
		 * @return {GetRevisionChangesetUsingPOSTReturn} ok (code 0)
		 */
		GetRevisionChangesetUsingPOST(padID: string | null | undefined, rev: string | null | undefined): Observable<GetRevisionChangesetUsingPOSTReturn> {
			return this.http.post<GetRevisionChangesetUsingPOSTReturn>(this.baseUri + 'getRevisionChangeset?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), null, {});
		}

		/**
		 * returns the number of revisions of this pad
		 * Get getRevisionsCount
		 * @return {GetRevisionsCountUsingGETReturn} ok (code 0)
		 */
		GetRevisionsCountUsingGET(padID: string | null | undefined): Observable<GetRevisionsCountUsingGETReturn> {
			return this.http.get<GetRevisionsCountUsingGETReturn>(this.baseUri + 'getRevisionsCount?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * returns the number of revisions of this pad
		 * Post getRevisionsCount
		 * @return {GetRevisionsCountUsingPOSTReturn} ok (code 0)
		 */
		GetRevisionsCountUsingPOST(padID: string | null | undefined): Observable<GetRevisionsCountUsingPOSTReturn> {
			return this.http.post<GetRevisionsCountUsingPOSTReturn>(this.baseUri + 'getRevisionsCount?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * Get getSavedRevisionsCount
		 * @return {GetSavedRevisionsCountUsingGETReturn} ok (code 0)
		 */
		GetSavedRevisionsCountUsingGET(padID: string | null | undefined): Observable<GetSavedRevisionsCountUsingGETReturn> {
			return this.http.get<GetSavedRevisionsCountUsingGETReturn>(this.baseUri + 'getSavedRevisionsCount?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * Post getSavedRevisionsCount
		 * @return {GetSavedRevisionsCountUsingPOSTReturn} ok (code 0)
		 */
		GetSavedRevisionsCountUsingPOST(padID: string | null | undefined): Observable<GetSavedRevisionsCountUsingPOSTReturn> {
			return this.http.post<GetSavedRevisionsCountUsingPOSTReturn>(this.baseUri + 'getSavedRevisionsCount?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * returns informations about a session
		 * Get getSessionInfo
		 * @return {GetSessionInfoUsingGETReturn} ok (code 0)
		 */
		GetSessionInfoUsingGET(sessionID: string | null | undefined): Observable<GetSessionInfoUsingGETReturn> {
			return this.http.get<GetSessionInfoUsingGETReturn>(this.baseUri + 'getSessionInfo?sessionID=' + (sessionID == null ? '' : encodeURIComponent(sessionID)), {});
		}

		/**
		 * returns informations about a session
		 * Post getSessionInfo
		 * @return {GetSessionInfoUsingPOSTReturn} ok (code 0)
		 */
		GetSessionInfoUsingPOST(sessionID: string | null | undefined): Observable<GetSessionInfoUsingPOSTReturn> {
			return this.http.post<GetSessionInfoUsingPOSTReturn>(this.baseUri + 'getSessionInfo?sessionID=' + (sessionID == null ? '' : encodeURIComponent(sessionID)), null, {});
		}

		/**
		 * Get getStats
		 * @return {GetStatsUsingGETReturn} ok (code 0)
		 */
		GetStatsUsingGET(): Observable<GetStatsUsingGETReturn> {
			return this.http.get<GetStatsUsingGETReturn>(this.baseUri + 'getStats', {});
		}

		/**
		 * Post getStats
		 * @return {GetStatsUsingPOSTReturn} ok (code 0)
		 */
		GetStatsUsingPOST(): Observable<GetStatsUsingPOSTReturn> {
			return this.http.post<GetStatsUsingPOSTReturn>(this.baseUri + 'getStats', null, {});
		}

		/**
		 * returns the text of a pad
		 * Get getText
		 * @return {GetTextUsingGETReturn} ok (code 0)
		 */
		GetTextUsingGET(padID: string | null | undefined, rev: string | null | undefined): Observable<GetTextUsingGETReturn> {
			return this.http.get<GetTextUsingGETReturn>(this.baseUri + 'getText?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), {});
		}

		/**
		 * returns the text of a pad
		 * Post getText
		 * @return {GetTextUsingPOSTReturn} ok (code 0)
		 */
		GetTextUsingPOST(padID: string | null | undefined, rev: string | null | undefined): Observable<GetTextUsingPOSTReturn> {
			return this.http.post<GetTextUsingPOSTReturn>(this.baseUri + 'getText?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), null, {});
		}

		/**
		 * Get listAllGroups
		 * @return {ListAllGroupsUsingGETReturn} ok (code 0)
		 */
		ListAllGroupsUsingGET(): Observable<ListAllGroupsUsingGETReturn> {
			return this.http.get<ListAllGroupsUsingGETReturn>(this.baseUri + 'listAllGroups', {});
		}

		/**
		 * Post listAllGroups
		 * @return {ListAllGroupsUsingPOSTReturn} ok (code 0)
		 */
		ListAllGroupsUsingPOST(): Observable<ListAllGroupsUsingPOSTReturn> {
			return this.http.post<ListAllGroupsUsingPOSTReturn>(this.baseUri + 'listAllGroups', null, {});
		}

		/**
		 * list all the pads
		 * Get listAllPads
		 * @return {ListAllPadsUsingGETReturn} ok (code 0)
		 */
		ListAllPadsUsingGET(): Observable<ListAllPadsUsingGETReturn> {
			return this.http.get<ListAllPadsUsingGETReturn>(this.baseUri + 'listAllPads', {});
		}

		/**
		 * list all the pads
		 * Post listAllPads
		 * @return {ListAllPadsUsingPOSTReturn} ok (code 0)
		 */
		ListAllPadsUsingPOST(): Observable<ListAllPadsUsingPOSTReturn> {
			return this.http.post<ListAllPadsUsingPOSTReturn>(this.baseUri + 'listAllPads', null, {});
		}

		/**
		 * returns an array of authors who contributed to this pad
		 * Get listAuthorsOfPad
		 * @return {ListAuthorsOfPadUsingGETReturn} ok (code 0)
		 */
		ListAuthorsOfPadUsingGET(padID: string | null | undefined): Observable<ListAuthorsOfPadUsingGETReturn> {
			return this.http.get<ListAuthorsOfPadUsingGETReturn>(this.baseUri + 'listAuthorsOfPad?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * returns an array of authors who contributed to this pad
		 * Post listAuthorsOfPad
		 * @return {ListAuthorsOfPadUsingPOSTReturn} ok (code 0)
		 */
		ListAuthorsOfPadUsingPOST(padID: string | null | undefined): Observable<ListAuthorsOfPadUsingPOSTReturn> {
			return this.http.post<ListAuthorsOfPadUsingPOSTReturn>(this.baseUri + 'listAuthorsOfPad?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * returns all pads of this group
		 * Get listPads
		 * @return {ListPadsUsingGETReturn} ok (code 0)
		 */
		ListPadsUsingGET(groupID: string | null | undefined): Observable<ListPadsUsingGETReturn> {
			return this.http.get<ListPadsUsingGETReturn>(this.baseUri + 'listPads?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)), {});
		}

		/**
		 * returns all pads of this group
		 * Post listPads
		 * @return {ListPadsUsingPOSTReturn} ok (code 0)
		 */
		ListPadsUsingPOST(groupID: string | null | undefined): Observable<ListPadsUsingPOSTReturn> {
			return this.http.post<ListPadsUsingPOSTReturn>(this.baseUri + 'listPads?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)), null, {});
		}

		/**
		 * returns an array of all pads this author contributed to
		 * Get listPadsOfAuthor
		 * @return {ListPadsOfAuthorUsingGETReturn} ok (code 0)
		 */
		ListPadsOfAuthorUsingGET(authorID: string | null | undefined): Observable<ListPadsOfAuthorUsingGETReturn> {
			return this.http.get<ListPadsOfAuthorUsingGETReturn>(this.baseUri + 'listPadsOfAuthor?authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)), {});
		}

		/**
		 * returns an array of all pads this author contributed to
		 * Post listPadsOfAuthor
		 * @return {ListPadsOfAuthorUsingPOSTReturn} ok (code 0)
		 */
		ListPadsOfAuthorUsingPOST(authorID: string | null | undefined): Observable<ListPadsOfAuthorUsingPOSTReturn> {
			return this.http.post<ListPadsOfAuthorUsingPOSTReturn>(this.baseUri + 'listPadsOfAuthor?authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)), null, {});
		}

		/**
		 * Get listSavedRevisions
		 * @return {ListSavedRevisionsUsingGETReturn} ok (code 0)
		 */
		ListSavedRevisionsUsingGET(padID: string | null | undefined): Observable<ListSavedRevisionsUsingGETReturn> {
			return this.http.get<ListSavedRevisionsUsingGETReturn>(this.baseUri + 'listSavedRevisions?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * Post listSavedRevisions
		 * @return {ListSavedRevisionsUsingPOSTReturn} ok (code 0)
		 */
		ListSavedRevisionsUsingPOST(padID: string | null | undefined): Observable<ListSavedRevisionsUsingPOSTReturn> {
			return this.http.post<ListSavedRevisionsUsingPOSTReturn>(this.baseUri + 'listSavedRevisions?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * returns all sessions of an author
		 * Get listSessionsOfAuthor
		 * @return {ListSessionsOfAuthorUsingGETReturn} ok (code 0)
		 */
		ListSessionsOfAuthorUsingGET(authorID: string | null | undefined): Observable<ListSessionsOfAuthorUsingGETReturn> {
			return this.http.get<ListSessionsOfAuthorUsingGETReturn>(this.baseUri + 'listSessionsOfAuthor?authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)), {});
		}

		/**
		 * returns all sessions of an author
		 * Post listSessionsOfAuthor
		 * @return {ListSessionsOfAuthorUsingPOSTReturn} ok (code 0)
		 */
		ListSessionsOfAuthorUsingPOST(authorID: string | null | undefined): Observable<ListSessionsOfAuthorUsingPOSTReturn> {
			return this.http.post<ListSessionsOfAuthorUsingPOSTReturn>(this.baseUri + 'listSessionsOfAuthor?authorID=' + (authorID == null ? '' : encodeURIComponent(authorID)), null, {});
		}

		/**
		 * Get listSessionsOfGroup
		 * @return {ListSessionsOfGroupUsingGETReturn} ok (code 0)
		 */
		ListSessionsOfGroupUsingGET(groupID: string | null | undefined): Observable<ListSessionsOfGroupUsingGETReturn> {
			return this.http.get<ListSessionsOfGroupUsingGETReturn>(this.baseUri + 'listSessionsOfGroup?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)), {});
		}

		/**
		 * Post listSessionsOfGroup
		 * @return {ListSessionsOfGroupUsingPOSTReturn} ok (code 0)
		 */
		ListSessionsOfGroupUsingPOST(groupID: string | null | undefined): Observable<ListSessionsOfGroupUsingPOSTReturn> {
			return this.http.post<ListSessionsOfGroupUsingPOSTReturn>(this.baseUri + 'listSessionsOfGroup?groupID=' + (groupID == null ? '' : encodeURIComponent(groupID)), null, {});
		}

		/**
		 * Get movePad
		 * @return {MovePadUsingGETReturn} ok (code 0)
		 */
		MovePadUsingGET(sourceID: string | null | undefined, destinationID: string | null | undefined, force: string | null | undefined): Observable<MovePadUsingGETReturn> {
			return this.http.get<MovePadUsingGETReturn>(this.baseUri + 'movePad?sourceID=' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '&destinationID=' + (destinationID == null ? '' : encodeURIComponent(destinationID)) + '&force=' + (force == null ? '' : encodeURIComponent(force)), {});
		}

		/**
		 * Post movePad
		 * @return {MovePadUsingPOSTReturn} ok (code 0)
		 */
		MovePadUsingPOST(sourceID: string | null | undefined, destinationID: string | null | undefined, force: string | null | undefined): Observable<MovePadUsingPOSTReturn> {
			return this.http.post<MovePadUsingPOSTReturn>(this.baseUri + 'movePad?sourceID=' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '&destinationID=' + (destinationID == null ? '' : encodeURIComponent(destinationID)) + '&force=' + (force == null ? '' : encodeURIComponent(force)), null, {});
		}

		/**
		 * returns the list of users that are currently editing this pad
		 * Get padUsers
		 * @return {PadUsersUsingGETReturn} ok (code 0)
		 */
		PadUsersUsingGET(padID: string | null | undefined): Observable<PadUsersUsingGETReturn> {
			return this.http.get<PadUsersUsingGETReturn>(this.baseUri + 'padUsers?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * returns the list of users that are currently editing this pad
		 * Post padUsers
		 * @return {PadUsersUsingPOSTReturn} ok (code 0)
		 */
		PadUsersUsingPOST(padID: string | null | undefined): Observable<PadUsersUsingPOSTReturn> {
			return this.http.post<PadUsersUsingPOSTReturn>(this.baseUri + 'padUsers?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * returns the number of user that are currently editing this pad
		 * Get padUsersCount
		 * @return {PadUsersCountUsingGETReturn} ok (code 0)
		 */
		PadUsersCountUsingGET(padID: string | null | undefined): Observable<PadUsersCountUsingGETReturn> {
			return this.http.get<PadUsersCountUsingGETReturn>(this.baseUri + 'padUsersCount?padID=' + (padID == null ? '' : encodeURIComponent(padID)), {});
		}

		/**
		 * returns the number of user that are currently editing this pad
		 * Post padUsersCount
		 * @return {PadUsersCountUsingPOSTReturn} ok (code 0)
		 */
		PadUsersCountUsingPOST(padID: string | null | undefined): Observable<PadUsersCountUsingPOSTReturn> {
			return this.http.post<PadUsersCountUsingPOSTReturn>(this.baseUri + 'padUsersCount?padID=' + (padID == null ? '' : encodeURIComponent(padID)), null, {});
		}

		/**
		 * Get restoreRevision
		 * @return {RestoreRevisionUsingGETReturn} ok (code 0)
		 */
		RestoreRevisionUsingGET(padID: string | null | undefined, rev: string | null | undefined): Observable<RestoreRevisionUsingGETReturn> {
			return this.http.get<RestoreRevisionUsingGETReturn>(this.baseUri + 'restoreRevision?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), {});
		}

		/**
		 * Post restoreRevision
		 * @return {RestoreRevisionUsingPOSTReturn} ok (code 0)
		 */
		RestoreRevisionUsingPOST(padID: string | null | undefined, rev: string | null | undefined): Observable<RestoreRevisionUsingPOSTReturn> {
			return this.http.post<RestoreRevisionUsingPOSTReturn>(this.baseUri + 'restoreRevision?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), null, {});
		}

		/**
		 * Get saveRevision
		 * @return {SaveRevisionUsingGETReturn} ok (code 0)
		 */
		SaveRevisionUsingGET(padID: string | null | undefined, rev: string | null | undefined): Observable<SaveRevisionUsingGETReturn> {
			return this.http.get<SaveRevisionUsingGETReturn>(this.baseUri + 'saveRevision?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), {});
		}

		/**
		 * Post saveRevision
		 * @return {SaveRevisionUsingPOSTReturn} ok (code 0)
		 */
		SaveRevisionUsingPOST(padID: string | null | undefined, rev: string | null | undefined): Observable<SaveRevisionUsingPOSTReturn> {
			return this.http.post<SaveRevisionUsingPOSTReturn>(this.baseUri + 'saveRevision?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&rev=' + (rev == null ? '' : encodeURIComponent(rev)), null, {});
		}

		/**
		 * sends a custom message of type msg to the pad
		 * Get sendClientsMessage
		 * @return {SendClientsMessageUsingGETReturn} ok (code 0)
		 */
		SendClientsMessageUsingGET(padID: string | null | undefined, msg: string | null | undefined): Observable<SendClientsMessageUsingGETReturn> {
			return this.http.get<SendClientsMessageUsingGETReturn>(this.baseUri + 'sendClientsMessage?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&msg=' + (msg == null ? '' : encodeURIComponent(msg)), {});
		}

		/**
		 * sends a custom message of type msg to the pad
		 * Post sendClientsMessage
		 * @return {SendClientsMessageUsingPOSTReturn} ok (code 0)
		 */
		SendClientsMessageUsingPOST(padID: string | null | undefined, msg: string | null | undefined): Observable<SendClientsMessageUsingPOSTReturn> {
			return this.http.post<SendClientsMessageUsingPOSTReturn>(this.baseUri + 'sendClientsMessage?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&msg=' + (msg == null ? '' : encodeURIComponent(msg)), null, {});
		}

		/**
		 * sets the text of a pad with HTML
		 * Get setHTML
		 * @return {SetHTMLUsingGETReturn} ok (code 0)
		 */
		SetHTMLUsingGET(padID: string | null | undefined, html: string | null | undefined): Observable<SetHTMLUsingGETReturn> {
			return this.http.get<SetHTMLUsingGETReturn>(this.baseUri + 'setHTML?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&html=' + (html == null ? '' : encodeURIComponent(html)), {});
		}

		/**
		 * sets the text of a pad with HTML
		 * Post setHTML
		 * @return {SetHTMLUsingPOSTReturn} ok (code 0)
		 */
		SetHTMLUsingPOST(padID: string | null | undefined, html: string | null | undefined): Observable<SetHTMLUsingPOSTReturn> {
			return this.http.post<SetHTMLUsingPOSTReturn>(this.baseUri + 'setHTML?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&html=' + (html == null ? '' : encodeURIComponent(html)), null, {});
		}

		/**
		 * sets a boolean for the public status of a pad
		 * Get setPublicStatus
		 * @return {SetPublicStatusUsingGETReturn} ok (code 0)
		 */
		SetPublicStatusUsingGET(padID: string | null | undefined, publicStatus: string | null | undefined): Observable<SetPublicStatusUsingGETReturn> {
			return this.http.get<SetPublicStatusUsingGETReturn>(this.baseUri + 'setPublicStatus?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&publicStatus=' + (publicStatus == null ? '' : encodeURIComponent(publicStatus)), {});
		}

		/**
		 * sets a boolean for the public status of a pad
		 * Post setPublicStatus
		 * @return {SetPublicStatusUsingPOSTReturn} ok (code 0)
		 */
		SetPublicStatusUsingPOST(padID: string | null | undefined, publicStatus: string | null | undefined): Observable<SetPublicStatusUsingPOSTReturn> {
			return this.http.post<SetPublicStatusUsingPOSTReturn>(this.baseUri + 'setPublicStatus?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&publicStatus=' + (publicStatus == null ? '' : encodeURIComponent(publicStatus)), null, {});
		}

		/**
		 * sets the text of a pad
		 * Get setText
		 * @return {SetTextUsingGETReturn} ok (code 0)
		 */
		SetTextUsingGET(padID: string | null | undefined, text: string | null | undefined): Observable<SetTextUsingGETReturn> {
			return this.http.get<SetTextUsingGETReturn>(this.baseUri + 'setText?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), {});
		}

		/**
		 * sets the text of a pad
		 * Post setText
		 * @return {SetTextUsingPOSTReturn} ok (code 0)
		 */
		SetTextUsingPOST(padID: string | null | undefined, text: string | null | undefined): Observable<SetTextUsingPOSTReturn> {
			return this.http.post<SetTextUsingPOSTReturn>(this.baseUri + 'setText?padID=' + (padID == null ? '' : encodeURIComponent(padID)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), null, {});
		}
	}

	export interface AppendChatMessageUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface AppendChatMessageUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAppendChatMessageUsingGETReturnFormGroup() {
		return new FormGroup<AppendChatMessageUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendChatMessageUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface AppendChatMessageUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAppendChatMessageUsingPOSTReturnFormGroup() {
		return new FormGroup<AppendChatMessageUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendTextUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface AppendTextUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAppendTextUsingGETReturnFormGroup() {
		return new FormGroup<AppendTextUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppendTextUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface AppendTextUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAppendTextUsingPOSTReturnFormGroup() {
		return new FormGroup<AppendTextUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckTokenUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CheckTokenUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCheckTokenUsingGETReturnFormGroup() {
		return new FormGroup<CheckTokenUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckTokenUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CheckTokenUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCheckTokenUsingPOSTReturnFormGroup() {
		return new FormGroup<CheckTokenUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyPadUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CopyPadUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCopyPadUsingGETReturnFormGroup() {
		return new FormGroup<CopyPadUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyPadUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CopyPadUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCopyPadUsingPOSTReturnFormGroup() {
		return new FormGroup<CopyPadUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyPadWithoutHistoryUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CopyPadWithoutHistoryUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCopyPadWithoutHistoryUsingGETReturnFormGroup() {
		return new FormGroup<CopyPadWithoutHistoryUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyPadWithoutHistoryUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CopyPadWithoutHistoryUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCopyPadWithoutHistoryUsingPOSTReturnFormGroup() {
		return new FormGroup<CopyPadWithoutHistoryUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateAuthorUsingGETReturnData;
		message?: string | null;
	}
	export interface CreateAuthorUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorUsingGETReturnFormGroup() {
		return new FormGroup<CreateAuthorUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorUsingGETReturnData {
		authorID?: string | null;
	}
	export interface CreateAuthorUsingGETReturnDataFormProperties {
		authorID: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorUsingGETReturnDataFormGroup() {
		return new FormGroup<CreateAuthorUsingGETReturnDataFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateAuthorUsingPOSTReturnData;
		message?: string | null;
	}
	export interface CreateAuthorUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorUsingPOSTReturnFormGroup() {
		return new FormGroup<CreateAuthorUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorUsingPOSTReturnData {
		authorID?: string | null;
	}
	export interface CreateAuthorUsingPOSTReturnDataFormProperties {
		authorID: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorUsingPOSTReturnDataFormGroup() {
		return new FormGroup<CreateAuthorUsingPOSTReturnDataFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorIfNotExistsForUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateAuthorIfNotExistsForUsingGETReturnData;
		message?: string | null;
	}
	export interface CreateAuthorIfNotExistsForUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorIfNotExistsForUsingGETReturnFormGroup() {
		return new FormGroup<CreateAuthorIfNotExistsForUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorIfNotExistsForUsingGETReturnData {
		authorID?: string | null;
	}
	export interface CreateAuthorIfNotExistsForUsingGETReturnDataFormProperties {
		authorID: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorIfNotExistsForUsingGETReturnDataFormGroup() {
		return new FormGroup<CreateAuthorIfNotExistsForUsingGETReturnDataFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorIfNotExistsForUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateAuthorIfNotExistsForUsingPOSTReturnData;
		message?: string | null;
	}
	export interface CreateAuthorIfNotExistsForUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorIfNotExistsForUsingPOSTReturnFormGroup() {
		return new FormGroup<CreateAuthorIfNotExistsForUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorIfNotExistsForUsingPOSTReturnData {
		authorID?: string | null;
	}
	export interface CreateAuthorIfNotExistsForUsingPOSTReturnDataFormProperties {
		authorID: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorIfNotExistsForUsingPOSTReturnDataFormGroup() {
		return new FormGroup<CreateAuthorIfNotExistsForUsingPOSTReturnDataFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDiffHTMLUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CreateDiffHTMLUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateDiffHTMLUsingGETReturnFormGroup() {
		return new FormGroup<CreateDiffHTMLUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDiffHTMLUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CreateDiffHTMLUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateDiffHTMLUsingPOSTReturnFormGroup() {
		return new FormGroup<CreateDiffHTMLUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateGroupUsingGETReturnData;
		message?: string | null;
	}
	export interface CreateGroupUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupUsingGETReturnFormGroup() {
		return new FormGroup<CreateGroupUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupUsingGETReturnData {
		groupID?: string | null;
	}
	export interface CreateGroupUsingGETReturnDataFormProperties {
		groupID: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupUsingGETReturnDataFormGroup() {
		return new FormGroup<CreateGroupUsingGETReturnDataFormProperties>({
			groupID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateGroupUsingPOSTReturnData;
		message?: string | null;
	}
	export interface CreateGroupUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupUsingPOSTReturnFormGroup() {
		return new FormGroup<CreateGroupUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupUsingPOSTReturnData {
		groupID?: string | null;
	}
	export interface CreateGroupUsingPOSTReturnDataFormProperties {
		groupID: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupUsingPOSTReturnDataFormGroup() {
		return new FormGroup<CreateGroupUsingPOSTReturnDataFormProperties>({
			groupID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupIfNotExistsForUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateGroupIfNotExistsForUsingGETReturnData;
		message?: string | null;
	}
	export interface CreateGroupIfNotExistsForUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupIfNotExistsForUsingGETReturnFormGroup() {
		return new FormGroup<CreateGroupIfNotExistsForUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupIfNotExistsForUsingGETReturnData {
		groupID?: string | null;
	}
	export interface CreateGroupIfNotExistsForUsingGETReturnDataFormProperties {
		groupID: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupIfNotExistsForUsingGETReturnDataFormGroup() {
		return new FormGroup<CreateGroupIfNotExistsForUsingGETReturnDataFormProperties>({
			groupID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupIfNotExistsForUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateGroupIfNotExistsForUsingPOSTReturnData;
		message?: string | null;
	}
	export interface CreateGroupIfNotExistsForUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupIfNotExistsForUsingPOSTReturnFormGroup() {
		return new FormGroup<CreateGroupIfNotExistsForUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupIfNotExistsForUsingPOSTReturnData {
		groupID?: string | null;
	}
	export interface CreateGroupIfNotExistsForUsingPOSTReturnDataFormProperties {
		groupID: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupIfNotExistsForUsingPOSTReturnDataFormGroup() {
		return new FormGroup<CreateGroupIfNotExistsForUsingPOSTReturnDataFormProperties>({
			groupID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPadUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CreateGroupPadUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupPadUsingGETReturnFormGroup() {
		return new FormGroup<CreateGroupPadUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPadUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CreateGroupPadUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupPadUsingPOSTReturnFormGroup() {
		return new FormGroup<CreateGroupPadUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePadUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CreatePadUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreatePadUsingGETReturnFormGroup() {
		return new FormGroup<CreatePadUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePadUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface CreatePadUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreatePadUsingPOSTReturnFormGroup() {
		return new FormGroup<CreatePadUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSessionUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateSessionUsingGETReturnData;
		message?: string | null;
	}
	export interface CreateSessionUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateSessionUsingGETReturnFormGroup() {
		return new FormGroup<CreateSessionUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSessionUsingGETReturnData {
		sessionID?: string | null;
	}
	export interface CreateSessionUsingGETReturnDataFormProperties {
		sessionID: FormControl<string | null | undefined>,
	}
	export function CreateCreateSessionUsingGETReturnDataFormGroup() {
		return new FormGroup<CreateSessionUsingGETReturnDataFormProperties>({
			sessionID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSessionUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: CreateSessionUsingPOSTReturnData;
		message?: string | null;
	}
	export interface CreateSessionUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateSessionUsingPOSTReturnFormGroup() {
		return new FormGroup<CreateSessionUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSessionUsingPOSTReturnData {
		sessionID?: string | null;
	}
	export interface CreateSessionUsingPOSTReturnDataFormProperties {
		sessionID: FormControl<string | null | undefined>,
	}
	export function CreateCreateSessionUsingPOSTReturnDataFormGroup() {
		return new FormGroup<CreateSessionUsingPOSTReturnDataFormProperties>({
			sessionID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface DeleteGroupUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupUsingGETReturnFormGroup() {
		return new FormGroup<DeleteGroupUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface DeleteGroupUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupUsingPOSTReturnFormGroup() {
		return new FormGroup<DeleteGroupUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePadUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface DeletePadUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeletePadUsingGETReturnFormGroup() {
		return new FormGroup<DeletePadUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePadUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface DeletePadUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeletePadUsingPOSTReturnFormGroup() {
		return new FormGroup<DeletePadUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSessionUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface DeleteSessionUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSessionUsingGETReturnFormGroup() {
		return new FormGroup<DeleteSessionUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSessionUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface DeleteSessionUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSessionUsingPOSTReturnFormGroup() {
		return new FormGroup<DeleteSessionUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAttributePoolUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetAttributePoolUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetAttributePoolUsingGETReturnFormGroup() {
		return new FormGroup<GetAttributePoolUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAttributePoolUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetAttributePoolUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetAttributePoolUsingPOSTReturnFormGroup() {
		return new FormGroup<GetAttributePoolUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAuthorNameUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetAuthorNameUsingGETReturnData;
		message?: string | null;
	}
	export interface GetAuthorNameUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetAuthorNameUsingGETReturnFormGroup() {
		return new FormGroup<GetAuthorNameUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAuthorNameUsingGETReturnData {
		info?: GetAuthorNameUsingGETReturnDataInfo;
	}
	export interface GetAuthorNameUsingGETReturnDataFormProperties {
	}
	export function CreateGetAuthorNameUsingGETReturnDataFormGroup() {
		return new FormGroup<GetAuthorNameUsingGETReturnDataFormProperties>({
		});

	}

	export interface GetAuthorNameUsingGETReturnDataInfo {
		colorId?: string | null;
		id?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp?: number | null;
	}
	export interface GetAuthorNameUsingGETReturnDataInfoFormProperties {
		colorId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAuthorNameUsingGETReturnDataInfoFormGroup() {
		return new FormGroup<GetAuthorNameUsingGETReturnDataInfoFormProperties>({
			colorId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAuthorNameUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetAuthorNameUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetAuthorNameUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetAuthorNameUsingPOSTReturnFormGroup() {
		return new FormGroup<GetAuthorNameUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAuthorNameUsingPOSTReturnData {
		info?: GetAuthorNameUsingPOSTReturnDataInfo;
	}
	export interface GetAuthorNameUsingPOSTReturnDataFormProperties {
	}
	export function CreateGetAuthorNameUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetAuthorNameUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface GetAuthorNameUsingPOSTReturnDataInfo {
		colorId?: string | null;
		id?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp?: number | null;
	}
	export interface GetAuthorNameUsingPOSTReturnDataInfoFormProperties {
		colorId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetAuthorNameUsingPOSTReturnDataInfoFormGroup() {
		return new FormGroup<GetAuthorNameUsingPOSTReturnDataInfoFormProperties>({
			colorId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetChatHeadUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetChatHeadUsingGETReturnData;
		message?: string | null;
	}
	export interface GetChatHeadUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHeadUsingGETReturnFormGroup() {
		return new FormGroup<GetChatHeadUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChatHeadUsingGETReturnData {
		chatHead?: GetChatHeadUsingGETReturnDataChatHead;
	}
	export interface GetChatHeadUsingGETReturnDataFormProperties {
	}
	export function CreateGetChatHeadUsingGETReturnDataFormGroup() {
		return new FormGroup<GetChatHeadUsingGETReturnDataFormProperties>({
		});

	}

	export interface GetChatHeadUsingGETReturnDataChatHead {
		text?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;
		userId?: string | null;
		userName?: string | null;
	}
	export interface GetChatHeadUsingGETReturnDataChatHeadFormProperties {
		text: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHeadUsingGETReturnDataChatHeadFormGroup() {
		return new FormGroup<GetChatHeadUsingGETReturnDataChatHeadFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChatHeadUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetChatHeadUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetChatHeadUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHeadUsingPOSTReturnFormGroup() {
		return new FormGroup<GetChatHeadUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChatHeadUsingPOSTReturnData {
		chatHead?: GetChatHeadUsingPOSTReturnDataChatHead;
	}
	export interface GetChatHeadUsingPOSTReturnDataFormProperties {
	}
	export function CreateGetChatHeadUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetChatHeadUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface GetChatHeadUsingPOSTReturnDataChatHead {
		text?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;
		userId?: string | null;
		userName?: string | null;
	}
	export interface GetChatHeadUsingPOSTReturnDataChatHeadFormProperties {
		text: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHeadUsingPOSTReturnDataChatHeadFormGroup() {
		return new FormGroup<GetChatHeadUsingPOSTReturnDataChatHeadFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChatHistoryUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetChatHistoryUsingGETReturnData;
		message?: string | null;
	}
	export interface GetChatHistoryUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHistoryUsingGETReturnFormGroup() {
		return new FormGroup<GetChatHistoryUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChatHistoryUsingGETReturnData {
		GetChatHistoryUsingGETReturnDataMessages?: Array<GetChatHistoryUsingGETReturnDataMessages>;
	}
	export interface GetChatHistoryUsingGETReturnDataFormProperties {
	}
	export function CreateGetChatHistoryUsingGETReturnDataFormGroup() {
		return new FormGroup<GetChatHistoryUsingGETReturnDataFormProperties>({
		});

	}

	export interface GetChatHistoryUsingGETReturnDataMessages {
		text?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;
		userId?: string | null;
		userName?: string | null;
	}
	export interface GetChatHistoryUsingGETReturnDataMessagesFormProperties {
		text: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHistoryUsingGETReturnDataMessagesFormGroup() {
		return new FormGroup<GetChatHistoryUsingGETReturnDataMessagesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChatHistoryUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetChatHistoryUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetChatHistoryUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHistoryUsingPOSTReturnFormGroup() {
		return new FormGroup<GetChatHistoryUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetChatHistoryUsingPOSTReturnData {
		GetChatHistoryUsingPOSTReturnDataMessages?: Array<GetChatHistoryUsingPOSTReturnDataMessages>;
	}
	export interface GetChatHistoryUsingPOSTReturnDataFormProperties {
	}
	export function CreateGetChatHistoryUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetChatHistoryUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface GetChatHistoryUsingPOSTReturnDataMessages {
		text?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;
		userId?: string | null;
		userName?: string | null;
	}
	export interface GetChatHistoryUsingPOSTReturnDataMessagesFormProperties {
		text: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateGetChatHistoryUsingPOSTReturnDataMessagesFormGroup() {
		return new FormGroup<GetChatHistoryUsingPOSTReturnDataMessagesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHTMLUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetHTMLUsingGETReturnData;
		message?: string | null;
	}
	export interface GetHTMLUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetHTMLUsingGETReturnFormGroup() {
		return new FormGroup<GetHTMLUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHTMLUsingGETReturnData {
		html?: string | null;
	}
	export interface GetHTMLUsingGETReturnDataFormProperties {
		html: FormControl<string | null | undefined>,
	}
	export function CreateGetHTMLUsingGETReturnDataFormGroup() {
		return new FormGroup<GetHTMLUsingGETReturnDataFormProperties>({
			html: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHTMLUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetHTMLUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetHTMLUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetHTMLUsingPOSTReturnFormGroup() {
		return new FormGroup<GetHTMLUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHTMLUsingPOSTReturnData {
		html?: string | null;
	}
	export interface GetHTMLUsingPOSTReturnDataFormProperties {
		html: FormControl<string | null | undefined>,
	}
	export function CreateGetHTMLUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetHTMLUsingPOSTReturnDataFormProperties>({
			html: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLastEditedUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetLastEditedUsingGETReturnData;
		message?: string | null;
	}
	export interface GetLastEditedUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetLastEditedUsingGETReturnFormGroup() {
		return new FormGroup<GetLastEditedUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLastEditedUsingGETReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lastEdited?: number | null;
	}
	export interface GetLastEditedUsingGETReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lastEdited: FormControl<number | null | undefined>,
	}
	export function CreateGetLastEditedUsingGETReturnDataFormGroup() {
		return new FormGroup<GetLastEditedUsingGETReturnDataFormProperties>({
			lastEdited: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLastEditedUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetLastEditedUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetLastEditedUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetLastEditedUsingPOSTReturnFormGroup() {
		return new FormGroup<GetLastEditedUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLastEditedUsingPOSTReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lastEdited?: number | null;
	}
	export interface GetLastEditedUsingPOSTReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lastEdited: FormControl<number | null | undefined>,
	}
	export function CreateGetLastEditedUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetLastEditedUsingPOSTReturnDataFormProperties>({
			lastEdited: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPadIDUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetPadIDUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetPadIDUsingGETReturnFormGroup() {
		return new FormGroup<GetPadIDUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPadIDUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetPadIDUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetPadIDUsingPOSTReturnFormGroup() {
		return new FormGroup<GetPadIDUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPublicStatusUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetPublicStatusUsingGETReturnData;
		message?: string | null;
	}
	export interface GetPublicStatusUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetPublicStatusUsingGETReturnFormGroup() {
		return new FormGroup<GetPublicStatusUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPublicStatusUsingGETReturnData {
		publicStatus?: boolean | null;
	}
	export interface GetPublicStatusUsingGETReturnDataFormProperties {
		publicStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateGetPublicStatusUsingGETReturnDataFormGroup() {
		return new FormGroup<GetPublicStatusUsingGETReturnDataFormProperties>({
			publicStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetPublicStatusUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetPublicStatusUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetPublicStatusUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetPublicStatusUsingPOSTReturnFormGroup() {
		return new FormGroup<GetPublicStatusUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPublicStatusUsingPOSTReturnData {
		publicStatus?: boolean | null;
	}
	export interface GetPublicStatusUsingPOSTReturnDataFormProperties {
		publicStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateGetPublicStatusUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetPublicStatusUsingPOSTReturnDataFormProperties>({
			publicStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetReadOnlyIDUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetReadOnlyIDUsingGETReturnData;
		message?: string | null;
	}
	export interface GetReadOnlyIDUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetReadOnlyIDUsingGETReturnFormGroup() {
		return new FormGroup<GetReadOnlyIDUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadOnlyIDUsingGETReturnData {
		readOnlyID?: string | null;
	}
	export interface GetReadOnlyIDUsingGETReturnDataFormProperties {
		readOnlyID: FormControl<string | null | undefined>,
	}
	export function CreateGetReadOnlyIDUsingGETReturnDataFormGroup() {
		return new FormGroup<GetReadOnlyIDUsingGETReturnDataFormProperties>({
			readOnlyID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadOnlyIDUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetReadOnlyIDUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetReadOnlyIDUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetReadOnlyIDUsingPOSTReturnFormGroup() {
		return new FormGroup<GetReadOnlyIDUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetReadOnlyIDUsingPOSTReturnData {
		readOnlyID?: string | null;
	}
	export interface GetReadOnlyIDUsingPOSTReturnDataFormProperties {
		readOnlyID: FormControl<string | null | undefined>,
	}
	export function CreateGetReadOnlyIDUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetReadOnlyIDUsingPOSTReturnDataFormProperties>({
			readOnlyID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevisionChangesetUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetRevisionChangesetUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionChangesetUsingGETReturnFormGroup() {
		return new FormGroup<GetRevisionChangesetUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevisionChangesetUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetRevisionChangesetUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionChangesetUsingPOSTReturnFormGroup() {
		return new FormGroup<GetRevisionChangesetUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevisionsCountUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetRevisionsCountUsingGETReturnData;
		message?: string | null;
	}
	export interface GetRevisionsCountUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionsCountUsingGETReturnFormGroup() {
		return new FormGroup<GetRevisionsCountUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevisionsCountUsingGETReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revisions?: number | null;
	}
	export interface GetRevisionsCountUsingGETReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revisions: FormControl<number | null | undefined>,
	}
	export function CreateGetRevisionsCountUsingGETReturnDataFormGroup() {
		return new FormGroup<GetRevisionsCountUsingGETReturnDataFormProperties>({
			revisions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRevisionsCountUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetRevisionsCountUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetRevisionsCountUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionsCountUsingPOSTReturnFormGroup() {
		return new FormGroup<GetRevisionsCountUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevisionsCountUsingPOSTReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revisions?: number | null;
	}
	export interface GetRevisionsCountUsingPOSTReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		revisions: FormControl<number | null | undefined>,
	}
	export function CreateGetRevisionsCountUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetRevisionsCountUsingPOSTReturnDataFormProperties>({
			revisions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSavedRevisionsCountUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetSavedRevisionsCountUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetSavedRevisionsCountUsingGETReturnFormGroup() {
		return new FormGroup<GetSavedRevisionsCountUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSavedRevisionsCountUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetSavedRevisionsCountUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetSavedRevisionsCountUsingPOSTReturnFormGroup() {
		return new FormGroup<GetSavedRevisionsCountUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSessionInfoUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetSessionInfoUsingGETReturnData;
		message?: string | null;
	}
	export interface GetSessionInfoUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionInfoUsingGETReturnFormGroup() {
		return new FormGroup<GetSessionInfoUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSessionInfoUsingGETReturnData {
		info?: GetSessionInfoUsingGETReturnDataInfo;
	}
	export interface GetSessionInfoUsingGETReturnDataFormProperties {
	}
	export function CreateGetSessionInfoUsingGETReturnDataFormGroup() {
		return new FormGroup<GetSessionInfoUsingGETReturnDataFormProperties>({
		});

	}

	export interface GetSessionInfoUsingGETReturnDataInfo {
		authorID?: string | null;
		groupID?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil?: number | null;
	}
	export interface GetSessionInfoUsingGETReturnDataInfoFormProperties {
		authorID: FormControl<string | null | undefined>,
		groupID: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateGetSessionInfoUsingGETReturnDataInfoFormGroup() {
		return new FormGroup<GetSessionInfoUsingGETReturnDataInfoFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
			groupID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSessionInfoUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetSessionInfoUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetSessionInfoUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionInfoUsingPOSTReturnFormGroup() {
		return new FormGroup<GetSessionInfoUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSessionInfoUsingPOSTReturnData {
		info?: GetSessionInfoUsingPOSTReturnDataInfo;
	}
	export interface GetSessionInfoUsingPOSTReturnDataFormProperties {
	}
	export function CreateGetSessionInfoUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetSessionInfoUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface GetSessionInfoUsingPOSTReturnDataInfo {
		authorID?: string | null;
		groupID?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil?: number | null;
	}
	export interface GetSessionInfoUsingPOSTReturnDataInfoFormProperties {
		authorID: FormControl<string | null | undefined>,
		groupID: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateGetSessionInfoUsingPOSTReturnDataInfoFormGroup() {
		return new FormGroup<GetSessionInfoUsingPOSTReturnDataInfoFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
			groupID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetStatsUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetStatsUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetStatsUsingGETReturnFormGroup() {
		return new FormGroup<GetStatsUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStatsUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface GetStatsUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetStatsUsingPOSTReturnFormGroup() {
		return new FormGroup<GetStatsUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTextUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetTextUsingGETReturnData;
		message?: string | null;
	}
	export interface GetTextUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetTextUsingGETReturnFormGroup() {
		return new FormGroup<GetTextUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTextUsingGETReturnData {
		text?: string | null;
	}
	export interface GetTextUsingGETReturnDataFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateGetTextUsingGETReturnDataFormGroup() {
		return new FormGroup<GetTextUsingGETReturnDataFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTextUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: GetTextUsingPOSTReturnData;
		message?: string | null;
	}
	export interface GetTextUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGetTextUsingPOSTReturnFormGroup() {
		return new FormGroup<GetTextUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTextUsingPOSTReturnData {
		text?: string | null;
	}
	export interface GetTextUsingPOSTReturnDataFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateGetTextUsingPOSTReturnDataFormGroup() {
		return new FormGroup<GetTextUsingPOSTReturnDataFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAllGroupsUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListAllGroupsUsingGETReturnData;
		message?: string | null;
	}
	export interface ListAllGroupsUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListAllGroupsUsingGETReturnFormGroup() {
		return new FormGroup<ListAllGroupsUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAllGroupsUsingGETReturnData {
		groupIDs?: Array<string>;
	}
	export interface ListAllGroupsUsingGETReturnDataFormProperties {
	}
	export function CreateListAllGroupsUsingGETReturnDataFormGroup() {
		return new FormGroup<ListAllGroupsUsingGETReturnDataFormProperties>({
		});

	}

	export interface ListAllGroupsUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListAllGroupsUsingPOSTReturnData;
		message?: string | null;
	}
	export interface ListAllGroupsUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListAllGroupsUsingPOSTReturnFormGroup() {
		return new FormGroup<ListAllGroupsUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAllGroupsUsingPOSTReturnData {
		groupIDs?: Array<string>;
	}
	export interface ListAllGroupsUsingPOSTReturnDataFormProperties {
	}
	export function CreateListAllGroupsUsingPOSTReturnDataFormGroup() {
		return new FormGroup<ListAllGroupsUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface ListAllPadsUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListAllPadsUsingGETReturnData;
		message?: string | null;
	}
	export interface ListAllPadsUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListAllPadsUsingGETReturnFormGroup() {
		return new FormGroup<ListAllPadsUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAllPadsUsingGETReturnData {
		padIDs?: Array<string>;
	}
	export interface ListAllPadsUsingGETReturnDataFormProperties {
	}
	export function CreateListAllPadsUsingGETReturnDataFormGroup() {
		return new FormGroup<ListAllPadsUsingGETReturnDataFormProperties>({
		});

	}

	export interface ListAllPadsUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListAllPadsUsingPOSTReturnData;
		message?: string | null;
	}
	export interface ListAllPadsUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListAllPadsUsingPOSTReturnFormGroup() {
		return new FormGroup<ListAllPadsUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAllPadsUsingPOSTReturnData {
		padIDs?: Array<string>;
	}
	export interface ListAllPadsUsingPOSTReturnDataFormProperties {
	}
	export function CreateListAllPadsUsingPOSTReturnDataFormGroup() {
		return new FormGroup<ListAllPadsUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface ListAuthorsOfPadUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListAuthorsOfPadUsingGETReturnData;
		message?: string | null;
	}
	export interface ListAuthorsOfPadUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListAuthorsOfPadUsingGETReturnFormGroup() {
		return new FormGroup<ListAuthorsOfPadUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAuthorsOfPadUsingGETReturnData {
		authorIDs?: Array<string>;
	}
	export interface ListAuthorsOfPadUsingGETReturnDataFormProperties {
	}
	export function CreateListAuthorsOfPadUsingGETReturnDataFormGroup() {
		return new FormGroup<ListAuthorsOfPadUsingGETReturnDataFormProperties>({
		});

	}

	export interface ListAuthorsOfPadUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListAuthorsOfPadUsingPOSTReturnData;
		message?: string | null;
	}
	export interface ListAuthorsOfPadUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListAuthorsOfPadUsingPOSTReturnFormGroup() {
		return new FormGroup<ListAuthorsOfPadUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAuthorsOfPadUsingPOSTReturnData {
		authorIDs?: Array<string>;
	}
	export interface ListAuthorsOfPadUsingPOSTReturnDataFormProperties {
	}
	export function CreateListAuthorsOfPadUsingPOSTReturnDataFormGroup() {
		return new FormGroup<ListAuthorsOfPadUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface ListPadsUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListPadsUsingGETReturnData;
		message?: string | null;
	}
	export interface ListPadsUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListPadsUsingGETReturnFormGroup() {
		return new FormGroup<ListPadsUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPadsUsingGETReturnData {
		padIDs?: Array<string>;
	}
	export interface ListPadsUsingGETReturnDataFormProperties {
	}
	export function CreateListPadsUsingGETReturnDataFormGroup() {
		return new FormGroup<ListPadsUsingGETReturnDataFormProperties>({
		});

	}

	export interface ListPadsUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListPadsUsingPOSTReturnData;
		message?: string | null;
	}
	export interface ListPadsUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListPadsUsingPOSTReturnFormGroup() {
		return new FormGroup<ListPadsUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPadsUsingPOSTReturnData {
		padIDs?: Array<string>;
	}
	export interface ListPadsUsingPOSTReturnDataFormProperties {
	}
	export function CreateListPadsUsingPOSTReturnDataFormGroup() {
		return new FormGroup<ListPadsUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface ListPadsOfAuthorUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListPadsOfAuthorUsingGETReturnData;
		message?: string | null;
	}
	export interface ListPadsOfAuthorUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListPadsOfAuthorUsingGETReturnFormGroup() {
		return new FormGroup<ListPadsOfAuthorUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPadsOfAuthorUsingGETReturnData {
		padIDs?: Array<string>;
	}
	export interface ListPadsOfAuthorUsingGETReturnDataFormProperties {
	}
	export function CreateListPadsOfAuthorUsingGETReturnDataFormGroup() {
		return new FormGroup<ListPadsOfAuthorUsingGETReturnDataFormProperties>({
		});

	}

	export interface ListPadsOfAuthorUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListPadsOfAuthorUsingPOSTReturnData;
		message?: string | null;
	}
	export interface ListPadsOfAuthorUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListPadsOfAuthorUsingPOSTReturnFormGroup() {
		return new FormGroup<ListPadsOfAuthorUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPadsOfAuthorUsingPOSTReturnData {
		padIDs?: Array<string>;
	}
	export interface ListPadsOfAuthorUsingPOSTReturnDataFormProperties {
	}
	export function CreateListPadsOfAuthorUsingPOSTReturnDataFormGroup() {
		return new FormGroup<ListPadsOfAuthorUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface ListSavedRevisionsUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface ListSavedRevisionsUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListSavedRevisionsUsingGETReturnFormGroup() {
		return new FormGroup<ListSavedRevisionsUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSavedRevisionsUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface ListSavedRevisionsUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListSavedRevisionsUsingPOSTReturnFormGroup() {
		return new FormGroup<ListSavedRevisionsUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfAuthorUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListSessionsOfAuthorUsingGETReturnData;
		message?: string | null;
	}
	export interface ListSessionsOfAuthorUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsOfAuthorUsingGETReturnFormGroup() {
		return new FormGroup<ListSessionsOfAuthorUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfAuthorUsingGETReturnData {
		ListSessionsOfAuthorUsingGETReturnDataSessions?: Array<ListSessionsOfAuthorUsingGETReturnDataSessions>;
	}
	export interface ListSessionsOfAuthorUsingGETReturnDataFormProperties {
	}
	export function CreateListSessionsOfAuthorUsingGETReturnDataFormGroup() {
		return new FormGroup<ListSessionsOfAuthorUsingGETReturnDataFormProperties>({
		});

	}

	export interface ListSessionsOfAuthorUsingGETReturnDataSessions {
		authorID?: string | null;
		groupID?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil?: number | null;
	}
	export interface ListSessionsOfAuthorUsingGETReturnDataSessionsFormProperties {
		authorID: FormControl<string | null | undefined>,
		groupID: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateListSessionsOfAuthorUsingGETReturnDataSessionsFormGroup() {
		return new FormGroup<ListSessionsOfAuthorUsingGETReturnDataSessionsFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
			groupID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfAuthorUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListSessionsOfAuthorUsingPOSTReturnData;
		message?: string | null;
	}
	export interface ListSessionsOfAuthorUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsOfAuthorUsingPOSTReturnFormGroup() {
		return new FormGroup<ListSessionsOfAuthorUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfAuthorUsingPOSTReturnData {
		ListSessionsOfAuthorUsingPOSTReturnDataSessions?: Array<ListSessionsOfAuthorUsingPOSTReturnDataSessions>;
	}
	export interface ListSessionsOfAuthorUsingPOSTReturnDataFormProperties {
	}
	export function CreateListSessionsOfAuthorUsingPOSTReturnDataFormGroup() {
		return new FormGroup<ListSessionsOfAuthorUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface ListSessionsOfAuthorUsingPOSTReturnDataSessions {
		authorID?: string | null;
		groupID?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil?: number | null;
	}
	export interface ListSessionsOfAuthorUsingPOSTReturnDataSessionsFormProperties {
		authorID: FormControl<string | null | undefined>,
		groupID: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateListSessionsOfAuthorUsingPOSTReturnDataSessionsFormGroup() {
		return new FormGroup<ListSessionsOfAuthorUsingPOSTReturnDataSessionsFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
			groupID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfGroupUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListSessionsOfGroupUsingGETReturnData;
		message?: string | null;
	}
	export interface ListSessionsOfGroupUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsOfGroupUsingGETReturnFormGroup() {
		return new FormGroup<ListSessionsOfGroupUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfGroupUsingGETReturnData {
		ListSessionsOfGroupUsingGETReturnDataSessions?: Array<ListSessionsOfGroupUsingGETReturnDataSessions>;
	}
	export interface ListSessionsOfGroupUsingGETReturnDataFormProperties {
	}
	export function CreateListSessionsOfGroupUsingGETReturnDataFormGroup() {
		return new FormGroup<ListSessionsOfGroupUsingGETReturnDataFormProperties>({
		});

	}

	export interface ListSessionsOfGroupUsingGETReturnDataSessions {
		authorID?: string | null;
		groupID?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil?: number | null;
	}
	export interface ListSessionsOfGroupUsingGETReturnDataSessionsFormProperties {
		authorID: FormControl<string | null | undefined>,
		groupID: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateListSessionsOfGroupUsingGETReturnDataSessionsFormGroup() {
		return new FormGroup<ListSessionsOfGroupUsingGETReturnDataSessionsFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
			groupID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfGroupUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: ListSessionsOfGroupUsingPOSTReturnData;
		message?: string | null;
	}
	export interface ListSessionsOfGroupUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateListSessionsOfGroupUsingPOSTReturnFormGroup() {
		return new FormGroup<ListSessionsOfGroupUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSessionsOfGroupUsingPOSTReturnData {
		ListSessionsOfGroupUsingPOSTReturnDataSessions?: Array<ListSessionsOfGroupUsingPOSTReturnDataSessions>;
	}
	export interface ListSessionsOfGroupUsingPOSTReturnDataFormProperties {
	}
	export function CreateListSessionsOfGroupUsingPOSTReturnDataFormGroup() {
		return new FormGroup<ListSessionsOfGroupUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface ListSessionsOfGroupUsingPOSTReturnDataSessions {
		authorID?: string | null;
		groupID?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil?: number | null;
	}
	export interface ListSessionsOfGroupUsingPOSTReturnDataSessionsFormProperties {
		authorID: FormControl<string | null | undefined>,
		groupID: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateListSessionsOfGroupUsingPOSTReturnDataSessionsFormGroup() {
		return new FormGroup<ListSessionsOfGroupUsingPOSTReturnDataSessionsFormProperties>({
			authorID: new FormControl<string | null | undefined>(undefined),
			groupID: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MovePadUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface MovePadUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateMovePadUsingGETReturnFormGroup() {
		return new FormGroup<MovePadUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MovePadUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface MovePadUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateMovePadUsingPOSTReturnFormGroup() {
		return new FormGroup<MovePadUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PadUsersUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: PadUsersUsingGETReturnData;
		message?: string | null;
	}
	export interface PadUsersUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreatePadUsersUsingGETReturnFormGroup() {
		return new FormGroup<PadUsersUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PadUsersUsingGETReturnData {
		PadUsersUsingGETReturnDataPadUsers?: Array<PadUsersUsingGETReturnDataPadUsers>;
	}
	export interface PadUsersUsingGETReturnDataFormProperties {
	}
	export function CreatePadUsersUsingGETReturnDataFormGroup() {
		return new FormGroup<PadUsersUsingGETReturnDataFormProperties>({
		});

	}

	export interface PadUsersUsingGETReturnDataPadUsers {
		colorId?: string | null;
		id?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp?: number | null;
	}
	export interface PadUsersUsingGETReturnDataPadUsersFormProperties {
		colorId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreatePadUsersUsingGETReturnDataPadUsersFormGroup() {
		return new FormGroup<PadUsersUsingGETReturnDataPadUsersFormProperties>({
			colorId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PadUsersUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: PadUsersUsingPOSTReturnData;
		message?: string | null;
	}
	export interface PadUsersUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreatePadUsersUsingPOSTReturnFormGroup() {
		return new FormGroup<PadUsersUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PadUsersUsingPOSTReturnData {
		PadUsersUsingPOSTReturnDataPadUsers?: Array<PadUsersUsingPOSTReturnDataPadUsers>;
	}
	export interface PadUsersUsingPOSTReturnDataFormProperties {
	}
	export function CreatePadUsersUsingPOSTReturnDataFormGroup() {
		return new FormGroup<PadUsersUsingPOSTReturnDataFormProperties>({
		});

	}

	export interface PadUsersUsingPOSTReturnDataPadUsers {
		colorId?: string | null;
		id?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp?: number | null;
	}
	export interface PadUsersUsingPOSTReturnDataPadUsersFormProperties {
		colorId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreatePadUsersUsingPOSTReturnDataPadUsersFormGroup() {
		return new FormGroup<PadUsersUsingPOSTReturnDataPadUsersFormProperties>({
			colorId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PadUsersCountUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: PadUsersCountUsingGETReturnData;
		message?: string | null;
	}
	export interface PadUsersCountUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreatePadUsersCountUsingGETReturnFormGroup() {
		return new FormGroup<PadUsersCountUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PadUsersCountUsingGETReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		padUsersCount?: number | null;
	}
	export interface PadUsersCountUsingGETReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		padUsersCount: FormControl<number | null | undefined>,
	}
	export function CreatePadUsersCountUsingGETReturnDataFormGroup() {
		return new FormGroup<PadUsersCountUsingGETReturnDataFormProperties>({
			padUsersCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PadUsersCountUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: PadUsersCountUsingPOSTReturnData;
		message?: string | null;
	}
	export interface PadUsersCountUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreatePadUsersCountUsingPOSTReturnFormGroup() {
		return new FormGroup<PadUsersCountUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PadUsersCountUsingPOSTReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		padUsersCount?: number | null;
	}
	export interface PadUsersCountUsingPOSTReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		padUsersCount: FormControl<number | null | undefined>,
	}
	export function CreatePadUsersCountUsingPOSTReturnDataFormGroup() {
		return new FormGroup<PadUsersCountUsingPOSTReturnDataFormProperties>({
			padUsersCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RestoreRevisionUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface RestoreRevisionUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateRestoreRevisionUsingGETReturnFormGroup() {
		return new FormGroup<RestoreRevisionUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreRevisionUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface RestoreRevisionUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateRestoreRevisionUsingPOSTReturnFormGroup() {
		return new FormGroup<RestoreRevisionUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SaveRevisionUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SaveRevisionUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSaveRevisionUsingGETReturnFormGroup() {
		return new FormGroup<SaveRevisionUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SaveRevisionUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SaveRevisionUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSaveRevisionUsingPOSTReturnFormGroup() {
		return new FormGroup<SaveRevisionUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendClientsMessageUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SendClientsMessageUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSendClientsMessageUsingGETReturnFormGroup() {
		return new FormGroup<SendClientsMessageUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendClientsMessageUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SendClientsMessageUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSendClientsMessageUsingPOSTReturnFormGroup() {
		return new FormGroup<SendClientsMessageUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetHTMLUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SetHTMLUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSetHTMLUsingGETReturnFormGroup() {
		return new FormGroup<SetHTMLUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetHTMLUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SetHTMLUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSetHTMLUsingPOSTReturnFormGroup() {
		return new FormGroup<SetHTMLUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetPublicStatusUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SetPublicStatusUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSetPublicStatusUsingGETReturnFormGroup() {
		return new FormGroup<SetPublicStatusUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetPublicStatusUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SetPublicStatusUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSetPublicStatusUsingPOSTReturnFormGroup() {
		return new FormGroup<SetPublicStatusUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetTextUsingGETReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SetTextUsingGETReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSetTextUsingGETReturnFormGroup() {
		return new FormGroup<SetTextUsingGETReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetTextUsingPOSTReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		data?: string | null;
		message?: string | null;
	}
	export interface SetTextUsingPOSTReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		data: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSetTextUsingPOSTReturnFormGroup() {
		return new FormGroup<SetTextUsingPOSTReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

}

