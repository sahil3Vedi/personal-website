import { useState, useEffect } from 'react'
import HomeStyles from '../css/home.module.css'
import { List, Avatar, Progress, Card, Button, Tag, Modal, Carousel, Spin } from 'antd'
import { GithubOutlined, MailOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons'
// IMAGES
const profileImage = require('../public/static/sahil.jpg')
// GPMitra
const gpgal1 = require('../public/static/GPMitra/Scr1.png')
const gpgal2 = require('../public/static/GPMitra/Scr2.png')
const gpgal3 = require('../public/static/GPMitra/Scr3.png')
const gpgal4 = require('../public/static/GPMitra/Scr4.png')
const gpgal6 = require('../public/static/GPMitra/Scr6.png')
// Qrips
const qrgal5 = require('../public/static/Qrips/Scr5.png')
const qrgal6 = require('../public/static/Qrips/Scr6.png')
const qrgal7 = require('../public/static/Qrips/Scr7.png')
const qrgal8 = require('../public/static/Qrips/Scr8.png')
const qrgal9 = require('../public/static/Qrips/Scr9.png')
const qrgal10 = require('../public/static/Qrips/Scr10.png')
// XMR
const xmrqr = require('../public/static/xmrqr.png')


const interests = [
    'Machine Learning',
    'Software Development',
    'DevOps',
    'Mathematics',
    'Operating Systems',
    'Cybersecurity',
    'Software Testing',
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

const projects = [
    {
        title:"FaceGAN",
        description:"An implementation of the NVidia StyleGAN that manipulates the vectors in the input space of a pre-trained Generator to produce images.",
        learning: "This project was an excellent primer for the world of Generative Networks. I'm excited to work on similar projects",
        features:["An original image is taken and StyleGAN generates it's closest approximation to that image", "The latent vectors of StyleGAN generated approximations are derived", "Using pre selected vectors the latent space of StyleGAN is manipulated to produce the desired changes"],
        tags: ["Python", "Tensorflow","StyleGAN"],
        github: "https://github.com/sahil3Vedi/Face-Generator",
        gallery: [],
    },
    {
        title:"Clinic Management ERP System",
        description:"A Clinic Management System that can be used by General Practioners to manage their patients, reports, issue prescriptions, and assess patient metrics.",
        learning: "This project introduced me to the challenges of monetizing a SaaS product.",
        features:["Integrated Dashboard for Doctors to oversee patient metrics", "Printing Prescriptions and Invoices", "Inventory Management for In-House Medication"],
        tags: ["NextJS","NodeJS","TypeScript"],
        github: "",
        gallery: [gpgal1,gpgal2,gpgal3,gpgal4,gpgal6],
    },
    {
        title:"Soccer Prediction",
        description:"Predicting Soccer Matches with Poisson Distribution. The algorithm accounts for the past matches from Soccer Leagues from 8 European nations and predicts the final scoreline.",
        learning: "This was a fun side project although I did not bet (a lot of) money on the model. Further optimisations are required before it beats the bookmaker.",
        features:["The past home and away performances are fetched from the CSV", "Attack and Defense Strengths are calculated for the Home and Away teams to get the most likely number of goals by each side", "A Poisson Distribution is applied to generate the probability distribution for the scores"],
        tags: ["Python", "Scikit","Pandas"],
        github: "https://github.com/sahil3Vedi/Soccer-Prediction",
        gallery: [],
    },
    {
        title:"Ecommerce Platform & CMS",
        description:"An Ecommerce Platform with separate logins for Suppliers, Admins, and Customers.",
        learning: "This project provided a solid grasp over Node APIs, Server Side Rendering, and React Contexts",
        features:["Distinct logins for Customers, Suppliers & Admins", "Razorpay Integration for Payments", "CMS for Suppliers and Admins to Track Orders and Update Inventory in Real Time"],
        tags: ["NextJS","NodeJS","TypeScript"],
        github: "",
        gallery: [qrgal5,qrgal6,qrgal7,qrgal8,qrgal9,qrgal10],
    },
    {
        title:"Self Driving Car with Arduino",
        description:"Implementing a Neural Network that pilots a self driving car, trained using data obtained from human pilots",
        learning: "This was my final year undergrad project. It was interesting interfacing with electronics and implementing a low latency Neural Network in C++",
        features:["During Training, an SD Card logs the RC commands issued by a human pilot. At the same time, the sensor logs distance data from the surroundings.", "A neural network is trained with Keras that associates the sensor data to the commands", "Once trained, the weights of the model are parsed to C++"],
        tags: ["C++", "Arduino","Keras"],
        github: "https://github.com/sahil3Vedi/Self-Driving-Car-Arduino",
        gallery: [],
    },
    {
        title:"Document Management System",
        description:"A Document Management System commissioned for use by iComply LifeScience Solutions.",
        learning: "This project served as a great foundation for learning React.",
        features:["Role based user priviledges", "Document creation, editing, and deletion without leaving the application", "Auto-signin/signout & inactive user signout","Light Mode & Dark Mode"],
        tags:["ReactJS","React Hooks","Redux"],
        github: "",
        gallery: [],
    }
]

const IndexPage = () => {

    const [gallery, setGallery] = useState([])
    const [galleryModal, setGalleryModal] = useState(false)
    const [xmrmodal, setXmrModal] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => setLoading(false), [])

    const galModal = (
        <Modal centered visible={galleryModal} width="85%" destroyOnClose footer={null} onCancel={()=>setGalleryModal(false)} title="View Gallery">
            <Carousel effect="fade" autoplay>
                {gallery.map((d,count)=><div key={count} className="galleryImageDiv"><img className="galleryImage" src={d}/></div>)}
            </Carousel>
        </Modal>
    )

    const xmrModal = (
        <Modal centered visible={xmrmodal} width="300px" destroyOnClose footer={null} onCancel={()=>setXmrModal(false)} title="Sahil Trivedi's XMR QR">
            <img className="galleryImage" src={xmrqr}/>
        </Modal>
    )

    const viewGallery = (gal: any) => {
        setGallery(gal)
        setGalleryModal(true)
    }

    console.log(loading)

    return(
            loading
            ?
            <div className="spinner">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color:"#aff1da" }} spin />}/>
            </div>
            :
            <div>
                {xmrModal}
                {galModal}
              <div className={HomeStyles.coverPicture}></div>
              <div className="pageWrapper">
                  <div className={HomeStyles.profileHeader}>
                      <div className={HomeStyles.displayPicture}><Avatar size={200} src={profileImage}/></div>
                      <div>
                          <h1 className="pageHeader">Sahil Trivedi</h1>
                          <p className="pageHeaderDescription">Machine Learning Engineer<br/><GithubOutlined style={{color:"#aff1da"}}/> github.com/sahil3vedi<br/><MailOutlined style={{color:"#aff1da"}}/> sahiltrivediw@gmail.com</p>
                      </div>
                  </div>
                  <div className={HomeStyles.displayInfo}>
                  	<div>
                    	<p className={HomeStyles.sectionHeader}>About</p>
                    	<div className="wordWrap">
                      		<p className={HomeStyles.about}>My domain of work is  MLOps - creating dynamic & scalable Machine Learning models. I have done my B.Tech. in Information Technology from VIT University, Vellore.</p>
                      		<p className={HomeStyles.about}>I accept donations in <span style={{color:"orange", cursor:"pointer"}} onClick={()=>window.open('https://en.wikipedia.org/wiki/Monero', '_blank')}>Monero</span></p>
                      		<Button className="btnMonero" onClick={()=>setXmrModal(true)}>View XMR QR</Button>
                    	</div>
                    </div>
                    <div>
						<p className={HomeStyles.sectionHeader}>Research</p>
						<div className="wordWrap">
					  		<p className={HomeStyles.about}>Currently Researching:<br/>- Dynamic & Scalable Recommendation Engines<br/>- Incremental Optimisation in CNNs<br/>- Fluid Simulations with Neural Networks</p>
					  		<p className={HomeStyles.about}>If you have any research ideas/projects, or want to collaborate, feel free to send me a mail.</p>
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
                  <p className={HomeStyles.sectionHeader}>Featured Projects</p>
                  <List grid={{ gutter: 16, xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }} dataSource={projects} renderItem={item => (
                      <List.Item><Card title={item.title}>
                          <p>{item.description}</p>
                          <p>{item.learning}</p>
                          {item.features.map((d,count)=><p key={count}>{`- ${d}`}</p>)}
                          <div style={{marginBottom:"20px"}}>{item.tags.map((t,count)=><Tag color="cyan" key={count}>{t}</Tag>)}</div>
                          {item.github ? <Button icon={<GithubOutlined/>} onClick={()=>window.open(item.github, '_blank')}>Source Code</Button> : null}
                          {item.gallery.length ? <Button icon={<EyeOutlined/>} onClick={()=>viewGallery(item.gallery)}>Gallery</Button> : null}
                      </Card></List.Item>
                  )}/>
              </div>
            </div>
    )
}

export default IndexPage
