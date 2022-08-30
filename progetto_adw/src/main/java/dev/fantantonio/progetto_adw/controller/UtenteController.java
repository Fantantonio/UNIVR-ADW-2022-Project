package dev.fantantonio.progetto_adw.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.graphql.data.method.annotation.SchemaMapping;

import dev.fantantonio.progetto_adw.model.Utente;
import dev.fantantonio.progetto_adw.repository.UtenteRepository;

public class UtenteController {
	
private final UtenteRepository utenteRepository;
	
	public UtenteController(UtenteRepository utenteRepository) {
		this.utenteRepository = utenteRepository;
	}
	
	@SchemaMapping(typeName = "Query", value = "tuttiUtenti")
	public List<Utente> findAll() {
		return utenteRepository.findAll();
	}
	
	public Optional<Utente> findById(Integer id) {
		return utenteRepository.findById(id);
	}
}
