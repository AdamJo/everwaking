import { h } from "preact";
import { hobbiesStyle, header, details } from "./style.sass";
export default function() {
  return (
    <div className={`${hobbiesStyle} light`}>
      <div className={header}>Hobbies</div>
      <div className={details}>Photography, Travel, Reading</div>
    </div>
  );
}
