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
		 * Wetter 2021 für Berlin, Reichstag
		 * Abfrage der Wettervorhersage für einen Ort, der entweder durch Angabe eines Suchbegriffs mit dem Parameter `q` oder durch Geo-Koordinaten in den Parametern `lat` und `lon` spezifiziert wird.
		 * Get public/history
		 * @param {string} q Ortssuche mit Freitext
		 * @param {string} from Startdatum der Abfrage im Format (JJJJ-MM-DD)
		 * @param {string} to Enddatum der Abfrage im Format (JJJJ-MM-DD)
		 * @return {string} OK
		 */
		DefaultGetByQAndFromAndTo(q: string | null | undefined, from: string | null | undefined, to: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'public/history?q=' + (q == null ? '' : encodeURIComponent(q)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), { responseType: 'text' });
		}
	}

}

