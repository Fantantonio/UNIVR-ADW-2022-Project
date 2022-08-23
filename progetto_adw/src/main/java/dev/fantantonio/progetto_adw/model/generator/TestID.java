package dev.fantantonio.progetto_adw.model.generator;

import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

import javax.persistence.Embeddable;


@Embeddable
public class TestID implements Serializable {
	private static final long serialVersionUID = 3686370648586159204L;
	private Date data;
	private String nome;
	
	public TestID() {}
	
	public TestID(Date data, String nome) {
		super();
		this.data = data;
		this.nome = nome;
	}

	@Override
	public boolean equals(Object o) {
	    if (o == this) {
				return true;
		}
	    if (!(o instanceof TestID)) {
	        return false;
	    }
	    
	    TestID other = (TestID)o;
	    
	    if (Objects.equals(other.getData(), this.getData()) && Objects.equals(other.getNome(), this.getNome())) {
	    	return true;
	    } else {
	    	return false;
	    }
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(data, nome);
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
}