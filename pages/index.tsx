import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import TagManager from 'react-gtm-module'
import HomeStyles from '../css/home.module.css'
import { Space, List, Avatar, Progress, Card, Button, Tag, Modal, Carousel, Spin } from 'antd'
import { MenuOutlined, GithubOutlined, MailOutlined, EyeOutlined, LoadingOutlined, LinkedinOutlined } from '@ant-design/icons'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faDocker } from '@fortawesome/free-brands-svg-icons'

// IMAGES
const profileImage = require('../public/static/sahil.jpg')

// XMR
const xmrqr = require('../public/static/xmrqr.png')


const interests = [
    'Machine Learning',
    'Software Development',
	'Problem Solving ',
    'DevOps',
    'Mathematics',
    'GNU / Linux',
    'Blockchain',
	'Software Testing',
    'Cybersecurity',
    'Systems Engineering'
]

const skills = [
    {title:'Python', src:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", progress: 90},
    {title:'Tensorflow', src: "https://miro.medium.com/max/2000/1*eJWbxmatlWJCNuhJqXB_dw.png", progress: 90},
    {title:'TypeScript', src: "https://www.svgrepo.com/show/303600/typescript-logo.svg", progress: 90},
    {title:'C++', src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", progress: 80},
    {title:'MongoDB', src: "https://static.tumblr.com/lbtm3t2/8PAn0kziu/mongodb-logo.png", progress: 80},
    {title:'SQL', src: "https://www.svgrepo.com/show/138912/database.svg", progress: 80},
    {title:'AWS', src: "https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/1614/2019/07/21743298_1406722539365107_4308832733562613967_n.png", progress: 70},
    {title:'Docker', src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png", progress: 70},
]

const IndexPage = () => {

    const [xmrmodal, setXmrModal] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
		setLoading(false)
		TagManager.initialize({ gtmId: 'GTM-5W2CRT3' })
	}, [])

    const xmrModal = (
        <Modal centered visible={xmrmodal} width="300px" destroyOnClose footer={null} onCancel={()=>setXmrModal(false)} title="Sahil Trivedi's XMR QR">
            <img className="galleryImage" src={xmrqr}/>
        </Modal>
    )
    
    return(
            loading
            ?
            <div className="spinner">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color:"#aff1da" }} spin />}/>
            </div>
            :
            <div>
			  <Head>
        			<title>Sahil Trivedi</title>
        		    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      	      </Head>
              <Navbar/>
              {xmrModal}
              <div className="pageWrapper">
                  <div className={HomeStyles.profileHeader}>
                        <div className={HomeStyles.displayPicture}><Avatar size={180} src={profileImage}/></div>
                        <div>
                            <h1 className="pageHeader">Sahil Trivedi</h1>
                            <p className="pageHeaderDescription">Software Engineer</p>
                            <p className="pageHeaderDescription" onClick={() => window.open('https://www.github.com/sahil3vedi', '_blank')} style={{ color: "rgb(7,191,167)", cursor: "pointer"}}><GithubOutlined style={{ color: "rgb(7,191,167)" }} /> github.com/sahil3vedi</p>
                            <p className="pageHeaderDescription" onClick={() => window.open('https://www.linkedin.com/in/trivedi-sahil/', '_blank')} style={{ color: "rgb(7,191,167)", cursor: "pointer" }}><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/trivedi-sahil</p>
                        </div>
                  </div>
                  <div className={HomeStyles.displayInfo}>
                  	<div>
                    	<p className={HomeStyles.sectionHeader}>About</p>
                    	<div className="wordWrap">
                      		<p className={HomeStyles.about}>I work as a Fullstack Engineer and use node, react, and numpy almost everyday.</p>
                            <p className={HomeStyles.about}>I write about Machine Learning, Software Engineering, and Mathematics on my <Link href="/blog"><span style={{ color: "rgb(7,191,167)", cursor: "pointer" }}>Blog</span></Link>.</p>
                            <Link href="/blog"><Button className="btnMonero">View Blog</Button></Link>
                    	</div>
                    </div>
                    <div>
						<p className={HomeStyles.sectionHeader}>Research</p>
						<div className="wordWrap">
					  		<p className={HomeStyles.about}>Currently Researching:<br/>- Dynamic & Scalable Recommendation Engines<br/>- Incremental Optimisation in CNNs<br/>- Fluid Simulations with Neural Networks</p>
                            <p className={HomeStyles.about}>Want to fund my work? I accept donations in <span style={{ color: "rgb(7,191,167)", cursor: "pointer" }} onClick={() => window.open('https://en.wikipedia.org/wiki/Monero', '_blank')}>Monero</span></p>
                            <Button className="btnMonero" onClick={() => setXmrModal(true)}>View XMR QR</Button>
						</div>
                    </div>
                  </div>
                  <div className={HomeStyles.displayInfo}>
                      <div>
                          <p className={HomeStyles.sectionHeader}>Skills</p>
                          <List size="large" bordered dataSource={skills} renderItem={(item) => (
                              <List.Item><List.Item.Meta avatar={<Avatar shape="square" src={item.src} />} title={item.title} description={<Progress percent={item.progress}/>}/></List.Item>
                          )}/>
                      </div>
                      <div>
                          <p className={HomeStyles.sectionHeader}>Interests</p>
                          <List size="large" bordered dataSource={interests} renderItem={item => <List.Item>{item}</List.Item>}/>
                        </div>
                  </div>
              </div>
            </div>
    )
}

export default IndexPage
