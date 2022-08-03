import styles from '../../styles/Simple.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {moveWhitePawn, setActivePiece, setActivitySpaces, toggleActivePiece} from "../../redux/ChessBoardReducer";

const Simple = ({pos}) => {
    // console.log('render')
    const data = useSelector(state => state.board.boardData[pos[0]][pos[1]])
    const turn = useSelector(state => state.board.turn)
    const dispatch = useDispatch()
    const onClick = (e) => {
        if (turn === data.piece || e.target.className.includes('activityPlaceMove') || e.target.className.includes('attackFigure')) {
            if ( e.target.className.includes('activityPlaceMove') || e.target.className.includes('attackFigure')) {
                dispatch(moveWhitePawn(data))
            } else {
                // dispatch(toggleActivePiece(data))
                // setTimeout(() => dispatch(setActivitySpaces(data)), 1000)
                dispatch(setActivePiece(data))
            }
        }
    }
    return <div className={styles.mainWrapper} onClick={onClick}>
        {data.img ? <img className={styles[data.className]} src={data.img} alt=""/> :
            data.className === 'activityPlaceMove' ?
                <img src='wing.png' className={styles[data.className]} alt=""/> :
                <div className={styles[data.className]}/>}
    </div>
}
export default Simple