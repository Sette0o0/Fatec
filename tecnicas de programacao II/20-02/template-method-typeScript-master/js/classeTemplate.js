"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClasseTemplate {
    etapa1() {
        console.log('Etapa 1 do processemanto, executada para todos');
    }
    etapa2() {
        console.log('Etapa 2 do processemanto,executada para todos');
    }
    etapa5() {
        console.log('Etapa 5 do processemanto,executada para todos');
    }
    etapa6() {
        console.log('Etapa 6 do processemanto, executada para todos');
    }
    templateMethod() {
        this.etapa1();
        this.etapa2();
        this.etapa3();
        this.etapa4();
        this.etapa5();
        this.etapa6();
    }
}
exports.default = ClasseTemplate;
