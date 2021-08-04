import * as MC from '@material-ui/core'

import Base from 'templates/Base'

import * as S from './styles'

const productsInfo = [
  { label: 'Products types', value: 78 },
  { label: 'Shops', value: 3 },
  { label: 'Online users', value: 8 }
]

const productStock = [
  { product: 'Butter', minStock: '50kg', currentStock: '100kg' },
  { product: 'Milk', minStock: '10l', currentStock: '30l' },
  { product: 'Flour', minStock: '25kg', currentStock: '75kg' },
  { product: 'Sugar', minStock: '50kg', currentStock: '100kg' },
  { product: 'Coffee', minStock: '6kg', currentStock: '15kg' }
]

const Dashboard = () => {
  return (
    <Base>
      <S.Wrapper>
        <MC.Grid container spacing={4}>
          <MC.Grid item xs={12} md={4}>
            <S.Subtitle variant="subtitle1">Products</S.Subtitle>
            <MC.TableContainer component={MC.Paper}>
              <MC.Table aria-label="simple table">
                <MC.TableBody>
                  {productsInfo.map((productInfo) => (
                    <MC.TableRow key={productInfo.label}>
                      <S.TableCell>{productInfo.label}</S.TableCell>
                      <S.TableCell align="right">
                        {productInfo.value}
                      </S.TableCell>
                    </MC.TableRow>
                  ))}
                </MC.TableBody>
              </MC.Table>
            </MC.TableContainer>
          </MC.Grid>

          <MC.Grid item xs={12} md={8}>
            <S.Subtitle variant="subtitle1">Product stock resume</S.Subtitle>
            <MC.TableContainer component={MC.Paper}>
              <MC.Table aria-label="simple table">
                <MC.TableHead>
                  <MC.TableRow>
                    <MC.TableCell>Product</MC.TableCell>
                    <MC.TableCell align="right">Min stock</MC.TableCell>
                    <MC.TableCell align="right">Current stock</MC.TableCell>
                  </MC.TableRow>
                </MC.TableHead>
                <MC.TableBody>
                  {productStock.map((row) => (
                    <MC.TableRow key={row.product}>
                      <MC.TableCell>{row.product}</MC.TableCell>
                      <MC.TableCell align="right">{row.minStock}</MC.TableCell>
                      <MC.TableCell align="right">
                        {row.currentStock}
                      </MC.TableCell>
                    </MC.TableRow>
                  ))}
                </MC.TableBody>
              </MC.Table>
            </MC.TableContainer>
          </MC.Grid>
        </MC.Grid>
      </S.Wrapper>
    </Base>
  )
}

export default Dashboard
