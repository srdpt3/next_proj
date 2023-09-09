"use client";
import Provider from "./Provider";
import HeaderNavBar from "./components/HeaderNavBar";
import { UserLocationContext } from "./context/UserLocationContext";
import "./globals.css";
import { Raleway } from "next/font/google";
import { useEffect, useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });

const metadata = {
  title: "Tubeguruji",
  description: "Generated by Tubeguruji",
};

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log("ASdfa");

      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <html lang="en">
      <body className={[raleway.className]}>
        <Provider>
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            <HeaderNavBar />
            {children}
          </UserLocationContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
