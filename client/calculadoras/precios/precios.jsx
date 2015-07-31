Session.setDefault("divisa", "VEF");
Session.setDefault("monto", null);
Session.setDefault("montoBTC", null);

Template.precios.rendered = function () {
	$("#monto").bind("change paste keyup", function() {
	   Session.set("montoBTC", null);
	   Session.set("monto", $(this).val()); 
	});

	$("#montoBTC").bind("change paste keyup", function() {
	   Session.set("monto", null);
	   Session.set("montoBTC", $(this).val()); 
	});
};

Template.precios.events({
	'click #VEF': function () {
		return Session.set("divisa", "VEF");
	},

	'click #BRL': function () {
		return Session.set("divisa", "BRL");
	},

	'click #USD': function () {
		return Session.set("divisa", "USD");
	},

	'click #ARS': function () {
		return Session.set("divisa", "ARS");
	}
});

Template.precios.helpers({
	VEF: function(){
		if(Session.get("divisa") === "VEF"){
			return true;
		}else{
			return false;
		}
	},

	BRL: function(){
		if(Session.get("divisa") === "BRL"){
			return true;
		}else{
			return false;
		}
	},

	USD: function(){
		if(Session.get("divisa") === "USD"){
			return true;
		}else{
			return false;
		}
	},

	ARS: function(){
		if(Session.get("divisa") === "ARS"){
			return true;
		}else{
			return false;
		}
	},

	monto: function(){
		return Session.get("monto");
	},

	surbitcoinConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / Session.get("surbitcoin").sell;
				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("surbitcoin")){
			return "Cargando...";
		}else{
			return 0;
		} 

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = montoBTC * Session.get("surbitcoin").sell;
				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("surbitcoin")){
			return "Cargando...";
		}else{
			return 0;
		}
	},

	localbitcoinConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));


		if(Session.get("monto") != undefined || Session.get("monto") != null){	
			if(monto >= 1){
				var valor = monto / Session.get("pricesDivisas").LocalBitcoins_coupons.XVE;
				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("pricesDivisas")){
			return "Cargando...";
		}else{
			return 0;
		} 

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = montoBTC * Session.get("pricesDivisas").LocalBitcoins_coupons.XVE;
				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("pricesDivisas")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	implicitoConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){

				var referencia = EJSON.parse(Session.get("dolart").content).USD.dolartoday * parseFloat(Session.get("bitfinex").ask);

				var valor = monto / referencia;

				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("dolart") && !Session.get("bitfinex")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var referencia = EJSON.parse(Session.get("dolart").content).USD.dolartoday * Session.get("bitfinex").ask;

				var valor = montoBTC * referencia;

				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("dolart") && !Session.get("bitfinex")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	foxbitConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / Session.get("foxbit").sell;
				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("foxbit")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = montoBTC * Session.get("foxbit").sell;
				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("foxbit")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	localbitcoinBRLConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				return "Precio Aun no disponible"
			}else{
				return 0;
			}
		} 

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				return "Precio aún no disponible";
			}else{
				return 0;
			}
		}
	},

	implicitoBRLConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				return "Precio Aun no disponible"
			}else{
				return 0;
			}
		} 

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				return "Precio Aun no disponible"
			}else{
				return 0;
			}
		}
	},

	bitfinexConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / parseFloat(Session.get("bitfinex").ask);
				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("bitfinex")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = monto * parseFloat(Session.get("bitfinex").ask);
				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("bitfinex")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	localbitcoinUSDConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / parseFloat(Session.get("pricesDivisas").LocalBitcoins_coupons.USD);
				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("pricesDivisas")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = monto * parseFloat(Session.get("pricesDivisas").LocalBitcoins_coupons.USD);
				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("pricesDivisas")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	btcEConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / Session.get("btcE").btc_usd.avg;
				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("btcE")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = montoBTC * Session.get("btcE").btc_usd.avg;
				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("btcE")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	argenBTCConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / parseFloat(Session.get("argenBTC").btc_venta);
				return valor.toFixed(8);
			}else{
				return 0;
			}
		}else if(!Session.get("argenBTC")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = montoBTC * parseFloat(Session.get("argenBTC").btc_venta);
				return valor.toFixed(2);
			}else{
				return 0;
			}
		}else if(!Session.get("argenBTC")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	satoshiTangoConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / parseFloat(Session.get("satoshitango").compra.arsbtcround);
				return valor.toFixed(8); 
			}else{
				return 0;
			}
		}else if(!Session.get("satoshitango")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = montoBTC * parseFloat(Session.get("satoshitango").compra.arsbtcround);
				return valor.toFixed(2); 
			}else{
				return 0;
			}
		}else if(!Session.get("satoshitango")){
			return "Cargando...";
		}else{
			return 0;
		} 
	},

	implicitoARSConvert: function(){
		var monto 	 = parseFloat(Session.get("monto")),
			montoBTC = parseFloat(Session.get("montoBTC"));

		if(Session.get("monto") != undefined || Session.get("monto") != null){
			if(monto >= 1){
				var valor = monto / Session.get("pricesDivisas").BTC.ARS;

				return valor.toFixed(8)
			}else{
				return 0;
			}
		}else if(!Session.get("pricesDivisas")){
			return "Cargando...";
		}else{
			return 0;
		}  

		if(Session.get("montoBTC") != undefined || Session.get("montoBTC") != null){
			if(montoBTC >= 0.000000009){
				var valor = montoBTC * Session.get("pricesDivisas").BTC.ARS;

				return valor.toFixed(2)
			}else{
				return 0;
			}
		}else if(!Session.get("pricesDivisas")){
			return "Cargando...";
		}else{
			return 0;
		} 
	}
});