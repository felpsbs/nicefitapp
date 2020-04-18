package br.com.nicefitapp.controllers.converters;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;

import br.com.nicefitapp.domain.Especialidade;
import br.com.nicefitapp.services.EspecialidadesService;

public class EspecialidadeConverter implements Converter<Long[], List<Especialidade>>{

	@Autowired
	private EspecialidadesService service;
	
	@Override
	public List<Especialidade> convert(Long[] especialidadesId) {
		if (especialidadesId != null && especialidadesId.length > 0) {
			List<Especialidade> esp = service.findBIds(especialidadesId);
			return esp;			
		}
		return null;
	}
	
}
