package br.com.nicefitapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nicefitapp.domain.Aluno;
import br.com.nicefitapp.exceptions.EmailAlreadyExistException;
import br.com.nicefitapp.repositories.AlunosRepository;

@Service
public class AlunosService {

	@Autowired
	private AlunosRepository repository;
	
	@Transactional(readOnly = false)
	public Aluno cadastrar(Aluno aluno) {
		try{
			return repository.save(aluno);
		} catch (DataIntegrityViolationException e) {
			throw new EmailAlreadyExistException("Email já está cadastrado");
		}
	}
}
