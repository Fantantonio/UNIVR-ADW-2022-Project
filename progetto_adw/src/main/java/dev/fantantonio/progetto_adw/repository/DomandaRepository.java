package dev.fantantonio.progetto_adw.repository;


import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import dev.fantantonio.progetto_adw.model.Domanda;


@Repository
public interface DomandaRepository extends JpaRepository<Domanda, String> {
	  //@Query("SELECT MAX(CAST(SUBSTRING(nome,9,244) AS INT)) AS id FROM domanda;")
	 // Domanda findLatestDomanda();
}
