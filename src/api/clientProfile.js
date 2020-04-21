import request from '@/utils/request'

export function getClientProfileById (clientId) {
  return request(
    {
      url: 'v1/api/clients',
      method: 'get',
      params: {
        clientId: clientId
      }
    }
  )
}

export function getAllClientProfiles () {
  return request(
    {
      url: 'v1/api/clients/all',
      method: 'get',
      
    }
  )
}

export function addClientProfile (data) {
  return request(
    {
      url: 'v1/api/clients',
      method: 'post',
      data: data
    }
  )
}