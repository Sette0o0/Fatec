package com.fatec.autenticacao.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.fatec.autenticacao.servico.ServicoJwt;
import com.fatec.autenticacao.servico.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SegurancaConfiguracao {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http, ServicoJwt jwtServico,
			UserDetailsServiceImpl userDetailsService) throws Exception {
		http
		.csrf(csrf -> csrf.disable())
		.cors(cors -> cors.disable())
		.sessionManagement(session -> session
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		.authorizeHttpRequests(auth -> auth
				.requestMatchers(
				        "/boasvindas",
				        "/login/usuario",
				        "/dados/usuario/**",
				        "/swagger-ui/**",
				        "/v3/api-docs/**",
				        "/swagger-ui.html"
				 )
				.permitAll()
				.anyRequest().denyAll());

		return http.build();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
