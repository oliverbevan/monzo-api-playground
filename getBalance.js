var myMONZOauth = process.env.MYMONZOAUTH;
var myMONZOaccountID = process.env.MYMONZOACCOUNTID;
const https = require('https')
const options = {
  hostname: 'api.monzo.com',
  // port: 443,
  path: `/balance?account_id=${myMONZOaccountID}`,
  method: 'GET',
  headers: {
    'authorization': `Bearer ${myMONZOauth}`
    }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    obj = JSON.parse(d)
    balance = obj.balance/100
    process.stdout.write("Balance=£"+balance.toString())
    if (balance<10) {
        process.stdout.write("\nLess than £10 in you Monzo account!")
    }
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
