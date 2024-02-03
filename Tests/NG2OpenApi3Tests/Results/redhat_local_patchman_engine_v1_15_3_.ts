import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ControllersAdvisoriesResponse {
		data?: Array<ControllersAdvisoryItem>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersAdvisoriesResponseFormProperties {
	}
	export function CreateControllersAdvisoriesResponseFormGroup() {
		return new FormGroup<ControllersAdvisoriesResponseFormProperties>({
		});

	}

	export interface ControllersAdvisoryItem {
		attributes?: ControllersAdvisoryItemAttributes;
		id?: string | null;
		type?: string | null;
	}
	export interface ControllersAdvisoryItemFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateControllersAdvisoryItemFormGroup() {
		return new FormGroup<ControllersAdvisoryItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersAdvisoryItemAttributes {
		advisory_type?: number | null;
		applicable_systems?: number | null;
		cve_count?: number | null;
		description?: string | null;
		public_date?: string | null;
		severity?: number | null;
		synopsis?: string | null;
	}
	export interface ControllersAdvisoryItemAttributesFormProperties {
		advisory_type: FormControl<number | null | undefined>,
		applicable_systems: FormControl<number | null | undefined>,
		cve_count: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		public_date: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
		synopsis: FormControl<string | null | undefined>,
	}
	export function CreateControllersAdvisoryItemAttributesFormGroup() {
		return new FormGroup<ControllersAdvisoryItemAttributesFormProperties>({
			advisory_type: new FormControl<number | null | undefined>(undefined),
			applicable_systems: new FormControl<number | null | undefined>(undefined),
			cve_count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			public_date: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
			synopsis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersLinks {
		first?: string | null;
		last?: string | null;
		next?: string | null;
		previous?: string | null;
	}
	export interface ControllersLinksFormProperties {
		first: FormControl<string | null | undefined>,
		last: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreateControllersLinksFormGroup() {
		return new FormGroup<ControllersLinksFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersListMeta {
		filter?: {[id: string]: ControllersFilterData };
		limit?: number | null;
		offset?: number | null;
		search?: string | null;
		sort?: Array<string>;
		subtotals?: {[id: string]: number };
		total_items?: number | null;
	}
	export interface ControllersListMetaFormProperties {
		filter: FormControl<{[id: string]: ControllersFilterData } | null | undefined>,
		limit: FormControl<number | null | undefined>,
		offset: FormControl<number | null | undefined>,
		search: FormControl<string | null | undefined>,
		subtotals: FormControl<{[id: string]: number } | null | undefined>,
		total_items: FormControl<number | null | undefined>,
	}
	export function CreateControllersListMetaFormGroup() {
		return new FormGroup<ControllersListMetaFormProperties>({
			filter: new FormControl<{[id: string]: ControllersFilterData } | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			search: new FormControl<string | null | undefined>(undefined),
			subtotals: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ControllersFilterData {
		op?: string | null;
		values?: Array<string>;
	}
	export interface ControllersFilterDataFormProperties {
		op: FormControl<string | null | undefined>,
	}
	export function CreateControllersFilterDataFormGroup() {
		return new FormGroup<ControllersFilterDataFormProperties>({
			op: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersAdvisoriesSystemsResponse {
		data?: {[id: string]: Array<string> };
	}
	export interface ControllersAdvisoriesSystemsResponseFormProperties {
		data: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateControllersAdvisoriesSystemsResponseFormGroup() {
		return new FormGroup<ControllersAdvisoriesSystemsResponseFormProperties>({
			data: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}

	export interface ControllersAdvisoryDetailAttributes {
		cves?: Array<string>;
		description?: string | null;
		fixes?: string | null;
		modified_date?: string | null;
		packages?: {[id: string]: string };
		public_date?: string | null;
		references?: Array<string>;
		severity?: number | null;
		solution?: string | null;
		synopsis?: string | null;
		topic?: string | null;
	}
	export interface ControllersAdvisoryDetailAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		fixes: FormControl<string | null | undefined>,
		modified_date: FormControl<string | null | undefined>,
		packages: FormControl<{[id: string]: string } | null | undefined>,
		public_date: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
		solution: FormControl<string | null | undefined>,
		synopsis: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreateControllersAdvisoryDetailAttributesFormGroup() {
		return new FormGroup<ControllersAdvisoryDetailAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fixes: new FormControl<string | null | undefined>(undefined),
			modified_date: new FormControl<string | null | undefined>(undefined),
			packages: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			public_date: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
			solution: new FormControl<string | null | undefined>(undefined),
			synopsis: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersAdvisoryDetailItem {
		attributes?: ControllersAdvisoryDetailAttributes;
		id?: string | null;
		type?: string | null;
	}
	export interface ControllersAdvisoryDetailItemFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateControllersAdvisoryDetailItemFormGroup() {
		return new FormGroup<ControllersAdvisoryDetailItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersAdvisoryDetailResponse {
		data?: ControllersAdvisoryDetailItem;
	}
	export interface ControllersAdvisoryDetailResponseFormProperties {
	}
	export function CreateControllersAdvisoryDetailResponseFormGroup() {
		return new FormGroup<ControllersAdvisoryDetailResponseFormProperties>({
		});

	}

	export interface ControllersAdvisoryInlineItem {
		advisory_type?: number | null;
		applicable_systems?: number | null;
		cve_count?: number | null;
		description?: string | null;
		id?: string | null;
		public_date?: string | null;
		severity?: number | null;
		synopsis?: string | null;
	}
	export interface ControllersAdvisoryInlineItemFormProperties {
		advisory_type: FormControl<number | null | undefined>,
		applicable_systems: FormControl<number | null | undefined>,
		cve_count: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		public_date: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
		synopsis: FormControl<string | null | undefined>,
	}
	export function CreateControllersAdvisoryInlineItemFormGroup() {
		return new FormGroup<ControllersAdvisoryInlineItemFormProperties>({
			advisory_type: new FormControl<number | null | undefined>(undefined),
			applicable_systems: new FormControl<number | null | undefined>(undefined),
			cve_count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			public_date: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
			synopsis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersAdvisorySystemsResponse {
		data?: Array<ControllersSystemItem>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersAdvisorySystemsResponseFormProperties {
	}
	export function CreateControllersAdvisorySystemsResponseFormGroup() {
		return new FormGroup<ControllersAdvisorySystemsResponseFormProperties>({
		});

	}

	export interface ControllersSystemItem {
		attributes?: ControllersSystemItemAttributes;
		id?: string | null;
		type?: string | null;
	}
	export interface ControllersSystemItemFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateControllersSystemItemFormGroup() {
		return new FormGroup<ControllersSystemItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemItemAttributes {
		created?: string | null;
		culled_timestamp?: string | null;
		display_name?: string | null;
		insights_id?: string | null;
		last_evaluation?: string | null;
		last_upload?: string | null;
		os_major?: string | null;
		os_minor?: string | null;
		os_name?: string | null;
		other_count?: number | null;
		packages_installed?: number | null;
		packages_updatable?: number | null;
		rhba_count?: number | null;
		rhea_count?: number | null;
		rhsa_count?: number | null;
		rhsm?: string | null;
		stale?: boolean | null;
		stale_timestamp?: string | null;
		stale_warning_timestamp?: string | null;
		third_party?: boolean | null;
	}
	export interface ControllersSystemItemAttributesFormProperties {
		created: FormControl<string | null | undefined>,
		culled_timestamp: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		insights_id: FormControl<string | null | undefined>,
		last_evaluation: FormControl<string | null | undefined>,
		last_upload: FormControl<string | null | undefined>,
		os_major: FormControl<string | null | undefined>,
		os_minor: FormControl<string | null | undefined>,
		os_name: FormControl<string | null | undefined>,
		other_count: FormControl<number | null | undefined>,
		packages_installed: FormControl<number | null | undefined>,
		packages_updatable: FormControl<number | null | undefined>,
		rhba_count: FormControl<number | null | undefined>,
		rhea_count: FormControl<number | null | undefined>,
		rhsa_count: FormControl<number | null | undefined>,
		rhsm: FormControl<string | null | undefined>,
		stale: FormControl<boolean | null | undefined>,
		stale_timestamp: FormControl<string | null | undefined>,
		stale_warning_timestamp: FormControl<string | null | undefined>,
		third_party: FormControl<boolean | null | undefined>,
	}
	export function CreateControllersSystemItemAttributesFormGroup() {
		return new FormGroup<ControllersSystemItemAttributesFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			culled_timestamp: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			insights_id: new FormControl<string | null | undefined>(undefined),
			last_evaluation: new FormControl<string | null | undefined>(undefined),
			last_upload: new FormControl<string | null | undefined>(undefined),
			os_major: new FormControl<string | null | undefined>(undefined),
			os_minor: new FormControl<string | null | undefined>(undefined),
			os_name: new FormControl<string | null | undefined>(undefined),
			other_count: new FormControl<number | null | undefined>(undefined),
			packages_installed: new FormControl<number | null | undefined>(undefined),
			packages_updatable: new FormControl<number | null | undefined>(undefined),
			rhba_count: new FormControl<number | null | undefined>(undefined),
			rhea_count: new FormControl<number | null | undefined>(undefined),
			rhsa_count: new FormControl<number | null | undefined>(undefined),
			rhsm: new FormControl<string | null | undefined>(undefined),
			stale: new FormControl<boolean | null | undefined>(undefined),
			stale_timestamp: new FormControl<string | null | undefined>(undefined),
			stale_warning_timestamp: new FormControl<string | null | undefined>(undefined),
			third_party: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ControllersPackageDetailAttributes {
		advisory_id?: string | null;
		description?: string | null;
		name?: string | null;
		summary?: string | null;
		version?: string | null;
	}
	export interface ControllersPackageDetailAttributesFormProperties {
		advisory_id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateControllersPackageDetailAttributesFormGroup() {
		return new FormGroup<ControllersPackageDetailAttributesFormProperties>({
			advisory_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersPackageDetailItem {
		attributes?: ControllersPackageDetailAttributes;
		id?: string | null;
		type?: string | null;
	}
	export interface ControllersPackageDetailItemFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateControllersPackageDetailItemFormGroup() {
		return new FormGroup<ControllersPackageDetailItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersPackageDetailResponse {
		data?: ControllersPackageDetailItem;
	}
	export interface ControllersPackageDetailResponseFormProperties {
	}
	export function CreateControllersPackageDetailResponseFormGroup() {
		return new FormGroup<ControllersPackageDetailResponseFormProperties>({
		});

	}

	export interface ControllersPackageItem {
		name?: string | null;
		summary?: string | null;
		systems_installed?: number | null;
		systems_updatable?: number | null;
	}
	export interface ControllersPackageItemFormProperties {
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		systems_installed: FormControl<number | null | undefined>,
		systems_updatable: FormControl<number | null | undefined>,
	}
	export function CreateControllersPackageItemFormGroup() {
		return new FormGroup<ControllersPackageItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			systems_installed: new FormControl<number | null | undefined>(undefined),
			systems_updatable: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ControllersPackageSystemItem {
		available_evra?: string | null;
		display_name?: string | null;
		id?: string | null;
		installed_evra?: string | null;
		updatable?: boolean | null;
	}
	export interface ControllersPackageSystemItemFormProperties {
		available_evra: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		installed_evra: FormControl<string | null | undefined>,
		updatable: FormControl<boolean | null | undefined>,
	}
	export function CreateControllersPackageSystemItemFormGroup() {
		return new FormGroup<ControllersPackageSystemItemFormProperties>({
			available_evra: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			installed_evra: new FormControl<string | null | undefined>(undefined),
			updatable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ControllersPackageSystemsResponse {
		data?: Array<ControllersPackageSystemItem>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersPackageSystemsResponseFormProperties {
	}
	export function CreateControllersPackageSystemsResponseFormGroup() {
		return new FormGroup<ControllersPackageSystemsResponseFormProperties>({
		});

	}

	export interface ControllersPackageVersionItem {
		evra?: string | null;
	}
	export interface ControllersPackageVersionItemFormProperties {
		evra: FormControl<string | null | undefined>,
	}
	export function CreateControllersPackageVersionItemFormGroup() {
		return new FormGroup<ControllersPackageVersionItemFormProperties>({
			evra: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersPackageVersionsResponse {
		data?: Array<ControllersPackageVersionItem>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersPackageVersionsResponseFormProperties {
	}
	export function CreateControllersPackageVersionsResponseFormGroup() {
		return new FormGroup<ControllersPackageVersionsResponseFormProperties>({
		});

	}

	export interface ControllersPackagesResponse {
		data?: Array<ControllersPackageItem>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersPackagesResponseFormProperties {
	}
	export function CreateControllersPackagesResponseFormGroup() {
		return new FormGroup<ControllersPackagesResponseFormProperties>({
		});

	}

	export interface ControllersSystemAdvisoriesDBLookup {
		advisory_type?: number | null;
		cve_count?: number | null;
		description?: string | null;
		id?: string | null;
		public_date?: string | null;
		severity?: number | null;
		synopsis?: string | null;
	}
	export interface ControllersSystemAdvisoriesDBLookupFormProperties {
		advisory_type: FormControl<number | null | undefined>,
		cve_count: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		public_date: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
		synopsis: FormControl<string | null | undefined>,
	}
	export function CreateControllersSystemAdvisoriesDBLookupFormGroup() {
		return new FormGroup<ControllersSystemAdvisoriesDBLookupFormProperties>({
			advisory_type: new FormControl<number | null | undefined>(undefined),
			cve_count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			public_date: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
			synopsis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemAdvisoriesResponse {

		/** advisories items */
		data?: Array<ControllersSystemAdvisoryItem>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersSystemAdvisoriesResponseFormProperties {
	}
	export function CreateControllersSystemAdvisoriesResponseFormGroup() {
		return new FormGroup<ControllersSystemAdvisoriesResponseFormProperties>({
		});

	}

	export interface ControllersSystemAdvisoryItem {
		attributes?: ControllersSystemAdvisoryItemAttributes;
		id?: string | null;
		type?: string | null;
	}
	export interface ControllersSystemAdvisoryItemFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateControllersSystemAdvisoryItemFormGroup() {
		return new FormGroup<ControllersSystemAdvisoryItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemAdvisoryItemAttributes {
		advisory_type?: number | null;
		cve_count?: number | null;
		description?: string | null;
		public_date?: string | null;
		severity?: number | null;
		synopsis?: string | null;
	}
	export interface ControllersSystemAdvisoryItemAttributesFormProperties {
		advisory_type: FormControl<number | null | undefined>,
		cve_count: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		public_date: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
		synopsis: FormControl<string | null | undefined>,
	}
	export function CreateControllersSystemAdvisoryItemAttributesFormGroup() {
		return new FormGroup<ControllersSystemAdvisoryItemAttributesFormProperties>({
			advisory_type: new FormControl<number | null | undefined>(undefined),
			cve_count: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			public_date: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
			synopsis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemDetailResponse {
		data?: ControllersSystemItem;
	}
	export interface ControllersSystemDetailResponseFormProperties {
	}
	export function CreateControllersSystemDetailResponseFormGroup() {
		return new FormGroup<ControllersSystemDetailResponseFormProperties>({
		});

	}

	export interface ControllersSystemInlineItem {
		created?: string | null;
		culled_timestamp?: string | null;
		display_name?: string | null;
		id?: string | null;
		insights_id?: string | null;
		last_evaluation?: string | null;
		last_upload?: string | null;
		os_major?: string | null;
		os_minor?: string | null;
		os_name?: string | null;
		other_count?: number | null;
		packages_installed?: number | null;
		packages_updatable?: number | null;
		rhba_count?: number | null;
		rhea_count?: number | null;
		rhsa_count?: number | null;
		rhsm?: string | null;
		stale?: boolean | null;
		stale_timestamp?: string | null;
		stale_warning_timestamp?: string | null;
		third_party?: boolean | null;
	}
	export interface ControllersSystemInlineItemFormProperties {
		created: FormControl<string | null | undefined>,
		culled_timestamp: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		insights_id: FormControl<string | null | undefined>,
		last_evaluation: FormControl<string | null | undefined>,
		last_upload: FormControl<string | null | undefined>,
		os_major: FormControl<string | null | undefined>,
		os_minor: FormControl<string | null | undefined>,
		os_name: FormControl<string | null | undefined>,
		other_count: FormControl<number | null | undefined>,
		packages_installed: FormControl<number | null | undefined>,
		packages_updatable: FormControl<number | null | undefined>,
		rhba_count: FormControl<number | null | undefined>,
		rhea_count: FormControl<number | null | undefined>,
		rhsa_count: FormControl<number | null | undefined>,
		rhsm: FormControl<string | null | undefined>,
		stale: FormControl<boolean | null | undefined>,
		stale_timestamp: FormControl<string | null | undefined>,
		stale_warning_timestamp: FormControl<string | null | undefined>,
		third_party: FormControl<boolean | null | undefined>,
	}
	export function CreateControllersSystemInlineItemFormGroup() {
		return new FormGroup<ControllersSystemInlineItemFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			culled_timestamp: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insights_id: new FormControl<string | null | undefined>(undefined),
			last_evaluation: new FormControl<string | null | undefined>(undefined),
			last_upload: new FormControl<string | null | undefined>(undefined),
			os_major: new FormControl<string | null | undefined>(undefined),
			os_minor: new FormControl<string | null | undefined>(undefined),
			os_name: new FormControl<string | null | undefined>(undefined),
			other_count: new FormControl<number | null | undefined>(undefined),
			packages_installed: new FormControl<number | null | undefined>(undefined),
			packages_updatable: new FormControl<number | null | undefined>(undefined),
			rhba_count: new FormControl<number | null | undefined>(undefined),
			rhea_count: new FormControl<number | null | undefined>(undefined),
			rhsa_count: new FormControl<number | null | undefined>(undefined),
			rhsm: new FormControl<string | null | undefined>(undefined),
			stale: new FormControl<boolean | null | undefined>(undefined),
			stale_timestamp: new FormControl<string | null | undefined>(undefined),
			stale_warning_timestamp: new FormControl<string | null | undefined>(undefined),
			third_party: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemPackageData {
		description?: string | null;
		evra?: string | null;
		name?: string | null;
		summary?: string | null;
		updatable?: boolean | null;
		updates?: Array<ModelsPackageUpdate>;
	}
	export interface ControllersSystemPackageDataFormProperties {
		description: FormControl<string | null | undefined>,
		evra: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		updatable: FormControl<boolean | null | undefined>,
	}
	export function CreateControllersSystemPackageDataFormGroup() {
		return new FormGroup<ControllersSystemPackageDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			evra: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			updatable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModelsPackageUpdate {
		advisory?: string | null;
		evra?: string | null;
	}
	export interface ModelsPackageUpdateFormProperties {
		advisory: FormControl<string | null | undefined>,
		evra: FormControl<string | null | undefined>,
	}
	export function CreateModelsPackageUpdateFormGroup() {
		return new FormGroup<ModelsPackageUpdateFormProperties>({
			advisory: new FormControl<string | null | undefined>(undefined),
			evra: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemPackageInline {
		description?: string | null;
		evra?: string | null;
		latest_evra?: string | null;
		name?: string | null;
		summary?: string | null;
		updatable?: boolean | null;
	}
	export interface ControllersSystemPackageInlineFormProperties {
		description: FormControl<string | null | undefined>,
		evra: FormControl<string | null | undefined>,
		latest_evra: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		updatable: FormControl<boolean | null | undefined>,
	}
	export function CreateControllersSystemPackageInlineFormGroup() {
		return new FormGroup<ControllersSystemPackageInlineFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			evra: new FormControl<string | null | undefined>(undefined),
			latest_evra: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			updatable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemPackageResponse {
		data?: Array<ControllersSystemPackageData>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersSystemPackageResponseFormProperties {
	}
	export function CreateControllersSystemPackageResponseFormGroup() {
		return new FormGroup<ControllersSystemPackageResponseFormProperties>({
		});

	}

	export interface ControllersSystemsAdvisoriesRequest {
		advisories?: Array<string>;
		systems?: Array<string>;
	}
	export interface ControllersSystemsAdvisoriesRequestFormProperties {
	}
	export function CreateControllersSystemsAdvisoriesRequestFormGroup() {
		return new FormGroup<ControllersSystemsAdvisoriesRequestFormProperties>({
		});

	}

	export interface ControllersSystemsAdvisoriesResponse {
		data?: {[id: string]: Array<string> };
	}
	export interface ControllersSystemsAdvisoriesResponseFormProperties {
		data: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateControllersSystemsAdvisoriesResponseFormGroup() {
		return new FormGroup<ControllersSystemsAdvisoriesResponseFormProperties>({
			data: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}

	export interface ControllersSystemsResponse {
		data?: Array<ControllersSystemItem>;
		links?: ControllersLinks;
		meta?: ControllersListMeta;
	}
	export interface ControllersSystemsResponseFormProperties {
	}
	export function CreateControllersSystemsResponseFormGroup() {
		return new FormGroup<ControllersSystemsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Show me all applicable advisories for all my systems
		 * Show me all applicable advisories for all my systems
		 * Get api/patch/v1/advisories
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {ListAdvisoriesSort} sort Sort field
		 * @param {string} search Find matching text
		 * @param {string} filter_id Filter 
		 * @param {string} filter_description Filter
		 * @param {string} filter_public_date Filter
		 * @param {string} filter_synopsis Filter
		 * @param {string} filter_advisory_type Filter
		 * @param {string} filter_severity Filter
		 * @param {string} filter_applicable_systems Filter
		 * @param {Array<string>} tags Tag filter
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @return {ControllersAdvisoriesResponse} OK
		 */
		ListAdvisories(limit: number | null | undefined, offset: number | null | undefined, sort: ListAdvisoriesSort | null | undefined, search: string | null | undefined, filter_id: string | null | undefined, filter_description: string | null | undefined, filter_public_date: string | null | undefined, filter_synopsis: string | null | undefined, filter_advisory_type: string | null | undefined, filter_severity: string | null | undefined, filter_applicable_systems: string | null | undefined, tags: Array<string> | null | undefined, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined): Observable<ControllersAdvisoriesResponse> {
			return this.http.get<ControllersAdvisoriesResponse>(this.baseUri + 'api/patch/v1/advisories?limit=' + limit + '&offset=' + offset + '&sort=' + sort + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_description=' + (filter_description == null ? '' : encodeURIComponent(filter_description)) + '&filter_public_date=' + (filter_public_date == null ? '' : encodeURIComponent(filter_public_date)) + '&filter_synopsis=' + (filter_synopsis == null ? '' : encodeURIComponent(filter_synopsis)) + '&filter_advisory_type=' + (filter_advisory_type == null ? '' : encodeURIComponent(filter_advisory_type)) + '&filter_severity=' + (filter_severity == null ? '' : encodeURIComponent(filter_severity)) + '&filter_applicable_systems=' + (filter_applicable_systems == null ? '' : encodeURIComponent(filter_applicable_systems)) + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Show me details an advisory by given advisory name
		 * Show me details an advisory by given advisory name
		 * Get api/patch/v1/advisories/{advisory_id}
		 * @param {string} advisory_id Advisory ID
		 * @return {ControllersAdvisoryDetailResponse} OK
		 */
		DetailAdvisory(advisory_id: string): Observable<ControllersAdvisoryDetailResponse> {
			return this.http.get<ControllersAdvisoryDetailResponse>(this.baseUri + 'api/patch/v1/advisories/' + (advisory_id == null ? '' : encodeURIComponent(advisory_id)), {});
		}

		/**
		 * Show me systems on which the given advisory is applicable
		 * Show me systems on which the given advisory is applicable
		 * Get api/patch/v1/advisories/{advisory_id}/systems
		 * @param {string} advisory_id Advisory ID
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {ListAdvisorySystemsSort} sort Sort field
		 * @param {string} search Find matching text
		 * @param {string} filter_id Filter
		 * @param {string} filter_insights_id Filter
		 * @param {string} filter_display_name Filter
		 * @param {string} filter_last_evaluation Filter
		 * @param {string} filter_last_upload Filter
		 * @param {string} filter_rhsa_count Filter
		 * @param {string} filter_rhba_count Filter
		 * @param {string} filter_rhea_count Filter
		 * @param {string} filter_other_count Filter
		 * @param {string} filter_stale Filter
		 * @param {string} filter_stale_timestamp Filter
		 * @param {string} filter_stale_warning_timestamp Filter
		 * @param {string} filter_culled_timestamp Filter
		 * @param {string} filter_created Filter
		 * @param {Array<string>} tags Tag filter
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @return {ControllersAdvisorySystemsResponse} OK
		 */
		ListAdvisorySystems(advisory_id: string, limit: number | null | undefined, offset: number | null | undefined, sort: ListAdvisorySystemsSort | null | undefined, search: string | null | undefined, filter_id: string | null | undefined, filter_insights_id: string | null | undefined, filter_display_name: string | null | undefined, filter_last_evaluation: string | null | undefined, filter_last_upload: string | null | undefined, filter_rhsa_count: string | null | undefined, filter_rhba_count: string | null | undefined, filter_rhea_count: string | null | undefined, filter_other_count: string | null | undefined, filter_stale: string | null | undefined, filter_stale_timestamp: string | null | undefined, filter_stale_warning_timestamp: string | null | undefined, filter_culled_timestamp: string | null | undefined, filter_created: string | null | undefined, tags: Array<string> | null | undefined, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined): Observable<ControllersAdvisorySystemsResponse> {
			return this.http.get<ControllersAdvisorySystemsResponse>(this.baseUri + 'api/patch/v1/advisories/' + (advisory_id == null ? '' : encodeURIComponent(advisory_id)) + '/systems&limit=' + limit + '&offset=' + offset + '&sort=' + sort + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_insights_id=' + (filter_insights_id == null ? '' : encodeURIComponent(filter_insights_id)) + '&filter_display_name=' + (filter_display_name == null ? '' : encodeURIComponent(filter_display_name)) + '&filter_last_evaluation=' + (filter_last_evaluation == null ? '' : encodeURIComponent(filter_last_evaluation)) + '&filter_last_upload=' + (filter_last_upload == null ? '' : encodeURIComponent(filter_last_upload)) + '&filter_rhsa_count=' + (filter_rhsa_count == null ? '' : encodeURIComponent(filter_rhsa_count)) + '&filter_rhba_count=' + (filter_rhba_count == null ? '' : encodeURIComponent(filter_rhba_count)) + '&filter_rhea_count=' + (filter_rhea_count == null ? '' : encodeURIComponent(filter_rhea_count)) + '&filter_other_count=' + (filter_other_count == null ? '' : encodeURIComponent(filter_other_count)) + '&filter_stale=' + (filter_stale == null ? '' : encodeURIComponent(filter_stale)) + '&filter_stale_timestamp=' + (filter_stale_timestamp == null ? '' : encodeURIComponent(filter_stale_timestamp)) + '&filter_stale_warning_timestamp=' + (filter_stale_warning_timestamp == null ? '' : encodeURIComponent(filter_stale_warning_timestamp)) + '&filter_culled_timestamp=' + (filter_culled_timestamp == null ? '' : encodeURIComponent(filter_culled_timestamp)) + '&filter_created=' + (filter_created == null ? '' : encodeURIComponent(filter_created)) + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Export applicable advisories for all my systems
		 * Export applicable advisories for all my systems
		 * Get api/patch/v1/export/advisories
		 * @param {string} search Find matching text
		 * @param {string} filter_id Filter
		 * @param {string} filter_description Filter
		 * @param {string} filter_public_date Filter
		 * @param {string} filter_synopsis Filter
		 * @param {string} filter_advisory_type Filter
		 * @param {string} filter_severity Filter
		 * @param {string} filter_applicable_systems Filter
		 * @return {Array<ControllersAdvisoryInlineItem>} OK
		 */
		ExportAdvisories(search: string | null | undefined, filter_id: string | null | undefined, filter_description: string | null | undefined, filter_public_date: string | null | undefined, filter_synopsis: string | null | undefined, filter_advisory_type: string | null | undefined, filter_severity: string | null | undefined, filter_applicable_systems: string | null | undefined): Observable<Array<ControllersAdvisoryInlineItem>> {
			return this.http.get<Array<ControllersAdvisoryInlineItem>>(this.baseUri + 'api/patch/v1/export/advisories?search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_description=' + (filter_description == null ? '' : encodeURIComponent(filter_description)) + '&filter_public_date=' + (filter_public_date == null ? '' : encodeURIComponent(filter_public_date)) + '&filter_synopsis=' + (filter_synopsis == null ? '' : encodeURIComponent(filter_synopsis)) + '&filter_advisory_type=' + (filter_advisory_type == null ? '' : encodeURIComponent(filter_advisory_type)) + '&filter_severity=' + (filter_severity == null ? '' : encodeURIComponent(filter_severity)) + '&filter_applicable_systems=' + (filter_applicable_systems == null ? '' : encodeURIComponent(filter_applicable_systems)), {});
		}

		/**
		 * Export systems for my account
		 * Export systems for my account
		 * Get api/patch/v1/export/advisories/{advisory_id}/systems
		 * @param {string} advisory_id Advisory ID
		 * @param {string} search Find matching text
		 * @param {string} filter_id Filter
		 * @param {string} filter_display_name Filter
		 * @param {string} filter_last_evaluation Filter
		 * @param {string} filter_last_upload Filter
		 * @param {string} filter_rhsa_count Filter
		 * @param {string} filter_rhba_count Filter
		 * @param {string} filter_rhea_count Filter
		 * @param {string} filter_other_count Filter
		 * @param {string} filter_stale Filter
		 * @param {string} filter_packages_installed Filter
		 * @param {string} filter_packages_updatable Filter
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @param {Array<string>} tags Tag filter
		 * @return {Array<ControllersSystemInlineItem>} OK
		 */
		ExportAdvisorySystems(advisory_id: string, search: string | null | undefined, filter_id: string | null | undefined, filter_display_name: string | null | undefined, filter_last_evaluation: string | null | undefined, filter_last_upload: string | null | undefined, filter_rhsa_count: string | null | undefined, filter_rhba_count: string | null | undefined, filter_rhea_count: string | null | undefined, filter_other_count: string | null | undefined, filter_stale: string | null | undefined, filter_packages_installed: string | null | undefined, filter_packages_updatable: string | null | undefined, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined, tags: Array<string> | null | undefined): Observable<Array<ControllersSystemInlineItem>> {
			return this.http.get<Array<ControllersSystemInlineItem>>(this.baseUri + 'api/patch/v1/export/advisories/' + (advisory_id == null ? '' : encodeURIComponent(advisory_id)) + '/systems&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_display_name=' + (filter_display_name == null ? '' : encodeURIComponent(filter_display_name)) + '&filter_last_evaluation=' + (filter_last_evaluation == null ? '' : encodeURIComponent(filter_last_evaluation)) + '&filter_last_upload=' + (filter_last_upload == null ? '' : encodeURIComponent(filter_last_upload)) + '&filter_rhsa_count=' + (filter_rhsa_count == null ? '' : encodeURIComponent(filter_rhsa_count)) + '&filter_rhba_count=' + (filter_rhba_count == null ? '' : encodeURIComponent(filter_rhba_count)) + '&filter_rhea_count=' + (filter_rhea_count == null ? '' : encodeURIComponent(filter_rhea_count)) + '&filter_other_count=' + (filter_other_count == null ? '' : encodeURIComponent(filter_other_count)) + '&filter_stale=' + (filter_stale == null ? '' : encodeURIComponent(filter_stale)) + '&filter_packages_installed=' + (filter_packages_installed == null ? '' : encodeURIComponent(filter_packages_installed)) + '&filter_packages_updatable=' + (filter_packages_updatable == null ? '' : encodeURIComponent(filter_packages_updatable)) + '&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Show me all installed packages across my systems
		 * Show me all installed packages across my systems
		 * Get api/patch/v1/export/packages
		 * @param {ExportPackagesSort} sort Sort field
		 * @param {string} search Find matching text
		 * @param {string} filter_name Filter
		 * @param {string} filter_systems_installed Filter
		 * @param {string} filter_systems_updatable Filter
		 * @param {string} filter_summary Filter
		 * @return {Array<ControllersPackageItem>} OK
		 */
		ExportPackages(sort: ExportPackagesSort | null | undefined, search: string | null | undefined, filter_name: string | null | undefined, filter_systems_installed: string | null | undefined, filter_systems_updatable: string | null | undefined, filter_summary: string | null | undefined): Observable<Array<ControllersPackageItem>> {
			return this.http.get<Array<ControllersPackageItem>>(this.baseUri + 'api/patch/v1/export/packages?sort=' + sort + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_name=' + (filter_name == null ? '' : encodeURIComponent(filter_name)) + '&filter_systems_installed=' + (filter_systems_installed == null ? '' : encodeURIComponent(filter_systems_installed)) + '&filter_systems_updatable=' + (filter_systems_updatable == null ? '' : encodeURIComponent(filter_systems_updatable)) + '&filter_summary=' + (filter_summary == null ? '' : encodeURIComponent(filter_summary)), {});
		}

		/**
		 * Show me all my systems which have a package installed
		 * Show me all my systems which have a package installed
		 * Get api/patch/v1/export/packages/{package_name}/systems
		 * @param {string} package_name Package name
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @param {Array<string>} tags Tag filter
		 * @return {Array<ControllersPackageSystemItem>} OK
		 */
		ExportPackageSystems(package_name: string, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined, tags: Array<string> | null | undefined): Observable<Array<ControllersPackageSystemItem>> {
			return this.http.get<Array<ControllersPackageSystemItem>>(this.baseUri + 'api/patch/v1/export/packages/' + (package_name == null ? '' : encodeURIComponent(package_name)) + '/systems&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Export systems for my account
		 * Export systems for my account
		 * Get api/patch/v1/export/systems
		 * @param {string} search Find matching text
		 * @param {string} filter_id Filter
		 * @param {string} filter_display_name Filter
		 * @param {string} filter_last_evaluation Filter
		 * @param {string} filter_last_upload Filter
		 * @param {string} filter_rhsa_count Filter
		 * @param {string} filter_rhba_count Filter
		 * @param {string} filter_rhea_count Filter
		 * @param {string} filter_other_count Filter
		 * @param {string} filter_stale Filter
		 * @param {string} filter_packages_installed Filter
		 * @param {string} filter_packages_updatable Filter
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @param {Array<string>} tags Tag filter
		 * @return {Array<ControllersSystemInlineItem>} OK
		 */
		ExportSystems(search: string | null | undefined, filter_id: string | null | undefined, filter_display_name: string | null | undefined, filter_last_evaluation: string | null | undefined, filter_last_upload: string | null | undefined, filter_rhsa_count: string | null | undefined, filter_rhba_count: string | null | undefined, filter_rhea_count: string | null | undefined, filter_other_count: string | null | undefined, filter_stale: string | null | undefined, filter_packages_installed: string | null | undefined, filter_packages_updatable: string | null | undefined, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined, tags: Array<string> | null | undefined): Observable<Array<ControllersSystemInlineItem>> {
			return this.http.get<Array<ControllersSystemInlineItem>>(this.baseUri + 'api/patch/v1/export/systems?search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_display_name=' + (filter_display_name == null ? '' : encodeURIComponent(filter_display_name)) + '&filter_last_evaluation=' + (filter_last_evaluation == null ? '' : encodeURIComponent(filter_last_evaluation)) + '&filter_last_upload=' + (filter_last_upload == null ? '' : encodeURIComponent(filter_last_upload)) + '&filter_rhsa_count=' + (filter_rhsa_count == null ? '' : encodeURIComponent(filter_rhsa_count)) + '&filter_rhba_count=' + (filter_rhba_count == null ? '' : encodeURIComponent(filter_rhba_count)) + '&filter_rhea_count=' + (filter_rhea_count == null ? '' : encodeURIComponent(filter_rhea_count)) + '&filter_other_count=' + (filter_other_count == null ? '' : encodeURIComponent(filter_other_count)) + '&filter_stale=' + (filter_stale == null ? '' : encodeURIComponent(filter_stale)) + '&filter_packages_installed=' + (filter_packages_installed == null ? '' : encodeURIComponent(filter_packages_installed)) + '&filter_packages_updatable=' + (filter_packages_updatable == null ? '' : encodeURIComponent(filter_packages_updatable)) + '&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&') + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Export applicable advisories for all my systems
		 * Export applicable advisories for all my systems
		 * Get api/patch/v1/export/systems/{inventory_id}/advisories
		 * @param {string} inventory_id Inventory ID
		 * @param {string} search Find matching text
		 * @param {string} filter_id Filter
		 * @param {string} filter_description Filter
		 * @param {string} filter_public_date Filter
		 * @param {string} filter_synopsis Filter
		 * @param {string} filter_advisory_type Filter
		 * @param {string} filter_severity Filter
		 * @return {Array<ControllersSystemAdvisoriesDBLookup>} OK
		 */
		ExportSystemAdvisories(inventory_id: string, search: string | null | undefined, filter_id: string | null | undefined, filter_description: string | null | undefined, filter_public_date: string | null | undefined, filter_synopsis: string | null | undefined, filter_advisory_type: string | null | undefined, filter_severity: string | null | undefined): Observable<Array<ControllersSystemAdvisoriesDBLookup>> {
			return this.http.get<Array<ControllersSystemAdvisoriesDBLookup>>(this.baseUri + 'api/patch/v1/export/systems/' + (inventory_id == null ? '' : encodeURIComponent(inventory_id)) + '/advisories&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_description=' + (filter_description == null ? '' : encodeURIComponent(filter_description)) + '&filter_public_date=' + (filter_public_date == null ? '' : encodeURIComponent(filter_public_date)) + '&filter_synopsis=' + (filter_synopsis == null ? '' : encodeURIComponent(filter_synopsis)) + '&filter_advisory_type=' + (filter_advisory_type == null ? '' : encodeURIComponent(filter_advisory_type)) + '&filter_severity=' + (filter_severity == null ? '' : encodeURIComponent(filter_severity)), {});
		}

		/**
		 * Show me details about a system packages by given inventory id
		 * Show me details about a system packages by given inventory id
		 * Get api/patch/v1/export/systems/{inventory_id}/packages
		 * @param {string} inventory_id Inventory ID
		 * @param {string} search Find matching text
		 * @param {string} filter_name Filter
		 * @param {string} filter_description Filter
		 * @param {string} filter_evra Filter
		 * @param {string} filter_summary Filter
		 * @param {boolean} filter_updatable Filter
		 * @return {Array<ControllersSystemPackageInline>} OK
		 */
		ExportSystemPackages(inventory_id: string, search: string | null | undefined, filter_name: string | null | undefined, filter_description: string | null | undefined, filter_evra: string | null | undefined, filter_summary: string | null | undefined, filter_updatable: boolean | null | undefined): Observable<Array<ControllersSystemPackageInline>> {
			return this.http.get<Array<ControllersSystemPackageInline>>(this.baseUri + 'api/patch/v1/export/systems/' + (inventory_id == null ? '' : encodeURIComponent(inventory_id)) + '/packages&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_name=' + (filter_name == null ? '' : encodeURIComponent(filter_name)) + '&filter_description=' + (filter_description == null ? '' : encodeURIComponent(filter_description)) + '&filter_evra=' + (filter_evra == null ? '' : encodeURIComponent(filter_evra)) + '&filter_summary=' + (filter_summary == null ? '' : encodeURIComponent(filter_summary)) + '&filter_updatable=' + filter_updatable, {});
		}

		/**
		 * Show me all installed packages across my systems
		 * Show me all installed packages across my systems
		 * Get api/patch/v1/packages/
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {ExportPackagesSort} sort Sort field
		 * @param {string} search Find matching text
		 * @param {string} filter_name Filter
		 * @param {string} filter_systems_installed Filter
		 * @param {string} filter_systems_updatable Filter
		 * @param {string} filter_summary Filter
		 * @param {Array<string>} tags Tag filter
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @return {ControllersPackagesResponse} OK
		 */
		ListPackages(limit: number | null | undefined, offset: number | null | undefined, sort: ExportPackagesSort | null | undefined, search: string | null | undefined, filter_name: string | null | undefined, filter_systems_installed: string | null | undefined, filter_systems_updatable: string | null | undefined, filter_summary: string | null | undefined, tags: Array<string> | null | undefined, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined): Observable<ControllersPackagesResponse> {
			return this.http.get<ControllersPackagesResponse>(this.baseUri + 'api/patch/v1/packages/?limit=' + limit + '&offset=' + offset + '&sort=' + sort + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_name=' + (filter_name == null ? '' : encodeURIComponent(filter_name)) + '&filter_systems_installed=' + (filter_systems_installed == null ? '' : encodeURIComponent(filter_systems_installed)) + '&filter_systems_updatable=' + (filter_systems_updatable == null ? '' : encodeURIComponent(filter_systems_updatable)) + '&filter_summary=' + (filter_summary == null ? '' : encodeURIComponent(filter_summary)) + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Show me metadata of selected package
		 * Show me metadata of selected package
		 * Get api/patch/v1/packages/{package_name}
		 * @param {string} package_name package_name - latest, nevra - exact version
		 * @return {ControllersPackageDetailResponse} OK
		 */
		LatestPackage(package_name: string): Observable<ControllersPackageDetailResponse> {
			return this.http.get<ControllersPackageDetailResponse>(this.baseUri + 'api/patch/v1/packages/' + (package_name == null ? '' : encodeURIComponent(package_name)), {});
		}

		/**
		 * Show me all my systems which have a package installed
		 * Show me all my systems which have a package installed
		 * Get api/patch/v1/packages/{package_name}/systems
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {string} package_name Package name
		 * @param {Array<string>} tags Tag filter
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @return {ControllersPackageSystemsResponse} OK
		 */
		PackageSystems(limit: number | null | undefined, offset: number | null | undefined, package_name: string, tags: Array<string> | null | undefined, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined): Observable<ControllersPackageSystemsResponse> {
			return this.http.get<ControllersPackageSystemsResponse>(this.baseUri + 'api/patch/v1/packages/' + (package_name == null ? '' : encodeURIComponent(package_name)) + '/systems?limit=' + limit + '&offset=' + offset + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Show me all package versions installed on some system
		 * Show me all package versions installed on some system
		 * Get api/patch/v1/packages/{package_name}/versions
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {string} package_name Package name
		 * @return {ControllersPackageVersionsResponse} OK
		 */
		PackageVersions(limit: number | null | undefined, offset: number | null | undefined, package_name: string): Observable<ControllersPackageVersionsResponse> {
			return this.http.get<ControllersPackageVersionsResponse>(this.baseUri + 'api/patch/v1/packages/' + (package_name == null ? '' : encodeURIComponent(package_name)) + '/versions?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Show me all my systems
		 * Show me all my systems
		 * Get api/patch/v1/systems
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {ListSystemsSort} sort Sort field
		 * @param {string} search Find matching text
		 * @param {string} filter_insights_id Filter
		 * @param {string} filter_id Filter
		 * @param {string} filter_display_name Filter
		 * @param {string} filter_last_evaluation Filter
		 * @param {string} filter_last_upload Filter
		 * @param {string} filter_rhsa_count Filter
		 * @param {string} filter_rhba_count Filter
		 * @param {string} filter_rhea_count Filter
		 * @param {string} filter_other_count Filter
		 * @param {string} filter_stale Filter
		 * @param {string} filter_packages_installed Filter
		 * @param {string} filter_packages_updatable Filter
		 * @param {string} filter_stale_timestamp Filter
		 * @param {string} filter_stale_warning_timestamp Filter
		 * @param {string} filter_culled_timestamp Filter
		 * @param {string} filter_created Filter
		 * @param {Array<string>} tags Tag filter
		 * @param {string} filter_system_profile_sap_system Filter only SAP systems
		 * @param {Array<string>} filter_system_profile_sap_sids_in Filter systems by their SAP SIDs
		 * @return {ControllersSystemsResponse} OK
		 */
		ListSystems(limit: number | null | undefined, offset: number | null | undefined, sort: ListSystemsSort | null | undefined, search: string | null | undefined, filter_insights_id: string | null | undefined, filter_id: string | null | undefined, filter_display_name: string | null | undefined, filter_last_evaluation: string | null | undefined, filter_last_upload: string | null | undefined, filter_rhsa_count: string | null | undefined, filter_rhba_count: string | null | undefined, filter_rhea_count: string | null | undefined, filter_other_count: string | null | undefined, filter_stale: string | null | undefined, filter_packages_installed: string | null | undefined, filter_packages_updatable: string | null | undefined, filter_stale_timestamp: string | null | undefined, filter_stale_warning_timestamp: string | null | undefined, filter_culled_timestamp: string | null | undefined, filter_created: string | null | undefined, tags: Array<string> | null | undefined, filter_system_profile_sap_system: string | null | undefined, filter_system_profile_sap_sids_in: Array<string> | null | undefined): Observable<ControllersSystemsResponse> {
			return this.http.get<ControllersSystemsResponse>(this.baseUri + 'api/patch/v1/systems?limit=' + limit + '&offset=' + offset + '&sort=' + sort + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_insights_id=' + (filter_insights_id == null ? '' : encodeURIComponent(filter_insights_id)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_display_name=' + (filter_display_name == null ? '' : encodeURIComponent(filter_display_name)) + '&filter_last_evaluation=' + (filter_last_evaluation == null ? '' : encodeURIComponent(filter_last_evaluation)) + '&filter_last_upload=' + (filter_last_upload == null ? '' : encodeURIComponent(filter_last_upload)) + '&filter_rhsa_count=' + (filter_rhsa_count == null ? '' : encodeURIComponent(filter_rhsa_count)) + '&filter_rhba_count=' + (filter_rhba_count == null ? '' : encodeURIComponent(filter_rhba_count)) + '&filter_rhea_count=' + (filter_rhea_count == null ? '' : encodeURIComponent(filter_rhea_count)) + '&filter_other_count=' + (filter_other_count == null ? '' : encodeURIComponent(filter_other_count)) + '&filter_stale=' + (filter_stale == null ? '' : encodeURIComponent(filter_stale)) + '&filter_packages_installed=' + (filter_packages_installed == null ? '' : encodeURIComponent(filter_packages_installed)) + '&filter_packages_updatable=' + (filter_packages_updatable == null ? '' : encodeURIComponent(filter_packages_updatable)) + '&filter_stale_timestamp=' + (filter_stale_timestamp == null ? '' : encodeURIComponent(filter_stale_timestamp)) + '&filter_stale_warning_timestamp=' + (filter_stale_warning_timestamp == null ? '' : encodeURIComponent(filter_stale_warning_timestamp)) + '&filter_culled_timestamp=' + (filter_culled_timestamp == null ? '' : encodeURIComponent(filter_culled_timestamp)) + '&filter_created=' + (filter_created == null ? '' : encodeURIComponent(filter_created)) + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&') + '&filter_system_profile_sap_system=' + (filter_system_profile_sap_system == null ? '' : encodeURIComponent(filter_system_profile_sap_system)) + '&' + filter_system_profile_sap_sids_in?.map(z => `filter[system_profile][sap_sids][in]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Delete system by inventory id
		 * Delete system by inventory id
		 * Delete api/patch/v1/systems/{inventory_id}
		 * @param {string} inventory_id Inventory ID
		 * @return {void} Ok
		 */
		Deletesystem(inventory_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/patch/v1/systems/' + (inventory_id == null ? '' : encodeURIComponent(inventory_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show me details about a system by given inventory id
		 * Show me details about a system by given inventory id
		 * Get api/patch/v1/systems/{inventory_id}
		 * @param {string} inventory_id Inventory ID
		 * @return {ControllersSystemDetailResponse} OK
		 */
		DetailSystem(inventory_id: string): Observable<ControllersSystemDetailResponse> {
			return this.http.get<ControllersSystemDetailResponse>(this.baseUri + 'api/patch/v1/systems/' + (inventory_id == null ? '' : encodeURIComponent(inventory_id)), {});
		}

		/**
		 * Show me advisories for a system by given inventory id
		 * Show me advisories for a system by given inventory id
		 * Get api/patch/v1/systems/{inventory_id}/advisories
		 * @param {string} inventory_id Inventory ID
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {ListSystemAdvisoriesSort} sort Sort field
		 * @param {string} search Find matching text
		 * @param {string} filter_id Filter
		 * @param {string} filter_description Filter
		 * @param {string} filter_public_date Filter
		 * @param {string} filter_synopsis Filter
		 * @param {string} filter_advisory_type Filter
		 * @param {string} filter_severity Filter
		 * @return {ControllersSystemAdvisoriesResponse} OK
		 */
		ListSystemAdvisories(inventory_id: string, limit: number | null | undefined, offset: number | null | undefined, sort: ListSystemAdvisoriesSort | null | undefined, search: string | null | undefined, filter_id: string | null | undefined, filter_description: string | null | undefined, filter_public_date: string | null | undefined, filter_synopsis: string | null | undefined, filter_advisory_type: string | null | undefined, filter_severity: string | null | undefined): Observable<ControllersSystemAdvisoriesResponse> {
			return this.http.get<ControllersSystemAdvisoriesResponse>(this.baseUri + 'api/patch/v1/systems/' + (inventory_id == null ? '' : encodeURIComponent(inventory_id)) + '/advisories&limit=' + limit + '&offset=' + offset + '&sort=' + sort + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_id=' + (filter_id == null ? '' : encodeURIComponent(filter_id)) + '&filter_description=' + (filter_description == null ? '' : encodeURIComponent(filter_description)) + '&filter_public_date=' + (filter_public_date == null ? '' : encodeURIComponent(filter_public_date)) + '&filter_synopsis=' + (filter_synopsis == null ? '' : encodeURIComponent(filter_synopsis)) + '&filter_advisory_type=' + (filter_advisory_type == null ? '' : encodeURIComponent(filter_advisory_type)) + '&filter_severity=' + (filter_severity == null ? '' : encodeURIComponent(filter_severity)), {});
		}

		/**
		 * Show me details about a system packages by given inventory id
		 * Show me details about a system packages by given inventory id
		 * Get api/patch/v1/systems/{inventory_id}/packages
		 * @param {string} inventory_id Inventory ID
		 * @param {number} limit Limit for paging, set -1 to return all
		 * @param {number} offset Offset for paging
		 * @param {string} search Find matching text
		 * @param {string} filter_name Filter
		 * @param {string} filter_description Filter
		 * @param {string} filter_evra Filter
		 * @param {string} filter_summary Filter
		 * @param {boolean} filter_updatable Filter
		 * @return {ControllersSystemPackageResponse} OK
		 */
		SystemPackages(inventory_id: string, limit: number | null | undefined, offset: number | null | undefined, search: string | null | undefined, filter_name: string | null | undefined, filter_description: string | null | undefined, filter_evra: string | null | undefined, filter_summary: string | null | undefined, filter_updatable: boolean | null | undefined): Observable<ControllersSystemPackageResponse> {
			return this.http.get<ControllersSystemPackageResponse>(this.baseUri + 'api/patch/v1/systems/' + (inventory_id == null ? '' : encodeURIComponent(inventory_id)) + '/packages&limit=' + limit + '&offset=' + offset + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&filter_name=' + (filter_name == null ? '' : encodeURIComponent(filter_name)) + '&filter_description=' + (filter_description == null ? '' : encodeURIComponent(filter_description)) + '&filter_evra=' + (filter_evra == null ? '' : encodeURIComponent(filter_evra)) + '&filter_summary=' + (filter_summary == null ? '' : encodeURIComponent(filter_summary)) + '&filter_updatable=' + filter_updatable, {});
		}

		/**
		 * View advisory-system pairs for selected systems and advisories
		 * View advisory-system pairs for selected systems and advisories
		 * Post api/patch/v1/views/advisories/systems
		 * @param {ControllersSystemsAdvisoriesRequest} requestBody Request body
		 * @return {ControllersAdvisoriesSystemsResponse} OK
		 */
		ViewAdvisoriesSystems(requestBody: ControllersSystemsAdvisoriesRequest): Observable<ControllersAdvisoriesSystemsResponse> {
			return this.http.post<ControllersAdvisoriesSystemsResponse>(this.baseUri + 'api/patch/v1/views/advisories/systems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View system-advisory pairs for selected systems and advisories
		 * View system-advisory pairs for selected systems and advisories
		 * Post api/patch/v1/views/systems/advisories
		 * @param {ControllersSystemsAdvisoriesRequest} requestBody Request body
		 * @return {ControllersSystemsAdvisoriesResponse} OK
		 */
		ViewSystemsAdvisories(requestBody: ControllersSystemsAdvisoriesRequest): Observable<ControllersSystemsAdvisoriesResponse> {
			return this.http.post<ControllersSystemsAdvisoriesResponse>(this.baseUri + 'api/patch/v1/views/systems/advisories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ListAdvisoriesSort { id = 'id', name = 'name', advisory_type = 'advisory_type', synopsis = 'synopsis', public_date = 'public_date', applicable_systems = 'applicable_systems' }

	export enum ListAdvisorySystemsSort { id = 'id', display_name = 'display_name', last_evaluation = 'last_evaluation', last_upload = 'last_upload', rhsa_count = 'rhsa_count', rhba_count = 'rhba_count', rhea_count = 'rhea_count', other_count = 'other_count', stale = 'stale' }

	export enum ExportPackagesSort { id = 'id', name = 'name', systems_installed = 'systems_installed', systems_updatable = 'systems_updatable' }

	export enum ListSystemsSort { id = 'id', display_name = 'display_name', last_evaluation = 'last_evaluation', last_upload = 'last_upload', rhsa_count = 'rhsa_count', rhba_count = 'rhba_count', rhea_count = 'rhea_count', other_count = 'other_count', stale = 'stale', packages_installed = 'packages_installed', packages_updatable = 'packages_updatable' }

	export enum ListSystemAdvisoriesSort { id = 'id', name = 'name', type = 'type', synopsis = 'synopsis', public_date = 'public_date' }

}

