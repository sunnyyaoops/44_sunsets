import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ArrivalPopup } from "./popup/ArrivalPopup.tsx";
import { useEffect, useState } from "react";
import type { ISunsetDetails } from "./popup/SunsetDetailsTable.tsx";
import { getLocationInfo } from "./helpers/getLocationInfo";
import type { IGetLocationInfo } from "./helpers/getLocationInfo";
import { Flying } from "./Flying";
import { helicopterLeafletIcon } from "./helicopterLeafletIcon";
import { Info } from "../universeContainer/info/Info.tsx";

export const Arrival: React.FC<IGetLocationInfo> = ({
  cityId,
  sunsetOcean,
}) => {
  const sunsetLocation = getLocationInfo({ cityId, sunsetOcean });
  const { lat, lng } = sunsetLocation;
  const locationCoordinate: [number, number] = [lat, lng];
  const [flying, setFlying] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [sunsetDetails, setSunsetDetails] = useState<ISunsetDetails | null>(
    null,
  );
  useEffect(() => {
    const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`;
    const fetchSunset = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setSunsetDetails(data.results);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSunset();
  }, [lat, lng]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlying(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return flying || loading ? (
    <Flying />
  ) : (
    <MapContainer
      center={locationCoordinate}
      zoom={6}
      style={{ height: "100vh", width: "100vw" }}
      maxBounds={[
        [-90, lng - 180],
        [90, lng + 180],
      ]}
      maxBoundsViscosity={1}
      maxZoom={9}
      minZoom={2.5}
      zoomDelta={0.5}
      zoomControl={false}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}.png"
      />
      <Marker
        position={locationCoordinate}
        icon={helicopterLeafletIcon}
        eventHandlers={{
          add: (e) => {
            e.target.openPopup();
          },
        }}
      >
        <Popup minWidth={600}>
          <ArrivalPopup
            sunsetLocation={sunsetLocation}
            sunsetDetails={sunsetDetails}
          />
        </Popup>
      </Marker>
      <Info buttonStyle={{ zIndex: 1001, color: "gray" }} />
    </MapContainer>
  );
};
