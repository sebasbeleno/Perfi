import {createSelector} from 'reselect';

export const selectMessagesByUid = createSelector(
  [
    // Usual first input - extract value from `state`
    state => state.messages.messages,
    // Take the second arg, `category`, and forward to the output selector
    (state, uid) => uid,
  ],
  // Output selector gets (`items, category)` as args
  (messages, uid) => {
    console.log('selectMessagesByUid', messages, uid);
    return messages[uid];
  },
);
