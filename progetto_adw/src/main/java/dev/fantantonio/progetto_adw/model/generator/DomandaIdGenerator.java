package dev.fantantonio.progetto_adw.model.generator;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class DomandaIdGenerator implements IdentifierGenerator {

	public Serializable generate(SessionImplementor session, Object object)
	        throws HibernateException {

	    String prefix = "Domanda ";
	    Connection connection = session.connection();
	    // CHECK: https://stackoverflow.com/questions/39368680/i-want-to-find-maximum-number-in-sql-server-i-have-values-with-string-part-and-i
	    try {
	        PreparedStatement query = connection
	                .prepareStatement("SELECT MAX(CAST(SUBSTRING(nome,9,244) AS INT)) AS id FROM domanda;");

	        ResultSet result = query.executeQuery();
	        if (result.next()) {
	            int id = result.getInt("id");
	            String next_id = prefix + Integer.toString(id);
	            return next_id;
	        }

	    } catch (SQLException e) {       
	        e.printStackTrace();
	    }
	    return null;
	}
	@Override
	public Serializable generate(SharedSessionContractImplementor arg0, Object arg1) throws HibernateException {
		// TODO Auto-generated method stub
		return null;
	}
	
}
