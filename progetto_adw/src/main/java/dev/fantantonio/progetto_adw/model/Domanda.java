package dev.fantantonio.progetto_adw.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Domanda {
	
	@Id
	@Column(name = "nome")

	/* Funzionante ma PK randomico
	//https://stackoverflow.com/questions/57818993/how-to-fix-org-hibernate-id-identifiergenerationexception-unknown-integral-dat
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	@Column(name = "nome")
	*/
	
	private String nome;
	
	@Column(nullable = false)
	private String testo;
	
	//TODO: check DECIMAL (5 ,2) , -- quanti punti vale la domanda . Esempio : 2.0
	private Integer punti;
	
	@Column(columnDefinition = "boolean default false")
	private Boolean ordinecasuale;
	
	@Column(columnDefinition = "boolean default false")
	private Boolean risposteconnumero;
	
	public Domanda() {}

	public Domanda(String nome, String testo, Integer punti, Boolean ordinecasuale, Boolean risposteconnumero) {
		super();
		this.nome = nome;
		this.testo = testo;
		this.punti = punti;
		this.ordinecasuale = ordinecasuale;
		this.risposteconnumero = risposteconnumero;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTesto() {
		return testo;
	}

	public void setTesto(String testo) {
		this.testo = testo;
	}

	public Integer getPunti() {
		return punti;
	}

	public void setPunti(Integer punti) {
		this.punti = punti;
	}

	public Boolean getOrdinecasuale() {
		return ordinecasuale;
	}

	public void setOrdinecasuale(Boolean ordinecasuale) {
		this.ordinecasuale = ordinecasuale;
	}

	public Boolean getRisposteconnumero() {
		return risposteconnumero;
	}

	public void setRisposteconnumero(Boolean risposteconnumero) {
		this.risposteconnumero = risposteconnumero;
	}
	
	
	
	
}
