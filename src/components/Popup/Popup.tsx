"use client";
import popupImage from "@/src/assets/images/Navigation.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Button/Button";
import Image from "next/image";
import "./popup.styles.scss";
import { MdClose } from "react-icons/md";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { useState } from "react";
import { customStyles } from "./customStyles";
import { useRouter } from "next/navigation";
import { GeoLocation } from "@/src/types/types";

import { useId } from "react";

const Popup = ({
  category,
  location,
  setShowModal,
  setIsOpen,
}: {
  category: string;
  setShowModal: (prev: boolean) => void;
  location: string;
  setIsOpen?: any;
}) => {
  const router = useRouter();
  const [value, setValue] = useState<any>();
  const [geo, setGeo] = useState<GeoLocation>();
  const [navigatorGeo, setNavigatorGeo] = useState<GeoLocation>();
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const key = useId();

  const onValueChange = (e: any) => {
    setValue(e);
    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }: any) => {
        setGeo({
          latitude: lat,
          longitude: lng,
        });
      });
  };

  const handleCurrentLocationToggle = () => {
    setUseCurrentLocation(!useCurrentLocation);
    if (!useCurrentLocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setNavigatorGeo({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
          alert("Could not retrieve your current location.");
        }
      );
    }
  };
  const handleNavigate = ({
    longitude,
    latitude,
    category,
    location,
  }: {
    longitude?: number | undefined;
    latitude?: number | undefined;
    category?: string;
    location?: string;
  }) => {
    let url = `/tutors`;

    if (category) {
      url += `?category=${category}`;
    }

    if (location) {
      url += category ? `&location=${location}` : `?location=${location}`;
    }

    if (useCurrentLocation) {
      if (
        location !== "online" &&
        navigatorGeo?.longitude &&
        navigatorGeo?.latitude
      ) {
        url += `&longitude=${navigatorGeo?.longitude}&latitude=${navigatorGeo?.latitude}`;
      }
    } else {
      if (location !== "online" && longitude && latitude) {
        url += `&longitude=${longitude}&latitude=${latitude}`;
      }
    }

    router.push(url);
  };

  const handleSubmit = () => {
    if (!category && !location) {
      return alert("Please select a Category or Location");
    }

    if (location && location !== "online") {
      handleNavigate({
        category,
        latitude: geo?.latitude,
        longitude: geo?.longitude,
        location,
      });
    } else {
      handleNavigate({
        category,
        location,
      });
    }

    if (setIsOpen) {
      setIsOpen(false);
    }

    setShowModal(false);
  };

  return (
    <div className="popup_overlay">
      <div className="popup_container">
        <MdClose className="close" onClick={() => setShowModal(false)} />
        <Image src={popupImage} alt="" width={250} />
        <h2>Where do you stay?</h2>
        <p>
          Please enter your home address so we can connect you with tutors
          located near you.
        </p>
        <div className="get_location">
          <input
            type="checkbox"
            name="loc"
            checked={useCurrentLocation}
            onChange={handleCurrentLocationToggle}
          />
          <label htmlFor="loc">Use my current location</label>
        </div>
        <div className="input">
          <GooglePlacesAutocomplete
            apiKey={"AIzaSyCBhbw8TozwQ6P9xzWZfocF94WK4NouAU0"}
            selectProps={{
              value,
              onChange: onValueChange,
              placeholder: "Enter your address",
              styles: customStyles,
              isDisabled: useCurrentLocation,
            }}
            key={key}
          />
        </div>

        <div className="button_container">
          <Button size="lg" onClick={handleSubmit}>
            Proceed <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
