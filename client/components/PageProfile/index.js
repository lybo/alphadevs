import React from 'react';
import PageLayout from '../PageLayout';
import '!style!css!less!./style.less';

class PageProfile extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const { skills, authUser, onClickLogout, fetchSkills, updateSkills  } = this.props;

        const skillAttrs = [];
        skills.forEach((skill) => {
            skillAttrs.push(<span className="skill">{skill}</span>);
        });

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <div className="container list-wrapper">
                    <div className="row">
                        <div className="col-md-10" onClick={fetchSkills}>
                            getSkills!
                        </div>
                        <div className="col-md-10" onClick={updateSkills}>
                            ADDSKILLS!
                        </div>
                        <div>
                            {skillAttrs}
                        </div>
                    </div>
                </div>

            </PageLayout>
        );
    }
}

export default PageProfile;
