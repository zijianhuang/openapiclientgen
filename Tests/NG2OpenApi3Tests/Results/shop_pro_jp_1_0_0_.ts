import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApplicationCharge {

		/** 課金ID */
		id?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** ポイント請求額(税抜) */
		point?: number | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface ApplicationChargeFormProperties {

		/** 課金ID */
		id: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** ポイント請求額(税抜) */
		point: FormControl<number | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateApplicationChargeFormGroup() {
		return new FormGroup<ApplicationChargeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			point: new FormControl<number | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartScriptTag {

		/** アカウントID */
		account_id?: string | null;

		/** スクリプトタグID */
		id?: number | null;

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** OAuthアプリケーションID */
		oauth_application_id?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface CartScriptTagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** OAuthアプリケーションID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateCartScriptTagFormGroup() {
		return new FormGroup<CartScriptTagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			integrity: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InlineScriptTag {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: InlineScriptTagDisplay_scope | null;

		/** インラインスクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** アプリID */
		oauth_application_id?: number | null;

		/** インラインスクリプト */
		script?: string | null;

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event?: InlineScriptTagTrigger_event | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface InlineScriptTagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<InlineScriptTagDisplay_scope | null | undefined>,

		/** インラインスクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** アプリID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** インラインスクリプト */
		script: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event: FormControl<InlineScriptTagTrigger_event | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateInlineScriptTagFormGroup() {
		return new FormGroup<InlineScriptTagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<InlineScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			trigger_event: new FormControl<InlineScriptTagTrigger_event | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InlineScriptTagDisplay_scope { all = 0, thanks_page = 1, cart = 2 }

	export enum InlineScriptTagTrigger_event { object_builded = 0 }

	export interface ScriptTag {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: ScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface ScriptTagFormProperties {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<ScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateScriptTagFormGroup() {
		return new FormGroup<ScriptTagFormProperties>({
			display_scope: new FormControl<ScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ScriptTagDisplay_scope { all = 0, shop = 1, thanks_page = 2, cart = 3 }

	export interface ShopScriptTag {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope?: ShopScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** OAuthアプリケーションID */
		oauth_application_id?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface ShopScriptTagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope: FormControl<ShopScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** OAuthアプリケーションID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateShopScriptTagFormGroup() {
		return new FormGroup<ShopScriptTagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<ShopScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			integrity: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ShopScriptTagDisplay_scope { shop = 0, thanks_page = 1 }

	export interface UsageCharge {

		/** 従量課金発生理由 */
		description?: string | null;

		/** 従量課金ID */
		id?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** ポイント請求額(税抜) */
		point?: number | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface UsageChargeFormProperties {

		/** 従量課金発生理由 */
		description: FormControl<string | null | undefined>,

		/** 従量課金ID */
		id: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** ポイント請求額(税抜) */
		point: FormControl<number | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateUsageChargeFormGroup() {
		return new FormGroup<UsageChargeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			point: new FormControl<number | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateScriptTagScriptTag {
		script_tag?: CreateScriptTagScriptTagScript_tag;
	}
	export interface CreateScriptTagScriptTagFormProperties {
	}
	export function CreateCreateScriptTagScriptTagFormGroup() {
		return new FormGroup<CreateScriptTagScriptTagFormProperties>({
		});

	}

	export interface CreateScriptTagScriptTagScript_tag {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: ScriptTagDisplay_scope | null;

		/** スクリプトURL */
		src?: string | null;
	}
	export interface CreateScriptTagScriptTagScript_tagFormProperties {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<ScriptTagDisplay_scope | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,
	}
	export function CreateCreateScriptTagScriptTagScript_tagFormGroup() {
		return new FormGroup<CreateScriptTagScriptTagScript_tagFormProperties>({
			display_scope: new FormControl<ScriptTagDisplay_scope | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateShopScriptTagScriptTag {
		script_tag?: CreateShopScriptTagScriptTagScript_tag;
	}
	export interface CreateShopScriptTagScriptTagFormProperties {
	}
	export function CreateCreateShopScriptTagScriptTagFormGroup() {
		return new FormGroup<CreateShopScriptTagScriptTagFormProperties>({
		});

	}

	export interface CreateShopScriptTagScriptTagScript_tag {

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope?: ShopScriptTagDisplay_scope | null;

		/**
		 * スクリプトのハッシュ値をBase64エンコードした値を設定します。この値はスクリプトタグのIntegrity属性値として利用されます。
		 * 詳しくは [サブリソース完全性 - Web セキュリティ | MDN](https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity) (外部サイト) をご覧ください。
		 * ※この値が正しく設定されない場合はブラウザがスクリプトの読み込みをブロックします。この場合、一般的なWebブラウザ(e.g. Google Chrome, Firefox)の開発者ツールのコンソールでエラーを確認できます。
		 */
		integrity?: string | null;

		/** スクリプトURL */
		src?: string | null;
	}
	export interface CreateShopScriptTagScriptTagScript_tagFormProperties {

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope: FormControl<ShopScriptTagDisplay_scope | null | undefined>,

		/**
		 * スクリプトのハッシュ値をBase64エンコードした値を設定します。この値はスクリプトタグのIntegrity属性値として利用されます。
		 * 詳しくは [サブリソース完全性 - Web セキュリティ | MDN](https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity) (外部サイト) をご覧ください。
		 * ※この値が正しく設定されない場合はブラウザがスクリプトの読み込みをブロックします。この場合、一般的なWebブラウザ(e.g. Google Chrome, Firefox)の開発者ツールのコンソールでエラーを確認できます。
		 */
		integrity: FormControl<string | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,
	}
	export function CreateCreateShopScriptTagScriptTagScript_tagFormGroup() {
		return new FormGroup<CreateShopScriptTagScriptTagScript_tagFormProperties>({
			display_scope: new FormControl<ShopScriptTagDisplay_scope | null | undefined>(undefined),
			integrity: new FormControl<string | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * アプリ内課金データの作成
		 * 「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。
		 * この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。
		 * ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。
		 * Post appstore/v1/application_charges.json
		 * @return {void} 
		 */
		PostApplicationCharge(requestBody: PostApplicationChargePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'appstore/v1/application_charges.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * アプリストアアプリのアンインストール
		 * このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
		 * このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
		 * 代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。
		 * アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。
		 * Delete appstore/v1/installation.json
		 * @return {DeleteInstallationReturn} アンインストール成功
		 */
		DeleteInstallation(): Observable<DeleteInstallationReturn> {
			return this.http.delete<DeleteInstallationReturn>(this.baseUri + 'appstore/v1/installation.json', {});
		}

		/**
		 * 従量課金データの作成
		 * アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
		 * ※無料お試し期間中のショップに対しては従量課金データを作成できません。
		 * Post appstore/v1/recurring_application_charges/{recurringApplicationChargeId}/usage_charges.json
		 * @param {string} recurringApplicationChargeId 課金契約ID
		 * @param {CreateUsageChargePostBody} requestBody 従量課金データ
		 * @return {void} 
		 */
		CreateUsageCharge(recurringApplicationChargeId: string, requestBody: CreateUsageChargePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'appstore/v1/recurring_application_charges/' + (recurringApplicationChargeId == null ? '' : encodeURIComponent(recurringApplicationChargeId)) + '/usage_charges.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * スクリプトタグの取得
		 * Get appstore/v1/script_tags.json
		 * @return {GetShopScriptTagsReturn} 
		 */
		GetShopScriptTags(): Observable<GetShopScriptTagsReturn> {
			return this.http.get<GetShopScriptTagsReturn>(this.baseUri + 'appstore/v1/script_tags.json', {});
		}

		/**
		 * スクリプトタグの作成
		 * Post appstore/v1/script_tags.json
		 * @param {CreateShopScriptTagScriptTag} requestBody 作成するスクリプトタグの情報
		 * @return {CreateShopScriptTagReturn} 
		 */
		CreateShopScriptTag(requestBody: CreateShopScriptTagScriptTag): Observable<CreateShopScriptTagReturn> {
			return this.http.post<CreateShopScriptTagReturn>(this.baseUri + 'appstore/v1/script_tags.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * スクリプトタグの削除
		 * Delete appstore/v1/script_tags/{scriptTagId}.json
		 * @param {number} scriptTagId スクリプトタグID
		 * @return {void} 
		 */
		DeleteScriptTag(scriptTagId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'appstore/v1/script_tags/' + scriptTagId + '.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * スクリプトタグの取得
		 * Get appstore/v1/script_tags/{scriptTagId}.json
		 * @param {number} scriptTagId スクリプトタグID
		 * @return {GetShopScriptTagReturn} 
		 */
		GetShopScriptTag(scriptTagId: number): Observable<GetShopScriptTagReturn> {
			return this.http.get<GetShopScriptTagReturn>(this.baseUri + 'appstore/v1/script_tags/' + scriptTagId + '.json', {});
		}

		/**
		 * スクリプトタグの更新
		 * Put appstore/v1/script_tags/{scriptTagId}.json
		 * @param {number} scriptTagId スクリプトタグID
		 * @param {CreateShopScriptTagScriptTag} requestBody 作成するスクリプトタグの情報
		 * @return {UpdateShopScriptTagReturn} 
		 */
		UpdateShopScriptTag(scriptTagId: number, requestBody: CreateShopScriptTagScriptTag): Observable<UpdateShopScriptTagReturn> {
			return this.http.put<UpdateShopScriptTagReturn>(this.baseUri + 'appstore/v1/script_tags/' + scriptTagId + '.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * インラインスクリプトタグの取得
		 * Get v1/inline_script_tags.json
		 * @return {GetInlineScriptTagsReturn} 
		 */
		GetInlineScriptTags(): Observable<GetInlineScriptTagsReturn> {
			return this.http.get<GetInlineScriptTagsReturn>(this.baseUri + 'v1/inline_script_tags.json', {});
		}

		/**
		 * インラインスクリプトタグの登録
		 * Post v1/inline_script_tags.json
		 * @param {CreateInlineScriptTagPostBody} requestBody 作成するインラインスクリプトタグの情報
		 * @return {void} 
		 */
		CreateInlineScriptTag(requestBody: CreateInlineScriptTagPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/inline_script_tags.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * インラインスクリプトタグの削除
		 * Delete v1/inline_script_tags/{inlineScriptTagId}.json
		 * @param {number} inlineScriptTagId インラインスクリプトタグID
		 * @return {void} 
		 */
		DeleteInlineScriptTag(inlineScriptTagId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/inline_script_tags/' + inlineScriptTagId + '.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * インラインスクリプトタグの取得
		 * Get v1/inline_script_tags/{inlineScriptTagId}.json
		 * @param {number} inlineScriptTagId インラインスクリプトタグID
		 * @return {GetInlineScriptTagReturn} 
		 */
		GetInlineScriptTag(inlineScriptTagId: number): Observable<GetInlineScriptTagReturn> {
			return this.http.get<GetInlineScriptTagReturn>(this.baseUri + 'v1/inline_script_tags/' + inlineScriptTagId + '.json', {});
		}

		/**
		 * インラインスクリプトタグの更新
		 * Put v1/inline_script_tags/{inlineScriptTagId}.json
		 * @param {number} inlineScriptTagId インラインスクリプトタグID
		 * @param {UpdateInlineScriptTagPutBody} requestBody 更新するスクリプトタグの情報
		 * @return {UpdateInlineScriptTagReturn} 
		 */
		UpdateInlineScriptTag(inlineScriptTagId: number, requestBody: UpdateInlineScriptTagPutBody): Observable<UpdateInlineScriptTagReturn> {
			return this.http.put<UpdateInlineScriptTagReturn>(this.baseUri + 'v1/inline_script_tags/' + inlineScriptTagId + '.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * スクリプトタグの取得
		 * Get v1/script_tags.json
		 * @return {GetScriptTagsReturn} 
		 */
		GetScriptTags(): Observable<GetScriptTagsReturn> {
			return this.http.get<GetScriptTagsReturn>(this.baseUri + 'v1/script_tags.json', {});
		}

		/**
		 * スクリプトタグの作成
		 * Post v1/script_tags.json
		 * @param {CreateScriptTagScriptTag} requestBody 作成するスクリプトタグの情報
		 * @return {CreateScriptTagReturn} 
		 */
		CreateScriptTag(requestBody: CreateScriptTagScriptTag): Observable<CreateScriptTagReturn> {
			return this.http.post<CreateScriptTagReturn>(this.baseUri + 'v1/script_tags.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * スクリプトタグの削除
		 * Delete v1/script_tags/{scriptTagId}.json
		 * @param {number} scriptTagId スクリプトタグID
		 * @return {void} 
		 */
		ScriptdeprecatedDeleteByScriptTagId(scriptTagId: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/script_tags/' + scriptTagId + '.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * スクリプトタグの取得
		 * Get v1/script_tags/{scriptTagId}.json
		 * @param {number} scriptTagId スクリプトタグID
		 * @return {GetScriptTagReturn} 
		 */
		GetScriptTag(scriptTagId: number): Observable<GetScriptTagReturn> {
			return this.http.get<GetScriptTagReturn>(this.baseUri + 'v1/script_tags/' + scriptTagId + '.json', {});
		}

		/**
		 * スクリプトタグの更新
		 * Put v1/script_tags/{scriptTagId}.json
		 * @param {number} scriptTagId スクリプトタグID
		 * @param {CreateScriptTagScriptTag} requestBody 作成するスクリプトタグの情報
		 * @return {UpdateScriptTagReturn} 
		 */
		UpdateScriptTag(scriptTagId: number, requestBody: CreateScriptTagScriptTag): Observable<UpdateScriptTagReturn> {
			return this.http.put<UpdateScriptTagReturn>(this.baseUri + 'v1/script_tags/' + scriptTagId + '.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface PostApplicationChargePostBody {
		application_charge?: PostApplicationChargePostBodyApplication_charge;
	}
	export interface PostApplicationChargePostBodyFormProperties {
	}
	export function CreatePostApplicationChargePostBodyFormGroup() {
		return new FormGroup<PostApplicationChargePostBodyFormProperties>({
		});

	}

	export interface PostApplicationChargePostBodyApplication_charge {

		/** アプリ内課金ID */
		application_charge_source_id?: string | null;
	}
	export interface PostApplicationChargePostBodyApplication_chargeFormProperties {

		/** アプリ内課金ID */
		application_charge_source_id: FormControl<string | null | undefined>,
	}
	export function CreatePostApplicationChargePostBodyApplication_chargeFormGroup() {
		return new FormGroup<PostApplicationChargePostBodyApplication_chargeFormProperties>({
			application_charge_source_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteInstallationReturn {

		/** アンインストールしたショップオーナーのアカウントID */
		account_id?: string | null;

		/** プラン課金ID */
		application_charge_source_id?: string | null;

		/** （買い切り以外の課金の場合）課金契約ID */
		recurring_application_charge_id?: string | null;

		/** アンインストール日時 */
		uninstalled_at?: number | null;

		/** （従量課金の場合）従量課金アンインストール情報 */
		usage_charge?: DeleteInstallationReturnUsage_charge;
	}
	export interface DeleteInstallationReturnFormProperties {

		/** アンインストールしたショップオーナーのアカウントID */
		account_id: FormControl<string | null | undefined>,

		/** プラン課金ID */
		application_charge_source_id: FormControl<string | null | undefined>,

		/** （買い切り以外の課金の場合）課金契約ID */
		recurring_application_charge_id: FormControl<string | null | undefined>,

		/** アンインストール日時 */
		uninstalled_at: FormControl<number | null | undefined>,
	}
	export function CreateDeleteInstallationReturnFormGroup() {
		return new FormGroup<DeleteInstallationReturnFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			application_charge_source_id: new FormControl<string | null | undefined>(undefined),
			recurring_application_charge_id: new FormControl<string | null | undefined>(undefined),
			uninstalled_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteInstallationReturnUsage_charge {

		/** アンインストール後に従量課金APIを利用いただくために必要な情報 */
		api_token?: string | null;

		/** ポイント締め日 */
		closing_on?: number | null;
	}
	export interface DeleteInstallationReturnUsage_chargeFormProperties {

		/** アンインストール後に従量課金APIを利用いただくために必要な情報 */
		api_token: FormControl<string | null | undefined>,

		/** ポイント締め日 */
		closing_on: FormControl<number | null | undefined>,
	}
	export function CreateDeleteInstallationReturnUsage_chargeFormGroup() {
		return new FormGroup<DeleteInstallationReturnUsage_chargeFormProperties>({
			api_token: new FormControl<string | null | undefined>(undefined),
			closing_on: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateUsageChargePostBody {
		usage_charge?: CreateUsageChargePostBodyUsage_charge;
	}
	export interface CreateUsageChargePostBodyFormProperties {
	}
	export function CreateCreateUsageChargePostBodyFormGroup() {
		return new FormGroup<CreateUsageChargePostBodyFormProperties>({
		});

	}

	export interface CreateUsageChargePostBodyUsage_charge {

		/**
		 * 従量課金の発生理由。使用可能文字は ASCII, JIS X 0208, JIS X 0201, JIS X 0212に限ります。（[デベロッパー](https://developer.shop-pro.jp) ページに掲載される各アプリの「従量課金」一覧で登録内容を確認できます。カラーミーショップ側がこのパラメータを参照して課金の内容を確認することがあります。）
		 * Required
		 * Max length: 50
		 */
		description: string;

		/**
		 * ポイント数（税抜）。100 円以上 100 万円以下が指定可能。このポイントに消費税を加算してショップオーナーに請求します。
		 * Required
		 */
		point: number;
	}
	export interface CreateUsageChargePostBodyUsage_chargeFormProperties {

		/**
		 * 従量課金の発生理由。使用可能文字は ASCII, JIS X 0208, JIS X 0201, JIS X 0212に限ります。（[デベロッパー](https://developer.shop-pro.jp) ページに掲載される各アプリの「従量課金」一覧で登録内容を確認できます。カラーミーショップ側がこのパラメータを参照して課金の内容を確認することがあります。）
		 * Required
		 * Max length: 50
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * ポイント数（税抜）。100 円以上 100 万円以下が指定可能。このポイントに消費税を加算してショップオーナーに請求します。
		 * Required
		 */
		point: FormControl<number | null | undefined>,
	}
	export function CreateCreateUsageChargePostBodyUsage_chargeFormGroup() {
		return new FormGroup<CreateUsageChargePostBodyUsage_chargeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(50)]),
			point: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetShopScriptTagsReturn {
		GetShopScriptTagsReturnScript_tags?: Array<GetShopScriptTagsReturnScript_tags>;
	}
	export interface GetShopScriptTagsReturnFormProperties {
	}
	export function CreateGetShopScriptTagsReturnFormGroup() {
		return new FormGroup<GetShopScriptTagsReturnFormProperties>({
		});

	}

	export interface GetShopScriptTagsReturnScript_tags {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope?: ShopScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** OAuthアプリケーションID */
		oauth_application_id?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface GetShopScriptTagsReturnScript_tagsFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope: FormControl<ShopScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** OAuthアプリケーションID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateGetShopScriptTagsReturnScript_tagsFormGroup() {
		return new FormGroup<GetShopScriptTagsReturnScript_tagsFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<ShopScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			integrity: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateShopScriptTagReturn {
		script_tag?: CreateShopScriptTagReturnScript_tag;
	}
	export interface CreateShopScriptTagReturnFormProperties {
	}
	export function CreateCreateShopScriptTagReturnFormGroup() {
		return new FormGroup<CreateShopScriptTagReturnFormProperties>({
		});

	}

	export interface CreateShopScriptTagReturnScript_tag {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope?: ShopScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** OAuthアプリケーションID */
		oauth_application_id?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface CreateShopScriptTagReturnScript_tagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope: FormControl<ShopScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** OAuthアプリケーションID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateCreateShopScriptTagReturnScript_tagFormGroup() {
		return new FormGroup<CreateShopScriptTagReturnScript_tagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<ShopScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			integrity: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetShopScriptTagReturn {
		script_tag?: GetShopScriptTagReturnScript_tag;
	}
	export interface GetShopScriptTagReturnFormProperties {
	}
	export function CreateGetShopScriptTagReturnFormGroup() {
		return new FormGroup<GetShopScriptTagReturnFormProperties>({
		});

	}

	export interface GetShopScriptTagReturnScript_tag {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope?: ShopScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** OAuthアプリケーションID */
		oauth_application_id?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface GetShopScriptTagReturnScript_tagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope: FormControl<ShopScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** OAuthアプリケーションID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateGetShopScriptTagReturnScript_tagFormGroup() {
		return new FormGroup<GetShopScriptTagReturnScript_tagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<ShopScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			integrity: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateShopScriptTagReturn {
		script_tag?: UpdateShopScriptTagReturnScript_tag;
	}
	export interface UpdateShopScriptTagReturnFormProperties {
	}
	export function CreateUpdateShopScriptTagReturnFormGroup() {
		return new FormGroup<UpdateShopScriptTagReturnFormProperties>({
		});

	}

	export interface UpdateShopScriptTagReturnScript_tag {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope?: ShopScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity?: string | null;

		/** 作成日時 */
		make_date?: number | null;

		/** OAuthアプリケーションID */
		oauth_application_id?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface UpdateShopScriptTagReturnScript_tagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * スクリプトを出力するページ
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 */
		display_scope: FormControl<ShopScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** スクリプトファイルのハッシュ値（script tagのintegrity属性） */
		integrity: FormControl<string | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** OAuthアプリケーションID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateUpdateShopScriptTagReturnScript_tagFormGroup() {
		return new FormGroup<UpdateShopScriptTagReturnScript_tagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<ShopScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			integrity: new FormControl<string | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetInlineScriptTagsReturn {
		GetInlineScriptTagsReturnInline_script_tags?: Array<GetInlineScriptTagsReturnInline_script_tags>;
	}
	export interface GetInlineScriptTagsReturnFormProperties {
	}
	export function CreateGetInlineScriptTagsReturnFormGroup() {
		return new FormGroup<GetInlineScriptTagsReturnFormProperties>({
		});

	}

	export interface GetInlineScriptTagsReturnInline_script_tags {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: InlineScriptTagDisplay_scope | null;

		/** インラインスクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** アプリID */
		oauth_application_id?: number | null;

		/** インラインスクリプト */
		script?: string | null;

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event?: InlineScriptTagTrigger_event | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface GetInlineScriptTagsReturnInline_script_tagsFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<InlineScriptTagDisplay_scope | null | undefined>,

		/** インラインスクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** アプリID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** インラインスクリプト */
		script: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event: FormControl<InlineScriptTagTrigger_event | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateGetInlineScriptTagsReturnInline_script_tagsFormGroup() {
		return new FormGroup<GetInlineScriptTagsReturnInline_script_tagsFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<InlineScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			trigger_event: new FormControl<InlineScriptTagTrigger_event | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateInlineScriptTagPostBody {
		inline_script_tag?: CreateInlineScriptTagPostBodyInline_script_tag;
	}
	export interface CreateInlineScriptTagPostBodyFormProperties {
	}
	export function CreateCreateInlineScriptTagPostBodyFormGroup() {
		return new FormGroup<CreateInlineScriptTagPostBodyFormProperties>({
		});

	}

	export interface CreateInlineScriptTagPostBodyInline_script_tag {

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: InlineScriptTagDisplay_scope | null;

		/** インラインスクリプト */
		script?: string | null;

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event?: InlineScriptTagTrigger_event | null;
	}
	export interface CreateInlineScriptTagPostBodyInline_script_tagFormProperties {

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<InlineScriptTagDisplay_scope | null | undefined>,

		/** インラインスクリプト */
		script: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event: FormControl<InlineScriptTagTrigger_event | null | undefined>,
	}
	export function CreateCreateInlineScriptTagPostBodyInline_script_tagFormGroup() {
		return new FormGroup<CreateInlineScriptTagPostBodyInline_script_tagFormProperties>({
			display_scope: new FormControl<InlineScriptTagDisplay_scope | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			trigger_event: new FormControl<InlineScriptTagTrigger_event | null | undefined>(undefined),
		});

	}

	export interface GetInlineScriptTagReturn {
		inline_script_tag?: GetInlineScriptTagReturnInline_script_tag;
	}
	export interface GetInlineScriptTagReturnFormProperties {
	}
	export function CreateGetInlineScriptTagReturnFormGroup() {
		return new FormGroup<GetInlineScriptTagReturnFormProperties>({
		});

	}

	export interface GetInlineScriptTagReturnInline_script_tag {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: InlineScriptTagDisplay_scope | null;

		/** インラインスクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** アプリID */
		oauth_application_id?: number | null;

		/** インラインスクリプト */
		script?: string | null;

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event?: InlineScriptTagTrigger_event | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface GetInlineScriptTagReturnInline_script_tagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<InlineScriptTagDisplay_scope | null | undefined>,

		/** インラインスクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** アプリID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** インラインスクリプト */
		script: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event: FormControl<InlineScriptTagTrigger_event | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateGetInlineScriptTagReturnInline_script_tagFormGroup() {
		return new FormGroup<GetInlineScriptTagReturnInline_script_tagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<InlineScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			trigger_event: new FormControl<InlineScriptTagTrigger_event | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateInlineScriptTagPutBody {
		inline_script_tag?: UpdateInlineScriptTagPutBodyInline_script_tag;
	}
	export interface UpdateInlineScriptTagPutBodyFormProperties {
	}
	export function CreateUpdateInlineScriptTagPutBodyFormGroup() {
		return new FormGroup<UpdateInlineScriptTagPutBodyFormProperties>({
		});

	}

	export interface UpdateInlineScriptTagPutBodyInline_script_tag {

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: InlineScriptTagDisplay_scope | null;

		/** インラインスクリプト */
		script?: string | null;

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event?: InlineScriptTagTrigger_event | null;
	}
	export interface UpdateInlineScriptTagPutBodyInline_script_tagFormProperties {

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<InlineScriptTagDisplay_scope | null | undefined>,

		/** インラインスクリプト */
		script: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event: FormControl<InlineScriptTagTrigger_event | null | undefined>,
	}
	export function CreateUpdateInlineScriptTagPutBodyInline_script_tagFormGroup() {
		return new FormGroup<UpdateInlineScriptTagPutBodyInline_script_tagFormProperties>({
			display_scope: new FormControl<InlineScriptTagDisplay_scope | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			trigger_event: new FormControl<InlineScriptTagTrigger_event | null | undefined>(undefined),
		});

	}

	export interface UpdateInlineScriptTagReturn {
		inline_script_tag?: UpdateInlineScriptTagReturnInline_script_tag;
	}
	export interface UpdateInlineScriptTagReturnFormProperties {
	}
	export function CreateUpdateInlineScriptTagReturnFormGroup() {
		return new FormGroup<UpdateInlineScriptTagReturnFormProperties>({
		});

	}

	export interface UpdateInlineScriptTagReturnInline_script_tag {

		/** アカウントID */
		account_id?: string | null;

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: InlineScriptTagDisplay_scope | null;

		/** インラインスクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** アプリID */
		oauth_application_id?: number | null;

		/** インラインスクリプト */
		script?: string | null;

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event?: InlineScriptTagTrigger_event | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface UpdateInlineScriptTagReturnInline_script_tagFormProperties {

		/** アカウントID */
		account_id: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを出力するページ。
		 * - `all`: カートの途中のページと注文完了ページの両方
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<InlineScriptTagDisplay_scope | null | undefined>,

		/** インラインスクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** アプリID */
		oauth_application_id: FormControl<number | null | undefined>,

		/** インラインスクリプト */
		script: FormControl<string | null | undefined>,

		/**
		 * インラインスクリプトを実行するタイミング。
		 * - `object_builded`: JSオブジェクトの作成が完了した時
		 */
		trigger_event: FormControl<InlineScriptTagTrigger_event | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateUpdateInlineScriptTagReturnInline_script_tagFormGroup() {
		return new FormGroup<UpdateInlineScriptTagReturnInline_script_tagFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			display_scope: new FormControl<InlineScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			oauth_application_id: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			trigger_event: new FormControl<InlineScriptTagTrigger_event | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetScriptTagsReturn {
		GetScriptTagsReturnScript_tags?: Array<GetScriptTagsReturnScript_tags>;
	}
	export interface GetScriptTagsReturnFormProperties {
	}
	export function CreateGetScriptTagsReturnFormGroup() {
		return new FormGroup<GetScriptTagsReturnFormProperties>({
		});

	}

	export interface GetScriptTagsReturnScript_tags {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: ScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface GetScriptTagsReturnScript_tagsFormProperties {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<ScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateGetScriptTagsReturnScript_tagsFormGroup() {
		return new FormGroup<GetScriptTagsReturnScript_tagsFormProperties>({
			display_scope: new FormControl<ScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateScriptTagReturn {
		script_tag?: CreateScriptTagReturnScript_tag;
	}
	export interface CreateScriptTagReturnFormProperties {
	}
	export function CreateCreateScriptTagReturnFormGroup() {
		return new FormGroup<CreateScriptTagReturnFormProperties>({
		});

	}

	export interface CreateScriptTagReturnScript_tag {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: ScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface CreateScriptTagReturnScript_tagFormProperties {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<ScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateCreateScriptTagReturnScript_tagFormGroup() {
		return new FormGroup<CreateScriptTagReturnScript_tagFormProperties>({
			display_scope: new FormControl<ScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetScriptTagReturn {
		script_tag?: GetScriptTagReturnScript_tag;
	}
	export interface GetScriptTagReturnFormProperties {
	}
	export function CreateGetScriptTagReturnFormGroup() {
		return new FormGroup<GetScriptTagReturnFormProperties>({
		});

	}

	export interface GetScriptTagReturnScript_tag {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: ScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface GetScriptTagReturnScript_tagFormProperties {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<ScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateGetScriptTagReturnScript_tagFormGroup() {
		return new FormGroup<GetScriptTagReturnScript_tagFormProperties>({
			display_scope: new FormControl<ScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateScriptTagReturn {
		script_tag?: UpdateScriptTagReturnScript_tag;
	}
	export interface UpdateScriptTagReturnFormProperties {
	}
	export function CreateUpdateScriptTagReturnFormGroup() {
		return new FormGroup<UpdateScriptTagReturnFormProperties>({
		});

	}

	export interface UpdateScriptTagReturnScript_tag {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope?: ScriptTagDisplay_scope | null;

		/** スクリプトタグID */
		id?: number | null;

		/** 作成日時 */
		make_date?: number | null;

		/** スクリプトURL */
		src?: string | null;

		/** 更新日時 */
		update_date?: number | null;
	}
	export interface UpdateScriptTagReturnScript_tagFormProperties {

		/**
		 * スクリプトを出力するページ。
		 * - `all`: ショップページと注文完了ページの両方
		 * - `shop`: ショップページ
		 * - `thanks_page`: 注文完了ページ
		 * - `cart`: カートの途中のページ
		 */
		display_scope: FormControl<ScriptTagDisplay_scope | null | undefined>,

		/** スクリプトタグID */
		id: FormControl<number | null | undefined>,

		/** 作成日時 */
		make_date: FormControl<number | null | undefined>,

		/** スクリプトURL */
		src: FormControl<string | null | undefined>,

		/** 更新日時 */
		update_date: FormControl<number | null | undefined>,
	}
	export function CreateUpdateScriptTagReturnScript_tagFormGroup() {
		return new FormGroup<UpdateScriptTagReturnScript_tagFormProperties>({
			display_scope: new FormControl<ScriptTagDisplay_scope | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			make_date: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			update_date: new FormControl<number | null | undefined>(undefined),
		});

	}

}

