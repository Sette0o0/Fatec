package com.fatec.caderneta.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fatec.caderneta.servico.ServicoPopulador;

@Configuration
public class InicializacaoConfiguracao {
	@Autowired
	private ServicoPopulador servico;

	@Bean
	public CommandLineRunner criarAdminAoIniciar() {
		return args -> {
			servico.popularDados();
		};
	}
}