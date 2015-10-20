import constant from 'frampton-signals/constant';

var instance = null;

export default function activity_behavior() {
  if (!instance) {
    instance = constant(false);
  }
  return instance;
}