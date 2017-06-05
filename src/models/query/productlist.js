import * as productsService from '../../services/productlist'

const { query } = productsService

export default {
  namespace: 'productList',
  state: {
    list: [],
    currentItem: {},
    selectedRowKeys: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      shwoTotal: total => '共 ${total} 款',
      current: 1,
      total: null,
    },
  },
  reducers: {
    querySuccess (state, action) {
      const { list, pagination } = action.payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },
  effects: {
    *query ({payload}, {call, put}) {
      const data = yield call(query, payload)
      console.log(data)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      }
    },
  },
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/query/product') {
          dispatch({
            'type': 'query',
            payload: location.query,
          })
        }
      })
    },
  },
};
