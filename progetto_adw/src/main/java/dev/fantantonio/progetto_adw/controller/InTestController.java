package dev.fantantonio.progetto_adw.controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.repository.DomandaRepository;


import dev.fantantonio.progetto_adw.controller.TestController.TestInput;
import dev.fantantonio.progetto_adw.model.Domanda;
import dev.fantantonio.progetto_adw.model.InTest;
import dev.fantantonio.progetto_adw.model.Test;
import dev.fantantonio.progetto_adw.repository.InTestRepository;

@Controller
@RequestMapping("/intest")
public class InTestController {

	private final InTestRepository inTestRepository;
	private final DomandaRepository domandaRepository;

	
	public InTestController(InTestRepository inTestRepository, DomandaRepository domandaRepository) {
		this.inTestRepository = inTestRepository;
		this.domandaRepository = domandaRepository;
	}
	
	@SchemaMapping(typeName = "Query", value = "tuttiInTest")
	public List<InTest> findAll() {
		return inTestRepository.findAll();
	}
	
	
	@SchemaMapping(typeName = "Mutation", value = "addInTest")
	InTest addInTest(@Argument InTestInput inTest) {
		Domanda domanda = domandaRepository.findById(inTest.idDomanda()).orElseThrow(() -> new IllegalArgumentException("Domanda not found"));
		InTest t = new InTest(inTest.id(),inTest.dataTest(), inTest.nomeTest(), domanda);
		return inTestRepository.save(t);
	}
	record InTestInput(int id, String idDomanda, String dataTest, String nomeTest) {}
}
