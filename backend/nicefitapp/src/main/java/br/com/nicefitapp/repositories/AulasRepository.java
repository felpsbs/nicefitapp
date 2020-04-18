package br.com.nicefitapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.nicefitapp.domain.Aula;

@Repository
public interface AulasRepository extends JpaRepository<Aula, Long> {

}
