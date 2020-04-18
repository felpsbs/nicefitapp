package br.com.nicefitapp.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.nicefitapp.domain.Aula;
import br.com.nicefitapp.services.AulasService;
import br.com.nicefitapp.validation.ValidateRequestBody;

@RestController
@RequestMapping("/aulas")
public class AulasController {
	
	@Autowired
	private AulasService service;
	
	@Autowired
	private ValidateRequestBody requestBodyService;

	@PostMapping("/{profId}")
	public ResponseEntity<?> cadastrar(@Valid @RequestBody Aula aula, BindingResult result, @PathVariable Long profId) {
		ResponseEntity<?> hasErrors = requestBodyService.validate(result);
		if (hasErrors != null) return hasErrors;
		return ResponseEntity.status(HttpStatus.OK).body(service.cadastrar(aula, profId));
	}
}
