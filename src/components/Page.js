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
		
		this.state = {
			user: {}
		};
	}

	componentDidMount(){
		let me = this;
		$.ajax({
			url: '/api/profile',
			method: 'GET',
			success: (res)=>{
				if(res.code ===0){
					me.setState({
						user: res.user
					});
				}else{
					console.error(res.msg);
				}
			}
		});
	}

	render(){
		let me = this;
		let {photo, nick} = me.state.user;
		let title = nick+'的博客';
		return (
			<div>
				<Header {...this.menuConfig}/>
				<Banner photo={photo} title={title}/>
				{this.props.children}
				<Footer />
			</div>
			)
	}
}

export default Page;