import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CTASettings {
		background_color?: string | null;
		button_background_color?: string | null;
		button_color?: string | null;
		button_label?: string | null;
		button_link?: string | null;
		color?: string | null;
		description?: string | null;
		enabled?: boolean | null;
		title?: string | null;
	}
	export interface CTASettingsFormProperties {
		background_color: FormControl<string | null | undefined>,
		button_background_color: FormControl<string | null | undefined>,
		button_color: FormControl<string | null | undefined>,
		button_label: FormControl<string | null | undefined>,
		button_link: FormControl<string | null | undefined>,
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateCTASettingsFormGroup() {
		return new FormGroup<CTASettingsFormProperties>({
			background_color: new FormControl<string | null | undefined>(undefined),
			button_background_color: new FormControl<string | null | undefined>(undefined),
			button_color: new FormControl<string | null | undefined>(undefined),
			button_label: new FormControl<string | null | undefined>(undefined),
			button_link: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CardSettings {
		background_color?: string | null;
		border_color?: string | null;
		border_radius?: string | null;
		border_size?: string | null;
		color?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		columns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		description_lines?: number | null;
		icon_border_radius?: string | null;
		icon_shadow_enabled?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		icon_size?: number | null;
		shadow_enabled?: boolean | null;
		show_action?: boolean | null;
		show_badges?: boolean | null;
		show_category?: boolean | null;
		show_description?: boolean | null;
		style?: string | null;
	}
	export interface CardSettingsFormProperties {
		background_color: FormControl<string | null | undefined>,
		border_color: FormControl<string | null | undefined>,
		border_radius: FormControl<string | null | undefined>,
		border_size: FormControl<string | null | undefined>,
		color: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		columns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		description_lines: FormControl<number | null | undefined>,
		icon_border_radius: FormControl<string | null | undefined>,
		icon_shadow_enabled: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		icon_size: FormControl<number | null | undefined>,
		shadow_enabled: FormControl<boolean | null | undefined>,
		show_action: FormControl<boolean | null | undefined>,
		show_badges: FormControl<boolean | null | undefined>,
		show_category: FormControl<boolean | null | undefined>,
		show_description: FormControl<boolean | null | undefined>,
		style: FormControl<string | null | undefined>,
	}
	export function CreateCardSettingsFormGroup() {
		return new FormGroup<CardSettingsFormProperties>({
			background_color: new FormControl<string | null | undefined>(undefined),
			border_color: new FormControl<string | null | undefined>(undefined),
			border_radius: new FormControl<string | null | undefined>(undefined),
			border_size: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			columns: new FormControl<number | null | undefined>(undefined),
			description_lines: new FormControl<number | null | undefined>(undefined),
			icon_border_radius: new FormControl<string | null | undefined>(undefined),
			icon_shadow_enabled: new FormControl<boolean | null | undefined>(undefined),
			icon_size: new FormControl<number | null | undefined>(undefined),
			shadow_enabled: new FormControl<boolean | null | undefined>(undefined),
			show_action: new FormControl<boolean | null | undefined>(undefined),
			show_badges: new FormControl<boolean | null | undefined>(undefined),
			show_category: new FormControl<boolean | null | undefined>(undefined),
			show_description: new FormControl<boolean | null | undefined>(undefined),
			style: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Category {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		created_at?: Date | null;
		description?: string | null;
		id?: string | null;
		listing_description_text_template?: string | null;
		listing_features_text_template?: string | null;
		listing_pricing_text_template?: string | null;
		logo?: Logo;

		/** Required */
		name: string;

		/** Required */
		slug: string;
		translations?: Array<Translation>;
		updated_at?: Date | null;
	}
	export interface CategoryFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		listing_description_text_template: FormControl<string | null | undefined>,
		listing_features_text_template: FormControl<string | null | undefined>,
		listing_pricing_text_template: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			listing_description_text_template: new FormControl<string | null | undefined>(undefined),
			listing_features_text_template: new FormControl<string | null | undefined>(undefined),
			listing_pricing_text_template: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Logo {
		content_type?: string | null;
		id?: string | null;
		type?: LogoType | null;

		/** Required */
		url: string;
	}
	export interface LogoFormProperties {
		content_type: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<LogoType | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLogoFormGroup() {
		return new FormGroup<LogoFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LogoType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogoType { LOGO = 'LOGO', BANNER = 'BANNER', SCREENSHOT = 'SCREENSHOT' }

	export interface Translation {

		/** Required */
		key: string;

		/** Required */
		locale: string;
		value?: string | null;
	}
	export interface TranslationFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		locale: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTranslationFormGroup() {
		return new FormGroup<TranslationFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Collection {
		card_background_color?: string | null;
		card_background_image?: File;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		card_columns?: number | null;
		card_style?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		description?: string | null;
		hidden_from_homepage?: boolean | null;
		id?: string | null;
		logo?: File;

		/** Required */
		name: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_max_items_homepage?: number | null;

		/** Required */
		slug: string;
		translations?: Array<Translation>;

		/** Required */
		visible: boolean;
	}
	export interface CollectionFormProperties {
		card_background_color: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		card_columns: FormControl<number | null | undefined>,
		card_style: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		hidden_from_homepage: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		show_max_items_homepage: FormControl<number | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,

		/** Required */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			card_background_color: new FormControl<string | null | undefined>(undefined),
			card_columns: new FormControl<number | null | undefined>(undefined),
			card_style: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hidden_from_homepage: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequence: new FormControl<number | null | undefined>(undefined),
			show_max_items_homepage: new FormControl<number | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface File {
		content_type?: string | null;
		created_at?: Date | null;
		id?: string | null;
		type?: LogoType | null;
		updated_at?: Date | null;

		/** Required */
		url: string;
	}
	export interface FileFormProperties {
		content_type: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<LogoType | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LogoType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Contact {
		email?: string | null;
		first_name?: string | null;
		id?: string | null;
		last_name?: string | null;
		linked_in?: string | null;

		/** Required */
		name: string;
		role?: string | null;
		twitter?: string | null;
	}
	export interface ContactFormProperties {
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		linked_in: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		twitter: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			linked_in: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomSettings {
		css?: string | null;
		css_link?: string | null;
		domain?: string | null;
		html_footer?: string | null;
		html_nav?: string | null;
		java_script_link?: string | null;
	}
	export interface CustomSettingsFormProperties {
		css: FormControl<string | null | undefined>,
		css_link: FormControl<string | null | undefined>,
		domain: FormControl<string | null | undefined>,
		html_footer: FormControl<string | null | undefined>,
		html_nav: FormControl<string | null | undefined>,
		java_script_link: FormControl<string | null | undefined>,
	}
	export function CreateCustomSettingsFormGroup() {
		return new FormGroup<CustomSettingsFormProperties>({
			css: new FormControl<string | null | undefined>(undefined),
			css_link: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			html_footer: new FormControl<string | null | undefined>(undefined),
			html_nav: new FormControl<string | null | undefined>(undefined),
			java_script_link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ecosystem {
		about?: string | null;
		alternatives_background_color?: string | null;
		alternatives_color?: string | null;
		attribution?: boolean | null;
		body_background_color?: string | null;
		body_button_background_color?: string | null;
		body_button_color?: string | null;
		body_color?: string | null;
		body_link_color?: string | null;
		card_settings?: CardSettings;
		categories_count_badge?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		categories_show_max_items?: number | null;
		collections_count_badge?: boolean | null;
		collections_title?: string | null;
		create_link?: string | null;
		created_at?: Date | null;
		cta_settings?: CTASettings;
		custom_domain?: string | null;
		custom_settings?: CustomSettings;
		detail_pages_enabled?: boolean | null;
		footer_background_color?: string | null;
		footer_color?: string | null;
		google_site_verification_id?: string | null;
		hide_install_buttons?: boolean | null;
		home_page_collection_category_cards?: boolean | null;
		home_page_show_all_listings?: boolean | null;
		id?: string | null;
		installation_request_flow_enabled?: boolean | null;
		integration_settings?: IntegrationSettings;

		/** Required */
		is_published: boolean;
		lead_form_settings?: LeadFormSettings;
		listing_settings?: ListingSettings;
		masthead_settings?: MastheadSettings;
		menu_position?: ListingSettingsSidebar_position | null;
		menu_style?: EcosystemMenu_style | null;
		meta_tag_settings?: MetaTagSettings;

		/** Required */
		name: string;
		navigation_background_color?: string | null;
		navigation_color?: string | null;
		navigation_logo_post_fix?: string | null;
		navigation_mobile_menu_type?: EcosystemNavigation_mobile_menu_type | null;
		navigation_sticky?: boolean | null;
		primary_color?: string | null;
		privacy_link?: string | null;
		request_link?: string | null;
		shadow_page_description?: string | null;
		shadow_pages_enabled?: boolean | null;
		show_attribution_badge?: boolean | null;
		show_requested_listings?: boolean | null;

		/** Required */
		slug: string;
		terms_link?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_published_listings?: number | null;
		unify_application_id?: string | null;
		updated_at?: Date | null;
		utm_campaign?: string | null;
		website?: string | null;
		zaps_menu_title?: string | null;
		zaps_page_enabled?: boolean | null;
	}
	export interface EcosystemFormProperties {
		about: FormControl<string | null | undefined>,
		alternatives_background_color: FormControl<string | null | undefined>,
		alternatives_color: FormControl<string | null | undefined>,
		attribution: FormControl<boolean | null | undefined>,
		body_background_color: FormControl<string | null | undefined>,
		body_button_background_color: FormControl<string | null | undefined>,
		body_button_color: FormControl<string | null | undefined>,
		body_color: FormControl<string | null | undefined>,
		body_link_color: FormControl<string | null | undefined>,
		categories_count_badge: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		categories_show_max_items: FormControl<number | null | undefined>,
		collections_count_badge: FormControl<boolean | null | undefined>,
		collections_title: FormControl<string | null | undefined>,
		create_link: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		custom_domain: FormControl<string | null | undefined>,
		detail_pages_enabled: FormControl<boolean | null | undefined>,
		footer_background_color: FormControl<string | null | undefined>,
		footer_color: FormControl<string | null | undefined>,
		google_site_verification_id: FormControl<string | null | undefined>,
		hide_install_buttons: FormControl<boolean | null | undefined>,
		home_page_collection_category_cards: FormControl<boolean | null | undefined>,
		home_page_show_all_listings: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		installation_request_flow_enabled: FormControl<boolean | null | undefined>,

		/** Required */
		is_published: FormControl<boolean | null | undefined>,
		menu_position: FormControl<ListingSettingsSidebar_position | null | undefined>,
		menu_style: FormControl<EcosystemMenu_style | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		navigation_background_color: FormControl<string | null | undefined>,
		navigation_color: FormControl<string | null | undefined>,
		navigation_logo_post_fix: FormControl<string | null | undefined>,
		navigation_mobile_menu_type: FormControl<EcosystemNavigation_mobile_menu_type | null | undefined>,
		navigation_sticky: FormControl<boolean | null | undefined>,
		primary_color: FormControl<string | null | undefined>,
		privacy_link: FormControl<string | null | undefined>,
		request_link: FormControl<string | null | undefined>,
		shadow_page_description: FormControl<string | null | undefined>,
		shadow_pages_enabled: FormControl<boolean | null | undefined>,
		show_attribution_badge: FormControl<boolean | null | undefined>,
		show_requested_listings: FormControl<boolean | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,
		terms_link: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_published_listings: FormControl<number | null | undefined>,
		unify_application_id: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		utm_campaign: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
		zaps_menu_title: FormControl<string | null | undefined>,
		zaps_page_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEcosystemFormGroup() {
		return new FormGroup<EcosystemFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			alternatives_background_color: new FormControl<string | null | undefined>(undefined),
			alternatives_color: new FormControl<string | null | undefined>(undefined),
			attribution: new FormControl<boolean | null | undefined>(undefined),
			body_background_color: new FormControl<string | null | undefined>(undefined),
			body_button_background_color: new FormControl<string | null | undefined>(undefined),
			body_button_color: new FormControl<string | null | undefined>(undefined),
			body_color: new FormControl<string | null | undefined>(undefined),
			body_link_color: new FormControl<string | null | undefined>(undefined),
			categories_count_badge: new FormControl<boolean | null | undefined>(undefined),
			categories_show_max_items: new FormControl<number | null | undefined>(undefined),
			collections_count_badge: new FormControl<boolean | null | undefined>(undefined),
			collections_title: new FormControl<string | null | undefined>(undefined),
			create_link: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			custom_domain: new FormControl<string | null | undefined>(undefined),
			detail_pages_enabled: new FormControl<boolean | null | undefined>(undefined),
			footer_background_color: new FormControl<string | null | undefined>(undefined),
			footer_color: new FormControl<string | null | undefined>(undefined),
			google_site_verification_id: new FormControl<string | null | undefined>(undefined),
			hide_install_buttons: new FormControl<boolean | null | undefined>(undefined),
			home_page_collection_category_cards: new FormControl<boolean | null | undefined>(undefined),
			home_page_show_all_listings: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			installation_request_flow_enabled: new FormControl<boolean | null | undefined>(undefined),
			is_published: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			menu_position: new FormControl<ListingSettingsSidebar_position | null | undefined>(undefined),
			menu_style: new FormControl<EcosystemMenu_style | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			navigation_background_color: new FormControl<string | null | undefined>(undefined),
			navigation_color: new FormControl<string | null | undefined>(undefined),
			navigation_logo_post_fix: new FormControl<string | null | undefined>(undefined),
			navigation_mobile_menu_type: new FormControl<EcosystemNavigation_mobile_menu_type | null | undefined>(undefined),
			navigation_sticky: new FormControl<boolean | null | undefined>(undefined),
			primary_color: new FormControl<string | null | undefined>(undefined),
			privacy_link: new FormControl<string | null | undefined>(undefined),
			request_link: new FormControl<string | null | undefined>(undefined),
			shadow_page_description: new FormControl<string | null | undefined>(undefined),
			shadow_pages_enabled: new FormControl<boolean | null | undefined>(undefined),
			show_attribution_badge: new FormControl<boolean | null | undefined>(undefined),
			show_requested_listings: new FormControl<boolean | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			terms_link: new FormControl<string | null | undefined>(undefined),
			total_published_listings: new FormControl<number | null | undefined>(undefined),
			unify_application_id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			utm_campaign: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			zaps_menu_title: new FormControl<string | null | undefined>(undefined),
			zaps_page_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IntegrationSettings {
		albacross_id?: string | null;
		automate_enabled?: boolean | null;
		blendr_enabled?: boolean | null;
		combidesk_enabled?: boolean | null;
		crisp_id?: string | null;
		drift_id?: string | null;
		google_analytics_id?: string | null;
		google_tag_manager_id?: string | null;
		heap_id?: string | null;
		hubspot_portal_id?: string | null;
		integromat_enabled?: boolean | null;
		intercom_app_id?: string | null;
		iubenda_cookie_policy_id?: string | null;
		iubenda_site_id?: string | null;
		journy_io_domain?: string | null;
		journy_io_id?: string | null;
		livechat_id?: string | null;
		metomic_id?: string | null;
		microsoft_flow_enabled?: boolean | null;
		microsoft_flow_id?: string | null;
		onetrust_id?: string | null;
		piesync_enabled?: boolean | null;
		segment_enabled?: boolean | null;
		segment_id?: string | null;
		tray_io_enabled?: boolean | null;
		zapier_beta_link?: string | null;
		zapier_enabled?: boolean | null;
		zapier_id?: string | null;
	}
	export interface IntegrationSettingsFormProperties {
		albacross_id: FormControl<string | null | undefined>,
		automate_enabled: FormControl<boolean | null | undefined>,
		blendr_enabled: FormControl<boolean | null | undefined>,
		combidesk_enabled: FormControl<boolean | null | undefined>,
		crisp_id: FormControl<string | null | undefined>,
		drift_id: FormControl<string | null | undefined>,
		google_analytics_id: FormControl<string | null | undefined>,
		google_tag_manager_id: FormControl<string | null | undefined>,
		heap_id: FormControl<string | null | undefined>,
		hubspot_portal_id: FormControl<string | null | undefined>,
		integromat_enabled: FormControl<boolean | null | undefined>,
		intercom_app_id: FormControl<string | null | undefined>,
		iubenda_cookie_policy_id: FormControl<string | null | undefined>,
		iubenda_site_id: FormControl<string | null | undefined>,
		journy_io_domain: FormControl<string | null | undefined>,
		journy_io_id: FormControl<string | null | undefined>,
		livechat_id: FormControl<string | null | undefined>,
		metomic_id: FormControl<string | null | undefined>,
		microsoft_flow_enabled: FormControl<boolean | null | undefined>,
		microsoft_flow_id: FormControl<string | null | undefined>,
		onetrust_id: FormControl<string | null | undefined>,
		piesync_enabled: FormControl<boolean | null | undefined>,
		segment_enabled: FormControl<boolean | null | undefined>,
		segment_id: FormControl<string | null | undefined>,
		tray_io_enabled: FormControl<boolean | null | undefined>,
		zapier_beta_link: FormControl<string | null | undefined>,
		zapier_enabled: FormControl<boolean | null | undefined>,
		zapier_id: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationSettingsFormGroup() {
		return new FormGroup<IntegrationSettingsFormProperties>({
			albacross_id: new FormControl<string | null | undefined>(undefined),
			automate_enabled: new FormControl<boolean | null | undefined>(undefined),
			blendr_enabled: new FormControl<boolean | null | undefined>(undefined),
			combidesk_enabled: new FormControl<boolean | null | undefined>(undefined),
			crisp_id: new FormControl<string | null | undefined>(undefined),
			drift_id: new FormControl<string | null | undefined>(undefined),
			google_analytics_id: new FormControl<string | null | undefined>(undefined),
			google_tag_manager_id: new FormControl<string | null | undefined>(undefined),
			heap_id: new FormControl<string | null | undefined>(undefined),
			hubspot_portal_id: new FormControl<string | null | undefined>(undefined),
			integromat_enabled: new FormControl<boolean | null | undefined>(undefined),
			intercom_app_id: new FormControl<string | null | undefined>(undefined),
			iubenda_cookie_policy_id: new FormControl<string | null | undefined>(undefined),
			iubenda_site_id: new FormControl<string | null | undefined>(undefined),
			journy_io_domain: new FormControl<string | null | undefined>(undefined),
			journy_io_id: new FormControl<string | null | undefined>(undefined),
			livechat_id: new FormControl<string | null | undefined>(undefined),
			metomic_id: new FormControl<string | null | undefined>(undefined),
			microsoft_flow_enabled: new FormControl<boolean | null | undefined>(undefined),
			microsoft_flow_id: new FormControl<string | null | undefined>(undefined),
			onetrust_id: new FormControl<string | null | undefined>(undefined),
			piesync_enabled: new FormControl<boolean | null | undefined>(undefined),
			segment_enabled: new FormControl<boolean | null | undefined>(undefined),
			segment_id: new FormControl<string | null | undefined>(undefined),
			tray_io_enabled: new FormControl<boolean | null | undefined>(undefined),
			zapier_beta_link: new FormControl<string | null | undefined>(undefined),
			zapier_enabled: new FormControl<boolean | null | undefined>(undefined),
			zapier_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LeadFormSettings {
		capture_form_enabled?: boolean | null;
		first_name_field_enabled?: boolean | null;
		first_name_field_required?: boolean | null;
		integration_enabled?: boolean | null;
		last_name_field_enabled?: boolean | null;
		last_name_field_required?: boolean | null;
		telephone_field_enabled?: boolean | null;
		telephone_field_required?: boolean | null;
		work_email_validation?: boolean | null;
	}
	export interface LeadFormSettingsFormProperties {
		capture_form_enabled: FormControl<boolean | null | undefined>,
		first_name_field_enabled: FormControl<boolean | null | undefined>,
		first_name_field_required: FormControl<boolean | null | undefined>,
		integration_enabled: FormControl<boolean | null | undefined>,
		last_name_field_enabled: FormControl<boolean | null | undefined>,
		last_name_field_required: FormControl<boolean | null | undefined>,
		telephone_field_enabled: FormControl<boolean | null | undefined>,
		telephone_field_required: FormControl<boolean | null | undefined>,
		work_email_validation: FormControl<boolean | null | undefined>,
	}
	export function CreateLeadFormSettingsFormGroup() {
		return new FormGroup<LeadFormSettingsFormProperties>({
			capture_form_enabled: new FormControl<boolean | null | undefined>(undefined),
			first_name_field_enabled: new FormControl<boolean | null | undefined>(undefined),
			first_name_field_required: new FormControl<boolean | null | undefined>(undefined),
			integration_enabled: new FormControl<boolean | null | undefined>(undefined),
			last_name_field_enabled: new FormControl<boolean | null | undefined>(undefined),
			last_name_field_required: new FormControl<boolean | null | undefined>(undefined),
			telephone_field_enabled: new FormControl<boolean | null | undefined>(undefined),
			telephone_field_required: new FormControl<boolean | null | undefined>(undefined),
			work_email_validation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListingSettings {
		description_text_template?: string | null;
		description_title?: string | null;
		features_text_template?: string | null;
		features_title?: string | null;
		install_button_label?: string | null;
		name_postfix?: string | null;
		naming?: ListingSettingsNaming | null;
		native_integration_link?: string | null;
		pricing_disabled?: boolean | null;
		pricing_text_template?: string | null;
		pricing_title?: string | null;
		sidebar_position?: ListingSettingsSidebar_position | null;
	}
	export interface ListingSettingsFormProperties {
		description_text_template: FormControl<string | null | undefined>,
		description_title: FormControl<string | null | undefined>,
		features_text_template: FormControl<string | null | undefined>,
		features_title: FormControl<string | null | undefined>,
		install_button_label: FormControl<string | null | undefined>,
		name_postfix: FormControl<string | null | undefined>,
		naming: FormControl<ListingSettingsNaming | null | undefined>,
		native_integration_link: FormControl<string | null | undefined>,
		pricing_disabled: FormControl<boolean | null | undefined>,
		pricing_text_template: FormControl<string | null | undefined>,
		pricing_title: FormControl<string | null | undefined>,
		sidebar_position: FormControl<ListingSettingsSidebar_position | null | undefined>,
	}
	export function CreateListingSettingsFormGroup() {
		return new FormGroup<ListingSettingsFormProperties>({
			description_text_template: new FormControl<string | null | undefined>(undefined),
			description_title: new FormControl<string | null | undefined>(undefined),
			features_text_template: new FormControl<string | null | undefined>(undefined),
			features_title: new FormControl<string | null | undefined>(undefined),
			install_button_label: new FormControl<string | null | undefined>(undefined),
			name_postfix: new FormControl<string | null | undefined>(undefined),
			naming: new FormControl<ListingSettingsNaming | null | undefined>(undefined),
			native_integration_link: new FormControl<string | null | undefined>(undefined),
			pricing_disabled: new FormControl<boolean | null | undefined>(undefined),
			pricing_text_template: new FormControl<string | null | undefined>(undefined),
			pricing_title: new FormControl<string | null | undefined>(undefined),
			sidebar_position: new FormControl<ListingSettingsSidebar_position | null | undefined>(undefined),
		});

	}

	export enum ListingSettingsNaming { LISTING = 'LISTING', LISTINGS = 'LISTINGS', INTEGRATIONS = 'INTEGRATIONS', APPS = 'APPS', CONNECTORS = 'CONNECTORS', DATASOURCES = 'DATASOURCES', ADDONS = 'ADDONS', PLUGINS = 'PLUGINS', PARTNERS = 'PARTNERS', CHANNELS = 'CHANNELS', CONNECTIONS = 'CONNECTIONS', EXTENSIONS = 'EXTENSIONS' }

	export enum ListingSettingsSidebar_position { TOP = 'TOP', LEFT = 'LEFT', RIGHT = 'RIGHT', HIDDEN = 'HIDDEN' }

	export interface MastheadSettings {
		background?: string | null;
		background_color?: string | null;
		color?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		columns?: number | null;
		description?: string | null;
		title?: string | null;
	}
	export interface MastheadSettingsFormProperties {
		background: FormControl<string | null | undefined>,
		background_color: FormControl<string | null | undefined>,
		color: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		columns: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateMastheadSettingsFormGroup() {
		return new FormGroup<MastheadSettingsFormProperties>({
			background: new FormControl<string | null | undefined>(undefined),
			background_color: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			columns: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EcosystemMenu_style { LIST = 'LIST', PILL = 'PILL', FILTER = 'FILTER' }

	export interface MetaTagSettings {
		description?: string | null;
		description_category_page?: string | null;
		description_collection_page?: string | null;
		description_listing_page?: string | null;
		keywords?: string | null;
		title?: string | null;
		title_postfix?: string | null;
	}
	export interface MetaTagSettingsFormProperties {
		description: FormControl<string | null | undefined>,
		description_category_page: FormControl<string | null | undefined>,
		description_collection_page: FormControl<string | null | undefined>,
		description_listing_page: FormControl<string | null | undefined>,
		keywords: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		title_postfix: FormControl<string | null | undefined>,
	}
	export function CreateMetaTagSettingsFormGroup() {
		return new FormGroup<MetaTagSettingsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			description_category_page: new FormControl<string | null | undefined>(undefined),
			description_collection_page: new FormControl<string | null | undefined>(undefined),
			description_listing_page: new FormControl<string | null | undefined>(undefined),
			keywords: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			title_postfix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EcosystemNavigation_mobile_menu_type { ICON = 'ICON', TEXT = 'TEXT' }

	export interface GetCategoriesResponse {

		/** Required */
		data: Array<Category>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetCategoriesResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCategoriesResponseFormGroup() {
		return new FormGroup<GetCategoriesResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to navigate to previous or next pages through the API */
	export interface Links {

		/**
		 * Link to navigate to the current page through the API
		 * Required
		 */
		current: string;

		/** Link to navigate to the previous page through the API */
		next?: string | null;

		/** Link to navigate to the previous page through the API */
		previous?: string | null;
	}

	/** Links to navigate to previous or next pages through the API */
	export interface LinksFormProperties {

		/**
		 * Link to navigate to the current page through the API
		 * Required
		 */
		current: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		next: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			current: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response metadata */
	export interface Meta {

		/** Cursors to navigate to previous or next pages through the API */
		cursors?: MetaCursors;

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			items_on_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetaCursors {

		/** Cursor to navigate to the current page of results through the API */
		current?: string | null;

		/** Cursor to navigate to the next page of results through the API */
		next?: string | null;

		/** Cursor to navigate to the previous page of results through the API */
		previous?: string | null;
	}
	export interface MetaCursorsFormProperties {

		/** Cursor to navigate to the current page of results through the API */
		current: FormControl<string | null | undefined>,

		/** Cursor to navigate to the next page of results through the API */
		next: FormControl<string | null | undefined>,

		/** Cursor to navigate to the previous page of results through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateMetaCursorsFormGroup() {
		return new FormGroup<MetaCursorsFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCategoryResponse {

		/** Required */
		data: Category;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetCategoryResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCategoryResponseFormGroup() {
		return new FormGroup<GetCategoryResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCollectionResponse {

		/** Required */
		data: Collection;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetCollectionResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCollectionResponseFormGroup() {
		return new FormGroup<GetCollectionResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCollectionsResponse {

		/** Required */
		data: Array<Collection>;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetCollectionsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetCollectionsResponseFormGroup() {
		return new FormGroup<GetCollectionsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEcosystemResponse {

		/** Required */
		data: Ecosystem;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetEcosystemResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetEcosystemResponseFormGroup() {
		return new FormGroup<GetEcosystemResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetListingResponse {

		/** Required */
		data: Listing;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetListingResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetListingResponseFormGroup() {
		return new FormGroup<GetListingResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Listing {
		automate_id?: string | null;
		blendr_id?: string | null;
		card_background_color?: string | null;
		card_background_image?: File;
		categories?: Array<Category>;
		cloud_service_id?: string | null;
		collections?: Array<Collection>;
		combidesk_id?: string | null;
		created_at?: Date | null;
		description?: string | null;
		detail_page_disabled?: boolean | null;
		external_id?: string | null;
		features?: string | null;
		id?: string | null;
		integromat_id?: string | null;
		logo?: Logo;
		media?: Array<Media>;
		meta_tag_description?: string | null;
		meta_tag_keywords?: string | null;
		meta_tag_title?: string | null;
		microsoft_flow_id?: string | null;

		/** Required */
		name: string;
		native_integration?: boolean | null;
		native_integration_link?: string | null;
		partner?: Partner;
		piesync_id?: string | null;
		pricing?: string | null;
		products?: Array<Product>;
		published?: boolean | null;
		published_at?: Date | null;
		screenshots?: Array<Screenshot>;
		segment_id?: string | null;

		/** Required */
		slug: string;
		sticky?: boolean | null;
		tag_line?: string | null;
		third_party_integration?: boolean | null;
		third_party_integration_link?: string | null;
		translations?: Array<Translation>;
		tray_io_id?: string | null;
		unify_connector_id?: string | null;
		upcoming?: boolean | null;
		updated_at?: Date | null;
		zapier_id?: string | null;
	}
	export interface ListingFormProperties {
		automate_id: FormControl<string | null | undefined>,
		blendr_id: FormControl<string | null | undefined>,
		card_background_color: FormControl<string | null | undefined>,
		cloud_service_id: FormControl<string | null | undefined>,
		combidesk_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		detail_page_disabled: FormControl<boolean | null | undefined>,
		external_id: FormControl<string | null | undefined>,
		features: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		integromat_id: FormControl<string | null | undefined>,
		meta_tag_description: FormControl<string | null | undefined>,
		meta_tag_keywords: FormControl<string | null | undefined>,
		meta_tag_title: FormControl<string | null | undefined>,
		microsoft_flow_id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		native_integration: FormControl<boolean | null | undefined>,
		native_integration_link: FormControl<string | null | undefined>,
		piesync_id: FormControl<string | null | undefined>,
		pricing: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		published_at: FormControl<Date | null | undefined>,
		segment_id: FormControl<string | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,
		sticky: FormControl<boolean | null | undefined>,
		tag_line: FormControl<string | null | undefined>,
		third_party_integration: FormControl<boolean | null | undefined>,
		third_party_integration_link: FormControl<string | null | undefined>,
		tray_io_id: FormControl<string | null | undefined>,
		unify_connector_id: FormControl<string | null | undefined>,
		upcoming: FormControl<boolean | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		zapier_id: FormControl<string | null | undefined>,
	}
	export function CreateListingFormGroup() {
		return new FormGroup<ListingFormProperties>({
			automate_id: new FormControl<string | null | undefined>(undefined),
			blendr_id: new FormControl<string | null | undefined>(undefined),
			card_background_color: new FormControl<string | null | undefined>(undefined),
			cloud_service_id: new FormControl<string | null | undefined>(undefined),
			combidesk_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			detail_page_disabled: new FormControl<boolean | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			integromat_id: new FormControl<string | null | undefined>(undefined),
			meta_tag_description: new FormControl<string | null | undefined>(undefined),
			meta_tag_keywords: new FormControl<string | null | undefined>(undefined),
			meta_tag_title: new FormControl<string | null | undefined>(undefined),
			microsoft_flow_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			native_integration: new FormControl<boolean | null | undefined>(undefined),
			native_integration_link: new FormControl<string | null | undefined>(undefined),
			piesync_id: new FormControl<string | null | undefined>(undefined),
			pricing: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			published_at: new FormControl<Date | null | undefined>(undefined),
			segment_id: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sticky: new FormControl<boolean | null | undefined>(undefined),
			tag_line: new FormControl<string | null | undefined>(undefined),
			third_party_integration: new FormControl<boolean | null | undefined>(undefined),
			third_party_integration_link: new FormControl<string | null | undefined>(undefined),
			tray_io_id: new FormControl<string | null | undefined>(undefined),
			unify_connector_id: new FormControl<string | null | undefined>(undefined),
			upcoming: new FormControl<boolean | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			zapier_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media {
		caption?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence?: number | null;
		translations?: Array<Translation>;
		type?: MediaType | null;

		/** Required */
		url: string;
	}
	export interface MediaFormProperties {
		caption: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence: FormControl<number | null | undefined>,
		type: FormControl<MediaType | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<MediaType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MediaType { SCREENSHOT = 'SCREENSHOT', VIDEO = 'VIDEO' }

	export interface Partner {

		/** Required */
		company: string;
		contacts?: Array<Contact>;
		created_at?: Date | null;
		icon?: File;
		id?: string | null;
		listed?: string | null;
		twitter?: string | null;
		updated_at?: Date | null;
		website?: string | null;
	}
	export interface PartnerFormProperties {

		/** Required */
		company: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		listed: FormControl<string | null | undefined>,
		twitter: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreatePartnerFormGroup() {
		return new FormGroup<PartnerFormProperties>({
			company: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			listed: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Product {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		description?: string | null;
		id?: string | null;
		logo?: File;

		/** Required */
		name: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence?: number | null;

		/** Required */
		slug: string;
		translations?: Array<Translation>;

		/** Required */
		visible: boolean;
	}
	export interface ProductFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence: FormControl<number | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,

		/** Required */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequence: new FormControl<number | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Screenshot {
		caption?: string | null;
		file?: File;
		id?: string | null;
		translations?: Array<Translation>;
	}
	export interface ScreenshotFormProperties {
		caption: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateScreenshotFormGroup() {
		return new FormGroup<ScreenshotFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListingsResponse {

		/** Required */
		data: Array<Listing>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetListingsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetListingsResponseFormGroup() {
		return new FormGroup<GetListingsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductResponse {

		/** Required */
		data: Product;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetProductResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetProductResponseFormGroup() {
		return new FormGroup<GetProductResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductsResponse {

		/** Required */
		data: Array<Product>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetProductsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetProductsResponseFormGroup() {
		return new FormGroup<GetProductsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get ecosystem
		 * Get ecosystem
		 * Get ecosystems/{ecosystem_id}
		 * @return {GetEcosystemResponse} Ecosystems
		 */
		EcosystemsOne(ecosystem_id: string): Observable<GetEcosystemResponse> {
			return this.http.get<GetEcosystemResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)), {});
		}

		/**
		 * List categories
		 * List categories
		 * Get ecosystems/{ecosystem_id}/categories
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of records to return
		 *     Minimum: 1    Maximum: 200
		 * @return {GetCategoriesResponse} Categories
		 */
		CategoriesAll(ecosystem_id: string, cursor: string | null | undefined, limit: number | null | undefined): Observable<GetCategoriesResponse> {
			return this.http.get<GetCategoriesResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/categories&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}

		/**
		 * Get category
		 * Get category
		 * Get ecosystems/{ecosystem_id}/categories/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @return {GetCategoryResponse} Category
		 */
		CategoriesOne(ecosystem_id: string, id: string): Observable<GetCategoryResponse> {
			return this.http.get<GetCategoryResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/categories/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List category listings
		 * List category listings
		 * Get ecosystems/{ecosystem_id}/categories/{id}/listings
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of records to return
		 *     Minimum: 1    Maximum: 200
		 * @return {GetListingsResponse} Listings
		 */
		CategoryListingsAll(ecosystem_id: string, id: string, cursor: string | null | undefined, limit: number | null | undefined): Observable<GetListingsResponse> {
			return this.http.get<GetListingsResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/categories/' + (id == null ? '' : encodeURIComponent(id)) + '/listings&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}

		/**
		 * List collections
		 * List collections
		 * Get ecosystems/{ecosystem_id}/collections
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of records to return
		 *     Minimum: 1    Maximum: 200
		 * @return {GetCollectionsResponse} Collections
		 */
		CollectionsAll(ecosystem_id: string, cursor: string | null | undefined, limit: number | null | undefined): Observable<GetCollectionsResponse> {
			return this.http.get<GetCollectionsResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/collections&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}

		/**
		 * Get collection
		 * Get collection
		 * Get ecosystems/{ecosystem_id}/collections/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @return {GetCollectionResponse} Collection
		 */
		CollectionsOne(ecosystem_id: string, id: string): Observable<GetCollectionResponse> {
			return this.http.get<GetCollectionResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/collections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List collection listings
		 * List collection listings
		 * Get ecosystems/{ecosystem_id}/collections/{id}/listings
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of records to return
		 *     Minimum: 1    Maximum: 200
		 * @return {GetListingsResponse} Listings
		 */
		CollectionListingsAll(ecosystem_id: string, id: string, cursor: string | null | undefined, limit: number | null | undefined): Observable<GetListingsResponse> {
			return this.http.get<GetListingsResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/collections/' + (id == null ? '' : encodeURIComponent(id)) + '/listings&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}

		/**
		 * List listings
		 * List listings
		 * Get ecosystems/{ecosystem_id}/listings
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of records to return
		 *     Minimum: 1    Maximum: 200
		 * @param {string} external_id Filter on external_id
		 * @return {GetListingsResponse} Listings
		 */
		ListingsAll(ecosystem_id: string, cursor: string | null | undefined, limit: number | null | undefined, external_id: string | null | undefined): Observable<GetListingsResponse> {
			return this.http.get<GetListingsResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/listings&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&external_id=' + (external_id == null ? '' : encodeURIComponent(external_id)), {});
		}

		/**
		 * Get listing
		 * Get listing
		 * Get ecosystems/{ecosystem_id}/listings/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @return {GetListingResponse} Listing
		 */
		ListingsOne(ecosystem_id: string, id: string): Observable<GetListingResponse> {
			return this.http.get<GetListingResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/listings/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List products
		 * List products
		 * Get ecosystems/{ecosystem_id}/products
		 * @return {GetProductsResponse} Products
		 */
		ProductsAll(ecosystem_id: string): Observable<GetProductsResponse> {
			return this.http.get<GetProductsResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/products', {});
		}

		/**
		 * Get product
		 * Get product
		 * Get ecosystems/{ecosystem_id}/products/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @return {GetProductResponse} Product
		 */
		ProductsOne(ecosystem_id: string, id: string): Observable<GetProductResponse> {
			return this.http.get<GetProductResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/products/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List product listings
		 * List product listings
		 * Get ecosystems/{ecosystem_id}/products/{id}/listings
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of records to return
		 *     Minimum: 1    Maximum: 200
		 * @return {GetListingsResponse} Listings
		 */
		ProductListingsAll(ecosystem_id: string, id: string, cursor: string | null | undefined, limit: number | null | undefined): Observable<GetListingsResponse> {
			return this.http.get<GetListingsResponse>(this.baseUri + 'ecosystems/' + (ecosystem_id == null ? '' : encodeURIComponent(ecosystem_id)) + '/products/' + (id == null ? '' : encodeURIComponent(id)) + '/listings&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}
	}

}

