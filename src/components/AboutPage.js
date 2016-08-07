/**
 * Created by ssehacker on 16/8/7.
 */

import SimplePage from './SimplePage';

class AboutPage extends SimplePage {
	constructor(props){
		super(props);
	}

	getInnerHtml(){
		return {
			__html: this.props.user.resume
		};
	}

}

export default AboutPage;
