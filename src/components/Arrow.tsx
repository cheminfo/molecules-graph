import { CenteredText } from "./CenteredText";
import { Point } from "../types/Point";
import { RightText } from "./RightText";

/**
 * Creates a simple arrow between 2 points. The arrow has one inflection point, which is the middle of the line.
 * The SVG must define a marker with id="arrowhead" for this to work.
 * @param props
 * @returns
 */

export function Arrow(props: {
  from: Point;
  to: Point;
  label: string;
  labelPosition: "center" | "right";
}) {
  const { from, to, label, labelPosition } = props;
  const middle = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
  const d = `M ${from.x} ${from.y} C ${middle.x} ${from.y}  ${middle.x} ${to.y}  ${to.x} ${to.y}`;
  //const d = `M ${from.x} ${from.y} C ${middle.x} ${from.y}  ${middle.x} ${from.y}  ${middle.x} ${middle.y} ${middle.x} ${to.y} ${middle.x} ${to.y}  ${to.x} ${to.y}`;
  return (
    <g>
      <path
        d={d}
        style={{
          fill: "none",
          strokeWidth: "2",
          stroke: "black",
          markerEnd: "url(#arrowhead)",
        }}
      />
      {labelPosition === "center" && (
        <CenteredText x={middle.x} y={middle.y} label={label} />
      )}
      {labelPosition === "right" && (
        <RightText x={to.x - 12} y={to.y - 8} label={label} />
      )}
    </g>
  );
}
