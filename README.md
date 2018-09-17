Proxy
================

<img src="https://raw.githubusercontent.com/franbonafina/proxy/master/public/assets/proxy.png" alt="meli.proxy image" />

A little application that run on nodeJs(+ express framework) that mainly intercept request to meli (api.mercadolibre.com) to play as a control tier . And respond transparently .

It's a solution to: [(https://docs.google.com/document/d/1sicsLNJwF4LAWN2UR8e7ugklOS4FhyGWCNadPJ134yA/edit)]

### Require:
```
- npm
- nodejs
```
### Install  
`npm start`

### Documentation:
```
https://developers.mercadolibre.com/en_us/api-docs
```
### Configurations :
```
env localdir = localhost:5000 
meliMethod = path + ? + parameters
```
### Calling it:
```
cURL 'localdir/meliMethod' 
```

The request finally is get ​​to the following address:
```
https://api.mercadolibre.com 
```

