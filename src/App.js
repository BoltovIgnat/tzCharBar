import React from 'react';
import logo from './logo.svg';
import Charts from './components/charts';
import Legend from './components/legend';
import './App.css';


class App extends React.Component {


	constructor(props){
		super(props);
		this.populateArray();
		this.populateArray = this.populateArray.bind(this);
		setInterval(this.populateArray, 2000);
		this.state = {data: [],
			series: ['Продукт 1', 'Продукт 2', 'Продукт 3', 'Продукт 4', 'Продукт 5'],
			labels: ['Показатель 1', 'Показатель 2', 'Показатель 3', 'Показатель 4', 'Показатель 5'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']};
	}

	getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	populateArray(){
		var data = [],
			series = 5,//getRandomInt(2, 10),
			serieLength = 5;//getRandomInt(2, 10);
		
		let inttmp;

		for (var i = series; i--; ) {
			var tmp = [];
			
			for (var j = serieLength; j--; ) {
				
				inttmp = this.getRandomInt(0, 20);
				tmp.push(inttmp);
			}
			
			data.push(tmp);			
		}
		
		this.setState({ data: data });
	}

	render() {
		return (
			<section>
				<Charts
					data={ this.state.data }
					labels={ this.state.series }
					colors={ this.state.colors }
					height={ 250 }
				/>
							
				<Charts
					data={ this.state.data }
					labels={ this.state.series }
					colors={ this.state.colors }
					height={ 250 }
					grouping={ 'layered' }
				/>
							
				<Legend labels={ this.state.labels } colors={ this.state.colors } />
			</section>
		);
	}
}

export default App;
