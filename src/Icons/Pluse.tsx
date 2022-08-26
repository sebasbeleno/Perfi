import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Pluse(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.5 11H15a1 1 0 01-1-1V4.5a1.5 1.5 0 00-3 0V10a1 1 0 01-1 1H4.5a1.5 1.5 0 000 3H10a1 1 0 011 1v5.5a1.5 1.5 0 003 0V15a1 1 0 011-1h5.5a1.5 1.5 0 000-3z"
        fill="#2663FF"
      />
    </Svg>
  );
}

export default Pluse;
