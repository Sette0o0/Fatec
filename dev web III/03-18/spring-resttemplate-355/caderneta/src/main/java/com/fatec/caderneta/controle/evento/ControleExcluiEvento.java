package com.fatec.caderneta.controle.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.evento.dto.ExclusaoEventoDto;
import com.fatec.caderneta.servico.ServicoValidaIdentificador;
import com.fatec.caderneta.servico.evento.ServicoBuscaEvento;
import com.fatec.caderneta.servico.evento.ServicoExcluiEvento;

import jakarta.validation.Valid;

@RestController
public class ControleExcluiEvento {
	
	@Autowired
	private ServicoValidaIdentificador servicoValidaIdentificador;

	@Autowired
	private ServicoBuscaEvento servicoBuscaEvento;

	@Autowired
	private ServicoExcluiEvento servicoExcluiEvento;

	@PreAuthorize("hasAnyRole('ADMIN','REMOVEDOR')")
	@DeleteMapping("/excluir/evento")
	public ResponseEntity<?> excluir(@Valid @RequestBody ExclusaoEventoDto dto) {
		servicoValidaIdentificador.validar(dto.getIdentificador());
		Evento evento = servicoBuscaEvento.buscarPorIdentificador(dto.getIdentificador());
		servicoExcluiEvento.excluir(evento);
		return ResponseEntity.ok().build();
	}
}
