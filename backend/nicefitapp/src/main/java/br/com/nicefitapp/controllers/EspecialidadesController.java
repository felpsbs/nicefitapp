package br.com.nicefitapp.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nicefitapp.domain.Especialidade;
import br.com.nicefitapp.services.EspecialidadesService;
import br.com.nicefitapp.validation.ValidateRequestBody;

@RestController
@RequestMapping("/especialidades")
public class EspecialidadesController {

	@Autowired
	private EspecialidadesService service;
	
	@Autowired
	private ValidateRequestBody requestBodyService;
	
	@PostMapping
	public ResponseEntity<?> cadastrar(@Valid @RequestBody Especialidade especialidade, BindingResult result) {
		ResponseEntity<?> hasErrors = requestBodyService.validate(result);
		if (hasErrors != null) return hasErrors;
		return ResponseEntity.status(HttpStatus.OK).body(service.cadastrar(especialidade));		
	}
	
	@GetMapping
	public ResponseEntity<?> findAll() {
		return ResponseEntity.status(HttpStatus.OK).body(service.findAll());		
	}
	
	@GetMapping("/{especialidadeId}")
	public ResponseEntity<?> findProfessoresByEspecialidade(@PathVariable Long especialidadeId) {
		return ResponseEntity.status(HttpStatus.OK).body(service.findProfessoresByEspecialidade(especialidadeId));		
	}
	
	
}
