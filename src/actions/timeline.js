import {
  TIMELINE_APPEND,
  TIMELINE_PREPEND,
} from './actionTypes';

export const timelineAppend = (...surfs) => ({
  surfs,
  type: TIMELINE_APPEND,
});

export const timelinePrepend = (...surfs) => ({
  surfs,
  type: TIMELINE_PREPEND,
});
