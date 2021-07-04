import { Space, List, Avatar, Progress, Card, Button, Tag, Modal, Carousel, Spin } from 'antd'
import { GithubOutlined, MailOutlined, EyeOutlined, LoadingOutlined, MenuOutlined } from '@ant-design/icons'
import HomeStyles from '../css/home.module.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import Navbar from '../components/navbar'

// Qrips
const qrgal5 = require('../public/static/Qrips/Scr5.png')
const qrgal6 = require('../public/static/Qrips/Scr6.png')
const qrgal7 = require('../public/static/Qrips/Scr7.png')
const qrgal8 = require('../public/static/Qrips/Scr8.png')
const qrgal9 = require('../public/static/Qrips/Scr9.png')
const qrgal10 = require('../public/static/Qrips/Scr10.png')

const projects = [
    {
        title: "FaceGAN",
        description: "An implementation of the NVidia StyleGAN that manipulates the vectors in the input space of a pre-trained Generator to produce images.",
        learning: "This project was an excellent primer for the world of Generative Networks. I'm excited to work on similar projects",
        features: ["An original image is taken and StyleGAN generates it's closest approximation to that image", "The latent vectors of StyleGAN generated approximations are derived", "Using pre selected vectors the latent space of StyleGAN is manipulated to produce the desired changes"],
        tags: ["Python", "Tensorflow", "StyleGAN"],
        github: "https://github.com/sahil3Vedi/Face-Generator",
        gallery: [],
    },
    {
        title: "Self Driving Car with Arduino",
        description: "Implementing a Neural Network that pilots a self driving car, trained using data obtained from human pilots",
        learning: "This was my final year undergrad project. It was interesting interfacing with electronics and implementing a low latency Neural Network in C++",
        features: ["During Training, an SD Card logs the RC commands issued by a human pilot. At the same time, the sensor logs distance data from the surroundings.", "A neural network is trained with Keras that associates the sensor data to the commands", "Once trained, the weights of the model are parsed to C++"],
        tags: ["C++", "Arduino", "Keras"],
        github: "https://github.com/sahil3Vedi/Self-Driving-Car-Arduino",
        gallery: [],
    },
    {
        title: "Soccer Prediction",
        description: "Predicting Soccer Matches with Poisson Distribution. The algorithm accounts for the past matches from Soccer Leagues from 8 European nations and predicts the final scoreline.",
        learning: "This was a fun side project although I did not bet (a lot of) money on the model. Further optimisations are required before it beats the bookmaker.",
        features: ["The past home and away performances are fetched from the CSV", "Attack and Defense Strengths are calculated for the Home and Away teams to get the most likely number of goals by each side", "A Poisson Distribution is applied to generate the probability distribution for the scores"],
        tags: ["Python", "Scikit", "Pandas"],
        github: "https://github.com/sahil3Vedi/Soccer-Prediction",
        gallery: [],
    },
    {
        title: "Ecommerce Platform & CMS",
        description: "An Ecommerce Platform with separate logins for Suppliers, Admins, and Customers.",
        learning: "This project provided a solid grasp over Node APIs, Server Side Rendering, and React Contexts",
        features: ["Distinct logins for Customers, Suppliers & Admins", "Razorpay Integration for Payments", "CMS for Suppliers and Admins to Track Orders and Update Inventory in Real Time"],
        tags: ["NextJS", "NodeJS", "TypeScript"],
        github: "",
        gallery: [qrgal5, qrgal6, qrgal7, qrgal8, qrgal9, qrgal10],
    },
    {
        title: "Clinic Management ERP System",
        description: "A Clinic Management System that can be used by General Practioners to manage their patients, reports, issue prescriptions, and assess patient metrics.",
        learning: "This project introduced me to the challenges of monetizing a SaaS product.",
        features: ["Integrated Dashboard for Doctors to oversee patient metrics", "Printing Prescriptions and Invoices", "Inventory Management for In-House Medication"],
        tags: ["NextJS", "NodeJS", "TypeScript"],
        github: "",
        gallery: [],
    },
    {
        title: "Document Management System",
        description: "A Document Management System commissioned for use by iComply LifeScience Solutions.",
        learning: "This project served as a great foundation for learning React.",
        features: ["Role based user priviledges", "Document creation, editing, and deletion without leaving the application", "Auto-signin/signout & inactive user signout", "Light Mode & Dark Mode"],
        tags: ["ReactJS", "React Hooks", "Redux"],
        github: "",
        gallery: [],
    }
]

const ProjectsPage = () => {
    
    const [gallery, setGallery] = useState([])
    const [galleryModal, setGalleryModal] = useState(false)

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-5W2CRT3' })
    }, [])

    const viewGallery = (gal: any) => {
        setGallery(gal)
        setGalleryModal(true)
    }

    const galModal = (
        <Modal centered visible={galleryModal} width="85%" destroyOnClose footer={null} onCancel={() => setGalleryModal(false)} title="View Gallery">
            <Carousel effect="fade" autoplay>
                {gallery.map((d, count) => <div key={count} className="galleryImageDiv"><img className="galleryImage" src={d} /></div>)}
            </Carousel>
        </Modal>
    )



    return (
        <div>
            <Head>
                <title>Sahil Trivedi's Projects</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <div className="pageWrapper">
                {galModal}
                <p className="pageHeaderAlt">Projects</p>
                <List grid={{ gutter: 16, xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }} dataSource={projects} renderItem={item => (
                    <List.Item><Card title={item.title}>
                        <p>{item.description}</p>
                        <p>{item.learning}</p>
                        {item.features.map((d, count) => <p key={count}>{`- ${d}`}</p>)}
                        <div style={{ marginBottom: "20px" }}>{item.tags.map((t, count) => <Tag color="#09d79d" key={count}>{t}</Tag>)}</div>
                        {item.github ? <Button className="btnMonero" icon={<GithubOutlined />} onClick={() => window.open(item.github, '_blank')}>Source Code</Button> : null}
                        {item.gallery.length ? <Button className="btnMonero" icon={<EyeOutlined />} onClick={() => viewGallery(item.gallery)}>Gallery</Button> : null}
                    </Card></List.Item>
                )} />
            </div>
        </div>
    )
}

export default ProjectsPage