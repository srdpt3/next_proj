import React from "react";
import { BusinessItem } from "./BusinessItem";

export const BusinessList = ({ businessList }) => {
  return (
    <div className="flex overflow-scroll overflow-x-auto gap-4 scrollbar-hide">
      {businessList.map(
        (item, index) =>
          index <= 20 && (
            <div key={index} onClick={() => setSelectedBusiness(item)}>
              <BusinessItem business={item} />
            </div>
          )
      )}
    </div>
  );
};
