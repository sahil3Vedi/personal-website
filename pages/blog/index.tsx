import Head from 'next/head'
import Navbar from '../../components/navbar'
import TagManager from 'react-gtm-module'
import { Card, List, Button } from 'antd'
import BlogStyles from '../../css/blog.module.css'
import articles from '../../articles/articles.content.json'
import Link from 'next/link'

const BlogPage = () => {
    return(
        <div>
            <Head>
                <title>Sahil Trivedi's Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className="pageWrapper">
                <p className="pageHeaderAlt">Blog</p>
                <List grid={{ gutter: 16, xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }} dataSource={articles.articles} renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>
                            <img className={BlogStyles.imgPreview} src={item.img}/>
                            <p>{item.description}</p>
                            <Link href={`/blog/${item.link}`}><Button className="btnMonero">Read More</Button></Link>
                        </Card>
                    </List.Item>
                )} />
            </div>
        </div>
    )
}

export default BlogPage