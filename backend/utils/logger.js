const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

module.exports = { info, error }

//extracting logging into its separate module is good
//when we start to write logs into a file or an external logging service
//so that we would only have to make changes in one place