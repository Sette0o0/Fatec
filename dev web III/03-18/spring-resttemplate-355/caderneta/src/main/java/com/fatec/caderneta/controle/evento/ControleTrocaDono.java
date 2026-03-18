package com.fatec.caderneta.controle.evento;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.evento.dto.DonoEventoDto;
import com.fatec.caderneta.servico.ServicoValidaIdentificador;
import com.fatec.caderneta.servico.evento.ServicoBuscaEvento;
import com.fatec.caderneta.servico.evento.ServicoTrocaDono;
import com.fatec.caderneta.servico.usuario.ServicoBuscaUsuario;

import jakarta.validation.Valid;

@RestController
public class ControleTrocaDono {
	
	@Autowired
	private ServicoValidaIdentificador servicoValidaIdentificador;
	
	@Autowired
	private ServicoBuscaEvento servicoBuscaEvento;
	
	@Autowired
	private ServicoBuscaUsuario servicoBuscaUsuario;
	
	@Autowired
	private ServicoTrocaDono servicoTrocaDono;
	
	@PreAuthorize("hasAnyRole('ADMIN','EDITOR')")
	@PutMapping("/trocar/dono/evento")
	public ResponseEntity<?> editar(@Valid @RequestBody DonoEventoDto dto) {
		servicoValidaIdentificador.validar(dto.getIdentificador());
		Usuario novoDono = servicoBuscaUsuario.buscarPorEmail(dto.getEmail());
		Evento evento = servicoBuscaEvento.buscarPorIdentificador(dto.getIdentificador());
		servicoTrocaDono.trocar(evento, novoDono);
		return ResponseEntity.ok().build();
	}
}
