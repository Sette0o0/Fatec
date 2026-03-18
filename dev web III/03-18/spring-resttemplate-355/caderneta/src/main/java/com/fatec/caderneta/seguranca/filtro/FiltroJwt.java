package com.fatec.caderneta.seguranca.filtro;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fatec.caderneta.modelo.usuario.dto.UsuarioSimplesDto;
import com.fatec.caderneta.servico.ServicoJwt;
import com.fatec.caderneta.servico.UserDetailsServiceImpl;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class FiltroJwt extends OncePerRequestFilter {
	private ServicoJwt servicoJwt;
	private UserDetailsServiceImpl userDetailsService;
	
	public FiltroJwt(ServicoJwt servicoJwt, 
			UserDetailsServiceImpl userDetailsService) {
		this.servicoJwt = servicoJwt;
		this.userDetailsService = userDetailsService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request,
			HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String cabecalho = request.getHeader("Authorization");
		if(cabecalho != null) {
			
			String jwt = cabecalho.substring(7);
			
			UsuarioSimplesDto usuario = servicoJwt.buscaUsuario(jwt);
			
			UserDetails usuarioAutenticado = userDetailsService.
					loadUserByUsername(usuario.getEmail());
			UsernamePasswordAuthenticationToken autenticacao = 
					new UsernamePasswordAuthenticationToken(
					usuarioAutenticado,
					null, usuarioAutenticado.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(autenticacao);	
		}
		
		filterChain.doFilter(request, response);
	}
}

