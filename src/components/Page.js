window.__config = {
	env: 'dev'
}

import Menu from './Menu';
import Banner from './Banner';
import Footer from './Footer';

class Page extends React.Component{
	constructor(props){
		super(props)
		this.menuConfig = {
			option: [
				{
					title:'文章',
					url: '/',
					iconClass: 'icon-article1'
				},
				{
					title: '关于',
					url: '/about',
					iconClass: 'icon-about1'
				},
				{
					title: '联系我',
					url: '/contact',
					iconClass: 'icon-contact'
				}
			]
		};

		this.bannerConfig = {
			photo: 'me.jpg',
			title: '周勇的博客'
		};
	}

	render(){
		return (
			<div>
				<Menu {...this.menuConfig}/>
				<Banner {...this.bannerConfig} />
				{this.props.children}
				<Footer />
			</div>
			)
	}
}

export default Page;