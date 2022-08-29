package dev.fantantonio.progetto_adw.controller;
import org.springframework.graphql.data.method.annotation.Argument;

import java.util.List;

import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.model.Test;
import dev.fantantonio.progetto_adw.repository.TestRepository;

@Controller
@RequestMapping("/test")
public class TestController {

	private final TestRepository testRepository;
	
	public TestController(TestRepository testRepository) {
		this.testRepository = testRepository;
	}
	
	@SchemaMapping(typeName = "Query", value = "tuttiTest")
	public List<Test> findAll() {
		return testRepository.findAll();
	}
	
	//@MutationMapping
	@SchemaMapping(typeName = "Mutation", value = "addTest")
	Test addTest(@Argument TestInput test) {
		Test t = new Test(test.data(), test.nome(),test.domandeconnumero, test.ordinecasuale());
		return testRepository.save(t);
	}
	record TestInput(String data, String nome, Boolean domandeconnumero,boolean ordinecasuale) {}
}
