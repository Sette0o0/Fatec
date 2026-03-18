package com.fatec.autenticacao.controle.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.autenticacao.modelo.usuario.dto.LoginUsuarioDto;
import com.fatec.autenticacao.servico.ServicoJwt;

import jakarta.validation.Valid;

@RestController
public class ControleAutenticaUsuario {

	@Autowired
	private ServicoJwt servico;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/login/usuario")
	public ResponseEntity<String> autenticar(@Valid @RequestBody LoginUsuarioDto dto) {
		UsernamePasswordAuthenticationToken autenticacao = new UsernamePasswordAuthenticationToken(
				dto.getEmail(), dto.getSenha());
		Authentication autenticacaoValida = authenticationManager.authenticate(autenticacao);
		UserDetails usuarioAutenticado = (UserDetails) autenticacaoValida.getPrincipal();
		String jwt = servico.criar(usuarioAutenticado);
		return ResponseEntity.ok(jwt);
	}
}