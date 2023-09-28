package PJI2UnivespTurma2021_2.GerenciadorDeInfoTecnicas.documento;

    public record DadosListagemDocumento(Long id, String nome, String descricao, String link) {


        public DadosListagemDocumento(Documento documento) {
            this(documento.getId(), documento.getNome(), documento.getDescricao(), documento.getLink());
        }

        public DadosListagemDocumento(DocumentoRepository documentoRepository) {
            this(new Documento());
        }
    }
