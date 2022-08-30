package dev.fantantonio.progetto_adw.controller;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import dev.fantantonio.progetto_adw.repository.DomandaRepository;

import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.model.Domanda;
import dev.fantantonio.progetto_adw.model.Risposta;
import dev.fantantonio.progetto_adw.repository.RispostaRepository;


@Controller
@RequestMapping("/risposta")
public class RispostaController {

	private final RispostaRepository rispostaRepository;
	
	private final DomandaRepository domandaRepository;
	
	public RispostaController(RispostaRepository rispostaRepository, DomandaRepository domandaRepository) {
		this.rispostaRepository = rispostaRepository;
		this.domandaRepository = domandaRepository;
	}
	
	@SchemaMapping(typeName = "Query", value = "tutteRisposte")
	public List<Risposta> findAll() {
		return rispostaRepository.findAll();
	}

	//@MutationMapping
	@SchemaMapping(typeName = "Mutation", value = "addRisposta")
	Risposta addRisposta(@Argument RispostaInput risposta) {
		Domanda domanda = domandaRepository.findById(risposta.idDomanda()).orElseThrow(() -> new IllegalArgumentException("Domanda not found"));
		Risposta r = new Risposta(risposta.id(),risposta.punteggio(),risposta.testo(), domanda);

		return rispostaRepository.save(r);
	}
	
	record RispostaInput(int id, Float punteggio,String testo, String idDomanda) {}

}



