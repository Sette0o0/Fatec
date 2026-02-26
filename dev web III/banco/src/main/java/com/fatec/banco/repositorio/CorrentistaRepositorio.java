package com.fatec.banco.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fatec.banco.modelo.CorrentistaModelo;

public interface CorrentistaRepositorio extends JpaRepository<CorrentistaModelo, Long> {
    
}
