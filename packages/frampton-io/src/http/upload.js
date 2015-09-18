import curry from 'frampton-utils/curry';
import post from 'frampton-io/http/post';

export default curry(function upload(url, file) {
  var formData = new FormData();
  formData.append('file-0', file);
  return post(url, formData);
});