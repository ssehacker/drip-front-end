/**
 * Created by ssehacker on 16/8/7.
 */
import SimplePage from './SimplePage';

class ContactPage extends SimplePage {
	constructor(props){
		super(props);
	}

	getInnerHtml(){
		return {
			__html: this.props.user.contact
		};
	}
}

export default ContactPage;
