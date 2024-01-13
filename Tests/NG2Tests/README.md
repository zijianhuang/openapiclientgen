Walk through OpenApi definition files, some with swagger.yaml v2.0 and the others with openapi.yaml v3.0, generate NG TS codes and run `ng build`.

**Remarks:**

Each ng guild upon generated codes of a definition file may take around 15 seconds to 20 seconds on an Intel i7 NUC box, or around 5.5 seconds on "13th Gen Intel Core i7-13700KF 3.40 GHz". The total time estimated should be multiplication by the total number of cases.

The Results folder should contains codes generated, the total number of files should be equal to the total number of test cases. After a full run, copy the generated codes from bin/Debug/Netx.0/Results to Results. 

Since the whole tests could run around 96 minutes for 1024 cases, this test should be running only after new and sigificant development changes and after SwagTsTests is OK.

Only after making sigificant changes and other test suites have become green, you run this suite. And then run with the NG Build on.

For more details, please check [Testing](https://github.com/zijianhuang/openapiclientgen/wiki/Testing) in Wiki.