const Dexie = require('dexie');
// Force debug mode to get async stacks from exceptions.
Dexie.debug = true;
var db = new Dexie("dados");
db.version(1).stores({
		tabela: "++id, imc_min, imc_max, age_min, age_max, sexo, grau, descricao"
});

//Sexo: 0 - Geral | 1 - Masculino | 2 - Feminino
var popular = function() {
db.tabela.bulkPut([
	//Crianças / Jovens Padrão
	{ imc_min: 0.00, imc_max: 18.49, age_min: 2, age_max: 20, sexo: 0, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 18.50, imc_max: 24.99, age_min: 2, age_max: 20, sexo: 0, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 25.00, imc_max: 29.99, age_min: 2, age_max: 20, sexo: 0, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 30.00, imc_max: 999.99, age_min: 2, age_max: 20, sexo: 0, grau: 3, descricao: "Obesidade" },
	//Crianças / Jovens Masculino
	{ imc_min: 0.00, imc_max: 15.00, age_min: 2, age_max: 2, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 15.01, imc_max: 18.10, age_min: 2, age_max: 2, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 18.11, imc_max: 19.20, age_min: 2, age_max: 2, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 19.21, imc_max: 999.99, age_min: 2, age_max: 2, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.70, age_min: 3, age_max: 3, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.71, imc_max: 17.40, age_min: 3, age_max: 3, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 17.41, imc_max: 18.30, age_min: 3, age_max: 3, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 18.31, imc_max: 999.99, age_min: 3, age_max: 3, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.40, age_min: 4, age_max: 4, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.41, imc_max: 16.90, age_min: 4, age_max: 4, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 16.91, imc_max: 17.80, age_min: 4, age_max: 4, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 17.81, imc_max: 999.99, age_min: 4, age_max: 4, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.10, age_min: 5, age_max: 5, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.11, imc_max: 16.80, age_min: 5, age_max: 5, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 16.81, imc_max: 17.90, age_min: 5, age_max: 5, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 17.91, imc_max: 999.99, age_min: 5, age_max: 5, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.00, age_min: 6, age_max: 6, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.01, imc_max: 17.00, age_min: 6, age_max: 6, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 17.01, imc_max: 18.40, age_min: 6, age_max: 6, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 18.41, imc_max: 999.99, age_min: 6, age_max: 6, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.00, age_min: 7, age_max: 7, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.01, imc_max: 17.40, age_min: 7, age_max: 7, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 17.41, imc_max: 19.00, age_min: 7, age_max: 7, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 19.01, imc_max: 999.99, age_min: 7, age_max: 7, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.20, age_min: 8, age_max: 8, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.21, imc_max: 17.80, age_min: 8, age_max: 8, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 17.81, imc_max: 20.00, age_min: 8, age_max: 8, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 20.01, imc_max: 999.99, age_min: 8, age_max: 8, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.30, age_min: 9, age_max: 9, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.31, imc_max: 18.60, age_min: 9, age_max: 9, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 18.61, imc_max: 20.90, age_min: 9, age_max: 9, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 20.91, imc_max: 999.99, age_min: 9, age_max: 9, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.60, age_min: 10, age_max: 10, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.61, imc_max: 19.40, age_min: 10, age_max: 10, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 19.41, imc_max: 22.00, age_min: 10, age_max: 10, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 22.01, imc_max: 999.99, age_min: 10, age_max: 10, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 15.00, age_min: 11, age_max: 11, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 15.01, imc_max: 20.20, age_min: 11, age_max: 11, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 20.21, imc_max: 23.20, age_min: 11, age_max: 11, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 23.21, imc_max: 999.99, age_min: 11, age_max: 11, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 15.50, age_min: 12, age_max: 12, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 15.51, imc_max: 21.00, age_min: 12, age_max: 12, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 21.01, imc_max: 24.10, age_min: 12, age_max: 12, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 24.11, imc_max: 999.99, age_min: 12, age_max: 12, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 16.00, age_min: 13, age_max: 13, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 16.01, imc_max: 21.80, age_min: 13, age_max: 13, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 21.81, imc_max: 25.10, age_min: 13, age_max: 13, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 25.11, imc_max: 999.99, age_min: 13, age_max: 13, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 16.50, age_min: 14, age_max: 14, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 16.51, imc_max: 22.70, age_min: 14, age_max: 14, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 22.71, imc_max: 25.90, age_min: 14, age_max: 14, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 25.91, imc_max: 999.99, age_min: 14, age_max: 14, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 17.20, age_min: 15, age_max: 15, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 17.21, imc_max: 23.50, age_min: 15, age_max: 15, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 23.51, imc_max: 26.80, age_min: 15, age_max: 15, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 26.81, imc_max: 999.99, age_min: 15, age_max: 15, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 17.80, age_min: 16, age_max: 16, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 17.81, imc_max: 24.20, age_min: 16, age_max: 16, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 24.21, imc_max: 27.50, age_min: 16, age_max: 16, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 27.51, imc_max: 999.99, age_min: 16, age_max: 16, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 18.30, age_min: 17, age_max: 17, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 18.31, imc_max: 24.90, age_min: 17, age_max: 17, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 24.91, imc_max: 28.20, age_min: 17, age_max: 17, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 28.21, imc_max: 999.99, age_min: 17, age_max: 17, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 18.80, age_min: 18, age_max: 18, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 18.81, imc_max: 25.60, age_min: 18, age_max: 18, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 25.61, imc_max: 28.80, age_min: 18, age_max: 18, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 28.81, imc_max: 999.99, age_min: 18, age_max: 18, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 19.40, age_min: 19, age_max: 19, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 19.41, imc_max: 26.40, age_min: 19, age_max: 19, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 26.41, imc_max: 29.70, age_min: 19, age_max: 19, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 29.71, imc_max: 999.99, age_min: 19, age_max: 19, sexo: 1, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 19.80, age_min: 20, age_max: 20, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 19.81, imc_max: 27.00, age_min: 20, age_max: 20, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 27.01, imc_max: 30.50, age_min: 20, age_max: 20, sexo: 1, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 30.51, imc_max: 999.99, age_min: 20, age_max: 20, sexo: 1, grau: 3, descricao: "Obesidade" },
	//Crianças / Jovens Feminino
	{ imc_min: 0.00, imc_max: 14.80, age_min: 2, age_max: 2, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.81, imc_max: 18.10, age_min: 2, age_max: 2, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 18.11, imc_max: 19.10, age_min: 2, age_max: 2, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 19.11, imc_max: 999.99, age_min: 2, age_max: 2, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.70, age_min: 3, age_max: 3, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.71, imc_max: 17.20, age_min: 3, age_max: 3, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 17.21, imc_max: 18.40, age_min: 3, age_max: 3, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 18.41, imc_max: 999.99, age_min: 3, age_max: 3, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.10, age_min: 4, age_max: 4, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.11, imc_max: 16.80, age_min: 4, age_max: 4, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 16.81, imc_max: 18.00, age_min: 4, age_max: 4, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 18.01, imc_max: 999.99, age_min: 4, age_max: 4, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 13.80, age_min: 5, age_max: 5, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 13.81, imc_max: 16.80, age_min: 5, age_max: 5, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 16.81, imc_max: 18.30, age_min: 5, age_max: 5, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 18.30, imc_max: 999.99, age_min: 5, age_max: 5, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 13.70, age_min: 6, age_max: 6, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 13.71, imc_max: 17.10, age_min: 6, age_max: 6, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 17.11, imc_max: 18.80, age_min: 6, age_max: 6, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 18.81, imc_max: 999.99, age_min: 6, age_max: 6, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 13.80, age_min: 7, age_max: 7, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 13.81, imc_max: 17.60, age_min: 7, age_max: 7, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 17.61, imc_max: 19.60, age_min: 7, age_max: 7, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 19.61, imc_max: 999.99, age_min: 7, age_max: 7, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.00, age_min: 8, age_max: 8, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.01, imc_max: 18.30, age_min: 8, age_max: 8, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 18.31, imc_max: 20.60, age_min: 8, age_max: 8, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 20.61, imc_max: 999.99, age_min: 8, age_max: 8, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.20, age_min: 9, age_max: 9, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.21, imc_max: 19.20, age_min: 9, age_max: 9, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 19.21, imc_max: 21.70, age_min: 9, age_max: 9, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 21.71, imc_max: 999.99, age_min: 9, age_max: 9, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 14.60, age_min: 10, age_max: 10, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 14.61, imc_max: 20.00, age_min: 10, age_max: 10, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 20.01, imc_max: 22.90, age_min: 10, age_max: 10, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 22.91, imc_max: 999.99, age_min: 10, age_max: 10, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 15.00, age_min: 11, age_max: 11, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 15.01, imc_max: 20.80, age_min: 11, age_max: 11, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 20.81, imc_max: 24.00, age_min: 11, age_max: 11, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 24.01, imc_max: 999.99, age_min: 11, age_max: 11, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 15.50, age_min: 12, age_max: 12, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 15.51, imc_max: 21.70, age_min: 12, age_max: 12, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 21.71, imc_max: 25.10, age_min: 12, age_max: 12, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 25.11, imc_max: 999.99, age_min: 12, age_max: 12, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 15.80, age_min: 13, age_max: 13, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 15.81, imc_max: 22.50, age_min: 13, age_max: 13, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 22.51, imc_max: 26.30, age_min: 13, age_max: 13, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 26.31, imc_max: 999.99, age_min: 13, age_max: 13, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 16.40, age_min: 14, age_max: 14, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 16.41, imc_max: 23.40, age_min: 14, age_max: 14, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 23.41, imc_max: 27.20, age_min: 14, age_max: 14, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 27.21, imc_max: 999.99, age_min: 14, age_max: 14, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 16.90, age_min: 15, age_max: 15, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 16.91, imc_max: 24.00, age_min: 15, age_max: 15, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 24.01, imc_max: 28.00, age_min: 15, age_max: 15, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 28.01, imc_max: 999.99, age_min: 15, age_max: 15, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 17.40, age_min: 16, age_max: 16, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 17.41, imc_max: 24.60, age_min: 16, age_max: 16, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 24.61, imc_max: 28.80, age_min: 16, age_max: 16, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 28.81, imc_max: 999.99, age_min: 16, age_max: 16, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 17.90, age_min: 17, age_max: 17, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 17.91, imc_max: 25.20, age_min: 17, age_max: 17, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 25.21, imc_max: 29.50, age_min: 17, age_max: 17, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 29.51, imc_max: 999.99, age_min: 17, age_max: 17, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 18.30, age_min: 18, age_max: 18, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 18.31, imc_max: 25.60, age_min: 18, age_max: 18, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 25.61, imc_max: 30.30, age_min: 18, age_max: 18, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 30.31, imc_max: 999.99, age_min: 18, age_max: 18, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 18.50, age_min: 19, age_max: 19, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 18.51, imc_max: 26.20, age_min: 19, age_max: 19, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 26.21, imc_max: 30.90, age_min: 19, age_max: 19, sexo: 2, grau: 2, descricao: "Excesso de peso"  },
	{ imc_min: 30.91, imc_max: 999.99, age_min: 19, age_max: 19, sexo: 2, grau: 3, descricao: "Obesidade" },

	{ imc_min: 0.00, imc_max: 18.60, age_min: 20, age_max: 20, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 18.61, imc_max: 26.50, age_min: 20, age_max: 20, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 26.51, imc_max: 31.70, age_min: 20, age_max: 20, sexo: 2, grau: 2, descricao: "Excesso de peso" },
	{ imc_min: 31.71, imc_max: 999.99, age_min: 20, age_max: 20, sexo: 2, grau: 3, descricao: "Obesidade" },
	//Adultos Padrão
	{ imc_min: 0.00, imc_max: 15.99, age_min: 21, age_max: 64, sexo: 0, grau: 3, descricao: "Peso Baixo Grau III" },
	{ imc_min: 16.00, imc_max: 16.99, age_min: 21, age_max: 64, sexo: 0, grau: 2, descricao: "Peso Baixo Grau II" },
	{ imc_min: 17.00, imc_max: 18.49, age_min: 21, age_max: 64, sexo: 0, grau: 1, descricao: "Peso Baixo Grau I" },
	{ imc_min: 18.50, imc_max: 24.99, age_min: 21, age_max: 64, sexo: 0, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 25.00, imc_max: 29.99, age_min: 21, age_max: 64, sexo: 0, grau: 1, descricao: "Acima do Peso" },
	{ imc_min: 30.00, imc_max: 34.99, age_min: 21, age_max: 64, sexo: 0, grau: 2, descricao: "Obesidade Grau I" },
	{ imc_min: 35.00, imc_max: 39.99, age_min: 21, age_max: 64, sexo: 0, grau: 3, descricao: "Obesidade Grau II" },
	{ imc_min: 40.00, imc_max: 999.99, age_min: 21, age_max: 64, sexo: 0, grau: 3, descricao: "Obesidade Grau III" },
	//Adultos Masculino
	{ imc_min: 0.00, imc_max: 20.70, age_min: 21, age_max: 64, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 20.71, imc_max: 26.40, age_min: 21, age_max: 64, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 26.41, imc_max: 27.80, age_min: 21, age_max: 64, sexo: 1, grau: 1, descricao: "Acima do Peso" },
	{ imc_min: 27.81, imc_max: 31.10, age_min: 21, age_max: 64, sexo: 1, grau: 2, descricao: "Obesidade Grau I" },
	{ imc_min: 31.11, imc_max: 999.99, age_min: 21, age_max: 64, sexo: 1, grau: 3, descricao: "Obesidade Grau II" },
	//Adultos Feminino
	{ imc_min: 0.00, imc_max: 19.10, age_min: 21, age_max: 64, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 19.11, imc_max: 25.8, age_min: 21, age_max: 64, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 25.81, imc_max: 27.30, age_min: 21, age_max: 64, sexo: 2, grau: 1, descricao: "Acima do Peso" },
	{ imc_min: 27.31, imc_max: 32.30, age_min: 21, age_max: 64, sexo: 2, grau: 2, descricao: "Obesidade Grau I" },
	{ imc_min: 32.31, imc_max: 999.99, age_min: 21, age_max: 64, sexo: 2, grau: 3, descricao: "Obesidade Grau II" },
	//Idosos Padrão
	{ imc_min: 0.00, imc_max: 22.00, age_min: 65, age_max: 999, sexo: 0, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 22.01, imc_max: 26.99, age_min: 65, age_max: 999, sexo: 0, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 27.00, imc_max: 999.99, age_min: 65, age_max: 999, sexo: 0, grau: 2, descricao: "Acima do Peso" },
	//Idosos Masculino
	{ imc_min: 0.00, imc_max: 22.00, age_min: 65, age_max: 999, sexo: 1, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 22.01, imc_max: 26.99, age_min: 65, age_max: 999, sexo: 1, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 27.00, imc_max: 30.00, age_min: 65, age_max: 999, sexo: 1, grau: 1, descricao: "Acima do Peso" },
	{ imc_min: 30.01, imc_max: 35.00, age_min: 65, age_max: 999, sexo: 1, grau: 2, descricao: "Obesidade Grau I" },
	{ imc_min: 35.01, imc_max: 39.99, age_min: 65, age_max: 999, sexo: 1, grau: 3, descricao: "Obesidade Grau II" },
	{ imc_min: 40.00, imc_max: 999.99, age_min: 65, age_max: 999, sexo: 1, grau: 3, descricao: "Obesidade Grau III" },
	//Idosos Feminino
	{ imc_min: 0.00, imc_max: 22.00, age_min: 65, age_max: 999, sexo: 2, grau: 2, descricao: "Peso Baixo" },
	{ imc_min: 22.01, imc_max: 26.99, age_min: 65, age_max: 999, sexo: 2, grau: 0, descricao: "Peso Normal" },
	{ imc_min: 27.00, imc_max: 32.00, age_min: 65, age_max: 999, sexo: 2, grau: 1, descricao: "Acima do Peso" },
	{ imc_min: 32.01, imc_max: 37.00, age_min: 65, age_max: 999, sexo: 2, grau: 2, descricao: "Obesidade Grau I" },
	{ imc_min: 37.01, imc_max: 41.99, age_min: 65, age_max: 999, sexo: 2, grau: 3, descricao: "Obesidade Grau II" },
	{ imc_min: 42.00, imc_max: 999.99, age_min: 65, age_max: 999, sexo: 2, grau: 3, descricao: "Obesidade Grau III" }
]);
}

db.tabela.get(1, function (item) {
    if(item === undefined) popular();
});

//db.delete();
