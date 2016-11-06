import React, { Component } from 'react';
// MATERIAL
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddKeymap extends Component {

	constructor() {
		super();
		this.state = {
			open: false,
			keymapName: '',
			keymapCommand: '',
			keymapID: ''
		};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeCommand = this.handleChangeCommand.bind(this);
		this.handleChangeID = this.handleChangeID.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleChangeName(event) {
		this.setState({
			keymapName: event.target.value,
		});
	};

	handleChangeCommand(event) {
		this.setState({
			keymapCommand: event.target.value,
		});
	};

	handleChangeID(event) {
		this.setState({
			keymapID: event.target.value,
		});
	};

	handleOpen() {
		this.setState({open: true});
	};

	handleClose() {
		this.setState({open: false});
	};

	handleSubmit() {
		const newKeymap = {
			name: this.state.keymapName,
			command: this.state.keymapCommand,
			ID: this.state.keymapKeyID
		};
		this.props.addKeymap(newKeymap);
		this.setState({open: false});
	};

	render() {

		// If all the form are filled => true
		const formFilled = !(
			this.state.keymapName.length > 2 &&
			this.state.keymapCommand.length > 2 &&
			this.state.keymapKeyID !== null
		);

		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Add"
				primary={true}
				disabled={formFilled}
				onTouchTap={this.handleSubmit}
			/>,
		];

		return (
			<div>
				<FloatingActionButton
					style={{
						position: 'fixed',
						bottom: '2em',
						right: '2em'
					}}
					className='Keymaps__floatingButton'
					onTouchTap={this.handleOpen}>
					<ContentAdd />
				</FloatingActionButton>

				<Dialog
					title="New Keymap"
					actions={actions}
					modal={true}
					open={this.state.open}
				>
					<TextField
						floatingLabelText="Name"
						value={this.state.keymapName}
						onChange={this.handleChangeName}
					  style={{width: '100%'}}
					/>
					<TextField
						floatingLabelText="Command"
						value={this.state.keymapCommand}
						onChange={this.handleChangeCommand}
					  style={{width: '100%'}}
					/>
					<RaisedButton
						label="Bind MIDI Key"
						labelPosition="before"
						containerElement="label"
					  style={{
						  marginTop: '1em'
					  }}
					/>
				</Dialog>
			</div>
		);
	}
}
export default AddKeymap;