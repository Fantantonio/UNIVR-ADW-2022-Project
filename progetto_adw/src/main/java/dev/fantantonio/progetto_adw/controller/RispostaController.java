package dev.fantantonio.progetto_adw.controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


import dev.fantantonio.progetto_adw.model.Risposta;
import dev.fantantonio.progetto_adw.repository.RispostaRepository;

@Controller
@RequestMapping("/risposta")
public class RispostaController {

	private final RispostaRepository rispostaRepository;
	
	public RispostaController(RispostaRepository rispostaRepository) {
		this.rispostaRepository = rispostaRepository;
	}
	
	@SchemaMapping(typeName = "Query", value = "tutteRisposte")
	public List<Risposta> findAll() {
		return rispostaRepository.findAll();
	}
}
