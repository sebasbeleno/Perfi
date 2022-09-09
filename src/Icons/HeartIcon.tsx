import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HeartIcon(props: any) {
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
        d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z"
        stroke={props.color}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartIcon;
