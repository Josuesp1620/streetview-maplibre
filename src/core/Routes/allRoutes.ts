import MapView from "@/Map";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [
    { path: "/map", component: MapView },
]

export { publicRoutes };
