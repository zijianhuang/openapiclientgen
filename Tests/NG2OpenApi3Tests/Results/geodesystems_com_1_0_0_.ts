import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * API for Extract sheets
		 * API to call: Extract sheets
		 * Get repository/entry/show
		 * @param {string} output Output type  -don't change
		 * @param {string} entryid Entry ID
		 * @param {string} arg1 Sheets
		 * @return {void} No response was specified
		 */
		Media_tabular_extractsheet(output: string, entryid: string, arg1: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/entry/show?output=' + (output == null ? '' : encodeURIComponent(output)) + '&entryid=' + (entryid == null ? '' : encodeURIComponent(entryid)) + '&arg1=' + (arg1 == null ? '' : encodeURIComponent(arg1)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for '2017 Boulder Election Expenditures' entry type
		 * API to search for entries of type 2017 Boulder Election Expenditures
		 * Get repository/search/type/2017_boulder_election_expenditures
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_2017_boulder_election_expenditures_committee Committee
		 * @param {string} search_db_2017_boulder_election_expenditures_transaction_date Transaction Date
		 * @param {string} search_db_2017_boulder_election_expenditures_name Name
		 * @param {string} search_db_2017_boulder_election_expenditures_street Street
		 * @param {string} search_db_2017_boulder_election_expenditures_city City
		 * @param {string} search_db_2017_boulder_election_expenditures_state State
		 * @param {string} search_db_2017_boulder_election_expenditures_zip Zip
		 * @param {number} search_db_2017_boulder_election_expenditures_expenditure Expenditure
		 * @param {string} search_db_2017_boulder_election_expenditures_purpose Purpose
		 * @return {void} No response was specified
		 */
		Search_2017_boulder_election_expenditures(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_2017_boulder_election_expenditures_committee: string | null | undefined, search_db_2017_boulder_election_expenditures_transaction_date: string | null | undefined, search_db_2017_boulder_election_expenditures_name: string | null | undefined, search_db_2017_boulder_election_expenditures_street: string | null | undefined, search_db_2017_boulder_election_expenditures_city: string | null | undefined, search_db_2017_boulder_election_expenditures_state: string | null | undefined, search_db_2017_boulder_election_expenditures_zip: string | null | undefined, search_db_2017_boulder_election_expenditures_expenditure: number | null | undefined, search_db_2017_boulder_election_expenditures_purpose: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/2017_boulder_election_expenditures?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_2017_boulder_election_expenditures_committee=' + (search_db_2017_boulder_election_expenditures_committee == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_committee)) + '&search_db_2017_boulder_election_expenditures_transaction_date=' + (search_db_2017_boulder_election_expenditures_transaction_date == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_transaction_date)) + '&search_db_2017_boulder_election_expenditures_name=' + (search_db_2017_boulder_election_expenditures_name == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_name)) + '&search_db_2017_boulder_election_expenditures_street=' + (search_db_2017_boulder_election_expenditures_street == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_street)) + '&search_db_2017_boulder_election_expenditures_city=' + (search_db_2017_boulder_election_expenditures_city == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_city)) + '&search_db_2017_boulder_election_expenditures_state=' + (search_db_2017_boulder_election_expenditures_state == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_state)) + '&search_db_2017_boulder_election_expenditures_zip=' + (search_db_2017_boulder_election_expenditures_zip == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_zip)) + '&search_db_2017_boulder_election_expenditures_expenditure=' + search_db_2017_boulder_election_expenditures_expenditure + '&search_db_2017_boulder_election_expenditures_purpose=' + (search_db_2017_boulder_election_expenditures_purpose == null ? '' : encodeURIComponent(search_db_2017_boulder_election_expenditures_purpose)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Any file type' entry type
		 * API to search for entries of type Any file type
		 * Get repository/search/type/any
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_any(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/any?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Before and After Images' entry type
		 * API to search for entries of type Before and After Images
		 * Get repository/search/type/beforeafter
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_beforeafter(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/beforeafter?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Bibliographic Entry' entry type
		 * API to search for entries of type Bibliographic Entry
		 * Get repository/search/type/biblio
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_biblio_primary_author Primary Author
		 * @param {string} search_biblio_type Publication Type
		 * @param {string} search_biblio_institution Institution
		 * @param {string} search_biblio_other_authors Other Authors
		 * @param {string} search_biblio_publication Publication
		 * @return {void} No response was specified
		 */
		Search_biblio(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_biblio_primary_author: string | null | undefined, search_biblio_type: string | null | undefined, search_biblio_institution: string | null | undefined, search_biblio_other_authors: string | null | undefined, search_biblio_publication: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/biblio?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_biblio_primary_author=' + (search_biblio_primary_author == null ? '' : encodeURIComponent(search_biblio_primary_author)) + '&search_biblio_type=' + (search_biblio_type == null ? '' : encodeURIComponent(search_biblio_type)) + '&search_biblio_institution=' + (search_biblio_institution == null ? '' : encodeURIComponent(search_biblio_institution)) + '&search_biblio_other_authors=' + (search_biblio_other_authors == null ? '' : encodeURIComponent(search_biblio_other_authors)) + '&search_biblio_publication=' + (search_biblio_publication == null ? '' : encodeURIComponent(search_biblio_publication)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'DICOM File' entry type
		 * API to search for entries of type DICOM File
		 * Get repository/search/type/bio_dicom
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_dicom(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_dicom?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'DICOM Test File' entry type
		 * API to search for entries of type DICOM Test File
		 * Get repository/search/type/bio_dicom_test
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_bio_dicom_test_PatientName Patient Name
		 * @param {string} search_bio_dicom_test_PatientID Patient ID
		 * @return {void} No response was specified
		 */
		Search_bio_dicom_test(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_bio_dicom_test_PatientName: string | null | undefined, search_bio_dicom_test_PatientID: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_dicom_test?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_bio_dicom_test_PatientName=' + (search_bio_dicom_test_PatientName == null ? '' : encodeURIComponent(search_bio_dicom_test_PatientName)) + '&search_bio_dicom_test_PatientID=' + (search_bio_dicom_test_PatientID == null ? '' : encodeURIComponent(search_bio_dicom_test_PatientID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FASTA File' entry type
		 * API to search for entries of type FASTA File
		 * Get repository/search/type/bio_fasta
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_fasta(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_fasta?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FASTQ File' entry type
		 * API to search for entries of type FASTQ File
		 * Get repository/search/type/bio_fastq
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_fastq(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_fastq?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'HMMER Index File' entry type
		 * API to search for entries of type HMMER Index File
		 * Get repository/search/type/bio_hmmer_index
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_hmmer_index(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_hmmer_index?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'OME TIFF File' entry type
		 * API to search for entries of type OME TIFF File
		 * Get repository/search/type/bio_ome_tiff
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_ome_tiff(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_ome_tiff?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Assay' entry type
		 * API to search for entries of type Assay
		 * Get repository/search/type/bio_ontology_assay
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_ontology_assay(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_ontology_assay?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Cohort' entry type
		 * API to search for entries of type Cohort
		 * Get repository/search/type/bio_ontology_cohort
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_ontology_cohort(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_ontology_cohort?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Person' entry type
		 * API to search for entries of type Person
		 * Get repository/search/type/bio_ontology_person
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_bio_ontology_person_gender Gender
		 * @return {void} No response was specified
		 */
		Search_bio_ontology_person(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_bio_ontology_person_gender: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_ontology_person?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_bio_ontology_person_gender=' + (search_bio_ontology_person_gender == null ? '' : encodeURIComponent(search_bio_ontology_person_gender)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Sample' entry type
		 * API to search for entries of type Sample
		 * Get repository/search/type/bio_ontology_sample
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_ontology_sample(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_ontology_sample?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Series' entry type
		 * API to search for entries of type Series
		 * Get repository/search/type/bio_ontology_series
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_ontology_series(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_ontology_series?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Study' entry type
		 * API to search for entries of type Study
		 * Get repository/search/type/bio_ontology_study
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_ontology_study(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_ontology_study?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SAM Data' entry type
		 * API to search for entries of type SAM Data
		 * Get repository/search/type/bio_sam
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_sam(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_sam?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'PDB Protein File' entry type
		 * API to search for entries of type PDB Protein File
		 * Get repository/search/type/bio_sf_pdb
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_sf_pdb(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_sf_pdb?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Sequence Read Archive' entry type
		 * API to search for entries of type Sequence Read Archive
		 * Get repository/search/type/bio_sra
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_sra(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_sra?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Stockholm File' entry type
		 * API to search for entries of type Stockholm File
		 * Get repository/search/type/bio_stockholm
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_bio_stockholm(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_stockholm?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Taxonomic Entry' entry type
		 * API to search for entries of type Taxonomic Entry
		 * Get repository/search/type/bio_taxonomy
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_bio_taxonomy_rank Rank
		 * @param {string} search_bio_taxonomy_embl_code EMBL Code
		 * @param {string} search_bio_taxonomy_division Divison
		 * @param {boolean} search_bio_taxonomy_inherited_div Inheritied division
		 * @param {string} search_bio_taxonomy_aliases Also known
		 * @return {void} No response was specified
		 */
		Search_bio_taxonomy(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_bio_taxonomy_rank: string | null | undefined, search_bio_taxonomy_embl_code: string | null | undefined, search_bio_taxonomy_division: string | null | undefined, search_bio_taxonomy_inherited_div: boolean | null | undefined, search_bio_taxonomy_aliases: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bio_taxonomy?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_bio_taxonomy_rank=' + (search_bio_taxonomy_rank == null ? '' : encodeURIComponent(search_bio_taxonomy_rank)) + '&search_bio_taxonomy_embl_code=' + (search_bio_taxonomy_embl_code == null ? '' : encodeURIComponent(search_bio_taxonomy_embl_code)) + '&search_bio_taxonomy_division=' + (search_bio_taxonomy_division == null ? '' : encodeURIComponent(search_bio_taxonomy_division)) + '&search_bio_taxonomy_inherited_div=' + search_bio_taxonomy_inherited_div + '&search_bio_taxonomy_aliases=' + (search_bio_taxonomy_aliases == null ? '' : encodeURIComponent(search_bio_taxonomy_aliases)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Weblog Entry' entry type
		 * API to search for entries of type Weblog Entry
		 * Get repository/search/type/blogentry
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_blogentry_blogtext Extra Text
		 * @return {void} No response was specified
		 */
		Search_blogentry(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_blogentry_blogtext: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/blogentry?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_blogentry_blogtext=' + (search_blogentry_blogtext == null ? '' : encodeURIComponent(search_blogentry_blogtext)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder Rental Housing' entry type
		 * API to search for entries of type Boulder Rental Housing
		 * Get repository/search/type/bolder_rental_housing
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_bolder_rental_housing_propaddr1 Property Address
		 * @param {string} search_db_bolder_rental_housing_rentaltype Rental Type
		 * @param {string} search_db_bolder_rental_housing_bldgtype Building Type
		 * @param {number} search_db_bolder_rental_housing_dwellunits Dwelling Units
		 * @param {number} search_db_bolder_rental_housing_roomunits Room Units
		 * @param {string} search_db_bolder_rental_housing_neighbrhd Neighborhood
		 * @param {string} search_db_bolder_rental_housing_complexnm Complex Name
		 * @param {string} search_db_bolder_rental_housing_name Name
		 * @param {string} search_db_bolder_rental_housing_persontype Person Type
		 * @param {string} search_db_bolder_rental_housing_company Company
		 * @param {string} search_db_bolder_rental_housing_engcompl Engcompl
		 * @param {string} search_db_bolder_rental_housing_licenseexp Expiration Date
		 * @param {string} search_db_bolder_rental_housing_licensenum Licensenum
		 * @param {string} search_db_bolder_rental_housing_ppl1_coname Ppl1 Coname
		 * @param {string} search_db_bolder_rental_housing_person_1 Person 1
		 * @param {string} search_db_bolder_rental_housing_ppl1_role Ppl1 Role
		 * @param {string} search_db_bolder_rental_housing_ppl2_coname Ppl2 Coname
		 * @param {string} search_db_bolder_rental_housing_person_2 Person 2
		 * @param {string} search_db_bolder_rental_housing_ppl2_role Ppl2 Role
		 * @param {string} search_db_bolder_rental_housing_location Location
		 * @return {void} No response was specified
		 */
		Search_bolder_rental_housing(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_bolder_rental_housing_propaddr1: string | null | undefined, search_db_bolder_rental_housing_rentaltype: string | null | undefined, search_db_bolder_rental_housing_bldgtype: string | null | undefined, search_db_bolder_rental_housing_dwellunits: number | null | undefined, search_db_bolder_rental_housing_roomunits: number | null | undefined, search_db_bolder_rental_housing_neighbrhd: string | null | undefined, search_db_bolder_rental_housing_complexnm: string | null | undefined, search_db_bolder_rental_housing_name: string | null | undefined, search_db_bolder_rental_housing_persontype: string | null | undefined, search_db_bolder_rental_housing_company: string | null | undefined, search_db_bolder_rental_housing_engcompl: string | null | undefined, search_db_bolder_rental_housing_licenseexp: string | null | undefined, search_db_bolder_rental_housing_licensenum: string | null | undefined, search_db_bolder_rental_housing_ppl1_coname: string | null | undefined, search_db_bolder_rental_housing_person_1: string | null | undefined, search_db_bolder_rental_housing_ppl1_role: string | null | undefined, search_db_bolder_rental_housing_ppl2_coname: string | null | undefined, search_db_bolder_rental_housing_person_2: string | null | undefined, search_db_bolder_rental_housing_ppl2_role: string | null | undefined, search_db_bolder_rental_housing_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bolder_rental_housing?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_bolder_rental_housing_propaddr1=' + (search_db_bolder_rental_housing_propaddr1 == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_propaddr1)) + '&search_db_bolder_rental_housing_rentaltype=' + (search_db_bolder_rental_housing_rentaltype == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_rentaltype)) + '&search_db_bolder_rental_housing_bldgtype=' + (search_db_bolder_rental_housing_bldgtype == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_bldgtype)) + '&search_db_bolder_rental_housing_dwellunits=' + search_db_bolder_rental_housing_dwellunits + '&search_db_bolder_rental_housing_roomunits=' + search_db_bolder_rental_housing_roomunits + '&search_db_bolder_rental_housing_neighbrhd=' + (search_db_bolder_rental_housing_neighbrhd == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_neighbrhd)) + '&search_db_bolder_rental_housing_complexnm=' + (search_db_bolder_rental_housing_complexnm == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_complexnm)) + '&search_db_bolder_rental_housing_name=' + (search_db_bolder_rental_housing_name == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_name)) + '&search_db_bolder_rental_housing_persontype=' + (search_db_bolder_rental_housing_persontype == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_persontype)) + '&search_db_bolder_rental_housing_company=' + (search_db_bolder_rental_housing_company == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_company)) + '&search_db_bolder_rental_housing_engcompl=' + (search_db_bolder_rental_housing_engcompl == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_engcompl)) + '&search_db_bolder_rental_housing_licenseexp=' + (search_db_bolder_rental_housing_licenseexp == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_licenseexp)) + '&search_db_bolder_rental_housing_licensenum=' + (search_db_bolder_rental_housing_licensenum == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_licensenum)) + '&search_db_bolder_rental_housing_ppl1_coname=' + (search_db_bolder_rental_housing_ppl1_coname == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_ppl1_coname)) + '&search_db_bolder_rental_housing_person_1=' + (search_db_bolder_rental_housing_person_1 == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_person_1)) + '&search_db_bolder_rental_housing_ppl1_role=' + (search_db_bolder_rental_housing_ppl1_role == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_ppl1_role)) + '&search_db_bolder_rental_housing_ppl2_coname=' + (search_db_bolder_rental_housing_ppl2_coname == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_ppl2_coname)) + '&search_db_bolder_rental_housing_person_2=' + (search_db_bolder_rental_housing_person_2 == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_person_2)) + '&search_db_bolder_rental_housing_ppl2_role=' + (search_db_bolder_rental_housing_ppl2_role == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_ppl2_role)) + '&search_db_bolder_rental_housing_location=' + (search_db_bolder_rental_housing_location == null ? '' : encodeURIComponent(search_db_bolder_rental_housing_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Bookmarks' entry type
		 * API to search for entries of type Bookmarks
		 * Get repository/search/type/bookmarks
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_bookmarks_title Title
		 * @param {string} search_db_bookmarks_url URL
		 * @param {string} search_db_bookmarks_category Category
		 * @param {string} search_db_bookmarks_date Date
		 * @return {void} No response was specified
		 */
		Search_bookmarks(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_bookmarks_title: string | null | undefined, search_db_bookmarks_url: string | null | undefined, search_db_bookmarks_category: string | null | undefined, search_db_bookmarks_date: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/bookmarks?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_bookmarks_title=' + (search_db_bookmarks_title == null ? '' : encodeURIComponent(search_db_bookmarks_title)) + '&search_db_bookmarks_url=' + (search_db_bookmarks_url == null ? '' : encodeURIComponent(search_db_bookmarks_url)) + '&search_db_bookmarks_category=' + (search_db_bookmarks_category == null ? '' : encodeURIComponent(search_db_bookmarks_category)) + '&search_db_bookmarks_date=' + (search_db_bookmarks_date == null ? '' : encodeURIComponent(search_db_bookmarks_date)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boston Crime' entry type
		 * API to search for entries of type Boston Crime
		 * Get repository/search/type/boston_crime
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boston_crime_offense Offense
		 * @param {string} search_db_boston_crime_offense_code_group Offense Code Group
		 * @param {string} search_db_boston_crime_offense_description Offense Description
		 * @param {string} search_db_boston_crime_district District
		 * @param {string} search_db_boston_crime_reporting_area Reporting Area
		 * @param {string} search_db_boston_crime_shooting Shooting
		 * @param {number} search_db_boston_crime_year Year
		 * @param {number} search_db_boston_crime_month Month
		 * @param {string} search_db_boston_crime_day_of_week Day Of Week
		 * @param {number} search_db_boston_crime_hour Hour
		 * @param {string} search_db_boston_crime_street Street
		 * @param {string} search_db_boston_crime_location Location
		 * @return {void} No response was specified
		 */
		Search_boston_crime(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boston_crime_offense: string | null | undefined, search_db_boston_crime_offense_code_group: string | null | undefined, search_db_boston_crime_offense_description: string | null | undefined, search_db_boston_crime_district: string | null | undefined, search_db_boston_crime_reporting_area: string | null | undefined, search_db_boston_crime_shooting: string | null | undefined, search_db_boston_crime_year: number | null | undefined, search_db_boston_crime_month: number | null | undefined, search_db_boston_crime_day_of_week: string | null | undefined, search_db_boston_crime_hour: number | null | undefined, search_db_boston_crime_street: string | null | undefined, search_db_boston_crime_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boston_crime?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boston_crime_offense=' + (search_db_boston_crime_offense == null ? '' : encodeURIComponent(search_db_boston_crime_offense)) + '&search_db_boston_crime_offense_code_group=' + (search_db_boston_crime_offense_code_group == null ? '' : encodeURIComponent(search_db_boston_crime_offense_code_group)) + '&search_db_boston_crime_offense_description=' + (search_db_boston_crime_offense_description == null ? '' : encodeURIComponent(search_db_boston_crime_offense_description)) + '&search_db_boston_crime_district=' + (search_db_boston_crime_district == null ? '' : encodeURIComponent(search_db_boston_crime_district)) + '&search_db_boston_crime_reporting_area=' + (search_db_boston_crime_reporting_area == null ? '' : encodeURIComponent(search_db_boston_crime_reporting_area)) + '&search_db_boston_crime_shooting=' + (search_db_boston_crime_shooting == null ? '' : encodeURIComponent(search_db_boston_crime_shooting)) + '&search_db_boston_crime_year=' + search_db_boston_crime_year + '&search_db_boston_crime_month=' + search_db_boston_crime_month + '&search_db_boston_crime_day_of_week=' + (search_db_boston_crime_day_of_week == null ? '' : encodeURIComponent(search_db_boston_crime_day_of_week)) + '&search_db_boston_crime_hour=' + search_db_boston_crime_hour + '&search_db_boston_crime_street=' + (search_db_boston_crime_street == null ? '' : encodeURIComponent(search_db_boston_crime_street)) + '&search_db_boston_crime_location=' + (search_db_boston_crime_location == null ? '' : encodeURIComponent(search_db_boston_crime_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder 2017 Election Contributions' entry type
		 * API to search for entries of type Boulder 2017 Election Contributions
		 * Get repository/search/type/boulder_2017_election_contributions
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boulder_2017_election_contributions_committee Committee
		 * @param {string} search_db_boulder_2017_election_contributions_last_name Last Name
		 * @param {string} search_db_boulder_2017_election_contributions_first_name First Name
		 * @param {string} search_db_boulder_2017_election_contributions_street Street
		 * @param {string} search_db_boulder_2017_election_contributions_city City
		 * @param {string} search_db_boulder_2017_election_contributions_state State
		 * @param {string} search_db_boulder_2017_election_contributions_zip Zip
		 * @param {string} search_db_boulder_2017_election_contributions_contribution_type Contribution Type
		 * @param {string} search_db_boulder_2017_election_contributions_from_candidate From Candidate
		 * @param {string} search_db_boulder_2017_election_contributions_date Date
		 * @param {number} search_db_boulder_2017_election_contributions_amount Amount
		 * @param {number} search_db_boulder_2017_election_contributions_match_amount Match Amount
		 * @param {number} search_db_boulder_2017_election_contributions_ytd_amount Ytd Amount
		 * @param {string} search_db_boulder_2017_election_contributions_location Location
		 * @return {void} No response was specified
		 */
		Search_boulder_2017_election_contributions(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boulder_2017_election_contributions_committee: string | null | undefined, search_db_boulder_2017_election_contributions_last_name: string | null | undefined, search_db_boulder_2017_election_contributions_first_name: string | null | undefined, search_db_boulder_2017_election_contributions_street: string | null | undefined, search_db_boulder_2017_election_contributions_city: string | null | undefined, search_db_boulder_2017_election_contributions_state: string | null | undefined, search_db_boulder_2017_election_contributions_zip: string | null | undefined, search_db_boulder_2017_election_contributions_contribution_type: string | null | undefined, search_db_boulder_2017_election_contributions_from_candidate: string | null | undefined, search_db_boulder_2017_election_contributions_date: string | null | undefined, search_db_boulder_2017_election_contributions_amount: number | null | undefined, search_db_boulder_2017_election_contributions_match_amount: number | null | undefined, search_db_boulder_2017_election_contributions_ytd_amount: number | null | undefined, search_db_boulder_2017_election_contributions_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boulder_2017_election_contributions?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boulder_2017_election_contributions_committee=' + (search_db_boulder_2017_election_contributions_committee == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_committee)) + '&search_db_boulder_2017_election_contributions_last_name=' + (search_db_boulder_2017_election_contributions_last_name == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_last_name)) + '&search_db_boulder_2017_election_contributions_first_name=' + (search_db_boulder_2017_election_contributions_first_name == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_first_name)) + '&search_db_boulder_2017_election_contributions_street=' + (search_db_boulder_2017_election_contributions_street == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_street)) + '&search_db_boulder_2017_election_contributions_city=' + (search_db_boulder_2017_election_contributions_city == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_city)) + '&search_db_boulder_2017_election_contributions_state=' + (search_db_boulder_2017_election_contributions_state == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_state)) + '&search_db_boulder_2017_election_contributions_zip=' + (search_db_boulder_2017_election_contributions_zip == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_zip)) + '&search_db_boulder_2017_election_contributions_contribution_type=' + (search_db_boulder_2017_election_contributions_contribution_type == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_contribution_type)) + '&search_db_boulder_2017_election_contributions_from_candidate=' + (search_db_boulder_2017_election_contributions_from_candidate == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_from_candidate)) + '&search_db_boulder_2017_election_contributions_date=' + (search_db_boulder_2017_election_contributions_date == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_date)) + '&search_db_boulder_2017_election_contributions_amount=' + search_db_boulder_2017_election_contributions_amount + '&search_db_boulder_2017_election_contributions_match_amount=' + search_db_boulder_2017_election_contributions_match_amount + '&search_db_boulder_2017_election_contributions_ytd_amount=' + search_db_boulder_2017_election_contributions_ytd_amount + '&search_db_boulder_2017_election_contributions_location=' + (search_db_boulder_2017_election_contributions_location == null ? '' : encodeURIComponent(search_db_boulder_2017_election_contributions_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder Campaign Contributions' entry type
		 * API to search for entries of type Boulder Campaign Contributions
		 * Get repository/search/type/boulder_campaign_contributions
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boulder_campaign_contributions_committee Committee
		 * @param {string} search_db_boulder_campaign_contributions_type Type
		 * @param {string} search_db_boulder_campaign_contributions_committee_num Committee Num
		 * @param {string} search_db_boulder_campaign_contributions_candidate Candidate
		 * @param {string} search_db_boulder_campaign_contributions_filing_date Filing Date
		 * @param {string} search_db_boulder_campaign_contributions_amended_date Amended Date
		 * @param {string} search_db_boulder_campaign_contributions_official_filing Official Filing
		 * @param {string} search_db_boulder_campaign_contributions_transaction_date Transaction Date
		 * @param {string} search_db_boulder_campaign_contributions_last_name Last Name
		 * @param {string} search_db_boulder_campaign_contributions_first_name First Name
		 * @param {string} search_db_boulder_campaign_contributions_street Street
		 * @param {string} search_db_boulder_campaign_contributions_city City
		 * @param {string} search_db_boulder_campaign_contributions_state State
		 * @param {string} search_db_boulder_campaign_contributions_zip Zip
		 * @param {number} search_db_boulder_campaign_contributions_contribution Contribution
		 * @param {string} search_db_boulder_campaign_contributions_contribution_type Contribution Type
		 * @param {string} search_db_boulder_campaign_contributions_anonymous Anonymous
		 * @param {string} search_db_boulder_campaign_contributions_from_candidate From Candidate
		 * @param {number} search_db_boulder_campaign_contributions_match Match
		 * @return {void} No response was specified
		 */
		Search_boulder_campaign_contributions(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boulder_campaign_contributions_committee: string | null | undefined, search_db_boulder_campaign_contributions_type: string | null | undefined, search_db_boulder_campaign_contributions_committee_num: string | null | undefined, search_db_boulder_campaign_contributions_candidate: string | null | undefined, search_db_boulder_campaign_contributions_filing_date: string | null | undefined, search_db_boulder_campaign_contributions_amended_date: string | null | undefined, search_db_boulder_campaign_contributions_official_filing: string | null | undefined, search_db_boulder_campaign_contributions_transaction_date: string | null | undefined, search_db_boulder_campaign_contributions_last_name: string | null | undefined, search_db_boulder_campaign_contributions_first_name: string | null | undefined, search_db_boulder_campaign_contributions_street: string | null | undefined, search_db_boulder_campaign_contributions_city: string | null | undefined, search_db_boulder_campaign_contributions_state: string | null | undefined, search_db_boulder_campaign_contributions_zip: string | null | undefined, search_db_boulder_campaign_contributions_contribution: number | null | undefined, search_db_boulder_campaign_contributions_contribution_type: string | null | undefined, search_db_boulder_campaign_contributions_anonymous: string | null | undefined, search_db_boulder_campaign_contributions_from_candidate: string | null | undefined, search_db_boulder_campaign_contributions_match: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boulder_campaign_contributions?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boulder_campaign_contributions_committee=' + (search_db_boulder_campaign_contributions_committee == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_committee)) + '&search_db_boulder_campaign_contributions_type=' + (search_db_boulder_campaign_contributions_type == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_type)) + '&search_db_boulder_campaign_contributions_committee_num=' + (search_db_boulder_campaign_contributions_committee_num == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_committee_num)) + '&search_db_boulder_campaign_contributions_candidate=' + (search_db_boulder_campaign_contributions_candidate == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_candidate)) + '&search_db_boulder_campaign_contributions_filing_date=' + (search_db_boulder_campaign_contributions_filing_date == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_filing_date)) + '&search_db_boulder_campaign_contributions_amended_date=' + (search_db_boulder_campaign_contributions_amended_date == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_amended_date)) + '&search_db_boulder_campaign_contributions_official_filing=' + (search_db_boulder_campaign_contributions_official_filing == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_official_filing)) + '&search_db_boulder_campaign_contributions_transaction_date=' + (search_db_boulder_campaign_contributions_transaction_date == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_transaction_date)) + '&search_db_boulder_campaign_contributions_last_name=' + (search_db_boulder_campaign_contributions_last_name == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_last_name)) + '&search_db_boulder_campaign_contributions_first_name=' + (search_db_boulder_campaign_contributions_first_name == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_first_name)) + '&search_db_boulder_campaign_contributions_street=' + (search_db_boulder_campaign_contributions_street == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_street)) + '&search_db_boulder_campaign_contributions_city=' + (search_db_boulder_campaign_contributions_city == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_city)) + '&search_db_boulder_campaign_contributions_state=' + (search_db_boulder_campaign_contributions_state == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_state)) + '&search_db_boulder_campaign_contributions_zip=' + (search_db_boulder_campaign_contributions_zip == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_zip)) + '&search_db_boulder_campaign_contributions_contribution=' + search_db_boulder_campaign_contributions_contribution + '&search_db_boulder_campaign_contributions_contribution_type=' + (search_db_boulder_campaign_contributions_contribution_type == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_contribution_type)) + '&search_db_boulder_campaign_contributions_anonymous=' + (search_db_boulder_campaign_contributions_anonymous == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_anonymous)) + '&search_db_boulder_campaign_contributions_from_candidate=' + (search_db_boulder_campaign_contributions_from_candidate == null ? '' : encodeURIComponent(search_db_boulder_campaign_contributions_from_candidate)) + '&search_db_boulder_campaign_contributions_match=' + search_db_boulder_campaign_contributions_match, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder Consulting Services Database' entry type
		 * API to search for entries of type Boulder Consulting Services Database
		 * Get repository/search/type/boulder_consulting_services
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boulder_consulting_services_fund Fund
		 * @param {string} search_db_boulder_consulting_services_department Department
		 * @param {string} search_db_boulder_consulting_services_organization Organization
		 * @param {string} search_db_boulder_consulting_services_object Object
		 * @param {string} search_db_boulder_consulting_services_project Project
		 * @param {string} search_db_boulder_consulting_services_account_description Account Description
		 * @param {string} search_db_boulder_consulting_services_date Date
		 * @param {number} search_db_boulder_consulting_services_amount Amount
		 * @param {string} search_db_boulder_consulting_services_purchase_order Purchase Order
		 * @param {string} search_db_boulder_consulting_services_vendor_name Vendor Name
		 * @param {string} search_db_boulder_consulting_services_comment Comment
		 * @return {void} No response was specified
		 */
		Search_boulder_consulting_services(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boulder_consulting_services_fund: string | null | undefined, search_db_boulder_consulting_services_department: string | null | undefined, search_db_boulder_consulting_services_organization: string | null | undefined, search_db_boulder_consulting_services_object: string | null | undefined, search_db_boulder_consulting_services_project: string | null | undefined, search_db_boulder_consulting_services_account_description: string | null | undefined, search_db_boulder_consulting_services_date: string | null | undefined, search_db_boulder_consulting_services_amount: number | null | undefined, search_db_boulder_consulting_services_purchase_order: string | null | undefined, search_db_boulder_consulting_services_vendor_name: string | null | undefined, search_db_boulder_consulting_services_comment: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boulder_consulting_services?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boulder_consulting_services_fund=' + (search_db_boulder_consulting_services_fund == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_fund)) + '&search_db_boulder_consulting_services_department=' + (search_db_boulder_consulting_services_department == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_department)) + '&search_db_boulder_consulting_services_organization=' + (search_db_boulder_consulting_services_organization == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_organization)) + '&search_db_boulder_consulting_services_object=' + (search_db_boulder_consulting_services_object == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_object)) + '&search_db_boulder_consulting_services_project=' + (search_db_boulder_consulting_services_project == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_project)) + '&search_db_boulder_consulting_services_account_description=' + (search_db_boulder_consulting_services_account_description == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_account_description)) + '&search_db_boulder_consulting_services_date=' + (search_db_boulder_consulting_services_date == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_date)) + '&search_db_boulder_consulting_services_amount=' + search_db_boulder_consulting_services_amount + '&search_db_boulder_consulting_services_purchase_order=' + (search_db_boulder_consulting_services_purchase_order == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_purchase_order)) + '&search_db_boulder_consulting_services_vendor_name=' + (search_db_boulder_consulting_services_vendor_name == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_vendor_name)) + '&search_db_boulder_consulting_services_comment=' + (search_db_boulder_consulting_services_comment == null ? '' : encodeURIComponent(search_db_boulder_consulting_services_comment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder County Voter Details' entry type
		 * API to search for entries of type Boulder County Voter Details
		 * Get repository/search/type/boulder_county_voter_details
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boulder_county_voter_details_first_name First Name
		 * @param {string} search_db_boulder_county_voter_details_last_name Last Name
		 * @param {string} search_db_boulder_county_voter_details_registration_date Registration Date
		 * @param {string} search_db_boulder_county_voter_details_last_updated_date Last Updated Date
		 * @param {string} search_db_boulder_county_voter_details_residential_address Residential Address
		 * @param {string} search_db_boulder_county_voter_details_residential_city Residential City
		 * @param {string} search_db_boulder_county_voter_details_mailing_zip_code Mailing Zip Code
		 * @param {string} search_db_boulder_county_voter_details_voter_status Voter Status
		 * @param {string} search_db_boulder_county_voter_details_party Party
		 * @param {string} search_db_boulder_county_voter_details_gender Gender
		 * @param {number} search_db_boulder_county_voter_details_birth_year Birth Year
		 * @param {string} search_db_boulder_county_voter_details_precinct_code Precinct Code
		 * @param {string} search_db_boulder_county_voter_details_congressional Congressional
		 * @param {string} search_db_boulder_county_voter_details_state_senate State Senate
		 * @param {string} search_db_boulder_county_voter_details_state_house State House
		 * @param {string} search_db_boulder_county_voter_details_municipality Municipality
		 * @param {string} search_db_boulder_county_voter_details_city_ward_district City Ward/district
		 * @param {string} search_db_boulder_county_voter_details_school_district School District
		 * @param {string} search_db_boulder_county_voter_details_location Location
		 * @return {void} No response was specified
		 */
		Search_boulder_county_voter_details(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boulder_county_voter_details_first_name: string | null | undefined, search_db_boulder_county_voter_details_last_name: string | null | undefined, search_db_boulder_county_voter_details_registration_date: string | null | undefined, search_db_boulder_county_voter_details_last_updated_date: string | null | undefined, search_db_boulder_county_voter_details_residential_address: string | null | undefined, search_db_boulder_county_voter_details_residential_city: string | null | undefined, search_db_boulder_county_voter_details_mailing_zip_code: string | null | undefined, search_db_boulder_county_voter_details_voter_status: string | null | undefined, search_db_boulder_county_voter_details_party: string | null | undefined, search_db_boulder_county_voter_details_gender: string | null | undefined, search_db_boulder_county_voter_details_birth_year: number | null | undefined, search_db_boulder_county_voter_details_precinct_code: string | null | undefined, search_db_boulder_county_voter_details_congressional: string | null | undefined, search_db_boulder_county_voter_details_state_senate: string | null | undefined, search_db_boulder_county_voter_details_state_house: string | null | undefined, search_db_boulder_county_voter_details_municipality: string | null | undefined, search_db_boulder_county_voter_details_city_ward_district: string | null | undefined, search_db_boulder_county_voter_details_school_district: string | null | undefined, search_db_boulder_county_voter_details_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boulder_county_voter_details?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boulder_county_voter_details_first_name=' + (search_db_boulder_county_voter_details_first_name == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_first_name)) + '&search_db_boulder_county_voter_details_last_name=' + (search_db_boulder_county_voter_details_last_name == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_last_name)) + '&search_db_boulder_county_voter_details_registration_date=' + (search_db_boulder_county_voter_details_registration_date == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_registration_date)) + '&search_db_boulder_county_voter_details_last_updated_date=' + (search_db_boulder_county_voter_details_last_updated_date == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_last_updated_date)) + '&search_db_boulder_county_voter_details_residential_address=' + (search_db_boulder_county_voter_details_residential_address == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_residential_address)) + '&search_db_boulder_county_voter_details_residential_city=' + (search_db_boulder_county_voter_details_residential_city == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_residential_city)) + '&search_db_boulder_county_voter_details_mailing_zip_code=' + (search_db_boulder_county_voter_details_mailing_zip_code == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_mailing_zip_code)) + '&search_db_boulder_county_voter_details_voter_status=' + (search_db_boulder_county_voter_details_voter_status == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_voter_status)) + '&search_db_boulder_county_voter_details_party=' + (search_db_boulder_county_voter_details_party == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_party)) + '&search_db_boulder_county_voter_details_gender=' + (search_db_boulder_county_voter_details_gender == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_gender)) + '&search_db_boulder_county_voter_details_birth_year=' + search_db_boulder_county_voter_details_birth_year + '&search_db_boulder_county_voter_details_precinct_code=' + (search_db_boulder_county_voter_details_precinct_code == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_precinct_code)) + '&search_db_boulder_county_voter_details_congressional=' + (search_db_boulder_county_voter_details_congressional == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_congressional)) + '&search_db_boulder_county_voter_details_state_senate=' + (search_db_boulder_county_voter_details_state_senate == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_state_senate)) + '&search_db_boulder_county_voter_details_state_house=' + (search_db_boulder_county_voter_details_state_house == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_state_house)) + '&search_db_boulder_county_voter_details_municipality=' + (search_db_boulder_county_voter_details_municipality == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_municipality)) + '&search_db_boulder_county_voter_details_city_ward_district=' + (search_db_boulder_county_voter_details_city_ward_district == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_city_ward_district)) + '&search_db_boulder_county_voter_details_school_district=' + (search_db_boulder_county_voter_details_school_district == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_school_district)) + '&search_db_boulder_county_voter_details_location=' + (search_db_boulder_county_voter_details_location == null ? '' : encodeURIComponent(search_db_boulder_county_voter_details_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder Crime Reports' entry type
		 * API to search for entries of type Boulder Crime Reports
		 * Get repository/search/type/boulder_crimes
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boulder_crimes_offense Offense
		 * @param {string} search_db_boulder_crimes_reportdate Report Date
		 * @param {string} search_db_boulder_crimes_blockadd Address
		 * @param {string} search_db_boulder_crimes_location Location
		 * @return {void} No response was specified
		 */
		Search_boulder_crimes(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boulder_crimes_offense: string | null | undefined, search_db_boulder_crimes_reportdate: string | null | undefined, search_db_boulder_crimes_blockadd: string | null | undefined, search_db_boulder_crimes_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boulder_crimes?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boulder_crimes_offense=' + (search_db_boulder_crimes_offense == null ? '' : encodeURIComponent(search_db_boulder_crimes_offense)) + '&search_db_boulder_crimes_reportdate=' + (search_db_boulder_crimes_reportdate == null ? '' : encodeURIComponent(search_db_boulder_crimes_reportdate)) + '&search_db_boulder_crimes_blockadd=' + (search_db_boulder_crimes_blockadd == null ? '' : encodeURIComponent(search_db_boulder_crimes_blockadd)) + '&search_db_boulder_crimes_location=' + (search_db_boulder_crimes_location == null ? '' : encodeURIComponent(search_db_boulder_crimes_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder Council Emails' entry type
		 * API to search for entries of type Boulder Council Emails
		 * Get repository/search/type/boulder_emails
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boulder_emails_sent_from Sent From
		 * @param {string} search_db_boulder_emails_sent_to Sent To
		 * @param {string} search_db_boulder_emails_sent_cc Sent Cc
		 * @param {string} search_db_boulder_emails_received_date Received Date
		 * @param {string} search_db_boulder_emails_email_subject Email Subject
		 * @param {string} search_db_boulder_emails_plain_text_body Email Body
		 * @return {void} No response was specified
		 */
		Search_boulder_emails(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boulder_emails_sent_from: string | null | undefined, search_db_boulder_emails_sent_to: string | null | undefined, search_db_boulder_emails_sent_cc: string | null | undefined, search_db_boulder_emails_received_date: string | null | undefined, search_db_boulder_emails_email_subject: string | null | undefined, search_db_boulder_emails_plain_text_body: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boulder_emails?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boulder_emails_sent_from=' + (search_db_boulder_emails_sent_from == null ? '' : encodeURIComponent(search_db_boulder_emails_sent_from)) + '&search_db_boulder_emails_sent_to=' + (search_db_boulder_emails_sent_to == null ? '' : encodeURIComponent(search_db_boulder_emails_sent_to)) + '&search_db_boulder_emails_sent_cc=' + (search_db_boulder_emails_sent_cc == null ? '' : encodeURIComponent(search_db_boulder_emails_sent_cc)) + '&search_db_boulder_emails_received_date=' + (search_db_boulder_emails_received_date == null ? '' : encodeURIComponent(search_db_boulder_emails_received_date)) + '&search_db_boulder_emails_email_subject=' + (search_db_boulder_emails_email_subject == null ? '' : encodeURIComponent(search_db_boulder_emails_email_subject)) + '&search_db_boulder_emails_plain_text_body=' + (search_db_boulder_emails_plain_text_body == null ? '' : encodeURIComponent(search_db_boulder_emails_plain_text_body)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Boulder Employee Salaries' entry type
		 * API to search for entries of type Boulder Employee Salaries
		 * Get repository/search/type/boulder_employee_salaries
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_boulder_employee_salaries_position_description Position Description
		 * @param {string} search_db_boulder_employee_salaries_department Department
		 * @param {string} search_db_boulder_employee_salaries_employee_flsa_exempt_y_n Employee Flsa Exempt Y N
		 * @param {number} search_db_boulder_employee_salaries_pay_range_min Pay Range Min
		 * @param {number} search_db_boulder_employee_salaries_pay_range_max Pay Range Max
		 * @param {number} search_db_boulder_employee_salaries_employee_hourly_pay_rate Employee Hourly Pay Rate
		 * @param {number} search_db_boulder_employee_salaries_employee_fte_in_this_position Employee Fte In This Position
		 * @param {number} search_db_boulder_employee_salaries_employee_annual_base_salary Employee Annual Base Salary
		 * @return {void} No response was specified
		 */
		Search_boulder_employee_salaries(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_boulder_employee_salaries_position_description: string | null | undefined, search_db_boulder_employee_salaries_department: string | null | undefined, search_db_boulder_employee_salaries_employee_flsa_exempt_y_n: string | null | undefined, search_db_boulder_employee_salaries_pay_range_min: number | null | undefined, search_db_boulder_employee_salaries_pay_range_max: number | null | undefined, search_db_boulder_employee_salaries_employee_hourly_pay_rate: number | null | undefined, search_db_boulder_employee_salaries_employee_fte_in_this_position: number | null | undefined, search_db_boulder_employee_salaries_employee_annual_base_salary: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/boulder_employee_salaries?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_boulder_employee_salaries_position_description=' + (search_db_boulder_employee_salaries_position_description == null ? '' : encodeURIComponent(search_db_boulder_employee_salaries_position_description)) + '&search_db_boulder_employee_salaries_department=' + (search_db_boulder_employee_salaries_department == null ? '' : encodeURIComponent(search_db_boulder_employee_salaries_department)) + '&search_db_boulder_employee_salaries_employee_flsa_exempt_y_n=' + (search_db_boulder_employee_salaries_employee_flsa_exempt_y_n == null ? '' : encodeURIComponent(search_db_boulder_employee_salaries_employee_flsa_exempt_y_n)) + '&search_db_boulder_employee_salaries_pay_range_min=' + search_db_boulder_employee_salaries_pay_range_min + '&search_db_boulder_employee_salaries_pay_range_max=' + search_db_boulder_employee_salaries_pay_range_max + '&search_db_boulder_employee_salaries_employee_hourly_pay_rate=' + search_db_boulder_employee_salaries_employee_hourly_pay_rate + '&search_db_boulder_employee_salaries_employee_fte_in_this_position=' + search_db_boulder_employee_salaries_employee_fte_in_this_position + '&search_db_boulder_employee_salaries_employee_annual_base_salary=' + search_db_boulder_employee_salaries_employee_annual_base_salary, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Calendar' entry type
		 * API to search for entries of type Calendar
		 * Get repository/search/type/calendar
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_calendar(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/calendar?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Campaign Donors' entry type
		 * API to search for entries of type Campaign Donors
		 * Get repository/search/type/campaign_donors
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_campaign_donors_committee Committee
		 * @param {number} search_db_campaign_donors_amount Amount
		 * @param {string} search_db_campaign_donors_party Party
		 * @param {string} search_db_campaign_donors_donor Donor
		 * @param {string} search_db_campaign_donors_gender Gender
		 * @param {string} search_db_campaign_donors_city City
		 * @param {string} search_db_campaign_donors_state State
		 * @param {string} search_db_campaign_donors_zip_code Zip Code
		 * @param {string} search_db_campaign_donors_employer Employer
		 * @param {string} search_db_campaign_donors_occupation Occupation
		 * @param {string} search_db_campaign_donors_date Date
		 * @param {string} search_db_campaign_donors_location Location
		 * @return {void} No response was specified
		 */
		Search_campaign_donors(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_campaign_donors_committee: string | null | undefined, search_db_campaign_donors_amount: number | null | undefined, search_db_campaign_donors_party: string | null | undefined, search_db_campaign_donors_donor: string | null | undefined, search_db_campaign_donors_gender: string | null | undefined, search_db_campaign_donors_city: string | null | undefined, search_db_campaign_donors_state: string | null | undefined, search_db_campaign_donors_zip_code: string | null | undefined, search_db_campaign_donors_employer: string | null | undefined, search_db_campaign_donors_occupation: string | null | undefined, search_db_campaign_donors_date: string | null | undefined, search_db_campaign_donors_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/campaign_donors?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_campaign_donors_committee=' + (search_db_campaign_donors_committee == null ? '' : encodeURIComponent(search_db_campaign_donors_committee)) + '&search_db_campaign_donors_amount=' + search_db_campaign_donors_amount + '&search_db_campaign_donors_party=' + (search_db_campaign_donors_party == null ? '' : encodeURIComponent(search_db_campaign_donors_party)) + '&search_db_campaign_donors_donor=' + (search_db_campaign_donors_donor == null ? '' : encodeURIComponent(search_db_campaign_donors_donor)) + '&search_db_campaign_donors_gender=' + (search_db_campaign_donors_gender == null ? '' : encodeURIComponent(search_db_campaign_donors_gender)) + '&search_db_campaign_donors_city=' + (search_db_campaign_donors_city == null ? '' : encodeURIComponent(search_db_campaign_donors_city)) + '&search_db_campaign_donors_state=' + (search_db_campaign_donors_state == null ? '' : encodeURIComponent(search_db_campaign_donors_state)) + '&search_db_campaign_donors_zip_code=' + (search_db_campaign_donors_zip_code == null ? '' : encodeURIComponent(search_db_campaign_donors_zip_code)) + '&search_db_campaign_donors_employer=' + (search_db_campaign_donors_employer == null ? '' : encodeURIComponent(search_db_campaign_donors_employer)) + '&search_db_campaign_donors_occupation=' + (search_db_campaign_donors_occupation == null ? '' : encodeURIComponent(search_db_campaign_donors_occupation)) + '&search_db_campaign_donors_date=' + (search_db_campaign_donors_date == null ? '' : encodeURIComponent(search_db_campaign_donors_date)) + '&search_db_campaign_donors_location=' + (search_db_campaign_donors_location == null ? '' : encodeURIComponent(search_db_campaign_donors_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Campaign Expenditures' entry type
		 * API to search for entries of type Campaign Expenditures
		 * Get repository/search/type/campaign_expenditures
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_campaign_expenditures_committee Committee
		 * @param {number} search_db_campaign_expenditures_amount Amount
		 * @param {string} search_db_campaign_expenditures_party Party
		 * @param {string} search_db_campaign_expenditures_recipient Recipient
		 * @param {string} search_db_campaign_expenditures_city City
		 * @param {string} search_db_campaign_expenditures_state State
		 * @param {string} search_db_campaign_expenditures_zip_code Zip Code
		 * @param {string} search_db_campaign_expenditures_transaction_date Transaction Date
		 * @param {string} search_db_campaign_expenditures_purpose Purpose
		 * @param {string} search_db_campaign_expenditures_memo_text Memo Text
		 * @param {string} search_db_campaign_expenditures_location Location
		 * @return {void} No response was specified
		 */
		Search_campaign_expenditures(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_campaign_expenditures_committee: string | null | undefined, search_db_campaign_expenditures_amount: number | null | undefined, search_db_campaign_expenditures_party: string | null | undefined, search_db_campaign_expenditures_recipient: string | null | undefined, search_db_campaign_expenditures_city: string | null | undefined, search_db_campaign_expenditures_state: string | null | undefined, search_db_campaign_expenditures_zip_code: string | null | undefined, search_db_campaign_expenditures_transaction_date: string | null | undefined, search_db_campaign_expenditures_purpose: string | null | undefined, search_db_campaign_expenditures_memo_text: string | null | undefined, search_db_campaign_expenditures_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/campaign_expenditures?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_campaign_expenditures_committee=' + (search_db_campaign_expenditures_committee == null ? '' : encodeURIComponent(search_db_campaign_expenditures_committee)) + '&search_db_campaign_expenditures_amount=' + search_db_campaign_expenditures_amount + '&search_db_campaign_expenditures_party=' + (search_db_campaign_expenditures_party == null ? '' : encodeURIComponent(search_db_campaign_expenditures_party)) + '&search_db_campaign_expenditures_recipient=' + (search_db_campaign_expenditures_recipient == null ? '' : encodeURIComponent(search_db_campaign_expenditures_recipient)) + '&search_db_campaign_expenditures_city=' + (search_db_campaign_expenditures_city == null ? '' : encodeURIComponent(search_db_campaign_expenditures_city)) + '&search_db_campaign_expenditures_state=' + (search_db_campaign_expenditures_state == null ? '' : encodeURIComponent(search_db_campaign_expenditures_state)) + '&search_db_campaign_expenditures_zip_code=' + (search_db_campaign_expenditures_zip_code == null ? '' : encodeURIComponent(search_db_campaign_expenditures_zip_code)) + '&search_db_campaign_expenditures_transaction_date=' + (search_db_campaign_expenditures_transaction_date == null ? '' : encodeURIComponent(search_db_campaign_expenditures_transaction_date)) + '&search_db_campaign_expenditures_purpose=' + (search_db_campaign_expenditures_purpose == null ? '' : encodeURIComponent(search_db_campaign_expenditures_purpose)) + '&search_db_campaign_expenditures_memo_text=' + (search_db_campaign_expenditures_memo_text == null ? '' : encodeURIComponent(search_db_campaign_expenditures_memo_text)) + '&search_db_campaign_expenditures_location=' + (search_db_campaign_expenditures_location == null ? '' : encodeURIComponent(search_db_campaign_expenditures_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Catalog Link' entry type
		 * API to search for entries of type Catalog Link
		 * Get repository/search/type/cataloglink
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_cataloglink(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/cataloglink?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Gridded Data File' entry type
		 * API to search for entries of type Gridded Data File
		 * Get repository/search/type/cdm_grid
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_cdm_grid(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/cdm_grid?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Chat Room' entry type
		 * API to search for entries of type Chat Room
		 * Get repository/search/type/chatroom
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_chatroom(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/chatroom?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Colorado Water Rights' entry type
		 * API to search for entries of type Colorado Water Rights
		 * Get repository/search/type/colorado_water_rights
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_colorado_water_rights_structure_name Structure Name
		 * @param {string} search_db_colorado_water_rights_structure_type Structure Type
		 * @param {string} search_db_colorado_water_rights_water_source Water Source
		 * @param {string} search_db_colorado_water_rights_county County
		 * @param {string} search_db_colorado_water_rights_adjudication_date Adjudication Date
		 * @param {string} search_db_colorado_water_rights_appropriation_date Appropriation Date
		 * @param {string} search_db_colorado_water_rights_priority_no Priority No
		 * @param {string} search_db_colorado_water_rights_decreed_uses Decreed Uses
		 * @param {number} search_db_colorado_water_rights_net_absolute Net Absolute
		 * @param {number} search_db_colorado_water_rights_net_conditional Net Conditional
		 * @param {number} search_db_colorado_water_rights_net_apex_absolute Net Apex Absolute
		 * @param {number} search_db_colorado_water_rights_net_apex_conditional Net Apex Conditional
		 * @param {string} search_db_colorado_water_rights_decreed_units Decreed Units
		 * @param {string} search_db_colorado_water_rights_seasonal_limits Seasonal Limits
		 * @param {string} search_db_colorado_water_rights_comments Comments
		 * @param {string} search_db_colorado_water_rights_more_information More Information
		 * @param {string} search_db_colorado_water_rights_location Location
		 * @return {void} No response was specified
		 */
		Search_colorado_water_rights(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_colorado_water_rights_structure_name: string | null | undefined, search_db_colorado_water_rights_structure_type: string | null | undefined, search_db_colorado_water_rights_water_source: string | null | undefined, search_db_colorado_water_rights_county: string | null | undefined, search_db_colorado_water_rights_adjudication_date: string | null | undefined, search_db_colorado_water_rights_appropriation_date: string | null | undefined, search_db_colorado_water_rights_priority_no: string | null | undefined, search_db_colorado_water_rights_decreed_uses: string | null | undefined, search_db_colorado_water_rights_net_absolute: number | null | undefined, search_db_colorado_water_rights_net_conditional: number | null | undefined, search_db_colorado_water_rights_net_apex_absolute: number | null | undefined, search_db_colorado_water_rights_net_apex_conditional: number | null | undefined, search_db_colorado_water_rights_decreed_units: string | null | undefined, search_db_colorado_water_rights_seasonal_limits: string | null | undefined, search_db_colorado_water_rights_comments: string | null | undefined, search_db_colorado_water_rights_more_information: string | null | undefined, search_db_colorado_water_rights_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/colorado_water_rights?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_colorado_water_rights_structure_name=' + (search_db_colorado_water_rights_structure_name == null ? '' : encodeURIComponent(search_db_colorado_water_rights_structure_name)) + '&search_db_colorado_water_rights_structure_type=' + (search_db_colorado_water_rights_structure_type == null ? '' : encodeURIComponent(search_db_colorado_water_rights_structure_type)) + '&search_db_colorado_water_rights_water_source=' + (search_db_colorado_water_rights_water_source == null ? '' : encodeURIComponent(search_db_colorado_water_rights_water_source)) + '&search_db_colorado_water_rights_county=' + (search_db_colorado_water_rights_county == null ? '' : encodeURIComponent(search_db_colorado_water_rights_county)) + '&search_db_colorado_water_rights_adjudication_date=' + (search_db_colorado_water_rights_adjudication_date == null ? '' : encodeURIComponent(search_db_colorado_water_rights_adjudication_date)) + '&search_db_colorado_water_rights_appropriation_date=' + (search_db_colorado_water_rights_appropriation_date == null ? '' : encodeURIComponent(search_db_colorado_water_rights_appropriation_date)) + '&search_db_colorado_water_rights_priority_no=' + (search_db_colorado_water_rights_priority_no == null ? '' : encodeURIComponent(search_db_colorado_water_rights_priority_no)) + '&search_db_colorado_water_rights_decreed_uses=' + (search_db_colorado_water_rights_decreed_uses == null ? '' : encodeURIComponent(search_db_colorado_water_rights_decreed_uses)) + '&search_db_colorado_water_rights_net_absolute=' + search_db_colorado_water_rights_net_absolute + '&search_db_colorado_water_rights_net_conditional=' + search_db_colorado_water_rights_net_conditional + '&search_db_colorado_water_rights_net_apex_absolute=' + search_db_colorado_water_rights_net_apex_absolute + '&search_db_colorado_water_rights_net_apex_conditional=' + search_db_colorado_water_rights_net_apex_conditional + '&search_db_colorado_water_rights_decreed_units=' + (search_db_colorado_water_rights_decreed_units == null ? '' : encodeURIComponent(search_db_colorado_water_rights_decreed_units)) + '&search_db_colorado_water_rights_seasonal_limits=' + (search_db_colorado_water_rights_seasonal_limits == null ? '' : encodeURIComponent(search_db_colorado_water_rights_seasonal_limits)) + '&search_db_colorado_water_rights_comments=' + (search_db_colorado_water_rights_comments == null ? '' : encodeURIComponent(search_db_colorado_water_rights_comments)) + '&search_db_colorado_water_rights_more_information=' + (search_db_colorado_water_rights_more_information == null ? '' : encodeURIComponent(search_db_colorado_water_rights_more_information)) + '&search_db_colorado_water_rights_location=' + (search_db_colorado_water_rights_location == null ? '' : encodeURIComponent(search_db_colorado_water_rights_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Committee Donations' entry type
		 * API to search for entries of type Committee Donations
		 * Get repository/search/type/committee_donations
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_committee_donations_committee Committee
		 * @param {number} search_db_committee_donations_amount Amount
		 * @param {string} search_db_committee_donations_recipient Recipient
		 * @param {string} search_db_committee_donations_date Date
		 * @param {string} search_db_committee_donations_city City
		 * @param {string} search_db_committee_donations_state State
		 * @param {string} search_db_committee_donations_zip_code Zip Code
		 * @param {string} search_db_committee_donations_employer Employer
		 * @param {string} search_db_committee_donations_occupation Occupation
		 * @param {string} search_db_committee_donations_location Location
		 * @return {void} No response was specified
		 */
		Search_committee_donations(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_committee_donations_committee: string | null | undefined, search_db_committee_donations_amount: number | null | undefined, search_db_committee_donations_recipient: string | null | undefined, search_db_committee_donations_date: string | null | undefined, search_db_committee_donations_city: string | null | undefined, search_db_committee_donations_state: string | null | undefined, search_db_committee_donations_zip_code: string | null | undefined, search_db_committee_donations_employer: string | null | undefined, search_db_committee_donations_occupation: string | null | undefined, search_db_committee_donations_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/committee_donations?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_committee_donations_committee=' + (search_db_committee_donations_committee == null ? '' : encodeURIComponent(search_db_committee_donations_committee)) + '&search_db_committee_donations_amount=' + search_db_committee_donations_amount + '&search_db_committee_donations_recipient=' + (search_db_committee_donations_recipient == null ? '' : encodeURIComponent(search_db_committee_donations_recipient)) + '&search_db_committee_donations_date=' + (search_db_committee_donations_date == null ? '' : encodeURIComponent(search_db_committee_donations_date)) + '&search_db_committee_donations_city=' + (search_db_committee_donations_city == null ? '' : encodeURIComponent(search_db_committee_donations_city)) + '&search_db_committee_donations_state=' + (search_db_committee_donations_state == null ? '' : encodeURIComponent(search_db_committee_donations_state)) + '&search_db_committee_donations_zip_code=' + (search_db_committee_donations_zip_code == null ? '' : encodeURIComponent(search_db_committee_donations_zip_code)) + '&search_db_committee_donations_employer=' + (search_db_committee_donations_employer == null ? '' : encodeURIComponent(search_db_committee_donations_employer)) + '&search_db_committee_donations_occupation=' + (search_db_committee_donations_occupation == null ? '' : encodeURIComponent(search_db_committee_donations_occupation)) + '&search_db_committee_donations_location=' + (search_db_committee_donations_location == null ? '' : encodeURIComponent(search_db_committee_donations_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Data Hub' entry type
		 * API to search for entries of type Data Hub
		 * Get repository/search/type/community_datahub
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_community_datahub(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/community_datahub?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Facility' entry type
		 * API to search for entries of type Facility
		 * Get repository/search/type/community_resource
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_community_resource_resource_type Type
		 * @param {string} search_community_resource_address Address
		 * @param {string} search_community_resource_city City
		 * @param {string} search_community_resource_state State or Province
		 * @param {string} search_community_resource_zipcode Zip Code
		 * @return {void} No response was specified
		 */
		Search_community_resource(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_community_resource_resource_type: string | null | undefined, search_community_resource_address: string | null | undefined, search_community_resource_city: string | null | undefined, search_community_resource_state: string | null | undefined, search_community_resource_zipcode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/community_resource?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_community_resource_resource_type=' + (search_community_resource_resource_type == null ? '' : encodeURIComponent(search_community_resource_resource_type)) + '&search_community_resource_address=' + (search_community_resource_address == null ? '' : encodeURIComponent(search_community_resource_address)) + '&search_community_resource_city=' + (search_community_resource_city == null ? '' : encodeURIComponent(search_community_resource_city)) + '&search_community_resource_state=' + (search_community_resource_state == null ? '' : encodeURIComponent(search_community_resource_state)) + '&search_community_resource_zipcode=' + (search_community_resource_zipcode == null ? '' : encodeURIComponent(search_community_resource_zipcode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Construction Permits' entry type
		 * API to search for entries of type Construction Permits
		 * Get repository/search/type/construction_permits
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_construction_permits_address Address
		 * @param {string} search_db_construction_permits_case_status Case Status
		 * @param {string} search_db_construction_permits_category Category
		 * @param {string} search_db_construction_permits_building_uses_and_work_scopes Building Uses And Work Scopes
		 * @param {string} search_db_construction_permits_permit_types Permit Types
		 * @param {number} search_db_construction_permits_total_project_value Total Project Value
		 * @param {number} search_db_construction_permits_total_subpermit_value Total Subpermit Value
		 * @param {string} search_db_construction_permits_applied Applied
		 * @param {string} search_db_construction_permits_approved Approved
		 * @param {string} search_db_construction_permits_issued Issued
		 * @param {string} search_db_construction_permits_co_date Co Date
		 * @param {string} search_db_construction_permits_completion_date Completion Date
		 * @param {number} search_db_construction_permits_new_res_unit New Res Unit
		 * @param {number} search_db_construction_permits_existing_res_unit Existing Res Unit
		 * @param {number} search_db_construction_permits_affordable_hsg_unit Affordable Hsg Unit
		 * @param {number} search_db_construction_permits_new_sf New Sf
		 * @param {number} search_db_construction_permits_remodel_sf Remodel Sf
		 * @param {string} search_db_construction_permits_narrative_description Narrative Description
		 * @param {string} search_db_construction_permits_primary_first_name Primary First Name
		 * @param {string} search_db_construction_permits_primary_last_name Primary Last Name
		 * @param {string} search_db_construction_permits_primary_company Primary Company
		 * @param {string} search_db_construction_permits_contractor_first_name Contractor First Name
		 * @param {string} search_db_construction_permits_contractor_last_name Contractor Last Name
		 * @param {string} search_db_construction_permits_contractor_company Contractor Company
		 * @param {string} search_db_construction_permits_owner1_first_name Owner1 First Name
		 * @param {string} search_db_construction_permits_owner1_last_name Owner1 Last Name
		 * @param {string} search_db_construction_permits_owner1_company Owner1 Company
		 * @param {string} search_db_construction_permits_owner2_first_name Owner2 First Name
		 * @param {string} search_db_construction_permits_owner2_last_name Owner2 Last Name
		 * @param {string} search_db_construction_permits_owner2_company Owner2 Company
		 * @return {void} No response was specified
		 */
		Search_construction_permits(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_construction_permits_address: string | null | undefined, search_db_construction_permits_case_status: string | null | undefined, search_db_construction_permits_category: string | null | undefined, search_db_construction_permits_building_uses_and_work_scopes: string | null | undefined, search_db_construction_permits_permit_types: string | null | undefined, search_db_construction_permits_total_project_value: number | null | undefined, search_db_construction_permits_total_subpermit_value: number | null | undefined, search_db_construction_permits_applied: string | null | undefined, search_db_construction_permits_approved: string | null | undefined, search_db_construction_permits_issued: string | null | undefined, search_db_construction_permits_co_date: string | null | undefined, search_db_construction_permits_completion_date: string | null | undefined, search_db_construction_permits_new_res_unit: number | null | undefined, search_db_construction_permits_existing_res_unit: number | null | undefined, search_db_construction_permits_affordable_hsg_unit: number | null | undefined, search_db_construction_permits_new_sf: number | null | undefined, search_db_construction_permits_remodel_sf: number | null | undefined, search_db_construction_permits_narrative_description: string | null | undefined, search_db_construction_permits_primary_first_name: string | null | undefined, search_db_construction_permits_primary_last_name: string | null | undefined, search_db_construction_permits_primary_company: string | null | undefined, search_db_construction_permits_contractor_first_name: string | null | undefined, search_db_construction_permits_contractor_last_name: string | null | undefined, search_db_construction_permits_contractor_company: string | null | undefined, search_db_construction_permits_owner1_first_name: string | null | undefined, search_db_construction_permits_owner1_last_name: string | null | undefined, search_db_construction_permits_owner1_company: string | null | undefined, search_db_construction_permits_owner2_first_name: string | null | undefined, search_db_construction_permits_owner2_last_name: string | null | undefined, search_db_construction_permits_owner2_company: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/construction_permits?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_construction_permits_address=' + (search_db_construction_permits_address == null ? '' : encodeURIComponent(search_db_construction_permits_address)) + '&search_db_construction_permits_case_status=' + (search_db_construction_permits_case_status == null ? '' : encodeURIComponent(search_db_construction_permits_case_status)) + '&search_db_construction_permits_category=' + (search_db_construction_permits_category == null ? '' : encodeURIComponent(search_db_construction_permits_category)) + '&search_db_construction_permits_building_uses_and_work_scopes=' + (search_db_construction_permits_building_uses_and_work_scopes == null ? '' : encodeURIComponent(search_db_construction_permits_building_uses_and_work_scopes)) + '&search_db_construction_permits_permit_types=' + (search_db_construction_permits_permit_types == null ? '' : encodeURIComponent(search_db_construction_permits_permit_types)) + '&search_db_construction_permits_total_project_value=' + search_db_construction_permits_total_project_value + '&search_db_construction_permits_total_subpermit_value=' + search_db_construction_permits_total_subpermit_value + '&search_db_construction_permits_applied=' + (search_db_construction_permits_applied == null ? '' : encodeURIComponent(search_db_construction_permits_applied)) + '&search_db_construction_permits_approved=' + (search_db_construction_permits_approved == null ? '' : encodeURIComponent(search_db_construction_permits_approved)) + '&search_db_construction_permits_issued=' + (search_db_construction_permits_issued == null ? '' : encodeURIComponent(search_db_construction_permits_issued)) + '&search_db_construction_permits_co_date=' + (search_db_construction_permits_co_date == null ? '' : encodeURIComponent(search_db_construction_permits_co_date)) + '&search_db_construction_permits_completion_date=' + (search_db_construction_permits_completion_date == null ? '' : encodeURIComponent(search_db_construction_permits_completion_date)) + '&search_db_construction_permits_new_res_unit=' + search_db_construction_permits_new_res_unit + '&search_db_construction_permits_existing_res_unit=' + search_db_construction_permits_existing_res_unit + '&search_db_construction_permits_affordable_hsg_unit=' + search_db_construction_permits_affordable_hsg_unit + '&search_db_construction_permits_new_sf=' + search_db_construction_permits_new_sf + '&search_db_construction_permits_remodel_sf=' + search_db_construction_permits_remodel_sf + '&search_db_construction_permits_narrative_description=' + (search_db_construction_permits_narrative_description == null ? '' : encodeURIComponent(search_db_construction_permits_narrative_description)) + '&search_db_construction_permits_primary_first_name=' + (search_db_construction_permits_primary_first_name == null ? '' : encodeURIComponent(search_db_construction_permits_primary_first_name)) + '&search_db_construction_permits_primary_last_name=' + (search_db_construction_permits_primary_last_name == null ? '' : encodeURIComponent(search_db_construction_permits_primary_last_name)) + '&search_db_construction_permits_primary_company=' + (search_db_construction_permits_primary_company == null ? '' : encodeURIComponent(search_db_construction_permits_primary_company)) + '&search_db_construction_permits_contractor_first_name=' + (search_db_construction_permits_contractor_first_name == null ? '' : encodeURIComponent(search_db_construction_permits_contractor_first_name)) + '&search_db_construction_permits_contractor_last_name=' + (search_db_construction_permits_contractor_last_name == null ? '' : encodeURIComponent(search_db_construction_permits_contractor_last_name)) + '&search_db_construction_permits_contractor_company=' + (search_db_construction_permits_contractor_company == null ? '' : encodeURIComponent(search_db_construction_permits_contractor_company)) + '&search_db_construction_permits_owner1_first_name=' + (search_db_construction_permits_owner1_first_name == null ? '' : encodeURIComponent(search_db_construction_permits_owner1_first_name)) + '&search_db_construction_permits_owner1_last_name=' + (search_db_construction_permits_owner1_last_name == null ? '' : encodeURIComponent(search_db_construction_permits_owner1_last_name)) + '&search_db_construction_permits_owner1_company=' + (search_db_construction_permits_owner1_company == null ? '' : encodeURIComponent(search_db_construction_permits_owner1_company)) + '&search_db_construction_permits_owner2_first_name=' + (search_db_construction_permits_owner2_first_name == null ? '' : encodeURIComponent(search_db_construction_permits_owner2_first_name)) + '&search_db_construction_permits_owner2_last_name=' + (search_db_construction_permits_owner2_last_name == null ? '' : encodeURIComponent(search_db_construction_permits_owner2_last_name)) + '&search_db_construction_permits_owner2_company=' + (search_db_construction_permits_owner2_company == null ? '' : encodeURIComponent(search_db_construction_permits_owner2_company)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Contact List' entry type
		 * API to search for entries of type Contact List
		 * Get repository/search/type/contact
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_contact_name Name
		 * @param {string} search_db_contact_institution Institution
		 * @param {string} search_db_contact_email Email
		 * @return {void} No response was specified
		 */
		Search_contact(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_contact_name: string | null | undefined, search_db_contact_institution: string | null | undefined, search_db_contact_email: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/contact?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_contact_name=' + (search_db_contact_name == null ? '' : encodeURIComponent(search_db_contact_name)) + '&search_db_contact_institution=' + (search_db_contact_institution == null ? '' : encodeURIComponent(search_db_contact_institution)) + '&search_db_contact_email=' + (search_db_contact_email == null ? '' : encodeURIComponent(search_db_contact_email)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Colorado Health Indicators' entry type
		 * API to search for entries of type Colorado Health Indicators
		 * Get repository/search/type/db_co_indicators
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_db_co_indicators_geo_name County
		 * @param {string} search_db_db_co_indicators_domain Domain
		 * @param {string} search_db_db_co_indicators_subdomain Subdomain
		 * @param {string} search_db_db_co_indicators_indicatorName Indicator
		 * @param {string} search_db_db_co_indicators_description Description
		 * @param {number} search_db_db_co_indicators_measure Measure
		 * @param {string} search_db_db_co_indicators_location Location
		 * @return {void} No response was specified
		 */
		Search_db_co_indicators(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_db_co_indicators_geo_name: string | null | undefined, search_db_db_co_indicators_domain: string | null | undefined, search_db_db_co_indicators_subdomain: string | null | undefined, search_db_db_co_indicators_indicatorName: string | null | undefined, search_db_db_co_indicators_description: string | null | undefined, search_db_db_co_indicators_measure: number | null | undefined, search_db_db_co_indicators_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/db_co_indicators?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_db_co_indicators_geo_name=' + (search_db_db_co_indicators_geo_name == null ? '' : encodeURIComponent(search_db_db_co_indicators_geo_name)) + '&search_db_db_co_indicators_domain=' + (search_db_db_co_indicators_domain == null ? '' : encodeURIComponent(search_db_db_co_indicators_domain)) + '&search_db_db_co_indicators_subdomain=' + (search_db_db_co_indicators_subdomain == null ? '' : encodeURIComponent(search_db_db_co_indicators_subdomain)) + '&search_db_db_co_indicators_indicatorName=' + (search_db_db_co_indicators_indicatorName == null ? '' : encodeURIComponent(search_db_db_co_indicators_indicatorName)) + '&search_db_db_co_indicators_description=' + (search_db_db_co_indicators_description == null ? '' : encodeURIComponent(search_db_db_co_indicators_description)) + '&search_db_db_co_indicators_measure=' + search_db_db_co_indicators_measure + '&search_db_db_co_indicators_location=' + (search_db_db_co_indicators_location == null ? '' : encodeURIComponent(search_db_db_co_indicators_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Landsat Satellite Data' entry type
		 * API to search for entries of type Landsat Satellite Data
		 * Get repository/search/type/earth_satellite_landsat
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_earth_satellite_landsat_sensor Sensor
		 * @param {string} search_earth_satellite_landsat_satellite Satellite
		 * @param {number} search_earth_satellite_landsat_wrs_path_number WRS Path
		 * @param {number} search_earth_satellite_landsat_wrs_row_number WRS Row
		 * @param {string} search_earth_satellite_landsat_ground_station Ground Station
		 * @param {number} search_earth_satellite_landsat_archive_version_number Archive Version Number
		 * @return {void} No response was specified
		 */
		Search_earth_satellite_landsat(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_earth_satellite_landsat_sensor: string | null | undefined, search_earth_satellite_landsat_satellite: string | null | undefined, search_earth_satellite_landsat_wrs_path_number: number | null | undefined, search_earth_satellite_landsat_wrs_row_number: number | null | undefined, search_earth_satellite_landsat_ground_station: string | null | undefined, search_earth_satellite_landsat_archive_version_number: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/earth_satellite_landsat?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_earth_satellite_landsat_sensor=' + (search_earth_satellite_landsat_sensor == null ? '' : encodeURIComponent(search_earth_satellite_landsat_sensor)) + '&search_earth_satellite_landsat_satellite=' + (search_earth_satellite_landsat_satellite == null ? '' : encodeURIComponent(search_earth_satellite_landsat_satellite)) + '&search_earth_satellite_landsat_wrs_path_number=' + search_earth_satellite_landsat_wrs_path_number + '&search_earth_satellite_landsat_wrs_row_number=' + search_earth_satellite_landsat_wrs_row_number + '&search_earth_satellite_landsat_ground_station=' + (search_earth_satellite_landsat_ground_station == null ? '' : encodeURIComponent(search_earth_satellite_landsat_ground_station)) + '&search_earth_satellite_landsat_archive_version_number=' + search_earth_satellite_landsat_archive_version_number, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FAQ' entry type
		 * API to search for entries of type FAQ
		 * Get repository/search/type/faq
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_faq(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/faq?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FEC PACs' entry type
		 * API to search for entries of type FEC PACs
		 * Get repository/search/type/fec_pacs
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_fec_pacs_committee Committee
		 * @param {number} search_db_fec_pacs_total_receipts Total Receipts
		 * @param {number} search_db_fec_pacs_beginning_cash Beginning Cash
		 * @param {number} search_db_fec_pacs_ending_cash Ending Cash
		 * @param {number} search_db_fec_pacs_contributions_from_individuals Contributions From Individuals
		 * @param {number} search_db_fec_pacs_contributions_from_other_committees Contributions From Other Committees
		 * @param {number} search_db_fec_pacs_trans_from_affiliates Trans From Affiliates
		 * @param {number} search_db_fec_pacs_contributions_to_other_committee Contributions To Other Committee
		 * @param {number} search_db_fec_pacs_contributions_from_candidate Contributions From Candidate
		 * @param {number} search_db_fec_pacs_loans_from_candidate Loans From Candidate
		 * @param {number} search_db_fec_pacs_total_loans_received Total Loans Received
		 * @param {number} search_db_fec_pacs_total_distributions Total Distributions
		 * @param {number} search_db_fec_pacs_transfers_to_affiliates Transfers To Affiliates
		 * @param {number} search_db_fec_pacs_refunds_to_individuals Refunds To Individuals
		 * @param {number} search_db_fec_pacs_refends_to_othercommittees Refends To Othercommittees
		 * @param {number} search_db_fec_pacs_candidate_loan_repayments Candidate Loan Repayments
		 * @param {number} search_db_fec_pacs_loan_repayments Loan Repayments
		 * @return {void} No response was specified
		 */
		Search_fec_pacs(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_fec_pacs_committee: string | null | undefined, search_db_fec_pacs_total_receipts: number | null | undefined, search_db_fec_pacs_beginning_cash: number | null | undefined, search_db_fec_pacs_ending_cash: number | null | undefined, search_db_fec_pacs_contributions_from_individuals: number | null | undefined, search_db_fec_pacs_contributions_from_other_committees: number | null | undefined, search_db_fec_pacs_trans_from_affiliates: number | null | undefined, search_db_fec_pacs_contributions_to_other_committee: number | null | undefined, search_db_fec_pacs_contributions_from_candidate: number | null | undefined, search_db_fec_pacs_loans_from_candidate: number | null | undefined, search_db_fec_pacs_total_loans_received: number | null | undefined, search_db_fec_pacs_total_distributions: number | null | undefined, search_db_fec_pacs_transfers_to_affiliates: number | null | undefined, search_db_fec_pacs_refunds_to_individuals: number | null | undefined, search_db_fec_pacs_refends_to_othercommittees: number | null | undefined, search_db_fec_pacs_candidate_loan_repayments: number | null | undefined, search_db_fec_pacs_loan_repayments: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/fec_pacs?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_fec_pacs_committee=' + (search_db_fec_pacs_committee == null ? '' : encodeURIComponent(search_db_fec_pacs_committee)) + '&search_db_fec_pacs_total_receipts=' + search_db_fec_pacs_total_receipts + '&search_db_fec_pacs_beginning_cash=' + search_db_fec_pacs_beginning_cash + '&search_db_fec_pacs_ending_cash=' + search_db_fec_pacs_ending_cash + '&search_db_fec_pacs_contributions_from_individuals=' + search_db_fec_pacs_contributions_from_individuals + '&search_db_fec_pacs_contributions_from_other_committees=' + search_db_fec_pacs_contributions_from_other_committees + '&search_db_fec_pacs_trans_from_affiliates=' + search_db_fec_pacs_trans_from_affiliates + '&search_db_fec_pacs_contributions_to_other_committee=' + search_db_fec_pacs_contributions_to_other_committee + '&search_db_fec_pacs_contributions_from_candidate=' + search_db_fec_pacs_contributions_from_candidate + '&search_db_fec_pacs_loans_from_candidate=' + search_db_fec_pacs_loans_from_candidate + '&search_db_fec_pacs_total_loans_received=' + search_db_fec_pacs_total_loans_received + '&search_db_fec_pacs_total_distributions=' + search_db_fec_pacs_total_distributions + '&search_db_fec_pacs_transfers_to_affiliates=' + search_db_fec_pacs_transfers_to_affiliates + '&search_db_fec_pacs_refunds_to_individuals=' + search_db_fec_pacs_refunds_to_individuals + '&search_db_fec_pacs_refends_to_othercommittees=' + search_db_fec_pacs_refends_to_othercommittees + '&search_db_fec_pacs_candidate_loan_repayments=' + search_db_fec_pacs_candidate_loan_repayments + '&search_db_fec_pacs_loan_repayments=' + search_db_fec_pacs_loan_repayments, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Candidates' entry type
		 * API to search for entries of type Candidates
		 * Get repository/search/type/feccandidates
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_feccandidates_name Name
		 * @param {string} search_db_feccandidates_party Party
		 * @param {string} search_db_feccandidates_state State
		 * @param {string} search_db_feccandidates_district District
		 * @param {string} search_db_feccandidates_gender Gender
		 * @param {number} search_db_feccandidates_beginning_cash Beginning Cash
		 * @param {number} search_db_feccandidates_ending_cash Ending Cash
		 * @param {number} search_db_feccandidates_total_receipts Total Receipts
		 * @param {number} search_db_feccandidates_total_indivual_contributions Total Indivual Contributions
		 * @param {number} search_db_feccandidates_transfers_from_committees Transfers From Committees
		 * @param {number} search_db_feccandidates_transfers_to_committees Transfers To Committees
		 * @param {number} search_db_feccandidates_total_disbursements Total Disbursements
		 * @param {number} search_db_feccandidates_contributions_from_candidate Contributions From Candidate
		 * @param {number} search_db_feccandidates_loans_from_candidates Loans From Candidates
		 * @param {number} search_db_feccandidates_other_loans Other Loans
		 * @param {number} search_db_feccandidates_candidate_loan_repayments Candidate Loan Repayments
		 * @param {number} search_db_feccandidates_other_loan_repayments Other Loan Repayments
		 * @param {number} search_db_feccandidates_debts_owed_by Debts Owed By
		 * @param {number} search_db_feccandidates_contributions_from_other_committees Contributions From Other Committees
		 * @param {number} search_db_feccandidates_contributions_from_party_committees Contributions From Party Committees
		 * @param {string} search_db_feccandidates_coverage_end_date Coverage End Date
		 * @param {number} search_db_feccandidates_individual_refunds Individual Refunds
		 * @param {number} search_db_feccandidates_committee_refunds Committee Refunds
		 * @return {void} No response was specified
		 */
		Search_feccandidates(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_feccandidates_name: string | null | undefined, search_db_feccandidates_party: string | null | undefined, search_db_feccandidates_state: string | null | undefined, search_db_feccandidates_district: string | null | undefined, search_db_feccandidates_gender: string | null | undefined, search_db_feccandidates_beginning_cash: number | null | undefined, search_db_feccandidates_ending_cash: number | null | undefined, search_db_feccandidates_total_receipts: number | null | undefined, search_db_feccandidates_total_indivual_contributions: number | null | undefined, search_db_feccandidates_transfers_from_committees: number | null | undefined, search_db_feccandidates_transfers_to_committees: number | null | undefined, search_db_feccandidates_total_disbursements: number | null | undefined, search_db_feccandidates_contributions_from_candidate: number | null | undefined, search_db_feccandidates_loans_from_candidates: number | null | undefined, search_db_feccandidates_other_loans: number | null | undefined, search_db_feccandidates_candidate_loan_repayments: number | null | undefined, search_db_feccandidates_other_loan_repayments: number | null | undefined, search_db_feccandidates_debts_owed_by: number | null | undefined, search_db_feccandidates_contributions_from_other_committees: number | null | undefined, search_db_feccandidates_contributions_from_party_committees: number | null | undefined, search_db_feccandidates_coverage_end_date: string | null | undefined, search_db_feccandidates_individual_refunds: number | null | undefined, search_db_feccandidates_committee_refunds: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/feccandidates?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_feccandidates_name=' + (search_db_feccandidates_name == null ? '' : encodeURIComponent(search_db_feccandidates_name)) + '&search_db_feccandidates_party=' + (search_db_feccandidates_party == null ? '' : encodeURIComponent(search_db_feccandidates_party)) + '&search_db_feccandidates_state=' + (search_db_feccandidates_state == null ? '' : encodeURIComponent(search_db_feccandidates_state)) + '&search_db_feccandidates_district=' + (search_db_feccandidates_district == null ? '' : encodeURIComponent(search_db_feccandidates_district)) + '&search_db_feccandidates_gender=' + (search_db_feccandidates_gender == null ? '' : encodeURIComponent(search_db_feccandidates_gender)) + '&search_db_feccandidates_beginning_cash=' + search_db_feccandidates_beginning_cash + '&search_db_feccandidates_ending_cash=' + search_db_feccandidates_ending_cash + '&search_db_feccandidates_total_receipts=' + search_db_feccandidates_total_receipts + '&search_db_feccandidates_total_indivual_contributions=' + search_db_feccandidates_total_indivual_contributions + '&search_db_feccandidates_transfers_from_committees=' + search_db_feccandidates_transfers_from_committees + '&search_db_feccandidates_transfers_to_committees=' + search_db_feccandidates_transfers_to_committees + '&search_db_feccandidates_total_disbursements=' + search_db_feccandidates_total_disbursements + '&search_db_feccandidates_contributions_from_candidate=' + search_db_feccandidates_contributions_from_candidate + '&search_db_feccandidates_loans_from_candidates=' + search_db_feccandidates_loans_from_candidates + '&search_db_feccandidates_other_loans=' + search_db_feccandidates_other_loans + '&search_db_feccandidates_candidate_loan_repayments=' + search_db_feccandidates_candidate_loan_repayments + '&search_db_feccandidates_other_loan_repayments=' + search_db_feccandidates_other_loan_repayments + '&search_db_feccandidates_debts_owed_by=' + search_db_feccandidates_debts_owed_by + '&search_db_feccandidates_contributions_from_other_committees=' + search_db_feccandidates_contributions_from_other_committees + '&search_db_feccandidates_contributions_from_party_committees=' + search_db_feccandidates_contributions_from_party_committees + '&search_db_feccandidates_coverage_end_date=' + (search_db_feccandidates_coverage_end_date == null ? '' : encodeURIComponent(search_db_feccandidates_coverage_end_date)) + '&search_db_feccandidates_individual_refunds=' + search_db_feccandidates_individual_refunds + '&search_db_feccandidates_committee_refunds=' + search_db_feccandidates_committee_refunds, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'RSS/ATOM Feed' entry type
		 * API to search for entries of type RSS/ATOM Feed
		 * Get repository/search/type/feed
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_feed(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/feed?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'File' entry type
		 * API to search for entries of type File
		 * Get repository/search/type/file
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_file(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/file?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FITS Data File' entry type
		 * API to search for entries of type FITS Data File
		 * Get repository/search/type/fits_data
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_fits_data_origin Origin
		 * @param {string} search_fits_data_telescope Telescope
		 * @param {string} search_fits_data_instrument Instrument
		 * @return {void} No response was specified
		 */
		Search_fits_data(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_fits_data_origin: string | null | undefined, search_fits_data_telescope: string | null | undefined, search_fits_data_instrument: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/fits_data?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_fits_data_origin=' + (search_fits_data_origin == null ? '' : encodeURIComponent(search_fits_data_origin)) + '&search_fits_data_telescope=' + (search_fits_data_telescope == null ? '' : encodeURIComponent(search_fits_data_telescope)) + '&search_fits_data_instrument=' + (search_fits_data_instrument == null ? '' : encodeURIComponent(search_fits_data_instrument)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Remote FTP File View' entry type
		 * API to search for entries of type Remote FTP File View
		 * Get repository/search/type/ftp
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_ftp(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/ftp?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Countdown' entry type
		 * API to search for entries of type Countdown
		 * Get repository/search/type/gadgets_countdown
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_gadgets_countdown(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/gadgets_countdown?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Stock Ticker' entry type
		 * API to search for entries of type Stock Ticker
		 * Get repository/search/type/gadgets_stock
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_gadgets_stock(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/gadgets_stock?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Weather' entry type
		 * API to search for entries of type Weather
		 * Get repository/search/type/gadgets_weather
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_gadgets_weather(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/gadgets_weather?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Census Tracts' entry type
		 * API to search for entries of type Census Tracts
		 * Get repository/search/type/gazeteer_census_tracts
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_gazeteer_census_tracts_state State
		 * @param {string} search_db_gazeteer_census_tracts_state_fips State Fips
		 * @param {string} search_db_gazeteer_census_tracts_county_name County Name
		 * @param {string} search_db_gazeteer_census_tracts_county_fips County Fips
		 * @param {string} search_db_gazeteer_census_tracts_census_tract_id Census Tract Id
		 * @param {string} search_db_gazeteer_census_tracts_full_census_tract_id Full Census Tract Id
		 * @param {number} search_db_gazeteer_census_tracts_land_area Land Area
		 * @param {number} search_db_gazeteer_census_tracts_water_area Water Area
		 * @param {string} search_db_gazeteer_census_tracts_location Location
		 * @return {void} No response was specified
		 */
		Search_gazeteer_census_tracts(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_gazeteer_census_tracts_state: string | null | undefined, search_db_gazeteer_census_tracts_state_fips: string | null | undefined, search_db_gazeteer_census_tracts_county_name: string | null | undefined, search_db_gazeteer_census_tracts_county_fips: string | null | undefined, search_db_gazeteer_census_tracts_census_tract_id: string | null | undefined, search_db_gazeteer_census_tracts_full_census_tract_id: string | null | undefined, search_db_gazeteer_census_tracts_land_area: number | null | undefined, search_db_gazeteer_census_tracts_water_area: number | null | undefined, search_db_gazeteer_census_tracts_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/gazeteer_census_tracts?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_gazeteer_census_tracts_state=' + (search_db_gazeteer_census_tracts_state == null ? '' : encodeURIComponent(search_db_gazeteer_census_tracts_state)) + '&search_db_gazeteer_census_tracts_state_fips=' + (search_db_gazeteer_census_tracts_state_fips == null ? '' : encodeURIComponent(search_db_gazeteer_census_tracts_state_fips)) + '&search_db_gazeteer_census_tracts_county_name=' + (search_db_gazeteer_census_tracts_county_name == null ? '' : encodeURIComponent(search_db_gazeteer_census_tracts_county_name)) + '&search_db_gazeteer_census_tracts_county_fips=' + (search_db_gazeteer_census_tracts_county_fips == null ? '' : encodeURIComponent(search_db_gazeteer_census_tracts_county_fips)) + '&search_db_gazeteer_census_tracts_census_tract_id=' + (search_db_gazeteer_census_tracts_census_tract_id == null ? '' : encodeURIComponent(search_db_gazeteer_census_tracts_census_tract_id)) + '&search_db_gazeteer_census_tracts_full_census_tract_id=' + (search_db_gazeteer_census_tracts_full_census_tract_id == null ? '' : encodeURIComponent(search_db_gazeteer_census_tracts_full_census_tract_id)) + '&search_db_gazeteer_census_tracts_land_area=' + search_db_gazeteer_census_tracts_land_area + '&search_db_gazeteer_census_tracts_water_area=' + search_db_gazeteer_census_tracts_water_area + '&search_db_gazeteer_census_tracts_location=' + (search_db_gazeteer_census_tracts_location == null ? '' : encodeURIComponent(search_db_gazeteer_census_tracts_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Census Gazeteer Counties' entry type
		 * API to search for entries of type Census Gazeteer Counties
		 * Get repository/search/type/gazeteer_counties
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_gazeteer_counties_state_abbreviation State Abbreviation
		 * @param {string} search_db_gazeteer_counties_state_fips State Fips
		 * @param {string} search_db_gazeteer_counties_county_fips County Fips
		 * @param {string} search_db_gazeteer_counties_full_county_fips Full County Fips
		 * @param {string} search_db_gazeteer_counties_county_name County Name
		 * @param {number} search_db_gazeteer_counties_area_land Area Land
		 * @param {number} search_db_gazeteer_counties_area_water Area Water
		 * @param {string} search_db_gazeteer_counties_location Location
		 * @return {void} No response was specified
		 */
		Search_gazeteer_counties(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_gazeteer_counties_state_abbreviation: string | null | undefined, search_db_gazeteer_counties_state_fips: string | null | undefined, search_db_gazeteer_counties_county_fips: string | null | undefined, search_db_gazeteer_counties_full_county_fips: string | null | undefined, search_db_gazeteer_counties_county_name: string | null | undefined, search_db_gazeteer_counties_area_land: number | null | undefined, search_db_gazeteer_counties_area_water: number | null | undefined, search_db_gazeteer_counties_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/gazeteer_counties?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_gazeteer_counties_state_abbreviation=' + (search_db_gazeteer_counties_state_abbreviation == null ? '' : encodeURIComponent(search_db_gazeteer_counties_state_abbreviation)) + '&search_db_gazeteer_counties_state_fips=' + (search_db_gazeteer_counties_state_fips == null ? '' : encodeURIComponent(search_db_gazeteer_counties_state_fips)) + '&search_db_gazeteer_counties_county_fips=' + (search_db_gazeteer_counties_county_fips == null ? '' : encodeURIComponent(search_db_gazeteer_counties_county_fips)) + '&search_db_gazeteer_counties_full_county_fips=' + (search_db_gazeteer_counties_full_county_fips == null ? '' : encodeURIComponent(search_db_gazeteer_counties_full_county_fips)) + '&search_db_gazeteer_counties_county_name=' + (search_db_gazeteer_counties_county_name == null ? '' : encodeURIComponent(search_db_gazeteer_counties_county_name)) + '&search_db_gazeteer_counties_area_land=' + search_db_gazeteer_counties_area_land + '&search_db_gazeteer_counties_area_water=' + search_db_gazeteer_counties_area_water + '&search_db_gazeteer_counties_location=' + (search_db_gazeteer_counties_location == null ? '' : encodeURIComponent(search_db_gazeteer_counties_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'GeoJson File' entry type
		 * API to search for entries of type GeoJson File
		 * Get repository/search/type/geo_geojson
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_geo_geojson(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/geo_geojson?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'GeoTIFF' entry type
		 * API to search for entries of type GeoTIFF
		 * Get repository/search/type/geo_geotiff
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_geo_geotiff(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/geo_geotiff?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'GPX GPS File' entry type
		 * API to search for entries of type GPX GPS File
		 * Get repository/search/type/geo_gpx
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {number} search_geo_gpx_distance Distance
		 * @param {number} search_geo_gpx_total_time Total Time
		 * @param {number} search_geo_gpx_moving_time Moving Time
		 * @param {number} search_geo_gpx_speed Average Speed
		 * @param {number} search_geo_gpx_elevation_gain Elevation Gain
		 * @param {number} search_geo_gpx_elevation_loss Elevation Loss
		 * @return {void} No response was specified
		 */
		Search_geo_gpx(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_geo_gpx_distance: number | null | undefined, search_geo_gpx_total_time: number | null | undefined, search_geo_gpx_moving_time: number | null | undefined, search_geo_gpx_speed: number | null | undefined, search_geo_gpx_elevation_gain: number | null | undefined, search_geo_gpx_elevation_loss: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/geo_gpx?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_geo_gpx_distance=' + search_geo_gpx_distance + '&search_geo_gpx_total_time=' + search_geo_gpx_total_time + '&search_geo_gpx_moving_time=' + search_geo_gpx_moving_time + '&search_geo_gpx_speed=' + search_geo_gpx_speed + '&search_geo_gpx_elevation_gain=' + search_geo_gpx_elevation_gain + '&search_geo_gpx_elevation_loss=' + search_geo_gpx_elevation_loss, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'HDF5 File' entry type
		 * API to search for entries of type HDF5 File
		 * Get repository/search/type/geo_hdf5
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_geo_hdf5(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/geo_hdf5?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'KML/KMZ File' entry type
		 * API to search for entries of type KML/KMZ File
		 * Get repository/search/type/geo_kml
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_geo_kml(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/geo_kml?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Shapefile' entry type
		 * API to search for entries of type Shapefile
		 * Get repository/search/type/geo_shapefile
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_geo_shapefile(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/geo_shapefile?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Shapefile with FIPS Code' entry type
		 * API to search for entries of type Shapefile with FIPS Code
		 * Get repository/search/type/geo_shapefile_fips
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_geo_shapefile_fips(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/geo_shapefile_fips?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Glossary' entry type
		 * API to search for entries of type Glossary
		 * Get repository/search/type/glossary
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_glossary(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/glossary?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Grid Aggregation' entry type
		 * API to search for entries of type Grid Aggregation
		 * Get repository/search/type/gridaggregation
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_gridaggregation(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/gridaggregation?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Folder' entry type
		 * API to search for entries of type Folder
		 * Get repository/search/type/group
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_group(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/group?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'HipChat Group' entry type
		 * API to search for entries of type HipChat Group
		 * Get repository/search/type/hipchat_group
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_hipchat_group(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/hipchat_group?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Home Page' entry type
		 * API to search for entries of type Home Page
		 * Get repository/search/type/homepage
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_homepage(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/homepage?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Incident' entry type
		 * API to search for entries of type Incident
		 * Get repository/search/type/incident
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_incident_incidenttype Incident Type
		 * @param {string} search_incident_cause Cause
		 * @param {string} search_incident_state State
		 * @return {void} No response was specified
		 */
		Search_incident(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_incident_incidenttype: string | null | undefined, search_incident_cause: string | null | undefined, search_incident_state: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/incident?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_incident_incidenttype=' + (search_incident_incidenttype == null ? '' : encodeURIComponent(search_incident_incidenttype)) + '&search_incident_cause=' + (search_incident_cause == null ? '' : encodeURIComponent(search_incident_cause)) + '&search_incident_state=' + (search_incident_state == null ? '' : encodeURIComponent(search_incident_state)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Jeopardy' entry type
		 * API to search for entries of type Jeopardy
		 * Get repository/search/type/jeopardy
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_jeopardy_question Question
		 * @param {string} search_db_jeopardy_answer Answer
		 * @param {string} search_db_jeopardy_round Round
		 * @param {string} search_db_jeopardy_category Category
		 * @param {string} search_db_jeopardy_air_date Air Date
		 * @return {void} No response was specified
		 */
		Search_jeopardy(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_jeopardy_question: string | null | undefined, search_db_jeopardy_answer: string | null | undefined, search_db_jeopardy_round: string | null | undefined, search_db_jeopardy_category: string | null | undefined, search_db_jeopardy_air_date: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/jeopardy?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_jeopardy_question=' + (search_db_jeopardy_question == null ? '' : encodeURIComponent(search_db_jeopardy_question)) + '&search_db_jeopardy_answer=' + (search_db_jeopardy_answer == null ? '' : encodeURIComponent(search_db_jeopardy_answer)) + '&search_db_jeopardy_round=' + (search_db_jeopardy_round == null ? '' : encodeURIComponent(search_db_jeopardy_round)) + '&search_db_jeopardy_category=' + (search_db_jeopardy_category == null ? '' : encodeURIComponent(search_db_jeopardy_category)) + '&search_db_jeopardy_air_date=' + (search_db_jeopardy_air_date == null ? '' : encodeURIComponent(search_db_jeopardy_air_date)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Lat-Lon Image' entry type
		 * API to search for entries of type Lat-Lon Image
		 * Get repository/search/type/latlonimage
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_latlonimage(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/latlonimage?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'LiDAR Collection' entry type
		 * API to search for entries of type LiDAR Collection
		 * Get repository/search/type/lidar_collection
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_lidar_collection(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/lidar_collection?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'LAS Lidar Data' entry type
		 * API to search for entries of type LAS Lidar Data
		 * Get repository/search/type/lidar_las
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_lidar_las(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/lidar_las?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'LVIS Lidar Data' entry type
		 * API to search for entries of type LVIS Lidar Data
		 * Get repository/search/type/lidar_lvis
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_lidar_lvis(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/lidar_lvis?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Link' entry type
		 * API to search for entries of type Link
		 * Get repository/search/type/link
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_link(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/link?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Server Side Files' entry type
		 * API to search for entries of type Server Side Files
		 * Get repository/search/type/localfiles
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_localfiles(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/localfiles?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Locations' entry type
		 * API to search for entries of type Locations
		 * Get repository/search/type/locations
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_locations_name Name
		 * @param {string} search_db_locations_type Type
		 * @param {string} search_db_locations_location Location
		 * @return {void} No response was specified
		 */
		Search_locations(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_locations_name: string | null | undefined, search_db_locations_type: string | null | undefined, search_db_locations_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/locations?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_locations_name=' + (search_db_locations_name == null ? '' : encodeURIComponent(search_db_locations_name)) + '&search_db_locations_type=' + (search_db_locations_type == null ? '' : encodeURIComponent(search_db_locations_type)) + '&search_db_locations_location=' + (search_db_locations_location == null ? '' : encodeURIComponent(search_db_locations_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Google Map URL' entry type
		 * API to search for entries of type Google Map URL
		 * Get repository/search/type/map_googlemap
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_map_googlemap(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/map_googlemap?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Audio File' entry type
		 * API to search for entries of type Audio File
		 * Get repository/search/type/media_audiofile
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_media_audiofile(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/media_audiofile?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Image Loop' entry type
		 * API to search for entries of type Image Loop
		 * Get repository/search/type/media_imageloop
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_media_imageloop(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/media_imageloop?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Photo Album' entry type
		 * API to search for entries of type Photo Album
		 * Get repository/search/type/media_photoalbum
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_media_photoalbum(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/media_photoalbum?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Video Channel' entry type
		 * API to search for entries of type Video Channel
		 * Get repository/search/type/media_video_channel
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_media_video_channel(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/media_video_channel?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Quicktime Video' entry type
		 * API to search for entries of type Quicktime Video
		 * Get repository/search/type/media_video_quicktime
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_media_video_quicktime(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/media_video_quicktime?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'YouTube Video' entry type
		 * API to search for entries of type YouTube Video
		 * Get repository/search/type/media_youtubevideo
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_media_youtubevideo(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/media_youtubevideo?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Notes' entry type
		 * API to search for entries of type Notes
		 * Get repository/search/type/notes
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_notes_note Note
		 * @return {void} No response was specified
		 */
		Search_notes(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_notes_note: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/notes?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_notes_note=' + (search_db_notes_note == null ? '' : encodeURIComponent(search_db_notes_note)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Json File' entry type
		 * API to search for entries of type Json File
		 * Get repository/search/type/notes_jsonfile
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_notes_jsonfile(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/notes_jsonfile?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Note' entry type
		 * API to search for entries of type Note
		 * Get repository/search/type/notes_note
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_notes_note(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/notes_note?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Notebook' entry type
		 * API to search for entries of type Notebook
		 * Get repository/search/type/notes_notebook
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_notes_notebook(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/notes_notebook?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NWS Forecast Feed' entry type
		 * API to search for entries of type NWS Forecast Feed
		 * Get repository/search/type/nwsfeed
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_nwsfeed(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/nwsfeed?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'OPeNDAP Link' entry type
		 * API to search for entries of type OPeNDAP Link
		 * Get repository/search/type/opendaplink
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_opendaplink(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/opendaplink?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'OWL Class' entry type
		 * API to search for entries of type OWL Class
		 * Get repository/search/type/owl.class
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_owl_class(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/owl.class?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'OWL Ontology' entry type
		 * API to search for entries of type OWL Ontology
		 * Get repository/search/type/owl.ontology
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_owl_ontology(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/owl.ontology?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Paste Text Entry' entry type
		 * API to search for entries of type Paste Text Entry
		 * Get repository/search/type/pasteitentry
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_pasteitentry(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/pasteitentry?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Text Point Data' entry type
		 * API to search for entries of type Text Point Data
		 * Get repository/search/type/point_text
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_point_text(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/point_text?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Police Stop Data' entry type
		 * API to search for entries of type Police Stop Data
		 * Get repository/search/type/police_stop_data
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_police_stop_data_race Race
		 * @param {string} search_db_police_stop_data_ethnicity Ethnicity
		 * @param {string} search_db_police_stop_data_sex Sex
		 * @param {number} search_db_police_stop_data_minutes Minutes
		 * @param {string} search_db_police_stop_data_date Date
		 * @param {string} search_db_police_stop_data_address Address
		 * @param {string} search_db_police_stop_data_resident Resident
		 * @return {void} No response was specified
		 */
		Search_police_stop_data(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_police_stop_data_race: string | null | undefined, search_db_police_stop_data_ethnicity: string | null | undefined, search_db_police_stop_data_sex: string | null | undefined, search_db_police_stop_data_minutes: number | null | undefined, search_db_police_stop_data_date: string | null | undefined, search_db_police_stop_data_address: string | null | undefined, search_db_police_stop_data_resident: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/police_stop_data?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_police_stop_data_race=' + (search_db_police_stop_data_race == null ? '' : encodeURIComponent(search_db_police_stop_data_race)) + '&search_db_police_stop_data_ethnicity=' + (search_db_police_stop_data_ethnicity == null ? '' : encodeURIComponent(search_db_police_stop_data_ethnicity)) + '&search_db_police_stop_data_sex=' + (search_db_police_stop_data_sex == null ? '' : encodeURIComponent(search_db_police_stop_data_sex)) + '&search_db_police_stop_data_minutes=' + search_db_police_stop_data_minutes + '&search_db_police_stop_data_date=' + (search_db_police_stop_data_date == null ? '' : encodeURIComponent(search_db_police_stop_data_date)) + '&search_db_police_stop_data_address=' + (search_db_police_stop_data_address == null ? '' : encodeURIComponent(search_db_police_stop_data_address)) + '&search_db_police_stop_data_resident=' + (search_db_police_stop_data_resident == null ? '' : encodeURIComponent(search_db_police_stop_data_resident)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Poll' entry type
		 * API to search for entries of type Poll
		 * Get repository/search/type/poll
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_poll(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/poll?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Campaign' entry type
		 * API to search for entries of type Campaign
		 * Get repository/search/type/project_campaign
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_campaign(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_campaign?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Case Study' entry type
		 * API to search for entries of type Case Study
		 * Get repository/search/type/project_casestudy
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_casestudy_intended_use Intended Use
		 * @param {string} search_project_casestudy_location Where
		 * @return {void} No response was specified
		 */
		Search_project_casestudy(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_casestudy_intended_use: string | null | undefined, search_project_casestudy_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_casestudy?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_casestudy_intended_use=' + (search_project_casestudy_intended_use == null ? '' : encodeURIComponent(search_project_casestudy_intended_use)) + '&search_project_casestudy_location=' + (search_project_casestudy_location == null ? '' : encodeURIComponent(search_project_casestudy_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Research Contribution' entry type
		 * API to search for entries of type Research Contribution
		 * Get repository/search/type/project_contribution
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_contribution(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_contribution?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Data Format' entry type
		 * API to search for entries of type Data Format
		 * Get repository/search/type/project_dataformat
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_dataformat_data_type Data Type
		 * @param {string} search_project_dataformat_field Field
		 * @return {void} No response was specified
		 */
		Search_project_dataformat(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_dataformat_data_type: string | null | undefined, search_project_dataformat_field: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_dataformat?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_dataformat_data_type=' + (search_project_dataformat_data_type == null ? '' : encodeURIComponent(search_project_dataformat_data_type)) + '&search_project_dataformat_field=' + (search_project_dataformat_field == null ? '' : encodeURIComponent(search_project_dataformat_field)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Dataset' entry type
		 * API to search for entries of type Dataset
		 * Get repository/search/type/project_dataset
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_dataset_dataset_id Dataset ID
		 * @param {string} search_project_dataset_data_type Data Type
		 * @param {string} search_project_dataset_data_level Data Level
		 * @return {void} No response was specified
		 */
		Search_project_dataset(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_dataset_dataset_id: string | null | undefined, search_project_dataset_data_type: string | null | undefined, search_project_dataset_data_level: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_dataset?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_dataset_dataset_id=' + (search_project_dataset_dataset_id == null ? '' : encodeURIComponent(search_project_dataset_dataset_id)) + '&search_project_dataset_data_type=' + (search_project_dataset_data_type == null ? '' : encodeURIComponent(search_project_dataset_data_type)) + '&search_project_dataset_data_level=' + (search_project_dataset_data_level == null ? '' : encodeURIComponent(search_project_dataset_data_level)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Deployment' entry type
		 * API to search for entries of type Deployment
		 * Get repository/search/type/project_deployment
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_deployment(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_deployment?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Experiment' entry type
		 * API to search for entries of type Experiment
		 * Get repository/search/type/project_experiment
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_experiment(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_experiment?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Field Note' entry type
		 * API to search for entries of type Field Note
		 * Get repository/search/type/project_fieldnote
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_fieldnote(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_fieldnote?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Control Points File' entry type
		 * API to search for entries of type Control Points File
		 * Get repository/search/type/project_gps_controlpoints
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_gps_controlpoints(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_gps_controlpoints?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Raw GPS File' entry type
		 * API to search for entries of type Raw GPS File
		 * Get repository/search/type/project_gps_raw
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_gps_raw(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_gps_raw?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'RINEX File' entry type
		 * API to search for entries of type RINEX File
		 * Get repository/search/type/project_gps_rinex
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_gps_rinex(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_gps_rinex?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Instrument Data Collection' entry type
		 * API to search for entries of type Instrument Data Collection
		 * Get repository/search/type/project_instrument
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_instrument(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_instrument?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Teaching Resource' entry type
		 * API to search for entries of type Teaching Resource
		 * Get repository/search/type/project_learning_resource
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_learning_resource_topic Topic
		 * @param {string} search_project_learning_resource_grade_level Grade Level
		 * @return {void} No response was specified
		 */
		Search_project_learning_resource(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_learning_resource_topic: string | null | undefined, search_project_learning_resource_grade_level: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_learning_resource?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_learning_resource_topic=' + (search_project_learning_resource_topic == null ? '' : encodeURIComponent(search_project_learning_resource_topic)) + '&search_project_learning_resource_grade_level=' + (search_project_learning_resource_grade_level == null ? '' : encodeURIComponent(search_project_learning_resource_grade_level)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Meeting' entry type
		 * API to search for entries of type Meeting
		 * Get repository/search/type/project_meeting
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_meeting_topic Topic
		 * @param {string} search_project_meeting_location Location
		 * @param {string} search_project_meeting_participants Participants
		 * @return {void} No response was specified
		 */
		Search_project_meeting(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_meeting_topic: string | null | undefined, search_project_meeting_location: string | null | undefined, search_project_meeting_participants: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_meeting?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_meeting_topic=' + (search_project_meeting_topic == null ? '' : encodeURIComponent(search_project_meeting_topic)) + '&search_project_meeting_location=' + (search_project_meeting_location == null ? '' : encodeURIComponent(search_project_meeting_location)) + '&search_project_meeting_participants=' + (search_project_meeting_participants == null ? '' : encodeURIComponent(search_project_meeting_participants)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Organization' entry type
		 * API to search for entries of type Organization
		 * Get repository/search/type/project_organization
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_organization_organization_type Organization Type
		 * @param {string} search_project_organization_status Status
		 * @return {void} No response was specified
		 */
		Search_project_organization(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_organization_organization_type: string | null | undefined, search_project_organization_status: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_organization?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_organization_organization_type=' + (search_project_organization_organization_type == null ? '' : encodeURIComponent(search_project_organization_organization_type)) + '&search_project_organization_status=' + (search_project_organization_status == null ? '' : encodeURIComponent(search_project_organization_status)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Program' entry type
		 * API to search for entries of type Program
		 * Get repository/search/type/project_program
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_program(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_program?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Project' entry type
		 * API to search for entries of type Project
		 * Get repository/search/type/project_project
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_project(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_project?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Data Access Service' entry type
		 * API to search for entries of type Data Access Service
		 * Get repository/search/type/project_service
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_service_service_type Service Type
		 * @param {string} search_project_service_provider Provider
		 * @return {void} No response was specified
		 */
		Search_project_service(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_service_service_type: string | null | undefined, search_project_service_provider: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_service?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_service_service_type=' + (search_project_service_service_type == null ? '' : encodeURIComponent(search_project_service_service_type)) + '&search_project_service_provider=' + (search_project_service_provider == null ? '' : encodeURIComponent(search_project_service_provider)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Site' entry type
		 * API to search for entries of type Site
		 * Get repository/search/type/project_site
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_site_short_name Short Name
		 * @param {string} search_project_site_site_type Site Type
		 * @param {string} search_project_site_status Status
		 * @param {string} search_project_site_network Network
		 * @param {string} search_project_site_country Country
		 * @param {string} search_project_site_state State/Province
		 * @param {string} search_project_site_county County
		 * @return {void} No response was specified
		 */
		Search_project_site(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_site_short_name: string | null | undefined, search_project_site_site_type: string | null | undefined, search_project_site_status: string | null | undefined, search_project_site_network: string | null | undefined, search_project_site_country: string | null | undefined, search_project_site_state: string | null | undefined, search_project_site_county: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_site?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_site_short_name=' + (search_project_site_short_name == null ? '' : encodeURIComponent(search_project_site_short_name)) + '&search_project_site_site_type=' + (search_project_site_site_type == null ? '' : encodeURIComponent(search_project_site_site_type)) + '&search_project_site_status=' + (search_project_site_status == null ? '' : encodeURIComponent(search_project_site_status)) + '&search_project_site_network=' + (search_project_site_network == null ? '' : encodeURIComponent(search_project_site_network)) + '&search_project_site_country=' + (search_project_site_country == null ? '' : encodeURIComponent(search_project_site_country)) + '&search_project_site_state=' + (search_project_site_state == null ? '' : encodeURIComponent(search_project_site_state)) + '&search_project_site_county=' + (search_project_site_county == null ? '' : encodeURIComponent(search_project_site_county)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Software Tool' entry type
		 * API to search for entries of type Software Tool
		 * Get repository/search/type/project_softwarepackage
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_softwarepackage_software_use Software Use
		 * @param {string} search_project_softwarepackage_software_type Software Type
		 * @param {string} search_project_softwarepackage_domain Science Domain
		 * @param {string} search_project_softwarepackage_platform Platform
		 * @param {string} search_project_softwarepackage_license License
		 * @param {string} search_project_softwarepackage_status Development Status
		 * @param {string} search_project_softwarepackage_capabilities Capabilities
		 * @return {void} No response was specified
		 */
		Search_project_softwarepackage(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_softwarepackage_software_use: string | null | undefined, search_project_softwarepackage_software_type: string | null | undefined, search_project_softwarepackage_domain: string | null | undefined, search_project_softwarepackage_platform: string | null | undefined, search_project_softwarepackage_license: string | null | undefined, search_project_softwarepackage_status: string | null | undefined, search_project_softwarepackage_capabilities: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_softwarepackage?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_softwarepackage_software_use=' + (search_project_softwarepackage_software_use == null ? '' : encodeURIComponent(search_project_softwarepackage_software_use)) + '&search_project_softwarepackage_software_type=' + (search_project_softwarepackage_software_type == null ? '' : encodeURIComponent(search_project_softwarepackage_software_type)) + '&search_project_softwarepackage_domain=' + (search_project_softwarepackage_domain == null ? '' : encodeURIComponent(search_project_softwarepackage_domain)) + '&search_project_softwarepackage_platform=' + (search_project_softwarepackage_platform == null ? '' : encodeURIComponent(search_project_softwarepackage_platform)) + '&search_project_softwarepackage_license=' + (search_project_softwarepackage_license == null ? '' : encodeURIComponent(search_project_softwarepackage_license)) + '&search_project_softwarepackage_status=' + (search_project_softwarepackage_status == null ? '' : encodeURIComponent(search_project_softwarepackage_status)) + '&search_project_softwarepackage_capabilities=' + (search_project_softwarepackage_capabilities == null ? '' : encodeURIComponent(search_project_softwarepackage_capabilities)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Standard Parameter Name' entry type
		 * API to search for entries of type Standard Parameter Name
		 * Get repository/search/type/project_standard_name
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_standard_name_unit Canonical Unit
		 * @param {string} search_project_standard_name_aliases Aliases
		 * @return {void} No response was specified
		 */
		Search_project_standard_name(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_standard_name_unit: string | null | undefined, search_project_standard_name_aliases: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_standard_name?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_standard_name_unit=' + (search_project_standard_name_unit == null ? '' : encodeURIComponent(search_project_standard_name_unit)) + '&search_project_standard_name_aliases=' + (search_project_standard_name_aliases == null ? '' : encodeURIComponent(search_project_standard_name_aliases)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Survey Location' entry type
		 * API to search for entries of type Survey Location
		 * Get repository/search/type/project_surveylocation
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_surveylocation(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_surveylocation?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Vocabulary Term' entry type
		 * API to search for entries of type Vocabulary Term
		 * Get repository/search/type/project_term
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_project_term_value Term Value
		 * @return {void} No response was specified
		 */
		Search_project_term(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_project_term_value: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_term?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_project_term_value=' + (search_project_term_value == null ? '' : encodeURIComponent(search_project_term_value)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Site Visit' entry type
		 * API to search for entries of type Site Visit
		 * Get repository/search/type/project_visit
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_visit(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_visit?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Vocabulary' entry type
		 * API to search for entries of type Vocabulary
		 * Get repository/search/type/project_vocabulary
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_project_vocabulary(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/project_vocabulary?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Property Sales' entry type
		 * API to search for entries of type Property Sales
		 * Get repository/search/type/property_sales
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_property_sales_property_address Property Address
		 * @param {string} search_db_property_sales_city City
		 * @param {string} search_db_property_sales_zipcode Zip Code
		 * @param {number} search_db_property_sales_sale_price Sale Price
		 * @param {string} search_db_property_sales_sale_date Sale Date
		 * @param {string} search_db_property_sales_seller Seller
		 * @param {string} search_db_property_sales_buyer Buyer
		 * @param {string} search_db_property_sales_type Property Type
		 * @param {string} search_db_property_sales_building_description Building Description
		 * @param {string} search_db_property_sales_building_design Building Design
		 * @param {string} search_db_property_sales_subdivision Subdivision
		 * @param {string} search_db_property_sales_location Location
		 * @return {void} No response was specified
		 */
		Search_property_sales(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_property_sales_property_address: string | null | undefined, search_db_property_sales_city: string | null | undefined, search_db_property_sales_zipcode: string | null | undefined, search_db_property_sales_sale_price: number | null | undefined, search_db_property_sales_sale_date: string | null | undefined, search_db_property_sales_seller: string | null | undefined, search_db_property_sales_buyer: string | null | undefined, search_db_property_sales_type: string | null | undefined, search_db_property_sales_building_description: string | null | undefined, search_db_property_sales_building_design: string | null | undefined, search_db_property_sales_subdivision: string | null | undefined, search_db_property_sales_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/property_sales?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_property_sales_property_address=' + (search_db_property_sales_property_address == null ? '' : encodeURIComponent(search_db_property_sales_property_address)) + '&search_db_property_sales_city=' + (search_db_property_sales_city == null ? '' : encodeURIComponent(search_db_property_sales_city)) + '&search_db_property_sales_zipcode=' + (search_db_property_sales_zipcode == null ? '' : encodeURIComponent(search_db_property_sales_zipcode)) + '&search_db_property_sales_sale_price=' + search_db_property_sales_sale_price + '&search_db_property_sales_sale_date=' + (search_db_property_sales_sale_date == null ? '' : encodeURIComponent(search_db_property_sales_sale_date)) + '&search_db_property_sales_seller=' + (search_db_property_sales_seller == null ? '' : encodeURIComponent(search_db_property_sales_seller)) + '&search_db_property_sales_buyer=' + (search_db_property_sales_buyer == null ? '' : encodeURIComponent(search_db_property_sales_buyer)) + '&search_db_property_sales_type=' + (search_db_property_sales_type == null ? '' : encodeURIComponent(search_db_property_sales_type)) + '&search_db_property_sales_building_description=' + (search_db_property_sales_building_description == null ? '' : encodeURIComponent(search_db_property_sales_building_description)) + '&search_db_property_sales_building_design=' + (search_db_property_sales_building_design == null ? '' : encodeURIComponent(search_db_property_sales_building_design)) + '&search_db_property_sales_subdivision=' + (search_db_property_sales_subdivision == null ? '' : encodeURIComponent(search_db_property_sales_subdivision)) + '&search_db_property_sales_location=' + (search_db_property_sales_location == null ? '' : encodeURIComponent(search_db_property_sales_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Property Database' entry type
		 * API to search for entries of type Property Database
		 * Get repository/search/type/propertydb
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_propertydb_property_id Property ID
		 * @param {string} search_db_propertydb_owner Owner
		 * @param {string} search_db_propertydb_address Address
		 * @param {string} search_db_propertydb_city City
		 * @param {string} search_db_propertydb_state State
		 * @param {number} search_db_propertydb_value Property Value
		 * @param {string} search_db_propertydb_building_type Building Type
		 * @param {number} search_db_propertydb_house_size Building Sq Ft
		 * @param {number} search_db_propertydb_lot_sqft Lot Size Sq Ft
		 * @param {number} search_db_propertydb_lot_acres Lot Size Acres
		 * @param {number} search_db_propertydb_price_sqft $-sqft
		 * @param {string} search_db_propertydb_location Location
		 * @return {void} No response was specified
		 */
		Search_propertydb(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_propertydb_property_id: string | null | undefined, search_db_propertydb_owner: string | null | undefined, search_db_propertydb_address: string | null | undefined, search_db_propertydb_city: string | null | undefined, search_db_propertydb_state: string | null | undefined, search_db_propertydb_value: number | null | undefined, search_db_propertydb_building_type: string | null | undefined, search_db_propertydb_house_size: number | null | undefined, search_db_propertydb_lot_sqft: number | null | undefined, search_db_propertydb_lot_acres: number | null | undefined, search_db_propertydb_price_sqft: number | null | undefined, search_db_propertydb_location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/propertydb?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_propertydb_property_id=' + (search_db_propertydb_property_id == null ? '' : encodeURIComponent(search_db_propertydb_property_id)) + '&search_db_propertydb_owner=' + (search_db_propertydb_owner == null ? '' : encodeURIComponent(search_db_propertydb_owner)) + '&search_db_propertydb_address=' + (search_db_propertydb_address == null ? '' : encodeURIComponent(search_db_propertydb_address)) + '&search_db_propertydb_city=' + (search_db_propertydb_city == null ? '' : encodeURIComponent(search_db_propertydb_city)) + '&search_db_propertydb_state=' + (search_db_propertydb_state == null ? '' : encodeURIComponent(search_db_propertydb_state)) + '&search_db_propertydb_value=' + search_db_propertydb_value + '&search_db_propertydb_building_type=' + (search_db_propertydb_building_type == null ? '' : encodeURIComponent(search_db_propertydb_building_type)) + '&search_db_propertydb_house_size=' + search_db_propertydb_house_size + '&search_db_propertydb_lot_sqft=' + search_db_propertydb_lot_sqft + '&search_db_propertydb_lot_acres=' + search_db_propertydb_lot_acres + '&search_db_propertydb_price_sqft=' + search_db_propertydb_price_sqft + '&search_db_propertydb_location=' + (search_db_propertydb_location == null ? '' : encodeURIComponent(search_db_propertydb_location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'IPython Notebook file' entry type
		 * API to search for entries of type IPython Notebook file
		 * Get repository/search/type/python_notebook
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_python_notebook(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/python_notebook?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Slack Team' entry type
		 * API to search for entries of type Slack Team
		 * Get repository/search/type/slack_team
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_slack_team(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/slack_team?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Status Board' entry type
		 * API to search for entries of type Status Board
		 * Get repository/search/type/statusboard
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_statusboard_what What
		 * @param {string} search_db_statusboard_status Status
		 * @return {void} No response was specified
		 */
		Search_statusboard(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_statusboard_what: string | null | undefined, search_db_statusboard_status: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/statusboard?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_statusboard_what=' + (search_db_statusboard_what == null ? '' : encodeURIComponent(search_db_statusboard_what)) + '&search_db_statusboard_status=' + (search_db_statusboard_status == null ? '' : encodeURIComponent(search_db_statusboard_status)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Sunrise/Sunset Display' entry type
		 * API to search for entries of type Sunrise/Sunset Display
		 * Get repository/search/type/sunrisesunset
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_sunrisesunset(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/sunrisesunset?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Tasks' entry type
		 * API to search for entries of type Tasks
		 * Get repository/search/type/tasks
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_tasks_title Title
		 * @param {string} search_db_tasks_priority Priority
		 * @param {string} search_db_tasks_status Status
		 * @param {number} search_db_tasks_complete % Complete
		 * @param {string} search_db_tasks_assignedto Assigned To
		 * @param {string} search_db_tasks_startdate Start Date
		 * @param {string} search_db_tasks_enddate End Date
		 * @return {void} No response was specified
		 */
		Search_tasks(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_tasks_title: string | null | undefined, search_db_tasks_priority: string | null | undefined, search_db_tasks_status: string | null | undefined, search_db_tasks_complete: number | null | undefined, search_db_tasks_assignedto: string | null | undefined, search_db_tasks_startdate: string | null | undefined, search_db_tasks_enddate: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/tasks?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_tasks_title=' + (search_db_tasks_title == null ? '' : encodeURIComponent(search_db_tasks_title)) + '&search_db_tasks_priority=' + (search_db_tasks_priority == null ? '' : encodeURIComponent(search_db_tasks_priority)) + '&search_db_tasks_status=' + (search_db_tasks_status == null ? '' : encodeURIComponent(search_db_tasks_status)) + '&search_db_tasks_complete=' + search_db_tasks_complete + '&search_db_tasks_assignedto=' + (search_db_tasks_assignedto == null ? '' : encodeURIComponent(search_db_tasks_assignedto)) + '&search_db_tasks_startdate=' + (search_db_tasks_startdate == null ? '' : encodeURIComponent(search_db_tasks_startdate)) + '&search_db_tasks_enddate=' + (search_db_tasks_enddate == null ? '' : encodeURIComponent(search_db_tasks_enddate)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Tmdb Movies' entry type
		 * API to search for entries of type Tmdb Movies
		 * Get repository/search/type/tmdbmovies
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_tmdbmovies_original_title Original Title
		 * @param {string} search_db_tmdbmovies_overview Overview
		 * @param {number} search_db_tmdbmovies_budget Budget
		 * @param {string} search_db_tmdbmovies_genres Genres
		 * @param {string} search_db_tmdbmovies_homepage Homepage
		 * @param {string} search_db_tmdbmovies_movie_id Id
		 * @param {string} search_db_tmdbmovies_keywords Keywords
		 * @param {string} search_db_tmdbmovies_original_language Original Language
		 * @param {number} search_db_tmdbmovies_popularity Popularity
		 * @param {string} search_db_tmdbmovies_production_companies Production Companies
		 * @param {string} search_db_tmdbmovies_production_countries Production Countries
		 * @param {string} search_db_tmdbmovies_release_date Release Date
		 * @param {number} search_db_tmdbmovies_revenue Revenue
		 * @param {number} search_db_tmdbmovies_runtime Runtime
		 * @param {string} search_db_tmdbmovies_spoken_languages Spoken Languages
		 * @param {string} search_db_tmdbmovies_status Status
		 * @param {string} search_db_tmdbmovies_tagline Tagline
		 * @param {string} search_db_tmdbmovies_title Title
		 * @param {number} search_db_tmdbmovies_vote_average Vote Average
		 * @param {number} search_db_tmdbmovies_vote_count Vote Count
		 * @return {void} No response was specified
		 */
		Search_tmdbmovies(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_tmdbmovies_original_title: string | null | undefined, search_db_tmdbmovies_overview: string | null | undefined, search_db_tmdbmovies_budget: number | null | undefined, search_db_tmdbmovies_genres: string | null | undefined, search_db_tmdbmovies_homepage: string | null | undefined, search_db_tmdbmovies_movie_id: string | null | undefined, search_db_tmdbmovies_keywords: string | null | undefined, search_db_tmdbmovies_original_language: string | null | undefined, search_db_tmdbmovies_popularity: number | null | undefined, search_db_tmdbmovies_production_companies: string | null | undefined, search_db_tmdbmovies_production_countries: string | null | undefined, search_db_tmdbmovies_release_date: string | null | undefined, search_db_tmdbmovies_revenue: number | null | undefined, search_db_tmdbmovies_runtime: number | null | undefined, search_db_tmdbmovies_spoken_languages: string | null | undefined, search_db_tmdbmovies_status: string | null | undefined, search_db_tmdbmovies_tagline: string | null | undefined, search_db_tmdbmovies_title: string | null | undefined, search_db_tmdbmovies_vote_average: number | null | undefined, search_db_tmdbmovies_vote_count: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/tmdbmovies?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_tmdbmovies_original_title=' + (search_db_tmdbmovies_original_title == null ? '' : encodeURIComponent(search_db_tmdbmovies_original_title)) + '&search_db_tmdbmovies_overview=' + (search_db_tmdbmovies_overview == null ? '' : encodeURIComponent(search_db_tmdbmovies_overview)) + '&search_db_tmdbmovies_budget=' + search_db_tmdbmovies_budget + '&search_db_tmdbmovies_genres=' + (search_db_tmdbmovies_genres == null ? '' : encodeURIComponent(search_db_tmdbmovies_genres)) + '&search_db_tmdbmovies_homepage=' + (search_db_tmdbmovies_homepage == null ? '' : encodeURIComponent(search_db_tmdbmovies_homepage)) + '&search_db_tmdbmovies_movie_id=' + (search_db_tmdbmovies_movie_id == null ? '' : encodeURIComponent(search_db_tmdbmovies_movie_id)) + '&search_db_tmdbmovies_keywords=' + (search_db_tmdbmovies_keywords == null ? '' : encodeURIComponent(search_db_tmdbmovies_keywords)) + '&search_db_tmdbmovies_original_language=' + (search_db_tmdbmovies_original_language == null ? '' : encodeURIComponent(search_db_tmdbmovies_original_language)) + '&search_db_tmdbmovies_popularity=' + search_db_tmdbmovies_popularity + '&search_db_tmdbmovies_production_companies=' + (search_db_tmdbmovies_production_companies == null ? '' : encodeURIComponent(search_db_tmdbmovies_production_companies)) + '&search_db_tmdbmovies_production_countries=' + (search_db_tmdbmovies_production_countries == null ? '' : encodeURIComponent(search_db_tmdbmovies_production_countries)) + '&search_db_tmdbmovies_release_date=' + (search_db_tmdbmovies_release_date == null ? '' : encodeURIComponent(search_db_tmdbmovies_release_date)) + '&search_db_tmdbmovies_revenue=' + search_db_tmdbmovies_revenue + '&search_db_tmdbmovies_runtime=' + search_db_tmdbmovies_runtime + '&search_db_tmdbmovies_spoken_languages=' + (search_db_tmdbmovies_spoken_languages == null ? '' : encodeURIComponent(search_db_tmdbmovies_spoken_languages)) + '&search_db_tmdbmovies_status=' + (search_db_tmdbmovies_status == null ? '' : encodeURIComponent(search_db_tmdbmovies_status)) + '&search_db_tmdbmovies_tagline=' + (search_db_tmdbmovies_tagline == null ? '' : encodeURIComponent(search_db_tmdbmovies_tagline)) + '&search_db_tmdbmovies_title=' + (search_db_tmdbmovies_title == null ? '' : encodeURIComponent(search_db_tmdbmovies_title)) + '&search_db_tmdbmovies_vote_average=' + search_db_tmdbmovies_vote_average + '&search_db_tmdbmovies_vote_count=' + search_db_tmdbmovies_vote_count, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Todo' entry type
		 * API to search for entries of type Todo
		 * Get repository/search/type/todo
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {boolean} search_db_todo_checked Done
		 * @param {string} search_db_todo_title What
		 * @param {string} search_db_todo_category Category
		 * @return {void} No response was specified
		 */
		Search_todo(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_todo_checked: boolean | null | undefined, search_db_todo_title: string | null | undefined, search_db_todo_category: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/todo?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_todo_checked=' + search_db_todo_checked + '&search_db_todo_title=' + (search_db_todo_title == null ? '' : encodeURIComponent(search_db_todo_title)) + '&search_db_todo_category=' + (search_db_todo_category == null ? '' : encodeURIComponent(search_db_todo_category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Event' entry type
		 * API to search for entries of type Event
		 * Get repository/search/type/trip_event
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_trip_event(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/trip_event?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Flight Leg' entry type
		 * API to search for entries of type Flight Leg
		 * Get repository/search/type/trip_flight
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_trip_flight(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/trip_flight?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Lodging' entry type
		 * API to search for entries of type Lodging
		 * Get repository/search/type/trip_hotel
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_trip_hotel(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/trip_hotel?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Trip Report' entry type
		 * API to search for entries of type Trip Report
		 * Get repository/search/type/trip_report
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_trip_report(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/trip_report?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Trip' entry type
		 * API to search for entries of type Trip
		 * Get repository/search/type/trip_trip
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_trip_trip(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/trip_trip?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'AWC Weather Observations' entry type
		 * API to search for entries of type AWC Weather Observations
		 * Get repository/search/type/type_awc_metar
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_awc_metar_site_id Site ID
		 * @return {void} No response was specified
		 */
		Search_type_awc_metar(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_awc_metar_site_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_awc_metar?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_awc_metar_site_id=' + (search_type_awc_metar_site_id == null ? '' : encodeURIComponent(search_type_awc_metar_site_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Stock Ticker Data' entry type
		 * API to search for entries of type Stock Ticker Data
		 * Get repository/search/type/type_biz_stockseries
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_biz_stockseries(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_biz_stockseries?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'BLS Series' entry type
		 * API to search for entries of type BLS Series
		 * Get repository/search/type/type_bls_series
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_bls_series_survey_name Survey Name
		 * @param {string} search_type_bls_series_measure_data_type Measure Data Type
		 * @param {string} search_type_bls_series_industry Industry
		 * @param {string} search_type_bls_series_sector Sector
		 * @param {string} search_type_bls_series_area Area
		 * @param {string} search_type_bls_series_item Item
		 * @param {string} search_type_bls_series_seasonality Seasonality
		 * @return {void} No response was specified
		 */
		Search_type_bls_series(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_bls_series_survey_name: string | null | undefined, search_type_bls_series_measure_data_type: string | null | undefined, search_type_bls_series_industry: string | null | undefined, search_type_bls_series_sector: string | null | undefined, search_type_bls_series_area: string | null | undefined, search_type_bls_series_item: string | null | undefined, search_type_bls_series_seasonality: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_bls_series?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_bls_series_survey_name=' + (search_type_bls_series_survey_name == null ? '' : encodeURIComponent(search_type_bls_series_survey_name)) + '&search_type_bls_series_measure_data_type=' + (search_type_bls_series_measure_data_type == null ? '' : encodeURIComponent(search_type_bls_series_measure_data_type)) + '&search_type_bls_series_industry=' + (search_type_bls_series_industry == null ? '' : encodeURIComponent(search_type_bls_series_industry)) + '&search_type_bls_series_sector=' + (search_type_bls_series_sector == null ? '' : encodeURIComponent(search_type_bls_series_sector)) + '&search_type_bls_series_area=' + (search_type_bls_series_area == null ? '' : encodeURIComponent(search_type_bls_series_area)) + '&search_type_bls_series_item=' + (search_type_bls_series_item == null ? '' : encodeURIComponent(search_type_bls_series_item)) + '&search_type_bls_series_seasonality=' + (search_type_bls_series_seasonality == null ? '' : encodeURIComponent(search_type_bls_series_seasonality)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'BLS Survey' entry type
		 * API to search for entries of type BLS Survey
		 * Get repository/search/type/type_bls_survey
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_bls_survey(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_bls_survey?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'US Census ACS Data' entry type
		 * API to search for entries of type US Census ACS Data
		 * Get repository/search/type/type_census_acs
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_census_acs_fields Indicators
		 * @param {string} search_type_census_acs_for_type For
		 * @param {string} search_type_census_acs_in_type1 In
		 * @param {string} search_type_census_acs_in_type2 In #2
		 * @return {void} No response was specified
		 */
		Search_type_census_acs(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_census_acs_fields: string | null | undefined, search_type_census_acs_for_type: string | null | undefined, search_type_census_acs_in_type1: string | null | undefined, search_type_census_acs_in_type2: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_census_acs?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_census_acs_fields=' + (search_type_census_acs_fields == null ? '' : encodeURIComponent(search_type_census_acs_fields)) + '&search_type_census_acs_for_type=' + (search_type_census_acs_for_type == null ? '' : encodeURIComponent(search_type_census_acs_for_type)) + '&search_type_census_acs_in_type1=' + (search_type_census_acs_in_type1 == null ? '' : encodeURIComponent(search_type_census_acs_in_type1)) + '&search_type_census_acs_in_type2=' + (search_type_census_acs_in_type2 == null ? '' : encodeURIComponent(search_type_census_acs_in_type2)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Daymet Daily Weather' entry type
		 * API to search for entries of type Daymet Daily Weather
		 * Get repository/search/type/type_daymet
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_daymet(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_daymet?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Database Table' entry type
		 * API to search for entries of type Database Table
		 * Get repository/search/type/type_db_table
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_db_table(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_db_table?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'CSV File' entry type
		 * API to search for entries of type CSV File
		 * Get repository/search/type/type_document_csv
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_document_csv(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_document_csv?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Word File' entry type
		 * API to search for entries of type Word File
		 * Get repository/search/type/type_document_doc
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_document_doc(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_document_doc?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'HTML File' entry type
		 * API to search for entries of type HTML File
		 * Get repository/search/type/type_document_html
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_document_html(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_document_html?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'PDF File' entry type
		 * API to search for entries of type PDF File
		 * Get repository/search/type/type_document_pdf
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_document_pdf(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_document_pdf?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Powerpoint File' entry type
		 * API to search for entries of type Powerpoint File
		 * Get repository/search/type/type_document_ppt
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_document_ppt(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_document_ppt?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Excel File' entry type
		 * API to search for entries of type Excel File
		 * Get repository/search/type/type_document_xls
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_document_xls(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_document_xls?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Drilsdown Case Study' entry type
		 * API to search for entries of type Drilsdown Case Study
		 * Get repository/search/type/type_drilsdown_casestudy
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_drilsdown_casestudy(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_drilsdown_casestudy?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SEC EDGAR Filing' entry type
		 * API to search for entries of type SEC EDGAR Filing
		 * Get repository/search/type/type_edgar_filing
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_edgar_filing_form_type Form Type
		 * @param {string} search_type_edgar_filing_company_name Company Name
		 * @param {string} search_type_edgar_filing_cik_number CIK Number
		 * @param {string} search_type_edgar_filing_standard_industrial_classification Standard Industrial Classification
		 * @param {string} search_type_edgar_filing_irs_number IRS Number
		 * @param {string} search_type_edgar_filing_state State of Incorporation
		 * @return {void} No response was specified
		 */
		Search_type_edgar_filing(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_edgar_filing_form_type: string | null | undefined, search_type_edgar_filing_company_name: string | null | undefined, search_type_edgar_filing_cik_number: string | null | undefined, search_type_edgar_filing_standard_industrial_classification: string | null | undefined, search_type_edgar_filing_irs_number: string | null | undefined, search_type_edgar_filing_state: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_edgar_filing?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_edgar_filing_form_type=' + (search_type_edgar_filing_form_type == null ? '' : encodeURIComponent(search_type_edgar_filing_form_type)) + '&search_type_edgar_filing_company_name=' + (search_type_edgar_filing_company_name == null ? '' : encodeURIComponent(search_type_edgar_filing_company_name)) + '&search_type_edgar_filing_cik_number=' + (search_type_edgar_filing_cik_number == null ? '' : encodeURIComponent(search_type_edgar_filing_cik_number)) + '&search_type_edgar_filing_standard_industrial_classification=' + (search_type_edgar_filing_standard_industrial_classification == null ? '' : encodeURIComponent(search_type_edgar_filing_standard_industrial_classification)) + '&search_type_edgar_filing_irs_number=' + (search_type_edgar_filing_irs_number == null ? '' : encodeURIComponent(search_type_edgar_filing_irs_number)) + '&search_type_edgar_filing_state=' + (search_type_edgar_filing_state == null ? '' : encodeURIComponent(search_type_edgar_filing_state)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'EIA Category' entry type
		 * API to search for entries of type EIA Category
		 * Get repository/search/type/type_eia_category
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_eia_category(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_eia_category?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'EIA Series' entry type
		 * API to search for entries of type EIA Series
		 * Get repository/search/type/type_eia_series
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_eia_series(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_eia_series?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Feature Server' entry type
		 * API to search for entries of type ESRI Feature Server
		 * Get repository/search/type/type_esri_featureserver
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_featureserver(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_featureserver?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Geometry Server' entry type
		 * API to search for entries of type ESRI Geometry Server
		 * Get repository/search/type/type_esri_geometryserver
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_geometryserver(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_geometryserver?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI GP Server' entry type
		 * API to search for entries of type ESRI GP Server
		 * Get repository/search/type/type_esri_gpserver
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_gpserver(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_gpserver?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Image Server' entry type
		 * API to search for entries of type ESRI Image Server
		 * Get repository/search/type/type_esri_imageserver
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_imageserver(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_imageserver?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Layer' entry type
		 * API to search for entries of type ESRI Layer
		 * Get repository/search/type/type_esri_layer
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_esri_layer_layer_type Layer Type
		 * @return {void} No response was specified
		 */
		Search_type_esri_layer(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_esri_layer_layer_type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_layer?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_esri_layer_layer_type=' + (search_type_esri_layer_layer_type == null ? '' : encodeURIComponent(search_type_esri_layer_layer_type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Map Server' entry type
		 * API to search for entries of type ESRI Map Server
		 * Get repository/search/type/type_esri_mapserver
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_mapserver(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_mapserver?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Services Folder' entry type
		 * API to search for entries of type ESRI Services Folder
		 * Get repository/search/type/type_esri_restfolder
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_restfolder(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_restfolder?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Web Server' entry type
		 * API to search for entries of type ESRI Web Server
		 * Get repository/search/type/type_esri_restserver
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_restserver(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_restserver?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ESRI Rest Service' entry type
		 * API to search for entries of type ESRI Rest Service
		 * Get repository/search/type/type_esri_restservice
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_esri_restservice(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_esri_restservice?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NOAA Extremes Data' entry type
		 * API to search for entries of type NOAA Extremes Data
		 * Get repository/search/type/type_extremes
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_extremes_region US Climate Region
		 * @param {string} search_type_extremes_variable Variable
		 * @return {void} No response was specified
		 */
		Search_type_extremes(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_extremes_region: string | null | undefined, search_type_extremes_variable: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_extremes?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_extremes_region=' + (search_type_extremes_region == null ? '' : encodeURIComponent(search_type_extremes_region)) + '&search_type_extremes_variable=' + (search_type_extremes_variable == null ? '' : encodeURIComponent(search_type_extremes_variable)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FRED Category' entry type
		 * API to search for entries of type FRED Category
		 * Get repository/search/type/type_fred_category
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_fred_category(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_fred_category?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FRED Series' entry type
		 * API to search for entries of type FRED Series
		 * Get repository/search/type/type_fred_series
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_fred_series(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_fred_series?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Transit Agency' entry type
		 * API to search for entries of type Transit Agency
		 * Get repository/search/type/type_gtfs_agency
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_gtfs_agency(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_gtfs_agency?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Transit Route' entry type
		 * API to search for entries of type Transit Route
		 * Get repository/search/type/type_gtfs_route
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_gtfs_route_route_id Route ID
		 * @param {string} search_type_gtfs_route_stop_names Stop Names
		 * @return {void} No response was specified
		 */
		Search_type_gtfs_route(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_gtfs_route_route_id: string | null | undefined, search_type_gtfs_route_stop_names: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_gtfs_route?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_gtfs_route_route_id=' + (search_type_gtfs_route_route_id == null ? '' : encodeURIComponent(search_type_gtfs_route_route_id)) + '&search_type_gtfs_route_stop_names=' + (search_type_gtfs_route_stop_names == null ? '' : encodeURIComponent(search_type_gtfs_route_stop_names)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Transit Route Collection' entry type
		 * API to search for entries of type Transit Route Collection
		 * Get repository/search/type/type_gtfs_routes
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_gtfs_routes(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_gtfs_routes?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Transit Stop' entry type
		 * API to search for entries of type Transit Stop
		 * Get repository/search/type/type_gtfs_stop
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_gtfs_stop_stop_id Stop ID
		 * @param {string} search_type_gtfs_stop_stop_code Stop Code
		 * @param {string} search_type_gtfs_stop_zone_id Zone ID
		 * @param {string} search_type_gtfs_stop_location_type Location Type
		 * @param {string} search_type_gtfs_stop_wheelchair_boarding Wheelchair Boarding
		 * @return {void} No response was specified
		 */
		Search_type_gtfs_stop(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_gtfs_stop_stop_id: string | null | undefined, search_type_gtfs_stop_stop_code: string | null | undefined, search_type_gtfs_stop_zone_id: string | null | undefined, search_type_gtfs_stop_location_type: string | null | undefined, search_type_gtfs_stop_wheelchair_boarding: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_gtfs_stop?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_gtfs_stop_stop_id=' + (search_type_gtfs_stop_stop_id == null ? '' : encodeURIComponent(search_type_gtfs_stop_stop_id)) + '&search_type_gtfs_stop_stop_code=' + (search_type_gtfs_stop_stop_code == null ? '' : encodeURIComponent(search_type_gtfs_stop_stop_code)) + '&search_type_gtfs_stop_zone_id=' + (search_type_gtfs_stop_zone_id == null ? '' : encodeURIComponent(search_type_gtfs_stop_zone_id)) + '&search_type_gtfs_stop_location_type=' + (search_type_gtfs_stop_location_type == null ? '' : encodeURIComponent(search_type_gtfs_stop_location_type)) + '&search_type_gtfs_stop_wheelchair_boarding=' + (search_type_gtfs_stop_wheelchair_boarding == null ? '' : encodeURIComponent(search_type_gtfs_stop_wheelchair_boarding)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Transit Stop Collection' entry type
		 * API to search for entries of type Transit Stop Collection
		 * Get repository/search/type/type_gtfs_stops
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_gtfs_stops(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_gtfs_stops?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Transit Trip' entry type
		 * API to search for entries of type Transit Trip
		 * Get repository/search/type/type_gtfs_trip
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_gtfs_trip_trip_id Trip ID
		 * @param {string} search_type_gtfs_trip_stop_ids Stop IDS
		 * @param {string} search_type_gtfs_trip_wheelchair_accessible Wheelchair Accessible
		 * @param {string} search_type_gtfs_trip_bikes_allowed Bikes Allowed
		 * @return {void} No response was specified
		 */
		Search_type_gtfs_trip(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_gtfs_trip_trip_id: string | null | undefined, search_type_gtfs_trip_stop_ids: string | null | undefined, search_type_gtfs_trip_wheelchair_accessible: string | null | undefined, search_type_gtfs_trip_bikes_allowed: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_gtfs_trip?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_gtfs_trip_trip_id=' + (search_type_gtfs_trip_trip_id == null ? '' : encodeURIComponent(search_type_gtfs_trip_trip_id)) + '&search_type_gtfs_trip_stop_ids=' + (search_type_gtfs_trip_stop_ids == null ? '' : encodeURIComponent(search_type_gtfs_trip_stop_ids)) + '&search_type_gtfs_trip_wheelchair_accessible=' + (search_type_gtfs_trip_wheelchair_accessible == null ? '' : encodeURIComponent(search_type_gtfs_trip_wheelchair_accessible)) + '&search_type_gtfs_trip_bikes_allowed=' + (search_type_gtfs_trip_bikes_allowed == null ? '' : encodeURIComponent(search_type_gtfs_trip_bikes_allowed)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Hazard Data' entry type
		 * API to search for entries of type Hazard Data
		 * Get repository/search/type/type_hazarddata
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_hazarddata_source Source Agency
		 * @return {void} No response was specified
		 */
		Search_type_hazarddata(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_hazarddata_source: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_hazarddata?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_hazarddata_source=' + (search_type_hazarddata_source == null ? '' : encodeURIComponent(search_type_hazarddata_source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Colorado DNR Stream Gage' entry type
		 * API to search for entries of type Colorado DNR Stream Gage
		 * Get repository/search/type/type_hydro_colorado
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_hydro_colorado_site_id Site ID
		 * @return {void} No response was specified
		 */
		Search_type_hydro_colorado(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_hydro_colorado_site_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_hydro_colorado?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_hydro_colorado_site_id=' + (search_type_hydro_colorado_site_id == null ? '' : encodeURIComponent(search_type_hydro_colorado_site_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'IDV Bundle' entry type
		 * API to search for entries of type IDV Bundle
		 * Get repository/search/type/type_idv_bundle
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_idv_bundle(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_idv_bundle?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Image' entry type
		 * API to search for entries of type Image
		 * Get repository/search/type/type_image
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_image(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_image?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Airport Image' entry type
		 * API to search for entries of type Airport Image
		 * Get repository/search/type/type_image_airport
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_image_airport(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_image_airport?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Webcam' entry type
		 * API to search for entries of type Webcam
		 * Get repository/search/type/type_image_webcam
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_image_webcam(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_image_webcam?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'MB Bathymetry' entry type
		 * API to search for entries of type MB Bathymetry
		 * Get repository/search/type/type_mb
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_mb(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_mb?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Bathymetry Collection' entry type
		 * API to search for entries of type Bathymetry Collection
		 * Get repository/search/type/type_mb_collection
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_mb_collection(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_mb_collection?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Basic MB point file' entry type
		 * API to search for entries of type Basic MB point file
		 * Get repository/search/type/type_mb_point_basic
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_mb_point_basic(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_mb_point_basic?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Metadata Dictionary' entry type
		 * API to search for entries of type Metadata Dictionary
		 * Get repository/search/type/type_metameta_dictionary
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {number} search_type_metameta_dictionary_field_index Index
		 * @param {string} search_type_metameta_dictionary_dictionary_type Type
		 * @param {string} search_type_metameta_dictionary_short_name Short Name
		 * @param {string} search_type_metameta_dictionary_super_type Super Type
		 * @param {boolean} search_type_metameta_dictionary_isgroup Is Group
		 * @param {string} search_type_metameta_dictionary_handler_class Handler Class
		 * @param {string} search_type_metameta_dictionary_properties Properties
		 * @param {string} search_type_metameta_dictionary_wiki_text Wiki Text
		 * @return {void} No response was specified
		 */
		Search_type_metameta_dictionary(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_metameta_dictionary_field_index: number | null | undefined, search_type_metameta_dictionary_dictionary_type: string | null | undefined, search_type_metameta_dictionary_short_name: string | null | undefined, search_type_metameta_dictionary_super_type: string | null | undefined, search_type_metameta_dictionary_isgroup: boolean | null | undefined, search_type_metameta_dictionary_handler_class: string | null | undefined, search_type_metameta_dictionary_properties: string | null | undefined, search_type_metameta_dictionary_wiki_text: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_metameta_dictionary?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_metameta_dictionary_field_index=' + search_type_metameta_dictionary_field_index + '&search_type_metameta_dictionary_dictionary_type=' + (search_type_metameta_dictionary_dictionary_type == null ? '' : encodeURIComponent(search_type_metameta_dictionary_dictionary_type)) + '&search_type_metameta_dictionary_short_name=' + (search_type_metameta_dictionary_short_name == null ? '' : encodeURIComponent(search_type_metameta_dictionary_short_name)) + '&search_type_metameta_dictionary_super_type=' + (search_type_metameta_dictionary_super_type == null ? '' : encodeURIComponent(search_type_metameta_dictionary_super_type)) + '&search_type_metameta_dictionary_isgroup=' + search_type_metameta_dictionary_isgroup + '&search_type_metameta_dictionary_handler_class=' + (search_type_metameta_dictionary_handler_class == null ? '' : encodeURIComponent(search_type_metameta_dictionary_handler_class)) + '&search_type_metameta_dictionary_properties=' + (search_type_metameta_dictionary_properties == null ? '' : encodeURIComponent(search_type_metameta_dictionary_properties)) + '&search_type_metameta_dictionary_wiki_text=' + (search_type_metameta_dictionary_wiki_text == null ? '' : encodeURIComponent(search_type_metameta_dictionary_wiki_text)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Metadata Field' entry type
		 * API to search for entries of type Metadata Field
		 * Get repository/search/type/type_metameta_field
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {number} search_type_metameta_field_field_index Index
		 * @param {string} search_type_metameta_field_field_id Field ID
		 * @param {string} search_type_metameta_field_datatype Data Type
		 * @param {string} search_type_metameta_field_enumeration_values Enumeration Values
		 * @param {string} search_type_metameta_field_properties Properties
		 * @param {number} search_type_metameta_field_database_column_size Database Column Size
		 * @param {string} search_type_metameta_field_missing Missing Value
		 * @param {string} search_type_metameta_field_unit Unit
		 * @return {void} No response was specified
		 */
		Search_type_metameta_field(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_metameta_field_field_index: number | null | undefined, search_type_metameta_field_field_id: string | null | undefined, search_type_metameta_field_datatype: string | null | undefined, search_type_metameta_field_enumeration_values: string | null | undefined, search_type_metameta_field_properties: string | null | undefined, search_type_metameta_field_database_column_size: number | null | undefined, search_type_metameta_field_missing: string | null | undefined, search_type_metameta_field_unit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_metameta_field?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_metameta_field_field_index=' + search_type_metameta_field_field_index + '&search_type_metameta_field_field_id=' + (search_type_metameta_field_field_id == null ? '' : encodeURIComponent(search_type_metameta_field_field_id)) + '&search_type_metameta_field_datatype=' + (search_type_metameta_field_datatype == null ? '' : encodeURIComponent(search_type_metameta_field_datatype)) + '&search_type_metameta_field_enumeration_values=' + (search_type_metameta_field_enumeration_values == null ? '' : encodeURIComponent(search_type_metameta_field_enumeration_values)) + '&search_type_metameta_field_properties=' + (search_type_metameta_field_properties == null ? '' : encodeURIComponent(search_type_metameta_field_properties)) + '&search_type_metameta_field_database_column_size=' + search_type_metameta_field_database_column_size + '&search_type_metameta_field_missing=' + (search_type_metameta_field_missing == null ? '' : encodeURIComponent(search_type_metameta_field_missing)) + '&search_type_metameta_field_unit=' + (search_type_metameta_field_unit == null ? '' : encodeURIComponent(search_type_metameta_field_unit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NASA AMES File' entry type
		 * API to search for entries of type NASA AMES File
		 * Get repository/search/type/type_nasaames
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_nasaames(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_nasaames?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NetCDF Point Subset' entry type
		 * API to search for entries of type NetCDF Point Subset
		 * Get repository/search/type/type_ncss
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_ncss(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_ncss?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NITF File' entry type
		 * API to search for entries of type NITF File
		 * Get repository/search/type/type_nitf
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_nitf(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_nitf?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Ameriflux Level 2 CSV File' entry type
		 * API to search for entries of type Ameriflux Level 2 CSV File
		 * Get repository/search/type/type_point_ameriflux_level2
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_ameriflux_level2_site_id Site ID
		 * @param {string} search_type_point_ameriflux_level2_contact Contact
		 * @param {string} search_type_point_ameriflux_level2_ecosystem_type Ecosystem Type
		 * @return {void} No response was specified
		 */
		Search_type_point_ameriflux_level2(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_ameriflux_level2_site_id: string | null | undefined, search_type_point_ameriflux_level2_contact: string | null | undefined, search_type_point_ameriflux_level2_ecosystem_type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ameriflux_level2?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_ameriflux_level2_site_id=' + (search_type_point_ameriflux_level2_site_id == null ? '' : encodeURIComponent(search_type_point_ameriflux_level2_site_id)) + '&search_type_point_ameriflux_level2_contact=' + (search_type_point_ameriflux_level2_contact == null ? '' : encodeURIComponent(search_type_point_ameriflux_level2_contact)) + '&search_type_point_ameriflux_level2_ecosystem_type=' + (search_type_point_ameriflux_level2_ecosystem_type == null ? '' : encodeURIComponent(search_type_point_ameriflux_level2_ecosystem_type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'AMRC Final QC Data' entry type
		 * API to search for entries of type AMRC Final QC Data
		 * Get repository/search/type/type_point_amrc_final
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_amrc_final_site_id Site ID
		 * @param {string} search_type_point_amrc_final_site_name Site Name
		 * @param {string} search_type_point_amrc_final_argos_id Argos ID
		 * @return {void} No response was specified
		 */
		Search_type_point_amrc_final(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_amrc_final_site_id: string | null | undefined, search_type_point_amrc_final_site_name: string | null | undefined, search_type_point_amrc_final_argos_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_amrc_final?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_amrc_final_site_id=' + (search_type_point_amrc_final_site_id == null ? '' : encodeURIComponent(search_type_point_amrc_final_site_id)) + '&search_type_point_amrc_final_site_name=' + (search_type_point_amrc_final_site_name == null ? '' : encodeURIComponent(search_type_point_amrc_final_site_name)) + '&search_type_point_amrc_final_argos_id=' + (search_type_point_amrc_final_argos_id == null ? '' : encodeURIComponent(search_type_point_amrc_final_argos_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'AMRC Freewave  Data' entry type
		 * API to search for entries of type AMRC Freewave  Data
		 * Get repository/search/type/type_point_amrc_freewave
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_amrc_freewave_station_name Station Name
		 * @param {string} search_type_point_amrc_freewave_format File Format
		 * @param {string} search_type_point_amrc_freewave_datalogger_model Data Logger Model
		 * @param {string} search_type_point_amrc_freewave_datalogger_serial Data Logger Serial
		 * @return {void} No response was specified
		 */
		Search_type_point_amrc_freewave(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_amrc_freewave_station_name: string | null | undefined, search_type_point_amrc_freewave_format: string | null | undefined, search_type_point_amrc_freewave_datalogger_model: string | null | undefined, search_type_point_amrc_freewave_datalogger_serial: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_amrc_freewave?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_amrc_freewave_station_name=' + (search_type_point_amrc_freewave_station_name == null ? '' : encodeURIComponent(search_type_point_amrc_freewave_station_name)) + '&search_type_point_amrc_freewave_format=' + (search_type_point_amrc_freewave_format == null ? '' : encodeURIComponent(search_type_point_amrc_freewave_format)) + '&search_type_point_amrc_freewave_datalogger_model=' + (search_type_point_amrc_freewave_datalogger_model == null ? '' : encodeURIComponent(search_type_point_amrc_freewave_datalogger_model)) + '&search_type_point_amrc_freewave_datalogger_serial=' + (search_type_point_amrc_freewave_datalogger_serial == null ? '' : encodeURIComponent(search_type_point_amrc_freewave_datalogger_serial)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'CZO Display File Format' entry type
		 * API to search for entries of type CZO Display File Format
		 * Get repository/search/type/type_point_czo
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_czo(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_czo?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'GC-Net Point Data' entry type
		 * API to search for entries of type GC-Net Point Data
		 * Get repository/search/type/type_point_gcnet
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_gcnet(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_gcnet?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'IAGA 2002 Geomagnetism Data' entry type
		 * API to search for entries of type IAGA 2002 Geomagnetism Data
		 * Get repository/search/type/type_point_geomag_iaga2002
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_geomag_iaga2002_iaga_code IAGA Code
		 * @param {string} search_type_point_geomag_iaga2002_station_name Station Name
		 * @param {string} search_type_point_geomag_iaga2002_source_of_data Source of data
		 * @param {string} search_type_point_geomag_iaga2002_digital_sampling Digital Sampling
		 * @param {string} search_type_point_geomag_iaga2002_data_interval Data Interval
		 * @param {string} search_type_point_geomag_iaga2002_data_type Data Type
		 * @return {void} No response was specified
		 */
		Search_type_point_geomag_iaga2002(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_geomag_iaga2002_iaga_code: string | null | undefined, search_type_point_geomag_iaga2002_station_name: string | null | undefined, search_type_point_geomag_iaga2002_source_of_data: string | null | undefined, search_type_point_geomag_iaga2002_digital_sampling: string | null | undefined, search_type_point_geomag_iaga2002_data_interval: string | null | undefined, search_type_point_geomag_iaga2002_data_type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_geomag_iaga2002?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_geomag_iaga2002_iaga_code=' + (search_type_point_geomag_iaga2002_iaga_code == null ? '' : encodeURIComponent(search_type_point_geomag_iaga2002_iaga_code)) + '&search_type_point_geomag_iaga2002_station_name=' + (search_type_point_geomag_iaga2002_station_name == null ? '' : encodeURIComponent(search_type_point_geomag_iaga2002_station_name)) + '&search_type_point_geomag_iaga2002_source_of_data=' + (search_type_point_geomag_iaga2002_source_of_data == null ? '' : encodeURIComponent(search_type_point_geomag_iaga2002_source_of_data)) + '&search_type_point_geomag_iaga2002_digital_sampling=' + (search_type_point_geomag_iaga2002_digital_sampling == null ? '' : encodeURIComponent(search_type_point_geomag_iaga2002_digital_sampling)) + '&search_type_point_geomag_iaga2002_data_interval=' + (search_type_point_geomag_iaga2002_data_interval == null ? '' : encodeURIComponent(search_type_point_geomag_iaga2002_data_interval)) + '&search_type_point_geomag_iaga2002_data_type=' + (search_type_point_geomag_iaga2002_data_type == null ? '' : encodeURIComponent(search_type_point_geomag_iaga2002_data_type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'WaterML' entry type
		 * API to search for entries of type WaterML
		 * Get repository/search/type/type_point_hydro_waterml
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_hydro_waterml_site_code Site Code
		 * @param {string} search_type_point_hydro_waterml_site_name Site Name
		 * @return {void} No response was specified
		 */
		Search_type_point_hydro_waterml(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_hydro_waterml_site_code: string | null | undefined, search_type_point_hydro_waterml_site_name: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_hydro_waterml?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_hydro_waterml_site_code=' + (search_type_point_hydro_waterml_site_code == null ? '' : encodeURIComponent(search_type_point_hydro_waterml_site_code)) + '&search_type_point_hydro_waterml_site_name=' + (search_type_point_hydro_waterml_site_name == null ? '' : encodeURIComponent(search_type_point_hydro_waterml_site_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ATM Ice SSN Data' entry type
		 * API to search for entries of type ATM Ice SSN Data
		 * Get repository/search/type/type_point_icebridge_atm_icessn
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_icebridge_atm_icessn(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_icebridge_atm_icessn?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'ATM QFIT Data' entry type
		 * API to search for entries of type ATM QFIT Data
		 * Get repository/search/type/type_point_icebridge_atm_qfit
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_icebridge_atm_qfit(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_icebridge_atm_qfit?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'McCords Irmcr2 Data' entry type
		 * API to search for entries of type McCords Irmcr2 Data
		 * Get repository/search/type/type_point_icebridge_mccords_irmcr2
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_icebridge_mccords_irmcr2(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_icebridge_mccords_irmcr2?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'McCords Irmcr3 Data' entry type
		 * API to search for entries of type McCords Irmcr3 Data
		 * Get repository/search/type/type_point_icebridge_mccords_irmcr3
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_icebridge_mccords_irmcr3(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_icebridge_mccords_irmcr3?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Paris Data' entry type
		 * API to search for entries of type Paris Data
		 * Get repository/search/type/type_point_icebridge_paris
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_icebridge_paris(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_icebridge_paris?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'IDV Point File' entry type
		 * API to search for entries of type IDV Point File
		 * Get repository/search/type/type_point_idv
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_idv(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_idv?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Inline Point File' entry type
		 * API to search for entries of type Inline Point File
		 * Get repository/search/type/type_point_inline
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_inline(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_inline?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NC  DC Climate Data' entry type
		 * API to search for entries of type NC  DC Climate Data
		 * Get repository/search/type/type_point_ncdc_climate
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_ncdc_climate(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ncdc_climate?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NetCDF Point File' entry type
		 * API to search for entries of type NetCDF Point File
		 * Get repository/search/type/type_point_netcdf
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_netcdf(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_netcdf?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NOAA Carbon Measurements' entry type
		 * API to search for entries of type NOAA Carbon Measurements
		 * Get repository/search/type/type_point_noaa_carbon
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_noaa_carbon_site_id Site ID
		 * @param {string} search_type_point_noaa_carbon_parameter Parameter
		 * @param {string} search_type_point_noaa_carbon_project Project
		 * @param {string} search_type_point_noaa_carbon_lab_id_number Lab ID Number
		 * @param {string} search_type_point_noaa_carbon_measurement_group Measurement Group
		 * @return {void} No response was specified
		 */
		Search_type_point_noaa_carbon(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_noaa_carbon_site_id: string | null | undefined, search_type_point_noaa_carbon_parameter: string | null | undefined, search_type_point_noaa_carbon_project: string | null | undefined, search_type_point_noaa_carbon_lab_id_number: string | null | undefined, search_type_point_noaa_carbon_measurement_group: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_noaa_carbon?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_noaa_carbon_site_id=' + (search_type_point_noaa_carbon_site_id == null ? '' : encodeURIComponent(search_type_point_noaa_carbon_site_id)) + '&search_type_point_noaa_carbon_parameter=' + (search_type_point_noaa_carbon_parameter == null ? '' : encodeURIComponent(search_type_point_noaa_carbon_parameter)) + '&search_type_point_noaa_carbon_project=' + (search_type_point_noaa_carbon_project == null ? '' : encodeURIComponent(search_type_point_noaa_carbon_project)) + '&search_type_point_noaa_carbon_lab_id_number=' + (search_type_point_noaa_carbon_lab_id_number == null ? '' : encodeURIComponent(search_type_point_noaa_carbon_lab_id_number)) + '&search_type_point_noaa_carbon_measurement_group=' + (search_type_point_noaa_carbon_measurement_group == null ? '' : encodeURIComponent(search_type_point_noaa_carbon_measurement_group)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NOAA Flask Event Measurements' entry type
		 * API to search for entries of type NOAA Flask Event Measurements
		 * Get repository/search/type/type_point_noaa_flask_event
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_noaa_flask_event_site_id Site ID
		 * @param {string} search_type_point_noaa_flask_event_parameter Parameter
		 * @param {string} search_type_point_noaa_flask_event_project Project
		 * @param {string} search_type_point_noaa_flask_event_lab_id_number Lab ID Number
		 * @param {string} search_type_point_noaa_flask_event_measurement_group Measurement Group
		 * @return {void} No response was specified
		 */
		Search_type_point_noaa_flask_event(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_noaa_flask_event_site_id: string | null | undefined, search_type_point_noaa_flask_event_parameter: string | null | undefined, search_type_point_noaa_flask_event_project: string | null | undefined, search_type_point_noaa_flask_event_lab_id_number: string | null | undefined, search_type_point_noaa_flask_event_measurement_group: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_noaa_flask_event?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_noaa_flask_event_site_id=' + (search_type_point_noaa_flask_event_site_id == null ? '' : encodeURIComponent(search_type_point_noaa_flask_event_site_id)) + '&search_type_point_noaa_flask_event_parameter=' + (search_type_point_noaa_flask_event_parameter == null ? '' : encodeURIComponent(search_type_point_noaa_flask_event_parameter)) + '&search_type_point_noaa_flask_event_project=' + (search_type_point_noaa_flask_event_project == null ? '' : encodeURIComponent(search_type_point_noaa_flask_event_project)) + '&search_type_point_noaa_flask_event_lab_id_number=' + (search_type_point_noaa_flask_event_lab_id_number == null ? '' : encodeURIComponent(search_type_point_noaa_flask_event_lab_id_number)) + '&search_type_point_noaa_flask_event_measurement_group=' + (search_type_point_noaa_flask_event_measurement_group == null ? '' : encodeURIComponent(search_type_point_noaa_flask_event_measurement_group)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NOAA Flask Month Measurements' entry type
		 * API to search for entries of type NOAA Flask Month Measurements
		 * Get repository/search/type/type_point_noaa_flask_month
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_noaa_flask_month_site_id Site ID
		 * @param {string} search_type_point_noaa_flask_month_parameter Parameter
		 * @param {string} search_type_point_noaa_flask_month_project Project
		 * @param {string} search_type_point_noaa_flask_month_lab_id_number Lab ID Number
		 * @param {string} search_type_point_noaa_flask_month_measurement_group Measurement Group
		 * @return {void} No response was specified
		 */
		Search_type_point_noaa_flask_month(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_noaa_flask_month_site_id: string | null | undefined, search_type_point_noaa_flask_month_parameter: string | null | undefined, search_type_point_noaa_flask_month_project: string | null | undefined, search_type_point_noaa_flask_month_lab_id_number: string | null | undefined, search_type_point_noaa_flask_month_measurement_group: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_noaa_flask_month?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_noaa_flask_month_site_id=' + (search_type_point_noaa_flask_month_site_id == null ? '' : encodeURIComponent(search_type_point_noaa_flask_month_site_id)) + '&search_type_point_noaa_flask_month_parameter=' + (search_type_point_noaa_flask_month_parameter == null ? '' : encodeURIComponent(search_type_point_noaa_flask_month_parameter)) + '&search_type_point_noaa_flask_month_project=' + (search_type_point_noaa_flask_month_project == null ? '' : encodeURIComponent(search_type_point_noaa_flask_month_project)) + '&search_type_point_noaa_flask_month_lab_id_number=' + (search_type_point_noaa_flask_month_lab_id_number == null ? '' : encodeURIComponent(search_type_point_noaa_flask_month_lab_id_number)) + '&search_type_point_noaa_flask_month_measurement_group=' + (search_type_point_noaa_flask_month_measurement_group == null ? '' : encodeURIComponent(search_type_point_noaa_flask_month_measurement_group)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NOAA MADIS Point Data' entry type
		 * API to search for entries of type NOAA MADIS Point Data
		 * Get repository/search/type/type_point_noaa_madis
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_noaa_madis(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_noaa_madis?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NOAA Tower Network' entry type
		 * API to search for entries of type NOAA Tower Network
		 * Get repository/search/type/type_point_noaa_tower
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_noaa_tower_site_id Site ID
		 * @return {void} No response was specified
		 */
		Search_type_point_noaa_tower(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_noaa_tower_site_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_noaa_tower?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_noaa_tower_site_id=' + (search_type_point_noaa_tower_site_id == null ? '' : encodeURIComponent(search_type_point_noaa_tower_site_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SeaBird CNV Data' entry type
		 * API to search for entries of type SeaBird CNV Data
		 * Get repository/search/type/type_point_ocean_cnv
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_ocean_cnv(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ocean_cnv?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SADO TTS Data' entry type
		 * API to search for entries of type SADO TTS Data
		 * Get repository/search/type/type_point_ocean_csv_sado_TTS
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_ocean_csv_sado_TTS(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ocean_csv_sado_TTS?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SADO Meteo Data' entry type
		 * API to search for entries of type SADO Meteo Data
		 * Get repository/search/type/type_point_ocean_csv_sado_meteo
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_ocean_csv_sado_meteo(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ocean_csv_sado_meteo?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SADO Position Data' entry type
		 * API to search for entries of type SADO Position Data
		 * Get repository/search/type/type_point_ocean_csv_sado_position
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_ocean_csv_sado_position(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ocean_csv_sado_position?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NetCDF Glider Data' entry type
		 * API to search for entries of type NetCDF Glider Data
		 * Get repository/search/type/type_point_ocean_netcdf_glider
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_ocean_netcdf_track_platform Platform
		 * @return {void} No response was specified
		 */
		Search_type_point_ocean_netcdf_glider(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_ocean_netcdf_track_platform: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ocean_netcdf_glider?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_ocean_netcdf_track_platform=' + (search_type_point_ocean_netcdf_track_platform == null ? '' : encodeURIComponent(search_type_point_ocean_netcdf_track_platform)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NetCDF Track Data' entry type
		 * API to search for entries of type NetCDF Track Data
		 * Get repository/search/type/type_point_ocean_netcdf_track
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_ocean_netcdf_track_platform Platform
		 * @return {void} No response was specified
		 */
		Search_type_point_ocean_netcdf_track(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_ocean_netcdf_track_platform: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ocean_netcdf_track?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_ocean_netcdf_track_platform=' + (search_type_point_ocean_netcdf_track_platform == null ? '' : encodeURIComponent(search_type_point_ocean_netcdf_track_platform)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'OOI Data' entry type
		 * API to search for entries of type OOI Data
		 * Get repository/search/type/type_point_ocean_ooi_dmgx
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_ocean_ooi_dmgx(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_ocean_ooi_dmgx?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Open AQ Air Quality' entry type
		 * API to search for entries of type Open AQ Air Quality
		 * Get repository/search/type/type_point_openaq
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_openaq_location Location
		 * @param {string} search_type_point_openaq_country Country
		 * @param {string} search_type_point_openaq_city City
		 * @param {number} search_type_point_openaq_hours_offset Offset Hours
		 * @return {void} No response was specified
		 */
		Search_type_point_openaq(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_openaq_location: string | null | undefined, search_type_point_openaq_country: string | null | undefined, search_type_point_openaq_city: string | null | undefined, search_type_point_openaq_hours_offset: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_openaq?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_openaq_location=' + (search_type_point_openaq_location == null ? '' : encodeURIComponent(search_type_point_openaq_location)) + '&search_type_point_openaq_country=' + (search_type_point_openaq_country == null ? '' : encodeURIComponent(search_type_point_openaq_country)) + '&search_type_point_openaq_city=' + (search_type_point_openaq_city == null ? '' : encodeURIComponent(search_type_point_openaq_city)) + '&search_type_point_openaq_hours_offset=' + search_type_point_openaq_hours_offset, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'PBO Position Time Series' entry type
		 * API to search for entries of type PBO Position Time Series
		 * Get repository/search/type/type_point_pbo_position_time_series
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_pbo_position_time_series_four_char_id Four Char ID
		 * @param {string} search_type_point_pbo_position_time_series_station_name Station Name
		 * @param {string} search_type_point_pbo_position_time_series_reference_frame Reference Frame
		 * @param {string} search_type_point_pbo_position_time_series_format_version Format Version
		 * @param {string} search_type_point_pbo_position_time_series_processing_center Processing Center
		 * @return {void} No response was specified
		 */
		Search_type_point_pbo_position_time_series(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_pbo_position_time_series_four_char_id: string | null | undefined, search_type_point_pbo_position_time_series_station_name: string | null | undefined, search_type_point_pbo_position_time_series_reference_frame: string | null | undefined, search_type_point_pbo_position_time_series_format_version: string | null | undefined, search_type_point_pbo_position_time_series_processing_center: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_pbo_position_time_series?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_pbo_position_time_series_four_char_id=' + (search_type_point_pbo_position_time_series_four_char_id == null ? '' : encodeURIComponent(search_type_point_pbo_position_time_series_four_char_id)) + '&search_type_point_pbo_position_time_series_station_name=' + (search_type_point_pbo_position_time_series_station_name == null ? '' : encodeURIComponent(search_type_point_pbo_position_time_series_station_name)) + '&search_type_point_pbo_position_time_series_reference_frame=' + (search_type_point_pbo_position_time_series_reference_frame == null ? '' : encodeURIComponent(search_type_point_pbo_position_time_series_reference_frame)) + '&search_type_point_pbo_position_time_series_format_version=' + (search_type_point_pbo_position_time_series_format_version == null ? '' : encodeURIComponent(search_type_point_pbo_position_time_series_format_version)) + '&search_type_point_pbo_position_time_series_processing_center=' + (search_type_point_pbo_position_time_series_processing_center == null ? '' : encodeURIComponent(search_type_point_pbo_position_time_series_processing_center)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Simple Records' entry type
		 * API to search for entries of type Simple Records
		 * Get repository/search/type/type_point_simple_records
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_simple_records(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_simple_records?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SNOTEL Snow Data' entry type
		 * API to search for entries of type SNOTEL Snow Data
		 * Get repository/search/type/type_point_snotel
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_snotel_site_id Site ID
		 * @param {string} search_type_point_snotel_site_number Site Number
		 * @param {string} search_type_point_snotel_state State
		 * @param {string} search_type_point_snotel_network Network
		 * @param {string} search_type_point_snotel_huc_name HUC Name
		 * @param {string} search_type_point_snotel_huc_id HUC ID
		 * @return {void} No response was specified
		 */
		Search_type_point_snotel(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_snotel_site_id: string | null | undefined, search_type_point_snotel_site_number: string | null | undefined, search_type_point_snotel_state: string | null | undefined, search_type_point_snotel_network: string | null | undefined, search_type_point_snotel_huc_name: string | null | undefined, search_type_point_snotel_huc_id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_snotel?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_snotel_site_id=' + (search_type_point_snotel_site_id == null ? '' : encodeURIComponent(search_type_point_snotel_site_id)) + '&search_type_point_snotel_site_number=' + (search_type_point_snotel_site_number == null ? '' : encodeURIComponent(search_type_point_snotel_site_number)) + '&search_type_point_snotel_state=' + (search_type_point_snotel_state == null ? '' : encodeURIComponent(search_type_point_snotel_state)) + '&search_type_point_snotel_network=' + (search_type_point_snotel_network == null ? '' : encodeURIComponent(search_type_point_snotel_network)) + '&search_type_point_snotel_huc_name=' + (search_type_point_snotel_huc_name == null ? '' : encodeURIComponent(search_type_point_snotel_huc_name)) + '&search_type_point_snotel_huc_id=' + (search_type_point_snotel_huc_id == null ? '' : encodeURIComponent(search_type_point_snotel_huc_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Record Text File' entry type
		 * API to search for entries of type Record Text File
		 * Get repository/search/type/type_point_text
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_point_text(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_text?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Global Geodynamics GGP Format' entry type
		 * API to search for entries of type Global Geodynamics GGP Format
		 * Get repository/search/type/type_point_wsbb_ggp
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_point_wsbb_ggp_station Station
		 * @param {string} search_type_point_wsbb_ggp_instrument Instrument
		 * @param {string} search_type_point_wsbb_ggp_author Author
		 * @return {void} No response was specified
		 */
		Search_type_point_wsbb_ggp(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_point_wsbb_ggp_station: string | null | undefined, search_type_point_wsbb_ggp_instrument: string | null | undefined, search_type_point_wsbb_ggp_author: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_point_wsbb_ggp?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_point_wsbb_ggp_station=' + (search_type_point_wsbb_ggp_station == null ? '' : encodeURIComponent(search_type_point_wsbb_ggp_station)) + '&search_type_point_wsbb_ggp_instrument=' + (search_type_point_wsbb_ggp_instrument == null ? '' : encodeURIComponent(search_type_point_wsbb_ggp_instrument)) + '&search_type_point_wsbb_ggp_author=' + (search_type_point_wsbb_ggp_author == null ? '' : encodeURIComponent(search_type_point_wsbb_ggp_author)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type
		 * API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index
		 * Get repository/search/type/type_psd_monthly_climate_index
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_type_psd_monthly_climate_index_units Units
		 * @return {void} No response was specified
		 */
		Search_type_psd_monthly_climate_index(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_type_psd_monthly_climate_index_units: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_psd_monthly_climate_index?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_type_psd_monthly_climate_index_units=' + (search_type_psd_monthly_climate_index_units == null ? '' : encodeURIComponent(search_type_psd_monthly_climate_index_units)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'QUANDL Series' entry type
		 * API to search for entries of type QUANDL Series
		 * Get repository/search/type/type_quandl_series
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_quandl_series(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_quandl_series?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Service Group' entry type
		 * API to search for entries of type Service Group
		 * Get repository/search/type/type_service_group
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_service_group(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_service_group?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Service Link' entry type
		 * API to search for entries of type Service Link
		 * Get repository/search/type/type_service_link
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_service_link(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_service_link?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'SOCRATA Series' entry type
		 * API to search for entries of type SOCRATA Series
		 * Get repository/search/type/type_socrata_series
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_socrata_series(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_socrata_series?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'COD Sounding' entry type
		 * API to search for entries of type COD Sounding
		 * Get repository/search/type/type_sounding_cod
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_sounding_cod(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_sounding_cod?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'FRD Sounding' entry type
		 * API to search for entries of type FRD Sounding
		 * Get repository/search/type/type_sounding_frd
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_sounding_frd(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_sounding_frd?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'GSD Sounding' entry type
		 * API to search for entries of type GSD Sounding
		 * Get repository/search/type/type_sounding_gsd
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_sounding_gsd(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_sounding_gsd?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'UW Sounding' entry type
		 * API to search for entries of type UW Sounding
		 * Get repository/search/type/type_sounding_wyoming
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_sounding_wyoming(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_sounding_wyoming?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'NREL TMY Data' entry type
		 * API to search for entries of type NREL TMY Data
		 * Get repository/search/type/type_tmy
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_tmy(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_tmy?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Tweet' entry type
		 * API to search for entries of type Tweet
		 * Get repository/search/type/type_tweet
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_tweet(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_tweet?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'USGS Stream Gauge' entry type
		 * API to search for entries of type USGS Stream Gauge
		 * Get repository/search/type/type_usgs_gauge
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_usgs_gauge(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_usgs_gauge?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Virtual Group' entry type
		 * API to search for entries of type Virtual Group
		 * Get repository/search/type/type_virtual
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_virtual(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_virtual?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'WMS Capabilities' entry type
		 * API to search for entries of type WMS Capabilities
		 * Get repository/search/type/type_wms_capabilities
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_wms_capabilities(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_wms_capabilities?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'WMS Layer' entry type
		 * API to search for entries of type WMS Layer
		 * Get repository/search/type/type_wms_layer
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_type_wms_layer(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/type_wms_layer?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Ufo Sightings' entry type
		 * API to search for entries of type Ufo Sightings
		 * Get repository/search/type/ufo_sightings
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_ufo_sightings_datetime Datetime
		 * @param {string} search_db_ufo_sightings_city City
		 * @param {string} search_db_ufo_sightings_state State
		 * @param {string} search_db_ufo_sightings_country Country
		 * @param {string} search_db_ufo_sightings_shape Shape
		 * @param {number} search_db_ufo_sightings_duration_seconds Duration (seconds)
		 * @param {string} search_db_ufo_sightings_duration_hours_min Duration (hours/min)
		 * @param {string} search_db_ufo_sightings_comments Comments
		 * @param {string} search_db_ufo_sightings_date_posted Date Posted
		 * @param {number} search_db_ufo_sightings_latitude Latitude
		 * @param {number} search_db_ufo_sightings_longitude Longitude
		 * @return {void} No response was specified
		 */
		Search_ufo_sightings(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_ufo_sightings_datetime: string | null | undefined, search_db_ufo_sightings_city: string | null | undefined, search_db_ufo_sightings_state: string | null | undefined, search_db_ufo_sightings_country: string | null | undefined, search_db_ufo_sightings_shape: string | null | undefined, search_db_ufo_sightings_duration_seconds: number | null | undefined, search_db_ufo_sightings_duration_hours_min: string | null | undefined, search_db_ufo_sightings_comments: string | null | undefined, search_db_ufo_sightings_date_posted: string | null | undefined, search_db_ufo_sightings_latitude: number | null | undefined, search_db_ufo_sightings_longitude: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/ufo_sightings?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_ufo_sightings_datetime=' + (search_db_ufo_sightings_datetime == null ? '' : encodeURIComponent(search_db_ufo_sightings_datetime)) + '&search_db_ufo_sightings_city=' + (search_db_ufo_sightings_city == null ? '' : encodeURIComponent(search_db_ufo_sightings_city)) + '&search_db_ufo_sightings_state=' + (search_db_ufo_sightings_state == null ? '' : encodeURIComponent(search_db_ufo_sightings_state)) + '&search_db_ufo_sightings_country=' + (search_db_ufo_sightings_country == null ? '' : encodeURIComponent(search_db_ufo_sightings_country)) + '&search_db_ufo_sightings_shape=' + (search_db_ufo_sightings_shape == null ? '' : encodeURIComponent(search_db_ufo_sightings_shape)) + '&search_db_ufo_sightings_duration_seconds=' + search_db_ufo_sightings_duration_seconds + '&search_db_ufo_sightings_duration_hours_min=' + (search_db_ufo_sightings_duration_hours_min == null ? '' : encodeURIComponent(search_db_ufo_sightings_duration_hours_min)) + '&search_db_ufo_sightings_comments=' + (search_db_ufo_sightings_comments == null ? '' : encodeURIComponent(search_db_ufo_sightings_comments)) + '&search_db_ufo_sightings_date_posted=' + (search_db_ufo_sightings_date_posted == null ? '' : encodeURIComponent(search_db_ufo_sightings_date_posted)) + '&search_db_ufo_sightings_latitude=' + search_db_ufo_sightings_latitude + '&search_db_ufo_sightings_longitude=' + search_db_ufo_sightings_longitude, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'US Places' entry type
		 * API to search for entries of type US Places
		 * Get repository/search/type/us_places
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_us_places_feature_name Place Name
		 * @param {string} search_db_us_places_feature_class Place Type
		 * @param {string} search_db_us_places_state_alpha State
		 * @param {string} search_db_us_places_county_name County Name
		 * @param {string} search_db_us_places_location Location
		 * @param {number} search_db_us_places_elev_in_ft Elev In Ft
		 * @return {void} No response was specified
		 */
		Search_us_places(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_us_places_feature_name: string | null | undefined, search_db_us_places_feature_class: string | null | undefined, search_db_us_places_state_alpha: string | null | undefined, search_db_us_places_county_name: string | null | undefined, search_db_us_places_location: string | null | undefined, search_db_us_places_elev_in_ft: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/us_places?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_us_places_feature_name=' + (search_db_us_places_feature_name == null ? '' : encodeURIComponent(search_db_us_places_feature_name)) + '&search_db_us_places_feature_class=' + (search_db_us_places_feature_class == null ? '' : encodeURIComponent(search_db_us_places_feature_class)) + '&search_db_us_places_state_alpha=' + (search_db_us_places_state_alpha == null ? '' : encodeURIComponent(search_db_us_places_state_alpha)) + '&search_db_us_places_county_name=' + (search_db_us_places_county_name == null ? '' : encodeURIComponent(search_db_us_places_county_name)) + '&search_db_us_places_location=' + (search_db_us_places_location == null ? '' : encodeURIComponent(search_db_us_places_location)) + '&search_db_us_places_elev_in_ft=' + search_db_us_places_elev_in_ft, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Simple Yes-No Vote' entry type
		 * API to search for entries of type Simple Yes-No Vote
		 * Get repository/search/type/vote_yesno
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_db_vote_yesno_vote My Vote
		 * @return {void} No response was specified
		 */
		Search_vote_yesno(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_db_vote_yesno_vote: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/vote_yesno?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_db_vote_yesno_vote=' + (search_db_vote_yesno_vote == null ? '' : encodeURIComponent(search_db_vote_yesno_vote)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Weblog' entry type
		 * API to search for entries of type Weblog
		 * Get repository/search/type/weblog
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @return {void} No response was specified
		 */
		Search_weblog(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/weblog?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search API for 'Wiki Page' entry type
		 * API to search for entries of type Wiki Page
		 * Get repository/search/type/wikipage
		 * @param {string} text Search text
		 * @param {string} name Search name
		 * @param {string} description Search description
		 * @param {Date} fromdate From date
		 * @param {Date} todate To date
		 * @param {Date} createdate_from Archive create date from
		 * @param {Date} createdate_to Archive create date to
		 * @param {Date} changedate_from Archive change date from
		 * @param {Date} changedate_to Archive change date to
		 * @param {string} group Parent entry
		 * @param {string} filesuffix File suffix
		 * @param {number} maxlatitude Northern bounds of search
		 * @param {number} minlongitude Western bounds of search
		 * @param {number} minlatitude Southern bounds of search
		 * @param {number} maxlongitude Eastern bounds of search
		 * @param {number} max Max number of results
		 * @param {number} skip Number to skip
		 * @param {string} search_wikipage_wikitext Wiki Text
		 * @param {string} search_wikipage_category Wiki Page Category
		 * @return {void} No response was specified
		 */
		Search_wikipage(text: string | null | undefined, name: string | null | undefined, description: string | null | undefined, fromdate: Date | null | undefined, todate: Date | null | undefined, createdate_from: Date | null | undefined, createdate_to: Date | null | undefined, changedate_from: Date | null | undefined, changedate_to: Date | null | undefined, group: string | null | undefined, filesuffix: string | null | undefined, maxlatitude: number | null | undefined, minlongitude: number | null | undefined, minlatitude: number | null | undefined, maxlongitude: number | null | undefined, max: number | null | undefined, skip: number | null | undefined, search_wikipage_wikitext: string | null | undefined, search_wikipage_category: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'repository/search/type/wikipage?text=' + (text == null ? '' : encodeURIComponent(text)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&fromdate=' + fromdate?.toISOString() + '&todate=' + todate?.toISOString() + '&createdate_from=' + createdate_from?.toISOString() + '&createdate_to=' + createdate_to?.toISOString() + '&changedate_from=' + changedate_from?.toISOString() + '&changedate_to=' + changedate_to?.toISOString() + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&filesuffix=' + (filesuffix == null ? '' : encodeURIComponent(filesuffix)) + '&maxlatitude=' + maxlatitude + '&minlongitude=' + minlongitude + '&minlatitude=' + minlatitude + '&maxlongitude=' + maxlongitude + '&max=' + max + '&skip=' + skip + '&search_wikipage_wikitext=' + (search_wikipage_wikitext == null ? '' : encodeURIComponent(search_wikipage_wikitext)) + '&search_wikipage_category=' + (search_wikipage_category == null ? '' : encodeURIComponent(search_wikipage_category)), { observe: 'response', responseType: 'text' });
		}
	}

}

