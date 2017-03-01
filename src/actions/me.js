import {
  ME_PREPEND,
  ME_SET_LIKE_COUNT,
  ME_SET_LIKES,
} from './actionTypes';

export const mePrepend = (...surfs) => ({
  surfs,
  type: ME_PREPEND,
});

export const meSetLikeCount = (sid, likeCount) => ({
  likeCount,
  sid,
  type: ME_SET_LIKE_COUNT,
});

export const meSetLikes = (sid, likes) => ({
  likes,
  sid,
  type: ME_SET_LIKES,
});
