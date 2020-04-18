package br.com.nicefitapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.nicefitapp.domain.Especialidade;
import br.com.nicefitapp.domain.Professor;
import br.com.nicefitapp.exceptions.EspecialidadeNotFoundException;
import br.com.nicefitapp.repositories.EspecialidadeRepository;

@Service
public class EspecialidadesService {

	@Autowired
	private EspecialidadeRepository repository;
	
	@Transactional(readOnly = false)
	public Especialidade cadastrar(Especialidade especialidade) {
		return repository.save(especialidade);
	}

	@Transactional(readOnly = true)
	public List<Professor> findProfessoresByEspecialidade(Long especialidadeId) {
		Especialidade especialidade = repository.findById(especialidadeId).orElseThrow(() -> new EspecialidadeNotFoundException("Especialidade não encontrada"));
		return especialidade.getProfessores();
	}
	
	@Transactional(readOnly = true)
	public List<Especialidade> findBIds(Long[] id) {
		return repository.findByIds(id);
	}

	public List<Especialidade> findAll() {
		return repository.findAll();
	}	
	

}
