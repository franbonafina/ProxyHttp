var config = {
	api_root_url: 'https://api.mercadolibre.com',
	skd_version: '0.0.1',
	auth_url: 'https://auth.mercadolibre.com/authorization',
	oauth_url: 'https://api.mercadolibre.com/oauth/token',
	stadistics_url : 'localhost:3000',
	client_id :  process.env.App_ID,
	secret_key : process.env.Secret_Key,
	redirect_uri : process.env.Redirect_URI,
	site_id : 'MLA'
};

exports.config = config;
