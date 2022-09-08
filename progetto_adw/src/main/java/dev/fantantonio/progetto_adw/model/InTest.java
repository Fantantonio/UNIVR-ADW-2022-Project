package dev.fantantonio.progetto_adw.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name="intest")
public class InTest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Integer id;

	@Column(name="datatest", nullable = false)
	private String datatest;
	
	@Column(name="nometest", nullable = false)
	private String nometest;

	@ManyToOne
	@JoinColumn(name = "domanda")
	private Domanda domanda;
	
	/*
	@Id
	@Column(name="id")
	private String domanda_id;
	
	@ManyToOne
	@PrimaryKeyJoinColumn(name="domanda")
	private Domanda domanda;
	*/
	
	public InTest() {}

	

	public InTest(String datatest, String nometest, Domanda domanda) {
		super();
		//this.id = id;
		this.datatest = datatest;
		this.nometest = nometest;
		this.domanda = domanda;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDatatest() {
		return datatest;
	}

	public void setDatatest(String datatest) {
		this.datatest = datatest;
	}

	public String getNometest() {
		return nometest;
	}

	public void setNometest(String nometest) {
		this.nometest = nometest;
	}

	public Domanda getDomanda() {
		return domanda;
	}

	public void setDomanda(Domanda domanda) {
		this.domanda = domanda;
	}

}
	
