import React from 'react';
//import TreeView from 'react-treeview';
import TreeView from '@material-ui/lab/TreeView';
import { makeStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//import './react-treeview.css'
// import PropTypes from 'prop-types';
import './KDStyle.css';
// import { History } from '../components/History';

export class StrucTree extends React.Component {

    componentDidMount() {
        this.props.getStrucTree();
    }

    renderStruc = () => {


        let data = {
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
    
        const useStyles = makeStyles({
            root: {
                height: 110,
                flexGrow: 1,
                maxWidth: 400,
            },
        });
    
        //RecursiveTreeView() {
            //const classes = useStyles();
          
            const renderTree = nodes => (
              <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
                {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
              </TreeItem>
            );
          
        //}
    
        return (
            <TreeView
              className='title'
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpanded={['root']}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {renderTree(data)}
            </TreeView>
          );
        

    };

    render() {
        return (
            <React.Fragment>
                <h4 className="redHeadLine">ПАО НК "Роснефть"</h4>
                {this.renderStruc()}
                
            </React.Fragment>
        );
    }
}

