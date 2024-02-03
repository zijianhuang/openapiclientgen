import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Account object */
	export interface Account {
		active_promotions?: Array<Promotion>;

		/** The datetime of when the account was activated. */
		active_since?: Date | null;

		/**
		 * First line of this Account's billing address.
		 * Max length: 64
		 */
		address_1?: string | null;

		/**
		 * Second line of this Account's billing address.
		 * Max length: 64
		 */
		address_2?: string | null;

		/** This Account's balance, in US dollars. */
		balance?: number | null;

		/**
		 * This Account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.
		 */
		balance_uninvoiced?: number | null;

		/**
		 * The source of service charges for this Account, as determined by its relationship with Akamai.
		 * Accounts that are associated with Akamai-specific customers return a value of `akamai`.
		 * All other Accounts return a value of `linode`.
		 */
		billing_source?: AccountBilling_source | null;

		/**
		 * A list of capabilities your account supports.
		 */
		capabilities?: Array<string>;

		/**
		 * The city for this Account's billing address.
		 * Max length: 24
		 */
		city?: string | null;

		/**
		 * The company name associated with this Account.
		 * Max length: 128
		 */
		company?: string | null;

		/**
		 * The two-letter ISO 3166 country code of this Account's billing address.
		 */
		country?: string | null;

		/** Credit Card information associated with this Account. */
		credit_card?: AccountCredit_card;

		/**
		 * The email address of the person associated with this Account.
		 * Max length: 128
		 */
		email?: string | null;

		/**
		 * An external unique identifier for this account.
		 */
		euuid?: string | null;

		/**
		 * The first name of the person associated with this Account.
		 * Max length: 50
		 */
		first_name?: string | null;

		/**
		 * The last name of the person associated with this Account.
		 * Max length: 50
		 */
		last_name?: string | null;

		/**
		 * The phone number associated with this Account.
		 * Max length: 32
		 */
		phone?: string | null;

		/**
		 * If billing address is in the United States (US) or Canada (CA), only the two-letter ISO 3166 State or Province code are accepted. If entering a US military address, state abbreviations (AA, AE, AP) should be entered. If the address is outside the US or CA, this is the Province associated with the Account's billing address.
		 * Max length: 24
		 */
		state?: string | null;

		/**
		 * The tax identification number associated with this Account, for tax calculations in some countries. If you do not live in a country that collects tax, this should be an empty string (`""`).
		 * Max length: 25
		 */
		tax_id?: string | null;

		/**
		 * The zip code of this Account's billing address. The following restrictions apply:
		 * - May only consist of letters, numbers, spaces, and hyphens.
		 * - Must not contain more than 9 letter or number characters.
		 */
		zip?: string | null;
	}

	/** Account object */
	export interface AccountFormProperties {

		/** The datetime of when the account was activated. */
		active_since: FormControl<Date | null | undefined>,

		/**
		 * First line of this Account's billing address.
		 * Max length: 64
		 */
		address_1: FormControl<string | null | undefined>,

		/**
		 * Second line of this Account's billing address.
		 * Max length: 64
		 */
		address_2: FormControl<string | null | undefined>,

		/** This Account's balance, in US dollars. */
		balance: FormControl<number | null | undefined>,

		/**
		 * This Account's current estimated invoice in US dollars. This is not your final invoice balance. Transfer charges are not included in the estimate.
		 */
		balance_uninvoiced: FormControl<number | null | undefined>,

		/**
		 * The source of service charges for this Account, as determined by its relationship with Akamai.
		 * Accounts that are associated with Akamai-specific customers return a value of `akamai`.
		 * All other Accounts return a value of `linode`.
		 */
		billing_source: FormControl<AccountBilling_source | null | undefined>,

		/**
		 * The city for this Account's billing address.
		 * Max length: 24
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The company name associated with this Account.
		 * Max length: 128
		 */
		company: FormControl<string | null | undefined>,

		/**
		 * The two-letter ISO 3166 country code of this Account's billing address.
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The email address of the person associated with this Account.
		 * Max length: 128
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * An external unique identifier for this account.
		 */
		euuid: FormControl<string | null | undefined>,

		/**
		 * The first name of the person associated with this Account.
		 * Max length: 50
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * The last name of the person associated with this Account.
		 * Max length: 50
		 */
		last_name: FormControl<string | null | undefined>,

		/**
		 * The phone number associated with this Account.
		 * Max length: 32
		 */
		phone: FormControl<string | null | undefined>,

		/**
		 * If billing address is in the United States (US) or Canada (CA), only the two-letter ISO 3166 State or Province code are accepted. If entering a US military address, state abbreviations (AA, AE, AP) should be entered. If the address is outside the US or CA, this is the Province associated with the Account's billing address.
		 * Max length: 24
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * The tax identification number associated with this Account, for tax calculations in some countries. If you do not live in a country that collects tax, this should be an empty string (`""`).
		 * Max length: 25
		 */
		tax_id: FormControl<string | null | undefined>,

		/**
		 * The zip code of this Account's billing address. The following restrictions apply:
		 * - May only consist of letters, numbers, spaces, and hyphens.
		 * - Must not contain more than 9 letter or number characters.
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			active_since: new FormControl<Date | null | undefined>(undefined),
			address_1: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			address_2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			balance: new FormControl<number | null | undefined>(undefined),
			balance_uninvoiced: new FormControl<number | null | undefined>(undefined),
			billing_source: new FormControl<AccountBilling_source | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(24)]),
			company: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			country: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			euuid: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32)]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(24)]),
			tax_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(25)]),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Promotions generally
	 * offer a set amount of credit that can be used toward your Linode
	 * services, and the promotion expires after a specified date. As well,
	 * a monthly cap on the promotional offer is set.
	 * Simply put, a promotion offers a certain amount of credit every
	 * month, until either the expiration date is passed, or until the total
	 * promotional credit is used, whichever comes first.
	 */
	export interface Promotion {

		/**
		 * The amount available to spend per month.
		 */
		credit_monthly_cap?: string | null;

		/**
		 * The total amount of credit left for this promotion.
		 */
		credit_remaining?: string | null;

		/**
		 * A detailed description of this promotion.
		 */
		description?: string | null;

		/**
		 * When this promotion's credits expire.
		 */
		expire_dt?: string | null;

		/**
		 * The location of an image for this promotion.
		 */
		image_url?: string | null;

		/**
		 * The service to which this promotion applies.
		 */
		service_type?: PromotionService_type | null;

		/**
		 * Short details of this promotion.
		 */
		summary?: string | null;

		/**
		 * The amount of credit left for this month for this promotion.
		 */
		this_month_credit_remaining?: string | null;
	}

	/**
	 * Promotions generally
	 * offer a set amount of credit that can be used toward your Linode
	 * services, and the promotion expires after a specified date. As well,
	 * a monthly cap on the promotional offer is set.
	 * Simply put, a promotion offers a certain amount of credit every
	 * month, until either the expiration date is passed, or until the total
	 * promotional credit is used, whichever comes first.
	 */
	export interface PromotionFormProperties {

		/**
		 * The amount available to spend per month.
		 */
		credit_monthly_cap: FormControl<string | null | undefined>,

		/**
		 * The total amount of credit left for this promotion.
		 */
		credit_remaining: FormControl<string | null | undefined>,

		/**
		 * A detailed description of this promotion.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * When this promotion's credits expire.
		 */
		expire_dt: FormControl<string | null | undefined>,

		/**
		 * The location of an image for this promotion.
		 */
		image_url: FormControl<string | null | undefined>,

		/**
		 * The service to which this promotion applies.
		 */
		service_type: FormControl<PromotionService_type | null | undefined>,

		/**
		 * Short details of this promotion.
		 */
		summary: FormControl<string | null | undefined>,

		/**
		 * The amount of credit left for this month for this promotion.
		 */
		this_month_credit_remaining: FormControl<string | null | undefined>,
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
			credit_monthly_cap: new FormControl<string | null | undefined>(undefined),
			credit_remaining: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expire_dt: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			service_type: new FormControl<PromotionService_type | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			this_month_credit_remaining: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PromotionService_type { all = 'all', backup = 'backup', blockstorage = 'blockstorage', db_mysql = 'db_mysql', ip_v4 = 'ip_v4', linode = 'linode', linode_disk = 'linode_disk', linode_memory = 'linode_memory', longview = 'longview', managed = 'managed', nodebalancer = 'nodebalancer', objectstorage = 'objectstorage', transfer_tx = 'transfer_tx' }

	export enum AccountBilling_source { akamai = 'akamai', linode = 'linode' }

	export interface AccountCredit_card {

		/** The expiration month and year of the credit card. */
		expiry?: string | null;

		/**
		 * The last four digits of the credit card associated with this Account.
		 */
		last_four?: string | null;
	}
	export interface AccountCredit_cardFormProperties {

		/** The expiration month and year of the credit card. */
		expiry: FormControl<string | null | undefined>,

		/**
		 * The last four digits of the credit card associated with this Account.
		 */
		last_four: FormControl<string | null | undefined>,
	}
	export function CreateAccountCredit_cardFormGroup() {
		return new FormGroup<AccountCredit_cardFormProperties>({
			expiry: new FormControl<string | null | undefined>(undefined),
			last_four: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account Settings object */
	export interface AccountSettings {

		/**
		 * Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.
		 */
		backups_enabled?: boolean | null;

		/**
		 * The Longview Pro tier you are currently subscribed to. The value must be a [Longview Subscription](/docs/api/longview/#longview-subscriptions-list) ID or `null` for Longview Free.
		 */
		longview_subscription?: string | null;

		/**
		 * Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.
		 */
		managed?: boolean | null;

		/**
		 * Enables network helper across all users by default for new Linodes and Linode Configs.
		 */
		network_helper?: boolean | null;

		/**
		 * A string describing the status of this account's Object Storage service enrollment.
		 */
		object_storage?: AccountSettingsObject_storage | null;
	}

	/** Account Settings object */
	export interface AccountSettingsFormProperties {

		/**
		 * Account-wide backups default.  If `true`, all Linodes created will automatically be enrolled in the Backups service.  If `false`, Linodes will not be enrolled by default, but may still be enrolled on creation or later.
		 */
		backups_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The Longview Pro tier you are currently subscribed to. The value must be a [Longview Subscription](/docs/api/longview/#longview-subscriptions-list) ID or `null` for Longview Free.
		 */
		longview_subscription: FormControl<string | null | undefined>,

		/**
		 * Our 24/7 incident response service. This robust, multi-homed monitoring system distributes monitoring checks to ensure that your servers remain online and available at all times. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. Once you add a service to Linode Managed, we'll monitor it for connectivity, response, and total request time.
		 */
		managed: FormControl<boolean | null | undefined>,

		/**
		 * Enables network helper across all users by default for new Linodes and Linode Configs.
		 */
		network_helper: FormControl<boolean | null | undefined>,

		/**
		 * A string describing the status of this account's Object Storage service enrollment.
		 */
		object_storage: FormControl<AccountSettingsObject_storage | null | undefined>,
	}
	export function CreateAccountSettingsFormGroup() {
		return new FormGroup<AccountSettingsFormProperties>({
			backups_enabled: new FormControl<boolean | null | undefined>(undefined),
			longview_subscription: new FormControl<string | null | undefined>(undefined),
			managed: new FormControl<boolean | null | undefined>(undefined),
			network_helper: new FormControl<boolean | null | undefined>(undefined),
			object_storage: new FormControl<AccountSettingsObject_storage | null | undefined>(undefined),
		});

	}

	export enum AccountSettingsObject_storage { disabled = 'disabled', suspended = 'suspended', active = 'active' }


	/**
	 * An application you have authorized access to your Account through OAuth.
	 */
	export interface AuthorizedApp {

		/** When this app was authorized. */
		created?: Date | null;

		/**
		 * When the app's access to your account expires. If `null`, the app's access must be revoked manually.
		 */
		expiry?: Date | null;

		/**
		 * This authorization's ID, used for revoking access.
		 */
		id?: number | null;

		/**
		 * The name of the application you've authorized.
		 */
		label?: string | null;

		/**
		 * The OAuth scopes this app was authorized with.  This defines what parts of your Account the app is allowed to access.
		 */
		scopes?: string | null;

		/**
		 * The URL at which this app's thumbnail may be accessed.
		 */
		thumbnail_url?: string | null;

		/**
		 * The website where you can get more information about this app.
		 */
		website?: string | null;
	}

	/**
	 * An application you have authorized access to your Account through OAuth.
	 */
	export interface AuthorizedAppFormProperties {

		/** When this app was authorized. */
		created: FormControl<Date | null | undefined>,

		/**
		 * When the app's access to your account expires. If `null`, the app's access must be revoked manually.
		 */
		expiry: FormControl<Date | null | undefined>,

		/**
		 * This authorization's ID, used for revoking access.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The name of the application you've authorized.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The OAuth scopes this app was authorized with.  This defines what parts of your Account the app is allowed to access.
		 */
		scopes: FormControl<string | null | undefined>,

		/**
		 * The URL at which this app's thumbnail may be accessed.
		 */
		thumbnail_url: FormControl<string | null | undefined>,

		/**
		 * The website where you can get more information about this app.
		 */
		website: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedAppFormGroup() {
		return new FormGroup<AuthorizedAppFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			scopes: new FormControl<string | null | undefined>(undefined),
			thumbnail_url: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
	 */
	export interface Backup {

		/**
		 * Whether this Backup is available for restoration.
		 * Backups undergoing maintenance are not available for restoration.
		 */
		available?: boolean | null;

		/**
		 * A list of the labels of the Configuration profiles that are part of the Backup.
		 */
		configs?: Array<string>;

		/** The date the Backup was taken. */
		created?: Date | null;

		/**
		 * A list of the disks that are part of the Backup.
		 */
		BackupDisks?: Array<BackupDisks>;

		/** The date the Backup completed. */
		finished?: Date | null;

		/** The unique ID of this Backup. */
		id?: number | null;

		/** A label for Backups that are of type `snapshot`. */
		label?: string | null;

		/** The current state of a specific Backup. */
		status?: BackupStatus | null;

		/**
		 * This indicates whether the Backup is an automatic Backup or manual snapshot taken by the User at a specific point in time.
		 */
		type?: BackupType | null;

		/** The date the Backup was most recently updated. */
		updated?: Date | null;
	}

	/**
	 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
	 */
	export interface BackupFormProperties {

		/**
		 * Whether this Backup is available for restoration.
		 * Backups undergoing maintenance are not available for restoration.
		 */
		available: FormControl<boolean | null | undefined>,

		/** The date the Backup was taken. */
		created: FormControl<Date | null | undefined>,

		/** The date the Backup completed. */
		finished: FormControl<Date | null | undefined>,

		/** The unique ID of this Backup. */
		id: FormControl<number | null | undefined>,

		/** A label for Backups that are of type `snapshot`. */
		label: FormControl<string | null | undefined>,

		/** The current state of a specific Backup. */
		status: FormControl<BackupStatus | null | undefined>,

		/**
		 * This indicates whether the Backup is an automatic Backup or manual snapshot taken by the User at a specific point in time.
		 */
		type: FormControl<BackupType | null | undefined>,

		/** The date the Backup was most recently updated. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			finished: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BackupStatus | null | undefined>(undefined),
			type: new FormControl<BackupType | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BackupDisks {
		filesystem?: Disk;
		label?: string | null;
		size?: number | null;
	}
	export interface BackupDisksFormProperties {
		label: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateBackupDisksFormGroup() {
		return new FormGroup<BackupDisksFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Disk {

		/** When this Disk was created. */
		created?: Date | null;

		/**
		 * The Disk filesystem can be one of:
		 * * raw - No filesystem, just a raw binary stream.
		 * * swap - Linux swap area.
		 * * ext3 - The ext3 journaling filesystem for Linux.
		 * * ext4 - The ext4 journaling filesystem for Linux.
		 * * initrd - initrd (uncompressed initrd, ext2, max 32 MB).
		 */
		filesystem?: DiskFilesystem | null;

		/**
		 * This Disk's ID which must be provided for all operations impacting this Disk.
		 */
		id?: number | null;

		/**
		 * The Disk's label is for display purposes only.
		 * Max length: 48
		 * Min length: 1
		 */
		label?: string | null;

		/** The size of the Disk in MB. */
		size?: number | null;

		/**
		 * A brief description of this Disk's current state. This field may change without direct action from you, as a result of operations performed to the Disk or the Linode containing the Disk.
		 */
		status?: DiskStatus | null;

		/** When this Disk was last updated. */
		updated?: Date | null;
	}
	export interface DiskFormProperties {

		/** When this Disk was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * The Disk filesystem can be one of:
		 * * raw - No filesystem, just a raw binary stream.
		 * * swap - Linux swap area.
		 * * ext3 - The ext3 journaling filesystem for Linux.
		 * * ext4 - The ext4 journaling filesystem for Linux.
		 * * initrd - initrd (uncompressed initrd, ext2, max 32 MB).
		 */
		filesystem: FormControl<DiskFilesystem | null | undefined>,

		/**
		 * This Disk's ID which must be provided for all operations impacting this Disk.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The Disk's label is for display purposes only.
		 * Max length: 48
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/** The size of the Disk in MB. */
		size: FormControl<number | null | undefined>,

		/**
		 * A brief description of this Disk's current state. This field may change without direct action from you, as a result of operations performed to the Disk or the Linode containing the Disk.
		 */
		status: FormControl<DiskStatus | null | undefined>,

		/** When this Disk was last updated. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			filesystem: new FormControl<DiskFilesystem | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(48)]),
			size: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<DiskStatus | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DiskFilesystem { raw = 'raw', swap = 'swap', ext3 = 'ext3', ext4 = 'ext4', initrd = 'initrd' }

	export enum DiskStatus { ready = 'ready', 'not ready' = 'not ready', deleting = 'deleting' }

	export enum BackupStatus { paused = 'paused', pending = 'pending', running = 'running', needsPostProcessing = 'needsPostProcessing', successful = 'successful', failed = 'failed', userAborted = 'userAborted' }

	export enum BackupType { auto = 'auto', snapshot = 'snapshot' }


	/**
	 * An object representing the credit card information you have on file with
	 * Linode to make Payments against your Account.
	 */
	export interface CreditCard {

		/**
		 * Your credit card number. No spaces or dashes allowed.
		 * Required
		 * Max length: 24
		 * Min length: 14
		 */
		card_number: string;

		/**
		 * CVV (Card Verification Value) of the credit card, typically found on the back of the card.
		 * Required
		 * Max length: 4
		 * Min length: 3
		 */
		cvv: string;

		/**
		 * A value from 1-12 representing the expiration month of your credit card.
		 * * 1 = January
		 * * 2 = February
		 * * 3 = March
		 * * Etc.
		 * Required
		 * Minimum: 1
		 * Maximum: 12
		 */
		expiry_month: number;

		/**
		 * A four-digit integer representing the expiration year of
		 * your credit card.
		 * The combination of `expiry_month` and `expiry_year`
		 * must result in a month/year combination of the current month or in
		 * the future. An expiration date set in the past is invalid.
		 * Required
		 * Max length: 4
		 * Min length: 4
		 */
		expiry_year: number;
	}

	/**
	 * An object representing the credit card information you have on file with
	 * Linode to make Payments against your Account.
	 */
	export interface CreditCardFormProperties {

		/**
		 * Your credit card number. No spaces or dashes allowed.
		 * Required
		 * Max length: 24
		 * Min length: 14
		 */
		card_number: FormControl<string | null | undefined>,

		/**
		 * CVV (Card Verification Value) of the credit card, typically found on the back of the card.
		 * Required
		 * Max length: 4
		 * Min length: 3
		 */
		cvv: FormControl<string | null | undefined>,

		/**
		 * A value from 1-12 representing the expiration month of your credit card.
		 * * 1 = January
		 * * 2 = February
		 * * 3 = March
		 * * Etc.
		 * Required
		 * Minimum: 1
		 * Maximum: 12
		 */
		expiry_month: FormControl<number | null | undefined>,

		/**
		 * A four-digit integer representing the expiration year of
		 * your credit card.
		 * The combination of `expiry_month` and `expiry_year`
		 * must result in a month/year combination of the current month or in
		 * the future. An expiration date set in the past is invalid.
		 * Required
		 * Max length: 4
		 * Min length: 4
		 */
		expiry_year: FormControl<number | null | undefined>,
	}
	export function CreateCreditCardFormGroup() {
		return new FormGroup<CreditCardFormProperties>({
			card_number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(14), Validators.maxLength(24)]),
			cvv: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
			expiry_month: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(12)]),
			expiry_year: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
		});

	}


	/** Credit card information. */
	export interface CreditCardData {

		/** The type of credit card. */
		card_type?: string | null;

		/** The expiration month and year of the credit card. */
		expiry?: string | null;

		/** The last four digits of the credit card number. */
		last_four?: string | null;
	}

	/** Credit card information. */
	export interface CreditCardDataFormProperties {

		/** The type of credit card. */
		card_type: FormControl<string | null | undefined>,

		/** The expiration month and year of the credit card. */
		expiry: FormControl<string | null | undefined>,

		/** The last four digits of the credit card number. */
		last_four: FormControl<string | null | undefined>,
	}
	export function CreateCreditCardDataFormGroup() {
		return new FormGroup<CreditCardDataFormProperties>({
			card_type: new FormControl<string | null | undefined>(undefined),
			expiry: new FormControl<string | null | undefined>(undefined),
			last_four: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A general Managed Database instance object containing properties that are identical for all database types. */
	export interface Database {

		/**
		 * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.
		 * By default, this is an empty array (`[]`), which blocks all connections (both public and private) to the Managed Database.
		 * If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.
		 */
		allow_list?: Array<string>;

		/**
		 * The number of Linode Instance nodes deployed to the Managed Database.
		 * Choosing 3 nodes creates a high availability cluster consisting of 1 primary node and 2 replica nodes.
		 */
		cluster_size?: DatabaseCluster_size;

		/** When this Managed Database was created. */
		created?: Date | null;

		/** Whether the Managed Databases is encrypted. */
		encrypted?: boolean | null;

		/** The Managed Database engine type. */
		engine?: DatabaseEngine | null;

		/** The primary and secondary hosts for the Managed Database. These are assigned after provisioning is complete. */
		hosts?: DatabaseHosts;

		/** A unique ID that can be used to identify and reference the Managed Database. */
		id?: number | null;

		/**
		 * Append this to `https://api.linode.com` to run commands for the Managed Database.
		 */
		instance_uri?: string | null;

		/**
		 * A unique, user-defined string referring to the Managed Database.
		 * Max length: 32
		 * Min length: 3
		 */
		label?: string | null;

		/** The [Region](/docs/api/regions/) ID for the Managed Database. */
		region?: string | null;

		/** The operating status of the Managed Database. */
		status?: DatabaseStatus | null;

		/** The Linode Instance type used by the Managed Database for its nodes. */
		type?: string | null;

		/** When this Managed Database was last updated. */
		updated?: Date | null;

		/** Configuration settings for automated patch update maintenance for the Managed Database. */
		updates?: DatabaseUpdates;

		/** The Managed Database engine version. */
		version?: string | null;
	}

	/** A general Managed Database instance object containing properties that are identical for all database types. */
	export interface DatabaseFormProperties {

		/**
		 * The number of Linode Instance nodes deployed to the Managed Database.
		 * Choosing 3 nodes creates a high availability cluster consisting of 1 primary node and 2 replica nodes.
		 */
		cluster_size: FormControl<DatabaseCluster_size | null | undefined>,

		/** When this Managed Database was created. */
		created: FormControl<Date | null | undefined>,

		/** Whether the Managed Databases is encrypted. */
		encrypted: FormControl<boolean | null | undefined>,

		/** The Managed Database engine type. */
		engine: FormControl<DatabaseEngine | null | undefined>,

		/** A unique ID that can be used to identify and reference the Managed Database. */
		id: FormControl<number | null | undefined>,

		/**
		 * Append this to `https://api.linode.com` to run commands for the Managed Database.
		 */
		instance_uri: FormControl<string | null | undefined>,

		/**
		 * A unique, user-defined string referring to the Managed Database.
		 * Max length: 32
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/** The [Region](/docs/api/regions/) ID for the Managed Database. */
		region: FormControl<string | null | undefined>,

		/** The operating status of the Managed Database. */
		status: FormControl<DatabaseStatus | null | undefined>,

		/** The Linode Instance type used by the Managed Database for its nodes. */
		type: FormControl<string | null | undefined>,

		/** When this Managed Database was last updated. */
		updated: FormControl<Date | null | undefined>,

		/** The Managed Database engine version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			cluster_size: new FormControl<DatabaseCluster_size | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			engine: new FormControl<DatabaseEngine | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			instance_uri: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(32)]),
			region: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DatabaseStatus | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseCluster_size { _1 = 0, _3 = 1 }

	export enum DatabaseEngine { mongodb = 'mongodb', mysql = 'mysql', postgresql = 'postgresql' }

	export interface DatabaseHosts {

		/** The primary host for the Managed Database. */
		primary?: string | null;

		/**
		 * The secondary/private network host for the Managed Database.
		 * A private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.
		 * **Note**: The secondary hostname is publicly viewable and accessible.
		 */
		secondary?: string | null;
	}
	export interface DatabaseHostsFormProperties {

		/** The primary host for the Managed Database. */
		primary: FormControl<string | null | undefined>,

		/**
		 * The secondary/private network host for the Managed Database.
		 * A private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.
		 * **Note**: The secondary hostname is publicly viewable and accessible.
		 */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseHostsFormGroup() {
		return new FormGroup<DatabaseHostsFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseStatus { provisioning = 'provisioning', active = 'active', suspending = 'suspending', suspended = 'suspended', resuming = 'resuming', restoring = 'restoring', failed = 'failed', degraded = 'degraded', updating = 'updating', backing_up = 'backing_up' }

	export interface DatabaseUpdates {

		/**
		 * The day to perform maintenance. 1=Monday, 2=Tuesday, etc.
		 * Minimum: 1
		 * Maximum: 7
		 */
		day_of_week?: number | null;

		/**
		 * The maximum maintenance window time in hours.
		 * Minimum: 1
		 * Maximum: 3
		 */
		duration?: number | null;

		/** Whether maintenance occurs on a weekly or monthly basis. */
		frequency?: DatabaseUpdatesFrequency | null;

		/**
		 * The hour to begin maintenance based in UTC time.
		 * Minimum: 0
		 * Maximum: 23
		 */
		hour_of_day?: number | null;

		/**
		 * The week of the month to perform `monthly` frequency updates. Defaults to `null`.
		 * * Required for `monthly` frequency updates.
		 * * Must be `null` for `weekly` frequency updates.
		 * Minimum: 1
		 * Maximum: 4
		 */
		week_of_month?: number | null;
	}
	export interface DatabaseUpdatesFormProperties {

		/**
		 * The day to perform maintenance. 1=Monday, 2=Tuesday, etc.
		 * Minimum: 1
		 * Maximum: 7
		 */
		day_of_week: FormControl<number | null | undefined>,

		/**
		 * The maximum maintenance window time in hours.
		 * Minimum: 1
		 * Maximum: 3
		 */
		duration: FormControl<number | null | undefined>,

		/** Whether maintenance occurs on a weekly or monthly basis. */
		frequency: FormControl<DatabaseUpdatesFrequency | null | undefined>,

		/**
		 * The hour to begin maintenance based in UTC time.
		 * Minimum: 0
		 * Maximum: 23
		 */
		hour_of_day: FormControl<number | null | undefined>,

		/**
		 * The week of the month to perform `monthly` frequency updates. Defaults to `null`.
		 * * Required for `monthly` frequency updates.
		 * * Must be `null` for `weekly` frequency updates.
		 * Minimum: 1
		 * Maximum: 4
		 */
		week_of_month: FormControl<number | null | undefined>,
	}
	export function CreateDatabaseUpdatesFormGroup() {
		return new FormGroup<DatabaseUpdatesFormProperties>({
			day_of_week: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(7)]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(3)]),
			frequency: new FormControl<DatabaseUpdatesFrequency | null | undefined>(undefined),
			hour_of_day: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(23)]),
			week_of_month: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(4)]),
		});

	}

	export enum DatabaseUpdatesFrequency { weekly = 'weekly', monthly = 'monthly' }


	/** A database backup object. */
	export interface DatabaseBackup {

		/** A time value given in a combined date and time format that represents when the database backup was created. */
		created?: string | null;

		/** The ID of the database backup object. */
		id?: number | null;

		/**
		 * The database backup's label, for display purposes only.
		 * Must include only ASCII letters or numbers.
		 * Max length: 30
		 */
		label?: string | null;

		/** The type of database backup, determined by how the backup was created. */
		type?: DatabaseBackupType | null;
	}

	/** A database backup object. */
	export interface DatabaseBackupFormProperties {

		/** A time value given in a combined date and time format that represents when the database backup was created. */
		created: FormControl<string | null | undefined>,

		/** The ID of the database backup object. */
		id: FormControl<number | null | undefined>,

		/**
		 * The database backup's label, for display purposes only.
		 * Must include only ASCII letters or numbers.
		 * Max length: 30
		 */
		label: FormControl<string | null | undefined>,

		/** The type of database backup, determined by how the backup was created. */
		type: FormControl<DatabaseBackupType | null | undefined>,
	}
	export function CreateDatabaseBackupFormGroup() {
		return new FormGroup<DatabaseBackupFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			type: new FormControl<DatabaseBackupType | null | undefined>(undefined),
		});

	}

	export enum DatabaseBackupType { snapshot = 'snapshot', auto = 'auto' }


	/** Managed Database request object for snapshot backup. */
	export interface DatabaseBackupSnapshot {

		/**
		 * The label for the Database snapshot backup.
		 * * Must include only ASCII letters or numbers.
		 * * Must be unique among other backup labels for this Database.
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		label: string;

		/**
		 * The Database cluster target.
		 * If the Database is a high availability cluster, choosing `secondary` creates a snapshot backup of a replica node.
		 */
		target?: DatabaseBackupSnapshotTarget | null;
	}

	/** Managed Database request object for snapshot backup. */
	export interface DatabaseBackupSnapshotFormProperties {

		/**
		 * The label for the Database snapshot backup.
		 * * Must include only ASCII letters or numbers.
		 * * Must be unique among other backup labels for this Database.
		 * Required
		 * Max length: 30
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The Database cluster target.
		 * If the Database is a high availability cluster, choosing `secondary` creates a snapshot backup of a replica node.
		 */
		target: FormControl<DatabaseBackupSnapshotTarget | null | undefined>,
	}
	export function CreateDatabaseBackupSnapshotFormGroup() {
		return new FormGroup<DatabaseBackupSnapshotFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
			target: new FormControl<DatabaseBackupSnapshotTarget | null | undefined>(undefined),
		});

	}

	export enum DatabaseBackupSnapshotTarget { primary = 'primary', secondary = 'secondary' }


	/** Managed Database object for database credentials. */
	export interface DatabaseCredentials {

		/** The randomly-generated root password for the Managed Database instance. */
		password?: string | null;

		/** The root username for the Managed Database instance. */
		username?: string | null;
	}

	/** Managed Database object for database credentials. */
	export interface DatabaseCredentialsFormProperties {

		/** The randomly-generated root password for the Managed Database instance. */
		password: FormControl<string | null | undefined>,

		/** The root username for the Managed Database instance. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseCredentialsFormGroup() {
		return new FormGroup<DatabaseCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managed MongoDB Databases object. */
	export interface DatabaseMongoDB {

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		allow_list?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		cluster_size?: Database;

		/**
		 * The type of data compression for this Database.
		 * Snappy has a lower comparative compression ratio and resource consumption rate.
		 * Zlip has a higher comparative compression ratio and resource consumption rate.
		 */
		compression_type?: DatabaseMongoDBCompression_type | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		created?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		encrypted?: Database;

		/** The Managed Database engine type. */
		engine?: string | null;

		/** The primary and secondary hosts for the Managed Database. These are assigned after provisioning is complete. */
		hosts?: DatabaseMongoDBHosts;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		id?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		label?: Database;

		/**
		 * An array of peer addresses for this Database.
		 */
		peers?: Array<string>;

		/** The access port for this Managed Database. */
		port?: number | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		region?: Database;

		/**
		 * Label for configuring a MongoDB [replica set](https://www.mongodb.com/docs/manual/replication/). Choose the same label on multiple Databases to include them in the same replica set.
		 * If `null`, the Database is not included in any replica set.
		 * Max length: 64
		 */
		replica_set?: string | null;

		/**
		 * Whether to require SSL credentials to establish a connection to the Managed Database.
		 * Use the **Managed MongoDB Database Credentials View** ([GET /databases/mongodb/instances/{instanceId}/credentials](/docs/api/databases/#managed-mongodb-database-credentials-view)) command for access information.
		 */
		ssl_connection?: boolean | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		status?: Database;

		/**
		 * The type of storage engine for this Database.
		 * **Note:** MMAPV1 is not available for MongoDB versions 4.0 and above.
		 */
		storage_engine?: DatabaseMongoDBStorage_engine | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		type?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		updated?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		updates?: Database;

		/** The Managed Database engine version. */
		version?: string | null;
	}

	/** Managed MongoDB Databases object. */
	export interface DatabaseMongoDBFormProperties {

		/**
		 * The type of data compression for this Database.
		 * Snappy has a lower comparative compression ratio and resource consumption rate.
		 * Zlip has a higher comparative compression ratio and resource consumption rate.
		 */
		compression_type: FormControl<DatabaseMongoDBCompression_type | null | undefined>,

		/** The Managed Database engine type. */
		engine: FormControl<string | null | undefined>,

		/** The access port for this Managed Database. */
		port: FormControl<number | null | undefined>,

		/**
		 * Label for configuring a MongoDB [replica set](https://www.mongodb.com/docs/manual/replication/). Choose the same label on multiple Databases to include them in the same replica set.
		 * If `null`, the Database is not included in any replica set.
		 * Max length: 64
		 */
		replica_set: FormControl<string | null | undefined>,

		/**
		 * Whether to require SSL credentials to establish a connection to the Managed Database.
		 * Use the **Managed MongoDB Database Credentials View** ([GET /databases/mongodb/instances/{instanceId}/credentials](/docs/api/databases/#managed-mongodb-database-credentials-view)) command for access information.
		 */
		ssl_connection: FormControl<boolean | null | undefined>,

		/**
		 * The type of storage engine for this Database.
		 * **Note:** MMAPV1 is not available for MongoDB versions 4.0 and above.
		 */
		storage_engine: FormControl<DatabaseMongoDBStorage_engine | null | undefined>,

		/** The Managed Database engine version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseMongoDBFormGroup() {
		return new FormGroup<DatabaseMongoDBFormProperties>({
			compression_type: new FormControl<DatabaseMongoDBCompression_type | null | undefined>(undefined),
			engine: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			replica_set: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			ssl_connection: new FormControl<boolean | null | undefined>(undefined),
			storage_engine: new FormControl<DatabaseMongoDBStorage_engine | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseMongoDBCompression_type { none = 'none', snappy = 'snappy', zlip = 'zlip' }

	export interface DatabaseMongoDBHosts {

		/** The primary host for the Managed Database. */
		primary?: string | null;

		/**
		 * The secondary/private network host for the Managed Database.
		 * A private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.
		 * **Note**: The secondary hostname is publicly viewable and accessible.
		 */
		secondary?: string | null;
	}
	export interface DatabaseMongoDBHostsFormProperties {

		/** The primary host for the Managed Database. */
		primary: FormControl<string | null | undefined>,

		/**
		 * The secondary/private network host for the Managed Database.
		 * A private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.
		 * **Note**: The secondary hostname is publicly viewable and accessible.
		 */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseMongoDBHostsFormGroup() {
		return new FormGroup<DatabaseMongoDBHostsFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseMongoDBStorage_engine { mmapv1 = 'mmapv1', wiredtiger = 'wiredtiger' }


	/** Managed MongoDB Database request object. */
	export interface DatabaseMongoDBRequest {

		/** Managed MongoDB Databases object. */
		allow_list?: DatabaseMongoDB;

		/** Managed MongoDB Databases object. */
		cluster_size?: DatabaseMongoDB;

		/** Managed MongoDB Databases object. */
		compression_type?: DatabaseMongoDB;

		/** Managed MongoDB Databases object. */
		encrypted?: DatabaseMongoDB;

		/**
		 * The Managed Database engine in engine/version format.
		 * Required
		 */
		engine: string;

		/**
		 * Managed MongoDB Databases object.
		 * Required
		 */
		label: DatabaseMongoDB;

		/**
		 * Managed MongoDB Databases object.
		 * Required
		 */
		region: DatabaseMongoDB;

		/** Managed MongoDB Databases object. */
		replica_set?: DatabaseMongoDB;

		/** Managed MongoDB Databases object. */
		ssl_connection?: DatabaseMongoDB;

		/** Managed MongoDB Databases object. */
		storage_engine?: DatabaseMongoDB;

		/**
		 * Managed MongoDB Databases object.
		 * Required
		 */
		type: DatabaseMongoDB;
	}

	/** Managed MongoDB Database request object. */
	export interface DatabaseMongoDBRequestFormProperties {

		/**
		 * The Managed Database engine in engine/version format.
		 * Required
		 */
		engine: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseMongoDBRequestFormGroup() {
		return new FormGroup<DatabaseMongoDBRequestFormProperties>({
			engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Managed MySQL Databases object. */
	export interface DatabaseMySQL {

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		allow_list?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		cluster_size?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		created?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		encrypted?: Database;

		/** The Managed Database engine type. */
		engine?: string | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		hosts?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		id?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		label?: Database;

		/** The access port for this Managed Database. */
		port?: number | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		region?: Database;

		/**
		 * The replication method used for the Managed Database.
		 * Defaults to `none` for a single cluster and `semi_synch` for a high availability cluster.
		 * Must be `none` for a single node cluster.
		 * Must be `asynch` or `semi_synch` for a high availability cluster.
		 */
		replication_type?: DatabaseMySQLReplication_type | null;

		/**
		 * Whether to require SSL credentials to establish a connection to the Managed Database.
		 * Use the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command for access information.
		 */
		ssl_connection?: boolean | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		status?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		type?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		updated?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		updates?: Database;

		/** The Managed Database engine version. */
		version?: string | null;
	}

	/** Managed MySQL Databases object. */
	export interface DatabaseMySQLFormProperties {

		/** The Managed Database engine type. */
		engine: FormControl<string | null | undefined>,

		/** The access port for this Managed Database. */
		port: FormControl<number | null | undefined>,

		/**
		 * The replication method used for the Managed Database.
		 * Defaults to `none` for a single cluster and `semi_synch` for a high availability cluster.
		 * Must be `none` for a single node cluster.
		 * Must be `asynch` or `semi_synch` for a high availability cluster.
		 */
		replication_type: FormControl<DatabaseMySQLReplication_type | null | undefined>,

		/**
		 * Whether to require SSL credentials to establish a connection to the Managed Database.
		 * Use the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command for access information.
		 */
		ssl_connection: FormControl<boolean | null | undefined>,

		/** The Managed Database engine version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseMySQLFormGroup() {
		return new FormGroup<DatabaseMySQLFormProperties>({
			engine: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			replication_type: new FormControl<DatabaseMySQLReplication_type | null | undefined>(undefined),
			ssl_connection: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseMySQLReplication_type { none = 'none', asynch = 'asynch', semi_synch = 'semi_synch' }


	/** Managed MySQL Database request object. */
	export interface DatabaseMySQLRequest {

		/** Managed MySQL Databases object. */
		allow_list?: DatabaseMySQL;

		/** Managed MySQL Databases object. */
		cluster_size?: DatabaseMySQL;

		/** Managed MySQL Databases object. */
		encrypted?: DatabaseMySQL;

		/**
		 * The Managed Database engine in engine/version format.
		 * Required
		 */
		engine: string;

		/**
		 * Managed MySQL Databases object.
		 * Required
		 */
		label: DatabaseMySQL;

		/**
		 * Managed MySQL Databases object.
		 * Required
		 */
		region: DatabaseMySQL;

		/** Managed MySQL Databases object. */
		replication_type?: DatabaseMySQL;

		/** Managed MySQL Databases object. */
		ssl_connection?: DatabaseMySQL;

		/**
		 * Managed MySQL Databases object.
		 * Required
		 */
		type: DatabaseMySQL;
	}

	/** Managed MySQL Database request object. */
	export interface DatabaseMySQLRequestFormProperties {

		/**
		 * The Managed Database engine in engine/version format.
		 * Required
		 */
		engine: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseMySQLRequestFormGroup() {
		return new FormGroup<DatabaseMySQLRequestFormProperties>({
			engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Managed PostgreSQL Databases object. */
	export interface DatabasePostgreSQL {

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		allow_list?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		cluster_size?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		created?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		encrypted?: Database;

		/** The Managed Database engine type. */
		engine?: string | null;

		/** The primary and secondary hosts for the Managed Database. These are assigned after provisioning is complete. */
		hosts?: DatabasePostgreSQLHosts;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		id?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		label?: Database;

		/** The access port for this Managed Database. */
		port?: number | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		region?: Database;

		/**
		 * The synchronization level of the replicating server.
		 * Must be `local` or `off` for the `asynch` replication type.
		 * Must be `on`, `remote_write`, or `remote_apply` for the `semi_synch` replication type.
		 */
		replication_commit_type?: DatabasePostgreSQLReplication_commit_type | null;

		/**
		 * The replication method used for the Managed Database.
		 * Defaults to `none` for a single cluster and `semi_synch` for a high availability cluster.
		 * Must be `none` for a single node cluster.
		 * Must be `asynch` or `semi_synch` for a high availability cluster.
		 */
		replication_type?: DatabaseMySQLReplication_type | null;

		/**
		 * Whether to require SSL credentials to establish a connection to the Managed Database.
		 * Use the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command for access information.
		 */
		ssl_connection?: boolean | null;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		status?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		type?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		updated?: Database;

		/** A general Managed Database instance object containing properties that are identical for all database types. */
		updates?: Database;

		/** The Managed Database engine version. */
		version?: string | null;
	}

	/** Managed PostgreSQL Databases object. */
	export interface DatabasePostgreSQLFormProperties {

		/** The Managed Database engine type. */
		engine: FormControl<string | null | undefined>,

		/** The access port for this Managed Database. */
		port: FormControl<number | null | undefined>,

		/**
		 * The synchronization level of the replicating server.
		 * Must be `local` or `off` for the `asynch` replication type.
		 * Must be `on`, `remote_write`, or `remote_apply` for the `semi_synch` replication type.
		 */
		replication_commit_type: FormControl<DatabasePostgreSQLReplication_commit_type | null | undefined>,

		/**
		 * The replication method used for the Managed Database.
		 * Defaults to `none` for a single cluster and `semi_synch` for a high availability cluster.
		 * Must be `none` for a single node cluster.
		 * Must be `asynch` or `semi_synch` for a high availability cluster.
		 */
		replication_type: FormControl<DatabaseMySQLReplication_type | null | undefined>,

		/**
		 * Whether to require SSL credentials to establish a connection to the Managed Database.
		 * Use the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command for access information.
		 */
		ssl_connection: FormControl<boolean | null | undefined>,

		/** The Managed Database engine version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDatabasePostgreSQLFormGroup() {
		return new FormGroup<DatabasePostgreSQLFormProperties>({
			engine: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			replication_commit_type: new FormControl<DatabasePostgreSQLReplication_commit_type | null | undefined>(undefined),
			replication_type: new FormControl<DatabaseMySQLReplication_type | null | undefined>(undefined),
			ssl_connection: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatabasePostgreSQLHosts {

		/** The primary host for the Managed Database. */
		primary?: string | null;

		/**
		 * The secondary/private network host for the Managed Database.
		 * A private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.
		 * **Note**: The secondary hostname is publicly viewable and accessible.
		 */
		secondary?: string | null;
	}
	export interface DatabasePostgreSQLHostsFormProperties {

		/** The primary host for the Managed Database. */
		primary: FormControl<string | null | undefined>,

		/**
		 * The secondary/private network host for the Managed Database.
		 * A private network host and a private IP can only be used to access a Database Cluster from Linodes in the same data center and will not incur transfer costs.
		 * **Note**: The secondary hostname is publicly viewable and accessible.
		 */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateDatabasePostgreSQLHostsFormGroup() {
		return new FormGroup<DatabasePostgreSQLHostsFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabasePostgreSQLReplication_commit_type { on = 'on', local = 'local', remote_write = 'remote_write', remote_apply = 'remote_apply', off = 'off' }


	/** Managed PostgreSQL Database request object. */
	export interface DatabasePostgreSQLRequest {

		/** Managed PostgreSQL Databases object. */
		allow_list?: DatabasePostgreSQL;

		/** Managed PostgreSQL Databases object. */
		cluster_size?: DatabasePostgreSQL;

		/** Managed PostgreSQL Databases object. */
		encrypted?: DatabasePostgreSQL;

		/**
		 * The Managed Database engine in engine/version format.
		 * Required
		 */
		engine: string;

		/**
		 * Managed PostgreSQL Databases object.
		 * Required
		 */
		label: DatabasePostgreSQL;

		/**
		 * Managed PostgreSQL Databases object.
		 * Required
		 */
		region: DatabasePostgreSQL;

		/** Managed PostgreSQL Databases object. */
		replication_commit_type?: DatabasePostgreSQL;

		/** Managed PostgreSQL Databases object. */
		replication_type?: DatabasePostgreSQL;

		/** Managed PostgreSQL Databases object. */
		ssl_connection?: DatabasePostgreSQL;

		/**
		 * Managed PostgreSQL Databases object.
		 * Required
		 */
		type: DatabasePostgreSQL;
	}

	/** Managed PostgreSQL Database request object. */
	export interface DatabasePostgreSQLRequestFormProperties {

		/**
		 * The Managed Database engine in engine/version format.
		 * Required
		 */
		engine: FormControl<string | null | undefined>,
	}
	export function CreateDatabasePostgreSQLRequestFormGroup() {
		return new FormGroup<DatabasePostgreSQLRequestFormProperties>({
			engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Managed Database SSL object. */
	export interface DatabaseSSL {

		/** The base64-encoded SSL CA certificate for the Managed Database instance. */
		ca_certificate?: string | null;
	}

	/** Managed Database SSL object. */
	export interface DatabaseSSLFormProperties {

		/** The base64-encoded SSL CA certificate for the Managed Database instance. */
		ca_certificate: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseSSLFormGroup() {
		return new FormGroup<DatabaseSSLFormProperties>({
			ca_certificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managed Database plan type object. */
	export interface DatabaseType {

		/** The compute class category. */
		class?: string | null;

		/** Whether this Database plan type has been deprecated and is no longer available. */
		deprecated?: boolean | null;

		/** The amount of disk space set aside for Databases of this plan type. The value is represented in megabytes. */
		disk?: number | null;
		engines?: DatabaseTypeEngines;

		/** The ID representing the Managed Database node plan type. */
		id?: string | null;

		/** A human-readable string that describes each plan type. For display purposes only. */
		label?: string | null;

		/** The amount of RAM allocated to Database created of this plan type. The value is represented in megabytes. */
		memory?: number | null;

		/** The integer of number CPUs allocated to databases of this plan type. */
		vcpus?: number | null;
	}

	/** Managed Database plan type object. */
	export interface DatabaseTypeFormProperties {

		/** The compute class category. */
		class: FormControl<string | null | undefined>,

		/** Whether this Database plan type has been deprecated and is no longer available. */
		deprecated: FormControl<boolean | null | undefined>,

		/** The amount of disk space set aside for Databases of this plan type. The value is represented in megabytes. */
		disk: FormControl<number | null | undefined>,

		/** The ID representing the Managed Database node plan type. */
		id: FormControl<string | null | undefined>,

		/** A human-readable string that describes each plan type. For display purposes only. */
		label: FormControl<string | null | undefined>,

		/** The amount of RAM allocated to Database created of this plan type. The value is represented in megabytes. */
		memory: FormControl<number | null | undefined>,

		/** The integer of number CPUs allocated to databases of this plan type. */
		vcpus: FormControl<number | null | undefined>,
	}
	export function CreateDatabaseTypeFormGroup() {
		return new FormGroup<DatabaseTypeFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			disk: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			vcpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DatabaseTypeEngines {

		/** Pricing details for MongoDB Managed Databases. */
		mongodb?: Array<DatabaseTypeEngine>;

		/** Pricing details for MySQL Managed Databases. */
		mysql?: Array<DatabaseTypeEngine>;

		/** Pricing details for PostgreSQL Managed Databases. */
		postgresql?: Array<DatabaseTypeEngine>;
	}
	export interface DatabaseTypeEnginesFormProperties {
	}
	export function CreateDatabaseTypeEnginesFormGroup() {
		return new FormGroup<DatabaseTypeEnginesFormProperties>({
		});

	}

	export interface DatabaseTypeEngine {

		/** Cost in US dollars, broken down into hourly and monthly charges. */
		price?: DatabaseTypeEnginePrice;

		/** The number of nodes for the Managed Database cluster for this subscription tier. */
		quantity?: DatabaseTypeEngineQuantity;
	}
	export interface DatabaseTypeEngineFormProperties {

		/** The number of nodes for the Managed Database cluster for this subscription tier. */
		quantity: FormControl<DatabaseTypeEngineQuantity | null | undefined>,
	}
	export function CreateDatabaseTypeEngineFormGroup() {
		return new FormGroup<DatabaseTypeEngineFormProperties>({
			quantity: new FormControl<DatabaseTypeEngineQuantity | null | undefined>(undefined),
		});

	}

	export interface DatabaseTypeEnginePrice {

		/** Cost (in US dollars) per hour for this subscription tier. */
		hourly?: number | null;

		/** Maximum cost (in US dollars) per month for this subscription tier. */
		monthly?: number | null;
	}
	export interface DatabaseTypeEnginePriceFormProperties {

		/** Cost (in US dollars) per hour for this subscription tier. */
		hourly: FormControl<number | null | undefined>,

		/** Maximum cost (in US dollars) per month for this subscription tier. */
		monthly: FormControl<number | null | undefined>,
	}
	export function CreateDatabaseTypeEnginePriceFormGroup() {
		return new FormGroup<DatabaseTypeEnginePriceFormProperties>({
			hourly: new FormControl<number | null | undefined>(undefined),
			monthly: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DatabaseTypeEngineQuantity { _1 = 0, _2 = 1, _3 = 2 }


	/**
	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
	 */
	export interface Device {

		/** The Disk ID, or `null` if a Volume is assigned to this slot. */
		disk_id?: number | null;

		/** The Volume ID, or `null` if a Disk is assigned to this slot. */
		volume_id?: number | null;
	}

	/**
	 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
	 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
	 */
	export interface DeviceFormProperties {

		/** The Disk ID, or `null` if a Volume is assigned to this slot. */
		disk_id: FormControl<number | null | undefined>,

		/** The Volume ID, or `null` if a Disk is assigned to this slot. */
		volume_id: FormControl<number | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			disk_id: new FormControl<number | null | undefined>(undefined),
			volume_id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A dictionary of device disks to use as a device map in a Linode's configuration profile.
	 * * An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
	 * * If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.
	 */
	export interface Devices {

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sda?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdb?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdc?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdd?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sde?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdf?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdg?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdh?: Device;
	}

	/**
	 * A dictionary of device disks to use as a device map in a Linode's configuration profile.
	 * * An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
	 * * If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.
	 */
	export interface DevicesFormProperties {
	}
	export function CreateDevicesFormGroup() {
		return new FormGroup<DevicesFormProperties>({
		});

	}


	/** Disk object request. */
	export interface DiskRequest {

		/**
		 * A list of public SSH keys that will be automatically appended
		 * to the root user's `~/.ssh/authorized_keys` file when deploying from an Image.
		 */
		authorized_keys?: Array<string>;

		/**
		 * A list of usernames. If the usernames have associated SSH keys, the keys will be appended to the root users `~/.ssh/authorized_keys` file automatically when deploying from an Image.
		 */
		authorized_users?: Array<string>;
		filesystem?: Disk;

		/**
		 * An Image ID to deploy the Linode Disk from.
		 * Access the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view
		 * all available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating
		 * a disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Access the User's
		 * Grant Update ([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint to
		 * adjust permissions for an Account Image.
		 */
		image?: string | null;
		label?: Disk;

		/**
		 * This sets the root user's password on a newly-created Linode Disk when deploying from an Image.
		 * * **Required** when creating a Linode Disk from an Image, including when using a StackScript.
		 * * Must meet a password strength score requirement that is calculated internally by the API.
		 * If the strength requirement is not met, you will receive a `Password does not meet strength requirement` error.
		 * Max length: 128
		 * Min length: 7
		 */
		root_pass?: string | null;

		/**
		 * The size of the Disk in MB.
		 * Images require a minimum size. Access the Image View ([GET /images/{imageID}](/docs/api/images/#image-view)) endpoint to view its size.
		 */
		size?: number | null;

		/**
		 * This field is required only if the StackScript being deployed requires input data from the User for successful completion. See [User Defined Fields (UDFs)](/docs/guides/writing-scripts-for-use-with-linode-stackscripts-a-tutorial/#user-defined-fields-udfs) for more details.
		 * This field is required to be valid JSON.
		 * Total length cannot exceed 65,535 characters.
		 * Max length: 65535
		 */
		stackscript_data?: string | null;

		/**
		 * A StackScript ID that will cause the referenced StackScript to be run during
		 * deployment of this Linode. A compatible `image` is required to use a
		 * StackScript. To get a list of available StackScript and their permitted Images
		 * see [/stackscripts](/docs/api/stackscripts/#stackscripts-list).
		 * This field cannot be used when deploying from a Backup or a Private Image.
		 */
		stackscript_id?: number | null;
	}

	/** Disk object request. */
	export interface DiskRequestFormProperties {

		/**
		 * An Image ID to deploy the Linode Disk from.
		 * Access the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view
		 * all available Images. Official Linode Images start with `linode/`, while your Account's Images start with `private/`. Creating
		 * a disk from a Private Image requires `read_only` or `read_write` permissions for that Image. Access the User's
		 * Grant Update ([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint to
		 * adjust permissions for an Account Image.
		 */
		image: FormControl<string | null | undefined>,

		/**
		 * This sets the root user's password on a newly-created Linode Disk when deploying from an Image.
		 * * **Required** when creating a Linode Disk from an Image, including when using a StackScript.
		 * * Must meet a password strength score requirement that is calculated internally by the API.
		 * If the strength requirement is not met, you will receive a `Password does not meet strength requirement` error.
		 * Max length: 128
		 * Min length: 7
		 */
		root_pass: FormControl<string | null | undefined>,

		/**
		 * The size of the Disk in MB.
		 * Images require a minimum size. Access the Image View ([GET /images/{imageID}](/docs/api/images/#image-view)) endpoint to view its size.
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * This field is required only if the StackScript being deployed requires input data from the User for successful completion. See [User Defined Fields (UDFs)](/docs/guides/writing-scripts-for-use-with-linode-stackscripts-a-tutorial/#user-defined-fields-udfs) for more details.
		 * This field is required to be valid JSON.
		 * Total length cannot exceed 65,535 characters.
		 * Max length: 65535
		 */
		stackscript_data: FormControl<string | null | undefined>,

		/**
		 * A StackScript ID that will cause the referenced StackScript to be run during
		 * deployment of this Linode. A compatible `image` is required to use a
		 * StackScript. To get a list of available StackScript and their permitted Images
		 * see [/stackscripts](/docs/api/stackscripts/#stackscripts-list).
		 * This field cannot be used when deploying from a Backup or a Private Image.
		 */
		stackscript_id: FormControl<number | null | undefined>,
	}
	export function CreateDiskRequestFormGroup() {
		return new FormGroup<DiskRequestFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			root_pass: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(128)]),
			size: new FormControl<number | null | undefined>(undefined),
			stackscript_data: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			stackscript_id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
	 */
	export interface Domain {

		/**
		 * The list of IPs that may perform a zone transfer for this Domain. The total combined length of all data within this array cannot exceed 1000 characters.
		 * **Note**: This is potentially dangerous, and should be set to an empty list unless you intend to use it.
		 */
		axfr_ips?: Array<string>;

		/**
		 * A description for this Domain. This is for display purposes only.
		 * Max length: 253
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The domain this Domain represents. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.
		 * Max length: 253
		 * Min length: 1
		 */
		domain?: string | null;

		/**
		 * The amount of time in seconds that may pass before this Domain is no longer
		 * authoritative.
		 * * Valid values are
		 * 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 1209600.
		 */
		expire_sec?: number | null;

		/**
		 * The group this Domain belongs to.  This is for display purposes only.
		 * Max length: 50
		 * Min length: 1
		 */
		group?: string | null;

		/** This Domain's unique ID */
		id?: number | null;

		/**
		 * The IP addresses representing the master DNS for this Domain. At least one value is required for `type` slave Domains. The total combined length of all data within this array cannot exceed 1000 characters.
		 */
		master_ips?: Array<string>;

		/**
		 * The amount of time in seconds before this Domain should be refreshed.
		 * * Valid values are
		 * 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 14400.
		 */
		refresh_sec?: number | null;

		/**
		 * The interval, in seconds, at which a failed refresh should be retried.
		 * * Valid values are
		 * 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 14400.
		 */
		retry_sec?: number | null;

		/**
		 * Start of Authority email address. This is required for `type` master Domains.
		 */
		soa_email?: string | null;

		/**
		 * Used to control whether this Domain is currently being rendered.
		 */
		status?: DomainStatus | null;

		/**
		 * An array of tags applied to this object.  Tags are for organizational purposes only.
		 */
		tags?: Array<string>;

		/**
		 * "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers.
		 * * Valid values are 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 86400.
		 */
		ttl_sec?: number | null;

		/**
		 * Whether this Domain represents the authoritative source of information for the domain it describes ("master"), or whether it is a read-only copy of a master ("slave").
		 */
		type?: DomainType | null;
	}

	/**
	 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
	 */
	export interface DomainFormProperties {

		/**
		 * A description for this Domain. This is for display purposes only.
		 * Max length: 253
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The domain this Domain represents. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.
		 * Max length: 253
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * The amount of time in seconds that may pass before this Domain is no longer
		 * authoritative.
		 * * Valid values are
		 * 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 1209600.
		 */
		expire_sec: FormControl<number | null | undefined>,

		/**
		 * The group this Domain belongs to.  This is for display purposes only.
		 * Max length: 50
		 * Min length: 1
		 */
		group: FormControl<string | null | undefined>,

		/** This Domain's unique ID */
		id: FormControl<number | null | undefined>,

		/**
		 * The amount of time in seconds before this Domain should be refreshed.
		 * * Valid values are
		 * 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 14400.
		 */
		refresh_sec: FormControl<number | null | undefined>,

		/**
		 * The interval, in seconds, at which a failed refresh should be retried.
		 * * Valid values are
		 * 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 14400.
		 */
		retry_sec: FormControl<number | null | undefined>,

		/**
		 * Start of Authority email address. This is required for `type` master Domains.
		 */
		soa_email: FormControl<string | null | undefined>,

		/**
		 * Used to control whether this Domain is currently being rendered.
		 */
		status: FormControl<DomainStatus | null | undefined>,

		/**
		 * "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers.
		 * * Valid values are 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.
		 * * Any other value is rounded up to the nearest valid value.
		 * * A value of 0 is equivalent to the default value of 86400.
		 */
		ttl_sec: FormControl<number | null | undefined>,

		/**
		 * Whether this Domain represents the authoritative source of information for the domain it describes ("master"), or whether it is a read-only copy of a master ("slave").
		 */
		type: FormControl<DomainType | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253)]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253), Validators.pattern('\A(\*\.)?([a-zA-Z0-9-_]{1,63}\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\Z')]),
			expire_sec: new FormControl<number | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			id: new FormControl<number | null | undefined>(undefined),
			refresh_sec: new FormControl<number | null | undefined>(undefined),
			retry_sec: new FormControl<number | null | undefined>(undefined),
			soa_email: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DomainStatus | null | undefined>(undefined),
			ttl_sec: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<DomainType | null | undefined>(undefined),
		});

	}

	export enum DomainStatus { disabled = 'disabled', active = 'active' }

	export enum DomainType { master = 'master', slave = 'slave' }


	/**
	 * A single record on a Domain.
	 */
	export interface DomainRecord {

		/** When this Domain Record was created. */
		created?: Date | null;

		/** This Record's unique ID. */
		id?: number | null;

		/**
		 * The name of this Record. For requests, this property's actual usage and whether it is required depends
		 * on the type of record this represents:
		 * `A` and `AAAA`: The hostname or FQDN of the Record.
		 * `NS`: The subdomain, if any, to use with the Domain of the Record. Wildcard NS records (`*`) are not supported.
		 * `MX`: The mail subdomain. For example, `sub` for the address `user@sub.example.com` under the `example.com`
		 * Domain. Must be an empty string (`""`) for a Null MX Record.
		 * `CNAME`: The hostname. Must be unique. Required.
		 * `TXT`: The hostname.
		 * `SRV`: Unused. Use the `service` property to set the service name for this record.
		 * `CAA`: The subdomain. Omit or enter an empty string (`""`) to apply to the entire Domain.
		 * `PTR`: See our guide on how to [Configure Your Linode for Reverse DNS
		 * (rDNS)](/docs/guides/configure-rdns/).
		 * Max length: 100
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The port this Record points to. Only valid and required for SRV record requests.
		 * Minimum: 0
		 * Maximum: 65535
		 */
		port?: number | null;

		/**
		 * The priority of the target host for this Record. Lower values are preferred. Only valid for
		 * MX and SRV record requests. Required for SRV record requests.
		 * Defaults to `0` for MX record requests. Must be `0` for Null MX records.
		 * Minimum: 0
		 * Maximum: 255
		 */
		priority?: number | null;

		/**
		 * The protocol this Record's service communicates with. An underscore (`_`) is prepended automatically to the submitted value for this property. Only valid for SRV record requests.
		 */
		protocol?: string | null;

		/**
		 * The name of the service. An underscore (`_`) is prepended and a period (`.`) is appended automatically to the submitted value for this property. Only valid and required for SRV record requests.
		 */
		service?: string | null;

		/**
		 * The tag portion of a CAA record. Only valid and required for CAA record requests.
		 */
		tag?: DomainRecordTag | null;

		/**
		 * The target for this Record. For requests, this property's actual usage and whether it is required depends
		 * on the type of record this represents:
		 * `A` and `AAAA`: The IP address. Use `[remote_addr]` to submit the IPv4 address of the request. Required.
		 * `NS`: The name server. Must be a valid domain. Required.
		 * `MX`: The mail server. Must be a valid domain unless creating a Null MX Record. To create a
		 * [Null MX Record](https://datatracker.ietf.org/doc/html/rfc7505), first
		 * [remove](/docs/api/domains/#domain-record-delete) any additional MX records, create an MX record with empty strings
		 * (`""`) for the `target` and `name`. If a Domain has a Null MX record, new MX records cannot be created. Required.
		 * `CNAME`: The alias. Must be a valid domain. Required.
		 * `TXT`: The value. Required.
		 * `SRV`: The target domain or subdomain. If a subdomain is entered, it is automatically used with the Domain.
		 * To configure for a different domain, enter a valid FQDN. For example, the value `www` with a Domain for
		 * `example.com` results in a target set to `www.example.com`, whereas the value `sample.com` results in a
		 * target set to `sample.com`. Required.
		 * `CAA`: The value. For `issue` or `issuewild` tags, the domain of your certificate issuer. For the `iodef`
		 * tag, a contact or submission URL (domain, http, https, or mailto). Requirements depend on the tag for this record:
		 * * `issue`: The domain of your certificate issuer. Must be a valid domain.
		 * * `issuewild`: The domain of your wildcard certificate issuer. Must be a valid domain and must not start with an asterisk (`*`).
		 * * `iodef`: Must be either (1) a valid domain, (2) a valid domain prepended with `http://` or `https://`, or (3) a valid email address prepended with `mailto:`.
		 * `PTR`: Required. See our guide on how to [Configure Your Linode for Reverse DNS
		 * (rDNS)](/docs/guides/configure-rdns/).
		 * With the exception of A, AAAA, and CAA records, this field accepts a trailing period.
		 * Max length: 65535
		 */
		target?: string | null;

		/**
		 * "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
		 */
		ttl_sec?: number | null;

		/**
		 * The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address. For more information, see the guides on [DNS Record Types](/docs/products/networking/dns-manager/guides/#dns-record-types).
		 */
		type?: DomainRecordType | null;

		/** When this Domain Record was last updated. */
		updated?: Date | null;

		/**
		 * The relative weight of this Record used in the case of identical priority. Higher values are preferred. Only valid and required for SRV record requests.
		 * Minimum: 0
		 * Maximum: 65535
		 */
		weight?: number | null;
	}

	/**
	 * A single record on a Domain.
	 */
	export interface DomainRecordFormProperties {

		/** When this Domain Record was created. */
		created: FormControl<Date | null | undefined>,

		/** This Record's unique ID. */
		id: FormControl<number | null | undefined>,

		/**
		 * The name of this Record. For requests, this property's actual usage and whether it is required depends
		 * on the type of record this represents:
		 * `A` and `AAAA`: The hostname or FQDN of the Record.
		 * `NS`: The subdomain, if any, to use with the Domain of the Record. Wildcard NS records (`*`) are not supported.
		 * `MX`: The mail subdomain. For example, `sub` for the address `user@sub.example.com` under the `example.com`
		 * Domain. Must be an empty string (`""`) for a Null MX Record.
		 * `CNAME`: The hostname. Must be unique. Required.
		 * `TXT`: The hostname.
		 * `SRV`: Unused. Use the `service` property to set the service name for this record.
		 * `CAA`: The subdomain. Omit or enter an empty string (`""`) to apply to the entire Domain.
		 * `PTR`: See our guide on how to [Configure Your Linode for Reverse DNS
		 * (rDNS)](/docs/guides/configure-rdns/).
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The port this Record points to. Only valid and required for SRV record requests.
		 * Minimum: 0
		 * Maximum: 65535
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * The priority of the target host for this Record. Lower values are preferred. Only valid for
		 * MX and SRV record requests. Required for SRV record requests.
		 * Defaults to `0` for MX record requests. Must be `0` for Null MX records.
		 * Minimum: 0
		 * Maximum: 255
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * The protocol this Record's service communicates with. An underscore (`_`) is prepended automatically to the submitted value for this property. Only valid for SRV record requests.
		 */
		protocol: FormControl<string | null | undefined>,

		/**
		 * The name of the service. An underscore (`_`) is prepended and a period (`.`) is appended automatically to the submitted value for this property. Only valid and required for SRV record requests.
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * The tag portion of a CAA record. Only valid and required for CAA record requests.
		 */
		tag: FormControl<DomainRecordTag | null | undefined>,

		/**
		 * The target for this Record. For requests, this property's actual usage and whether it is required depends
		 * on the type of record this represents:
		 * `A` and `AAAA`: The IP address. Use `[remote_addr]` to submit the IPv4 address of the request. Required.
		 * `NS`: The name server. Must be a valid domain. Required.
		 * `MX`: The mail server. Must be a valid domain unless creating a Null MX Record. To create a
		 * [Null MX Record](https://datatracker.ietf.org/doc/html/rfc7505), first
		 * [remove](/docs/api/domains/#domain-record-delete) any additional MX records, create an MX record with empty strings
		 * (`""`) for the `target` and `name`. If a Domain has a Null MX record, new MX records cannot be created. Required.
		 * `CNAME`: The alias. Must be a valid domain. Required.
		 * `TXT`: The value. Required.
		 * `SRV`: The target domain or subdomain. If a subdomain is entered, it is automatically used with the Domain.
		 * To configure for a different domain, enter a valid FQDN. For example, the value `www` with a Domain for
		 * `example.com` results in a target set to `www.example.com`, whereas the value `sample.com` results in a
		 * target set to `sample.com`. Required.
		 * `CAA`: The value. For `issue` or `issuewild` tags, the domain of your certificate issuer. For the `iodef`
		 * tag, a contact or submission URL (domain, http, https, or mailto). Requirements depend on the tag for this record:
		 * * `issue`: The domain of your certificate issuer. Must be a valid domain.
		 * * `issuewild`: The domain of your wildcard certificate issuer. Must be a valid domain and must not start with an asterisk (`*`).
		 * * `iodef`: Must be either (1) a valid domain, (2) a valid domain prepended with `http://` or `https://`, or (3) a valid email address prepended with `mailto:`.
		 * `PTR`: Required. See our guide on how to [Configure Your Linode for Reverse DNS
		 * (rDNS)](/docs/guides/configure-rdns/).
		 * With the exception of A, AAAA, and CAA records, this field accepts a trailing period.
		 * Max length: 65535
		 */
		target: FormControl<string | null | undefined>,

		/**
		 * "Time to Live" - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.
		 */
		ttl_sec: FormControl<number | null | undefined>,

		/**
		 * The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address. For more information, see the guides on [DNS Record Types](/docs/products/networking/dns-manager/guides/#dns-record-types).
		 */
		type: FormControl<DomainRecordType | null | undefined>,

		/** When this Domain Record was last updated. */
		updated: FormControl<Date | null | undefined>,

		/**
		 * The relative weight of this Record used in the case of identical priority. Higher values are preferred. Only valid and required for SRV record requests.
		 * Minimum: 0
		 * Maximum: 65535
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateDomainRecordFormGroup() {
		return new FormGroup<DomainRecordFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			protocol: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<DomainRecordTag | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			ttl_sec: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<DomainRecordType | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
		});

	}

	export enum DomainRecordTag { issue = 'issue', issuewild = 'issuewild', iodef = 'iodef' }

	export enum DomainRecordType { A = 'A', AAAA = 'AAAA', NS = 'NS', MX = 'MX', CNAME = 'CNAME', TXT = 'TXT', SRV = 'SRV', PTR = 'PTR', CAA = 'CAA' }


	/**
	 * An object representing an Entity Transfer.
	 */
	export interface EntityTransfer {

		/**
		 * When this transfer was created.
		 */
		created?: Date | null;

		/**
		 * A collection of the entities to include in this transfer request, separated by type.
		 */
		entities?: EntityTransferEntities;

		/**
		 * When this transfer expires. Transfers will automatically expire 24 hours after creation.
		 */
		expiry?: Date | null;

		/**
		 * If the requesting account created this transfer.
		 */
		is_sender?: boolean | null;

		/**
		 * The status of the transfer request.
		 * `accepted`: The transfer has been accepted by another user and is currently in progress. Transfers can take up to 3 hours to complete.
		 * `cancelled`: The transfer has been cancelled by the sender.
		 * `completed`: The transfer has completed successfully.
		 * `failed`: The transfer has failed after initiation.
		 * `pending`: The transfer is ready to be accepted.
		 * `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or cancelled.
		 */
		status?: EntityTransferStatus | null;

		/**
		 * The token used to identify and accept or cancel this transfer.
		 */
		token?: string | null;

		/**
		 * When this transfer was last updated.
		 */
		updated?: Date | null;
	}

	/**
	 * An object representing an Entity Transfer.
	 */
	export interface EntityTransferFormProperties {

		/**
		 * When this transfer was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * When this transfer expires. Transfers will automatically expire 24 hours after creation.
		 */
		expiry: FormControl<Date | null | undefined>,

		/**
		 * If the requesting account created this transfer.
		 */
		is_sender: FormControl<boolean | null | undefined>,

		/**
		 * The status of the transfer request.
		 * `accepted`: The transfer has been accepted by another user and is currently in progress. Transfers can take up to 3 hours to complete.
		 * `cancelled`: The transfer has been cancelled by the sender.
		 * `completed`: The transfer has completed successfully.
		 * `failed`: The transfer has failed after initiation.
		 * `pending`: The transfer is ready to be accepted.
		 * `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or cancelled.
		 */
		status: FormControl<EntityTransferStatus | null | undefined>,

		/**
		 * The token used to identify and accept or cancel this transfer.
		 */
		token: FormControl<string | null | undefined>,

		/**
		 * When this transfer was last updated.
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateEntityTransferFormGroup() {
		return new FormGroup<EntityTransferFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			is_sender: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<EntityTransferStatus | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EntityTransferEntities {

		/**
		 * An array containing the IDs of each of the Linodes included in this transfer.
		 */
		linodes?: Array<number>;
	}
	export interface EntityTransferEntitiesFormProperties {
	}
	export function CreateEntityTransferEntitiesFormGroup() {
		return new FormGroup<EntityTransferEntitiesFormProperties>({
		});

	}

	export enum EntityTransferStatus { accepted = 'accepted', cancelled = 'cancelled', completed = 'completed', failed = 'failed', pending = 'pending', stale = 'stale' }


	/**
	 * An object for describing a single error that occurred during the processing of a request.
	 */
	export interface ErrorObject {

		/**
		 * The field in the request that caused this error. This may be a path, separated by periods in the case of nested fields. In some cases this may come back as "null" if the error is not specific to any single element of the request.
		 */
		field?: string | null;

		/**
		 * What happened to cause this error. In most cases, this can be fixed immediately by changing the data you sent in the request, but in some cases you will be instructed to [open a Support Ticket](/docs/api/support/#support-ticket-open) or perform some other action before you can complete the request successfully.
		 */
		reason?: string | null;
	}

	/**
	 * An object for describing a single error that occurred during the processing of a request.
	 */
	export interface ErrorObjectFormProperties {

		/**
		 * The field in the request that caused this error. This may be a path, separated by periods in the case of nested fields. In some cases this may come back as "null" if the error is not specific to any single element of the request.
		 */
		field: FormControl<string | null | undefined>,

		/**
		 * What happened to cause this error. In most cases, this can be fixed immediately by changing the data you sent in the request, but in some cases you will be instructed to [open a Support Ticket](/docs/api/support/#support-ticket-open) or perform some other action before you can complete the request successfully.
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateErrorObjectFormGroup() {
		return new FormGroup<ErrorObjectFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.
	 * The Events returned depends on your grants.
	 */
	export interface Event {

		/**
		 * The action that caused this Event. New actions may be added in the future.
		 */
		action?: EventAction | null;

		/** When this Event was created. */
		created?: Date | null;

		/**
		 * The total duration in seconds that it takes for the Event to complete.
		 */
		duration?: number | null;

		/**
		 * Detailed information about the Event's entity, including ID, type, label, and URL used to access it.
		 */
		entity?: EventEntity;

		/** The unique ID of this Event. */
		id?: number | null;

		/**
		 * Provides additional information about the event. Additional information may include, but is not limited to, a more detailed representation of events which can help diagnose non-obvious failures.
		 */
		message?: string | null;

		/**
		 * A percentage estimating the amount of time remaining for an Event.
		 * Returns `null` for notification events.
		 */
		percent_complete?: number | null;

		/**
		 * The rate of completion of the Event. Only some Events will return rate; for example, migration and resize Events.
		 */
		rate?: string | null;

		/** If this Event has been read. */
		read?: boolean | null;

		/**
		 * Detailed information about the Event's secondary entity, which provides additional information
		 * for events such as, but not limited to, `linode_boot`, `linode_reboot`, `linode_create`, and `linode_clone` Event actions.
		 */
		secondary_entity?: EventSecondary_entity;

		/** If this Event has been seen. */
		seen?: boolean | null;

		/** The current status of this Event. */
		status?: EventStatus | null;

		/**
		 * The estimated time remaining until the completion of this Event. This value is only returned for some in-progress migration events. For all other in-progress events, the `percent_complete` attribute will indicate about how much more work is to be done.
		 */
		time_remaining?: string | null;

		/**
		 * The username of the User who caused the Event.
		 */
		username?: string | null;
	}

	/**
	 * A collection of Event objects. An Event is an action taken against an entity related to your Account. For example, booting a Linode would create an Event.
	 * The Events returned depends on your grants.
	 */
	export interface EventFormProperties {

		/**
		 * The action that caused this Event. New actions may be added in the future.
		 */
		action: FormControl<EventAction | null | undefined>,

		/** When this Event was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * The total duration in seconds that it takes for the Event to complete.
		 */
		duration: FormControl<number | null | undefined>,

		/** The unique ID of this Event. */
		id: FormControl<number | null | undefined>,

		/**
		 * Provides additional information about the event. Additional information may include, but is not limited to, a more detailed representation of events which can help diagnose non-obvious failures.
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * A percentage estimating the amount of time remaining for an Event.
		 * Returns `null` for notification events.
		 */
		percent_complete: FormControl<number | null | undefined>,

		/**
		 * The rate of completion of the Event. Only some Events will return rate; for example, migration and resize Events.
		 */
		rate: FormControl<string | null | undefined>,

		/** If this Event has been read. */
		read: FormControl<boolean | null | undefined>,

		/** If this Event has been seen. */
		seen: FormControl<boolean | null | undefined>,

		/** The current status of this Event. */
		status: FormControl<EventStatus | null | undefined>,

		/**
		 * The estimated time remaining until the completion of this Event. This value is only returned for some in-progress migration events. For all other in-progress events, the `percent_complete` attribute will indicate about how much more work is to be done.
		 */
		time_remaining: FormControl<string | null | undefined>,

		/**
		 * The username of the User who caused the Event.
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			action: new FormControl<EventAction | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			percent_complete: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			seen: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<EventStatus | null | undefined>(undefined),
			time_remaining: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventAction { account_update = 'account_update', account_settings_update = 'account_settings_update', backups_enable = 'backups_enable', backups_cancel = 'backups_cancel', backups_restore = 'backups_restore', community_question_reply = 'community_question_reply', community_like = 'community_like', credit_card_updated = 'credit_card_updated', disk_create = 'disk_create', disk_delete = 'disk_delete', disk_update = 'disk_update', disk_duplicate = 'disk_duplicate', disk_imagize = 'disk_imagize', disk_resize = 'disk_resize', dns_record_create = 'dns_record_create', dns_record_delete = 'dns_record_delete', dns_record_update = 'dns_record_update', dns_zone_create = 'dns_zone_create', dns_zone_delete = 'dns_zone_delete', dns_zone_import = 'dns_zone_import', dns_zone_update = 'dns_zone_update', entity_transfer_accept = 'entity_transfer_accept', entity_transfer_cancel = 'entity_transfer_cancel', entity_transfer_create = 'entity_transfer_create', entity_transfer_fail = 'entity_transfer_fail', entity_transfer_stale = 'entity_transfer_stale', firewall_create = 'firewall_create', firewall_delete = 'firewall_delete', firewall_disable = 'firewall_disable', firewall_enable = 'firewall_enable', firewall_update = 'firewall_update', firewall_device_add = 'firewall_device_add', firewall_device_remove = 'firewall_device_remove', host_reboot = 'host_reboot', image_delete = 'image_delete', image_update = 'image_update', image_upload = 'image_upload', ipaddress_update = 'ipaddress_update', lassie_reboot = 'lassie_reboot', lish_boot = 'lish_boot', linode_addip = 'linode_addip', linode_boot = 'linode_boot', linode_clone = 'linode_clone', linode_create = 'linode_create', linode_delete = 'linode_delete', linode_update = 'linode_update', linode_deleteip = 'linode_deleteip', linode_migrate = 'linode_migrate', linode_migrate_datacenter = 'linode_migrate_datacenter', linode_migrate_datacenter_create = 'linode_migrate_datacenter_create', linode_mutate = 'linode_mutate', linode_mutate_create = 'linode_mutate_create', linode_reboot = 'linode_reboot', linode_rebuild = 'linode_rebuild', linode_resize = 'linode_resize', linode_resize_create = 'linode_resize_create', linode_shutdown = 'linode_shutdown', linode_snapshot = 'linode_snapshot', linode_config_create = 'linode_config_create', linode_config_delete = 'linode_config_delete', linode_config_update = 'linode_config_update', lke_node_create = 'lke_node_create', longviewclient_create = 'longviewclient_create', longviewclient_delete = 'longviewclient_delete', longviewclient_update = 'longviewclient_update', managed_disabled = 'managed_disabled', managed_enabled = 'managed_enabled', managed_service_create = 'managed_service_create', managed_service_delete = 'managed_service_delete', nodebalancer_create = 'nodebalancer_create', nodebalancer_delete = 'nodebalancer_delete', nodebalancer_update = 'nodebalancer_update', nodebalancer_config_create = 'nodebalancer_config_create', nodebalancer_config_delete = 'nodebalancer_config_delete', nodebalancer_config_update = 'nodebalancer_config_update', nodebalancer_node_create = 'nodebalancer_node_create', nodebalancer_node_delete = 'nodebalancer_node_delete', nodebalancer_node_update = 'nodebalancer_node_update', oauth_client_create = 'oauth_client_create', oauth_client_delete = 'oauth_client_delete', oauth_client_secret_reset = 'oauth_client_secret_reset', oauth_client_update = 'oauth_client_update', password_reset = 'password_reset', payment_method_add = 'payment_method_add', payment_submitted = 'payment_submitted', profile_update = 'profile_update', stackscript_create = 'stackscript_create', stackscript_delete = 'stackscript_delete', stackscript_update = 'stackscript_update', stackscript_publicize = 'stackscript_publicize', stackscript_revise = 'stackscript_revise', tag_create = 'tag_create', tag_delete = 'tag_delete', tfa_disabled = 'tfa_disabled', tfa_enabled = 'tfa_enabled', ticket_attachment_upload = 'ticket_attachment_upload', ticket_create = 'ticket_create', ticket_update = 'ticket_update', token_create = 'token_create', token_delete = 'token_delete', token_update = 'token_update', user_create = 'user_create', user_update = 'user_update', user_delete = 'user_delete', user_ssh_key_add = 'user_ssh_key_add', user_ssh_key_delete = 'user_ssh_key_delete', user_ssh_key_update = 'user_ssh_key_update', vlan_attach = 'vlan_attach', vlan_detach = 'vlan_detach', volume_attach = 'volume_attach', volume_clone = 'volume_clone', volume_create = 'volume_create', volume_delete = 'volume_delete', volume_update = 'volume_update', volume_detach = 'volume_detach', volume_resize = 'volume_resize' }

	export interface EventEntity {

		/**
		 * The unique ID for an Event's entity.
		 * Some Event entities do not have IDs associated with them, so they
		 * will not be returned when filtering by ID. These Events include:
		 * * `account`
		 * * `profile`
		 * Entities for some Events are assigned the ID of the Linode they correspond to.
		 * When filtering by ID for these Events, use the corresponding Linode's ID.
		 * These Events include:
		 * * `disks`
		 * * `backups`
		 * Tag Events use a tag's name for the entity ID field. When filtering by ID
		 * for tag Events, supply the name of the tag.
		 */
		id?: number | null;

		/**
		 * The current label of this object. The label may reflect changes that occur with this Event.
		 */
		label?: string | null;

		/**
		 * The type of entity that is being referenced by the Event.
		 */
		type?: EventEntityType | null;

		/**
		 * The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.
		 */
		url?: string | null;
	}
	export interface EventEntityFormProperties {

		/**
		 * The unique ID for an Event's entity.
		 * Some Event entities do not have IDs associated with them, so they
		 * will not be returned when filtering by ID. These Events include:
		 * * `account`
		 * * `profile`
		 * Entities for some Events are assigned the ID of the Linode they correspond to.
		 * When filtering by ID for these Events, use the corresponding Linode's ID.
		 * These Events include:
		 * * `disks`
		 * * `backups`
		 * Tag Events use a tag's name for the entity ID field. When filtering by ID
		 * for tag Events, supply the name of the tag.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The current label of this object. The label may reflect changes that occur with this Event.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The type of entity that is being referenced by the Event.
		 */
		type: FormControl<EventEntityType | null | undefined>,

		/**
		 * The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventEntityFormGroup() {
		return new FormGroup<EventEntityFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventEntityType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventEntityType { account = 'account', backups = 'backups', community = 'community', disks = 'disks', domain = 'domain', entity_transfer = 'entity_transfer', firewall = 'firewall', image = 'image', ipaddress = 'ipaddress', linode = 'linode', longview = 'longview', managed_service = 'managed_service', nodebalancer = 'nodebalancer', oauth_client = 'oauth_client', profile = 'profile', stackscript = 'stackscript', tag = 'tag', ticket = 'ticket', token = 'token', user = 'user', user_ssh_key = 'user_ssh_key', volume = 'volume' }

	export interface EventSecondary_entity {

		/**
		 * The ID of the object that is the secondary entity.
		 */
		id?: string | null;

		/**
		 * The label of this object.
		 */
		label?: string | null;

		/**
		 * The type of entity that is being referenced by the Event.
		 */
		type?: string | null;

		/**
		 * The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.
		 */
		url?: string | null;
	}
	export interface EventSecondary_entityFormProperties {

		/**
		 * The ID of the object that is the secondary entity.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The label of this object.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The type of entity that is being referenced by the Event.
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The URL where you can access the object this Event is for. If a relative URL, it is relative to the domain you retrieved the Event from.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventSecondary_entityFormGroup() {
		return new FormGroup<EventSecondary_entityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventStatus { failed = 'failed', finished = 'finished', notification = 'notification', scheduled = 'scheduled', started = 'started' }


	/**
	 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
	 */
	export interface Firewall {

		/**
		 * When this Firewall was created.
		 */
		created?: Date | null;

		/**
		 * The Firewall's unique ID.
		 */
		id?: number | null;

		/**
		 * The Firewall's label, for display purposes only.
		 * Firewall labels have the following constraints:
		 * * Must begin and end with an alphanumeric character.
		 * * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).
		 * * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.
		 * * Must be between 3 and 32 characters.
		 * * Must be unique.
		 * Max length: 32
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * The inbound and outbound access rules to apply to the Firewall.
		 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
		 */
		rules?: FirewallRules;

		/**
		 * The status of this Firewall.
		 * * When a Firewall is first created its status is `enabled`.
		 * * Use the [Update Firewall](/docs/api/networking/#firewall-update) endpoint to set a Firewall's status to `enabled` or `disabled`.
		 * * Use the [Delete Firewall](/docs/api/networking/#firewall-delete) endpoint to delete a Firewall.
		 */
		status?: FirewallStatus | null;

		/**
		 * An array of tags applied to this object. Tags are for organizational purposes only.
		 */
		tags?: Array<string>;

		/**
		 * When this Firewall was last updated.
		 */
		updated?: Date | null;
	}

	/**
	 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
	 */
	export interface FirewallFormProperties {

		/**
		 * When this Firewall was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * The Firewall's unique ID.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The Firewall's label, for display purposes only.
		 * Firewall labels have the following constraints:
		 * * Must begin and end with an alphanumeric character.
		 * * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).
		 * * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.
		 * * Must be between 3 and 32 characters.
		 * * Must be unique.
		 * Max length: 32
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The status of this Firewall.
		 * * When a Firewall is first created its status is `enabled`.
		 * * Use the [Update Firewall](/docs/api/networking/#firewall-update) endpoint to set a Firewall's status to `enabled` or `disabled`.
		 * * Use the [Delete Firewall](/docs/api/networking/#firewall-delete) endpoint to delete a Firewall.
		 */
		status: FormControl<FirewallStatus | null | undefined>,

		/**
		 * When this Firewall was last updated.
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateFirewallFormGroup() {
		return new FormGroup<FirewallFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(32), Validators.pattern('^[a-zA-Z]((?!--|__|..)[a-zA-Z0-9-_.])+$')]),
			status: new FormControl<FirewallStatus | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FirewallRules {

		/**
		 * The inbound rules for the firewall, as a JSON array.
		 */
		inbound?: Array<FirewallRuleConfig>;

		/**
		 * The default behavior for inbound traffic. This setting can be overridden by [updating](/docs/api/networking/#firewall-rules-update) the `inbound.action` property of the Firewall Rule.
		 */
		inbound_policy?: FirewallRuleConfigAction | null;

		/**
		 * The outbound rules for the firewall, as a JSON array.
		 */
		outbound?: Array<FirewallRuleConfig>;

		/**
		 * The default behavior for outbound traffic. This setting can be overridden by [updating](/docs/api/networking/#firewall-rules-update) the `outbound.action` property of the Firewall Rule.
		 */
		outbound_policy?: FirewallRuleConfigAction | null;
	}
	export interface FirewallRulesFormProperties {

		/**
		 * The default behavior for inbound traffic. This setting can be overridden by [updating](/docs/api/networking/#firewall-rules-update) the `inbound.action` property of the Firewall Rule.
		 */
		inbound_policy: FormControl<FirewallRuleConfigAction | null | undefined>,

		/**
		 * The default behavior for outbound traffic. This setting can be overridden by [updating](/docs/api/networking/#firewall-rules-update) the `outbound.action` property of the Firewall Rule.
		 */
		outbound_policy: FormControl<FirewallRuleConfigAction | null | undefined>,
	}
	export function CreateFirewallRulesFormGroup() {
		return new FormGroup<FirewallRulesFormProperties>({
			inbound_policy: new FormControl<FirewallRuleConfigAction | null | undefined>(undefined),
			outbound_policy: new FormControl<FirewallRuleConfigAction | null | undefined>(undefined),
		});

	}


	/**
	 * One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.
	 */
	export interface FirewallRuleConfig {

		/**
		 * Controls whether traffic is accepted or dropped by this rule. Overrides the Firewall's `inbound_policy` if this is an inbound rule, or the `outbound_policy` if this is an outbound rule.
		 */
		action?: FirewallRuleConfigAction | null;

		/**
		 * Allowed IPv4 or IPv6 addresses. A Rule can have up to 255 addresses or networks listed across its IPv4 and IPv6 arrays. A network and a single IP are treated as equivalent when accounting for this limit.
		 */
		addresses?: FirewallRuleConfigAddresses;

		/**
		 * Used to describe this rule. For display purposes only.
		 * Max length: 100
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Used to identify this rule. For display purposes only.
		 * Max length: 32
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * A string representing the port or ports on which traffic will be allowed:
		 * - The string may be a single port, a range of ports, or a comma-separated list of single ports and port ranges. A space is permitted following each comma.
		 * - A range of ports is inclusive of the start and end values for the range. The end value of the range must be greater than the start value.
		 * - Ports must be within 1 and 65535, and may not contain any leading zeroes. For example, port "080" is not allowed.
		 * - Ports may not be specified if a rule's protocol is `ICMP` or `IPENCAP`.
		 * - At least one port must be specified if a rule's protocol is `TCP` or `UDP`.
		 * - The ports string can have up to 15 *pieces*, where a single port is treated as one piece, and a port range is treated as two pieces. For example, the string "22-24, 80, 443" has four pieces.
		 */
		ports?: string | null;

		/**
		 * The type of network traffic to allow.
		 */
		protocol?: FirewallRuleConfigProtocol | null;
	}

	/**
	 * One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.
	 */
	export interface FirewallRuleConfigFormProperties {

		/**
		 * Controls whether traffic is accepted or dropped by this rule. Overrides the Firewall's `inbound_policy` if this is an inbound rule, or the `outbound_policy` if this is an outbound rule.
		 */
		action: FormControl<FirewallRuleConfigAction | null | undefined>,

		/**
		 * Used to describe this rule. For display purposes only.
		 * Max length: 100
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Used to identify this rule. For display purposes only.
		 * Max length: 32
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * A string representing the port or ports on which traffic will be allowed:
		 * - The string may be a single port, a range of ports, or a comma-separated list of single ports and port ranges. A space is permitted following each comma.
		 * - A range of ports is inclusive of the start and end values for the range. The end value of the range must be greater than the start value.
		 * - Ports must be within 1 and 65535, and may not contain any leading zeroes. For example, port "080" is not allowed.
		 * - Ports may not be specified if a rule's protocol is `ICMP` or `IPENCAP`.
		 * - At least one port must be specified if a rule's protocol is `TCP` or `UDP`.
		 * - The ports string can have up to 15 *pieces*, where a single port is treated as one piece, and a port range is treated as two pieces. For example, the string "22-24, 80, 443" has four pieces.
		 */
		ports: FormControl<string | null | undefined>,

		/**
		 * The type of network traffic to allow.
		 */
		protocol: FormControl<FirewallRuleConfigProtocol | null | undefined>,
	}
	export function CreateFirewallRuleConfigFormGroup() {
		return new FormGroup<FirewallRuleConfigFormProperties>({
			action: new FormControl<FirewallRuleConfigAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(32)]),
			ports: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<FirewallRuleConfigProtocol | null | undefined>(undefined),
		});

	}

	export enum FirewallRuleConfigAction { ACCEPT = 'ACCEPT', DROP = 'DROP' }

	export interface FirewallRuleConfigAddresses {

		/** A list of IPv4 addresses or networks. Must be in IP/mask format. */
		ipv4?: Array<string>;

		/** A list of IPv6 addresses or networks. Must be in IP/mask format. */
		ipv6?: Array<string>;
	}
	export interface FirewallRuleConfigAddressesFormProperties {
	}
	export function CreateFirewallRuleConfigAddressesFormGroup() {
		return new FormGroup<FirewallRuleConfigAddressesFormProperties>({
		});

	}

	export enum FirewallRuleConfigProtocol { TCP = 'TCP', UDP = 'UDP', ICMP = 'ICMP', IPENCAP = 'IPENCAP' }

	export enum FirewallStatus { enabled = 'enabled', disabled = 'disabled', deleted = 'deleted' }


	/**
	 * Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
	 */
	export interface FirewallDevices {

		/**
		 * When this Device was created.
		 */
		created?: Date | null;

		/**
		 * The Linode service that this Firewall has been applied to.
		 */
		entity?: FirewallDevicesEntity;

		/**
		 * The Device's unique ID
		 */
		id?: number | null;

		/**
		 * When this Device was last updated.
		 */
		updated?: Date | null;
	}

	/**
	 * Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
	 */
	export interface FirewallDevicesFormProperties {

		/**
		 * When this Device was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * The Device's unique ID
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * When this Device was last updated.
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateFirewallDevicesFormGroup() {
		return new FormGroup<FirewallDevicesFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FirewallDevicesEntity {

		/** The entity's ID */
		id?: number | null;

		/** The entity's label. */
		label?: string | null;

		/** The entity's type. */
		type?: FirewallDevicesEntityType | null;

		/**
		 * The URL you can use to access this entity.
		 */
		url?: string | null;
	}
	export interface FirewallDevicesEntityFormProperties {

		/** The entity's ID */
		id: FormControl<number | null | undefined>,

		/** The entity's label. */
		label: FormControl<string | null | undefined>,

		/** The entity's type. */
		type: FormControl<FirewallDevicesEntityType | null | undefined>,

		/**
		 * The URL you can use to access this entity.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFirewallDevicesEntityFormGroup() {
		return new FormGroup<FirewallDevicesEntityFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FirewallDevicesEntityType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirewallDevicesEntityType { linode = 'linode' }


	/** Google Pay information. */
	export interface GooglePayData {

		/** The type of credit card. */
		card_type?: string | null;

		/** The expiration month and year of the credit card. */
		expiry?: string | null;

		/** The last four digits of the credit card number. */
		last_four?: string | null;
	}

	/** Google Pay information. */
	export interface GooglePayDataFormProperties {

		/** The type of credit card. */
		card_type: FormControl<string | null | undefined>,

		/** The expiration month and year of the credit card. */
		expiry: FormControl<string | null | undefined>,

		/** The last four digits of the credit card number. */
		last_four: FormControl<string | null | undefined>,
	}
	export function CreateGooglePayDataFormGroup() {
		return new FormGroup<GooglePayDataFormProperties>({
			card_type: new FormControl<string | null | undefined>(undefined),
			expiry: new FormControl<string | null | undefined>(undefined),
			last_four: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents the level of access a restricted User has to a specific resource on the Account.
	 */
	export interface Grant {

		/**
		 * The ID of the entity this grant applies to.
		 */
		id?: number | null;

		/**
		 * The current label of the entity this grant applies to, for display purposes.
		 */
		label?: string | null;

		/**
		 * The level of access this User has to this entity.  If null, this User has no access.
		 */
		permissions?: GrantPermissions | null;
	}

	/**
	 * Represents the level of access a restricted User has to a specific resource on the Account.
	 */
	export interface GrantFormProperties {

		/**
		 * The ID of the entity this grant applies to.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The current label of the entity this grant applies to, for display purposes.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The level of access this User has to this entity.  If null, this User has no access.
		 */
		permissions: FormControl<GrantPermissions | null | undefined>,
	}
	export function CreateGrantFormGroup() {
		return new FormGroup<GrantFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<GrantPermissions | null | undefined>(undefined),
		});

	}

	export enum GrantPermissions { read_only = 'read_only', read_write = 'read_write' }


	/**
	 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
	 */
	export interface GrantsResponse {

		/**
		 * The grants this User has for each Database that is owned by this Account.
		 */
		database?: Array<Grant>;

		/**
		 * The grants this User has for each Domain that is owned by this Account.
		 */
		domain?: Array<Grant>;

		/**
		 * A structure containing the Account-level grants a User has.
		 */
		global?: GrantsResponseGlobal;

		/**
		 * The grants this User has for each Image that is owned by this Account.
		 */
		image?: Array<Grant>;

		/**
		 * The grants this User has for each Linode that is owned by this Account.
		 */
		linode?: Array<Grant>;

		/**
		 * The grants this User has for each Longview Client that is owned by this Account.
		 */
		longview?: Array<Grant>;

		/**
		 * The grants this User has for each NodeBalancer that is owned by this Account.
		 */
		nodebalancer?: Array<Grant>;

		/**
		 * The grants this User has for each StackScript that is owned by this Account.
		 */
		stackscript?: Array<Grant>;

		/**
		 * The grants this User has for each Block Storage Volume that is owned by this Account.
		 */
		volume?: Array<Grant>;
	}

	/**
	 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
	 */
	export interface GrantsResponseFormProperties {
	}
	export function CreateGrantsResponseFormGroup() {
		return new FormGroup<GrantsResponseFormProperties>({
		});

	}

	export interface GrantsResponseGlobal {

		/**
		 * The level of access this User has to Account-level actions, like billing information. A restricted User will never be able to manage users.
		 */
		account_access?: GrantPermissions | null;

		/** if true, this User may add Managed Databases. */
		add_databases?: boolean | null;

		/** If true, this User may add Domains. */
		add_domains?: boolean | null;

		/** If true, this User may add Firewalls. */
		add_firewalls?: boolean | null;

		/** If true, this User may add Images. */
		add_images?: boolean | null;

		/** If true, this User may create Linodes. */
		add_linodes?: boolean | null;

		/** If true, this User may create Longview clients and view the current plan. */
		add_longview?: boolean | null;

		/** If true, this User may add NodeBalancers. */
		add_nodebalancers?: boolean | null;

		/** If true, this User may add StackScripts. */
		add_stackscripts?: boolean | null;

		/** If true, this User may add Volumes. */
		add_volumes?: boolean | null;

		/** If true, this User may cancel the entire Account. */
		cancel_account?: boolean | null;

		/** If true, this User may manage the Account's Longview subscription. */
		longview_subscription?: boolean | null;
	}
	export interface GrantsResponseGlobalFormProperties {

		/**
		 * The level of access this User has to Account-level actions, like billing information. A restricted User will never be able to manage users.
		 */
		account_access: FormControl<GrantPermissions | null | undefined>,

		/** if true, this User may add Managed Databases. */
		add_databases: FormControl<boolean | null | undefined>,

		/** If true, this User may add Domains. */
		add_domains: FormControl<boolean | null | undefined>,

		/** If true, this User may add Firewalls. */
		add_firewalls: FormControl<boolean | null | undefined>,

		/** If true, this User may add Images. */
		add_images: FormControl<boolean | null | undefined>,

		/** If true, this User may create Linodes. */
		add_linodes: FormControl<boolean | null | undefined>,

		/** If true, this User may create Longview clients and view the current plan. */
		add_longview: FormControl<boolean | null | undefined>,

		/** If true, this User may add NodeBalancers. */
		add_nodebalancers: FormControl<boolean | null | undefined>,

		/** If true, this User may add StackScripts. */
		add_stackscripts: FormControl<boolean | null | undefined>,

		/** If true, this User may add Volumes. */
		add_volumes: FormControl<boolean | null | undefined>,

		/** If true, this User may cancel the entire Account. */
		cancel_account: FormControl<boolean | null | undefined>,

		/** If true, this User may manage the Account's Longview subscription. */
		longview_subscription: FormControl<boolean | null | undefined>,
	}
	export function CreateGrantsResponseGlobalFormGroup() {
		return new FormGroup<GrantsResponseGlobalFormProperties>({
			account_access: new FormControl<GrantPermissions | null | undefined>(undefined),
			add_databases: new FormControl<boolean | null | undefined>(undefined),
			add_domains: new FormControl<boolean | null | undefined>(undefined),
			add_firewalls: new FormControl<boolean | null | undefined>(undefined),
			add_images: new FormControl<boolean | null | undefined>(undefined),
			add_linodes: new FormControl<boolean | null | undefined>(undefined),
			add_longview: new FormControl<boolean | null | undefined>(undefined),
			add_nodebalancers: new FormControl<boolean | null | undefined>(undefined),
			add_stackscripts: new FormControl<boolean | null | undefined>(undefined),
			add_volumes: new FormControl<boolean | null | undefined>(undefined),
			cancel_account: new FormControl<boolean | null | undefined>(undefined),
			longview_subscription: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * An IP address that exists in Linode's system, either IPv4 or IPv6.
	 */
	export interface IPAddress {

		/**
		 * The IP address.
		 */
		address?: string | null;

		/**
		 * The default gateway for this address.
		 */
		gateway?: string | null;

		/**
		 * The ID of the Linode this address currently belongs to. For IPv4 addresses, this is by default the Linode that this address was assigned to on creation, and these addresses my be moved using the [/networking/ipv4/assign](/docs/api/networking/#ips-to-linodes-assign) endpoint. For SLAAC and link-local addresses, this value may not be changed.
		 */
		linode_id?: number | null;

		/**
		 * The number of bits set in the subnet mask.
		 */
		prefix?: number | null;

		/**
		 * Whether this is a public or private IP address.
		 */
		public?: boolean | null;

		/**
		 * The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
		 */
		rdns?: string | null;

		/**
		 * The Region this IP address resides in.
		 */
		region?: string | null;

		/**
		 * The mask that separates host bits from network bits for this address.
		 */
		subnet_mask?: string | null;

		/**
		 * The type of address this is.
		 */
		type?: IPAddressType | null;
	}

	/**
	 * An IP address that exists in Linode's system, either IPv4 or IPv6.
	 */
	export interface IPAddressFormProperties {

		/**
		 * The IP address.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The default gateway for this address.
		 */
		gateway: FormControl<string | null | undefined>,

		/**
		 * The ID of the Linode this address currently belongs to. For IPv4 addresses, this is by default the Linode that this address was assigned to on creation, and these addresses my be moved using the [/networking/ipv4/assign](/docs/api/networking/#ips-to-linodes-assign) endpoint. For SLAAC and link-local addresses, this value may not be changed.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * The number of bits set in the subnet mask.
		 */
		prefix: FormControl<number | null | undefined>,

		/**
		 * Whether this is a public or private IP address.
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
		 */
		rdns: FormControl<string | null | undefined>,

		/**
		 * The Region this IP address resides in.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The mask that separates host bits from network bits for this address.
		 */
		subnet_mask: FormControl<string | null | undefined>,

		/**
		 * The type of address this is.
		 */
		type: FormControl<IPAddressType | null | undefined>,
	}
	export function CreateIPAddressFormGroup() {
		return new FormGroup<IPAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			gateway: new FormControl<string | null | undefined>(undefined),
			linode_id: new FormControl<number | null | undefined>(undefined),
			prefix: new FormControl<number | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			rdns: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			subnet_mask: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IPAddressType | null | undefined>(undefined),
		});

	}

	export enum IPAddressType { ipv4 = 'ipv4', ipv6 = 'ipv6', 'ipv6/pool' = 'ipv6/pool', 'ipv6/range' = 'ipv6/range' }


	/**
	 * A private IPv4 address that exists in Linode's system.
	 */
	export interface IPAddressPrivate {

		/**
		 * The private IPv4 address.
		 */
		address?: string | null;

		/**
		 * The default gateway for this address.
		 */
		gateway?: string | null;

		/**
		 * The ID of the Linode this address currently belongs to.
		 */
		linode_id?: number | null;

		/**
		 * The number of bits set in the subnet mask.
		 */
		prefix?: number | null;

		/**
		 * Whether this is a public or private IP address.
		 */
		public?: boolean | null;

		/**
		 * The reverse DNS assigned to this address.
		 */
		rdns?: string | null;

		/**
		 * The Region this address resides in.
		 */
		region?: string | null;

		/**
		 * The mask that separates host bits from network bits for this address.
		 */
		subnet_mask?: string | null;

		/**
		 * The type of address this is.
		 */
		type?: string | null;
	}

	/**
	 * A private IPv4 address that exists in Linode's system.
	 */
	export interface IPAddressPrivateFormProperties {

		/**
		 * The private IPv4 address.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The default gateway for this address.
		 */
		gateway: FormControl<string | null | undefined>,

		/**
		 * The ID of the Linode this address currently belongs to.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * The number of bits set in the subnet mask.
		 */
		prefix: FormControl<number | null | undefined>,

		/**
		 * Whether this is a public or private IP address.
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The reverse DNS assigned to this address.
		 */
		rdns: FormControl<string | null | undefined>,

		/**
		 * The Region this address resides in.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The mask that separates host bits from network bits for this address.
		 */
		subnet_mask: FormControl<string | null | undefined>,

		/**
		 * The type of address this is.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIPAddressPrivateFormGroup() {
		return new FormGroup<IPAddressPrivateFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			gateway: new FormControl<string | null | undefined>(undefined),
			linode_id: new FormControl<number | null | undefined>(undefined),
			prefix: new FormControl<number | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			rdns: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			subnet_mask: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A link-local IPv6 address that exists in Linode's system,.
	 */
	export interface IPAddressV6LinkLocal {

		/**
		 * The IPv6 link-local address.
		 */
		address?: string | null;

		/**
		 * The default gateway for this address.
		 */
		gateway?: string | null;

		/**
		 * The ID of the Linode this address currently belongs to.
		 */
		linode_id?: number | null;

		/**
		 * The network prefix.
		 */
		prefix?: number | null;

		/**
		 * Whether this is a public or private IP address.
		 */
		public?: boolean | null;

		/**
		 * The reverse DNS assigned to this address.
		 */
		rdns?: string | null;

		/**
		 * The Region this address resides in.
		 */
		region?: string | null;

		/**
		 * The subnet mask.
		 */
		subnet_mask?: string | null;

		/**
		 * The type of address this is.
		 */
		type?: string | null;
	}

	/**
	 * A link-local IPv6 address that exists in Linode's system,.
	 */
	export interface IPAddressV6LinkLocalFormProperties {

		/**
		 * The IPv6 link-local address.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The default gateway for this address.
		 */
		gateway: FormControl<string | null | undefined>,

		/**
		 * The ID of the Linode this address currently belongs to.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * The network prefix.
		 */
		prefix: FormControl<number | null | undefined>,

		/**
		 * Whether this is a public or private IP address.
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The reverse DNS assigned to this address.
		 */
		rdns: FormControl<string | null | undefined>,

		/**
		 * The Region this address resides in.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The subnet mask.
		 */
		subnet_mask: FormControl<string | null | undefined>,

		/**
		 * The type of address this is.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIPAddressV6LinkLocalFormGroup() {
		return new FormGroup<IPAddressV6LinkLocalFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			gateway: new FormControl<string | null | undefined>(undefined),
			linode_id: new FormControl<number | null | undefined>(undefined),
			prefix: new FormControl<number | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			rdns: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			subnet_mask: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A SLAAC IPv6 address that exists in Linode's system.
	 */
	export interface IPAddressV6Slaac {

		/**
		 * The address.
		 */
		address?: string | null;

		/**
		 * The default gateway for this address.
		 */
		gateway?: string | null;

		/**
		 * The ID of the Linode this address currently belongs to.
		 */
		linode_id?: number | null;

		/**
		 * The network prefix.
		 */
		prefix?: number | null;

		/**
		 * Whether this is a public or private IP address.
		 */
		public?: boolean | null;

		/**
		 * The reverse DNS assigned to this address.
		 */
		rdns?: string | null;

		/**
		 * The Region this address resides in.
		 */
		region?: string | null;

		/**
		 * The subnet mask.
		 */
		subnet_mask?: string | null;

		/**
		 * The type of address this is.
		 */
		type?: string | null;
	}

	/**
	 * A SLAAC IPv6 address that exists in Linode's system.
	 */
	export interface IPAddressV6SlaacFormProperties {

		/**
		 * The address.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The default gateway for this address.
		 */
		gateway: FormControl<string | null | undefined>,

		/**
		 * The ID of the Linode this address currently belongs to.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * The network prefix.
		 */
		prefix: FormControl<number | null | undefined>,

		/**
		 * Whether this is a public or private IP address.
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The reverse DNS assigned to this address.
		 */
		rdns: FormControl<string | null | undefined>,

		/**
		 * The Region this address resides in.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The subnet mask.
		 */
		subnet_mask: FormControl<string | null | undefined>,

		/**
		 * The type of address this is.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIPAddressV6SlaacFormGroup() {
		return new FormGroup<IPAddressV6SlaacFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			gateway: new FormControl<string | null | undefined>(undefined),
			linode_id: new FormControl<number | null | undefined>(undefined),
			prefix: new FormControl<number | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			rdns: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			subnet_mask: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request object for IP Addresses Assign (POST /networking/ips/assign). */
	export interface IPAddressesAssignRequest {

		/**
		 * The list of assignments to make. You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed.
		 * Required
		 */
		IPAddressesAssignRequestAssignments: Array<IPAddressesAssignRequestAssignments>;

		/**
		 * The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.
		 * Required
		 */
		region: string;
	}

	/** Request object for IP Addresses Assign (POST /networking/ips/assign). */
	export interface IPAddressesAssignRequestFormProperties {

		/**
		 * The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateIPAddressesAssignRequestFormGroup() {
		return new FormGroup<IPAddressesAssignRequestFormProperties>({
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IPAddressesAssignRequestAssignments {

		/**
		 * The IPv4 address or IPv6 range for this assignment.
		 * * Must be an IPv4 address or an IPv6 range you can access in the Region specified.
		 * * IPv6 ranges must include a prefix length of `/56` or `/64`, for example: `2001:db8:3c4d:15::/64`.
		 * * Assignment of an IPv6 range to a Linode updates the route target of the range to the assigned Linode's SLAAC address.
		 * * May be a public or private address.
		 */
		address?: string | null;

		/**
		 * The ID of the Linode to assign this address to. The IP's previous Linode will lose this address, and must end up with at least one public address and no more than one private address once all assignments have been made.
		 */
		linode_id?: number | null;
	}
	export interface IPAddressesAssignRequestAssignmentsFormProperties {

		/**
		 * The IPv4 address or IPv6 range for this assignment.
		 * * Must be an IPv4 address or an IPv6 range you can access in the Region specified.
		 * * IPv6 ranges must include a prefix length of `/56` or `/64`, for example: `2001:db8:3c4d:15::/64`.
		 * * Assignment of an IPv6 range to a Linode updates the route target of the range to the assigned Linode's SLAAC address.
		 * * May be a public or private address.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The ID of the Linode to assign this address to. The IP's previous Linode will lose this address, and must end up with at least one public address and no more than one private address once all assignments have been made.
		 */
		linode_id: FormControl<number | null | undefined>,
	}
	export function CreateIPAddressesAssignRequestAssignmentsFormGroup() {
		return new FormGroup<IPAddressesAssignRequestAssignmentsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			linode_id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A request object IP Addresses Share (POST /networking/ips/share) */
	export interface IPAddressesShareRequest {

		/**
		 * A list of secondary Linode IPs to share with the primary Linode.
		 * * Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)
		 * * Can include both private and public IPv4 addresses.
		 * * You must have access to all of these addresses and they must be in the same Region as the primary Linode.
		 * * Enter an empty array to remove all shared IP addresses.
		 * Required
		 */
		ips: Array<string>;

		/**
		 * The ID of the primary Linode that the addresses will be shared with.
		 * Required
		 */
		linode_id: number;
	}

	/** A request object IP Addresses Share (POST /networking/ips/share) */
	export interface IPAddressesShareRequestFormProperties {

		/**
		 * The ID of the primary Linode that the addresses will be shared with.
		 * Required
		 */
		linode_id: FormControl<number | null | undefined>,
	}
	export function CreateIPAddressesShareRequestFormGroup() {
		return new FormGroup<IPAddressesShareRequestFormProperties>({
			linode_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * An object representing an IPv6 pool.
	 */
	export interface IPv6Pool {

		/**
		 * The prefix length of the address, denoting how many addresses can be assigned from this pool calculated as 2 <sup>128-prefix</sup>.
		 */
		prefix?: number | null;

		/**
		 * The IPv6 range of addresses in this pool.
		 */
		range?: string | null;

		/**
		 * The region for this pool of IPv6 addresses.
		 */
		region?: string | null;

		/**
		 * The last address in this block of IPv6 addresses.
		 */
		route_target?: string | null;
	}

	/**
	 * An object representing an IPv6 pool.
	 */
	export interface IPv6PoolFormProperties {

		/**
		 * The prefix length of the address, denoting how many addresses can be assigned from this pool calculated as 2 <sup>128-prefix</sup>.
		 */
		prefix: FormControl<number | null | undefined>,

		/**
		 * The IPv6 range of addresses in this pool.
		 */
		range: FormControl<string | null | undefined>,

		/**
		 * The region for this pool of IPv6 addresses.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The last address in this block of IPv6 addresses.
		 */
		route_target: FormControl<string | null | undefined>,
	}
	export function CreateIPv6PoolFormGroup() {
		return new FormGroup<IPv6PoolFormProperties>({
			prefix: new FormControl<number | null | undefined>(undefined),
			range: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			route_target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing an IPv6 range.
	 */
	export interface IPv6Range {

		/**
		 * The prefix length of the address, denoting how many addresses can be assigned from this range calculated as 2 <sup>128-prefix</sup>.
		 */
		prefix?: number | null;

		/**
		 * The IPv6 range of addresses in this pool.
		 */
		range?: string | null;

		/**
		 * The region for this range of IPv6 addresses.
		 */
		region?: string | null;

		/**
		 * The last address in this block of IPv6 addresses.
		 */
		route_target?: string | null;
	}

	/**
	 * An object representing an IPv6 range.
	 */
	export interface IPv6RangeFormProperties {

		/**
		 * The prefix length of the address, denoting how many addresses can be assigned from this range calculated as 2 <sup>128-prefix</sup>.
		 */
		prefix: FormControl<number | null | undefined>,

		/**
		 * The IPv6 range of addresses in this pool.
		 */
		range: FormControl<string | null | undefined>,

		/**
		 * The region for this range of IPv6 addresses.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The last address in this block of IPv6 addresses.
		 */
		route_target: FormControl<string | null | undefined>,
	}
	export function CreateIPv6RangeFormGroup() {
		return new FormGroup<IPv6RangeFormProperties>({
			prefix: new FormControl<number | null | undefined>(undefined),
			range: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			route_target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing an IPv6 range.
	 */
	export interface IPv6RangeBGP {

		/**
		 * Whether this IPv6 range is shared.
		 */
		is_bgp?: boolean | null;

		/**
		 * A list of Linodes targeted by this IPv6 range. Includes Linodes with IP sharing.
		 */
		linodes?: Array<number>;

		/**
		 * The prefix length of the address, denoting how many addresses can be assigned from this range calculated as 2 <sup>128-prefix</sup>.
		 */
		prefix?: number | null;

		/**
		 * The IPv6 range of addresses in this pool.
		 */
		range?: string | null;

		/**
		 * The region for this range of IPv6 addresses.
		 */
		region?: string | null;
	}

	/**
	 * An object representing an IPv6 range.
	 */
	export interface IPv6RangeBGPFormProperties {

		/**
		 * Whether this IPv6 range is shared.
		 */
		is_bgp: FormControl<boolean | null | undefined>,

		/**
		 * The prefix length of the address, denoting how many addresses can be assigned from this range calculated as 2 <sup>128-prefix</sup>.
		 */
		prefix: FormControl<number | null | undefined>,

		/**
		 * The IPv6 range of addresses in this pool.
		 */
		range: FormControl<string | null | undefined>,

		/**
		 * The region for this range of IPv6 addresses.
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateIPv6RangeBGPFormGroup() {
		return new FormGroup<IPv6RangeBGPFormProperties>({
			is_bgp: new FormControl<boolean | null | undefined>(undefined),
			prefix: new FormControl<number | null | undefined>(undefined),
			range: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image object */
	export interface Image {

		/** When this Image was created. */
		created?: Date | null;

		/**
		 * The name of the User who created this Image, or "linode" for public Images.
		 */
		created_by?: string | null;

		/**
		 * Whether or not this Image is deprecated. Will only be true for deprecated public Images.
		 */
		deprecated?: boolean | null;

		/**
		 * A detailed description of this Image.
		 * Max length: 65000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The date of the public Image's planned end of life. `None` for private Images.
		 */
		eol?: Date | null;

		/**
		 * Only Images created automatically from a deleted Linode (type=automatic) will expire.
		 */
		expiry?: Date | null;

		/** The unique ID of this Image. */
		id?: string | null;

		/** True if the Image is a public distribution image. False if Image is private Account-specific Image. */
		is_public?: boolean | null;

		/**
		 * A short description of the Image.
		 */
		label?: string | null;

		/**
		 * The minimum size this Image needs to deploy. Size is in MB.
		 */
		size?: number | null;

		/**
		 * The current status of this Image.
		 * Only Images in an "available" status can be deployed. Images in a "creating" status are being created from a Linode Disk, and will become "available" shortly. Images in a "pending_upload" status are waiting for data to be [uploaded](/docs/api/images/#image-upload), and become "available" after the upload and processing are complete.
		 * The "+order_by" and "+order" operators are not available for [filtering](/docs/api/#filtering-and-sorting) on this key.
		 */
		status?: ImageStatus | null;

		/**
		 * How the Image was created.
		 * "Manual" Images can be created at any time.
		 * "Automatic" Images are created automatically from a deleted Linode.
		 */
		type?: ImageType | null;

		/** When this Image was last updated. */
		updated?: Date | null;

		/**
		 * The upstream distribution vendor. `None` for private Images.
		 */
		vendor?: string | null;
	}

	/** Image object */
	export interface ImageFormProperties {

		/** When this Image was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * The name of the User who created this Image, or "linode" for public Images.
		 */
		created_by: FormControl<string | null | undefined>,

		/**
		 * Whether or not this Image is deprecated. Will only be true for deprecated public Images.
		 */
		deprecated: FormControl<boolean | null | undefined>,

		/**
		 * A detailed description of this Image.
		 * Max length: 65000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The date of the public Image's planned end of life. `None` for private Images.
		 */
		eol: FormControl<Date | null | undefined>,

		/**
		 * Only Images created automatically from a deleted Linode (type=automatic) will expire.
		 */
		expiry: FormControl<Date | null | undefined>,

		/** The unique ID of this Image. */
		id: FormControl<string | null | undefined>,

		/** True if the Image is a public distribution image. False if Image is private Account-specific Image. */
		is_public: FormControl<boolean | null | undefined>,

		/**
		 * A short description of the Image.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The minimum size this Image needs to deploy. Size is in MB.
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The current status of this Image.
		 * Only Images in an "available" status can be deployed. Images in a "creating" status are being created from a Linode Disk, and will become "available" shortly. Images in a "pending_upload" status are waiting for data to be [uploaded](/docs/api/images/#image-upload), and become "available" after the upload and processing are complete.
		 * The "+order_by" and "+order" operators are not available for [filtering](/docs/api/#filtering-and-sorting) on this key.
		 */
		status: FormControl<ImageStatus | null | undefined>,

		/**
		 * How the Image was created.
		 * "Manual" Images can be created at any time.
		 * "Automatic" Images are created automatically from a deleted Linode.
		 */
		type: FormControl<ImageType | null | undefined>,

		/** When this Image was last updated. */
		updated: FormControl<Date | null | undefined>,

		/**
		 * The upstream distribution vendor. `None` for private Images.
		 */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65000)]),
			eol: new FormControl<Date | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_public: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ImageStatus | null | undefined>(undefined),
			type: new FormControl<ImageType | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageStatus { creating = 'creating', pending_upload = 'pending_upload', available = 'available' }

	export enum ImageType { manual = 'manual', automatic = 'automatic' }


	/** Account Invoice object */
	export interface Invoice {

		/** When this Invoice was generated. */
		date?: Date | null;

		/** The Invoice's unique ID. */
		id?: number | null;

		/** The Invoice's display label. */
		label?: string | null;

		/** The amount of the Invoice before taxes in US Dollars. */
		subtotal?: number | null;

		/** The amount of tax levied on the Invoice in US Dollars. */
		tax?: number | null;

		/** The amount of tax broken down into subtotals by source. */
		InvoiceTax_summary?: Array<InvoiceTax_summary>;

		/** The amount of the Invoice after taxes in US Dollars. */
		total?: number | null;
	}

	/** Account Invoice object */
	export interface InvoiceFormProperties {

		/** When this Invoice was generated. */
		date: FormControl<Date | null | undefined>,

		/** The Invoice's unique ID. */
		id: FormControl<number | null | undefined>,

		/** The Invoice's display label. */
		label: FormControl<string | null | undefined>,

		/** The amount of the Invoice before taxes in US Dollars. */
		subtotal: FormControl<number | null | undefined>,

		/** The amount of tax levied on the Invoice in US Dollars. */
		tax: FormControl<number | null | undefined>,

		/** The amount of the Invoice after taxes in US Dollars. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			subtotal: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceTax_summary {

		/** The source of this tax subtotal. */
		name?: string | null;

		/** The amount of tax subtotal attributable to this source. */
		tax?: number | null;
	}
	export interface InvoiceTax_summaryFormProperties {

		/** The source of this tax subtotal. */
		name: FormControl<string | null | undefined>,

		/** The amount of tax subtotal attributable to this source. */
		tax: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceTax_summaryFormGroup() {
		return new FormGroup<InvoiceTax_summaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An InvoiceItem object. */
	export interface InvoiceItem {

		/** The price, in US dollars, of the Invoice Item. Equal to the unit price multiplied by quantity. */
		amount?: number | null;

		/** The date the Invoice Item started, based on month. */
		from?: Date | null;

		/** The Invoice Item's display label. */
		label?: string | null;

		/** The quantity of this Item for the specified Invoice. */
		quantity?: number | null;

		/** The amount of tax levied on this Item in US Dollars. */
		tax?: number | null;

		/** The date the Invoice Item ended, based on month. */
		to?: Date | null;

		/** The price of this Item after taxes in US Dollars. */
		total?: number | null;

		/** The type of service, ether `hourly` or `misc`. */
		type?: InvoiceItemType | null;

		/** The monthly service fee in US Dollars for this Item. */
		unit_price?: string | null;
	}

	/** An InvoiceItem object. */
	export interface InvoiceItemFormProperties {

		/** The price, in US dollars, of the Invoice Item. Equal to the unit price multiplied by quantity. */
		amount: FormControl<number | null | undefined>,

		/** The date the Invoice Item started, based on month. */
		from: FormControl<Date | null | undefined>,

		/** The Invoice Item's display label. */
		label: FormControl<string | null | undefined>,

		/** The quantity of this Item for the specified Invoice. */
		quantity: FormControl<number | null | undefined>,

		/** The amount of tax levied on this Item in US Dollars. */
		tax: FormControl<number | null | undefined>,

		/** The date the Invoice Item ended, based on month. */
		to: FormControl<Date | null | undefined>,

		/** The price of this Item after taxes in US Dollars. */
		total: FormControl<number | null | undefined>,

		/** The type of service, ether `hourly` or `misc`. */
		type: FormControl<InvoiceItemType | null | undefined>,

		/** The monthly service fee in US Dollars for this Item. */
		unit_price: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceItemFormGroup() {
		return new FormGroup<InvoiceItemFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			from: new FormControl<Date | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<InvoiceItemType | null | undefined>(undefined),
			unit_price: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceItemType { hourly = 'hourly', misc = 'misc' }


	/** Linux kernel object */
	export interface Kernel {

		/** The architecture of this Kernel. */
		architecture?: KernelArchitecture | null;

		/** The date on which this Kernel was built. */
		built?: Date | null;

		/** If this Kernel is marked as deprecated, this field has a value of true; otherwise, this field is false. */
		deprecated?: boolean | null;

		/** The unique ID of this Kernel. */
		id?: string | null;

		/** If this Kernel is suitable for KVM Linodes. */
		kvm?: boolean | null;

		/** The friendly name of this Kernel. */
		label?: string | null;

		/** If this Kernel is suitable for paravirtualized operations. */
		pvops?: boolean | null;

		/** Linux Kernel version. */
		version?: string | null;

		/** If this Kernel is suitable for Xen Linodes. */
		xen?: boolean | null;
	}

	/** Linux kernel object */
	export interface KernelFormProperties {

		/** The architecture of this Kernel. */
		architecture: FormControl<KernelArchitecture | null | undefined>,

		/** The date on which this Kernel was built. */
		built: FormControl<Date | null | undefined>,

		/** If this Kernel is marked as deprecated, this field has a value of true; otherwise, this field is false. */
		deprecated: FormControl<boolean | null | undefined>,

		/** The unique ID of this Kernel. */
		id: FormControl<string | null | undefined>,

		/** If this Kernel is suitable for KVM Linodes. */
		kvm: FormControl<boolean | null | undefined>,

		/** The friendly name of this Kernel. */
		label: FormControl<string | null | undefined>,

		/** If this Kernel is suitable for paravirtualized operations. */
		pvops: FormControl<boolean | null | undefined>,

		/** Linux Kernel version. */
		version: FormControl<string | null | undefined>,

		/** If this Kernel is suitable for Xen Linodes. */
		xen: FormControl<boolean | null | undefined>,
	}
	export function CreateKernelFormGroup() {
		return new FormGroup<KernelFormProperties>({
			architecture: new FormControl<KernelArchitecture | null | undefined>(undefined),
			built: new FormControl<Date | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kvm: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			pvops: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			xen: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum KernelArchitecture { x86_64 = 'x86_64', i386 = 'i386' }


	/** A Kubernetes cluster. */
	export interface LKECluster {

		/**
		 * Defines settings for the Kubernetes Control Plane. Allows for the enabling of High Availability (HA) for Control Plane Components. Enabling High Avaialability for LKE is an **irreversible** change.
		 */
		control_plane?: LKEClusterControl_plane;

		/** When this Kubernetes cluster was created. */
		created?: Date | null;

		/** This Kubernetes cluster's unique ID. */
		id?: number | null;

		/**
		 * The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version will be deployed.
		 */
		k8s_version?: string | null;

		/**
		 * This Kubernetes cluster's unique label for display purposes only.
		 * Labels have the following constraints:
		 * * UTF-8 characters will be returned by the API using escape
		 * sequences of their Unicode code points. For example, the
		 * Japanese character *か* is 3 bytes in UTF-8 (`0xE382AB`). Its
		 * Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this
		 * character and the API will return it as the escape sequence
		 * using six 1 byte characters which represent 2 bytes of Unicode
		 * code point (`"\u30ab"`).
		 * * 4 byte UTF-8 characters are not supported.
		 * * If the label is entirely composed of UTF-8 characters, the API
		 * response will return the code points using up to 193 1 byte
		 * characters.
		 * Max length: 32
		 * Min length: 1
		 */
		label?: string | null;

		/** This Kubernetes cluster's location. */
		region?: string | null;

		/**
		 * An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only.
		 */
		tags?: Array<string>;

		/** When this Kubernetes cluster was updated. */
		updated?: Date | null;
	}

	/** A Kubernetes cluster. */
	export interface LKEClusterFormProperties {

		/** When this Kubernetes cluster was created. */
		created: FormControl<Date | null | undefined>,

		/** This Kubernetes cluster's unique ID. */
		id: FormControl<number | null | undefined>,

		/**
		 * The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version will be deployed.
		 */
		k8s_version: FormControl<string | null | undefined>,

		/**
		 * This Kubernetes cluster's unique label for display purposes only.
		 * Labels have the following constraints:
		 * * UTF-8 characters will be returned by the API using escape
		 * sequences of their Unicode code points. For example, the
		 * Japanese character *か* is 3 bytes in UTF-8 (`0xE382AB`). Its
		 * Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this
		 * character and the API will return it as the escape sequence
		 * using six 1 byte characters which represent 2 bytes of Unicode
		 * code point (`"\u30ab"`).
		 * * 4 byte UTF-8 characters are not supported.
		 * * If the label is entirely composed of UTF-8 characters, the API
		 * response will return the code points using up to 193 1 byte
		 * characters.
		 * Max length: 32
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/** This Kubernetes cluster's location. */
		region: FormControl<string | null | undefined>,

		/** When this Kubernetes cluster was updated. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateLKEClusterFormGroup() {
		return new FormGroup<LKEClusterFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			k8s_version: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			region: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface LKEClusterControl_plane {

		/**
		 * Defines whether High Availability is enabled for the Control Plane Components of the cluster. Defaults to `false`.
		 */
		high_availability?: boolean | null;
	}
	export interface LKEClusterControl_planeFormProperties {

		/**
		 * Defines whether High Availability is enabled for the Control Plane Components of the cluster. Defaults to `false`.
		 */
		high_availability: FormControl<boolean | null | undefined>,
	}
	export function CreateLKEClusterControl_planeFormGroup() {
		return new FormGroup<LKEClusterControl_planeFormProperties>({
			high_availability: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
	 */
	export interface LKENodePool {

		/**
		 * When enabled, the number of nodes autoscales within the defined minimum and maximum values.
		 */
		autoscaler?: LKENodePoolAutoscaler;

		/**
		 * The number of nodes in the Node Pool.
		 * Minimum: 1
		 * Maximum: 100
		 */
		count?: number | null;

		/**
		 * This Node Pool's custom disk layout.
		 */
		LKENodePoolDisks?: Array<LKENodePoolDisks>;

		/**
		 * This Node Pool's unique ID.
		 */
		id?: number | null;

		/**
		 * Status information for the Nodes which are members of this Node Pool. If a Linode has not been provisioned for a given Node slot, the instance_id will be returned as null.
		 */
		nodes?: Array<LKENodeStatus>;

		/**
		 * An array of tags applied to this object. Tags are for organizational purposes only.
		 */
		tags?: Array<string>;

		/** The Linode Type for all of the nodes in the Node Pool. */
		type?: string | null;
	}

	/**
	 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
	 */
	export interface LKENodePoolFormProperties {

		/**
		 * The number of nodes in the Node Pool.
		 * Minimum: 1
		 * Maximum: 100
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * This Node Pool's unique ID.
		 */
		id: FormControl<number | null | undefined>,

		/** The Linode Type for all of the nodes in the Node Pool. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLKENodePoolFormGroup() {
		return new FormGroup<LKENodePoolFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			id: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LKENodePoolAutoscaler {

		/** Whether autoscaling is enabled for this Node Pool. Defaults to `false`. */
		enabled?: boolean | null;

		/**
		 * The maximum number of nodes to autoscale to. Defaults to the Node Pool's `count`.
		 * Minimum: 1
		 * Maximum: 100
		 */
		max?: number | null;

		/**
		 * The minimum number of nodes to autoscale to. Defaults to the Node Pool's `count`.
		 * Minimum: 1
		 * Maximum: 100
		 */
		min?: number | null;
	}
	export interface LKENodePoolAutoscalerFormProperties {

		/** Whether autoscaling is enabled for this Node Pool. Defaults to `false`. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The maximum number of nodes to autoscale to. Defaults to the Node Pool's `count`.
		 * Minimum: 1
		 * Maximum: 100
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * The minimum number of nodes to autoscale to. Defaults to the Node Pool's `count`.
		 * Minimum: 1
		 * Maximum: 100
		 */
		min: FormControl<number | null | undefined>,
	}
	export function CreateLKENodePoolAutoscalerFormGroup() {
		return new FormGroup<LKENodePoolAutoscalerFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			min: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface LKENodePoolDisks {

		/**
		 * The size of this custom disk partition in MB.
		 * * The size of this disk partition must not exceed the capacity of the node's plan type.
		 */
		size?: number | null;

		/**
		 * This custom disk partition's filesystem type.
		 */
		type?: LKENodePoolDisksType | null;
	}
	export interface LKENodePoolDisksFormProperties {

		/**
		 * The size of this custom disk partition in MB.
		 * * The size of this disk partition must not exceed the capacity of the node's plan type.
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * This custom disk partition's filesystem type.
		 */
		type: FormControl<LKENodePoolDisksType | null | undefined>,
	}
	export function CreateLKENodePoolDisksFormGroup() {
		return new FormGroup<LKENodePoolDisksFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<LKENodePoolDisksType | null | undefined>(undefined),
		});

	}

	export enum LKENodePoolDisksType { raw = 'raw', ext4 = 'ext4' }


	/**
	 * Status information for a Node which is a member of a Kubernetes cluster.
	 */
	export interface LKENodeStatus {

		/**
		 * The Node's ID.
		 */
		id?: string | null;

		/**
		 * The Linode's ID. When no Linode is currently provisioned for this Node, this will be null.
		 */
		instance_id?: string | null;

		/**
		 * The Node's status as it pertains to being a Kubernetes node.
		 */
		status?: LKENodeStatusStatus | null;
	}

	/**
	 * Status information for a Node which is a member of a Kubernetes cluster.
	 */
	export interface LKENodeStatusFormProperties {

		/**
		 * The Node's ID.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The Linode's ID. When no Linode is currently provisioned for this Node, this will be null.
		 */
		instance_id: FormControl<string | null | undefined>,

		/**
		 * The Node's status as it pertains to being a Kubernetes node.
		 */
		status: FormControl<LKENodeStatusStatus | null | undefined>,
	}
	export function CreateLKENodeStatusFormGroup() {
		return new FormGroup<LKENodeStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			instance_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LKENodeStatusStatus | null | undefined>(undefined),
		});

	}

	export enum LKENodeStatusStatus { ready = 'ready', not_ready = 'not_ready' }


	/**
	 * Specifies a collection of Linodes which will be members of a Kubernetes cluster.
	 */
	export interface LKENodePoolRequestBody {

		/**
		 * When enabled, the number of nodes autoscales within the defined minimum and maximum values.
		 * When making a request, `max` and `min` require each other.
		 */
		autoscaler?: LKENodePoolRequestBodyAutoscaler;

		/**
		 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
		 */
		count?: LKENodePool;

		/**
		 * **Note**: This field should be omitted except for special use cases. The disks specified here are
		 * partitions in *addition* to the primary partition and reduce the size of the primary partition,
		 * which can lead to stability problems for the Node.
		 * This Node Pool's custom disk layout. Each item in this array will create a new disk
		 * partition for each node in this Node Pool.
		 * * The custom disk layout is applied to each node in this Node Pool.
		 * * The maximum number of custom disk partitions that can be configured is 7.
		 * * Once the requested disk paritions are allocated, the remaining disk space is allocated to the node's boot disk.
		 * * A Node Pool's custom disk layout is immutable over the lifetime of the Node Pool.
		 */
		disks?: Array<LKENodePool>;

		/**
		 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
		 */
		tags?: LKENodePool;

		/**
		 * The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
		 */
		type?: LKENodePool;
	}

	/**
	 * Specifies a collection of Linodes which will be members of a Kubernetes cluster.
	 */
	export interface LKENodePoolRequestBodyFormProperties {
	}
	export function CreateLKENodePoolRequestBodyFormGroup() {
		return new FormGroup<LKENodePoolRequestBodyFormProperties>({
		});

	}

	export interface LKENodePoolRequestBodyAutoscaler {

		/** Whether autoscaling is enabled for this Node Pool. Defaults to `false`. */
		enabled?: boolean | null;

		/**
		 * The maximum number of nodes to autoscale to. Defaults to the Node Pool's `count`. Defaults to the value provided by the `count` field.
		 * Minimum: 1
		 * Maximum: 100
		 */
		max?: number | null;

		/**
		 * The minimum number of nodes to autoscale to. Defaults to the Node Pool's `count`.
		 * Minimum: 1
		 * Maximum: 100
		 */
		min?: number | null;
	}
	export interface LKENodePoolRequestBodyAutoscalerFormProperties {

		/** Whether autoscaling is enabled for this Node Pool. Defaults to `false`. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The maximum number of nodes to autoscale to. Defaults to the Node Pool's `count`. Defaults to the value provided by the `count` field.
		 * Minimum: 1
		 * Maximum: 100
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * The minimum number of nodes to autoscale to. Defaults to the Node Pool's `count`.
		 * Minimum: 1
		 * Maximum: 100
		 */
		min: FormControl<number | null | undefined>,
	}
	export function CreateLKENodePoolRequestBodyAutoscalerFormGroup() {
		return new FormGroup<LKENodePoolRequestBodyAutoscalerFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			min: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/**
	 * LKE versions
	 */
	export interface LKEVersion {

		/**
		 * A Kubernetes version number available for deployment to a Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version.
		 */
		id?: string | null;
	}

	/**
	 * LKE versions
	 */
	export interface LKEVersionFormProperties {

		/**
		 * A Kubernetes version number available for deployment to a Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version.
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLKEVersionFormGroup() {
		return new FormGroup<LKEVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Linode {
		alerts?: LinodeAlerts;

		/**
		 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
		 */
		backups?: LinodeBackups;

		/** When this Linode was created. */
		created?: Date | null;

		/**
		 * A deprecated property denoting a group label for this Linode.
		 */
		group?: string | null;

		/** The Linode's host machine, as a UUID. */
		host_uuid?: string | null;

		/**
		 * The virtualization software powering this Linode.
		 */
		hypervisor?: LinodeHypervisor | null;

		/**
		 * This Linode's ID which must be provided for all operations impacting this Linode.
		 */
		id?: number | null;
		image?: DiskRequest;

		/**
		 * This Linode's IPv4 Addresses. Each Linode is assigned a single public IPv4 address
		 * upon creation, and may get a single private IPv4 address if needed. You may need to
		 * [open a support ticket](/docs/api/support/#support-ticket-open)
		 * to get additional IPv4 addresses.
		 * IPv4 addresses may be reassigned between your Linodes, or shared with other Linodes.
		 * See the [/networking](/docs/api/networking/) endpoints for details.
		 */
		ipv4?: Array<string>;

		/**
		 * This Linode's IPv6 SLAAC address. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be `null`.
		 */
		ipv6?: string | null;

		/**
		 * The Linode's label is for display purposes only. If no label is provided for a Linode,
		 * a default will be assigned.
		 * Linode labels have the following constraints:
		 * * Must begin and end with an alphanumeric character.
		 * * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).
		 * * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.
		 * Max length: 64
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * This is the [Region](/docs/api/regions/#regions-list) where the Linode was deployed. A Linode's region can only be changed by initiating a [cross data center migration](/docs/api/linode-instances/#dc-migrationpending-host-migration-initiate).
		 */
		region?: string | null;

		/** Information about the resources available to this Linode. */
		specs?: LinodeSpecs;

		/**
		 * A brief description of this Linode's current state. This field may change without direct action from you. For example, when a Linode goes into maintenance mode its status will display "stopped".
		 */
		status?: LinodeStatus | null;

		/**
		 * An array of tags applied to this object.  Tags are for organizational purposes only.
		 */
		tags?: Array<string>;

		/**
		 * This is the [Linode Type](/docs/api/linode-types/#types-list) that this Linode was deployed with.
		 * To change a Linode's Type, use [POST /linode/instances/{linodeId}/resize](/docs/api/linode-instances/#linode-resize).
		 */
		type?: string | null;

		/** When this Linode was last updated. */
		updated?: Date | null;

		/**
		 * The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and will reboot it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible.
		 * To prevent a loop, Lassie will give up if there have been more than 5 boot jobs issued within 15 minutes.
		 */
		watchdog_enabled?: boolean | null;
	}
	export interface LinodeFormProperties {

		/** When this Linode was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * A deprecated property denoting a group label for this Linode.
		 */
		group: FormControl<string | null | undefined>,

		/** The Linode's host machine, as a UUID. */
		host_uuid: FormControl<string | null | undefined>,

		/**
		 * The virtualization software powering this Linode.
		 */
		hypervisor: FormControl<LinodeHypervisor | null | undefined>,

		/**
		 * This Linode's ID which must be provided for all operations impacting this Linode.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * This Linode's IPv6 SLAAC address. This address is specific to a Linode, and may not be shared. If the Linode has not been assigned an IPv6 address, the return value will be `null`.
		 */
		ipv6: FormControl<string | null | undefined>,

		/**
		 * The Linode's label is for display purposes only. If no label is provided for a Linode,
		 * a default will be assigned.
		 * Linode labels have the following constraints:
		 * * Must begin and end with an alphanumeric character.
		 * * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).
		 * * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.
		 * Max length: 64
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * This is the [Region](/docs/api/regions/#regions-list) where the Linode was deployed. A Linode's region can only be changed by initiating a [cross data center migration](/docs/api/linode-instances/#dc-migrationpending-host-migration-initiate).
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * A brief description of this Linode's current state. This field may change without direct action from you. For example, when a Linode goes into maintenance mode its status will display "stopped".
		 */
		status: FormControl<LinodeStatus | null | undefined>,

		/**
		 * This is the [Linode Type](/docs/api/linode-types/#types-list) that this Linode was deployed with.
		 * To change a Linode's Type, use [POST /linode/instances/{linodeId}/resize](/docs/api/linode-instances/#linode-resize).
		 */
		type: FormControl<string | null | undefined>,

		/** When this Linode was last updated. */
		updated: FormControl<Date | null | undefined>,

		/**
		 * The watchdog, named Lassie, is a Shutdown Watchdog that monitors your Linode and will reboot it if it powers off unexpectedly. It works by issuing a boot job when your Linode powers off without a shutdown job being responsible.
		 * To prevent a loop, Lassie will give up if there have been more than 5 boot jobs issued within 15 minutes.
		 */
		watchdog_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLinodeFormGroup() {
		return new FormGroup<LinodeFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			host_uuid: new FormControl<string | null | undefined>(undefined),
			hypervisor: new FormControl<LinodeHypervisor | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			ipv6: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]((?!--|__|..)[a-zA-Z0-9-_.])+$')]),
			region: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LinodeStatus | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			watchdog_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LinodeAlerts {

		/**
		 * The percentage of CPU usage required to trigger an alert.
		 * If the average CPU usage over two hours exceeds this value, we'll send you an alert.
		 * Your Linode's total CPU capacity is represented as 100%, multiplied by its number of
		 * cores.
		 * For example, a two core Linode's CPU capacity is represented as 200%. If you want
		 * to be alerted at 90% of a two core Linode's CPU capacity, set the alert value to `180`.
		 * The default value is 90% multiplied by the number of cores.
		 * If the value is set to `0` (zero), the alert is disabled.
		 */
		cpu?: number | null;

		/**
		 * The amount of disk IO operation per second required to trigger an alert. If the average disk IO over two hours exceeds this value, we'll send you an alert. If set to `0` (zero), this alert is disabled.
		 */
		io?: number | null;

		/**
		 * The amount of incoming traffic, in Mbit/s, required to trigger an alert. If the average incoming traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.
		 */
		network_in?: number | null;

		/**
		 * The amount of outbound traffic, in Mbit/s, required to trigger an alert. If the average outbound traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.
		 */
		network_out?: number | null;

		/**
		 * The percentage of network transfer that may be used before an alert is triggered. When this value is exceeded, we'll alert you. If this is set to `0` (zero), the alert is disabled.
		 */
		transfer_quota?: number | null;
	}
	export interface LinodeAlertsFormProperties {

		/**
		 * The percentage of CPU usage required to trigger an alert.
		 * If the average CPU usage over two hours exceeds this value, we'll send you an alert.
		 * Your Linode's total CPU capacity is represented as 100%, multiplied by its number of
		 * cores.
		 * For example, a two core Linode's CPU capacity is represented as 200%. If you want
		 * to be alerted at 90% of a two core Linode's CPU capacity, set the alert value to `180`.
		 * The default value is 90% multiplied by the number of cores.
		 * If the value is set to `0` (zero), the alert is disabled.
		 */
		cpu: FormControl<number | null | undefined>,

		/**
		 * The amount of disk IO operation per second required to trigger an alert. If the average disk IO over two hours exceeds this value, we'll send you an alert. If set to `0` (zero), this alert is disabled.
		 */
		io: FormControl<number | null | undefined>,

		/**
		 * The amount of incoming traffic, in Mbit/s, required to trigger an alert. If the average incoming traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.
		 */
		network_in: FormControl<number | null | undefined>,

		/**
		 * The amount of outbound traffic, in Mbit/s, required to trigger an alert. If the average outbound traffic over two hours exceeds this value, we'll send you an alert. If this is set to `0` (zero), the alert is disabled.
		 */
		network_out: FormControl<number | null | undefined>,

		/**
		 * The percentage of network transfer that may be used before an alert is triggered. When this value is exceeded, we'll alert you. If this is set to `0` (zero), the alert is disabled.
		 */
		transfer_quota: FormControl<number | null | undefined>,
	}
	export function CreateLinodeAlertsFormGroup() {
		return new FormGroup<LinodeAlertsFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined),
			io: new FormControl<number | null | undefined>(undefined),
			network_in: new FormControl<number | null | undefined>(undefined),
			network_out: new FormControl<number | null | undefined>(undefined),
			transfer_quota: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LinodeBackups {

		/**
		 * Whether Backups for this Linode are available for restoration.
		 * Backups undergoing maintenance are not available for restoration.
		 */
		available?: boolean | null;

		/**
		 * If this Linode has the Backup service enabled. To enable backups, see [POST /linode/instances/{linodeId}/backups/enable](/docs/api/linode-instances/#backups-enable).
		 */
		enabled?: boolean | null;

		/** The last successful backup date. 'null' if there was no previous backup. */
		last_successful?: Date | null;
		schedule?: LinodeBackupsSchedule;
	}
	export interface LinodeBackupsFormProperties {

		/**
		 * Whether Backups for this Linode are available for restoration.
		 * Backups undergoing maintenance are not available for restoration.
		 */
		available: FormControl<boolean | null | undefined>,

		/**
		 * If this Linode has the Backup service enabled. To enable backups, see [POST /linode/instances/{linodeId}/backups/enable](/docs/api/linode-instances/#backups-enable).
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** The last successful backup date. 'null' if there was no previous backup. */
		last_successful: FormControl<Date | null | undefined>,
	}
	export function CreateLinodeBackupsFormGroup() {
		return new FormGroup<LinodeBackupsFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			last_successful: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface LinodeBackupsSchedule {

		/**
		 * The day of the week that your Linode's weekly Backup is taken.
		 * If not set manually, a day will be chosen for you. Backups
		 * are taken every day, but backups taken on this day are
		 * preferred when selecting backups to retain for a longer period.
		 * If not set manually, then when backups are initially enabled, this
		 * may come back as `Scheduling` until the `day` is automatically selected.
		 */
		day?: LinodeBackupsScheduleDay | null;

		/**
		 * The window in which your backups will be taken, in UTC. A
		 * backups window is a two-hour span of time in which the backup
		 * may occur.
		 * For example, `W10` indicates that your backups should be
		 * taken between 10:00 and 12:00. If you do not choose a backup
		 * window, one will be selected for you automatically.
		 * If not set manually, when backups are initially enabled this
		 * may come back as `Scheduling` until the `window` is automatically selected.
		 */
		window?: LinodeBackupsScheduleWindow | null;
	}
	export interface LinodeBackupsScheduleFormProperties {

		/**
		 * The day of the week that your Linode's weekly Backup is taken.
		 * If not set manually, a day will be chosen for you. Backups
		 * are taken every day, but backups taken on this day are
		 * preferred when selecting backups to retain for a longer period.
		 * If not set manually, then when backups are initially enabled, this
		 * may come back as `Scheduling` until the `day` is automatically selected.
		 */
		day: FormControl<LinodeBackupsScheduleDay | null | undefined>,

		/**
		 * The window in which your backups will be taken, in UTC. A
		 * backups window is a two-hour span of time in which the backup
		 * may occur.
		 * For example, `W10` indicates that your backups should be
		 * taken between 10:00 and 12:00. If you do not choose a backup
		 * window, one will be selected for you automatically.
		 * If not set manually, when backups are initially enabled this
		 * may come back as `Scheduling` until the `window` is automatically selected.
		 */
		window: FormControl<LinodeBackupsScheduleWindow | null | undefined>,
	}
	export function CreateLinodeBackupsScheduleFormGroup() {
		return new FormGroup<LinodeBackupsScheduleFormProperties>({
			day: new FormControl<LinodeBackupsScheduleDay | null | undefined>(undefined),
			window: new FormControl<LinodeBackupsScheduleWindow | null | undefined>(undefined),
		});

	}

	export enum LinodeBackupsScheduleDay { Scheduling = 'Scheduling', Sunday = 'Sunday', Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday' }

	export enum LinodeBackupsScheduleWindow { Scheduling = 'Scheduling', W0 = 'W0', W2 = 'W2', W4 = 'W4', W6 = 'W6', W8 = 'W8', W10 = 'W10', W12 = 'W12', W14 = 'W14', W16 = 'W16', W18 = 'W18', W20 = 'W20', W22 = 'W22' }

	export enum LinodeHypervisor { kvm = 'kvm' }

	export interface LinodeSpecs {

		/**
		 * The amount of storage space, in MB, this Linode has access to. A typical Linode will divide this space between a primary disk with an `image` deployed to it, and a swap disk, usually 512 MB. This is the default configuration created when deploying a Linode with an `image` through [POST /linode/instances](/docs/api/linode-instances/#linode-create). While this configuration is suitable for 99% of use cases, if you need finer control over your Linode's disks, see the [/linode/instances/{linodeId}/disks](/docs/api/linode-instances/#disks-list) endpoints.
		 */
		disk?: number | null;

		/**
		 * The number of gpus this Linode has access to.
		 */
		gpus?: number | null;

		/**
		 * The amount of RAM, in MB, this Linode has access to.
		 * Typically, a Linode boots with all of its available RAM, but this can be configured in a Config profile. See the [/linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profiles-list) endpoints and the LinodeConfig object for more information.
		 */
		memory?: number | null;

		/** The amount of network transfer this Linode is allotted each month. */
		transfer?: number | null;

		/**
		 * The number of vcpus this Linode has access to.
		 */
		vcpus?: number | null;
	}
	export interface LinodeSpecsFormProperties {

		/**
		 * The amount of storage space, in MB, this Linode has access to. A typical Linode will divide this space between a primary disk with an `image` deployed to it, and a swap disk, usually 512 MB. This is the default configuration created when deploying a Linode with an `image` through [POST /linode/instances](/docs/api/linode-instances/#linode-create). While this configuration is suitable for 99% of use cases, if you need finer control over your Linode's disks, see the [/linode/instances/{linodeId}/disks](/docs/api/linode-instances/#disks-list) endpoints.
		 */
		disk: FormControl<number | null | undefined>,

		/**
		 * The number of gpus this Linode has access to.
		 */
		gpus: FormControl<number | null | undefined>,

		/**
		 * The amount of RAM, in MB, this Linode has access to.
		 * Typically, a Linode boots with all of its available RAM, but this can be configured in a Config profile. See the [/linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profiles-list) endpoints and the LinodeConfig object for more information.
		 */
		memory: FormControl<number | null | undefined>,

		/** The amount of network transfer this Linode is allotted each month. */
		transfer: FormControl<number | null | undefined>,

		/**
		 * The number of vcpus this Linode has access to.
		 */
		vcpus: FormControl<number | null | undefined>,
	}
	export function CreateLinodeSpecsFormGroup() {
		return new FormGroup<LinodeSpecsFormProperties>({
			disk: new FormControl<number | null | undefined>(undefined),
			gpus: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			transfer: new FormControl<number | null | undefined>(undefined),
			vcpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LinodeStatus { running = 'running', offline = 'offline', booting = 'booting', rebooting = 'rebooting', shutting_down = 'shutting_down', provisioning = 'provisioning', deleting = 'deleting', migrating = 'migrating', rebuilding = 'rebuilding', cloning = 'cloning', restoring = 'restoring', stopped = 'stopped' }

	export interface LinodeConfig {

		/** Optional field for arbitrary User comments on this Config. */
		comments?: string | null;

		/**
		 * A dictionary of device disks to use as a device map in a Linode's configuration profile.
		 * * An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
		 * * If no devices are specified, booting from this configuration will hold until a device exists that allows the boot process to start.
		 */
		devices?: Devices;

		/** Helpers enabled when booting to this Linode Config. */
		helpers?: LinodeConfigHelpers;

		/** The ID of this Config. */
		id?: number | null;

		/**
		 * An array of Network Interfaces to add to this Linode's Configuration Profile.
		 * Up to three interface objects can be entered in this array. The position in the array determines the interface to which the settings apply:
		 * - First/0:  eth0
		 * - Second/1: eth1
		 * - Third/2:  eth2
		 * When updating a Linode's interfaces, *each interface must be redefined*. An empty interfaces array results in a default public interface configuration only.
		 * If no public interface is configured, public IP addresses are still assigned to the Linode but will not be usable without manual configuration.
		 * **Note:** Changes to Linode interface configurations can be enabled by rebooting the Linode.
		 * **Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.
		 * If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,
		 * the migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,
		 * you will be prompted to select a different data center or contact support.
		 * **Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) guide to view additional specifications and limitations.
		 */
		interfaces?: Array<LinodeConfigInterface>;

		/** A Kernel ID to boot a Linode with. Defaults to "linode/latest-64bit". */
		kernel?: string | null;

		/**
		 * The Config's label is for display purposes only.
		 * Max length: 48
		 * Min length: 1
		 */
		label?: string | null;

		/**
		 * Defaults to the total RAM of the Linode.
		 */
		memory_limit?: number | null;

		/**
		 * The root device to boot.
		 * * If no value or an invalid value is provided, root device will default to `/dev/sda`.
		 * * If the device specified at the root device location is not mounted, the Linode will not boot until a device is mounted.
		 */
		root_device?: string | null;

		/**
		 * Defines the state of your Linode after booting. Defaults to `default`.
		 */
		run_level?: LinodeConfigRun_level | null;

		/**
		 * Controls the virtualization mode. Defaults to `paravirt`.
		 * * `paravirt` is suitable for most cases. Linodes running in paravirt mode
		 * share some qualities with the host, ultimately making it run faster since
		 * there is less transition between it and the host.
		 * * `fullvirt` affords more customization, but is slower because 100% of the VM
		 * is virtualized.
		 */
		virt_mode?: LinodeConfigVirt_mode | null;
	}
	export interface LinodeConfigFormProperties {

		/** Optional field for arbitrary User comments on this Config. */
		comments: FormControl<string | null | undefined>,

		/** The ID of this Config. */
		id: FormControl<number | null | undefined>,

		/** A Kernel ID to boot a Linode with. Defaults to "linode/latest-64bit". */
		kernel: FormControl<string | null | undefined>,

		/**
		 * The Config's label is for display purposes only.
		 * Max length: 48
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Defaults to the total RAM of the Linode.
		 */
		memory_limit: FormControl<number | null | undefined>,

		/**
		 * The root device to boot.
		 * * If no value or an invalid value is provided, root device will default to `/dev/sda`.
		 * * If the device specified at the root device location is not mounted, the Linode will not boot until a device is mounted.
		 */
		root_device: FormControl<string | null | undefined>,

		/**
		 * Defines the state of your Linode after booting. Defaults to `default`.
		 */
		run_level: FormControl<LinodeConfigRun_level | null | undefined>,

		/**
		 * Controls the virtualization mode. Defaults to `paravirt`.
		 * * `paravirt` is suitable for most cases. Linodes running in paravirt mode
		 * share some qualities with the host, ultimately making it run faster since
		 * there is less transition between it and the host.
		 * * `fullvirt` affords more customization, but is slower because 100% of the VM
		 * is virtualized.
		 */
		virt_mode: FormControl<LinodeConfigVirt_mode | null | undefined>,
	}
	export function CreateLinodeConfigFormGroup() {
		return new FormGroup<LinodeConfigFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kernel: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(48)]),
			memory_limit: new FormControl<number | null | undefined>(undefined),
			root_device: new FormControl<string | null | undefined>(undefined, [Validators.pattern('a-z, A-Z, 0-9, /, _, -')]),
			run_level: new FormControl<LinodeConfigRun_level | null | undefined>(undefined),
			virt_mode: new FormControl<LinodeConfigVirt_mode | null | undefined>(undefined),
		});

	}

	export interface LinodeConfigHelpers {

		/**
		 * Populates the /dev directory early during boot without udev.  Defaults to false.
		 */
		devtmpfs_automount?: boolean | null;

		/** Helps maintain correct inittab/upstart console device. */
		distro?: boolean | null;

		/** Creates a modules dependency file for the Kernel you run. */
		modules_dep?: boolean | null;

		/** Automatically configures static networking. */
		network?: boolean | null;

		/** Disables updatedb cron job to avoid disk thrashing. */
		updatedb_disabled?: boolean | null;
	}
	export interface LinodeConfigHelpersFormProperties {

		/**
		 * Populates the /dev directory early during boot without udev.  Defaults to false.
		 */
		devtmpfs_automount: FormControl<boolean | null | undefined>,

		/** Helps maintain correct inittab/upstart console device. */
		distro: FormControl<boolean | null | undefined>,

		/** Creates a modules dependency file for the Kernel you run. */
		modules_dep: FormControl<boolean | null | undefined>,

		/** Automatically configures static networking. */
		network: FormControl<boolean | null | undefined>,

		/** Disables updatedb cron job to avoid disk thrashing. */
		updatedb_disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLinodeConfigHelpersFormGroup() {
		return new FormGroup<LinodeConfigHelpersFormProperties>({
			devtmpfs_automount: new FormControl<boolean | null | undefined>(undefined),
			distro: new FormControl<boolean | null | undefined>(undefined),
			modules_dep: new FormControl<boolean | null | undefined>(undefined),
			network: new FormControl<boolean | null | undefined>(undefined),
			updatedb_disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * The Network Interface to apply to this Linode's configuration profile.
	 */
	export interface LinodeConfigInterface {

		/**
		 * This Network Interface's private IP address in Classless Inter-Domain Routing (CIDR) notation.
		 * Only used for `vlan` purpose interfaces. Must be an empty string or `null` for `public` purpose interfaces.
		 * The Linode is configured to use this address for the associated interface upon reboot if Network Helper is enabled. If Network Helper is disabled, the address can be enabled with [manual static IP configuration](/docs/guides/manual-network-configuration/).
		 * Must be unique among the Linode's interfaces.
		 */
		ipam_address?: string | null;

		/**
		 * The name of this interface.
		 * Required for `vlan` purpose interfaces. Must be an empty string or `null` for `public` purpose interfaces.
		 * If the VLAN label is new, a VLAN is created. Up to 10 VLANs can be created in each data center region. To view your active VLANs, use the [VLANs List](/docs/api/networking/#vlans-list) endpoint.
		 * May only consist of ASCII letters, numbers, and dashes (`-`).
		 * Must be unique among the Linode's interfaces.
		 * Max length: 64
		 * Min length: 1
		 */
		label?: string | null;

		/**
		 * The type of interface.
		 * * `public`
		 * * Only one `public` interface per Linode can be defined.
		 * * The Linode's default public IPv4 address is assigned to the `public` interface.
		 * * A Linode must have a public interface in the first/eth0 position to be reachable via the public internet upon boot without additional system configuration. If no `public` interface is configured, the Linode is not directly reachable via the public internet. In this case, access can only be established via LISH or other Linodes connected to the same VLAN.
		 * * `vlan`
		 * * Configuring a `vlan` purpose interface attaches this Linode to the VLAN with the specified `label`.
		 * * The Linode is configured to use the specified `ipam_address`, if any.
		 */
		purpose?: LinodeConfigInterfacePurpose | null;
	}

	/**
	 * The Network Interface to apply to this Linode's configuration profile.
	 */
	export interface LinodeConfigInterfaceFormProperties {

		/**
		 * This Network Interface's private IP address in Classless Inter-Domain Routing (CIDR) notation.
		 * Only used for `vlan` purpose interfaces. Must be an empty string or `null` for `public` purpose interfaces.
		 * The Linode is configured to use this address for the associated interface upon reboot if Network Helper is enabled. If Network Helper is disabled, the address can be enabled with [manual static IP configuration](/docs/guides/manual-network-configuration/).
		 * Must be unique among the Linode's interfaces.
		 */
		ipam_address: FormControl<string | null | undefined>,

		/**
		 * The name of this interface.
		 * Required for `vlan` purpose interfaces. Must be an empty string or `null` for `public` purpose interfaces.
		 * If the VLAN label is new, a VLAN is created. Up to 10 VLANs can be created in each data center region. To view your active VLANs, use the [VLANs List](/docs/api/networking/#vlans-list) endpoint.
		 * May only consist of ASCII letters, numbers, and dashes (`-`).
		 * Must be unique among the Linode's interfaces.
		 * Max length: 64
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The type of interface.
		 * * `public`
		 * * Only one `public` interface per Linode can be defined.
		 * * The Linode's default public IPv4 address is assigned to the `public` interface.
		 * * A Linode must have a public interface in the first/eth0 position to be reachable via the public internet upon boot without additional system configuration. If no `public` interface is configured, the Linode is not directly reachable via the public internet. In this case, access can only be established via LISH or other Linodes connected to the same VLAN.
		 * * `vlan`
		 * * Configuring a `vlan` purpose interface attaches this Linode to the VLAN with the specified `label`.
		 * * The Linode is configured to use the specified `ipam_address`, if any.
		 */
		purpose: FormControl<LinodeConfigInterfacePurpose | null | undefined>,
	}
	export function CreateLinodeConfigInterfaceFormGroup() {
		return new FormGroup<LinodeConfigInterfaceFormProperties>({
			ipam_address: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('/[a-z0-9-]+/')]),
			purpose: new FormControl<LinodeConfigInterfacePurpose | null | undefined>(undefined),
		});

	}

	export enum LinodeConfigInterfacePurpose { public = 'public', vlan = 'vlan' }

	export enum LinodeConfigRun_level { default = 'default', single = 'single', binbash = 'binbash' }

	export enum LinodeConfigVirt_mode { paravirt = 'paravirt', fullvirt = 'fullvirt' }


	/** Common properties for creating and rebuilding Linodes. */
	export interface LinodeRequest {

		/** Disk object request. */
		authorized_keys?: DiskRequest;

		/** Disk object request. */
		authorized_users?: DiskRequest;

		/**
		 * This field defaults to `true` if the Linode is created with an Image or from a Backup.
		 * If it is deployed from an Image or a Backup and you wish it to remain `offline` after deployment, set this to `false`.
		 */
		booted?: boolean | null;

		/** Disk object request. */
		image?: DiskRequest;

		/** Disk object request. */
		root_pass?: DiskRequest;

		/** Disk object request. */
		stackscript_data?: DiskRequest;

		/** Disk object request. */
		stackscript_id?: DiskRequest;
	}

	/** Common properties for creating and rebuilding Linodes. */
	export interface LinodeRequestFormProperties {

		/**
		 * This field defaults to `true` if the Linode is created with an Image or from a Backup.
		 * If it is deployed from an Image or a Backup and you wish it to remain `offline` after deployment, set this to `false`.
		 */
		booted: FormControl<boolean | null | undefined>,
	}
	export function CreateLinodeRequestFormGroup() {
		return new FormGroup<LinodeRequestFormProperties>({
			booted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.
	 */
	export interface LinodeStats {

		/**
		 * Percentage of CPU used.
		 */
		cpu?: Array<string>;

		/** Input/Output statistics. */
		io?: LinodeStatsIo;

		/** IPv4 statistics. */
		netv4?: LinodeStatsNetv4;

		/** IPv6 statistics. */
		netv6?: LinodeStatsNetv6;

		/** The title for this data set. */
		title?: string | null;
	}

	/**
	 * CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.
	 */
	export interface LinodeStatsFormProperties {

		/** The title for this data set. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateLinodeStatsFormGroup() {
		return new FormGroup<LinodeStatsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinodeStatsIo {

		/** Block/s written. */
		io?: Array<string>;

		/** Block/s written. */
		swap?: Array<string>;
	}
	export interface LinodeStatsIoFormProperties {
	}
	export function CreateLinodeStatsIoFormGroup() {
		return new FormGroup<LinodeStatsIoFormProperties>({
		});

	}

	export interface LinodeStatsNetv4 {

		/** Input stats for IPv4, measured in bits/s (bits/second). */
		in?: Array<string>;

		/** Output stats for IPv4, measured in bits/s (bits/second). */
		out?: Array<string>;

		/** Private IPv4 input statistics, measured in bits/s (bits/second). */
		private_in?: Array<string>;

		/** Private IPv4 output statistics, measured in bits/s (bits/second). */
		private_out?: Array<string>;
	}
	export interface LinodeStatsNetv4FormProperties {
	}
	export function CreateLinodeStatsNetv4FormGroup() {
		return new FormGroup<LinodeStatsNetv4FormProperties>({
		});

	}

	export interface LinodeStatsNetv6 {

		/** Input stats for IPv6, measured in bits/s (bits/second). */
		in?: Array<string>;

		/** Output stats for IPv6, measured in bits/s (bits/second). */
		out?: Array<string>;

		/** Private IPv6 input statistics, measured in bits/s (bits/second). */
		private_in?: Array<string>;

		/** Private IPv6 output statistics, measured in bits/s (bits/second). */
		private_out?: Array<string>;
	}
	export interface LinodeStatsNetv6FormProperties {
	}
	export function CreateLinodeStatsNetv6FormGroup() {
		return new FormGroup<LinodeStatsNetv6FormProperties>({
		});

	}


	/**
	 * Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
	 */
	export interface LinodeType {

		/**
		 * A list of optional add-on services for Linodes and their associated costs.
		 */
		addons?: LinodeTypeAddons;

		/**
		 * The class of the Linode Type. We currently offer five classes of Linodes:
		 * * nanode - Nanode instances are good for low-duty workloads,
		 * where performance isn't critical. **Note:** As of June 16th, 2020, Nanodes became
		 * 1 GB Linodes in the Cloud Manager, however, the API, the CLI, and billing will
		 * continue to refer to these instances as Nanodes.
		 * * standard - Standard Shared instances are good for medium-duty workloads and
		 * are a good mix of performance, resources, and price. **Note:** As of June 16th, 2020,
		 * Standard Linodes in the Cloud Manager became Shared Linodes, however, the API, the CLI, and
		 * billing will continue to refer to these instances as Standard Linodes.
		 * * dedicated - Dedicated CPU instances are good for full-duty workloads
		 * where consistent performance is important.
		 * * gpu - Linodes with dedicated NVIDIA Quadro &reg; RTX 6000 GPUs accelerate highly
		 * specialized applications such as machine learning, AI, and video transcoding.
		 * * highmem - High Memory instances favor RAM over other resources, and can be
		 * good for memory hungry use cases like caching and in-memory databases.
		 * All High Memory plans contain dedicated CPU cores.
		 */
		class?: LinodeTypeClass | null;

		/**
		 * The Disk size, in MB, of the Linode Type.
		 */
		disk?: number | null;

		/**
		 * The number of GPUs this Linode Type offers.
		 */
		gpus?: number | null;

		/** The ID representing the Linode Type. */
		id?: string | null;

		/**
		 * The Linode Type's label is for display purposes only.
		 */
		label?: string | null;

		/**
		 * Amount of RAM included in this Linode Type.
		 */
		memory?: number | null;

		/**
		 * The Mbits outbound bandwidth allocation.
		 */
		network_out?: number | null;

		/**
		 * Cost in US dollars, broken down into hourly and monthly charges.
		 */
		price?: LinodeTypePrice;

		/**
		 * The Linode Type that a [mutate](/docs/api/linode-instances/#linode-upgrade) will upgrade to for a Linode of this type.  If "null", a Linode of this type may not mutate.
		 */
		successor?: string | null;

		/**
		 * The monthly outbound transfer amount, in MB.
		 */
		transfer?: number | null;

		/**
		 * The number of VCPU cores this Linode Type offers.
		 */
		vcpus?: number | null;
	}

	/**
	 * Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
	 */
	export interface LinodeTypeFormProperties {

		/**
		 * The class of the Linode Type. We currently offer five classes of Linodes:
		 * * nanode - Nanode instances are good for low-duty workloads,
		 * where performance isn't critical. **Note:** As of June 16th, 2020, Nanodes became
		 * 1 GB Linodes in the Cloud Manager, however, the API, the CLI, and billing will
		 * continue to refer to these instances as Nanodes.
		 * * standard - Standard Shared instances are good for medium-duty workloads and
		 * are a good mix of performance, resources, and price. **Note:** As of June 16th, 2020,
		 * Standard Linodes in the Cloud Manager became Shared Linodes, however, the API, the CLI, and
		 * billing will continue to refer to these instances as Standard Linodes.
		 * * dedicated - Dedicated CPU instances are good for full-duty workloads
		 * where consistent performance is important.
		 * * gpu - Linodes with dedicated NVIDIA Quadro &reg; RTX 6000 GPUs accelerate highly
		 * specialized applications such as machine learning, AI, and video transcoding.
		 * * highmem - High Memory instances favor RAM over other resources, and can be
		 * good for memory hungry use cases like caching and in-memory databases.
		 * All High Memory plans contain dedicated CPU cores.
		 */
		class: FormControl<LinodeTypeClass | null | undefined>,

		/**
		 * The Disk size, in MB, of the Linode Type.
		 */
		disk: FormControl<number | null | undefined>,

		/**
		 * The number of GPUs this Linode Type offers.
		 */
		gpus: FormControl<number | null | undefined>,

		/** The ID representing the Linode Type. */
		id: FormControl<string | null | undefined>,

		/**
		 * The Linode Type's label is for display purposes only.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Amount of RAM included in this Linode Type.
		 */
		memory: FormControl<number | null | undefined>,

		/**
		 * The Mbits outbound bandwidth allocation.
		 */
		network_out: FormControl<number | null | undefined>,

		/**
		 * The Linode Type that a [mutate](/docs/api/linode-instances/#linode-upgrade) will upgrade to for a Linode of this type.  If "null", a Linode of this type may not mutate.
		 */
		successor: FormControl<string | null | undefined>,

		/**
		 * The monthly outbound transfer amount, in MB.
		 */
		transfer: FormControl<number | null | undefined>,

		/**
		 * The number of VCPU cores this Linode Type offers.
		 */
		vcpus: FormControl<number | null | undefined>,
	}
	export function CreateLinodeTypeFormGroup() {
		return new FormGroup<LinodeTypeFormProperties>({
			class: new FormControl<LinodeTypeClass | null | undefined>(undefined),
			disk: new FormControl<number | null | undefined>(undefined),
			gpus: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			network_out: new FormControl<number | null | undefined>(undefined),
			successor: new FormControl<string | null | undefined>(undefined),
			transfer: new FormControl<number | null | undefined>(undefined),
			vcpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LinodeTypeAddons {

		/**
		 * Information about the optional Backup service offered for Linodes.
		 */
		backups?: LinodeTypeAddonsBackups;
	}
	export interface LinodeTypeAddonsFormProperties {
	}
	export function CreateLinodeTypeAddonsFormGroup() {
		return new FormGroup<LinodeTypeAddonsFormProperties>({
		});

	}

	export interface LinodeTypeAddonsBackups {

		/** Cost of enabling Backups for this Linode Type. */
		price?: LinodeTypeAddonsBackupsPrice;
	}
	export interface LinodeTypeAddonsBackupsFormProperties {
	}
	export function CreateLinodeTypeAddonsBackupsFormGroup() {
		return new FormGroup<LinodeTypeAddonsBackupsFormProperties>({
		});

	}

	export interface LinodeTypeAddonsBackupsPrice {

		/**
		 * The cost (in US dollars) per hour to add Backups service.
		 */
		hourly?: number | null;

		/**
		 * The cost (in US dollars) per month to add Backups service.
		 */
		monthly?: number | null;
	}
	export interface LinodeTypeAddonsBackupsPriceFormProperties {

		/**
		 * The cost (in US dollars) per hour to add Backups service.
		 */
		hourly: FormControl<number | null | undefined>,

		/**
		 * The cost (in US dollars) per month to add Backups service.
		 */
		monthly: FormControl<number | null | undefined>,
	}
	export function CreateLinodeTypeAddonsBackupsPriceFormGroup() {
		return new FormGroup<LinodeTypeAddonsBackupsPriceFormProperties>({
			hourly: new FormControl<number | null | undefined>(undefined),
			monthly: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LinodeTypeClass { nanode = 'nanode', standard = 'standard', dedicated = 'dedicated', gpu = 'gpu', highmem = 'highmem' }

	export interface LinodeTypePrice {

		/** Cost (in US dollars) per hour. */
		hourly?: number | null;

		/** Cost (in US dollars) per month. */
		monthly?: number | null;
	}
	export interface LinodeTypePriceFormProperties {

		/** Cost (in US dollars) per hour. */
		hourly: FormControl<number | null | undefined>,

		/** Cost (in US dollars) per month. */
		monthly: FormControl<number | null | undefined>,
	}
	export function CreateLinodeTypePriceFormGroup() {
		return new FormGroup<LinodeTypePriceFormProperties>({
			hourly: new FormControl<number | null | undefined>(undefined),
			monthly: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing a previous successful login for a User.
	 */
	export interface Login {

		/**
		 * When the login was initiated.
		 */
		datetime?: Date | null;

		/**
		 * The unique ID of this login object.
		 */
		id?: number | null;

		/**
		 * The remote IP address that requested the login.
		 */
		ip?: string | null;

		/**
		 * True if the User that attempted the login was a restricted User, false otherwise.
		 */
		restricted?: boolean | null;

		/**
		 * Whether the login attempt succeeded or failed.
		 */
		status?: LoginStatus | null;

		/**
		 * The username of the User that attempted the login.
		 */
		username?: string | null;
	}

	/**
	 * An object representing a previous successful login for a User.
	 */
	export interface LoginFormProperties {

		/**
		 * When the login was initiated.
		 */
		datetime: FormControl<Date | null | undefined>,

		/**
		 * The unique ID of this login object.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The remote IP address that requested the login.
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * True if the User that attempted the login was a restricted User, false otherwise.
		 */
		restricted: FormControl<boolean | null | undefined>,

		/**
		 * Whether the login attempt succeeded or failed.
		 */
		status: FormControl<LoginStatus | null | undefined>,

		/**
		 * The username of the User that attempted the login.
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateLoginFormGroup() {
		return new FormGroup<LoginFormProperties>({
			datetime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			restricted: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<LoginStatus | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoginStatus { successful = 'successful', failed = 'failed' }


	/**
	 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
	 */
	export interface LongviewClient {

		/**
		 * The API key for this Client, used when configuring the Longview
		 * Client application on your Linode.
		 * Returns as `[REDACTED]` if you do not have read-write access to this client.
		 */
		api_key?: string | null;

		/**
		 * The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
		 */
		apps?: LongviewClientApps;

		/**
		 * When this Longview Client was created.
		 */
		created?: Date | null;

		/**
		 * This Client's unique ID.
		 */
		id?: number | null;

		/**
		 * The install code for this Client, used when configuring the Longview
		 * Client application on your Linode.
		 * Returns as `[REDACTED]` if you do not have read-write access to this client.
		 */
		install_code?: string | null;

		/**
		 * This Client's unique label. This is for display purposes only.
		 * Max length: 32
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * When this Longview Client was last updated.
		 */
		updated?: Date | null;
	}

	/**
	 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
	 */
	export interface LongviewClientFormProperties {

		/**
		 * The API key for this Client, used when configuring the Longview
		 * Client application on your Linode.
		 * Returns as `[REDACTED]` if you do not have read-write access to this client.
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * When this Longview Client was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * This Client's unique ID.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The install code for this Client, used when configuring the Longview
		 * Client application on your Linode.
		 * Returns as `[REDACTED]` if you do not have read-write access to this client.
		 */
		install_code: FormControl<string | null | undefined>,

		/**
		 * This Client's unique label. This is for display purposes only.
		 * Max length: 32
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * When this Longview Client was last updated.
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateLongviewClientFormGroup() {
		return new FormGroup<LongviewClientFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			install_code: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9-_]{3,32}')]),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface LongviewClientApps {

		/**
		 * If True, the Apache Longview Client module is monitoring Apache on your server.
		 */
		apache?: boolean | null;

		/**
		 * If True, the MySQL Longview Client modules is monitoring MySQL on your server.
		 */
		mysql?: boolean | null;

		/**
		 * If True, the Nginx Longview Client module is monitoring Nginx on your server.
		 */
		nginx?: boolean | null;
	}
	export interface LongviewClientAppsFormProperties {

		/**
		 * If True, the Apache Longview Client module is monitoring Apache on your server.
		 */
		apache: FormControl<boolean | null | undefined>,

		/**
		 * If True, the MySQL Longview Client modules is monitoring MySQL on your server.
		 */
		mysql: FormControl<boolean | null | undefined>,

		/**
		 * If True, the Nginx Longview Client module is monitoring Nginx on your server.
		 */
		nginx: FormControl<boolean | null | undefined>,
	}
	export function CreateLongviewClientAppsFormGroup() {
		return new FormGroup<LongviewClientAppsFormProperties>({
			apache: new FormControl<boolean | null | undefined>(undefined),
			mysql: new FormControl<boolean | null | undefined>(undefined),
			nginx: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Longview Plan object.
	 */
	export interface LongviewPlan {

		/**
		 * The subscription ID for a particular Longview plan. A value of `null` corresponds to Longview Free.
		 * You can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details of each plan.
		 */
		longview_subscription?: LongviewPlanLongview_subscription | null;
	}

	/**
	 * Longview Plan object.
	 */
	export interface LongviewPlanFormProperties {

		/**
		 * The subscription ID for a particular Longview plan. A value of `null` corresponds to Longview Free.
		 * You can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details of each plan.
		 */
		longview_subscription: FormControl<LongviewPlanLongview_subscription | null | undefined>,
	}
	export function CreateLongviewPlanFormGroup() {
		return new FormGroup<LongviewPlanFormProperties>({
			longview_subscription: new FormControl<LongviewPlanLongview_subscription | null | undefined>(undefined),
		});

	}

	export enum LongviewPlanLongview_subscription { 'longview-3' = 'longview-3', 'longview-10' = 'longview-10', 'longview-40' = 'longview-40', 'longview-100' = 'longview-100' }


	/**
	 * A Longview Subscription represents a tier of Longview service you can subscribe to.
	 */
	export interface LongviewSubscription {

		/**
		 * The number of Longview Clients that may be created with this Subscription tier.
		 */
		clients_included?: number | null;

		/**
		 * The unique ID of this Subscription tier.
		 */
		id?: LongviewPlanLongview_subscription | null;

		/**
		 * A display name for this Subscription tier.
		 */
		label?: string | null;

		/**
		 * Pricing information about this Subscription tier.
		 */
		price?: LongviewSubscriptionPrice;
	}

	/**
	 * A Longview Subscription represents a tier of Longview service you can subscribe to.
	 */
	export interface LongviewSubscriptionFormProperties {

		/**
		 * The number of Longview Clients that may be created with this Subscription tier.
		 */
		clients_included: FormControl<number | null | undefined>,

		/**
		 * The unique ID of this Subscription tier.
		 */
		id: FormControl<LongviewPlanLongview_subscription | null | undefined>,

		/**
		 * A display name for this Subscription tier.
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateLongviewSubscriptionFormGroup() {
		return new FormGroup<LongviewSubscriptionFormProperties>({
			clients_included: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<LongviewPlanLongview_subscription | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LongviewSubscriptionPrice {

		/**
		 * The hourly price, in US dollars, for this Subscription tier.
		 */
		hourly?: number | null;

		/**
		 * The maximum monthly price in US Dollars for this Subscription tier. You will never be charged more than this amount per month for this subscription.
		 */
		monthly?: number | null;
	}
	export interface LongviewSubscriptionPriceFormProperties {

		/**
		 * The hourly price, in US dollars, for this Subscription tier.
		 */
		hourly: FormControl<number | null | undefined>,

		/**
		 * The maximum monthly price in US Dollars for this Subscription tier. You will never be charged more than this amount per month for this subscription.
		 */
		monthly: FormControl<number | null | undefined>,
	}
	export function CreateLongviewSubscriptionPriceFormGroup() {
		return new FormGroup<LongviewSubscriptionPriceFormProperties>({
			hourly: new FormControl<number | null | undefined>(undefined),
			monthly: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Information about maintenance affecting an entity.
	 */
	export interface Maintenance {

		/**
		 * The entity being affected by maintenance.
		 */
		entity?: MaintenanceEntity;

		/**
		 * The reason maintenance is being performed.
		 */
		reason?: string | null;

		/**
		 * The maintenance status.
		 * Maintenance progresses in the following sequence: pending, started, then completed.
		 */
		status?: MaintenanceStatus | null;

		/**
		 * The type of maintenance.
		 */
		type?: MaintenanceType | null;

		/**
		 * When the maintenance will begin.
		 * [Filterable](/docs/api/#filtering-and-sorting) with the following parameters:
		 * * A single value in date-time string format ("%Y-%m-%dT%H:%M:%S"), which returns only matches to that value.
		 * * A dictionary containing pairs of inequality operator string keys ("+or", "+gt", "+gte", "+lt", "+lte",
		 * or "+neq") and single date-time string format values ("%Y-%m-%dT%H:%M:%S"). "+or" accepts an array of values that
		 * may consist of single date-time strings or dictionaries of inequality operator pairs.
		 */
		when?: Date | null;
	}

	/**
	 * Information about maintenance affecting an entity.
	 */
	export interface MaintenanceFormProperties {

		/**
		 * The reason maintenance is being performed.
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * The maintenance status.
		 * Maintenance progresses in the following sequence: pending, started, then completed.
		 */
		status: FormControl<MaintenanceStatus | null | undefined>,

		/**
		 * The type of maintenance.
		 */
		type: FormControl<MaintenanceType | null | undefined>,

		/**
		 * When the maintenance will begin.
		 * [Filterable](/docs/api/#filtering-and-sorting) with the following parameters:
		 * * A single value in date-time string format ("%Y-%m-%dT%H:%M:%S"), which returns only matches to that value.
		 * * A dictionary containing pairs of inequality operator string keys ("+or", "+gt", "+gte", "+lt", "+lte",
		 * or "+neq") and single date-time string format values ("%Y-%m-%dT%H:%M:%S"). "+or" accepts an array of values that
		 * may consist of single date-time strings or dictionaries of inequality operator pairs.
		 */
		when: FormControl<Date | null | undefined>,
	}
	export function CreateMaintenanceFormGroup() {
		return new FormGroup<MaintenanceFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MaintenanceStatus | null | undefined>(undefined),
			type: new FormControl<MaintenanceType | null | undefined>(undefined),
			when: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MaintenanceEntity {

		/**
		 * The id of the entity being affected by maintenance.
		 */
		id?: number | null;

		/**
		 * The label of the entity being affected by maintenance.
		 */
		label?: string | null;

		/**
		 * The type of entity.
		 */
		type?: string | null;

		/**
		 * The API endpoint prefix to use in combination with the entity id to find specific information about the entity.
		 */
		url?: string | null;
	}
	export interface MaintenanceEntityFormProperties {

		/**
		 * The id of the entity being affected by maintenance.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The label of the entity being affected by maintenance.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The type of entity.
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The API endpoint prefix to use in combination with the entity id to find specific information about the entity.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceEntityFormGroup() {
		return new FormGroup<MaintenanceEntityFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenanceStatus { completed = 'completed', pending = 'pending', started = 'started' }

	export enum MaintenanceType { reboot = 'reboot', cold_migration = 'cold_migration', live_migration = 'live_migration' }


	/**
	 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
	 */
	export interface ManagedContact {

		/**
		 * The address to email this Contact to alert them of issues.
		 */
		email?: string | null;

		/**
		 * A grouping for this Contact. This is for display purposes only.
		 * Max length: 50
		 * Min length: 2
		 */
		group?: string | null;

		/**
		 * This Contact's unique ID.
		 */
		id?: number | null;

		/**
		 * The name of this Contact.
		 * Max length: 64
		 * Min length: 2
		 */
		name?: string | null;

		/**
		 * Information about how to reach this Contact by phone.
		 */
		phone?: ManagedContactPhone;

		/**
		 * When this Contact was last updated.
		 */
		updated?: Date | null;
	}

	/**
	 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
	 */
	export interface ManagedContactFormProperties {

		/**
		 * The address to email this Contact to alert them of issues.
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * A grouping for this Contact. This is for display purposes only.
		 * Max length: 50
		 * Min length: 2
		 */
		group: FormControl<string | null | undefined>,

		/**
		 * This Contact's unique ID.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The name of this Contact.
		 * Max length: 64
		 * Min length: 2
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * When this Contact was last updated.
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateManagedContactFormGroup() {
		return new FormGroup<ManagedContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(50)]),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9-_ ]{2,64}')]),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ManagedContactPhone {

		/**
		 * This Contact's primary phone number.
		 */
		primary?: string | null;

		/**
		 * This Contact's secondary phone number.
		 */
		secondary?: string | null;
	}
	export interface ManagedContactPhoneFormProperties {

		/**
		 * This Contact's primary phone number.
		 */
		primary: FormControl<string | null | undefined>,

		/**
		 * This Contact's secondary phone number.
		 */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateManagedContactPhoneFormGroup() {
		return new FormGroup<ManagedContactPhoneFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
	 */
	export interface ManagedCredential {

		/**
		 * This Credential's unique ID.
		 */
		id?: number | null;

		/**
		 * The unique label for this Credential. This is for display purposes only.
		 * Max length: 75
		 * Min length: 2
		 */
		label?: string | null;

		/**
		 * The date this Credential was last decrypted by a member of Linode special forces.
		 */
		last_decrypted?: Date | null;
	}

	/**
	 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
	 */
	export interface ManagedCredentialFormProperties {

		/**
		 * This Credential's unique ID.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The unique label for this Credential. This is for display purposes only.
		 * Max length: 75
		 * Min length: 2
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The date this Credential was last decrypted by a member of Linode special forces.
		 */
		last_decrypted: FormControl<Date | null | undefined>,
	}
	export function CreateManagedCredentialFormGroup() {
		return new FormGroup<ManagedCredentialFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(75), Validators.pattern('[a-zA-Z0-9-_ \.]{2,75}')]),
			last_decrypted: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**
	 * An Issue that was detected with a service Linode is managing.
	 */
	export interface ManagedIssue {

		/**
		 * When this Issue was created. Issues are created in response to issues detected with Managed Services, so this is also when the Issue was detected.
		 */
		created?: Date | null;

		/**
		 * The ticket this Managed Issue opened.
		 */
		entity?: ManagedIssueEntity;

		/**
		 * This Issue's unique ID.
		 */
		id?: number | null;

		/**
		 * An array of Managed Service IDs that were affected by this Issue.
		 */
		services?: Array<number>;
	}

	/**
	 * An Issue that was detected with a service Linode is managing.
	 */
	export interface ManagedIssueFormProperties {

		/**
		 * When this Issue was created. Issues are created in response to issues detected with Managed Services, so this is also when the Issue was detected.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * This Issue's unique ID.
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateManagedIssueFormGroup() {
		return new FormGroup<ManagedIssueFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ManagedIssueEntity {

		/**
		 * This ticket's ID
		 */
		id?: number | null;

		/**
		 * The summary for this Ticket.
		 */
		label?: string | null;

		/**
		 * The type of entity this is. In this case, it is always a Ticket.
		 */
		type?: ManagedIssueEntityType | null;

		/**
		 * The relative URL where you can access this Ticket.
		 */
		url?: string | null;
	}
	export interface ManagedIssueEntityFormProperties {

		/**
		 * This ticket's ID
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The summary for this Ticket.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The type of entity this is. In this case, it is always a Ticket.
		 */
		type: FormControl<ManagedIssueEntityType | null | undefined>,

		/**
		 * The relative URL where you can access this Ticket.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateManagedIssueEntityFormGroup() {
		return new FormGroup<ManagedIssueEntityFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManagedIssueEntityType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedIssueEntityType { ticket = 'ticket' }


	/**
	 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
	 */
	export interface ManagedLinodeSettings {

		/**
		 * The group of the Linode these Settings are for. This is for display purposes only.
		 */
		group?: string | null;

		/**
		 * The ID of the Linode these Settings are for.
		 */
		id?: number | null;

		/**
		 * The label of the Linode these Settings are for.
		 */
		label?: string | null;

		/**
		 * The SSH settings for this Linode.
		 */
		ssh?: ManagedLinodeSettingsSsh;
	}

	/**
	 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
	 */
	export interface ManagedLinodeSettingsFormProperties {

		/**
		 * The group of the Linode these Settings are for. This is for display purposes only.
		 */
		group: FormControl<string | null | undefined>,

		/**
		 * The ID of the Linode these Settings are for.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The label of the Linode these Settings are for.
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateManagedLinodeSettingsFormGroup() {
		return new FormGroup<ManagedLinodeSettingsFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagedLinodeSettingsSsh {

		/**
		 * If true, Linode special forces may access this Linode over ssh to respond to Issues.
		 */
		access?: boolean | null;

		/**
		 * The IP Linode special forces should use to access this Linode
		 * when responding to an Issue.
		 * By default, any of a Linode's IP addresses can be used for incident response access.
		 */
		ip?: string | null;

		/**
		 * The port Linode special forces should use to access this Linode
		 * over ssh to respond to an Issue.
		 * The default `null` value corresponds to port 22.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port?: number | null;

		/**
		 * The specific user, if any, Linode's special forces should use when accessing this
		 * Linode to respond to an issue.
		 * The default `null` value corresponds to the root user.
		 * Max length: 32
		 * Min length: 0
		 */
		user?: string | null;
	}
	export interface ManagedLinodeSettingsSshFormProperties {

		/**
		 * If true, Linode special forces may access this Linode over ssh to respond to Issues.
		 */
		access: FormControl<boolean | null | undefined>,

		/**
		 * The IP Linode special forces should use to access this Linode
		 * when responding to an Issue.
		 * By default, any of a Linode's IP addresses can be used for incident response access.
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * The port Linode special forces should use to access this Linode
		 * over ssh to respond to an Issue.
		 * The default `null` value corresponds to port 22.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * The specific user, if any, Linode's special forces should use when accessing this
		 * Linode to respond to an issue.
		 * The default `null` value corresponds to the root user.
		 * Max length: 32
		 * Min length: 0
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateManagedLinodeSettingsSshFormGroup() {
		return new FormGroup<ManagedLinodeSettingsSshFormProperties>({
			access: new FormControl<boolean | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(32)]),
		});

	}


	/**
	 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
	 */
	export interface ManagedService {

		/**
		 * The URL at which this Service is monitored.
		 * URL parameters such as `?no-cache=1` are preserved.
		 * URL fragments/anchors such as `#monitor` are **not** preserved.
		 * Max length: 100
		 * Min length: 3
		 */
		address?: string | null;

		/**
		 * What to expect to find in the response body for the Service to be considered up.
		 * Max length: 100
		 * Min length: 0
		 */
		body?: string | null;

		/**
		 * The group of ManagedContacts who should be notified or consulted with when an Issue is detected.
		 * Max length: 50
		 * Min length: 0
		 */
		consultation_group?: string | null;

		/** When this Managed Service was created. */
		created?: Date | null;

		/**
		 * An array of ManagedCredential IDs that should be used when attempting to resolve issues with this Service.
		 */
		credentials?: Array<number>;

		/**
		 * This Service's unique ID.
		 */
		id?: number | null;

		/**
		 * The label for this Service. This is for display purposes only.
		 * Max length: 64
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.
		 */
		notes?: string | null;

		/**
		 * The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.
		 */
		region?: string | null;

		/**
		 * How this Service is monitored.
		 */
		service_type?: ManagedServiceService_type | null;

		/**
		 * The current status of this Service.
		 */
		status?: ManagedServiceStatus | null;

		/**
		 * How long to wait, in seconds, for a response before considering the Service to be down.
		 * Minimum: 1
		 * Maximum: 255
		 */
		timeout?: number | null;

		/** When this Managed Service was last updated. */
		updated?: Date | null;
	}

	/**
	 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
	 */
	export interface ManagedServiceFormProperties {

		/**
		 * The URL at which this Service is monitored.
		 * URL parameters such as `?no-cache=1` are preserved.
		 * URL fragments/anchors such as `#monitor` are **not** preserved.
		 * Max length: 100
		 * Min length: 3
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * What to expect to find in the response body for the Service to be considered up.
		 * Max length: 100
		 * Min length: 0
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The group of ManagedContacts who should be notified or consulted with when an Issue is detected.
		 * Max length: 50
		 * Min length: 0
		 */
		consultation_group: FormControl<string | null | undefined>,

		/** When this Managed Service was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * This Service's unique ID.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The label for this Service. This is for display purposes only.
		 * Max length: 64
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Any information relevant to the Service that Linode special forces should know when attempting to resolve Issues.
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * The Region in which this Service is located. This is required if address is a private IP, and may not be set otherwise.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * How this Service is monitored.
		 */
		service_type: FormControl<ManagedServiceService_type | null | undefined>,

		/**
		 * The current status of this Service.
		 */
		status: FormControl<ManagedServiceStatus | null | undefined>,

		/**
		 * How long to wait, in seconds, for a response before considering the Service to be down.
		 * Minimum: 1
		 * Maximum: 255
		 */
		timeout: FormControl<number | null | undefined>,

		/** When this Managed Service was last updated. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateManagedServiceFormGroup() {
		return new FormGroup<ManagedServiceFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			body: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			consultation_group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(50)]),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9-_ \.]{3,64}')]),
			notes: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			service_type: new FormControl<ManagedServiceService_type | null | undefined>(undefined),
			status: new FormControl<ManagedServiceStatus | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(255)]),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ManagedServiceService_type { url = 'url', tcp = 'tcp' }

	export enum ManagedServiceStatus { disabled = 'disabled', pending = 'pending', ok = 'ok', problem = 'problem' }


	/**
	 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
	 */
	export interface NodeBalancer {

		/**
		 * Throttle connections per second.  Set to 0 (zero) to disable throttling.
		 * Minimum: 0
		 * Maximum: 20
		 */
		client_conn_throttle?: number | null;

		/**
		 * When this NodeBalancer was created.
		 */
		created?: Date | null;

		/**
		 * This NodeBalancer's hostname, beginning with its IP address and ending with _.ip.linodeusercontent.com_.
		 */
		hostname?: string | null;

		/**
		 * This NodeBalancer's unique ID.
		 */
		id?: number | null;

		/**
		 * This NodeBalancer's public IPv4 address.
		 */
		ipv4?: string | null;

		/**
		 * This NodeBalancer's public IPv6 address.
		 */
		ipv6?: string | null;

		/**
		 * This NodeBalancer's label. These must be unique on your Account.
		 * Max length: 32
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.
		 */
		region?: string | null;

		/**
		 * An array of Tags applied to this object.  Tags are for organizational purposes only.
		 */
		tags?: Array<string>;

		/**
		 * Information about the amount of transfer this NodeBalancer has had so far this month.
		 */
		transfer?: NodeBalancerTransfer;

		/**
		 * When this NodeBalancer was last updated.
		 */
		updated?: Date | null;
	}

	/**
	 * Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
	 */
	export interface NodeBalancerFormProperties {

		/**
		 * Throttle connections per second.  Set to 0 (zero) to disable throttling.
		 * Minimum: 0
		 * Maximum: 20
		 */
		client_conn_throttle: FormControl<number | null | undefined>,

		/**
		 * When this NodeBalancer was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * This NodeBalancer's hostname, beginning with its IP address and ending with _.ip.linodeusercontent.com_.
		 */
		hostname: FormControl<string | null | undefined>,

		/**
		 * This NodeBalancer's unique ID.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * This NodeBalancer's public IPv4 address.
		 */
		ipv4: FormControl<string | null | undefined>,

		/**
		 * This NodeBalancer's public IPv6 address.
		 */
		ipv6: FormControl<string | null | undefined>,

		/**
		 * This NodeBalancer's label. These must be unique on your Account.
		 * Max length: 32
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The Region where this NodeBalancer is located. NodeBalancers only support backends in the same Region.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * When this NodeBalancer was last updated.
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateNodeBalancerFormGroup() {
		return new FormGroup<NodeBalancerFormProperties>({
			client_conn_throttle: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			created: new FormControl<Date | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			ipv4: new FormControl<string | null | undefined>(undefined),
			ipv6: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9-_]{3,32}')]),
			region: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NodeBalancerTransfer {

		/**
		 * The total outbound transfer, in MB, used for this NodeBalancer this month.
		 */
		in?: number | null;

		/**
		 * The total inbound transfer, in MB, used for this NodeBalancer this month.
		 */
		out?: number | null;

		/**
		 * The total transfer, in MB, used by this NodeBalancer this month.
		 */
		total?: number | null;
	}
	export interface NodeBalancerTransferFormProperties {

		/**
		 * The total outbound transfer, in MB, used for this NodeBalancer this month.
		 */
		in: FormControl<number | null | undefined>,

		/**
		 * The total inbound transfer, in MB, used for this NodeBalancer this month.
		 */
		out: FormControl<number | null | undefined>,

		/**
		 * The total transfer, in MB, used by this NodeBalancer this month.
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateNodeBalancerTransferFormGroup() {
		return new FormGroup<NodeBalancerTransferFormProperties>({
			in: new FormControl<number | null | undefined>(undefined),
			out: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
	 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
	 */
	export interface NodeBalancerConfig {

		/**
		 * What algorithm this NodeBalancer should use for routing traffic to backends.
		 */
		algorithm?: NodeBalancerConfigAlgorithm | null;

		/**
		 * The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.
		 * * If `none` no check is performed.
		 * * `connection` requires only a connection to the backend to succeed.
		 * * `http` and `http_body` rely on the backend serving HTTP, and that
		 * the response returned matches what is expected.
		 */
		check?: NodeBalancerConfigCheck | null;

		/**
		 * How many times to attempt a check before considering a backend to be down.
		 * Minimum: 1
		 * Maximum: 30
		 */
		check_attempts?: number | null;

		/**
		 * This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.
		 */
		check_body?: string | null;

		/**
		 * How often, in seconds, to check that backends are up and serving requests.
		 * Must be greater than `check_timeout`.
		 */
		check_interval?: number | null;

		/**
		 * If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.
		 */
		check_passive?: boolean | null;

		/**
		 * The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.
		 */
		check_path?: string | null;

		/**
		 * How long, in seconds, to wait for a check attempt before considering it failed.
		 * Must be less than `check_interval`.
		 * Minimum: 1
		 * Maximum: 30
		 */
		check_timeout?: number | null;

		/**
		 * What ciphers to use for SSL connections served by this NodeBalancer.
		 * * `legacy` is considered insecure and should only be used if necessary.
		 */
		cipher_suite?: NodeBalancerConfigCipher_suite | null;

		/** This config's unique ID */
		id?: number | null;

		/**
		 * The ID for the NodeBalancer this config belongs to.
		 */
		nodebalancer_id?: number | null;

		/**
		 * A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
		 */
		nodes_status?: NodeBalancerConfigNodes_status;

		/**
		 * The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port?: number | null;

		/**
		 * The protocol this port is configured to serve.
		 * * The `http` and `tcp` protocols do not support `ssl_cert` and `ssl_key`.
		 * * The `https` protocol is mutually required with `ssl_cert` and `ssl_key`.
		 * Review our guide on [Available Protocols](/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features.
		 */
		protocol?: NodeBalancerConfigProtocol | null;

		/**
		 * ProxyProtocol is a TCP extension that sends initial TCP connection information such as source/destination IPs and ports to backend devices. This information would be lost otherwise. Backend devices must be configured to work with ProxyProtocol if enabled.
		 * * If ommited, or set to `none`, the NodeBalancer doesn't send any auxilary data over TCP connections. This is the default.
		 * * If set to `v1`, the human-readable header format (Version 1) is used. Requires `tcp` protocol.
		 * * If set to `v2`, the binary header format (Version 2) is used. Requires `tcp` protocol.
		 */
		proxy_protocol?: NodeBalancerConfigProxy_protocol | null;

		/**
		 * The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL
		 * certificate and Certificate Authority chain) that should be served on this
		 * NodeBalancerConfig's port.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI).
		 * [Diffie-Hellman Parameters](/docs/products/networking/nodebalancers/guides/ssl-termination/#diffie-hellman-parameters) can be included in this value to enable forward secrecy.
		 * The contents of this field will not be shown in any responses that display
		 * the NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field
		 * appears.
		 * The read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig
		 * response are automatically derived from your certificate. Please refer to these fields to
		 * verify that the appropriate certificate was assigned to your NodeBalancerConfig.
		 */
		ssl_cert?: string | null;

		/**
		 * The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
		 */
		ssl_commonname?: string | null;

		/**
		 * The read-only SHA1-encoded fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
		 */
		ssl_fingerprint?: string | null;

		/**
		 * The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI).
		 * The contents of this field will not be shown in any responses that display
		 * the NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field
		 * appears.
		 * The read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig
		 * response are automatically derived from your certificate. Please refer to these fields to
		 * verify that the appropriate certificate was assigned to your NodeBalancerConfig.
		 */
		ssl_key?: string | null;

		/**
		 * Controls how session stickiness is handled on this port.
		 * * If set to `none` connections will always be assigned a backend based on the algorithm configured.
		 * * If set to `table` sessions from the same remote address will be routed to the same
		 * backend.
		 * * For HTTP or HTTPS clients, `http_cookie` allows sessions to be
		 * routed to the same backend based on a cookie set by the NodeBalancer.
		 */
		stickiness?: NodeBalancerConfigStickiness | null;
	}

	/**
	 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
	 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
	 */
	export interface NodeBalancerConfigFormProperties {

		/**
		 * What algorithm this NodeBalancer should use for routing traffic to backends.
		 */
		algorithm: FormControl<NodeBalancerConfigAlgorithm | null | undefined>,

		/**
		 * The type of check to perform against backends to ensure they are serving requests. This is used to determine if backends are up or down.
		 * * If `none` no check is performed.
		 * * `connection` requires only a connection to the backend to succeed.
		 * * `http` and `http_body` rely on the backend serving HTTP, and that
		 * the response returned matches what is expected.
		 */
		check: FormControl<NodeBalancerConfigCheck | null | undefined>,

		/**
		 * How many times to attempt a check before considering a backend to be down.
		 * Minimum: 1
		 * Maximum: 30
		 */
		check_attempts: FormControl<number | null | undefined>,

		/**
		 * This value must be present in the response body of the check in order for it to pass. If this value is not present in the response body of a check request, the backend is considered to be down.
		 */
		check_body: FormControl<string | null | undefined>,

		/**
		 * How often, in seconds, to check that backends are up and serving requests.
		 * Must be greater than `check_timeout`.
		 */
		check_interval: FormControl<number | null | undefined>,

		/**
		 * If true, any response from this backend with a `5xx` status code will be enough for it to be considered unhealthy and taken out of rotation.
		 */
		check_passive: FormControl<boolean | null | undefined>,

		/**
		 * The URL path to check on each backend. If the backend does not respond to this request it is considered to be down.
		 */
		check_path: FormControl<string | null | undefined>,

		/**
		 * How long, in seconds, to wait for a check attempt before considering it failed.
		 * Must be less than `check_interval`.
		 * Minimum: 1
		 * Maximum: 30
		 */
		check_timeout: FormControl<number | null | undefined>,

		/**
		 * What ciphers to use for SSL connections served by this NodeBalancer.
		 * * `legacy` is considered insecure and should only be used if necessary.
		 */
		cipher_suite: FormControl<NodeBalancerConfigCipher_suite | null | undefined>,

		/** This config's unique ID */
		id: FormControl<number | null | undefined>,

		/**
		 * The ID for the NodeBalancer this config belongs to.
		 */
		nodebalancer_id: FormControl<number | null | undefined>,

		/**
		 * The port this Config is for. These values must be unique across configs on a single NodeBalancer (you can't have two configs for port 80, for example).  While some ports imply some protocols, no enforcement is done and you may configure your NodeBalancer however is useful to you. For example, while port 443 is generally used for HTTPS, you do not need SSL configured to have a NodeBalancer listening on port 443.
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * The protocol this port is configured to serve.
		 * * The `http` and `tcp` protocols do not support `ssl_cert` and `ssl_key`.
		 * * The `https` protocol is mutually required with `ssl_cert` and `ssl_key`.
		 * Review our guide on [Available Protocols](/docs/products/networking/nodebalancers/guides/protocols/) for information on protocol features.
		 */
		protocol: FormControl<NodeBalancerConfigProtocol | null | undefined>,

		/**
		 * ProxyProtocol is a TCP extension that sends initial TCP connection information such as source/destination IPs and ports to backend devices. This information would be lost otherwise. Backend devices must be configured to work with ProxyProtocol if enabled.
		 * * If ommited, or set to `none`, the NodeBalancer doesn't send any auxilary data over TCP connections. This is the default.
		 * * If set to `v1`, the human-readable header format (Version 1) is used. Requires `tcp` protocol.
		 * * If set to `v2`, the binary header format (Version 2) is used. Requires `tcp` protocol.
		 */
		proxy_protocol: FormControl<NodeBalancerConfigProxy_protocol | null | undefined>,

		/**
		 * The PEM-formatted public SSL certificate (or the combined PEM-formatted SSL
		 * certificate and Certificate Authority chain) that should be served on this
		 * NodeBalancerConfig's port.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI).
		 * [Diffie-Hellman Parameters](/docs/products/networking/nodebalancers/guides/ssl-termination/#diffie-hellman-parameters) can be included in this value to enable forward secrecy.
		 * The contents of this field will not be shown in any responses that display
		 * the NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field
		 * appears.
		 * The read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig
		 * response are automatically derived from your certificate. Please refer to these fields to
		 * verify that the appropriate certificate was assigned to your NodeBalancerConfig.
		 */
		ssl_cert: FormControl<string | null | undefined>,

		/**
		 * The read-only common name automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
		 */
		ssl_commonname: FormControl<string | null | undefined>,

		/**
		 * The read-only SHA1-encoded fingerprint automatically derived from the SSL certificate assigned to this NodeBalancerConfig. Please refer to this field to verify that the appropriate certificate is assigned to your NodeBalancerConfig.
		 */
		ssl_fingerprint: FormControl<string | null | undefined>,

		/**
		 * The PEM-formatted private key for the SSL certificate set in the `ssl_cert` field.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI).
		 * The contents of this field will not be shown in any responses that display
		 * the NodeBalancerConfig. Instead, `<REDACTED>` will be printed where the field
		 * appears.
		 * The read-only `ssl_commonname` and `ssl_fingerprint` fields in a NodeBalancerConfig
		 * response are automatically derived from your certificate. Please refer to these fields to
		 * verify that the appropriate certificate was assigned to your NodeBalancerConfig.
		 */
		ssl_key: FormControl<string | null | undefined>,

		/**
		 * Controls how session stickiness is handled on this port.
		 * * If set to `none` connections will always be assigned a backend based on the algorithm configured.
		 * * If set to `table` sessions from the same remote address will be routed to the same
		 * backend.
		 * * For HTTP or HTTPS clients, `http_cookie` allows sessions to be
		 * routed to the same backend based on a cookie set by the NodeBalancer.
		 */
		stickiness: FormControl<NodeBalancerConfigStickiness | null | undefined>,
	}
	export function CreateNodeBalancerConfigFormGroup() {
		return new FormGroup<NodeBalancerConfigFormProperties>({
			algorithm: new FormControl<NodeBalancerConfigAlgorithm | null | undefined>(undefined),
			check: new FormControl<NodeBalancerConfigCheck | null | undefined>(undefined),
			check_attempts: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(30)]),
			check_body: new FormControl<string | null | undefined>(undefined),
			check_interval: new FormControl<number | null | undefined>(undefined),
			check_passive: new FormControl<boolean | null | undefined>(undefined),
			check_path: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9\/\-%?&=.]*$')]),
			check_timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(30)]),
			cipher_suite: new FormControl<NodeBalancerConfigCipher_suite | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			nodebalancer_id: new FormControl<number | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			protocol: new FormControl<NodeBalancerConfigProtocol | null | undefined>(undefined),
			proxy_protocol: new FormControl<NodeBalancerConfigProxy_protocol | null | undefined>(undefined),
			ssl_cert: new FormControl<string | null | undefined>(undefined),
			ssl_commonname: new FormControl<string | null | undefined>(undefined),
			ssl_fingerprint: new FormControl<string | null | undefined>(undefined),
			ssl_key: new FormControl<string | null | undefined>(undefined),
			stickiness: new FormControl<NodeBalancerConfigStickiness | null | undefined>(undefined),
		});

	}

	export enum NodeBalancerConfigAlgorithm { roundrobin = 'roundrobin', leastconn = 'leastconn', source = 'source' }

	export enum NodeBalancerConfigCheck { none = 'none', connection = 'connection', http = 'http', http_body = 'http_body' }

	export enum NodeBalancerConfigCipher_suite { recommended = 'recommended', legacy = 'legacy' }

	export interface NodeBalancerConfigNodes_status {

		/**
		 * The number of backends considered to be "DOWN" and unhealthy.  These are not in rotation, and not serving requests.
		 */
		down?: number | null;

		/**
		 * The number of backends considered to be "UP" and healthy, and that are serving requests.
		 */
		up?: number | null;
	}
	export interface NodeBalancerConfigNodes_statusFormProperties {

		/**
		 * The number of backends considered to be "DOWN" and unhealthy.  These are not in rotation, and not serving requests.
		 */
		down: FormControl<number | null | undefined>,

		/**
		 * The number of backends considered to be "UP" and healthy, and that are serving requests.
		 */
		up: FormControl<number | null | undefined>,
	}
	export function CreateNodeBalancerConfigNodes_statusFormGroup() {
		return new FormGroup<NodeBalancerConfigNodes_statusFormProperties>({
			down: new FormControl<number | null | undefined>(undefined),
			up: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NodeBalancerConfigProtocol { http = 'http', https = 'https', tcp = 'tcp' }

	export enum NodeBalancerConfigProxy_protocol { none = 'none', v1 = 'v1', v2 = 'v2' }

	export enum NodeBalancerConfigStickiness { none = 'none', table = 'table', http_cookie = 'http_cookie' }


	/**
	 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
	 */
	export interface NodeBalancerNode {

		/**
		 * The private IP Address where this backend can be reached. This _must_ be a private IP address.
		 */
		address?: string | null;

		/**
		 * The NodeBalancer Config ID that this Node belongs to.
		 */
		config_id?: number | null;

		/** This node's unique ID. */
		id?: number | null;

		/**
		 * The label for this node.  This is for display purposes only.
		 * Max length: 32
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * The mode this NodeBalancer should use when sending traffic to this backend.
		 * * If set to `accept` this backend is accepting traffic.
		 * * If set to `reject` this backend will not receive traffic.
		 * * If set to `drain` this backend will not receive _new_ traffic, but connections already
		 * pinned to it will continue to be routed to it.
		 * * If set to `backup`, this backend will only receive traffic if all `accept` nodes
		 * are down.
		 */
		mode?: NodeBalancerNodeMode | null;

		/**
		 * The NodeBalancer ID that this Node belongs to.
		 */
		nodebalancer_id?: number | null;

		/**
		 * The current status of this node, based on the configured checks of its NodeBalancer Config.
		 */
		status?: NodeBalancerNodeStatus | null;

		/**
		 * Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.
		 * Minimum: 1
		 * Maximum: 255
		 */
		weight?: number | null;
	}

	/**
	 * A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
	 */
	export interface NodeBalancerNodeFormProperties {

		/**
		 * The private IP Address where this backend can be reached. This _must_ be a private IP address.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The NodeBalancer Config ID that this Node belongs to.
		 */
		config_id: FormControl<number | null | undefined>,

		/** This node's unique ID. */
		id: FormControl<number | null | undefined>,

		/**
		 * The label for this node.  This is for display purposes only.
		 * Max length: 32
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The mode this NodeBalancer should use when sending traffic to this backend.
		 * * If set to `accept` this backend is accepting traffic.
		 * * If set to `reject` this backend will not receive traffic.
		 * * If set to `drain` this backend will not receive _new_ traffic, but connections already
		 * pinned to it will continue to be routed to it.
		 * * If set to `backup`, this backend will only receive traffic if all `accept` nodes
		 * are down.
		 */
		mode: FormControl<NodeBalancerNodeMode | null | undefined>,

		/**
		 * The NodeBalancer ID that this Node belongs to.
		 */
		nodebalancer_id: FormControl<number | null | undefined>,

		/**
		 * The current status of this node, based on the configured checks of its NodeBalancer Config.
		 */
		status: FormControl<NodeBalancerNodeStatus | null | undefined>,

		/**
		 * Used when picking a backend to serve a request and is not pinned to a single backend yet.  Nodes with a higher weight will receive more traffic.
		 * Minimum: 1
		 * Maximum: 255
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateNodeBalancerNodeFormGroup() {
		return new FormGroup<NodeBalancerNodeFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			config_id: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9-_.]{3,32}')]),
			mode: new FormControl<NodeBalancerNodeMode | null | undefined>(undefined),
			nodebalancer_id: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<NodeBalancerNodeStatus | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(255)]),
		});

	}

	export enum NodeBalancerNodeMode { accept = 'accept', reject = 'reject', drain = 'drain', backup = 'backup' }

	export enum NodeBalancerNodeStatus { unknown = 'unknown', UP = 'UP', DOWN = 'DOWN' }


	/**
	 * Stats for this NodeBalancer.
	 */
	export interface NodeBalancerStats {

		/**
		 * The data returned about this NodeBalancers.
		 */
		data?: NodeBalancerStatsData;

		/**
		 * The title for the statistics generated in this response.
		 */
		title?: string | null;
	}

	/**
	 * Stats for this NodeBalancer.
	 */
	export interface NodeBalancerStatsFormProperties {

		/**
		 * The title for the statistics generated in this response.
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateNodeBalancerStatsFormGroup() {
		return new FormGroup<NodeBalancerStatsFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeBalancerStatsData {

		/**
		 * An array of key/value pairs representing unix timestamp and reading for connections to this NodeBalancer.
		 */
		connections?: Array<number>;

		/**
		 * Traffic statistics for this NodeBalancer.
		 */
		traffic?: NodeBalancerStatsDataTraffic;
	}
	export interface NodeBalancerStatsDataFormProperties {
	}
	export function CreateNodeBalancerStatsDataFormGroup() {
		return new FormGroup<NodeBalancerStatsDataFormProperties>({
		});

	}

	export interface NodeBalancerStatsDataTraffic {

		/**
		 * An array of key/value pairs representing unix timestamp and reading for inbound traffic.
		 */
		in?: Array<number>;

		/**
		 * An array of key/value pairs representing unix timestamp and reading for outbound traffic.
		 */
		out?: Array<number>;
	}
	export interface NodeBalancerStatsDataTrafficFormProperties {
	}
	export function CreateNodeBalancerStatsDataTrafficFormGroup() {
		return new FormGroup<NodeBalancerStatsDataTrafficFormProperties>({
		});

	}


	/**
	 * An important, often time-sensitive item related to your Account.
	 */
	export interface Notification {

		/**
		 * A full description of this Notification, in markdown format.  Not all Notifications include bodies.
		 */
		body?: string | null;

		/** Detailed information about the Notification. */
		entity?: NotificationEntity;

		/**
		 * A short description of this Notification.
		 */
		label?: string | null;

		/** A human-readable description of the Notification. */
		message?: string | null;

		/**
		 * The severity of this Notification.  This field can be used to decide how prominently to display the Notification, what color to make the display text, etc.
		 */
		severity?: NotificationSeverity | null;

		/** The type of Notification this is. */
		type?: NotificationType | null;

		/**
		 * If this Notification has a duration, this will be the ending time for the Event/action. For example, if there is scheduled maintenance for one of our systems, `until` would be set to the end of the maintenance window.
		 */
		until?: Date | null;

		/**
		 * If this Notification is of an Event that will happen at a fixed, future time, this is when the named action will be taken. For example, if a Linode is to be migrated in response to a Security Advisory, this field will contain the approximate time the Linode will be taken offline for migration.
		 */
		when?: Date | null;
	}

	/**
	 * An important, often time-sensitive item related to your Account.
	 */
	export interface NotificationFormProperties {

		/**
		 * A full description of this Notification, in markdown format.  Not all Notifications include bodies.
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * A short description of this Notification.
		 */
		label: FormControl<string | null | undefined>,

		/** A human-readable description of the Notification. */
		message: FormControl<string | null | undefined>,

		/**
		 * The severity of this Notification.  This field can be used to decide how prominently to display the Notification, what color to make the display text, etc.
		 */
		severity: FormControl<NotificationSeverity | null | undefined>,

		/** The type of Notification this is. */
		type: FormControl<NotificationType | null | undefined>,

		/**
		 * If this Notification has a duration, this will be the ending time for the Event/action. For example, if there is scheduled maintenance for one of our systems, `until` would be set to the end of the maintenance window.
		 */
		until: FormControl<Date | null | undefined>,

		/**
		 * If this Notification is of an Event that will happen at a fixed, future time, this is when the named action will be taken. For example, if a Linode is to be migrated in response to a Security Advisory, this field will contain the approximate time the Linode will be taken offline for migration.
		 */
		when: FormControl<Date | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<NotificationSeverity | null | undefined>(undefined),
			type: new FormControl<NotificationType | null | undefined>(undefined),
			until: new FormControl<Date | null | undefined>(undefined),
			when: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NotificationEntity {

		/**
		 * The unique ID of the Notification's entity, based on the entity type.
		 */
		id?: number | null;

		/**
		 * The current label for this Notification's entity.
		 */
		label?: string | null;

		/** The type of entity this is related to. */
		type?: string | null;

		/**
		 * The URL where you can access the object this Notification is for. If a relative URL, it is relative to the domain you retrieved the Notification from.
		 */
		url?: string | null;
	}
	export interface NotificationEntityFormProperties {

		/**
		 * The unique ID of the Notification's entity, based on the entity type.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The current label for this Notification's entity.
		 */
		label: FormControl<string | null | undefined>,

		/** The type of entity this is related to. */
		type: FormControl<string | null | undefined>,

		/**
		 * The URL where you can access the object this Notification is for. If a relative URL, it is relative to the domain you retrieved the Notification from.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNotificationEntityFormGroup() {
		return new FormGroup<NotificationEntityFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NotificationSeverity { minor = 'minor', major = 'major', critical = 'critical' }

	export enum NotificationType { migration_scheduled = 'migration_scheduled', migration_imminent = 'migration_imminent', migration_pending = 'migration_pending', reboot_scheduled = 'reboot_scheduled', outage = 'outage', payment_due = 'payment_due', ticket_important = 'ticket_important', ticket_abuse = 'ticket_abuse', notice = 'notice', maintenance = 'maintenance', promotion = 'promotion' }


	/**
	 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
	 */
	export interface OAuthClient {

		/**
		 * The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).
		 */
		id?: string | null;

		/**
		 * The name of this application.  This will be presented to users when they are asked to grant it access to their Account.
		 * Max length: 512
		 * Min length: 1
		 */
		label?: string | null;

		/**
		 * If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target="_top" href="https://oauth.net/2/">OAuth spec</a> for more details.
		 */
		public?: boolean | null;

		/**
		 * The location a successful log in from <a target="_top" href="https://login.linode.com">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.
		 */
		redirect_uri?: string | null;

		/**
		 * The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.
		 */
		secret?: string | null;

		/**
		 * The status of this application.  `active` by default.
		 */
		status?: OAuthClientStatus | null;

		/**
		 * The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.
		 */
		thumbnail_url?: string | null;
	}

	/**
	 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
	 */
	export interface OAuthClientFormProperties {

		/**
		 * The OAuth Client ID.  This is used to identify the client, and is a publicly-known value (it is not a secret).
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of this application.  This will be presented to users when they are asked to grant it access to their Account.
		 * Max length: 512
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * If this is a public or private OAuth Client.  Public clients have a slightly different authentication workflow than private clients.  See the <a target="_top" href="https://oauth.net/2/">OAuth spec</a> for more details.
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * The location a successful log in from <a target="_top" href="https://login.linode.com">https://login.linode.com</a> should be redirected to for this client.  The receiver of this redirect should be ready to accept an OAuth exchange code and finish the OAuth exchange.
		 */
		redirect_uri: FormControl<string | null | undefined>,

		/**
		 * The OAuth Client secret, used in the OAuth exchange.  This is returned as `<REDACTED>` except when an OAuth Client is created or its secret is reset.  This is a secret, and should not be shared or disclosed publicly.
		 */
		secret: FormControl<string | null | undefined>,

		/**
		 * The status of this application.  `active` by default.
		 */
		status: FormControl<OAuthClientStatus | null | undefined>,

		/**
		 * The URL where this client's thumbnail may be viewed, or `null` if this client does not have a thumbnail set.
		 */
		thumbnail_url: FormControl<string | null | undefined>,
	}
	export function CreateOAuthClientFormGroup() {
		return new FormGroup<OAuthClientFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			public: new FormControl<boolean | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OAuthClientStatus | null | undefined>(undefined),
			thumbnail_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OAuthClientStatus { active = 'active', disabled = 'disabled', suspended = 'suspended' }


	/**
	 * An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/en/latest/radosgw/s3/#api).
	 */
	export interface ObjectStorageBucket {

		/** The ID of the Object Storage Cluster this bucket is in. */
		cluster?: string | null;

		/** When this bucket was created. */
		created?: Date | null;

		/**
		 * The hostname where this bucket can be accessed. This hostname can be accessed through a browser if the bucket is made public.
		 */
		hostname?: string | null;

		/** The name of this bucket. */
		label?: string | null;

		/**
		 * The number of objects stored in this bucket.
		 */
		objects?: number | null;

		/** The size of the bucket in bytes. */
		size?: number | null;
	}

	/**
	 * An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/en/latest/radosgw/s3/#api).
	 */
	export interface ObjectStorageBucketFormProperties {

		/** The ID of the Object Storage Cluster this bucket is in. */
		cluster: FormControl<string | null | undefined>,

		/** When this bucket was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * The hostname where this bucket can be accessed. This hostname can be accessed through a browser if the bucket is made public.
		 */
		hostname: FormControl<string | null | undefined>,

		/** The name of this bucket. */
		label: FormControl<string | null | undefined>,

		/**
		 * The number of objects stored in this bucket.
		 */
		objects: FormControl<number | null | undefined>,

		/** The size of the bucket in bytes. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateObjectStorageBucketFormGroup() {
		return new FormGroup<ObjectStorageBucketFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			objects: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Object Storage Cluster */
	export interface ObjectStorageCluster {

		/** The base URL for this cluster, used for connecting with third-party clients. */
		domain?: string | null;

		/** The unique ID for this cluster. */
		id?: string | null;

		/** The region where this cluster is located. */
		region?: string | null;

		/** The base URL for this cluster used when hosting static sites. */
		static_site_domain?: string | null;

		/** This cluster's status. */
		status?: ObjectStorageClusterStatus | null;
	}

	/** An Object Storage Cluster */
	export interface ObjectStorageClusterFormProperties {

		/** The base URL for this cluster, used for connecting with third-party clients. */
		domain: FormControl<string | null | undefined>,

		/** The unique ID for this cluster. */
		id: FormControl<string | null | undefined>,

		/** The region where this cluster is located. */
		region: FormControl<string | null | undefined>,

		/** The base URL for this cluster used when hosting static sites. */
		static_site_domain: FormControl<string | null | undefined>,

		/** This cluster's status. */
		status: FormControl<ObjectStorageClusterStatus | null | undefined>,
	}
	export function CreateObjectStorageClusterFormGroup() {
		return new FormGroup<ObjectStorageClusterFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			static_site_domain: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ObjectStorageClusterStatus | null | undefined>(undefined),
		});

	}

	export enum ObjectStorageClusterStatus { available = 'available', unavailable = 'unavailable' }


	/** A keypair used to communicate with the Object Storage S3 API. */
	export interface ObjectStorageKey {

		/** This keypair's access key. This is not secret. */
		access_key?: string | null;

		/**
		 * Defines this key as a Limited Access Key. Limited Access Keys restrict this Object Storage key's access to only the bucket(s) declared in this array and define their bucket-level permissions.
		 * Limited Access Keys can:
		 * * [list all buckets](/docs/api/object-storage/#object-storage-buckets-list) available on this Account, but cannot perform any actions on a bucket unless it has access to the bucket.
		 * * [create new buckets](/docs/api/object-storage/#object-storage-bucket-create), but do not have any access to the buckets it creates, unless explicitly given access to them.
		 * **Note:** You can create an Object Storage Limited Access Key without access to any buckets.
		 * This is achieved by sending a request with an empty `bucket_access` array.
		 * **Note:** If this field is omitted, a regular unlimited access key is issued.
		 */
		ObjectStorageKeyBucket_access?: Array<ObjectStorageKeyBucket_access>;

		/** This keypair's unique ID */
		id?: number | null;

		/** The label given to this key. For display purposes only. */
		label?: string | null;

		/** Whether or not this key is a limited access key. Will return `false` if this key grants full access to all buckets on the user's account. */
		limited?: boolean | null;

		/** This keypair's secret key. Only returned on key creation. */
		secret_key?: string | null;
	}

	/** A keypair used to communicate with the Object Storage S3 API. */
	export interface ObjectStorageKeyFormProperties {

		/** This keypair's access key. This is not secret. */
		access_key: FormControl<string | null | undefined>,

		/** This keypair's unique ID */
		id: FormControl<number | null | undefined>,

		/** The label given to this key. For display purposes only. */
		label: FormControl<string | null | undefined>,

		/** Whether or not this key is a limited access key. Will return `false` if this key grants full access to all buckets on the user's account. */
		limited: FormControl<boolean | null | undefined>,

		/** This keypair's secret key. Only returned on key creation. */
		secret_key: FormControl<string | null | undefined>,
	}
	export function CreateObjectStorageKeyFormGroup() {
		return new FormGroup<ObjectStorageKeyFormProperties>({
			access_key: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			limited: new FormControl<boolean | null | undefined>(undefined),
			secret_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ObjectStorageKeyBucket_access {

		/** The unique label of the bucket to which the key will grant limited access. */
		bucket_name?: string | null;

		/** The Object Storage cluster where a bucket to which the key is granting access is hosted. */
		cluster?: string | null;

		/** This Limited Access Key's permissions for the selected bucket. */
		permissions?: ObjectStorageKeyBucket_accessPermissions | null;
	}
	export interface ObjectStorageKeyBucket_accessFormProperties {

		/** The unique label of the bucket to which the key will grant limited access. */
		bucket_name: FormControl<string | null | undefined>,

		/** The Object Storage cluster where a bucket to which the key is granting access is hosted. */
		cluster: FormControl<string | null | undefined>,

		/** This Limited Access Key's permissions for the selected bucket. */
		permissions: FormControl<ObjectStorageKeyBucket_accessPermissions | null | undefined>,
	}
	export function CreateObjectStorageKeyBucket_accessFormGroup() {
		return new FormGroup<ObjectStorageKeyBucket_accessFormProperties>({
			bucket_name: new FormControl<string | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<ObjectStorageKeyBucket_accessPermissions | null | undefined>(undefined),
		});

	}

	export enum ObjectStorageKeyBucket_accessPermissions { read_write = 'read_write', read_only = 'read_only' }


	/**
	 * An Object in Object Storage, or a "prefix" that contains one or more objects when a `delimiter` is used.
	 */
	export interface ObjectStorageObject {

		/**
		 * An MD-5 hash of the object. `null` if this object represents a prefix.
		 */
		etag?: string | null;

		/** Designates if there is another page of bucket objects. */
		is_truncated?: boolean | null;

		/**
		 * The date and time this object was last modified. `null` if this object represents a prefix.
		 */
		last_modified?: Date | null;

		/**
		 * The name of this object or prefix.
		 */
		name?: string | null;

		/**
		 * Returns the value you should pass to the `marker` query parameter to get the next page of objects. If there is no next page, `null` will be returned.
		 */
		next_marker?: string | null;

		/**
		 * The owner of this object, as a UUID. `null` if this object represents a prefix.
		 */
		owner?: string | null;

		/**
		 * The size of this object, in bytes. `null` if this object represents a prefix.
		 */
		size?: number | null;
	}

	/**
	 * An Object in Object Storage, or a "prefix" that contains one or more objects when a `delimiter` is used.
	 */
	export interface ObjectStorageObjectFormProperties {

		/**
		 * An MD-5 hash of the object. `null` if this object represents a prefix.
		 */
		etag: FormControl<string | null | undefined>,

		/** Designates if there is another page of bucket objects. */
		is_truncated: FormControl<boolean | null | undefined>,

		/**
		 * The date and time this object was last modified. `null` if this object represents a prefix.
		 */
		last_modified: FormControl<Date | null | undefined>,

		/**
		 * The name of this object or prefix.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Returns the value you should pass to the `marker` query parameter to get the next page of objects. If there is no next page, `null` will be returned.
		 */
		next_marker: FormControl<string | null | undefined>,

		/**
		 * The owner of this object, as a UUID. `null` if this object represents a prefix.
		 */
		owner: FormControl<string | null | undefined>,

		/**
		 * The size of this object, in bytes. `null` if this object represents a prefix.
		 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateObjectStorageObjectFormGroup() {
		return new FormGroup<ObjectStorageObjectFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			is_truncated: new FormControl<boolean | null | undefined>(undefined),
			last_modified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			next_marker: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
	 */
	export interface ObjectStorageSSL {

		/**
		 * Your Base64 encoded and PEM formatted SSL certificate.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI)
		 * Required
		 */
		certificate: string;

		/**
		 * The private key associated with this TLS/SSL certificate.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI)
		 * Required
		 */
		private_key: string;
	}

	/**
	 * Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
	 */
	export interface ObjectStorageSSLFormProperties {

		/**
		 * Your Base64 encoded and PEM formatted SSL certificate.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI)
		 * Required
		 */
		certificate: FormControl<string | null | undefined>,

		/**
		 * The private key associated with this TLS/SSL certificate.
		 * Line breaks must be represented as "\n" in the string for requests (but not when using the Linode CLI)
		 * Required
		 */
		private_key: FormControl<string | null | undefined>,
	}
	export function CreateObjectStorageSSLFormGroup() {
		return new FormGroup<ObjectStorageSSLFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			private_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * If this Object Storage bucket has a corresponding TLS/SSL Certificate.
	 */
	export interface ObjectStorageSSLResponse {

		/**
		 * A boolean indicating if this Bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.
		 */
		ssl?: boolean | null;
	}

	/**
	 * If this Object Storage bucket has a corresponding TLS/SSL Certificate.
	 */
	export interface ObjectStorageSSLResponseFormProperties {

		/**
		 * A boolean indicating if this Bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.
		 */
		ssl: FormControl<boolean | null | undefined>,
	}
	export function CreateObjectStorageSSLResponseFormGroup() {
		return new FormGroup<ObjectStorageSSLResponseFormProperties>({
			ssl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
	 */
	export interface PaginationEnvelope {

		/** The current [page](/docs/api/#pagination). */
		page?: number | null;

		/** The total number of [pages](/docs/api/#pagination). */
		pages?: number | null;

		/** The total number of results. */
		results?: number | null;
	}

	/**
	 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
	 */
	export interface PaginationEnvelopeFormProperties {

		/** The current [page](/docs/api/#pagination). */
		page: FormControl<number | null | undefined>,

		/** The total number of [pages](/docs/api/#pagination). */
		pages: FormControl<number | null | undefined>,

		/** The total number of results. */
		results: FormControl<number | null | undefined>,
	}
	export function CreatePaginationEnvelopeFormGroup() {
		return new FormGroup<PaginationEnvelopeFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined),
			results: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing the staging of a Payment via PayPal.
	 */
	export interface PayPal {

		/**
		 * The URL to have PayPal redirect to when Payment is cancelled.
		 * Required
		 */
		cancel_url: string;

		/**
		 * The URL to have PayPal redirect to when Payment is approved.
		 * Required
		 */
		redirect_url: string;

		/**
		 * The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.
		 * Required
		 */
		usd: string;
	}

	/**
	 * An object representing the staging of a Payment via PayPal.
	 */
	export interface PayPalFormProperties {

		/**
		 * The URL to have PayPal redirect to when Payment is cancelled.
		 * Required
		 */
		cancel_url: FormControl<string | null | undefined>,

		/**
		 * The URL to have PayPal redirect to when Payment is approved.
		 * Required
		 */
		redirect_url: FormControl<string | null | undefined>,

		/**
		 * The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.
		 * Required
		 */
		usd: FormControl<string | null | undefined>,
	}
	export function CreatePayPalFormGroup() {
		return new FormGroup<PayPalFormProperties>({
			cancel_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redirect_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			usd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** PayPal information. */
	export interface PayPalData {

		/** The email address associated with your PayPal account. */
		email?: string | null;

		/** PayPal Merchant ID associated with your PayPal account. */
		paypal_id?: string | null;
	}

	/** PayPal information. */
	export interface PayPalDataFormProperties {

		/** The email address associated with your PayPal account. */
		email: FormControl<string | null | undefined>,

		/** PayPal Merchant ID associated with your PayPal account. */
		paypal_id: FormControl<string | null | undefined>,
	}
	export function CreatePayPalDataFormGroup() {
		return new FormGroup<PayPalDataFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			paypal_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.
	 */
	export interface PayPalExecute {

		/**
		 * The PayerID returned by PayPal during the transaction authorization process.
		 * Required
		 */
		payer_id: string;

		/**
		 * The PaymentID returned from [POST /account/payments/paypal](/docs/api/account/#paypal-payment-stage) that has been approved with PayPal.
		 * Required
		 */
		payment_id: string;
	}

	/**
	 * An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.
	 */
	export interface PayPalExecuteFormProperties {

		/**
		 * The PayerID returned by PayPal during the transaction authorization process.
		 * Required
		 */
		payer_id: FormControl<string | null | undefined>,

		/**
		 * The PaymentID returned from [POST /account/payments/paypal](/docs/api/account/#paypal-payment-stage) that has been approved with PayPal.
		 * Required
		 */
		payment_id: FormControl<string | null | undefined>,
	}
	export function CreatePayPalExecuteFormGroup() {
		return new FormGroup<PayPalExecuteFormProperties>({
			payer_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payment_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Payment object response. */
	export interface Payment {

		/** When the Payment was made. */
		date?: Date | null;

		/** The unique ID of the Payment. */
		id?: number | null;

		/** The amount, in US dollars, of the Payment. */
		usd?: number | null;
	}

	/** Payment object response. */
	export interface PaymentFormProperties {

		/** When the Payment was made. */
		date: FormControl<Date | null | undefined>,

		/** The unique ID of the Payment. */
		id: FormControl<number | null | undefined>,

		/** The amount, in US dollars, of the Payment. */
		usd: FormControl<number | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			usd: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Payment Method Response Object. */
	export interface PaymentMethod {

		/** When the Payment Method was added to the Account. */
		created?: Date | null;
		data?: CreditCardData;

		/** The unique ID of this Payment Method. */
		id?: number | null;

		/**
		 * Whether this Payment Method is the default method for automatically processing service charges.
		 */
		is_default?: boolean | null;

		/** The type of Payment Method. */
		type?: PaymentMethodType | null;
	}

	/** Payment Method Response Object. */
	export interface PaymentMethodFormProperties {

		/** When the Payment Method was added to the Account. */
		created: FormControl<Date | null | undefined>,

		/** The unique ID of this Payment Method. */
		id: FormControl<number | null | undefined>,

		/**
		 * Whether this Payment Method is the default method for automatically processing service charges.
		 */
		is_default: FormControl<boolean | null | undefined>,

		/** The type of Payment Method. */
		type: FormControl<PaymentMethodType | null | undefined>,
	}
	export function CreatePaymentMethodFormGroup() {
		return new FormGroup<PaymentMethodFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<PaymentMethodType | null | undefined>(undefined),
		});

	}

	export enum PaymentMethodType { credit_card = 'credit_card', google_pay = 'google_pay', paypal = 'paypal' }


	/** Payment object request. */
	export interface PaymentRequest {

		/**
		 * CVV (Card Verification Value) of the credit card to be used for the Payment. Required if paying by credit card.
		 */
		cvv?: string | null;

		/**
		 * The ID of the Payment Method to apply to the Payment.
		 */
		payment_method_id?: number | null;

		/**
		 * The amount in US Dollars of the Payment.
		 * * Can begin with or without `$`.
		 * * Commas (`,`) are not accepted.
		 * * Must end with a decimal expression, such as `.00` or `.99`.
		 * * Minimum: `$5.00` or the Account balance, whichever is lower.
		 * * Maximum: `$2000.00` or the Account balance up to `$50000.00`, whichever is greater.
		 * Required
		 */
		usd: string;
	}

	/** Payment object request. */
	export interface PaymentRequestFormProperties {

		/**
		 * CVV (Card Verification Value) of the credit card to be used for the Payment. Required if paying by credit card.
		 */
		cvv: FormControl<string | null | undefined>,

		/**
		 * The ID of the Payment Method to apply to the Payment.
		 */
		payment_method_id: FormControl<number | null | undefined>,

		/**
		 * The amount in US Dollars of the Payment.
		 * * Can begin with or without `$`.
		 * * Commas (`,`) are not accepted.
		 * * Must end with a decimal expression, such as `.00` or `.99`.
		 * * Minimum: `$5.00` or the Account balance, whichever is lower.
		 * * Maximum: `$2000.00` or the Account balance up to `$50000.00`, whichever is greater.
		 * Required
		 */
		usd: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRequestFormGroup() {
		return new FormGroup<PaymentRequestFormProperties>({
			cvv: new FormControl<string | null | undefined>(undefined),
			payment_method_id: new FormControl<number | null | undefined>(undefined),
			usd: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\$?\d+\.\d{2}$')]),
		});

	}


	/**
	 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
	 */
	export interface PersonalAccessToken {

		/**
		 * The date and time this token was created.
		 */
		created?: Date | null;

		/**
		 * When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with "null" as their expiry and will never expire unless revoked.
		 */
		expiry?: Date | null;

		/**
		 * This token's unique ID, which can be used to revoke it.
		 */
		id?: number | null;

		/**
		 * This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.
		 * Max length: 100
		 * Min length: 1
		 */
		label?: string | null;

		/**
		 * The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the <a target="_top" href="https://github.com/linode/linode-cli">Linode CLI</a>, require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure.
		 */
		scopes?: string | null;

		/**
		 * The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned.
		 */
		token?: string | null;
	}

	/**
	 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
	 */
	export interface PersonalAccessTokenFormProperties {

		/**
		 * The date and time this token was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * When this token will expire.  Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated.  Tokens may be created with "null" as their expiry and will never expire unless revoked.
		 */
		expiry: FormControl<Date | null | undefined>,

		/**
		 * This token's unique ID, which can be used to revoke it.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * This token's label.  This is for display purposes only, but can be used to more easily track what you're using each token for.
		 * Max length: 100
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the <a target="_top" href="https://github.com/linode/linode-cli">Linode CLI</a>, require tokens with access to `*`. Tokens with more restrictive scopes are generally more secure.
		 */
		scopes: FormControl<string | null | undefined>,

		/**
		 * The token used to access the API.  When the token is created, the full token is returned here.  Otherwise, only the first 16 characters are returned.
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreatePersonalAccessTokenFormGroup() {
		return new FormGroup<PersonalAccessTokenFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			scopes: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
	 */
	export interface Profile {

		/**
		 * This account's Cloud Manager authentication type. Authentication types are chosen through
		 * Cloud Manager and authorized when logging into your account. These authentication types are either
		 * the user's password (in conjunction with their username), or the name of their
		 * indentity provider such as GitHub. For example, if a user:
		 * - Has never used Third-Party Authentication, their authentication type will be `password`.
		 * - Is using Third-Party Authentication, their authentication type will be the name of their Identity Provider (eg. `github`).
		 * - Has used Third-Party Authentication and has since revoked it, their authentication type will be `password`.
		 * **Note:** This functionality may not yet be available in Cloud Manager.
		 * See the [Cloud Manager Changelog](/changelog/cloud-manager/) for the latest updates.
		 */
		authentication_type?: ProfileAuthentication_type | null;

		/**
		 * The list of SSH Keys authorized to use Lish for your User. This value is ignored if `lish_auth_method` is "disabled."
		 */
		authorized_keys?: Array<string>;

		/**
		 * Your email address.  This address will be used for communication with Linode as necessary.
		 */
		email?: string | null;

		/**
		 * If true, you will receive email notifications about account activity.  If false, you may still receive business-critical communications through email.
		 */
		email_notifications?: boolean | null;

		/**
		 * If true, logins for your User will only be allowed from whitelisted IPs. This setting is currently deprecated, and cannot be enabled.
		 * If you disable this setting, you will not be able to re-enable it.
		 */
		ip_whitelist_enabled?: boolean | null;

		/**
		 * The authentication methods that are allowed when connecting to [the Linode Shell (Lish)](/docs/guides/lish/).
		 * * `keys_only` is the most secure if you intend to use Lish.
		 * * `disabled` is recommended if you do not intend to use Lish at all.
		 * * If this account's Cloud Manager authentication type is set to a Third-Party Authentication method, `password_keys` cannot be used as your Lish authentication method. To view this account's Cloud Manager `authentication_type` field, send a request to the [View Profile](/docs/api/profile/#profile-view) endpoint.
		 */
		lish_auth_method?: ProfileLish_auth_method | null;

		/**
		 * Information about your status in our referral program.
		 * This information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.
		 */
		referrals?: ProfileReferrals;

		/**
		 * If true, your User has restrictions on what can be accessed on your Account. To get details on what entities/actions you can access/perform, see [/profile/grants](/docs/api/profile/#grants-list).
		 */
		restricted?: boolean | null;

		/**
		 * The timezone you prefer to see times in. This is not used by the API directly. It is provided for the benefit of clients such as the Linode Cloud Manager and other clients built on the API. All times returned by the API are in UTC.
		 */
		timezone?: string | null;

		/**
		 * If true, logins from untrusted computers will require Two Factor Authentication.  See [/profile/tfa-enable](/docs/api/profile/#two-factor-secret-create) to enable Two Factor Authentication.
		 */
		two_factor_auth?: boolean | null;

		/**
		 * Your unique ID in our system. This value will never change, and can safely be used to identify your User.
		 */
		uid?: number | null;

		/**
		 * Your username, used for logging in to our system.
		 */
		username?: string | null;

		/**
		 * The phone number verified for this Profile with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.
		 * `null` if this Profile has no verified phone number.
		 */
		verified_phone_number?: string | null;
	}

	/**
	 * A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
	 */
	export interface ProfileFormProperties {

		/**
		 * This account's Cloud Manager authentication type. Authentication types are chosen through
		 * Cloud Manager and authorized when logging into your account. These authentication types are either
		 * the user's password (in conjunction with their username), or the name of their
		 * indentity provider such as GitHub. For example, if a user:
		 * - Has never used Third-Party Authentication, their authentication type will be `password`.
		 * - Is using Third-Party Authentication, their authentication type will be the name of their Identity Provider (eg. `github`).
		 * - Has used Third-Party Authentication and has since revoked it, their authentication type will be `password`.
		 * **Note:** This functionality may not yet be available in Cloud Manager.
		 * See the [Cloud Manager Changelog](/changelog/cloud-manager/) for the latest updates.
		 */
		authentication_type: FormControl<ProfileAuthentication_type | null | undefined>,

		/**
		 * Your email address.  This address will be used for communication with Linode as necessary.
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * If true, you will receive email notifications about account activity.  If false, you may still receive business-critical communications through email.
		 */
		email_notifications: FormControl<boolean | null | undefined>,

		/**
		 * If true, logins for your User will only be allowed from whitelisted IPs. This setting is currently deprecated, and cannot be enabled.
		 * If you disable this setting, you will not be able to re-enable it.
		 */
		ip_whitelist_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The authentication methods that are allowed when connecting to [the Linode Shell (Lish)](/docs/guides/lish/).
		 * * `keys_only` is the most secure if you intend to use Lish.
		 * * `disabled` is recommended if you do not intend to use Lish at all.
		 * * If this account's Cloud Manager authentication type is set to a Third-Party Authentication method, `password_keys` cannot be used as your Lish authentication method. To view this account's Cloud Manager `authentication_type` field, send a request to the [View Profile](/docs/api/profile/#profile-view) endpoint.
		 */
		lish_auth_method: FormControl<ProfileLish_auth_method | null | undefined>,

		/**
		 * If true, your User has restrictions on what can be accessed on your Account. To get details on what entities/actions you can access/perform, see [/profile/grants](/docs/api/profile/#grants-list).
		 */
		restricted: FormControl<boolean | null | undefined>,

		/**
		 * The timezone you prefer to see times in. This is not used by the API directly. It is provided for the benefit of clients such as the Linode Cloud Manager and other clients built on the API. All times returned by the API are in UTC.
		 */
		timezone: FormControl<string | null | undefined>,

		/**
		 * If true, logins from untrusted computers will require Two Factor Authentication.  See [/profile/tfa-enable](/docs/api/profile/#two-factor-secret-create) to enable Two Factor Authentication.
		 */
		two_factor_auth: FormControl<boolean | null | undefined>,

		/**
		 * Your unique ID in our system. This value will never change, and can safely be used to identify your User.
		 */
		uid: FormControl<number | null | undefined>,

		/**
		 * Your username, used for logging in to our system.
		 */
		username: FormControl<string | null | undefined>,

		/**
		 * The phone number verified for this Profile with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.
		 * `null` if this Profile has no verified phone number.
		 */
		verified_phone_number: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			authentication_type: new FormControl<ProfileAuthentication_type | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			email_notifications: new FormControl<boolean | null | undefined>(undefined),
			ip_whitelist_enabled: new FormControl<boolean | null | undefined>(undefined),
			lish_auth_method: new FormControl<ProfileLish_auth_method | null | undefined>(undefined),
			restricted: new FormControl<boolean | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			two_factor_auth: new FormControl<boolean | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			verified_phone_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProfileAuthentication_type { password = 'password', github = 'github' }

	export enum ProfileLish_auth_method { password_keys = 'password_keys', keys_only = 'keys_only', disabled = 'disabled' }

	export interface ProfileReferrals {

		/**
		 * Your referral code.  If others use this when signing up for Linode, you will receive account credit.
		 */
		code?: string | null;

		/**
		 * The number of completed signups with your referral code.
		 */
		completed?: number | null;

		/**
		 * The amount of account credit in US Dollars issued to you through the referral program.
		 */
		credit?: number | null;

		/**
		 * The number of pending signups with your referral code.  You will not receive credit for these signups until they are completed.
		 */
		pending?: number | null;

		/**
		 * The number of users who have signed up with your referral code.
		 */
		total?: number | null;

		/**
		 * Your referral url, used to direct others to sign up for Linode with your referral code.
		 */
		url?: string | null;
	}
	export interface ProfileReferralsFormProperties {

		/**
		 * Your referral code.  If others use this when signing up for Linode, you will receive account credit.
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The number of completed signups with your referral code.
		 */
		completed: FormControl<number | null | undefined>,

		/**
		 * The amount of account credit in US Dollars issued to you through the referral program.
		 */
		credit: FormControl<number | null | undefined>,

		/**
		 * The number of pending signups with your referral code.  You will not receive credit for these signups until they are completed.
		 */
		pending: FormControl<number | null | undefined>,

		/**
		 * The number of users who have signed up with your referral code.
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Your referral url, used to direct others to sign up for Linode with your referral code.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProfileReferralsFormGroup() {
		return new FormGroup<ProfileReferralsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			completed: new FormControl<number | null | undefined>(undefined),
			credit: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An area where Linode services are available. */
	export interface Region {

		/**
		 * A list of capabilities of this region.
		 */
		capabilities?: Array<string>;

		/** The country where this Region resides. */
		country?: string | null;

		/** The unique ID of this Region. */
		id?: string | null;

		/** Detailed location information for this Region, including city, state or region, and country. */
		label?: string | null;
		resolvers?: RegionResolvers;

		/**
		 * This region's current operational status.
		 */
		status?: RegionStatus | null;
	}

	/** An area where Linode services are available. */
	export interface RegionFormProperties {

		/** The country where this Region resides. */
		country: FormControl<string | null | undefined>,

		/** The unique ID of this Region. */
		id: FormControl<string | null | undefined>,

		/** Detailed location information for this Region, including city, state or region, and country. */
		label: FormControl<string | null | undefined>,

		/**
		 * This region's current operational status.
		 */
		status: FormControl<RegionStatus | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<RegionStatus | null | undefined>(undefined),
		});

	}

	export interface RegionResolvers {

		/**
		 * The IPv4 addresses for this region's DNS resolvers, separated by commas.
		 */
		ipv4?: string | null;

		/**
		 * The IPv6 addresses for this region's DNS resolvers, separated by commas.
		 */
		ipv6?: string | null;
	}
	export interface RegionResolversFormProperties {

		/**
		 * The IPv4 addresses for this region's DNS resolvers, separated by commas.
		 */
		ipv4: FormControl<string | null | undefined>,

		/**
		 * The IPv6 addresses for this region's DNS resolvers, separated by commas.
		 */
		ipv6: FormControl<string | null | undefined>,
	}
	export function CreateRegionResolversFormGroup() {
		return new FormGroup<RegionResolversFormProperties>({
			ipv4: new FormControl<string | null | undefined>(undefined),
			ipv6: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegionStatus { ok = 'ok', outage = 'outage' }

	export interface RescueDevices {

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sda?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdb?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdc?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdd?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sde?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdf?: Device;

		/**
		 * Device can be either a Disk or Volume identified by `disk_id` or `volume_id`. Only one type per slot allowed. Can be null.
		 * Devices mapped from _sde_ through _sdh_ are unavailable in `fullvirt` virt_mode.
		 */
		sdg?: Device;
	}
	export interface RescueDevicesFormProperties {
	}
	export function CreateRescueDevicesFormGroup() {
		return new FormGroup<RescueDevicesFormProperties>({
		});

	}


	/**
	 * A credential object for authenticating a User's secure shell connection to a Linode.
	 */
	export interface SSHKey {

		/**
		 * The date this key was added.
		 */
		created?: Date | null;

		/**
		 * The unique identifier of an SSH Key object.
		 */
		id?: number | null;

		/**
		 * A label for the SSH Key.
		 * Max length: 64
		 * Min length: 0
		 */
		label?: string | null;

		/**
		 * The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
		 * Accepted formats:
		 * * ssh-dss
		 * * ssh-rsa
		 * * ecdsa-sha2-nistp
		 * * ssh-ed25519
		 * * sk-ecdsa-sha2-nistp256 (Akamai-specific)
		 */
		ssh_key?: string | null;
	}

	/**
	 * A credential object for authenticating a User's secure shell connection to a Linode.
	 */
	export interface SSHKeyFormProperties {

		/**
		 * The date this key was added.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * The unique identifier of an SSH Key object.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * A label for the SSH Key.
		 * Max length: 64
		 * Min length: 0
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
		 * Accepted formats:
		 * * ssh-dss
		 * * ssh-rsa
		 * * ecdsa-sha2-nistp
		 * * ssh-ed25519
		 * * sk-ecdsa-sha2-nistp256 (Akamai-specific)
		 */
		ssh_key: FormControl<string | null | undefined>,
	}
	export function CreateSSHKeyFormGroup() {
		return new FormGroup<SSHKeyFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			ssh_key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Single security question and response object. */
	export interface SecurityQuestion {

		/** The ID representing the security question. */
		id?: number | null;

		/** The security question. */
		question?: string | null;

		/**
		 * The security question response.
		 * Max length: 17
		 * Min length: 3
		 */
		response?: string | null;
	}

	/** Single security question and response object. */
	export interface SecurityQuestionFormProperties {

		/** The ID representing the security question. */
		id: FormControl<number | null | undefined>,

		/** The security question. */
		question: FormControl<string | null | undefined>,

		/**
		 * The security question response.
		 * Max length: 17
		 * Min length: 3
		 */
		response: FormControl<string | null | undefined>,
	}
	export function CreateSecurityQuestionFormGroup() {
		return new FormGroup<SecurityQuestionFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(17)]),
		});

	}


	/** Security questions and responses object for GET operation. */
	export interface SecurityQuestionsGet {
		SecurityQuestionsGetSecurity_questions?: Array<SecurityQuestionsGetSecurity_questions>;
	}

	/** Security questions and responses object for GET operation. */
	export interface SecurityQuestionsGetFormProperties {
	}
	export function CreateSecurityQuestionsGetFormGroup() {
		return new FormGroup<SecurityQuestionsGetFormProperties>({
		});

	}

	export interface SecurityQuestionsGetSecurity_questions {

		/** Single security question and response object. */
		id?: SecurityQuestion;

		/** Single security question and response object. */
		question?: SecurityQuestion;

		/** Single security question and response object. */
		response?: SecurityQuestion;
	}
	export interface SecurityQuestionsGetSecurity_questionsFormProperties {
	}
	export function CreateSecurityQuestionsGetSecurity_questionsFormGroup() {
		return new FormGroup<SecurityQuestionsGetSecurity_questionsFormProperties>({
		});

	}


	/** Security questions and responses object for POST operation. */
	export interface SecurityQuestionsPost {
		SecurityQuestionsPostSecurity_questions?: Array<SecurityQuestionsPostSecurity_questions>;
	}

	/** Security questions and responses object for POST operation. */
	export interface SecurityQuestionsPostFormProperties {
	}
	export function CreateSecurityQuestionsPostFormGroup() {
		return new FormGroup<SecurityQuestionsPostFormProperties>({
		});

	}

	export interface SecurityQuestionsPostSecurity_questions {

		/** Single security question and response object. */
		question_id?: SecurityQuestion;

		/** Single security question and response object. */
		response?: SecurityQuestion;

		/** Single security question and response object. */
		security_question?: SecurityQuestion;
	}
	export interface SecurityQuestionsPostSecurity_questionsFormProperties {
	}
	export function CreateSecurityQuestionsPostSecurity_questionsFormGroup() {
		return new FormGroup<SecurityQuestionsPostSecurity_questionsFormProperties>({
		});

	}


	/**
	 * An object representing a Service Transfer.
	 */
	export interface ServiceTransfer {

		/**
		 * When this transfer was created.
		 */
		created?: Date | null;

		/**
		 * A collection of the services to include in this transfer request, separated by type.
		 */
		entities?: ServiceTransferEntities;

		/**
		 * When this transfer expires. Transfers will automatically expire 24 hours after creation.
		 */
		expiry?: Date | null;

		/**
		 * If the requesting account created this transfer.
		 */
		is_sender?: boolean | null;

		/**
		 * The status of the transfer request.
		 * `accepted`: The transfer has been accepted by another user and is currently in progress.
		 * Transfers can take up to 3 hours to complete.
		 * `cancelled`: The transfer has been cancelled by the sender.
		 * `completed`: The transfer has completed successfully.
		 * `failed`: The transfer has failed after initiation.
		 * `pending`: The transfer is ready to be accepted.
		 * `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or
		 * cancelled.
		 */
		status?: EntityTransferStatus | null;

		/**
		 * The token used to identify and accept or cancel this transfer.
		 */
		token?: string | null;

		/**
		 * When this transfer was last updated.
		 */
		updated?: Date | null;
	}

	/**
	 * An object representing a Service Transfer.
	 */
	export interface ServiceTransferFormProperties {

		/**
		 * When this transfer was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * When this transfer expires. Transfers will automatically expire 24 hours after creation.
		 */
		expiry: FormControl<Date | null | undefined>,

		/**
		 * If the requesting account created this transfer.
		 */
		is_sender: FormControl<boolean | null | undefined>,

		/**
		 * The status of the transfer request.
		 * `accepted`: The transfer has been accepted by another user and is currently in progress.
		 * Transfers can take up to 3 hours to complete.
		 * `cancelled`: The transfer has been cancelled by the sender.
		 * `completed`: The transfer has completed successfully.
		 * `failed`: The transfer has failed after initiation.
		 * `pending`: The transfer is ready to be accepted.
		 * `stale`: The transfer has exceeded its expiration date. It can no longer be accepted or
		 * cancelled.
		 */
		status: FormControl<EntityTransferStatus | null | undefined>,

		/**
		 * The token used to identify and accept or cancel this transfer.
		 */
		token: FormControl<string | null | undefined>,

		/**
		 * When this transfer was last updated.
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateServiceTransferFormGroup() {
		return new FormGroup<ServiceTransferFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			is_sender: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<EntityTransferStatus | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ServiceTransferEntities {

		/**
		 * An array containing the IDs of each of the Linodes included in this transfer.
		 */
		linodes?: Array<number>;
	}
	export interface ServiceTransferEntitiesFormProperties {
	}
	export function CreateServiceTransferEntitiesFormGroup() {
		return new FormGroup<ServiceTransferEntitiesFormProperties>({
		});

	}


	/**
	 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
	 */
	export interface StackScript {

		/**
		 * The date this StackScript was created.
		 */
		created?: Date | null;

		/**
		 * Count of currently active, deployed Linodes created from this StackScript.
		 */
		deployments_active?: number | null;

		/**
		 * The total number of times this StackScript has been deployed.
		 */
		deployments_total?: number | null;

		/**
		 * A description for the StackScript.
		 */
		description?: string | null;

		/** The unique ID of this StackScript. */
		id?: number | null;

		/**
		 * An array of Image IDs. These are the Images that can be deployed with this StackScript.
		 * `any/all` indicates that all available Images, including private Images, are accepted.
		 */
		images?: Array<string>;

		/**
		 * This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**
		 */
		is_public?: boolean | null;

		/**
		 * The StackScript's label is for display purposes only.
		 * Max length: 128
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * Returns `true` if this StackScript is owned by the account of the user making the request, and the user
		 * making the request is unrestricted or has access to this StackScript.
		 */
		mine?: boolean | null;

		/**
		 * This field allows you to add notes for the set of revisions made to this StackScript.
		 */
		rev_note?: string | null;

		/**
		 * The script to execute when provisioning a new Linode with this StackScript.
		 */
		script?: string | null;

		/**
		 * The date this StackScript was last updated.
		 */
		updated?: Date | null;

		/**
		 * This is a list of fields defined with a special syntax inside this StackScript that allow for supplying customized parameters during deployment. See [Declare User-Defined Fields (UDFs)](/docs/products/tools/stackscripts/guides/write-a-custom-script/#declare-user-defined-fields-udfs) for more information.
		 */
		user_defined_fields?: Array<UserDefinedField>;

		/**
		 * The Gravatar ID for the User who created the StackScript.
		 */
		user_gravatar_id?: string | null;

		/**
		 * The User who created the StackScript.
		 */
		username?: string | null;
	}

	/**
	 * A StackScript enables you to quickly deploy a fully-configured application in an automated manner.
	 */
	export interface StackScriptFormProperties {

		/**
		 * The date this StackScript was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * Count of currently active, deployed Linodes created from this StackScript.
		 */
		deployments_active: FormControl<number | null | undefined>,

		/**
		 * The total number of times this StackScript has been deployed.
		 */
		deployments_total: FormControl<number | null | undefined>,

		/**
		 * A description for the StackScript.
		 */
		description: FormControl<string | null | undefined>,

		/** The unique ID of this StackScript. */
		id: FormControl<number | null | undefined>,

		/**
		 * This determines whether other users can use your StackScript. **Once a StackScript is made public, it cannot be made private.**
		 */
		is_public: FormControl<boolean | null | undefined>,

		/**
		 * The StackScript's label is for display purposes only.
		 * Max length: 128
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Returns `true` if this StackScript is owned by the account of the user making the request, and the user
		 * making the request is unrestricted or has access to this StackScript.
		 */
		mine: FormControl<boolean | null | undefined>,

		/**
		 * This field allows you to add notes for the set of revisions made to this StackScript.
		 */
		rev_note: FormControl<string | null | undefined>,

		/**
		 * The script to execute when provisioning a new Linode with this StackScript.
		 */
		script: FormControl<string | null | undefined>,

		/**
		 * The date this StackScript was last updated.
		 */
		updated: FormControl<Date | null | undefined>,

		/**
		 * The Gravatar ID for the User who created the StackScript.
		 */
		user_gravatar_id: FormControl<string | null | undefined>,

		/**
		 * The User who created the StackScript.
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateStackScriptFormGroup() {
		return new FormGroup<StackScriptFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			deployments_active: new FormControl<number | null | undefined>(undefined),
			deployments_total: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_public: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128)]),
			mine: new FormControl<boolean | null | undefined>(undefined),
			rev_note: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			user_gravatar_id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
	 */
	export interface UserDefinedField {

		/**
		 * The default value.  If not specified, this value will be used.
		 */
		default?: string | null;

		/**
		 * An example value for the field.
		 * Required
		 */
		example: string;

		/**
		 * A human-readable label for the field that will serve as the input prompt for entering the value during deployment.
		 * Required
		 */
		label: string;

		/**
		 * A list of acceptable values for the field in any quantity, combination or order.
		 */
		manyOf?: string | null;

		/**
		 * The name of the field.
		 * Required
		 */
		name: string;

		/**
		 * A list of acceptable single values for the field.
		 */
		oneOf?: string | null;
	}

	/**
	 * A custom field defined by the User with a special syntax within a StackScript. Derived from the contents of the script.
	 */
	export interface UserDefinedFieldFormProperties {

		/**
		 * The default value.  If not specified, this value will be used.
		 */
		default: FormControl<string | null | undefined>,

		/**
		 * An example value for the field.
		 * Required
		 */
		example: FormControl<string | null | undefined>,

		/**
		 * A human-readable label for the field that will serve as the input prompt for entering the value during deployment.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * A list of acceptable values for the field in any quantity, combination or order.
		 */
		manyOf: FormControl<string | null | undefined>,

		/**
		 * The name of the field.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A list of acceptable single values for the field.
		 */
		oneOf: FormControl<string | null | undefined>,
	}
	export function CreateUserDefinedFieldFormGroup() {
		return new FormGroup<UserDefinedFieldFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
			example: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			manyOf: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oneOf: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A stat data point.
	 */
	export interface StatsData {

		/**
		 * A stats graph data point.
		 */
		x?: number | null;

		/**
		 * A stats graph data point.
		 */
		y?: number | null;
	}

	/**
	 * A stat data point.
	 */
	export interface StatsDataFormProperties {

		/**
		 * A stats graph data point.
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * A stats graph data point.
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateStatsDataFormGroup() {
		return new FormGroup<StatsDataFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A collection of graph data returned for managed stats.
	 */
	export interface StatsDataAvailable {

		/** CPU usage stats from the last 24 hours. */
		cpu?: Array<StatsData>;

		/** Disk usage stats from the last 24 hours. */
		disk?: Array<StatsData>;

		/** Inbound network traffic stats from the last 24 hours. */
		net_in?: Array<StatsData>;

		/** Outbound network traffic stats from the last 24 hours. */
		net_out?: Array<StatsData>;

		/** Swap usage stats from the last 24 hours. */
		swap?: Array<StatsData>;
	}

	/**
	 * A collection of graph data returned for managed stats.
	 */
	export interface StatsDataAvailableFormProperties {
	}
	export function CreateStatsDataAvailableFormGroup() {
		return new FormGroup<StatsDataAvailableFormProperties>({
		});

	}


	/**
	 * A Support Ticket opened on your Account.
	 */
	export interface SupportTicket {

		/**
		 * A list of filenames representing attached files associated with this Ticket.
		 */
		attachments?: Array<string>;

		/**
		 * Whether the Support Ticket may be closed.
		 */
		closable?: boolean | null;

		/**
		 * The date and time this Ticket was closed.
		 */
		closed?: Date | null;

		/**
		 * The full details of the issue or question.
		 * Max length: 65000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The entity this Ticket was opened for.
		 */
		entity?: SupportTicketEntity;

		/**
		 * The Gravatar ID of the User who opened this Ticket.
		 */
		gravatar_id?: string | null;

		/**
		 * The ID of the Support Ticket.
		 */
		id?: number | null;

		/**
		 * The date and time this Ticket was created.
		 */
		opened?: Date | null;

		/**
		 * The User who opened this Ticket.
		 */
		opened_by?: string | null;

		/** The current status of this Ticket. */
		status?: SupportTicketStatus | null;

		/**
		 * The summary or title for this Ticket.
		 * Max length: 64
		 * Min length: 1
		 */
		summary?: string | null;

		/**
		 * The date and time this Ticket was last updated.
		 */
		updated?: Date | null;

		/**
		 * The User who last updated this Ticket.
		 */
		updated_by?: string | null;
	}

	/**
	 * A Support Ticket opened on your Account.
	 */
	export interface SupportTicketFormProperties {

		/**
		 * Whether the Support Ticket may be closed.
		 */
		closable: FormControl<boolean | null | undefined>,

		/**
		 * The date and time this Ticket was closed.
		 */
		closed: FormControl<Date | null | undefined>,

		/**
		 * The full details of the issue or question.
		 * Max length: 65000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Gravatar ID of the User who opened this Ticket.
		 */
		gravatar_id: FormControl<string | null | undefined>,

		/**
		 * The ID of the Support Ticket.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The date and time this Ticket was created.
		 */
		opened: FormControl<Date | null | undefined>,

		/**
		 * The User who opened this Ticket.
		 */
		opened_by: FormControl<string | null | undefined>,

		/** The current status of this Ticket. */
		status: FormControl<SupportTicketStatus | null | undefined>,

		/**
		 * The summary or title for this Ticket.
		 * Max length: 64
		 * Min length: 1
		 */
		summary: FormControl<string | null | undefined>,

		/**
		 * The date and time this Ticket was last updated.
		 */
		updated: FormControl<Date | null | undefined>,

		/**
		 * The User who last updated this Ticket.
		 */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateSupportTicketFormGroup() {
		return new FormGroup<SupportTicketFormProperties>({
			closable: new FormControl<boolean | null | undefined>(undefined),
			closed: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65000)]),
			gravatar_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			opened: new FormControl<Date | null | undefined>(undefined),
			opened_by: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SupportTicketStatus | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			updated: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SupportTicketEntity {

		/**
		 * The unique ID for this Ticket's entity.
		 */
		id?: number | null;

		/**
		 * The current label of this entity.
		 */
		label?: string | null;

		/**
		 * The type of entity this is related to.
		 */
		type?: string | null;

		/**
		 * The URL where you can access the object this event is for. If a relative URL, it is relative to the domain you retrieved the entity from.
		 */
		url?: string | null;
	}
	export interface SupportTicketEntityFormProperties {

		/**
		 * The unique ID for this Ticket's entity.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The current label of this entity.
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The type of entity this is related to.
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The URL where you can access the object this event is for. If a relative URL, it is relative to the domain you retrieved the entity from.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSupportTicketEntityFormGroup() {
		return new FormGroup<SupportTicketEntityFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SupportTicketStatus { closed = 'closed', new = 'new', open = 'open' }


	/**
	 * An object representing a reply to a Support Ticket.
	 */
	export interface SupportTicketReply {

		/**
		 * The date and time this Ticket reply was created.
		 */
		created?: Date | null;

		/**
		 * The User who submitted this reply.
		 */
		created_by?: string | null;

		/**
		 * The body of this Support Ticket reply.
		 */
		description?: string | null;

		/**
		 * If set to true, this reply came from a Linode employee.
		 */
		from_linode?: boolean | null;

		/**
		 * The Gravatar ID of the User who created this reply.
		 */
		gravatar_id?: string | null;

		/**
		 * The unique ID of this Support Ticket reply.
		 */
		id?: number | null;
	}

	/**
	 * An object representing a reply to a Support Ticket.
	 */
	export interface SupportTicketReplyFormProperties {

		/**
		 * The date and time this Ticket reply was created.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * The User who submitted this reply.
		 */
		created_by: FormControl<string | null | undefined>,

		/**
		 * The body of this Support Ticket reply.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * If set to true, this reply came from a Linode employee.
		 */
		from_linode: FormControl<boolean | null | undefined>,

		/**
		 * The Gravatar ID of the User who created this reply.
		 */
		gravatar_id: FormControl<string | null | undefined>,

		/**
		 * The unique ID of this Support Ticket reply.
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateSupportTicketReplyFormGroup() {
		return new FormGroup<SupportTicketReplyFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			from_linode: new FormControl<boolean | null | undefined>(undefined),
			gravatar_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
	 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
	 */
	export interface SupportTicketRequest {

		/**
		 * The ID of the Managed Database this ticket is regarding, if relevant.
		 */
		database_id?: number | null;

		/**
		 * The full details of the issue or question.
		 * Required
		 * Max length: 65000
		 * Min length: 1
		 */
		description: string;

		/**
		 * The ID of the Domain this ticket is regarding, if relevant.
		 */
		domain_id?: number | null;

		/**
		 * The ID of the Firewall this ticket is regarding, if relevant.
		 */
		firewall_id?: number | null;

		/**
		 * The ID of the Linode this ticket is regarding, if relevant.
		 */
		linode_id?: number | null;

		/**
		 * The ID of the Kubernetes cluster this ticket is regarding, if relevant.
		 */
		lkecluster_id?: number | null;

		/**
		 * The ID of the Longview client this ticket is regarding, if relevant.
		 */
		longviewclient_id?: number | null;

		/**
		 * Designates if this ticket is related to a [Managed service](https://www.linode.com/products/managed/). If `true`, the following constraints will apply:
		 * * No ID attributes (i.e. `linode_id`, `domain_id`, etc.) should be provided with this request.
		 * * Your account must have a [Managed service enabled](/docs/api/managed/#managed-service-enable).
		 */
		managed_issue?: boolean | null;

		/**
		 * The ID of the NodeBalancer this ticket is regarding, if relevant.
		 */
		nodebalancer_id?: number | null;

		/**
		 * The [Region](/docs/api/regions/) ID for the associated VLAN this ticket is regarding.
		 * Only allowed when submitting a VLAN ticket.
		 */
		region?: string | null;

		/**
		 * The summary or title for this SupportTicket.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		summary: string;

		/**
		 * The label of the VLAN this ticket is regarding, if relevant. To view your VLANs, use the VLANs List ([GET /networking/vlans](/docs/api/networking/#vlans-list)) endpoint.
		 * Requires a specified `region` to identify the VLAN.
		 */
		vlan?: string | null;

		/**
		 * The ID of the Volume this ticket is regarding, if relevant.
		 */
		volume_id?: number | null;
	}

	/**
	 * An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
	 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
	 */
	export interface SupportTicketRequestFormProperties {

		/**
		 * The ID of the Managed Database this ticket is regarding, if relevant.
		 */
		database_id: FormControl<number | null | undefined>,

		/**
		 * The full details of the issue or question.
		 * Required
		 * Max length: 65000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the Domain this ticket is regarding, if relevant.
		 */
		domain_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the Firewall this ticket is regarding, if relevant.
		 */
		firewall_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the Linode this ticket is regarding, if relevant.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the Kubernetes cluster this ticket is regarding, if relevant.
		 */
		lkecluster_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the Longview client this ticket is regarding, if relevant.
		 */
		longviewclient_id: FormControl<number | null | undefined>,

		/**
		 * Designates if this ticket is related to a [Managed service](https://www.linode.com/products/managed/). If `true`, the following constraints will apply:
		 * * No ID attributes (i.e. `linode_id`, `domain_id`, etc.) should be provided with this request.
		 * * Your account must have a [Managed service enabled](/docs/api/managed/#managed-service-enable).
		 */
		managed_issue: FormControl<boolean | null | undefined>,

		/**
		 * The ID of the NodeBalancer this ticket is regarding, if relevant.
		 */
		nodebalancer_id: FormControl<number | null | undefined>,

		/**
		 * The [Region](/docs/api/regions/) ID for the associated VLAN this ticket is regarding.
		 * Only allowed when submitting a VLAN ticket.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The summary or title for this SupportTicket.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		summary: FormControl<string | null | undefined>,

		/**
		 * The label of the VLAN this ticket is regarding, if relevant. To view your VLANs, use the VLANs List ([GET /networking/vlans](/docs/api/networking/#vlans-list)) endpoint.
		 * Requires a specified `region` to identify the VLAN.
		 */
		vlan: FormControl<string | null | undefined>,

		/**
		 * The ID of the Volume this ticket is regarding, if relevant.
		 */
		volume_id: FormControl<number | null | undefined>,
	}
	export function CreateSupportTicketRequestFormGroup() {
		return new FormGroup<SupportTicketRequestFormProperties>({
			database_id: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65000)]),
			domain_id: new FormControl<number | null | undefined>(undefined),
			firewall_id: new FormControl<number | null | undefined>(undefined),
			linode_id: new FormControl<number | null | undefined>(undefined),
			lkecluster_id: new FormControl<number | null | undefined>(undefined),
			longviewclient_id: new FormControl<number | null | undefined>(undefined),
			managed_issue: new FormControl<boolean | null | undefined>(undefined),
			nodebalancer_id: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			vlan: new FormControl<string | null | undefined>(undefined),
			volume_id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A tag that has been applied to an object on your Account. Tags are currently for organizational purposes only.
	 */
	export interface Tag {

		/**
		 * A Label used for organization of objects on your Account.
		 */
		label?: string | null;
	}

	/**
	 * A tag that has been applied to an object on your Account. Tags are currently for organizational purposes only.
	 */
	export interface TagFormProperties {

		/**
		 * A Label used for organization of objects on your Account.
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing your network utilization for the current month, in Gigabytes.
	 */
	export interface Transfer {

		/**
		 * The amount of your transfer pool that is billable this billing cycle.
		 */
		billable?: number | null;

		/**
		 * The amount of network usage allowed this billing cycle.
		 */
		quota?: number | null;

		/**
		 * The amount of network usage you have used this billing cycle.
		 */
		used?: number | null;
	}

	/**
	 * An object representing your network utilization for the current month, in Gigabytes.
	 */
	export interface TransferFormProperties {

		/**
		 * The amount of your transfer pool that is billable this billing cycle.
		 */
		billable: FormControl<number | null | undefined>,

		/**
		 * The amount of network usage allowed this billing cycle.
		 */
		quota: FormControl<number | null | undefined>,

		/**
		 * The amount of network usage you have used this billing cycle.
		 */
		used: FormControl<number | null | undefined>,
	}
	export function CreateTransferFormGroup() {
		return new FormGroup<TransferFormProperties>({
			billable: new FormControl<number | null | undefined>(undefined),
			quota: new FormControl<number | null | undefined>(undefined),
			used: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.
	 */
	export interface TrustedDevice {

		/**
		 * When this Remember Me session was started.  This corresponds to the time of login with the "Remember Me" box checked.
		 */
		created?: Date | null;

		/**
		 * When this TrustedDevice session expires.  Sessions typically last 30 days.
		 */
		expiry?: Date | null;

		/** The unique ID for this TrustedDevice */
		id?: number | null;

		/**
		 * The last time this TrustedDevice was successfully used to authenticate to <a target="_top" href="https://login.linode.com">login.linode.com</a>.
		 */
		last_authenticated?: Date | null;

		/**
		 * The last IP Address to successfully authenticate with this TrustedDevice.
		 */
		last_remote_addr?: string | null;

		/**
		 * The User Agent of the browser that created this TrustedDevice session.
		 */
		user_agent?: string | null;
	}

	/**
	 * A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.
	 */
	export interface TrustedDeviceFormProperties {

		/**
		 * When this Remember Me session was started.  This corresponds to the time of login with the "Remember Me" box checked.
		 */
		created: FormControl<Date | null | undefined>,

		/**
		 * When this TrustedDevice session expires.  Sessions typically last 30 days.
		 */
		expiry: FormControl<Date | null | undefined>,

		/** The unique ID for this TrustedDevice */
		id: FormControl<number | null | undefined>,

		/**
		 * The last time this TrustedDevice was successfully used to authenticate to <a target="_top" href="https://login.linode.com">login.linode.com</a>.
		 */
		last_authenticated: FormControl<Date | null | undefined>,

		/**
		 * The last IP Address to successfully authenticate with this TrustedDevice.
		 */
		last_remote_addr: FormControl<string | null | undefined>,

		/**
		 * The User Agent of the browser that created this TrustedDevice session.
		 */
		user_agent: FormControl<string | null | undefined>,
	}
	export function CreateTrustedDeviceFormGroup() {
		return new FormGroup<TrustedDeviceFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			last_authenticated: new FormControl<Date | null | undefined>(undefined),
			last_remote_addr: new FormControl<string | null | undefined>(undefined),
			user_agent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
	 */
	export interface User {

		/**
		 * The email address for the User. Linode sends emails to this address for account management communications. May be used for other communications as configured.
		 */
		email?: string | null;

		/**
		 * If true, the User must be granted access to perform actions or access entities on this Account. See User Grants View ([GET /account/users/{username}/grants](/docs/api/account/#users-grants-view)) for details on how to configure grants for a restricted User.
		 */
		restricted?: boolean | null;

		/**
		 * A list of SSH Key labels added by this User.
		 * Users can add keys with the SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) command.
		 * These keys are deployed when this User is included in the `authorized_users`
		 * field of the following requests:
		 * - Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))
		 * - Linode Rebuild ([POST /linode/instances/{linodeId}/rebuild](/docs/api/linode-instances/#linode-rebuild))
		 * - Disk Create ([POST /linode/instances/{linodeId}/disks](/docs/api/linode-instances/#disk-create))
		 */
		ssh_keys?: Array<string>;

		/**
		 * A boolean value indicating if the User has Two Factor Authentication (TFA) enabled. See the Create Two Factor Secret ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) endpoint to enable TFA.
		 */
		tfa_enabled?: boolean | null;

		/**
		 * The User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).
		 * Max length: 32
		 * Min length: 3
		 */
		username?: string | null;
	}

	/**
	 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
	 */
	export interface UserFormProperties {

		/**
		 * The email address for the User. Linode sends emails to this address for account management communications. May be used for other communications as configured.
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * If true, the User must be granted access to perform actions or access entities on this Account. See User Grants View ([GET /account/users/{username}/grants](/docs/api/account/#users-grants-view)) for details on how to configure grants for a restricted User.
		 */
		restricted: FormControl<boolean | null | undefined>,

		/**
		 * A boolean value indicating if the User has Two Factor Authentication (TFA) enabled. See the Create Two Factor Secret ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) endpoint to enable TFA.
		 */
		tfa_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The User's username. This is used for logging in, and may also be displayed alongside actions the User performs (for example, in Events or public StackScripts).
		 * Max length: 32
		 * Min length: 3
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			restricted: new FormControl<boolean | null | undefined>(undefined),
			tfa_enabled: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(32), Validators.pattern('^[a-zA-Z0-9]((?![_-]{2,})[a-zA-Z0-9-_])+[a-zA-Z0-9]$')]),
		});

	}


	/**
	 * A virtual local area network (VLAN) associated with your Account.
	 */
	export interface Vlans {

		/**
		 * The date this VLAN was created.
		 */
		created?: Date | null;

		/** The name of this VLAN. */
		label?: string | null;

		/**
		 * An array of Linode IDs attached to this VLAN.
		 */
		linodes?: Array<number>;

		/**
		 * This VLAN's data center region.
		 * **Note:** Currently, a VLAN can only be assigned to a Linode
		 * within the same data center region.
		 */
		region?: string | null;
	}

	/**
	 * A virtual local area network (VLAN) associated with your Account.
	 */
	export interface VlansFormProperties {

		/**
		 * The date this VLAN was created.
		 */
		created: FormControl<Date | null | undefined>,

		/** The name of this VLAN. */
		label: FormControl<string | null | undefined>,

		/**
		 * This VLAN's data center region.
		 * **Note:** Currently, a VLAN can only be assigned to a Linode
		 * within the same data center region.
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateVlansFormGroup() {
		return new FormGroup<VlansFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A Block Storage Volume associated with your Account.
	 */
	export interface Volume {

		/** When this Volume was created. */
		created?: Date | null;

		/**
		 * The full filesystem path for the Volume based on the Volume's label. Path is /dev/disk/by-id/scsi-0Linode_Volume_ + Volume label.
		 */
		filesystem_path?: string | null;

		/** The storage type of this Volume. */
		hardware_type?: VolumeHardware_type | null;

		/** The unique ID of this Volume. */
		id?: number | null;

		/**
		 * The Volume's label is for display purposes only.
		 * Max length: 32
		 * Min length: 1
		 */
		label?: string | null;

		/**
		 * If a Volume is attached to a specific Linode, the ID of that Linode will be displayed here.
		 */
		linode_id?: number | null;

		/**
		 * If a Volume is attached to a specific Linode, the label of that Linode will be displayed here.
		 */
		linode_label?: string | null;

		/** An area where Linode services are available. */
		region?: Region;

		/**
		 * The Volume's size, in GiB.
		 * Maximum: 10240
		 */
		size?: number | null;

		/**
		 * The current status of the volume.  Can be one of:
		 * * `creating` - the Volume is being created and is not yet available
		 * for use.
		 * * `active` - the Volume is online and available for use.
		 * * `resizing` - the Volume is in the process of upgrading
		 * its current capacity.
		 */
		status?: VolumeStatus | null;

		/**
		 * An array of Tags applied to this object.  Tags are for organizational purposes only.
		 */
		tags?: Array<string>;

		/** When this Volume was last updated. */
		updated?: Date | null;
	}

	/**
	 * A Block Storage Volume associated with your Account.
	 */
	export interface VolumeFormProperties {

		/** When this Volume was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * The full filesystem path for the Volume based on the Volume's label. Path is /dev/disk/by-id/scsi-0Linode_Volume_ + Volume label.
		 */
		filesystem_path: FormControl<string | null | undefined>,

		/** The storage type of this Volume. */
		hardware_type: FormControl<VolumeHardware_type | null | undefined>,

		/** The unique ID of this Volume. */
		id: FormControl<number | null | undefined>,

		/**
		 * The Volume's label is for display purposes only.
		 * Max length: 32
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * If a Volume is attached to a specific Linode, the ID of that Linode will be displayed here.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * If a Volume is attached to a specific Linode, the label of that Linode will be displayed here.
		 */
		linode_label: FormControl<string | null | undefined>,

		/**
		 * The Volume's size, in GiB.
		 * Maximum: 10240
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The current status of the volume.  Can be one of:
		 * * `creating` - the Volume is being created and is not yet available
		 * for use.
		 * * `active` - the Volume is online and available for use.
		 * * `resizing` - the Volume is in the process of upgrading
		 * its current capacity.
		 */
		status: FormControl<VolumeStatus | null | undefined>,

		/** When this Volume was last updated. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			filesystem_path: new FormControl<string | null | undefined>(undefined),
			hardware_type: new FormControl<VolumeHardware_type | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z]((?!--|__)[a-zA-Z0-9-_])+$')]),
			linode_id: new FormControl<number | null | undefined>(undefined),
			linode_label: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined, [Validators.max(10240)]),
			status: new FormControl<VolumeStatus | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum VolumeHardware_type { hdd = 'hdd', nvme = 'nvme' }

	export enum VolumeStatus { creating = 'creating', active = 'active', resizing = 'resizing' }


	/**
	 * An object for describing a single warning associated with a response.
	 */
	export interface WarningObject {

		/**
		 * Specific information related to the warning.
		 */
		details?: string | null;

		/**
		 * The general warning message.
		 */
		title?: string | null;
	}

	/**
	 * An object for describing a single warning associated with a response.
	 */
	export interface WarningObjectFormProperties {

		/**
		 * Specific information related to the warning.
		 */
		details: FormControl<string | null | undefined>,

		/**
		 * The general warning message.
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWarningObjectFormGroup() {
		return new FormGroup<WarningObjectFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Account View
		 * Returns the contact and billing information related to your Account.
		 * Get account
		 * @return {Account} Returns a single Account object.
		 */
		GetAccount(): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account', {});
		}

		/**
		 * Account Update
		 * Updates contact and billing information related to your Account.
		 * Put account
		 * @param {Account} requestBody Update contact and billing information.
		 * Account properties that are excluded from a request remain unchanged.
		 * When updating an Account's `country` to "US", an error is returned if the Account's `zip` is not a valid US zip code.
		 * @return {Account} The updated Account.
		 */
		UpdateAccount(requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'account', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Account Cancel
		 * Cancels an active Linode account. This action will cause Linode to attempt to charge the credit card on file for the remaining balance. An error will occur if Linode fails to charge the credit card on file. Restricted users will not be able to cancel an account.
		 * Post account/cancel
		 * @param {any} requestBody Supply a comment stating the reason that you are cancelling your account.
		 * @return {CancelAccountReturn} Account cancelled
		 */
		CancelAccount(requestBody: any): Observable<CancelAccountReturn> {
			return this.http.post<CancelAccountReturn>(this.baseUri + 'account/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Credit Card Add/Edit
		 * **DEPRECATED**. Please use Payment Method Add ([POST /account/payment-methods](/docs/api/account/#payment-method-add)).
		 * Adds a credit card Payment Method to your account and sets it as the default method.
		 * Post account/credit-card
		 * @param {CreditCard} requestBody Update the credit card information associated with your Account.
		 * @return {string} Credit Card updated.
		 */
		CreateCreditCard(requestBody: CreditCard): Observable<string> {
			return this.http.post(this.baseUri + 'account/credit-card', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Entity Transfers List
		 * **DEPRECATED**. Please use [Service Transfers List](/docs/api/account/#service-transfers-list).
		 * Get account/entity-transfers
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of Entity Transfer objects containing the details of all transfers that have been created and accepted by this account.
		 */
		GetEntityTransfers(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'account/entity-transfers?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Entity Transfer Create
		 * **DEPRECATED**. Please use [Service Transfer Create](/docs/api/account/#service-transfer-create).
		 * Post account/entity-transfers
		 * @param {CreateEntityTransferPostBody} requestBody The entities to include in this transfer request.
		 * @return {EntityTransfer} Returns an Entity Transfer object for the request.
		 */
		CreateEntityTransfer(requestBody: CreateEntityTransferPostBody): Observable<EntityTransfer> {
			return this.http.post<EntityTransfer>(this.baseUri + 'account/entity-transfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Entity Transfer Cancel
		 * **DEPRECATED**. Please use [Service Transfer Cancel](/docs/api/account/#service-transfer-cancel).
		 * Delete account/entity-transfers/{token}
		 * @return {string} Entity Transfer cancelled.
		 */
		DeleteEntityTransfer(): Observable<string> {
			return this.http.delete(this.baseUri + 'account/entity-transfers/{token}', { responseType: 'text' });
		}

		/**
		 * Entity Transfer View
		 * **DEPRECATED**. Please use [Service Transfer View](/docs/api/account/#service-transfer-view).
		 * Get account/entity-transfers/{token}
		 * @return {EntityTransfer} Returns an Entity Transfer object containing the details of the transfer for the specified token.
		 */
		GetEntityTransfer(): Observable<EntityTransfer> {
			return this.http.get<EntityTransfer>(this.baseUri + 'account/entity-transfers/{token}', {});
		}

		/**
		 * Entity Transfer Accept
		 * **DEPRECATED**. Please use [Service Transfer Accept](/docs/api/account/#service-transfer-accept).
		 * Post account/entity-transfers/{token}/accept
		 * @return {string} Entity Transfer accepted.
		 */
		AcceptEntityTransfer(): Observable<string> {
			return this.http.post(this.baseUri + 'account/entity-transfers/{token}/accept', null, { responseType: 'text' });
		}

		/**
		 * Events List
		 * Returns a collection of Event objects representing actions taken on your Account from the last 90 days. The Events returned depend on your grants.
		 * Get account/events
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetEventsReturn} Returns a paginated lists of Event objects from the last 90 days.
		 */
		GetEvents(page: number | null | undefined, page_size: number | null | undefined): Observable<GetEventsReturn> {
			return this.http.get<GetEventsReturn>(this.baseUri + 'account/events?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Event View
		 * Returns a single Event object.
		 * Get account/events/{eventId}
		 * @return {Event} An Event object
		 */
		GetEvent(): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'account/events/{eventId}', {});
		}

		/**
		 * Event Mark as Read
		 * Marks a single Event as read.
		 * Post account/events/{eventId}/read
		 * @return {string} Event read.
		 */
		EventRead(): Observable<string> {
			return this.http.post(this.baseUri + 'account/events/{eventId}/read', null, { responseType: 'text' });
		}

		/**
		 * Event Mark as Seen
		 * Marks all Events up to and including this Event by ID as seen.
		 * Post account/events/{eventId}/seen
		 * @return {string} Events seen.
		 */
		EventSeen(): Observable<string> {
			return this.http.post(this.baseUri + 'account/events/{eventId}/seen', null, { responseType: 'text' });
		}

		/**
		 * Invoices List
		 * Returns a paginated list of Invoices against your Account.
		 * Get account/invoices
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetInvoicesReturn} Returns a paginated list of Invoice objects.
		 */
		GetInvoices(page: number | null | undefined, page_size: number | null | undefined): Observable<GetInvoicesReturn> {
			return this.http.get<GetInvoicesReturn>(this.baseUri + 'account/invoices?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Invoice View
		 * Returns a single Invoice object.
		 * Get account/invoices/{invoiceId}
		 * @return {Invoice} An Invoice object
		 */
		GetInvoice(): Observable<Invoice> {
			return this.http.get<Invoice>(this.baseUri + 'account/invoices/{invoiceId}', {});
		}

		/**
		 * Invoice Items List
		 * Returns a paginated list of Invoice items.
		 * Get account/invoices/{invoiceId}/items
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetInvoiceItemsReturn} A paginated list of InvoiceItem objects
		 */
		GetInvoiceItems(page: number | null | undefined, page_size: number | null | undefined): Observable<GetInvoiceItemsReturn> {
			return this.http.get<GetInvoiceItemsReturn>(this.baseUri + 'account/invoices/{invoiceId}/items?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * User Logins List All
		 * Returns a collection of successful logins for all users on the account during the last 90 days. This command can only be accessed by the unrestricted users of an account.
		 * Get account/logins
		 * @return {GetAccountLoginsReturn} A collection of successful logins for all users on the account during the last 90 days.
		 */
		GetAccountLogins(): Observable<GetAccountLoginsReturn> {
			return this.http.get<GetAccountLoginsReturn>(this.baseUri + 'account/logins', {});
		}

		/**
		 * Login View
		 * Returns a Login object that displays information about a successful login. The logins that can be viewed can be for any user on the account, and are not limited to only the logins of the user that is accessing this API endpoint. This command can only be accessed by the unrestricted users of the account.
		 * Get account/logins/{loginId}
		 * @return {Login} The requested login object.
		 */
		GetAccountLogin(): Observable<Login> {
			return this.http.get<Login>(this.baseUri + 'account/logins/{loginId}', {});
		}

		/**
		 * Maintenance List
		 * Returns a collection of Maintenance objects for any entity a user has permissions to view. Cancelled Maintenance objects are not returned.
		 * Currently, Linodes are the only entities available for viewing.
		 * Get account/maintenance
		 * @return {GetMaintenanceReturn} Returns a paginated list of Maintenance objects.
		 */
		GetMaintenance(): Observable<GetMaintenanceReturn> {
			return this.http.get<GetMaintenanceReturn>(this.baseUri + 'account/maintenance', {});
		}

		/**
		 * Notifications List
		 * Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.
		 * You cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.
		 * Get account/notifications
		 * @return {GetNotificationsReturn} Returns a paginated list of Notification objects.
		 */
		GetNotifications(): Observable<GetNotificationsReturn> {
			return this.http.get<GetNotificationsReturn>(this.baseUri + 'account/notifications', {});
		}

		/**
		 * OAuth Clients List
		 * Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.
		 * Get account/oauth-clients
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetClientsReturn} A paginated list of OAuth Clients.
		 */
		GetClients(page: number | null | undefined, page_size: number | null | undefined): Observable<GetClientsReturn> {
			return this.http.get<GetClientsReturn>(this.baseUri + 'account/oauth-clients?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * OAuth Client Create
		 * Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.
		 * Post account/oauth-clients
		 * @param {OAuthClient} requestBody Information about the OAuth Client to create.
		 * @return {OAuthClient} Client created successfully.
		 */
		CreateClient(requestBody: OAuthClient): Observable<OAuthClient> {
			return this.http.post<OAuthClient>(this.baseUri + 'account/oauth-clients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * OAuth Client Delete
		 * Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target="_top" href="https://login.linode.com">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).
		 * Delete account/oauth-clients/{clientId}
		 * @return {string} Client deleted successfully.
		 */
		DeleteClient(): Observable<string> {
			return this.http.delete(this.baseUri + 'account/oauth-clients/{clientId}', { responseType: 'text' });
		}

		/**
		 * OAuth Client View
		 * Returns information about a single OAuth client.
		 * Get account/oauth-clients/{clientId}
		 * @return {OAuthClient} Information about the requested client.
		 */
		GetClient(): Observable<OAuthClient> {
			return this.http.get<OAuthClient>(this.baseUri + 'account/oauth-clients/{clientId}', {});
		}

		/**
		 * OAuth Client Update
		 * Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.
		 * Put account/oauth-clients/{clientId}
		 * @param {OAuthClient} requestBody The fields to update.
		 * @return {OAuthClient} Client updated successfully.
		 */
		UpdateClient(requestBody: OAuthClient): Observable<OAuthClient> {
			return this.http.put<OAuthClient>(this.baseUri + 'account/oauth-clients/{clientId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * OAuth Client Secret Reset
		 * Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.
		 * Post account/oauth-clients/{clientId}/reset-secret
		 * @return {OAuthClient} Client secret reset successfully.
		 */
		ResetClientSecret(): Observable<OAuthClient> {
			return this.http.post<OAuthClient>(this.baseUri + 'account/oauth-clients/{clientId}/reset-secret', null, {});
		}

		/**
		 * OAuth Client Thumbnail View
		 * Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.
		 * Get account/oauth-clients/{clientId}/thumbnail
		 * @return {void} The client's thumbnail.
		 */
		GetClientThumbnail(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/oauth-clients/{clientId}/thumbnail', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Payment Methods List
		 * Returns a paginated list of Payment Methods for this Account.
		 * Get account/payment-methods
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetPaymentMethodsReturn} Returns a paginated list of Payment Method objects.
		 */
		GetPaymentMethods(page: number | null | undefined, page_size: number | null | undefined): Observable<GetPaymentMethodsReturn> {
			return this.http.get<GetPaymentMethodsReturn>(this.baseUri + 'account/payment-methods?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Payment Method Add
		 * Adds a Payment Method to your Account with the option to set it as the default method.
		 * * Adding a default Payment Method removes the default status from any other Payment Method.
		 * * An Account can have up to 6 active Payment Methods.
		 * * Up to 60 Payment Methods can be added each day.
		 * * Prior to adding a Payment Method, ensure that your billing address information is up-to-date
		 * with a valid `zip` by using the Account Update ([PUT /account](/docs/api/account/#account-update)) endpoint.
		 * * A `payment_method_add` event is generated when a payment is successfully submitted.
		 * Post account/payment-methods
		 * @param {CreatePaymentMethodPostBody} requestBody The details of the Payment Method to add.
		 * @return {string} Payment Method added.
		 */
		CreatePaymentMethod(requestBody: CreatePaymentMethodPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'account/payment-methods', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Payment Method Delete
		 * Deactivate the specified Payment Method.
		 * The default Payment Method can not be deleted. To add a new default Payment Method, access the Payment Method
		 * Add ([POST /account/payment-methods](/docs/api/account/#payment-method-add)) endpoint. To designate an existing
		 * Payment Method as the default method, access the Payment Method Make Default
		 * ([POST /account/payment-methods/{paymentMethodId}/make-default](/docs/api/account/#payment-method-make-default))
		 * endpoint.
		 * Delete account/payment-methods/{paymentMethodId}
		 * @return {string} Payment Method deactivated.
		 */
		DeletePaymentMethod(): Observable<string> {
			return this.http.delete(this.baseUri + 'account/payment-methods/{paymentMethodId}', { responseType: 'text' });
		}

		/**
		 * Payment Method View
		 * View the details of the specified Payment Method.
		 * Get account/payment-methods/{paymentMethodId}
		 * @return {PaymentMethod} Returns a Payment Method Object.
		 */
		GetPaymentMethod(): Observable<PaymentMethod> {
			return this.http.get<PaymentMethod>(this.baseUri + 'account/payment-methods/{paymentMethodId}', {});
		}

		/**
		 * Payment Method Make Default
		 * Make the specified Payment Method the default method for automatically processing payments.
		 * Removes the default status from any other Payment Method.
		 * Post account/payment-methods/{paymentMethodId}/make-default
		 * @return {string} Payment Method successfully set as the default method.
		 */
		MakePaymentMethodDefault(): Observable<string> {
			return this.http.post(this.baseUri + 'account/payment-methods/{paymentMethodId}/make-default', null, { responseType: 'text' });
		}

		/**
		 * Payments List
		 * Returns a paginated list of Payments made on this Account.
		 * Get account/payments
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetPaymentsReturn} Returns a paginated list of Payment objects.
		 */
		GetPayments(page: number | null | undefined, page_size: number | null | undefined): Observable<GetPaymentsReturn> {
			return this.http.get<GetPaymentsReturn>(this.baseUri + 'account/payments?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Payment Make
		 * Makes a Payment to your Account.
		 * * The requested amount is charged to the default Payment Method if no `payment_method_id` is specified.
		 * * A `payment_submitted` event is generated when a payment is successfully submitted.
		 * Post account/payments
		 * @param {PaymentRequest} requestBody Information about the Payment you are making.
		 * @return {Payment} Payment submitted successfully.
		 */
		CreatePayment(requestBody: PaymentRequest): Observable<Payment> {
			return this.http.post<Payment>(this.baseUri + 'account/payments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * PayPal Payment Stage
		 * **Note**: This endpoint is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/).
		 * Post account/payments/paypal
		 * @param {PayPal} requestBody The amount of the Payment to submit via PayPal.
		 * @return {CreatePayPalPaymentReturn} PayPal Payment staged.
		 */
		CreatePayPalPayment(requestBody: PayPal): Observable<CreatePayPalPaymentReturn> {
			return this.http.post<CreatePayPalPaymentReturn>(this.baseUri + 'account/payments/paypal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Staged/Approved PayPal Payment Execute
		 * **Note**: This endpoint is disabled and no longer accessible. PayPal can be designated as a Payment Method for automated payments using the Cloud Manager. See [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/).
		 * Post account/payments/paypal/execute
		 * @param {PayPalExecute} requestBody The details of the Payment to execute.
		 * @return {string} PayPal Payment executed.
		 */
		ExecutePayPalPayment(requestBody: PayPalExecute): Observable<string> {
			return this.http.post(this.baseUri + 'account/payments/paypal/execute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Payment View
		 * Returns information about a specific Payment.
		 * Get account/payments/{paymentId}
		 * @return {Payment} A Payment object.
		 */
		GetPayment(): Observable<Payment> {
			return this.http.get<Payment>(this.baseUri + 'account/payments/{paymentId}', {});
		}

		/**
		 * Promo Credit Add
		 * Adds an expiring Promo Credit to your account.
		 * The following restrictions apply:
		 * * Your account must be less than 90 days old.
		 * * There must not be an existing Promo Credit already on your account.
		 * * The requesting User must be unrestricted. Use the User Update
		 * ([PUT /account/users/{username}](/docs/api/account/#user-update)) to change a User's restricted status.
		 * * The `promo_code` must be valid and unexpired.
		 * Post account/promo-codes
		 * @param {CreatePromoCreditPostBody} requestBody Enter a Promo Code to add its associated credit to your Account.
		 * @return {Promotion} Promo Credit successfully added.
		 */
		CreatePromoCredit(requestBody: CreatePromoCreditPostBody): Observable<Promotion> {
			return this.http.post<Promotion>(this.baseUri + 'account/promo-codes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Service Transfers List
		 * Returns a collection of all created and accepted Service Transfers for this account, regardless of the user that created or accepted the transfer.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get account/service-transfers
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetServiceTransfersReturn} Returns a paginated list of Service Transfer objects containing the details of all transfers that have been created and accepted by this account.
		 */
		GetServiceTransfers(page: number | null | undefined, page_size: number | null | undefined): Observable<GetServiceTransfersReturn> {
			return this.http.get<GetServiceTransfersReturn>(this.baseUri + 'account/service-transfers?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Service Transfer Create
		 * Creates a transfer request for the specified services. A request can contain any of the specified service types
		 * and any number of each service type. At this time, only Linodes can be transferred.
		 * When created successfully, a confirmation email is sent to the account that created this transfer containing a
		 * transfer token and instructions on completing the transfer.
		 * When a transfer is [accepted](/docs/api/account/#service-transfer-accept), the requested services are moved to
		 * the receiving account. Linode services will not experience interruptions due to the transfer process. Backups
		 * for Linodes are transferred as well.
		 * DNS records that are associated with requested services will not be transferred or updated. Please ensure that
		 * associated DNS records have been updated or communicated to the recipient prior to the transfer.
		 * A transfer can take up to three hours to complete once accepted. When a transfer is
		 * completed, billing for transferred services ends for the sending account and begins for the receiving account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * There are several conditions that must be met in order to successfully create a transfer request:
		 * 1. The account creating the transfer must not have a past due balance or active Terms of Service violation.
		 * 1. The service must be owned by the account that is creating the transfer.
		 * 1. The service must not be assigned to another Service Transfer that is pending or that has been accepted and is
		 * incomplete.
		 * 1. Linodes must not:
		 * * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.
		 * * have any attached Block Storage Volumes.
		 * * have any shared IP addresses.
		 * * have any assigned /56, /64, or /116 IPv6 ranges.
		 * Post account/service-transfers
		 * @param {CreateServiceTransferPostBody} requestBody The services to include in this transfer request.
		 * @return {ServiceTransfer} Returns a Service Transfer object for the request.
		 */
		CreateServiceTransfer(requestBody: CreateServiceTransferPostBody): Observable<ServiceTransfer> {
			return this.http.post<ServiceTransfer>(this.baseUri + 'account/service-transfers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Service Transfer Cancel
		 * Cancels the Service Transfer for the provided token. Once cancelled, a transfer cannot be accepted or otherwise
		 * acted on in any way. If cancelled in error, the transfer must be
		 * [created](/docs/api/account/#service-transfer-create) again.
		 * When cancelled, an email notification for the cancellation is sent to the account that created
		 * this transfer. Transfers can not be cancelled if they are expired or have been accepted.
		 * This command can only be accessed by the unrestricted users of the account that created this transfer.
		 * Delete account/service-transfers/{token}
		 * @return {string} Service Transfer cancelled.
		 */
		DeleteServiceTransfer(): Observable<string> {
			return this.http.delete(this.baseUri + 'account/service-transfers/{token}', { responseType: 'text' });
		}

		/**
		 * Service Transfer View
		 * Returns the details of the Service Transfer for the provided token.
		 * While a transfer is pending, any unrestricted user *of any account* can access this command. After a
		 * transfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and
		 * accepted the transfer. If cancelled or expired, only unrestricted users of the account that created the
		 * transfer can view it.
		 * Get account/service-transfers/{token}
		 * @return {ServiceTransfer} Returns a Service Transfer object containing the details of the transfer for the specified token.
		 */
		GetServiceTransfer(): Observable<ServiceTransfer> {
			return this.http.get<ServiceTransfer>(this.baseUri + 'account/service-transfers/{token}', {});
		}

		/**
		 * Service Transfer Accept
		 * Accept a Service Transfer for the provided token to receive the services included in the transfer to your
		 * account. At this time, only Linodes can be transferred.
		 * When accepted, email confirmations are sent to the accounts that created and accepted the transfer. A transfer
		 * can take up to three hours to complete once accepted. Once a transfer is completed, billing for transferred
		 * services ends for the sending account and begins for the receiving account.
		 * This command can only be accessed by the unrestricted users of the account that receives the transfer. Users
		 * of the same account that created a transfer cannot accept the transfer.
		 * There are several conditions that must be met in order to accept a transfer request:
		 * 1. Only transfers with a `pending` status can be accepted.
		 * 1. The account accepting the transfer must have a registered payment method and must not have a past due
		 * balance or other account limitations for the services to be transferred.
		 * 1. Both the account that created the transfer and the account that is accepting the transfer must not have any
		 * active Terms of Service violations.
		 * 1. The service must still be owned by the account that created the transfer.
		 * 1. Linodes must not:
		 * * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.
		 * * have any attached Block Storage Volumes.
		 * * have any shared IP addresses.
		 * * have any assigned /56, /64, or /116 IPv6 ranges.
		 * Any and all of the above conditions must be cured and maintained by the relevant account prior to the
		 * transfer's expiration to allow the transfer to be accepted by the receiving account.
		 * Post account/service-transfers/{token}/accept
		 * @return {string} Service Transfer accepted.
		 */
		AcceptServiceTransfer(): Observable<string> {
			return this.http.post(this.baseUri + 'account/service-transfers/{token}/accept', null, { responseType: 'text' });
		}

		/**
		 * Account Settings View
		 * Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.
		 * Get account/settings
		 * @return {AccountSettings} Returns a single Account settings object.
		 */
		GetAccountSettings(): Observable<AccountSettings> {
			return this.http.get<AccountSettings>(this.baseUri + 'account/settings', {});
		}

		/**
		 * Account Settings Update
		 * Updates your Account settings.
		 * To update your Longview subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).
		 * Put account/settings
		 * @param {AccountSettings} requestBody Update Account settings information.
		 * @return {AccountSettings} The updated Account settings.
		 */
		UpdateAccountSettings(requestBody: AccountSettings): Observable<AccountSettings> {
			return this.http.put<AccountSettings>(this.baseUri + 'account/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Linode Managed Enable
		 * Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](/docs/guides/linode-managed/) to learn more.
		 * Post account/settings/managed-enable
		 * @return {string} Managed services enabled for account.
		 */
		EnableAccountManaged(): Observable<string> {
			return this.http.post(this.baseUri + 'account/settings/managed-enable', null, { responseType: 'text' });
		}

		/**
		 * Network Utilization View
		 * Returns a Transfer object showing your network utilization, in GB, for the current month.
		 * Get account/transfer
		 * @return {Transfer} Returns a single Transfer object.
		 */
		GetTransfer(): Observable<Transfer> {
			return this.http.get<Transfer>(this.baseUri + 'account/transfer', {});
		}

		/**
		 * Users List
		 * Returns a paginated list of Users on your Account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Users may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.
		 * Get account/users
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetUsersReturn} A paginated list of Users.
		 */
		GetUsers(page: number | null | undefined, page_size: number | null | undefined): Observable<GetUsersReturn> {
			return this.http.get<GetUsersReturn>(this.baseUri + 'account/users?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * User Create
		 * Creates a User on your Account. Once created, a confirmation message containing
		 * password creation and login instructions is sent to the User's email address.
		 * This command can only be accessed by the unrestricted users of an account.
		 * The User's account access is determined by whether or not they are restricted,
		 * and what grants they have been given.
		 * Post account/users
		 * @param {User} requestBody Information about the User to create.
		 * @return {User} New User created successfully.
		 */
		CreateUser(requestBody: User): Observable<User> {
			return this.http.post<User>(this.baseUri + 'account/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * User Delete
		 * Deletes a User. The deleted User will be immediately logged out and
		 * may no longer log in or perform any actions. All of the User's Grants
		 * will be removed.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Delete account/users/{username}
		 * @return {string} User deleted successfully.
		 */
		DeleteUser(): Observable<string> {
			return this.http.delete(this.baseUri + 'account/users/{username}', { responseType: 'text' });
		}

		/**
		 * User View
		 * Returns information about a single User on your Account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get account/users/{username}
		 * @return {User} The requested User object
		 */
		GetUser(): Observable<User> {
			return this.http.get<User>(this.baseUri + 'account/users/{username}', {});
		}

		/**
		 * User Update
		 * Update information about a User on your Account. This can be used to
		 * change the restricted status of a User. When making a User restricted,
		 * no grants will be configured by default and you must then set up grants
		 * in order for the User to access anything on the Account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Put account/users/{username}
		 * @param {User} requestBody The information to update.
		 * @return {User} User updated successfully.
		 */
		UpdateUser(requestBody: User): Observable<User> {
			return this.http.put<User>(this.baseUri + 'account/users/{username}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * User's Grants View
		 * Returns the full grants structure for the specified account User
		 * (other than the account owner, see below for details). This includes all entities
		 * on the Account alongside the level of access this User has to each of them.
		 * This command can only be accessed by the unrestricted users of an account.
		 * The current authenticated User, including the account owner, may view their
		 * own grants at the [/profile/grants](/docs/api/profile/#grants-list)
		 * endpoint, but will not see entities that they do not have access to.
		 * Get account/users/{username}/grants
		 * @return {GrantsResponse} The User's grants.
		 */
		GetUserGrants(): Observable<GrantsResponse> {
			return this.http.get<GrantsResponse>(this.baseUri + 'account/users/{username}/grants', {});
		}

		/**
		 * User's Grants Update
		 * Update the grants a User has. This can be used to give a User access
		 * to new entities or actions, or take access away.  You do not need to
		 * include the grant for every entity on the Account in this request; any
		 * that are not included will remain unchanged.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Put account/users/{username}/grants
		 * @param {GrantsResponse} requestBody The grants to update. Omitted grants will be left unchanged.
		 * @return {GrantsResponse} Grants updated successfully.
		 */
		UpdateUserGrants(requestBody: GrantsResponse): Observable<GrantsResponse> {
			return this.http.put<GrantsResponse>(this.baseUri + 'account/users/{username}/grants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed Database Engines List
		 * Display all available Managed Database engine types and versions. Engine IDs are used when creating new Managed Databases.
		 * Get databases/engines
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of all available Managed Database engines and versions.
		 */
		GetDatabasesEngines(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/engines?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed Database Engine View
		 * Display information for a single Managed Database engine type and version.
		 * Get databases/engines/{engineId}
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {DatabaseEngine} Returns information for a single Managed Database engine type and version.
		 */
		GetDatabasesEngine(page: number | null | undefined, page_size: number | null | undefined): Observable<DatabaseEngine> {
			return this.http.get<DatabaseEngine>(this.baseUri + 'databases/engines/{engineId}?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed Databases List All
		 * Display all Managed Databases that are accessible by your User, regardless of engine type.
		 * For more detailed information on a particular Database instance, make a request to its `instance_uri`.
		 * Get databases/instances
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of all accessible Managed Databases on your Account.
		 */
		GetDatabasesInstances(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/instances?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed MongoDB Databases List
		 * Display all accessible Managed MongoDB Databases.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Get databases/mongodb/instances
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of all accessible Managed MongoDB Databases on your Account.
		 */
		GetDatabasesMongoDBInstances(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/mongodb/instances?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed MongoDB Database Delete
		 * Remove a Managed MongoDB Database from your Account.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active`, `failed`, or `degraded` status to perform this command.
		 * Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Delete databases/mongodb/instances/{instanceId}
		 * @return {string} Managed MongoDB Database successfully deleted.
		 */
		DeleteDatabasesMongoDBInstance(): Observable<string> {
			return this.http.delete(this.baseUri + 'databases/mongodb/instances/{instanceId}', { responseType: 'text' });
		}

		/**
		 * Managed MongoDB Database View
		 * Display information for a single, accessible Managed MongoDB Database.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Get databases/mongodb/instances/{instanceId}
		 * @return {DatabaseMongoDB} Returns information for a single Managed MongoDB Database.
		 */
		GetDatabasesMongoDBInstance(): Observable<DatabaseMongoDB> {
			return this.http.get<DatabaseMongoDB>(this.baseUri + 'databases/mongodb/instances/{instanceId}', {});
		}

		/**
		 * Managed MongoDB Database Update
		 * Update a Managed MongoDB Database.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * Updating addresses in the `allow_list` overwrites any existing addresses.
		 * * IP addresses and ranges on this list can access the Managed Database. All other sources are blocked.
		 * * If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.
		 * * Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.
		 * * **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.
		 * All Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MongoDB Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Put databases/mongodb/instances/{instanceId}
		 * @param {PutDatabasesMongoDBInstancePutBody} requestBody Updated information for the Managed MongoDB Database.
		 * @return {DatabaseMongoDB} Managed Database updated successfully.
		 */
		PutDatabasesMongoDBInstance(requestBody: PutDatabasesMongoDBInstancePutBody): Observable<DatabaseMongoDB> {
			return this.http.put<DatabaseMongoDB>(this.baseUri + 'databases/mongodb/instances/{instanceId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed MongoDB Database Backups List
		 * Display all backups for an accessible Managed MongoDB Database.
		 * The Database must not be provisioning to perform this command.
		 * Database `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.
		 * Database `snapshot` type backups are created by accessing the **Managed MongoDB Database Backup Snapshot Create** ([POST /databases/mongodb/instances/{instanceId}/backups](/docs/api/databases/#managed-mongodb-database-backup-snapshot-create)) command.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Get databases/mongodb/instances/{instanceId}/backups
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of backups for the Managed MongoDB Database.
		 */
		GetDatabasesMongoDBInstanceBackups(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/mongodb/instances/{instanceId}/backups?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed MongoDB Database Backup Snapshot Create
		 * Creates a snapshot backup of a Managed MongoDB Database.
		 * Requires `read_write` access to the Database.
		 * Up to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.
		 * Backups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.
		 * The Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Post databases/mongodb/instances/{instanceId}/backups
		 * @param {DatabaseBackupSnapshot} requestBody Information about the snapshot backup to create.
		 * @return {string} Database snapshot backup request successful.
		 */
		PostDatabasesMongoDBInstanceBackup(requestBody: DatabaseBackupSnapshot): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mongodb/instances/{instanceId}/backups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Managed MongoDB Database Backup Delete
		 * Delete a single backup for an accessible Managed MongoDB Database.
		 * Requires `read_write` access to the Database.
		 * The Database must not be provisioning to perform this command.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Delete databases/mongodb/instances/{instanceId}/backups/{backupId}
		 * @return {string} Request to delete Database backup successful.
		 */
		DeleteDatabaseMongoDBInstanceBackup(): Observable<string> {
			return this.http.delete(this.baseUri + 'databases/mongodb/instances/{instanceId}/backups/{backupId}', { responseType: 'text' });
		}

		/**
		 * Managed MongoDB Database Backup View
		 * Display information for a single backup for an accessible Managed MongoDB Database.
		 * The Database must not be provisioning to perform this command.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Get databases/mongodb/instances/{instanceId}/backups/{backupId}
		 * @return {DatabaseBackup} Returns a single backup for the Managed MongoDB Database.
		 */
		GetDatabasesMongoDBInstanceBackup(): Observable<DatabaseBackup> {
			return this.http.get<DatabaseBackup>(this.baseUri + 'databases/mongodb/instances/{instanceId}/backups/{backupId}', {});
		}

		/**
		 * Managed MongoDB Database Backup Restore
		 * Restore a backup to a Managed MongoDB Database on your Account.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.
		 * **Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Post databases/mongodb/instances/{instanceId}/backups/{backupId}/restore
		 * @return {string} Request to restore backup successful.
		 */
		PostDatabasesMongoDBInstanceBackupRestore(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mongodb/instances/{instanceId}/backups/{backupId}/restore', null, { responseType: 'text' });
		}

		/**
		 * Managed MongoDB Database Credentials View
		 * Display the root username and password for an accessible Managed MongoDB Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Get databases/mongodb/instances/{instanceId}/credentials
		 * @return {DatabaseCredentials} Managed Database root username and password.
		 */
		GetDatabasesMongoDBInstanceCredentials(): Observable<DatabaseCredentials> {
			return this.http.get<DatabaseCredentials>(this.baseUri + 'databases/mongodb/instances/{instanceId}/credentials', {});
		}

		/**
		 * Managed MongoDB Database Credentials Reset
		 * Reset the root password for a Managed MongoDB Database.
		 * Requires `read_write` access to the Database.
		 * A new root password is randomly generated and accessible with the **Managed MongoDB Database Credentials View** ([GET /databases/mongodb/instances/{instanceId}/credentials](/docs/api/databases/#managed-mongodb-database-credentials-view)) command.
		 * Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.
		 * **Note**: Note that it may take several seconds for credentials to reset.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Post databases/mongodb/instances/{instanceId}/credentials/reset
		 * @return {string} Managed Database instance credentials successfully reset.
		 */
		PostDatabasesMongoDBInstanceCredentialsReset(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mongodb/instances/{instanceId}/credentials/reset', null, { responseType: 'text' });
		}

		/**
		 * Managed MongoDB Database Patch
		 * Apply security patches and updates to the underlying operating system of the Managed MongoDB Database. This function runs during regular maintenance windows, which are configurable with the **Managed MongoDB Database Update** ([PUT /databases/mongodb/instances/{instanceId}](/docs/api/databases/#managed-mongodb-database-update)) command.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**:
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Post databases/mongodb/instances/{instanceId}/patch
		 * @return {string} Managed Database instance patch request successful.
		 */
		PostDatabasesMongoDBInstancePatch(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mongodb/instances/{instanceId}/patch', null, { responseType: 'text' });
		}

		/**
		 * Managed MongoDB Database SSL Certificate View
		 * Display the SSL CA certificate for an accessible Managed MongoDB Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**: New MongoDB Databases cannot currently be created.
		 * Get databases/mongodb/instances/{instanceId}/ssl
		 * @return {DatabaseSSL} Returns the SSL CA certificate of a single Managed MongoDB Database.
		 */
		GetDatabasesMongoDBInstanceSSL(): Observable<DatabaseSSL> {
			return this.http.get<DatabaseSSL>(this.baseUri + 'databases/mongodb/instances/{instanceId}/ssl', {});
		}

		/**
		 * Managed MySQL Databases List
		 * Display all accessible Managed MySQL Databases.
		 * Get databases/mysql/instances
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of all accessible Managed MySQL Databases on your Account.
		 */
		GetDatabasesMySQLInstances(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/mysql/instances?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed MySQL Database Create
		 * Provision a Managed MySQL Database.
		 * Restricted Users must have the `add_databases` grant to use this command.
		 * New instances can take approximately 15 to 30 minutes to provision.
		 * The `allow_list` is used to control access to the Managed Database.
		 * * IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.
		 * * If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.
		 * * Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.
		 * All Managed Databases include automatic, daily backups. Up to seven backups are automatically stored for each Managed Database, providing restore points for each day of the past week.
		 * All Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MySQL Database during configurable maintenance windows.
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.
		 * * To modify update the maintenance window for a Database, use the **Managed MySQL Database Update** ([PUT /databases/mysql/instances/{instanceId}](/docs/api/databases/#managed-mysql-database-update)) command.
		 * Post databases/mysql/instances
		 * @param {DatabaseMySQLRequest} requestBody Information about the Managed MySQL Database you are creating.
		 * @return {DatabaseMySQL} A new Managed MySQL Database is provisioning.
		 */
		PostDatabasesMySQLInstances(requestBody: DatabaseMySQLRequest): Observable<DatabaseMySQL> {
			return this.http.post<DatabaseMySQL>(this.baseUri + 'databases/mysql/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed MySQL Database Delete
		 * Remove a Managed MySQL Database from your Account.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active`, `failed`, or `degraded` status to perform this command.
		 * Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.
		 * Delete databases/mysql/instances/{instanceId}
		 * @return {string} Managed MySQL Database successfully deleted.
		 */
		DeleteDatabasesMySQLInstance(): Observable<string> {
			return this.http.delete(this.baseUri + 'databases/mysql/instances/{instanceId}', { responseType: 'text' });
		}

		/**
		 * Managed MySQL Database View
		 * Display information for a single, accessible Managed MySQL Database.
		 * Get databases/mysql/instances/{instanceId}
		 * @return {DatabaseMySQL} Returns information for a single Managed MySQL Database.
		 */
		GetDatabasesMySQLInstance(): Observable<DatabaseMySQL> {
			return this.http.get<DatabaseMySQL>(this.baseUri + 'databases/mysql/instances/{instanceId}', {});
		}

		/**
		 * Managed MySQL Database Update
		 * Update a Managed MySQL Database.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * Updating addresses in the `allow_list` overwrites any existing addresses.
		 * * IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.
		 * * If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.
		 * * Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.
		 * * **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.
		 * All Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed MySQL Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.
		 * Put databases/mysql/instances/{instanceId}
		 * @param {PutDatabasesMySQLInstancePutBody} requestBody Updated information for the Managed MySQL Database.
		 * @return {DatabaseMySQL} Managed Database updated successfully.
		 */
		PutDatabasesMySQLInstance(requestBody: PutDatabasesMySQLInstancePutBody): Observable<DatabaseMySQL> {
			return this.http.put<DatabaseMySQL>(this.baseUri + 'databases/mysql/instances/{instanceId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed MySQL Database Backups List
		 * Display all backups for an accessible Managed MySQL Database.
		 * The Database must not be provisioning to perform this command.
		 * Database `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.
		 * Database `snapshot` type backups are created by accessing the **Managed MySQL Database Backup Snapshot Create** ([POST /databases/mysql/instances/{instanceId}/backups](/docs/api/databases/#managed-mysql-database-backup-snapshot-create)) command.
		 * Get databases/mysql/instances/{instanceId}/backups
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of backups for the Managed MySQL Database.
		 */
		GetDatabasesMySQLInstanceBackups(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/mysql/instances/{instanceId}/backups?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed MySQL Database Backup Snapshot Create
		 * Creates a snapshot backup of a Managed MySQL Database.
		 * Requires `read_write` access to the Database.
		 * Up to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.
		 * Backups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.
		 * The Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.
		 * Post databases/mysql/instances/{instanceId}/backups
		 * @param {DatabaseBackupSnapshot} requestBody Information about the snapshot backup to create.
		 * @return {string} Database snapshot backup request successful.
		 */
		PostDatabasesMySQLInstanceBackup(requestBody: DatabaseBackupSnapshot): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mysql/instances/{instanceId}/backups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Managed MySQL Database Backup Delete
		 * Delete a single backup for an accessible Managed MySQL Database.
		 * Requires `read_write` access to the Database.
		 * The Database must not be provisioning to perform this command.
		 * Delete databases/mysql/instances/{instanceId}/backups/{backupId}
		 * @return {string} Request to delete Database backup successful.
		 */
		DeleteDatabaseMySQLInstanceBackup(): Observable<string> {
			return this.http.delete(this.baseUri + 'databases/mysql/instances/{instanceId}/backups/{backupId}', { responseType: 'text' });
		}

		/**
		 * Managed MySQL Database Backup View
		 * Display information for a single backup for an accessible Managed MySQL Database.
		 * The Database must not be provisioning to perform this command.
		 * Get databases/mysql/instances/{instanceId}/backups/{backupId}
		 * @return {DatabaseBackup} Returns a single backup for the Managed MySQL Database.
		 */
		GetDatabasesMySQLInstanceBackup(): Observable<DatabaseBackup> {
			return this.http.get<DatabaseBackup>(this.baseUri + 'databases/mysql/instances/{instanceId}/backups/{backupId}', {});
		}

		/**
		 * Managed MySQL Database Backup Restore
		 * Restore a backup to a Managed MySQL Database on your Account.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.
		 * **Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.
		 * Post databases/mysql/instances/{instanceId}/backups/{backupId}/restore
		 * @return {string} Request to restore backup successful.
		 */
		PostDatabasesMySQLInstanceBackupRestore(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mysql/instances/{instanceId}/backups/{backupId}/restore', null, { responseType: 'text' });
		}

		/**
		 * Managed MySQL Database Credentials View
		 * Display the root username and password for an accessible Managed MySQL Database.
		 * The Database must have an `active` status to perform this command.
		 * Get databases/mysql/instances/{instanceId}/credentials
		 * @return {DatabaseCredentials} Managed Database root username and password.
		 */
		GetDatabasesMySQLInstanceCredentials(): Observable<DatabaseCredentials> {
			return this.http.get<DatabaseCredentials>(this.baseUri + 'databases/mysql/instances/{instanceId}/credentials', {});
		}

		/**
		 * Managed MySQL Database Credentials Reset
		 * Reset the root password for a Managed MySQL Database.
		 * Requires `read_write` access to the Database.
		 * A new root password is randomly generated and accessible with the **Managed MySQL Database Credentials View** ([GET /databases/mysql/instances/{instanceId}/credentials](/docs/api/databases/#managed-mysql-database-credentials-view)) command.
		 * Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.
		 * **Note**: Note that it may take several seconds for credentials to reset.
		 * Post databases/mysql/instances/{instanceId}/credentials/reset
		 * @return {string} Managed Database instance credentials successfully reset.
		 */
		PostDatabasesMySQLInstanceCredentialsReset(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mysql/instances/{instanceId}/credentials/reset', null, { responseType: 'text' });
		}

		/**
		 * Managed MySQL Database Patch
		 * Apply security patches and updates to the underlying operating system of the Managed MySQL Database. This function runs during regular maintenance windows, which are configurable with the **Managed MySQL Database Update** ([PUT /databases/mysql/instances/{instanceId}](/docs/api/databases/#managed-mysql-database-update)) command.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then [migrate your databases](/docs/products/databases/managed-databases/guides/migrate-mysql/) from the original Managed Database cluster to the new one.
		 * Post databases/mysql/instances/{instanceId}/patch
		 * @return {string} Managed Database instance patch request successful.
		 */
		PostDatabasesMySQLInstancePatch(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/mysql/instances/{instanceId}/patch', null, { responseType: 'text' });
		}

		/**
		 * Managed MySQL Database SSL Certificate View
		 * Display the SSL CA certificate for an accessible Managed MySQL Database.
		 * The Database must have an `active` status to perform this command.
		 * Get databases/mysql/instances/{instanceId}/ssl
		 * @return {DatabaseSSL} Returns the SSL CA certificate of a single Managed MySQL Database.
		 */
		GetDatabasesMySQLInstanceSSL(): Observable<DatabaseSSL> {
			return this.http.get<DatabaseSSL>(this.baseUri + 'databases/mysql/instances/{instanceId}/ssl', {});
		}

		/**
		 * Managed PostgreSQL Databases List
		 * Display all accessible Managed PostgreSQL Databases.
		 * Get databases/postgresql/instances
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of all accessible Managed PostgreSQL Databases on your Account.
		 */
		GetDatabasesPostgreSQLInstances(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/postgresql/instances?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed PostgreSQL Database Create
		 * Provision a Managed PostgreSQL Database.
		 * Restricted Users must have the `add_databases` grant to use this command.
		 * New instances can take approximately 15 to 30 minutes to provision.
		 * The `allow_list` is used to control access to the Managed Database.
		 * * IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.
		 * * If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.
		 * * Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.
		 * All Managed Databases include automatic, daily backups. Up to seven backups are automatically stored for each Managed Database, providing restore points for each day of the past week.
		 * All Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database during configurable maintenance windows.
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.
		 * * To modify update the maintenance window for a Database, use the **Managed PostgreSQL Database Update** ([PUT /databases/postgresql/instances/{instanceId}](/docs/api/databases/#managed-postgresql-database-update)) command.
		 * Post databases/postgresql/instances
		 * @param {DatabasePostgreSQLRequest} requestBody Information about the Managed PostgreSQL Database you are creating.
		 * @return {DatabasePostgreSQL} A new Managed PostgreSQL Database is provisioning.
		 */
		PostDatabasesPostgreSQLInstances(requestBody: DatabasePostgreSQLRequest): Observable<DatabasePostgreSQL> {
			return this.http.post<DatabasePostgreSQL>(this.baseUri + 'databases/postgresql/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed PostgreSQL Database Delete
		 * Remove a Managed PostgreSQL Database from your Account.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active`, `failed`, or `degraded` status to perform this command.
		 * Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.
		 * Delete databases/postgresql/instances/{instanceId}
		 * @return {string} Managed PostgreSQL Database successfully deleted.
		 */
		DeleteDatabasesPostgreSQLInstance(): Observable<string> {
			return this.http.delete(this.baseUri + 'databases/postgresql/instances/{instanceId}', { responseType: 'text' });
		}

		/**
		 * Managed PostgreSQL Database View
		 * Display information for a single, accessible Managed PostgreSQL Database.
		 * Get databases/postgresql/instances/{instanceId}
		 * @return {DatabasePostgreSQL} Returns information for a single Managed PostgreSQL Database.
		 */
		GetDatabasesPostgreSQLInstance(): Observable<DatabasePostgreSQL> {
			return this.http.get<DatabasePostgreSQL>(this.baseUri + 'databases/postgresql/instances/{instanceId}', {});
		}

		/**
		 * Managed PostgreSQL Database Update
		 * Update a Managed PostgreSQL Database.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * Updating addresses in the `allow_list` overwrites any existing addresses.
		 * * IP addresses and ranges in this list can access the Managed Database. All other sources are blocked.
		 * * If `0.0.0.0/0` is a value in this list, then all IP addresses can access the Managed Database.
		 * * Entering an empty array (`[]`) blocks all connections (both public and private) to the Managed Database.
		 * * **Note**: Updates to the `allow_list` may take a short period of time to complete, making this command inappropriate for rapid successive updates to this property.
		 * All Managed Databases include automatic patch updates, which apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database. The maintenance window for these updates is configured with the Managed Database's `updates` property.
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance window when any updates occur. It's recommended that you adjust this window to match a time that will be the least disruptive for your application and users. You may also want to consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.
		 * Put databases/postgresql/instances/{instanceId}
		 * @param {PutDatabasesPostgreSQLInstancePutBody} requestBody Updated information for the Managed PostgreSQL Database.
		 * @return {DatabasePostgreSQL} Managed Database updated successfully.
		 */
		PutDatabasesPostgreSQLInstance(requestBody: PutDatabasesPostgreSQLInstancePutBody): Observable<DatabasePostgreSQL> {
			return this.http.put<DatabasePostgreSQL>(this.baseUri + 'databases/postgresql/instances/{instanceId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed PostgreSQL Database Backups List
		 * Display all backups for an accessible Managed PostgreSQL Database.
		 * The Database must not be provisioning to perform this command.
		 * Database `auto` type backups are created every 24 hours at 0:00 UTC. Each `auto` backup is retained for 7 days.
		 * Database `snapshot` type backups are created by accessing the **Managed PostgreSQL Database Backup Snapshot Create** ([POST /databases/postgresql/instances/{instanceId}/backups](/docs/api/databases/#managed-postgresql-database-backup-snapshot-create)) command.
		 * Get databases/postgresql/instances/{instanceId}/backups
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of backups for the Managed PostgreSQL Database.
		 */
		GetDatabasesPostgreSQLInstanceBackups(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/postgresql/instances/{instanceId}/backups?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed PostgreSQL Database Backup Snapshot Create
		 * Creates a snapshot backup of a Managed PostgreSQL Database.
		 * Requires `read_write` access to the Database.
		 * Up to 3 snapshot backups for each Database can be stored at a time. If 3 snapshots have been created for a Database, one must be deleted before another can be made.
		 * Backups generated by this command have the type `snapshot`. Snapshot backups may take several minutes to complete, after which they will be accessible to view or restore.
		 * The Database must have an `active` status to perform this command. If another backup is in progress, it must complete before a new backup can be initiated.
		 * Post databases/postgresql/instances/{instanceId}/backups
		 * @param {DatabaseBackupSnapshot} requestBody Information about the snapshot backup to create.
		 * @return {string} Database snapshot backup request successful.
		 */
		PostDatabasesPostgreSQLInstanceBackup(requestBody: DatabaseBackupSnapshot): Observable<string> {
			return this.http.post(this.baseUri + 'databases/postgresql/instances/{instanceId}/backups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Managed PostgreSQL Database Backup Delete
		 * Delete a single backup for an accessible Managed PostgreSQL Database.
		 * Requires `read_write` access to the Database.
		 * The Database must not be provisioning to perform this command.
		 * Delete databases/postgresql/instances/{instanceId}/backups/{backupId}
		 * @return {string} Request to delete Database backup successful.
		 */
		DeleteDatabasePostgreSQLInstanceBackup(): Observable<string> {
			return this.http.delete(this.baseUri + 'databases/postgresql/instances/{instanceId}/backups/{backupId}', { responseType: 'text' });
		}

		/**
		 * Managed PostgreSQL Database Backup View
		 * Display information for a single backup for an accessible Managed PostgreSQL Database.
		 * The Database must not be provisioning to perform this command.
		 * Get databases/postgresql/instances/{instanceId}/backups/{backupId}
		 * @return {DatabaseBackup} Returns a single backup for the Managed PostgreSQL Database.
		 */
		GetDatabasesPostgreSQLInstanceBackup(): Observable<DatabaseBackup> {
			return this.http.get<DatabaseBackup>(this.baseUri + 'databases/postgresql/instances/{instanceId}/backups/{backupId}', {});
		}

		/**
		 * Managed PostgreSQL Database Backup Restore
		 * Restore a backup to a Managed PostgreSQL Database on your Account.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**: Restoring from a backup will erase all existing data on the database instance and replace it with backup data.
		 * **Note**: Currently, restoring a backup after resetting Managed Database credentials results in a failed cluster. Please contact Customer Support if this occurs.
		 * Post databases/postgresql/instances/{instanceId}/backups/{backupId}/restore
		 * @return {string} Request to restore backup successful.
		 */
		PostDatabasesPostgreSQLInstanceBackupRestore(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/postgresql/instances/{instanceId}/backups/{backupId}/restore', null, { responseType: 'text' });
		}

		/**
		 * Managed PostgreSQL Database Credentials View
		 * Display the root username and password for an accessible Managed PostgreSQL Database.
		 * The Database must have an `active` status to perform this command.
		 * Get databases/postgresql/instances/{instanceId}/credentials
		 * @return {DatabaseCredentials} Managed Database root username and password.
		 */
		GetDatabasesPostgreSQLInstanceCredentials(): Observable<DatabaseCredentials> {
			return this.http.get<DatabaseCredentials>(this.baseUri + 'databases/postgresql/instances/{instanceId}/credentials', {});
		}

		/**
		 * Managed PostgreSQL Database Credentials Reset
		 * Reset the root password for a Managed PostgreSQL Database.
		 * Requires `read_write` access to the Database.
		 * A new root password is randomly generated and accessible with the **Managed PostgreSQL Database Credentials View** ([GET /databases/postgresql/instances/{instanceId}/credentials](/docs/api/databases/#managed-postgresql-database-credentials-view)) command.
		 * Only unrestricted Users can access this command, and have access regardless of the acting token's OAuth scopes.
		 * **Note**: Note that it may take several seconds for credentials to reset.
		 * Post databases/postgresql/instances/{instanceId}/credentials/reset
		 * @return {string} Managed Database instance credentials successfully reset.
		 */
		PostDatabasesPostgreSQLInstanceCredentialsReset(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/postgresql/instances/{instanceId}/credentials/reset', null, { responseType: 'text' });
		}

		/**
		 * Managed PostgreSQL Database Patch
		 * Apply security patches and updates to the underlying operating system of the Managed PostgreSQL Database. This function runs during regular maintenance windows, which are configurable with the **Managed PostgreSQL Database Update** ([PUT /databases/postgresql/instances/{instanceId}](/docs/api/databases/#managed-postgresql-database-update)) command.
		 * Requires `read_write` access to the Database.
		 * The Database must have an `active` status to perform this command.
		 * **Note**
		 * * If your database cluster is configured with a single node, you will experience downtime during this maintenance. Consider upgrading to a high availability plan to avoid any downtime due to maintenance.
		 * * **The database software is not updated automatically.** To upgrade to a new database engine version, consider deploying a new Managed Database with your preferred version. You can then migrate your databases from the original Managed Database cluster to the new one.
		 * Post databases/postgresql/instances/{instanceId}/patch
		 * @return {string} Managed Database instance patch request successful.
		 */
		PostDatabasesPostgreSQLInstancePatch(): Observable<string> {
			return this.http.post(this.baseUri + 'databases/postgresql/instances/{instanceId}/patch', null, { responseType: 'text' });
		}

		/**
		 * Managed PostgreSQL Database SSL Certificate View
		 * Display the SSL CA certificate for an accessible Managed PostgreSQL Database.
		 * The Database must have an `active` status to perform this command.
		 * Get databases/postgresql/instances/{instanceId}/ssl
		 * @return {DatabaseSSL} Returns the SSL CA certificate of a single Managed PostgreSQL Database.
		 */
		GetDatabasesPostgreSQLInstanceSSL(): Observable<DatabaseSSL> {
			return this.http.get<DatabaseSSL>(this.baseUri + 'databases/postgresql/instances/{instanceId}/ssl', {});
		}

		/**
		 * Managed Database Types List
		 * Display all Managed Database node types. The type and number of nodes determine the resources and price of a Managed Database instance.
		 * Each Managed Database can have one node type. In the case of a high availabilty Database, all nodes are provisioned according to the chosen type.
		 * Get databases/types
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {PaginationEnvelope} Returns a paginated list of all Managed Database types.
		 */
		GetDatabasesTypes(page: number | null | undefined, page_size: number | null | undefined): Observable<PaginationEnvelope> {
			return this.http.get<PaginationEnvelope>(this.baseUri + 'databases/types?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed Database Type View
		 * Display the details of a single Managed Database type. The type and number of nodes determine the resources and price of a Managed Database instance.
		 * Get databases/types/{typeId}
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {DatabaseType} Returns a single Managed Database type.
		 */
		GetDatabasesType(page: number | null | undefined, page_size: number | null | undefined): Observable<DatabaseType> {
			return this.http.get<DatabaseType>(this.baseUri + 'databases/types/{typeId}?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Domains List
		 * This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.
		 * Get domains
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetDomainsReturn} A paginated list of Domains you have registered.
		 */
		GetDomains(page: number | null | undefined, page_size: number | null | undefined): Observable<GetDomainsReturn> {
			return this.http.get<GetDomainsReturn>(this.baseUri + 'domains?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Domain Create
		 * Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.
		 * Post domains
		 * @param {Domain} requestBody Information about the domain you are registering.
		 * @return {Domain} Domain added successfully.
		 */
		CreateDomain(requestBody: Domain): Observable<Domain> {
			return this.http.post<Domain>(this.baseUri + 'domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Domain Import
		 * Imports a domain zone from a remote nameserver.
		 * Your nameserver must allow zone transfers (AXFR) from the following IPs:
		 * - 96.126.114.97
		 * - 96.126.114.98
		 * - 2600:3c00::5e
		 * - 2600:3c00::5f
		 * Post domains/import
		 * @param {any} requestBody Information about the Domain to import.
		 * @return {Domain} A single Domain in Linode's DNS Manager.
		 */
		ImportDomain(requestBody: any): Observable<Domain> {
			return this.http.post<Domain>(this.baseUri + 'domains/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Domain Delete
		 * Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.
		 * Delete domains/{domainId}
		 * @return {string} Domain deleted successfully.
		 */
		DeleteDomain(): Observable<string> {
			return this.http.delete(this.baseUri + 'domains/{domainId}', { responseType: 'text' });
		}

		/**
		 * Domain View
		 * This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.
		 * Get domains/{domainId}
		 * @return {Domain} A single Domain in Linode's DNS Manager.
		 */
		GetDomain(): Observable<Domain> {
			return this.http.get<Domain>(this.baseUri + 'domains/{domainId}', {});
		}

		/**
		 * Domain Update
		 * Update information about a Domain in Linode's DNS Manager.
		 * Put domains/{domainId}
		 * @param {Domain} requestBody The Domain information to update.
		 * @return {Domain} Domain update successful.
		 */
		UpdateDomain(requestBody: Domain): Observable<Domain> {
			return this.http.put<Domain>(this.baseUri + 'domains/{domainId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Domain Clone
		 * Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.
		 * Post domains/{domainId}/clone
		 * @param {CloneDomainPostBody} requestBody Information about the Domain to clone.
		 * @return {Domain} A new Domain in Linode's DNS Manager, based on a cloned Domain.
		 */
		CloneDomain(requestBody: CloneDomainPostBody): Observable<Domain> {
			return this.http.post<Domain>(this.baseUri + 'domains/{domainId}/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Domain Records List
		 * Returns a paginated list of Records configured on a Domain in Linode's
		 * DNS Manager.
		 * Get domains/{domainId}/records
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetDomainRecordsReturn} A list of Domain Records.
		 */
		GetDomainRecords(page: number | null | undefined, page_size: number | null | undefined): Observable<GetDomainRecordsReturn> {
			return this.http.get<GetDomainRecordsReturn>(this.baseUri + 'domains/{domainId}/records?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Domain Record Create
		 * Adds a new Domain Record to the zonefile this Domain represents.
		 * Each domain can have up to 12,000 active records.
		 * Post domains/{domainId}/records
		 * @param {DomainRecord} requestBody Information about the new Record to add.
		 * @return {DomainRecord} Domain Record created successfully.
		 */
		CreateDomainRecord(requestBody: DomainRecord): Observable<DomainRecord> {
			return this.http.post<DomainRecord>(this.baseUri + 'domains/{domainId}/records', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Domain Record Delete
		 * Deletes a Record on this Domain.
		 * Delete domains/{domainId}/records/{recordId}
		 * @return {string} Record deleted successfully.
		 */
		DeleteDomainRecord(): Observable<string> {
			return this.http.delete(this.baseUri + 'domains/{domainId}/records/{recordId}', { responseType: 'text' });
		}

		/**
		 * Domain Record View
		 * View a single Record on this Domain.
		 * Get domains/{domainId}/records/{recordId}
		 * @return {DomainRecord} A Domain Record object.
		 */
		GetDomainRecord(): Observable<DomainRecord> {
			return this.http.get<DomainRecord>(this.baseUri + 'domains/{domainId}/records/{recordId}', {});
		}

		/**
		 * Domain Record Update
		 * Updates a single Record on this Domain.
		 * Put domains/{domainId}/records/{recordId}
		 * @param {UpdateDomainRecordPutBody} requestBody The values to change.
		 * @return {DomainRecord} Domain Record updated.
		 */
		UpdateDomainRecord(requestBody: UpdateDomainRecordPutBody): Observable<DomainRecord> {
			return this.http.put<DomainRecord>(this.baseUri + 'domains/{domainId}/records/{recordId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Domain Zone File View
		 * Returns the zone file for the last rendered zone for the specified domain.
		 * Get domains/{domainId}/zone-file
		 * @return {any} An array containing the lines of the domain zone file.
		 */
		GetDomainZone(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'domains/{domainId}/zone-file', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Images List
		 * Returns a paginated list of Images.
		 * * **Public** Images have IDs that begin with "linode/". These distribution images are generally available to
		 * all users.
		 * * **Private** Images have IDs that begin with "private/". These Images are Account-specific and only
		 * accessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).
		 * * To view only public Images, call this endpoint with or without authentication. To view private Images as well, call this endpoint with authentication.
		 * Get images
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetImagesReturn} A paginated list of Images.
		 */
		GetImages(page: number | null | undefined, page_size: number | null | undefined): Observable<GetImagesReturn> {
			return this.http.get<GetImagesReturn>(this.baseUri + 'images?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Image Create
		 * Captures a private gold-master Image from a Linode Disk.
		 * Post images
		 * @param {any} requestBody Information about the Image to create.
		 * @return {Image} New private Image created successfully.
		 */
		CreateImage(requestBody: any): Observable<Image> {
			return this.http.post<Image>(this.baseUri + 'images', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Image Upload
		 * Initiates an Image upload.
		 * This endpoint creates a new private Image object and returns it along
		 * with the URL to which image data can be uploaded.
		 * - Image data must be uploaded within 24 hours of creation or the
		 * upload will be cancelled and the image deleted.
		 * - Image uploads should be made as an HTTP PUT request to the URL returned in the `upload_to`
		 * response parameter, with a `Content-type: application/octet-stream` header included in the
		 * request. For example:
		 * curl -v \
		 * -H "Content-Type: application/octet-stream" \
		 * --upload-file example.img.gz \
		 * $UPLOAD_URL \
		 * --progress-bar \
		 * --output /dev/null
		 * - Uploaded image data should be compressed in gzip (`.gz`) format. The uncompressed disk should be in raw
		 * disk image (`.img`) format. A maximum compressed file size of 5GB is supported for upload at this time.
		 * **Note:** To initiate and complete an Image upload in a single step, see our guide on how to [Upload an Image](/docs/products/tools/images/guides/upload-an-image/) using Cloud Manager or the Linode CLI `image-upload` plugin.
		 * Post images/upload
		 * @param {ImagesPostPostBody} requestBody The uploaded Image details.
		 * @return {ImagesPostReturn} Image Upload object including the upload URL and Image object.
		 */
		ImagesPost(requestBody: ImagesPostPostBody): Observable<ImagesPostReturn> {
			return this.http.post<ImagesPostReturn>(this.baseUri + 'images/upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Image Delete
		 * Deletes a private Image you have permission to `read_write`.
		 * **Deleting an Image is a destructive action and cannot be undone.**
		 * Delete images/{imageId}
		 * @return {string} Delete successful
		 */
		DeleteImage(): Observable<string> {
			return this.http.delete(this.baseUri + 'images/{imageId}', { responseType: 'text' });
		}

		/**
		 * Image View
		 * Get information about a single Image.
		 * * **Public** Images have IDs that begin with "linode/". These distribution images are generally available to
		 * all users.
		 * * **Private** Images have IDs that begin with "private/". These Images are Account-specific and only
		 * accessible to Users with appropriate [Grants](/docs/api/account/#users-grants-view).
		 * * To view a public Image, call this endpoint with or without authentication. To view a private Image, call this endpoint with authentication.
		 * Get images/{imageId}
		 * @return {Image} A single Image object.
		 */
		GetImage(): Observable<Image> {
			return this.http.get<Image>(this.baseUri + 'images/{imageId}', {});
		}

		/**
		 * Image Update
		 * Updates a private Image that you have permission to `read_write`.
		 * Put images/{imageId}
		 * @param {Image} requestBody The fields to update.
		 * @return {Image} The updated image.
		 */
		UpdateImage(requestBody: Image): Observable<Image> {
			return this.http.put<Image>(this.baseUri + 'images/{imageId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Linodes List
		 * Returns a paginated list of Linodes you have permission to view.
		 * Get linode/instances
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetLinodeInstancesReturn} Returns an array of all Linodes on your Account.
		 */
		GetLinodeInstances(page: number | null | undefined, page_size: number | null | undefined): Observable<GetLinodeInstancesReturn> {
			return this.http.get<GetLinodeInstancesReturn>(this.baseUri + 'linode/instances?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Linode Create
		 * Creates a Linode Instance on your Account. In order for this
		 * request to complete successfully, your User must have the `add_linodes` grant. Creating a
		 * new Linode will incur a charge on your Account.
		 * Linodes can be created using one of the available Types. See
		 * Types List ([GET /linode/types](/docs/api/linode-types/#types-list)) to get more
		 * information about each Type's specs and cost.
		 * Linodes can be created in any one of our available Regions, which are accessible from the
		 * Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint.
		 * In an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587
		 * on all Linodes for new accounts created after November 5th, 2019. For more information,
		 * see [Sending Email on Linode](/docs/guides/running-a-mail-server/#sending-email-on-linode).
		 * Linodes can be created in a number of ways:
		 * * Using a Linode Public Image distribution or a Private Image you created based on another Linode.
		 * * Access the Images List ([GET /images](/docs/api/images/#images-list)) endpoint with authentication to view
		 * all available Images.
		 * * The Linode will be `running` after it completes `provisioning`.
		 * * A default config with two Disks, one being a 512 swap disk, is created.
		 * * `swap_size` can be used to customize the swap disk size.
		 * * Requires a `root_pass` be supplied to use for the root User's Account.
		 * * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
		 * * You may also supply a list of usernames via the `authorized_users` field.
		 * * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.
		 * * Using a StackScript.
		 * * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for
		 * a list of available StackScripts.
		 * * The Linode will be `running` after it completes `provisioning`.
		 * * Requires a compatible Image to be supplied.
		 * * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.
		 * * Requires a `root_pass` be supplied to use for the root User's Account.
		 * * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
		 * * You may also supply a list of usernames via the `authorized_users` field.
		 * * These users must have an SSH Key associated with your Profile first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.
		 * * Using one of your other Linode's backups.
		 * * You must create a Linode large enough to accommodate the Backup's size.
		 * * The Disks and Config will match that of the Linode that was backed up.
		 * * The `root_pass` will match that of the Linode that was backed up.
		 * * Attached to a private VLAN.
		 * * Review the `interfaces` property of the [Request Body Schema](/docs/api/linode-instances/#linode-create__request-body-schema) for details.
		 * * For more information, see our guide on [Getting Started with VLANs](/docs/products/networking/vlans/get-started/).
		 * * Create an empty Linode.
		 * * The Linode will remain `offline` and must be manually started.
		 * * See Linode Boot ([POST /linode/instances/{linodeId}/boot](/docs/api/linode-instances/#linode-boot)).
		 * * Disks and Configs must be created manually.
		 * * This is only recommended for advanced use cases.
		 * **Important**: You must be an unrestricted User in order to add or modify
		 * tags on Linodes.
		 * Post linode/instances
		 * @param {string} requestBody The requested initial state of a new Linode.
		 * @return {Linode} A new Linode is being created.
		 */
		CreateLinodeInstance(requestBody: string): Observable<Linode> {
			return this.http.post<Linode>(this.baseUri + 'linode/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Linode Delete
		 * Deletes a Linode you have permission to `read_write`.
		 * **Deleting a Linode is a destructive action and cannot be undone.**
		 * Additionally, deleting a Linode:
		 * * Gives up any IP addresses the Linode was assigned.
		 * * Deletes all Disks, Backups, Configs, etc.
		 * * Stops billing for the Linode and its associated services. You will be billed for time used
		 * within the billing period the Linode was active.
		 * Linodes that are in the process of [cloning](/docs/api/linode-instances/#linode-clone) or [backup restoration](/docs/api/linode-instances/#backup-restore) cannot be deleted.
		 * Delete linode/instances/{linodeId}
		 * @return {string} Delete successful
		 */
		DeleteLinodeInstance(): Observable<string> {
			return this.http.delete(this.baseUri + 'linode/instances/{linodeId}', { responseType: 'text' });
		}

		/**
		 * Linode View
		 * Get a specific Linode by ID.
		 * Get linode/instances/{linodeId}
		 * @return {Linode} Returns a single Linode object.
		 */
		GetLinodeInstance(): Observable<Linode> {
			return this.http.get<Linode>(this.baseUri + 'linode/instances/{linodeId}', {});
		}

		/**
		 * Linode Update
		 * Updates a Linode that you have permission to `read_write`.
		 * **Important**: You must be an unrestricted User in order to add or modify tags on Linodes.
		 * Put linode/instances/{linodeId}
		 * @param {Linode} requestBody Any field that is not marked as `readOnly` may be updated. Fields that are marked `readOnly` will be ignored. If any updated field fails to pass validation, the Linode will not be updated.
		 * @return {Linode} The updated Linode.
		 */
		UpdateLinodeInstance(requestBody: Linode): Observable<Linode> {
			return this.http.put<Linode>(this.baseUri + 'linode/instances/{linodeId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Backups List
		 * Returns information about this Linode's available backups.
		 * Get linode/instances/{linodeId}/backups
		 * @return {GetBackupsReturn} A collection of the specified Linode's available backups.
		 */
		GetBackups(): Observable<GetBackupsReturn> {
			return this.http.get<GetBackupsReturn>(this.baseUri + 'linode/instances/{linodeId}/backups', {});
		}

		/**
		 * Snapshot Create
		 * Creates a snapshot Backup of a Linode.
		 * **Important:** If you already have a snapshot of this Linode, this is a destructive
		 * action. The previous snapshot will be deleted.
		 * Post linode/instances/{linodeId}/backups
		 * @return {Backup} Snapshot request successful.
		 */
		CreateSnapshot(requestBody: CreateSnapshotPostBody): Observable<Backup> {
			return this.http.post<Backup>(this.baseUri + 'linode/instances/{linodeId}/backups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Backups Cancel
		 * Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.
		 * Post linode/instances/{linodeId}/backups/cancel
		 * @return {string} Backup service was cancelled for the specified Linode.
		 */
		CancelBackups(): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/backups/cancel', null, { responseType: 'text' });
		}

		/**
		 * Backups Enable
		 * Enables backups for the specified Linode.
		 * Post linode/instances/{linodeId}/backups/enable
		 * @return {string} Backup service was enabled.
		 */
		EnableBackups(): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/backups/enable', null, { responseType: 'text' });
		}

		/**
		 * Backup View
		 * Returns information about a Backup.
		 * Get linode/instances/{linodeId}/backups/{backupId}
		 * @return {Backup} A single Backup.
		 */
		GetBackup(): Observable<Backup> {
			return this.http.get<Backup>(this.baseUri + 'linode/instances/{linodeId}/backups/{backupId}', {});
		}

		/**
		 * Backup Restore
		 * Restores a Linode's Backup to the specified Linode.
		 * Post linode/instances/{linodeId}/backups/{backupId}/restore
		 * @param {RestoreBackupPostBody} requestBody Parameters to provide when restoring the Backup.
		 * @return {string} Restore from Backup was initiated.
		 */
		RestoreBackup(requestBody: RestoreBackupPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/backups/{backupId}/restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode Boot
		 * Boots a Linode you have permission to modify. If no parameters are given, a Config profile
		 * will be chosen for this boot based on the following criteria:
		 * * If there is only one Config profile for this Linode, it will be used.
		 * * If there is more than one Config profile, the last booted config will be used.
		 * * If there is more than one Config profile and none were the last to be booted (because the
		 * Linode was never booted or the last booted config was deleted) an error will be returned.
		 * Post linode/instances/{linodeId}/boot
		 * @param {BootLinodeInstancePostBody} requestBody Optional configuration to boot into (see above).
		 * @return {string} Boot started.
		 */
		BootLinodeInstance(requestBody: BootLinodeInstancePostBody): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/boot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode Clone
		 * You can clone your Linode's existing Disks or Configuration profiles to
		 * another Linode on your Account. In order for this request to complete
		 * successfully, your User must have the `add_linodes` grant. Cloning to a
		 * new Linode will incur a charge on your Account.
		 * If cloning to an existing Linode, any actions currently running or
		 * queued must be completed first before you can clone to it.
		 * Up to five clone operations from any given source Linode can be run concurrently.
		 * If more concurrent clones are attempted, an HTTP 400 error will be
		 * returned by this endpoint.
		 * Any [tags](/docs/api/tags/#tags-list) existing on the source Linode will be cloned to the target Linode.
		 * Post linode/instances/{linodeId}/clone
		 * @param {CloneLinodeInstancePostBody} requestBody The requested state your Linode will be cloned into.
		 * @return {Linode} Clone started.
		 */
		CloneLinodeInstance(requestBody: CloneLinodeInstancePostBody): Observable<Linode> {
			return this.http.post<Linode>(this.baseUri + 'linode/instances/{linodeId}/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configuration Profiles List
		 * Lists Configuration profiles associated with a Linode.
		 * Get linode/instances/{linodeId}/configs
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetLinodeConfigsReturn} Returns an array of Configuration profiles associated with this Linode.
		 */
		GetLinodeConfigs(page: number | null | undefined, page_size: number | null | undefined): Observable<GetLinodeConfigsReturn> {
			return this.http.get<GetLinodeConfigsReturn>(this.baseUri + 'linode/instances/{linodeId}/configs?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Configuration Profile Create
		 * Adds a new Configuration profile to a Linode.
		 * Post linode/instances/{linodeId}/configs
		 * @param {LinodeConfig} requestBody The parameters to set when creating the Configuration profile.
		 * This determines which kernel, devices, how much memory, etc. a Linode boots with.
		 * @return {LinodeConfig} A Configuration profile was created.
		 */
		AddLinodeConfig(requestBody: LinodeConfig): Observable<LinodeConfig> {
			return this.http.post<LinodeConfig>(this.baseUri + 'linode/instances/{linodeId}/configs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configuration Profile Delete
		 * Deletes the specified Configuration profile from the specified Linode.
		 * Delete linode/instances/{linodeId}/configs/{configId}
		 * @return {string} Configuration profile successfully deleted.
		 */
		DeleteLinodeConfig(): Observable<string> {
			return this.http.delete(this.baseUri + 'linode/instances/{linodeId}/configs/{configId}', { responseType: 'text' });
		}

		/**
		 * Configuration Profile View
		 * Returns information about a specific Configuration profile.
		 * Get linode/instances/{linodeId}/configs/{configId}
		 * @return {LinodeConfig} A Configuration profile object.
		 */
		GetLinodeConfig(): Observable<LinodeConfig> {
			return this.http.get<LinodeConfig>(this.baseUri + 'linode/instances/{linodeId}/configs/{configId}', {});
		}

		/**
		 * Configuration Profile Update
		 * Updates a Configuration profile.
		 * Put linode/instances/{linodeId}/configs/{configId}
		 * @param {LinodeConfig} requestBody The Configuration profile parameters to modify.
		 * @return {LinodeConfig} Configuration profile successfully updated.
		 */
		UpdateLinodeConfig(requestBody: LinodeConfig): Observable<LinodeConfig> {
			return this.http.put<LinodeConfig>(this.baseUri + 'linode/instances/{linodeId}/configs/{configId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disks List
		 * View Disk information for Disks associated with this Linode.
		 * Get linode/instances/{linodeId}/disks
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetLinodeDisksReturn} Returns a paginated list of disks associated with this Linode.
		 */
		GetLinodeDisks(page: number | null | undefined, page_size: number | null | undefined): Observable<GetLinodeDisksReturn> {
			return this.http.get<GetLinodeDisksReturn>(this.baseUri + 'linode/instances/{linodeId}/disks?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Disk Create
		 * Adds a new Disk to a Linode.
		 * * You can optionally create a Disk from an Image or an Empty Disk if no Image is provided with a request.
		 * * When creating an Empty Disk, providing a `label` is required.
		 * * If no `label` is provided, an `image` is required instead.
		 * * When creating a Disk from an Image, `root_pass` is required.
		 * * The default filesystem for new Disks is `ext4`. If creating a Disk from an Image, the filesystem
		 * of the Image is used unless otherwise specified.
		 * * When deploying a StackScript on a Disk:
		 * * See StackScripts List ([GET /linode/stackscripts](/docs/api/stackscripts/#stackscripts-list)) for
		 * a list of available StackScripts.
		 * * Requires a compatible Image to be supplied.
		 * * See StackScript View ([GET /linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view)) for compatible Images.
		 * * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
		 * * You may also supply a list of usernames via the `authorized_users` field.
		 * * These users must have an SSH Key associated with their Profiles first. See SSH Key Add ([POST /profile/sshkeys](/docs/api/profile/#ssh-key-add)) for more information.
		 * Post linode/instances/{linodeId}/disks
		 * @param {DiskRequest} requestBody The parameters to set when creating the Disk.
		 * @return {Disk} Disk created.
		 */
		AddLinodeDisk(requestBody: DiskRequest): Observable<Disk> {
			return this.http.post<Disk>(this.baseUri + 'linode/instances/{linodeId}/disks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disk Delete
		 * Deletes a Disk you have permission to `read_write`.
		 * **Deleting a Disk is a destructive action and cannot be undone.**
		 * Delete linode/instances/{linodeId}/disks/{diskId}
		 * @return {string} Delete successful
		 */
		DeleteDisk(): Observable<string> {
			return this.http.delete(this.baseUri + 'linode/instances/{linodeId}/disks/{diskId}', { responseType: 'text' });
		}

		/**
		 * Disk View
		 * View Disk information for a Disk associated with this Linode.
		 * Get linode/instances/{linodeId}/disks/{diskId}
		 * @return {Disk} Returns a single Disk object.
		 */
		GetLinodeDisk(): Observable<Disk> {
			return this.http.get<Disk>(this.baseUri + 'linode/instances/{linodeId}/disks/{diskId}', {});
		}

		/**
		 * Disk Update
		 * Updates a Disk that you have permission to `read_write`.
		 * Put linode/instances/{linodeId}/disks/{diskId}
		 * @param {Disk} requestBody Updates the parameters of a single Disk.
		 * @return {Disk} The updated Disk.
		 */
		UpdateDisk(requestBody: Disk): Observable<Disk> {
			return this.http.put<Disk>(this.baseUri + 'linode/instances/{linodeId}/disks/{diskId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disk Clone
		 * Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.
		 * Post linode/instances/{linodeId}/disks/{diskId}/clone
		 * @return {Disk} Disk clone initiated.
		 */
		CloneLinodeDisk(): Observable<Disk> {
			return this.http.post<Disk>(this.baseUri + 'linode/instances/{linodeId}/disks/{diskId}/clone', null, {});
		}

		/**
		 * Disk Root Password Reset
		 * Resets the password of a Disk you have permission to `read_write`.
		 * Post linode/instances/{linodeId}/disks/{diskId}/password
		 * @param {any} requestBody The new password.
		 * @return {string} Returns a single Disk object.
		 */
		ResetDiskPassword(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/disks/{diskId}/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Disk Resize
		 * Resizes a Disk you have permission to `read_write`.
		 * The Disk must not be in use. If the Disk is in use, the request will
		 * succeed but the resize will ultimately fail. For a request to succeed,
		 * the Linode must be shut down prior to resizing the Disk, or the Disk
		 * must not be assigned to the Linode's active Configuration Profile.
		 * If you are resizing the Disk to a smaller size, it cannot be made smaller
		 * than what is required by the total size of the files current on the Disk.
		 * Post linode/instances/{linodeId}/disks/{diskId}/resize
		 * @param {any} requestBody The new size of the Disk.
		 * @return {string} Resize started.
		 */
		ResizeDisk(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/disks/{diskId}/resize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Firewalls List
		 * View Firewall information for Firewalls associated with this Linode.
		 * Get linode/instances/{linodeId}/firewalls
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetLinodeFirewallsReturn} Returns a paginated list of Firewalls associated with this Linode.
		 */
		GetLinodeFirewalls(page: number | null | undefined, page_size: number | null | undefined): Observable<GetLinodeFirewallsReturn> {
			return this.http.get<GetLinodeFirewallsReturn>(this.baseUri + 'linode/instances/{linodeId}/firewalls?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Networking Information List
		 * Returns networking information for a single Linode.
		 * Get linode/instances/{linodeId}/ips
		 * @return {any} Requested Linode's networking configuration.
		 */
		GetLinodeIPs(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'linode/instances/{linodeId}/ips', { observe: 'response', responseType: 'text' });
		}

		/**
		 * IPv4 Address Allocate
		 * Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](/docs/api/support/#support-ticket-open). You may not add more than one private IPv4 address to a single Linode.
		 * Post linode/instances/{linodeId}/ips
		 * @param {any} requestBody Information about the address you are creating.
		 * @return {IPAddress} IP address was successfully allocated.
		 */
		AddLinodeIP(requestBody: any): Observable<IPAddress> {
			return this.http.post<IPAddress>(this.baseUri + 'linode/instances/{linodeId}/ips', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * IPv4 Address Delete
		 * Deletes a public or private IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address.
		 * Delete linode/instances/{linodeId}/ips/{address}
		 * @return {string} IP address successfully removed.
		 */
		RemoveLinodeIP(): Observable<string> {
			return this.http.delete(this.baseUri + 'linode/instances/{linodeId}/ips/{address}', { responseType: 'text' });
		}

		/**
		 * IP Address View
		 * View information about the specified IP address associated with the specified Linode.
		 * Get linode/instances/{linodeId}/ips/{address}
		 * @return {IPAddress} A single IP address.
		 */
		GetLinodeIP(): Observable<IPAddress> {
			return this.http.get<IPAddress>(this.baseUri + 'linode/instances/{linodeId}/ips/{address}', {});
		}

		/**
		 * IP Address Update
		 * Updates a the reverse DNS (RDNS) for a particular IP Address associated with this Linode.
		 * Setting the RDNS to `null` for a public IPv4 address, resets it to the default "ip.linodeusercontent.com" RDNS value.
		 * Put linode/instances/{linodeId}/ips/{address}
		 * @param {UpdateLinodeIPPutBody} requestBody The information to update for the IP address.
		 * @return {IPAddress} The updated IP address record.
		 */
		UpdateLinodeIP(requestBody: UpdateLinodeIPPutBody): Observable<IPAddress> {
			return this.http.put<IPAddress>(this.baseUri + 'linode/instances/{linodeId}/ips/{address}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DC Migration/Pending Host Migration Initiate
		 * Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [GET /account/notifications](/docs/api/account/#notifications-list). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.
		 * To initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [GET /regions](/docs/api/regions/#regions-list). If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.
		 * **Note:** Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.
		 * Post linode/instances/{linodeId}/migrate
		 * @return {string} Scheduled migration started
		 */
		MigrateLinodeInstance(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/migrate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode Upgrade
		 * Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.
		 * If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.
		 * Post linode/instances/{linodeId}/mutate
		 * @param {MutateLinodeInstancePostBody} requestBody Whether to automatically resize disks or not.
		 * @return {string} Mutate started.
		 */
		MutateLinodeInstance(requestBody: MutateLinodeInstancePostBody): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/mutate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode NodeBalancers View
		 * Returns a list of NodeBalancers that are assigned to this Linode and readable by the requesting User.
		 * Read permission to a NodeBalancer can be given to a User by accessing the User's Grants Update
		 * ([PUT /account/users/{username}/grants](/docs/api/account/#users-grants-update)) endpoint.
		 * Get linode/instances/{linodeId}/nodebalancers
		 * @return {GetLinodeNodeBalancersReturn} Returns a paginated list of NodeBalancers.
		 */
		GetLinodeNodeBalancers(): Observable<GetLinodeNodeBalancersReturn> {
			return this.http.get<GetLinodeNodeBalancersReturn>(this.baseUri + 'linode/instances/{linodeId}/nodebalancers', {});
		}

		/**
		 * Linode Root Password Reset
		 * Resets the root password for this Linode.
		 * * Your Linode must be [shut down](/docs/api/linode-instances/#linode-shut-down) for a password reset to complete.
		 * * If your Linode has more than one disk (not counting its swap disk), use the [Reset Disk Root Password](/docs/api/linode-instances/#disk-root-password-reset) endpoint to update a specific disk's root password.
		 * * A `password_reset` event is generated when a root password reset is successful.
		 * Post linode/instances/{linodeId}/password
		 * @param {any} requestBody This Linode's new root password.
		 * @return {string} Password Reset.
		 */
		ResetLinodePassword(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode Reboot
		 * Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.
		 * Post linode/instances/{linodeId}/reboot
		 * @param {any} requestBody Optional reboot parameters.
		 * @return {string} Reboot started.
		 */
		RebootLinodeInstance(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/reboot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode Rebuild
		 * Rebuilds a Linode you have the `read_write` permission to modify.
		 * A rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:
		 * * Requires an `image` be supplied.
		 * * Requires a `root_pass` be supplied to use for the root User's Account.
		 * * It is recommended to supply SSH keys for the root User using the
		 * `authorized_keys` field.
		 * Post linode/instances/{linodeId}/rebuild
		 * @param {string} requestBody The requested state your Linode will be rebuilt into.
		 * @return {Linode} Rebuild started.
		 */
		RebuildLinodeInstance(requestBody: string): Observable<Linode> {
			return this.http.post<Linode>(this.baseUri + 'linode/instances/{linodeId}/rebuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Linode Boot into Rescue Mode
		 * Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.
		 * * Note that "sdh" is reserved and unavailable during rescue.
		 * Post linode/instances/{linodeId}/rescue
		 * @param {RescueLinodeInstancePostBody} requestBody Optional object of devices to be mounted.
		 * @return {string} Rescue started.
		 */
		RescueLinodeInstance(requestBody: RescueLinodeInstancePostBody): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/rescue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode Resize
		 * Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:
		 * * The Linode must not have a pending migration.
		 * * Your Account cannot have an outstanding balance.
		 * * The Linode must not have more disk allocation than the new Type allows.
		 * * In that situation, you must first delete or resize the disk to be smaller.
		 * Post linode/instances/{linodeId}/resize
		 * @param {ResizeLinodeInstancePostBody} requestBody The Type your current Linode will resize to, and whether to attempt to automatically resize the Linode's disks.
		 * @return {string} Resize started.
		 */
		ResizeLinodeInstance(requestBody: ResizeLinodeInstancePostBody): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/resize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Linode Shut Down
		 * Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.
		 * Post linode/instances/{linodeId}/shutdown
		 * @return {string} Shutdown started.
		 */
		ShutdownLinodeInstance(): Observable<string> {
			return this.http.post(this.baseUri + 'linode/instances/{linodeId}/shutdown', null, { responseType: 'text' });
		}

		/**
		 * Linode Statistics View
		 * Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.
		 * Get linode/instances/{linodeId}/stats
		 * @return {LinodeStats} The Linode's stats for the past 24 hours.
		 */
		GetLinodeStats(): Observable<LinodeStats> {
			return this.http.get<LinodeStats>(this.baseUri + 'linode/instances/{linodeId}/stats', {});
		}

		/**
		 * Statistics View (year/month)
		 * Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.
		 * Get linode/instances/{linodeId}/stats/{year}/{month}
		 * @return {LinodeStats} The Linode's statistics for the requested period.
		 */
		GetLinodeStatsByYearMonth(): Observable<LinodeStats> {
			return this.http.get<LinodeStats>(this.baseUri + 'linode/instances/{linodeId}/stats/{year}/{month}', {});
		}

		/**
		 * Network Transfer View
		 * Returns a Linode's network transfer pool statistics for the current month.
		 * Get linode/instances/{linodeId}/transfer
		 * @return {any} A collection of the specified Linode's network transfer statistics.
		 */
		GetLinodeTransfer(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'linode/instances/{linodeId}/transfer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Network Transfer View (year/month)
		 * Returns a Linode's network transfer statistics for a specific month. The year/month values must be either a date in the past, or the current month.
		 * Get linode/instances/{linodeId}/transfer/{year}/{month}
		 * @return {any} A collection of the specified Linode's network transfer statistics for the requested month.
		 */
		GetLinodeTransferByYearMonth(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'linode/instances/{linodeId}/transfer/{year}/{month}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Linode's Volumes List
		 * View Block Storage Volumes attached to this Linode.
		 * Get linode/instances/{linodeId}/volumes
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetLinodeVolumesReturn} Returns an array of Block Storage Volumes attached to this Linode.
		 */
		GetLinodeVolumes(page: number | null | undefined, page_size: number | null | undefined): Observable<GetLinodeVolumesReturn> {
			return this.http.get<GetLinodeVolumesReturn>(this.baseUri + 'linode/instances/{linodeId}/volumes?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Kernels List
		 * Lists available Kernels.
		 * Get linode/kernels
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetKernelsReturn} Returns an array of Kernels.
		 */
		GetKernels(page: number | null | undefined, page_size: number | null | undefined): Observable<GetKernelsReturn> {
			return this.http.get<GetKernelsReturn>(this.baseUri + 'linode/kernels?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Kernel View
		 * Returns information about a single Kernel.
		 * Get linode/kernels/{kernelId}
		 * @return {Kernel} A single Kernel object.
		 */
		GetKernel(): Observable<Kernel> {
			return this.http.get<Kernel>(this.baseUri + 'linode/kernels/{kernelId}', {});
		}

		/**
		 * StackScripts List
		 * If the request is not authenticated, only public StackScripts are returned.
		 * For more information on StackScripts, please read our [StackScripts documentation](/docs/products/tools/stackscripts/).
		 * Get linode/stackscripts
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetStackScriptsReturn} A list of StackScripts available to the User, including private StackScripts owned by the User if the request is authenticated.
		 */
		GetStackScripts(page: number | null | undefined, page_size: number | null | undefined): Observable<GetStackScriptsReturn> {
			return this.http.get<GetStackScriptsReturn>(this.baseUri + 'linode/stackscripts?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * StackScript Create
		 * Creates a StackScript in your Account.
		 * Post linode/stackscripts
		 * @param {StackScript} requestBody The properties to set for the new StackScript.
		 * @return {StackScript} StackScript successfully created.
		 */
		AddStackScript(requestBody: StackScript): Observable<StackScript> {
			return this.http.post<StackScript>(this.baseUri + 'linode/stackscripts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * StackScript Delete
		 * Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.
		 * Delete linode/stackscripts/{stackscriptId}
		 * @return {string} StackScript was deleted.
		 */
		DeleteStackScript(): Observable<string> {
			return this.http.delete(this.baseUri + 'linode/stackscripts/{stackscriptId}', { responseType: 'text' });
		}

		/**
		 * StackScript View
		 * Returns all of the information about a specified StackScript, including the contents of the script.
		 * Get linode/stackscripts/{stackscriptId}
		 * @return {StackScript} A single StackScript.
		 */
		GetStackScript(): Observable<StackScript> {
			return this.http.get<StackScript>(this.baseUri + 'linode/stackscripts/{stackscriptId}', {});
		}

		/**
		 * StackScript Update
		 * Updates a StackScript.
		 * **Once a StackScript is made public, it cannot be made private.**
		 * Put linode/stackscripts/{stackscriptId}
		 * @param {StackScript} requestBody The fields to update.
		 * @return {StackScript} StackScript was successfully modified.
		 */
		UpdateStackScript(requestBody: StackScript): Observable<StackScript> {
			return this.http.put<StackScript>(this.baseUri + 'linode/stackscripts/{stackscriptId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Types List
		 * Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
		 * Get linode/types
		 * @return {GetLinodeTypesReturn} A collection of Linode Types.
		 */
		GetLinodeTypes(): Observable<GetLinodeTypesReturn> {
			return this.http.get<GetLinodeTypesReturn>(this.baseUri + 'linode/types', {});
		}

		/**
		 * Type View
		 * Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
		 * Get linode/types/{typeId}
		 * @return {LinodeType} A single Linode Type.
		 */
		GetLinodeType(): Observable<LinodeType> {
			return this.http.get<LinodeType>(this.baseUri + 'linode/types/{typeId}', {});
		}

		/**
		 * Kubernetes Clusters List
		 * Lists current Kubernetes clusters available on your account.
		 * Get lke/clusters
		 * @return {GetLKEClustersReturn} Returns an array of all Kubernetes clusters on your Account.
		 */
		GetLKEClusters(): Observable<GetLKEClustersReturn> {
			return this.http.get<GetLKEClustersReturn>(this.baseUri + 'lke/clusters', {});
		}

		/**
		 * Kubernetes Cluster Create
		 * Creates a Kubernetes cluster. The Kubernetes cluster will be created
		 * asynchronously. You can use the events system to determine when the
		 * Kubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the
		 * [Kubernetes API server endpoint](/docs/api/linode-kubernetes-engine-lke/#kubernetes-api-endpoints-list) and
		 * the [Kubeconfig file](/docs/api/linode-kubernetes-engine-lke/#kubeconfig-view) for the new cluster
		 * are ready.
		 * Post lke/clusters
		 * @param {CreateLKEClusterPostBody} requestBody Configuration for the Kubernetes cluster
		 * @return {LKECluster} Kubernetes cluster creation has started.
		 */
		CreateLKECluster(requestBody: CreateLKEClusterPostBody): Observable<LKECluster> {
			return this.http.post<LKECluster>(this.baseUri + 'lke/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Kubernetes Cluster Delete
		 * Deletes a Cluster you have permission to `read_write`.
		 * **Deleting a Cluster is a destructive action and cannot be undone.**
		 * Deleting a Cluster:
		 * - Deletes all Linodes in all pools within this Kubernetes cluster
		 * - Deletes all supporting Kubernetes services for this Kubernetes
		 * cluster (API server, etcd, etc)
		 * - Deletes all NodeBalancers created by this Kubernetes cluster
		 * - Does not delete any of the volumes created by this Kubernetes
		 * cluster
		 * Delete lke/clusters/{clusterId}
		 * @return {string} Delete successful
		 */
		DeleteLKECluster(): Observable<string> {
			return this.http.delete(this.baseUri + 'lke/clusters/{clusterId}', { responseType: 'text' });
		}

		/**
		 * Kubernetes Cluster View
		 * Get a specific Cluster by ID.
		 * Get lke/clusters/{clusterId}
		 * @return {LKECluster} Returns a single Kubernetes cluster.
		 */
		GetLKECluster(): Observable<LKECluster> {
			return this.http.get<LKECluster>(this.baseUri + 'lke/clusters/{clusterId}', {});
		}

		/**
		 * Kubernetes Cluster Update
		 * Updates a Kubernetes cluster.
		 * Put lke/clusters/{clusterId}
		 * @param {any} requestBody The fields to update the Kubernetes cluster.
		 * @return {any} Returns a single Kubernetes cluster.
		 */
		PutLKECluster(requestBody: any): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'lke/clusters/{clusterId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Kubernetes API Endpoints List
		 * List the Kubernetes API server endpoints for this cluster. Please note that it often takes 2-5 minutes before the endpoint is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).
		 * Get lke/clusters/{clusterId}/api-endpoints
		 * @return {GetLKEClusterAPIEndpointsReturn} Returns the Kubernetes API server endpoints for this cluster.
		 */
		GetLKEClusterAPIEndpoints(): Observable<GetLKEClusterAPIEndpointsReturn> {
			return this.http.get<GetLKEClusterAPIEndpointsReturn>(this.baseUri + 'lke/clusters/{clusterId}/api-endpoints', {});
		}

		/**
		 * Kubernetes Cluster Dashboard URL View
		 * Get a [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) access URL for this Cluster, which enables performance of administrative tasks through a web interface.
		 * Dashboards are installed for Clusters by default.
		 * To access the Cluster Dashboard login prompt, enter the URL in a web browser. Select either **Token** or **Kubeconfig** authentication, then select **Sign in**.
		 * For additional guidance on using the Cluster Dashboard, see the [Navigating the Cluster Dashboard](/docs/guides/using-the-kubernetes-dashboard-on-lke/#navigating-the-cluster-dashboard) section of our guide on [Using the Kubernetes Dashboard on LKE](/docs/guides/using-the-kubernetes-dashboard-on-lke/).
		 * Get lke/clusters/{clusterId}/dashboard
		 * @return {GetLKEClusterDashboardReturn} Returns a Kubernetes Cluster Dashboard URL.
		 */
		GetLKEClusterDashboard(): Observable<GetLKEClusterDashboardReturn> {
			return this.http.get<GetLKEClusterDashboardReturn>(this.baseUri + 'lke/clusters/{clusterId}/dashboard', {});
		}

		/**
		 * Kubeconfig Delete
		 * Delete and regenerate the Kubeconfig file for a Cluster.
		 * Delete lke/clusters/{clusterId}/kubeconfig
		 * @return {string} Kubeconfig file deleted and regenerated successfully.
		 */
		DeleteLKEClusterKubeconfig(): Observable<string> {
			return this.http.delete(this.baseUri + 'lke/clusters/{clusterId}/kubeconfig', { responseType: 'text' });
		}

		/**
		 * Kubeconfig View
		 * Get the Kubeconfig file for a Cluster. Please note that it often takes 2-5 minutes before
		 * the Kubeconfig file is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).
		 * Get lke/clusters/{clusterId}/kubeconfig
		 * @return {GetLKEClusterKubeconfigReturn} Returns the Base64-encoded Kubeconfig file for this Kubernetes cluster.
		 */
		GetLKEClusterKubeconfig(): Observable<GetLKEClusterKubeconfigReturn> {
			return this.http.get<GetLKEClusterKubeconfigReturn>(this.baseUri + 'lke/clusters/{clusterId}/kubeconfig', {});
		}

		/**
		 * Node Delete
		 * Deletes a specific Node from a Node Pool.
		 * **Deleting a Node is a destructive action and cannot be undone.**
		 * Deleting a Node will reduce the size of the Node Pool it belongs to.
		 * Delete lke/clusters/{clusterId}/nodes/{nodeId}
		 * @return {string} Delete successful
		 */
		DeleteLKEClusterNode(): Observable<string> {
			return this.http.delete(this.baseUri + 'lke/clusters/{clusterId}/nodes/{nodeId}', { responseType: 'text' });
		}

		/**
		 * Node View
		 * Returns the values for a specified node object.
		 * Get lke/clusters/{clusterId}/nodes/{nodeId}
		 * @return {GetLKEClusterNodeReturn} Returns the values of a node object in the form that it appears currently in the node pool array.
		 */
		GetLKEClusterNode(): Observable<GetLKEClusterNodeReturn> {
			return this.http.get<GetLKEClusterNodeReturn>(this.baseUri + 'lke/clusters/{clusterId}/nodes/{nodeId}', {});
		}

		/**
		 * Node Recycle
		 * Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted
		 * and replaced with a new Linode, which may take a few minutes. Replacement Nodes are
		 * installed with the latest available patch for the Cluster's Kubernetes Version.
		 * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
		 * Post lke/clusters/{clusterId}/nodes/{nodeId}/recycle
		 * @return {string} Recycle request succeeded and is in progress.
		 */
		PostLKEClusterNodeRecycle(): Observable<string> {
			return this.http.post(this.baseUri + 'lke/clusters/{clusterId}/nodes/{nodeId}/recycle', null, { responseType: 'text' });
		}

		/**
		 * Node Pools List
		 * Returns all active Node Pools on a Kubernetes cluster.
		 * Get lke/clusters/{clusterId}/pools
		 * @return {GetLKEClusterPoolsReturn} Returns an array of all Pools in this Kubernetes cluster.
		 */
		GetLKEClusterPools(): Observable<GetLKEClusterPoolsReturn> {
			return this.http.get<GetLKEClusterPoolsReturn>(this.baseUri + 'lke/clusters/{clusterId}/pools', {});
		}

		/**
		 * Node Pool Create
		 * Creates a new Node Pool for the designated Kubernetes cluster.
		 * Post lke/clusters/{clusterId}/pools
		 * @param {string} requestBody Configuration for the Node Pool
		 * @return {LKENodePool} Node Pool has been created.
		 */
		PostLKEClusterPools(requestBody: string): Observable<LKENodePool> {
			return this.http.post<LKENodePool>(this.baseUri + 'lke/clusters/{clusterId}/pools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Node Pool Delete
		 * Delete a specific Node Pool from a Kubernetes cluster.
		 * **Deleting a Node Pool is a destructive action and cannot be undone.**
		 * Deleting a Node Pool will delete all Linodes within that Pool.
		 * Delete lke/clusters/{clusterId}/pools/{poolId}
		 * @return {string} Delete successful
		 */
		DeleteLKENodePool(): Observable<string> {
			return this.http.delete(this.baseUri + 'lke/clusters/{clusterId}/pools/{poolId}', { responseType: 'text' });
		}

		/**
		 * Node Pool View
		 * Get a specific Node Pool by ID.
		 * Get lke/clusters/{clusterId}/pools/{poolId}
		 * @return {LKENodePool} Returns the requested Node Pool.
		 */
		GetLKENodePool(): Observable<LKENodePool> {
			return this.http.get<LKENodePool>(this.baseUri + 'lke/clusters/{clusterId}/pools/{poolId}', {});
		}

		/**
		 * Node Pool Update
		 * Updates a Node Pool's count and autoscaler configuration.
		 * Linodes will be created or deleted to match changes to the Node Pool's count.
		 * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
		 * Put lke/clusters/{clusterId}/pools/{poolId}
		 * @param {any} requestBody The fields to update
		 * @return {LKENodePool} Node Pool was successfully modified.
		 */
		PutLKENodePool(requestBody: any): Observable<LKENodePool> {
			return this.http.put<LKENodePool>(this.baseUri + 'lke/clusters/{clusterId}/pools/{poolId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Node Pool Recycle
		 * Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted
		 * and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
		 * installed with the latest available patch for the Cluster's Kubernetes Version.
		 * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
		 * Post lke/clusters/{clusterId}/pools/{poolId}/recycle
		 * @return {string} Recycle request succeeded and is in progress.
		 */
		PostLKEClusterPoolRecycle(): Observable<string> {
			return this.http.post(this.baseUri + 'lke/clusters/{clusterId}/pools/{poolId}/recycle', null, { responseType: 'text' });
		}

		/**
		 * Cluster Nodes Recycle
		 * Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted
		 * and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
		 * installed with the latest available [patch version](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/release/versioning.md#kubernetes-release-versioning) for the Cluster's current Kubernetes minor release.
		 * **Any local storage on deleted Linodes (such as "hostPath" and "emptyDir" volumes, or "local" PersistentVolumes) will be erased.**
		 * Post lke/clusters/{clusterId}/recycle
		 * @return {string} Recycle request succeeded and is in progress.
		 */
		PostLKEClusterRecycle(): Observable<string> {
			return this.http.post(this.baseUri + 'lke/clusters/{clusterId}/recycle', null, { responseType: 'text' });
		}

		/**
		 * Kubernetes Cluster Regenerate
		 * Regenerate the Kubeconfig file and/or the service account token for a Cluster.
		 * This is a helper command that allows performing both the [Kubeconfig Delete](#kubeconfig-delete) and the [Service Token Delete](#service-token-delete) actions with a single request.
		 * When using this command, at least one of `kubeconfig` or `servicetoken` is required.
		 * **Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.
		 * Post lke/clusters/{clusterId}/regenerate
		 * @param {any} requestBody The Kubernetes Cluster Regenerate request object.
		 * @return {string} Regenerate request successful.
		 */
		PostLKEClusterRegenerate(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'lke/clusters/{clusterId}/regenerate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Service Token Delete
		 * Delete and regenerate the service account token for a Cluster.
		 * **Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.
		 * Delete lke/clusters/{clusterId}/servicetoken
		 * @return {string} Service token deleted and regenerated successfully.
		 */
		PostLKECServiceTokenDelete(): Observable<string> {
			return this.http.delete(this.baseUri + 'lke/clusters/{clusterId}/servicetoken', { responseType: 'text' });
		}

		/**
		 * Kubernetes Versions List
		 * List the Kubernetes versions available for deployment to a Kubernetes cluster.
		 * Get lke/versions
		 * @return {GetLKEVersionsReturn} Returns a list of Kubernetes versions available for deployment to a Kubernetes cluster.
		 */
		GetLKEVersions(): Observable<GetLKEVersionsReturn> {
			return this.http.get<GetLKEVersionsReturn>(this.baseUri + 'lke/versions', {});
		}

		/**
		 * Kubernetes Version View
		 * View a Kubernetes version available for deployment to a Kubernetes cluster.
		 * Get lke/versions/{version}
		 * @return {LKEVersion} Returns a Kubernetes version object that is available for deployment to a Kubernetes cluster.
		 */
		GetLKEVersion(): Observable<LKEVersion> {
			return this.http.get<LKEVersion>(this.baseUri + 'lke/versions/{version}', {});
		}

		/**
		 * Longview Clients List
		 * Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.
		 * Get longview/clients
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetLongviewClientsReturn} A paginated list of Longview Clients.
		 */
		GetLongviewClients(page: number | null | undefined, page_size: number | null | undefined): Observable<GetLongviewClientsReturn> {
			return this.http.get<GetLongviewClientsReturn>(this.baseUri + 'longview/clients?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Longview Client Create
		 * Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.
		 * Post longview/clients
		 * @param {LongviewClient} requestBody Information about the LongviewClient to create.
		 * @return {LongviewClient} Longview Client created successfully.
		 */
		CreateLongviewClient(requestBody: LongviewClient): Observable<LongviewClient> {
			return this.http.post<LongviewClient>(this.baseUri + 'longview/clients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Longview Client Delete
		 * Deletes a Longview Client from your Account.
		 * **All information stored for this client will be lost.**
		 * This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.
		 * Delete longview/clients/{clientId}
		 * @return {string} Longview Client deleted successfully.
		 */
		DeleteLongviewClient(): Observable<string> {
			return this.http.delete(this.baseUri + 'longview/clients/{clientId}', { responseType: 'text' });
		}

		/**
		 * Longview Client View
		 * Returns a single Longview Client you can access.
		 * Get longview/clients/{clientId}
		 * @return {LongviewClient} The requested Longview Client.
		 */
		GetLongviewClient(): Observable<LongviewClient> {
			return this.http.get<LongviewClient>(this.baseUri + 'longview/clients/{clientId}', {});
		}

		/**
		 * Longview Client Update
		 * Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.
		 * Put longview/clients/{clientId}
		 * @param {LongviewClient} requestBody The fields to update.
		 * @return {LongviewClient} Longview Client updated successfully.
		 */
		UpdateLongviewClient(requestBody: LongviewClient): Observable<LongviewClient> {
			return this.http.put<LongviewClient>(this.baseUri + 'longview/clients/{clientId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Longview Plan View
		 * Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `{}` if your current plan is Longview Free.
		 * You must have at least one of the following `global` [User Grants](/docs/api/account/#users-grants-view) in order to access this endpoint:
		 * - `"account_access": read_write`
		 * - `"account_access": read_only`
		 * - `"longview_subscription": true`
		 * - `"add_longview": true`
		 * To update your subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).
		 * Get longview/plan
		 * @return {LongviewSubscription} The Longview plan details for this account.
		 */
		GetLongviewPlan(): Observable<LongviewSubscription> {
			return this.http.get<LongviewSubscription>(this.baseUri + 'longview/plan', {});
		}

		/**
		 * Longview Plan Update
		 * Update your Longview plan to that of the given subcription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `{}` if the updated plan is Longview Free.
		 * You must have `"longview_subscription": true` configured as a `global` [User Grant](/docs/api/account/#users-grants-view) in order to access this endpoint.
		 * You can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details, including `id`'s, of each plan.
		 * Put longview/plan
		 * @param {LongviewPlan} requestBody Update your Longview subscription plan.
		 * @return {LongviewSubscription} The updated Longview plan details for this account.
		 */
		UpdateLongviewPlan(requestBody: LongviewPlan): Observable<LongviewSubscription> {
			return this.http.put<LongviewSubscription>(this.baseUri + 'longview/plan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Longview Subscriptions List
		 * Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.
		 * Get longview/subscriptions
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetLongviewSubscriptionsReturn} A paginated list of Longview Subscriptions.
		 */
		GetLongviewSubscriptions(page: number | null | undefined, page_size: number | null | undefined): Observable<GetLongviewSubscriptionsReturn> {
			return this.http.get<GetLongviewSubscriptionsReturn>(this.baseUri + 'longview/subscriptions?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Longview Subscription View
		 * Get the Longview plan details as a single `LongviewSubscription` object for the provided subscription ID. This is a public endpoint and requires no authentication.
		 * Get longview/subscriptions/{subscriptionId}
		 * @return {LongviewSubscription} The requested Longview Subscription details.
		 */
		GetLongviewSubscription(): Observable<LongviewSubscription> {
			return this.http.get<LongviewSubscription>(this.baseUri + 'longview/subscriptions/{subscriptionId}', {});
		}

		/**
		 * Managed Contacts List
		 * Returns a paginated list of Managed Contacts on your Account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/contacts
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetManagedContactsReturn} A paginated list of ManagedContacts
		 */
		GetManagedContacts(page: number | null | undefined, page_size: number | null | undefined): Observable<GetManagedContactsReturn> {
			return this.http.get<GetManagedContactsReturn>(this.baseUri + 'managed/contacts?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed Contact Create
		 * Creates a Managed Contact.  A Managed Contact is someone Linode
		 * special forces can contact in the course of attempting to resolve an issue
		 * with a Managed Service.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Post managed/contacts
		 * @param {ManagedContact} requestBody Information about the contact to create.
		 * @return {ManagedContact} Contact created.
		 */
		CreateManagedContact(requestBody: ManagedContact): Observable<ManagedContact> {
			return this.http.post<ManagedContact>(this.baseUri + 'managed/contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed Contact Delete
		 * Deletes a Managed Contact.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Delete managed/contacts/{contactId}
		 * @return {string} Contact deleted successfully.
		 */
		DeleteManagedContact(): Observable<string> {
			return this.http.delete(this.baseUri + 'managed/contacts/{contactId}', { responseType: 'text' });
		}

		/**
		 * Managed Contact View
		 * Returns a single Managed Contact.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/contacts/{contactId}
		 * @return {ManagedContact} The requested Managed Contact.
		 */
		GetManagedContact(): Observable<ManagedContact> {
			return this.http.get<ManagedContact>(this.baseUri + 'managed/contacts/{contactId}', {});
		}

		/**
		 * Managed Contact Update
		 * Updates information about a Managed Contact.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Put managed/contacts/{contactId}
		 * @param {ManagedContact} requestBody The fields to update.
		 * @return {ManagedContact} Contact updated successfully.
		 */
		UpdateManagedContact(requestBody: ManagedContact): Observable<ManagedContact> {
			return this.http.put<ManagedContact>(this.baseUri + 'managed/contacts/{contactId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed Credentials List
		 * Returns a paginated list of Managed Credentials on your Account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/credentials
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetManagedCredentialsReturn} A paginated list of ManagedCredentials
		 */
		GetManagedCredentials(page: number | null | undefined, page_size: number | null | undefined): Observable<GetManagedCredentialsReturn> {
			return this.http.get<GetManagedCredentialsReturn>(this.baseUri + 'managed/credentials?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed Credential Create
		 * Creates a Managed Credential. A Managed Credential is stored securely
		 * to allow Linode special forces to access your Managed Services and resolve
		 * issues.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Post managed/credentials
		 * @param {ManagedCredential} requestBody Information about the Credential to create.
		 * @return {ManagedCredential} Credential created.
		 */
		CreateManagedCredential(requestBody: ManagedCredential): Observable<ManagedCredential> {
			return this.http.post<ManagedCredential>(this.baseUri + 'managed/credentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed SSH Key View
		 * Returns the unique SSH public key assigned to your Linode account's
		 * Managed service. If you [add this public key](/docs/guides/linode-managed/#adding-the-public-key) to a Linode on your account,
		 * Linode special forces will be able to log in to the Linode with this key
		 * when attempting to resolve issues.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/credentials/sshkey
		 * @return {ViewManagedSSHKeyReturn} The requested Managed SSH public key.
		 */
		ViewManagedSSHKey(): Observable<ViewManagedSSHKeyReturn> {
			return this.http.get<ViewManagedSSHKeyReturn>(this.baseUri + 'managed/credentials/sshkey', {});
		}

		/**
		 * Managed Credential View
		 * Returns a single Managed Credential.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/credentials/{credentialId}
		 * @return {ManagedCredential} The requested Managed Credential.
		 */
		GetManagedCredential(): Observable<ManagedCredential> {
			return this.http.get<ManagedCredential>(this.baseUri + 'managed/credentials/{credentialId}', {});
		}

		/**
		 * Managed Credential Update
		 * Updates the label of a Managed Credential. This endpoint does not update the username and password for a Managed Credential. To do this, use the Managed Credential Username and Password Update ([POST /managed/credentials/{credentialId}/update](/docs/api/managed/#managed-credential-username-and-password-update)) endpoint instead.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Put managed/credentials/{credentialId}
		 * @param {ManagedCredential} requestBody The fields to update.
		 * @return {ManagedCredential} Credential updated successfully.
		 */
		UpdateManagedCredential(requestBody: ManagedCredential): Observable<ManagedCredential> {
			return this.http.put<ManagedCredential>(this.baseUri + 'managed/credentials/{credentialId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed Credential Delete
		 * Deletes a Managed Credential.  Linode special forces will no longer
		 * have access to this Credential when attempting to resolve issues.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Post managed/credentials/{credentialId}/revoke
		 * @return {string} Credential deleted successfully.
		 */
		DeleteManagedCredential(): Observable<string> {
			return this.http.post(this.baseUri + 'managed/credentials/{credentialId}/revoke', null, { responseType: 'text' });
		}

		/**
		 * Managed Credential Username and Password Update
		 * Updates the username and password for a Managed Credential.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Post managed/credentials/{credentialId}/update
		 * @param {any} requestBody The new username and password to assign to the Managed Credential.
		 * @return {string} Credential username and password updated.
		 */
		UpdateManagedCredentialUsernamePassword(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'managed/credentials/{credentialId}/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Managed Issues List
		 * Returns a paginated list of recent and ongoing issues detected on your
		 * Managed Services.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/issues
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetManagedIssuesReturn} A paginated list of open or ongoing Managed Issues.
		 */
		GetManagedIssues(page: number | null | undefined, page_size: number | null | undefined): Observable<GetManagedIssuesReturn> {
			return this.http.get<GetManagedIssuesReturn>(this.baseUri + 'managed/issues?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Managed Issue View
		 * Returns a single Issue that is impacting or did impact one of your
		 * Managed Services.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/issues/{issueId}
		 * @return {ManagedIssue} The requested issue.
		 */
		GetManagedIssue(): Observable<ManagedIssue> {
			return this.http.get<ManagedIssue>(this.baseUri + 'managed/issues/{issueId}', {});
		}

		/**
		 * Managed Linode Settings List
		 * Returns a paginated list of Managed Settings for your Linodes. There will
		 * be one entry per Linode on your Account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/linode-settings
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetManagedLinodeSettingsReturn} A paginated list of Managed settings for your Linodes.
		 */
		GetManagedLinodeSettings(page: number | null | undefined, page_size: number | null | undefined): Observable<GetManagedLinodeSettingsReturn> {
			return this.http.get<GetManagedLinodeSettingsReturn>(this.baseUri + 'managed/linode-settings?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Linode's Managed Settings View
		 * Returns a single Linode's Managed settings.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/linode-settings/{linodeId}
		 * @return {ManagedLinodeSettings} The requested Linode's Managed settings.
		 */
		GetManagedLinodeSetting(): Observable<ManagedLinodeSettings> {
			return this.http.get<ManagedLinodeSettings>(this.baseUri + 'managed/linode-settings/{linodeId}', {});
		}

		/**
		 * Linode's Managed Settings Update
		 * Updates a single Linode's Managed settings.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Put managed/linode-settings/{linodeId}
		 * @param {ManagedLinodeSettings} requestBody The settings to update.
		 * @return {ManagedLinodeSettings} Settings updated successfully.
		 */
		UpdateManagedLinodeSetting(requestBody: ManagedLinodeSettings): Observable<ManagedLinodeSettings> {
			return this.http.put<ManagedLinodeSettings>(this.baseUri + 'managed/linode-settings/{linodeId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed Services List
		 * Returns a paginated list of Managed Services on your Account. These
		 * are the services Linode Managed is monitoring and will report and attempt
		 * to resolve issues with.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/services
		 * @return {GetManagedServicesReturn} A paginated list of Managed Services
		 */
		GetManagedServices(): Observable<GetManagedServicesReturn> {
			return this.http.get<GetManagedServicesReturn>(this.baseUri + 'managed/services', {});
		}

		/**
		 * Managed Service Create
		 * Creates a Managed Service. Linode Managed will begin monitoring this
		 * service and reporting and attempting to resolve any Issues.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Post managed/services
		 * @param {ManagedService} requestBody Information about the service to monitor.
		 * @return {ManagedService} Service created.
		 */
		CreateManagedService(requestBody: ManagedService): Observable<ManagedService> {
			return this.http.post<ManagedService>(this.baseUri + 'managed/services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed Service Delete
		 * Deletes a Managed Service.  This service will no longer be monitored by
		 * Linode Managed.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Delete managed/services/{serviceId}
		 * @return {string} Service deleted successfully.
		 */
		DeleteManagedService(): Observable<string> {
			return this.http.delete(this.baseUri + 'managed/services/{serviceId}', { responseType: 'text' });
		}

		/**
		 * Managed Service View
		 * Returns information about a single Managed Service on your Account.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/services/{serviceId}
		 * @return {ManagedService} The requested Managed Service.
		 */
		GetManagedService(): Observable<ManagedService> {
			return this.http.get<ManagedService>(this.baseUri + 'managed/services/{serviceId}', {});
		}

		/**
		 * Managed Service Update
		 * Updates information about a Managed Service.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Put managed/services/{serviceId}
		 * @param {ManagedService} requestBody The fields to update.
		 * @return {ManagedService} Service updated successfully.
		 */
		UpdateManagedService(requestBody: ManagedService): Observable<ManagedService> {
			return this.http.put<ManagedService>(this.baseUri + 'managed/services/{serviceId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Managed Service Disable
		 * Temporarily disables monitoring of a Managed Service.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Post managed/services/{serviceId}/disable
		 * @return {ManagedService} Service disabled.
		 */
		DisableManagedService(): Observable<ManagedService> {
			return this.http.post<ManagedService>(this.baseUri + 'managed/services/{serviceId}/disable', null, {});
		}

		/**
		 * Managed Service Enable
		 * Enables monitoring of a Managed Service.
		 * This command can only be accessed by the unrestricted users of an account.
		 * Post managed/services/{serviceId}/enable
		 * @return {ManagedService} Service enabled.
		 */
		EnableManagedService(): Observable<ManagedService> {
			return this.http.post<ManagedService>(this.baseUri + 'managed/services/{serviceId}/enable', null, {});
		}

		/**
		 * Managed Stats List
		 * Returns a list of Managed Stats on your Account in the form of x and y data points.
		 * You can use these data points to plot your own graph visualizations. These stats
		 * reflect the last 24 hours of combined usage across all managed Linodes on your account
		 * giving you a high-level snapshot of data for the following:
		 * * cpu
		 * * disk
		 * * swap
		 * * network in
		 * * network out
		 * This command can only be accessed by the unrestricted users of an account.
		 * Get managed/stats
		 * @return {GetManagedStatsReturn} A list of Managed Stats from the last 24 hours.
		 */
		GetManagedStats(): Observable<GetManagedStatsReturn> {
			return this.http.get<GetManagedStatsReturn>(this.baseUri + 'managed/stats', {});
		}

		/**
		 * Firewalls List
		 * Returns a paginated list of accessible Firewalls.
		 * Get networking/firewalls
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetFirewallsReturn} Returns an array of Firewalls.
		 */
		GetFirewalls(page: number | null | undefined, page_size: number | null | undefined): Observable<GetFirewallsReturn> {
			return this.http.get<GetFirewallsReturn>(this.baseUri + 'networking/firewalls?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Firewall Create
		 * Creates a Firewall to filter network traffic.
		 * * Use the `rules` property to create inbound and outbound access rules.
		 * * Use the `devices` property to assign the Firewall to a service and apply its Rules to the device. Requires `read_write` [User's Grants](/docs/api/account/#users-grants-view) to the device.
		 * Currently, Firewalls can only be assigned to Linode instances.
		 * * A Firewall can be assigned to multiple Linode instances at a time.
		 * * A Linode instance can have one active, assigned Firewall at a time.
		 * Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
		 * * A `firewall_create` Event is generated when this endpoint returns successfully.
		 * Post networking/firewalls
		 * @param {Firewall} requestBody Creates a Firewall object that can be applied to a Linode service to filter the service's network traffic.
		 * @return {Firewall} Returns information about the created Firewall.
		 */
		CreateFirewalls(requestBody: Firewall): Observable<Firewall> {
			return this.http.post<Firewall>(this.baseUri + 'networking/firewalls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Firewall Delete
		 * Delete a Firewall resource by its ID. This will remove all of the Firewall's Rules
		 * from any Linode services that the Firewall was assigned to.
		 * A `firewall_delete` Event is generated when this endpoint returns successfully.
		 * Delete networking/firewalls/{firewallId}
		 * @return {string} Delete Successful.
		 */
		DeleteFirewall(): Observable<string> {
			return this.http.delete(this.baseUri + 'networking/firewalls/{firewallId}', { responseType: 'text' });
		}

		/**
		 * Firewall View
		 * Get a specific Firewall resource by its ID. The Firewall's Devices will not be
		 * returned in the response. Instead, use the
		 * [List Firewall Devices](/docs/api/networking/#firewall-devices-list)
		 * endpoint to review them.
		 * Get networking/firewalls/{firewallId}
		 * @return {Firewall} Returns information about this Firewall.
		 */
		GetFirewall(): Observable<Firewall> {
			return this.http.get<Firewall>(this.baseUri + 'networking/firewalls/{firewallId}', {});
		}

		/**
		 * Firewall Update
		 * Updates information for a Firewall. Some parts of a Firewall's configuration cannot
		 * be manipulated by this endpoint:
		 * - A Firewall's Devices cannot be set with this endpoint. Instead, use the
		 * [Create Firewall Device](/docs/api/networking/#firewall-device-create)
		 * and [Delete Firewall Device](/docs/api/networking/#firewall-device-delete)
		 * endpoints to assign and remove this Firewall from Linode services.
		 * - A Firewall's Rules cannot be changed with this endpoint. Instead, use the
		 * [Update Firewall Rules](/docs/api/networking/#firewall-rules-update)
		 * endpoint to update your Rules.
		 * - A Firewall's status can be set to `enabled` or `disabled` by this endpoint, but it cannot be
		 * set to `deleted`. Instead, use the
		 * [Delete Firewall](/docs/api/networking/#firewall-delete)
		 * endpoint to delete a Firewall.
		 * If a Firewall's status is changed with this endpoint, a corresponding `firewall_enable` or
		 * `firewall_disable` Event will be generated.
		 * Put networking/firewalls/{firewallId}
		 * @param {UpdateFirewallPutBody} requestBody The Firewall information to update.
		 * @return {Firewall} Firewall updated successfully.
		 */
		UpdateFirewall(requestBody: UpdateFirewallPutBody): Observable<Firewall> {
			return this.http.put<Firewall>(this.baseUri + 'networking/firewalls/{firewallId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Firewall Devices List
		 * Returns a paginated list of a Firewall's Devices. A Firewall Device assigns a
		 * Firewall to a Linode service (referred to as the Device's `entity`). Currently,
		 * only Devices with an entity of type `linode` are accepted.
		 * Get networking/firewalls/{firewallId}/devices
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetFirewallDevicesReturn} A paginated list of Firewall Devices
		 */
		GetFirewallDevices(page: number | null | undefined, page_size: number | null | undefined): Observable<GetFirewallDevicesReturn> {
			return this.http.get<GetFirewallDevicesReturn>(this.baseUri + 'networking/firewalls/{firewallId}/devices?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Firewall Device Create
		 * Creates a Firewall Device, which assigns a Firewall to a service (referred to
		 * as the Device's `entity`) and applies the Firewall's Rules to the device.
		 * * Currently, only Devices with an entity of type `linode` are accepted.
		 * * A Firewall can be assigned to multiple Linode instances at a time.
		 * * A Linode instance can have one active, assigned Firewall at a time.
		 * Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
		 * * A `firewall_device_add` Event is generated when the Firewall Device is added successfully.
		 * Post networking/firewalls/{firewallId}/devices
		 * @return {FirewallDevices} Returns information about the created Firewall Device.
		 */
		CreateFirewallDevice(requestBody: string): Observable<FirewallDevices> {
			return this.http.post<FirewallDevices>(this.baseUri + 'networking/firewalls/{firewallId}/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Firewall Device Delete
		 * Removes a Firewall Device, which removes a Firewall from the Linode service it was
		 * assigned to by the Device. This will remove all of the Firewall's Rules from the Linode
		 * service. If any other Firewalls have been assigned to the Linode service, then those Rules
		 * will remain in effect.
		 * A `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.
		 * Delete networking/firewalls/{firewallId}/devices/{deviceId}
		 * @return {string} Delete Successful.
		 */
		DeleteFirewallDevice(): Observable<string> {
			return this.http.delete(this.baseUri + 'networking/firewalls/{firewallId}/devices/{deviceId}', { responseType: 'text' });
		}

		/**
		 * Firewall Device View
		 * Returns information for a Firewall Device, which assigns a Firewall
		 * to a Linode service (referred to as the Device's `entity`). Currently,
		 * only Devices with an entity of type `linode` are accepted.
		 * Get networking/firewalls/{firewallId}/devices/{deviceId}
		 * @return {FirewallDevices} The requested Firewall Device.
		 */
		GetFirewallDevice(): Observable<FirewallDevices> {
			return this.http.get<FirewallDevices>(this.baseUri + 'networking/firewalls/{firewallId}/devices/{deviceId}', {});
		}

		/**
		 * Firewall Rules List
		 * Returns the inbound and outbound Rules for a Firewall.
		 * Get networking/firewalls/{firewallId}/rules
		 * @return {Firewall} The requested Firewall Rules.
		 */
		GetFirewallRules(): Observable<Firewall> {
			return this.http.get<Firewall>(this.baseUri + 'networking/firewalls/{firewallId}/rules', {});
		}

		/**
		 * Firewall Rules Update
		 * Updates the inbound and outbound Rules for a Firewall.
		 * **Note:** This command replaces all of a Firewall's `inbound` and/or `outbound` rulesets with the values specified in your request.
		 * Put networking/firewalls/{firewallId}/rules
		 * @param {Firewall} requestBody The Firewall Rules information to update.
		 * @return {Firewall} Firewall Rules updated successfully.
		 */
		UpdateFirewallRules(requestBody: Firewall): Observable<Firewall> {
			return this.http.put<Firewall>(this.baseUri + 'networking/firewalls/{firewallId}/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * IP Addresses List
		 * Returns a paginated list of IP Addresses on your Account, excluding private addresses.
		 * Get networking/ips
		 * @return {GetIPsReturn} A paginated list of IP Addresses.
		 */
		GetIPs(): Observable<GetIPsReturn> {
			return this.http.get<GetIPsReturn>(this.baseUri + 'networking/ips', {});
		}

		/**
		 * IP Address Allocate
		 * Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](/docs/api/support/#support-ticket-open) requesting additional addresses before attempting allocation.
		 * Post networking/ips
		 * @param {any} requestBody Information about the address you are creating.
		 * @return {IPAddress} IP Address allocated successfully.
		 */
		AllocateIP(requestBody: any): Observable<IPAddress> {
			return this.http.post<IPAddress>(this.baseUri + 'networking/ips', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * IP Addresses Assign
		 * Assign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.
		 * The following restrictions apply:
		 * * All Linodes involved must have at least one public IPv4 address after assignment.
		 * * Linodes may have no more than one assigned private IPv4 address.
		 * * Linodes may have no more than one assigned IPv6 range.
		 * [Open a Support Ticket](/docs/api/support/#support-ticket-open) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.
		 * **Note**: Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values. To view and configure Managed Linode SSH settings, use the following commands:
		 * * **Linode's Managed Settings View** ([GET /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-view))
		 * * **Linode's Managed Settings Update** ([PUT /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-update))
		 * Post networking/ips/assign
		 * @param {IPAddressesAssignRequest} requestBody Information about what IPv4 address or IPv6 range to assign, and to which Linode.
		 * @return {string} All assignments completed successfully.
		 */
		AssignIPs(requestBody: IPAddressesAssignRequest): Observable<string> {
			return this.http.post(this.baseUri + 'networking/ips/assign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * IP Addresses Share
		 * Configure shared IPs.
		 * IP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.
		 * IP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.
		 * Post networking/ips/share
		 * @param {IPAddressesShareRequest} requestBody Information about what IPs to share with which Linode.
		 * @return {string} IP Address sharing successful.
		 */
		ShareIPs(requestBody: IPAddressesShareRequest): Observable<string> {
			return this.http.post(this.baseUri + 'networking/ips/share', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * IP Address View
		 * Returns information about a single IP Address on your Account.
		 * Get networking/ips/{address}
		 * @return {IPAddress} The requested IP Address.
		 */
		GetIP(): Observable<IPAddress> {
			return this.http.get<IPAddress>(this.baseUri + 'networking/ips/{address}', {});
		}

		/**
		 * IP Address RDNS Update
		 * Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _ip.linodeusercontent.com_ RDNS value.
		 * Put networking/ips/{address}
		 * @param {UpdateIPPutBody} requestBody The information to update.
		 * @return {IPAddress} RDNS set successfully
		 */
		UpdateIP(requestBody: UpdateIPPutBody): Observable<IPAddress> {
			return this.http.put<IPAddress>(this.baseUri + 'networking/ips/{address}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Linodes Assign IPv4s
		 * This command is equivalent to **IP Addresses Assign** ([POST /networking/ips/assign](#ip-addresses-assign)).
		 * Assign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.
		 * The following restrictions apply:
		 * * All Linodes involved must have at least one public IPv4 address after assignment.
		 * * Linodes may have no more than one assigned private IPv4 address.
		 * * Linodes may have no more than one assigned IPv6 range.
		 * [Open a Support Ticket](/docs/api/support/#support-ticket-open) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.
		 * **Note**: Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values. To view and configure Managed Linode SSH settings, use the following commands:
		 * * **Linode's Managed Settings View** ([GET /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-view))
		 * * **Linode's Managed Settings Update** ([PUT /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-update))
		 * Post networking/ipv4/assign
		 * @param {IPAddressesAssignRequest} requestBody Information about what IPv4 address to assign, and to which Linode.
		 * @return {string} All assignments completed successfully.
		 */
		AssignIPv4s(requestBody: IPAddressesAssignRequest): Observable<string> {
			return this.http.post(this.baseUri + 'networking/ipv4/assign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * IPv4 Sharing Configure
		 * This command is equivalent to **IP Addresses Share** ([POST /networking/ips/share](#ip-addresses-share)).
		 * Configure shared IPs.
		 * IP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.
		 * IP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.
		 * Post networking/ipv4/share
		 * @param {IPAddressesShareRequest} requestBody Information about what IPs to share with which Linode.
		 * @return {string} Sharing configured successfully.
		 */
		ShareIPv4s(requestBody: IPAddressesShareRequest): Observable<string> {
			return this.http.post(this.baseUri + 'networking/ipv4/share', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * IPv6 Pools List
		 * Displays the IPv6 pools on your Account. A pool of IPv6 addresses are routed to all of your Linodes in a single [Region](/docs/api/regions/#regions-list). Any Linode on your Account may bring up any address in this pool at any time, with no external configuration required.
		 * Get networking/ipv6/pools
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetIPv6PoolsReturn} The IPv6 pools on your Account.
		 */
		GetIPv6Pools(page: number | null | undefined, page_size: number | null | undefined): Observable<GetIPv6PoolsReturn> {
			return this.http.get<GetIPv6PoolsReturn>(this.baseUri + 'networking/ipv6/pools?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * IPv6 Ranges List
		 * Displays the IPv6 ranges on your Account.
		 * * An IPv6 range is a `/64` or `/54` block of IPv6 addresses routed to a single Linode in a given [Region](/docs/api/regions/#regions-list).
		 * * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.
		 * * Access the IPv6 Range Create ([POST /networking/ipv6/ranges](/docs/api/networking/#ipv6-range-create)) endpoint to add a `/64` or `/56` block of IPv6 addresses to your account.
		 * Get networking/ipv6/ranges
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetIPv6RangesReturn} The IPv6 ranges on your Account.
		 */
		GetIPv6Ranges(page: number | null | undefined, page_size: number | null | undefined): Observable<GetIPv6RangesReturn> {
			return this.http.get<GetIPv6RangesReturn>(this.baseUri + 'networking/ipv6/ranges?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * IPv6 Range Create
		 * Creates an IPv6 Range and assigns it based on the provided Linode or route target IPv6 SLAAC address. See the `ipv6` property when accessing the Linode View ([GET /linode/instances/{linodeId}](/docs/api/linode-instances/#linode-view)) endpoint to view a Linode's IPv6 SLAAC address.
		 * * Either `linode_id` or `route_target` is required in a request.
		 * * `linode_id` and `route_target` are mutually exclusive. Submitting values for both properties in a request results in an error.
		 * * Upon a successful request, an IPv6 range is created in the [Region](/docs/api/regions/#regions-list) that corresponds to the provided `linode_id` or `route_target`.
		 * * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.
		 * * Access the IP Addresses Assign ([POST /networking/ips/assign](/docs/api/networking/#ip-addresses-assign)) endpoint to re-assign IPv6 Ranges to your Linodes.
		 * **Note**: The following restrictions apply:
		 * * A Linode can only have one IPv6 range targeting its SLAAC address.
		 * * An account can only have one IPv6 range in each [Region](/docs/api/regions/#regions-list).
		 * * [Open a Support Ticket](/docs/api/support/#support-ticket-open) to request expansion of these restrictions.
		 * Post networking/ipv6/ranges
		 * @param {any} requestBody Information about the IPv6 range to create.
		 * @return {PostIPv6RangeReturn} IPv6 range created successfully.
		 */
		PostIPv6Range(requestBody: any): Observable<PostIPv6RangeReturn> {
			return this.http.post<PostIPv6RangeReturn>(this.baseUri + 'networking/ipv6/ranges', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * IPv6 Range Delete
		 * Removes this IPv6 range from your account and disconnects the range from any assigned Linodes.
		 * **Note:** Shared IPv6 ranges cannot be deleted at this time. Please contact Customer Support for assistance.
		 * Delete networking/ipv6/ranges/{range}
		 * @return {string} IPv6 Range deleted.
		 */
		DeleteIPv6Range(): Observable<string> {
			return this.http.delete(this.baseUri + 'networking/ipv6/ranges/{range}', { responseType: 'text' });
		}

		/**
		 * IPv6 Range View
		 * View IPv6 range information.
		 * Get networking/ipv6/ranges/{range}
		 * @return {IPv6RangeBGP} Returns IPv6 range information.
		 */
		GetIPv6Range(): Observable<IPv6RangeBGP> {
			return this.http.get<IPv6RangeBGP>(this.baseUri + 'networking/ipv6/ranges/{range}', {});
		}

		/**
		 * VLANs List
		 * Returns a list of all Virtual Local Area Networks (VLANs) on your Account. VLANs provide
		 * a mechanism for secure communication between two or more Linodes that are assigned to the
		 * same VLAN and are both within the same Layer 2 broadcast domain.
		 * VLANs are created and attached to Linodes by using the `interfaces` property for the following endpoints:
		 * - Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))
		 * - Configuration Profile Create ([POST /linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profile-create))
		 * - Configuration Profile Update ([PUT /linode/instances/{linodeId}/configs/{configId}](/docs/api/linode-instances/#configuration-profile-update))
		 * There are several ways to detach a VLAN from a Linode:
		 * - [Update](/docs/api/linode-instances/#configuration-profile-update) the active Configuration Profile to remove the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode.
		 * - [Create](/docs/api/linode-instances/#configuration-profile-create) a new Configuration Profile without the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode into the new Configuration Profile.
		 * - [Delete](/docs/api/linode-instances/#linode-delete) the Linode.
		 * **Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.
		 * If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,
		 * the migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,
		 * you will be prompted to select a different data center or contact support.
		 * **Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) to view additional specifications and limitations.
		 * Get networking/vlans
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetVLANsReturn} The VLANs available on this Account.
		 */
		GetVLANs(page: number | null | undefined, page_size: number | null | undefined): Observable<GetVLANsReturn> {
			return this.http.get<GetVLANsReturn>(this.baseUri + 'networking/vlans?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * NodeBalancers List
		 * Returns a paginated list of NodeBalancers you have access to.
		 * Get nodebalancers
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetNodeBalancersReturn} A paginated list of NodeBalancers.
		 */
		GetNodeBalancers(page: number | null | undefined, page_size: number | null | undefined): Observable<GetNodeBalancersReturn> {
			return this.http.get<GetNodeBalancersReturn>(this.baseUri + 'nodebalancers?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * NodeBalancer Create
		 * Creates a NodeBalancer in the requested Region.
		 * NodeBalancers require a port Config with at least one backend Node to start serving requests.
		 * When using the Linode CLI to create a NodeBalancer, first create a NodeBalancer without any Configs. Then, create Configs and Nodes for that NodeBalancer with the respective [Config Create](/docs/api/nodebalancers/#config-create) and [Node Create](/docs/api/nodebalancers/#node-create) commands.
		 * Post nodebalancers
		 * @param {any} requestBody Information about the NodeBalancer to create.
		 * @return {NodeBalancer} NodeBalancer created successfully.
		 */
		CreateNodeBalancer(requestBody: any): Observable<NodeBalancer> {
			return this.http.post<NodeBalancer>(this.baseUri + 'nodebalancers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * NodeBalancer Delete
		 * Deletes a NodeBalancer.
		 * **This is a destructive action and cannot be undone.**
		 * Deleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.
		 * Delete nodebalancers/{nodeBalancerId}
		 * @return {string} NodeBalancer deleted successfully.
		 */
		DeleteNodeBalancer(): Observable<string> {
			return this.http.delete(this.baseUri + 'nodebalancers/{nodeBalancerId}', { responseType: 'text' });
		}

		/**
		 * NodeBalancer View
		 * Returns a single NodeBalancer you can access.
		 * Get nodebalancers/{nodeBalancerId}
		 * @return {NodeBalancer} The requested NodeBalancer object.
		 */
		GetNodeBalancer(): Observable<NodeBalancer> {
			return this.http.get<NodeBalancer>(this.baseUri + 'nodebalancers/{nodeBalancerId}', {});
		}

		/**
		 * NodeBalancer Update
		 * Updates information about a NodeBalancer you can access.
		 * Put nodebalancers/{nodeBalancerId}
		 * @param {NodeBalancer} requestBody The information to update.
		 * @return {NodeBalancer} NodeBalancer updated successfully.
		 */
		UpdateNodeBalancer(requestBody: NodeBalancer): Observable<NodeBalancer> {
			return this.http.put<NodeBalancer>(this.baseUri + 'nodebalancers/{nodeBalancerId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configs List
		 * Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.
		 * For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.
		 * Get nodebalancers/{nodeBalancerId}/configs
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetNodeBalancerConfigsReturn} A paginted list of NodeBalancer Configs
		 */
		GetNodeBalancerConfigs(page: number | null | undefined, page_size: number | null | undefined): Observable<GetNodeBalancerConfigsReturn> {
			return this.http.get<GetNodeBalancerConfigsReturn>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Config Create
		 * Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.
		 * Post nodebalancers/{nodeBalancerId}/configs
		 * @param {NodeBalancerConfig} requestBody Information about the port to configure.
		 * @return {NodeBalancerConfig} Config created successfully.
		 */
		CreateNodeBalancerConfig(requestBody: NodeBalancerConfig): Observable<NodeBalancerConfig> {
			return this.http.post<NodeBalancerConfig>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Config Delete
		 * Deletes the Config for a port of this NodeBalancer.
		 * **This cannot be undone.**
		 * Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.
		 * Delete nodebalancers/{nodeBalancerId}/configs/{configId}
		 * @return {string} NodeBalancer Config deleted successfully.
		 */
		DeleteNodeBalancerConfig(): Observable<string> {
			return this.http.delete(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}', { responseType: 'text' });
		}

		/**
		 * Config View
		 * Returns configuration information for a single port of this NodeBalancer.
		 * Get nodebalancers/{nodeBalancerId}/configs/{configId}
		 * @return {NodeBalancerConfig} The requested NodeBalancer config.
		 */
		GetNodeBalancerConfig(): Observable<NodeBalancerConfig> {
			return this.http.get<NodeBalancerConfig>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}', {});
		}

		/**
		 * Config Update
		 * Updates the configuration for a single port on a NodeBalancer.
		 * Put nodebalancers/{nodeBalancerId}/configs/{configId}
		 * @param {NodeBalancerConfig} requestBody The fields to update.
		 * @return {NodeBalancerConfig} Config updated successfully.
		 */
		UpdateNodeBalancerConfig(requestBody: NodeBalancerConfig): Observable<NodeBalancerConfig> {
			return this.http.put<NodeBalancerConfig>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Nodes List
		 * Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.
		 * Get nodebalancers/{nodeBalancerId}/configs/{configId}/nodes
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetNodeBalancerConfigNodesReturn} A paginated list of NodeBalancer nodes.
		 */
		GetNodeBalancerConfigNodes(page: number | null | undefined, page_size: number | null | undefined): Observable<GetNodeBalancerConfigNodesReturn> {
			return this.http.get<GetNodeBalancerConfigNodesReturn>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}/nodes?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Node Create
		 * Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.
		 * Post nodebalancers/{nodeBalancerId}/configs/{configId}/nodes
		 * @param {NodeBalancerNode} requestBody Information about the Node to create.
		 * @return {NodeBalancerNode} Node created successfully.
		 */
		CreateNodeBalancerNode(requestBody: NodeBalancerNode): Observable<NodeBalancerNode> {
			return this.http.post<NodeBalancerNode>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}/nodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Node Delete
		 * Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.
		 * This does not change or remove the Linode whose address was used in the creation of this Node.
		 * Delete nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}
		 * @return {string} Node deleted successfully.
		 */
		DeleteNodeBalancerConfigNode(): Observable<string> {
			return this.http.delete(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}', { responseType: 'text' });
		}

		/**
		 * Node View
		 * Returns information about a single Node, a backend for this NodeBalancer's configured port.
		 * Get nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}
		 * @return {NodeBalancerNode} A paginated list of NodeBalancer nodes.
		 */
		GetNodeBalancerNode(): Observable<NodeBalancerNode> {
			return this.http.get<NodeBalancerNode>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}', {});
		}

		/**
		 * Node Update
		 * Updates information about a Node, a backend for this NodeBalancer's configured port.
		 * Put nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}
		 * @param {NodeBalancerNode} requestBody The fields to update.
		 * @return {NodeBalancerNode} Node updated successfully.
		 */
		UpdateNodeBalancerNode(requestBody: NodeBalancerNode): Observable<NodeBalancerNode> {
			return this.http.put<NodeBalancerNode>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Config Rebuild
		 * Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.
		 * Use this command to update a NodeBalancer's Config and Nodes with a single request.
		 * Post nodebalancers/{nodeBalancerId}/configs/{configId}/rebuild
		 * @param {NodeBalancerConfig} requestBody Information about the NodeBalancer Config to rebuild.
		 * @return {NodeBalancerConfig} NodeBalancer created successfully.
		 */
		RebuildNodeBalancerConfig(requestBody: NodeBalancerConfig): Observable<NodeBalancerConfig> {
			return this.http.post<NodeBalancerConfig>(this.baseUri + 'nodebalancers/{nodeBalancerId}/configs/{configId}/rebuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * NodeBalancer Statistics View
		 * Returns detailed statistics about the requested NodeBalancer.
		 * Get nodebalancers/{nodeBalancerId}/stats
		 * @return {NodeBalancerStats} The requested stats.
		 */
		NodeBalancersGet(): Observable<NodeBalancerStats> {
			return this.http.get<NodeBalancerStats>(this.baseUri + 'nodebalancers/{nodeBalancerId}/stats', {});
		}

		/**
		 * Object Storage Buckets List
		 * Returns a paginated list of all Object Storage Buckets that you own.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/serviceops/#list-buckets) directly.
		 * Get object-storage/buckets
		 * @return {GetObjectStorageBucketsReturn} A paginated list of buckets you own.
		 */
		GetObjectStorageBuckets(): Observable<GetObjectStorageBucketsReturn> {
			return this.http.get<GetObjectStorageBucketsReturn>(this.baseUri + 'object-storage/buckets', {});
		}

		/**
		 * Object Storage Bucket Create
		 * Creates an Object Storage Bucket in the specified cluster.
		 * Accounts with negative balances cannot access this command.
		 * If the bucket already exists and is owned by you, this endpoint returns a `200` response with that bucket as if it had just been created.
		 * This endpoint is available for convenience. It is recommended that instead you use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) directly.
		 * Post object-storage/buckets
		 * @param {CreateObjectStorageBucketPostBody} requestBody Information about the bucket you want to create.
		 * @return {ObjectStorageBucket} The bucket created successfully.
		 */
		CreateObjectStorageBucket(requestBody: CreateObjectStorageBucketPostBody): Observable<ObjectStorageBucket> {
			return this.http.post<ObjectStorageBucket>(this.baseUri + 'object-storage/buckets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Object Storage Buckets in Cluster List
		 * Returns a list of Buckets in this cluster belonging to this Account.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.
		 * Get object-storage/buckets/{clusterId}
		 * @return {GetObjectStorageBucketinClusterReturn} A paginated list of buckets you own in this cluster.
		 */
		GetObjectStorageBucketinCluster(): Observable<GetObjectStorageBucketinClusterReturn> {
			return this.http.get<GetObjectStorageBucketinClusterReturn>(this.baseUri + 'object-storage/buckets/{clusterId}', {});
		}

		/**
		 * Object Storage Bucket Remove
		 * Removes a single bucket.
		 * Bucket objects must be removed prior to removing the bucket. While buckets containing objects _may_ be
		 * deleted using the [s3cmd command-line tool](/docs/products/storage/object-storage/guides/s3cmd/#delete-a-bucket), such operations
		 * can fail if the bucket contains too many objects. The recommended
		 * way to empty large buckets is to use the [S3 API to configure lifecycle policies](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#) that
		 * remove all objects, then delete the bucket.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) directly.
		 * Delete object-storage/buckets/{clusterId}/{bucket}
		 * @return {string} Bucket deleted successfully.
		 */
		DeleteObjectStorageBucket(): Observable<string> {
			return this.http.delete(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}', { responseType: 'text' });
		}

		/**
		 * Object Storage Bucket View
		 * Returns a single Object Storage Bucket.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.
		 * Get object-storage/buckets/{clusterId}/{bucket}
		 * @return {ObjectStorageBucket} The requested bucket.
		 */
		GetObjectStorageBucket(): Observable<ObjectStorageBucket> {
			return this.http.get<ObjectStorageBucket>(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}', {});
		}

		/**
		 * Object Storage Bucket Access Modify
		 * Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
		 * Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.
		 * For more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.
		 * Post object-storage/buckets/{clusterId}/{bucket}/access
		 * @param {any} requestBody The changes to make to the bucket's access controls.
		 * @return {string} Access controls updated.
		 */
		ModifyObjectStorageBucketAccess(requestBody: any): Observable<string> {
			return this.http.post(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/access', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Object Storage Bucket Access Update
		 * Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
		 * Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.
		 * For more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.
		 * Put object-storage/buckets/{clusterId}/{bucket}/access
		 * @param {any} requestBody The changes to make to the bucket's access controls.
		 * @return {string} Access controls updated.
		 */
		UpdateObjectStorageBucketAccess(requestBody: any): Observable<string> {
			return this.http.put(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/access', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Object Storage Object ACL Config View
		 * View an Object's configured Access Control List (ACL) in this Object Storage bucket.
		 * ACLs define who can access your buckets and objects and specify the level of access
		 * granted to those users.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object-acl) directly.
		 * Get object-storage/buckets/{clusterId}/{bucket}/object-acl
		 * @param {string} name The `name` of the object for which to retrieve its Access Control List (ACL). Use the [Object Storage Bucket Contents List](/docs/api/object-storage/#object-storage-bucket-contents-list) endpoint to access all object names in a bucket.
		 * @return {ViewObjectStorageBucketACLReturn} The Object's canned ACL and policy.
		 */
		ViewObjectStorageBucketACL(name: string): Observable<ViewObjectStorageBucketACLReturn> {
			return this.http.get<ViewObjectStorageBucketACLReturn>(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/object-acl?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Object Storage Object ACL Config Update
		 * Update an Object's configured Access Control List (ACL) in this Object Storage bucket.
		 * ACLs define who can access your buckets and objects and specify the level of access
		 * granted to those users.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#set-object-acl) directly.
		 * Put object-storage/buckets/{clusterId}/{bucket}/object-acl
		 * @param {any} requestBody The changes to make to this Object's access controls.
		 * @return {UpdateObjectStorageBucketACLReturn} The Object's canned ACL and policy.
		 */
		UpdateObjectStorageBucketACL(requestBody: any): Observable<UpdateObjectStorageBucketACLReturn> {
			return this.http.put<UpdateObjectStorageBucketACLReturn>(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/object-acl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Object Storage Bucket Contents List
		 * Returns the contents of a bucket. The contents are paginated using a `marker`,
		 * which is the name of the last object on the previous page.  Objects may
		 * be filtered by `prefix` and `delimiter` as well; see Query Parameters for more
		 * information.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) directly.
		 * Get object-storage/buckets/{clusterId}/{bucket}/object-list
		 * @param {string} marker The "marker" for this request, which can be used to paginate through large buckets. Its value should be the value of the `next_marker` property returned with the last page. Listing bucket contents *does not* support arbitrary page access. See the `next_marker` property in the responses section for more details.
		 * @param {string} delimiter The delimiter for object names; if given, object names will be returned up to the first occurrence of this character. This is most commonly used with the `/` character to allow bucket transversal in a manner similar to a filesystem, however any delimiter may be used. Use in conjunction with `prefix` to see object names past the first occurrence of the delimiter.
		 * @param {string} prefix Filters objects returned to only those whose name start with the given prefix. Commonly used in conjunction with `delimiter` to allow transversal of bucket contents in a manner similar to a filesystem.
		 * @param {number} page_size The number of items to return per page.
		 * @return {any} One page of the requested bucket's contents.
		 */
		GetObjectStorageBucketContent(marker: string | null | undefined, delimiter: string | null | undefined, prefix: string | null | undefined, page_size: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/object-list?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&page_size=' + page_size, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Object Storage Object URL Create
		 * Creates a pre-signed URL to access a single Object in a bucket. This
		 * can be used to share objects, and also to create/delete objects by using
		 * the appropriate HTTP method in your request body's `method` parameter.
		 * This endpoint is available for convenience. It is recommended that instead you
		 * use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/)
		 * directly.
		 * Post object-storage/buckets/{clusterId}/{bucket}/object-url
		 * @param {any} requestBody Information about the request to sign.
		 * @return {any} The URL with which to access your object.
		 */
		CreateObjectStorageObjectURL(requestBody: any): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/object-url', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Object Storage TLS/SSL Cert Delete
		 * Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.
		 * Delete object-storage/buckets/{clusterId}/{bucket}/ssl
		 * @return {string} Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.
		 */
		DeleteObjectStorageSSL(): Observable<string> {
			return this.http.delete(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/ssl', { responseType: 'text' });
		}

		/**
		 * Object Storage TLS/SSL Cert View
		 * Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was
		 * uploaded by an Account user.
		 * Get object-storage/buckets/{clusterId}/{bucket}/ssl
		 * @return {ObjectStorageSSLResponse} Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was uploaded by an Account user.
		 */
		GetObjectStorageSSL(): Observable<ObjectStorageSSLResponse> {
			return this.http.get<ObjectStorageSSLResponse>(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/ssl', {});
		}

		/**
		 * Object Storage TLS/SSL Cert Upload
		 * Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
		 * Your TLS/SSL certificate and private key are stored encrypted at rest.
		 * To replace an expired certificate, [delete your current certificate](/docs/api/object-storage/#object-storage-tlsssl-cert-delete)
		 * and upload a new one.
		 * Post object-storage/buckets/{clusterId}/{bucket}/ssl
		 * @param {ObjectStorageSSL} requestBody Upload this TLS/SSL certificate with its corresponding secret key.
		 * @return {ObjectStorageSSLResponse} Returns whether this bucket has a corresponding TLS/SSL certificate that was uploaded by a user.
		 */
		CreateObjectStorageSSL(requestBody: ObjectStorageSSL): Observable<ObjectStorageSSLResponse> {
			return this.http.post<ObjectStorageSSLResponse>(this.baseUri + 'object-storage/buckets/{clusterId}/{bucket}/ssl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Object Storage Cancel
		 * Cancel Object Storage on an Account.
		 * **Warning**: Removes all buckets and their contents from your Account. This data is irretrievable once removed.
		 * Post object-storage/cancel
		 * @return {string} Object Storage cancellation successful.
		 */
		CancelObjectStorage(): Observable<string> {
			return this.http.post(this.baseUri + 'object-storage/cancel', null, { responseType: 'text' });
		}

		/**
		 * Clusters List
		 * Returns a paginated list of Object Storage Clusters that are available for
		 * use.  Users can connect to the clusters with third party clients to create buckets
		 * and upload objects.
		 * Get object-storage/clusters
		 * @return {GetObjectStorageClustersReturn} A paginated list of available clusters.
		 */
		GetObjectStorageClusters(): Observable<GetObjectStorageClustersReturn> {
			return this.http.get<GetObjectStorageClustersReturn>(this.baseUri + 'object-storage/clusters', {});
		}

		/**
		 * Cluster View
		 * Returns a single Object Storage Cluster.
		 * Get object-storage/clusters/{clusterId}
		 * @return {ObjectStorageCluster} The requested Cluster
		 */
		GetObjectStorageCluster(): Observable<ObjectStorageCluster> {
			return this.http.get<ObjectStorageCluster>(this.baseUri + 'object-storage/clusters/{clusterId}', {});
		}

		/**
		 * Object Storage Keys List
		 * Returns a paginated list of Object Storage Keys for authenticating to
		 * the Object Storage S3 API.
		 * Get object-storage/keys
		 * @return {GetObjectStorageKeysReturn} A paginated list of Object Storage Keys
		 */
		GetObjectStorageKeys(): Observable<GetObjectStorageKeysReturn> {
			return this.http.get<GetObjectStorageKeysReturn>(this.baseUri + 'object-storage/keys', {});
		}

		/**
		 * Object Storage Key Create
		 * Provisions a new Object Storage Key on your account.
		 * Accounts with negative balances cannot access this command.
		 * * To create a Limited Access Key with specific permissions, send a `bucket_access` array.
		 * * To create a Limited Access Key without access to any buckets, send an empty `bucket_access` array.
		 * * To create an Access Key with unlimited access to all clusters and all buckets, omit the `bucket_access` array.
		 * Post object-storage/keys
		 * @param {ObjectStorageKey} requestBody The label of the key to create. This is used to identify the created key.
		 * @return {ObjectStorageKey} The new keypair.  **This is the only time** the secret key is returned.
		 */
		CreateObjectStorageKeys(requestBody: ObjectStorageKey): Observable<ObjectStorageKey> {
			return this.http.post<ObjectStorageKey>(this.baseUri + 'object-storage/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Object Storage Key Revoke
		 * Revokes an Object Storage Key.  This keypair will no longer be usable by third-party clients.
		 * Delete object-storage/keys/{keyId}
		 * @return {string} Deletion successful
		 */
		DeleteObjectStorageKey(): Observable<string> {
			return this.http.delete(this.baseUri + 'object-storage/keys/{keyId}', { responseType: 'text' });
		}

		/**
		 * Object Storage Key View
		 * Returns a single Object Storage Key provisioned for your account.
		 * Get object-storage/keys/{keyId}
		 * @return {ObjectStorageKey} The keypair
		 */
		GetObjectStorageKey(): Observable<ObjectStorageKey> {
			return this.http.get<ObjectStorageKey>(this.baseUri + 'object-storage/keys/{keyId}', {});
		}

		/**
		 * Object Storage Key Update
		 * Updates an Object Storage Key on your account.
		 * Put object-storage/keys/{keyId}
		 * @param {UpdateObjectStorageKeyPutBody} requestBody The fields to update.
		 * @return {ObjectStorageKey} Update Successful
		 */
		UpdateObjectStorageKey(requestBody: UpdateObjectStorageKeyPutBody): Observable<ObjectStorageKey> {
			return this.http.put<ObjectStorageKey>(this.baseUri + 'object-storage/keys/{keyId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Object Storage Transfer View
		 * The amount of outbound data transfer used by your account's Object Storage buckets.
		 * Object Storage adds 1 terabyte of outbound data transfer to your data transfer pool.
		 * See the [Object Storage Overview](/docs/products/storage/object-storage/#pricing)
		 * guide for details on Object Storage transfer quotas.
		 * Get object-storage/transfer
		 * @return {any} Returns the amount of outbound data transfer used by your account's Object Storage buckets.
		 */
		GetObjectStorageTransfer(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'object-storage/transfer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Profile View
		 * Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.
		 * This endpoint is always accessible, no matter what OAuth scopes the acting token has.
		 * Get profile
		 * @return {Profile} Profile response.
		 */
		GetProfile(): Observable<Profile> {
			return this.http.get<Profile>(this.baseUri + 'profile', {});
		}

		/**
		 * Profile Update
		 * Update information in your Profile.  This endpoint requires the "account:read_write" OAuth Scope.
		 * Put profile
		 * @param {Profile} requestBody The fields to update.
		 * @return {Profile} Profile updated successfully.
		 */
		UpdateProfile(requestBody: Profile): Observable<Profile> {
			return this.http.put<Profile>(this.baseUri + 'profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authorized Apps List
		 * This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.
		 * Get profile/apps
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetProfileAppsReturn} A paginated list of apps you've authorized.
		 */
		GetProfileApps(page: number | null | undefined, page_size: number | null | undefined): Observable<GetProfileAppsReturn> {
			return this.http.get<GetProfileAppsReturn>(this.baseUri + 'profile/apps?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * App Access Revoke
		 * Expires this app token. This token may no longer be used to access your Account.
		 * Delete profile/apps/{appId}
		 * @return {string} App's authorization has been revoked.
		 */
		DeleteProfileApp(): Observable<string> {
			return this.http.delete(this.baseUri + 'profile/apps/{appId}', { responseType: 'text' });
		}

		/**
		 * Authorized App View
		 * Returns information about a single app you've authorized to access your Account.
		 * Get profile/apps/{appId}
		 * @return {AuthorizedApp} The app requested.
		 */
		GetProfileApp(): Observable<AuthorizedApp> {
			return this.http.get<AuthorizedApp>(this.baseUri + 'profile/apps/{appId}', {});
		}

		/**
		 * Trusted Devices List
		 * Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.
		 * Get profile/devices
		 * @return {GetDevicesReturn} Returns a paginated list of TrustedDevice objects.
		 */
		GetDevices(): Observable<GetDevicesReturn> {
			return this.http.get<GetDevicesReturn>(this.baseUri + 'profile/devices', {});
		}

		/**
		 * Trusted Device Revoke
		 * Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.
		 * Delete profile/devices/{deviceId}
		 * @return {string} Session revoked successfully
		 */
		RevokeTrustedDevice(): Observable<string> {
			return this.http.delete(this.baseUri + 'profile/devices/{deviceId}', { responseType: 'text' });
		}

		/**
		 * Trusted Device View
		 * Returns a single active TrustedDevice for your User.
		 * Get profile/devices/{deviceId}
		 * @return {TrustedDevice} The requested TrustedDevice object
		 */
		GetTrustedDevice(): Observable<TrustedDevice> {
			return this.http.get<TrustedDevice>(this.baseUri + 'profile/devices/{deviceId}', {});
		}

		/**
		 * Grants List
		 * This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.
		 * For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.
		 * Any client may access this endpoint; no OAuth scopes are required.
		 * Get profile/grants
		 * @return {GrantsResponse} GrantsResponse
		 */
		GetProfileGrants(): Observable<GrantsResponse> {
			return this.http.get<GrantsResponse>(this.baseUri + 'profile/grants', {});
		}

		/**
		 * Logins List
		 * Returns a collection of successful account logins from this user during the last 90 days.
		 * Get profile/logins
		 * @return {GetProfileLoginsReturn} An array of successful account logins from this user during the last 90 days.
		 */
		GetProfileLogins(): Observable<GetProfileLoginsReturn> {
			return this.http.get<GetProfileLoginsReturn>(this.baseUri + 'profile/logins', {});
		}

		/**
		 * Login View
		 * Returns a login object displaying information about a successful account login from this user.
		 * Get profile/logins/{loginId}
		 * @return {Login} The requested login object.
		 */
		GetProfileLogin(): Observable<Login> {
			return this.http.get<Login>(this.baseUri + 'profile/logins/{loginId}', {});
		}

		/**
		 * Phone Number Delete
		 * Delete the verified phone number for the User making this request.
		 * Use this command to opt out of SMS messages for the requesting User after a phone number has been verified with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.
		 * Delete profile/phone-number
		 * @return {string} Phone number deletion request successful.
		 */
		DeleteProfilePhoneNumber(): Observable<string> {
			return this.http.delete(this.baseUri + 'profile/phone-number', { responseType: 'text' });
		}

		/**
		 * Phone Number Verification Code Send
		 * Send a one-time verification code via SMS message to the submitted phone number. Providing your phone number helps ensure you can securely access your Account in case other ways to connect are lost. Your phone number is only used to verify your identity by sending an SMS message. Standard carrier messaging fees may apply.
		 * * By accessing this command you are opting in to receive SMS messages. You can opt out of SMS messages by using the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command after your phone number is verified.
		 * * Verification codes are valid for 10 minutes after they are sent.
		 * * Subsequent requests made prior to code expiration result in sending the same code.
		 * Once a verification code is received, verify your phone number with the **Phone Number Verify** ([POST /profile/phone-number/verify](/docs/api/profile/#phone-number-verify)) command.
		 * Post profile/phone-number
		 * @param {PostProfilePhoneNumberPostBody} requestBody Enter a phone number and country code for verification.
		 * @return {string} Phone number verification code request successful.
		 */
		PostProfilePhoneNumber(requestBody: PostProfilePhoneNumberPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'profile/phone-number', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Phone Number Verify
		 * Verify a phone number by confirming the one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.
		 * * Verification codes are valid for 10 minutes after they are sent.
		 * * Only the same User that made the verification code request can use that code with this command.
		 * Once completed, the verified phone number is assigned to the User making the request. To change the verified phone number for a User, first use the **Phone Number Delete** ([DELETE /profile/phone-number](/docs/api/profile/#phone-number-delete)) command, then begin the verification process again with the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.
		 * Post profile/phone-number/verify
		 * @param {PostProfilePhoneNumberVerifyPostBody} requestBody Enter a phone verification code for confirmation.
		 * @return {string} Phone number verification successful.
		 */
		PostProfilePhoneNumberVerify(requestBody: PostProfilePhoneNumberVerifyPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'profile/phone-number/verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * User Preferences View
		 * View a list of user preferences tied to the OAuth client that generated
		 * the token making the request. The user preferences endpoints allow
		 * consumers of the API to store arbitrary JSON data, such as a user's font
		 * size preference or preferred display name. User preferences are available
		 * for each OAuth client registered to your account, and as such an account can
		 * have multiple user preferences.
		 * Get profile/preferences
		 * @return {string} Returns an object of user preferences.
		 */
		GetUserPreferences(): Observable<string> {
			return this.http.get(this.baseUri + 'profile/preferences', { responseType: 'text' });
		}

		/**
		 * User Preferences Update
		 * Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store.
		 * Put profile/preferences
		 * @param {string} requestBody The user preferences to update or store.
		 * @return {string} Returns an object of user preferences.
		 */
		UpdateUserPreferences(requestBody: string): Observable<string> {
			return this.http.put(this.baseUri + 'profile/preferences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Security Questions List
		 * Returns a collection of security questions and their responses, if any, for your User Profile.
		 * Get profile/security-questions
		 * @return {SecurityQuestionsGet} Returns a list of security questions.
		 */
		GetSecurityQuestions(): Observable<SecurityQuestionsGet> {
			return this.http.get<SecurityQuestionsGet>(this.baseUri + 'profile/security-questions', {});
		}

		/**
		 * Security Questions Answer
		 * Adds security question responses for your User.
		 * Requires exactly three unique questions.
		 * Previous responses are overwritten if answered or reset to `null` if unanswered.
		 * **Note**: Security questions must be answered for your User prior to accessing the **Two Factor Secret Create** ([POST /profile/tfa-enable](/docs/api/profile/#two-factor-secret-create)) command.
		 * Post profile/security-questions
		 * @param {SecurityQuestionsPost} requestBody Answer Security Questions
		 * @return {SecurityQuestionsPost} Security Questions answered successfully.
		 */
		PostSecurityQuestions(requestBody: SecurityQuestionsPost): Observable<SecurityQuestionsPost> {
			return this.http.post<SecurityQuestionsPost>(this.baseUri + 'profile/security-questions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * SSH Keys List
		 * Returns a collection of SSH Keys you've added to your Profile.
		 * Get profile/sshkeys
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetSSHKeysReturn} Returns a paginated list of SSH Key objects.
		 */
		GetSSHKeys(page: number | null | undefined, page_size: number | null | undefined): Observable<GetSSHKeysReturn> {
			return this.http.get<GetSSHKeysReturn>(this.baseUri + 'profile/sshkeys?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * SSH Key Add
		 * Adds an SSH Key to your Account profile.
		 * Post profile/sshkeys
		 * @param {SSHKey} requestBody Add SSH Key
		 * @return {SSHKey} SSH Key associated successfully.
		 */
		AddSSHKey(requestBody: SSHKey): Observable<SSHKey> {
			return this.http.post<SSHKey>(this.baseUri + 'profile/sshkeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * SSH Key Delete
		 * Deletes an SSH Key you have access to.
		 * **Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.
		 * Delete profile/sshkeys/{sshKeyId}
		 * @return {string} SSH Key deleted successfully.
		 */
		DeleteSSHKey(): Observable<string> {
			return this.http.delete(this.baseUri + 'profile/sshkeys/{sshKeyId}', { responseType: 'text' });
		}

		/**
		 * SSH Key View
		 * Returns a single SSH Key object identified by `id` that you have access to view.
		 * Get profile/sshkeys/{sshKeyId}
		 * @return {SSHKey} An SSH Key object
		 */
		GetSSHKey(): Observable<SSHKey> {
			return this.http.get<SSHKey>(this.baseUri + 'profile/sshkeys/{sshKeyId}', {});
		}

		/**
		 * SSH Key Update
		 * Updates an SSH Key that you have permission to `read_write`.
		 * Only SSH key labels can be updated.
		 * Put profile/sshkeys/{sshKeyId}
		 * @param {UpdateSSHKeyPutBody} requestBody The fields to update.
		 * @return {SSHKey} SSH Key updated successfully.
		 */
		UpdateSSHKey(requestBody: UpdateSSHKeyPutBody): Observable<SSHKey> {
			return this.http.put<SSHKey>(this.baseUri + 'profile/sshkeys/{sshKeyId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Two Factor Authentication Disable
		 * Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.
		 * Post profile/tfa-disable
		 * @return {string} TFA disabled.
		 */
		TfaDisable(): Observable<string> {
			return this.http.post(this.baseUri + 'profile/tfa-disable', null, { responseType: 'text' });
		}

		/**
		 * Two Factor Secret Create
		 * Generates a Two Factor secret for your User. To enable TFA for your User, enter the secret obtained from this command with the **Two Factor Authentication Confirm/Enable** ([POST /profile/tfa-enable-confirm](/docs/api/profile/#two-factor-authentication-confirmenable)) command.
		 * Once enabled, logins from untrusted computers are required to provide
		 * a TFA code before they are successful.
		 * **Note**: Before you can enable TFA, security questions must be answered for your User by accessing the **Security Questions Answer** ([POST /profile/security-questions](/docs/api/profile/#security-questions-answer)) command.
		 * Post profile/tfa-enable
		 * @return {any} Two Factor secret generated
		 */
		TfaEnable(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'profile/tfa-enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Two Factor Authentication Confirm/Enable
		 * Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.
		 * Post profile/tfa-enable-confirm
		 * @param {any} requestBody The Two Factor code you generated with your Two Factor secret.
		 * @return {any} TFA enabled successfully
		 */
		TfaConfirm(requestBody: any): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'profile/tfa-enable-confirm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Personal Access Tokens List
		 * Returns a paginated list of Personal Access Tokens currently active for your User.
		 * Get profile/tokens
		 * @return {GetPersonalAccessTokensReturn} A paginated list of active tokens.
		 */
		GetPersonalAccessTokens(): Observable<GetPersonalAccessTokensReturn> {
			return this.http.get<GetPersonalAccessTokensReturn>(this.baseUri + 'profile/tokens', {});
		}

		/**
		 * Personal Access Token Create
		 * Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.
		 * Post profile/tokens
		 * @param {any} requestBody Information about the requested token.
		 * @return {PersonalAccessToken} Token created successfully.
		 */
		CreatePersonalAccessToken(requestBody: any): Observable<PersonalAccessToken> {
			return this.http.post<PersonalAccessToken>(this.baseUri + 'profile/tokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Personal Access Token Revoke
		 * Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.
		 * Delete profile/tokens/{tokenId}
		 * @return {string} Token revoked successfully.
		 */
		DeletePersonalAccessToken(): Observable<string> {
			return this.http.delete(this.baseUri + 'profile/tokens/{tokenId}', { responseType: 'text' });
		}

		/**
		 * Personal Access Token View
		 * Returns a single Personal Access Token.
		 * Get profile/tokens/{tokenId}
		 * @return {PersonalAccessToken} The requested token.
		 */
		GetPersonalAccessToken(): Observable<PersonalAccessToken> {
			return this.http.get<PersonalAccessToken>(this.baseUri + 'profile/tokens/{tokenId}', {});
		}

		/**
		 * Personal Access Token Update
		 * Updates a Personal Access Token.
		 * Put profile/tokens/{tokenId}
		 * @param {PersonalAccessToken} requestBody The fields to update.
		 * @return {PersonalAccessToken} Token updated successfully.
		 */
		UpdatePersonalAccessToken(requestBody: PersonalAccessToken): Observable<PersonalAccessToken> {
			return this.http.put<PersonalAccessToken>(this.baseUri + 'profile/tokens/{tokenId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Regions List
		 * Lists the Regions available for Linode services. Not all services are guaranteed to be
		 * available in all Regions.
		 * Get regions
		 * @return {GetRegionsReturn} Returns an array of Regions.
		 */
		GetRegions(): Observable<GetRegionsReturn> {
			return this.http.get<GetRegionsReturn>(this.baseUri + 'regions', {});
		}

		/**
		 * Region View
		 * Returns a single Region.
		 * Get regions/{regionId}
		 * @return {Region} A single Region object.
		 */
		GetRegion(): Observable<Region> {
			return this.http.get<Region>(this.baseUri + 'regions/{regionId}', {});
		}

		/**
		 * Support Tickets List
		 * Returns a collection of Support Tickets on your Account. Support Tickets can be both tickets you open with Linode for support, as well as tickets generated by Linode regarding your Account.
		 * This collection includes all Support Tickets generated on your Account, with open tickets returned first.
		 * Get support/tickets
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetTicketsReturn} Returns a paginated list of SupportTicket objects.
		 */
		GetTickets(page: number | null | undefined, page_size: number | null | undefined): Observable<GetTicketsReturn> {
			return this.http.get<GetTicketsReturn>(this.baseUri + 'support/tickets?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Support Ticket Open
		 * Open a Support Ticket.
		 * Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
		 * Post support/tickets
		 * @param {SupportTicketRequest} requestBody Open a Support Ticket.
		 * @return {SupportTicket} Support Ticket opened.
		 */
		CreateTicket(requestBody: SupportTicketRequest): Observable<SupportTicket> {
			return this.http.post<SupportTicket>(this.baseUri + 'support/tickets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Support Ticket View
		 * Returns a Support Ticket under your Account.
		 * Get support/tickets/{ticketId}
		 * @return {SupportTicket} Returns a single SupportTicket object.
		 */
		GetTicket(): Observable<SupportTicket> {
			return this.http.get<SupportTicket>(this.baseUri + 'support/tickets/{ticketId}', {});
		}

		/**
		 * Support Ticket Close
		 * Closes a Support Ticket you have access to modify.
		 * Post support/tickets/{ticketId}/close
		 * @return {string} Support Ticket closed successfully.
		 */
		CloseTicket(): Observable<string> {
			return this.http.post(this.baseUri + 'support/tickets/{ticketId}/close', null, { responseType: 'text' });
		}

		/**
		 * Replies List
		 * Returns a collection of replies to a Support Ticket on your Account.
		 * Get support/tickets/{ticketId}/replies
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetTicketRepliesReturn} Returns a paginated list of SupportTicketReply objects.
		 */
		GetTicketReplies(page: number | null | undefined, page_size: number | null | undefined): Observable<GetTicketRepliesReturn> {
			return this.http.get<GetTicketRepliesReturn>(this.baseUri + 'support/tickets/{ticketId}/replies?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Reply Create
		 * Adds a reply to an existing Support Ticket.
		 * Post support/tickets/{ticketId}/replies
		 * @param {any} requestBody Add a reply.
		 * @return {SupportTicketReply} Reply created.
		 */
		CreateTicketReply(requestBody: any): Observable<SupportTicketReply> {
			return this.http.post<SupportTicketReply>(this.baseUri + 'support/tickets/{ticketId}/replies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tags List
		 * Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.
		 * This endpoint returns a paginated list of Tags on your account.
		 * Get tags
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetTagsReturn} A paginated list of Tags
		 */
		GetTags(page: number | null | undefined, page_size: number | null | undefined): Observable<GetTagsReturn> {
			return this.http.get<GetTagsReturn>(this.baseUri + 'tags?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * New Tag Create
		 * Creates a new Tag and optionally tags requested objects with it immediately.
		 * **Important**: You must be an unrestricted User in order to add or modify Tags.
		 * Post tags
		 * @param {CreateTagPostBody} requestBody The tag to create, and optionally the objects to tag.
		 * @return {Tag} The new Tag.
		 */
		CreateTag(requestBody: CreateTagPostBody): Observable<Tag> {
			return this.http.post<Tag>(this.baseUri + 'tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tag Delete
		 * Remove a Tag from all objects and delete it.
		 * **Important**: You must be an unrestricted User in order to add or modify Tags.
		 * Delete tags/{label}
		 * @return {string} Tag deleted.
		 */
		DeleteTag(): Observable<string> {
			return this.http.delete(this.baseUri + 'tags/{label}', { responseType: 'text' });
		}

		/**
		 * Tagged Objects List
		 * Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.
		 * Get tags/{label}
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {any} A paginated list of objects, organized by type, that have been tagged with the requested Tag.
		 */
		GetTaggedObjects(page: number | null | undefined, page_size: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/{label}?page=' + page + '&page_size=' + page_size, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Volumes List
		 * Returns a paginated list of Volumes you have permission to view.
		 * Get volumes
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {GetVolumesReturn} Returns an array of all Volumes on your Account.
		 */
		GetVolumes(page: number | null | undefined, page_size: number | null | undefined): Observable<GetVolumesReturn> {
			return this.http.get<GetVolumesReturn>(this.baseUri + 'volumes?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Volume Create
		 * Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.
		 * Post volumes
		 * @param {CreateVolumePostBody} requestBody The requested initial state of a new Volume.
		 * @return {Volume} Creating Volume.
		 */
		CreateVolume(requestBody: CreateVolumePostBody): Observable<Volume> {
			return this.http.post<Volume>(this.baseUri + 'volumes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Volume Delete
		 * Deletes a Volume you have permission to `read_write`.
		 * * **Deleting a Volume is a destructive action and cannot be undone.**
		 * * Deleting stops billing for the Volume. You will be billed for time used within
		 * the billing period the Volume was active.
		 * * Volumes that are migrating cannot be deleted until the migration is finished.
		 * Delete volumes/{volumeId}
		 * @return {string} Volume deletion successful.
		 */
		DeleteVolume(): Observable<string> {
			return this.http.delete(this.baseUri + 'volumes/{volumeId}', { responseType: 'text' });
		}

		/**
		 * Volume View
		 * Get information about a single Volume.
		 * Get volumes/{volumeId}
		 * @param {number} page The page of a collection to return.
		 * @param {number} page_size The number of items to return per page.
		 * @return {Volume} Returns a single Volume object.
		 */
		GetVolume(page: number | null | undefined, page_size: number | null | undefined): Observable<Volume> {
			return this.http.get<Volume>(this.baseUri + 'volumes/{volumeId}?page=' + page + '&page_size=' + page_size, {});
		}

		/**
		 * Volume Update
		 * Updates a Volume that you have permission to `read_write`.
		 * Put volumes/{volumeId}
		 * @param {Volume} requestBody If any updated field fails to pass validation, the Volume will not be updated.
		 * @return {Volume} The updated Volume.
		 */
		UpdateVolume(requestBody: Volume): Observable<Volume> {
			return this.http.put<Volume>(this.baseUri + 'volumes/{volumeId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Volume Attach
		 * Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.
		 * Post volumes/{volumeId}/attach
		 * @param {AttachVolumePostBody} requestBody Volume to attach to a Linode.
		 * @return {Volume} Volume was attached to a Linode.
		 */
		AttachVolume(requestBody: AttachVolumePostBody): Observable<Volume> {
			return this.http.post<Volume>(this.baseUri + 'volumes/{volumeId}/attach', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Volume Clone
		 * Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.
		 * * Only Volumes with a `status` of "active" can be cloned.
		 * Post volumes/{volumeId}/clone
		 * @param {CloneVolumePostBody} requestBody The requested state your Volume will be cloned into.
		 * @return {Volume} Clone started.
		 */
		CloneVolume(requestBody: CloneVolumePostBody): Observable<Volume> {
			return this.http.post<Volume>(this.baseUri + 'volumes/{volumeId}/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Volume Detach
		 * Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.
		 * Post volumes/{volumeId}/detach
		 * @return {string} Volume was detached from a Linode.
		 */
		DetachVolume(): Observable<string> {
			return this.http.post(this.baseUri + 'volumes/{volumeId}/detach', null, { responseType: 'text' });
		}

		/**
		 * Volume Resize
		 * Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.
		 * * Volumes can only be resized up.
		 * * Only Volumes with a `status` of "active" can be resized.
		 * Post volumes/{volumeId}/resize
		 * @param {ResizeVolumePostBody} requestBody The requested size to increase your Volume to.
		 * @return {Volume} Volume resize started.
		 */
		ResizeVolume(requestBody: ResizeVolumePostBody): Observable<Volume> {
			return this.http.post<Volume>(this.baseUri + 'volumes/{volumeId}/resize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CancelAccountReturn {

		/** A link to Linode's exit survey. */
		survey_link?: string | null;
	}
	export interface CancelAccountReturnFormProperties {

		/** A link to Linode's exit survey. */
		survey_link: FormControl<string | null | undefined>,
	}
	export function CreateCancelAccountReturnFormGroup() {
		return new FormGroup<CancelAccountReturnFormProperties>({
			survey_link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEntityTransferPostBody {

		/**
		 * An object representing an Entity Transfer.
		 * Required
		 */
		entities: EntityTransfer;
	}
	export interface CreateEntityTransferPostBodyFormProperties {
	}
	export function CreateCreateEntityTransferPostBodyFormGroup() {
		return new FormGroup<CreateEntityTransferPostBodyFormProperties>({
		});

	}

	export interface GetEventsReturn {
		data?: Array<Event>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetEventsReturnFormProperties {
	}
	export function CreateGetEventsReturnFormGroup() {
		return new FormGroup<GetEventsReturnFormProperties>({
		});

	}

	export interface GetInvoicesReturn {
		data?: Array<Invoice>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetInvoicesReturnFormProperties {
	}
	export function CreateGetInvoicesReturnFormGroup() {
		return new FormGroup<GetInvoicesReturnFormProperties>({
		});

	}

	export interface GetInvoiceItemsReturn {
		data?: Array<InvoiceItem>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetInvoiceItemsReturnFormProperties {
	}
	export function CreateGetInvoiceItemsReturnFormGroup() {
		return new FormGroup<GetInvoiceItemsReturnFormProperties>({
		});

	}

	export interface GetAccountLoginsReturn {
		data?: Array<Login>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetAccountLoginsReturnFormProperties {
	}
	export function CreateGetAccountLoginsReturnFormGroup() {
		return new FormGroup<GetAccountLoginsReturnFormProperties>({
		});

	}

	export interface GetMaintenanceReturn {
		data?: Array<Maintenance>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetMaintenanceReturnFormProperties {
	}
	export function CreateGetMaintenanceReturnFormGroup() {
		return new FormGroup<GetMaintenanceReturnFormProperties>({
		});

	}

	export interface GetNotificationsReturn {
		data?: Array<Notification>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetNotificationsReturnFormProperties {
	}
	export function CreateGetNotificationsReturnFormGroup() {
		return new FormGroup<GetNotificationsReturnFormProperties>({
		});

	}

	export interface GetClientsReturn {
		data?: Array<OAuthClient>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetClientsReturnFormProperties {
	}
	export function CreateGetClientsReturnFormGroup() {
		return new FormGroup<GetClientsReturnFormProperties>({
		});

	}

	export interface GetPaymentMethodsReturn {
		data?: Array<PaymentMethod>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetPaymentMethodsReturnFormProperties {
	}
	export function CreateGetPaymentMethodsReturnFormGroup() {
		return new FormGroup<GetPaymentMethodsReturnFormProperties>({
		});

	}

	export interface CreatePaymentMethodPostBody {

		/**
		 * An object representing the credit card information you have on file with
		 * Linode to make Payments against your Account.
		 * Required
		 */
		data: CreditCard;

		/**
		 * Payment Method Response Object.
		 * Required
		 */
		is_default: PaymentMethod;

		/**
		 * The type of Payment Method.
		 * Alternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/) guide
		 * for details and instructions.
		 * Required
		 */
		type: CreatePaymentMethodPostBodyType;
	}
	export interface CreatePaymentMethodPostBodyFormProperties {

		/**
		 * The type of Payment Method.
		 * Alternative Payment Methods including Google Pay and PayPal can be added using the Cloud Manager. See the [Manage Payment Methods](/docs/products/platform/billing/guides/payment-methods/) guide
		 * for details and instructions.
		 * Required
		 */
		type: FormControl<CreatePaymentMethodPostBodyType | null | undefined>,
	}
	export function CreateCreatePaymentMethodPostBodyFormGroup() {
		return new FormGroup<CreatePaymentMethodPostBodyFormProperties>({
			type: new FormControl<CreatePaymentMethodPostBodyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreatePaymentMethodPostBodyType { credit_card = 'credit_card' }

	export interface GetPaymentsReturn {
		data?: Array<Payment>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetPaymentsReturnFormProperties {
	}
	export function CreateGetPaymentsReturnFormGroup() {
		return new FormGroup<GetPaymentsReturnFormProperties>({
		});

	}

	export interface CreatePayPalPaymentReturn {

		/**
		 * The checkout token generated for this Payment.
		 */
		checkout_token?: string | null;

		/**
		 * The paypal-generated ID for this Payment. Used when authorizing the Payment in PayPal's interface.
		 */
		payment_id?: string | null;
	}
	export interface CreatePayPalPaymentReturnFormProperties {

		/**
		 * The checkout token generated for this Payment.
		 */
		checkout_token: FormControl<string | null | undefined>,

		/**
		 * The paypal-generated ID for this Payment. Used when authorizing the Payment in PayPal's interface.
		 */
		payment_id: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayPalPaymentReturnFormGroup() {
		return new FormGroup<CreatePayPalPaymentReturnFormProperties>({
			checkout_token: new FormControl<string | null | undefined>(undefined),
			payment_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePromoCreditPostBody {

		/**
		 * The Promo Code.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		promo_code: string;
	}
	export interface CreatePromoCreditPostBodyFormProperties {

		/**
		 * The Promo Code.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		promo_code: FormControl<string | null | undefined>,
	}
	export function CreateCreatePromoCreditPostBodyFormGroup() {
		return new FormGroup<CreatePromoCreditPostBodyFormProperties>({
			promo_code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
		});

	}

	export interface GetServiceTransfersReturn {
		data?: Array<ServiceTransfer>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetServiceTransfersReturnFormProperties {
	}
	export function CreateGetServiceTransfersReturnFormGroup() {
		return new FormGroup<GetServiceTransfersReturnFormProperties>({
		});

	}

	export interface CreateServiceTransferPostBody {

		/**
		 * An object representing a Service Transfer.
		 * Required
		 */
		entities: ServiceTransfer;
	}
	export interface CreateServiceTransferPostBodyFormProperties {
	}
	export function CreateCreateServiceTransferPostBodyFormGroup() {
		return new FormGroup<CreateServiceTransferPostBodyFormProperties>({
		});

	}

	export interface GetUsersReturn {
		data?: Array<User>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetUsersReturnFormProperties {
	}
	export function CreateGetUsersReturnFormGroup() {
		return new FormGroup<GetUsersReturnFormProperties>({
		});

	}

	export interface PutDatabasesMongoDBInstancePutBody {

		/** Managed MongoDB Database request object. */
		allow_list?: DatabaseMongoDBRequest;

		/** Managed MongoDB Database request object. */
		label?: DatabaseMongoDBRequest;

		/** Managed MongoDB Databases object. */
		updates?: DatabaseMongoDB;
	}
	export interface PutDatabasesMongoDBInstancePutBodyFormProperties {
	}
	export function CreatePutDatabasesMongoDBInstancePutBodyFormGroup() {
		return new FormGroup<PutDatabasesMongoDBInstancePutBodyFormProperties>({
		});

	}

	export interface PutDatabasesMySQLInstancePutBody {

		/** Managed MySQL Database request object. */
		allow_list?: DatabaseMySQLRequest;

		/** Managed MySQL Database request object. */
		label?: DatabaseMySQLRequest;

		/** Managed MySQL Databases object. */
		updates?: DatabaseMySQL;
	}
	export interface PutDatabasesMySQLInstancePutBodyFormProperties {
	}
	export function CreatePutDatabasesMySQLInstancePutBodyFormGroup() {
		return new FormGroup<PutDatabasesMySQLInstancePutBodyFormProperties>({
		});

	}

	export interface PutDatabasesPostgreSQLInstancePutBody {

		/** Managed PostgreSQL Database request object. */
		allow_list?: DatabasePostgreSQLRequest;

		/** Managed PostgreSQL Database request object. */
		label?: DatabasePostgreSQLRequest;

		/** Managed PostgreSQL Databases object. */
		updates?: DatabasePostgreSQL;
	}
	export interface PutDatabasesPostgreSQLInstancePutBodyFormProperties {
	}
	export function CreatePutDatabasesPostgreSQLInstancePutBodyFormGroup() {
		return new FormGroup<PutDatabasesPostgreSQLInstancePutBodyFormProperties>({
		});

	}

	export interface GetDomainsReturn {
		data?: Array<Domain>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetDomainsReturnFormProperties {
	}
	export function CreateGetDomainsReturnFormGroup() {
		return new FormGroup<GetDomainsReturnFormProperties>({
		});

	}

	export interface CloneDomainPostBody {

		/**
		 * The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		domain: string;
	}
	export interface CloneDomainPostBodyFormProperties {

		/**
		 * The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCloneDomainPostBodyFormGroup() {
		return new FormGroup<CloneDomainPostBodyFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('\A(\*\.)?([a-zA-Z0-9-_]{1,63}\.)+([a-zA-Z]{2,3}\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\Z')]),
		});

	}

	export interface GetDomainRecordsReturn {
		data?: Array<DomainRecord>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetDomainRecordsReturnFormProperties {
	}
	export function CreateGetDomainRecordsReturnFormGroup() {
		return new FormGroup<GetDomainRecordsReturnFormProperties>({
		});

	}

	export interface UpdateDomainRecordPutBody {

		/**
		 * A single record on a Domain.
		 */
		name?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		port?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		priority?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		protocol?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		service?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		tag?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		target?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		ttl_sec?: DomainRecord;

		/**
		 * A single record on a Domain.
		 */
		weight?: DomainRecord;
	}
	export interface UpdateDomainRecordPutBodyFormProperties {
	}
	export function CreateUpdateDomainRecordPutBodyFormGroup() {
		return new FormGroup<UpdateDomainRecordPutBodyFormProperties>({
		});

	}

	export interface GetImagesReturn {
		data?: Array<Image>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetImagesReturnFormProperties {
	}
	export function CreateGetImagesReturnFormGroup() {
		return new FormGroup<GetImagesReturnFormProperties>({
		});

	}

	export interface ImagesPostPostBody {

		/** Description for the uploaded Image. */
		description?: string | null;

		/**
		 * Label for the uploaded Image.
		 * Required
		 */
		label: string;

		/**
		 * The region to upload to. Once uploaded, the Image can be used in any region.
		 * Required
		 */
		region: string;
	}
	export interface ImagesPostPostBodyFormProperties {

		/** Description for the uploaded Image. */
		description: FormControl<string | null | undefined>,

		/**
		 * Label for the uploaded Image.
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The region to upload to. Once uploaded, the Image can be used in any region.
		 * Required
		 */
		region: FormControl<string | null | undefined>,
	}
	export function CreateImagesPostPostBodyFormGroup() {
		return new FormGroup<ImagesPostPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImagesPostReturn {

		/** Image object */
		image?: Image;

		/** The URL to upload the Image to. */
		upload_to?: string | null;
	}
	export interface ImagesPostReturnFormProperties {

		/** The URL to upload the Image to. */
		upload_to: FormControl<string | null | undefined>,
	}
	export function CreateImagesPostReturnFormGroup() {
		return new FormGroup<ImagesPostReturnFormProperties>({
			upload_to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinodeInstancesReturn {
		data?: Array<Linode>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLinodeInstancesReturnFormProperties {
	}
	export function CreateGetLinodeInstancesReturnFormGroup() {
		return new FormGroup<GetLinodeInstancesReturnFormProperties>({
		});

	}

	export interface GetBackupsReturn {
		automatic?: Array<string>;
		snapshot?: GetBackupsReturnSnapshot;
	}
	export interface GetBackupsReturnFormProperties {
	}
	export function CreateGetBackupsReturnFormGroup() {
		return new FormGroup<GetBackupsReturnFormProperties>({
		});

	}

	export interface GetBackupsReturnSnapshot {

		/**
		 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
		 */
		current?: Backup;

		/**
		 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
		 */
		in_progress?: Backup;
	}
	export interface GetBackupsReturnSnapshotFormProperties {
	}
	export function CreateGetBackupsReturnSnapshotFormGroup() {
		return new FormGroup<GetBackupsReturnSnapshotFormProperties>({
		});

	}

	export interface CreateSnapshotPostBody {

		/**
		 * The label for the new snapshot.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		label: string;
	}
	export interface CreateSnapshotPostBodyFormProperties {

		/**
		 * The label for the new snapshot.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotPostBodyFormGroup() {
		return new FormGroup<CreateSnapshotPostBodyFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface RestoreBackupPostBody {

		/**
		 * The ID of the Linode to restore a Backup to.
		 * Required
		 */
		linode_id: number;

		/**
		 * If True, deletes all Disks and Configs on the target Linode
		 * before restoring.
		 * If False, and the Disk image size is larger than the available
		 * space on the Linode, an error message indicating insufficient
		 * space is returned.
		 */
		overwrite?: boolean | null;
	}
	export interface RestoreBackupPostBodyFormProperties {

		/**
		 * The ID of the Linode to restore a Backup to.
		 * Required
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * If True, deletes all Disks and Configs on the target Linode
		 * before restoring.
		 * If False, and the Disk image size is larger than the available
		 * space on the Linode, an error message indicating insufficient
		 * space is returned.
		 */
		overwrite: FormControl<boolean | null | undefined>,
	}
	export function CreateRestoreBackupPostBodyFormGroup() {
		return new FormGroup<RestoreBackupPostBodyFormProperties>({
			linode_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			overwrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BootLinodeInstancePostBody {

		/**
		 * The Linode Config ID to boot into.
		 */
		config_id?: number | null;
	}
	export interface BootLinodeInstancePostBodyFormProperties {

		/**
		 * The Linode Config ID to boot into.
		 */
		config_id: FormControl<number | null | undefined>,
	}
	export function CreateBootLinodeInstancePostBodyFormGroup() {
		return new FormGroup<BootLinodeInstancePostBodyFormProperties>({
			config_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CloneLinodeInstancePostBody {

		/**
		 * If this field is set to `true`, the created Linode will
		 * automatically be enrolled in the Linode Backup service. This
		 * will incur an additional charge. Pricing is included in the
		 * response from
		 * [/linodes/types](/docs/api/linode-types/#types-list).
		 * * Can only be included when cloning to a new Linode.
		 */
		backups_enabled?: boolean | null;

		/**
		 * An array of configuration profile IDs.
		 * * If the `configs` parameter **is not provided**, then **all configuration profiles and their associated disks will be cloned** from the source Linode. Any disks specified by the `disks` parameter will also be cloned.
		 * * **If an empty array is provided** for the `configs` parameter, then **no configuration profiles (nor their associated disks) will be cloned** from the source Linode. Any disks specified by the `disks` parameter will still be cloned.
		 * * **If a non-empty array is provided** for the `configs` parameter, then **the configuration profiles specified in the array (and their associated disks) will be cloned** from the source Linode. Any disks specified by the `disks` parameter will also be cloned.
		 */
		configs?: Array<number>;

		/**
		 * An array of disk IDs.
		 * * If the `disks` parameter **is not provided**, then **no extra disks will be cloned** from the source Linode. All disks associated with the configuration profiles specified by the `configs` parameter will still be cloned.
		 * * **If an empty array is provided** for the `disks` parameter, then **no extra disks will be cloned** from the source Linode. All disks associated with the configuration profiles specified by the `configs` parameter will still be cloned.
		 * * **If a non-empty array is provided** for the `disks` parameter, then **the disks specified in the array will be cloned** from the source Linode, in addition to any disks associated with the configuration profiles specified by the `configs` parameter.
		 */
		disks?: Array<number>;

		/**
		 * A label used to group Linodes for display. Linodes are not required to have a group.
		 */
		group?: string | null;

		/**
		 * The label to assign this Linode when cloning to a new Linode.
		 * * Can only be provided when cloning to a new Linode.
		 * * Defaults to "linode".
		 * Max length: 64
		 * Min length: 3
		 */
		label?: string | null;

		/**
		 * If an existing Linode is the target for the clone, the ID of that Linode. The existing Linode must have enough resources to accept the clone.
		 */
		linode_id?: number | null;

		/**
		 * If true, the created Linode will have private networking enabled and assigned a private IPv4 address.
		 * * Can only be provided when cloning to a new Linode.
		 */
		private_ip?: boolean | null;

		/**
		 * This is the Region where the Linode will be deployed.
		 * To view all available Regions you can deploy to see [/regions](/docs/api/regions/#regions-list).
		 * * Region can only be provided and is required when cloning to a new Linode.
		 */
		region?: string | null;

		/**
		 * A Linode's Type determines what resources are available to
		 * it, including disk space, memory, and virtual cpus. The
		 * amounts available to a specific Linode are returned as
		 * `specs` on the Linode object.
		 * To view all available Linode Types you can deploy with
		 * see [/linode/types](/docs/api/linode-types/#types-list).
		 * * Type can only be provided and is required when cloning to a new Linode.
		 */
		type?: string | null;
	}
	export interface CloneLinodeInstancePostBodyFormProperties {

		/**
		 * If this field is set to `true`, the created Linode will
		 * automatically be enrolled in the Linode Backup service. This
		 * will incur an additional charge. Pricing is included in the
		 * response from
		 * [/linodes/types](/docs/api/linode-types/#types-list).
		 * * Can only be included when cloning to a new Linode.
		 */
		backups_enabled: FormControl<boolean | null | undefined>,

		/**
		 * A label used to group Linodes for display. Linodes are not required to have a group.
		 */
		group: FormControl<string | null | undefined>,

		/**
		 * The label to assign this Linode when cloning to a new Linode.
		 * * Can only be provided when cloning to a new Linode.
		 * * Defaults to "linode".
		 * Max length: 64
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * If an existing Linode is the target for the clone, the ID of that Linode. The existing Linode must have enough resources to accept the clone.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * If true, the created Linode will have private networking enabled and assigned a private IPv4 address.
		 * * Can only be provided when cloning to a new Linode.
		 */
		private_ip: FormControl<boolean | null | undefined>,

		/**
		 * This is the Region where the Linode will be deployed.
		 * To view all available Regions you can deploy to see [/regions](/docs/api/regions/#regions-list).
		 * * Region can only be provided and is required when cloning to a new Linode.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * A Linode's Type determines what resources are available to
		 * it, including disk space, memory, and virtual cpus. The
		 * amounts available to a specific Linode are returned as
		 * `specs` on the Linode object.
		 * To view all available Linode Types you can deploy with
		 * see [/linode/types](/docs/api/linode-types/#types-list).
		 * * Type can only be provided and is required when cloning to a new Linode.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCloneLinodeInstancePostBodyFormGroup() {
		return new FormGroup<CloneLinodeInstancePostBodyFormProperties>({
			backups_enabled: new FormControl<boolean | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(64)]),
			linode_id: new FormControl<number | null | undefined>(undefined),
			private_ip: new FormControl<boolean | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinodeConfigsReturn {
		data?: Array<LinodeConfig>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLinodeConfigsReturnFormProperties {
	}
	export function CreateGetLinodeConfigsReturnFormGroup() {
		return new FormGroup<GetLinodeConfigsReturnFormProperties>({
		});

	}

	export interface GetLinodeDisksReturn {
		data?: Array<Disk>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLinodeDisksReturnFormProperties {
	}
	export function CreateGetLinodeDisksReturnFormGroup() {
		return new FormGroup<GetLinodeDisksReturnFormProperties>({
		});

	}

	export interface GetLinodeFirewallsReturn {
		data?: Array<Firewall>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLinodeFirewallsReturnFormProperties {
	}
	export function CreateGetLinodeFirewallsReturnFormGroup() {
		return new FormGroup<GetLinodeFirewallsReturnFormProperties>({
		});

	}

	export interface UpdateLinodeIPPutBody {

		/**
		 * The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
		 * Required
		 */
		rdns: string;
	}
	export interface UpdateLinodeIPPutBodyFormProperties {

		/**
		 * The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
		 * Required
		 */
		rdns: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinodeIPPutBodyFormGroup() {
		return new FormGroup<UpdateLinodeIPPutBodyFormProperties>({
			rdns: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MutateLinodeInstancePostBody {

		/**
		 * Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.
		 */
		allow_auto_disk_resize?: boolean | null;
	}
	export interface MutateLinodeInstancePostBodyFormProperties {

		/**
		 * Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.
		 */
		allow_auto_disk_resize: FormControl<boolean | null | undefined>,
	}
	export function CreateMutateLinodeInstancePostBodyFormGroup() {
		return new FormGroup<MutateLinodeInstancePostBodyFormProperties>({
			allow_auto_disk_resize: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetLinodeNodeBalancersReturn {
		data?: Array<NodeBalancer>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLinodeNodeBalancersReturnFormProperties {
	}
	export function CreateGetLinodeNodeBalancersReturnFormGroup() {
		return new FormGroup<GetLinodeNodeBalancersReturnFormProperties>({
		});

	}

	export interface RescueLinodeInstancePostBody {
		devices?: RescueDevices;
	}
	export interface RescueLinodeInstancePostBodyFormProperties {
	}
	export function CreateRescueLinodeInstancePostBodyFormGroup() {
		return new FormGroup<RescueLinodeInstancePostBodyFormProperties>({
		});

	}

	export interface ResizeLinodeInstancePostBody {

		/**
		 * Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.
		 */
		allow_auto_disk_resize?: boolean | null;

		/**
		 * The ID representing the Linode Type.
		 * Required
		 */
		type: string;
	}
	export interface ResizeLinodeInstancePostBodyFormProperties {

		/**
		 * Automatically resize disks when resizing a Linode. When resizing down to a smaller plan your Linode's data must fit within the smaller disk size.
		 */
		allow_auto_disk_resize: FormControl<boolean | null | undefined>,

		/**
		 * The ID representing the Linode Type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResizeLinodeInstancePostBodyFormGroup() {
		return new FormGroup<ResizeLinodeInstancePostBodyFormProperties>({
			allow_auto_disk_resize: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLinodeVolumesReturn {
		data?: Array<Volume>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLinodeVolumesReturnFormProperties {
	}
	export function CreateGetLinodeVolumesReturnFormGroup() {
		return new FormGroup<GetLinodeVolumesReturnFormProperties>({
		});

	}

	export interface GetKernelsReturn {
		data?: Array<Kernel>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetKernelsReturnFormProperties {
	}
	export function CreateGetKernelsReturnFormGroup() {
		return new FormGroup<GetKernelsReturnFormProperties>({
		});

	}

	export interface GetStackScriptsReturn {
		data?: Array<StackScript>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetStackScriptsReturnFormProperties {
	}
	export function CreateGetStackScriptsReturnFormGroup() {
		return new FormGroup<GetStackScriptsReturnFormProperties>({
		});

	}

	export interface GetLinodeTypesReturn {
		data?: Array<LinodeType>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLinodeTypesReturnFormProperties {
	}
	export function CreateGetLinodeTypesReturnFormGroup() {
		return new FormGroup<GetLinodeTypesReturnFormProperties>({
		});

	}

	export interface GetLKEClustersReturn {
		data?: Array<LKECluster>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLKEClustersReturnFormProperties {
	}
	export function CreateGetLKEClustersReturnFormGroup() {
		return new FormGroup<GetLKEClustersReturnFormProperties>({
		});

	}

	export interface CreateLKEClusterPostBody {

		/**
		 * Defines settings for the Kubernetes Control Plane. Allows for the enabling of High Availability (HA) for Control Plane Components. Enabling High Availability for LKE is an **irreversible** change.
		 */
		control_plane?: CreateLKEClusterPostBodyControl_plane;

		/**
		 * A Kubernetes cluster.
		 * Required
		 */
		k8s_version: LKECluster;

		/**
		 * A Kubernetes cluster.
		 * Required
		 */
		label: LKECluster;

		/** Required */
		node_pools: Array<LKENodePoolRequestBody>;

		/**
		 * A Kubernetes cluster.
		 * Required
		 */
		region: LKECluster;

		/** A Kubernetes cluster. */
		tags?: LKECluster;
	}
	export interface CreateLKEClusterPostBodyFormProperties {
	}
	export function CreateCreateLKEClusterPostBodyFormGroup() {
		return new FormGroup<CreateLKEClusterPostBodyFormProperties>({
		});

	}

	export interface CreateLKEClusterPostBodyControl_plane {

		/**
		 * Defines whether High Availability is enabled for the Control Plane Components of the cluster. Defaults to `false`.
		 */
		high_availability?: boolean | null;
	}
	export interface CreateLKEClusterPostBodyControl_planeFormProperties {

		/**
		 * Defines whether High Availability is enabled for the Control Plane Components of the cluster. Defaults to `false`.
		 */
		high_availability: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateLKEClusterPostBodyControl_planeFormGroup() {
		return new FormGroup<CreateLKEClusterPostBodyControl_planeFormProperties>({
			high_availability: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetLKEClusterAPIEndpointsReturn {
		GetLKEClusterAPIEndpointsReturnData?: Array<GetLKEClusterAPIEndpointsReturnData>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLKEClusterAPIEndpointsReturnFormProperties {
	}
	export function CreateGetLKEClusterAPIEndpointsReturnFormGroup() {
		return new FormGroup<GetLKEClusterAPIEndpointsReturnFormProperties>({
		});

	}

	export interface GetLKEClusterAPIEndpointsReturnData {

		/**
		 * A Kubernetes API server endpoint for this cluster.
		 */
		endpoint?: string | null;
	}
	export interface GetLKEClusterAPIEndpointsReturnDataFormProperties {

		/**
		 * A Kubernetes API server endpoint for this cluster.
		 */
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateGetLKEClusterAPIEndpointsReturnDataFormGroup() {
		return new FormGroup<GetLKEClusterAPIEndpointsReturnDataFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLKEClusterDashboardReturn {

		/** The Cluster Dashboard access URL. */
		url?: string | null;
	}
	export interface GetLKEClusterDashboardReturnFormProperties {

		/** The Cluster Dashboard access URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetLKEClusterDashboardReturnFormGroup() {
		return new FormGroup<GetLKEClusterDashboardReturnFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLKEClusterKubeconfigReturn {

		/**
		 * The Base64-encoded Kubeconfig file for this Cluster.
		 */
		kubeconfig?: string | null;
	}
	export interface GetLKEClusterKubeconfigReturnFormProperties {

		/**
		 * The Base64-encoded Kubeconfig file for this Cluster.
		 */
		kubeconfig: FormControl<string | null | undefined>,
	}
	export function CreateGetLKEClusterKubeconfigReturnFormGroup() {
		return new FormGroup<GetLKEClusterKubeconfigReturnFormProperties>({
			kubeconfig: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLKEClusterNodeReturn {

		/**
		 * The Node's ID.
		 */
		id?: string | null;

		/**
		 * The Linode's ID. If no Linode is currently provisioned for this Node, this is `null`.
		 */
		instance_id?: number | null;

		/**
		 * The creation status of this Node. This status is distinct from this Node's readiness as a Kubernetes Node Object as determined by the command `kubectl get nodes`.
		 * `not_ready` indicates that the Linode is still being created.
		 * `ready` indicates that the Linode has successfully been created and is running Kubernetes software.
		 */
		status?: LKENodeStatusStatus | null;
	}
	export interface GetLKEClusterNodeReturnFormProperties {

		/**
		 * The Node's ID.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The Linode's ID. If no Linode is currently provisioned for this Node, this is `null`.
		 */
		instance_id: FormControl<number | null | undefined>,

		/**
		 * The creation status of this Node. This status is distinct from this Node's readiness as a Kubernetes Node Object as determined by the command `kubectl get nodes`.
		 * `not_ready` indicates that the Linode is still being created.
		 * `ready` indicates that the Linode has successfully been created and is running Kubernetes software.
		 */
		status: FormControl<LKENodeStatusStatus | null | undefined>,
	}
	export function CreateGetLKEClusterNodeReturnFormGroup() {
		return new FormGroup<GetLKEClusterNodeReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			instance_id: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<LKENodeStatusStatus | null | undefined>(undefined),
		});

	}

	export interface GetLKEClusterPoolsReturn {
		data?: Array<LKENodePool>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLKEClusterPoolsReturnFormProperties {
	}
	export function CreateGetLKEClusterPoolsReturnFormGroup() {
		return new FormGroup<GetLKEClusterPoolsReturnFormProperties>({
		});

	}

	export interface GetLKEVersionsReturn {
		data?: Array<LKEVersion>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLKEVersionsReturnFormProperties {
	}
	export function CreateGetLKEVersionsReturnFormGroup() {
		return new FormGroup<GetLKEVersionsReturnFormProperties>({
		});

	}

	export interface GetLongviewClientsReturn {
		data?: Array<LongviewClient>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLongviewClientsReturnFormProperties {
	}
	export function CreateGetLongviewClientsReturnFormGroup() {
		return new FormGroup<GetLongviewClientsReturnFormProperties>({
		});

	}

	export interface GetLongviewSubscriptionsReturn {
		data?: Array<LongviewSubscription>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetLongviewSubscriptionsReturnFormProperties {
	}
	export function CreateGetLongviewSubscriptionsReturnFormGroup() {
		return new FormGroup<GetLongviewSubscriptionsReturnFormProperties>({
		});

	}

	export interface GetManagedContactsReturn {
		data?: Array<ManagedContact>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetManagedContactsReturnFormProperties {
	}
	export function CreateGetManagedContactsReturnFormGroup() {
		return new FormGroup<GetManagedContactsReturnFormProperties>({
		});

	}

	export interface GetManagedCredentialsReturn {
		data?: Array<ManagedCredential>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetManagedCredentialsReturnFormProperties {
	}
	export function CreateGetManagedCredentialsReturnFormGroup() {
		return new FormGroup<GetManagedCredentialsReturnFormProperties>({
		});

	}

	export interface ViewManagedSSHKeyReturn {

		/**
		 * The unique SSH public key assigned to your Linode account's Managed service.
		 */
		ssh_key?: string | null;
	}
	export interface ViewManagedSSHKeyReturnFormProperties {

		/**
		 * The unique SSH public key assigned to your Linode account's Managed service.
		 */
		ssh_key: FormControl<string | null | undefined>,
	}
	export function CreateViewManagedSSHKeyReturnFormGroup() {
		return new FormGroup<ViewManagedSSHKeyReturnFormProperties>({
			ssh_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetManagedIssuesReturn {
		data?: Array<ManagedIssue>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetManagedIssuesReturnFormProperties {
	}
	export function CreateGetManagedIssuesReturnFormGroup() {
		return new FormGroup<GetManagedIssuesReturnFormProperties>({
		});

	}

	export interface GetManagedLinodeSettingsReturn {
		data?: Array<ManagedLinodeSettings>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetManagedLinodeSettingsReturnFormProperties {
	}
	export function CreateGetManagedLinodeSettingsReturnFormGroup() {
		return new FormGroup<GetManagedLinodeSettingsReturnFormProperties>({
		});

	}

	export interface GetManagedServicesReturn {
		data?: Array<ManagedService>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetManagedServicesReturnFormProperties {
	}
	export function CreateGetManagedServicesReturnFormGroup() {
		return new FormGroup<GetManagedServicesReturnFormProperties>({
		});

	}

	export interface GetManagedStatsReturn {
		data?: string | null;
	}
	export interface GetManagedStatsReturnFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateGetManagedStatsReturnFormGroup() {
		return new FormGroup<GetManagedStatsReturnFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFirewallsReturn {
		data?: Array<Firewall>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetFirewallsReturnFormProperties {
	}
	export function CreateGetFirewallsReturnFormGroup() {
		return new FormGroup<GetFirewallsReturnFormProperties>({
		});

	}

	export interface UpdateFirewallPutBody {

		/**
		 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
		 */
		label?: Firewall;

		/**
		 * The status to be applied to this Firewall.
		 * * When a Firewall is first created its status is `enabled`.
		 * * Use the [Delete Firewall](/docs/api/networking/#firewall-delete) endpoint to delete a Firewall.
		 */
		status?: UpdateFirewallPutBodyStatus | null;

		/**
		 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
		 */
		tags?: Firewall;
	}
	export interface UpdateFirewallPutBodyFormProperties {

		/**
		 * The status to be applied to this Firewall.
		 * * When a Firewall is first created its status is `enabled`.
		 * * Use the [Delete Firewall](/docs/api/networking/#firewall-delete) endpoint to delete a Firewall.
		 */
		status: FormControl<UpdateFirewallPutBodyStatus | null | undefined>,
	}
	export function CreateUpdateFirewallPutBodyFormGroup() {
		return new FormGroup<UpdateFirewallPutBodyFormProperties>({
			status: new FormControl<UpdateFirewallPutBodyStatus | null | undefined>(undefined),
		});

	}

	export enum UpdateFirewallPutBodyStatus { enabled = 'enabled', disabled = 'disabled' }

	export interface GetFirewallDevicesReturn {
		data?: Array<FirewallDevices>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetFirewallDevicesReturnFormProperties {
	}
	export function CreateGetFirewallDevicesReturnFormGroup() {
		return new FormGroup<GetFirewallDevicesReturnFormProperties>({
		});

	}

	export interface GetIPsReturn {
		data?: Array<IPAddress>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetIPsReturnFormProperties {
	}
	export function CreateGetIPsReturnFormGroup() {
		return new FormGroup<GetIPsReturnFormProperties>({
		});

	}

	export interface UpdateIPPutBody {

		/**
		 * The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
		 * Required
		 */
		rdns: string;
	}
	export interface UpdateIPPutBodyFormProperties {

		/**
		 * The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.
		 * Required
		 */
		rdns: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIPPutBodyFormGroup() {
		return new FormGroup<UpdateIPPutBodyFormProperties>({
			rdns: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIPv6PoolsReturn {
		data?: Array<IPv6Pool>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetIPv6PoolsReturnFormProperties {
	}
	export function CreateGetIPv6PoolsReturnFormGroup() {
		return new FormGroup<GetIPv6PoolsReturnFormProperties>({
		});

	}

	export interface GetIPv6RangesReturn {
		data?: Array<IPv6Range>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetIPv6RangesReturnFormProperties {
	}
	export function CreateGetIPv6RangesReturnFormGroup() {
		return new FormGroup<GetIPv6RangesReturnFormProperties>({
		});

	}

	export interface PostIPv6RangeReturn {

		/**
		 * The IPv6 network range, including subnet and prefix length.
		 */
		range?: string | null;

		/**
		 * The route target IPV6 SLAAC address for this range. Does not include the prefix length.
		 */
		route_target?: string | null;
	}
	export interface PostIPv6RangeReturnFormProperties {

		/**
		 * The IPv6 network range, including subnet and prefix length.
		 */
		range: FormControl<string | null | undefined>,

		/**
		 * The route target IPV6 SLAAC address for this range. Does not include the prefix length.
		 */
		route_target: FormControl<string | null | undefined>,
	}
	export function CreatePostIPv6RangeReturnFormGroup() {
		return new FormGroup<PostIPv6RangeReturnFormProperties>({
			range: new FormControl<string | null | undefined>(undefined),
			route_target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVLANsReturn {
		data?: Array<Vlans>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetVLANsReturnFormProperties {
	}
	export function CreateGetVLANsReturnFormGroup() {
		return new FormGroup<GetVLANsReturnFormProperties>({
		});

	}

	export interface GetNodeBalancersReturn {
		data?: Array<NodeBalancer>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetNodeBalancersReturnFormProperties {
	}
	export function CreateGetNodeBalancersReturnFormGroup() {
		return new FormGroup<GetNodeBalancersReturnFormProperties>({
		});

	}

	export interface GetNodeBalancerConfigsReturn {
		data?: Array<NodeBalancerConfig>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetNodeBalancerConfigsReturnFormProperties {
	}
	export function CreateGetNodeBalancerConfigsReturnFormGroup() {
		return new FormGroup<GetNodeBalancerConfigsReturnFormProperties>({
		});

	}

	export interface GetNodeBalancerConfigNodesReturn {
		data?: Array<NodeBalancerNode>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetNodeBalancerConfigNodesReturnFormProperties {
	}
	export function CreateGetNodeBalancerConfigNodesReturnFormGroup() {
		return new FormGroup<GetNodeBalancerConfigNodesReturnFormProperties>({
		});

	}

	export interface GetObjectStorageBucketsReturn {
		data?: Array<ObjectStorageBucket>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetObjectStorageBucketsReturnFormProperties {
	}
	export function CreateGetObjectStorageBucketsReturnFormGroup() {
		return new FormGroup<GetObjectStorageBucketsReturnFormProperties>({
		});

	}

	export interface CreateObjectStorageBucketPostBody {

		/**
		 * The Access Control Level of the bucket using a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
		 */
		acl?: CreateObjectStorageBucketPostBodyAcl | null;

		/**
		 * The ID of the Object Storage Cluster where this bucket should be created.
		 * Required
		 */
		cluster: string;

		/**
		 * If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.
		 */
		cors_enabled?: boolean | null;

		/**
		 * The name for this bucket. Must be unique in the cluster you are creating the bucket in, or an error will be returned. Labels will be reserved only for the cluster that active buckets are created and stored in. If you want to reserve this bucket's label in another cluster, you must create a new bucket with the same label in the new cluster.
		 * Required
		 */
		label: string;
	}
	export interface CreateObjectStorageBucketPostBodyFormProperties {

		/**
		 * The Access Control Level of the bucket using a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
		 */
		acl: FormControl<CreateObjectStorageBucketPostBodyAcl | null | undefined>,

		/**
		 * The ID of the Object Storage Cluster where this bucket should be created.
		 * Required
		 */
		cluster: FormControl<string | null | undefined>,

		/**
		 * If true, the bucket will be created with CORS enabled for all origins. For more fine-grained controls of CORS, use the S3 API directly.
		 */
		cors_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The name for this bucket. Must be unique in the cluster you are creating the bucket in, or an error will be returned. Labels will be reserved only for the cluster that active buckets are created and stored in. If you want to reserve this bucket's label in another cluster, you must create a new bucket with the same label in the new cluster.
		 * Required
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateCreateObjectStorageBucketPostBodyFormGroup() {
		return new FormGroup<CreateObjectStorageBucketPostBodyFormProperties>({
			acl: new FormControl<CreateObjectStorageBucketPostBodyAcl | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cors_enabled: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-z0-09][a-z0-9-]*[a-z0-9]?$')]),
		});

	}

	export enum CreateObjectStorageBucketPostBodyAcl { private = 'private', 'public-read' = 'public-read', 'authenticated-read' = 'authenticated-read', 'public-read-write' = 'public-read-write' }

	export interface GetObjectStorageBucketinClusterReturn {
		data?: Array<ObjectStorageBucket>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetObjectStorageBucketinClusterReturnFormProperties {
	}
	export function CreateGetObjectStorageBucketinClusterReturnFormGroup() {
		return new FormGroup<GetObjectStorageBucketinClusterReturnFormProperties>({
		});

	}

	export interface ViewObjectStorageBucketACLReturn {

		/**
		 * The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
		 */
		acl?: ViewObjectStorageBucketACLReturnAcl | null;

		/**
		 * The full XML of the object's ACL policy.
		 */
		acl_xml?: string | null;
	}
	export interface ViewObjectStorageBucketACLReturnFormProperties {

		/**
		 * The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
		 */
		acl: FormControl<ViewObjectStorageBucketACLReturnAcl | null | undefined>,

		/**
		 * The full XML of the object's ACL policy.
		 */
		acl_xml: FormControl<string | null | undefined>,
	}
	export function CreateViewObjectStorageBucketACLReturnFormGroup() {
		return new FormGroup<ViewObjectStorageBucketACLReturnFormProperties>({
			acl: new FormControl<ViewObjectStorageBucketACLReturnAcl | null | undefined>(undefined),
			acl_xml: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ViewObjectStorageBucketACLReturnAcl { private = 'private', 'public-read' = 'public-read', 'authenticated-read' = 'authenticated-read', 'public-read-write' = 'public-read-write', custom = 'custom' }

	export interface UpdateObjectStorageBucketACLReturn {

		/**
		 * The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
		 */
		acl?: ViewObjectStorageBucketACLReturnAcl | null;

		/**
		 * The full XML of the object's ACL policy.
		 */
		acl_xml?: string | null;
	}
	export interface UpdateObjectStorageBucketACLReturnFormProperties {

		/**
		 * The Access Control Level of the bucket, as a canned ACL string. For more fine-grained control of ACLs, use the S3 API directly.
		 */
		acl: FormControl<ViewObjectStorageBucketACLReturnAcl | null | undefined>,

		/**
		 * The full XML of the object's ACL policy.
		 */
		acl_xml: FormControl<string | null | undefined>,
	}
	export function CreateUpdateObjectStorageBucketACLReturnFormGroup() {
		return new FormGroup<UpdateObjectStorageBucketACLReturnFormProperties>({
			acl: new FormControl<ViewObjectStorageBucketACLReturnAcl | null | undefined>(undefined),
			acl_xml: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetObjectStorageClustersReturn {
		data?: Array<ObjectStorageCluster>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetObjectStorageClustersReturnFormProperties {
	}
	export function CreateGetObjectStorageClustersReturnFormGroup() {
		return new FormGroup<GetObjectStorageClustersReturnFormProperties>({
		});

	}

	export interface GetObjectStorageKeysReturn {
		data?: Array<ObjectStorageKey>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetObjectStorageKeysReturnFormProperties {
	}
	export function CreateGetObjectStorageKeysReturnFormGroup() {
		return new FormGroup<GetObjectStorageKeysReturnFormProperties>({
		});

	}

	export interface UpdateObjectStorageKeyPutBody {

		/** The label for this keypair, for display purposes only. */
		label?: string | null;
	}
	export interface UpdateObjectStorageKeyPutBodyFormProperties {

		/** The label for this keypair, for display purposes only. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateUpdateObjectStorageKeyPutBodyFormGroup() {
		return new FormGroup<UpdateObjectStorageKeyPutBodyFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetProfileAppsReturn {
		data?: Array<AuthorizedApp>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetProfileAppsReturnFormProperties {
	}
	export function CreateGetProfileAppsReturnFormGroup() {
		return new FormGroup<GetProfileAppsReturnFormProperties>({
		});

	}

	export interface GetDevicesReturn {
		data?: Array<TrustedDevice>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetDevicesReturnFormProperties {
	}
	export function CreateGetDevicesReturnFormGroup() {
		return new FormGroup<GetDevicesReturnFormProperties>({
		});

	}

	export interface GetProfileLoginsReturn {
		data?: Array<Login>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetProfileLoginsReturnFormProperties {
	}
	export function CreateGetProfileLoginsReturnFormGroup() {
		return new FormGroup<GetProfileLoginsReturnFormProperties>({
		});

	}

	export interface PostProfilePhoneNumberPostBody {

		/**
		 * The two-letter ISO 3166 country code associated with the phone number.
		 * Required
		 */
		iso_code: string;

		/**
		 * A valid phone number.
		 * Required
		 */
		phone_number: string;
	}
	export interface PostProfilePhoneNumberPostBodyFormProperties {

		/**
		 * The two-letter ISO 3166 country code associated with the phone number.
		 * Required
		 */
		iso_code: FormControl<string | null | undefined>,

		/**
		 * A valid phone number.
		 * Required
		 */
		phone_number: FormControl<string | null | undefined>,
	}
	export function CreatePostProfilePhoneNumberPostBodyFormGroup() {
		return new FormGroup<PostProfilePhoneNumberPostBodyFormProperties>({
			iso_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProfilePhoneNumberVerifyPostBody {

		/**
		 * The one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.
		 * Required
		 */
		otp_code: string;
	}
	export interface PostProfilePhoneNumberVerifyPostBodyFormProperties {

		/**
		 * The one-time code received via SMS message after accessing the **Phone Verification Code Send** ([POST /profile/phone-number](/docs/api/profile/#phone-number-verification-code-send)) command.
		 * Required
		 */
		otp_code: FormControl<string | null | undefined>,
	}
	export function CreatePostProfilePhoneNumberVerifyPostBodyFormGroup() {
		return new FormGroup<PostProfilePhoneNumberVerifyPostBodyFormProperties>({
			otp_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSSHKeysReturn {
		data?: Array<SSHKey>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetSSHKeysReturnFormProperties {
	}
	export function CreateGetSSHKeysReturnFormGroup() {
		return new FormGroup<GetSSHKeysReturnFormProperties>({
		});

	}

	export interface UpdateSSHKeyPutBody {

		/**
		 * A credential object for authenticating a User's secure shell connection to a Linode.
		 */
		label?: SSHKey;
	}
	export interface UpdateSSHKeyPutBodyFormProperties {
	}
	export function CreateUpdateSSHKeyPutBodyFormGroup() {
		return new FormGroup<UpdateSSHKeyPutBodyFormProperties>({
		});

	}

	export interface GetPersonalAccessTokensReturn {
		data?: Array<PersonalAccessToken>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetPersonalAccessTokensReturnFormProperties {
	}
	export function CreateGetPersonalAccessTokensReturnFormGroup() {
		return new FormGroup<GetPersonalAccessTokensReturnFormProperties>({
		});

	}

	export interface GetRegionsReturn {
		data?: Array<Region>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetRegionsReturnFormProperties {
	}
	export function CreateGetRegionsReturnFormGroup() {
		return new FormGroup<GetRegionsReturnFormProperties>({
		});

	}

	export interface GetTicketsReturn {
		data?: Array<SupportTicket>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetTicketsReturnFormProperties {
	}
	export function CreateGetTicketsReturnFormGroup() {
		return new FormGroup<GetTicketsReturnFormProperties>({
		});

	}

	export interface GetTicketRepliesReturn {
		data?: Array<SupportTicketReply>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetTicketRepliesReturnFormProperties {
	}
	export function CreateGetTicketRepliesReturnFormGroup() {
		return new FormGroup<GetTicketRepliesReturnFormProperties>({
		});

	}

	export interface GetTagsReturn {
		data?: Array<Tag>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetTagsReturnFormProperties {
	}
	export function CreateGetTagsReturnFormGroup() {
		return new FormGroup<GetTagsReturnFormProperties>({
		});

	}

	export interface CreateTagPostBody {

		/**
		 * A list of Domain IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Domains, or the Tag will not be created and an error will be returned.
		 */
		domains?: Array<number>;

		/**
		 * The new Tag.
		 * Required
		 * Max length: 50
		 * Min length: 3
		 */
		label: string;

		/**
		 * A list of Linode IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Linodes, or the Tag will not be created and an error will be returned.
		 */
		linodes?: Array<number>;

		/**
		 * A list of NodeBalancer IDs to apply the new Tag to. You must be allowed to `read_write` all of the requested NodeBalancers, or the Tag will not be created and an error will be returned.
		 */
		nodebalancers?: Array<number>;

		/**
		 * A list of Volume IDs to apply the new Tag to.  You must be allowed to `read_write` all of the requested Volumes, or the Tag will not be created and an error will be returned.
		 */
		volumes?: Array<number>;
	}
	export interface CreateTagPostBodyFormProperties {

		/**
		 * The new Tag.
		 * Required
		 * Max length: 50
		 * Min length: 3
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateCreateTagPostBodyFormGroup() {
		return new FormGroup<CreateTagPostBodyFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
		});

	}

	export interface GetVolumesReturn {
		data?: Array<Volume>;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		page?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		pages?: PaginationEnvelope;

		/**
		 * An envelope for paginated response. When accessing a collection through a GET endpoint, the results are wrapped in this envelope which includes metadata about those results. Results are presented within a `data` array. See [Pagination](/docs/api/#pagination) for more information.
		 */
		results?: PaginationEnvelope;
	}
	export interface GetVolumesReturnFormProperties {
	}
	export function CreateGetVolumesReturnFormGroup() {
		return new FormGroup<GetVolumesReturnFormProperties>({
		});

	}

	export interface CreateVolumePostBody {

		/**
		 * When creating a Volume attached to a Linode, the ID of the Linode Config to include the new Volume in. This Config must belong to the Linode referenced by `linode_id`. Must _not_ be provided if `linode_id` is not sent. If a `linode_id` is sent without a `config_id`, the volume will be attached:
		 * * to the Linode's only config if it only has one config.
		 * * to the Linode's last used config, if possible.
		 * If no config can be selected for attachment, an error will be returned.
		 */
		config_id?: number | null;

		/**
		 * The Volume's label, which is also used in the `filesystem_path` of the resulting volume.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		label: string;

		/**
		 * The Linode this volume should be attached to upon creation. If not given, the volume will be created without an attachment.
		 */
		linode_id?: number | null;

		/**
		 * The Region to deploy this Volume in. This is only required if a linode_id is not given.
		 */
		region?: string | null;

		/**
		 * The initial size of this volume, in GB.  Be aware that volumes may only be resized up after creation.
		 */
		size?: number | null;

		/**
		 * An array of Tags applied to this object.  Tags are for organizational purposes only.
		 */
		tags?: Array<string>;
	}
	export interface CreateVolumePostBodyFormProperties {

		/**
		 * When creating a Volume attached to a Linode, the ID of the Linode Config to include the new Volume in. This Config must belong to the Linode referenced by `linode_id`. Must _not_ be provided if `linode_id` is not sent. If a `linode_id` is sent without a `config_id`, the volume will be attached:
		 * * to the Linode's only config if it only has one config.
		 * * to the Linode's last used config, if possible.
		 * If no config can be selected for attachment, an error will be returned.
		 */
		config_id: FormControl<number | null | undefined>,

		/**
		 * The Volume's label, which is also used in the `filesystem_path` of the resulting volume.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * The Linode this volume should be attached to upon creation. If not given, the volume will be created without an attachment.
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * The Region to deploy this Volume in. This is only required if a linode_id is not given.
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * The initial size of this volume, in GB.  Be aware that volumes may only be resized up after creation.
		 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateCreateVolumePostBodyFormGroup() {
		return new FormGroup<CreateVolumePostBodyFormProperties>({
			config_id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('^[a-zA-Z]((?!--|__)[a-zA-Z0-9-_])+$')]),
			linode_id: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AttachVolumePostBody {

		/**
		 * The ID of the Linode Config to include this Volume in. Must belong to the Linode referenced by `linode_id`. If not given, the last booted Config will be chosen.
		 */
		config_id?: number | null;

		/**
		 * The ID of the Linode to attach the volume to.
		 * Required
		 */
		linode_id: number;

		/**
		 * Defaults to true, if false is provided, the Volume will not be attached to the Linode Config. In this case more than 8 Volumes may be attached to a Linode if a Linode has 16GB of RAM or more. The number of volumes that can be attached is equal to the number of GB of RAM that the Linode has, up to a maximum of 64. `config_id` should not be passed if this is set to false and linode_id must be passed. The Linode must be running.
		 */
		persist_across_boots?: boolean | null;
	}
	export interface AttachVolumePostBodyFormProperties {

		/**
		 * The ID of the Linode Config to include this Volume in. Must belong to the Linode referenced by `linode_id`. If not given, the last booted Config will be chosen.
		 */
		config_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the Linode to attach the volume to.
		 * Required
		 */
		linode_id: FormControl<number | null | undefined>,

		/**
		 * Defaults to true, if false is provided, the Volume will not be attached to the Linode Config. In this case more than 8 Volumes may be attached to a Linode if a Linode has 16GB of RAM or more. The number of volumes that can be attached is equal to the number of GB of RAM that the Linode has, up to a maximum of 64. `config_id` should not be passed if this is set to false and linode_id must be passed. The Linode must be running.
		 */
		persist_across_boots: FormControl<boolean | null | undefined>,
	}
	export function CreateAttachVolumePostBodyFormGroup() {
		return new FormGroup<AttachVolumePostBodyFormProperties>({
			config_id: new FormControl<number | null | undefined>(undefined),
			linode_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			persist_across_boots: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CloneVolumePostBody {

		/**
		 * A Block Storage Volume associated with your Account.
		 * Required
		 */
		label: Volume;
	}
	export interface CloneVolumePostBodyFormProperties {
	}
	export function CreateCloneVolumePostBodyFormGroup() {
		return new FormGroup<CloneVolumePostBodyFormProperties>({
		});

	}

	export interface ResizeVolumePostBody {

		/**
		 * A Block Storage Volume associated with your Account.
		 * Required
		 */
		size: Volume;
	}
	export interface ResizeVolumePostBodyFormProperties {
	}
	export function CreateResizeVolumePostBodyFormGroup() {
		return new FormGroup<ResizeVolumePostBodyFormProperties>({
		});

	}

}

