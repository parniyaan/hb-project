import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';
import styles from "./map.module.sass";
import React from "react";

function Map() {
    const position: [number, number] = [35.633931, 50.968348];

    const markerIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    return (
        <MapContainer center={position} zoom={13} className={styles.map}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}/>
        </MapContainer>
    )
}

export default Map;