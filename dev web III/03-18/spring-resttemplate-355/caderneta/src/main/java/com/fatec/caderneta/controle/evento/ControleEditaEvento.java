package com.fatec.caderneta.controle.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.evento.dto.EdicaoEventoDto;
import com.fatec.caderneta.servico.ServicoValidaIdentificador;
import com.fatec.caderneta.servico.evento.ServicoBuscaEvento;
import com.fatec.caderneta.servico.evento.ServicoEditaEvento;

import jakarta.validation.Valid;

@RestController
public class ControleEditaEvento {
	

	@Autowired
	private ServicoValidaIdentificador servicoValidaIdentificador;
	
	@Autowired
	private ServicoBuscaEvento servicoBuscaEvento;
	
	@Autowired
	private ServicoEditaEvento servicoEditaEvento;

	@PreAuthorize("hasAnyRole('ADMIN','EDITOR')")
	@PutMapping("/editar/evento")
	public ResponseEntity<?> editar(@Valid @RequestBody EdicaoEventoDto dto) {
		servicoValidaIdentificador.validar(dto.getIdentificador());
		Evento evento = servicoBuscaEvento.buscarPorIdentificador(dto.getIdentificador());
		servicoEditaEvento.editar(evento,dto);
		return ResponseEntity.ok().build();
	}
}
