package dev.fantantonio.progetto_adw.repository;


import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import dev.fantantonio.progetto_adw.model.Domanda;


@Repository
public interface DomandaRepository extends JpaRepository<Domanda, String> {
	
}
