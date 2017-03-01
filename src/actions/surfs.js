import {
  SURFS_PREPEND,
  SURFS_SET_LIKE_COUNT,
  SURFS_SET_LIKES,
} from './actionTypes';

export const surfsPrepend = (...surfs) => ({
  surfs,
  type: SURFS_PREPEND,
});

export const surfsSetLikeCount = (sid, likeCount) => ({
  likeCount,
  sid,
  type: SURFS_SET_LIKE_COUNT,
});

export const surfsSetLikes = (sid, likes) => ({
  likes,
  sid,
  type: SURFS_SET_LIKES,
});
