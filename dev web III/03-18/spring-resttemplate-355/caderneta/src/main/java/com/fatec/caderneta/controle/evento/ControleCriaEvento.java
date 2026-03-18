package com.fatec.caderneta.controle.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.conversor.evento.ConversorEventoDto;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.evento.dto.CriacaoEventoDto;
import com.fatec.caderneta.servico.ServicoCriaIdentificador;
import com.fatec.caderneta.servico.evento.ServicoCriaEvento;

import jakarta.validation.Valid;

@RestController
public class ControleCriaEvento {
	
	@Autowired
	private ServicoCriaIdentificador servicoCriaIdentificador;
	
	@Autowired
	private ServicoCriaEvento servicoCriaEvento;

	@PreAuthorize("hasAnyRole('ADMIN','CRIADOR')")
	@PostMapping("/criar/evento")
	public ResponseEntity<?> criar(@Valid @RequestBody CriacaoEventoDto dto) {
		Evento evento = ConversorEventoDto.converter(dto);
		evento.setIdentificador(servicoCriaIdentificador.criar());
		servicoCriaEvento.criar(evento, dto.getEmail().trim());
		return ResponseEntity.ok().build();
	}
}
