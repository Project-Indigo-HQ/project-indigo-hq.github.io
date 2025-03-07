import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../styles/Map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });

    function successLocation(position) {
      const { longitude, latitude } = position.coords;
      setupMap([longitude, latitude]);
    }

    function errorLocation() {
      setupMap([-122.68, 45.51]);
    }

    function setupMap(center) {
      if (mapRef.current) return;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15,
      });

      map.addControl(new mapboxgl.NavigationControl());

      var directions = new MapboxDirections ({
        accessToken: mapboxgl.accessToken
      });

      map.addControl(directions, "top-left");

      directions.setOrigin(center);

      mapRef.current = map; 
    };

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return <div ref={mapContainerRef} class = "MapHolder" />;
};

export default MapComponent;