import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {}
        };
    }

    componentDidMount() {
        axios.get('/api/blogapi/' + this.props.match.params.id)
            .then(res => {
                this.setState({ blog: res.data });
                console.log(this.state.blog);
            });
    }

    onChange = (e) => {
        const state = this.state.blog
        state[e.target.name] = e.target.value;
        this.setState({ blog: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, category, content, blog_date } = this.state.blog;

        axios.put('/api/blogapi/' + this.props.match.params.id, { title, content,  category, blog_date})
            .then((result) => {
                this.props.history.push("/show/" + this.props.match.params.id)
            });
    }

    render() {
        return (
            <div class="container jumbotron">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            EDIT BLOG
            </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/show/${this.state.blog._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Home</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" name="title" value={this.state.blog.title} onChange={this.onChange} placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <label for="content">Content:</label>
                                <input type="text" class="form-control" name="content" value={this.state.blog.id} onChange={this.onChange} placeholder="content" />
                            </div>
                            <div class="form-group">
                                <label for="category">Category:</label>
                                <input type="text" class="form-control" name="category" value={this.state.blog.category} onChange={this.onChange} placeholder="Category" />
                            </div>
                            <div class="form-group">
                                <label for="blog_date">blog created date:</label>
                                <input type="date" class="form-control" name="blog_date" value={this.state.blog.blog_date} onChange={this.onChange} placeholder="blog date" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;