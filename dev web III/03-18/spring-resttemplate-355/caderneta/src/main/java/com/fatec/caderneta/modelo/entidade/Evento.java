package com.fatec.caderneta.modelo.entidade;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fatec.caderneta.modelo.conversor.evento.ConversorEvento;
import com.fatec.caderneta.modelo.evento.dto.EventoDto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Evento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private LocalDateTime data;
	@Column(nullable = false)
	private LocalDateTime dataCriacao;
	
	@Column(nullable = false, unique = true)
	private String identificador;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "dono_id", nullable = false)
	private Usuario dono;

	@ManyToMany(
			mappedBy = "eventosComoParticipante",
			fetch = FetchType.EAGER
	)
	private List<Usuario> participantes = new ArrayList<>();
	
	@Override
	public String toString() {
		EventoDto dto = ConversorEvento.converter(this);
		return dto.toString();
	}
}