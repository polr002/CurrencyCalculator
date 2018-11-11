export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//import the sample data
import Data from '../instructions.json';

export function getData() {
	return (dispatch) => {

		//make api call
		//for this example will be using the sample data in json file
		//delay retrieval [sample reasons only]
		setTimeout(() => {
			const data = Data.instructions;
			dispatch({type: DATA_AVAILABLE, data:data});
		}, 2000);
	};
}