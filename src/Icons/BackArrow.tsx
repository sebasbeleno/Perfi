import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../Styles';

function BackArrow(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={Colors.neutral.s500}
      {...props}>
      <Path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackArrow;
