import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
        )
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
                        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus