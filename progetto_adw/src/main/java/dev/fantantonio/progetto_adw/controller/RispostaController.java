package dev.fantantonio.progetto_adw.controller;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import dev.fantantonio.progetto_adw.repository.DomandaRepository;


import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.model.Domanda;
import dev.fantantonio.progetto_adw.model.InTest;
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
	public List<Risposta> findAllByOrderByIdAsc() {
		return rispostaRepository.findAllByOrderByIdAsc();
	}

	@SchemaMapping(typeName = "Query", value = "getRisposta")
	List<Risposta> getRisposta(@Argument String idDomanda) {
		List<Risposta> tutteRisposte = rispostaRepository.findAllByOrderByIdAsc();
		List<Risposta> filteredRisposte = new ArrayList<Risposta>();
		for(int i=0; i<tutteRisposte.size(); i ++) {
			if(tutteRisposte.get(i).getDomanda().getNome().equals(idDomanda)) {
				filteredRisposte.add(tutteRisposte.get(i));
			}
		}
		return filteredRisposte;
		
	}
	
	//@MutationMapping
	@SchemaMapping(typeName = "Mutation", value = "addRisposta")
	Risposta addRisposta(@Argument RispostaInput risposta) {
		Domanda domanda = domandaRepository.findById(risposta.idDomanda()).orElseThrow(() -> new IllegalArgumentException("Domanda not found"));
		Risposta r = new Risposta(risposta.testo(),risposta.punteggio(), domanda);

		return rispostaRepository.save(r);
	}
	
	record RispostaInput(Float punteggio,String testo, String idDomanda) {}

}



