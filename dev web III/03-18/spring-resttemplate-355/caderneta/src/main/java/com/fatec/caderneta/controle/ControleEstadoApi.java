package com.fatec.caderneta.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControleEstadoApi {
	@GetMapping("/boasvindas")
	public String boasVindas() {
		return "API funcionando!";
	}
}