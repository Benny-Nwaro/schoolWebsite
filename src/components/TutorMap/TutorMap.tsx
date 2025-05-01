"use client";
import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import TutorMarker from "./TutorMarker";
import TutorMapPopup from "./TutorMapPopup";
import { Tutor } from "@/src/types/types";
import { useRouter } from "next/router";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  geoLocations: Marker[];
}

const containerStyle = {
  width: "100%",
  height: "675px",
};

interface Marker {
  id: string;
  latitude: number;
  longitude: number;
  address: string;
  teacher: Tutor;
}

const TutorMap: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  geoLocations,
}) => {
  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
    teacher: Tutor;
  } | null>(null);
  const [center, setCenter] = useState({ latitude, longitude });
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMarkerClick = (marker: {
    lat: number;
    lng: number;
    teacher: Tutor;
  }) => {
    setSelectedMarker(marker);
    setCenter({ latitude: marker.lat, longitude: marker.lng });
    if (mapRef.current) {
      mapRef.current.panTo({ lat: marker.lat, lng: marker.lng });
    }
  };

  const handleClosePopup = () => {
    setSelectedMarker(null);
  };

  const onLoad = async (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const getPixelPositionOffset = (width: number, height: number) => ({
    x: -(width / 2),
    y: -(height / 2),
  });

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: center.latitude, lng: center.longitude }} // Set initial center
        zoom={9}
        onLoad={onLoad}
      >
        {geoLocations &&
          geoLocations
            ?.filter((el) => el?.address && el?.address !== "")
            .map((marker: Marker, index) => (
              <OverlayView
                key={index}
                position={{ lat: marker?.latitude, lng: marker.longitude }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                getPixelPositionOffset={getPixelPositionOffset}
              >
                <div
                  onClick={() => {
                    handleMarkerClick({
                      lat: marker.latitude,
                      lng: marker.longitude,
                      teacher: marker?.teacher,
                    });
                  }}
                >
                  <TutorMarker
                    text={`$${Number(marker?.teacher?.hourlyRate) / 100}/h`}
                    key={index}
                    image={marker?.teacher?.user?.profileImage}
                  />
                </div>
              </OverlayView>
            ))}
        {selectedMarker && (
          <OverlayView
            position={selectedMarker}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={getPixelPositionOffset}
          >
            <TutorMapPopup
              onClick={handleClosePopup}
              teacher={selectedMarker?.teacher}
            />
          </OverlayView>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default TutorMap;
