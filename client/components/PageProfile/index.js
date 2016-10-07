import React, { Component, PropTypes } from 'react'
import PageLayout from '../PageLayout'
import Link from '../Link'
import Tags from '../Tags'
import { redirect } from 'redux-router-director'
import '!style!css!less!./style.less'

class PageProfile extends React.Component {
    constructor(props) {
        super(props);
        const { authUser } = this.props;
        this.state = {
            modifiedSkills: false,
            skills: authUser.skills,
        };
    }

    hasChanged(newSkills, oldSkills) {
        if (newSkills.length !== oldSkills.length) {
            return true;
        }

        let i = 0;
        for (i = 0; i < newSkills.length; i++) {
            if (!oldSkills[i] || newSkills[i] !== oldSkills[i]) {
                return true;
            }
        }

        return false;
    }

    onChangeTags(tags) {
        const { authUser } = this.props;
        const skills = tags.map(tag => tag.text); 
        this.setState({
            modifiedSkills: this.hasChanged(skills, authUser.skills),
            skills,
        });
    }

    addNewTag(skills) {
        const { addTag } = this.props;
        addTag && skills.length && addTag({
            name: skills[0]
        }, () => {
            skills.shift();
            this.addNewTag(skills);
        });
    }

    onUserChange() {
        const { authUser, onUserChange, tags, addTag } = this.props;
        const { skills } = this.state;
        return (evt) => {
            evt.preventDefault();
            onUserChange && onUserChange({
                id: authUser.id,
                skills,
            }, (data) => {
                const textTags = tags.map(tag => tag.name);
                const newSkills = data.skills.filter(skill => {
                    return textTags.indexOf(skill) === -1;
                });

                this.addNewTag(newSkills);
                
                this.setState({
                    modifiedSkills: false,
                });
            });
        }
    }

    render() {
        const { modifiedSkills } = this.state;
        const { authUser, onClickLogout, tags, onUserChange } = this.props;

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <div className="container list-wrapper">
                    <div className="row">
                        <div className="col-md-10">
                            {authUser.name}
                            <Tags 
                                tags={authUser.skills} 
                                suggestions={tags.map((tag) => tag.name)}
                                onChangeData={this.onChangeTags.bind(this)} />
                            {modifiedSkills ? (
                                <button type="button" className="btn btn-default" onClick={this.onUserChange()}>Save</button>
                            ) : (
                                ''
                            )} 

                        </div>
                    </div>
                </div>
            </PageLayout>        
        );
    }
}

export default PageProfile;

