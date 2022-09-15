import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Article } from '../types/book'
import { Link } from 'react-router-dom'


interface ArticleCardProps {
    art: Article
}

const ArticleCard = (props: ArticleCardProps) => {

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

    return (   
            <Card className='artCard'>
                <Link to={`/${props.art.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.art.imageUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='h5'>
                            {props.art.title}
                        </Typography>
                        <Typography variant="body2" color="text.dark">
                            {props.art.summary} <br /> {props.art.newsSite}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                        Published: {myTime(props.art.publishedAt)} - Last Update:{myTime(props.art.publishedAt)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
    )
}

export default ArticleCard