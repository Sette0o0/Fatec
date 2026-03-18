package com.fatec.autenticacao.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fatec.autenticacao.modelo.entidade.Usuario;

public interface RepositorioUsuario extends JpaRepository<Usuario, Long> {
	@Query("SELECT u FROM Usuario u WHERE u.email = :email")
	Optional<Usuario> buscarPorEmail(@Param("email") String email);

	@Query("SELECT u FROM Usuario u WHERE u.email = :email AND u.senha = :senha")
	Optional<Usuario> buscarPorEmailSenha(@Param("email") String email, @Param("senha") String senha);
}