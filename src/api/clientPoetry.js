import request from '@/utils/request'

export function getClientPoetryById (clientId) {
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