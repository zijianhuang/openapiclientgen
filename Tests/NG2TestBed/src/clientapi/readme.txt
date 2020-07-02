This is to keep the directory in repository while ignoring ClientApiAuto.ts which is updated in each test case.

It is by design in WebApiClientGen and OpenApiClientGen that the directory containing the generated files should be created not by the code generators but the developers.