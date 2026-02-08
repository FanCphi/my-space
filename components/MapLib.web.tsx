import React, { useEffect, useMemo } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

// Helper to extract marker data from children
const extractMarkers = (children: any) => {
  const markers: any[] = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.props) {
      const { coordinate, title, description, pinColor } = child.props as any;
      if (coordinate) {
        markers.push({
          lat: coordinate.latitude,
          lng: coordinate.longitude,
          title,
          description,
          color: pinColor === 'gold' ? '#FFD700' : '#FF0000', // Convert names to hex
        });
      }
    }
  });
  return markers;
};

export const Marker = (props: any) => null;
export const Polyline = (props: any) => null;

const MapView = (props: any) => {
  const markers = useMemo(() => extractMarkers(props.children), [props.children]);

  // Generate HTML for the iframe
  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
      <style>
        body { margin: 0; padding: 0; }
        #map { width: 100%; height: 100vh; }
        .custom-icon {
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        // Initialize Map
        // Default to China view
        var map = L.map('map').setView([35.8617, 104.1954], 4);

        // Add OpenStreetMap Tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Marker Data
        var markers = ${JSON.stringify(markers)};

        // Custom Icon Helper
        function createIcon(color) {
           return L.divIcon({
             className: 'custom-pin',
             html: '<div style="background-color:' + color + ';width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
             iconSize: [16, 16],
             iconAnchor: [8, 8]
           });
        }

        // Add Markers
        markers.forEach(function(m) {
          var icon = createIcon(m.color);
          L.marker([m.lat, m.lng], { icon: icon })
            .addTo(map)
            .bindPopup('<b>' + m.title + '</b><br>' + m.description);
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={[styles.container, props.style]}>
      <iframe
        srcDoc={mapHtml}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Web Map"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Neutral loading color
    overflow: 'hidden',
  },
});

export default MapView;
