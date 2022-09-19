import api from "../../services/api";
import "./style.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Modal = ({ showCloseModal }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Nome obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    text: yup.string().required("Texto obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    api.post("/posts", data).then(() => {
      console.log("Post feito com sucesso");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="modal">
        <div className="modal-header">
          <h3>Criar post</h3>
          <button className="close-modal" onClick={showCloseModal}>
            X
          </button>
        </div>

        {errors.username && (
          <span className="error">{errors.username.message}</span>
        )}
        <input
          type="text"
          placeholder="Autor do Post"
          className="modal-input-select input-select-height"
          {...register("username")}
        />

        {errors.category && (
          <span className="error">{errors.category.message}</span>
        )}

        <select
          name="select"
          id=""
          className="modal-input-select input-select-height"
          {...register("category")}
        >
          <option value="post">Post</option>
          <option value="artigo">Artigo</option>
          <option value="peça ou modelo">Peça ou modelo</option>
        </select>

        {errors.text && <span className="error">{errors.text.message}</span>}

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="modal-input-select"
          placeholder="Escrever publicação"
          {...register("text")}
        ></textarea>

        <div className="buttons-container">
          <label for="inputTag">
            Imagem
            <input id="inputTag" type="file" />
          </label>
          <button>PUBLICAR</button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
