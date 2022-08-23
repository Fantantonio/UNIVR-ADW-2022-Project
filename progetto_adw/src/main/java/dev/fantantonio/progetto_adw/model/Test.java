package dev.fantantonio.progetto_adw.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

import dev.fantantonio.progetto_adw.model.generator.TestID;

@Entity
@IdClass(TestID.class)
public class Test {
	@Id
	@Column(nullable = false)
	private Date data;
	
	@Id
	@Column(nullable = false)
	private String nome;
	
	@Column(columnDefinition = "boolean default false")
	private Boolean domandeconnumero;
	
	@Column(columnDefinition = "boolean default false")
	private Boolean ordinecasuale;
	
	
	public Test() {}
	
	public Test(Date data, String nome, Boolean domandeconnumero, Boolean ordinecasuale) {
		super();
		this.data = data;
		this.nome = nome;
		this.domandeconnumero = domandeconnumero;
		this.ordinecasuale = ordinecasuale;
	}
	
	public Date getData() {
		return data;
	}
	
	public void setData(Date data) {
		this.data = data;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Boolean getDomandeconnumero() {
		return domandeconnumero;
	}
	
	public void setDomandeconnumero(Boolean domandeconnumero) {
		this.domandeconnumero = domandeconnumero;
	}
	
	public Boolean getOrdinecasuale() {
		return ordinecasuale;
	}
	
	public void setOrdinecasuale(Boolean ordinecasuale) {
		this.ordinecasuale = ordinecasuale;
	}

}

