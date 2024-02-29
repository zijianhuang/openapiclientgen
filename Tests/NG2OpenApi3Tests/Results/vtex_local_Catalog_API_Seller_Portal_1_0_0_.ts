import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get List of Brands
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about all brands of the store. It is mandatory to use at least one query parameter.
		 * ## Response body example
		 * ```json
		 * {
		 * "data": [
		 * {
		 * "id": "7",
		 * "name": "All For Paws",
		 * "isActive": true,
		 * "createdAt": "2022-01-17T19:43:14.18678Z",
		 * "updatedAt": "2022-01-17T19:43:14.18678Z"
		 * },
		 * {
		 * "id": "1",
		 * "name": "AOC",
		 * "isActive": true,
		 * "createdAt": "2021-08-16T21:13:40.55189Z",
		 * "updatedAt": "2021-08-16T21:13:40.55189Z"
		 * }
		 * ],
		 * "_metadata": {
		 * "total": 18,
		 * "from": 1,
		 * "to": 2,
		 * "orderBy": "name,asc"
		 * }
		 * }
		 * ```
		 * Get api/catalog-seller-portal/brands
		 * @param {string} q Search word.
		 * @param {string} from The first page of the interval of the brand list.
		 * @param {string} to The last page of the interval of the brand list.
		 * @param {string} orderBy The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order.
		 * @param {string} name Brand name.
		 * @return {ListBrandReturn} OK
		 */
		ListBrand(q: string | null | undefined, from: string | null | undefined, to: string | null | undefined, orderBy: string | null | undefined, name: string | null | undefined): Observable<ListBrandReturn> {
			return this.http.get<ListBrandReturn>(this.baseUri + 'api/catalog-seller-portal/brands?q=' + (q == null ? '' : encodeURIComponent(q)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Create Brand
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Creates a new brand.
		 * ## Request body example
		 * ```json
		 * {
		 * "name": "Zwilling",
		 * "isActive": true
		 * }
		 * ```
		 * ## Response body example
		 * ```json
		 * {
		 * "id": "20",
		 * "name": "Zwilling",
		 * "isActive": true,
		 * "createdAt": "2021-05-17T15:20:36.077253+00:00",
		 * "updatedAt": "2021-01-18T14:41:45.696488+00:00"
		 * }
		 * ```
		 * Post api/catalog-seller-portal/brands
		 * @return {PostBrandReturn} OK
		 */
		PostBrand(requestBody: PostBrandPostBody): Observable<PostBrandReturn> {
			return this.http.post<PostBrandReturn>(this.baseUri + 'api/catalog-seller-portal/brands', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Brand by ID
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about a brand by its ID.
		 * ## Response body example
		 * ```json
		 * {
		 * "id": "863",
		 * "name": "Zwilling",
		 * "isActive": false,
		 * "createdAt": "2021-01-18T14:41:45.696488+00:00",
		 * "updatedAt": "2021-01-18T14:41:45.696488+00:00"
		 * }
		 * ```
		 * Get api/catalog-seller-portal/brands/{brandId}
		 * @param {string} brandId Brand unique identifier number.
		 * @return {GetBrandReturn} OK
		 */
		GetBrand(brandId: string): Observable<GetBrandReturn> {
			return this.http.get<GetBrandReturn>(this.baseUri + 'api/catalog-seller-portal/brands/' + (brandId == null ? '' : encodeURIComponent(brandId)), {});
		}

		/**
		 * Update Brand
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Updates an existing brand.
		 * ## Request body example
		 * ```json
		 * {
		 * "id": "20",
		 * "name": "Zwilling",
		 * "isActive": true
		 * }
		 * ```
		 * Put api/catalog-seller-portal/brands/{brandId}
		 * @param {string} brandId Brand unique identifier number.
		 * @return {void} 
		 */
		PutBrand(brandId: string, requestBody: PutBrandPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/catalog-seller-portal/brands/' + (brandId == null ? '' : encodeURIComponent(brandId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Category Tree
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about the category tree from the store.
		 * ## Response body example
		 * ```json
		 * {
		 * "roots": [
		 * {
		 * "value": {
		 * "id": "2",
		 * "name": "Departamento Artesanato",
		 * "isActive": true
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "3",
		 * "name": "Artesanato de Barro",
		 * "isActive": false
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "4",
		 * "name": "Artesanato de Barro Vermelho",
		 * "isActive": false
		 * },
		 * "children": []
		 * }
		 * ]
		 * }
		 * ]
		 * },
		 * {
		 * "value": {
		 * "id": "5",
		 * "name": "Perfumes",
		 * "isActive": false
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "6",
		 * "name": "Perfume Feminino",
		 * "isActive": false
		 * },
		 * "children": []
		 * },
		 * {
		 * "value": {
		 * "id": "7",
		 * "name": "Perfume Masculino",
		 * "isActive": false,
		 * "displayOnMenu": false,
		 * "score": 0,
		 * "filterByBrand": false,
		 * "isClickable": false
		 * },
		 * "children": []
		 * }
		 * ]
		 * }
		 * ],
		 * "createdAt": "2021-08-16T20:57:13.070813Z",
		 * "updatedAt": "2022-07-07T14:24:56.416337Z"
		 * }
		 * ```
		 * Get api/catalog-seller-portal/category-tree
		 * @param {number} depth Category tree level.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetCategoryTreeReturn} OK
		 */
		GetCategoryTree(depth: number | null | undefined): Observable<GetCategoryTreeReturn> {
			return this.http.get<GetCategoryTreeReturn>(this.baseUri + 'api/catalog-seller-portal/category-tree?depth=' + depth, {});
		}

		/**
		 * Update Category Tree
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Updates the existing categories in the category tree.
		 * ## Request body example
		 * ```json
		 * {
		 * "roots": [
		 * {
		 * "value": {
		 * "id": "2",
		 * "name": "Departamento Artesanato",
		 * "isActive": true
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "3",
		 * "name": "Artesanato de Barro",
		 * "isActive": false
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "4",
		 * "name": "Artesanato de Barro Vermelho",
		 * "isActive": false
		 * },
		 * "children": []
		 * }
		 * ]
		 * }
		 * ]
		 * },
		 * {
		 * "value": {
		 * "id": "5",
		 * "name": "Perfumes",
		 * "isActive": false
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "6",
		 * "name": "Perfume Feminino",
		 * "isActive": false
		 * },
		 * "children": []
		 * },
		 * {
		 * "value": {
		 * "id": "7",
		 * "name": "Perfume Masculino",
		 * "isActive": false,
		 * "displayOnMenu": false,
		 * "score": 0,
		 * "filterByBrand": false,
		 * "isClickable": false
		 * },
		 * "children": []
		 * }
		 * ]
		 * }
		 * ]
		 * }
		 * ```
		 * Put api/catalog-seller-portal/category-tree
		 * @param {UpdateCategoryTreePutBody} requestBody OK
		 * @return {void} 
		 */
		UpdateCategoryTree(requestBody: UpdateCategoryTreePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/catalog-seller-portal/category-tree', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Category
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Creates a new category.
		 * ## Request body example
		 * ```json
		 * {
		 * "parentId": "567",
		 * "Name": "Beauty"
		 * }
		 * ```
		 * ## Response body example
		 * ```json
		 * {
		 * "value": {
		 * "id": "1",
		 * "name": "Beauty",
		 * "isActive": false
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "2",
		 * "name": "Perfumes",
		 * "isActive": false
		 * }
		 * }
		 * ]
		 * }
		 * ```
		 * Post api/catalog-seller-portal/category-tree/categories
		 * @return {CreateCategoryReturn} OK
		 */
		CreateCategory(requestBody: CreateCategoryPostBody): Observable<CreateCategoryReturn> {
			return this.http.post<CreateCategoryReturn>(this.baseUri + 'api/catalog-seller-portal/category-tree/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Category by ID
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about a category by its ID.
		 * ## Response body example
		 * ```json
		 * {
		 * "value": {
		 * "id": "1",
		 * "name": "sandboxintegracao",
		 * "isActive": false
		 * },
		 * "children": [
		 * {
		 * "value": {
		 * "id": "2",
		 * "name": "Perfumes",
		 * "isActive": false
		 * }
		 * }
		 * ]
		 * }
		 * ```
		 * Get api/catalog-seller-portal/category-tree/categories/{categoryId}
		 * @param {string} categoryId Category unique identifier number.
		 * @return {GetbyidReturn} OK
		 */
		Getbyid(categoryId: string): Observable<GetbyidReturn> {
			return this.http.get<GetbyidReturn>(this.baseUri + 'api/catalog-seller-portal/category-tree/categories/' + (categoryId == null ? '' : encodeURIComponent(categoryId)), {});
		}

		/**
		 * Create Product
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Creates a new product and its SKUs.
		 * ## Request body example
		 * ```json
		 * {
		 * "status": "active",
		 * "name": "VTEX 10 Shirt",
		 * "description": "Shirt number 10 by VTEX.",
		 * "brandId": "1",
		 * "categoryIds": [
		 * "732"
		 * ],
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "values": [
		 * "Black",
		 * "White"
		 * ]
		 * },
		 * {
		 * "name": "Size",
		 * "values": [
		 * "S",
		 * "M",
		 * "L"
		 * ]
		 * }
		 * ],
		 * "attributes": [
		 * {
		 * "name": "Fabric",
		 * "value": "Cotton"
		 * },
		 * {
		 * "name": "Gender",
		 * "value": "Feminine"
		 * }
		 * ],
		 * "slug": "/vtex-shirt",
		 * "images": [
		 * {
		 * "id": "vtex_logo.jpg",
		 * "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
		 * "alt": "VTEX"
		 * }
		 * ],
		 * "skus": [
		 * {
		 * "name": "VTEX Shirt Black Size S",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234567",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "Black"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "S"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * },
		 * {
		 * "name": "VTEX Shirt White Size L",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234568",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "White"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "L"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * }
		 * ],
		 * "origin": "vtxleo7778",
		 * "transportModal": "110",
		 * "taxCode": "234"
		 * }
		 * ```
		 * ## Response body example
		 * ```json
		 * {
		 * "id": "189371",
		 * "status": "active",
		 * "name": "VTEX 10 Shirt",
		 * "brandId": "1",
		 * "brandName": "AOC",
		 * "categoryIds": [
		 * "732"
		 * ],
		 * "categoryNames": [
		 * "/Men/Acessories/"
		 * ],
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "values": [
		 * "Black",
		 * "White"
		 * ]
		 * },
		 * {
		 * "name": "Size",
		 * "values": [
		 * "S",
		 * "M",
		 * "L"
		 * ]
		 * }
		 * ],
		 * "attributes": [
		 * {
		 * "name": "Fabric",
		 * "value": "Cotton"
		 * },
		 * {
		 * "name": "Gender",
		 * "value": "Feminine"
		 * }
		 * ],
		 * "slug": "/vtex-shirt",
		 * "images": [
		 * {
		 * "id": "vtex_logo.jpg",
		 * "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
		 * "alt": "VTEX"
		 * }
		 * ],
		 * "skus": [
		 * {
		 * "id": "182907",
		 * "name": "VTEX Shirt Black Size S",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234567",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "Black"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "S"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * },
		 * {
		 * "id": "182908",
		 * "name": "VTEX Shirt White Size L",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234568",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "White"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "L"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * }
		 * ],
		 * "origin": "vtxleo7778",
		 * "transportModal": "110",
		 * "taxCode": "234",
		 * "createdAt": "2022-11-01T14:15:54.262702Z",
		 * "updatedAt": "2022-11-01T14:15:54.262702Z"
		 * }
		 * ```
		 * Post api/catalog-seller-portal/products
		 * @return {PostProductReturn} OK
		 */
		PostProduct(requestBody: PostProductPostBody): Observable<PostProductReturn> {
			return this.http.post<PostProductReturn>(this.baseUri + 'api/catalog-seller-portal/products', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Product by external ID,  SKU ID, SKU external ID or slug
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about a product by its external ID, SKU ID, SKU external ID or product slug. The response also has information about the product's SKUs.
		 * ## Response body example
		 * ```json
		 * {
		 * "id": "189371",
		 * "status": "active",
		 * "name": "VTEX 10 Shirt",
		 * "brandId": "1",
		 * "brandName": "AOC",
		 * "categoryIds": [
		 * "732"
		 * ],
		 * "categoryNames": [
		 * "/sandboxintegracao/Acessórios/"
		 * ],
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "values": [
		 * "Black",
		 * "White"
		 * ]
		 * },
		 * {
		 * "name": "Size",
		 * "values": [
		 * "S",
		 * "M",
		 * "L"
		 * ]
		 * }
		 * ],
		 * "attributes": [
		 * {
		 * "name": "Fabric",
		 * "value": "Cotton"
		 * },
		 * {
		 * "name": "Gender",
		 * "value": "Feminine"
		 * }
		 * ],
		 * "slug": "/vtex-shirt",
		 * "images": [
		 * {
		 * "id": "vtex_logo.jpg",
		 * "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
		 * "alt": "VTEX"
		 * }
		 * ],
		 * "skus": [
		 * {
		 * "id": "182907",
		 * "name": "VTEX Shirt Black Size S",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234567",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "Black"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "S"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * },
		 * {
		 * "id": "182908",
		 * "name": "VTEX Shirt White Size L",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234568",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "White"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "L"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * }
		 * ],
		 * "transportModal": "123",
		 * "taxCode": "100",
		 * "origin": "vtxleo7778",
		 * "createdAt": "2022-10-31T16:28:25.578067Z",
		 * "updatedAt": "2022-10-31T16:28:25.578067Z"
		 * }
		 * ```
		 * Get api/catalog-seller-portal/products/{param}
		 * @param {string} param This part of the path must follow this format: `{param}={value}`. Replace `{param}` with the name of the parameter used to fetch a product, which can be one of the following: `external-id` (product reference unique identifier number in the store), `sku-id` (SKU unique identifier number), `sku-external-id` (SKU reference unique identifier number in the store) or `slug` (reference of the product in the URL of the store). Replace `{value}` with the value of the selected param. Make sure there is a `=` between them.
		 * @return {GetProductQueryReturn} OK
		 */
		GetProductQuery(param: string): Observable<GetProductQueryReturn> {
			return this.http.get<GetProductQueryReturn>(this.baseUri + 'api/catalog-seller-portal/products/' + (param == null ? '' : encodeURIComponent(param)), {});
		}

		/**
		 * Get Product by ID
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about a product by its ID. The response also has information about the product's SKUs.
		 * ## Response body example
		 * ```json
		 * {
		 * "id": "189371",
		 * "status": "active",
		 * "name": "VTEX 10 Shirt",
		 * "brandId": "1",
		 * "brandName": "AOC",
		 * "categoryIds": [
		 * "732"
		 * ],
		 * "categoryNames": [
		 * "/sandboxintegracao/Acessórios/"
		 * ],
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "values": [
		 * "Black",
		 * "White"
		 * ]
		 * },
		 * {
		 * "name": "Size",
		 * "values": [
		 * "S",
		 * "M",
		 * "L"
		 * ]
		 * }
		 * ],
		 * "attributes": [
		 * {
		 * "name": "Fabric",
		 * "value": "Cotton"
		 * },
		 * {
		 * "name": "Gender",
		 * "value": "Feminine"
		 * }
		 * ],
		 * "slug": "/vtex-shirt",
		 * "images": [
		 * {
		 * "id": "vtex_logo.jpg",
		 * "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
		 * "alt": "VTEX"
		 * }
		 * ],
		 * "skus": [
		 * {
		 * "id": "182907",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234567",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "Black"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "S"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * },
		 * {
		 * "id": "182908",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234568",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "White"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "L"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * }
		 * ],
		 * "transportModal": "123",
		 * "taxCode": "100",
		 * "origin": "vtxleo7778",
		 * "createdAt": "2022-10-31T16:28:25.578067Z",
		 * "updatedAt": "2022-10-31T17:09:12.639088Z"
		 * }
		 * ```
		 * Get api/catalog-seller-portal/products/{productId}
		 * @param {string} productId Product unique identifier number.
		 * @return {GetProductReturn} OK
		 */
		GetProduct(productId: string): Observable<GetProductReturn> {
			return this.http.get<GetProductReturn>(this.baseUri + 'api/catalog-seller-portal/products/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * Update Product
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Updates an existing product and its SKUs.
		 * ## Request body example
		 * ```json
		 * {
		 * "id": "189371",
		 * "status": "active",
		 * "name": "VTEX 10 Shirt",
		 * "description": "Shirt number 10 by VTEX.",
		 * "brandId": "1",
		 * "categoryIds": [
		 * "732"
		 * ],
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "values": [
		 * "Black",
		 * "White"
		 * ]
		 * },
		 * {
		 * "name": "Size",
		 * "values": [
		 * "S",
		 * "M",
		 * "L"
		 * ]
		 * }
		 * ],
		 * "attributes": [
		 * {
		 * "name": "Fabric",
		 * "value": "Cotton"
		 * },
		 * {
		 * "name": "Gender",
		 * "value": "Feminine"
		 * }
		 * ],
		 * "slug": "/vtex-shirt",
		 * "transportModal": null,
		 * "taxCode": null,
		 * "images": [
		 * {
		 * "id": "vtex_logo.jpg",
		 * "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
		 * "alt": "VTEX"
		 * }
		 * ],
		 * "skus": [
		 * {
		 * "name": "VTEX Shirt Black Size S",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234567",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "Black"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "S"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * },
		 * {
		 * "name": "VTEX Shirt White Size L",
		 * "externalId": "1909621862",
		 * "manufacturerCode": "1234568",
		 * "isActive": true,
		 * "weight": 300,
		 * "dimensions": {
		 * "width": 1.5,
		 * "height": 2.1,
		 * "length": 1.6
		 * },
		 * "specs": [
		 * {
		 * "name": "Color",
		 * "value": "White"
		 * },
		 * {
		 * "name": "Size",
		 * "value": "L"
		 * }
		 * ],
		 * "images": [
		 * "vtex_logo.jpg"
		 * ]
		 * }
		 * ],
		 * "origin": "vtxleo7778"
		 * }
		 * ```
		 * Put api/catalog-seller-portal/products/{productId}
		 * @param {string} productId Product unique identifier number.
		 * @return {void} 
		 */
		PutProduct(productId: string, requestBody: PutProductPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/catalog-seller-portal/products/' + (productId == null ? '' : encodeURIComponent(productId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Product Description by Product ID
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves the description of a product given a Product ID.
		 * ## Response body example
		 * ```json
		 * {
		 * "productId": "61",
		 * "description": "Beautifully handmade laptop case/sleeve made in the Nepal Himalaya. It can be slipped inside your backpack or carried alone with space for all your work bits and pieces!",
		 * "createdAt": "2022-10-10T19:18:45.612317Z",
		 * "updatedAt": "2022-10-11T18:12:58.825544Z"
		 * }
		 * ```
		 * Get api/catalog-seller-portal/products/{productId}/description
		 * @param {string} productId Product unique identifier number.
		 * @return {GetProductDescriptionReturn} OK
		 */
		GetProductDescription(productId: string): Observable<GetProductDescriptionReturn> {
			return this.http.get<GetProductDescriptionReturn>(this.baseUri + 'api/catalog-seller-portal/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/description', {});
		}

		/**
		 * Update Product Description by Product ID
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Updates the description of a product given a Product ID.
		 * ## Request body example
		 * ```json
		 * {
		 * "productId": "71",
		 * "description": "White shirt."
		 * }
		 * ```
		 * Put api/catalog-seller-portal/products/{productId}/description
		 * @param {string} productId Product unique identifier number.
		 * @return {void} 
		 */
		PutProductDescription(productId: string, requestBody: PutProductDescriptionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/catalog-seller-portal/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/description', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for SKU
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about an SKU taking into consideration the defined search criteria. It is mandatory to use at least one query parameter.
		 * ## Response body example
		 * ```json
		 * {
		 * "data": [
		 * {
		 * "id": "2",
		 * "productId": "2",
		 * "externalId": "1909621862"
		 * }
		 * ],
		 * "_metadata": {
		 * "total": 1,
		 * "from": 1,
		 * "to": 15
		 * }
		 * }
		 * ```
		 * Get api/catalog-seller-portal/skus/_search
		 * @param {string} from The first page of the interval of the product list.
		 * @param {string} to The last page of the interval of the product list.
		 * @param {number} id SKU unique idenfier number.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} externalid SKU reference unique identifier number in the store.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {SearchSKUReturn} OK
		 */
		SearchSKU(from: string | null | undefined, to: string | null | undefined, id: number | null | undefined, externalid: number | null | undefined): Observable<SearchSKUReturn> {
			return this.http.get<SearchSKUReturn>(this.baseUri + 'api/catalog-seller-portal/skus/_search?from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)) + '&id=' + id + '&externalid=' + externalid, {});
		}

		/**
		 * Get List of SKUs
		 * >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
		 * Retrieves general information about all SKUs.
		 * ## Response body example
		 * ```json
		 * {
		 * "data": [
		 * "1",
		 * "10",
		 * "11",
		 * "12",
		 * "13",
		 * "14",
		 * "15",
		 * "16",
		 * "19",
		 * "2",
		 * "20",
		 * "21",
		 * "22",
		 * "23",
		 * "24"
		 * ],
		 * "_metadata": {
		 * "total": 65,
		 * "from": 1,
		 * "to": 15
		 * }
		 * }
		 * ```
		 * Get api/catalog-seller-portal/skus/ids
		 * @param {string} from The first page of the interval of the product list.
		 * @param {string} to The last page of the interval of the product list.
		 * @return {ListSKUReturn} OK
		 */
		ListSKU(from: string | null | undefined, to: string | null | undefined): Observable<ListSKUReturn> {
			return this.http.get<ListSKUReturn>(this.baseUri + 'api/catalog-seller-portal/skus/ids?from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), {});
		}
	}

	export interface ListBrandReturn {

		/**
		 * Information about the organization and exhibition of the brand list.
		 * Required
		 */
		_metadata: ListBrandReturn_metadata;

		/**
		 * List with information about the store's brands.
		 * Required
		 */
		ListBrandReturnData: Array<ListBrandReturnData>;
	}
	export interface ListBrandReturnFormProperties {
	}
	export function CreateListBrandReturnFormGroup() {
		return new FormGroup<ListBrandReturnFormProperties>({
		});

	}

	export interface ListBrandReturn_metadata {

		/**
		 * The first page of the interval of the brand list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: number;

		/**
		 * The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order.
		 * Required
		 */
		orderBy: string;

		/**
		 * The last page of the interval of the brand list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: number;

		/**
		 * Total of brands on the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface ListBrandReturn_metadataFormProperties {

		/**
		 * The first page of the interval of the brand list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order.
		 * Required
		 */
		orderBy: FormControl<string | null | undefined>,

		/**
		 * The last page of the interval of the brand list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,

		/**
		 * Total of brands on the list.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateListBrandReturn_metadataFormGroup() {
		return new FormGroup<ListBrandReturn_metadataFormProperties>({
			from: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			orderBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBrandReturnData {

		/**
		 * Date when the brand was created.
		 * Required
		 */
		createdAt: string;

		/**
		 * Brand unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the brand is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Brand Name.
		 * Required
		 */
		name: string;

		/**
		 * Last date when the brand was updated.
		 * Required
		 */
		updatedAt: string;
	}
	export interface ListBrandReturnDataFormProperties {

		/**
		 * Date when the brand was created.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/**
		 * Brand unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the brand is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Brand Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Last date when the brand was updated.
		 * Required
		 */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateListBrandReturnDataFormGroup() {
		return new FormGroup<ListBrandReturnDataFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostBrandPostBody {

		/**
		 * The condition defines if the brand is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Brand Name.
		 * Required
		 */
		name: string;
	}
	export interface PostBrandPostBodyFormProperties {

		/**
		 * The condition defines if the brand is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Brand Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostBrandPostBodyFormGroup() {
		return new FormGroup<PostBrandPostBodyFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostBrandReturn {

		/** Date when the brand was created. */
		createdAt?: string | null;

		/** Brand unique identifier number. */
		id?: string | null;

		/** The condition defines if the brand is active (`true`) or inactive (`false`). */
		isActive?: boolean | null;

		/** Brand Name. */
		name?: string | null;

		/** Last date when the brand was updated. */
		updatedAt?: string | null;
	}
	export interface PostBrandReturnFormProperties {

		/** Date when the brand was created. */
		createdAt: FormControl<string | null | undefined>,

		/** Brand unique identifier number. */
		id: FormControl<string | null | undefined>,

		/** The condition defines if the brand is active (`true`) or inactive (`false`). */
		isActive: FormControl<boolean | null | undefined>,

		/** Brand Name. */
		name: FormControl<string | null | undefined>,

		/** Last date when the brand was updated. */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreatePostBrandReturnFormGroup() {
		return new FormGroup<PostBrandReturnFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBrandReturn {

		/** Date when the brand was created. */
		createdAt?: string | null;

		/** Brand unique identifier number. */
		id?: string | null;

		/** The condition defines if the brand is active (`true`) or inactive (`false`). */
		isActive?: boolean | null;

		/** Brand Name. */
		name?: string | null;

		/** Last date when the brand was updated. */
		updatedAt?: string | null;
	}
	export interface GetBrandReturnFormProperties {

		/** Date when the brand was created. */
		createdAt: FormControl<string | null | undefined>,

		/** Brand unique identifier number. */
		id: FormControl<string | null | undefined>,

		/** The condition defines if the brand is active (`true`) or inactive (`false`). */
		isActive: FormControl<boolean | null | undefined>,

		/** Brand Name. */
		name: FormControl<string | null | undefined>,

		/** Last date when the brand was updated. */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetBrandReturnFormGroup() {
		return new FormGroup<GetBrandReturnFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBrandPutBody {

		/**
		 * Brand unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the brand is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Brand Name.
		 * Required
		 */
		name: string;
	}
	export interface PutBrandPutBodyFormProperties {

		/**
		 * Brand unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the brand is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Brand Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePutBrandPutBodyFormGroup() {
		return new FormGroup<PutBrandPutBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCategoryTreeReturn {

		/** Date when the category tree was created. */
		createdAt?: string | null;

		/**
		 * List of all categories of the store.
		 * Required
		 */
		GetCategoryTreeReturnRoots: Array<GetCategoryTreeReturnRoots>;

		/** Last date when the category tree was updated. */
		updatedAt?: string | null;
	}
	export interface GetCategoryTreeReturnFormProperties {

		/** Date when the category tree was created. */
		createdAt: FormControl<string | null | undefined>,

		/** Last date when the category tree was updated. */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetCategoryTreeReturnFormGroup() {
		return new FormGroup<GetCategoryTreeReturnFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCategoryTreeReturnRoots {

		/**
		 * List of all children categories of the parent category.
		 * Required
		 */
		GetCategoryTreeReturnRootsChildren: Array<GetCategoryTreeReturnRootsChildren>;

		/**
		 * Object with values of a category.
		 * Required
		 */
		value: GetCategoryTreeReturnRootsValue;
	}
	export interface GetCategoryTreeReturnRootsFormProperties {
	}
	export function CreateGetCategoryTreeReturnRootsFormGroup() {
		return new FormGroup<GetCategoryTreeReturnRootsFormProperties>({
		});

	}

	export interface GetCategoryTreeReturnRootsChildren {

		/**
		 * Object with values of a children category.
		 * Required
		 */
		value: GetCategoryTreeReturnRootsChildrenValue;
	}
	export interface GetCategoryTreeReturnRootsChildrenFormProperties {
	}
	export function CreateGetCategoryTreeReturnRootsChildrenFormGroup() {
		return new FormGroup<GetCategoryTreeReturnRootsChildrenFormProperties>({
		});

	}

	export interface GetCategoryTreeReturnRootsChildrenValue {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Children category Name.
		 * Required
		 */
		name: string;
	}
	export interface GetCategoryTreeReturnRootsChildrenValueFormProperties {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Children category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetCategoryTreeReturnRootsChildrenValueFormGroup() {
		return new FormGroup<GetCategoryTreeReturnRootsChildrenValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCategoryTreeReturnRootsValue {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Category Name.
		 * Required
		 */
		name: string;
	}
	export interface GetCategoryTreeReturnRootsValueFormProperties {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetCategoryTreeReturnRootsValueFormGroup() {
		return new FormGroup<GetCategoryTreeReturnRootsValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCategoryTreePutBody {

		/**
		 * List of all categories of the store.
		 * Required
		 */
		UpdateCategoryTreePutBodyRoots: Array<UpdateCategoryTreePutBodyRoots>;
	}
	export interface UpdateCategoryTreePutBodyFormProperties {
	}
	export function CreateUpdateCategoryTreePutBodyFormGroup() {
		return new FormGroup<UpdateCategoryTreePutBodyFormProperties>({
		});

	}

	export interface UpdateCategoryTreePutBodyRoots {

		/**
		 * List of all children categories of the parent category.
		 * Required
		 */
		UpdateCategoryTreePutBodyRootsChildren: Array<UpdateCategoryTreePutBodyRootsChildren>;

		/**
		 * Object with values of a category.
		 * Required
		 */
		value: UpdateCategoryTreePutBodyRootsValue;
	}
	export interface UpdateCategoryTreePutBodyRootsFormProperties {
	}
	export function CreateUpdateCategoryTreePutBodyRootsFormGroup() {
		return new FormGroup<UpdateCategoryTreePutBodyRootsFormProperties>({
		});

	}

	export interface UpdateCategoryTreePutBodyRootsChildren {

		/**
		 * Object with values of a children category.
		 * Required
		 */
		value: UpdateCategoryTreePutBodyRootsChildrenValue;
	}
	export interface UpdateCategoryTreePutBodyRootsChildrenFormProperties {
	}
	export function CreateUpdateCategoryTreePutBodyRootsChildrenFormGroup() {
		return new FormGroup<UpdateCategoryTreePutBodyRootsChildrenFormProperties>({
		});

	}

	export interface UpdateCategoryTreePutBodyRootsChildrenValue {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Children category Name.
		 * Required
		 */
		name: string;
	}
	export interface UpdateCategoryTreePutBodyRootsChildrenValueFormProperties {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Children category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCategoryTreePutBodyRootsChildrenValueFormGroup() {
		return new FormGroup<UpdateCategoryTreePutBodyRootsChildrenValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCategoryTreePutBodyRootsValue {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Category Name.
		 * Required
		 */
		name: string;
	}
	export interface UpdateCategoryTreePutBodyRootsValueFormProperties {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCategoryTreePutBodyRootsValueFormGroup() {
		return new FormGroup<UpdateCategoryTreePutBodyRootsValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCategoryPostBody {

		/**
		 * Category name.
		 * Required
		 */
		Name: string;

		/**
		 * Parent category unique identifier number.
		 * Required
		 */
		parentId: string;
	}
	export interface CreateCategoryPostBodyFormProperties {

		/**
		 * Category name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Parent category unique identifier number.
		 * Required
		 */
		parentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCategoryPostBodyFormGroup() {
		return new FormGroup<CreateCategoryPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCategoryReturn {

		/**
		 * List of all children categories of the parent category.
		 * Required
		 */
		CreateCategoryReturnChildren: Array<CreateCategoryReturnChildren>;

		/**
		 * Object with values of a category.
		 * Required
		 */
		value: CreateCategoryReturnValue;
	}
	export interface CreateCategoryReturnFormProperties {
	}
	export function CreateCreateCategoryReturnFormGroup() {
		return new FormGroup<CreateCategoryReturnFormProperties>({
		});

	}

	export interface CreateCategoryReturnChildren {

		/**
		 * Object with values of a children category.
		 * Required
		 */
		value: CreateCategoryReturnChildrenValue;
	}
	export interface CreateCategoryReturnChildrenFormProperties {
	}
	export function CreateCreateCategoryReturnChildrenFormGroup() {
		return new FormGroup<CreateCategoryReturnChildrenFormProperties>({
		});

	}

	export interface CreateCategoryReturnChildrenValue {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Children category Name.
		 * Required
		 */
		name: string;
	}
	export interface CreateCategoryReturnChildrenValueFormProperties {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Children category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCategoryReturnChildrenValueFormGroup() {
		return new FormGroup<CreateCategoryReturnChildrenValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCategoryReturnValue {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Category Name.
		 * Required
		 */
		name: string;
	}
	export interface CreateCategoryReturnValueFormProperties {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCategoryReturnValueFormGroup() {
		return new FormGroup<CreateCategoryReturnValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetbyidReturn {

		/**
		 * List of all children categories of the parent category.
		 * Required
		 */
		GetbyidReturnChildren: Array<GetbyidReturnChildren>;

		/**
		 * Object with values of a category.
		 * Required
		 */
		value: GetbyidReturnValue;
	}
	export interface GetbyidReturnFormProperties {
	}
	export function CreateGetbyidReturnFormGroup() {
		return new FormGroup<GetbyidReturnFormProperties>({
		});

	}

	export interface GetbyidReturnChildren {

		/**
		 * Object with values of a children category.
		 * Required
		 */
		value: GetbyidReturnChildrenValue;
	}
	export interface GetbyidReturnChildrenFormProperties {
	}
	export function CreateGetbyidReturnChildrenFormGroup() {
		return new FormGroup<GetbyidReturnChildrenFormProperties>({
		});

	}

	export interface GetbyidReturnChildrenValue {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Children category Name.
		 * Required
		 */
		name: string;
	}
	export interface GetbyidReturnChildrenValueFormProperties {

		/**
		 * Children category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the children category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Children category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetbyidReturnChildrenValueFormGroup() {
		return new FormGroup<GetbyidReturnChildrenValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetbyidReturnValue {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/**
		 * Category Name.
		 * Required
		 */
		name: string;
	}
	export interface GetbyidReturnValueFormProperties {

		/**
		 * Category unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The condition defines if the category is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Category Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetbyidReturnValueFormGroup() {
		return new FormGroup<GetbyidReturnValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductPostBody {

		/**
		 * Attributes of the product. Attributes are additional properties used to create site browsing filters.
		 * Required
		 */
		PostProductPostBodyAttributes: Array<PostProductPostBodyAttributes>;

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: string;

		/**
		 * Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.
		 * Required
		 */
		categoryIds: Array<string>;

		/** Description of the primary information related to the product. A simple and easy-to-understand summary for the customer. */
		description?: string | null;

		/** Product reference unique identifier number in the store. */
		externalId?: string | null;

		/**
		 * Information of the images of the product.
		 * Required
		 */
		PostProductPostBodyImages: Array<PostProductPostBodyImages>;

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: string;

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: string;

		/**
		 * SKUs of the product.
		 * Required
		 */
		PostProductPostBodySkus: Array<PostProductPostBodySkus>;

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: string;

		/**
		 * Specifications that will differentiate the possible product SKUs.
		 * Required
		 */
		PostProductPostBodySpecs: Array<PostProductPostBodySpecs>;

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: string;

		/** Product tax code. */
		taxCode?: string | null;

		/** Transport modal of the product. */
		transportModal?: string | null;
	}
	export interface PostProductPostBodyFormProperties {

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: FormControl<string | null | undefined>,

		/** Description of the primary information related to the product. A simple and easy-to-understand summary for the customer. */
		description: FormControl<string | null | undefined>,

		/** Product reference unique identifier number in the store. */
		externalId: FormControl<string | null | undefined>,

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Product tax code. */
		taxCode: FormControl<string | null | undefined>,

		/** Transport modal of the product. */
		transportModal: FormControl<string | null | undefined>,
	}
	export function CreatePostProductPostBodyFormGroup() {
		return new FormGroup<PostProductPostBodyFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			transportModal: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostProductPostBodyAttributes {

		/**
		 * Attribute name.
		 * Required
		 */
		name: string;

		/**
		 * Attribute value.
		 * Required
		 */
		value: string;
	}
	export interface PostProductPostBodyAttributesFormProperties {

		/**
		 * Attribute name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Attribute value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePostProductPostBodyAttributesFormGroup() {
		return new FormGroup<PostProductPostBodyAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductPostBodyImages {

		/** Image alternative description. */
		alt?: string | null;

		/**
		 * Image ID.
		 * Required
		 */
		id: string;

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: string;
	}
	export interface PostProductPostBodyImagesFormProperties {

		/** Image alternative description. */
		alt: FormControl<string | null | undefined>,

		/**
		 * Image ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePostProductPostBodyImagesFormGroup() {
		return new FormGroup<PostProductPostBodyImagesFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductPostBodySkus {

		/**
		 * SKU dimensions.
		 * Required
		 */
		dimensions: PostProductPostBodySkusDimensions;

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean?: string | null;

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId?: string | null;

		/**
		 * SKU's images IDs.
		 * Required
		 */
		images: Array<string>;

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/** SKU reference code in the store. */
		manufacturerCode?: string | null;

		/**
		 * SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: string;

		/**
		 * SKU specifications. This field is mandatory, but nullable if there is only one SKU.
		 * Required
		 */
		PostProductPostBodySkusSpecs: Array<PostProductPostBodySkusSpecs>;

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;
	}
	export interface PostProductPostBodySkusFormProperties {

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean: FormControl<string | null | undefined>,

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId: FormControl<string | null | undefined>,

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/** SKU reference code in the store. */
		manufacturerCode: FormControl<string | null | undefined>,

		/**
		 * SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreatePostProductPostBodySkusFormGroup() {
		return new FormGroup<PostProductPostBodySkusFormProperties>({
			ean: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductPostBodySkusDimensions {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface PostProductPostBodySkusDimensionsFormProperties {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePostProductPostBodySkusDimensionsFormGroup() {
		return new FormGroup<PostProductPostBodySkusDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductPostBodySkusSpecs {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: string;

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: string;
	}
	export interface PostProductPostBodySkusSpecsFormProperties {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePostProductPostBodySkusSpecsFormGroup() {
		return new FormGroup<PostProductPostBodySkusSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductPostBodySpecs {

		/**
		 * Specification name.
		 * Required
		 */
		name: string;

		/**
		 * Specification values.
		 * Required
		 */
		values: Array<string>;
	}
	export interface PostProductPostBodySpecsFormProperties {

		/**
		 * Specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostProductPostBodySpecsFormGroup() {
		return new FormGroup<PostProductPostBodySpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductReturn {

		/**
		 * Attributes of the product. Attributes are additional properties used to create site browsing filters.
		 * Required
		 */
		PostProductReturnAttributes: Array<PostProductReturnAttributes>;

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: string;

		/**
		 * Name of the Brand associated with the product.
		 * Required
		 */
		brandName: string;

		/**
		 * Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.
		 * Required
		 */
		categoryIds: Array<string>;

		/**
		 * Names of the product's categories, displayed in a path format.
		 * Required
		 */
		categoryNames: Array<string>;

		/**
		 * Date when the product was created.
		 * Required
		 */
		createdAt: string;

		/** Product reference unique identifier number in the store. */
		externalId?: string | null;

		/** Product's unique identifier number. */
		id?: string | null;

		/**
		 * Information of the images of the product.
		 * Required
		 */
		PostProductReturnImages: Array<PostProductReturnImages>;

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: string;

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: string;

		/**
		 * SKUs of the product.
		 * Required
		 */
		PostProductReturnSkus: Array<PostProductReturnSkus>;

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: string;

		/**
		 * Specifications that will differentiate the possible product SKUs.
		 * Required
		 */
		PostProductReturnSpecs: Array<PostProductReturnSpecs>;

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: string;

		/** Product tax code. */
		taxCode?: string | null;

		/** Transport modal of the product. */
		transportModal?: string | null;

		/**
		 * Last date when the product was updated.
		 * Required
		 */
		updatedAt: string;
	}
	export interface PostProductReturnFormProperties {

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: FormControl<string | null | undefined>,

		/**
		 * Name of the Brand associated with the product.
		 * Required
		 */
		brandName: FormControl<string | null | undefined>,

		/**
		 * Date when the product was created.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** Product reference unique identifier number in the store. */
		externalId: FormControl<string | null | undefined>,

		/** Product's unique identifier number. */
		id: FormControl<string | null | undefined>,

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Product tax code. */
		taxCode: FormControl<string | null | undefined>,

		/** Transport modal of the product. */
		transportModal: FormControl<string | null | undefined>,

		/**
		 * Last date when the product was updated.
		 * Required
		 */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreatePostProductReturnFormGroup() {
		return new FormGroup<PostProductReturnFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			transportModal: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductReturnAttributes {

		/**
		 * Attribute name.
		 * Required
		 */
		name: string;

		/**
		 * Attribute value.
		 * Required
		 */
		value: string;
	}
	export interface PostProductReturnAttributesFormProperties {

		/**
		 * Attribute name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Attribute value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePostProductReturnAttributesFormGroup() {
		return new FormGroup<PostProductReturnAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductReturnImages {

		/** Image alternative description. */
		alt?: string | null;

		/**
		 * Image ID.
		 * Required
		 */
		id: string;

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: string;
	}
	export interface PostProductReturnImagesFormProperties {

		/** Image alternative description. */
		alt: FormControl<string | null | undefined>,

		/**
		 * Image ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePostProductReturnImagesFormGroup() {
		return new FormGroup<PostProductReturnImagesFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductReturnSkus {

		/**
		 * SKU dimensions.
		 * Required
		 */
		dimensions: PostProductReturnSkusDimensions;

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean?: string | null;

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId?: string | null;

		/**
		 * SKU unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * SKU's images IDs.
		 * Required
		 */
		images: Array<string>;

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/** SKU reference code in the store. */
		manufacturerCode?: string | null;

		/** SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
		name?: string | null;

		/**
		 * SKU specifications. This field is mandatory, but nullable if there is only one SKU.
		 * Required
		 */
		PostProductReturnSkusSpecs: Array<PostProductReturnSkusSpecs>;

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;
	}
	export interface PostProductReturnSkusFormProperties {

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean: FormControl<string | null | undefined>,

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId: FormControl<string | null | undefined>,

		/**
		 * SKU unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/** SKU reference code in the store. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreatePostProductReturnSkusFormGroup() {
		return new FormGroup<PostProductReturnSkusFormProperties>({
			ean: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductReturnSkusDimensions {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface PostProductReturnSkusDimensionsFormProperties {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePostProductReturnSkusDimensionsFormGroup() {
		return new FormGroup<PostProductReturnSkusDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductReturnSkusSpecs {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: string;

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: string;
	}
	export interface PostProductReturnSkusSpecsFormProperties {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePostProductReturnSkusSpecsFormGroup() {
		return new FormGroup<PostProductReturnSkusSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostProductReturnSpecs {

		/**
		 * Specification name.
		 * Required
		 */
		name: string;

		/**
		 * Specification values.
		 * Required
		 */
		values: Array<string>;
	}
	export interface PostProductReturnSpecsFormProperties {

		/**
		 * Specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostProductReturnSpecsFormGroup() {
		return new FormGroup<PostProductReturnSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductQueryReturn {

		/**
		 * Attributes of the product. Attributes are additional properties used to create site browsing filters.
		 * Required
		 */
		GetProductQueryReturnAttributes: Array<GetProductQueryReturnAttributes>;

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: string;

		/**
		 * Name of the Brand associated with the product.
		 * Required
		 */
		brandName: string;

		/**
		 * Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.
		 * Required
		 */
		categoryIds: Array<string>;

		/**
		 * Names of the product's categories, displayed in a path format.
		 * Required
		 */
		categoryNames: Array<string>;

		/**
		 * Date when the product was created.
		 * Required
		 */
		createdAt: string;

		/** Product reference unique identifier number in the store. */
		externalId?: string | null;

		/** Product's unique identifier number. */
		id?: string | null;

		/**
		 * Information of the images of the product.
		 * Required
		 */
		GetProductQueryReturnImages: Array<GetProductQueryReturnImages>;

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: string;

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: string;

		/**
		 * SKUs of the product.
		 * Required
		 */
		GetProductQueryReturnSkus: Array<GetProductQueryReturnSkus>;

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: string;

		/**
		 * Specifications that will differentiate the possible product SKUs.
		 * Required
		 */
		GetProductQueryReturnSpecs: Array<GetProductQueryReturnSpecs>;

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: string;

		/** Product tax code. */
		taxCode?: string | null;

		/** Transport modal of the product. */
		transportModal?: string | null;

		/**
		 * Last date when the product was updated.
		 * Required
		 */
		updatedAt: string;
	}
	export interface GetProductQueryReturnFormProperties {

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: FormControl<string | null | undefined>,

		/**
		 * Name of the Brand associated with the product.
		 * Required
		 */
		brandName: FormControl<string | null | undefined>,

		/**
		 * Date when the product was created.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** Product reference unique identifier number in the store. */
		externalId: FormControl<string | null | undefined>,

		/** Product's unique identifier number. */
		id: FormControl<string | null | undefined>,

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Product tax code. */
		taxCode: FormControl<string | null | undefined>,

		/** Transport modal of the product. */
		transportModal: FormControl<string | null | undefined>,

		/**
		 * Last date when the product was updated.
		 * Required
		 */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetProductQueryReturnFormGroup() {
		return new FormGroup<GetProductQueryReturnFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			transportModal: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductQueryReturnAttributes {

		/**
		 * Attribute name.
		 * Required
		 */
		name: string;

		/**
		 * Attribute value.
		 * Required
		 */
		value: string;
	}
	export interface GetProductQueryReturnAttributesFormProperties {

		/**
		 * Attribute name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Attribute value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetProductQueryReturnAttributesFormGroup() {
		return new FormGroup<GetProductQueryReturnAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductQueryReturnImages {

		/** Image alternative description. */
		alt?: string | null;

		/**
		 * Image ID.
		 * Required
		 */
		id: string;

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: string;
	}
	export interface GetProductQueryReturnImagesFormProperties {

		/** Image alternative description. */
		alt: FormControl<string | null | undefined>,

		/**
		 * Image ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetProductQueryReturnImagesFormGroup() {
		return new FormGroup<GetProductQueryReturnImagesFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductQueryReturnSkus {

		/**
		 * SKU dimensions.
		 * Required
		 */
		dimensions: GetProductQueryReturnSkusDimensions;

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean?: string | null;

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId?: string | null;

		/**
		 * SKU unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * SKU's images IDs.
		 * Required
		 */
		images: Array<string>;

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/** SKU reference code in the store. */
		manufacturerCode?: string | null;

		/**
		 * SKU specifications. This field is mandatory, but nullable if there is only one SKU.
		 * Required
		 */
		GetProductQueryReturnSkusSpecs: Array<GetProductQueryReturnSkusSpecs>;

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;
	}
	export interface GetProductQueryReturnSkusFormProperties {

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean: FormControl<string | null | undefined>,

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId: FormControl<string | null | undefined>,

		/**
		 * SKU unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/** SKU reference code in the store. */
		manufacturerCode: FormControl<string | null | undefined>,

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateGetProductQueryReturnSkusFormGroup() {
		return new FormGroup<GetProductQueryReturnSkusFormProperties>({
			ean: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductQueryReturnSkusDimensions {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface GetProductQueryReturnSkusDimensionsFormProperties {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGetProductQueryReturnSkusDimensionsFormGroup() {
		return new FormGroup<GetProductQueryReturnSkusDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductQueryReturnSkusSpecs {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: string;

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: string;
	}
	export interface GetProductQueryReturnSkusSpecsFormProperties {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetProductQueryReturnSkusSpecsFormGroup() {
		return new FormGroup<GetProductQueryReturnSkusSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductQueryReturnSpecs {

		/**
		 * Specification name.
		 * Required
		 */
		name: string;

		/**
		 * Specification values.
		 * Required
		 */
		values: Array<string>;
	}
	export interface GetProductQueryReturnSpecsFormProperties {

		/**
		 * Specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetProductQueryReturnSpecsFormGroup() {
		return new FormGroup<GetProductQueryReturnSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductReturn {

		/**
		 * Attributes of the product. Attributes are additional properties used to create site browsing filters.
		 * Required
		 */
		GetProductReturnAttributes: Array<GetProductReturnAttributes>;

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: string;

		/**
		 * Name of the Brand associated with the product.
		 * Required
		 */
		brandName: string;

		/**
		 * Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.
		 * Required
		 */
		categoryIds: Array<string>;

		/**
		 * Names of the product's categories, displayed in a path format.
		 * Required
		 */
		categoryNames: Array<string>;

		/**
		 * Date when the product was created.
		 * Required
		 */
		createdAt: string;

		/** Product reference unique identifier number in the store. */
		externalId?: string | null;

		/** Product's unique identifier number. */
		id?: string | null;

		/**
		 * Information of the images of the product.
		 * Required
		 */
		GetProductReturnImages: Array<GetProductReturnImages>;

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: string;

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: string;

		/**
		 * SKUs of the product.
		 * Required
		 */
		GetProductReturnSkus: Array<GetProductReturnSkus>;

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: string;

		/**
		 * Specifications that will differentiate the possible product SKUs.
		 * Required
		 */
		GetProductReturnSpecs: Array<GetProductReturnSpecs>;

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: string;

		/** Product tax code. */
		taxCode?: string | null;

		/** Transport modal of the product. */
		transportModal?: string | null;

		/**
		 * Last date when the product was updated.
		 * Required
		 */
		updatedAt: string;
	}
	export interface GetProductReturnFormProperties {

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: FormControl<string | null | undefined>,

		/**
		 * Name of the Brand associated with the product.
		 * Required
		 */
		brandName: FormControl<string | null | undefined>,

		/**
		 * Date when the product was created.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** Product reference unique identifier number in the store. */
		externalId: FormControl<string | null | undefined>,

		/** Product's unique identifier number. */
		id: FormControl<string | null | undefined>,

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Product tax code. */
		taxCode: FormControl<string | null | undefined>,

		/** Transport modal of the product. */
		transportModal: FormControl<string | null | undefined>,

		/**
		 * Last date when the product was updated.
		 * Required
		 */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetProductReturnFormGroup() {
		return new FormGroup<GetProductReturnFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			transportModal: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductReturnAttributes {

		/**
		 * Attribute name.
		 * Required
		 */
		name: string;

		/**
		 * Attribute value.
		 * Required
		 */
		value: string;
	}
	export interface GetProductReturnAttributesFormProperties {

		/**
		 * Attribute name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Attribute value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetProductReturnAttributesFormGroup() {
		return new FormGroup<GetProductReturnAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductReturnImages {

		/** Image alternative description. */
		alt?: string | null;

		/**
		 * Image ID.
		 * Required
		 */
		id: string;

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: string;
	}
	export interface GetProductReturnImagesFormProperties {

		/** Image alternative description. */
		alt: FormControl<string | null | undefined>,

		/**
		 * Image ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetProductReturnImagesFormGroup() {
		return new FormGroup<GetProductReturnImagesFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductReturnSkus {

		/**
		 * SKU dimensions.
		 * Required
		 */
		dimensions: GetProductReturnSkusDimensions;

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean?: string | null;

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId?: string | null;

		/**
		 * SKU unique identifier number.
		 * Required
		 */
		id: string;

		/**
		 * SKU's images IDs.
		 * Required
		 */
		images: Array<string>;

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/** SKU reference code in the store. */
		manufacturerCode?: string | null;

		/**
		 * SKU specifications. This field is mandatory, but nullable if there is only one SKU.
		 * Required
		 */
		GetProductReturnSkusSpecs: Array<GetProductReturnSkusSpecs>;

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;
	}
	export interface GetProductReturnSkusFormProperties {

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean: FormControl<string | null | undefined>,

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId: FormControl<string | null | undefined>,

		/**
		 * SKU unique identifier number.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * If the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/** SKU reference code in the store. */
		manufacturerCode: FormControl<string | null | undefined>,

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateGetProductReturnSkusFormGroup() {
		return new FormGroup<GetProductReturnSkusFormProperties>({
			ean: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductReturnSkusDimensions {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface GetProductReturnSkusDimensionsFormProperties {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGetProductReturnSkusDimensionsFormGroup() {
		return new FormGroup<GetProductReturnSkusDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductReturnSkusSpecs {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: string;

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: string;
	}
	export interface GetProductReturnSkusSpecsFormProperties {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetProductReturnSkusSpecsFormGroup() {
		return new FormGroup<GetProductReturnSkusSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductReturnSpecs {

		/**
		 * Specification name.
		 * Required
		 */
		name: string;

		/**
		 * Specification values.
		 * Required
		 */
		values: Array<string>;
	}
	export interface GetProductReturnSpecsFormProperties {

		/**
		 * Specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetProductReturnSpecsFormGroup() {
		return new FormGroup<GetProductReturnSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProductPutBody {

		/**
		 * Attributes of the product. Attributes are additional properties used to create site browsing filters.
		 * Required
		 */
		PutProductPutBodyAttributes: Array<PutProductPutBodyAttributes>;

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: string;

		/**
		 * Product's Categories unique identifier numbers. It can have multiples IDs for each Category and Subcategories.
		 * Required
		 */
		categoryIds: Array<string>;

		/** Product reference unique identifier number in the store. */
		externalId?: string | null;

		/** Product's unique identifier number. */
		id?: string | null;

		/**
		 * Information of the images of the product.
		 * Required
		 */
		PutProductPutBodyImages: Array<PutProductPutBodyImages>;

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: string;

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: string;

		/**
		 * SKUs of the product.
		 * Required
		 */
		PutProductPutBodySkus: Array<PutProductPutBodySkus>;

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: string;

		/**
		 * Specifications that will differentiate the possible product SKUs.
		 * Required
		 */
		PutProductPutBodySpecs: Array<PutProductPutBodySpecs>;

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: string;

		/** Product tax code. */
		taxCode?: string | null;

		/** Transport modal of the product. */
		transportModal?: string | null;
	}
	export interface PutProductPutBodyFormProperties {

		/**
		 * Product's Brand unique identifier number.
		 * Required
		 */
		brandId: FormControl<string | null | undefined>,

		/** Product reference unique identifier number in the store. */
		externalId: FormControl<string | null | undefined>,

		/** Product's unique identifier number. */
		id: FormControl<string | null | undefined>,

		/**
		 * Product Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * Reference of the product in the URL of the store.
		 * Required
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * Status of the product. Its values can be `active` or `inactive`.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Product tax code. */
		taxCode: FormControl<string | null | undefined>,

		/** Transport modal of the product. */
		transportModal: FormControl<string | null | undefined>,
	}
	export function CreatePutProductPutBodyFormGroup() {
		return new FormGroup<PutProductPutBodyFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxCode: new FormControl<string | null | undefined>(undefined),
			transportModal: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutProductPutBodyAttributes {

		/**
		 * Attribute name.
		 * Required
		 */
		name: string;

		/**
		 * Attribute value.
		 * Required
		 */
		value: string;
	}
	export interface PutProductPutBodyAttributesFormProperties {

		/**
		 * Attribute name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Attribute value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePutProductPutBodyAttributesFormGroup() {
		return new FormGroup<PutProductPutBodyAttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProductPutBodyImages {

		/** Image alternative description. */
		alt?: string | null;

		/**
		 * Image ID.
		 * Required
		 */
		id: string;

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: string;
	}
	export interface PutProductPutBodyImagesFormProperties {

		/** Image alternative description. */
		alt: FormControl<string | null | undefined>,

		/**
		 * Image ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePutProductPutBodyImagesFormGroup() {
		return new FormGroup<PutProductPutBodyImagesFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProductPutBodySkus {

		/**
		 * SKU dimensions.
		 * Required
		 */
		dimensions: PutProductPutBodySkusDimensions;

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean?: string | null;

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId?: string | null;

		/** SKU unique identifier number. Do not include this field when adding a new SKU, only when editing existing SKUs. */
		id?: string | null;

		/**
		 * SKU's images IDs.
		 * Required
		 */
		images: Array<string>;

		/**
		 * Defines if the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: boolean;

		/** SKU reference code in the store. */
		manufacturerCode?: string | null;

		/** SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
		name?: string | null;

		/**
		 * SKU specifications. This field is mandatory, but nullable if there is only one SKU.
		 * Required
		 */
		PutProductPutBodySkusSpecs: Array<PutProductPutBodySkusSpecs>;

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;
	}
	export interface PutProductPutBodySkusFormProperties {

		/** Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
		ean: FormControl<string | null | undefined>,

		/** Unique reference code created to improve the store's organization. This is not a required field. */
		externalId: FormControl<string | null | undefined>,

		/** SKU unique identifier number. Do not include this field when adding a new SKU, only when editing existing SKUs. */
		id: FormControl<string | null | undefined>,

		/**
		 * Defines if the SKU is active (`true`) or inactive (`false`).
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/** SKU reference code in the store. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** SKU Name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU weight.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreatePutProductPutBodySkusFormGroup() {
		return new FormGroup<PutProductPutBodySkusFormProperties>({
			ean: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProductPutBodySkusDimensions {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface PutProductPutBodySkusDimensionsFormProperties {

		/**
		 * SKU height.
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * SKU length.
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * SKU width.
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePutProductPutBodySkusDimensionsFormGroup() {
		return new FormGroup<PutProductPutBodySkusDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProductPutBodySkusSpecs {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: string;

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: string;
	}
	export interface PutProductPutBodySkusSpecsFormProperties {

		/**
		 * SKU's specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU's specification values.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePutProductPutBodySkusSpecsFormGroup() {
		return new FormGroup<PutProductPutBodySkusSpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProductPutBodySpecs {

		/**
		 * Specification name.
		 * Required
		 */
		name: string;

		/**
		 * Specification values.
		 * Required
		 */
		values: Array<string>;
	}
	export interface PutProductPutBodySpecsFormProperties {

		/**
		 * Specification name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePutProductPutBodySpecsFormGroup() {
		return new FormGroup<PutProductPutBodySpecsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetProductDescriptionReturn {

		/**
		 * Date when the brand was created.
		 * Required
		 */
		createdAt: string;

		/**
		 * Product's unique identifier number.
		 * Required
		 */
		productId: string;

		/**
		 * Last date when the brand was updated.
		 * Required
		 */
		updatedAt: string;
	}
	export interface GetProductDescriptionReturnFormProperties {

		/**
		 * Date when the brand was created.
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/**
		 * Product's unique identifier number.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Last date when the brand was updated.
		 * Required
		 */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateGetProductDescriptionReturnFormGroup() {
		return new FormGroup<GetProductDescriptionReturnFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProductDescriptionPutBody {

		/**
		 * Product description.
		 * Required
		 */
		description: string;

		/**
		 * Product's unique identifier number.
		 * Required
		 */
		productId: string;
	}
	export interface PutProductDescriptionPutBodyFormProperties {

		/**
		 * Product description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Product's unique identifier number.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,
	}
	export function CreatePutProductDescriptionPutBodyFormGroup() {
		return new FormGroup<PutProductDescriptionPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchSKUReturn {

		/** Information about the organization and exhibition of the SKU list. */
		_metadata?: SearchSKUReturn_metadata;

		/** List with information about the SKU. */
		SearchSKUReturnData?: Array<SearchSKUReturnData>;
	}
	export interface SearchSKUReturnFormProperties {
	}
	export function CreateSearchSKUReturnFormGroup() {
		return new FormGroup<SearchSKUReturnFormProperties>({
		});

	}

	export interface SearchSKUReturn_metadata {

		/**
		 * The first page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from?: number | null;

		/**
		 * The last page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to?: number | null;

		/**
		 * Total of SKUs on the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface SearchSKUReturn_metadataFormProperties {

		/**
		 * The first page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * The last page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,

		/**
		 * Total of SKUs on the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateSearchSKUReturn_metadataFormGroup() {
		return new FormGroup<SearchSKUReturn_metadataFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchSKUReturnData {

		/** Unique identifier number of the association of the SKU with a Franchise Account. */
		externalId?: string | null;

		/** SKU unique identifier number. */
		id?: string | null;

		/** Product unique identifier number. */
		productId?: string | null;
	}
	export interface SearchSKUReturnDataFormProperties {

		/** Unique identifier number of the association of the SKU with a Franchise Account. */
		externalId: FormControl<string | null | undefined>,

		/** SKU unique identifier number. */
		id: FormControl<string | null | undefined>,

		/** Product unique identifier number. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateSearchSKUReturnDataFormGroup() {
		return new FormGroup<SearchSKUReturnDataFormProperties>({
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSKUReturn {

		/** Information about the organization and exhibition of the SKU list. */
		_metadata?: ListSKUReturn_metadata;

		/** List with information about the SKU. */
		data?: Array<string>;
	}
	export interface ListSKUReturnFormProperties {
	}
	export function CreateListSKUReturnFormGroup() {
		return new FormGroup<ListSKUReturnFormProperties>({
		});

	}

	export interface ListSKUReturn_metadata {

		/**
		 * The first page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from?: number | null;

		/**
		 * The last page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to?: number | null;

		/**
		 * Total of SKUs on the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface ListSKUReturn_metadataFormProperties {

		/**
		 * The first page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * The last page of the interval of the SKU list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		to: FormControl<number | null | undefined>,

		/**
		 * Total of SKUs on the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateListSKUReturn_metadataFormGroup() {
		return new FormGroup<ListSKUReturn_metadataFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

}

