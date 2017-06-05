const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const { apiPrefix } = config

let productListData = Mock.mock({
  'data|80-100': [
    {
      id: '@id',
      'fundCode|1': [
          '050003',
          '050030'
      ],
      'fundName|1': [
          '测试基金',
      ],
      'taNo|1': [
          '05',
          '01'
      ],
      'fundType|1': [
          '货币型基金',
          '股票型基金'
      ],
    },
  ],
})

let database = productListData.data

const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  let data

  for (let item of array) {
    if (item[keyAlias] === key) {
      data = item
      break
    }
  }

  if (data) {
    return data
  }
  return null
}

module.exports = {

  [`GET ${apiPrefix}/query/products`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    res.status(200).json({
      data: database.slice((page - 1) * pageSize, page * pageSize),
      total: database.length,
    })
  },

  [`GET ${apiPrefix}/query/product/:fundCode`] (req, res) {
    const { fundCode } = req.params
    const data = queryArray(database, fundCode, 'fundCode')
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json(NOTFOUND)
    }
  },
}
