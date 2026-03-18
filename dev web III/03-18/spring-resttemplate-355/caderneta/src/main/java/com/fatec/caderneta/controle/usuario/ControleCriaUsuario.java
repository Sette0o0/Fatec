package com.fatec.caderneta.controle.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.caderneta.modelo.conversor.usuario.ConversorUsuarioDto;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.modelo.usuario.dto.CriacaoUsuarioDto;
import com.fatec.caderneta.servico.usuario.ServicoCriaUsuario;
import com.fatec.caderneta.servico.usuario.ServicoExistiUsuario;

import jakarta.validation.Valid;

@RestController
public class ControleCriaUsuario {

	@Autowired
	private ServicoExistiUsuario servicoExistiUsuario;
	
	@Autowired
	private ServicoCriaUsuario servicoCriaUsuario;
	

	@PreAuthorize("hasAnyRole('ADMIN','CRIADOR')")
	@PostMapping("/criar/usuario")
	public ResponseEntity<?> criar(@Valid @RequestBody CriacaoUsuarioDto dto) {
		
		servicoExistiUsuario.buscarPorEmail(dto.getEmail());
		
		Usuario usuario =  ConversorUsuarioDto.converter(dto);
		
		servicoCriaUsuario.criarUsuario(usuario);
		
		return ResponseEntity.ok().build();
	}
}





