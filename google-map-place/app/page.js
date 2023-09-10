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
import { SkeletonLoading } from "./components/SkeletonLoading";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState("rooftop");
  const [radius, setRadius] = useState(1000);
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    GlobalApi.getGooglePlace(
      category,
      radius,
      userLocation.lat,
      userLocation.lng
    ).then((resp) => {
      console.log(resp.data.product.results);
      setBusinessList(resp.data.product.results);
      setLoading(false);
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
        <GoogleMapView businessList={businessList} />
        <div
          className="md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-3"
        >
          {!loading ? (
            <BusinessList businessList={businessList} />
          ) : (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SkeletonLoading key={index} />
              ))}
            </div>
          )}{" "}
        </div>
      </div>

      {/* <button onClick={() => signOut()}>SignOut</button> */}
    </div>
  );
}
