package br.com.nicefitapp.exceptions;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.com.nicefitapp.web.responses.StandardResponse;

@ControllerAdvice
public class ExceptionHandlerService {
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<StandardResponse> userNotFound(UserNotFoundException e, HttpServletRequest request) {				
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new StandardResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage()));
	}
	
	@ExceptionHandler(EmailAlreadyExistException.class)
	public ResponseEntity<StandardResponse> userNotFound(EmailAlreadyExistException e, HttpServletRequest request) {				
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new StandardResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage()));
	}
	
	@ExceptionHandler(EspecialidadeNotFoundException.class)
	public ResponseEntity<StandardResponse> userNotFound(EspecialidadeNotFoundException e, HttpServletRequest request) {				
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new StandardResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage()));
	}
	
}
