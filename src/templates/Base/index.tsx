import * as MC from '@material-ui/core'

import Menu from 'components/Menu'

import * as S from './styles'

type BaseProps = {
  children: React.ReactChild
}

const Base = ({ children }: BaseProps) => (
  <>
    <Menu />
    <MC.Container maxWidth="lg">
      <S.Wrapper>{children}</S.Wrapper>
    </MC.Container>
    <footer style={{ textAlign: 'center', padding: '5rem 0' }}>Footer</footer>
  </>
)

export default Base
