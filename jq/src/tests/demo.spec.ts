/// <reference path="../clientapi/WebApiJqClientAuto.ts"/>

// Make sure chutzpah.json is updated with  reference to the jQuery lib when the lib is upgraded.
// Sometimes the test cases are not appearing in Test Explorer, then claring %temp% may help.
// To launch IIS Express, use something like this: C:\VsProjects\webapiclientgen>"C:\Program Files (x86)\IIS Express\iisexpress.exe" /site:DemoWebApi /apppool:Clr4IntegratedAppPool /config:c:\vsprojects\webapiclientgen\.vs\config\applicationhost.config
// The post build events will copy the JS file of this test to wwwroot and bin\debug\...\wwwroot\

/*
And make sure the testApi credential exists through
POST to http://localhost:10965/api/Account/Register
Content-Type: application/json

{
Email: 'testapi@test.com',
Password: 'Tttttttt_8',
ConfirmPassword:  'Tttttttt_8'
}

*/

module CommonCases {
	QUnit.config.testTimeout = 5000;
	const baseUri = 'http://localhost:5000/';

	let authHttpClient = new HttpClient();// new AuthHttpClient();
	const petApi = new My_Pet_Client.PetClient(baseUri, authHttpClient, (xhr, options, thrown)=>{
		console.warn(`HTTP status: ${xhr.status}, options: ${options}, thrown: ${thrown}`);
	});

	QUnit.module("Pets", function () {
		QUnit.test("getPetById", function (assert) {
			let done = assert.async();
			petApi.GetPetById('12', data => {
				assert.equal(data.name, 'Narco');
				done();
			});
		});

		QUnit.test("FindPetsByStatus", function (assert) {
			let done = assert.async();
			petApi.FindPetsByStatus(My_Pet_Client.PetStatus.sold, data => {
				assert.equal(data.length, 3);
				done();
			});
		});

		QUnit.test("DeletePetNotFound", function (assert) {
			assert.expect(0);
			petApi.DeletePet('9', data => {
				console.info('Running without assert.');
			});
		});

		QUnit.test("DeletePet", function (assert) {
			let done = assert.async();
			petApi.DeletePet('13', data => {
				console.info('Response is: ' + JSON.stringify(data));
				assert.ok(true);
				done();
			});
		});

		QUnit.test("AddPetWithHeaders", function (assert) {
			let done = assert.async();
			petApi.AddPet(data => {
				assert.ok(true);
				//assert.contains(data.body "Tornado");
				done();
			}, { name: 'Pet' + Date.now().toString(), photoUrls: [] }, ()=>{return { 'transaction-id': '01234567' }});
		});

		QUnit.test("getPetByIdWithHeaders", function (assert) {
			let done = assert.async();
			petApi.GetPetById('14', data => {
				assert.equal(data.name, 'Celeritas');
				done();
			}, ()=>{return { 'transaction-id': '01234567' }});
		});


	});

}