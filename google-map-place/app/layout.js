"use client";
import Provider from "./Provider";
import HeaderNavBar from "./components/HeaderNavBar";
import { SelectedBusinessContext } from "./context/SelectedBusinessContext";
import { UserLocationContext } from "./context/UserLocationContext";
import "./globals.css";
import { Raleway } from "next/font/google";
import { useEffect, useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });

const metadata = {
  title: "Yunjimi",
  description: "Google API - Resturant finder",
};

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: 40.753826,
        lng: -74.002228,
      });
    });
  };

  return (
    <html lang="en">
      <body className={[raleway.className]}>
        <Provider>
          <SelectedBusinessContext.Provider
            value={{ selectedBusiness, setSelectedBusiness }}
          >
            <UserLocationContext.Provider
              value={{ userLocation, setUserLocation }}
            >
              <HeaderNavBar />
              {children}
            </UserLocationContext.Provider>
          </SelectedBusinessContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
