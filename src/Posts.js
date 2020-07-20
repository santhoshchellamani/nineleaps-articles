import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const API_URL = "https://jsonplaceholder.typicode.com/posts";


class Posts extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
          posts : [],
          loading: true,
          error:null
        }
      }
    
      componentDidMount(){
        axios.get(API_URL)
        .then((res)=>{
          console.log(res);
          this.setState({posts:res.data, error:null});
        })
        .catch((err)=>{
          console.log(err.message)
          this.setState({error:err.message});
        })
        .finally(()=>{
          this.setState({loading:false});
        });
      }
    
      handleClick = (postid) =>{
          console.log("Santhosh",postid);
          this.props.history.push("/posts/"+postid);
      }
      render(){
        let pointer = {cursor:"pointer"};
    
        let posts = null;
        let postdata = null;
        if(this.state.loading){
          posts = (<div className="text-center"><Spinner animation="border" role="status" className="text-center">
          <span className="sr-only">Loading...</span> 
        </Spinner><span>Fetching Data....</span></div>);
        }
        else if (this.state.error!==null)
        {
          posts = <Alert variant="danger" className="text-center">
          {this.state.error}
        </Alert>
        }
        else{
    
        }
    
        if(this.state.posts && this.state.loading!==true && this.state.error===null){
          postdata = this.state.posts.map((post)=>{
              return (
                <tr key={post.id} onClick={()=>{this.handleClick(post.id)}} style={pointer}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                </tr>
              )
          });
        }
        else
        {
          postdata = (<tr><td colSpan="3">No Data to Display</td></tr>)
        }
        return(
          <Container>
            
          {posts}
          <Row className="justify-content-md-center justify-content-lg-center">
            <Col xs sm md="6" lg="12">
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {postdata}
            </tbody>
          </Table>
            </Col>
          </Row>
          
          </Container>
        );
      }
}


export default Posts;