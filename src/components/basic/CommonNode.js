/**
 * Created by ssehacker on 16/8/7.
 */
import loading from '../Loading';

class CommonNode extends React.Component{
	constructor(props){
		super(props);
		this.loading = loading;
	}

	componentWillMount(){
		loading.start();
	}
	
	componentDidMount(){
		
	}
	
	render(){
		return (
			<div></div>	
		);
	}
}


export default CommonNode;