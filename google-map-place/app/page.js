"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CategoryList from "./components/Home/CategoryList";
import { RangeSelect } from "./components/Home/RangeSelect";
import { SelectRating } from "./components/Home/SelectRating";
import { GoogleMapView } from "./components/Home/GoogleMapView";
import GlobalApi from "./Shared/GlobalApi";
import { UserLocationContext } from "./context/UserLocationContext";
import { BusinessList } from "./components/Home/BusinessList";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState("rooftop");
  const [radius, setRadius] = useState(1000);
  const [businessList, setBusinessList] = useState([]);
  const router = useRouter();
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    GlobalApi.getGooglePlace(
      category,
      radius,
      userLocation.lat,
      userLocation.lng
    ).then((resp) => {
      console.log(resp.data.product.results);
      setBusinessList(resp.data.product.results);
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="p-3">
        <CategoryList onCategoryChange={(value) => setCategory(value)} />
        <RangeSelect onRadiusChange={(value) => setRadius(value)} />
        <SelectRating />
      </div>
      <div className="col-span-3">
        <GoogleMapView />
        <div className="relative md:absolute w-[90%] md:w-[71%] ml-6 md:ml-10 bottom-36 md:bottom-3">
          <BusinessList businessList={businessList} />
        </div>
      </div>

      {/* <button onClick={() => signOut()}>SignOut</button> */}
    </div>
  );
}
