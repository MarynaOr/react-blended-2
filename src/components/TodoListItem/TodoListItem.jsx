import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css'
import Text from '../Text/Text';

const TodoListItem = ({ todo  }) => {
  return (
    <>
    <div className={style.box}>
  <Text textAlign="center" marginBottom="20">
    {todo.id}
  </Text>
  <Text> {todo.text} </Text>
  <button className={style.deleteButton} type="button">
    <RiDeleteBinLine size={24} />
  </button>
</div>
    </>
  );
};

export default TodoListItem;
