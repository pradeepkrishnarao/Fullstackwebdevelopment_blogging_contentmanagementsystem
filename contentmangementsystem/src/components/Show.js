import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blog: {}
    };
  }

  componentDidMount() {
    axios.get('/api/blogapi/'+this.props.match.params.id)
      .then(res => {
        this.setState({ blog: res.data });
        console.log(this.state.blog);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/blogapi/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container jumbotron">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.blog.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Blog List</Link></h4>
            <dl>
              <dt>Title:</dt>
              <dd>{this.state.blog.title}</dd>
              <dt>Content:</dt>
              <dd>{this.state.blog.content}</dd>
              <dt>Category:</dt>
              <dd>{this.state.blog.category}</dd>
              <dt>Date:</dt>
              <dd>{this.state.blog.blog_date}</dd>
            </dl>
            <Link to={`/edit/${this.state.blog._id}`} class="btn btn-primary">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.blog._id)} class="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;