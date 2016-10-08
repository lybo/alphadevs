import React from "react";
import "!style!css!less!./style.less";

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onDelete() {
        alert("ask for confirm");
        this.props.onDelete();
    }
    render() {
        return (
            <li>
                <div className="listItem" onClick={this.props.onClickEvent}>
                    <div className="name">
                        {this.props.name}
                    </div>
                </div>
                <button onClick={this.onDelete.bind(this)}>
                    delete
                </button>
            </li>
        );
    }
}

export default ListItem;

