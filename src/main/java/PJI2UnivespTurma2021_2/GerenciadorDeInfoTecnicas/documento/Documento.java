package PJI2UnivespTurma2021_2.GerenciadorDeInfoTecnicas.documento;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "documentos")
@Entity(name = "Documento")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Documento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean ativo;
    private String nome;
    private String descricao;
    private String link;

    public Documento(DadosCadastroDocumento dados) {
        this.ativo = true;
        this.nome = dados.nome();
        this.descricao = dados.descricao();
        this.link = dados.link();
    }



    public void atualizarInformacoes(DadosAtualizaDocumento dados) {
       if (dados.nome() != null) {
            this.nome = dados.nome();
        }
       if (dados.descricao() != null) {
            this.descricao = dados.descricao();
        }
        if (dados.link() != null) {
            this.link = dados.link();
        }
        if (dados.ativo() != null) {
            this.ativo = dados.ativo();
        }
    }

    public void excluir() {
        this.ativo = false;
    }
}