import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AdvancedGameStat {
		defense?: AdvancedGameStatDefense;
		gameId?: number | null;
		offense?: AdvancedGameStatOffense;
		opponent?: string | null;
		season?: number | null;
		team?: string | null;
		week?: number | null;
	}
	export interface AdvancedGameStatFormProperties {
		gameId: FormControl<number | null | undefined>,
		opponent: FormControl<string | null | undefined>,
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		drives?: number | null;
		explosiveness?: number | null;
		lineYards?: number | null;
		lineYardsTotal?: number | null;
		openFieldYards?: number | null;
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedGameStatDefensePassingDowns;
		passingPlays?: AdvancedGameStatDefensePassingPlays;
		plays?: number | null;
		powerSuccess?: number | null;
		ppa?: number | null;
		rushingPlays?: AdvancedGameStatDefenseRushingPlays;
		secondLevelYards?: number | null;
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedGameStatDefenseStandardDowns;
		stuffRate?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatDefenseFormProperties {
		drives: FormControl<number | null | undefined>,
		explosiveness: FormControl<number | null | undefined>,
		lineYards: FormControl<number | null | undefined>,
		lineYardsTotal: FormControl<number | null | undefined>,
		openFieldYards: FormControl<number | null | undefined>,
		openFieldYardsTotal: FormControl<number | null | undefined>,
		plays: FormControl<number | null | undefined>,
		powerSuccess: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		secondLevelYards: FormControl<number | null | undefined>,
		secondLevelYardsTotal: FormControl<number | null | undefined>,
		stuffRate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedGameStatDefensePassingDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatDefensePassingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatDefenseRushingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedGameStatDefenseStandardDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
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
		drives?: number | null;
		explosiveness?: number | null;
		lineYards?: number | null;
		lineYardsTotal?: number | null;
		openFieldYards?: number | null;
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedGameStatOffensePassingDowns;
		passingPlays?: AdvancedGameStatOffensePassingPlays;
		plays?: number | null;
		powerSuccess?: number | null;
		ppa?: number | null;
		rushingPlays?: AdvancedGameStatOffenseRushingPlays;
		secondLevelYards?: number | null;
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedGameStatOffenseStandardDowns;
		stuffRate?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatOffenseFormProperties {
		drives: FormControl<number | null | undefined>,
		explosiveness: FormControl<number | null | undefined>,
		lineYards: FormControl<number | null | undefined>,
		lineYardsTotal: FormControl<number | null | undefined>,
		openFieldYards: FormControl<number | null | undefined>,
		openFieldYardsTotal: FormControl<number | null | undefined>,
		plays: FormControl<number | null | undefined>,
		powerSuccess: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		secondLevelYards: FormControl<number | null | undefined>,
		secondLevelYardsTotal: FormControl<number | null | undefined>,
		stuffRate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedGameStatOffensePassingDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatOffensePassingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedGameStatOffenseRushingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedGameStatOffenseStandardDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
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
		season?: number | null;
		team?: string | null;
	}
	export interface AdvancedSeasonStatFormProperties {
		conference: FormControl<string | null | undefined>,
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
		drives?: number | null;
		explosiveness?: number | null;
		fieldPosition?: AdvancedSeasonStatDefenseFieldPosition;
		havoc?: AdvancedSeasonStatDefenseHavoc;
		lineYards?: number | null;
		lineYardsTotal?: number | null;
		openFieldYards?: number | null;
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedSeasonStatDefensePassingDowns;
		passingPlays?: AdvancedSeasonStatDefensePassingPlays;
		plays?: number | null;
		pointsPerOpportunity?: number | null;
		powerSuccess?: number | null;
		ppa?: number | null;
		rushingPlays?: AdvancedSeasonStatDefenseRushingPlays;
		secondLevelYards?: number | null;
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedSeasonStatDefenseStandardDowns;
		stuffRate?: number | null;
		successRate?: number | null;
		totalOpportunies?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatDefenseFormProperties {
		drives: FormControl<number | null | undefined>,
		explosiveness: FormControl<number | null | undefined>,
		lineYards: FormControl<number | null | undefined>,
		lineYardsTotal: FormControl<number | null | undefined>,
		openFieldYards: FormControl<number | null | undefined>,
		openFieldYardsTotal: FormControl<number | null | undefined>,
		plays: FormControl<number | null | undefined>,
		pointsPerOpportunity: FormControl<number | null | undefined>,
		powerSuccess: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		secondLevelYards: FormControl<number | null | undefined>,
		secondLevelYardsTotal: FormControl<number | null | undefined>,
		stuffRate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
		totalOpportunies: FormControl<number | null | undefined>,
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
		averagePredictedPoints?: number | null;
		averageStart?: number | null;
	}
	export interface AdvancedSeasonStatDefenseFieldPositionFormProperties {
		averagePredictedPoints: FormControl<number | null | undefined>,
		averageStart: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatDefenseFieldPositionFormGroup() {
		return new FormGroup<AdvancedSeasonStatDefenseFieldPositionFormProperties>({
			averagePredictedPoints: new FormControl<number | null | undefined>(undefined),
			averageStart: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatDefenseHavoc {
		db?: number | null;
		frontSeven?: number | null;
		total?: number | null;
	}
	export interface AdvancedSeasonStatDefenseHavocFormProperties {
		db: FormControl<number | null | undefined>,
		frontSeven: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatDefensePassingDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatDefensePassingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatDefenseRushingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatDefenseStandardDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
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
		drives?: number | null;
		explosiveness?: number | null;
		fieldPosition?: AdvancedSeasonStatOffenseFieldPosition;
		havoc?: AdvancedSeasonStatOffenseHavoc;
		lineYards?: number | null;
		lineYardsTotal?: number | null;
		openFieldYards?: number | null;
		openFieldYardsTotal?: number | null;
		passingDowns?: AdvancedSeasonStatOffensePassingDowns;
		passingPlays?: AdvancedSeasonStatOffensePassingPlays;
		plays?: number | null;
		pointsPerOpportunity?: number | null;
		powerSuccess?: number | null;
		ppa?: number | null;
		rushingPlays?: AdvancedSeasonStatOffenseRushingPlays;
		secondLevelYards?: number | null;
		secondLevelYardsTotal?: number | null;
		standardDowns?: AdvancedSeasonStatOffenseStandardDowns;
		stuffRate?: number | null;
		successRate?: number | null;
		totalOpportunies?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatOffenseFormProperties {
		drives: FormControl<number | null | undefined>,
		explosiveness: FormControl<number | null | undefined>,
		lineYards: FormControl<number | null | undefined>,
		lineYardsTotal: FormControl<number | null | undefined>,
		openFieldYards: FormControl<number | null | undefined>,
		openFieldYardsTotal: FormControl<number | null | undefined>,
		plays: FormControl<number | null | undefined>,
		pointsPerOpportunity: FormControl<number | null | undefined>,
		powerSuccess: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		secondLevelYards: FormControl<number | null | undefined>,
		secondLevelYardsTotal: FormControl<number | null | undefined>,
		stuffRate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
		totalOpportunies: FormControl<number | null | undefined>,
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
		averagePredictedPoints?: number | null;
		averageStart?: number | null;
	}
	export interface AdvancedSeasonStatOffenseFieldPositionFormProperties {
		averagePredictedPoints: FormControl<number | null | undefined>,
		averageStart: FormControl<number | null | undefined>,
	}
	export function CreateAdvancedSeasonStatOffenseFieldPositionFormGroup() {
		return new FormGroup<AdvancedSeasonStatOffenseFieldPositionFormProperties>({
			averagePredictedPoints: new FormControl<number | null | undefined>(undefined),
			averageStart: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdvancedSeasonStatOffenseHavoc {
		db?: number | null;
		frontSeven?: number | null;
		total?: number | null;
	}
	export interface AdvancedSeasonStatOffenseHavocFormProperties {
		db: FormControl<number | null | undefined>,
		frontSeven: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatOffensePassingDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatOffensePassingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
		totalPPA?: number | null;
	}
	export interface AdvancedSeasonStatOffenseRushingPlaysFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		ppa?: number | null;
		rate?: number | null;
		successRate?: number | null;
	}
	export interface AdvancedSeasonStatOffenseStandardDownsFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		rate: FormControl<number | null | undefined>,
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
		passing?: number | null;
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		rushing?: number | null;
		total?: number | null;
	}
	export interface BoxScorePlayersPpaAverageFormProperties {
		passing: FormControl<number | null | undefined>,
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
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
		passing?: number | null;
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		rushing?: number | null;
		total?: number | null;
	}
	export interface BoxScorePlayersPpaCumulativeFormProperties {
		passing: FormControl<number | null | undefined>,
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
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
		passing?: number | null;
		player?: string | null;
		position?: string | null;
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		rushing?: number | null;
		team?: string | null;
		total?: number | null;
	}
	export interface BoxScorePlayersUsageFormProperties {
		passing: FormControl<number | null | undefined>,
		player: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		plays?: number | null;
		rushing?: BoxScoreTeamsCumulativePpaRushing;
		team?: string | null;
	}
	export interface BoxScoreTeamsCumulativePpaFormProperties {
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsCumulativePpaOverallFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsCumulativePpaPassingFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsCumulativePpaRushingFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsExplosivenessOverallFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		averageStart?: number | null;
		averageStartingPredictedPoints?: number | null;
		team?: string | null;
	}
	export interface BoxScoreTeamsFieldPositionFormProperties {
		averageStart: FormControl<number | null | undefined>,
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
		db?: number | null;
		frontSeven?: number | null;
		team?: string | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsHavocFormProperties {
		db: FormControl<number | null | undefined>,
		frontSeven: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		plays?: number | null;
		rushing?: BoxScoreTeamsPpaRushing;
		team?: string | null;
	}
	export interface BoxScoreTeamsPpaFormProperties {
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsPpaOverallFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsPpaPassingFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsPpaRushingFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		lineYards?: number | null;
		lineYardsAverage?: number | null;
		openFieldYards?: number | null;
		openFieldYardsAverage?: number | null;
		powerSuccess?: number | null;
		secondLevelYards?: number | null;
		secondLevelYardsAverage?: number | null;
		stuffRate?: number | null;
		team?: string | null;
	}
	export interface BoxScoreTeamsRushingFormProperties {
		lineYards: FormControl<number | null | undefined>,
		lineYardsAverage: FormControl<number | null | undefined>,
		openFieldYards: FormControl<number | null | undefined>,
		openFieldYardsAverage: FormControl<number | null | undefined>,
		powerSuccess: FormControl<number | null | undefined>,
		secondLevelYards: FormControl<number | null | undefined>,
		secondLevelYardsAverage: FormControl<number | null | undefined>,
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
		opportunities?: number | null;
		points?: number | null;
		pointsPerOpportunity?: number | null;
		team?: string | null;
	}
	export interface BoxScoreTeamsScoringOpportunitiesFormProperties {
		opportunities: FormControl<number | null | undefined>,
		points: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsSuccessRatesOverallFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsSuccessRatesPassingDownsFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		quarter1?: number | null;
		quarter2?: number | null;
		quarter3?: number | null;
		quarter4?: number | null;
		total?: number | null;
	}
	export interface BoxScoreTeamsSuccessRatesStandardDownsFormProperties {
		quarter1: FormControl<number | null | undefined>,
		quarter2: FormControl<number | null | undefined>,
		quarter3: FormControl<number | null | undefined>,
		quarter4: FormControl<number | null | undefined>,
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
		games?: number | null;
		losses?: number | null;

		/** Final ranking in the AP poll */
		postseason_rank?: number | null;

		/** Rank in the AP preseason poll */
		preseason_rank?: number | null;
		school?: string | null;

		/** Final SP+ defensive rating */
		sp_defense?: number | null;

		/** Final SP+ offensive rating */
		sp_offense?: number | null;

		/** Final overall SP+ rating */
		sp_overall?: number | null;

		/** Final SRS rankings */
		srs?: number | null;
		ties?: number | null;
		wins?: number | null;
		year?: string | null;
	}
	export interface CoachSeasonsFormProperties {
		games: FormControl<number | null | undefined>,
		losses: FormControl<number | null | undefined>,

		/** Final ranking in the AP poll */
		postseason_rank: FormControl<number | null | undefined>,

		/** Rank in the AP preseason poll */
		preseason_rank: FormControl<number | null | undefined>,
		school: FormControl<string | null | undefined>,

		/** Final SP+ defensive rating */
		sp_defense: FormControl<number | null | undefined>,

		/** Final SP+ offensive rating */
		sp_offense: FormControl<number | null | undefined>,

		/** Final overall SP+ rating */
		sp_overall: FormControl<number | null | undefined>,

		/** Final SRS rankings */
		srs: FormControl<number | null | undefined>,
		ties: FormControl<number | null | undefined>,
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
		id?: number | null;
		name?: string | null;
		short_name?: string | null;
	}
	export interface ConferenceFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		classification: FormControl<string | null | undefined>,
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
		rating?: number | null;
		secondOrderWins?: number | null;
		sos?: number | null;
		specialTeams?: ConferenceSPRatingSpecialTeams;
		year?: number | null;
	}
	export interface ConferenceSPRatingFormProperties {
		conference: FormControl<string | null | undefined>,
		rating: FormControl<number | null | undefined>,
		secondOrderWins: FormControl<number | null | undefined>,
		sos: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		havoc?: ConferenceSPRatingDefenseHavoc;
		pasing?: number | null;
		passingDowns?: number | null;
		rating?: number | null;
		rushing?: number | null;
		standardDowns?: number | null;
		success?: number | null;
	}
	export interface ConferenceSPRatingDefenseFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		pasing: FormControl<number | null | undefined>,
		passingDowns: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		standardDowns: FormControl<number | null | undefined>,
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
		db?: number | null;
		frontSeven?: number | null;
		total?: number | null;
	}
	export interface ConferenceSPRatingDefenseHavocFormProperties {
		db: FormControl<number | null | undefined>,
		frontSeven: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		pace?: number | null;
		passing?: number | null;
		passingDowns?: number | null;
		rating?: number | null;
		runRate?: number | null;
		rushing?: number | null;
		standardDowns?: number | null;
		success?: number | null;
	}
	export interface ConferenceSPRatingOffenseFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		pace: FormControl<number | null | undefined>,
		passing: FormControl<number | null | undefined>,
		passingDowns: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		runRate: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		standardDowns: FormControl<number | null | undefined>,
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
		rating?: number | null;
	}
	export interface ConferenceSPRatingSpecialTeamsFormProperties {
		rating: FormControl<number | null | undefined>,
	}
	export function CreateConferenceSPRatingSpecialTeamsFormGroup() {
		return new FormGroup<ConferenceSPRatingSpecialTeamsFormProperties>({
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DraftPick {
		collegeAthleteId?: number | null;
		collegeConference?: string | null;
		collegeId?: number | null;
		collegeTeam?: string | null;
		height?: number | null;
		hometownInfo?: DraftPickHometownInfo;
		name?: string | null;
		nflAthleteId?: number | null;
		nflTeam?: string | null;
		overall?: number | null;
		pick?: number | null;
		position?: string | null;
		preDraftGrade?: number | null;
		preDraftPositionRanking?: number | null;
		preDraftRanking?: number | null;
		round?: number | null;
		weight?: number | null;
		year?: number | null;
	}
	export interface DraftPickFormProperties {
		collegeAthleteId: FormControl<number | null | undefined>,
		collegeConference: FormControl<string | null | undefined>,
		collegeId: FormControl<number | null | undefined>,
		collegeTeam: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		nflAthleteId: FormControl<number | null | undefined>,
		nflTeam: FormControl<string | null | undefined>,
		overall: FormControl<number | null | undefined>,
		pick: FormControl<number | null | undefined>,
		position: FormControl<string | null | undefined>,
		preDraftGrade: FormControl<number | null | undefined>,
		preDraftPositionRanking: FormControl<number | null | undefined>,
		preDraftRanking: FormControl<number | null | undefined>,
		round: FormControl<number | null | undefined>,
		weight: FormControl<number | null | undefined>,
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
		countryFips?: number | null;
		latitude?: number | null;
		longitude?: number | null;
		state?: string | null;
	}
	export interface DraftPickHometownInfoFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		countryFips: FormControl<number | null | undefined>,
		latitude: FormControl<number | null | undefined>,
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
		drive_number?: number | null;
		drive_result?: string | null;
		end_defense_score?: number | null;
		end_offense_score?: number | null;
		end_period?: number | null;
		end_time?: DriveEnd_time;
		end_yardline?: number | null;
		end_yards_to_goal?: number | null;
		game_id?: number | null;
		id?: number | null;
		is_home_offense?: boolean | null;
		offense?: string | null;
		offense_conference?: string | null;
		plays?: number | null;
		scoring?: boolean | null;
		start_defense_score?: number | null;
		start_offense_score?: number | null;
		start_period?: number | null;
		start_time?: DriveStart_time;
		start_yardline?: number | null;
		start_yards_to_goal?: number | null;
		yards?: number | null;
	}
	export interface DriveFormProperties {
		defense: FormControl<string | null | undefined>,
		defense_conference: FormControl<string | null | undefined>,
		drive_number: FormControl<number | null | undefined>,
		drive_result: FormControl<string | null | undefined>,
		end_defense_score: FormControl<number | null | undefined>,
		end_offense_score: FormControl<number | null | undefined>,
		end_period: FormControl<number | null | undefined>,
		end_yardline: FormControl<number | null | undefined>,
		end_yards_to_goal: FormControl<number | null | undefined>,
		game_id: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		is_home_offense: FormControl<boolean | null | undefined>,
		offense: FormControl<string | null | undefined>,
		offense_conference: FormControl<string | null | undefined>,
		plays: FormControl<number | null | undefined>,
		scoring: FormControl<boolean | null | undefined>,
		start_defense_score: FormControl<number | null | undefined>,
		start_offense_score: FormControl<number | null | undefined>,
		start_period: FormControl<number | null | undefined>,
		start_yardline: FormControl<number | null | undefined>,
		start_yards_to_goal: FormControl<number | null | undefined>,
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
		minutes?: number | null;
		seconds?: number | null;
	}
	export interface DriveEnd_timeFormProperties {
		minutes: FormControl<number | null | undefined>,
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateDriveEnd_timeFormGroup() {
		return new FormGroup<DriveEnd_timeFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DriveStart_time {
		minutes?: number | null;
		seconds?: number | null;
	}
	export interface DriveStart_timeFormProperties {
		minutes: FormControl<number | null | undefined>,
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateDriveStart_timeFormGroup() {
		return new FormGroup<DriveStart_timeFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Game {
		attendance?: number | null;
		away_conference?: string | null;
		away_division?: string | null;
		away_id?: number | null;
		away_line_scores?: Array<number>;
		away_points?: number | null;
		away_post_win_prob?: number | null;
		away_postgame_elo?: number | null;
		away_pregame_elo?: number | null;
		away_team?: string | null;
		completed?: boolean | null;
		conference_game?: boolean | null;
		excitement_index?: number | null;
		highlights?: string | null;
		home_conference?: string | null;
		home_division?: string | null;
		home_id?: number | null;
		home_line_scores?: Array<number>;
		home_points?: number | null;
		home_post_win_prob?: number | null;
		home_postgame_elo?: number | null;
		home_pregame_elo?: number | null;
		home_team?: string | null;
		id?: number | null;
		neutral_site?: boolean | null;
		notes?: string | null;
		season?: number | null;
		season_type?: string | null;
		start_date?: string | null;
		start_time_tbd?: boolean | null;
		venue?: string | null;
		venue_id?: number | null;
		week?: number | null;
	}
	export interface GameFormProperties {
		attendance: FormControl<number | null | undefined>,
		away_conference: FormControl<string | null | undefined>,
		away_division: FormControl<string | null | undefined>,
		away_id: FormControl<number | null | undefined>,
		away_points: FormControl<number | null | undefined>,
		away_post_win_prob: FormControl<number | null | undefined>,
		away_postgame_elo: FormControl<number | null | undefined>,
		away_pregame_elo: FormControl<number | null | undefined>,
		away_team: FormControl<string | null | undefined>,
		completed: FormControl<boolean | null | undefined>,
		conference_game: FormControl<boolean | null | undefined>,
		excitement_index: FormControl<number | null | undefined>,
		highlights: FormControl<string | null | undefined>,
		home_conference: FormControl<string | null | undefined>,
		home_division: FormControl<string | null | undefined>,
		home_id: FormControl<number | null | undefined>,
		home_points: FormControl<number | null | undefined>,
		home_post_win_prob: FormControl<number | null | undefined>,
		home_postgame_elo: FormControl<number | null | undefined>,
		home_pregame_elo: FormControl<number | null | undefined>,
		home_team: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		neutral_site: FormControl<boolean | null | undefined>,
		notes: FormControl<string | null | undefined>,
		season: FormControl<number | null | undefined>,
		season_type: FormControl<string | null | undefined>,
		start_date: FormControl<string | null | undefined>,
		start_time_tbd: FormControl<boolean | null | undefined>,
		venue: FormControl<string | null | undefined>,
		venue_id: FormControl<number | null | undefined>,
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
		awayScore?: number | null;
		awayTeam?: string | null;
		homeConference?: string | null;
		homeScore?: number | null;
		homeTeam?: string | null;
		id?: number | null;
		GameLinesLines?: Array<GameLinesLines>;
		season?: number | null;
		seasonType?: string | null;
		startDate?: string | null;
		week?: number | null;
	}
	export interface GameLinesFormProperties {
		awayConference: FormControl<string | null | undefined>,
		awayScore: FormControl<number | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,
		homeConference: FormControl<string | null | undefined>,
		homeScore: FormControl<number | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,
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
		awayMoneyline?: number | null;
		formattedSpread?: string | null;
		homeMoneyline?: number | null;
		overUnder?: number | null;
		overUnderOpen?: number | null;
		provider?: string | null;
		spread?: number | null;
		spreadOpen?: number | null;
	}
	export interface GameLinesLinesFormProperties {
		awayMoneyline: FormControl<number | null | undefined>,
		formattedSpread: FormControl<string | null | undefined>,
		homeMoneyline: FormControl<number | null | undefined>,
		overUnder: FormControl<number | null | undefined>,
		overUnderOpen: FormControl<number | null | undefined>,
		provider: FormControl<string | null | undefined>,
		spread: FormControl<number | null | undefined>,
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
		id?: number | null;
		isStartTimeTBD?: boolean | null;
		mediaType?: string | null;
		outlet?: string | null;
		season?: number | null;
		seasonType?: string | null;
		startTime?: string | null;
		week?: number | null;
	}
	export interface GameMediaFormProperties {
		awayConference: FormControl<string | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,
		homeConference: FormControl<string | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		isStartTimeTBD: FormControl<boolean | null | undefined>,
		mediaType: FormControl<string | null | undefined>,
		outlet: FormControl<string | null | undefined>,
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
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
		gameId?: number | null;
		offense?: GamePPAOffense;
		opponent?: string | null;
		season?: number | null;
		team?: string | null;
		week?: number | null;
	}
	export interface GamePPAFormProperties {
		conference: FormControl<string | null | undefined>,
		gameId: FormControl<number | null | undefined>,
		opponent: FormControl<string | null | undefined>,
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		firstDown?: number | null;
		overall?: number | null;
		passing?: number | null;
		rushing?: number | null;
		secondDown?: number | null;
		thirdDown?: number | null;
	}
	export interface GamePPADefenseFormProperties {
		firstDown: FormControl<number | null | undefined>,
		overall: FormControl<number | null | undefined>,
		passing: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		secondDown: FormControl<number | null | undefined>,
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
		firstDown?: number | null;
		overall?: number | null;
		passing?: number | null;
		rushing?: number | null;
		secondDown?: number | null;
		thirdDown?: number | null;
	}
	export interface GamePPAOffenseFormProperties {
		firstDown: FormControl<number | null | undefined>,
		overall: FormControl<number | null | undefined>,
		passing: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		secondDown: FormControl<number | null | undefined>,
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
		dewPoint?: number | null;
		gameIndoors?: boolean | null;
		homeConference?: string | null;
		homeTeam?: string | null;
		humidity?: number | null;
		id?: number | null;
		precipitation?: number | null;
		pressure?: number | null;
		season?: number | null;
		seasonType?: string | null;
		snowfall?: number | null;
		startTime?: string | null;
		temperature?: number | null;
		venue?: string | null;
		venueId?: number | null;
		weatherCondition?: string | null;
		weatherConditionCode?: number | null;
		week?: number | null;
		windDirection?: number | null;
		windSpeed?: number | null;
	}
	export interface GameWeatherFormProperties {
		awayConference: FormControl<string | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,
		dewPoint: FormControl<number | null | undefined>,
		gameIndoors: FormControl<boolean | null | undefined>,
		homeConference: FormControl<string | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,
		humidity: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		precipitation: FormControl<number | null | undefined>,
		pressure: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
		snowfall: FormControl<number | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		temperature: FormControl<number | null | undefined>,
		venue: FormControl<string | null | undefined>,
		venueId: FormControl<number | null | undefined>,
		weatherCondition: FormControl<string | null | undefined>,
		weatherConditionCode: FormControl<number | null | undefined>,
		week: FormControl<number | null | undefined>,
		windDirection: FormControl<number | null | undefined>,
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
		distance?: number | null;
		down?: number | null;
		LivePlayByPlayDrives?: Array<LivePlayByPlayDrives>;
		id?: number | null;
		period?: number | null;
		possession?: string | null;
		status?: string | null;
		LivePlayByPlayTeams?: Array<LivePlayByPlayTeams>;
		yardsToGoal?: number | null;
	}
	export interface LivePlayByPlayFormProperties {
		clock: FormControl<string | null | undefined>,
		distance: FormControl<number | null | undefined>,
		down: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		period: FormControl<number | null | undefined>,
		possession: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
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
		defenseId?: number | null;
		duration?: string | null;
		endClock?: string | null;
		endPeriod?: number | null;
		endYardsToGoal?: number | null;
		id?: number | null;
		offense?: string | null;
		offenseId?: number | null;
		playCount?: number | null;
		LivePlayByPlayDrivesPlays?: Array<LivePlayByPlayDrivesPlays>;
		scoringOpportunity?: boolean | null;
		startClock?: string | null;
		startPeriod?: number | null;
		startYardsToGoal?: number | null;
		yards?: number | null;
	}
	export interface LivePlayByPlayDrivesFormProperties {
		defense: FormControl<string | null | undefined>,
		defenseId: FormControl<number | null | undefined>,
		duration: FormControl<string | null | undefined>,
		endClock: FormControl<string | null | undefined>,
		endPeriod: FormControl<number | null | undefined>,
		endYardsToGoal: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		offense: FormControl<string | null | undefined>,
		offenseId: FormControl<number | null | undefined>,
		playCount: FormControl<number | null | undefined>,
		scoringOpportunity: FormControl<boolean | null | undefined>,
		startClock: FormControl<string | null | undefined>,
		startPeriod: FormControl<number | null | undefined>,
		startYardsToGoal: FormControl<number | null | undefined>,
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
		awayScore?: number | null;
		clock?: string | null;
		distance?: number | null;
		down?: number | null;
		downType?: string | null;
		epa?: number | null;
		garbageTime?: boolean | null;
		homeScore?: number | null;
		id?: number | null;
		period?: number | null;
		playText?: string | null;
		playType?: string | null;
		playTypeId?: number | null;
		rushPass?: string | null;
		success?: boolean | null;
		team?: string | null;
		teamId?: number | null;
		wallclock?: string | null;
		yardsGained?: number | null;
		yardsToGoal?: number | null;
	}
	export interface LivePlayByPlayDrivesPlaysFormProperties {
		awayScore: FormControl<number | null | undefined>,
		clock: FormControl<string | null | undefined>,
		distance: FormControl<number | null | undefined>,
		down: FormControl<number | null | undefined>,
		downType: FormControl<string | null | undefined>,
		epa: FormControl<number | null | undefined>,
		garbageTime: FormControl<boolean | null | undefined>,
		homeScore: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		period: FormControl<number | null | undefined>,
		playText: FormControl<string | null | undefined>,
		playType: FormControl<string | null | undefined>,
		playTypeId: FormControl<number | null | undefined>,
		rushPass: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		team: FormControl<string | null | undefined>,
		teamId: FormControl<number | null | undefined>,
		wallclock: FormControl<string | null | undefined>,
		yardsGained: FormControl<number | null | undefined>,
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
		drives?: number | null;
		epaPerPass?: number | null;
		epaPerPlay?: number | null;
		epaPerRush?: number | null;
		explosiveness?: number | null;
		homeAway?: string | null;
		lineYards?: number | null;
		lineYardsPerRush?: number | null;
		openFieldYards?: number | null;
		openFieldYardsPerRush?: number | null;
		passingDownSuccessRate?: number | null;
		passingEpa?: number | null;
		plays?: number | null;
		points?: number | null;
		pointsPerOpportunity?: number | null;
		rushingEpa?: number | null;
		scoringOpportunities?: number | null;
		secondLevelYards?: number | null;
		secondLevelYardsPerRush?: number | null;
		standardDownSuccessRate?: number | null;
		successRate?: number | null;
		team?: string | null;
		teamId?: number | null;
		totalEpa?: number | null;
	}
	export interface LivePlayByPlayTeamsFormProperties {
		drives: FormControl<number | null | undefined>,
		epaPerPass: FormControl<number | null | undefined>,
		epaPerPlay: FormControl<number | null | undefined>,
		epaPerRush: FormControl<number | null | undefined>,
		explosiveness: FormControl<number | null | undefined>,
		homeAway: FormControl<string | null | undefined>,
		lineYards: FormControl<number | null | undefined>,
		lineYardsPerRush: FormControl<number | null | undefined>,
		openFieldYards: FormControl<number | null | undefined>,
		openFieldYardsPerRush: FormControl<number | null | undefined>,
		passingDownSuccessRate: FormControl<number | null | undefined>,
		passingEpa: FormControl<number | null | undefined>,
		plays: FormControl<number | null | undefined>,
		points: FormControl<number | null | undefined>,
		pointsPerOpportunity: FormControl<number | null | undefined>,
		rushingEpa: FormControl<number | null | undefined>,
		scoringOpportunities: FormControl<number | null | undefined>,
		secondLevelYards: FormControl<number | null | undefined>,
		secondLevelYardsPerRush: FormControl<number | null | undefined>,
		standardDownSuccessRate: FormControl<number | null | undefined>,
		successRate: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
		teamId: FormControl<number | null | undefined>,
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
		defense_score?: number | null;
		defense_timeouts?: number | null;
		distance?: number | null;
		down?: number | null;
		drive_id?: number | null;
		drive_number?: number | null;
		game_id?: number | null;
		home?: string | null;
		id?: number | null;
		offense?: string | null;
		offense_conference?: string | null;
		offense_score?: number | null;
		offense_timeouts?: number | null;
		period?: number | null;
		play_number?: number | null;
		play_text?: string | null;
		play_type?: string | null;
		ppa?: number | null;
		scoring?: boolean | null;
		wallclock?: string | null;
		yard_line?: number | null;
		yards_gained?: number | null;
		yards_to_goal?: number | null;
	}
	export interface PlayFormProperties {
		away: FormControl<string | null | undefined>,
		defense: FormControl<string | null | undefined>,
		defense_conference: FormControl<string | null | undefined>,
		defense_score: FormControl<number | null | undefined>,
		defense_timeouts: FormControl<number | null | undefined>,
		distance: FormControl<number | null | undefined>,
		down: FormControl<number | null | undefined>,
		drive_id: FormControl<number | null | undefined>,
		drive_number: FormControl<number | null | undefined>,
		game_id: FormControl<number | null | undefined>,
		home: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		offense: FormControl<string | null | undefined>,
		offense_conference: FormControl<string | null | undefined>,
		offense_score: FormControl<number | null | undefined>,
		offense_timeouts: FormControl<number | null | undefined>,
		period: FormControl<number | null | undefined>,
		play_number: FormControl<number | null | undefined>,
		play_text: FormControl<string | null | undefined>,
		play_type: FormControl<string | null | undefined>,
		ppa: FormControl<number | null | undefined>,
		scoring: FormControl<boolean | null | undefined>,
		wallclock: FormControl<string | null | undefined>,
		yard_line: FormControl<number | null | undefined>,
		yards_gained: FormControl<number | null | undefined>,
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
		minutes?: number | null;
		seconds?: number | null;
	}
	export interface PlayClockFormProperties {
		minutes: FormControl<number | null | undefined>,
		seconds: FormControl<number | null | undefined>,
	}
	export function CreatePlayClockFormGroup() {
		return new FormGroup<PlayClockFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayStat {
		athleteId?: number | null;
		athleteName?: string | null;
		clock?: PlayStatClock;
		conference?: string | null;
		distance?: number | null;
		down?: number | null;
		driveId?: number | null;
		gameId?: number | null;
		opponent?: string | null;
		opponentScore?: number | null;
		period?: number | null;
		playId?: number | null;
		season?: number | null;
		stat?: number | null;
		statType?: string | null;
		team?: string | null;
		teamScore?: number | null;
		week?: number | null;
		yardsToGoal?: number | null;
	}
	export interface PlayStatFormProperties {
		athleteId: FormControl<number | null | undefined>,
		athleteName: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,
		distance: FormControl<number | null | undefined>,
		down: FormControl<number | null | undefined>,
		driveId: FormControl<number | null | undefined>,
		gameId: FormControl<number | null | undefined>,
		opponent: FormControl<string | null | undefined>,
		opponentScore: FormControl<number | null | undefined>,
		period: FormControl<number | null | undefined>,
		playId: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
		stat: FormControl<number | null | undefined>,
		statType: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,
		teamScore: FormControl<number | null | undefined>,
		week: FormControl<number | null | undefined>,
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
		minutes?: number | null;
		seconds?: number | null;
	}
	export interface PlayStatClockFormProperties {
		minutes: FormControl<number | null | undefined>,
		seconds: FormControl<number | null | undefined>,
	}
	export function CreatePlayStatClockFormGroup() {
		return new FormGroup<PlayStatClockFormProperties>({
			minutes: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayStatType {
		id?: number | null;
		name?: string | null;
	}
	export interface PlayStatTypeFormProperties {
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
		id?: number | null;
		text?: string | null;
	}
	export interface PlayTypeFormProperties {
		abbreviation: FormControl<string | null | undefined>,
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
		awayId?: number | null;
		awayScore?: number | null;
		distance?: number | null;
		down?: number | null;
		gamesId?: number | null;
		home?: string | null;
		homeBall?: boolean | null;
		homeId?: number | null;
		homeScore?: number | null;
		homeWinProb?: number | null;
		playId?: number | null;
		playNumber?: number | null;
		playText?: string | null;
		spread?: number | null;
		timeRemaining?: number | null;
		yardLine?: number | null;
	}
	export interface PlayWPFormProperties {
		away: FormControl<string | null | undefined>,
		awayId: FormControl<number | null | undefined>,
		awayScore: FormControl<number | null | undefined>,
		distance: FormControl<number | null | undefined>,
		down: FormControl<number | null | undefined>,
		gamesId: FormControl<number | null | undefined>,
		home: FormControl<string | null | undefined>,
		homeBall: FormControl<boolean | null | undefined>,
		homeId: FormControl<number | null | undefined>,
		homeScore: FormControl<number | null | undefined>,
		homeWinProb: FormControl<number | null | undefined>,
		playId: FormControl<number | null | undefined>,
		playNumber: FormControl<number | null | undefined>,
		playText: FormControl<string | null | undefined>,
		spread: FormControl<number | null | undefined>,
		timeRemaining: FormControl<number | null | undefined>,
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
		height?: number | null;
		home_city?: string | null;
		home_country?: string | null;
		home_county_fips?: string | null;
		home_latitude?: number | null;
		home_longitude?: number | null;
		home_state?: string | null;
		id?: number | null;
		jersey?: number | null;
		last_name?: string | null;
		position?: string | null;
		recruit_ids?: Array<number>;
		team?: string | null;
		weight?: number | null;
		year?: number | null;
	}
	export interface PlayerFormProperties {
		first_name: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		home_city: FormControl<string | null | undefined>,
		home_country: FormControl<string | null | undefined>,
		home_county_fips: FormControl<string | null | undefined>,
		home_latitude: FormControl<number | null | undefined>,
		home_longitude: FormControl<number | null | undefined>,
		home_state: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		jersey: FormControl<number | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
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
		id?: number | null;
		PlayerGameTeams?: Array<PlayerGameTeams>;
	}
	export interface PlayerGameFormProperties {
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
		points?: number | null;
		school?: PlayerGameTeamsSchool;
	}
	export interface PlayerGameTeamsFormProperties {
		homeAway: FormControl<boolean | null | undefined>,
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
		id?: number | null;
		name?: string | null;
		stat?: string | null;
	}
	export interface PlayerGameTeamsCategoriesTypesAthletesFormProperties {
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
		season?: number | null;
		team?: string | null;
		week?: number | null;
	}
	export interface PlayerGamePPAFormProperties {
		name: FormControl<string | null | undefined>,
		opponent: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		all?: number | null;
		pass?: number | null;
		rush?: number | null;
	}
	export interface PlayerGamePPAAveragePPAFormProperties {
		all: FormControl<number | null | undefined>,
		pass: FormControl<number | null | undefined>,
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
		height?: number | null;
		hometown?: string | null;
		id?: number | null;
		jersey?: number | null;
		lastName?: string | null;
		name?: string | null;
		position?: string | null;
		team?: string | null;
		teamColor?: string | null;
		teamColorSecondary?: string | null;
		weight?: number | null;
	}
	export interface PlayerSearchResultFormProperties {
		firstName: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		hometown: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		jersey: FormControl<number | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,
		teamColor: FormControl<string | null | undefined>,
		teamColorSecondary: FormControl<string | null | undefined>,
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
		id?: number | null;
		name?: string | null;
		position?: string | null;
		season?: number | null;
		team?: string | null;
		totalPPA?: PlayerSeasonPPATotalPPA;
	}
	export interface PlayerSeasonPPAFormProperties {
		conference: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
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
		all?: number | null;
		firstDown?: number | null;
		pass?: number | null;
		passingDowns?: number | null;
		rush?: number | null;
		secondDown?: number | null;
		standardDowns?: number | null;
		thirdDown?: number | null;
	}
	export interface PlayerSeasonPPAAveragePPAFormProperties {
		all: FormControl<number | null | undefined>,
		firstDown: FormControl<number | null | undefined>,
		pass: FormControl<number | null | undefined>,
		passingDowns: FormControl<number | null | undefined>,
		rush: FormControl<number | null | undefined>,
		secondDown: FormControl<number | null | undefined>,
		standardDowns: FormControl<number | null | undefined>,
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
		all?: number | null;
		firstDown?: number | null;
		pass?: number | null;
		passingDowns?: number | null;
		rush?: number | null;
		secondDown?: number | null;
		standardDowns?: number | null;
		thirdDown?: number | null;
	}
	export interface PlayerSeasonPPATotalPPAFormProperties {
		all: FormControl<number | null | undefined>,
		firstDown: FormControl<number | null | undefined>,
		pass: FormControl<number | null | undefined>,
		passingDowns: FormControl<number | null | undefined>,
		rush: FormControl<number | null | undefined>,
		secondDown: FormControl<number | null | undefined>,
		standardDowns: FormControl<number | null | undefined>,
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
		playerId?: number | null;
		season?: number | null;
		stat?: number | null;
		statType?: string | null;
		team?: string | null;
	}
	export interface PlayerSeasonStatFormProperties {
		category: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,
		player: FormControl<string | null | undefined>,
		playerId: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
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
		id?: number | null;
		name?: string | null;
		position?: string | null;
		season?: number | null;
		team?: string | null;
		usage?: PlayerUsageUsage;
	}
	export interface PlayerUsageFormProperties {
		conference: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
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
		firstDown?: number | null;
		overall?: number | null;
		pass?: number | null;
		passingDowns?: number | null;
		rush?: number | null;
		secondDown?: number | null;
		standardDowns?: number | null;
		thirdDown?: number | null;
	}
	export interface PlayerUsageUsageFormProperties {
		firstDown: FormControl<number | null | undefined>,
		overall: FormControl<number | null | undefined>,
		pass: FormControl<number | null | undefined>,
		passingDowns: FormControl<number | null | undefined>,
		rush: FormControl<number | null | undefined>,
		secondDown: FormControl<number | null | undefined>,
		standardDowns: FormControl<number | null | undefined>,
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
		rating?: number | null;
		season?: number | null;
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
		rating: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
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
		averageRating?: number | null;
		averageStars?: number | null;
		commits?: number | null;
		conference?: string | null;
		positionGroup?: string | null;
		team?: string | null;
		totalRating?: number | null;
	}
	export interface PositionGroupRecruitingRatingFormProperties {
		averageRating: FormControl<number | null | undefined>,
		averageStars: FormControl<number | null | undefined>,
		commits: FormControl<number | null | undefined>,
		conference: FormControl<string | null | undefined>,
		positionGroup: FormControl<string | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		predictedPoints?: number | null;
		yardLine?: number | null;
	}
	export interface PredictedPointsFormProperties {
		predictedPoints: FormControl<number | null | undefined>,
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
		gameId?: number | null;
		homeTeam?: string | null;
		homeWinProb?: number | null;
		season?: number | null;
		seasonType?: string | null;
		spread?: number | null;
		week?: number | null;
	}
	export interface PregameWPFormProperties {
		awayTeam: FormControl<string | null | undefined>,
		gameId: FormControl<number | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,
		homeWinProb: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
		spread: FormControl<number | null | undefined>,
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
		season?: number | null;
		seasonType?: string | null;
		week?: number | null;
	}
	export interface RankingWeekFormProperties {
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
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
		firstPlaceVotes?: number | null;
		points?: number | null;
		rank?: number | null;
		school?: string | null;
	}
	export interface RankingWeekPollsRanksFormProperties {
		conference: FormControl<string | null | undefined>,
		firstPlaceVotes: FormControl<number | null | undefined>,
		points: FormControl<number | null | undefined>,
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
		athleteId?: number | null;
		city?: string | null;
		committedTo?: string | null;
		country?: string | null;
		height?: number | null;
		hometownInfo?: RecruitHometownInfo;
		id?: number | null;
		name?: string | null;
		position?: string | null;
		ranking?: number | null;
		rating?: number | null;
		recruitType?: string | null;
		school?: string | null;
		stars?: number | null;
		stateProvince?: string | null;
		weight?: number | null;
		year?: number | null;
	}
	export interface RecruitFormProperties {
		athleteId: FormControl<number | null | undefined>,
		city: FormControl<string | null | undefined>,
		committedTo: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		ranking: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		recruitType: FormControl<string | null | undefined>,
		school: FormControl<string | null | undefined>,
		stars: FormControl<number | null | undefined>,
		stateProvince: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
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
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface RecruitHometownInfoFormProperties {
		countyFips: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
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
		passingUsage?: number | null;
		percentPPA?: number | null;
		percentPassingPPA?: number | null;
		percentReceivingPPA?: number | null;
		percentRushingPPA?: number | null;
		receivingUsage?: number | null;
		rushingUsage?: number | null;
		season?: number | null;
		team?: string | null;
		totalPPA?: number | null;
		totalPassingPPA?: number | null;
		totalReceivingPPA?: number | null;
		totalRushingPPA?: number | null;
		usage?: number | null;
	}
	export interface ReturningProductionFormProperties {
		conference: FormControl<string | null | undefined>,
		passingUsage: FormControl<number | null | undefined>,
		percentPPA: FormControl<number | null | undefined>,
		percentPassingPPA: FormControl<number | null | undefined>,
		percentReceivingPPA: FormControl<number | null | undefined>,
		percentRushingPPA: FormControl<number | null | undefined>,
		receivingUsage: FormControl<number | null | undefined>,
		rushingUsage: FormControl<number | null | undefined>,
		season: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
		totalPPA: FormControl<number | null | undefined>,
		totalPassingPPA: FormControl<number | null | undefined>,
		totalReceivingPPA: FormControl<number | null | undefined>,
		totalRushingPPA: FormControl<number | null | undefined>,
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
		id?: number | null;
		neutralSite?: boolean | null;
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
		id: FormControl<number | null | undefined>,
		neutralSite: FormControl<boolean | null | undefined>,
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
		id?: number | null;
		name?: string | null;
		points?: number | null;
	}
	export interface ScoreboardGameAwayTeamFormProperties {
		classification: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
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
		awayMoneyline?: number | null;
		homeMoneyline?: number | null;
		overUnder?: number | null;
		spread?: number | null;
	}
	export interface ScoreboardGameBettingFormProperties {
		awayMoneyline: FormControl<number | null | undefined>,
		homeMoneyline: FormControl<number | null | undefined>,
		overUnder: FormControl<number | null | undefined>,
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
		id?: number | null;
		name?: string | null;
		points?: number | null;
	}
	export interface ScoreboardGameHomeTeamFormProperties {
		classification: FormControl<string | null | undefined>,
		conference: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
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
		temperature?: number | null;
		windDirection?: number | null;
		windSpeed?: number | null;
	}
	export interface ScoreboardGameWeatherFormProperties {
		description: FormControl<string | null | undefined>,
		temperature: FormControl<number | null | undefined>,
		windDirection: FormControl<number | null | undefined>,
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
		capacity?: number | null;
		city?: string | null;
		country_code?: string | null;
		dome?: boolean | null;
		elevation?: number | null;
		grass?: boolean | null;
		latitude?: number | null;
		longitude?: number | null;
		name?: string | null;
		state?: string | null;
		timezone?: string | null;
		venue_id?: number | null;
		year_constructed?: number | null;
		zip?: string | null;
	}
	export interface TeamLocationFormProperties {
		capacity: FormControl<number | null | undefined>,
		city: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		dome: FormControl<boolean | null | undefined>,
		elevation: FormControl<number | null | undefined>,
		grass: FormControl<boolean | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		venue_id: FormControl<number | null | undefined>,
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
		elo?: number | null;
		team?: string | null;
		year?: number | null;
	}
	export interface TeamEloRatingFormProperties {
		conference: FormControl<string | null | undefined>,
		elo: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		id?: number | null;
		TeamGameTeams?: Array<TeamGameTeams>;
	}
	export interface TeamGameFormProperties {
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
		points?: number | null;
		school?: string | null;
		TeamGameTeamsStats?: Array<TeamGameTeamsStats>;
	}
	export interface TeamGameTeamsFormProperties {
		conference: FormControl<string | null | undefined>,
		homeAway: FormControl<string | null | undefined>,
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
		endYear?: number | null;
		TeamMatchupGames?: Array<TeamMatchupGames>;
		startYear?: number | null;
		team1?: string | null;
		team1Wins?: number | null;
		team2?: string | null;
		team2Wins?: number | null;
		ties?: number | null;
	}
	export interface TeamMatchupFormProperties {
		endYear: FormControl<number | null | undefined>,
		startYear: FormControl<number | null | undefined>,
		team1: FormControl<string | null | undefined>,
		team1Wins: FormControl<number | null | undefined>,
		team2: FormControl<string | null | undefined>,
		team2Wins: FormControl<number | null | undefined>,
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
		awayScore?: number | null;
		awayTeam?: string | null;
		date?: string | null;
		homeScore?: number | null;
		homeTeam?: string | null;
		neutralSite?: boolean | null;
		season?: number | null;
		season_type?: string | null;
		venue?: string | null;
		week?: number | null;
		winner?: string | null;
	}
	export interface TeamMatchupGamesFormProperties {
		awayScore: FormControl<number | null | undefined>,
		awayTeam: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		homeScore: FormControl<number | null | undefined>,
		homeTeam: FormControl<string | null | undefined>,
		neutralSite: FormControl<boolean | null | undefined>,
		season: FormControl<number | null | undefined>,
		season_type: FormControl<string | null | undefined>,
		venue: FormControl<string | null | undefined>,
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
		season?: number | null;
		team?: string | null;
	}
	export interface TeamPPAFormProperties {
		conference: FormControl<string | null | undefined>,
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
		firstDown?: number | null;
		overall?: number | null;
		passing?: number | null;
		rushing?: number | null;
		secondDown?: number | null;
		thirdDown?: number | null;
	}
	export interface TeamPPADefenseFormProperties {
		firstDown: FormControl<number | null | undefined>,
		overall: FormControl<number | null | undefined>,
		passing: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		secondDown: FormControl<number | null | undefined>,
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
		passing?: number | null;
		rushing?: number | null;
		total?: number | null;
	}
	export interface TeamPPADefenseCumulativeFormProperties {
		passing: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
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
		firstDown?: number | null;
		overall?: number | null;
		passing?: number | null;
		rushing?: number | null;
		secondDown?: number | null;
		thirdDown?: number | null;
	}
	export interface TeamPPAOffenseFormProperties {
		firstDown: FormControl<number | null | undefined>,
		overall: FormControl<number | null | undefined>,
		passing: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		secondDown: FormControl<number | null | undefined>,
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
		passing?: number | null;
		rushing?: number | null;
		total?: number | null;
	}
	export interface TeamPPAOffenseCumulativeFormProperties {
		passing: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
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
		expectedWins?: number | null;
		homeGames?: TeamRecordHomeGames;
		team?: string | null;
		total?: TeamRecordTotal;
		year?: number | null;
	}
	export interface TeamRecordFormProperties {
		conference: FormControl<string | null | undefined>,
		division: FormControl<string | null | undefined>,
		expectedWins: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		games?: number | null;
		losses?: number | null;
		ties?: number | null;
		wins?: number | null;
	}
	export interface TeamRecordAwayGamesFormProperties {
		games: FormControl<number | null | undefined>,
		losses: FormControl<number | null | undefined>,
		ties: FormControl<number | null | undefined>,
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
		games?: number | null;
		losses?: number | null;
		ties?: number | null;
		wins?: number | null;
	}
	export interface TeamRecordConferenceGamesFormProperties {
		games: FormControl<number | null | undefined>,
		losses: FormControl<number | null | undefined>,
		ties: FormControl<number | null | undefined>,
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
		games?: number | null;
		losses?: number | null;
		ties?: number | null;
		wins?: number | null;
	}
	export interface TeamRecordHomeGamesFormProperties {
		games: FormControl<number | null | undefined>,
		losses: FormControl<number | null | undefined>,
		ties: FormControl<number | null | undefined>,
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
		games?: number | null;
		losses?: number | null;
		ties?: number | null;
		wins?: number | null;
	}
	export interface TeamRecordTotalFormProperties {
		games: FormControl<number | null | undefined>,
		losses: FormControl<number | null | undefined>,
		ties: FormControl<number | null | undefined>,
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
		points?: number | null;
		rank?: number | null;
		team?: string | null;
		year?: number | null;
	}
	export interface TeamRecruitingRankFormProperties {
		points: FormControl<number | null | undefined>,
		rank: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		ranking?: number | null;
		rating?: number | null;
		secondOrderWins?: number | null;
		sos?: number | null;
		specialTeams?: TeamSPRatingSpecialTeams;
		team?: string | null;
		year?: number | null;
	}
	export interface TeamSPRatingFormProperties {
		conference: FormControl<string | null | undefined>,
		ranking: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		secondOrderWins: FormControl<number | null | undefined>,
		sos: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		explosiveness?: number | null;
		havoc?: TeamSPRatingDefenseHavoc;
		pasing?: number | null;
		passingDowns?: number | null;
		ranking?: number | null;
		rating?: number | null;
		rushing?: number | null;
		standardDowns?: number | null;
		success?: number | null;
	}
	export interface TeamSPRatingDefenseFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		pasing: FormControl<number | null | undefined>,
		passingDowns: FormControl<number | null | undefined>,
		ranking: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		standardDowns: FormControl<number | null | undefined>,
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
		db?: number | null;
		frontSeven?: number | null;
		total?: number | null;
	}
	export interface TeamSPRatingDefenseHavocFormProperties {
		db: FormControl<number | null | undefined>,
		frontSeven: FormControl<number | null | undefined>,
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
		explosiveness?: number | null;
		pace?: number | null;
		passing?: number | null;
		passingDowns?: number | null;
		ranking?: number | null;
		rating?: number | null;
		runRate?: number | null;
		rushing?: number | null;
		standardDowns?: number | null;
		success?: number | null;
	}
	export interface TeamSPRatingOffenseFormProperties {
		explosiveness: FormControl<number | null | undefined>,
		pace: FormControl<number | null | undefined>,
		passing: FormControl<number | null | undefined>,
		passingDowns: FormControl<number | null | undefined>,
		ranking: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		runRate: FormControl<number | null | undefined>,
		rushing: FormControl<number | null | undefined>,
		standardDowns: FormControl<number | null | undefined>,
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
		rating?: number | null;
	}
	export interface TeamSPRatingSpecialTeamsFormProperties {
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
		ranking?: number | null;
		rating?: number | null;
		team?: string | null;
		year?: number | null;
	}
	export interface TeamSRSRatingFormProperties {
		conference: FormControl<string | null | undefined>,
		division: FormControl<string | null | undefined>,
		ranking: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		team: FormControl<string | null | undefined>,
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
		games?: number | null;
		losses?: number | null;

		/** Final ranking in the AP poll */
		postseason_rank?: number | null;

		/** Rank in the AP preseason poll */
		preseason_rank?: number | null;
		school?: string | null;

		/** Final SP+ defensive rating */
		sp_defense?: number | null;

		/** Final SP+ offensive rating */
		sp_offense?: number | null;

		/** Final overall SP+ rating */
		sp_overall?: number | null;

		/** Final SRS rankings */
		srs?: number | null;
		ties?: number | null;
		wins?: number | null;
		year?: string | null;
	}
	export interface TeamSeasonFormProperties {
		games: FormControl<number | null | undefined>,
		losses: FormControl<number | null | undefined>,

		/** Final ranking in the AP poll */
		postseason_rank: FormControl<number | null | undefined>,

		/** Rank in the AP preseason poll */
		preseason_rank: FormControl<number | null | undefined>,
		school: FormControl<string | null | undefined>,

		/** Final SP+ defensive rating */
		sp_defense: FormControl<number | null | undefined>,

		/** Final SP+ offensive rating */
		sp_offense: FormControl<number | null | undefined>,

		/** Final overall SP+ rating */
		sp_overall: FormControl<number | null | undefined>,

		/** Final SRS rankings */
		srs: FormControl<number | null | undefined>,
		ties: FormControl<number | null | undefined>,
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
		season?: number | null;
		statName?: string | null;
		statValue?: number | null;
		team?: string | null;
	}
	export interface TeamSeasonStatFormProperties {
		conference: FormControl<string | null | undefined>,
		season: FormControl<number | null | undefined>,
		statName: FormControl<string | null | undefined>,
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
		talent?: number | null;
		year?: number | null;
	}
	export interface TeamTalentFormProperties {
		school: FormControl<string | null | undefined>,
		talent: FormControl<number | null | undefined>,
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
		capacity?: number | null;
		city?: string | null;
		country_code?: string | null;
		dome?: boolean | null;
		elevation?: number | null;
		grass?: boolean | null;
		id?: number | null;
		location?: VenueLocation;
		name?: string | null;
		state?: string | null;
		timezone?: string | null;
		year_constructed?: number | null;
		zip?: string | null;
	}
	export interface VenueFormProperties {
		capacity: FormControl<number | null | undefined>,
		city: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		dome: FormControl<boolean | null | undefined>,
		elevation: FormControl<number | null | undefined>,
		grass: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
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
		x?: number | null;
		y?: number | null;
	}
	export interface VenueLocationFormProperties {
		x: FormControl<number | null | undefined>,
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
		season?: number | null;
		seasonType?: string | null;
		week?: number | null;
	}
	export interface WeekFormProperties {
		firstGameStart: FormControl<string | null | undefined>,
		lastGameStart: FormControl<string | null | undefined>,
		season: FormControl<number | null | undefined>,
		seasonType: FormControl<string | null | undefined>,
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
		 * @param {number} minYear Minimum year filter (inclusive)
		 * @param {number} maxYear Maximum year filter (inclusive)
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
		 * @param {number} week Week filter
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
		 * @param {number} week Week filter
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @param {string} team Team
		 * @param {string} home Home team filter
		 * @param {string} away Away team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} division Division classification filter (fbs/fcs/ii/iii)
		 * @param {number} id id filter for querying a single game
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
		 * @param {number} week Week filter
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
		 * @param {number} week Week filter
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} category Category filter (e.g defensive)
		 * @param {number} gameId Game id filter
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
		 * @param {number} week Week filter
		 * @param {string} seasonType Season type filter (regular or postseason)
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {number} gameId Game id filter
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
		 * @param {number} year Year filter (required if no game id)
		 * @param {number} week Week filter
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
		 * @param {number} year Year/season filter for games
		 * @param {number} week Week filter
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
		 * @param {number} week Week filter
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
		 * @param {number} week Week filter
		 * @param {string} team Team filter
		 * @param {number} gameId gameId filter (from /games endpoint)
		 * @param {number} athleteId athleteId filter (from /roster endpoint)
		 * @param {number} statTypeId statTypeId filter (from /play/stat/types endpoint)
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
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} position Position abbreviation filter
		 * @param {number} playerId Player id filter
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
		 * @param {number} week Week filter (required if team, offense, or defense, not specified)
		 * @param {string} team Team filter
		 * @param {string} offense Offensive team filter
		 * @param {string} defense Defensive team filter
		 * @param {string} conference Conference filter
		 * @param {string} offenseConference Offensive conference filter
		 * @param {string} defenseConference Defensive conference filter
		 * @param {number} playType Play type filter
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
		 * @param {number} week Week filter
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
		 * @param {number} week Week filter
		 * @param {string} team Team filter
		 * @param {string} position Position abbreviation filter
		 * @param {number} playerId Player id filter
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
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {string} position Position abbreviation filter
		 * @param {number} playerId Player id filter
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
		 * @param {number} distance Distance filter
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
		 * @param {number} week Week filter
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
		 * @param {number} week Maximum week filter
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
		 * @param {number} endYear Ending year
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
		 * @param {number} week Week filter
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
		 * @param {string} team Team filter
		 * @param {string} conference Conference abbreviation filter
		 * @param {number} startWeek Start week filter
		 * @param {number} endWeek Start week filter
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
		 * @param {string} team Team filter (required if no year specified)
		 * @param {string} conference Conference abbreviation filter
		 * @param {number} startWeek Starting week filter
		 * @param {number} endWeek Starting week filter
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
		 * @param {string} team Team filter (required if no year specified)
		 * @param {boolean} excludeGarbageTime Filter to remove garbage time plays from calculations
		 * @param {number} startWeek Starting week filter
		 * @param {number} endWeek Starting week filter
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
		 * @param {number} maxYear Maximum year
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

