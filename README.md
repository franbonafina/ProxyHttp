Proxy
================

<img src="https://raw.githubusercontent.com/franbonafina/proxy/master/assets/proxy.png" alt="meli.proxy image" />

A little application that run on nodeJs(+ express framework) that mainly intercept request to meli (api.mercadolibre.com) to play as a control tier . And respond transparently .


### Require:
```
- npm
- nodejs
```
### Run server . 
`npm start`

### Run test
`npm test`

### Play with it:
```
cURL 'localhost:5000/path?query' 
```
### Documentation:
```
https://developers.mercadolibre.com/en_us/api-docs
```
### Configurations :
```
./Config.js
process.env - Node environment
```

The request finally is get ​​to the following address: https://api.mercadolibre.com 

