import React from 'react';

class Charts extends React.Component {

	
	compareNumbers(a, b) {
		return a - b;
	}

    render() {
		var self = this,
			data = this.props.data,
			layered = this.props.grouping === 'layered' ? true : false,
			max = 0;
		
		for (var i = data.length; i--; ) {
			for (var j = data[i].length; j--; ) {
				if (data[i][j] > max) {
					max = data[i][j];
				}
			}
		}
				
		return (
			<div className={ 'Charts' + (this.props.horizontal ? ' horizontal' : '' ) }>
				{ data.map(function (serie, serieIndex) {
				 	var sortedSerie = serie.slice(0),
				 		sum;
				 	
				 	sum = serie.reduce(function (carry, current) {
				 		return carry + current;
					}, 0);

				 	sortedSerie.sort(
						(a, b) => a - b
					);				 		
									 
					return (
						<div className={ 'Charts--serie ' + (self.props.grouping) }
				 			key={ serieIndex }
							style={{ height: self.props.height ? self.props.height: 'auto' }}
						>
						<label>{ self.props.labels[serieIndex] }</label>
						{ serie.map(function (item, itemIndex) {
							var color = self.props.colors[itemIndex], style,
								size = item / max * 100;
							style = {
								backgroundColor: color,
								opacity: (item/max + .05),
								zIndex: item
							};
	
							style['height'] = size + '%';

							if (layered) {
								
								style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
								
							}
						
						 return (
							 <div
							 	className={ 'Charts--item ' + (self.props.grouping) }
							 	style={ style }
								key={ itemIndex }
							>
							 	<b style={{ color: color }}>{ item }</b>
							 </div>
						);
						}) }
						</div>
					);
				}) }
			</div>
		);
	}
}

export default Charts;
