import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from '../Navbar';
import Footer from '../Footer'

const useStyles = makeStyles({
  containerMargin: {
    'padding-top': '30px',
    'padding-bottom': '20px',
    'height': '100%'
  },
  boxMain: {
    'height': '100vh',
    'overflow': 'auto'
  },
  box: {
    flexGrow: 1,
    margin: 0
  }
})

interface Props {
  children?: JSX.Element
}

const Layout = (props: Props) => {
  const classes = useStyles()
  const { children } = props;

  return (
    <Box display='flex' flexDirection='column' className={classes.boxMain}>
      <Box className={classes.box}>
        <Container fixed>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
