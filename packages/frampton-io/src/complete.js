import isComplete from 'frampton-io/is_complete';

//+ complete :: EventStream Respose -> EventStream Response
export default function complete(stream) {
  return stream.filter(isComplete);
}