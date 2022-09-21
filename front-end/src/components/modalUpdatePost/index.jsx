import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.css";

const UpdateModal = ({ id, setShowUpdateModal, refreshPage }) => {
  const formSchema = yup.object().shape({
    username: yup.string(),
    category: yup.string(),
    text: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const reformedData = {};

    if (data.username !== "") {
      reformedData.username = data.username;
    }

    if (data.category !== "") {
      reformedData.category = data.category;
    }

    if (data.text !== "") {
      reformedData.text = data.text;
    }

    console.log(reformedData);

    api.patch(`/posts/${id}`, reformedData).then(() => {
      refreshPage();
      setShowUpdateModal(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="update-modal">
      <div className="modal-header">
        <h3>Editar post</h3>
        <button
          className="close-modal"
          onClick={() => setShowUpdateModal(false)}
        >
          X
        </button>
      </div>

      {errors.username && (
        <span className="error">{errors.username.message}</span>
      )}
      <input
        type="text"
        {...register("username")}
        className="modal-input-select input-select-height"
        placeholder="Autor do post"
      />
      <select
        name=""
        id=""
        {...register("category")}
        className="modal-input-select input-select-height"
      >
        <option value="Post">Post</option>
        <option value="Artigo">Artigo</option>
        <option value="Peça ou modelo">Peça ou modelo</option>
      </select>
      <textarea
        type="text"
        {...register("text")}
        placeholder="Editar publicação"
        className="update-textarea"
      />
      <button className="edit-button">EDITAR</button>
    </form>
  );
};

export default UpdateModal;
