import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import * as namespaces from './ClientApiAuto';
import My_Pet_Client = namespaces.My_Pet_Client;
const apiBaseUri = 'http://localhost:5000/'; //for DemoCoreWeb

export function petClientFactory(http: HttpClient) {
	return new namespaces.My_Pet_Client.PetClient(apiBaseUri, http);
}


export function errorResponseToString(error: HttpErrorResponse | any, ): string {
	let errMsg: string;
	if (error instanceof HttpErrorResponse) {
		if (error.status === 0) {
			errMsg = 'No response from backend. Connection is unavailable.';
		} else {
			if (error.message) {
				errMsg = `${error.status} - ${error.statusText}: ${error.message}`;
			} else {
				errMsg = `${error.status} - ${error.statusText}`;
			}
		}

		errMsg += error.error ? (' ' + JSON.stringify(error.error)) : '';
		return errMsg;
	} else {
		errMsg = error.message ? error.message : error.toString();
		return errMsg;
	}
}


describe('Pet API', () => {
	let service: namespaces.My_Pet_Client.PetClient;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [
				{
					provide: namespaces.My_Pet_Client.PetClient,
					useFactory: petClientFactory,
					deps: [HttpClient],

				},

			]
		});

		service = TestBed.get(namespaces.My_Pet_Client.PetClient);
	}));

	afterEach(function () {
	});

	it('getPetById', (done) => {
		service.GetPetById(12).subscribe(
			data => {
				expect(data.name).toBe('Narco');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('getPetByIdWithHeaders', (done) => {
		service.GetPetById(13, () => new HttpHeaders({ 'transaction-id': '01234567' })).subscribe(
			data => {
				expect(data.name).toBe('Bombasto');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('FindPetsByStatus', (done) => {
		service.FindPetsByStatus([My_Pet_Client.PetStatus.sold, My_Pet_Client.PetStatus.pending]).subscribe(
			data => {
				expect(data.length).toBe(3);
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('DeletePetNotFound', (done) => {
		service.DeletePet(9).subscribe(
			data => {
				fail("Not good.")
				done();
			},
			error => {
				const msg = errorResponseToString(error);
				console.debug('DeletePet: ' + msg);
				expect(msg).toContain("NoSuchPet");
				done();
			}
		);
	}
	);

	it('DeletePet', (done) => {
		service.DeletePet(13).subscribe(
			data => {
				expect(data.status).toBe(200);
				done();
			},
			error => {
				const msg = errorResponseToString(error);
				console.debug('DeletePet: ' + msg);
				expect(msg).toContain("NoSuchPet");
				done();
			}
		);
	}
	);

	it('AddPetWithHeaders', (done) => {
		service.AddPet({name: 'Pet'+Date.now().toString(), photoUrls: []}, () => new HttpHeaders({ 'transaction-id': '01234567' })).subscribe(
			response => {
				console.info('Response is '+JSON.stringify(response));
				expect(response.status).toBe(200);
				console.debug('headers: '+ response.headers.keys().join(', '));
				//expect(response.headers.get('transaction-id')).toBe('01234567');//https://stackoverflow.com/questions/52443706/angular-httpclient-missing-response-headers
				expect(response.body).toContain('Pet');
				expect(response.body).toContain('01234567');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);





});



