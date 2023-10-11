import React from 'react';
import './App.css';
import VideoCard from './VideoCard'
import Header from "./header"


function App() {
const videos = [

  { id: 1,
    title: "Fresh Graduate or IT  professional Looking f..",
    thumbnailUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png",
    likes: "Arman Ahmad",
    views: "24 Jan 2024",
    channelName: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to",
 
   },
   { id: 2,
    title: "Fresh Graduate or IT  professional Looking f..",
    thumbnailUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/6.png",
    likes: "Parth Patel",
    views: "28 Jun 2024",
    channelName: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to",
 
   },
   { id: 3,
    title: "Fresh Graduate or IT  professional Looking f..",
    thumbnailUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
    likes: "Supriya Jaiswal",
    views: "22 Dec 2023",
    channelName: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to",
 
   },
   { id: 4,
    title: "Fresh Graduate or IT  professional Looking f..",
    thumbnailUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/3.png",
    likes: "Poorva Nema",
    views: "10 March 2024",
    channelName: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to",
 
   },
   { id: 5,
    title: "Fresh Graduate or IT  professional Looking f..",
    thumbnailUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/5.png",
    likes: "Zoya Fatima",
     views: "07 Jun 2024",
    channelName: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to",
 
   },
   { id: 6,
    title: "Fresh Graduate or IT  professional Looking f..",
    thumbnailUrl: "https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png",
    likes: "Shubham Patel",
     views: "05 Aug 2024",
    channelName: "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to",
 
   },
 
]
   


return(
   
<div>
<Header/>
<div id="Card-section">
{videos.map((pixellab,i)=>{
  console.log(pixellab);
  return <VideoCard id = {pixellab.id} channelName = {pixellab.channelName} title = {pixellab.title} thumbnailUrl= {pixellab.thumbnailUrl}   views = {pixellab.views} likes={pixellab.likes} />
})}
</div>

  </div> 


); 
 }


export default App;

