import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Table, Button } from 'antd'
import { Link } from 'dva/router'
import styles from './index.less'

const ProductList = function({location, dispatch, productList, loading}) {
    const { list, pagination, currentItem, selectedRowKeys } = productList;
    const { pageSize } = pagination

    const onDetailButtonClicked = function (record, e) {

    }

    const columns = [
        {
            title: '基金代码',
            dataIndex: 'fundCode',
            key: 'fundCode',
            width: 64
        },
        {
            title: '基金名称',
            dataIndex: 'fundName',
            key: 'fundName',
            width: 128
        },
        {
            title: '基金公司代码',
            dataIndex: 'taNo',
            key: 'taNo',
            width: 32
        },
        {
            title: '基金类型',
            dataIndex: 'fundType',
            key: 'fundType',
            width: 64
        },
        {
            title: '详情',
            key: 'detail',
            render: (text, record) => (
                <Button type="primary">
                    <Link to={`product/${record.fundCode}`}>详情</Link>
                </Button>
            ),
            width: 40
        }
    ]

    return (
        <div className="content-inner">
            <Table
            bordered
            scroll={{x: 1250}}
            columns={columns}
            dataSource={list}
            pagination={pagination}
            rowKey={record => record.id}/>
        </div>
    )
}

ProductList.propTypes = {
    productList: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.object
}

export default connect(({productList, loading}) => ({productList, loading}))(ProductList)