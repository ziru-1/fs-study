const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params)
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params)
  }
}

module.exports = { info, error }

//extracting logging into its separate module is good
//when we start to write logs into a file or an external logging service
//so that we would only have to make changes in one place
