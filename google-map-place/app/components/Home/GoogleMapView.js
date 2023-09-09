import { UserLocationContext } from "../../context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";

export const GoogleMapView = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
  };
  const coordinate = { lat: 40.776676, lng: -73.971321 };
  console.log(userLocation);
  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={["a63db265ecf0101c"]}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={userLocation}
          options={{ mapId: "a63db265ecf0101c" }}
          zoom={12}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "https://cdn-icons-png.flaticon.com/512/1577/1577393.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
