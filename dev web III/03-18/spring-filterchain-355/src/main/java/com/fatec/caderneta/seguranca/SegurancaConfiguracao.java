package com.fatec.caderneta.seguranca;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SegurancaConfiguracao {
	
	@Bean
	public SecurityFilterChain rotasPublicas(HttpSecurity http) throws Exception {
		
		http.cors(cors -> cors.disable());
		http.csrf(csrf -> csrf.disable());

		http.sessionManagement(session -> session
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		http.authorizeHttpRequests(auth -> auth
				.requestMatchers("/boasvindas").permitAll()
		);
		
		http.authorizeHttpRequests(auth -> auth
				.anyRequest().authenticated());

		return http.build();
	}
}