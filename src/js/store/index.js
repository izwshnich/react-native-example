import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { history } from '../history'
import reducers from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export function configureStore() {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  )

  sagaMiddleware.run(rootSaga)

  return store
}
