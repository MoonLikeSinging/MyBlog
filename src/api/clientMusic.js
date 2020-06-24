import request from '@/utils/request'

export function getAllClientMusicByClientId (clientId) {
  return request ({
    url: 'v1/api/music',
    method: 'get',
    params: {
      clientId: clientId
    }
  })
}