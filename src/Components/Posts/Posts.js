import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { API_URL } from "../../Globals/Constants";
import PostContent from "./PostContent";
import Error from "../../Globals/Error";
import Loading from "../../Globals/Loading";
import PostHeader from "./PostHeader";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        this.setState({ posts: res.data, error: null });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  handleClick = (postid) => {
    this.props.history.push("/posts/" + postid);
  };
  render() {
    let pointer = { cursor: "pointer" };

    let posts = null;
    let postdata = null;
    if (this.state.loading) {
      posts = <Loading></Loading>;
    } else if (this.state.error !== null) {
      posts = <Error error={this.state.error}></Error>;
    }

    if (
      this.state.posts &&
      this.state.loading !== true &&
      this.state.error === null
    ) {
      postdata = this.state.posts.map((post) => {
        return (
          <PostContent
            key={post.id}
            rowId={post.id}
            userId={post.userId}
            title={post.title}
            styling={pointer}
            clicked={() => {
              this.handleClick(post.id);
            }}
          />
        );
      });
    } else {
      postdata = (
        <tr>
          <td colSpan="3">No Data to Display</td>
        </tr>
      );
    }
    return (
      <Container>
        {posts}
        <Row className="justify-content-md-center justify-content-lg-center">
          <Col xs sm md="6" lg="12">
            <Table striped bordered hover>
              <PostHeader></PostHeader>
              <tbody>{postdata}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Posts;
