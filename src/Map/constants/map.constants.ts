export const INITIAL_VIEW_STATE = {
    longitude: -77.117197,
    latitude: -12.056682,
    zoom: 10,
    maxZoom: 20,
    bearing: 0,
    pitch: 30,
};

export const MAP_STYLE = [
    {
        id:"darkMode",
        name:"Mapa Dark",
        style : "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    },
    {
        id:"openStreet",
        name:"Mapa Open Street Map",
        style : "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
    }
]
