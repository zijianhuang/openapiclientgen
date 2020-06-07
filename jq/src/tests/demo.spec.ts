/// <reference path="../ClientApi/WebApiJQClientAuto.ts"/>

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
	QUnit.config.testTimeout = 30000;
	const baseUri = 'http://localhost:5000/';

	let authHttpClient = new HttpClient();// new AuthHttpClient();
	const petApi = new My_Pet_Client.PetClient(baseUri, authHttpClient);

	QUnit.module("Pets", function () {
		QUnit.test("getPetById", function (assert) {
			let done = assert.async();
			petApi.GetPetById(12, data => {
				assert.equal(data.name, 'Narco');
				done();
			});
		});

		QUnit.test("FindPetsByStatus", function (assert) {
			let done = assert.async();
			petApi.FindPetsByStatus([My_Pet_Client.PetStatus.sold, My_Pet_Client.PetStatus.pending], data => {
				assert.equal(data.length, 3);
				done();
			});
		});

		QUnit.test("DeletePetNotFound", function (assert) {
			let done = assert.async();
			petApi.DeletePet(9, data => {
				assert.ok(false);
				done();
			});
		});

		QUnit.test("DeletePet", function (assert) {
			let done = assert.async();
			petApi.DeletePet(13, data => {
				assert.equal(data.status, 200);
				//assert.ok(data.body.pipeTo() "Tornado");
				done();
			});
		});

		QUnit.test("AddPetWithHeaders", function (assert) {
			let done = assert.async();
			petApi.AddPet(data => {
				assert.equal(data.status, 200);
				//assert.contains(data.body "Tornado");
				done();
			}, { name: 'Pet' + Date.now().toString(), photoUrls: [] }, ()=>{return { 'transaction-id': '01234567' }});
		});

		QUnit.test("getPetByIdWithHeaders", function (assert) {
			let done = assert.async();
			petApi.GetPetById(13, data => {
				assert.equal(data.name, 'Bombasto');
				done();
			}, ()=>{return { 'transaction-id': '01234567' }});
		});


	});

}