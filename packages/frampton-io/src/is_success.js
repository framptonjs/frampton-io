//+ is_success :: Response -> Boolean
export default function is_success(response) {
  return (response && response.status === 'complete');
}