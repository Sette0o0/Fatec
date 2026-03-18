package com.fatec.caderneta.servico;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fatec.caderneta.modelo.usuario.dto.UsuarioSimplesDto;

@Service
public class ServicoJwt {

	private String URL_API = "http://localhost:8082/dados/usuario/";

	public UsuarioSimplesDto buscaUsuario(String jwt) {
		
		RestTemplate restTemplate = new RestTemplate();

		String URL = URL_API + jwt;
		
		ResponseEntity<UsuarioSimplesDto> resposta =
                restTemplate.getForEntity(URL, UsuarioSimplesDto.class);
		
		return resposta.getBody();
	}
}


