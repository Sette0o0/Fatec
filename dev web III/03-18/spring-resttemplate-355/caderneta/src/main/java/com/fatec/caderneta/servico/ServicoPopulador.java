package com.fatec.caderneta.servico;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Autoridade;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioEvento;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

@Service
public class ServicoPopulador {

	@Autowired
	private RepositorioEvento repositorioEvento;
	
	@Autowired
	private RepositorioUsuario repositorioUsuario;
	
	@Autowired
	private PasswordEncoder encoder;
	
	public String criarIdentificador() {
		
		String[] letrasM = { 
			    "A", "B", "C", "D", "E", "F", "G", "H", 
			    "I", "J", "K", "L", "M", "N", "O", "P", 
			    "Q", "R", "S", "T", "U", "V", "W", "X", 
			    "Y", "Z" 
			};
		
		String[] letras = { 
			    "a", "b", "c", "d", "e", "f", "g", "h", 
			    "i", "j", "k", "l", "m", "n", "o", "p", 
			    "q", "r", "s", "t", "u", "v", "w", "x", 
			    "y", "z" 
			};
		
		int[] numeros = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
		
		String identificador = "";
		
		int indice = (int) (Math.random()*letrasM.length);
		identificador = identificador + letrasM[indice];
		indice = (int) (Math.random()*letras.length);
		identificador = identificador + letras[indice];
		indice = (int) (Math.random()*letrasM.length);
		identificador = identificador + letrasM[indice];
		indice = (int) (Math.random()*letras.length);
		identificador = identificador + letras[indice];
		indice = (int) (Math.random()*numeros.length);
		identificador = identificador + numeros[indice];
		indice = (int) (Math.random()*numeros.length);
		identificador = identificador + numeros[indice];
		indice = (int) (Math.random()*numeros.length);
		identificador = identificador + numeros[indice];
		return identificador;
	}
	
	private List<Autoridade> pegarAutoridade() {
		Autoridade[] autoridades = Autoridade.values();
		List<Autoridade> listaEmbaralhada = new ArrayList<>();
		for (int i = 0; i < autoridades.length; i++) {
			if(autoridades[i] != Autoridade.ADMIN) {
				listaEmbaralhada.add(autoridades[i]);
			}
		}
		Collections.shuffle(listaEmbaralhada);
		List<Autoridade> listaComDoisElementos = new ArrayList<>();
		listaComDoisElementos.add(listaEmbaralhada.get(0));
		listaComDoisElementos.add(listaEmbaralhada.get(1));
		return listaComDoisElementos;
	}

	private boolean admin(Usuario usuario) {
		if (usuario.getEmail().equalsIgnoreCase("admin@email.com")) {
			return true;
		} else {
			return false;
		}
	}

	private void criarAdmin() {
		Usuario admin = new Usuario();
		admin.setNome("Usuario Admin");
		admin.setEmail("admin@email.com");
		admin.setSenha(encoder.encode("123456"));
		admin.getAutoridades().add(Autoridade.ADMIN);	
		repositorioUsuario.save(admin);
	}

	private void criarEventosAdmin() {
		Usuario admin = repositorioUsuario.buscarPorEmail("admin@email.com").get();
		for (int i = 1; i <= 5; i++) {
			Evento evento = new Evento();
			evento.setNome("Evento do Admin " + i);
			evento.setData(LocalDateTime.now().plusMonths(i));
			evento.setDataCriacao(LocalDateTime.now());
			evento.setDono(admin);
			evento.setIdentificador(criarIdentificador());
			repositorioEvento.save(evento);
		}
	}

	private void criarUsuarios() {
		for (int i = 1; i <= 5; i++) {
			Usuario usuarioComum = new Usuario();
			usuarioComum.setNome("Usuario Comum " + i);
			usuarioComum.setEmail("comum" + i + "@email.com");
			usuarioComum.setSenha(encoder.encode("123456"));
			usuarioComum.getAutoridades().addAll(pegarAutoridade());
			repositorioUsuario.save(usuarioComum);
		}
	}

	private void criarEventosUsuarios() {
		Iterable<Usuario> usuarios = repositorioUsuario.findAll();
		for (Usuario usuario : usuarios) {
			if (!admin(usuario)) {
				Evento evento = new Evento();
				evento.setNome("Evento do " + usuario.getNome());
				evento.setData(LocalDateTime.now().plusMonths(6));
				evento.setDataCriacao(LocalDateTime.now());
				evento.setDono(usuario);
				evento.setIdentificador(criarIdentificador());
				repositorioEvento.save(evento);
			}
		}
	}

	private void incluirAdminComoParticipante() {
		Usuario admin = repositorioUsuario.buscarPorEmail("admin@email.com").get();
		Iterable<Usuario> usuarios = repositorioUsuario.findAll();
		for (Usuario usuario : usuarios) {
			if (!admin(usuario)) {
				admin.getEventosComoParticipante().addAll(usuario.getEventosComoDono());

			}
		}
		repositorioUsuario.save(admin);
	}

	private void incluirUsuariosComoParticipantes() {
		Usuario admin = repositorioUsuario.buscarPorEmail("admin@email.com").get();
		Iterable<Usuario> usuarios = repositorioUsuario.findAll();
		for (Usuario usuario : usuarios) {
			if (!admin(usuario)) {
				usuario.getEventosComoParticipante().addAll(admin.getEventosComoDono());
			}
			repositorioUsuario.save(usuario);
		}
	}

	public void incluirParticipantesAlemDoAdmin() {
		Iterable<Usuario> usuarios = repositorioUsuario.findAll();
		Set<Usuario> comuns = new HashSet<>();
		for (Usuario usuario : usuarios) {
			if (!admin(usuario)) {
				comuns.add(usuario);
			}
		}

		for (Usuario usuario : comuns) {
			for (Usuario outro : comuns) {
				if (usuario != outro) {
					usuario.getEventosComoParticipante().addAll(outro.getEventosComoDono());
				}
			}
			repositorioUsuario.save(usuario);
		}
	}

	public void popularDados() {
		criarAdmin();
		criarUsuarios();
		criarEventosAdmin();
		criarEventosUsuarios();
		incluirAdminComoParticipante();
		incluirUsuariosComoParticipantes();
		incluirParticipantesAlemDoAdmin();
	}
}
