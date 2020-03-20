import React, { Component } from 'react';
import typography from './components/typography';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        shows: [],
        isLoaded: false,
      }
  }

  componentDidMount(){

    fetch('https://amc-api-br.svc.ds.amcn.com/v2/public/feed/collections?name=featured_shows')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          shows: json.data.posts,
        })
      });
  }

  render() {

      var { isLoaded, shows } = this.state;

      if (!isLoaded){
        return <div className="Loader"><img src="loader-1x.gif"></img></div>;
      }

      return (
        <div className="App dark">
          <div className="container-fixed">
            <h1>Featured Shows</h1>

            <ul className="Shows m-x">
              {shows.map(show => (
                <li className="Show m-y" key={show.id}>
                {show.images.poster['200x300'] && (
                  <img src={show.images.poster['200x300'].full} alt={show.meta.amcn_field_relation_show_display} className="m-b"></img>
                  )
                }
                  <h4 className="display-primary-2">{show.meta.amcn_field_relation_show_display}</h4>
                </li>
              ))}
            </ul>

          </div>
        </div>
      );
  }

}

export default App;
