import { CarProps } from "@/types";
import React from "react";

interface CarDetailsProps {
  isOpen: boolean;
  cloaseModal: () => void;
  car: CarProps;
}

const CarDetails = () => {
  return <div>CarDetails</div>;
};

export default CarDetails;
