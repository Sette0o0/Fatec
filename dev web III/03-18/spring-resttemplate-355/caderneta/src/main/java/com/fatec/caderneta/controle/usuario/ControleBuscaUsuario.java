package com.fatec.caderneta.controle.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.conversor.usuario.ConversorUsuario;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.usuario.dto.UsuarioDto;
import com.fatec.caderneta.servico.ServicoValidaEmail;
import com.fatec.caderneta.servico.usuario.ServicoBuscaUsuario;

@RestController
public class ControleBuscaUsuario {
	
	@Autowired
	private ServicoValidaEmail servicoValidaEmail;

	@Autowired
	private ServicoBuscaUsuario servicoBuscaUsuario;

	@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping("/listar/usuarios")
	public ResponseEntity<List<UsuarioDto>> buscarTodos() {
		Iterable<Usuario> usuarios = servicoBuscaUsuario.buscarTodos();
		List<UsuarioDto> dtos = ConversorUsuario.converter(usuarios);
		return ResponseEntity.ok(dtos);
	}

	@PreAuthorize("hasAnyRole('ADMIN','LEITOR')")
	@GetMapping("/listar/usuario/{email}")
	public ResponseEntity<UsuarioDto> buscarPorEmail(@PathVariable String email) {
		servicoValidaEmail.validar(email);
		Usuario usuario = servicoBuscaUsuario.buscarPorEmail(email);
		UsuarioDto dto = ConversorUsuario.converter(usuario);
		return ResponseEntity.ok(dto);
	}
}