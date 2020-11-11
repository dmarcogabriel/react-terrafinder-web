---
to: src/hooks/use<%= h.inflection.camelize(name) %>.js
unless_exists: true
---
import { useContext } from 'react';
import { Context } from 'contexts/<%= h.inflection.camelize(name) %>';

export const use<%= h.inflection.camelize(name) %> = () => useContext(Context);
