package dev.fantantonio.progetto_adw.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.model.Domanda;
import dev.fantantonio.progetto_adw.model.Risposta;
import dev.fantantonio.progetto_adw.repository.DomandaRepository;
import dev.fantantonio.progetto_adw.repository.RispostaRepository;

@Controller
@RequestMapping("/domanda")
public class DomandaController {

	private final DomandaRepository domandaRepository;
	
	public DomandaController(DomandaRepository domandaRepository) {
		this.domandaRepository = domandaRepository;
	}
	
	@SchemaMapping(typeName = "Query", value = "tutteDomande")
	public List<Domanda> findAll() {
		return domandaRepository.findAll();
	}
	

	
	//@MutationMapping
	@SchemaMapping(typeName = "Mutation", value = "addDomanda")
	Domanda addDomanda(@Argument DomandaInput domanda) {
		Domanda d = new Domanda(domanda.nome(), domanda.testo(), domanda.punti(), domanda.ordinecasuale(), domanda.risposteconnumero());
		return domandaRepository.save(d);
	}
	record DomandaInput(String nome, String testo, int punti, Boolean ordinecasuale, Boolean risposteconnumero) {}
}
