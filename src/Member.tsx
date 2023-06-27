import React, {useEffect} from 'react';
import {members as membersStatic} from './users';
//import Navbar from './Navbar';
import './user.css';
import { connect, ConnectedProps } from 'react-redux';
import {fetchAllMembersLoading, fetchAllMembers} from "./actions/user";

import {RootState} from "./app/store";




const mapStateToProps =(state: RootState) => ({
    members: state.members
})

//const mapDispatchToProps = (dispatch: Dispatch) => {
    //return {
        //fetchAllMembersLoading : () => dispatch(fetchAllMembersLoading()),
        // authenticationSuccess: (user: any) => dispatch(authenticationSuccess(user)),
        //authenticationError: (error: any) => dispatch(authenticationError(error)),
        //  doDisappearModal: () => dispatch({ type: ActionTypes.I_JUST_REGISTERED }),
        //decrement: () => dispatch({ type: 'DECREMENT' }),
        //reset: () => dispatch({ type: 'RESET' }),
    //}
//}
const mapDispatchToProps2 = {
    fetchAllMembersLoading,
    fetchAllMembers
}

const Connector = connect(mapStateToProps, mapDispatchToProps2)
type PropsFromRedux = ConnectedProps<typeof Connector>
type Props = PropsFromRedux & {

}

/*type MembersProps = {
    fetchAllMembersLoading: () => FetchAllMembersLoadingAction;

};*/
const Members = (props: Props) => {
    useEffect( () => {
            props.fetchAllMembersLoading();
            setTimeout(() => {
                props.fetchAllMembers(membersStatic)
            }, 1000)
        }, [])
    return (
        <>
            {/*<Navbar />*/}
            <div className='page'>
                <div className="container">
                    <div className="row">
                        {
                            props.members.content === null ?
                            <div>
                               bonjour
                            </div>
                             :  props.members.content.map(member => (
                                (
                                    <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 flex-1">
                                        <div className="panel panel-default userlist p-absolute">
                                        <div className="panel-heading h-100 w-100">
                                            {/* <h3 className="page-header small">20+ Projects</h3> */}
                                            <p className="page-subtitle small">{member.who.substring(0, 22) + "..."}</p>
                                            <a href="" className="availablity btn btn-circle btn-success"><i
                                                className="fa fa-check"></i></a></div>
                                        <div className="panel-body text-center">
                                            <div className="userprofile mt-15">
                                                <div className="userpic"><img
                                                    src={member.image ? member.image : "/images/avatar.png"} alt=""
                                                    className="userpicimg h-100"/></div>
                                                <h3 className="username pt-4">{member.name}</h3>
                                                <p>{member.firstname}</p>
                                            </div>
                                            <strong>Information</strong><br/>
                                            <p>{member.Description.substring(0, 25) + "..."}<br/>
                                                <br/>
                                                <a href="mailto:info@maxartkiller.in">{member.email}</a></p>
                                            <p>{member.phone} </p>
                                            <div className="socials tex-center"><a href=""
                                                                                   className="btn btn-circle btn-primary "><i
                                                className="fa fa-facebook"></i></a> <a href=""
                                                                                       className="btn btn-circle btn-danger "><i
                                                className="fa fa-google-plus"/></a> <a href=""
                                                                                       className="btn btn-circle btn-info "><i
                                                className="fa fa-twitter"></i></a> <a href=""
                                                                                      className="btn btn-circle btn-warning "><i
                                                className="fa fa-envelope"/></a></div>
                                        </div>
                                        <div className="panel-footer"><a href="" className="btn btn-link">Connect</a> <a
                                            href="" className="btn btn-link pull-right favorite"><i
                                            className="fa fa-heart"></i></a></div>
                                    </div>
                                    </div>)
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    );
}


export default Connector(Members);