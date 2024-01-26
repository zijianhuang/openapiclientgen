import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an area. Used to represent regions such as water, parks, etc. Next ID: 10 */
	export interface Area {

		/** Metadata necessary to determine the ordering of a particular basemap element relative to others. To render the basemap correctly, sort by z-plane, then z-grade, then z-within-grade. */
		basemapZOrder?: BasemapZOrder;

		/** True if the polygon is not entirely internal to the feature that it belongs to: that is, some of the edges are bordering another feature. */
		hasExternalEdges?: boolean | null;

		/** When has_external_edges is true, the polygon has some edges that border another feature. This field indicates the internal edges that do not border another feature. Each value is an index into the vertices array, and denotes the start vertex of the internal edge (the next vertex in the boundary loop is the end of the edge). If the selected vertex is the last vertex in the boundary loop, then the edge between that vertex and the starting vertex of the loop is internal. This field may be used for styling. For example, building parapets could be placed only on the external edges of a building polygon, or water could be lighter colored near the external edges of a body of water. If has_external_edges is false, all edges are internal and this field will be empty. */
		internalEdges?: Array<number>;

		/** Identifies the boundary loops of the polygon. Only set for INDEXED_TRIANGLE polygons. Each value is an index into the vertices array indicating the beginning of a loop. For instance, values of [2, 5] would indicate loop_data contained 3 loops with indices 0-1, 2-4, and 5-end. This may be used in conjunction with the internal_edges field for styling polygon boundaries. Note that an edge may be on a polygon boundary but still internal to the feature. For example, a feature split across multiple tiles will have an internal polygon boundary edge along the edge of the tile. */
		loopBreaks?: Array<number>;

		/** When the polygon encoding is of type INDEXED_TRIANGLES, this contains the indices of the triangle vertices in the vertex_offsets field. There are 3 vertex indices per triangle. */
		triangleIndices?: Array<number>;

		/** The polygon encoding type used for this area. */
		type?: AreaType | null;

		/** 2D vertex list used for lines and areas. Each entry represents an offset from the previous one in local tile coordinates. The first entry is offset from (0, 0). For example, the list of vertices [(1,1), (2, 2), (1, 2)] would be encoded in vertex offsets as [(1, 1), (1, 1), (-1, 0)]. */
		vertexOffsets?: Vertex2DList;

		/** The z-ordering of this area. Areas with a lower z-order should be rendered beneath areas with a higher z-order. This z-ordering does not imply anything about the altitude of the line relative to the ground, but it can be used to prevent z-fighting during rendering on the client. This z-ordering can only be used to compare areas, and cannot be compared with the z_order field in the Line message. The z-order may be negative or zero. Prefer Area.basemap_z_order. */
		zOrder?: number | null;
	}

	/** Represents an area. Used to represent regions such as water, parks, etc. Next ID: 10 */
	export interface AreaFormProperties {

		/** True if the polygon is not entirely internal to the feature that it belongs to: that is, some of the edges are bordering another feature. */
		hasExternalEdges: FormControl<boolean | null | undefined>,

		/** The polygon encoding type used for this area. */
		type: FormControl<AreaType | null | undefined>,

		/** The z-ordering of this area. Areas with a lower z-order should be rendered beneath areas with a higher z-order. This z-ordering does not imply anything about the altitude of the line relative to the ground, but it can be used to prevent z-fighting during rendering on the client. This z-ordering can only be used to compare areas, and cannot be compared with the z_order field in the Line message. The z-order may be negative or zero. Prefer Area.basemap_z_order. */
		zOrder: FormControl<number | null | undefined>,
	}
	export function CreateAreaFormGroup() {
		return new FormGroup<AreaFormProperties>({
			hasExternalEdges: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<AreaType | null | undefined>(undefined),
			zOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata necessary to determine the ordering of a particular basemap element relative to others. To render the basemap correctly, sort by z-plane, then z-grade, then z-within-grade. */
	export interface BasemapZOrder {

		/** The second most significant component of the ordering of a component to be rendered onto the basemap. */
		zGrade?: number | null;

		/** The most significant component of the ordering of a component to be rendered onto the basemap. */
		zPlane?: number | null;

		/** The least significant component of the ordering of a component to be rendered onto the basemap. */
		zWithinGrade?: number | null;
	}

	/** Metadata necessary to determine the ordering of a particular basemap element relative to others. To render the basemap correctly, sort by z-plane, then z-grade, then z-within-grade. */
	export interface BasemapZOrderFormProperties {

		/** The second most significant component of the ordering of a component to be rendered onto the basemap. */
		zGrade: FormControl<number | null | undefined>,

		/** The most significant component of the ordering of a component to be rendered onto the basemap. */
		zPlane: FormControl<number | null | undefined>,

		/** The least significant component of the ordering of a component to be rendered onto the basemap. */
		zWithinGrade: FormControl<number | null | undefined>,
	}
	export function CreateBasemapZOrderFormGroup() {
		return new FormGroup<BasemapZOrderFormProperties>({
			zGrade: new FormControl<number | null | undefined>(undefined),
			zPlane: new FormControl<number | null | undefined>(undefined),
			zWithinGrade: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AreaType { TRIANGLE_FAN = 0, INDEXED_TRIANGLES = 1, TRIANGLE_STRIP = 2 }


	/** 2D vertex list used for lines and areas. Each entry represents an offset from the previous one in local tile coordinates. The first entry is offset from (0, 0). For example, the list of vertices [(1,1), (2, 2), (1, 2)] would be encoded in vertex offsets as [(1, 1), (1, 1), (-1, 0)]. */
	export interface Vertex2DList {

		/** List of x-offsets in local tile coordinates. */
		xOffsets?: Array<number>;

		/** List of y-offsets in local tile coordinates. */
		yOffsets?: Array<number>;
	}

	/** 2D vertex list used for lines and areas. Each entry represents an offset from the previous one in local tile coordinates. The first entry is offset from (0, 0). For example, the list of vertices [(1,1), (2, 2), (1, 2)] would be encoded in vertex offsets as [(1, 1), (1, 1), (-1, 0)]. */
	export interface Vertex2DListFormProperties {
	}
	export function CreateVertex2DListFormGroup() {
		return new FormGroup<Vertex2DListFormProperties>({
		});

	}


	/** Represents a height-extruded area: a 3D prism with a constant X-Y plane cross section. Used to represent extruded buildings. A single building may consist of several extruded areas. The min_z and max_z fields are scaled to the size of the tile. An extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. */
	export interface ExtrudedArea {

		/** Represents an area. Used to represent regions such as water, parks, etc. Next ID: 10 */
		area?: Area;

		/** The z-value in local tile coordinates where the extruded area ends. */
		maxZ?: number | null;

		/** The z-value in local tile coordinates where the extruded area begins. This is non-zero for extruded areas that begin off the ground. For example, a building with a skybridge may have an extruded area component with a non-zero min_z. */
		minZ?: number | null;
	}

	/** Represents a height-extruded area: a 3D prism with a constant X-Y plane cross section. Used to represent extruded buildings. A single building may consist of several extruded areas. The min_z and max_z fields are scaled to the size of the tile. An extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. */
	export interface ExtrudedAreaFormProperties {

		/** The z-value in local tile coordinates where the extruded area ends. */
		maxZ: FormControl<number | null | undefined>,

		/** The z-value in local tile coordinates where the extruded area begins. This is non-zero for extruded areas that begin off the ground. For example, a building with a skybridge may have an extruded area component with a non-zero min_z. */
		minZ: FormControl<number | null | undefined>,
	}
	export function CreateExtrudedAreaFormGroup() {
		return new FormGroup<ExtrudedAreaFormProperties>({
			maxZ: new FormControl<number | null | undefined>(undefined),
			minZ: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A feature representing a single geographic entity. */
	export interface Feature {

		/** The localized name of this feature. Currently only returned for roads. */
		displayName?: string | null;

		/** Represents the geometry of a feature, that is, the shape that it has on the map. The local tile coordinate system has the origin at the north-west (upper-left) corner of the tile, and is scaled to 4096 units across each edge. The height (Z) axis has the same scale factor: an extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. There is no clipping boundary, so it is possible that some coordinates will lie outside the tile boundaries. */
		geometry?: Geometry;

		/** Place ID of this feature, suitable for use in Places API details requests. */
		placeId?: string | null;

		/** Relations to other features. */
		relations?: Array<Relation>;

		/** Extra metadata relating to segments. */
		segmentInfo?: SegmentInfo;

		/** The type of this feature. */
		type?: FeatureType | null;
	}

	/** A feature representing a single geographic entity. */
	export interface FeatureFormProperties {

		/** The localized name of this feature. Currently only returned for roads. */
		displayName: FormControl<string | null | undefined>,

		/** Place ID of this feature, suitable for use in Places API details requests. */
		placeId: FormControl<string | null | undefined>,

		/** The type of this feature. */
		type: FormControl<FeatureType | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FeatureType | null | undefined>(undefined),
		});

	}


	/** Represents the geometry of a feature, that is, the shape that it has on the map. The local tile coordinate system has the origin at the north-west (upper-left) corner of the tile, and is scaled to 4096 units across each edge. The height (Z) axis has the same scale factor: an extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. There is no clipping boundary, so it is possible that some coordinates will lie outside the tile boundaries. */
	export interface Geometry {

		/** The areas present in this geometry. */
		areas?: Array<Area>;

		/** The extruded areas present in this geometry. Not populated if modeled_volumes are included in this geometry unless always_include_building_footprints is set in GetFeatureTileRequest, in which case the client should decide which (extruded areas or modeled volumes) should be used (they should not be rendered together). */
		extrudedAreas?: Array<ExtrudedArea>;

		/** The lines present in this geometry. */
		lines?: Array<Line>;

		/** The modeled volumes present in this geometry. Not populated unless enable_modeled_volumes has been set in GetFeatureTileRequest. */
		modeledVolumes?: Array<ModeledVolume>;
	}

	/** Represents the geometry of a feature, that is, the shape that it has on the map. The local tile coordinate system has the origin at the north-west (upper-left) corner of the tile, and is scaled to 4096 units across each edge. The height (Z) axis has the same scale factor: an extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. There is no clipping boundary, so it is possible that some coordinates will lie outside the tile boundaries. */
	export interface GeometryFormProperties {
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
		});

	}


	/** Represents a 2D polyline. Used to represent segments such as roads, train tracks, etc. */
	export interface Line {

		/** Metadata necessary to determine the ordering of a particular basemap element relative to others. To render the basemap correctly, sort by z-plane, then z-grade, then z-within-grade. */
		basemapZOrder?: BasemapZOrder;

		/** 2D vertex list used for lines and areas. Each entry represents an offset from the previous one in local tile coordinates. The first entry is offset from (0, 0). For example, the list of vertices [(1,1), (2, 2), (1, 2)] would be encoded in vertex offsets as [(1, 1), (1, 1), (-1, 0)]. */
		vertexOffsets?: Vertex2DList;

		/** The z-order of the line. Lines with a lower z-order should be rendered beneath lines with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting during rendering on the client. In general, larger and more important road features will have a higher z-order line associated with them. This z-ordering can only be used to compare lines, and cannot be compared with the z_order field in the Area message. The z-order may be negative or zero. Prefer Line.basemap_z_order. */
		zOrder?: number | null;
	}

	/** Represents a 2D polyline. Used to represent segments such as roads, train tracks, etc. */
	export interface LineFormProperties {

		/** The z-order of the line. Lines with a lower z-order should be rendered beneath lines with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting during rendering on the client. In general, larger and more important road features will have a higher z-order line associated with them. This z-ordering can only be used to compare lines, and cannot be compared with the z_order field in the Area message. The z-order may be negative or zero. Prefer Line.basemap_z_order. */
		zOrder: FormControl<number | null | undefined>,
	}
	export function CreateLineFormGroup() {
		return new FormGroup<LineFormProperties>({
			zOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a modeled volume in 3D space. Used to represent 3D buildings. */
	export interface ModeledVolume {

		/** The triangle strips present in this mesh. */
		strips?: Array<TriangleStrip>;

		/** 3D vertex list used for modeled volumes. Each entry represents an offset from the previous one in local tile coordinates. The first coordinate is offset from (0, 0, 0). */
		vertexOffsets?: Vertex3DList;
	}

	/** Represents a modeled volume in 3D space. Used to represent 3D buildings. */
	export interface ModeledVolumeFormProperties {
	}
	export function CreateModeledVolumeFormGroup() {
		return new FormGroup<ModeledVolumeFormProperties>({
		});

	}


	/** Represents a strip of triangles. Each triangle uses the last edge of the previous one. The following diagram shows an example of a triangle strip, with each vertex labeled with its index in the vertex_index array. (1)-----(3) / \ / \ / \ / \ / \ / \ (0)-----(2)-----(4) Vertices may be in either clockwise or counter-clockwise order. */
	export interface TriangleStrip {

		/** Index into the vertex_offset array representing the next vertex in the triangle strip. */
		vertexIndices?: Array<number>;
	}

	/** Represents a strip of triangles. Each triangle uses the last edge of the previous one. The following diagram shows an example of a triangle strip, with each vertex labeled with its index in the vertex_index array. (1)-----(3) / \ / \ / \ / \ / \ / \ (0)-----(2)-----(4) Vertices may be in either clockwise or counter-clockwise order. */
	export interface TriangleStripFormProperties {
	}
	export function CreateTriangleStripFormGroup() {
		return new FormGroup<TriangleStripFormProperties>({
		});

	}


	/** 3D vertex list used for modeled volumes. Each entry represents an offset from the previous one in local tile coordinates. The first coordinate is offset from (0, 0, 0). */
	export interface Vertex3DList {

		/** List of x-offsets in local tile coordinates. */
		xOffsets?: Array<number>;

		/** List of y-offsets in local tile coordinates. */
		yOffsets?: Array<number>;

		/** List of z-offsets in local tile coordinates. */
		zOffsets?: Array<number>;
	}

	/** 3D vertex list used for modeled volumes. Each entry represents an offset from the previous one in local tile coordinates. The first coordinate is offset from (0, 0, 0). */
	export interface Vertex3DListFormProperties {
	}
	export function CreateVertex3DListFormGroup() {
		return new FormGroup<Vertex3DListFormProperties>({
		});

	}


	/** Represents a relation to another feature in the tile. For example, a building might be occupied by a given POI. The related feature can be retrieved using the related feature index. */
	export interface Relation {

		/** Zero-based index to look up the related feature from the list of features in the tile. */
		relatedFeatureIndex?: number | null;

		/** Relation type between the origin feature to the related feature. */
		relationType?: RelationRelationType | null;
	}

	/** Represents a relation to another feature in the tile. For example, a building might be occupied by a given POI. The related feature can be retrieved using the related feature index. */
	export interface RelationFormProperties {

		/** Zero-based index to look up the related feature from the list of features in the tile. */
		relatedFeatureIndex: FormControl<number | null | undefined>,

		/** Relation type between the origin feature to the related feature. */
		relationType: FormControl<RelationRelationType | null | undefined>,
	}
	export function CreateRelationFormGroup() {
		return new FormGroup<RelationFormProperties>({
			relatedFeatureIndex: new FormControl<number | null | undefined>(undefined),
			relationType: new FormControl<RelationRelationType | null | undefined>(undefined),
		});

	}

	export enum RelationRelationType { RELATION_TYPE_UNSPECIFIED = 0, OCCUPIES = 1, PRIMARILY_OCCUPIED_BY = 2 }


	/** Extra metadata relating to segments. */
	export interface SegmentInfo {

		/** Extra metadata relating to roads. */
		roadInfo?: RoadInfo;
	}

	/** Extra metadata relating to segments. */
	export interface SegmentInfoFormProperties {
	}
	export function CreateSegmentInfoFormGroup() {
		return new FormGroup<SegmentInfoFormProperties>({
		});

	}


	/** Extra metadata relating to roads. */
	export interface RoadInfo {

		/** Road has signage discouraging or prohibiting use by the general public. E.g., roads with signs that say "Private", or "No trespassing." */
		isPrivate?: boolean | null;
	}

	/** Extra metadata relating to roads. */
	export interface RoadInfoFormProperties {

		/** Road has signage discouraging or prohibiting use by the general public. E.g., roads with signs that say "Private", or "No trespassing." */
		isPrivate: FormControl<boolean | null | undefined>,
	}
	export function CreateRoadInfoFormGroup() {
		return new FormGroup<RoadInfoFormProperties>({
			isPrivate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FeatureType { FEATURE_TYPE_UNSPECIFIED = 0, STRUCTURE = 1, BAR = 2, BANK = 3, LODGING = 4, CAFE = 5, RESTAURANT = 6, EVENT_VENUE = 7, TOURIST_DESTINATION = 8, SHOPPING = 9, SCHOOL = 10, SEGMENT = 11, ROAD = 12, LOCAL_ROAD = 13, ARTERIAL_ROAD = 14, HIGHWAY = 15, CONTROLLED_ACCESS_HIGHWAY = 16, FOOTPATH = 17, RAIL = 18, FERRY = 19, REGION = 20, PARK = 21, BEACH = 22, FOREST = 23, POLITICAL = 24, ADMINISTRATIVE_AREA1 = 25, LOCALITY = 26, SUBLOCALITY = 27, WATER = 28 }


	/** A tile containing information about the map features located in the region it covers. */
	export interface FeatureTile {

		/** Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness. */
		coordinates?: TileCoordinates;

		/** Features present on this map tile. */
		features?: Array<Feature>;

		/** Resource name of the tile. The tile resource name is prefixed by its collection ID `tiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `tiles/@1,2,3z`. */
		name?: string | null;

		/** Data providers for the data contained in this tile. */
		providers?: Array<ProviderInfo>;

		/** Tile response status code to support tile caching. */
		status?: FeatureTileStatus | null;

		/** An opaque value, usually less than 30 characters, that contains version info about this tile and the data that was used to generate it. The client should store this value in its tile cache and pass it back to the API in the client_tile_version_id field of subsequent tile requests in order to enable the API to detect when the new tile would be the same as the one the client already has in its cache. Also see STATUS_OK_DATA_UNCHANGED. */
		versionId?: string | null;
	}

	/** A tile containing information about the map features located in the region it covers. */
	export interface FeatureTileFormProperties {

		/** Resource name of the tile. The tile resource name is prefixed by its collection ID `tiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `tiles/@1,2,3z`. */
		name: FormControl<string | null | undefined>,

		/** Tile response status code to support tile caching. */
		status: FormControl<FeatureTileStatus | null | undefined>,

		/** An opaque value, usually less than 30 characters, that contains version info about this tile and the data that was used to generate it. The client should store this value in its tile cache and pass it back to the API in the client_tile_version_id field of subsequent tile requests in order to enable the API to detect when the new tile would be the same as the one the client already has in its cache. Also see STATUS_OK_DATA_UNCHANGED. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateFeatureTileFormGroup() {
		return new FormGroup<FeatureTileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FeatureTileStatus | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness. */
	export interface TileCoordinates {

		/** Required. The x coordinate. */
		x?: number | null;

		/** Required. The y coordinate. */
		y?: number | null;

		/** Required. The Google Maps API zoom level. */
		zoom?: number | null;
	}

	/** Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness. */
	export interface TileCoordinatesFormProperties {

		/** Required. The x coordinate. */
		x: FormControl<number | null | undefined>,

		/** Required. The y coordinate. */
		y: FormControl<number | null | undefined>,

		/** Required. The Google Maps API zoom level. */
		zoom: FormControl<number | null | undefined>,
	}
	export function CreateTileCoordinatesFormGroup() {
		return new FormGroup<TileCoordinatesFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
			zoom: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the data providers that should be included in the attribution string shown by the client. */
	export interface ProviderInfo {

		/** Attribution string for this provider. This string is not localized. */
		description?: string | null;
	}

	/** Information about the data providers that should be included in the attribution string shown by the client. */
	export interface ProviderInfoFormProperties {

		/** Attribution string for this provider. This string is not localized. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateProviderInfoFormGroup() {
		return new FormGroup<ProviderInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FeatureTileStatus { STATUS_OK = 0, STATUS_OK_DATA_UNCHANGED = 1 }


	/** A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs between them as integers at some requested level of precision to take advantage of integer packing. The actual altitude values a[] can be reconstructed using the scale and each row's first_altitude and altitude_diff fields. More details in go/elevation-encoding-options-for-enduro under "Recommended implementation". */
	export interface FirstDerivativeElevationGrid {

		/** A multiplier applied to the altitude fields below to extract the actual altitudes in meters from the elevation grid. */
		altitudeMultiplier?: number | null;

		/** Rows of points containing altitude data making up the elevation grid. Each row is the same length. Rows are ordered from north to south. E.g: rows[0] is the north-most row, and rows[n] is the south-most row. */
		rows?: Array<Row>;
	}

	/** A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs between them as integers at some requested level of precision to take advantage of integer packing. The actual altitude values a[] can be reconstructed using the scale and each row's first_altitude and altitude_diff fields. More details in go/elevation-encoding-options-for-enduro under "Recommended implementation". */
	export interface FirstDerivativeElevationGridFormProperties {

		/** A multiplier applied to the altitude fields below to extract the actual altitudes in meters from the elevation grid. */
		altitudeMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateFirstDerivativeElevationGridFormGroup() {
		return new FormGroup<FirstDerivativeElevationGridFormProperties>({
			altitudeMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A row of altitude points in the elevation grid, ordered from west to east. */
	export interface Row {

		/** The difference between each successive pair of altitudes, from west to east. The first, westmost point, is just the altitude rather than a diff. The units are specified by the altitude_multiplier parameter above; the value in meters is given by altitude_multiplier * altitude_diffs[n]. The altitude row (in metres above sea level) can be reconstructed with: a[0] = altitude_diffs[0] * altitude_multiplier when n > 0, a[n] = a[n-1] + altitude_diffs[n-1] * altitude_multiplier. */
		altitudeDiffs?: Array<number>;
	}

	/** A row of altitude points in the elevation grid, ordered from west to east. */
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}


	/** A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size. */
	export interface SecondDerivativeElevationGrid {

		/** A multiplier applied to the elements in the encoded data to extract the actual altitudes in meters. */
		altitudeMultiplier?: number | null;

		/** The number of columns included in the encoded elevation data (i.e. the horizontal resolution of the grid). */
		columnCount?: number | null;

		/** A stream of elements each representing a point on the tile running across each row from left to right, top to bottom. There will be precisely horizontal_resolution * vertical_resolution elements in the stream. The elements are not the heights, rather the second order derivative of the values one would expect in a stream of height data. Each element is a varint with the following encoding: ------------------------------------------------------------------------| | Head Nibble | ------------------------------------------------------------------------| | Bit 0 | Bit 1 | Bits 2-3 | | Terminator| Sign (1=neg) | Least significant 2 bits of absolute error | ------------------------------------------------------------------------| | Tail Nibble #1 | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------| | ... | Tail Nibble #n | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------| */
		encodedData?: string | null;

		/** The number of rows included in the encoded elevation data (i.e. the vertical resolution of the grid). */
		rowCount?: number | null;
	}

	/** A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size. */
	export interface SecondDerivativeElevationGridFormProperties {

		/** A multiplier applied to the elements in the encoded data to extract the actual altitudes in meters. */
		altitudeMultiplier: FormControl<number | null | undefined>,

		/** The number of columns included in the encoded elevation data (i.e. the horizontal resolution of the grid). */
		columnCount: FormControl<number | null | undefined>,

		/** A stream of elements each representing a point on the tile running across each row from left to right, top to bottom. There will be precisely horizontal_resolution * vertical_resolution elements in the stream. The elements are not the heights, rather the second order derivative of the values one would expect in a stream of height data. Each element is a varint with the following encoding: ------------------------------------------------------------------------| | Head Nibble | ------------------------------------------------------------------------| | Bit 0 | Bit 1 | Bits 2-3 | | Terminator| Sign (1=neg) | Least significant 2 bits of absolute error | ------------------------------------------------------------------------| | Tail Nibble #1 | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------| | ... | Tail Nibble #n | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------| */
		encodedData: FormControl<string | null | undefined>,

		/** The number of rows included in the encoded elevation data (i.e. the vertical resolution of the grid). */
		rowCount: FormControl<number | null | undefined>,
	}
	export function CreateSecondDerivativeElevationGridFormGroup() {
		return new FormGroup<SecondDerivativeElevationGridFormProperties>({
			altitudeMultiplier: new FormControl<number | null | undefined>(undefined),
			columnCount: new FormControl<number | null | undefined>(undefined),
			encodedData: new FormControl<string | null | undefined>(undefined),
			rowCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A tile containing information about the terrain located in the region it covers. */
	export interface TerrainTile {

		/** Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness. */
		coordinates?: TileCoordinates;

		/** A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs between them as integers at some requested level of precision to take advantage of integer packing. The actual altitude values a[] can be reconstructed using the scale and each row's first_altitude and altitude_diff fields. More details in go/elevation-encoding-options-for-enduro under "Recommended implementation". */
		firstDerivative?: FirstDerivativeElevationGrid;

		/** Resource name of the tile. The tile resource name is prefixed by its collection ID `terrain/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terrain/@1,2,3z`. */
		name?: string | null;

		/** A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size. */
		secondDerivative?: SecondDerivativeElevationGrid;
	}

	/** A tile containing information about the terrain located in the region it covers. */
	export interface TerrainTileFormProperties {

		/** Resource name of the tile. The tile resource name is prefixed by its collection ID `terrain/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terrain/@1,2,3z`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTerrainTileFormGroup() {
		return new FormGroup<TerrainTileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a terrain tile by its tile resource name.
		 * Get v1/{name}
		 * @param {string} name Required. Resource name of the tile. The tile resource name is prefixed by its collection ID `terraintiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terraintiles/@1,2,3z`.
		 * @param {number} altitudePrecisionCentimeters The precision of terrain altitudes in centimeters. Possible values: between 1 (cm level precision) and 1,000,000 (10-kilometer level precision).
		 * @param {string} clientInfo_apiClient API client name and version. For example, the SDK calling the API. The exact format is up to the client.
		 * @param {string} clientInfo_applicationId Application ID, such as the package name on Android and the bundle identifier on iOS platforms.
		 * @param {string} clientInfo_applicationVersion Application version number, such as "1.2.3". The exact format is application-dependent.
		 * @param {string} clientInfo_deviceModel Device model as reported by the device. The exact format is platform-dependent.
		 * @param {string} clientInfo_operatingSystem Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.
		 * @param {Vectortile_terraintiles_getClientInfo_platform} clientInfo_platform Platform where the application is running.
		 * @param {string} clientInfo_userId Required. A client-generated user ID. The ID should be generated and persisted during the first user session or whenever a pre-existing ID is not found. The exact format is up to the client. This must be non-empty in a GetFeatureTileRequest (whether via the header or GetFeatureTileRequest.client_info).
		 * @param {number} maxElevationResolutionCells The maximum allowed resolution for the returned elevation heightmap. Possible values: between 1 and 1024 (and not less than min_elevation_resolution_cells). Over-sized heightmaps will be non-uniformly down-sampled such that each edge is no longer than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 100px (width) * 30px (height) max_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)
		 * @param {number} minElevationResolutionCells  api-linter: core::0131::request-unknown-fields=disabled aip.dev/not-precedent: Maintaining existing request parameter pattern. The minimum allowed resolution for the returned elevation heightmap. Possible values: between 0 and 1024 (and not more than max_elevation_resolution_cells). Zero is supported for backward compatibility. Under-sized heightmaps will be non-uniformly up-sampled such that each edge is no shorter than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 30px (width) * 10px (height) min_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)
		 * @param {Array<string>} terrainFormats Terrain formats that the client understands.
		 * @param {boolean} enableModeledVolumes Flag indicating whether 3D building models should be enabled. If this is set structures will be returned as 3D modeled volumes rather than 2.5D extruded areas where possible.
		 * @param {boolean} enablePoliticalFeatures Flag indicating whether political features should be returned.
		 * @param {boolean} enablePrivateRoads Flag indicating whether the returned tile will contain road features that are marked private. Private roads are indicated by the Feature.segment_info.road_info.is_private field.
		 * @param {boolean} enableUnclippedBuildings Flag indicating whether unclipped buildings should be returned. If this is set, building render ops will extend beyond the tile boundary. Buildings will only be returned on the tile that contains their centroid.
		 * @param {string} languageCode Required. The BCP-47 language code corresponding to the language in which the name was requested, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
		 * @param {string} regionCode Required. The Unicode country/region code (CLDR) of the location from which the request is coming from, such as "US" and "419". For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag.
		 * @return {TerrainTile} Successful response
		 */
		Vectortile_terraintiles_get(name: string, altitudePrecisionCentimeters: number | null | undefined, clientInfo_apiClient: string | null | undefined, clientInfo_applicationId: string | null | undefined, clientInfo_applicationVersion: string | null | undefined, clientInfo_deviceModel: string | null | undefined, clientInfo_operatingSystem: string | null | undefined, clientInfo_platform: Vectortile_terraintiles_getClientInfo_platform | null | undefined, clientInfo_userId: string | null | undefined, maxElevationResolutionCells: number | null | undefined, minElevationResolutionCells: number | null | undefined, terrainFormats: Array<string> | null | undefined, enableModeledVolumes: boolean | null | undefined, enablePoliticalFeatures: boolean | null | undefined, enablePrivateRoads: boolean | null | undefined, enableUnclippedBuildings: boolean | null | undefined, languageCode: string | null | undefined, regionCode: string | null | undefined): Observable<TerrainTile> {
			return this.http.get<TerrainTile>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&altitudePrecisionCentimeters=' + altitudePrecisionCentimeters + '&clientInfo_apiClient=' + (clientInfo_apiClient == null ? '' : encodeURIComponent(clientInfo_apiClient)) + '&clientInfo_applicationId=' + (clientInfo_applicationId == null ? '' : encodeURIComponent(clientInfo_applicationId)) + '&clientInfo_applicationVersion=' + (clientInfo_applicationVersion == null ? '' : encodeURIComponent(clientInfo_applicationVersion)) + '&clientInfo_deviceModel=' + (clientInfo_deviceModel == null ? '' : encodeURIComponent(clientInfo_deviceModel)) + '&clientInfo_operatingSystem=' + (clientInfo_operatingSystem == null ? '' : encodeURIComponent(clientInfo_operatingSystem)) + '&clientInfo_platform=' + clientInfo_platform + '&clientInfo_userId=' + (clientInfo_userId == null ? '' : encodeURIComponent(clientInfo_userId)) + '&maxElevationResolutionCells=' + maxElevationResolutionCells + '&minElevationResolutionCells=' + minElevationResolutionCells + '&' + terrainFormats?.map(z => `terrainFormats=${encodeURIComponent(z)}`).join('&') + '&enableModeledVolumes=' + enableModeledVolumes + '&enablePoliticalFeatures=' + enablePoliticalFeatures + '&enablePrivateRoads=' + enablePrivateRoads + '&enableUnclippedBuildings=' + enableUnclippedBuildings + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)), {});
		}
	}

	export enum Vectortile_terraintiles_getClientInfo_platform { PLATFORM_UNSPECIFIED = 0, EDITOR = 1, MAC_OS = 2, WINDOWS = 3, LINUX = 4, ANDROID = 5, IOS = 6, WEB_GL = 7 }

}

