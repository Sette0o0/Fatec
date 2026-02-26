package com.fatec.cadastro.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fatec.cadastro.modelo.Carro;

public interface CarroCrud extends JpaRepository<Carro, Long>{

}
