import React from 'react';
import '!style!css!less!./style.less';

class PageDashboard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { authUser, onClickLogout, fetchSkills  } = this.props;
        // console.log(fetchSkills);

        return (
            <PageLayout onClickLogout={onClickLogout} authUser={authUser} >
                <div className="container list-wrapper">
                    <div className="row">
                        <div className="col-md-10" onClick={fetchSkills}>
                            hello!
                        </div>
                    </div>
                </div>

            </PageLayout>
        );
    }
}

export default PageDashboard;
