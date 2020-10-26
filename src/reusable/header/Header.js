import React, {useState} from 'react'
import Hstyle from'./header.module.css'
import SearchIcon from '@material-ui/icons/Search'
import {title} from '../../production/Strings'
import  Link  from 'next/link'

function Header() {
    const [value, setValue] = useState()

    return (
        <div className={Hstyle.head+' '+Hstyle.header}>
            <div className={Hstyle.header_left}>
            <Link className={Hstyle.li} href='/'><h1 className={Hstyle.header_logo}>{title}</h1></Link>
            </div>

            <div className={Hstyle.header_right}>
                <div id={Hstyle.input}>
                    <input placeholder="Search here" onChange={e=>setValue(e.target.value)} type='text'/>
                    <SearchIcon fontSize="inherit" onClick={event =>  window.location.href=`/search/find=${value}`} className={Hstyle.header_search}/>
                </div>
                <div className={Hstyle.header_icon_container}>
                    <h4 onClick={'fuck off'} className={Hstyle.header_icons+' '+ Hstyle.header_write}>Write here</h4>
                </div>
            </div>
        </div>
    )
}



export default Header