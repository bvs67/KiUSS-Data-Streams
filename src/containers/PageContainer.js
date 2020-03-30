import React from 'react'
import { connect } from 'react-redux'
import { Obj } from '../components/Obj';
import {
    loadOBJ,
} from '../actions/PageActions'

class PageContainer extends React.Component {
  render() {
    const {
      obj,
      loadOBJ,
    } = this.props
    return (
      <Obj
        OBJArray={obj.OBJArray}
        isFetching={obj.isFetching}
        loadOBJ={loadOBJ}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    obj: store.obj,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadOBJ: () => dispatch(loadOBJ()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer)
