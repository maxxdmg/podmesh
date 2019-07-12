import React, {Component} from 'react'
import Podcast from './Components/Podcast/Podcast'
import Navbar from './Components/Navbar'
import Message from './Components/Message'
import Spinner from './Components/Spinner'
import ErrorMsg from './Components/Error'

class App extends Component {
  state = {
    podNumCap: 10,
    podNum: 0,
    podcasts: [],
    owner: "",
    lastUpdated: "",
    feed: [
      'http://feeds.twit.tv/sn.xml', 
      'http://lpotl.libsyn.com/rss',
      'https://rss.art19.com/hello-from-the-magic-tavern',
      'http://wizbru.libsyn.com/rss'
      ],
    currentFeed: '',
    loading: false,
    error: null
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.currentFeed !== nextState.currentFeed)
      return false
    else return true;
  }

  getFeed = (url) => {
    this.setState({loading:true, podcasts: []})
    // complete the api target url
    let target = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURI(url)
    return fetch(target).then(res => {
      return res.text().then(txt => {
        // set up DOMParser and podcast attribute variables
          let doc = JSON.parse(txt)

          if (doc.status !== "ok"){
            this.setState({
              podcasts: [],
              
              error: "Invalid url. Are you sure it is an rss feed?"}) 
          } else if (doc.items[0].enclosure.type !== "audio/mpeg") {
            this.setState({
              podcasts: [],
              
              error: "Invalid rss feed. Must be a podcast rss feed"}) 
          }

          return doc;        
      // catch errors
      }).catch(err => this.setState({error: err}))
    }).catch(err => this.setState({error: err}))
  }

  parseDate = date => {
    const chars = 10;
    let ret = "";

    for (let i=0; i<chars; i++) {
      ret += date[i];
    }
    return ret;
  }

  parsePodcastDate = (podcast) => {
    let date = podcast.date;
    let year = date.slice(0, 4);
    let month = date.slice(5,7);
    let day = date.slice(8, 10);
    
    return {...podcast, year, month, day}
  }

  generateKey = (podTitle, podDate) => {
    let max = 10000;
    let min = 100;

    let randA = Math.floor(Math.random() * (max - min)) + min;
    let randB = Math.floor(Math.random() * (max - min)) + min;
    let randC = Math.floor(Math.random() * (max - min)) + min;

    return String(podTitle) + String(podDate) + String(randA) + String(randB) + String(randC);
  }

  imageBroken = () => "Image Unavailable"

  dateCompare = (pod1, pod2) => {
    let yearCompare = pod2.year - pod1.year;
    
    if (yearCompare === 0) {
      let monthCompare = pod2.month - pod1.month;

      if (monthCompare === 0) {
        let dayCompare = pod2.day - pod1.day;

        if (dayCompare === 0)
          return 0
        else
          return dayCompare
      } else
        return monthCompare
    } else
      return yearCompare
  }

  enterFeedHandler = async (url, numEpisodes) => {
    let feed = await this.getFeed(url);
    if (feed.status !== "ok" || feed.items[0].enclosure.type !== "audio/mpeg")
            return;

    let podcasts = [];
    let podNum = 0;
    let owner = feed.feed.title;
    let lastUpdated = "";

    for (let i=0; i<numEpisodes; i++) {
      let title = feed.items[i].title;
      let mediaUrl = feed.items[i].enclosure.link
      let thumbnail = feed.feed.image;
      let date = feed.items[i].pubDate
      // get most recent episode for 'last updated' state
      if (i === 0) lastUpdated = this.parseDate(date);

      let newEpisode = {owner, title, date, mediaUrl, thumbnail}
      newEpisode = this.parsePodcastDate(newEpisode);
      podNum++;
      podcasts.push(newEpisode);
    }

    this.setState({
      podcasts, owner, lastUpdated, podNum, 
      loading: false,
      error: null})
  }

  newFeedHandler = e => this.setState({currentFeed: e.target.value});
  addFeed = url => this.setState({feed: [...this.state.feed, url]});

  render () {
    let podcasts = null; 

    let message = <Message
                      msgHeader="No podcast feed loaded" 
                      msgText="Enter the rss url of a podcast to view and listen to it's feed"/>;
    if (this.state.loading) {
      message = <Spinner />
    }


    let err = null;
    if (this.state.error) {
      err = <ErrorMsg errText={this.state.error} />
    }

    if (this.state.podcasts.length && !this.state.loading) {
      let podcastList = this.state.podcasts.sort(this.dateCompare);

      let msgHeader = "loaded feed for '" + this.state.owner + "'";
      let msgText = "Displaying " + this.state.podNum + " episodes \n";
      let msgUpdated = "Last updated " + this.state.lastUpdated + "\n";
      message = <Message 
                  msgHeader={msgHeader} 
                  msgText={msgText} 
                  msgUpdated={msgUpdated} />

      podcasts = podcastList.map(p => 
        <Podcast 
          key={this.generateKey(p.title, p.date)}
          imgBroken={this.imageBroken}
          podTitle={p.title} 
          podMedia={p.mediaUrl}
          podThumbnail={p.thumbnail}
          podDate={this.parseDate(p.date)} />
      )
    }

    return (
      <div>
        <Navbar
          inputText={this.state.currentFeed}
          inputChange={this.newFeedHandler}
          enterHandler={() => this.enterFeedHandler(this.state.currentFeed, 10)} />
        <div className="container">
          {err}
          {message}
          <div className="row mb-2">
            {podcasts}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
