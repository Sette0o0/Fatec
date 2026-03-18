package com.fatec.caderneta.servico.usuario;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.modelo.entidade.Usuario;
import com.fatec.caderneta.repositorio.RepositorioEvento;
import com.fatec.caderneta.repositorio.RepositorioUsuario;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class ServicoExcluiUsuario {

	@Autowired
	private RepositorioUsuario repositorioUsuario;

	@Autowired
	private RepositorioEvento repositorioEvento;

	private void excluirParticipacao(Usuario usuario) {
		for(Evento evento : usuario.getEventosComoParticipante()) {
			evento.getParticipantes().remove(usuario);
		}
		usuario.getEventosComoParticipante().clear();
	}
	
	private void excluirParticipantes(Usuario usuario) {
		for(Evento evento : usuario.getEventosComoDono()) {
			for (Usuario participante : evento.getParticipantes()) {
				participante.getEventosComoParticipante().remove(evento);
			}
			evento.getParticipantes().clear();
		}
	}
	
	private void excluirEventos(Usuario usuario) {
		List<Evento> eventos = new ArrayList<>();
		eventos.addAll(usuario.getEventosComoDono());
		for (Evento evento : eventos) {
			usuario.getEventosComoDono().remove(evento);
			repositorioEvento.delete(evento);
		}
	}

	public void excluir(Usuario usuario) {
		excluirParticipacao(usuario);
		excluirParticipantes(usuario);
		excluirEventos(usuario);
		repositorioUsuario.delete(usuario);
	}
}
