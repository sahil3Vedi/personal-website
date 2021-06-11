import HomeStyles from '../css/home.module.css'
import { List, Avatar, Progress, Card, Button, message, Tag } from 'antd'
import { GithubOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons'
const profileImage = require('../assets/sahil.jpg')


const interests = [
    'Operating Systems',
    'Software Development',
    'Machine Learning',
    'Cybersecurity',
    'DevOps',
    'Software Testing',
    'Systems Engineering',
    'Mathematics'
]

const skills = [
    {title:'ReactJS', src: "https://www.svgrepo.com/show/303157/react-logo.svg", progress: 90},
    {title:'NodeJS', src: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg", progress: 90},
    {title:'Python', src:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", progress: 90},
    {title:'Tensorflow', src: "https://miro.medium.com/max/2000/1*eJWbxmatlWJCNuhJqXB_dw.png", progress: 90},
    {title:'C++', src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", progress: 80},
    {title:'Typescript', src: "https://www.svgrepo.com/show/303600/typescript-logo.svg", progress: 80},
    {title:'MongoDB', src: "https://static.tumblr.com/lbtm3t2/8PAn0kziu/mongodb-logo.png", progress: 80},
    {title:'AWS', src: "https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/1614/2019/07/21743298_1406722539365107_4308832733562613967_n.png", progress: 80},
    {title:'Docker', src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png", progress: 70},
    {title:'SQL', src: "https://www.svgrepo.com/show/138912/database.svg", progress: 70},
]

const projects = [
    {
        title:"Clinic Management ERP System",
        description:"A Clinic Management System that can be used by General Practioners to manage their patients, reports, issue prescriptions, and assess patient metrics.",
        learning: "This project introduced me to the challenges of monetizing a SaaS product.",
        features:["Integrated Dashboard for Doctors to oversee patient metrics", "Printing Prescriptions and Invoices", "Inventory Management for In-House Medication"],
        tags: ["NextJS","NodeJS","Typescript"],
        github: "",
        link: "http://www.gpmitra.com",
    },
    {
        title:"Ecommerce Platform & CMS",
        description:"An Ecommerce Platform with separate logins for Suppliers, Admins, and Customers.",
        learning: "This project provided a solid grasp over Node APIs, Server Side Rendering, and React Contexts",
        features:["Distinct logins for Customers, Suppliers & Admins", "Razorpay Integration for Payments", "CMS for Suppliers and Admins to Track Orders and Update Inventory in Real Time"],
        tags: ["NextJS","NodeJS","Typescript"],
        github: "",
        link: "http://www.qrips.com",
    },
    {
        title:"Document Management System",
        description:"A Document Management System commissioned for use by iComply LifeSciences.",
        learning: "This project served as a great foundation for learning React.",
        features:["Role based user priviledges", "Document creation, editing, and deletion without leaving the application", "Auto-signin/signout & inactive user signout","Light Mode & Dark Mode"],
        tags:["ReactJS","React Hooks","Redux"],
        github: "",
        link: "",
    }
]

const IndexPage = () => (
  <div>
    <div className={HomeStyles.coverPicture}></div>
    <div className="pageWrapper">
        <div className={HomeStyles.profileHeader}>
            <div className={HomeStyles.displayPicture}><Avatar size={200} src={profileImage}/></div>
            <div>
                <h1 className="pageHeader">Sahil Trivedi</h1>
                <p className="pageHeaderDescription">Software Engineer (FullStack + Machine Learning)<br/><GithubOutlined style={{color:"#aff1da"}}/> github.com/sahil3vedi<br/><MailOutlined style={{color:"#aff1da"}}/> sahiltrivediw@gmail.com</p>
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
                {item.link ? <Button icon={<GlobalOutlined/>} onClick={()=>window.open(item.link, '_blank')}>Live Deploy</Button> : null}
            </Card></List.Item>
        )}/>
    </div>
  </div>
)

export default IndexPage
