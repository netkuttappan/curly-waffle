import axios from 'axios'
import apiConfig from '../config/apiConfig'

export function smapleSeviceCall(payload) {
  const { host, sampleUrl, options } = apiConfig.galactus
  const { id } = apiConfig.deviceSettings
  const data = {
    ...payload,
    id: id,
  }
  return axios
    .post(`${host}${sampleUrl}`, data, options)
    .then(response => ({ response: response.data }))
    .catch(error => ({ error }))
}
