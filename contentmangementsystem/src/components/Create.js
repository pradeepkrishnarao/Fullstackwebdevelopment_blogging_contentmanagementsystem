import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      category: '',
      blog_date: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, content, category, blog_date } = this.state;

    axios.post('/api/blogapi', { title, content, category, blog_date})
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { title, content, category, blog_date} = this.state;
    return (
      <div class="container jumbotron">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD BLOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Home</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="content">content:</label>
                <textArea class="form-control" name="content" onChange={this.onChange} placeholder="content" cols="120" rows="10">{content}</textArea>
              </div>
              <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" class="form-control" name="category" value={category} onChange={this.onChange} placeholder="Category" />
              </div>
              <div class="form-group">
                <label for="blog_date">Blog date:</label>
                <input type="date" class="form-control" name="blog_date" value={blog_date} onChange={this.onChange} placeholder="Blog date" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;