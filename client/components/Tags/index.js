import React, { Component, PropTypes } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';
import '!style!css!less!./style.less'

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [ {id: 1, text: 'India'} ],
            suggestions: ['India'] 
        };
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    }

    render() {
        const { tags, suggestions } = this.state;
      
        return (
            <div className="tags">
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete.bind(this)}
                    handleAddition={this.handleAddition.bind(this)}
                    handleDrag={this.handleDrag.bind(this)} />
            </div>
        );
    }
}

export default Tags;
