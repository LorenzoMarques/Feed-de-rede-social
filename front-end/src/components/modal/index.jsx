import "./style.css";

const Modal = ({ showCloseModal }) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-header">
          <h3>Criar post</h3>
          <button className="close-modal" onClick={showCloseModal}>
            X
          </button>
        </div>

        <input
          type="text"
          placeholder="Autor do Post"
          className="modal-input-select input-select-height"
        />
        <select
          name="select"
          id=""
          className="modal-input-select input-select-height"
        >
          <option value="">Post</option>
          <option value="">Artigo</option>
          <option value="">Peça ou modelo</option>
        </select>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="modal-input-select"
          placeholder="Escrever publicação"
        ></textarea>
        <div className="buttons-container">
          <label for="inputTag">
            Imagem
            <input id="inputTag" type="file" />
          </label>
          <button>PUBLICAR</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
