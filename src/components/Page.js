import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import util from './Util';
let {loadConfig} = util;
class Page extends React.Component{
	constructor(props){
		super(props);
		this.menuConfig = {
			items: loadConfig().configure.menu
		};

		this.bannerConfig = {
			photo: 'me.jpg',
			title: '周勇的博客'
		};
	}

	render(){
		return (
			<div>
				<Header {...this.menuConfig}/>
				<Banner {...this.bannerConfig} />
				{this.props.children}
				<Footer />
			</div>
			)
	}
}

export default Page;