"use client";
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const position: [number, number] = [34.710203, 33.127101];

export const Map = () => {
  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={true} 
      className="h-96 w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
    </MapContainer>
  );
};
