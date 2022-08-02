import styles from '../styles/ChessBoard.module.scss'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActivePiece, setInitialBoard} from "../redux/ChessBoardReducer";
import WhiteRook from "./WhiteRook";
import Simple from "./common/Simple";
// import white_rook from "../public/white_rook.png"

const ChessBoard = () => {
    // const boardData = useSelector(state => state.board.boardData)
    const [boardData, setBoardData] = useState([])
    const tableData = useSelector(state => state.board.tableData)
    const dispatch = useDispatch()
    useEffect(() => {
        const numbers = '87654321'
        const letters = 'hgfedcba'
        let array = [[{pos: null, empty: 'leftUp'},
            {pos: '8'},
            {pos: '7'},
            {pos: '6'},
            {pos: '5'},
            {pos: '4'},
            {pos: '3'},
            {pos: '2'},
            {pos: '1'}, {pos: null, empty: 'leftDown'},]]
        let a = 1;
        for (let i = letters.length - 1; i > -1; i--) {
            array.push([{pos: letters[i], reverse: 'true'}])
            for (let j = 0; j < numbers.length; j++) {
                array[a].push({pos: `${numbers[j]}${letters[i]}`, arrayPos: `${a}${j + 1}`, className: 'inactive'})
            }
            array[a].push({pos: letters[i]})
            a++;
        }

        array.push([{pos: null, empty: 'rightUp'}, {pos: '8', reverse: 'true'}, {
            pos: '7',
            reverse: 'true'
        }, {pos: '6', reverse: 'true'}, {pos: '5', reverse: 'true'},
            {pos: '4', reverse: 'true'},
            {pos: '3', reverse: 'true'},
            {pos: '2', reverse: 'true'},
            {pos: '1', reverse: 'true'}, {pos: null, empty: 'rightDown'}])
        array[1][8] = {...array[1][8], img: 'white_rook.png', piece: 'white', className: 'figure'}
        array[2][8] = {...array[2][8], img: 'white_knight.png', piece: 'white', className: 'figure'}
        array[3][8] = {...array[3][8], img: 'white_bishop.png', piece: 'white', className: 'figure'}
        array[4][8] = {...array[4][8], img: 'white_queen.png', piece: 'white', className: 'figure'}
        array[5][8] = {...array[5][8], img: 'white_king.png', piece: 'white', className: 'figure'}
        array[6][8] = {...array[6][8], img: 'white_bishop.png', piece: 'white', className: 'figure'}
        array[7][8] = {...array[7][8], img: 'white_knight.png', piece: 'white', className: 'figure'}

        array[8][8] = {...array[8][8], img: 'white_rook.png', piece: 'white', className: 'figure'}
        array[1][7] = {...array[1][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[2][7] = {...array[2][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[3][7] = {...array[3][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[4][7] = {...array[4][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[5][7] = {...array[5][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[6][7] = {...array[6][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[7][7] = {...array[7][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[8][7] = {...array[8][7], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[4][5] = {...array[4][5], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        // array[4][6] = {...array[4][6], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[3][3] = {...array[3][3], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[1][3] = {...array[1][3], img: 'white_pawn.png', piece: 'white', className: 'figure'}
        array[2][3] = {...array[2][3], img: 'white_pawn.png', piece: 'white', className: 'figure'}

        array[1][1] = {...array[1][1], img: 'black_rook.png', piece: 'black', className: 'figure'}
        array[2][1] = {...array[2][1], img: 'black_knight.png', piece: 'black', className: 'figure'}
        array[3][1] = {...array[3][1], img: 'black_bishop.png', piece: 'black', className: 'figure'}
        array[4][1] = {...array[4][1], img: 'black_queen.png', piece: 'black', className: 'figure'}
        array[5][1] = {...array[5][1], img: 'black_king.png', piece: 'black', className: 'figure'}
        array[6][1] = {...array[6][1], img: 'black_bishop.png', piece: 'black', className: 'figure'}
        array[7][1] = {...array[7][1], img: 'black_knight.png', piece: 'black', className: 'figure'}
        array[8][1] = {...array[8][1], img: 'black_rook.png', piece: 'black', className: 'figure'}

        array[1][2] = {...array[1][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        array[2][2] = {...array[2][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        array[3][2] = {...array[3][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        array[4][2] = {...array[4][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        array[5][2] = {...array[5][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        array[6][2] = {...array[6][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        array[7][2] = {...array[7][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        array[8][2] = {...array[8][2], img: 'black_pawn.png', piece: 'black', className: 'figure'}
        console.log(array)
        setBoardData(array)
        dispatch(setInitialBoard(array))
    }, [dispatch])
    // const onClick = (pos, pos1) => {
    //     // console.log(boardData[pos[0]][pos[1]])
    //     // console.log(pos)
    // }
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.tableWrapper}>
                {boardData.map((ul) => {
                    return <ul key={ul[0].empty ? ul[0].empty : ul[0].pos}>{ul.map((li) => {
                        return (
                            <li
                                key={li.empty ? li.empty : li.reverse ? `${li.pos}${li.reverse}` : li.pos}>
                                {li.pos === null ? null : li.pos.length !== 2 ? li.pos :
                                    <Simple pos={li.arrayPos}/>}
                            </li>
                        )
                    })
                    }</ul>
                })}
            </div>
        </div>
    )
}
export default ChessBoard