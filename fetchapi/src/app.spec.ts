import * as namespaces from './clientapi/WebApiFetchClientAuto';

const My_Pet_Client = namespaces.My_Pet_Client;
const apiBaseUri = 'http://localhost:5000/';

describe('Basic', ()=>{
  it('simple 1', done=>{
    expect(true).toBeTruthy();
    done();
  });

  it('simple 2', done=>{

    expect(true).toBeTruthy();
    done();
  });

});


describe('Pet API', () => {
	const service = new namespaces.My_Pet_Client.PetClient(apiBaseUri);

	it('getPetById', (done) => {
		service.GetPetById(12).then(
			data => {
				expect(data.name).toBe('Narco');
				done();
			},
			error => {
				
				done();
			}
		);
	}
	);

	it('getPetByIdWithHeaders', (done) => {
		service.GetPetById(13).then(
			data => {
				expect(data.name).toBe('Bombasto');
				done();
			},
			error => {
				
				done();
			}
		);
	}
	);

	it('FindPetsByStatus', (done) => {
		service.FindPetsByStatus([My_Pet_Client.PetStatus.sold, My_Pet_Client.PetStatus.pending]).then(
			data => {
				expect(data.length).toBe(3);
				done();
			},
			error => {
				
				done();
			}
		);
	}
	);

	it('DeletePetNotFound', (done) => {
		service.DeletePet(9).then(
			data => {
				expect(data.status).toBe(404);
				done();
			},
			error => {
				expect(error).toContain("NoSuchPet");
				done();
			}
		);
	}
	);

	it('DeletePet', (done) => {
		service.DeletePet(13).then(
			data => {
				expect(data.status).toBe(200);
				done();
			},
			error => {
				expect(error).toContain("NoSuchPet");
				done();
			}
		);
	}
	);

	it('AddPetWithHeaders', (done) => {
		service.AddPet({ name: 'Pet' + Date.now().toString(), photoUrls: [] }, ()=>{return { 'transaction-id': '01234567' }}).then(
			response => {
				console.info('Response is ' + JSON.stringify(response));
				expect(response.status).toBe(200);
				response.text().then(t=>{
					expect(t).toContain('Pet');
					expect(t).toContain('01234567');	
				});

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
