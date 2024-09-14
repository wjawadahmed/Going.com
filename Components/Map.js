'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS

// Replace this with your own Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2F6aXIzNDI0IiwiYSI6ImNtMHR3eHZndzAxNm8ybHNlMWpsd2M2NGEifQ.2XmMYY0I0xtOA4Cc2mR7mA';

const Map = () => {
  const mapContainerRef = useRef(null); // Reference to the map container div

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      console.error('Mapbox access token is missing');
      return;
    }

    try {
      // Initialize Mapbox map
      const map = new mapboxgl.Map({
        container: mapContainerRef.current, // Map container reference
        style: 'mapbox://styles/mapbox/navigation-day-v1', // Map style (ensure this is valid)
        center: [-70.2553, 43.6615], // [lng, lat]
        zoom: 9, // Starting zoom level
      });

      // Add navigation control (zoom in/out)
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Clean up the map instance on component unmount
      return () => map.remove();
    } catch (error) {
      console.error('Error initializing the Mapbox map:', error);
    }
  }, []);

  return (
    <div className="outer p-7  ">
      <div className="inner">
        <div className="frame">
          <div className="frame">
            <div className="mapWrapper ">
              {/* Mapbox map container */}
              <div
                className="map mapboxgl-map rounded-3xl shadow-sm"
                ref={mapContainerRef}
                style={{ width: '100%', height: '400px' }} // Ensure the container has height and width
              >
                {/* The map will be rendered inside this div */}
              </div>
            </div>
          </div>
          <div className="label">
            <p className="paragraph sm:text-sm text-xs text-center text-[#004449] p-2">
              Over the last 2 years, we've sent Going members from Portland International
              Jetport to 146 destinations. These are the cheapest flights we've found to each
              of those destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
