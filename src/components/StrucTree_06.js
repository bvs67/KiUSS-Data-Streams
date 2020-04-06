//import React from 'react';
//import TreeView from 'react-treeview';
//import {TreeView} from '@material-ui/core';

//import './react-treeview.css'
// import PropTypes from 'prop-types';
import './KDStyle.css';
// import { History } from '../components/History';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

export class StrucTree extends React.Component {

    componentDidMount() {
        this.props.getStrucTree();
    }


    data = {
        id: 'root',
        name: 'Parent',
        children: [
            {
                id: '1',
                name: 'Child - 1',
            },
            {
                id: '3',
                name: 'Child - 3',
                children: [
                    {
                        id: '4',
                        name: 'Child - 4',
                    },
                ],
            },
        ],
    };
      
    useStyles = makeStyles({
        root: {
            height: 110,
            flexGrow: 1,
            maxWidth: 400,
        },
    });
      
    // export default function RecursiveTreeView() {
    RecursiveTreeView() {
        const classes = useStyles();
      
        const renderTree = nodes => (
          <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
          </TreeItem>
        );
      
    }
      
    
    render() {
        return (
            <React.Fragment>
                <h4 className="redHeadLine">ПАО НК "Роснефть"</h4>
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpanded={['root']}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                {renderTree(data)}
                </TreeView>
            </React.Fragment>
        );
    }
}

