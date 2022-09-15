import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Article } from '../types/book'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'


const SingleArticle = () => {



    const [article, setArticle] = useState<Article | null>(null)


    const myTime = (string: string): string => {
        let date = new Date(string);
        return date.toLocaleDateString('en-US', {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    useEffect(() => {
        fetchArticle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const fetchArticle = async () => {
        try {
            const response = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles/' + params.id
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

    const params = useParams()

    return (
        <div className='singleContainer'>
            {
                article && (
                    <Card className='cardDetail'>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="400"
                                image={article.imageUrl}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className='h5'>
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="text.dark">
                                    {article.summary} <br /> {article.newsSite}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Published: {myTime(article.publishedAt)} - Last Update:{myTime(article.publishedAt)}
                                </Typography><Link to={'/'} className='iconBack'> <ArrowBackIcon/> </Link>
                            </CardContent>
                        </CardActionArea>

                        

                    </Card>
                )

            }</div>

    )
}
export default SingleArticle