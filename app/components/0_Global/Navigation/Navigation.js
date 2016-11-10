// CORE
import React from 'react';
import AppBar from 'material-ui/AppBar';

const Navigation = (props) => {
	return (
		<AppBar
			title={props.title}
			titleStyle={{fontWeight: 300}}
			iconClassNameRight="muidocs-icon-navigation-expand-more"
		/>
	);
};

export default Navigation;
