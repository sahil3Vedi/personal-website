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

const ArticlePage = () => {

    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const location = router.query.title
    const article = articles["articles"].find(a => a.link === location)

    useEffect(()=>{
        if (article) setLoading(false)
        Prism.highlightAll()
    },[article])

    const fetchElement = (type: string,content: string) => {
        switch (type){
            case "heading":
                return <h2 className={BlogStyles.sectionHeader}>{content}</h2>
                break
            case "text":
                return <p className={BlogStyles.text}>{content}</p>
                break
            case "image":
                return <img src={content} className={BlogStyles.imgPreview} alt="related to article"/>
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
            <Navbar/>
            {
                loading ?
                <div className="spinner">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: "#aff1da" }} spin />} />
                </div>
                :
                <div className="pageWrapper">
                    <Head>
                        <title>{article.title}</title>
                    </Head>
                    <p className={BlogStyles.pageHeader}>{article.title}</p>
                    <p className={BlogStyles.text}>{article.description}</p>
                    {
                        article.elements.map((e,count)=><div key={count}>{fetchElement(e.type,e.content)}</div>)
                    }
                </div>
            }
            
        </div>
    )
}

export default ArticlePage
