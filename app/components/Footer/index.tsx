import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '15px 35px;',
    width: '100%',
    'border-top': `1px solid ${theme.palette.divider}`
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Typography variant='body2' component='p'>
        © 2019 CI&T. Todos os direitos reservados.
      </Typography>
    </div>
  )
}

export default Footer
