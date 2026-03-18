package com.fatec.autenticacao.servico;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fatec.autenticacao.modelo.entidade.Usuario;
import com.fatec.autenticacao.repositorio.RepositorioUsuario;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private RepositorioUsuario repositorio;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		
		Optional<Usuario> usuario = repositorio.buscarPorEmail(username);
		
		if(!usuario.isPresent()) {
			throw new NoSuchElementException(
					"Usuário não existe "
					+ "na base de dados para o e-mail: " + username);
		}
		
		Usuario usuarioEncontrado = usuario.get();
		String[] autoridades = new String[usuarioEncontrado.getAutoridades().size()];
		
		for (int i = 0; i < autoridades.length; i++) {
			autoridades[i] = usuarioEncontrado.getAutoridades().get(i).toString();
		}
		
		return User
				.builder()
				.username(usuarioEncontrado.getEmail())
				.password(usuarioEncontrado.getSenha())
				.roles(autoridades)
				.build();
	}
}