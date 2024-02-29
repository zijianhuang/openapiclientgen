import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AdvancedGameStat {
		defense?: AdvancedGameStatDefense;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId?: number | null;
		offense?: AdvancedGameStatOffense;
		opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface AdvancedGameStatFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId: FormControl<number | null | undefined>,
		opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatFormGroup() {
		return new FormGroup<AdvancedGameStatFormProperties>({
			gameId: new FormControl<number | null | undefined>(undefined),
			opponent: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatDefense {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives?: number | null;

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		lineYards?: number | null;

		/** Type: double */
		lineYardsTotal?: number | null;

		/** Type: double */
		openFieldYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedGameStatDefensePassingDowns;
		passingPlays?: AdvancedGameStatDefensePassingPlays;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays?: number | null;

		/** Type: double */
		powerSuccess?: number | null;

		/** Type: double */
		ppa?: number | null;
		rushingPlays?: AdvancedGameStatDefenseRushingPlays;

		/** Type: double */
		secondLevelYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedGameStatDefenseStandardDowns;

		/** Type: double */
		stuffRate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatDefenseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives: FormControl<number | null | undefined>,

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		lineYards: FormControl<number | null | undefined>,

		/** Type: double */
		lineYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		openFieldYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays: FormControl<number | null | undefined>,

		/** Type: double */
		powerSuccess: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		secondLevelYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		stuffRate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatDefenseFormGroup() {
		return new FormGroup<AdvancedGameStatDefenseFormProperties>({
			drives: new FormControl<number | null | undefined>(undefined),
			explosiveness: new FormControl<number | null | undefined>(undefined),
			lineYards: new FormControl<number | null | undefined>(undefined),
			lineYardsTotal: new FormControl<number | null | undefined>(undefined),
			openFieldYards: new FormControl<number | null | undefined>(undefined),
			openFieldYardsTotal: new FormControl<number | null | undefined>(undefined),
			plays: new FormControl<number | null | undefined>(undefined),
			powerSuccess: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			secondLevelYards: new FormControl<number | null | undefined>(undefined),
			secondLevelYardsTotal: new FormControl<number | null | undefined>(undefined),
			stuffRate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatDefensePassingDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedGameStatDefensePassingDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatDefensePassingDownsFormGroup() {
		return new FormGroup<AdvancedGameStatDefensePassingDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatDefensePassingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatDefensePassingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatDefensePassingPlaysFormGroup() {
		return new FormGroup<AdvancedGameStatDefensePassingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatDefenseRushingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatDefenseRushingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatDefenseRushingPlaysFormGroup() {
		return new FormGroup<AdvancedGameStatDefenseRushingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatDefenseStandardDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedGameStatDefenseStandardDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatDefenseStandardDownsFormGroup() {
		return new FormGroup<AdvancedGameStatDefenseStandardDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatOffense {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives?: number | null;

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		lineYards?: number | null;

		/** Type: double */
		lineYardsTotal?: number | null;

		/** Type: double */
		openFieldYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedGameStatOffensePassingDowns;
		passingPlays?: AdvancedGameStatOffensePassingPlays;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays?: number | null;

		/** Type: double */
		powerSuccess?: number | null;

		/** Type: double */
		ppa?: number | null;
		rushingPlays?: AdvancedGameStatOffenseRushingPlays;

		/** Type: double */
		secondLevelYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedGameStatOffenseStandardDowns;

		/** Type: double */
		stuffRate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatOffenseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives: FormControl<number | null | undefined>,

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		lineYards: FormControl<number | null | undefined>,

		/** Type: double */
		lineYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		openFieldYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays: FormControl<number | null | undefined>,

		/** Type: double */
		powerSuccess: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		secondLevelYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		stuffRate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatOffenseFormGroup() {
		return new FormGroup<AdvancedGameStatOffenseFormProperties>({
			drives: new FormControl<number | null | undefined>(undefined),
			explosiveness: new FormControl<number | null | undefined>(undefined),
			lineYards: new FormControl<number | null | undefined>(undefined),
			lineYardsTotal: new FormControl<number | null | undefined>(undefined),
			openFieldYards: new FormControl<number | null | undefined>(undefined),
			openFieldYardsTotal: new FormControl<number | null | undefined>(undefined),
			plays: new FormControl<number | null | undefined>(undefined),
			powerSuccess: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			secondLevelYards: new FormControl<number | null | undefined>(undefined),
			secondLevelYardsTotal: new FormControl<number | null | undefined>(undefined),
			stuffRate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatOffensePassingDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedGameStatOffensePassingDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatOffensePassingDownsFormGroup() {
		return new FormGroup<AdvancedGameStatOffensePassingDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatOffensePassingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatOffensePassingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatOffensePassingPlaysFormGroup() {
		return new FormGroup<AdvancedGameStatOffensePassingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatOffenseRushingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatOffenseRushingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatOffenseRushingPlaysFormGroup() {
		return new FormGroup<AdvancedGameStatOffenseRushingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedGameStatOffenseStandardDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedGameStatOffenseStandardDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedGameStatOffenseStandardDownsFormGroup() {
		return new FormGroup<AdvancedGameStatOffenseStandardDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStat {
		conference?: string | null;
		defense?: AdvancedSeasonStatDefense;
		offense?: AdvancedSeasonStatOffense;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;
	}
	export interface AdvancedSeasonStatFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateAdvancedSeasonStatFormGroup() {
		return new FormGroup<AdvancedSeasonStatFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefense {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives?: number | null;

		/** Type: double */
		explosiveness?: number | null;
		fieldPosition?: AdvancedSeasonStatDefenseFieldPosition;
		havoc?: AdvancedSeasonStatDefenseHavoc;

		/** Type: double */
		lineYards?: number | null;

		/** Type: double */
		lineYardsTotal?: number | null;

		/** Type: double */
		openFieldYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedSeasonStatDefensePassingDowns;
		passingPlays?: AdvancedSeasonStatDefensePassingPlays;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays?: number | null;

		/** Type: double */
		pointsPerOpportunity?: number | null;

		/** Type: double */
		powerSuccess?: number | null;

		/** Type: double */
		ppa?: number | null;
		rushingPlays?: AdvancedSeasonStatDefenseRushingPlays;

		/** Type: double */
		secondLevelYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedSeasonStatDefenseStandardDowns;

		/** Type: double */
		stuffRate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalOpportunies?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatDefenseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives: FormControl<number | null | undefined>,

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		lineYards: FormControl<number | null | undefined>,

		/** Type: double */
		lineYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		openFieldYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays: FormControl<number | null | undefined>,

		/** Type: double */
		pointsPerOpportunity: FormControl<number | null | undefined>,

		/** Type: double */
		powerSuccess: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		secondLevelYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		stuffRate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalOpportunies: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefenseFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefenseFormProperties>({
			drives: new FormControl<number | null | undefined>(undefined),
			explosiveness: new FormControl<number | null | undefined>(undefined),
			lineYards: new FormControl<number | null | undefined>(undefined),
			lineYardsTotal: new FormControl<number | null | undefined>(undefined),
			openFieldYards: new FormControl<number | null | undefined>(undefined),
			openFieldYardsTotal: new FormControl<number | null | undefined>(undefined),
			plays: new FormControl<number | null | undefined>(undefined),
			pointsPerOpportunity: new FormControl<number | null | undefined>(undefined),
			powerSuccess: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			secondLevelYards: new FormControl<number | null | undefined>(undefined),
			secondLevelYardsTotal: new FormControl<number | null | undefined>(undefined),
			stuffRate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalOpportunies: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefenseFieldPosition {

		/** Type: double */
		averagePredictedPoints?: number | null;

		/** Type: double */
		averageStart?: number | null;
	}
	export interface AdvancedSeasonStatDefenseFieldPositionFormProperties {

		/** Type: double */
		averagePredictedPoints: FormControl<number | null | undefined>,

		/** Type: double */
		averageStart: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefenseFieldPositionFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefenseFieldPositionFormProperties>({
			averagePredictedPoints: new FormControl<number | null | undefined>(undefined),
			averageStart: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefenseHavoc {

		/** Type: double */
		db?: number | null;

		/** Type: double */
		frontSeven?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface AdvancedSeasonStatDefenseHavocFormProperties {

		/** Type: double */
		db: FormControl<number | null | undefined>,

		/** Type: double */
		frontSeven: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefenseHavocFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefenseHavocFormProperties>({
			db: new FormControl<number | null | undefined>(undefined),
			frontSeven: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefensePassingDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatDefensePassingDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefensePassingDownsFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefensePassingDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefensePassingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatDefensePassingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefensePassingPlaysFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefensePassingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefenseRushingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatDefenseRushingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefenseRushingPlaysFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefenseRushingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefenseStandardDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatDefenseStandardDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefenseStandardDownsFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefenseStandardDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffense {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives?: number | null;

		/** Type: double */
		explosiveness?: number | null;
		fieldPosition?: AdvancedSeasonStatOffenseFieldPosition;
		havoc?: AdvancedSeasonStatOffenseHavoc;

		/** Type: double */
		lineYards?: number | null;

		/** Type: double */
		lineYardsTotal?: number | null;

		/** Type: double */
		openFieldYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedSeasonStatOffensePassingDowns;
		passingPlays?: AdvancedSeasonStatOffensePassingPlays;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays?: number | null;

		/** Type: double */
		pointsPerOpportunity?: number | null;

		/** Type: double */
		powerSuccess?: number | null;

		/** Type: double */
		ppa?: number | null;
		rushingPlays?: AdvancedSeasonStatOffenseRushingPlays;

		/** Type: double */
		secondLevelYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedSeasonStatOffenseStandardDowns;

		/** Type: double */
		stuffRate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalOpportunies?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatOffenseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives: FormControl<number | null | undefined>,

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		lineYards: FormControl<number | null | undefined>,

		/** Type: double */
		lineYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		openFieldYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYardsTotal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays: FormControl<number | null | undefined>,

		/** Type: double */
		pointsPerOpportunity: FormControl<number | null | undefined>,

		/** Type: double */
		powerSuccess: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		secondLevelYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYardsTotal: FormControl<number | null | undefined>,

		/** Type: double */
		stuffRate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalOpportunies: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffenseFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffenseFormProperties>({
			drives: new FormControl<number | null | undefined>(undefined),
			explosiveness: new FormControl<number | null | undefined>(undefined),
			lineYards: new FormControl<number | null | undefined>(undefined),
			lineYardsTotal: new FormControl<number | null | undefined>(undefined),
			openFieldYards: new FormControl<number | null | undefined>(undefined),
			openFieldYardsTotal: new FormControl<number | null | undefined>(undefined),
			plays: new FormControl<number | null | undefined>(undefined),
			pointsPerOpportunity: new FormControl<number | null | undefined>(undefined),
			powerSuccess: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			secondLevelYards: new FormControl<number | null | undefined>(undefined),
			secondLevelYardsTotal: new FormControl<number | null | undefined>(undefined),
			stuffRate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalOpportunies: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffenseFieldPosition {

		/** Type: double */
		averagePredictedPoints?: number | null;

		/** Type: double */
		averageStart?: number | null;
	}
	export interface AdvancedSeasonStatOffenseFieldPositionFormProperties {

		/** Type: double */
		averagePredictedPoints: FormControl<number | null | undefined>,

		/** Type: double */
		averageStart: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffenseFieldPositionFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffenseFieldPositionFormProperties>({
			averagePredictedPoints: new FormControl<number | null | undefined>(undefined),
			averageStart: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffenseHavoc {

		/** Type: double */
		db?: number | null;

		/** Type: double */
		frontSeven?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface AdvancedSeasonStatOffenseHavocFormProperties {

		/** Type: double */
		db: FormControl<number | null | undefined>,

		/** Type: double */
		frontSeven: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffenseHavocFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffenseHavocFormProperties>({
			db: new FormControl<number | null | undefined>(undefined),
			frontSeven: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffensePassingDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatOffensePassingDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffensePassingDownsFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffensePassingDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffensePassingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatOffensePassingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffensePassingPlaysFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffensePassingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffenseRushingPlays {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;

		/** Type: double */
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatOffenseRushingPlaysFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffenseRushingPlaysFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffenseRushingPlaysFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffenseStandardDowns {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		ppa?: number | null;

		/** Type: double */
		rate?: number | null;

		/** Type: double */
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatOffenseStandardDownsFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,

		/** Type: double */
		rate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffenseStandardDownsFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffenseStandardDownsFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScore {
		players?: BoxScorePlayers;
		teams?: BoxScoreTeams;
	}
	export interface BoxScoreFormProperties {
	}
	export function CreateBoxScoreFormGroup() {
		return new FormGroup<BoxScoreFormProperties>({
		});

	}

	export interface BoxScorePlayers {
		BoxScorePlayersPpa?: Array<BoxScorePlayersPpa>;
		BoxScorePlayersUsage?: Array<BoxScorePlayersUsage>;
	}
	export interface BoxScorePlayersFormProperties {
	}
	export function CreateBoxScorePlayersFormGroup() {
		return new FormGroup<BoxScorePlayersFormProperties>({
		});

	}

	export interface BoxScorePlayersPpa {
		average?: BoxScorePlayersPpaAverage;
		cumulative?: BoxScorePlayersPpaCumulative;
		player?: string | null;
		position?: string | null;
		team?: string | null;
	}
	export interface BoxScorePlayersPpaFormProperties {
		player: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScorePlayersPpaFormGroup() {
		return new FormGroup<BoxScorePlayersPpaFormProperties>({
			player: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScorePlayersPpaAverage {

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScorePlayersPpaAverageFormProperties {

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScorePlayersPpaAverageFormGroup() {
		return new FormGroup<BoxScorePlayersPpaAverageFormProperties>({
			passing: new FormControl<number | null | undefined>(undefined),
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScorePlayersPpaCumulative {

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScorePlayersPpaCumulativeFormProperties {

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScorePlayersPpaCumulativeFormGroup() {
		return new FormGroup<BoxScorePlayersPpaCumulativeFormProperties>({
			passing: new FormControl<number | null | undefined>(undefined),
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScorePlayersUsage {

		/** Type: double */
		passing?: number | null;
		player?: string | null;
		position?: string | null;

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		rushing?: number | null;
		team?: string | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScorePlayersUsageFormProperties {

		/** Type: double */
		passing: FormControl<number | null | undefined>,
		player: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScorePlayersUsageFormGroup() {
		return new FormGroup<BoxScorePlayersUsageFormProperties>({
			passing: new FormControl<number | null | undefined>(undefined),
			player: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeams {
		BoxScoreTeamsCumulativePpa?: Array<BoxScoreTeamsCumulativePpa>;
		BoxScoreTeamsExplosiveness?: Array<BoxScoreTeamsExplosiveness>;
		BoxScoreTeamsFieldPosition?: Array<BoxScoreTeamsFieldPosition>;
		BoxScoreTeamsHavoc?: Array<BoxScoreTeamsHavoc>;
		BoxScoreTeamsPpa?: Array<BoxScoreTeamsPpa>;
		BoxScoreTeamsRushing?: Array<BoxScoreTeamsRushing>;
		BoxScoreTeamsScoringOpportunities?: Array<BoxScoreTeamsScoringOpportunities>;
		BoxScoreTeamsSuccessRates?: Array<BoxScoreTeamsSuccessRates>;
	}
	export interface BoxScoreTeamsFormProperties {
	}
	export function CreateBoxScoreTeamsFormGroup() {
		return new FormGroup<BoxScoreTeamsFormProperties>({
		});

	}

	export interface BoxScoreTeamsCumulativePpa {
		overall?: BoxScoreTeamsCumulativePpaOverall;
		passing?: BoxScoreTeamsCumulativePpaPassing;

		/** Type: double */
		plays?: number | null;
		rushing?: BoxScoreTeamsCumulativePpaRushing;
		team?: string | null;
	}
	export interface BoxScoreTeamsCumulativePpaFormProperties {

		/** Type: double */
		plays: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScoreTeamsCumulativePpaFormGroup() {
		return new FormGroup<BoxScoreTeamsCumulativePpaFormProperties>({
			plays: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsCumulativePpaOverall {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsCumulativePpaOverallFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsCumulativePpaOverallFormGroup() {
		return new FormGroup<BoxScoreTeamsCumulativePpaOverallFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsCumulativePpaPassing {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsCumulativePpaPassingFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsCumulativePpaPassingFormGroup() {
		return new FormGroup<BoxScoreTeamsCumulativePpaPassingFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsCumulativePpaRushing {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsCumulativePpaRushingFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsCumulativePpaRushingFormGroup() {
		return new FormGroup<BoxScoreTeamsCumulativePpaRushingFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsExplosiveness {
		overall?: BoxScoreTeamsExplosivenessOverall;
		team?: string | null;
	}
	export interface BoxScoreTeamsExplosivenessFormProperties {
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScoreTeamsExplosivenessFormGroup() {
		return new FormGroup<BoxScoreTeamsExplosivenessFormProperties>({
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsExplosivenessOverall {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsExplosivenessOverallFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsExplosivenessOverallFormGroup() {
		return new FormGroup<BoxScoreTeamsExplosivenessOverallFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsFieldPosition {

		/** Type: double */
		averageStart?: number | null;

		/** Type: double */
		averageStartingPredictedPoints?: number | null;
		team?: string | null;
	}
	export interface BoxScoreTeamsFieldPositionFormProperties {

		/** Type: double */
		averageStart: FormControl<number | null | undefined>,

		/** Type: double */
		averageStartingPredictedPoints: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScoreTeamsFieldPositionFormGroup() {
		return new FormGroup<BoxScoreTeamsFieldPositionFormProperties>({
			averageStart: new FormControl<number | null | undefined>(undefined),
			averageStartingPredictedPoints: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsHavoc {

		/** Type: double */
		db?: number | null;

		/** Type: double */
		frontSeven?: number | null;
		team?: string | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsHavocFormProperties {

		/** Type: double */
		db: FormControl<number | null | undefined>,

		/** Type: double */
		frontSeven: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsHavocFormGroup() {
		return new FormGroup<BoxScoreTeamsHavocFormProperties>({
			db: new FormControl<number | null | undefined>(undefined),
			frontSeven: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsPpa {
		overall?: BoxScoreTeamsPpaOverall;
		passing?: BoxScoreTeamsPpaPassing;

		/** Type: double */
		plays?: number | null;
		rushing?: BoxScoreTeamsPpaRushing;
		team?: string | null;
	}
	export interface BoxScoreTeamsPpaFormProperties {

		/** Type: double */
		plays: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScoreTeamsPpaFormGroup() {
		return new FormGroup<BoxScoreTeamsPpaFormProperties>({
			plays: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsPpaOverall {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsPpaOverallFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsPpaOverallFormGroup() {
		return new FormGroup<BoxScoreTeamsPpaOverallFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsPpaPassing {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsPpaPassingFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsPpaPassingFormGroup() {
		return new FormGroup<BoxScoreTeamsPpaPassingFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsPpaRushing {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsPpaRushingFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsPpaRushingFormGroup() {
		return new FormGroup<BoxScoreTeamsPpaRushingFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsRushing {

		/** Type: double */
		lineYards?: number | null;

		/** Type: double */
		lineYardsAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYards?: number | null;

		/** Type: double */
		openFieldYardsAverage?: number | null;

		/** Type: double */
		powerSuccess?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYards?: number | null;

		/** Type: double */
		secondLevelYardsAverage?: number | null;

		/** Type: double */
		stuffRate?: number | null;
		team?: string | null;
	}
	export interface BoxScoreTeamsRushingFormProperties {

		/** Type: double */
		lineYards: FormControl<number | null | undefined>,

		/** Type: double */
		lineYardsAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYards: FormControl<number | null | undefined>,

		/** Type: double */
		openFieldYardsAverage: FormControl<number | null | undefined>,

		/** Type: double */
		powerSuccess: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYards: FormControl<number | null | undefined>,

		/** Type: double */
		secondLevelYardsAverage: FormControl<number | null | undefined>,

		/** Type: double */
		stuffRate: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScoreTeamsRushingFormGroup() {
		return new FormGroup<BoxScoreTeamsRushingFormProperties>({
			lineYards: new FormControl<number | null | undefined>(undefined),
			lineYardsAverage: new FormControl<number | null | undefined>(undefined),
			openFieldYards: new FormControl<number | null | undefined>(undefined),
			openFieldYardsAverage: new FormControl<number | null | undefined>(undefined),
			powerSuccess: new FormControl<number | null | undefined>(undefined),
			secondLevelYards: new FormControl<number | null | undefined>(undefined),
			secondLevelYardsAverage: new FormControl<number | null | undefined>(undefined),
			stuffRate: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsScoringOpportunities {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		opportunities?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points?: number | null;

		/** Type: double */
		pointsPerOpportunity?: number | null;
		team?: string | null;
	}
	export interface BoxScoreTeamsScoringOpportunitiesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		opportunities: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points: FormControl<number | null | undefined>,

		/** Type: double */
		pointsPerOpportunity: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScoreTeamsScoringOpportunitiesFormGroup() {
		return new FormGroup<BoxScoreTeamsScoringOpportunitiesFormProperties>({
			opportunities: new FormControl<number | null | undefined>(undefined),
			points: new FormControl<number | null | undefined>(undefined),
			pointsPerOpportunity: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsSuccessRates {
		overall?: BoxScoreTeamsSuccessRatesOverall;
		passingDowns?: BoxScoreTeamsSuccessRatesPassingDowns;
		standardDowns?: BoxScoreTeamsSuccessRatesStandardDowns;
		team?: string | null;
	}
	export interface BoxScoreTeamsSuccessRatesFormProperties {
		team: FormControl<string | null | undefined>,
	}
	export function CreateBoxScoreTeamsSuccessRatesFormGroup() {
		return new FormGroup<BoxScoreTeamsSuccessRatesFormProperties>({
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsSuccessRatesOverall {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsSuccessRatesOverallFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsSuccessRatesOverallFormGroup() {
		return new FormGroup<BoxScoreTeamsSuccessRatesOverallFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsSuccessRatesPassingDowns {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsSuccessRatesPassingDownsFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsSuccessRatesPassingDownsFormGroup() {
		return new FormGroup<BoxScoreTeamsSuccessRatesPassingDownsFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoxScoreTeamsSuccessRatesStandardDowns {

		/** Type: double */
		quarter1?: number | null;

		/** Type: double */
		quarter2?: number | null;

		/** Type: double */
		quarter3?: number | null;

		/** Type: double */
		quarter4?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface BoxScoreTeamsSuccessRatesStandardDownsFormProperties {

		/** Type: double */
		quarter1: FormControl<number | null | undefined>,

		/** Type: double */
		quarter2: FormControl<number | null | undefined>,

		/** Type: double */
		quarter3: FormControl<number | null | undefined>,

		/** Type: double */
		quarter4: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBoxScoreTeamsSuccessRatesStandardDownsFormGroup() {
		return new FormGroup<BoxScoreTeamsSuccessRatesStandardDownsFormProperties>({
			quarter1: new FormControl<number | null | undefined>(undefined),
			quarter2: new FormControl<number | null | undefined>(undefined),
			quarter3: new FormControl<number | null | undefined>(undefined),
			quarter4: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Coach {
		first_name?: string | null;
		hire_date?: string | null;
		last_name?: string | null;
		CoachSeasons?: Array<CoachSeasons>;
	}
	export interface CoachFormProperties {
		first_name: FormControl<string | null | undefined>,
		hire_date: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
	}
	export function CreateCoachFormGroup() {
		return new FormGroup<CoachFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			hire_date: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CoachSeasons {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses?: number | null;

		/**
		 * Final ranking in the AP poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postseason_rank?: number | null;

		/**
		 * Rank in the AP preseason poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preseason_rank?: number | null;
		school?: string | null;

		/**
		 * Final SP+ defensive rating
		 * Type: double
		 */
		sp_defense?: number | null;

		/**
		 * Final SP+ offensive rating
		 * Type: double
		 */
		sp_offense?: number | null;

		/**
		 * Final overall SP+ rating
		 * Type: double
		 */
		sp_overall?: number | null;

		/**
		 * Final SRS rankings
		 * Type: double
		 */
		srs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins?: number | null;
		year?: string | null;
	}
	export interface CoachSeasonsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses: FormControl<number | null | undefined>,

		/**
		 * Final ranking in the AP poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postseason_rank: FormControl<number | null | undefined>,

		/**
		 * Rank in the AP preseason poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preseason_rank: FormControl<number | null | undefined>,
		school: FormControl<string | null | undefined>,

		/**
		 * Final SP+ defensive rating
		 * Type: double
		 */
		sp_defense: FormControl<number | null | undefined>,

		/**
		 * Final SP+ offensive rating
		 * Type: double
		 */
		sp_offense: FormControl<number | null | undefined>,

		/**
		 * Final overall SP+ rating
		 * Type: double
		 */
		sp_overall: FormControl<number | null | undefined>,

		/**
		 * Final SRS rankings
		 * Type: double
		 */
		srs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins: FormControl<number | null | undefined>,
		year: FormControl<string | null | undefined>,
	}
	export function CreateCoachSeasonsFormGroup() {
		return new FormGroup<CoachSeasonsFormProperties>({
			games: new FormControl<number | null | undefined>(undefined),
			losses: new FormControl<number | null | undefined>(undefined),
			postseason_rank: new FormControl<number | null | undefined>(undefined),
			preseason_rank: new FormControl<number | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			sp_defense: new FormControl<number | null | undefined>(undefined),
			sp_offense: new FormControl<number | null | undefined>(undefined),
			sp_overall: new FormControl<number | null | undefined>(undefined),
			srs: new FormControl<number | null | undefined>(undefined),
			ties: new FormControl<number | null | undefined>(undefined),
			wins: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Conference {
		abbreviation?: string | null;
		classification?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		short_name?: string | null;
	}
	export interface ConferenceFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		classification: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		short_name: FormControl<string | null | undefined>,
	}
	export function CreateConferenceFormGroup() {
		return new FormGroup<ConferenceFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			classification: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			short_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConferenceSPRating {
		conference?: string | null;
		defense?: ConferenceSPRatingDefense;
		offense?: ConferenceSPRatingOffense;

		/** Type: double */
		rating?: number | null;

		/** Type: double */
		secondOrderWins?: number | null;

		/** Type: double */
		sos?: number | null;
		specialTeams?: ConferenceSPRatingSpecialTeams;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface ConferenceSPRatingFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Type: double */
		secondOrderWins: FormControl<number | null | undefined>,

		/** Type: double */
		sos: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateConferenceSPRatingFormGroup() {
		return new FormGroup<ConferenceSPRatingFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			secondOrderWins: new FormControl<number | null | undefined>(undefined),
			sos: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConferenceSPRatingDefense {

		/** Type: double */
		explosiveness?: number | null;
		havoc?: ConferenceSPRatingDefenseHavoc;

		/** Type: double */
		pasing?: number | null;

		/** Type: double */
		passingDowns?: number | null;

		/** Type: double */
		rating?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		standardDowns?: number | null;

		/** Type: double */
		success?: number | null;
	}
	export interface ConferenceSPRatingDefenseFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		pasing: FormControl<number | null | undefined>,

		/** Type: double */
		passingDowns: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		standardDowns: FormControl<number | null | undefined>,

		/** Type: double */
		success: FormControl<number | null | undefined>,
	}
	export function CreateConferenceSPRatingDefenseFormGroup() {
		return new FormGroup<ConferenceSPRatingDefenseFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			pasing: new FormControl<number | null | undefined>(undefined),
			passingDowns: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			standardDowns: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConferenceSPRatingDefenseHavoc {

		/** Type: double */
		db?: number | null;

		/** Type: double */
		frontSeven?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface ConferenceSPRatingDefenseHavocFormProperties {

		/** Type: double */
		db: FormControl<number | null | undefined>,

		/** Type: double */
		frontSeven: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateConferenceSPRatingDefenseHavocFormGroup() {
		return new FormGroup<ConferenceSPRatingDefenseHavocFormProperties>({
			db: new FormControl<number | null | undefined>(undefined),
			frontSeven: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConferenceSPRatingOffense {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		pace?: number | null;

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		passingDowns?: number | null;

		/** Type: double */
		rating?: number | null;

		/** Type: double */
		runRate?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		standardDowns?: number | null;

		/** Type: double */
		success?: number | null;
	}
	export interface ConferenceSPRatingOffenseFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		pace: FormControl<number | null | undefined>,

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		passingDowns: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Type: double */
		runRate: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		standardDowns: FormControl<number | null | undefined>,

		/** Type: double */
		success: FormControl<number | null | undefined>,
	}
	export function CreateConferenceSPRatingOffenseFormGroup() {
		return new FormGroup<ConferenceSPRatingOffenseFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			pace: new FormControl<number | null | undefined>(undefined),
			passing: new FormControl<number | null | undefined>(undefined),
			passingDowns: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			runRate: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			standardDowns: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConferenceSPRatingSpecialTeams {

		/** Type: double */
		rating?: number | null;
	}
	export interface ConferenceSPRatingSpecialTeamsFormProperties {

		/** Type: double */
		rating: FormControl<number | null | undefined>,
	}
	export function CreateConferenceSPRatingSpecialTeamsFormGroup() {
		return new FormGroup<ConferenceSPRatingSpecialTeamsFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DraftPick {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collegeAthleteId?: number | null;
		collegeConference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collegeId?: number | null;
		collegeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		hometownInfo?: DraftPickHometownInfo;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		nflAthleteId?: number | null;
		nflTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		overall?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pick?: number | null;
		position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		preDraftGrade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		preDraftPositionRanking?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		preDraftRanking?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		round?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface DraftPickFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collegeAthleteId: FormControl<number | null | undefined>,
		collegeConference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collegeId: FormControl<number | null | undefined>,
		collegeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		nflAthleteId: FormControl<number | null | undefined>,
		nflTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		overall: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pick: FormControl<number | null | undefined>,
		position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		preDraftGrade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		preDraftPositionRanking: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		preDraftRanking: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		round: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDraftPickFormGroup() {
		return new FormGroup<DraftPickFormProperties>({
			collegeAthleteId: new FormControl<number | null | undefined>(undefined),
			collegeConference: new FormControl<string | null | undefined>(undefined),
			collegeId: new FormControl<number | null | undefined>(undefined),
			collegeTeam: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nflAthleteId: new FormControl<number | null | undefined>(undefined),
			nflTeam: new FormControl<string | null | undefined>(undefined),
			overall: new FormControl<number | null | undefined>(undefined),
			pick: new FormControl<number | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			preDraftGrade: new FormControl<number | null | undefined>(undefined),
			preDraftPositionRanking: new FormControl<number | null | undefined>(undefined),
			preDraftRanking: new FormControl<number | null | undefined>(undefined),
			round: new FormControl<number | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DraftPickHometownInfo {
		city?: string | null;
		country?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		countryFips?: number | null;

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
		state?: string | null;
	}
	export interface DraftPickHometownInfoFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		countryFips: FormControl<number | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateDraftPickHometownInfoFormGroup() {
		return new FormGroup<DraftPickHometownInfoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			countryFips: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DraftPosition {
		abbreviation?: string | null;
		name?: string | null;
	}
	export interface DraftPositionFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDraftPositionFormGroup() {
		return new FormGroup<DraftPositionFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DraftTeam {
		displayName?: string | null;
		location?: string | null;
		logo?: string | null;
		nickname?: string | null;
	}
	export interface DraftTeamFormProperties {
		displayName: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,
		nickname: FormControl<string | null | undefined>,
	}
	export function CreateDraftTeamFormGroup() {
		return new FormGroup<DraftTeamFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Drive {
		defense?: string | null;
		defense_conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drive_number?: number | null;
		drive_result?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_defense_score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_offense_score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_period?: number | null;
		end_time?: DriveEnd_time;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_yardline?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_yards_to_goal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		game_id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		is_home_offense?: boolean | null;
		offense?: string | null;
		offense_conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays?: number | null;
		scoring?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_defense_score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_offense_score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_period?: number | null;
		start_time?: DriveStart_time;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_yardline?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_yards_to_goal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards?: number | null;
	}
	export interface DriveFormProperties {
		defense: FormControl<string | null | undefined>,
		defense_conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drive_number: FormControl<number | null | undefined>,
		drive_result: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_defense_score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_offense_score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_period: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_yardline: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end_yards_to_goal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		game_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		is_home_offense: FormControl<boolean | null | undefined>,
		offense: FormControl<string | null | undefined>,
		offense_conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays: FormControl<number | null | undefined>,
		scoring: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_defense_score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_offense_score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_period: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_yardline: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start_yards_to_goal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards: FormControl<number | null | undefined>,
	}
	export function CreateDriveFormGroup() {
		return new FormGroup<DriveFormProperties>({
			defense: new FormControl<string | null | undefined>(undefined),
			defense_conference: new FormControl<string | null | undefined>(undefined),
			drive_number: new FormControl<number | null | undefined>(undefined),
			drive_result: new FormControl<string | null | undefined>(undefined),
			end_defense_score: new FormControl<number | null | undefined>(undefined),
			end_offense_score: new FormControl<number | null | undefined>(undefined),
			end_period: new FormControl<number | null | undefined>(undefined),
			end_yardline: new FormControl<number | null | undefined>(undefined),
			end_yards_to_goal: new FormControl<number | null | undefined>(undefined),
			game_id: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_home_offense: new FormControl<boolean | null | undefined>(undefined),
			offense: new FormControl<string | null | undefined>(undefined),
			offense_conference: new FormControl<string | null | undefined>(undefined),
			plays: new FormControl<number | null | undefined>(undefined),
			scoring: new FormControl<boolean | null | undefined>(undefined),
			start_defense_score: new FormControl<number | null | undefined>(undefined),
			start_offense_score: new FormControl<number | null | undefined>(undefined),
			start_period: new FormControl<number | null | undefined>(undefined),
			start_yardline: new FormControl<number | null | undefined>(undefined),
			start_yards_to_goal: new FormControl<number | null | undefined>(undefined),
			yards: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DriveEnd_time {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds?: number | null;
	}
	export interface DriveEnd_timeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateDriveEnd_timeFormGroup() {
		return new FormGroup<DriveEnd_timeFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DriveStart_time {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds?: number | null;
	}
	export interface DriveStart_timeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateDriveStart_timeFormGroup() {
		return new FormGroup<DriveStart_timeFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Game {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attendance?: number | null;
		away_conference?: string | null;
		away_division?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_id?: number | null;
		away_line_scores?: Array<number>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_points?: number | null;

		/** Type: double */
		away_post_win_prob?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_postgame_elo?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_pregame_elo?: number | null;
		away_team?: string | null;
		completed?: boolean | null;
		conference_game?: boolean | null;

		/** Type: double */
		excitement_index?: number | null;
		highlights?: string | null;
		home_conference?: string | null;
		home_division?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_id?: number | null;
		home_line_scores?: Array<number>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_points?: number | null;

		/** Type: double */
		home_post_win_prob?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_postgame_elo?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_pregame_elo?: number | null;
		home_team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		neutral_site?: boolean | null;
		notes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		season_type?: string | null;
		start_date?: string | null;
		start_time_tbd?: boolean | null;
		venue?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		venue_id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface GameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attendance: FormControl<number | null | undefined>,
		away_conference: FormControl<string | null | undefined>,
		away_division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_points: FormControl<number | null | undefined>,

		/** Type: double */
		away_post_win_prob: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_postgame_elo: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		away_pregame_elo: FormControl<number | null | undefined>,
		away_team: FormControl<string | null | undefined>,
		completed: FormControl<boolean | null | undefined>,
		conference_game: FormControl<boolean | null | undefined>,

		/** Type: double */
		excitement_index: FormControl<number | null | undefined>,
		highlights: FormControl<string | null | undefined>,
		home_conference: FormControl<string | null | undefined>,
		home_division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_points: FormControl<number | null | undefined>,

		/** Type: double */
		home_post_win_prob: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_postgame_elo: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		home_pregame_elo: FormControl<number | null | undefined>,
		home_team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		neutral_site: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		season_type: FormControl<string | null | undefined>,
		start_date: FormControl<string | null | undefined>,
		start_time_tbd: FormControl<boolean | null | undefined>,
		venue: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		venue_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			attendance: new FormControl<number | null | undefined>(undefined),
			away_conference: new FormControl<string | null | undefined>(undefined),
			away_division: new FormControl<string | null | undefined>(undefined),
			away_id: new FormControl<number | null | undefined>(undefined),
			away_points: new FormControl<number | null | undefined>(undefined),
			away_post_win_prob: new FormControl<number | null | undefined>(undefined),
			away_postgame_elo: new FormControl<number | null | undefined>(undefined),
			away_pregame_elo: new FormControl<number | null | undefined>(undefined),
			away_team: new FormControl<string | null | undefined>(undefined),
			completed: new FormControl<boolean | null | undefined>(undefined),
			conference_game: new FormControl<boolean | null | undefined>(undefined),
			excitement_index: new FormControl<number | null | undefined>(undefined),
			highlights: new FormControl<string | null | undefined>(undefined),
			home_conference: new FormControl<string | null | undefined>(undefined),
			home_division: new FormControl<string | null | undefined>(undefined),
			home_id: new FormControl<number | null | undefined>(undefined),
			home_points: new FormControl<number | null | undefined>(undefined),
			home_post_win_prob: new FormControl<number | null | undefined>(undefined),
			home_postgame_elo: new FormControl<number | null | undefined>(undefined),
			home_pregame_elo: new FormControl<number | null | undefined>(undefined),
			home_team: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			neutral_site: new FormControl<boolean | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			season_type: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
			start_time_tbd: new FormControl<boolean | null | undefined>(undefined),
			venue: new FormControl<string | null | undefined>(undefined),
			venue_id: new FormControl<number | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GameLines {
		awayConference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore?: number | null;
		awayTeam?: string | null;
		homeConference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore?: number | null;
		homeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		GameLinesLines?: Array<GameLinesLines>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		seasonType?: string | null;
		startDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface GameLinesFormProperties {
		awayConference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore: FormControl<number | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,
		homeConference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore: FormControl<number | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreateGameLinesFormGroup() {
		return new FormGroup<GameLinesFormProperties>({
			awayConference: new FormControl<string | null | undefined>(undefined),
			awayScore: new FormControl<number | null | undefined>(undefined),
			awayTeam: new FormControl<string | null | undefined>(undefined),
			homeConference: new FormControl<string | null | undefined>(undefined),
			homeScore: new FormControl<number | null | undefined>(undefined),
			homeTeam: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			seasonType: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GameLinesLines {

		/** Type: double */
		awayMoneyline?: number | null;
		formattedSpread?: string | null;

		/** Type: double */
		homeMoneyline?: number | null;

		/** Type: double */
		overUnder?: number | null;

		/** Type: double */
		overUnderOpen?: number | null;
		provider?: string | null;

		/** Type: double */
		spread?: number | null;

		/** Type: double */
		spreadOpen?: number | null;
	}
	export interface GameLinesLinesFormProperties {

		/** Type: double */
		awayMoneyline: FormControl<number | null | undefined>,
		formattedSpread: FormControl<string | null | undefined>,

		/** Type: double */
		homeMoneyline: FormControl<number | null | undefined>,

		/** Type: double */
		overUnder: FormControl<number | null | undefined>,

		/** Type: double */
		overUnderOpen: FormControl<number | null | undefined>,
		provider: FormControl<string | null | undefined>,

		/** Type: double */
		spread: FormControl<number | null | undefined>,

		/** Type: double */
		spreadOpen: FormControl<number | null | undefined>,
	}
	export function CreateGameLinesLinesFormGroup() {
		return new FormGroup<GameLinesLinesFormProperties>({
			awayMoneyline: new FormControl<number | null | undefined>(undefined),
			formattedSpread: new FormControl<string | null | undefined>(undefined),
			homeMoneyline: new FormControl<number | null | undefined>(undefined),
			overUnder: new FormControl<number | null | undefined>(undefined),
			overUnderOpen: new FormControl<number | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			spread: new FormControl<number | null | undefined>(undefined),
			spreadOpen: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GameMedia {
		awayConference?: string | null;
		awayTeam?: string | null;
		homeConference?: string | null;
		homeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isStartTimeTBD?: boolean | null;
		mediaType?: string | null;
		outlet?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		seasonType?: string | null;
		startTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface GameMediaFormProperties {
		awayConference: FormControl<string | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,
		homeConference: FormControl<string | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isStartTimeTBD: FormControl<boolean | null | undefined>,
		mediaType: FormControl<string | null | undefined>,
		outlet: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreateGameMediaFormGroup() {
		return new FormGroup<GameMediaFormProperties>({
			awayConference: new FormControl<string | null | undefined>(undefined),
			awayTeam: new FormControl<string | null | undefined>(undefined),
			homeConference: new FormControl<string | null | undefined>(undefined),
			homeTeam: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isStartTimeTBD: new FormControl<boolean | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			outlet: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			seasonType: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GamePPA {
		conference?: string | null;
		defense?: GamePPADefense;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId?: number | null;
		offense?: GamePPAOffense;
		opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface GamePPAFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId: FormControl<number | null | undefined>,
		opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreateGamePPAFormGroup() {
		return new FormGroup<GamePPAFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			gameId: new FormControl<number | null | undefined>(undefined),
			opponent: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GamePPADefense {

		/** Type: double */
		firstDown?: number | null;

		/** Type: double */
		overall?: number | null;

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		secondDown?: number | null;

		/** Type: double */
		thirdDown?: number | null;
	}
	export interface GamePPADefenseFormProperties {

		/** Type: double */
		firstDown: FormControl<number | null | undefined>,

		/** Type: double */
		overall: FormControl<number | null | undefined>,

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		secondDown: FormControl<number | null | undefined>,

		/** Type: double */
		thirdDown: FormControl<number | null | undefined>,
	}
	export function CreateGamePPADefenseFormGroup() {
		return new FormGroup<GamePPADefenseFormProperties>({
			firstDown: new FormControl<number | null | undefined>(undefined),
			overall: new FormControl<number | null | undefined>(undefined),
			passing: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			secondDown: new FormControl<number | null | undefined>(undefined),
			thirdDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GamePPAOffense {

		/** Type: double */
		firstDown?: number | null;

		/** Type: double */
		overall?: number | null;

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		secondDown?: number | null;

		/** Type: double */
		thirdDown?: number | null;
	}
	export interface GamePPAOffenseFormProperties {

		/** Type: double */
		firstDown: FormControl<number | null | undefined>,

		/** Type: double */
		overall: FormControl<number | null | undefined>,

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		secondDown: FormControl<number | null | undefined>,

		/** Type: double */
		thirdDown: FormControl<number | null | undefined>,
	}
	export function CreateGamePPAOffenseFormGroup() {
		return new FormGroup<GamePPAOffenseFormProperties>({
			firstDown: new FormControl<number | null | undefined>(undefined),
			overall: new FormControl<number | null | undefined>(undefined),
			passing: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			secondDown: new FormControl<number | null | undefined>(undefined),
			thirdDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GameWeather {
		awayConference?: string | null;
		awayTeam?: string | null;

		/** Type: double */
		dewPoint?: number | null;
		gameIndoors?: boolean | null;
		homeConference?: string | null;
		homeTeam?: string | null;

		/** Type: double */
		humidity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: double */
		precipitation?: number | null;

		/** Type: double */
		pressure?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		seasonType?: string | null;

		/** Type: double */
		snowfall?: number | null;
		startTime?: string | null;

		/** Type: double */
		temperature?: number | null;
		venue?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		venueId?: number | null;
		weatherCondition?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weatherConditionCode?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;

		/** Type: double */
		windDirection?: number | null;

		/** Type: double */
		windSpeed?: number | null;
	}
	export interface GameWeatherFormProperties {
		awayConference: FormControl<string | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,

		/** Type: double */
		dewPoint: FormControl<number | null | undefined>,
		gameIndoors: FormControl<boolean | null | undefined>,
		homeConference: FormControl<string | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,

		/** Type: double */
		humidity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: double */
		precipitation: FormControl<number | null | undefined>,

		/** Type: double */
		pressure: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,

		/** Type: double */
		snowfall: FormControl<number | null | undefined>,
		startTime: FormControl<string | null | undefined>,

		/** Type: double */
		temperature: FormControl<number | null | undefined>,
		venue: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		venueId: FormControl<number | null | undefined>,
		weatherCondition: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weatherConditionCode: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,

		/** Type: double */
		windDirection: FormControl<number | null | undefined>,

		/** Type: double */
		windSpeed: FormControl<number | null | undefined>,
	}
	export function CreateGameWeatherFormGroup() {
		return new FormGroup<GameWeatherFormProperties>({
			awayConference: new FormControl<string | null | undefined>(undefined),
			awayTeam: new FormControl<string | null | undefined>(undefined),
			dewPoint: new FormControl<number | null | undefined>(undefined),
			gameIndoors: new FormControl<boolean | null | undefined>(undefined),
			homeConference: new FormControl<string | null | undefined>(undefined),
			homeTeam: new FormControl<string | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			precipitation: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			seasonType: new FormControl<string | null | undefined>(undefined),
			snowfall: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			venue: new FormControl<string | null | undefined>(undefined),
			venueId: new FormControl<number | null | undefined>(undefined),
			weatherCondition: new FormControl<string | null | undefined>(undefined),
			weatherConditionCode: new FormControl<number | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
			windDirection: new FormControl<number | null | undefined>(undefined),
			windSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LivePlayByPlay {
		clock?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down?: number | null;
		LivePlayByPlayDrives?: Array<LivePlayByPlayDrives>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period?: number | null;
		possession?: string | null;
		status?: string | null;
		LivePlayByPlayTeams?: Array<LivePlayByPlayTeams>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsToGoal?: number | null;
	}
	export interface LivePlayByPlayFormProperties {
		clock: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period: FormControl<number | null | undefined>,
		possession: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsToGoal: FormControl<number | null | undefined>,
	}
	export function CreateLivePlayByPlayFormGroup() {
		return new FormGroup<LivePlayByPlayFormProperties>({
			clock: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			down: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			possession: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			yardsToGoal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LivePlayByPlayDrives {
		defense?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defenseId?: number | null;
		duration?: string | null;
		endClock?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endPeriod?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endYardsToGoal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		offense?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offenseId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playCount?: number | null;
		LivePlayByPlayDrivesPlays?: Array<LivePlayByPlayDrivesPlays>;
		scoringOpportunity?: boolean | null;
		startClock?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startPeriod?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startYardsToGoal?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards?: number | null;
	}
	export interface LivePlayByPlayDrivesFormProperties {
		defense: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defenseId: FormControl<number | null | undefined>,
		duration: FormControl<string | null | undefined>,
		endClock: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endPeriod: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endYardsToGoal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		offense: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offenseId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playCount: FormControl<number | null | undefined>,
		scoringOpportunity: FormControl<boolean | null | undefined>,
		startClock: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startPeriod: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startYardsToGoal: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards: FormControl<number | null | undefined>,
	}
	export function CreateLivePlayByPlayDrivesFormGroup() {
		return new FormGroup<LivePlayByPlayDrivesFormProperties>({
			defense: new FormControl<string | null | undefined>(undefined),
			defenseId: new FormControl<number | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			endClock: new FormControl<string | null | undefined>(undefined),
			endPeriod: new FormControl<number | null | undefined>(undefined),
			endYardsToGoal: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			offense: new FormControl<string | null | undefined>(undefined),
			offenseId: new FormControl<number | null | undefined>(undefined),
			playCount: new FormControl<number | null | undefined>(undefined),
			scoringOpportunity: new FormControl<boolean | null | undefined>(undefined),
			startClock: new FormControl<string | null | undefined>(undefined),
			startPeriod: new FormControl<number | null | undefined>(undefined),
			startYardsToGoal: new FormControl<number | null | undefined>(undefined),
			yards: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LivePlayByPlayDrivesPlays {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore?: number | null;
		clock?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down?: number | null;
		downType?: string | null;

		/** Type: double */
		epa?: number | null;
		garbageTime?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period?: number | null;
		playText?: string | null;
		playType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playTypeId?: number | null;
		rushPass?: string | null;
		success?: boolean | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teamId?: number | null;
		wallclock?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsGained?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsToGoal?: number | null;
	}
	export interface LivePlayByPlayDrivesPlaysFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore: FormControl<number | null | undefined>,
		clock: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down: FormControl<number | null | undefined>,
		downType: FormControl<string | null | undefined>,

		/** Type: double */
		epa: FormControl<number | null | undefined>,
		garbageTime: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period: FormControl<number | null | undefined>,
		playText: FormControl<string | null | undefined>,
		playType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playTypeId: FormControl<number | null | undefined>,
		rushPass: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teamId: FormControl<number | null | undefined>,
		wallclock: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsGained: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsToGoal: FormControl<number | null | undefined>,
	}
	export function CreateLivePlayByPlayDrivesPlaysFormGroup() {
		return new FormGroup<LivePlayByPlayDrivesPlaysFormProperties>({
			awayScore: new FormControl<number | null | undefined>(undefined),
			clock: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			down: new FormControl<number | null | undefined>(undefined),
			downType: new FormControl<string | null | undefined>(undefined),
			epa: new FormControl<number | null | undefined>(undefined),
			garbageTime: new FormControl<boolean | null | undefined>(undefined),
			homeScore: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			playText: new FormControl<string | null | undefined>(undefined),
			playType: new FormControl<string | null | undefined>(undefined),
			playTypeId: new FormControl<number | null | undefined>(undefined),
			rushPass: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<number | null | undefined>(undefined),
			wallclock: new FormControl<string | null | undefined>(undefined),
			yardsGained: new FormControl<number | null | undefined>(undefined),
			yardsToGoal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LivePlayByPlayTeams {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives?: number | null;

		/** Type: double */
		epaPerPass?: number | null;

		/** Type: double */
		epaPerPlay?: number | null;

		/** Type: double */
		epaPerRush?: number | null;

		/** Type: double */
		explosiveness?: number | null;
		homeAway?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lineYards?: number | null;

		/** Type: double */
		lineYardsPerRush?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYards?: number | null;

		/** Type: double */
		openFieldYardsPerRush?: number | null;

		/** Type: double */
		passingDownSuccessRate?: number | null;

		/** Type: double */
		passingEpa?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points?: number | null;

		/** Type: double */
		pointsPerOpportunity?: number | null;

		/** Type: double */
		rushingEpa?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		scoringOpportunities?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYards?: number | null;

		/** Type: double */
		secondLevelYardsPerRush?: number | null;

		/** Type: double */
		standardDownSuccessRate?: number | null;

		/** Type: double */
		successRate?: number | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teamId?: number | null;

		/** Type: double */
		totalEpa?: number | null;
	}
	export interface LivePlayByPlayTeamsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drives: FormControl<number | null | undefined>,

		/** Type: double */
		epaPerPass: FormControl<number | null | undefined>,

		/** Type: double */
		epaPerPlay: FormControl<number | null | undefined>,

		/** Type: double */
		epaPerRush: FormControl<number | null | undefined>,

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,
		homeAway: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lineYards: FormControl<number | null | undefined>,

		/** Type: double */
		lineYardsPerRush: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		openFieldYards: FormControl<number | null | undefined>,

		/** Type: double */
		openFieldYardsPerRush: FormControl<number | null | undefined>,

		/** Type: double */
		passingDownSuccessRate: FormControl<number | null | undefined>,

		/** Type: double */
		passingEpa: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		plays: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points: FormControl<number | null | undefined>,

		/** Type: double */
		pointsPerOpportunity: FormControl<number | null | undefined>,

		/** Type: double */
		rushingEpa: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		scoringOpportunities: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondLevelYards: FormControl<number | null | undefined>,

		/** Type: double */
		secondLevelYardsPerRush: FormControl<number | null | undefined>,

		/** Type: double */
		standardDownSuccessRate: FormControl<number | null | undefined>,

		/** Type: double */
		successRate: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teamId: FormControl<number | null | undefined>,

		/** Type: double */
		totalEpa: FormControl<number | null | undefined>,
	}
	export function CreateLivePlayByPlayTeamsFormGroup() {
		return new FormGroup<LivePlayByPlayTeamsFormProperties>({
			drives: new FormControl<number | null | undefined>(undefined),
			epaPerPass: new FormControl<number | null | undefined>(undefined),
			epaPerPlay: new FormControl<number | null | undefined>(undefined),
			epaPerRush: new FormControl<number | null | undefined>(undefined),
			explosiveness: new FormControl<number | null | undefined>(undefined),
			homeAway: new FormControl<string | null | undefined>(undefined),
			lineYards: new FormControl<number | null | undefined>(undefined),
			lineYardsPerRush: new FormControl<number | null | undefined>(undefined),
			openFieldYards: new FormControl<number | null | undefined>(undefined),
			openFieldYardsPerRush: new FormControl<number | null | undefined>(undefined),
			passingDownSuccessRate: new FormControl<number | null | undefined>(undefined),
			passingEpa: new FormControl<number | null | undefined>(undefined),
			plays: new FormControl<number | null | undefined>(undefined),
			points: new FormControl<number | null | undefined>(undefined),
			pointsPerOpportunity: new FormControl<number | null | undefined>(undefined),
			rushingEpa: new FormControl<number | null | undefined>(undefined),
			scoringOpportunities: new FormControl<number | null | undefined>(undefined),
			secondLevelYards: new FormControl<number | null | undefined>(undefined),
			secondLevelYardsPerRush: new FormControl<number | null | undefined>(undefined),
			standardDownSuccessRate: new FormControl<number | null | undefined>(undefined),
			successRate: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<number | null | undefined>(undefined),
			totalEpa: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Play {
		away?: string | null;
		clock?: PlayClock;
		defense?: string | null;
		defense_conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defense_score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defense_timeouts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drive_id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drive_number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		game_id?: number | null;
		home?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		offense?: string | null;
		offense_conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offense_score?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offense_timeouts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		play_number?: number | null;
		play_text?: string | null;
		play_type?: string | null;

		/** Type: double */
		ppa?: number | null;
		scoring?: boolean | null;
		wallclock?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yard_line?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards_gained?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards_to_goal?: number | null;
	}
	export interface PlayFormProperties {
		away: FormControl<string | null | undefined>,
		defense: FormControl<string | null | undefined>,
		defense_conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defense_score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		defense_timeouts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drive_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		drive_number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		game_id: FormControl<number | null | undefined>,
		home: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		offense: FormControl<string | null | undefined>,
		offense_conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offense_score: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offense_timeouts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		play_number: FormControl<number | null | undefined>,
		play_text: FormControl<string | null | undefined>,
		play_type: FormControl<string | null | undefined>,

		/** Type: double */
		ppa: FormControl<number | null | undefined>,
		scoring: FormControl<boolean | null | undefined>,
		wallclock: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yard_line: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards_gained: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yards_to_goal: FormControl<number | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			away: new FormControl<string | null | undefined>(undefined),
			defense: new FormControl<string | null | undefined>(undefined),
			defense_conference: new FormControl<string | null | undefined>(undefined),
			defense_score: new FormControl<number | null | undefined>(undefined),
			defense_timeouts: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			down: new FormControl<number | null | undefined>(undefined),
			drive_id: new FormControl<number | null | undefined>(undefined),
			drive_number: new FormControl<number | null | undefined>(undefined),
			game_id: new FormControl<number | null | undefined>(undefined),
			home: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			offense: new FormControl<string | null | undefined>(undefined),
			offense_conference: new FormControl<string | null | undefined>(undefined),
			offense_score: new FormControl<number | null | undefined>(undefined),
			offense_timeouts: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			play_number: new FormControl<number | null | undefined>(undefined),
			play_text: new FormControl<string | null | undefined>(undefined),
			play_type: new FormControl<string | null | undefined>(undefined),
			ppa: new FormControl<number | null | undefined>(undefined),
			scoring: new FormControl<boolean | null | undefined>(undefined),
			wallclock: new FormControl<string | null | undefined>(undefined),
			yard_line: new FormControl<number | null | undefined>(undefined),
			yards_gained: new FormControl<number | null | undefined>(undefined),
			yards_to_goal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayClock {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds?: number | null;
	}
	export interface PlayClockFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreatePlayClockFormGroup() {
		return new FormGroup<PlayClockFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayStat {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		athleteId?: number | null;
		athleteName?: string | null;
		clock?: PlayStatClock;
		conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		driveId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId?: number | null;
		opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		opponentScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		stat?: number | null;
		statType?: string | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teamScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsToGoal?: number | null;
	}
	export interface PlayStatFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		athleteId: FormControl<number | null | undefined>,
		athleteName: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		driveId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId: FormControl<number | null | undefined>,
		opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		opponentScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		stat: FormControl<number | null | undefined>,
		statType: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		teamScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardsToGoal: FormControl<number | null | undefined>,
	}
	export function CreatePlayStatFormGroup() {
		return new FormGroup<PlayStatFormProperties>({
			athleteId: new FormControl<number | null | undefined>(undefined),
			athleteName: new FormControl<string | null | undefined>(undefined),
			conference: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			down: new FormControl<number | null | undefined>(undefined),
			driveId: new FormControl<number | null | undefined>(undefined),
			gameId: new FormControl<number | null | undefined>(undefined),
			opponent: new FormControl<string | null | undefined>(undefined),
			opponentScore: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			playId: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			stat: new FormControl<number | null | undefined>(undefined),
			statType: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			teamScore: new FormControl<number | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
			yardsToGoal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayStatClock {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds?: number | null;
	}
	export interface PlayStatClockFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreatePlayStatClockFormGroup() {
		return new FormGroup<PlayStatClockFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayStatType {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface PlayStatTypeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlayStatTypeFormGroup() {
		return new FormGroup<PlayStatTypeFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayType {
		abbreviation?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		text?: string | null;
	}
	export interface PlayTypeFormProperties {
		abbreviation: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreatePlayTypeFormGroup() {
		return new FormGroup<PlayTypeFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayWP {
		away?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gamesId?: number | null;
		home?: string | null;
		homeBall?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore?: number | null;

		/** Type: double */
		homeWinProb?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playNumber?: number | null;
		playText?: string | null;

		/** Type: double */
		spread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timeRemaining?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardLine?: number | null;
	}
	export interface PlayWPFormProperties {
		away: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		down: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gamesId: FormControl<number | null | undefined>,
		home: FormControl<string | null | undefined>,
		homeBall: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore: FormControl<number | null | undefined>,

		/** Type: double */
		homeWinProb: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playNumber: FormControl<number | null | undefined>,
		playText: FormControl<string | null | undefined>,

		/** Type: double */
		spread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timeRemaining: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardLine: FormControl<number | null | undefined>,
	}
	export function CreatePlayWPFormGroup() {
		return new FormGroup<PlayWPFormProperties>({
			away: new FormControl<string | null | undefined>(undefined),
			awayId: new FormControl<number | null | undefined>(undefined),
			awayScore: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			down: new FormControl<number | null | undefined>(undefined),
			gamesId: new FormControl<number | null | undefined>(undefined),
			home: new FormControl<string | null | undefined>(undefined),
			homeBall: new FormControl<boolean | null | undefined>(undefined),
			homeId: new FormControl<number | null | undefined>(undefined),
			homeScore: new FormControl<number | null | undefined>(undefined),
			homeWinProb: new FormControl<number | null | undefined>(undefined),
			playId: new FormControl<number | null | undefined>(undefined),
			playNumber: new FormControl<number | null | undefined>(undefined),
			playText: new FormControl<string | null | undefined>(undefined),
			spread: new FormControl<number | null | undefined>(undefined),
			timeRemaining: new FormControl<number | null | undefined>(undefined),
			yardLine: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Player {
		first_name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		home_city?: string | null;
		home_country?: string | null;
		home_county_fips?: string | null;

		/** Type: double */
		home_latitude?: number | null;

		/** Type: double */
		home_longitude?: number | null;
		home_state?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		jersey?: number | null;
		last_name?: string | null;
		position?: string | null;
		recruit_ids?: Array<number>;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface PlayerFormProperties {
		first_name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		home_city: FormControl<string | null | undefined>,
		home_country: FormControl<string | null | undefined>,
		home_county_fips: FormControl<string | null | undefined>,

		/** Type: double */
		home_latitude: FormControl<number | null | undefined>,

		/** Type: double */
		home_longitude: FormControl<number | null | undefined>,
		home_state: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		jersey: FormControl<number | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			home_city: new FormControl<string | null | undefined>(undefined),
			home_country: new FormControl<string | null | undefined>(undefined),
			home_county_fips: new FormControl<string | null | undefined>(undefined),
			home_latitude: new FormControl<number | null | undefined>(undefined),
			home_longitude: new FormControl<number | null | undefined>(undefined),
			home_state: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			jersey: new FormControl<number | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGame {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		PlayerGameTeams?: Array<PlayerGameTeams>;
	}
	export interface PlayerGameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameFormGroup() {
		return new FormGroup<PlayerGameFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGameTeams {
		PlayerGameTeamsCategories?: Array<PlayerGameTeamsCategories>;
		homeAway?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points?: number | null;
		school?: PlayerGameTeamsSchool;
	}
	export interface PlayerGameTeamsFormProperties {
		homeAway: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameTeamsFormGroup() {
		return new FormGroup<PlayerGameTeamsFormProperties>({
			homeAway: new FormControl<boolean | null | undefined>(undefined),
			points: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGameTeamsCategories {
		name?: string | null;
		PlayerGameTeamsCategoriesTypes?: Array<PlayerGameTeamsCategoriesTypes>;
	}
	export interface PlayerGameTeamsCategoriesFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlayerGameTeamsCategoriesFormGroup() {
		return new FormGroup<PlayerGameTeamsCategoriesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerGameTeamsCategoriesTypes {
		PlayerGameTeamsCategoriesTypesAthletes?: Array<PlayerGameTeamsCategoriesTypesAthletes>;
		name?: string | null;
	}
	export interface PlayerGameTeamsCategoriesTypesFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlayerGameTeamsCategoriesTypesFormGroup() {
		return new FormGroup<PlayerGameTeamsCategoriesTypesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerGameTeamsCategoriesTypesAthletes {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		stat?: string | null;
	}
	export interface PlayerGameTeamsCategoriesTypesAthletesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		stat: FormControl<string | null | undefined>,
	}
	export function CreatePlayerGameTeamsCategoriesTypesAthletesFormGroup() {
		return new FormGroup<PlayerGameTeamsCategoriesTypesAthletesFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerGameTeamsSchool {
		conference?: string | null;
		name?: string | null;
	}
	export interface PlayerGameTeamsSchoolFormProperties {
		conference: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlayerGameTeamsSchoolFormGroup() {
		return new FormGroup<PlayerGameTeamsSchoolFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerGamePPA {
		averagePPA?: PlayerGamePPAAveragePPA;
		name?: string | null;
		opponent?: string | null;
		position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface PlayerGamePPAFormProperties {
		name: FormControl<string | null | undefined>,
		opponent: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGamePPAFormGroup() {
		return new FormGroup<PlayerGamePPAFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			opponent: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGamePPAAveragePPA {

		/** Type: double */
		all?: number | null;

		/** Type: double */
		pass?: number | null;

		/** Type: double */
		rush?: number | null;
	}
	export interface PlayerGamePPAAveragePPAFormProperties {

		/** Type: double */
		all: FormControl<number | null | undefined>,

		/** Type: double */
		pass: FormControl<number | null | undefined>,

		/** Type: double */
		rush: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGamePPAAveragePPAFormGroup() {
		return new FormGroup<PlayerGamePPAAveragePPAFormProperties>({
			all: new FormControl<number | null | undefined>(undefined),
			pass: new FormControl<number | null | undefined>(undefined),
			rush: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSearchResult {
		firstName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		hometown?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		jersey?: number | null;
		lastName?: string | null;
		name?: string | null;
		position?: string | null;
		team?: string | null;
		teamColor?: string | null;
		teamColorSecondary?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight?: number | null;
	}
	export interface PlayerSearchResultFormProperties {
		firstName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		hometown: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		jersey: FormControl<number | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,
		teamColor: FormControl<string | null | undefined>,
		teamColorSecondary: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreatePlayerSearchResultFormGroup() {
		return new FormGroup<PlayerSearchResultFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			hometown: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			jersey: new FormControl<number | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			teamColor: new FormControl<string | null | undefined>(undefined),
			teamColorSecondary: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSeasonPPA {
		averagePPA?: PlayerSeasonPPAAveragePPA;
		conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;
		totalPPA?: PlayerSeasonPPATotalPPA;
	}
	export interface PlayerSeasonPPAFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreatePlayerSeasonPPAFormGroup() {
		return new FormGroup<PlayerSeasonPPAFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerSeasonPPAAveragePPA {

		/** Type: double */
		all?: number | null;

		/** Type: double */
		firstDown?: number | null;

		/** Type: double */
		pass?: number | null;

		/** Type: double */
		passingDowns?: number | null;

		/** Type: double */
		rush?: number | null;

		/** Type: double */
		secondDown?: number | null;

		/** Type: double */
		standardDowns?: number | null;

		/** Type: double */
		thirdDown?: number | null;
	}
	export interface PlayerSeasonPPAAveragePPAFormProperties {

		/** Type: double */
		all: FormControl<number | null | undefined>,

		/** Type: double */
		firstDown: FormControl<number | null | undefined>,

		/** Type: double */
		pass: FormControl<number | null | undefined>,

		/** Type: double */
		passingDowns: FormControl<number | null | undefined>,

		/** Type: double */
		rush: FormControl<number | null | undefined>,

		/** Type: double */
		secondDown: FormControl<number | null | undefined>,

		/** Type: double */
		standardDowns: FormControl<number | null | undefined>,

		/** Type: double */
		thirdDown: FormControl<number | null | undefined>,
	}
	export function CreatePlayerSeasonPPAAveragePPAFormGroup() {
		return new FormGroup<PlayerSeasonPPAAveragePPAFormProperties>({
			all: new FormControl<number | null | undefined>(undefined),
			firstDown: new FormControl<number | null | undefined>(undefined),
			pass: new FormControl<number | null | undefined>(undefined),
			passingDowns: new FormControl<number | null | undefined>(undefined),
			rush: new FormControl<number | null | undefined>(undefined),
			secondDown: new FormControl<number | null | undefined>(undefined),
			standardDowns: new FormControl<number | null | undefined>(undefined),
			thirdDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSeasonPPATotalPPA {

		/** Type: double */
		all?: number | null;

		/** Type: double */
		firstDown?: number | null;

		/** Type: double */
		pass?: number | null;

		/** Type: double */
		passingDowns?: number | null;

		/** Type: double */
		rush?: number | null;

		/** Type: double */
		secondDown?: number | null;

		/** Type: double */
		standardDowns?: number | null;

		/** Type: double */
		thirdDown?: number | null;
	}
	export interface PlayerSeasonPPATotalPPAFormProperties {

		/** Type: double */
		all: FormControl<number | null | undefined>,

		/** Type: double */
		firstDown: FormControl<number | null | undefined>,

		/** Type: double */
		pass: FormControl<number | null | undefined>,

		/** Type: double */
		passingDowns: FormControl<number | null | undefined>,

		/** Type: double */
		rush: FormControl<number | null | undefined>,

		/** Type: double */
		secondDown: FormControl<number | null | undefined>,

		/** Type: double */
		standardDowns: FormControl<number | null | undefined>,

		/** Type: double */
		thirdDown: FormControl<number | null | undefined>,
	}
	export function CreatePlayerSeasonPPATotalPPAFormGroup() {
		return new FormGroup<PlayerSeasonPPATotalPPAFormProperties>({
			all: new FormControl<number | null | undefined>(undefined),
			firstDown: new FormControl<number | null | undefined>(undefined),
			pass: new FormControl<number | null | undefined>(undefined),
			passingDowns: new FormControl<number | null | undefined>(undefined),
			rush: new FormControl<number | null | undefined>(undefined),
			secondDown: new FormControl<number | null | undefined>(undefined),
			standardDowns: new FormControl<number | null | undefined>(undefined),
			thirdDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerSeasonStat {
		category?: string | null;
		conference?: string | null;
		player?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playerId?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;

		/** Type: double */
		stat?: number | null;
		statType?: string | null;
		team?: string | null;
	}
	export interface PlayerSeasonStatFormProperties {
		category: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,
		player: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		playerId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,

		/** Type: double */
		stat: FormControl<number | null | undefined>,
		statType: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreatePlayerSeasonStatFormGroup() {
		return new FormGroup<PlayerSeasonStatFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			conference: new FormControl<string | null | undefined>(undefined),
			player: new FormControl<string | null | undefined>(undefined),
			playerId: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			stat: new FormControl<number | null | undefined>(undefined),
			statType: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerUsage {
		conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;
		usage?: PlayerUsageUsage;
	}
	export interface PlayerUsageFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreatePlayerUsageFormGroup() {
		return new FormGroup<PlayerUsageFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerUsageUsage {

		/** Type: double */
		firstDown?: number | null;

		/** Type: double */
		overall?: number | null;

		/** Type: double */
		pass?: number | null;

		/** Type: double */
		passingDowns?: number | null;

		/** Type: double */
		rush?: number | null;

		/** Type: double */
		secondDown?: number | null;

		/** Type: double */
		standardDowns?: number | null;

		/** Type: double */
		thirdDown?: number | null;
	}
	export interface PlayerUsageUsageFormProperties {

		/** Type: double */
		firstDown: FormControl<number | null | undefined>,

		/** Type: double */
		overall: FormControl<number | null | undefined>,

		/** Type: double */
		pass: FormControl<number | null | undefined>,

		/** Type: double */
		passingDowns: FormControl<number | null | undefined>,

		/** Type: double */
		rush: FormControl<number | null | undefined>,

		/** Type: double */
		secondDown: FormControl<number | null | undefined>,

		/** Type: double */
		standardDowns: FormControl<number | null | undefined>,

		/** Type: double */
		thirdDown: FormControl<number | null | undefined>,
	}
	export function CreatePlayerUsageUsageFormGroup() {
		return new FormGroup<PlayerUsageUsageFormProperties>({
			firstDown: new FormControl<number | null | undefined>(undefined),
			overall: new FormControl<number | null | undefined>(undefined),
			pass: new FormControl<number | null | undefined>(undefined),
			passingDowns: new FormControl<number | null | undefined>(undefined),
			rush: new FormControl<number | null | undefined>(undefined),
			secondDown: new FormControl<number | null | undefined>(undefined),
			standardDowns: new FormControl<number | null | undefined>(undefined),
			thirdDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PortalPlayer {
		destination?: string | null;
		eligibility?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		origin?: string | null;
		position?: string | null;

		/** Type: double */
		rating?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		stars?: number | null;
		transferDate?: string | null;
	}
	export interface PortalPlayerFormProperties {
		destination: FormControl<string | null | undefined>,
		eligibility: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		stars: FormControl<number | null | undefined>,
		transferDate: FormControl<string | null | undefined>,
	}
	export function CreatePortalPlayerFormGroup() {
		return new FormGroup<PortalPlayerFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			eligibility: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			stars: new FormControl<number | null | undefined>(undefined),
			transferDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PositionGroupRecruitingRating {

		/** Type: double */
		averageRating?: number | null;

		/** Type: double */
		averageStars?: number | null;

		/** Type: double */
		commits?: number | null;
		conference?: string | null;
		positionGroup?: string | null;
		team?: string | null;

		/** Type: double */
		totalRating?: number | null;
	}
	export interface PositionGroupRecruitingRatingFormProperties {

		/** Type: double */
		averageRating: FormControl<number | null | undefined>,

		/** Type: double */
		averageStars: FormControl<number | null | undefined>,

		/** Type: double */
		commits: FormControl<number | null | undefined>,
		conference: FormControl<string | null | undefined>,
		positionGroup: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: double */
		totalRating: FormControl<number | null | undefined>,
	}
	export function CreatePositionGroupRecruitingRatingFormGroup() {
		return new FormGroup<PositionGroupRecruitingRatingFormProperties>({
			averageRating: new FormControl<number | null | undefined>(undefined),
			averageStars: new FormControl<number | null | undefined>(undefined),
			commits: new FormControl<number | null | undefined>(undefined),
			conference: new FormControl<string | null | undefined>(undefined),
			positionGroup: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			totalRating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PredictedPoints {

		/** Type: double */
		predictedPoints?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardLine?: number | null;
	}
	export interface PredictedPointsFormProperties {

		/** Type: double */
		predictedPoints: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		yardLine: FormControl<number | null | undefined>,
	}
	export function CreatePredictedPointsFormGroup() {
		return new FormGroup<PredictedPointsFormProperties>({
			predictedPoints: new FormControl<number | null | undefined>(undefined),
			yardLine: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PregameWP {
		awayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId?: number | null;
		homeTeam?: string | null;

		/** Type: double */
		homeWinProb?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		seasonType?: string | null;

		/** Type: double */
		spread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface PregameWPFormProperties {
		awayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gameId: FormControl<number | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,

		/** Type: double */
		homeWinProb: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,

		/** Type: double */
		spread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreatePregameWPFormGroup() {
		return new FormGroup<PregameWPFormProperties>({
			awayTeam: new FormControl<string | null | undefined>(undefined),
			gameId: new FormControl<number | null | undefined>(undefined),
			homeTeam: new FormControl<string | null | undefined>(undefined),
			homeWinProb: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			seasonType: new FormControl<string | null | undefined>(undefined),
			spread: new FormControl<number | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RankingWeek {
		RankingWeekPolls?: Array<RankingWeekPolls>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		seasonType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface RankingWeekFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreateRankingWeekFormGroup() {
		return new FormGroup<RankingWeekFormProperties>({
			season: new FormControl<number | null | undefined>(undefined),
			seasonType: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RankingWeekPolls {
		poll?: string | null;
		RankingWeekPollsRanks?: Array<RankingWeekPollsRanks>;
	}
	export interface RankingWeekPollsFormProperties {
		poll: FormControl<string | null | undefined>,
	}
	export function CreateRankingWeekPollsFormGroup() {
		return new FormGroup<RankingWeekPollsFormProperties>({
			poll: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RankingWeekPollsRanks {
		conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		firstPlaceVotes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
		school?: string | null;
	}
	export interface RankingWeekPollsRanksFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		firstPlaceVotes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
		school: FormControl<string | null | undefined>,
	}
	export function CreateRankingWeekPollsRanksFormGroup() {
		return new FormGroup<RankingWeekPollsRanksFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			firstPlaceVotes: new FormControl<number | null | undefined>(undefined),
			points: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Recruit {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		athleteId?: number | null;
		city?: string | null;
		committedTo?: string | null;
		country?: string | null;

		/** Type: double */
		height?: number | null;
		hometownInfo?: RecruitHometownInfo;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
		position?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ranking?: number | null;

		/** Type: double */
		rating?: number | null;
		recruitType?: string | null;
		school?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		stars?: number | null;
		stateProvince?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface RecruitFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		athleteId: FormControl<number | null | undefined>,
		city: FormControl<string | null | undefined>,
		committedTo: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Type: double */
		height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ranking: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,
		recruitType: FormControl<string | null | undefined>,
		school: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		stars: FormControl<number | null | undefined>,
		stateProvince: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		weight: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateRecruitFormGroup() {
		return new FormGroup<RecruitFormProperties>({
			athleteId: new FormControl<number | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			committedTo: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			ranking: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			recruitType: new FormControl<string | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			stars: new FormControl<number | null | undefined>(undefined),
			stateProvince: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RecruitHometownInfo {
		countyFips?: string | null;

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
	}
	export interface RecruitHometownInfoFormProperties {
		countyFips: FormControl<string | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateRecruitHometownInfoFormGroup() {
		return new FormGroup<RecruitHometownInfoFormProperties>({
			countyFips: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReturningProduction {
		conference?: string | null;

		/** Type: double */
		passingUsage?: number | null;

		/** Type: double */
		percentPPA?: number | null;

		/** Type: double */
		percentPassingPPA?: number | null;

		/** Type: double */
		percentReceivingPPA?: number | null;

		/** Type: double */
		percentRushingPPA?: number | null;

		/** Type: double */
		receivingUsage?: number | null;

		/** Type: double */
		rushingUsage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;

		/** Type: double */
		totalPPA?: number | null;

		/** Type: double */
		totalPassingPPA?: number | null;

		/** Type: double */
		totalReceivingPPA?: number | null;

		/** Type: double */
		totalRushingPPA?: number | null;

		/** Type: double */
		usage?: number | null;
	}
	export interface ReturningProductionFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: double */
		passingUsage: FormControl<number | null | undefined>,

		/** Type: double */
		percentPPA: FormControl<number | null | undefined>,

		/** Type: double */
		percentPassingPPA: FormControl<number | null | undefined>,

		/** Type: double */
		percentReceivingPPA: FormControl<number | null | undefined>,

		/** Type: double */
		percentRushingPPA: FormControl<number | null | undefined>,

		/** Type: double */
		receivingUsage: FormControl<number | null | undefined>,

		/** Type: double */
		rushingUsage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: double */
		totalPPA: FormControl<number | null | undefined>,

		/** Type: double */
		totalPassingPPA: FormControl<number | null | undefined>,

		/** Type: double */
		totalReceivingPPA: FormControl<number | null | undefined>,

		/** Type: double */
		totalRushingPPA: FormControl<number | null | undefined>,

		/** Type: double */
		usage: FormControl<number | null | undefined>,
	}
	export function CreateReturningProductionFormGroup() {
		return new FormGroup<ReturningProductionFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			passingUsage: new FormControl<number | null | undefined>(undefined),
			percentPPA: new FormControl<number | null | undefined>(undefined),
			percentPassingPPA: new FormControl<number | null | undefined>(undefined),
			percentReceivingPPA: new FormControl<number | null | undefined>(undefined),
			percentRushingPPA: new FormControl<number | null | undefined>(undefined),
			receivingUsage: new FormControl<number | null | undefined>(undefined),
			rushingUsage: new FormControl<number | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			totalPPA: new FormControl<number | null | undefined>(undefined),
			totalPassingPPA: new FormControl<number | null | undefined>(undefined),
			totalReceivingPPA: new FormControl<number | null | undefined>(undefined),
			totalRushingPPA: new FormControl<number | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoreboardGame {
		awayTeam?: ScoreboardGameAwayTeam;
		betting?: ScoreboardGameBetting;
		clock?: string | null;
		conferenceGame?: boolean | null;
		homeTeam?: ScoreboardGameHomeTeam;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		neutralSite?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period?: number | null;
		possession?: string | null;
		situation?: string | null;
		startDate?: string | null;
		startTimeTBD?: boolean | null;
		status?: string | null;
		tv?: string | null;
		venue?: ScoreboardGameVenue;
		weather?: ScoreboardGameWeather;
	}
	export interface ScoreboardGameFormProperties {
		clock: FormControl<string | null | undefined>,
		conferenceGame: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		neutralSite: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		period: FormControl<number | null | undefined>,
		possession: FormControl<string | null | undefined>,
		situation: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		startTimeTBD: FormControl<boolean | null | undefined>,
		status: FormControl<string | null | undefined>,
		tv: FormControl<string | null | undefined>,
	}
	export function CreateScoreboardGameFormGroup() {
		return new FormGroup<ScoreboardGameFormProperties>({
			clock: new FormControl<string | null | undefined>(undefined),
			conferenceGame: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			neutralSite: new FormControl<boolean | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			possession: new FormControl<string | null | undefined>(undefined),
			situation: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startTimeTBD: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			tv: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoreboardGameAwayTeam {
		classification?: string | null;
		conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points?: number | null;
	}
	export interface ScoreboardGameAwayTeamFormProperties {
		classification: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points: FormControl<number | null | undefined>,
	}
	export function CreateScoreboardGameAwayTeamFormGroup() {
		return new FormGroup<ScoreboardGameAwayTeamFormProperties>({
			classification: new FormControl<string | null | undefined>(undefined),
			conference: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			points: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoreboardGameBetting {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayMoneyline?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeMoneyline?: number | null;

		/** Type: double */
		overUnder?: number | null;

		/** Type: double */
		spread?: number | null;
	}
	export interface ScoreboardGameBettingFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayMoneyline: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeMoneyline: FormControl<number | null | undefined>,

		/** Type: double */
		overUnder: FormControl<number | null | undefined>,

		/** Type: double */
		spread: FormControl<number | null | undefined>,
	}
	export function CreateScoreboardGameBettingFormGroup() {
		return new FormGroup<ScoreboardGameBettingFormProperties>({
			awayMoneyline: new FormControl<number | null | undefined>(undefined),
			homeMoneyline: new FormControl<number | null | undefined>(undefined),
			overUnder: new FormControl<number | null | undefined>(undefined),
			spread: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoreboardGameHomeTeam {
		classification?: string | null;
		conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points?: number | null;
	}
	export interface ScoreboardGameHomeTeamFormProperties {
		classification: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points: FormControl<number | null | undefined>,
	}
	export function CreateScoreboardGameHomeTeamFormGroup() {
		return new FormGroup<ScoreboardGameHomeTeamFormProperties>({
			classification: new FormControl<string | null | undefined>(undefined),
			conference: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			points: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoreboardGameVenue {
		city?: string | null;
		name?: string | null;
		state?: string | null;
	}
	export interface ScoreboardGameVenueFormProperties {
		city: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateScoreboardGameVenueFormGroup() {
		return new FormGroup<ScoreboardGameVenueFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoreboardGameWeather {
		description?: string | null;

		/** Type: double */
		temperature?: number | null;

		/** Type: double */
		windDirection?: number | null;

		/** Type: double */
		windSpeed?: number | null;
	}
	export interface ScoreboardGameWeatherFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: double */
		temperature: FormControl<number | null | undefined>,

		/** Type: double */
		windDirection: FormControl<number | null | undefined>,

		/** Type: double */
		windSpeed: FormControl<number | null | undefined>,
	}
	export function CreateScoreboardGameWeatherFormGroup() {
		return new FormGroup<ScoreboardGameWeatherFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			windDirection: new FormControl<number | null | undefined>(undefined),
			windSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		abbreviation?: string | null;
		alt_color?: string | null;
		alt_name_1?: string | null;
		alt_name_2?: string | null;
		alt_name_3?: string | null;
		classification?: string | null;
		color?: string | null;
		conference?: string | null;
		division?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		location?: TeamLocation;
		logos?: Array<string>;
		mascot?: string | null;
		school?: string | null;
		twitter?: string | null;
	}
	export interface TeamFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		alt_color: FormControl<string | null | undefined>,
		alt_name_1: FormControl<string | null | undefined>,
		alt_name_2: FormControl<string | null | undefined>,
		alt_name_3: FormControl<string | null | undefined>,
		classification: FormControl<string | null | undefined>,
		color: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,
		division: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		mascot: FormControl<string | null | undefined>,
		school: FormControl<string | null | undefined>,
		twitter: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			alt_color: new FormControl<string | null | undefined>(undefined),
			alt_name_1: new FormControl<string | null | undefined>(undefined),
			alt_name_2: new FormControl<string | null | undefined>(undefined),
			alt_name_3: new FormControl<string | null | undefined>(undefined),
			classification: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			conference: new FormControl<string | null | undefined>(undefined),
			division: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			mascot: new FormControl<string | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamLocation {

		/** Type: double */
		capacity?: number | null;
		city?: string | null;
		country_code?: string | null;
		dome?: boolean | null;

		/** Type: double */
		elevation?: number | null;
		grass?: boolean | null;

		/** Type: double */
		latitude?: number | null;

		/** Type: double */
		longitude?: number | null;
		name?: string | null;
		state?: string | null;
		timezone?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		venue_id?: number | null;

		/** Type: double */
		year_constructed?: number | null;
		zip?: string | null;
	}
	export interface TeamLocationFormProperties {

		/** Type: double */
		capacity: FormControl<number | null | undefined>,
		city: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		dome: FormControl<boolean | null | undefined>,

		/** Type: double */
		elevation: FormControl<number | null | undefined>,
		grass: FormControl<boolean | null | undefined>,

		/** Type: double */
		latitude: FormControl<number | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		venue_id: FormControl<number | null | undefined>,

		/** Type: double */
		year_constructed: FormControl<number | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateTeamLocationFormGroup() {
		return new FormGroup<TeamLocationFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			dome: new FormControl<boolean | null | undefined>(undefined),
			elevation: new FormControl<number | null | undefined>(undefined),
			grass: new FormControl<boolean | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			venue_id: new FormControl<number | null | undefined>(undefined),
			year_constructed: new FormControl<number | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamEloRating {
		conference?: string | null;

		/** Type: double */
		elo?: number | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface TeamEloRatingFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: double */
		elo: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateTeamEloRatingFormGroup() {
		return new FormGroup<TeamEloRatingFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			elo: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamGame {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		TeamGameTeams?: Array<TeamGameTeams>;
	}
	export interface TeamGameFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamGameTeams {
		conference?: string | null;
		homeAway?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points?: number | null;
		school?: string | null;
		TeamGameTeamsStats?: Array<TeamGameTeamsStats>;
	}
	export interface TeamGameTeamsFormProperties {
		conference: FormControl<string | null | undefined>,
		homeAway: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		points: FormControl<number | null | undefined>,
		school: FormControl<string | null | undefined>,
	}
	export function CreateTeamGameTeamsFormGroup() {
		return new FormGroup<TeamGameTeamsFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			homeAway: new FormControl<string | null | undefined>(undefined),
			points: new FormControl<number | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamGameTeamsStats {
		category?: string | null;
		stat?: string | null;
	}
	export interface TeamGameTeamsStatsFormProperties {
		category: FormControl<string | null | undefined>,
		stat: FormControl<string | null | undefined>,
	}
	export function CreateTeamGameTeamsStatsFormGroup() {
		return new FormGroup<TeamGameTeamsStatsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			stat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamMatchup {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endYear?: number | null;
		TeamMatchupGames?: Array<TeamMatchupGames>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startYear?: number | null;
		team1?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		team1Wins?: number | null;
		team2?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		team2Wins?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties?: number | null;
	}
	export interface TeamMatchupFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endYear: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startYear: FormControl<number | null | undefined>,
		team1: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		team1Wins: FormControl<number | null | undefined>,
		team2: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		team2Wins: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties: FormControl<number | null | undefined>,
	}
	export function CreateTeamMatchupFormGroup() {
		return new FormGroup<TeamMatchupFormProperties>({
			endYear: new FormControl<number | null | undefined>(undefined),
			startYear: new FormControl<number | null | undefined>(undefined),
			team1: new FormControl<string | null | undefined>(undefined),
			team1Wins: new FormControl<number | null | undefined>(undefined),
			team2: new FormControl<string | null | undefined>(undefined),
			team2Wins: new FormControl<number | null | undefined>(undefined),
			ties: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamMatchupGames {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore?: number | null;
		awayTeam?: string | null;
		date?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore?: number | null;
		homeTeam?: string | null;
		neutralSite?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		season_type?: string | null;
		venue?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
		winner?: string | null;
	}
	export interface TeamMatchupGamesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		awayScore: FormControl<number | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		homeScore: FormControl<number | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,
		neutralSite: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		season_type: FormControl<string | null | undefined>,
		venue: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
		winner: FormControl<string | null | undefined>,
	}
	export function CreateTeamMatchupGamesFormGroup() {
		return new FormGroup<TeamMatchupGamesFormProperties>({
			awayScore: new FormControl<number | null | undefined>(undefined),
			awayTeam: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			homeScore: new FormControl<number | null | undefined>(undefined),
			homeTeam: new FormControl<string | null | undefined>(undefined),
			neutralSite: new FormControl<boolean | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			season_type: new FormControl<string | null | undefined>(undefined),
			venue: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
			winner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamPPA {
		conference?: string | null;
		defense?: TeamPPADefense;
		offense?: TeamPPAOffense;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		team?: string | null;
	}
	export interface TeamPPAFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateTeamPPAFormGroup() {
		return new FormGroup<TeamPPAFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamPPADefense {
		cumulative?: TeamPPADefenseCumulative;

		/** Type: double */
		firstDown?: number | null;

		/** Type: double */
		overall?: number | null;

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		secondDown?: number | null;

		/** Type: double */
		thirdDown?: number | null;
	}
	export interface TeamPPADefenseFormProperties {

		/** Type: double */
		firstDown: FormControl<number | null | undefined>,

		/** Type: double */
		overall: FormControl<number | null | undefined>,

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		secondDown: FormControl<number | null | undefined>,

		/** Type: double */
		thirdDown: FormControl<number | null | undefined>,
	}
	export function CreateTeamPPADefenseFormGroup() {
		return new FormGroup<TeamPPADefenseFormProperties>({
			firstDown: new FormControl<number | null | undefined>(undefined),
			overall: new FormControl<number | null | undefined>(undefined),
			passing: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			secondDown: new FormControl<number | null | undefined>(undefined),
			thirdDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamPPADefenseCumulative {

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface TeamPPADefenseCumulativeFormProperties {

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTeamPPADefenseCumulativeFormGroup() {
		return new FormGroup<TeamPPADefenseCumulativeFormProperties>({
			passing: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamPPAOffense {
		cumulative?: TeamPPAOffenseCumulative;

		/** Type: double */
		firstDown?: number | null;

		/** Type: double */
		overall?: number | null;

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		secondDown?: number | null;

		/** Type: double */
		thirdDown?: number | null;
	}
	export interface TeamPPAOffenseFormProperties {

		/** Type: double */
		firstDown: FormControl<number | null | undefined>,

		/** Type: double */
		overall: FormControl<number | null | undefined>,

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		secondDown: FormControl<number | null | undefined>,

		/** Type: double */
		thirdDown: FormControl<number | null | undefined>,
	}
	export function CreateTeamPPAOffenseFormGroup() {
		return new FormGroup<TeamPPAOffenseFormProperties>({
			firstDown: new FormControl<number | null | undefined>(undefined),
			overall: new FormControl<number | null | undefined>(undefined),
			passing: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			secondDown: new FormControl<number | null | undefined>(undefined),
			thirdDown: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamPPAOffenseCumulative {

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface TeamPPAOffenseCumulativeFormProperties {

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTeamPPAOffenseCumulativeFormGroup() {
		return new FormGroup<TeamPPAOffenseCumulativeFormProperties>({
			passing: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamRecord {
		awayGames?: TeamRecordAwayGames;
		conference?: string | null;
		conferenceGames?: TeamRecordConferenceGames;
		division?: string | null;

		/** Type: double */
		expectedWins?: number | null;
		homeGames?: TeamRecordHomeGames;
		team?: string | null;
		total?: TeamRecordTotal;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface TeamRecordFormProperties {
		conference: FormControl<string | null | undefined>,
		division: FormControl<string | null | undefined>,

		/** Type: double */
		expectedWins: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateTeamRecordFormGroup() {
		return new FormGroup<TeamRecordFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			division: new FormControl<string | null | undefined>(undefined),
			expectedWins: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamRecordAwayGames {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins?: number | null;
	}
	export interface TeamRecordAwayGamesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamRecordAwayGamesFormGroup() {
		return new FormGroup<TeamRecordAwayGamesFormProperties>({
			games: new FormControl<number | null | undefined>(undefined),
			losses: new FormControl<number | null | undefined>(undefined),
			ties: new FormControl<number | null | undefined>(undefined),
			wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamRecordConferenceGames {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins?: number | null;
	}
	export interface TeamRecordConferenceGamesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamRecordConferenceGamesFormGroup() {
		return new FormGroup<TeamRecordConferenceGamesFormProperties>({
			games: new FormControl<number | null | undefined>(undefined),
			losses: new FormControl<number | null | undefined>(undefined),
			ties: new FormControl<number | null | undefined>(undefined),
			wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamRecordHomeGames {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins?: number | null;
	}
	export interface TeamRecordHomeGamesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamRecordHomeGamesFormGroup() {
		return new FormGroup<TeamRecordHomeGamesFormProperties>({
			games: new FormControl<number | null | undefined>(undefined),
			losses: new FormControl<number | null | undefined>(undefined),
			ties: new FormControl<number | null | undefined>(undefined),
			wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamRecordTotal {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins?: number | null;
	}
	export interface TeamRecordTotalFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamRecordTotalFormGroup() {
		return new FormGroup<TeamRecordTotalFormProperties>({
			games: new FormControl<number | null | undefined>(undefined),
			losses: new FormControl<number | null | undefined>(undefined),
			ties: new FormControl<number | null | undefined>(undefined),
			wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamRecruitingRank {

		/** Type: double */
		points?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface TeamRecruitingRankFormProperties {

		/** Type: double */
		points: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateTeamRecruitingRankFormGroup() {
		return new FormGroup<TeamRecruitingRankFormProperties>({
			points: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSPRating {
		conference?: string | null;
		defense?: TeamSPRatingDefense;
		offense?: TeamSPRatingOffense;

		/** Type: double */
		ranking?: number | null;

		/** Type: double */
		rating?: number | null;

		/** Type: double */
		secondOrderWins?: number | null;

		/** Type: double */
		sos?: number | null;
		specialTeams?: TeamSPRatingSpecialTeams;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface TeamSPRatingFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: double */
		ranking: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Type: double */
		secondOrderWins: FormControl<number | null | undefined>,

		/** Type: double */
		sos: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateTeamSPRatingFormGroup() {
		return new FormGroup<TeamSPRatingFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			ranking: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			secondOrderWins: new FormControl<number | null | undefined>(undefined),
			sos: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSPRatingDefense {

		/** Type: double */
		explosiveness?: number | null;
		havoc?: TeamSPRatingDefenseHavoc;

		/** Type: double */
		pasing?: number | null;

		/** Type: double */
		passingDowns?: number | null;

		/** Type: double */
		ranking?: number | null;

		/** Type: double */
		rating?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		standardDowns?: number | null;

		/** Type: double */
		success?: number | null;
	}
	export interface TeamSPRatingDefenseFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		pasing: FormControl<number | null | undefined>,

		/** Type: double */
		passingDowns: FormControl<number | null | undefined>,

		/** Type: double */
		ranking: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		standardDowns: FormControl<number | null | undefined>,

		/** Type: double */
		success: FormControl<number | null | undefined>,
	}
	export function CreateTeamSPRatingDefenseFormGroup() {
		return new FormGroup<TeamSPRatingDefenseFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			pasing: new FormControl<number | null | undefined>(undefined),
			passingDowns: new FormControl<number | null | undefined>(undefined),
			ranking: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			standardDowns: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSPRatingDefenseHavoc {

		/** Type: double */
		db?: number | null;

		/** Type: double */
		frontSeven?: number | null;

		/** Type: double */
		total?: number | null;
	}
	export interface TeamSPRatingDefenseHavocFormProperties {

		/** Type: double */
		db: FormControl<number | null | undefined>,

		/** Type: double */
		frontSeven: FormControl<number | null | undefined>,

		/** Type: double */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTeamSPRatingDefenseHavocFormGroup() {
		return new FormGroup<TeamSPRatingDefenseHavocFormProperties>({
			db: new FormControl<number | null | undefined>(undefined),
			frontSeven: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSPRatingOffense {

		/** Type: double */
		explosiveness?: number | null;

		/** Type: double */
		pace?: number | null;

		/** Type: double */
		passing?: number | null;

		/** Type: double */
		passingDowns?: number | null;

		/** Type: double */
		ranking?: number | null;

		/** Type: double */
		rating?: number | null;

		/** Type: double */
		runRate?: number | null;

		/** Type: double */
		rushing?: number | null;

		/** Type: double */
		standardDowns?: number | null;

		/** Type: double */
		success?: number | null;
	}
	export interface TeamSPRatingOffenseFormProperties {

		/** Type: double */
		explosiveness: FormControl<number | null | undefined>,

		/** Type: double */
		pace: FormControl<number | null | undefined>,

		/** Type: double */
		passing: FormControl<number | null | undefined>,

		/** Type: double */
		passingDowns: FormControl<number | null | undefined>,

		/** Type: double */
		ranking: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,

		/** Type: double */
		runRate: FormControl<number | null | undefined>,

		/** Type: double */
		rushing: FormControl<number | null | undefined>,

		/** Type: double */
		standardDowns: FormControl<number | null | undefined>,

		/** Type: double */
		success: FormControl<number | null | undefined>,
	}
	export function CreateTeamSPRatingOffenseFormGroup() {
		return new FormGroup<TeamSPRatingOffenseFormProperties>({
			explosiveness: new FormControl<number | null | undefined>(undefined),
			pace: new FormControl<number | null | undefined>(undefined),
			passing: new FormControl<number | null | undefined>(undefined),
			passingDowns: new FormControl<number | null | undefined>(undefined),
			ranking: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			runRate: new FormControl<number | null | undefined>(undefined),
			rushing: new FormControl<number | null | undefined>(undefined),
			standardDowns: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSPRatingSpecialTeams {

		/** Type: double */
		rating?: number | null;
	}
	export interface TeamSPRatingSpecialTeamsFormProperties {

		/** Type: double */
		rating: FormControl<number | null | undefined>,
	}
	export function CreateTeamSPRatingSpecialTeamsFormGroup() {
		return new FormGroup<TeamSPRatingSpecialTeamsFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSRSRating {
		conference?: string | null;
		division?: string | null;

		/** Type: double */
		ranking?: number | null;

		/** Type: double */
		rating?: number | null;
		team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface TeamSRSRatingFormProperties {
		conference: FormControl<string | null | undefined>,
		division: FormControl<string | null | undefined>,

		/** Type: double */
		ranking: FormControl<number | null | undefined>,

		/** Type: double */
		rating: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateTeamSRSRatingFormGroup() {
		return new FormGroup<TeamSRSRatingFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			division: new FormControl<string | null | undefined>(undefined),
			ranking: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses?: number | null;

		/**
		 * Final ranking in the AP poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postseason_rank?: number | null;

		/**
		 * Rank in the AP preseason poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preseason_rank?: number | null;
		school?: string | null;

		/**
		 * Final SP+ defensive rating
		 * Type: double
		 */
		sp_defense?: number | null;

		/**
		 * Final SP+ offensive rating
		 * Type: double
		 */
		sp_offense?: number | null;

		/**
		 * Final overall SP+ rating
		 * Type: double
		 */
		sp_overall?: number | null;

		/**
		 * Final SRS rankings
		 * Type: double
		 */
		srs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins?: number | null;
		year?: string | null;
	}
	export interface TeamSeasonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		games: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		losses: FormControl<number | null | undefined>,

		/**
		 * Final ranking in the AP poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		postseason_rank: FormControl<number | null | undefined>,

		/**
		 * Rank in the AP preseason poll
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preseason_rank: FormControl<number | null | undefined>,
		school: FormControl<string | null | undefined>,

		/**
		 * Final SP+ defensive rating
		 * Type: double
		 */
		sp_defense: FormControl<number | null | undefined>,

		/**
		 * Final SP+ offensive rating
		 * Type: double
		 */
		sp_offense: FormControl<number | null | undefined>,

		/**
		 * Final overall SP+ rating
		 * Type: double
		 */
		sp_overall: FormControl<number | null | undefined>,

		/**
		 * Final SRS rankings
		 * Type: double
		 */
		srs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wins: FormControl<number | null | undefined>,
		year: FormControl<string | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			games: new FormControl<number | null | undefined>(undefined),
			losses: new FormControl<number | null | undefined>(undefined),
			postseason_rank: new FormControl<number | null | undefined>(undefined),
			preseason_rank: new FormControl<number | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			sp_defense: new FormControl<number | null | undefined>(undefined),
			sp_offense: new FormControl<number | null | undefined>(undefined),
			sp_overall: new FormControl<number | null | undefined>(undefined),
			srs: new FormControl<number | null | undefined>(undefined),
			ties: new FormControl<number | null | undefined>(undefined),
			wins: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamSeasonStat {
		conference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		statName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statValue?: number | null;
		team?: string | null;
	}
	export interface TeamSeasonStatFormProperties {
		conference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		statName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		statValue: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
	}
	export function CreateTeamSeasonStatFormGroup() {
		return new FormGroup<TeamSeasonStatFormProperties>({
			conference: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			statName: new FormControl<string | null | undefined>(undefined),
			statValue: new FormControl<number | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamTalent {
		school?: string | null;

		/** Type: double */
		talent?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface TeamTalentFormProperties {
		school: FormControl<string | null | undefined>,

		/** Type: double */
		talent: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateTeamTalentFormGroup() {
		return new FormGroup<TeamTalentFormProperties>({
			school: new FormControl<string | null | undefined>(undefined),
			talent: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Venue {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity?: number | null;
		city?: string | null;
		country_code?: string | null;
		dome?: boolean | null;

		/** Type: double */
		elevation?: number | null;
		grass?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		location?: VenueLocation;
		name?: string | null;
		state?: string | null;
		timezone?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year_constructed?: number | null;
		zip?: string | null;
	}
	export interface VenueFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		capacity: FormControl<number | null | undefined>,
		city: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		dome: FormControl<boolean | null | undefined>,

		/** Type: double */
		elevation: FormControl<number | null | undefined>,
		grass: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year_constructed: FormControl<number | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateVenueFormGroup() {
		return new FormGroup<VenueFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			dome: new FormControl<boolean | null | undefined>(undefined),
			elevation: new FormControl<number | null | undefined>(undefined),
			grass: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			year_constructed: new FormControl<number | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VenueLocation {

		/** Type: double */
		x?: number | null;

		/** Type: double */
		y?: number | null;
	}
	export interface VenueLocationFormProperties {

		/** Type: double */
		x: FormControl<number | null | undefined>,

		/** Type: double */
		y: FormControl<number | null | undefined>,
	}
	export function CreateVenueLocationFormGroup() {
		return new FormGroup<VenueLocationFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Week {
		firstGameStart?: string | null;
		lastGameStart?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season?: number | null;
		seasonType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week?: number | null;
	}
	export interface WeekFormProperties {
		firstGameStart: FormControl<string | null | undefined>,
		lastGameStart: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		week: FormControl<number | null | undefined>,
	}
	export function CreateWeekFormGroup() {
		return new FormGroup<WeekFormProperties>({
			firstGameStart: new FormControl<string | null | undefined>(undefined),
			lastGameStart: new FormControl<string | null | undefined>(undefined),
			season: new FormControl<number | null | undefined>(undefined),
			seasonType: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Season calendar
		 * Get calendar of weeks by season
		 * Get calendar
		 * @param {number} year Year filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Week>} successful operation
		 */
		GetCalendar(year: number): Observable<Array<Week>> {
			return this.http.get<Array<Week>>(this.baseUri + 'calendar?year=' + year, {});
		}

		/**
		 * Coaching records and history
		 * Coaching history
		 * Get coaches
		 * @param {string} firstName First name filter
		 * @param {string} lastName Last name filter
		 * @param {string} team Team name filter
		 * @param {number} year Year filter
		 *     Minimum: 1869
		 * @param {number} minYear Minimum year filter (inclusive)
		 *     Minimum: 1869
		 * @param {number} maxYear Maximum year filter (inclusive)
		 *     Minimum: 1869
		 * @return {Array<Coach>} successful operation
		 */
		GetCoaches(firstName: string | null | undefined, lastName: string | null | undefined, team: string | null | undefined, year: number | null | undefined, minYear: number | null | undefined, maxYear: number | null | undefined): Observable<Array<Coach>> {
			return this.http.get<Array<Coach>>(this.baseUri + 'coaches?firstName=' + (firstName == null ? '' : encodeURIComponent(firstName)) + '&lastName=' + (lastName == null ? '' : encodeURIComponent(lastName)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&year=' + year + '&minYear=' + minYear + '&maxYear=' + maxYear, {});
		}

		/**
		 * Conferences
		 * Get conference list
		 * Get conferences
		 * @return {Array<Conference>} successful operation
		 */
		GetConferences(): Observable<Array<Conference>> {
			return this.http.get<Array<Conference>>(this.baseUri + 'conferences', {});
		}

		/**
		 * List of NFL Draft picks
		 * List of NFL Draft picks
		 * Get draft/picks
		 * @param {number} year Year filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} nflTeam NFL team filter
		 * @param {string} college Player college filter
		 * @param {string} conference College confrence abbreviation filter
		 * @param {string} position NFL position filter
		 * @return {Array<DraftPick>} successful operation
		 */
		GetDraftPicks(year: number | null | undefined, nflTeam: string | null | undefined, college: string | null | undefined, conference: string | null | undefined, position: string | null | undefined): Observable<Array<DraftPick>> {
			return this.http.get<Array<DraftPick>>(this.baseUri + 'draft/picks?year=' + year + '&nflTeam=' + (nflTeam == null ? '' : encodeURIComponent(nflTeam)) + '&college=' + (college == null ? '' : encodeURIComponent(college)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&position=' + (position == null ? '' : encodeURIComponent(position)), {});
		}

		/**
		 * List of NFL positions
		 * List of NFL positions
		 * Get draft/positions
		 * @return {Array<DraftPosition>} successful operation
		 */
		GetNFLPositions(): Observable<Array<DraftPosition>> {
			return this.http.get<Array<DraftPosition>>(this.baseUri + 'draft/positions', {});
		}

		/**
		 * List of NFL teams
		 * List of NFL teams
		 * Get draft/teams
		 * @return {Array<DraftTeam>} successful operation
		 */
		GetNFLTeams(): Observable<Array<DraftTeam>> {
			return this.http.get<Array<DraftTeam>>(this.baseUri + 'draft/teams', {});
		}

		/**
		 * Drive data and results
		 * Get game drives
		 * Get drives
		 * @param {string} seasonType Season type filter
		 * @param {number} year Year filter
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} team Team filter
		 * @param {string} offense Offensive team filter
		 * @param {string} defense Defensive team filter
		 * @param {string} conference Conference filter
		 * @param {string} offenseConference Offensive conference filter
		 * @param {string} defenseConference Defensive conference filter
		 * @param {string} classification Division classification filter (fbs/fcs/ii/iii)
		 * @return {Array<Drive>} successful operation
		 */
		GetDrives(seasonType: string | null | undefined, year: number, week: number | null | undefined, team: string | null | undefined, offense: string | null | undefined, defense: string | null | undefined, conference: string | null | undefined, offenseConference: string | null | undefined, defenseConference: string | null | undefined, classification: string | null | undefined): Observable<Array<Drive>> {
			return this.http.get<Array<Drive>>(this.baseUri + 'drives?seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&offense=' + (offense == null ? '' : encodeURIComponent(offense)) + '&defense=' + (defense == null ? '' : encodeURIComponent(defense)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&offenseConference=' + (offenseConference == null ? '' : encodeURIComponent(offenseConference)) + '&defenseConference=' + (defenseConference == null ? '' : encodeURIComponent(defenseConference)) + '&classification=' + (classification == null ? '' : encodeURIComponent(classification)), {});
		}

		/**
		 * Advanced box scores
		 * Get advanced box score data
		 * Get game/box/advanced
		 * @param {number} gameId Game id parameters
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BoxScore} successful operation
		 */
		GetAdvancedBoxScore(gameId: number): Observable<BoxScore> {
			return this.http.get<BoxScore>(this.baseUri + 'game/box/advanced?gameId=' + gameId, {});
		}

		/**
		 * Games and results
		 * Get game results
		 * Get games
		 * @param {number} year Year/season filter for games
		 *     Minimum: 1869
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @param {string} team Team
		 * @param {string} home Home team filter
		 * @param {string} away Away team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} division Division classification filter (fbs/fcs/ii/iii)
		 * @param {number} id id filter for querying a single game
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Game>} successful operation
		 */
		GetGames(year: number, week: number | null | undefined, seasonType: string | null | undefined, team: string | null | undefined, home: string | null | undefined, away: string | null | undefined, conference: string | null | undefined, division: string | null | undefined, id: number | null | undefined): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + 'games?year=' + year + '&week=' + week + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&home=' + (home == null ? '' : encodeURIComponent(home)) + '&away=' + (away == null ? '' : encodeURIComponent(away)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&division=' + (division == null ? '' : encodeURIComponent(division)) + '&id=' + id, {});
		}

		/**
		 * Game media information and schedules
		 * Game media information (TV, radio, etc)
		 * Get games/media
		 * @param {number} year Year filter
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} seasonType Season type filter (regular, postseason, or both)
		 * @param {string} team Team filter
		 * @param {string} conference Conference filter
		 * @param {string} mediaType Media type filter (tv, radio, web, ppv, or mobile)
		 * @param {string} classification Division classification filter (fbs/fcs/ii/iii)
		 * @return {Array<GameMedia>} successful operation
		 */
		GetGameMedia(year: number, week: number | null | undefined, seasonType: string | null | undefined, team: string | null | undefined, conference: string | null | undefined, mediaType: string | null | undefined, classification: string | null | undefined): Observable<Array<GameMedia>> {
			return this.http.get<Array<GameMedia>>(this.baseUri + 'games/media?year=' + year + '&week=' + week + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&mediaType=' + (mediaType == null ? '' : encodeURIComponent(mediaType)) + '&classification=' + (classification == null ? '' : encodeURIComponent(classification)), {});
		}

		/**
		 * Player game stats
		 * Player stats broken down by game
		 * Get games/players
		 * @param {number} year Year/season filter for games
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} category Category filter (e.g defensive)
		 * @param {number} gameId Game id filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<PlayerGame>} successful operation
		 */
		GetPlayerGameStats(year: number, week: number | null | undefined, seasonType: string | null | undefined, team: string | null | undefined, conference: string | null | undefined, category: string | null | undefined, gameId: number | null | undefined): Observable<Array<PlayerGame>> {
			return this.http.get<Array<PlayerGame>>(this.baseUri + 'games/players?year=' + year + '&week=' + week + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&gameId=' + gameId, {});
		}

		/**
		 * Team game stats
		 * Team stats broken down by game
		 * Get games/teams
		 * @param {number} year Year/season filter for games
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {number} gameId Game id filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} classification Division classification filter (fbs/fcs/ii/iii)
		 * @return {Array<TeamGame>} successful operation
		 */
		GetTeamGameStats(year: number, week: number | null | undefined, seasonType: string | null | undefined, team: string | null | undefined, conference: string | null | undefined, gameId: number | null | undefined, classification: string | null | undefined): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + 'games/teams?year=' + year + '&week=' + week + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&gameId=' + gameId + '&classification=' + (classification == null ? '' : encodeURIComponent(classification)), {});
		}

		/**
		 * Game weather information (Patreon only)
		 * Weather information for the hour of kickoff
		 * Get games/weather
		 * @param {number} gameId Game id filter (required if no year)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} year Year filter (required if no game id)
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} seasonType Season type filter (regular, postseason, or both)
		 * @param {string} team Team filter
		 * @param {string} conference Conference filter
		 * @param {string} classification Division classification filter (fbs/fcs/ii/iii)
		 * @return {Array<GameWeather>} successful operation
		 */
		GetGameWeather(gameId: number | null | undefined, year: number | null | undefined, week: number | null | undefined, seasonType: string | null | undefined, team: string | null | undefined, conference: string | null | undefined, classification: string | null | undefined): Observable<Array<GameWeather>> {
			return this.http.get<Array<GameWeather>>(this.baseUri + 'games/weather?gameId=' + gameId + '&year=' + year + '&week=' + week + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&classification=' + (classification == null ? '' : encodeURIComponent(classification)), {});
		}

		/**
		 * Betting lines
		 * Closing betting lines
		 * Get lines
		 * @param {number} gameId Game id filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} year Year/season filter for games
		 *     Minimum: 2013
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @param {string} team Team
		 * @param {string} home Home team filter
		 * @param {string} away Away team filter
		 * @param {string} conference Conference abbreviation filter
		 * @return {Array<GameLines>} successful operation
		 */
		GetLines(gameId: number | null | undefined, year: number | null | undefined, week: number | null | undefined, seasonType: string | null | undefined, team: string | null | undefined, home: string | null | undefined, away: string | null | undefined, conference: string | null | undefined): Observable<Array<GameLines>> {
			return this.http.get<Array<GameLines>>(this.baseUri + 'lines?gameId=' + gameId + '&year=' + year + '&week=' + week + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&home=' + (home == null ? '' : encodeURIComponent(home)) + '&away=' + (away == null ? '' : encodeURIComponent(away)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Live metrics and PBP (Patreon only)
		 * Get live metrics and PBP
		 * Get live/plays
		 * @param {number} id Game id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {LivePlayByPlay} successful operation
		 */
		GetLivePlays(id: number): Observable<LivePlayByPlay> {
			return this.http.get<LivePlayByPlay>(this.baseUri + 'live/plays?id=' + id, {});
		}

		/**
		 * Win probability chart data
		 * Win probability data
		 * Get metrics/wp
		 * @param {number} gameId Game id filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<PlayWP>} successful operation
		 */
		GetWinProbabilityData(gameId: number): Observable<Array<PlayWP>> {
			return this.http.get<Array<PlayWP>>(this.baseUri + 'metrics/wp?gameId=' + gameId, {});
		}

		/**
		 * Pregame win probability data
		 * Pregame win probabilities
		 * Get metrics/wp/pregame
		 * @param {number} year Year filter
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} team Team filter
		 * @param {string} seasonType regular or postseason
		 * @return {Array<PregameWP>} successful operation
		 */
		GetPregameWinProbabilities(year: number | null | undefined, week: number | null | undefined, team: string | null | undefined, seasonType: string | null | undefined): Observable<Array<PregameWP>> {
			return this.http.get<Array<PregameWP>>(this.baseUri + 'metrics/wp/pregame?year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)), {});
		}

		/**
		 * Types of player play stats
		 * Type of play stats
		 * Get play/stat/types
		 * @return {Array<PlayStatType>} successful operation
		 */
		GetPlayStatTypes(): Observable<Array<PlayStatType>> {
			return this.http.get<Array<PlayStatType>>(this.baseUri + 'play/stat/types', {});
		}

		/**
		 * Play stats by play
		 * Gets player stats associated by play (limit 1000)
		 * Get play/stats
		 * @param {number} year Year filter
		 *     Minimum: 2013
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} team Team filter
		 * @param {number} gameId gameId filter (from /games endpoint)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} athleteId athleteId filter (from /roster endpoint)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} statTypeId statTypeId filter (from /play/stat/types endpoint)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} seasonType regular, postseason, or both
		 * @param {string} conference conference abbreviation filter
		 * @return {Array<PlayStat>} successful operation
		 */
		GetPlayStats(year: number | null | undefined, week: number | null | undefined, team: string | null | undefined, gameId: number | null | undefined, athleteId: number | null | undefined, statTypeId: number | null | undefined, seasonType: string | null | undefined, conference: string | null | undefined): Observable<Array<PlayStat>> {
			return this.http.get<Array<PlayStat>>(this.baseUri + 'play/stats?year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&gameId=' + gameId + '&athleteId=' + athleteId + '&statTypeId=' + statTypeId + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Play types
		 * Types of plays
		 * Get play/types
		 * @return {Array<PlayType>} successful operation
		 */
		GetPlayTypes(): Observable<Array<PlayType>> {
			return this.http.get<Array<PlayType>>(this.baseUri + 'play/types', {});
		}

		/**
		 * Transfer portal by season
		 * Transfer portal by season
		 * Get player/portal
		 * @param {number} year Year filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<PortalPlayer>} successful operation
		 */
		GetTransferPortal(year: number): Observable<Array<PortalPlayer>> {
			return this.http.get<Array<PortalPlayer>>(this.baseUri + 'player/portal?year=' + year, {});
		}

		/**
		 * Team returning production metrics
		 * Returning production metrics
		 * Get player/returning
		 * @param {number} year Year filter
		 *     Minimum: 2014
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @return {Array<ReturningProduction>} successful operation
		 */
		GetReturningProduction(year: number | null | undefined, team: string | null | undefined, conference: string | null | undefined): Observable<Array<ReturningProduction>> {
			return this.http.get<Array<ReturningProduction>>(this.baseUri + 'player/returning?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Search for player information
		 * Search for players
		 * Get player/search
		 * @param {string} searchTerm Term to search on
		 * @param {string} position Position abbreviation filter
		 * @param {string} team Team filter
		 * @param {number} year Year filter
		 *     Minimum: 2001
		 * @return {Array<PlayerSearchResult>} successful operation
		 */
		PlayerSearch(searchTerm: string, position: string | null | undefined, team: string | null | undefined, year: number | null | undefined): Observable<Array<PlayerSearchResult>> {
			return this.http.get<Array<PlayerSearchResult>>(this.baseUri + 'player/search?searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&year=' + year, {});
		}

		/**
		 * Player usage metrics broken down by season
		 * Player usage metrics by season
		 * Get player/usage
		 * @param {number} year Year filter
		 *     Minimum: 2013
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} position Position abbreviation filter
		 * @param {number} playerId Player id filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @return {Array<PlayerUsage>} successful operation
		 */
		GetPlayerUsage(year: number, team: string | null | undefined, conference: string | null | undefined, position: string | null | undefined, playerId: number | null | undefined, excludeGarbageTime: boolean | null | undefined): Observable<Array<PlayerUsage>> {
			return this.http.get<Array<PlayerUsage>>(this.baseUri + 'player/usage?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&playerId=' + playerId + '&excludeGarbageTime=' + excludeGarbageTime, {});
		}

		/**
		 * Play by play data
		 * Get play data and results
		 * Get plays
		 * @param {string} seasonType Season type filter
		 * @param {number} year Year filter
		 *     Minimum: 2001
		 * @param {number} week Week filter (required if team, offense, or defense, not specified)
		 *     Minimum: 1    Maximum: 16
		 * @param {string} team Team filter
		 * @param {string} offense Offensive team filter
		 * @param {string} defense Defensive team filter
		 * @param {string} conference Conference filter
		 * @param {string} offenseConference Offensive conference filter
		 * @param {string} defenseConference Defensive conference filter
		 * @param {number} playType Play type filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} classification Division classification filter (fbs/fcs/ii/iii)
		 * @return {Array<Play>} successful operation
		 */
		GetPlays(seasonType: string | null | undefined, year: number, week: number, team: string | null | undefined, offense: string | null | undefined, defense: string | null | undefined, conference: string | null | undefined, offenseConference: string | null | undefined, defenseConference: string | null | undefined, playType: number | null | undefined, classification: string | null | undefined): Observable<Array<Play>> {
			return this.http.get<Array<Play>>(this.baseUri + 'plays?seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&offense=' + (offense == null ? '' : encodeURIComponent(offense)) + '&defense=' + (defense == null ? '' : encodeURIComponent(defense)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&offenseConference=' + (offenseConference == null ? '' : encodeURIComponent(offenseConference)) + '&defenseConference=' + (defenseConference == null ? '' : encodeURIComponent(defenseConference)) + '&playType=' + playType + '&classification=' + (classification == null ? '' : encodeURIComponent(classification)), {});
		}

		/**
		 * Team Predicated Points Added (PPA/EPA) by game
		 * Predicted Points Added (PPA) by game
		 * Get ppa/games
		 * @param {number} year Year filter
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} team Team filter
		 * @param {string} conference Conference filter
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @return {Array<GamePPA>} successful operation
		 */
		GetGamePPA(year: number, week: number | null | undefined, team: string | null | undefined, conference: string | null | undefined, excludeGarbageTime: boolean | null | undefined, seasonType: string | null | undefined): Observable<Array<GamePPA>> {
			return this.http.get<Array<GamePPA>>(this.baseUri + 'ppa/games?year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&excludeGarbageTime=' + excludeGarbageTime + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)), {});
		}

		/**
		 * Player Predicated Points Added (PPA/EPA) broken down by game
		 * Predicted Points Added (PPA) by player game
		 * Get ppa/players/games
		 * @param {number} year Year filter
		 *     Minimum: 2013
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} team Team filter
		 * @param {string} position Position abbreviation filter
		 * @param {number} playerId Player id filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} threshold Minimum play threshold filter
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @return {Array<PlayerGamePPA>} successful operation
		 */
		GetPlayerGamePPA(year: number | null | undefined, week: number | null | undefined, team: string | null | undefined, position: string | null | undefined, playerId: number | null | undefined, threshold: string | null | undefined, excludeGarbageTime: boolean | null | undefined, seasonType: string | null | undefined): Observable<Array<PlayerGamePPA>> {
			return this.http.get<Array<PlayerGamePPA>>(this.baseUri + 'ppa/players/games?year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&playerId=' + playerId + '&threshold=' + (threshold == null ? '' : encodeURIComponent(threshold)) + '&excludeGarbageTime=' + excludeGarbageTime + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)), {});
		}

		/**
		 * Player Predicated Points Added (PPA/EPA) broken down by season
		 * Predicted Points Added (PPA) by player season
		 * Get ppa/players/season
		 * @param {number} year Year filter
		 *     Minimum: 2013
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} position Position abbreviation filter
		 * @param {number} playerId Player id filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} threshold Minimum play threshold filter
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @return {Array<PlayerSeasonPPA>} successful operation
		 */
		GetPlayerSeasonPPA(year: number | null | undefined, team: string | null | undefined, conference: string | null | undefined, position: string | null | undefined, playerId: number | null | undefined, threshold: string | null | undefined, excludeGarbageTime: boolean | null | undefined): Observable<Array<PlayerSeasonPPA>> {
			return this.http.get<Array<PlayerSeasonPPA>>(this.baseUri + 'ppa/players/season?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&playerId=' + playerId + '&threshold=' + (threshold == null ? '' : encodeURIComponent(threshold)) + '&excludeGarbageTime=' + excludeGarbageTime, {});
		}

		/**
		 * Predicted Points (i.e. Expected Points or EP)
		 * Predicted Points
		 * Get ppa/predicted
		 * @param {number} down Down filter
		 *     Minimum: 1    Maximum: 4
		 * @param {number} distance Distance filter
		 *     Minimum: 1    Maximum: 99
		 * @return {Array<PredictedPoints>} successful operation
		 */
		GetPredictedPoints(down: number, distance: number): Observable<Array<PredictedPoints>> {
			return this.http.get<Array<PredictedPoints>>(this.baseUri + 'ppa/predicted?down=' + down + '&distance=' + distance, {});
		}

		/**
		 * Predicted Points Added (PPA/EPA) data by team
		 * Predicted Points Added (PPA)
		 * Get ppa/teams
		 * @param {number} year Year filter (required if team not specified)
		 *     Minimum: 2001
		 * @param {string} team Team filter (required if year not specified)
		 * @param {string} conference Conference filter
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @return {Array<TeamPPA>} successful operation
		 */
		GetTeamPPA(year: number | null | undefined, team: string | null | undefined, conference: string | null | undefined, excludeGarbageTime: boolean | null | undefined): Observable<Array<TeamPPA>> {
			return this.http.get<Array<TeamPPA>>(this.baseUri + 'ppa/teams?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&excludeGarbageTime=' + excludeGarbageTime, {});
		}

		/**
		 * Historical polls and rankings
		 * Poll rankings
		 * Get rankings
		 * @param {number} year Year/season filter for games
		 *     Minimum: 1936
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @return {Array<RankingWeek>} successful operation
		 */
		GetRankings(year: number, week: number | null | undefined, seasonType: string | null | undefined): Observable<Array<RankingWeek>> {
			return this.http.get<Array<RankingWeek>>(this.baseUri + 'rankings?year=' + year + '&week=' + week + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)), {});
		}

		/**
		 * Historical Elo ratings
		 * Elo rating data
		 * Get ratings/elo
		 * @param {number} year Season filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} week Maximum week filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} team Team filter
		 * @param {string} conference Conference filter
		 * @return {Array<TeamEloRating>} successful operation
		 */
		GetEloRatings(year: number | null | undefined, week: number | null | undefined, team: string | null | undefined, conference: string | null | undefined): Observable<Array<TeamEloRating>> {
			return this.http.get<Array<TeamEloRating>>(this.baseUri + 'ratings/elo?year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Historical SP+ ratings
		 * SP+ rating data
		 * Get ratings/sp
		 * @param {number} year Season filter (required if team not specified)
		 *     Minimum: 1970
		 * @param {string} team Team filter (required if year not specified)
		 * @return {Array<TeamSPRating>} successful operation
		 */
		GetSPRatings(year: number | null | undefined, team: string | null | undefined): Observable<Array<TeamSPRating>> {
			return this.http.get<Array<TeamSPRating>>(this.baseUri + 'ratings/sp?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)), {});
		}

		/**
		 * Historical SP+ ratings by conference
		 * Get average SP+ historical rating data by conference
		 * Get ratings/sp/conferences
		 * @param {number} year Season filter
		 *     Minimum: 1970
		 * @param {string} conference Conference abbreviation filter
		 * @return {Array<ConferenceSPRating>} successful operation
		 */
		GetConferenceSPRatings(year: number | null | undefined, conference: string | null | undefined): Observable<Array<ConferenceSPRating>> {
			return this.http.get<Array<ConferenceSPRating>>(this.baseUri + 'ratings/sp/conferences?year=' + year + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Historical SRS ratings
		 * SRS rating data (requires either a year or team specified)
		 * Get ratings/srs
		 * @param {number} year Season filter (required if team not specified)
		 *     Minimum: 1897
		 * @param {string} team Team filter (required if year not specified)
		 * @param {string} conference Conference filter
		 * @return {Array<TeamSRSRating>} successful operation
		 */
		GetSRSRatings(year: number | null | undefined, team: string | null | undefined, conference: string | null | undefined): Observable<Array<TeamSRSRating>> {
			return this.http.get<Array<TeamSRSRating>>(this.baseUri + 'ratings/srs?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Team records
		 * Get team records by year
		 * Get records
		 * @param {number} year Year filter
		 *     Minimum: 1869
		 * @param {string} team Team filter
		 * @param {string} conference Conference filter
		 * @return {Array<TeamRecord>} successful operation
		 */
		GetTeamRecords(year: number | null | undefined, team: string | null | undefined, conference: string | null | undefined): Observable<Array<TeamRecord>> {
			return this.http.get<Array<TeamRecord>>(this.baseUri + 'records?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Recruit position group ratings
		 * Gets a list of aggregated statistics by team and position grouping
		 * Get recruiting/groups
		 * @param {number} startYear Starting year
		 *     Minimum: 2000
		 * @param {number} endYear Ending year
		 *     Minimum: 2000
		 * @param {string} team Team filter
		 * @param {string} conference conference filter
		 * @return {Array<PositionGroupRecruitingRating>} successful operation
		 */
		GetRecruitingGroups(startYear: number | null | undefined, endYear: number | null | undefined, team: string | null | undefined, conference: string | null | undefined): Observable<Array<PositionGroupRecruitingRating>> {
			return this.http.get<Array<PositionGroupRecruitingRating>>(this.baseUri + 'recruiting/groups?startYear=' + startYear + '&endYear=' + endYear + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Player recruiting ratings and rankings
		 * Get player recruiting rankings and data. Requires either a year or team to be specified.
		 * Get recruiting/players
		 * @param {number} year Recruiting class year (required if team no specified)
		 *     Minimum: 2000
		 * @param {string} classification Type of recruit (HighSchool, JUCO, PrepSchool)
		 * @param {string} position Position abbreviation filter
		 * @param {string} state State or province abbreviation filter
		 * @param {string} team Committed team filter (required if year not specified)
		 * @return {Array<Recruit>} successful operation
		 */
		GetRecruitingPlayers(year: number | null | undefined, classification: string | null | undefined, position: string | null | undefined, state: string | null | undefined, team: string | null | undefined): Observable<Array<Recruit>> {
			return this.http.get<Array<Recruit>>(this.baseUri + 'recruiting/players?year=' + year + '&classification=' + (classification == null ? '' : encodeURIComponent(classification)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&team=' + (team == null ? '' : encodeURIComponent(team)), {});
		}

		/**
		 * Team recruiting rankings and ratings
		 * Team recruiting rankings
		 * Get recruiting/teams
		 * @param {number} year Recruiting class year
		 *     Minimum: 2000
		 * @param {string} team Team filter
		 * @return {Array<TeamRecruitingRank>} successful operation
		 */
		GetRecruitingTeams(year: number | null | undefined, team: string | null | undefined): Observable<Array<TeamRecruitingRank>> {
			return this.http.get<Array<TeamRecruitingRank>>(this.baseUri + 'recruiting/teams?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)), {});
		}

		/**
		 * Team rosters
		 * Roster data
		 * Get roster
		 * @param {string} team Team name
		 * @param {number} year Season year
		 *     Minimum: 2009
		 * @return {Array<Player>} successful operation
		 */
		GetRoster(team: string | null | undefined, year: number | null | undefined): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + 'roster?team=' + (team == null ? '' : encodeURIComponent(team)) + '&year=' + year, {});
		}

		/**
		 * Live game results (Patreon only)
		 * Get live game results
		 * Get scoreboard
		 * @param {string} classification Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.
		 * @param {string} conference Conference abbreviation filter.
		 * @return {Array<ScoreboardGame>} successful operation
		 */
		GetScoreboard(classification: string | null | undefined, conference: string | null | undefined): Observable<Array<ScoreboardGame>> {
			return this.http.get<Array<ScoreboardGame>>(this.baseUri + 'scoreboard?classification=' + (classification == null ? '' : encodeURIComponent(classification)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * Team stat categories
		 * Stat category list
		 * Get stats/categories
		 * @return {Array<string>} successful operation
		 */
		GetStatCategories(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'stats/categories', {});
		}

		/**
		 * Advanced team metrics by game
		 * Advanced team game stats
		 * Get stats/game/advanced
		 * @param {number} year Year filter (required if no team specified)
		 *     Minimum: 2001
		 * @param {number} week Week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {string} team Team filter (required if no year specified)
		 * @param {string} opponent Opponent filter
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @param {string} seasonType Season type filter (regular, postseason, or both)
		 * @return {Array<AdvancedGameStat>} successful operation
		 */
		GetAdvancedTeamGameStats(year: number | null | undefined, week: number | null | undefined, team: string | null | undefined, opponent: string | null | undefined, excludeGarbageTime: boolean | null | undefined, seasonType: string | null | undefined): Observable<Array<AdvancedGameStat>> {
			return this.http.get<Array<AdvancedGameStat>>(this.baseUri + 'stats/game/advanced?year=' + year + '&week=' + week + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&opponent=' + (opponent == null ? '' : encodeURIComponent(opponent)) + '&excludeGarbageTime=' + excludeGarbageTime + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)), {});
		}

		/**
		 * Player stats by season
		 * Season player stats
		 * Get stats/player/season
		 * @param {number} year Year filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {number} startWeek Start week filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} endWeek Start week filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} seasonType Season type filter (regular, postseason, or both)
		 * @param {string} category Stat category filter (e.g. passing)
		 * @return {Array<PlayerSeasonStat>} successful operation
		 */
		GetPlayerSeasonStats(year: number, team: string | null | undefined, conference: string | null | undefined, startWeek: number | null | undefined, endWeek: number | null | undefined, seasonType: string | null | undefined, category: string | null | undefined): Observable<Array<PlayerSeasonStat>> {
			return this.http.get<Array<PlayerSeasonStat>>(this.baseUri + 'stats/player/season?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&startWeek=' + startWeek + '&endWeek=' + endWeek + '&seasonType=' + (seasonType == null ? '' : encodeURIComponent(seasonType)) + '&category=' + (category == null ? '' : encodeURIComponent(category)), {});
		}

		/**
		 * Team statistics by season
		 * Team season stats
		 * Get stats/season
		 * @param {number} year Year filter (required if no team specified)
		 *     Minimum: 2001
		 * @param {string} team Team filter (required if no year specified)
		 * @param {string} conference Conference abbreviation filter
		 * @param {number} startWeek Starting week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {number} endWeek Starting week filter
		 *     Minimum: 1    Maximum: 16
		 * @return {Array<TeamSeasonStat>} successful operation
		 */
		GetTeamSeasonStats(year: number | null | undefined, team: string | null | undefined, conference: string | null | undefined, startWeek: number | null | undefined, endWeek: number | null | undefined): Observable<Array<TeamSeasonStat>> {
			return this.http.get<Array<TeamSeasonStat>>(this.baseUri + 'stats/season?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&conference=' + (conference == null ? '' : encodeURIComponent(conference)) + '&startWeek=' + startWeek + '&endWeek=' + endWeek, {});
		}

		/**
		 * Advanced team metrics by season
		 * Advanced team season stats
		 * Get stats/season/advanced
		 * @param {number} year Year filter (required if no team specified)
		 *     Minimum: 2001
		 * @param {string} team Team filter (required if no year specified)
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @param {number} startWeek Starting week filter
		 *     Minimum: 1    Maximum: 16
		 * @param {number} endWeek Starting week filter
		 *     Minimum: 1    Maximum: 16
		 * @return {Array<AdvancedSeasonStat>} successful operation
		 */
		GetAdvancedTeamSeasonStats(year: number | null | undefined, team: string | null | undefined, excludeGarbageTime: boolean | null | undefined, startWeek: number | null | undefined, endWeek: number | null | undefined): Observable<Array<AdvancedSeasonStat>> {
			return this.http.get<Array<AdvancedSeasonStat>>(this.baseUri + 'stats/season/advanced?year=' + year + '&team=' + (team == null ? '' : encodeURIComponent(team)) + '&excludeGarbageTime=' + excludeGarbageTime + '&startWeek=' + startWeek + '&endWeek=' + endWeek, {});
		}

		/**
		 * Team talent composite rankings
		 * Team talent composite
		 * Get talent
		 * @param {number} year Year filter
		 *     Minimum: 2015
		 * @return {Array<TeamTalent>} successful operation
		 */
		GetTalent(year: number | null | undefined): Observable<Array<TeamTalent>> {
			return this.http.get<Array<TeamTalent>>(this.baseUri + 'talent?year=' + year, {});
		}

		/**
		 * Team information
		 * Get team information
		 * Get teams
		 * @param {string} conference Conference abbreviation filter
		 * @return {Array<Team>} successful operation
		 */
		GetTeams(conference: string | null | undefined): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + 'teams?conference=' + (conference == null ? '' : encodeURIComponent(conference)), {});
		}

		/**
		 * FBS team list
		 * Information on major division teams
		 * Get teams/fbs
		 * @param {number} year Year filter
		 *     Minimum: 1869
		 * @return {Array<Team>} successful operation
		 */
		GetFbsTeams(year: number | null | undefined): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + 'teams/fbs?year=' + year, {});
		}

		/**
		 * Team matchup history
		 * Matchup history
		 * Get teams/matchup
		 * @param {string} team1 First team
		 * @param {string} team2 Second team
		 * @param {number} minYear Minimum year
		 *     Minimum: 1869
		 * @param {number} maxYear Maximum year
		 *     Minimum: 1869
		 * @return {TeamMatchup} successful operation
		 */
		GetTeamMatchup(team1: string, team2: string, minYear: number | null | undefined, maxYear: number | null | undefined): Observable<TeamMatchup> {
			return this.http.get<TeamMatchup>(this.baseUri + 'teams/matchup?team1=' + (team1 == null ? '' : encodeURIComponent(team1)) + '&team2=' + (team2 == null ? '' : encodeURIComponent(team2)) + '&minYear=' + minYear + '&maxYear=' + maxYear, {});
		}

		/**
		 * Arena and venue information
		 * Venues
		 * Get venues
		 * @return {Array<Venue>} successful operation
		 */
		GetVenues(): Observable<Array<Venue>> {
			return this.http.get<Array<Venue>>(this.baseUri + 'venues', {});
		}
	}

}

