//Пример: Использование Thunk мидлвара для асинхронных экшенов
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
// applyMiddleware улучшает createStore переданным мидлваром:
const store = createStore(reducer, applyMiddleware(thunk))

function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce')
}

//Это такие же обычные генераторы экшенов, которые вы видели ранее.
//Экшены, которые они возвращают, могут быть переданы в `dispatch` без каких-либо мидлваров.
//Тем не менее, они отражают только "факты", но не "асинхронный flow"

function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce
  }
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error
  }
}

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount
  }
}

// Мы можем диспатчить событие даже без мидлвера
store.dispatch(withdrawMoney(100))

// Но что, если вам нужно запустить асинхронную операцию,
// такую, как вызов API или переход в роутере?

// Встречайте `преобразователи` (thunks).
// Преобразователь - это всего лишь функция, возвращающая функцию.
// Вот пример преобразователя:

function makeASandwichWithSecretSauce(forPerson) {

  // Инвертируем управление!
  // Возвращаем функцию, которая принимает `dispatch` как аргумент, чтобы мы могли её вызвать позже.
  // мидлвар-преобразователь знает, как нужно конвертировать такие асинхронные экшены в стандартные.

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}

// мидлвар-преобразователь позволяет диспатчить асинхронные функции так,
// как будто это обычные события!
store.dispatch(makeASandwichWithSecretSauce('Me'))

// мидлвар даже возвращает результат вашей функции из dispatch, поэтому можно создавать цепочки Promise, если вы их возвращаете.
store.dispatch(makeASandwichWithSecretSauce('My wife')).then(() => {
  console.log('Done!')
})

// Фактически, можно даже писать генераторы событий, которые диспатчат обычные и асинхронные события из других генераторов событий, 
// и, таким образом, создавать полноценные потоки управления событиями с использованием Promise
function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
    if (!getState().sandwiches.isShopOpen) {

      // Вы не обязаны возвращать Promise, но это хорошее соглашение, чтобы вызывающий мог всегда вызвать .then() на результате вашего `dispatch`
      
      return Promise.resolve()
    }

    // Мы можем диспатчить как обычные объекты событий, так и асинхронные функции-преобразователи одновременно,
    // что позволяем нам встраивать асинхронные события в единый поток событий.
    return dispatch(makeASandwichWithSecretSauce('My Grandma'))
      .then(() =>
        Promise.all([
          dispatch(makeASandwichWithSecretSauce('Me')),
          dispatch(makeASandwichWithSecretSauce('My wife'))
        ])
      )
      .then(() => dispatch(makeASandwichWithSecretSauce('Our kids')))
      .then(() =>
        dispatch(
          getState().myMoney > 42
            ? withdrawMoney(42)
            : apologize('Me', 'The Sandwich Shop')
        )
      )
  }
}

// Это очень полезно для server-side рендеринда, т.к. мы можем дождаться получения данных, а после синхронно отрендерить приложение.

import { renderToString } from 'react-dom/server'

store
  .dispatch(makeSandwichesForEverybody())
  .then(() => response.send(renderToString(<MyApp store={store} />)))

// Можно также диспатчить асинхронный генератор экшенов прямо из компонента при изменении его `props`
// для получения недостающих данных.

import { connect } from 'react-redux'
import { Component } from 'react'

class SandwichShop extends Component {
  componentDidMount() {
    this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forPerson !== this.props.forPerson) {
      this.props.dispatch(makeASandwichWithSecretSauce(nextProps.forPerson))
    }
  }

  render() {
    return <p>{this.props.sandwiches.join('mustard')}</p>
  }
}

export default connect(state => ({
  sandwiches: state.sandwiches
}))(SandwichShop)