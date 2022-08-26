import * as Colors from './Colors';
import * as Sizing from './Sizing';
import * as Outlines from './Outlines';
import * as Typography from './Typography';

export {Colors, Sizing, Outlines, Typography};

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    width: 160,
    backgroundColor: Colors.neutral.s200,
    borderRadius: Outlines.borderRadius.base,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginLeft: 10,
  },
  rightContainer: {
    justifyContent: 'flex-end',
  },
  rightTextContainer: {
    backgroundColor: Colors.primary.brand,
    marginRight: 10,
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
    color: Colors.neutral.white,
  },
  text: {
    fontSize: 12,
  },
});

const flattenedStyles = {
  container: StyleSheet.flatten([styles.container, styles.rightContainer]),
  textContainer: StyleSheet.flatten([
    styles.textContainer,
    styles.rightTextContainer,
  ]),
  leftText: StyleSheet.flatten([styles.leftText, styles.text]),
  rightText: StyleSheet.flatten([styles.rightText, styles.text]),
};

export {styles, flattenedStyles};
