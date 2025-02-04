import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css'
import Text from '../Text/Text';

const TodoListItem = ({ todo, onDelete }) => {
  return (
    <>
    <div className={style.box}>
  <Text className={style.idv} display='none' textAlign="center" marginBottom="20">
    {todo.id}
  </Text>
  <Text> {todo.text} </Text>
  <button className={style.deleteButton} type="button" onClick={() => onDelete(todo.id)}>
    <RiDeleteBinLine size={24} />
  </button>
</div>
    </>
  );
};

export default TodoListItem;
