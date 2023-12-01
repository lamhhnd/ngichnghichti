import { Entity, RectangleGraphics } from 'resium';
import { Rectangle, Color } from 'cesium';
interface Proptype {
  west: number;
  south: number;
  east: number;
  north: number;
}
const RectangeShape = ({ west, south, east, north }: Proptype) => {
  return (
    <>
      <Entity>
        <RectangleGraphics
          coordinates={Rectangle.fromDegrees(west, south, east, north)}
          fill={false}
          outline
          outlineWidth={15}
          outlineColor={Color.DEEPSKYBLUE}
        />
      </Entity>
    </>
  );
};
export default RectangeShape;
