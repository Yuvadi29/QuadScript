import client from '@sanity/client';

export default client({
  projectId: '2ngzl3da',
  dataset: 'production',
  apiVersion: '2023-02-24',
  useCdn: true,
});

