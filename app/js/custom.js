$(function() {
	const Dexie = require('dexie');
  // Force debug mode to get async stacks from exceptions.
  Dexie.debug = true;
	var db = new Dexie("dados");
	db.version(1).stores({
			tabela: "++id, imc_min, imc_max, age_min, age_max, sexo, grau, descricao"
	});

	var tipo = "imc";
	var cor = [ "#2ecc71", "#f1c40f", "#e67e22", "#e74c3c" ];
	var sexo = 0;
	var idade = 0;

	$("#tipo").on('change', function() {
		tipo = $(this).val();
	});
	$("#sexo").on('change', function() {
		sexo = parseInt($(this).val());
	});
	$("#limpador").on('click', function() {
		$("#resultado, #veredito").val("");
		$("#cor").css({ "background-color": "#fff" });
	});

	$("#more").on('click', function(e) {
		e.preventDefault();
		$(this).hide();
		$(".more").show();
		var remote = require('electron').remote;
		var win = remote.getCurrentWindow();
    // now i have everything from BrowserWindow api...
		//medida windows
    //win.setSize(600, 400);
		win.setSize(600, 350);
	});

	$("#peso, #altura").on('keyup', function() {
		var self = $(this);
		var result = "";
		var first = true;
		var valor = self.val().replace(/[^\d,.]+/gi, "").replace(/[,]+/gi, ".").split(".");
		if(valor.length > 1) {
			valor.forEach(function(item) {
				result += item;
				if(first) {
					result += ".";
					first = false;
				}
			});
		} else {
			result = valor.join("");
		}
		self.val(result);
	});

	$("#idade").on('keyup', function() {
		var self = $(this);
		var resultado = 0;
		var valor = self.val().replace(/[^\d]+/gi, "");

		if(valor) resultado = parseInt(valor);
		//if(resultado == 1) resultado++;

		self.val(resultado);
		idade = resultado;
	});

	var handleResult = function(value) {
		if(tipo == "imc") {
			var idadeHolder = 25;
			if(idade != 0) idadeHolder = idade;
			db.tabela.where("sexo").equals(sexo).and(function (x) { return (x.imc_min <= parseFloat(value).toFixed(2) && x.imc_max >= parseFloat(value).toFixed(2) && x.age_min <= idadeHolder && x.age_max >= idadeHolder); }).first(function(item) {
				$("#veredito").val(item.descricao);
				$("#cor").css({ "background-color": cor[item.grau] });
			});
		} else {
			$("#veredito").val("Peso Ideal");
			$("#cor").css({ "background-color": cor[0] });
		}
	}

	$("#calculator").on('submit', function(e) {
		e.preventDefault();
		var altura = parseFloat($("#altura").val());
		var peso = parseFloat($("#peso").val());

		if(idade == 1) {
			alertify.reset().closeLogOnClick(true).maxLogItems(1).logPosition("bottom right").error("A idade mínima para o cálculo é 2 anos.");
		} else if(tipo == "imc") {
			if(peso > 0 && altura > 0) {
				var imc = peso / (altura * altura);
				$("#resultado").val(String(imc.toFixed(2)).replace(".00",""));
				handleResult(imc);
			} else {
				alertify.reset().closeLogOnClick(true).maxLogItems(1).logPosition("bottom right").error("Tem de introduzir o seu peso e altura.");
			}
		} else {
			if(altura > 0) {
				var idadeHolder = 25;
				if(idade != 0) idadeHolder = idade;
				db.tabela.where("sexo").equals(sexo).and(function (x) { return (x.age_min <= idadeHolder && x.age_max >= idadeHolder && x.grau == 0); }).first(function(item) {
					var imcIdeal = (parseFloat(item.imc_min) + parseFloat(item.imc_max)) / 2;
					var pesoIdeal = Math.round(imcIdeal * altura * altura);
					$("#resultado").val(String(pesoIdeal)+" Kg");
					handleResult(pesoIdeal);
				});
			} else {
				alertify.reset().closeLogOnClick(true).maxLogItems(1).logPosition("bottom right").error("Tem de introduzir a sua altura.");
			}
		}
	});
});
