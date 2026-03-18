package com.fatec.caderneta.controle.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.usuario.dto.ExclusaoUsuarioDto;
import com.fatec.caderneta.servico.usuario.ServicoBuscaUsuario;
import com.fatec.caderneta.servico.usuario.ServicoExcluiUsuario;

import jakarta.validation.Valid;

@RestController
public class ControleExcluiUsuario {

	@Autowired
	private ServicoBuscaUsuario servicoBuscaUsuario;
	
	@Autowired
	private ServicoExcluiUsuario servicoExcluiUsuario;

	@PreAuthorize("hasAnyRole('ADMIN','REMOVEDOR')")
	@DeleteMapping("/excluir/usuario")
	public ResponseEntity<?> excluir(@Valid @RequestBody ExclusaoUsuarioDto dto) {
		Usuario usuario = servicoBuscaUsuario.buscarPorEmail(dto.getEmail());
		servicoExcluiUsuario.excluir(usuario);
		return ResponseEntity.ok().build();
	}
}





