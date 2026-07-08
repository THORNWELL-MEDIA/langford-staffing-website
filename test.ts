import { fetchRolesFromApi } from './lib/data/careers';
fetchRolesFromApi()
  .then(res => console.log('Roles length:', res.length))
  .catch(console.error);
