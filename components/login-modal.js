import styles from "./modal.module.scss";

const confirm = (
  name,
  lastName,
  email,
  show,
  setShowLoginModal,
  setLoginHasErros
) => {
  const noErrors = checkErrors(name, lastName, email);
  return noErrors ? setShowLoginModal(!show) : setLoginHasErros(true);
};

const checkErrors = (name, lastName, email) =>
  name !== "" && lastName !== "" && email !== "";

const Modal = ({
  show,
  close,
  name,
  lastName,
  email,
  loginHasErros,
  setName,
  setLastName,
  setEmail,
  setShowLoginModal,
  setLoginHasErros,
}) =>
  show ? (
    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modal_header}>
          Bienvenido al homosexógrafo.
        </header>
        <main className={styles.modal_content}>
          Por favor, rellene los siguientes campos:
          <div>
            {loginHasErros && name === ""
              ? "Por favor, rellene el nombre:"
              : "Nombre:"}
            <input
              name="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            {loginHasErros && lastName === ""
              ? "Por favor, rellene los apellidos:"
              : "Apellidos:"}
            <input
              name="lastName"
              value={lastName}
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            {loginHasErros && email === ""
              ? "Por favor, rellene el correo electrónico:"
              : "Correo electrónico:"}
            <input
              name="email"
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </main>
        <footer className={styles.modal_footer}>
          <button
            className={styles.modal_footer_button}
            onClick={() =>
              confirm(
                name,
                lastName,
                email,
                show,
                setShowLoginModal,
                setLoginHasErros
              )
            }
          >
            Confirmar
          </button>
        </footer>
      </div>
    </div>
  ) : null;

export default Modal;
