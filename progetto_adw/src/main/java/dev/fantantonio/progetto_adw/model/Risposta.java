package dev.fantantonio.progetto_adw.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="risposta")
public class Risposta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(nullable = false)
	private String testo;
	
	//TODO: check punteggio DECIMAL (5 ,4) CHECK ( punteggio <= 1.0) , -- percentuale dei punti della domanda
	private Float punteggio;
	
    @ManyToOne
    @JoinColumn(name = "domanda")
	private Domanda domanda;
	
	
	public Risposta() {}


	public Risposta(Integer id, String testo, Float punteggio, Domanda domanda) {
		super();
		this.id = id;
		this.testo = testo;
		this.punteggio = punteggio;
		this.domanda = domanda;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getTesto() {
		return testo;
	}


	public void setTesto(String testo) {
		this.testo = testo;
	}


	public Float getPunteggio() {
		return punteggio;
	}


	public void setPunteggio(Float punteggio) {
		this.punteggio = punteggio;
	}


	public Domanda getDomanda() {
		return domanda;
	}


	public void setDomanda(Domanda domanda) {
		this.domanda = domanda;
	}
	
	
	
}
