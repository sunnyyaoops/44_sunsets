import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import L from "leaflet";
import { useMap } from "react-leaflet";
interface ILeafletControlContainerProps {
  position: L.ControlPosition;
  children: React.ReactNode;
}
export const LeafletControlContainer: React.FC<
  ILeafletControlContainerProps
> = ({ position, children }) => {
  const map = useMap();
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    const LeafletControl = L.Control.extend({
      onAdd: () => {
        const div = L.DomUtil.create("div", "leaflet-control");
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        setContainer(div);
        return div;
      },
      onRemove: () => {
        setContainer(null);
      },
    });
    const controlInstance = new LeafletControl({ position });
    controlInstance.addTo(map);
    return () => {
      controlInstance.remove();
    };
  }, [map, position]);
  if (!container) return null;
  return ReactDOM.createPortal(children, container);
};
