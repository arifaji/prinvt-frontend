import axios from 'axios'
import _ from 'lodash'
const { store } = require('../store/index')
const _axios = axios.create();

_axios.interceptors.request.use(function (config) {
  store.commit('setLoading')
  config.headers['x-auth-token'] = localStorage.getItem('token')
  return config
}, function (err) {
  store.commit('removeLoading')
  return Promise.reject(err)
})

_axios.interceptors.response.use(function (response) {
  store.commit('removeLoading')
  return _.get(response, 'data', response)
}, function (error) {
  store.commit('removeLoading')
  if (_.get(error, 'response.status') === 403) {
    window.location.href = '/'
  } else if (error && error.response) {
    if (!_.get(error, 'response.data.message')) {
      const message = error.response.data
      error.response.data = { message }
    }
    return Promise.reject(_.get(error, 'response.data', error))
  } else {
    throw error
  }
})

export default {
  httpGet( url, config) {
    return _axios.get(url, config)
  },
  httpDelete( url, config ) {
    return _axios.delete(url, config)
  },
  httpPost( url, data, config ) {
    return _axios.post(url, data, config)
  },
  httpPut( url, data, config ) {
    return _axios.put(url, data, config)
  }
};