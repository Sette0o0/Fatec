package com.fatec.caderneta.excecao;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fatec.caderneta.excecao.personalizado.CadastroDuplicadoException;
import com.fatec.caderneta.modelo.dto.ErroRespostaDTO;

@ControllerAdvice
public class ManipuladorGlobal {
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ErroRespostaDTO> manipularValidacao(MethodArgumentNotValidException ex) {
		ErroRespostaDTO erroResposta = new ErroRespostaDTO(ex.getTitleMessageCode(), "Verifique os dados enviados");
		ResponseEntity<ErroRespostaDTO> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<ErroRespostaDTO> manipularViolacaoIntegridade(DataIntegrityViolationException ex) {
		ErroRespostaDTO erroResposta = new ErroRespostaDTO(ex.getMessage(), "Verifique os dados enviados");
		ResponseEntity<ErroRespostaDTO> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}
	
	@ExceptionHandler(CadastroDuplicadoException.class)
	public ResponseEntity<ErroRespostaDTO> manipularCadastroDuplicado(CadastroDuplicadoException ex) {
		ErroRespostaDTO erroResposta = new ErroRespostaDTO(ex.getMessage(), ex.getMensagem());
		ResponseEntity<ErroRespostaDTO> resposta = new ResponseEntity<>(erroResposta, HttpStatus.BAD_REQUEST);
		return resposta;
	}
}

