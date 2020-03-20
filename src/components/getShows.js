  constructor(props){
      super(props);
      this.state = {
        shows: [],
        isLoaded: false,
      }
  }

  componentDidMount(){

    fetch('http://amc-api-br.svc.ds.amcn.com/v2/public/feed/collections?name=featured_shows')
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
        return <div className="Loader"><img width="640" height="360" src="loader.gif"></img></div>;
      }

      return (
        <div className="App dark">
          <div className="container-fixed">
            <h1>Featured Shows</h1>

            <ul className="Shows">
              {shows.map(show => (
                <li className="Show" key={show.id}>
                {show.images.wide['1280x720'] && (
                  <img src={show.images.wide['1280x720'].full}></img>
                  )
                }
                  <h4 className="Name">{show.meta.amcn_field_relation_show_display}</h4>
                </li>
              ))}
            </ul>

          </div>
        </div>
      );
  }
