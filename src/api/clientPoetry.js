import request from '@/utils/request'

export function getAllPoetryByClientId (clientId) {
  return request(
    {
      url: 'v1/api/poetry',
      method: 'get',
      params: {
        clientId: clientId
      }
    }
  )
}

export function getTwoPoetryRandomByClientId (clientId) {
  return request(
    {
      url: 'v1/api/poetry/example',
      method: 'get',
      params: {
        clientId: clientId
      }
    }
  )
}