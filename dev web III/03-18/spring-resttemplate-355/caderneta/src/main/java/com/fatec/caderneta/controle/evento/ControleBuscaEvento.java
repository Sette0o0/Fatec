package com.fatec.caderneta.controle.evento;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.conversor.evento.ConversorEvento;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.evento.dto.EventoDto;
import com.fatec.caderneta.servico.ServicoValidaIdentificador;
import com.fatec.caderneta.servico.evento.ServicoBuscaEvento;

@RestController
public class ControleBuscaEvento {

	@Autowired
	private ServicoValidaIdentificador servicoValidaIdentificador;

	@Autowired
	private ServicoBuscaEvento servicoBuscaEvento;

	@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping("/listar/eventos")
	public ResponseEntity<List<EventoDto>> buscarTodos() {
		Iterable<Evento> eventos = servicoBuscaEvento.buscarTodos();
		List<EventoDto> dtos = ConversorEvento.converter(eventos);
		return ResponseEntity.ok(dtos);
	}

	@PreAuthorize("hasAnyRole('ADMIN','LEITOR')")
	@GetMapping("/listar/evento/{identificador}")
	public ResponseEntity<EventoDto> buscarPorIdentificador(@PathVariable String identificador) {
		servicoValidaIdentificador.validar(identificador);
		Evento evento = servicoBuscaEvento.buscarPorIdentificador(identificador);
		EventoDto dto = ConversorEvento.converter(evento);
		return ResponseEntity.ok(dto);
	}

}