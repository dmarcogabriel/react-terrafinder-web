---
to: src/<%= path %>/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.module.scss
unless_exists: true
---
@import 'styles';

.container {
  display: flex;
}
