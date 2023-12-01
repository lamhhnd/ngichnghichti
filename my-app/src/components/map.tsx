import React, { Component } from 'react';
import { Viewer as CesiumViewer } from 'cesium';
import {
  Viewer as ViewMap,
  ScreenSpaceEventHandler,
  ScreenSpaceEvent,
  Entity,
  RectangleGraphics,
} from 'resium';
import {
  ScreenSpaceEventType,
  Cartesian2,
  Cartographic,
  Cartesian3,
  Math,
  Color,
  Rectangle,
} from 'cesium';
import RectangeShape from './Rectange';
const dar = Rectangle.fromDegrees(1, 2, 3, 4);
class ExampleComponent extends Component {
  private viewer: CesiumViewer | undefined;

  handleLeftClick = (
    e:
      | {
          position: Cartesian2;
        }
      | {
          startPosition: Cartesian2;
          endPosition: Cartesian2;
        }
  ) => {
    const earthPosition = 'position' in e && this.viewer?.camera.pickEllipsoid(e.position);

    if (earthPosition instanceof Cartesian3) {
      let car = Cartographic.fromCartesian(earthPosition);
      console.log(
        Math.toDegrees(car.longitude).toString() + ' ' + Math.toDegrees(car.latitude).toString()
      );
    }
    return (
      <Entity>
        <RectangleGraphics
          coordinates={dar}
          fill={false}
          outline
          outlineWidth={15}
          outlineColor={Color.DEEPSKYBLUE}
        />
      </Entity>
    );
  };
  render() {
    return (
      <ViewMap
        ref={(e) => {
          this.viewer = e ? e.cesiumElement : undefined;
        }}
      >
        <ScreenSpaceEventHandler>
          <ScreenSpaceEvent action={this.handleLeftClick} type={ScreenSpaceEventType.LEFT_CLICK} />
        </ScreenSpaceEventHandler>
        <RectangeShape
          west={dar.west}
          south={dar.south}
          east={dar.east}
          north={dar.north}
        ></RectangeShape>
      </ViewMap>
    );
  }
}
export default ExampleComponent;
