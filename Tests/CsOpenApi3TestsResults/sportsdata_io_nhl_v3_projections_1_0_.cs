//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DfsSlate
	{
		
		[System.Runtime.Serialization.DataMember()]
		public DfsSlateGame[] DfsSlateGames { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DfsSlatePlayer[] DfsSlatePlayers { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsMultiDaySlate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> NumberOfGames { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Operator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorDay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorGameType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OperatorSlateID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorStartTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> RemovedByOperator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SalaryCap { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] SlateRosterSlots { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DfsSlateGame
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Game Game { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OperatorGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> RemovedByOperator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateID { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DfsSlatePlayer
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorPlayerName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] OperatorRosterSlots { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OperatorSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OperatorSlatePlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerGameProjectionStatID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> RemovedByOperator { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlateID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SlatePlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamID { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Game
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Attendance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayRotationNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Channel { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTimeUTC { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string GameEndDateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalAwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalHomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeRotationNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsClosed { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> NeutralVenue { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OverPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> OverUnder { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Period { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Period[] Periods { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PointSpread { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadAwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadHomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Series SeriesInfo { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StadiumID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> UnderPayout { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Period
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Penalty[] Penalties { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ScoringPlay[] ScoringPlays { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Penalty
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BenchPenaltyServedByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DrawnByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DrawnByTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsBenchPenalty { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenalizedPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenalizedTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenaltyID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PenaltyMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ScoringPlay
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AllowedByTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AssistedByPlayerID1 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AssistedByPlayerID2 { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> EmptyNet { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> PowerPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoredByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoredByTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ScoringPlayID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> ShortHanded { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Goaltender
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Confirmed { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FirstName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Jersey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamID { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Player
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string BirthCity { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string BirthDate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string BirthState { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Catches { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DepthChartOrder { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DepthChartPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DraftKingsName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DraftKingsPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FanDuelName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FanDuelPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FantasyAlarmPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FantasyDraftName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FantasyDraftPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FirstName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Height { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryBodyPart { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryNotes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStartDate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStatus { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Jersey { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string PhotoUrl { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Position { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RotoWirePlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> RotoworldPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Shoots { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string SportRadarPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SportsDirectPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StatsPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotNoBackgroundUpdated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotNoBackgroundUrl { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotUpdated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string UsaTodayHeadshotUrl { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> UsaTodayPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Weight { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> XmlTeamPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string YahooName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> YahooPlayerID { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PlayerGameProjection
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Assists { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> BenchPenaltyMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Blocks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DraftKingsPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> DraftKingsSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> EmptyNetGoals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FaceoffsLost { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FaceoffsWon { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FanDuelPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FanDuelSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FantasyDataSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FantasyDraftPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> FantasyDraftSalary { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPoints { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsDraftKings { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsFanDuel { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsFantasyDraft { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> FantasyPointsYahoo { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Games { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Giveaways { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalOpponentID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Goals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoaltendingGoalsAgainst { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoaltendingLosses { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GoaltendingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoaltendingOvertimeLosses { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoaltendingSaves { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GoaltendingSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoaltendingShotsAgainst { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoaltendingShutouts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> GoaltendingWins { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> HatTricks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Hits { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeOrAway { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryBodyPart { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryNotes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStartDate { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string InjuryStatus { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsGameOver { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Minutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Opponent { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OpponentID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OpponentPositionRank { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OpponentRank { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PenaltyMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PlusMinus { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Position { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PowerPlayAssists { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PowerPlayGoals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Seconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Shifts { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> ShootoutGoals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> ShortHandedAssists { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> ShortHandedGoals { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> ShotsOnGoal { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Started { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StatID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Takeaways { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string YahooPosition { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> YahooSalary { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Series
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamWins { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameNumber { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamWins { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxLength { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class StartingGoaltenders
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Goaltender AwayGoaltender { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Goaltender HomeGoaltender { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// DFS Slates by Date
		/// DfsSlatesByDate {format}/DfsSlatesByDate/{date}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.</param>
		public async Task<DfsSlate[]> DfsSlatesByDateAsync(DfsSlatesByDateFormat format, string date, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/DfsSlatesByDate/"+ (date==null? "" : System.Uri.EscapeDataString(date));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DfsSlate[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Injured Players
		/// This endpoint provides all currently injured NHL players, along with injury details.
		/// InjuredPlayers {format}/InjuredPlayers
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		public async Task<Player[]> InjuredPlayersAsync(DfsSlatesByDateFormat format, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/InjuredPlayers";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Player[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
		/// ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries {format}/PlayerGameProjectionStatsByDate/{date}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		/// <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		/// </param>
		public async Task<PlayerGameProjection[]> ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesAsync(DfsSlatesByDateFormat format, string date, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayerGameProjectionStatsByDate/"+ (date==null? "" : System.Uri.EscapeDataString(date));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PlayerGameProjection[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
		/// ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries {format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		/// <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		/// </param>
		/// <param name="playerid">Unique FantasyData Player ID.
		///Example:<code>30000378</code>.</param>
		public async Task<PlayerGameProjection> ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesAsync(DfsSlatesByDateFormat format, string date, string playerid, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/PlayerGameProjectionStatsByPlayer/"+ (date==null? "" : System.Uri.EscapeDataString(date))+"/"+ (playerid==null? "" : System.Uri.EscapeDataString(playerid));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PlayerGameProjection>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Starting Goaltenders by Date
		/// This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.
		/// StartingGoaltendersByDate {format}/StartingGoaltendersByDate/{date}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.</param>
		public async Task<StartingGoaltenders[]> StartingGoaltendersByDateAsync(DfsSlatesByDateFormat format, string date, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+format+"/StartingGoaltendersByDate/"+ (date==null? "" : System.Uri.EscapeDataString(date));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<StartingGoaltenders[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum DfsSlatesByDateFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		XML = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		JSON = 1,
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}
