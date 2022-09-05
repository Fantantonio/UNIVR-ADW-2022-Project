package dev.fantantonio.progetto_adw.controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.model.Domanda;
import dev.fantantonio.progetto_adw.model.InTest;
import dev.fantantonio.progetto_adw.model.Test;
import dev.fantantonio.progetto_adw.model.generator.TestID;
import dev.fantantonio.progetto_adw.repository.InTestRepository;
import dev.fantantonio.progetto_adw.repository.DomandaRepository;
import dev.fantantonio.progetto_adw.repository.TestRepository;




@Controller
@RequestMapping("/intest")
public class InTestController {

	private final InTestRepository inTestRepository;
	private final DomandaRepository domandaRepository;
	private final TestRepository testRepository;
	
	public InTestController(InTestRepository inTestRepository, DomandaRepository domandaRepository, TestRepository testRepository) {
		this.inTestRepository = inTestRepository;
		this.domandaRepository = domandaRepository;
		this.testRepository = testRepository;
	}
	
	
	@SchemaMapping(typeName = "Query", value = "getDomandeOfTest")
	List<InTest> getDomandeOfTest(@Argument String datatest, @Argument String nometest) {
		return inTestRepository.findByDatatestAndNometest(datatest, nometest);
	}
	
	
//	record InTestInput(int id, String idDomanda, String dataTest, String nomeTest) {}

	
	@SchemaMapping(typeName = "Query", value = "tuttiInTest")
	public List<InTest> findAll() {
		return inTestRepository.findAll();
	}
	
	@SchemaMapping(typeName = "Mutation", value = "addInTest")
	InTest addInTest(@Argument InTestInput inTest) {
		Domanda domanda = domandaRepository.findById(inTest.idDomanda()).orElseThrow(() -> new IllegalArgumentException("Domanda not found"));
		TestID testid = new TestID(inTest.dataTest, inTest.nomeTest);
		Test test = testRepository.findById(testid).orElseThrow(() -> new IllegalArgumentException("Test not found"));
		
		InTest t = new InTest(inTest.id(),test.getData(), test.getNome(), domanda);
		return inTestRepository.save(t);
	}
	
	record InTestInput(int id, String idDomanda, String dataTest, String nomeTest) {}
	
	
	
}
