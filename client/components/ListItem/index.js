import React from "react";
import "!style!css!less!./style.less";

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={this.props.onClickEvent}>
                <div className="listItem">
                    <div className="name">
                        {this.props.name}
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;

