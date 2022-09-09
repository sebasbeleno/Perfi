import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcons(props: any) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000"
      {...props}>
      <Path
        d="M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V13"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HomeIcons;
