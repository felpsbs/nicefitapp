package br.com.nicefitapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nicefitapp.domain.Professor;

@Repository
public interface ProfessoresRepository extends JpaRepository<Professor, Long> {

}
