import React, { Component } from 'react';
import typography from './components/typography';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        shows: [],
        isLoaded: false,
        position: 0,
        transform: 'translateZ(-50vw)',
      }
  }

  componentDidMount(){

    fetch('https://amc-api-br.svc.ds.amcn.com/v2/public/feed/collections?name=featured_shows')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          shows: json.data.posts,
          position:0,
        })
      });
  }

  handleNextClick = () => {
      this.setState({
        position: this.state.position + 1,
        transform: 'translateZ(-50vw) rotateY(-90deg)',
      })
  }

  handlePreviousClick = () => {
      this.setState({
        position: this.state.position - 1,
        transform: 'translateZ(-50vw) rotateY(90deg)',
      })
  }

  render() {

      var { isLoaded, shows } = this.state;
      var showsTotal = shows.length

      if (!isLoaded){
        return <div className="Loader"><img src="loader-1x.gif"></img></div>;
      }

      var currentTransform = this.state.transform;

      var activeTransform = { transform: currentTransform }

      var position = (this.state.position)

      var imgUrlPrev = shows[position].images.wide['1280x720'].full;
      var imgUrlCur = shows[position+1].images.wide['1280x720'].full;
      var imgUrlNext = shows[position+2].images.wide['1280x720'].full;

      var previousShowBg = { backgroundImage: 'url(' + imgUrlPrev + ')' }
      var currentShowBg = { backgroundImage: 'url(' + imgUrlCur + ')' }
      var nextShowBg = { backgroundImage: 'url(' + imgUrlNext + ')' }

      return (
        <>
          <div className="wrap">
            <div className="cube-container">
              <ul className="cube" style={activeTransform}>
                <li className="previous left">
                  <figure style={previousShowBg}>
                    <h4 className="display-primary-2 p-l">{shows[position+1].labels.layout_hero.slot_7}</h4>
                    <h1 className="display-primary-6 p-l">{shows[position+1].labels.layout_hero.slot_3}</h1>
                    <span className="body-lg p-l p-b">{shows[position+1].labels.layout_hero.slot_5}</span>
                    <button className="button-md m-l p-x p-y">{shows[position+1].labels.layout_hero.slot_7}</button>
                  </figure>
                </li>
                <li className="active front">
                  <figure style={currentShowBg}>
                    <h4 className="display-primary-2 p-l">{shows[position+1].labels.layout_hero.slot_7}</h4>
                    <h1 className="display-primary-6 p-l">{shows[position+1].labels.layout_hero.slot_3}</h1>
                    <span className="body-lg p-l p-b">{shows[position+1].labels.layout_hero.slot_5}</span>
                    <button className="button-md m-l p-x p-y">{shows[position+1].labels.layout_hero.slot_7}</button>
                  </figure>
                </li>
                <li className="next right">
                  <figure style={nextShowBg}>
                    <h4 className="display-primary-2 p-l">{shows[position+1].labels.layout_hero.slot_7}</h4>
                    <h1 className="display-primary-6 p-l">{shows[position+1].labels.layout_hero.slot_3}</h1>
                    <span className="body-lg p-l p-b">{shows[position+1].labels.layout_hero.slot_5}</span>
                    <button className="button-md m-l p-x p-y">{shows[position+1].labels.layout_hero.slot_7}</button>                  </figure>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-md previous" onClick={this.handlePreviousClick}>Previous</div>
          <div className="button-md next" onClick={this.handleNextClick}>Next</div>
        </>
      );
  }

}

export default App;
