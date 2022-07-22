import React from 'react'
import { withStyles } from '@material-ui/core'


const style = {
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    height: '100vh',
    backgroundColor: '#9C2549'
  }
}

const SideMenu = () => {
  return (
    <div style={style.sideMenu}>
      <div style={{ color: '#fff', margin: '30px 0 15px 0', textAlign: 'center' }}>
        <h1 style={{ margin: '5px' }}>
          Menu
        </h1>
      </div>
      <nav className='navigation'>
        <MenuItem
          title='Dashboard'
        />
      </nav>
    </div>
  )
}

export default withStyles(style)(SideMenu)

const MenuItem = ({title}) => {
 
  return (
    <div className='menu-item' >
      {title}
    </div>
  )
}
