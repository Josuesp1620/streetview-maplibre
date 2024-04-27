import "../style/Map.css";
import "maplibre-gl/dist/maplibre-gl.css";

import React from "react";

import Map, { NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import maplibregl from "maplibre-gl";


import { INITIAL_VIEW_STATE, MAP_STYLE } from "@/Map/constants/map.constants";
import MarkerCustom from "./Marker";


export default function MapComponent() {

  const mapRef = React.useRef(null);



  return (
    <Map
        ref={mapRef}
        mapStyle={MAP_STYLE[1].style}
        // onLoad={onMapLoad}
        initialViewState={INITIAL_VIEW_STATE}
        mapLib={maplibregl}    
        boxZoom={false}
        doubleClickZoom={false}
        style={{ width: "100vw", height: "100vh"}}>        
        <MarkerCustom />
        <NavigationControl position="bottom-right" />
        <ScaleControl />
    </Map>
  );
}
