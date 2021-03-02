import React, { createContext, useState, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Button } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';

const append = (array, element) => {
	const index = array.findIndex(v => element.index < v.index);
	return index !== -1 ? [...array.slice(0, index), element, ...array.slice(index, array.length)] : [...array, element];
};

const remove = (array, element) => array.filter(({
	index,
	tabId
}) => element.index !== index || element.tabId !== tabId);

const getNextNode = (node, mode) => {
	const first = {
		next: node.parentNode.children[0],
		previous: node.parentNode.lastChild
	}[mode];
	let nextNode = node;

	do {
		nextNode = nextNode[`${mode}ElementSibling`] || first;
	} while (nextNode.disabled);

	return nextNode;
};

const getNextElement = {
	ArrowLeft: node => getNextNode(node, 'previous'),
	ArrowRight: node => getNextNode(node, 'next'),
	Home: t => {
		const node = t.parentNode.children[0];
		return node.disabled ? getNextNode(node, 'next') : node;
	},
	End: t => {
		const node = t.parentNode.lastChild;
		return node.disabled ? getNextNode(node, 'previous') : node;
	}
};
const overrides = {
	Tab: {
		kind: 'Button',
		props: {
			children: 'Tab',
			"background": "#fff",
			"color": "#4a8cfa",
			"font": "normal 400 14px/22px 'AvenirNextCyrMedium'",
			"margin": "0px 2px 0px 0px",
			"focus-box-shadow": "none",
			"padding": "10px 24px 10px 24px",
			"border-radius": "0px",
			"md-width": "100%",
			"md-background": "#E4E9ED",
			"md-color": "#333",
			"md-margin": "0px 32px 0px 32px",
			"sm-background": "#EEF2F3",
			"lg-padding": "10px 22px 10px 22px"
		}
	},
	Tablist: {
		kind: 'Box'
	},
	TabPanels: {
		kind: 'Box'
	},
	"Tab spb": {
		"props": {
			"border-radius": "0px",
			"children": "Санкт-Петербург"
		}
	}
};
const TabsContext = createContext({
	currentTab: '',
	addTab: () => {},
	removeTab: () => {}
});
export const useTabs = () => useContext(TabsContext);

const SimpleTabs = ({
	defaultTab,
	...props
}) => {
	const [currentTab, setCurrentTab] = useState(defaultTab);
	const [tabs, setTabs] = useState([]);
	const isInitialMount = useRef(true);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			setCurrentTab(defaultTab);
		}
	}, [defaultTab]);
	const addTab = useCallback(tab => {
		if (window.location.hash === '#' + tab.tabId) {
			setCurrentTab(tab.tabId);
		}

		setTabs(s => append(s, tab));
	});
	const removeTab = useCallback(tab => {
		setTabs(s => remove(s, tab));
	});
	const value = {
		currentTab,
		removeTab,
		addTab
	};

	const onKeyDown = e => {
		const {
			target,
			key
		} = e;

		if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) {
			return;
		}

		e.preventDefault();
		const nextElement = getNextElement[key](target);
		nextElement.focus();
		nextElement.click();
	};

	const buttons = useMemo(() => tabs.map(({
		tabId
	}, i) => {
		const onClick = () => setCurrentTab(tabId);

		const selected = currentTab === tabId;
		return <Button
			key={props.qid + i}
			role="tab"
			tabIndex={selected ? '0' : '-1'}
			zIndex={selected ? '2' : '1'}
			aria-selected={selected}
			onClick={onClick}
			{...override('Tab', `Tab ${tabId}`, selected && 'Tab :active')}
		>
			      
			{override(`Tab ${tabId}`).children || 'Some Text'}
			    
		</Button>;
	}), [tabs, override]);
	return <Box {...rest}>
		    
		<Box display="flex" onKeyDown={onKeyDown} role="tablist" {...override('Tablist')}>
			      
			{buttons}
			    
		</Box>
		    
		<Box {...override('TabPanels')}>
			      
			<TabsContext.Provider value={value}>
				        
				{children.map((child, i) => {
					return React.cloneElement(child, {
						index: i + children.length
					});
				})}
				      
			</TabsContext.Provider>
			    
		</Box>
		  
	</Box>;
};

const propInfo = {
	defaultTab: {
		title: 'Default Tab',
		description: {
			en: 'The tabId of the initially selected tab when uncontrolled.'
		},
		control: 'input'
	}
};
const defaultProps = {
	defaultTab: ''
};
export default atomize(SimpleTabs)({
	name: 'SimpleTabs',
	description: {
		en: 'SimpleTabs make it easy to explore and switch between different views.'
	},
	propInfo,
	overrides
}, defaultProps);