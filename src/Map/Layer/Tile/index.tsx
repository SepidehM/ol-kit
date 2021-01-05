import { useEffect, useContext, useRef } from "react";
import TileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";

import { MapContext } from "../../../Context";

type Props = {
  source: TileSource;
};

function Tile({ source }: Props) {
  const mapContext = useContext(MapContext);
  const layer = useRef(
    new TileLayer({
      source
    })
  );

  useEffect(() => {
    mapContext.map?.current.addLayer(layer.current);
    return function cleanup() {
      mapContext.map?.current.removeLayer(layer.current);
    };
  });
  return null;
}

export default Tile;
