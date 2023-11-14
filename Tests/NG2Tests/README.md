Walk through OpenApi definition files, generate NG TS codes and run `ng build`.

Each ng guild upon generated codes of a definition file may take around 15 seconds to 20 seconds on an Intel i7 NUC box, or around 5.5 seconds on "13th Gen Intel Core i7-13700KF 3.40 GHz". The total time estimated should be multiplication by the total number of cases.

In NG2Tests, whether to run ng build, while others are subject to hardcoded setting BuildToValidate, which should be set to true only when generated codes have been significantly altered and you want to make sure generated codes could all be compiled.

You don't have to run `ng test` everytime. For more details, please check [Testing](https://github.com/zijianhuang/openapiclientgen/wiki/Testing) in Wiki.