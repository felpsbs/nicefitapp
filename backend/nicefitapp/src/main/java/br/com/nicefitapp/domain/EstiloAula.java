package br.com.nicefitapp.domain;

public enum EstiloAula {

	GRUPO("Grupo"),
	INDIVIDUAL("Individual");
	
	private String descricao;
	
	EstiloAula(String descricao) {
		this.descricao = descricao;
	}
	
	public String getDescricao() {
		return descricao;
	}
}
