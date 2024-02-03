Demostrate how to utilize yaml in application programming.

1. A dedicated assembly containing only generated codes.
1. Optionally with some technical helper functions codes.
1. Whenever the yaml is updated, run CodeGen.bat to generated codes. The detailed operations depending on the architectural design of versioning.
1. Craft integration tests against the service. (SwagApiTestsTextJson)
1. Application programming.

**Remarks:**

1. Utilize System.Text.Json.
1. All paths are contained in a defined classes.
1. The order of types, properties and functions are following the initial orders declared in the yaml, as well as the order of recursive searching of casual types.