package dev.fantantonio.progetto_adw.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.apache.commons.codec.digest.DigestUtils;


@Entity
@Table(name="utente")
public class Utente {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(unique = true, nullable = false)
	private String nomeutente;
	
	@Column(unique = true, nullable = false)
	private String email;

	@Column(nullable = false)
	private String password;
	
	@Column(nullable = false)
	private Integer ruolo; // 0 => prof., 1 => studente
	
	
	public Utente() {}

	public Utente(Integer id, String nomeutente, String email, String password, Integer ruolo) {
		super();
		this.id = id;
		this.nomeutente = nomeutente;
		this.email = email;
		this.password = DigestUtils.md5Hex(password);
		this.ruolo = ruolo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNomeutente() {
		return nomeutente;
	}

	public void setNomeutente(String nomeutente) {
		this.nomeutente = nomeutente;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = DigestUtils.md5Hex(password);
	}

	public Integer getRuolo() {
		return ruolo;
	}

	public void setRuolo(Integer ruolo) {
		this.ruolo = ruolo;
	}
	
}
