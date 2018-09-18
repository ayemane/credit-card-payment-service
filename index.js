const http = require('http')
port = 3000

const server = http.createServer((req, res) => {
  console.log('req.url', req.url)

  if (req.url != '/make-payment') {
    res.end(JSON.stringify({ success: false, errors: ['Unknown URL try /make-payment'] }))
  }

  random = Math.floor(Math.random() * 2) + 1
  success = random % 2 == 0

  if (success) {
    data = JSON.stringify({ success: true, errors: [] })
  } else {
    data = JSON.stringify({ success: false, errors: ['Declined!'] })
  }

  res.end(data)
})

server.listen(port, err => {
  if (err) {
    return console.log('something went kaboom!')
  }
  console.log(`server is listening on ${port}`)
})
