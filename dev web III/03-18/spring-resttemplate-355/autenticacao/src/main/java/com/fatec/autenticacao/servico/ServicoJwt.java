package com.fatec.autenticacao.servico;

import java.security.Key;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class ServicoJwt {

	private final String CHAVE_TEXTO = "TEXTOGRANDECOM32BYTES:@$#%kajwtdgcvgdge";
	private final Key CHAVE_SECRETA = Keys.hmacShaKeyFor(CHAVE_TEXTO.getBytes());
	private final long TEMPO_MILI = 2 * 24 * 60 * 60 * 1000;

	private Claims claims(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(CHAVE_SECRETA)
				.build().parseClaimsJws(token).getBody();
	}

	public String getSubject(String token) {
		return claims(token).getSubject();
	}

	@SuppressWarnings("unchecked")
	public List<String> getAuthorities(String token) {
		
		Claims claims = claims(token);
		List<Map<String, String>> authorities = 
				(List<Map<String, String>>) claims.get("authorities");
		List<String> roles = new ArrayList<>();
		for (Map<String, String> map : authorities) {
			roles.add(map.get("authority"));
		}
		return roles;
	}

	public String criar(UserDetails usuarioAutenticado) {

		return Jwts.builder().setSubject(usuarioAutenticado.getUsername())
				.claim("authorities", usuarioAutenticado.getAuthorities())
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + TEMPO_MILI))
				.signWith(CHAVE_SECRETA, SignatureAlgorithm.HS256).compact();

	}
}
