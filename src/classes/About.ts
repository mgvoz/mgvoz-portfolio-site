import { JSX } from "react";
import MapFactory, { MapFactoryType } from "../services/MapFactory";

export default class About {
  heading: string = "";
  className: string = "";
  mapList: JSX.Element[] = [];

  setHeading(heading: string): About {
    this.heading = heading;
    return this;
  }

  setClassName(className: string): About {
    this.className = className;
    return this;
  }

  setMapList(type: MapFactoryType): About {
    this.mapList = MapFactory.createMap(type);
    return this;
  }
}
