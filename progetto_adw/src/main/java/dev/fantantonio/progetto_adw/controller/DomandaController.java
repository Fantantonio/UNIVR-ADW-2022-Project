package dev.fantantonio.progetto_adw.controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dev.fantantonio.progetto_adw.model.Domanda;
import dev.fantantonio.progetto_adw.repository.DomandaRepository;

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
}
