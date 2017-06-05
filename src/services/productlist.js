import { request, config } from '../utils'
const { api } = config
const { productlist, productdetail } = api

export async function query (params) {
  return request({
    url: productlist,
    method: 'get',
    data: params,
  })
}

export async function queryDetail (params) {
  return request({
    url: productdetail,
    method: 'get',
    data: params,
  })
}