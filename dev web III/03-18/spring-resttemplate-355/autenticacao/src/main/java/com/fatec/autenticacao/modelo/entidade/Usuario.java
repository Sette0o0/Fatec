package com.fatec.autenticacao.modelo.entidade;

import java.util.ArrayList;
import java.util.List;

import com.fatec.autenticacao.modelo.conversor.usuario.ConversorUsuario;
import com.fatec.autenticacao.modelo.usuario.dto.UsuarioDto;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String nome;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private String senha;

	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(
			name = "autoridades",
			joinColumns = @JoinColumn(name = "usuario_id")
	)
	@Enumerated(EnumType.STRING)
	@Column(name = "autoridade")
	private List<Autoridade> autoridades = new ArrayList<>();
	
	@Override
	public String toString() {
		UsuarioDto dto = ConversorUsuario.converter(this);
		return dto.toString();
	}
}