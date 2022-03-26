import React, { useEffect, useRef, useState } from "react";
import map from "./map.module.css";
import Autocomplete from "react-google-autocomplete";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP;
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";

const extractAddress = (place) => {
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    },
  };
  if (!Array.isArray(place?.address_components)) {
    return address;
  }
  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("administrative_area_level_1")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};

function Map({ setAddress }) {
  const searchInput = useRef(null);
  const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        const _address = extractAddress(place);
        setAddress(_address);
      });
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
      });
    }
  };

  return (
    <div className={map.mainContainer}>
      <div className={map.searchHolder}>
        <Autocomplete
          apiKey={apiKey}
          ref={searchInput}
          onPlaceSelected={(place) => {
            const address = extractAddress(place);
            setAddress(address);
          }}
        />
        <button className={map.findMe} onClick={findMyLocation}>
          Find My Location
        </button>
      </div>
    </div>
  );
}

export default Map;
