import React from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

const API_URL = "https://jsonplaceholder.typicode.com/posts/";
const API_USER = "https://jsonplaceholder.typicode.com/users/";


class FullPost extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post : [],
            userDetails:[],
            loading:true,
            error:null
        }
    }
    componentDidMount(){
        axios.get(API_URL+this.props.match.params.id)
        .then((res)=>{
            this.setState({post:res.data});
            if(res.data.userId!==""){
                axios.get(API_USER+res.data.userId)
            .then((resuser)=>{
                this.setState({userDetails:resuser.data});
            });
            }
            
        })
        .catch((err)=>{
            this.setState({error:err.message});
        })
        .finally(()=>{
            this.setState({loading:false});
        });
    }

    handleBack = () =>{
        this.props.history.push("/posts/");
    }
    render(){
        let posts = null;
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
        else if(this.state.post && this.state.loading!==true && this.state.error===null){
            posts = (
                <Card>
                <Card.Header><b>Article Title : </b>{this.state.post.title}</Card.Header>
                <Card.Body>
                    
                    <Card.Text>
                    {this.state.post.body}
                    </Card.Text>
                    <Jumbotron>
                    <Container>
            <p><b>Author Details</b></p>
            <p>Name : {this.state.userDetails.name}</p>
            <p>Email : {this.state.userDetails.email}</p>
            <p>Website : {this.state.userDetails.website}</p>
  </Container>
                    </Jumbotron>
                    <Button variant="primary" onClick={()=>this.handleBack()}>Home</Button>
                </Card.Body>
                </Card>
            );
        }
        return(
            <Container>
                <Row className="justify-content-md-center justify-content-lg-center">
                    <Col xs sm md="6" lg="6" ><p></p>
                    {posts}
                    </Col>
                </Row>
               
            </Container>
        )
    }
}

export default FullPost;