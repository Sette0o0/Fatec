package com.fatec.caderneta.controle.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.entidade.Autoridade;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.usuario.dto.AutoridadeDto;
import com.fatec.caderneta.servico.ServicoBuscaAutoridade;
import com.fatec.caderneta.servico.ServicoVerificaAutoridade;
import com.fatec.caderneta.servico.usuario.ServicoBuscaUsuario;
import com.fatec.caderneta.servico.usuario.ServicoIncluiAutoridade;

import jakarta.validation.Valid;

@RestController
public class ControleIncluiAutoridade {

	@Autowired
	private ServicoBuscaUsuario servicoBuscaUsuario;

	@Autowired
	private ServicoBuscaAutoridade servicoBuscaAutoridade;

	@Autowired
	private ServicoVerificaAutoridade servicoVerificaAutoridade;

	@Autowired
	private ServicoIncluiAutoridade servicoIncluiAutoridade;

	@PreAuthorize("hasAnyRole('ADMIN','EDITOR')")
	@PutMapping("/incluir/autoridade")
	public ResponseEntity<?> incluirAutoridade(@Valid @RequestBody AutoridadeDto dto) {
		Usuario usuario = servicoBuscaUsuario.buscarPorEmail(dto.getEmail());
		Autoridade autoridade = servicoBuscaAutoridade.buscar(dto.getAutoridade().toUpperCase());
		servicoVerificaAutoridade.existeAutoridade(usuario, autoridade);
		servicoIncluiAutoridade.incluir(usuario, autoridade);
		return ResponseEntity.ok().build();
	}
}