package dev.fantantonio.progetto_adw.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.fantantonio.progetto_adw.model.Test;
import dev.fantantonio.progetto_adw.model.generator.TestID;


@Repository
public interface TestRepository extends JpaRepository<Test, TestID> {
	
}
