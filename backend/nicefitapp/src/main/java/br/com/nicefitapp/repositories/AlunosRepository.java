package br.com.nicefitapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nicefitapp.domain.Aluno;

@Repository
public interface AlunosRepository extends JpaRepository<Aluno, Long> {

}
