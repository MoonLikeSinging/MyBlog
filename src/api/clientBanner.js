import request from '@/utils/request'

export function getClientBannerByClientId (clientId) {
  return request ({
    url: 'v1/api/banner',
    method: 'get',
    params: {
      clientId: clientId
    }
  })
}