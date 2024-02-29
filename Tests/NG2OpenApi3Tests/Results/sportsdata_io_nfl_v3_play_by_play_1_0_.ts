import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Play {
		Created?: string | null;
		Description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Distance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down?: number | null;
		IsScoringPlay?: boolean | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID?: number | null;
		PlayStats?: Array<PlayStat>;
		PlayTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID?: number | null;
		QuarterName?: string | null;
		ScoringPlay?: ScoringPlay;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds?: number | null;
		Type?: string | null;
		Updated?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardLine?: number | null;
		YardLineTerritory?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardsGained?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardsToEndZone?: number | null;
	}
	export interface PlayFormProperties {
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Distance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down: FormControl<number | null | undefined>,
		IsScoringPlay: FormControl<boolean | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID: FormControl<number | null | undefined>,
		PlayTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID: FormControl<number | null | undefined>,
		QuarterName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingMinutes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardLine: FormControl<number | null | undefined>,
		YardLineTerritory: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardsGained: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardsToEndZone: FormControl<number | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Distance: new FormControl<number | null | undefined>(undefined),
			Down: new FormControl<number | null | undefined>(undefined),
			IsScoringPlay: new FormControl<boolean | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayTime: new FormControl<string | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
			QuarterName: new FormControl<string | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			YardLine: new FormControl<number | null | undefined>(undefined),
			YardLineTerritory: new FormControl<string | null | undefined>(undefined),
			YardsGained: new FormControl<number | null | undefined>(undefined),
			YardsToEndZone: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayStat {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKicks?: number | null;
		Created?: string | null;
		Direction?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Fumbles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesForced?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesLost?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesRecovered?: number | null;
		HomeOrAway?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Interceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Kickoffs?: number | null;
		Name?: string | null;
		Opponent?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassesDefended?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingCompletions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingInterceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingSackYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingSacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayStatID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntTouchbacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Punts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntsHadBlocked?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingTargets?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingYards?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Receptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingTouchdowns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingYards?: number | null;

		/** Type: double */
		SackYards?: number | null;

		/** Type: double */
		Sacks?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Safeties?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SoloTackles?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLoss?: number | null;
		Team?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionAttempts?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionPasses?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReceptions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReturns?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionRuns?: number | null;
		Updated?: string | null;
	}
	export interface PlayStatFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AssistedTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		BlockedKicks: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Direction: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ExtraPointsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsAttempted: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsMade: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FieldGoalsYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumbleReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Fumbles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesForced: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesLost: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		FumblesRecovered: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		InterceptionReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Interceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		KickoffYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Kickoffs: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassesDefended: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingCompletions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingInterceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingSackYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingSacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PassingYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Penalties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PenaltyYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayStatID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PlayerID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturnYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntTouchbacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Punts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PuntsHadBlocked: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingTargets: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ReceivingYards: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Receptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingTouchdowns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RushingYards: FormControl<number | null | undefined>,

		/** Type: double */
		SackYards: FormControl<number | null | undefined>,

		/** Type: double */
		Sacks: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Safeties: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SoloTackles: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TacklesForLoss: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionAttempts: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionPasses: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReceptions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionReturns: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		TwoPointConversionRuns: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayStatFormGroup() {
		return new FormGroup<PlayStatFormProperties>({
			AssistedTackles: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturnYards: new FormControl<number | null | undefined>(undefined),
			BlockedKickReturns: new FormControl<number | null | undefined>(undefined),
			BlockedKicks: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Direction: new FormControl<string | null | undefined>(undefined),
			ExtraPointsAttempted: new FormControl<number | null | undefined>(undefined),
			ExtraPointsHadBlocked: new FormControl<number | null | undefined>(undefined),
			ExtraPointsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturnYards: new FormControl<number | null | undefined>(undefined),
			FieldGoalReturns: new FormControl<number | null | undefined>(undefined),
			FieldGoalsAttempted: new FormControl<number | null | undefined>(undefined),
			FieldGoalsHadBlocked: new FormControl<number | null | undefined>(undefined),
			FieldGoalsMade: new FormControl<number | null | undefined>(undefined),
			FieldGoalsYards: new FormControl<number | null | undefined>(undefined),
			FumbleReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			FumbleReturnYards: new FormControl<number | null | undefined>(undefined),
			Fumbles: new FormControl<number | null | undefined>(undefined),
			FumblesForced: new FormControl<number | null | undefined>(undefined),
			FumblesLost: new FormControl<number | null | undefined>(undefined),
			FumblesRecovered: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InterceptionReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			InterceptionReturnYards: new FormControl<number | null | undefined>(undefined),
			Interceptions: new FormControl<number | null | undefined>(undefined),
			KickReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			KickReturnYards: new FormControl<number | null | undefined>(undefined),
			KickReturns: new FormControl<number | null | undefined>(undefined),
			KickoffTouchbacks: new FormControl<number | null | undefined>(undefined),
			KickoffYards: new FormControl<number | null | undefined>(undefined),
			Kickoffs: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			PassesDefended: new FormControl<number | null | undefined>(undefined),
			PassingAttempts: new FormControl<number | null | undefined>(undefined),
			PassingCompletions: new FormControl<number | null | undefined>(undefined),
			PassingInterceptions: new FormControl<number | null | undefined>(undefined),
			PassingSackYards: new FormControl<number | null | undefined>(undefined),
			PassingSacks: new FormControl<number | null | undefined>(undefined),
			PassingTouchdowns: new FormControl<number | null | undefined>(undefined),
			PassingYards: new FormControl<number | null | undefined>(undefined),
			Penalties: new FormControl<number | null | undefined>(undefined),
			PenaltyYards: new FormControl<number | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayStatID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PuntReturnTouchdowns: new FormControl<number | null | undefined>(undefined),
			PuntReturnYards: new FormControl<number | null | undefined>(undefined),
			PuntReturns: new FormControl<number | null | undefined>(undefined),
			PuntTouchbacks: new FormControl<number | null | undefined>(undefined),
			PuntYards: new FormControl<number | null | undefined>(undefined),
			Punts: new FormControl<number | null | undefined>(undefined),
			PuntsHadBlocked: new FormControl<number | null | undefined>(undefined),
			ReceivingTargets: new FormControl<number | null | undefined>(undefined),
			ReceivingTouchdowns: new FormControl<number | null | undefined>(undefined),
			ReceivingYards: new FormControl<number | null | undefined>(undefined),
			Receptions: new FormControl<number | null | undefined>(undefined),
			RushingAttempts: new FormControl<number | null | undefined>(undefined),
			RushingTouchdowns: new FormControl<number | null | undefined>(undefined),
			RushingYards: new FormControl<number | null | undefined>(undefined),
			SackYards: new FormControl<number | null | undefined>(undefined),
			Sacks: new FormControl<number | null | undefined>(undefined),
			Safeties: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			SoloTackles: new FormControl<number | null | undefined>(undefined),
			TacklesForLoss: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TwoPointConversionAttempts: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionPasses: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReceptions: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionReturns: new FormControl<number | null | undefined>(undefined),
			TwoPointConversionRuns: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayByPlay {
		Plays?: Array<Play>;
		Quarters?: Array<Quarter>;
		Score?: Score;
	}
	export interface PlayByPlayFormProperties {
	}
	export function CreatePlayByPlayFormGroup() {
		return new FormGroup<PlayByPlayFormProperties>({
		});

	}

	export interface Quarter {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore?: number | null;
		Created?: string | null;
		Description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore?: number | null;
		Name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;
		Updated?: string | null;
	}
	export interface QuarterFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamScore: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		QuarterID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateQuarterFormGroup() {
		return new FormGroup<QuarterFormProperties>({
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			QuarterID: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Score {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter4?: number | null;
		AwayTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTimeouts?: number | null;
		Canceled?: boolean | null;
		Channel?: string | null;
		Closed?: boolean | null;
		Date?: string | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;
		Distance?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down?: number | null;
		DownAndDistance?: string | null;
		ForecastDescription?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed?: number | null;
		GameEndDateTime?: string | null;
		GameKey?: string | null;

		/** Type: double */
		GeoLat?: number | null;

		/** Type: double */
		GeoLong?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID?: number | null;
		Has1stQuarterStarted?: boolean | null;
		Has2ndQuarterStarted?: boolean | null;
		Has3rdQuarterStarted?: boolean | null;
		Has4thQuarterStarted?: boolean | null;
		HasStarted?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreOvertime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter1?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter2?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter3?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter4?: number | null;
		HomeTeam?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTimeouts?: number | null;
		IsInProgress?: boolean | null;
		IsOver?: boolean | null;
		IsOvertime?: boolean | null;
		LastPlay?: string | null;
		LastUpdated?: string | null;
		NeutralVenue?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout?: number | null;

		/** Type: double */
		OverUnder?: number | null;

		/** Type: double */
		PointSpread?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine?: number | null;
		Possession?: string | null;
		Quarter?: string | null;
		QuarterDescription?: string | null;
		RedZone?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;
		StadiumDetails?: Stadium;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemaining?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardLine?: number | null;
		YardLineTerritory?: string | null;
	}
	export interface ScoreFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Attendance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayRotationNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScoreQuarter4: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayTimeouts: FormControl<number | null | undefined>,
		Canceled: FormControl<boolean | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		Closed: FormControl<boolean | null | undefined>,
		Date: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		Distance: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Down: FormControl<number | null | undefined>,
		DownAndDistance: FormControl<string | null | undefined>,
		ForecastDescription: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempHigh: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastTempLow: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindChill: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ForecastWindSpeed: FormControl<number | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,

		/** Type: double */
		GeoLat: FormControl<number | null | undefined>,

		/** Type: double */
		GeoLong: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalAwayTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalGameID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		Has1stQuarterStarted: FormControl<boolean | null | undefined>,
		Has2ndQuarterStarted: FormControl<boolean | null | undefined>,
		Has3rdQuarterStarted: FormControl<boolean | null | undefined>,
		Has4thQuarterStarted: FormControl<boolean | null | undefined>,
		HasStarted: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeRotationNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreOvertime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter1: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter2: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter3: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScoreQuarter4: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeTimeouts: FormControl<number | null | undefined>,
		IsInProgress: FormControl<boolean | null | undefined>,
		IsOver: FormControl<boolean | null | undefined>,
		IsOvertime: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		LastUpdated: FormControl<string | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		OverPayout: FormControl<number | null | undefined>,

		/** Type: double */
		OverUnder: FormControl<number | null | undefined>,

		/** Type: double */
		PointSpread: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Possession: FormControl<string | null | undefined>,
		Quarter: FormControl<string | null | undefined>,
		QuarterDescription: FormControl<string | null | undefined>,
		RedZone: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		RefereeID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemaining: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		UnderPayout: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		YardLine: FormControl<number | null | undefined>,
		YardLineTerritory: FormControl<string | null | undefined>,
	}
	export function CreateScoreFormGroup() {
		return new FormGroup<ScoreFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayScore: new FormControl<number | null | undefined>(undefined),
			AwayScoreOvertime: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			AwayScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTimeouts: new FormControl<number | null | undefined>(undefined),
			Canceled: new FormControl<boolean | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			Closed: new FormControl<boolean | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			Distance: new FormControl<string | null | undefined>(undefined),
			Down: new FormControl<number | null | undefined>(undefined),
			DownAndDistance: new FormControl<string | null | undefined>(undefined),
			ForecastDescription: new FormControl<string | null | undefined>(undefined),
			ForecastTempHigh: new FormControl<number | null | undefined>(undefined),
			ForecastTempLow: new FormControl<number | null | undefined>(undefined),
			ForecastWindChill: new FormControl<number | null | undefined>(undefined),
			ForecastWindSpeed: new FormControl<number | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			Has1stQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			Has2ndQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			Has3rdQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			Has4thQuarterStarted: new FormControl<boolean | null | undefined>(undefined),
			HasStarted: new FormControl<boolean | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			HomeScoreOvertime: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter1: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter2: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter3: new FormControl<number | null | undefined>(undefined),
			HomeScoreQuarter4: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTimeouts: new FormControl<number | null | undefined>(undefined),
			IsInProgress: new FormControl<boolean | null | undefined>(undefined),
			IsOver: new FormControl<boolean | null | undefined>(undefined),
			IsOvertime: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<string | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Possession: new FormControl<string | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			QuarterDescription: new FormControl<string | null | undefined>(undefined),
			RedZone: new FormControl<string | null | undefined>(undefined),
			RefereeID: new FormControl<number | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemaining: new FormControl<string | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
			YardLine: new FormControl<number | null | undefined>(undefined),
			YardLineTerritory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoringPlay {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore?: number | null;
		AwayTeam?: string | null;
		Date?: string | null;
		GameKey?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore?: number | null;
		HomeTeam?: string | null;
		PlayDescription?: string | null;
		Quarter?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringPlayID?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence?: number | null;
		Team?: string | null;
		TimeRemaining?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week?: number | null;
	}
	export interface ScoringPlayFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		AwayScore: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		Date: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		HomeScore: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		PlayDescription: FormControl<string | null | undefined>,
		Quarter: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoreID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ScoringPlayID: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Season: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		SeasonType: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Sequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TimeRemaining: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Week: FormControl<number | null | undefined>,
	}
	export function CreateScoringPlayFormGroup() {
		return new FormGroup<ScoringPlayFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<string | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			PlayDescription: new FormControl<string | null | undefined>(undefined),
			Quarter: new FormControl<string | null | undefined>(undefined),
			ScoreID: new FormControl<number | null | undefined>(undefined),
			ScoringPlayID: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TimeRemaining: new FormControl<string | null | undefined>(undefined),
			Week: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stadium {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;

		/** Type: double */
		GeoLat?: number | null;

		/** Type: double */
		GeoLong?: number | null;
		Name?: string | null;
		PlayingSurface?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID?: number | null;
		State?: string | null;
		Type?: string | null;
	}
	export interface StadiumFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,

		/** Type: double */
		GeoLat: FormControl<number | null | undefined>,

		/** Type: double */
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayingSurface: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		StadiumID: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateStadiumFormGroup() {
		return new FormGroup<StadiumFormProperties>({
			Capacity: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayingSurface: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Play By Play
		 * Get {format}/PlayByPlay/{season}/{week}/{hometeam}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} hometeam Abbreviation of the home team. Example: <code>WAS</code>.
		 */
		PlayByPlay(format: PlayByPlayFormat, season: string, week: string, hometeam: string): Observable<PlayByPlay> {
			return this.http.get<PlayByPlay>(this.baseUri + format + '/PlayByPlay/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (hometeam == null ? '' : encodeURIComponent(hometeam)) + '', {});
		}

		/**
		 * Play By Play Delta
		 * Get {format}/PlayByPlayDelta/{season}/{week}/{minutes}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season and the season type. If no season type is provided, then the default is regular season.
		 *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
		 *         
		 * @param {string} week Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
		 *           Example: <code>1</code>
		 *         
		 * @param {string} minutes Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>
		 *           <code>1</code> or <code>2</code>.
		 *         
		 */
		PlayByPlayDelta(format: PlayByPlayFormat, season: string, week: string, minutes: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/PlayByPlayDelta/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (week == null ? '' : encodeURIComponent(week)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}

		/**
		 * Play By Play Simulation
		 * Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.
		 * Get {format}/SimulatedPlayByPlay/{numberofplays}
		 * @param {PlayByPlayFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} numberofplays The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.
		 */
		PlayByPlaySimulation(format: PlayByPlayFormat, numberofplays: string): Observable<Array<PlayByPlay>> {
			return this.http.get<Array<PlayByPlay>>(this.baseUri + format + '/SimulatedPlayByPlay/' + (numberofplays == null ? '' : encodeURIComponent(numberofplays)) + '', {});
		}
	}

	export enum PlayByPlayFormat { XML = 'XML', JSON = 'JSON' }

}

