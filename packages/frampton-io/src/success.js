import get from 'frampton-utils/get';
import isSuccess from 'frampton-io/is_success';

//+ success :: EventStream Respose -> EventStream Any
export default function success(stream) {
  return stream.filter(isSuccess).map(get('data'));
}