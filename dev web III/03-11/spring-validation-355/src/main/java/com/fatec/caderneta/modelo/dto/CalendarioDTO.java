package com.fatec.caderneta.modelo.dto;

import lombok.Data;

@Data
public class CalendarioDTO {
    private String dia;
    private String mes;
    private String ano;
    private String hora;
    private String minuto;
    private String segundo;
    private String diaSemana;
}