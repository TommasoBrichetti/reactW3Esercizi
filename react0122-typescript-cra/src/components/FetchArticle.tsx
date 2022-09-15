import { useEffect, useState } from 'react'
import { Article } from '../types/book'
import ArticleCard from './Article'





const FetchArticle = () => {
    const [article, setArticle] = useState<Article[]>([])

    useEffect(() => {
        fetchArticle()
    }, [])

    const fetchArticle = async () => {
        try {
            const response = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setArticle(data)
            } else {
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1 className='title'>Space News</h1>
            <div className='newsContainer'>
                {article.map((art, i) => (
                    <ArticleCard key={art.id} art={art} />
                ))}
            </div>
        </div>

    )
}

export default FetchArticle