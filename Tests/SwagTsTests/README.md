Walk through OpenApi definition files, generate codes and compare what generated in the past.

And for Angular codes generated, optionally build the codes generated, particularly after find the codes generated are different from what generated in the past.

The option could be altered through changing appsettings.json. And after all tests are OK, reverse appsettings.json to the orginal settings:

```json
	"Build": false,
	"UpdateGenerated":  false
```

Each ng guild upon generated codes of a definition file may take around 15 seconds to 20 seconds on an Intel i7 NUC box, or around 5.5 seconds on "13th Gen Intel Core i7-13700KF 3.40 GHz". The total time estimated should be multiplication by the total number of cases.

The XXXResults folder should contains codes generated, the total number of files should be equal to the total number of test cases. After a full run, copy the generated codes from bin/Debug/Netx.0/XXXResults to XXXResults. 

For more details, please check [Testing](https://github.com/zijianhuang/openapiclientgen/wiki/Testing) in Wiki.