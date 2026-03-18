package com.fatec.caderneta.controle.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.usuario.dto.EdicaoNomeDto;
import com.fatec.caderneta.modelo.usuario.dto.EdicaoSenhaDto;
import com.fatec.caderneta.servico.usuario.ServicoBuscaUsuario;
import com.fatec.caderneta.servico.usuario.ServicoEditaNome;
import com.fatec.caderneta.servico.usuario.ServicoEditaSenha;
import com.fatec.caderneta.servico.usuario.ServicoValidaSenha;

import jakarta.validation.Valid;

@RestController
public class ControleEditaUsuario {

	@Autowired
	private ServicoBuscaUsuario servicoBuscaUsuario;
	
	@Autowired
	private ServicoEditaNome servicoEditaNome;
	
	@Autowired
	private ServicoValidaSenha servicoValidaSenha;
	
	@Autowired
	private ServicoEditaSenha servicoEditaSenha;
	
	@PreAuthorize("hasAnyRole('ADMIN','EDITOR')")
	@PutMapping("/editar/senha")
	public ResponseEntity<?> editarSenha(@Valid @RequestBody EdicaoSenhaDto dto) {
		Usuario usuario = servicoBuscaUsuario.buscarPorEmail(dto.getEmail());
		servicoValidaSenha.validar(usuario, dto.getSenhaAntiga());
		servicoEditaSenha.editar(usuario, dto.getNovaSenha());
		return ResponseEntity.ok().build();
	}
	
	@PreAuthorize("hasAnyRole('ADMIN','EDITOR')")
	@PutMapping("/editar/nome")
	public ResponseEntity<?> editarNome(@Valid @RequestBody EdicaoNomeDto dto) {
		Usuario usuario = servicoBuscaUsuario.buscarPorEmail(dto.getEmail());
		servicoEditaNome.editar(usuario, dto.getNome());
		return ResponseEntity.ok().build();
	}
}