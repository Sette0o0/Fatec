package com.fatec.cadastro.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.cadastro.modelo.Carro;
import com.fatec.cadastro.repositorio.CarroCrud;

@RestController
public class CarroControle {

    @Autowired
    private CarroCrud repositorio;

    @GetMapping("/carros")
    public List<Carro> carros(){
        return repositorio.findAll();
    }

    @PostMapping("/salvar")
    public void salvar(@RequestBody Carro carro){
        repositorio.save(carro);
    }
}
