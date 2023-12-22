Walk through OpenApi definition files, generate NG TS codes and run `ng build`.

**Remarks:**

Since all test cases are generated and there's no comparison with past code generation. All tests are to build the generated codes. Thus appsettings.json is ignored, however, the file is kept there to make the parent class work. Not nice regarding SOLID though.


Each ng guild upon generated codes of a definition file may take around 15 seconds to 20 seconds on an Intel i7 NUC box, or around 5.5 seconds on "13th Gen Intel Core i7-13700KF 3.40 GHz". The total time estimated should be multiplication by the total number of cases.

The Results folder should contains codes generated, the total number of files should be equal to the total number of test cases. After a full run, copy the generated codes from bin/Debug/Netx.0/Results to Results. 

Since the whole tests could run around 40 minutes for 400 cases, this test should be running only after new and sigificant development changes and after SwagTsTests is OK.

For more details, please check [Testing](https://github.com/zijianhuang/openapiclientgen/wiki/Testing) in Wiki.