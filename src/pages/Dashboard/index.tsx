import * as MC from '@material-ui/core'

import Base from 'templates/Base'

const Dashboard = () => (
  <Base>
    <MC.Grid container spacing={3}>
      <MC.Grid item xs={12}>
        <MC.Paper style={{ padding: '12px' }}>xs=12</MC.Paper>
      </MC.Grid>
      <MC.Grid item xs={6}>
        <MC.Paper style={{ padding: '12px' }}>xs=6</MC.Paper>
      </MC.Grid>
      <MC.Grid item xs={6}>
        <MC.Paper style={{ padding: '12px' }}>xs=6</MC.Paper>
      </MC.Grid>
      <MC.Grid item xs={3}>
        <MC.Paper style={{ padding: '12px' }}>xs=3</MC.Paper>
      </MC.Grid>
      <MC.Grid item xs={3}>
        <MC.Paper style={{ padding: '12px' }}>xs=3</MC.Paper>
      </MC.Grid>
      <MC.Grid item xs={3}>
        <MC.Paper style={{ padding: '12px' }}>xs=3</MC.Paper>
      </MC.Grid>
      <MC.Grid item xs={3}>
        <MC.Paper style={{ padding: '12px' }}>xs=3</MC.Paper>
      </MC.Grid>
    </MC.Grid>
  </Base>
)

export default Dashboard
