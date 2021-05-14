import { request} from './request'

export function login(name, password) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      name,
      password
    }
  })
}

export function getUser(id) {
  return request({
    url: `/user/${id}`,
    method: 'GET'
  })
}

export function updateUser(id, name, password) {
  return request({
    url: `/user/${id}`,
    method: 'POST',
    data: {
      name,
      password
    }
  })
}

export function getUserComment(id) {
  return request({
    url: `/comment/${id}`,
    method: 'GET'
  })
}

export function register(name, password) {
  return request({
    url: `/user`,
    method: 'POST',
    data: {
      name,
      password
    }
  })
}