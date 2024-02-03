The quality of your client application depends on the quality of the Web API and the quality of the generated codes. To ensure the basic quality of the generated codes, the integration test suites of OpenApiClientGen v3 cover over 1,700 OpenAPI v3 definitions and over 615 Swagger v2 definitions: generate codes, compile with C# compiler and TypeScript/Angular compiler.

# Levels of QA
During the development, wide variety of tests had been carried out continuously to assure the quality of the code gen, more exactly the quality of the codes generated. As of OpenApiClientGen v1.5, over 1000 Open API definition files of v2 and v3 had been used for testing.

Because of the nature of the product, all tests are integration tests:
1. Generate and compare with correct codes.
1. Generate and build.
1. Generate, build and talk to a real backend.

Each test suites has an ReadMe.md file to further explain.

After checking out the codes, you should run all test suites to ensure the local working copy is working.

![](https://github.com/zijianhuang/openapiclientgen/blob/master/Docs/Images/TestSuitesInitial.png)

## Level 1: Generate codes should pass .NET Core compilation and Angular 2+ build.

### Baseline Tests

* SwagTests covering C#
* SwagTsTests covering TypeScript, targeting Aurelia, AXIOS, Fetch API, jQuery, Angular and Angular Reactive Forms.

The test cases are testing less than 200 Swagger / OpenAPI definitions well selected, covering variety of business domains: a handful of simple examples like "petStore.yaml" and mostly real world yaml (JSON) files.

Most test cases especially those with real world yaml (json) files should had passed C# compilation or TypeScript/Angular compilation.


Some test suites have `appsettings.json' to adjust behaviour temporarily during development. The option could be altered through changing appsettings.json. And after all tests are OK, reverse appsettings.json to the original settings:

```json
	"Build": false,
	"UpdateGenerated":  false
``` 

Property "Build" will trigger the test suite to call C# compiler or Angular compiler.

Each `ng build` upon generated codes of a definition file may take around 15 seconds to 20 seconds on an Intel i7 NUC box, or around 5.5 seconds on "13th Gen Intel Core i7-13700KF 3.40 GHz". The total time estimated should be multiplication by the total number of cases.

**Remarks**

Test suites "NG2Tests" may take over 1 hour or more to finish since it will build over 1000 pieces of generated codes when option "Build" is true. You don't want to run it until other tests suites have become all green, after making significant changes to the functionality of the code gen.

![](https://github.com/zijianhuang/openapiclientgen/blob/master/Docs/Images/TestSuites.png)


### Extended Tests

A small selection of Swagger v2 files (over 615) and most of OpenApi v3.0 (over 1,700) of openapi-directory have beeen used for testing.

These definition files are stored outside this `openapiclientgen` repository, and may be stored in working directory like `C:\VSProjects\Study\openapi-directory\` (466MB) . Therefore, make sure you download:

1. [zipped snapshot](https://github.com/zijianhuang/openapiclientgen/releases/download/v1.8/openapi-directory.zip) of [openapi-directory](https://github.com/APIs-guru/openapi-directory) dated 2020-06-10 to such folder structure. Please do not use the latest openapi-directory. (55MB)
1. [zipped snapshot of 2024-01-14](https://github.com/zijianhuang/openapiclientgen/releases/download/v3/openapi-directory20240114.zip) (73MB)

So you should create 2 folder under folder "Tests", becoming the sibling folder of those integration test projects:
* openapi-directory (476MB)
* openapi-directory20240114 (721MB)

Both folders are ignored in Git as `.gitignore` has them declared.

**Hints**

The test cases are using relative paths to Open API definitions in `openapi-directory` or `openapi-directory20240114`, like:
```cs
helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\amazonaws.com\amplify\2017-07-25");
```

## Level 2: Generated codes are compared with previous ones which had been manually checked.

The development may involve the following targets:
1. Refactoring of the OpenApiClientChange.
1. Minor format change in the codes generated.
1. Sigificant changes in the codes generated.

Since the refactoring should not alter the functional behavior of OpenApiClientGen, thus all tests should pass with "Build: false, UpdateGenerated: false".

For minor format change, you may do these steps:
1. Run baseline tests with "Build: true, UpdateGenerated: false". Make sure all green.
1. Copy the output folders in "bin\Debug\netx.0" to what under the test project folder to overwrite those persisted previous ones.
1. Compare them using git diff to verify the minor changes are within expectation.
1. If all OK, run the extended tests with "Build: false, UpdateGenerated: true".
1. Update the result folders of extended tests basied on the outputs in "bin\Debug\netx.0".

For sigificant changes:
1. run all tests with "Build: true, UpdateGenerated: true".
1. If all compilations are OK, inspect the delta.


## Level 3: Generated codes talk to the Web API service.

Having the generated codes to pass compilation is not enough. And you cannot assume the client API for a respective Web API service are correct without building integration test suites which talk to the Web API service. The following are examples of building integration test suits against the generated client APIs.

### Pet Store with `PetWebApi`

You need to make sure the PetWebApi is running through executing `StartPetsApi.ps1`.

C# Client API: "DemoClientApi"
C# Client Test Suite: "SwagApiTests/PetsApiIntegration"

TypeScript integration test suites:
* ng2
* aurelia
* axios
* fetchapi
* jq

### eBay
Test case: eBay Broker

You need to have proper credential and construct respective HTTP interception for authorization.

### Medicare Online
Test case: Medicare Online Broker

This one defines a lot parameters in HTTP headers which this CodeGen ignores. Such parameters should be handled through HTTP interception and headers callbacks.

# Constructing Test Cases

For collecting the Open API 3.x definitions, the follow script is used:

```batch
dir -Include openapi.yaml -Recurse /s
for /r %a in (.) do @if exist "%~fa\openapi.yaml" echo %~fa
```

For Swagger/Open API 2.x definitions, replace `openapi.yaml` with `swagger.yaml`.

Large amount of test cases are generated by a command line program `GenerateCases.exe` included in the SLN.