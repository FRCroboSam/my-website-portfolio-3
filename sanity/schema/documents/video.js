import React from 'react'
import {defineType, defineField} from 'sanity'
const YoutubePreview = function YouTubePreview({ value }){
    const id = getYouTubeID(value.url);
    const url = `https://www.youtube.com/embed/${id}`;
    if (!id) {
      console.log("MISSING VIDEO")
      return <div>Missing YouTube URL</div>;
    }
    console.log("HELLO VIDEO")

    return (
      <iframe
        title="YouTube Preview"
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    );
  };


export default{
    name: 'video',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'YouTube video URL'
      }
    ],
    // preview: {
    //     select: {
    //         url: 'url'
    //     },
    //     component: YoutubePreview
    // }
  };