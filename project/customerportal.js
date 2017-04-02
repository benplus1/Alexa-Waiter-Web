
var Chives = React.createClass({
  getInitialState: function () {
    return {menu: []};
  },
  componentDidMount: function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //TO-DO

      }
    };
    xhttp.open("GET", "http://6ed0c0f1.ngrok.io/RI", true);
    xhttp.send();
    this.setState({
      menu: ["asdf", "adfasdfsdf", "aeugyfbuajkbf"]
    });
  },
  render: function () {
    console.log(this.state);
    var something = this.state.menu.map(function (param) {
      return (
        <li key={param}>
          <div >
            
          </div>
        </li>
      );
    })
    return (
      <ul>
        {something}
      </ul>
    );
  }
});

ReactDOM.render(<Chives/>, document.getElementById('root'));
