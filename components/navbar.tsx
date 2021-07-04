import { Drawer, Affix } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import HomeStyles from '../css/home.module.css'
import Link from 'next/link'

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false)


    return (
        <div>
            <Affix offsetTop={0}>
                <div className={HomeStyles.coverPicture}>
                    <p><MenuOutlined style={{cursor:"pointer"}} onClick={()=>setMenuVisible(true)}/></p>
                </div>
            </Affix>
            <Drawer
                placement="left"
                closable={false}
                onClose={()=>setMenuVisible(false)}
                visible={menuVisible}
            >
                <Link href="/"><p className="drawer_option">Home</p></Link>
                <Link href="/projects"><p className="drawer_option">Projects</p></Link>
                <p className="drawer_option">Blog (Coming Soon)</p>
            </Drawer>
        </div>
    )
}

export default Navbar