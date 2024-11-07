"use client";
import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import Loader from "./Loader";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -8.1356229,
  lng: -63.7369498,
};

interface IGoogleMapComponent {
  lat: string;
  lng: string;
}

const GoogleMapComponent = ({ lat, lng }: IGoogleMapComponent) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading....</div>;
  return (
    <GoogleMap
      options={{
        mapTypeId: "satellite",
        zoomControl: false,
        disableDoubleClickZoom: true,
        maxZoom: 14,
        minZoom: 14,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      }}
      mapContainerStyle={containerStyle}
      center={{
        lat: Number(lat),
        lng: Number(lng),
      }}
      zoom={14}
    >
      <Marker
        position={{
          lat: Number(lat),
          lng: Number(lng),
        }}
      />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
