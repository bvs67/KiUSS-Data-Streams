import React from 'react';
import PropTypes from 'prop-types'
import './KDStyle.css'


export class Obj extends React.Component {

  onBtnClick = () => {
    this.props.loadData()
    this.props.loadFL()
  }

  onAddClick = () => {
    console.log('onAddClick')
    if (this.props.AddMode) {
      this.props.toggleMode(false)
      console.log('-1-AddMode=', this.props.AddMode);
    } else {
      this.props.toggleMode(true)
      console.log('-2-AddMode=', this.props.AddMode);
    }
  }
  
  onSaveClick = () => {
    console.log('onSaveClick', this.fieldInput.value, ' ', this.objInput.value)
    this.props.addObj('13',this.objInput.value)
    this.fieldInput.value = ''
    this.objInput.value = ''
  }

  componentDidMount() {
    this.props.loadData()
    this.props.loadFL()
  }

  onDelClick = (key) => {
    console.log('key = ',key)
    this.props.deleteObj(key)
  }

  renderInput = () => {
    if (!this.props.AddMode) {
      return null;
    }
    return  <tr> 
      <td className='tableMain'><input type="text" ref={(input) => { this.fieldInput = input }} /></td>
      <td className='tableMain'><input type="text" ref={(input) => { this.objInput = input }} /></td>
      <td><button onClick = {this.onSaveClick.bind(this)}>Сохран</button></td>
      <td className='hiddenCol'></td>
    </tr>;
  }

  renderObj = () => {
    let lineObj = null

    lineObj = this.props.dataArray.map(function(f0, f1, f2) {
              var arrLine = []
              arrLine = f0
              return  <tr> 
                          <td className='tableMain'>{arrLine[1]}</td>
                          <td className='tableMain'>{arrLine[2]}</td>
                          <td><button onClick = {this.onDelClick.bind(this, arrLine[0])}>Удалить</button></td>
                          <td className='hiddenCol'>{arrLine[0]}</td>
                      </tr>;
    }, this);
    return lineObj
  }

  render() {
    const { dataArray, isFetching } = this.props // вытащили isFetching
    console.log('dataArray', dataArray);
    console.log('isFetching', isFetching);
    return (
      <React.Fragment>
        <h4 className='redHeadLine'>Комплекты УМБ</h4>

            <button className="btn" onClick={this.onAddClick}> Add Obj </button>
            <table> 
              <thead>
                <tr className='whiteHeadline'>
                  <td className='tableMain'>ОГ</td>
                  <td className='tableMain'>Комплекты</td>
                  <td className='tableMain'>Действие</td>
                  <td className='hiddenCol'> </td>
                </tr>
              </thead>
              <tbody onClick={this._showCurrent}>
                 {this.renderInput()}
                 {this.renderObj()}
              </tbody>
            </table>
            <button className="btn" onClick={this.onBtnClick}> Load Data </button>
            
            {isFetching ? <p>Загрузка...</p> : <p>Загружено {dataArray.length} объектов.</p>}
      </React.Fragment>
    );
  }
}

Obj.propTypes = {
  AddMode: PropTypes.bool,
  dataArray: PropTypes.array,
  loadData: PropTypes.func.isRequired, 
  deleteObj: PropTypes.func.isRequired, 
  isFetching: PropTypes.bool.isRequired,
  tmp: PropTypes.number.isRequired,
  flArray: PropTypes.array,
}

Obj.defaultProps = {
  AddMode: false,
  dataArray: [1],
  isFetching: false,
  tmp: 0,
  flArray: [1],
}








        <select value={this.state.value} onChange={this._selectChange} defaultValue='Coconut Ranger'>
          this.props.flArray.map(function(f0, f1, f2) {
            //arrLine = []
            arrLine = f0
            return <option value={arrline[0]}>arrline[1]</option> 
          }, this);
        </select>


redux когда заканчивается асинхронный запрос

Но с Thunk Middleware вы можете написать его вот так:

// action creator
function loadData(userId) {
  return dispatch => fetch(`http://data.com/${userId}`) // Redux Thunk handles these
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_DATA_SUCCESS', data }),
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
    );
}

// component
componentWillMount() {
  this.props.dispatch(loadData(this.props.userId)); // dispatch like you usually do
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }

    let flobj = null
    flobj = this.props.flArray.map(function(f0,f1,f2) {
      var arrLine = []
      arrLine = f0
      return <tr> 
      <td className='tableMain'>
        <select defaultValue='2'>
          <option value={arrLine[0]}>{arrLine[1]}</option>
        </select>
      </td>
      <td className='tableMain'><input type="text" ref={(input) => { this.objInput = input }} /></td>
      <td><button onClick = {this.onSaveClick.bind(this)}>Сохран</button></td>
      <td className='hiddenCol'></td>
    </tr>;

    }, this);
    return flobj



 -----------------------------------------------------------------------------------------------------------
    return (
      <form onSubmit={this.handleSubmit}>
        <tr> 
          <td className='tableMain'>
            <select defaultValue='2'>
            this.props.flArray.map
              <option value={arrLine[0]}>{arrLine[1]}</option>
            </select>
          </td>
          <td className='tableMain'><input type="text" ref={(input) => { this.objInput = input }} /></td>
          <td><button onClick = {this.onSaveClick.bind(this)}>Сохран</button></td>
          <td className='hiddenCol'></td>
        </tr>;
      </form>
    );
    let flobj = null
    flobj = this.props.flArray.map(function(f0,f1,f2) {
      var arrLine = []
      arrLine = f0
      return <tr> 
      <td className='tableMain'>
        <select defaultValue='2'>
          <option value={arrLine[0]}>{arrLine[1]}</option>
        </select>
      </td>
      <td className='tableMain'><input type="text" ref={(input) => { this.objInput = input }} /></td>
      <td><button onClick = {this.onSaveClick.bind(this)}>Сохран</button></td>
      <td className='hiddenCol'></td>
    </tr>;

    }, this);
    return flobj
------------------------------------------------------------------------------------------------------------

    return (
      React.DOM.tr(null,
        React.DOM.td(
          React.DOM.select({
            defaultValue: 'Coconut Ranger',
            },
            this.props.flArray.map(function(vacell,i) {
              return React.DOM.option({key: i},vacell)
            })
          ),
        ),
        React.DOM.td(
          content,
        ),
        React.DOM.td({key: idx,
          className: 'hiddenCol'},
          content,
        )
      )
    )

------------------------------------------------------------------------------------------------------------
                          {if (this.props.EditMode) {
                            <td className='tableMain'><input type="text" text={arrLine[2]} ref={(input) => { this.editInput = input }} /></td>
                          } else {
                            <td className='tableMain'>{arrLine[2]}</td>
                          }
                        }
