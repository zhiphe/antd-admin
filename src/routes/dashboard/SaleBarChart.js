import {Container} from '../'
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