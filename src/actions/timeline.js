import {
  TIMELINE_APPEND,
  TIMELINE_PREPEND,
  TIMELINE_RESET,
} from './actionTypes';

export const timelineAppend = (...surfs) => ({
  surfs,
  type: TIMELINE_APPEND,
});

export const timelinePrepend = (...surfs) => ({
  surfs,
  type: TIMELINE_PREPEND,
});

export const timelineReset = (...surfs) => ({
  surfs,
  type: TIMELINE_RESET,
});
