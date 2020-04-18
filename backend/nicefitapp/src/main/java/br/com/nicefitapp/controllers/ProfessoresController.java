package br.com.nicefitapp.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nicefitapp.domain.Professor;
import br.com.nicefitapp.services.ProfessoresService;
import br.com.nicefitapp.validation.ValidateRequestBody;

@RestController
@RequestMapping("/professores")
public class ProfessoresController {

	@Autowired
	private ProfessoresService service;
	
	@Autowired
	private ValidateRequestBody requestBodyService;
	
	@PostMapping
	public ResponseEntity<?> cadastrar(@Valid @RequestBody Professor professor, BindingResult result) {
		ResponseEntity<?> hasErrors = requestBodyService.validate(result);
		if (hasErrors != null) return hasErrors;
		return ResponseEntity.status(HttpStatus.OK).body(service.cadastrar(professor));		
	}
	
}
