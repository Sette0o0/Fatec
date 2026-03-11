package com.fatec.banco.modelo.dto;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;

@Data
public class CorrentistaDto {
    @NotBlank(message = "Nome do correntista em branco")
    private String nome;
}
