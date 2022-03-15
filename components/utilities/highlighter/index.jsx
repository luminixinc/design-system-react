/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

// ### React
import React from 'react';
import PropTypes from 'prop-types';

// ## Constants
import { HIGHLIGHTER } from '../../../utilities/constants';

/**
 * A utility component that highlights occurrences of a particular pattern in its contents.
 */
const Highlighter = (props) => {
	if (props.search) {
		let children;
		if (typeof props.children === 'string') {
			children = <React.Fragment>{props.children}</React.Fragment>;
		} else {
			const findString = (nodeArr) =>
				nodeArr.map((element) => {
					let newElement;
					if (typeof element === 'string') {
						newElement = <React.Fragment>{element}</React.Fragment>;
					} else {
						newElement = element;
					}
					return newElement;
				});

			if (props.children.props) {
				const node = props.children.props.children;
				children = node instanceof Array ? findString(node) : node;
			}
		}

		return <span>{children}</span>;
	}

	if (typeof props.children === 'string') {
		return (
			<span className={props.className} title={props.children}>
				{props.children}
			</span>
		);
	}

	return <span className={props.className}>{props.children}</span>;
};

// ### Display Name
Highlighter.displayName = HIGHLIGHTER;

// ### Prop Types
Highlighter.propTypes = {
	/**
	 * The full string to display.
	 */
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.bool,
		PropTypes.node,
	]),
	className: PropTypes.string,
	/**
	 * The string of text (or Regular Expression) to highlight.
	 */
	search: PropTypes.any,
};

export default Highlighter;
