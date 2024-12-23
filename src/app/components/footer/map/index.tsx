"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import React from "react";
import styles from "./map.module.sass";

function Map() {
    const posix: [number, number] = [35.633931, 50.968348];
    const zoom = 14;


    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={posix} draggable={false} />
        </MapContainer>
    );
}

export default Map;
