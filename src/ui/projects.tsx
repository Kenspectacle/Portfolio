import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import CardTitle from './project-card-title';
import CardSubTitle from './project-card-subtitle';
import CardDescription from './project-card-description';

export default function Projects() {
    return (
        <section className="flex flex-col p-8 bg-slate-700 items-center justify-around gap-5">
            <h2 className="font-extrabold  text-4xl m-5">Projects</h2>
            <p className='text-2xl m-5'>Projects that made the cut, this exclude the codes written at work</p>
            <div className='flex flex-row gap-3'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent >
                        <div className='flex flex-col'>
                            <CardTitle>
                                Applica
                            </CardTitle>
                            <hr />
                            <CardSubTitle>
                                HR Hiring Administration Application
                            </CardSubTitle>
                        </div>
                        
                        <CardDescription>
                            Users are able to apply to jobs within this app, and the HR will be able to process the registration
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent >
                        <div className='flex flex-col'>
                            <CardTitle>
                                The Great Reception
                            </CardTitle>
                            <hr />
                            <CardSubTitle>
                                AI-Powered Recipe Generator
                            </CardSubTitle>
                        </div>
                        
                        <CardDescription>Create your own food recipe, by specifying various criterias that you like about your food</CardDescription>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent >
                        <div className='flex flex-col'>
                            <CardTitle>
                                Politician Tweetlytics
                            </CardTitle>
                            <hr />
                            <CardSubTitle>
                                Webscraping & Sentiment Analysis Twitter
                            </CardSubTitle>
                        </div>
                        
                        <CardDescription>Done by webscraping the tweets of various politicians in Twitter and do a sentiment analysis of their political alignment</CardDescription>
                    </CardContent>
                </Card>     
            </div>
            
        </section>
    )
}