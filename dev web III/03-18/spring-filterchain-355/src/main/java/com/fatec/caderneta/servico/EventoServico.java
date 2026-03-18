package com.fatec.caderneta.servico;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.caderneta.excecao.personalizado.CadastroDuplicadoException;
import com.fatec.caderneta.modelo.dto.EventoDTO;
import com.fatec.caderneta.modelo.entidade.Evento;
import com.fatec.caderneta.repositorio.EventoRepositorio;

@Service
public class EventoServico {
	@Autowired
	private EventoRepositorio repositorio;
	@Autowired
	private CalendarioServico calendarioServico;

	private Evento converterEventoDTO(EventoDTO eventoDTO) {
		LocalDateTime dataEvento = calendarioServico.converterCalendario(eventoDTO.getCalendario());

		Evento evento = new Evento();
		evento.setId(eventoDTO.getId());
		evento.setNome(eventoDTO.getNome());
		evento.setDataEvento(dataEvento);

		return evento;
	}

	public Evento criarEvento(EventoDTO eventoDto) {
		Evento evento = converterEventoDTO(eventoDto);
		if (evento.getId() != null && repositorio.existsById(evento.getId())) {
			throw new CadastroDuplicadoException("Duplicate registration attempt",
					"ID do evento já existe na base de dados");
		}
		Evento eventoSalvo = repositorio.save(evento);
		return eventoSalvo;
	}

	public void excluirEvento(EventoDTO eventoDto) {
		repositorio.deleteById(eventoDto.getId());
	}
}