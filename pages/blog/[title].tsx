// ARTICLES
import articles from '../../articles/articles.content.json'
// COMPONENTS
import Navbar from '../../components/navbar'
// NEXT
import { useRouter } from 'next/router'
import Head from 'next/head'
// REACT
import { useEffect, useState } from 'react'
// ANT
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
// CSS
import HomeStyles from '../../css/home.module.css'
import BlogStyles from '../../css/blog.module.css'
// PRISM
import Prism from "prismjs"
// TAG MANAGER
import TagManager from 'react-gtm-module'

const ArticlePage = () => {

    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const location = router.query.title
    const article = articles["articles"].find(a => a.link === location)

    useEffect(() => {
        if (article) setLoading(false)
        Prism.highlightAll()
        TagManager.initialize({ gtmId: 'GTM-5W2CRT3' })
    }, [article])

    const fetchElement = (type: string, content: string) => {
        switch (type) {
            case "heading":
                return <h2 className={BlogStyles.sectionHeader}>{content}</h2>
                break
            case "text":
                return <p className={BlogStyles.text}>{content}</p>
                break
            case "image":
                return <img src={content} className={BlogStyles.imgPreview} alt="related to article" />
                break
            case "latex":
                return <img src={content} className={BlogStyles.imgEquation} alt="an equation in the article" />
                break
            case "code":
                return <pre className="line-numbers">
                    <code className="language-py">
                        {content}
                    </code>
                </pre>
                break
            default:
                return null
        }
    }

    return (
        <div>
            <Navbar />
            {
                loading ?
                    <div className="spinner">
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: "#aff1da" }} spin />} />
                    </div>
                    :
                    <div className="pageWrapper">
                        <Head>
                            <title>{article.title}</title>
                            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                            <meta property="og:title" content={article.title} />
                            <meta property="og:description" content={article.description} />
                            <meta property="og:type" content="website" />
                            <meta property="og:image" content={article.img} />;
                            <meta property="og:image:type" content="image/jpeg" />
                        </Head>
                        <img src={article.img} className={BlogStyles.imgPreview} alt="related to article" />
                        <p className={BlogStyles.pageHeader}>{article.title}</p>
                        <p className={BlogStyles.text} style={{ color: "gray" }}>By Sahil Trivedi<br />{article.date}</p>
                        <p className={BlogStyles.text}>{article.description}</p>
                        {
                            article.elements.map((e, count) => <div key={count}>{fetchElement(e.type, e.content)}</div>)
                        }
                    </div>
            }

        </div>
    )
}

export default ArticlePage
