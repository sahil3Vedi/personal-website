import { Space, List, Avatar, Progress, Card, Button, Tag, Modal, Carousel, Spin } from 'antd'
import { GithubOutlined, MailOutlined, EyeOutlined, LoadingOutlined, MenuOutlined } from '@ant-design/icons'
import HomeStyles from '../css/home.module.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import Navbar from '../components/navbar'
import { useDarkModeContext } from '../context/darkMode'

const projects = [
    {
        title: "Mapping a sphere's surface to a 2D plane",
        description: "We can parameterise the surface of a sphere and map it's points to an infinite 2D plane with a continuous, modular transform.",
        features: [],
        learning:"",
        tags: ["Neural Networks", "Signal Processing", "Supervised Learning"],
        github: "https://github.com/sahil3Vedi/Face-Generator",
        gallery: [],
        pdf: "abc"
    },
    {
        title: "Optimisation with Progressive Sharpening in Deep Neural Networks",
        description: "Introducing Progressive Sharpening, a method for optimising convolutional and fully connected layers in neural networks. This is achieved by creating incrementally denoised (blurred) copies of the training data",
        features: [],
        learning:"",
        tags: ["Neural Networks", "Signal Processing", "Supervised Learning"],
        github: "https://github.com/sahil3Vedi/Face-Generator",
        gallery: [],
        pdf: "abc"
    }
]

const ResearchPage = () => {
    
    const [gallery, setGallery] = useState([])
    const [galleryModal, setGalleryModal] = useState(false)
    const { darkMode }: any = useDarkModeContext()

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
        <div className={darkMode ? "dark" : null}>
            <Head>
                <title>Sahil Trivedi's Research</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <div className="pageWrapper">
                {galModal}
                <p className="pageHeaderAlt">Research</p>
                <List grid={{ gutter: 16, xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }} dataSource={projects} renderItem={item => (
                    <List.Item><Card>
                        <p className="researchHeader">{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.learning}</p>
                        {item.features.map((d, count) => <p key={count}>{`- ${d}`}</p>)}
                        {item.pdf ? <Button className="btnMonero" icon={<GithubOutlined />} onClick={() => window.open(item.github, '_blank')}>PDF</Button> : null}
                        {item.gallery.length ? <Button className="btnMonero" icon={<EyeOutlined />} onClick={() => viewGallery(item.gallery)}>Gallery</Button> : null}
                    </Card></List.Item>
                )} />
            </div>
        </div>
    )
}

export default ResearchPage