package br.com.nicefitapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nicefitapp.domain.Aula;
import br.com.nicefitapp.domain.Professor;
import br.com.nicefitapp.repositories.AulasRepository;

@Service
public class AulasService {

	@Autowired
	private AulasRepository repository;

	@Autowired
	private ProfessoresService professoresService;

	@Transactional(readOnly = false)
	public Aula cadastrar(Aula aula, Long professorId) {
		Professor professor = professoresService.findById(professorId);
		aula.setProfessor(professor);
		return repository.save(aula);
	}
}
