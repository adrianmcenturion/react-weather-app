import { IconButton, useColorMode } from "@chakra-ui/react";
import { BiCurrentLocation } from "react-icons/bi";
import useGeoLocation from "../../hooks/useGeoLocation";
import { useDispatch } from "react-redux";
import { setData, setIsLoading } from "../../redux/states/app";
import { modifyWeather } from "../../redux/states/weather";
import { weatherDataAdapter } from "../../adapters/weather.adapter";
import useFetch from "../../hooks/useFetch";

const UbicationButton = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const geo = useGeoLocation();
  const fetch = useFetch();

  const handleClick = async () => {
    const latLon = geo.getGeoLocation();
    dispatch(setIsLoading(true));
    dispatch(
      modifyWeather(weatherDataAdapter(await fetch.requestByUbication(latLon)))
    );
    dispatch(setIsLoading(false));
    dispatch(setData(true));
  };

  return (
    <IconButton
      onClick={handleClick}
      aria-label="github"
      variant="ghost"
      size="lg"
      _hover={
        colorMode === "light" ? { bg: "purple.300" } : { bg: "blackAlpha.700" }
      }
      icon={<BiCurrentLocation size="28px" />}
    ></IconButton>
  );
};

export default UbicationButton;
