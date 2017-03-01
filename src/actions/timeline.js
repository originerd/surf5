import {
  TIMELINE_APPEND,
  TIMELINE_SET_LIKE_COUNT,
  TIMELINE_SET_LIKES,
  TIMELINE_PREPEND,
  TIMELINE_RESET,
} from './actionTypes';

export const timelineAppend = (...surfs) => ({
  surfs,
  type: TIMELINE_APPEND,
});

export const timelineSetLikeCount = (sid, likeCount) => ({
  likeCount,
  sid,
  type: TIMELINE_SET_LIKE_COUNT,
});

export const timelineSetLikes = (sid, likes) => ({
  likes,
  sid,
  type: TIMELINE_SET_LIKES,
});

export const timelinePrepend = (...surfs) => ({
  surfs,
  type: TIMELINE_PREPEND,
});

export const timelineReset = (...surfs) => ({
  surfs,
  type: TIMELINE_RESET,
});
