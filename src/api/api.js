import axios from 'axios'

// export const BASE_URL = 'https://hackatonproject.pythonanywhere.com/'

export const BASE_URL = 'https://hackatonproject.pythonanywhere.com/'




export const API = {
    get: url => {
      return fetch(`${BASE_URL}${url}` , {
        method: 'GET',
        headers: {
          'Content-type' : 'application/json'
        }
      }).then(r => r.json())
    },
    post: (url , data) => {
      return fetch(`${BASE_URL}${url}` , {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type' : 'application/json'
        }
      })
      .then(r => r.json())
    }
  }

const instance = axios.create({baseURL: BASE_URL})

export default instance



