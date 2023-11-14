# OpenApiClientGen

## v2.6 (2023-11-14)

* Plugin Fonlow.OpenApiClientGenCore.NG2FormGroup for creating FormGroups of data models.
* For data models, except for required field, fields are with optional null type like `alias?: string | null`.
* For client API functions, except for required parameters, parameters are with optional null type like `ListPets(limit: number | null | undefined): Promise<Array<Pet>>`.
