// import { FiSearch } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { Formik } from 'formik';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target;
    const queryValue = query.search.value;
    onSubmit(queryValue);
    e.target.reset()
  };
  return (
    <Formik>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={style.input}
          name="search"
          required
          autoFocus
        />
        <button className={style.button}  type="submit">
          <FiSearch size="16px"/>
        </button>
      </form>
    </Formik>
  );
};

export default Form;
