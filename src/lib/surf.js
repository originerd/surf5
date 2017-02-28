/* eslint import/prefer-default-export: "off" */

export const objectToSurfs = object =>
  Object.keys(object)
    .reduce((acc, e) => [...acc, { sid: e, ...object[e] }], [])
    .sort((a, b) => b.timestamp - a.timestamp);
