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
		/// Return cinema details search result
		/// Return cinema details search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{cinema_name}__: Used as a key word to search cinemas,
		/// 
		/// For more details on how cinemas are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/cinema-list/-updated_date
		/// Cinema_detail_search_read api/v1/cinema-detail/search/{cinema_name}
		/// </summary>
		public async Task Cinema_detail_search_readAsync(string cinema_name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/cinema-detail/search/"+ (cinema_name==null? "" : System.Uri.EscapeDataString(cinema_name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return cinema schedule search result
		/// Return cinema schedule search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search movie cast
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Cinema_schedule_search_read api/v1/cinema-schedule/search/{movie_title}
		/// </summary>
		public async Task Cinema_schedule_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/cinema-schedule/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return cinema schedule search result
		/// Return cinema schedule search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * movie title
		/// * cinema name
		/// * cinema hall name or
		/// * cinema technology
		/// 
		/// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Cinema_schedule_searchall_read api/v1/cinema-schedule/searchall/{param}
		/// </summary>
		public async Task Cinema_schedule_searchall_readAsync(string param, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/cinema-schedule/searchall/"+ (param==null? "" : System.Uri.EscapeDataString(param));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return cinema schedule and showtime search result
		/// Return cinema schedule and showtime search result
		/// 
		/// ### Response Class (Status 200)
		/// * __{movie_title}__: Used as a key word to search movie cast
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Cinema_shedule_showtime_search_read api/v1/cinema-shedule-showtime/search/{movie_title}
		/// </summary>
		public async Task Cinema_shedule_showtime_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/cinema-shedule-showtime/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return cinema schedule and showtime search result
		/// Return cinema schedule and showtime search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * movie title
		/// * cinema name
		/// * cinema hall name
		/// * showtime starting date
		/// * showtime ending date or
		/// * cinema technology
		/// 
		/// For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Cinema_shedule_showtime_searchall_read api/v1/cinema-shedule-showtime/searchall/{param}
		/// </summary>
		public async Task Cinema_shedule_showtime_searchall_readAsync(string param, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/cinema-shedule-showtime/searchall/"+ (param==null? "" : System.Uri.EscapeDataString(param));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return cinema search result
		/// Return cinema search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{id}__: Used as a key to search cinemas,
		/// 
		/// For more details on how cinemas are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/cinema-list/-updated_date
		/// Cinema_search_read api/v1/cinema/search/{id}
		/// </summary>
		public async Task Cinema_search_readAsync(string id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/cinema/search/"+ (id==null? "" : System.Uri.EscapeDataString(id));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return company credits search result
		/// Return company credits search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search company credits for the movie
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details on how company credits are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Company_credits_search_read api/v1/company-credits/search/{movie_title}
		/// </summary>
		public async Task Company_credits_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/company-credits/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return company credits search result
		/// Return company credits search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * company name
		/// * movie title or
		/// * company credit description (such as production, cinematography, etc)
		/// 
		/// For more details on how company credits are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/company-list/company_name
		/// Company_credits_searchall_read api/v1/company-credits/searchall/{param}
		/// </summary>
		public async Task Company_credits_searchall_readAsync(string param, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/company-credits/searchall/"+ (param==null? "" : System.Uri.EscapeDataString(param));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return company search result
		/// Return company search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{company_name}__: Used as a key word to search companies,
		/// 
		/// For more details on how companies are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/company-list/-updated_date
		/// Company_search_read api/v1/company/search/{company_name}
		/// </summary>
		public async Task Company_search_readAsync(string company_name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/company/search/"+ (company_name==null? "" : System.Uri.EscapeDataString(company_name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return filmography type search result
		/// Return filmography type search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{filmography_description}__: Used as a key word to search filmography types
		/// 
		/// For more details on how filmography types are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Filmography_type_search_read api/v1/filmography-type/search/{filmography_description}
		/// </summary>
		public async Task Filmography_type_search_readAsync(string filmography_description, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/filmography-type/search/"+ (filmography_description==null? "" : System.Uri.EscapeDataString(filmography_description));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return filmography search result
		/// Return filmography search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search movies
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details on how filmographies are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Filmography_search_read api/v1/filmography/search/{movie_title}
		/// </summary>
		public async Task Filmography_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/filmography/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return filmography search result
		/// Return filmography search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * artist first name
		/// * artist last name
		/// * artist username
		/// * movie title or
		/// * filmography description (such as director, actor, producer, etc)
		/// 
		/// For more details on how filmographies are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Filmography_searchall_read api/v1/filmography/searchall/{param}
		/// </summary>
		public async Task Filmography_searchall_readAsync(string param, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/filmography/searchall/"+ (param==null? "" : System.Uri.EscapeDataString(param));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return genre type search result
		/// Return genre type search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{genre_description}__: Used as a key word to search genre types
		/// 
		/// For more details on how genre types are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Genre_type_search_read api/v1/genre-type/search/{genre_description}
		/// </summary>
		public async Task Genre_type_search_readAsync(string genre_description, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/genre-type/search/"+ (genre_description==null? "" : System.Uri.EscapeDataString(genre_description));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return movie genre search result
		/// Return movie genre search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search movie genres
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details on how movies are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Genre_search_read api/v1/genre/search/{movie_title}
		/// </summary>
		public async Task Genre_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/genre/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return movie genre search result
		/// Return movie genre search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_genre_type}__: Used as a key word to search movie genres
		/// 
		/// For more details on how movies are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Genre_searchall_read api/v1/genre/searchall/{movie_genre_type}
		/// </summary>
		public async Task Genre_searchall_readAsync(string movie_genre_type, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/genre/searchall/"+ (movie_genre_type==null? "" : System.Uri.EscapeDataString(movie_genre_type));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return job details search result
		/// Return job details search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{job_title}__: Used as a key word to search jobs,
		/// 
		/// For more details on how job are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/job-list/-updated_date
		/// Job_search_read api/v1/job/search/{job_title}
		/// </summary>
		public async Task Job_search_readAsync(string job_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/job/search/"+ (job_title==null? "" : System.Uri.EscapeDataString(job_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return job details search result
		/// Return job details search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{company_name}__: Used as a key word to search jobs,
		/// 
		/// For more details on how job are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/job-list/-updated_date
		/// Job_searchall_read api/v1/job/searchall/{company_name}
		/// </summary>
		public async Task Job_searchall_readAsync(string company_name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/job/searchall/"+ (company_name==null? "" : System.Uri.EscapeDataString(company_name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return movie media search result
		/// Return movie media search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search media for movies
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details on how media is listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Media_search_read api/v1/media/search/{movie_title}
		/// </summary>
		public async Task Media_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/media/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return cast media search result
		/// Return cast media search result
		/// 
		/// ### Response Class (Status 200)
		/// __{user}__ argument can be
		/// * artist first name
		/// * artist last name
		/// * artist username
		/// 
		/// For more details on how cast media is listed [see here][ref].
		/// [ref]: https://etmdb.com/en/cast-list/-updated_date
		/// Media_searchall_read api/v1/media/searchall/{user}
		/// </summary>
		public async Task Media_searchall_readAsync(string user, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/media/searchall/"+ (user==null? "" : System.Uri.EscapeDataString(user));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return movie cast search result
		/// Return movie cast search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search movie cast
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details on how movie casts are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Movie_cast_search_read api/v1/movie-cast/search/{movie_title}
		/// </summary>
		public async Task Movie_cast_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/movie-cast/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return movie cast search result
		/// Return movie cast search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * artist first name
		/// * artist last name
		/// * artist username
		/// * movie title or
		/// * character name
		/// 
		/// For more details on how movie casts are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Movie_cast_searchall_read api/v1/movie-cast/searchall/{param}
		/// </summary>
		public async Task Movie_cast_searchall_readAsync(string param, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/movie-cast/searchall/"+ (param==null? "" : System.Uri.EscapeDataString(param));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return movie search result
		/// Return movie search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search movies
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details on how movies are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Movie_search_read api/v1/movie/search/{movie_title}
		/// </summary>
		public async Task Movie_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/movie/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return news or article search result
		/// Return news or article search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{title}__: Used as a key word to search news and articles,
		/// 
		/// For more details on how news & articles are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/news-list/-updated_date
		/// News_search_read api/v1/news/search/{title}
		/// </summary>
		public async Task News_search_readAsync(string title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/news/search/"+ (title==null? "" : System.Uri.EscapeDataString(title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return cast search result
		/// Return cast search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * artist first name
		/// * artist last name
		/// * artist username
		/// 
		/// For more details on how cast are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/cast-list/-updated_date
		/// People_search_read api/v1/people/search/{user}
		/// </summary>
		public async Task People_search_readAsync(string user, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/people/search/"+ (user==null? "" : System.Uri.EscapeDataString(user));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return showtime search result
		/// Return showtime search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * show time or
		/// * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
		/// 
		/// For more details about showtime, check each cinema from the cinema list [see here][ref].
		/// [ref]: https://etmdb.com/en/movie-list/-updated_date
		/// Showtime_searchall_read api/v1/showtime/searchall/{param}
		/// </summary>
		public async Task Showtime_searchall_readAsync(string param, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/showtime/searchall/"+ (param==null? "" : System.Uri.EscapeDataString(param));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return watchlist search result
		/// Return watchlist search result
		/// 
		/// ### Response Class (Status 200)
		/// 
		/// * __{movie_title}__: Used as a key word to search movies on watchlist
		/// * You can use both Amharic or English charset/font to search
		/// 
		/// For more details on how watchlist are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movies/watchlist/id
		/// Watchlist_search_read api/v1/watchlist/search/{movie_title}
		/// </summary>
		public async Task Watchlist_search_readAsync(string movie_title, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/watchlist/search/"+ (movie_title==null? "" : System.Uri.EscapeDataString(movie_title));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return watchlist search result
		/// Return watchlist search result
		/// 
		/// ### Response Class (Status 200)
		/// __{param}__ argument can be
		/// * artist first name
		/// * artist last name
		/// * artist username
		/// * movie title or
		/// 
		/// For more details on how watchlist are listed [see here][ref].
		/// [ref]: https://etmdb.com/en/movies/watchlist/id
		/// Watchlist_searchall_read api/v1/watchlist/searchall/{param}
		/// </summary>
		public async Task Watchlist_searchall_readAsync(string param, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/watchlist/searchall/"+ (param==null? "" : System.Uri.EscapeDataString(param));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
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