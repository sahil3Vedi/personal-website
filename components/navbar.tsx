import { Drawer, Affix } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'
import HomeStyles from '../css/home.module.css'
import Link from 'next/link'
import { useDarkModeContext } from '../context/darkMode'
import { BulbOutlined, BulbFilled } from  '@ant-design/icons'

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const { darkMode, toggleDarkMode }: any = useDarkModeContext()


    return (
        <div>
            <Affix offsetTop={0}>
                <div className={HomeStyles.coverPicture}>
                    <div>
                        <p><MenuOutlined style={{ cursor: "pointer" }} onClick={() => setMenuVisible(true)} /></p>
                    </div>
                    <div>
                    </div>
                    <div>
                        <p>
                            {
                                darkMode ?
                                    <BulbOutlined style={{ cursor: "pointer" }} onClick={() => toggleDarkMode()} />
                                    :
                                    <BulbFilled style={{ cursor: "pointer" }} onClick={() => toggleDarkMode()} />
                            }
                        </p>
                    </div>
                </div>
            </Affix>
            <div className={darkMode ? "dark" : null}>
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={() => setMenuVisible(false)}
                    visible={menuVisible}
                >
                    <Link href="/"><p className="drawer_option">Home</p></Link>
                    <Link href="/projects"><p className="drawer_option">Projects</p></Link>
                    <Link href="/blog"><p className="drawer_option">Blog</p></Link>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar