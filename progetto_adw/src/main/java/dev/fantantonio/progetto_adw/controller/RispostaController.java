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


	@SchemaMapping(typeName = "Query", value = "RandomRisposte")
	
	public List<Risposta> getRandom() {
		List<Risposta> risposte = rispostaRepository.findAll();
		int numberOfAnswer = 4;
		List<Risposta> randomAnswer = new ArrayList<>();
	    List<Risposta> copy = new ArrayList<>(risposte);
		SecureRandom rand = new SecureRandom();
		
		for (int i = 0; i < Math.min(numberOfAnswer, risposte.size()); i++) {
			randomAnswer.add( copy.remove(rand.nextInt(copy.size())));
		
	}
	return randomAnswer;}
	
	
	//@MutationMapping
	@SchemaMapping(typeName = "Mutation", value = "addRisposta")
	Risposta addRisposta(RispostaInput risposta) {
		Optional<Domanda> domanda = domandaRepository.findById("Domanda 12");
		//Domanda domanda = domandaRepository.findById(risposta.domandaId()).orElseThrow(() -> new IllegalArgumentException("Domanda not found"));
		System.out.println("***********************************************************");
		System.out.println(domanda);
		//Risposta r = new Risposta(risposta.id(),risposta.punteggio(),risposta.testo(),domanda );
		Risposta r = new Risposta(risposta.id(),risposta.punteggio(),risposta.testo(), domanda.get());

		return rispostaRepository.save(r);
	}
	
	record RispostaInput(int id, Float punteggio,String testo) {}
	
 }

