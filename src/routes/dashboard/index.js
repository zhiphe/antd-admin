import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { NumberCard, Quote, Sales, Weather, RecentSales, Comments, Completed, Browser, Cpu, User } from './components'
import styles from './index.less'
import { color } from '../../utils'
import Container from '../chart/Container'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  }, {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  }, {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  }, {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }, {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  }, {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  }, {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const SimpleBarChart = (data) => (
  <Container>
    <BarChart data={data} margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
    </BarChart>
  </Container>
)

const StackedBarChart = () => (
  <Container>
    <BarChart data={data} margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
  </Container>
)

function Dashboard ({ dashboard }) {

  return (
    <Row gutter={24}>
      <Col lg={8} md={24}>
        <Card title="SimpleBarChart">
          <SimpleBarChart data={data}/>
        </Card>
      </Col>
      <Col lg={8} md={24}>
        <Card title="StackedBarChart">
          <StackedBarChart />
        </Card>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
