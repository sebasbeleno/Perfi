import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProfileIcon(props: any) {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProfileIcon;
