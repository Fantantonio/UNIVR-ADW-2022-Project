package dev.fantantonio.progetto_adw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.fantantonio.progetto_adw.model.Domanda;
import dev.fantantonio.progetto_adw.model.InTest;

@Repository
public interface InTestRepository extends JpaRepository<InTest, Domanda> {

}
