import React, { memo, useCallback, useState } from "react";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "780px",
  height: "700px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function ShopMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDkHu2wBs13wpawd-dEm4enBFcVkNw1bb4",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDkHu2wBs13wpawd-dEm4enBFcVkNw1bb4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(ShopMap);
