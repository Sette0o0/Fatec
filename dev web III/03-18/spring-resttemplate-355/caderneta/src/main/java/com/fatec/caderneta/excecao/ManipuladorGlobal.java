package com.fatec.caderneta.excecao;

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

import com.fatec.caderneta.modelo.resposta.dto.ErroRespostaDto;

@ControllerAdvice
public class ManipuladorGlobal {

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<ErroRespostaDto> validarAutoridades(IllegalArgumentException ex) {
		ErroRespostaDto erroResposta = new ErroRespostaDto("Autoridade não existe no sistema.",
				"Verfique se a autoridade informada está na lista de autoridades possíveis");
		ResponseEntity<ErroRespostaDto> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}

	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<ErroRespostaDto> buscarEntidades(NoSuchElementException ex) {
		ErroRespostaDto erroResposta = new ErroRespostaDto(
				"Falha no processamento dos dados ou elemento não encontrado na base de dados", ex.getMessage());
		ResponseEntity<ErroRespostaDto> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
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
	public ResponseEntity<ErroRespostaDto> salvarEntidades(DataIntegrityViolationException ex) {
		ErroRespostaDto erroResposta = new ErroRespostaDto(ex.getMessage(),
				"Ocorreu uma falha ao salvar os dados no banco de dados. Verifique se seus dados estão corretos");
		ResponseEntity<ErroRespostaDto> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}
}
