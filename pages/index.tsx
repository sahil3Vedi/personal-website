import Link from 'next/link'
import HomeStyles from '../css/home.module.css'
import { List, Avatar, Space, Tooltip, Progress } from 'antd'
import profileImage from '../assets/sahil.jpg'

const interests = [
    'Operating Systems',
    'Cybersecurity',
    'DevOps',
    'Machine Learning',
    'Mathematics',
    'System Design'
]

const skills = [
    {title:'ReactJS', src: "https://www.svgrepo.com/show/303157/react-logo.svg", progress: 90},
    {title:'NodeJS', src: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg", progress: 90},
    {title:'Typescript', src: "https://www.svgrepo.com/show/303600/typescript-logo.svg", progress: 80},
    {title:'MongoDB', src: "https://static.tumblr.com/lbtm3t2/8PAn0kziu/mongodb-logo.png", progress: 80},
    {title:'AWS', src: "https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/1614/2019/07/21743298_1406722539365107_4308832733562613967_n.png", progress: 80},
    {title:'Docker', src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png", progress: 70},
    {title:'Python', src:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", progress: 90},
    {title:'Tensorflow', src: "https://miro.medium.com/max/2000/1*eJWbxmatlWJCNuhJqXB_dw.png", progress: 90},
    {title:'C++', src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", progress: 80}
]

const IndexPage = () => (
  <div>
    <div className="pageWrapper">
        <div className={HomeStyles.skillLogos}><Avatar size={200} src={profileImage}/></div>
        <h1 className="pageHeader">Hi, I am Sahil Trivedi</h1>
        <p className="pageHeaderDescription">I am a Fullstack Developer<br/>Working remotely from Vadodara, Gujarat, India.</p>
        <p className={HomeStyles.sectionHeader}>My Skills</p>
        <List size="large" bordered dataSource={skills} renderItem={item => <List.Item>{item}</List.Item>} renderItem={item => (
            <List.Item><List.Item.Meta avatar={<Avatar shape="square" src={item.src} />} title={<a href="https://ant.design">{item.title}</a>} description=<Progress percent={item.progress}/>/></List.Item>
        )}/>
        <p className={HomeStyles.sectionHeader}>My Interests</p>
        <List size="large" bordered dataSource={interests} renderItem={item => <List.Item>{item}</List.Item>}/>
        <p className={HomeStyles.sectionHeader}>My Projects</p>
    </div>
  </div>
)

export default IndexPage
