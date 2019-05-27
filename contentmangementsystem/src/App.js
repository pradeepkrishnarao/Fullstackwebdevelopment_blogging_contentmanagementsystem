import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import logo from './logo.png';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactContactForm from 'react-mail-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get('/api/blogapi')
      .then(res => {
        this.setState({ blogs: res.data });
        console.log(this.state.blogs);
      });
  }

  render() {
    return (
        <div class="container">
          <div class="jumbotron">    
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <a href="/"><img src={logo} className="navbar-nav mr-auto" alt="logo" /></a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/create">Add</a>
                </li>
            </ul>
        </div>
    </nav>
    <br></br>
    <br></br>
            <header class="modal-header">
            <h3>
              Welcome to Blog!
            </h3>
            </header>
            
          <div class="panel-body">
{this.state.blogs.map(blog =>
<main role="main">
<br/>
<article>
<h3>{blog.title}</h3>
<section>
  {blog.content}
</section>
<h6 class="modal-footer1"><Link to={`/show/${blog._id}`}>Edit</Link></h6><h6 class="modal-footer2"><span>{blog.category}   {blog.blog_date}</span></h6>
</article>
<br/>
<br/>
</main>
)}
</div>
<hr/>
<h4>Contact</h4>
<ReactContactForm to="address@gggmail.com" />
</div>
<footer class= "navbar-dark bg-dark fixed-bottom modal-footer1">
<span class="navbar-nav mr-auto">&copy;2019 Content Management System</span>
  </footer>        
      </div>
    );
  }
}

export default App;
