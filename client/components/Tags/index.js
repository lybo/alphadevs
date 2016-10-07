import React, { Component, PropTypes } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "!style!css!less!./style.less";

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: this.props.tags.map((tag, i) => ({
                id: tag,
                text: tag
            })) 
        };
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags});
        const { onChangeData } = this.props;
        onChangeData && onChangeData(tags);
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            // id: tags.length + 1,
            id: tag,
            text: tag,
        });
        this.setState({tags});
        const { onChangeData } = this.props;
        onChangeData && onChangeData(tags);
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({tags});
        const { onChangeData } = this.props;
        onChangeData && onChangeData(tags);
    }

    render() {
        const { tags } = this.state;
        const { suggestions } = this.props;
        const uniqueArray = (el,i,a) => {
            if(i==a.indexOf(el)) return 1;
            return 0;
        };
      
        return (
            <div className="tags">
                <ReactTags tags={tags}
                    suggestions={suggestions.filter(uniqueArray)}
                    handleDelete={this.handleDelete.bind(this)}
                    handleAddition={this.handleAddition.bind(this)}
                    handleDrag={this.handleDrag.bind(this)} />
            </div>
        );
    }
}

export default Tags;
