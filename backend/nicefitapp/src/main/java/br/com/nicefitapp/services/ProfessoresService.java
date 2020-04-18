package br.com.nicefitapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nicefitapp.domain.Professor;
import br.com.nicefitapp.exceptions.EmailAlreadyExistException;
import br.com.nicefitapp.exceptions.UserNotFoundException;
import br.com.nicefitapp.repositories.ProfessoresRepository;

@Service
public class ProfessoresService {

	@Autowired
	private ProfessoresRepository professoresRepository;
	
	@Autowired
	private EspecialidadesService especialidadesService;
	
	@Transactional(readOnly = false)
	public Professor cadastrar(Professor professor) {
		try {
			professor.getEspecialidades().addAll(especialidadesService.findBIds(professor.getEspecialidadesId()));
			return professoresRepository.save(professor);
		} catch (DataIntegrityViolationException e) {
			System.out.println(e.getMessage());
			throw new EmailAlreadyExistException("Email já está cadastrado");
		}
	}
	
	@Transactional(readOnly = true)
	public Professor findById(Long id) {
		return professoresRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Professor não encontrado"));
	}

}
