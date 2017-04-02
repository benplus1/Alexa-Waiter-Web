var ListEntry = React.createClass({
  //expect this.props.title = "" this.props.price = ""
  render: function () {
    return(
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
});

export default ListEntry;
