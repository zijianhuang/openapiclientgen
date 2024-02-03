Demostrate how to utilize yaml in application programming.

1. A dedicated assembly containing only generated codes.
1. Optionally with some technical helper functions codes.
1. Whenever the yaml is updated, run CodeGen.bat to generated codes. The detailed operations depending on the architectural design of versioning.
1. Craft integration tests against the service. (SwagApiTests)
1. Application programming.

**Remarks:**

1. Utilize NewtonSoft.Json.
1. Paths are contained in multiple classes since the ContainerNameStrategy is Tags (1).
1. The order of types, properties and functions defined in paths are sorted by alphabetic order.