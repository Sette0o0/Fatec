package com.fatec.autenticacao.excecao;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fatec.autenticacao.modelo.resposta.dto.RespostaDto;

import io.jsonwebtoken.ExpiredJwtException;

@ControllerAdvice
public class ManipuladorGlobal {

	@ExceptionHandler(ExpiredJwtException.class)
	public ResponseEntity<RespostaDto> validarExpiracao(ExpiredJwtException ex) {
		RespostaDto erroResposta = new RespostaDto(ex.getMessage(), "JWT expirado!");
		ResponseEntity<RespostaDto> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}

	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<RespostaDto> buscarEntidades(NoSuchElementException ex) {
		RespostaDto erroResposta = new RespostaDto(
				"Falha no processamento dos dados ou elemento não encontrado na base de dados", ex.getMessage());
		ResponseEntity<RespostaDto> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Object> validarDtos(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String nomeCampo = ((FieldError) error).getField();
			String mensagem = error.getDefaultMessage();
			errors.put(nomeCampo, mensagem);
		});
		return ResponseEntity.badRequest().body(errors);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<RespostaDto> salvarEntidades(DataIntegrityViolationException ex) {
		RespostaDto erroResposta = new RespostaDto(ex.getMessage(),
				"Ocorreu uma falha ao salvar os dados no banco de dados. Verifique se seus dados estão corretos");
		ResponseEntity<RespostaDto> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}
}