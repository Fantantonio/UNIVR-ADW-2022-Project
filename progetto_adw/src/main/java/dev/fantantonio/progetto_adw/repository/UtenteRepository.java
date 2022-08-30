package dev.fantantonio.progetto_adw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.fantantonio.progetto_adw.model.Utente;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Integer>{

}
