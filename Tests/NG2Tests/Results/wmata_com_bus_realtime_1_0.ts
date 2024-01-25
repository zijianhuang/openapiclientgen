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
		 * XML - Next Buses
		 * <h4 class="text-primary">Description</h4>
		 * <p>Returns next bus arrival times at a stop.</p>
		 * <h4 class="text-primary">Response Elements</h4>
		 * <table class="table table-condensed table-hover">
		 * <thead>
		 * <tr>
		 * <th class="col-md-3">Element</th>
		 * <th>Description</th>
		 * </tr>
		 * </thead>
		 * <tbody>
		 * <tr>
		 * <td>Predictions</td>
		 * <td>
		 * Array containing bus predictions (<a href=
		 * "#NextBusPrediction">NextBusPrediction</a>).
		 * </td>
		 * </tr>
		 * <tr>
		 * <td>StopName</td>
		 * <td>Full name of the given StopID.</td>
		 * </tr>
		 * <tr>
		 * <td colspan="2">
		 * <div class="text-primary" style="margin-top: 1em">
		 * <a id="NextBusPrediction" name=
		 * "NextBusPrediction">NextBusPrediction Elements</a>
		 * </div>
		 * </td>
		 * </tr>
		 * <tr>
		 * <td>DirectionNum</td>
		 * <td>Denotes a binary direction (0 or 1) of the bus. There is no
		 * specific mapping to direction, but a different value for the same
		 * route signifies that the buses are traveling in opposite
		 * directions. Use the DirectionText element to show the actual
		 * destination of the bus.</td>
		 * </tr>
		 * <tr>
		 * <td>DirectionText</td>
		 * <td>Customer-friendly description of direction and destination for
		 * a bus.</td>
		 * </tr>
		 * <tr>
		 * <td>Minutes</td>
		 * <td>Minutes until bus arrival at this stop. Numeric value.</td>
		 * </tr>
		 * <tr>
		 * <td>RouteID</td>
		 * <td>Base route name as shown on the bus. This can be used in other
		 * bus-related methods. Note that all variants will be shown as their
		 * base route names (i.e.: 10Av1 and 10Av2 will be shown as 10A).</td>
		 * </tr>
		 * <tr>
		 * <td>TripID</td>
		 * <td>Trip identifier. This can be correlated with the data in our
		 * bus schedule information as well as bus positions.</td>
		 * </tr>
		 * <tr>
		 * <td>VehicleID</td>
		 * <td>Bus identifier. This can be correlated with results returned
		 * from bus positions.</td>
		 * </tr>
		 * </tbody>
		 * </table>
		 * Get Predictions
		 * @param {PredictionsGetByStopIDStopID} StopID 7-digit regional stop ID.
		 * @return {void} Default response code.
		 */
		PredictionsGetByStopID(StopID: PredictionsGetByStopIDStopID, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Predictions?StopID=' + StopID, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * JSON - Next Buses
		 * <h4 class="text-primary">Description</h4>
		 * <p>Returns next bus arrival times at a stop.</p>
		 * <h4 class="text-primary">Response Elements</h4>
		 * <table class="table table-condensed table-hover">
		 * <thead>
		 * <tr>
		 * <th class="col-md-3">Element</th>
		 * <th>Description</th>
		 * </tr>
		 * </thead>
		 * <tbody>
		 * <tr>
		 * <td>Predictions</td>
		 * <td>
		 * Array containing bus predictions (<a href=
		 * "#NextBusPrediction">NextBusPrediction</a>).
		 * </td>
		 * </tr>
		 * <tr>
		 * <td>StopName</td>
		 * <td>Full name of the given StopID.</td>
		 * </tr>
		 * <tr>
		 * <td colspan="2">
		 * <div class="text-primary" style="margin-top: 1em">
		 * <a id="NextBusPrediction" name=
		 * "NextBusPrediction">NextBusPrediction Elements</a>
		 * </div>
		 * </td>
		 * </tr>
		 * <tr>
		 * <td>DirectionNum</td>
		 * <td>Denotes a binary direction (0 or 1) of the bus. There is no
		 * specific mapping to direction, but a different value for the same
		 * route signifies that the buses are traveling in opposite
		 * directions. Use the DirectionText element to show the actual
		 * destination of the bus.</td>
		 * </tr>
		 * <tr>
		 * <td>DirectionText</td>
		 * <td>Customer-friendly description of direction and destination for
		 * a bus.</td>
		 * </tr>
		 * <tr>
		 * <td>Minutes</td>
		 * <td>Minutes until bus arrival at this stop. Numeric value.</td>
		 * </tr>
		 * <tr>
		 * <td>RouteID</td>
		 * <td>Base route name as shown on the bus. This can be used in other
		 * bus-related methods. Note that all variants will be shown as their
		 * base route names (i.e.: 10Av1 and 10Av2 will be shown as 10A).</td>
		 * </tr>
		 * <tr>
		 * <td>TripID</td>
		 * <td>Trip identifier. This can be correlated with the data in our
		 * bus schedule information as well as bus positions.</td>
		 * </tr>
		 * <tr>
		 * <td>VehicleID</td>
		 * <td>Bus identifier. This can be correlated with results returned
		 * from bus positions.</td>
		 * </tr>
		 * </tbody>
		 * </table>
		 * Get json/jPredictions
		 * @param {PredictionsGetByStopIDStopID} StopID 7-digit regional stop ID.
		 * @return {void} Default response type.
		 */
		JsonJPredictionsGetByStopID(StopID: PredictionsGetByStopIDStopID, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'json/jPredictions?StopID=' + StopID, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum PredictionsGetByStopIDStopID { _1001195 = 0 }

}

