// https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/?step=0
// https://docs.mapbox.com/mapbox-gl-js/api/map/#map-events

'use client';

import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';

const INITIAL_CENTER: [number, number] = [-75, 40];
const INITIAL_ZOOM = 10;

function MapboxEventsMap() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [center, setCenter] = useState<[number, number]>(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

    if (!mapContainerRef.current) {
      console.error('Map container is not available');
      return;
    }

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center,
      zoom,
    });

    if (!mapRef.current) {
      console.error('Map is not available');
      return;
    }

    mapRef.current.on('move', () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current!.getCenter();
      const mapZoom = mapRef.current!.getZoom();

      // update state
      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  const handleButtonClick = () => {
    mapRef.current?.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM,
    });
  };

  return (
    <>
      <div className="absolute top-0 left-0 z-10 bg-gray-200 p-2 rounded-md">
        Longitude:
        {' '}
        {center[0].toFixed(4)}
        {' '}
        | Latitude:
        {' '}
        {center[1].toFixed(4)}
        {' '}
        |
        Zoom:
        {' '}
        {zoom.toFixed(2)}
      </div>

      <button
        className="absolute top-40 left-0 z-1 bg-blue-500 text-white p-2 rounded-md"
        onClick={handleButtonClick}
      >
        Reset
      </button>

      <div
        id="map-container"
        className="h-screen w-screen bg-gray-200"
        ref={mapContainerRef}
      />
    </>
  );
}

export default MapboxEventsMap;
