---
to: src/<%= path %>/<%= h.inflection.camelize(name) %>/index.js
unless_exists: true
---

import React from 'react';
import classes from './<%= h.inflection.camelize(name) %>.module.scss';

export default function <%= h.inflection.camelize(name) %>() {
  return <div className={classes.<%= name %>}>{/* Code here... */}</div>;
}
