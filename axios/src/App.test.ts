import { AxiosAdapter, AxiosResponse, AxiosError } from 'axios';
import * as namespaces from './clientapi/WebApiAxiosClientAuto';

// JEST provides a few ways of handling async code. This test suite use callbacks, 
// since it is a simple hack from the test suite initially written for Angular 2.

const My_Pet_Client = namespaces.My_Pet_Client;
const apiBaseUri = 'http://localhost:5000/';

function instanceOfAxiosError(obj: any): obj is AxiosError {
	return 'isAxiosError' in obj;
}

export function errorResponseToString(error: AxiosError | any, ): string {
	let errMsg: string;
	if (instanceOfAxiosError(error)) {
		if (error.response.status === 0) {
			errMsg = 'No response from backend. Connection is unavailable.';
		} else {
			if (error.message) {
				errMsg = `${error.response.status} - ${error.response.statusText}: ${error.message}`;
			} else {
				errMsg = `${error.response.status} - ${error.response.statusText}`;
			}
		}

		errMsg += error.message ? (' ' + JSON.stringify(error.message)) : '';
		return errMsg;
	} else {
		errMsg = error.message ? error.message : error.toString();
		return errMsg;
	}
}

describe('Pet API', () => {
	const service = new namespaces.My_Pet_Client.PetClient(apiBaseUri);

	it('getPetById', (done) => {
		service.GetPetById('12').then(
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
		service.GetPetById('13').then(
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
		service.FindPetsByStatus(My_Pet_Client.PetStatus.sold).then(
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
		service.DeletePet('9').then(
			data => {
				fail("Not good.")
				done();
			},
			error => {
				const msg = errorResponseToString(error);
				console.debug('DeletePet: ' + msg);
				expect(error.response.status).toBe(404);
				expect(error.response.data).toContain("NoSuchPet");
				done();
			}
		);
	}
	);

	it('DeletePet', (done) => {
		service.DeletePet('13').then(
			data => {
				expect(data.status).toBe(200); // when ok, data is string of body, rather than a response structure.
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
		service.AddPet({ name: 'Pet' + Date.now().toString(), photoUrls: [] }, ()=>{return { 'transaction-id': '01234567' }}).then(
			response => {
				expect(response.name).toContain('Pet');
				done();
			},
			error => {
				//fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

});
