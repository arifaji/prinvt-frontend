import axios from 'axios'
import { LoadingProgrammatic as Loading } from 'buefy'
import _ from 'lodash'

export default function setup () {
  let myloading
  axios.interceptors.request.use(function (config) {
    myloading = Loading.open()
    config.headers['x-auth-token'] = localStorage.getItem('token')
    return config
  }, function (err) {
    myloading.close()
    return Promise.reject(err)
  })

  axios.interceptors.response.use(function (response) {
    myloading.close()
    return response
  }, function (error) {
    myloading.close()
    if (_.get(error, 'response.status') === 403) {
      window.location.href = '/'
    } else if (error && error.response) {
      if (!_.get(error, 'response.data.message')) {
        const message = error.response.data
        error.response.data = { message }
      }
      return Promise.reject(error.response)
    } else {
      throw error
    }
  })
}
