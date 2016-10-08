import React from "react";
import "!style!css!less!./style.less";

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
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

