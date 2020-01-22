import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  title: {
    flexGrow: 1
  }
})

const NavBar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.title}>
            <Button color="inherit">
              <img alt='CI&T Logo' src='https://carreiras.ciandt.com/assets/imgs/footer.png' />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default NavBar;
