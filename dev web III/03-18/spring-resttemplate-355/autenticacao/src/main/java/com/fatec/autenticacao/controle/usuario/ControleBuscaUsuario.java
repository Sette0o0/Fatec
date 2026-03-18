package com.fatec.autenticacao.controle.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.autenticacao.modelo.conversor.usuario.ConversorUsuario;
import com.fatec.autenticacao.modelo.entidade.Usuario;
import com.fatec.autenticacao.modelo.usuario.dto.UsuarioSimplesDto;
import com.fatec.autenticacao.servico.ServicoBuscaUsuario;
import com.fatec.autenticacao.servico.ServicoJwt;

@RestController
public class ControleBuscaUsuario {

	@Autowired
	private ServicoJwt servico;

	@Autowired
	private ServicoBuscaUsuario servicoBuscaUsuario;

	@GetMapping("/dados/usuario/{jwt}")
	public ResponseEntity<UsuarioSimplesDto> buscar(@PathVariable String jwt) {
		String email = servico.getSubject(jwt);
		Usuario usuario = servicoBuscaUsuario.buscarPorEmail(email);
		UsuarioSimplesDto simples = ConversorUsuario.converterSimples(usuario);
		return ResponseEntity.ok(simples);
	}
}