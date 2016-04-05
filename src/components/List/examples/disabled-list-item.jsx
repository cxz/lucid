import React from 'react';
import ListStateless from '../List';
import { buildStatefulComponent } from '../../../util/state-management';

const List = buildStatefulComponent(ListStateless);

export default React.createClass({
	render() {
		return (
			<List style={{ width: '200px' }}>
				<List.Item>Level one</List.Item>
				<List.Item isDisabled={true}>Level one</List.Item>
				<List.Item>Level one</List.Item>
			</List>
		);
	}
});
