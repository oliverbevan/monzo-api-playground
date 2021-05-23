var myMONZOauth = process.env.MYMONZOAUTH;
const https = require('https')
const options = {
  hostname: 'api.monzo.com',
  // port: 443,
  path: '/accounts',
  method: 'GET',
  headers: {
    'authorization': `Bearer ${myMONZOauth}`
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
