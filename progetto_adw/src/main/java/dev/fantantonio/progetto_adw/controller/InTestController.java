package dev.fantantonio.progetto_adw.controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.model.InTest;
import dev.fantantonio.progetto_adw.repository.InTestRepository;



@Controller
@RequestMapping("/intest")
public class InTestController {

	private final InTestRepository inTestRepository;
	
	public InTestController(InTestRepository inTestRepository) {
		this.inTestRepository = inTestRepository;
	}
	
	
	@SchemaMapping(typeName = "Query", value = "getDomandeOfTest")
	List<InTest> getDomandeOfTest(@Argument String datatest, @Argument String nometest) {
		return inTestRepository.findByDatatestAndNometest(datatest, nometest);
	}
	
	
	record InTestInput(int id, String idDomanda, String dataTest, String nomeTest) {}

	
	@SchemaMapping(typeName = "Query", value = "tuttiInTest")
	public List<InTest> findAll() {
		return inTestRepository.findAll();
	}
	
}
