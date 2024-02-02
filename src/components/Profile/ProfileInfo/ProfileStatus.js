import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        // this.state.editMode = true; // this.forceUpdate();
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        // this.state.editMode = true; // this.forceUpdate();
        this.setState(
            {
                editMode: false
            }
        );
//        debugger;
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               type="text" value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus