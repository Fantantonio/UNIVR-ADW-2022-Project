package dev.fantantonio.progetto_adw.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import dev.fantantonio.progetto_adw.model.generator.TestID;

@Entity
@Table(name="test")
@IdClass(TestID.class)
public class Test {
	@Id
	@Column(name="data", nullable = false)
	private String data;
	
	@Id
	@Column(name="nome", nullable = false)
	private String nome;
	
	@Column(columnDefinition = "boolean default false")
	private Boolean domandeconnumero;
	
	@Column(columnDefinition = "boolean default false")
	private Boolean ordinecasuale;

	
	
	public Test() {}
	
	public Test(String data, String nome, Boolean domandeconnumero, Boolean ordinecasuale) {
		super();
		this.data = data;
		this.nome = nome;
		this.domandeconnumero = domandeconnumero;
		this.ordinecasuale = ordinecasuale;
	}
	
	public String getData() {
		return data;
	}
	
	public void setData(String data) {
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

