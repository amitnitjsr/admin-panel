import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { crudAction } from "../../store/actions/common";
import { Badge, Card, CardBody, Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { USER_URL } from '../../shared/allApiUrl';
import { getImageUrl } from '../../shared/helpers';
import { withRouter } from 'react-router-dom';
import moment from 'moment'
function UserList(props) {
    const getUserList = () => {
        props.crudActionCall(USER_URL, null, "GET_ALL")
    }
    useEffect(() => {
        getUserList();
        return () => {
            // cleanup
        }
    }, []);
    useEffect(() => {
        const { type, isSuccess } = props.user.action;
        if (type === "DELETE" && isSuccess)
            getUserList();
    }, [props.user]);
    const navToEditPage = (userId) => {
        props.history.push(`/user/edit/${userId}`);
    }
    const navToViewPage = (userId) => {
        props.history.push(`/user/details/${userId}`);
    }
    const deleteUser = (userId) => {
        props.crudActionCall(`${USER_URL}/${userId}`, null, "DELETE");
    }
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> User List
                        </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>University</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {props.user.userList && props.user.userList.map((user) => {
                                        return ( */}
                                            <tr>
                                                <td class="text-center">
                                                    <div class="avatar">
                                                        <img
                                                            // src={getImageUrl(user.profile_picture)}
                                                            src={'http://111.93.169.90:4020/image/user.png'}
                                                            class="img-avatar"
                                                            alt="not found"
                                                        />

                                                    </div>
                                                </td>
                                                <td>John Doe</td>
                                                <td>john.doe@gmail.com</td>
                                                <td>ANGLIA RUSKIN UNIVERSITY</td>
                                                <td>
                                                    <Badge color="success">Active</Badge>
                                                </td>
                                                <td class="text-center">
                                                    <Button size="sm" className="btn-xing btn-brand mr-1 mb-1" data-toggle="tooltip" title="View" onClick={() => navToViewPage(123)}>
                                                        <i className="fa fa-eye"></i>
                                                    </Button>
                                                    <Button size="sm" className="btn-twitter btn-brand mr-1 mb-1" data-toggle="tooltip" title="Edit" onClick={() => navToEditPage(123)}>
                                                        <i className="fa fa-pencil-square-o"></i>
                                                    </Button>
                                                    <Button size="sm" className="btn-youtube btn-brand mr-1 mb-1" data-toggle="tooltip" title="Delete" onClick={() => {if(window.confirm('Are you sure you want to delete this user?')){deleteUser(123)}}}>
                                                        <i className="fa fa-trash-o"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        {/* )
                                    })} */}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
const mapStateToProps = state => {
    const { user } = state;
    return {
        user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        crudActionCall: (url, data, actionType) => dispatch(crudAction(url, data, actionType, "USER"))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserList));