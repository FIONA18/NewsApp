import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    
    {
      "source": {
        "id": null,
        "name": "Everyday Health"
      },
      "author": "Colleen de Bellefonds",
      "title": "Atopic Dermatitis Skin Infections - Everyday Health",
      "description": "If you have atopic dermatitis, you may be at risk of skin infections, such as staph. Here’s how to spot the signs of an infection and how to treat it.",
      "url": "https://www.everydayhealth.com/eczema/atopic-dermatitis-infected/",
      "urlToImage": "https://images.everydayhealth.com/images/cs-when-atopic-dermatitis-gets-infected-1440x810.jpg?sfvrsn=3e73243e_1",
      "publishedAt": "2023-10-12T20:12:52Z",
      "content": "When areas of skin affected by atopic dermatitis (AD) morph from itchy, red patches to oozy or crusty blisters or sores, youre probably dealing with more than a flare. In all likelihood, youve develo… [+4265 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "NASA: Asteroid samples contain building blocks of life - Scripps News",
      "description": "NASA says initial samples from an asteroid returned to Earth shows many of the building blocks needed for life. 👀 On Wednesday, NASA said that the fragment ...",
      "url": "https://www.youtube.com/watch?v=WnEq7N6jc1c",
      "urlToImage": "https://i.ytimg.com/vi/WnEq7N6jc1c/maxresdefault.jpg",
      "publishedAt": "2023-10-12T19:56:59Z",
      "content": null
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Becca Farsace",
      "title": "1000 photos with the Pixel 8 Pro: AI, UI, and Pro stuff - The Verge",
      "description": "The $999 Google Pixel 8 Pro takes good photos with its 50-megapixel f/1.68 main sensor. But for every one photo it takes, there are two AI editing tools ready to either make it look better or make a scene up entirely.",
      "url": "https://www.theverge.com/23913367/pixel-8-pro-camera-google-ai-full-frame",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/taMdDFi6aAtucO5E7app2fBCGWU=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24997194/VRG_FFR_020_Pixel_8_textless.jpeg",
      "publishedAt": "2023-10-12T19:40:38Z",
      "content": "1,000 photos with the Pixel 8 Pro: AI, UI, and Pro stuff\r\n1,000 photos with the Pixel 8 Pro: AI, UI, and Pro stuff\r\n / Forever a software company that sometimes makes hardware.\r\nByBecca Farsace, a se… [+1259 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "\"Collusion Between Drug Mafia, Police\": High Court Slams Punjab Top Cop - NDTV",
      "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      "url": "https://www.ndtv.com",
      "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
      "publishedAt": "2023-10-12T18:49:54Z",
      "content": ""
    },
    {
      "source": {
        "id": null,
        "name": "Business Standard"
      },
      "author": "ANI",
      "title": "Double engine govt's efforts now bearing fruit in Uttarakhand: PM Modi - Business Standard",
      "description": "Prime Minister Narendra Modi said on Thursday that the efforts of the double-engine government for the development of tourism and pilgrimage in Uttarakhand are now bearing fruit",
      "url": "https://www.business-standard.com/india-news/double-engine-govt-s-efforts-now-bearing-fruit-in-uttarakhand-pm-modi-123101201405_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/12/full/1683891080-3828.jpg",
      "publishedAt": "2023-10-12T18:14:42Z",
      "content": "PM Modi also outlined the development strides made by India on the global level. \"The world is recognising India and the contribution of Indians\", he said"
    },
    {
      "source": {
        "id": null,
        "name": "News18"
      },
      "author": "Saurabh Verma",
      "title": "Israel PM Meets Blinken, Vows to 'Crush Hamas Like ISIS'; IDF Admits Military 'Failure' | Updates - News18",
      "description": "Israel has vowed to \"crush\" Hamas after gunmen from the Palestinian Islamist group stormed across the border and killed 1,200 people -- the deadliest attack on the country since it was founded 75 years ago",
      "url": "https://www.news18.com/world/israel-pm-meets-blinken-vows-to-crush-hamas-like-isis-idf-chief-admits-military-failure-updates-8614625.html",
      "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/10/israel-hamas-war-palestine-gaza-west-bank-2023-10-b7f3670f27686b4804c00018534da854-16x9.jpg?impolicy=website&width=1200&height=675",
      "publishedAt": "2023-10-12T18:00:00Z",
      "content": "Israel continued bombardments in the Hamas-ruled Gaza Strip on the sixth day of its war against the Palestine-based terrorist organisation.\r\nUS Secretary of State Antony Blinken landed in Tel Aviv to… [+3690 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "ICC World Cup 2023: South Africa thrash Australia by 134 runs to top the group - Times of India",
      "description": "South Africa registered a thumping win over Australia in the 10th match of ICC World Cup to top the group. South Africa posted 311 runs with the help of de Kock’s superb century. This is Quinton de Kock’s second consecutive century. In reply, Austral",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/icc-world-cup-videos/icc-world-cup-2023-south-africa-thrash-australia-by-134-runs-to-top-the-group/videoshow/104380434.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-104380434,imgsize-99564.cms",
      "publishedAt": "2023-10-12T17:39:35Z",
      "content": "Oct 12, 2023, 11:09PM ISTSource: TOI.inSouth Africa registered a thumping win over Australia in the 10th match of ICC World Cup to top the group. South Africa posted 311 runs with the help of de Kock… [+324 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Forecast: Viewing the '\"ring of fire\" solar eclipse in Pittsburgh - CBS Pittsburgh",
      "description": "A rare annular solar eclipse, better known as a ring of fire, will briefly dim the skies over parts of the western U.S. and Central and South America. KDKA F...",
      "url": "https://www.youtube.com/watch?v=xGbM2UFUoIw",
      "urlToImage": "https://i.ytimg.com/vi/xGbM2UFUoIw/maxresdefault.jpg",
      "publishedAt": "2023-10-12T17:30:27Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Oppo launches new foldable smartphone Find N3 Flip in India for ₹94,999 | Mint - Mint",
      "description": "Oppo Find N3 Flip, powered by MediaTek Dimensity 9200 chipset with 12GB RAM and 256GB ROM, features a 6.8-inch LTPO AMOLED display with 120Hz refresh rate screen",
      "url": "https://www.livemint.com/technology/gadgets/oppo-launches-new-foldable-smartphone-find-n3-flip-in-india-for-rs-94999-11697127255410.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2023/10/12/1600x900/oppo_1697127617267_1697127646987.png",
      "publishedAt": "2023-10-12T17:04:55Z",
      "content": "Oppo on Thursday launched its new foldable smartphone Oppo Find N3 Flip in India. The Find N3 Flip comes with a smaller outer screen compared to the Find N2 Flip and a triple-rear camera system.\r\n Op… [+1771 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Israel Hamas war: EU sets 24-hour deadline for Facebook and Instagram to remove pro-Hamas content - Times of India",
      "description": "European Union has set a 24-hour deadline for Facebook and Instagram parent Meta to remove pro-Hamas content across its platforms. European Commissioner Thierry Breton, in a letter to Meta CEO Mark Zuckerberg, has asked Facebook and Instagram to “be",
      "url": "https://timesofindia.indiatimes.com/videos/toi-original/israel-hamas-war-eu-sets-24-hour-deadline-for-facebook-and-instagram-to-remove-pro-hamas-content/videoshow/104379788.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-104379788,imgsize-76540.cms",
      "publishedAt": "2023-10-12T16:37:23Z",
      "content": "Oct 12, 2023, 10:07PM ISTSource: TOI.inEuropean Union has set a 24-hour deadline for Facebook and Instagram parent Meta to remove pro-Hamas content across its platforms. European Commissioner Thierry… [+225 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Santosh Singh",
      "title": "Bihar accident: Train derailed when driver applied emergency brakes after ‘sensing rattling’ on tracks - The Indian Express",
      "description": "Four persons, including a 33-year-old woman from New Delhi and her eight-year-old daughter, died in the accident.",
      "url": "https://indianexpress.com/article/india/bihar-train-accident-delhi-woman-twins-emergency-8979425/",
      "urlToImage": "https://images.indianexpress.com/2023/10/Untitled-design-31-1.jpg",
      "publishedAt": "2023-10-12T16:31:11Z",
      "content": "The train accident in Bihars Buxar on Wednesday night that killed four persons and injured at least 70 was caused when the engine driver applied emergency brakes after sensing a rattling on the track… [+4255 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Managedhealthcareexecutive.com"
      },
      "author": "Patricia Weiser, Pharm.D.",
      "title": "Analyzing the Cost-Effectiveness of Entresto in Heart Failure - Managed Healthcare Executive",
      "description": "The findings reported in JAMA Cardiology suggest that Entresto is more cost effective in patients with heart failure with lower ejection fractions.",
      "url": "https://www.managedhealthcareexecutive.com/view/analyzing-the-cost-effectiveness-of-entresto-in-heart-failure",
      "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/mhe/996ef85fa4da15098401895f99ae0456c080482a-4875x3077.jpg?fit=crop&auto=format",
      "publishedAt": "2023-10-12T15:54:58Z",
      "content": "Treatment with Entresto (sacubitril-valsartan) was found to be more cost-effective than renin-angiotensin system inhibitors in heart failure patients with below-normal ejection fractions, according t… [+5624 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "Tiku Talsania says he's 'slightly jobless': 'I am sending out feelers' - Hindustan Times",
      "description": "Veteran comic actor Tiku Talsania says while he's constantly giving auditions and sending feelers, he's still not getting the good parts. | Bollywood",
      "url": "https://www.hindustantimes.com/entertainment/bollywood/tiku-talsania-says-he-is-slightly-jobless-sending-out-feelers-that-i-am-an-actor-looking-for-work-101697120386492.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/12/1600x900/ca2c676e-26b0-11ec-9d0a-2107028cb826_1633530413190_1697120823247.jpg",
      "publishedAt": "2023-10-12T15:37:29Z",
      "content": "Tiku Talsania, 69-year-old comic actor, who has most famously appeared in films like Dil Hai Ki Manta Nahin (1991), Kabhi Haan Kabhi Naa (1993), and Ishq (1997), has claimed that he's now slightly jo… [+2478 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Greatandhra.com"
      },
      "author": "Venkat",
      "title": "Andhra Talk: Is Jagan Criticizing Pawan Good or Bad?.. - Greatandhra",
      "description": "Today, Chief Minister YS Jagan Mohan Reddy delivered a speech filled with humorous satires and sarcastic remarks directed at Pawan Kalyan and various others.",
      "url": "https://www.greatandhra.com/politics/andhra-news/andhra-talk-is-jagan-criticizing-pawan-good-or-bad-132808",
      "urlToImage": "https://www.greatandhra.com/newphotos10/cm-ys-jagan31697123945.jpg",
      "publishedAt": "2023-10-12T15:19:09Z",
      "content": "Today, Chief Minister YS Jagan Mohan Reddy delivered a speech filled with humorous satires and sarcastic remarks directed at Pawan Kalyan and various others. This speech garnered the interest of devo… [+2117 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Arab News"
      },
      "author": "Reuters",
      "title": "Abbas urges 'immediate end to aggression' against Palestinians - Arab News",
      "description": "RAMALLAH: Palestinian president Mahmud Abbas called Thursday for “an immediate end to the comprehensive aggression against the Palestinian people,” his office said following a meeting with Jordan’s King Abdullah II. In his first public remarks since a massive…",
      "url": "https://www.arabnews.com/node/2390171",
      "urlToImage": "https://www.arabnews.com/sites/default/files/styles/660x371_watermarksaudi/public/main-image/2023/10/12/4046591-2034218176.jpg?itok=7EOoeovo",
      "publishedAt": "2023-10-12T15:18:59Z",
      "content": "LONDON: The Council for Arab-British Understanding has urged British politicians not to condone collective punishment meted out by Israeli forces to Palestinians in the Gaza Strip, and to be careful … [+3958 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Advitya Bahl",
      "title": "Elderly woman crushed to death by car at Noida residential society - IndiaTimes",
      "description": "A 76-year-old woman died after being struck by a car while crossing the road in Noida Sector-78 on Wednesday.",
      "url": "https://timesofindia.indiatimes.com/city/noida/elderly-woman-crushed-to-death-by-car-at-noida-residential-society/articleshow/104378710.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-104378739,width-1070,height-580,imgsize-27154,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-10-12T15:18:00Z",
      "content": "10 drinks for strong bones that are better than supplements"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Cricket World Cup 2023: Rohit Sharma Overtakes Sachin Tendulkar, Adds Another World Record To His Na.. - NDTV Sports",
      "description": "Director Comey says the probe into last year's US election would assess if crimes were committed.",
      "url": "https://www.bbc.com/news/world-us-canada-39324587",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
      "publishedAt": "2023-10-12T15:14:39Z",
      "content": "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "Rahul Dravid goes straight to Narendra Modi Stadium after landing in Ahmedabad, checks pitch for Pakistan match at WC - Hindustan Times",
      "description": "Indian head coach Rahul Dravid headed straight to the Narendra Modi Stadium ahead of India's match against Pakistan. | Cricket",
      "url": "https://www.hindustantimes.com/cricket/rahul-dravid-goes-straight-to-narendra-modi-stadium-landing-in-ahmedabad-checks-pitch-india-vs-pakistan-world-cup-101697117556861.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/10/12/1600x900/ANI-20231010358-0_1697121479899_1697121503056.jpg",
      "publishedAt": "2023-10-12T14:40:08Z",
      "content": "After arriving in Ahmedabad for the blockbuster clash between India and Pakistan at the ICC World Cup 2023, Indian head coach Rahul Dravid headed straight to the Narendra Modi Stadium on Thursday. Fr… [+2402 chars]"
    }
  ];
  constructor()
    {
      super();
      console.log("hellow I am a const")
      this.state=
      {
        articles: this.articles
      }
      //console.log(this.props.articles)
    }
  render() {
    
    return (
      <div>
       <h1>
        <div  className='container mx-3 my-2'>
        <b>NewsNest</b> - News Headlines
        </div>
       </h1>
      

       <div className='container my-3'>
        <div className='row align-items-center'>
        {
            this.state.articles.map((element) => 
            <div className='col-md-4 my-2' key={element.url}>
              <NewsItem  title={element.title} description={element.description} newsURL={element.url} imageUrl={element.urlToImage}/>
            </div>
            )
        }
        </div>
       </div>
      </div>
    )
  }
}

export default News
