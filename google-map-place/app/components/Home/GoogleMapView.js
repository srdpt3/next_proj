import { UserLocationContext } from "../../context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext, useEffect, useState } from "react";
import { Marker } from "./Marker";
import { SelectedBusinessContext } from "../../context/SelectedBusinessContext";

export const GoogleMapView = ({ businessList }) => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );
  const [map, setMap] = useState();

  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };
  // const coordinate = { lat: 40.776676, lng: -73.971321 };
  console.log(userLocation);
  useEffect(() => {
    if (map && selectedBusiness) {
      map.panTo(selectedBusiness.geometry.location);
    }
  }, [selectedBusiness]);
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={["a63db265ecf0101c"]}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={
            !selectedBusiness.name
              ? userLocation
              : selectedBusiness.geometry.location
          }
          options={{ mapId: "a63db265ecf0101c" }}
          zoom={13}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "./user-location.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {businessList.map((item, index) => (
            <Marker business={item} key={index} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
