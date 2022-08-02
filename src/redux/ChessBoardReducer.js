const SET_INITIAL_BOARD = 'SET_INITIAL_BOARD'
const TOGGLE_ACTIVE_PIECE = 'TOGGLE_ACTIVE_PIECE'
const SET_ACTIVITY_SPACES = 'SET_ACTIVITY_SPACES'
const SET_ACTIVE_PIECE = 'SET_ACTIVE_PIECE'
const MOVE_WHITE_PAWN = 'MOVE_WHITE_PAWN'

const initialState = {
    // boardData: {
    //     8: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    //     7: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    //     6: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    //     5: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    //     4: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    //     3: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    //     2: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    //     1: {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null},
    // },

    // tableData: [
    //     [{img: null, pos: '0'}, {img: null, pos: '8', rotate: 'false'}, {img: null, pos: '7', rotate: 'false'}, {img: null, pos: '6', rotate: 'false'},
    //         {img: null, pos: '5', rotate: 'false'}, {img: null, pos: '4', rotate: 'false'}, {img: null, pos: '3', rotate: 'false'}, {img: null, pos: '2', rotate: 'false'},
    //         {img: null, pos: '1', rotate: 'false'}, {img: null, pos: '00'},],
    //     [{img: null, pos: 'a'}, {img: null, pos: 'a8'}, {img: null, pos: 'a7'}, {img: null, pos: 'a6'},
    //         {img: null, pos: 'a5'}, {img: null, pos: 'a4'}, {img: null, pos: 'a3'}, {img: null, pos: 'a2'},
    //         {img: null, pos: 'a1'}, {img: null, pos: 'a', rotate: 'false'},],
    //     [{img: null, pos: 'b'}, {img: null, pos: 'b8'}, {img: null, pos: 'b7'}, {img: null, pos: 'b6'},
    //         {img: null, pos: 'b5'}, {img: null, pos: 'b4'}, {img: null, pos: 'b3'}, {img: null, pos: 'b2'},
    //         {img: null, pos: 'b1'}, {img: null, pos: 'b', rotate: 'false'},],
    //     [{img: null, pos: 'c'}, {img: null, pos: 'c8'}, {img: null, pos: 'c7'}, {img: null, pos: 'c6'},
    //         {img: null, pos: 'c5'}, {img: null, pos: 'c4'}, {img: null, pos: 'c3'}, {img: null, pos: 'c2'},
    //         {img: null, pos: 'c1'}, {img: null, pos: 'c', rotate: 'false'},],
    //     [{img: null, pos: 'd'}, {img: null, pos: 'd8'}, {img: null, pos: 'd7'}, {img: null, pos: 'd6'},
    //         {img: null, pos: 'd5'}, {img: null, pos: 'd4'}, {img: null, pos: 'd3'}, {img: null, pos: 'd2'},
    //         {img: null, pos: 'd1'}, {img: null, pos: 'd', rotate: 'false'},],
    //     [{img: null, pos: 'e'}, {img: null, pos: 'e8'}, {img: null, pos: 'e7'}, {img: null, pos: 'e6'},
    //         {img: null, pos: 'e5'}, {img: null, pos: 'e4'}, {img: null, pos: 'e3'}, {img: null, pos: 'e2'},
    //         {img: null, pos: 'e1'}, {img: null, pos: 'e', rotate: 'false'},],
    //     [{img: null, pos: 'f'}, {img: null, pos: 'f8'}, {img: null, pos: 'f7'}, {img: null, pos: 'f6'},
    //         {img: null, pos: 'f5'}, {img: null, pos: 'f4'}, {img: null, pos: 'f3'}, {img: null, pos: 'f2'},
    //         {img: null, pos: 'f1'}, {img: null, pos: 'f', rotate: 'false'},],
    //     [{img: null, pos: 'g'}, {img: null, pos: 'g8'}, {img: null, pos: 'g7'}, {img: null, pos: 'g6'},
    //         {img: null, pos: 'g5'}, {img: null, pos: 'g4'}, {img: null, pos: 'g3'}, {img: null, pos: 'g2'},
    //         {img: null, pos: 'g1'}, {img: null, pos: 'g', rotate: 'false'},],
    //     [{img: null, pos: 'h'}, {img: null, pos: 'h8'}, {img: null, pos: 'h7'}, {img: null, pos: 'h6'},
    //         {img: null, pos: 'h5'}, {img: null, pos: 'h4'}, {img: null, pos: 'h3'}, {img: null, pos: 'h2'},
    //         {img: null, pos: 'h1'}, {img: null, pos: 'h', rotate: 'false'},],
    //     [{img: null, pos: '000'}, {img: null, pos: '8'}, {img: null, pos: '7'}, {img: null, pos: '6'},
    //         {img: null, pos: '5'}, {img: null, pos: '4'}, {img: null, pos: '3'}, {img: null, pos: '2'},
    //         {img: null, pos: '1'}, {img: null, pos: '0000'},],
    // ]
    boardData: [],
    turn: 'white',
    activePiece: null,
}
const chessBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_BOARD:
            return {
                ...state,
                boardData: action.payload
            }
        case TOGGLE_ACTIVE_PIECE:

        case SET_ACTIVITY_SPACES:

        case SET_ACTIVE_PIECE:
            return {
                ...state,
                activePiece: action.payload,
                boardData: state.boardData.map(ul => {
                        return ul.map(li => {
                            // console.log(li.className === 'attackFigure' ? li : null)
                            if (li.arrayPos === action.payload.arrayPos) {
                                if (li.className === 'activeFigure') {//deactivate piece
                                    return {...li, className: 'figure'}
                                }
                                return {...li, className: 'activeFigure'}//activate piece
                            } else if (li.className === 'activityPlaceMove') {//deactivate another cells for activity
                                return {...li, className: 'inactive'}
                            } else if (li.className === 'attackFigure') {//deactivate another cells for attack
                                return {...li, className: 'figure'}
                            } else if (li.className === 'activeFigure') {//deactivate another pieces
                                return {...li, className: 'figure'}
                            } else {//add cells for activity
                                if (action.payload.className === 'activeFigure') {//if deactivating piece=>deactivate all attackFigure and cells for activity
                                    if (li.className === 'attackFigure') {
                                        return {...li, className: 'figure'}
                                    } else if (li.className === 'activityPlaceMove') {
                                        return {...li, className: 'inactive'}
                                    } else {
                                        return li
                                    }
                                }
                                switch (action.payload.img) {
                                    case 'white_pawn.png':
                                        // console.log(li)
                                        let tmp = li.arrayPos ? li.arrayPos : 0
                                        if (action.payload.arrayPos[0] === tmp[0]) {//
                                            if ((Number(tmp[1]) === Number(action.payload.arrayPos[1]) - 1)//simple move for white pawn
                                                && (Number(tmp[1]) - 1) > 0
                                                && state.boardData[action.payload.arrayPos[0]][action.payload.arrayPos[1] - 1].className !== 'figure') {
                                                if (li.className === 'attackFigure') {
                                                    return li
                                                }
                                                return {...li, className: 'activityPlaceMove'}
                                            } else if (Number(action.payload.arrayPos[1]) === 7) {//if it is first move for white pawn
                                                if ((Number(tmp[1]) === Number(action.payload.arrayPos[1]) - 2)
                                                    && (Number(tmp[1]) - 2) > 0
                                                    && state.boardData[action.payload.arrayPos[0]][action.payload.arrayPos[1] - 2].className !== 'figure'
                                                    && state.boardData[action.payload.arrayPos[0]][action.payload.arrayPos[1] - 1].className !== 'figure') {
                                                    return {...li, className: 'activityPlaceMove'}
                                                } else {
                                                    return li
                                                }
                                            } else {
                                                return li
                                            }
                                        } else {//for attack by white pawn
                                            if ((Number(tmp[1]) === Number(action.payload.arrayPos[1]) - 1 && li.piece === 'black') && ((Number(tmp[0]) === Number(action.payload.arrayPos[0]) - 1 && Number(action.payload.arrayPos[0]) - 1 > 0) || (Number(tmp[0]) === Number(action.payload.arrayPos[0]) + 1 && Number(action.payload.arrayPos[0]) + 1 < 9))) {
                                                return {...li, className: 'attackFigure'}
                                            } else {
                                                return li
                                            }
                                        }
                                    // return li
                                    case 'white_rook.png':
                                        console.log('white_rook.png')
                                        return li
                                    case 'white_knight.png' :
                                        console.log('white_knight.png')
                                        return li
                                    case 'white_bishop.png':
                                        console.log('white_bishop.png')
                                        return li
                                    case 'white_queen.png':
                                        console.log('white_queen.png')
                                        return li
                                    case 'white_king.png':
                                        console.log('white_king.png')
                                        return li
                                    case 'black_pawn.png':
                                        console.log('black_pawn.png')
                                        return li
                                    case 'black_rook.png':
                                        console.log('black_rook.png')
                                        return li
                                    case 'black_bishop.png':
                                        console.log('black_bishop.png')
                                        return li
                                    case 'black_knight.png':
                                        console.log('black_knight.png')
                                        return li
                                    case'black_queen.png':
                                        console.log('black_queen.png')
                                        return li
                                    case'black_king.png':
                                        console.log('black_king.png')
                                        return li

                                }

                            }
                        })
                    }
                )
            }
        case MOVE_WHITE_PAWN:
            console.log(state.activePiece)
            return {
                ...state,
                boardData: state.boardData.map(ul => {
                    return ul.map(li => {
                        if (li.className === 'attackFigure' && action.payload.arrayPos === li.arrayPos) {
                            console.log({...state.activePiece, arrayPos: li.arrayPos, pos: li.pos})
                            return {...state.activePiece, arrayPos: li.arrayPos, pos: li.pos}
                        } else if (li.className === 'activityPlaceMove' && action.payload.arrayPos === li.arrayPos) {
                            console.log({...state.activePiece, arrayPos: li.arrayPos, pos: li.pos})
                            return {...state.activePiece, arrayPos: li.arrayPos, pos: li.pos}
                        } else if (li.className === 'activityPlaceMove') {
                            return {...li, className: 'inactive'}
                        } else if (li.className === 'attackFigure') {
                            return {...li, className: 'figure'}
                        } else if (li.arrayPos === state.activePiece.arrayPos) {
                            console.log({arrayPos: li.arrayPos, pos: li.pos, className: 'inactive'})
                            return {arrayPos: li.arrayPos, pos: li.pos, className: 'inactive'}
                        }
                        return li
                    })
                }),
                activePiece: null,
                turn: state.turn === 'white' ? 'black' : 'white',
            }
        default:
            return state
    }
}
export const setInitialBoard = (payload) => {
    return {type: SET_INITIAL_BOARD, payload}
}
export const toggleActivePiece = (payload) => {
    return {type: TOGGLE_ACTIVE_PIECE, payload}
}
export const setActivitySpaces = (payload) => {
    return {type: SET_ACTIVITY_SPACES, payload}
}
export const setActivePiece = (payload) => {
    return {type: SET_ACTIVE_PIECE, payload}
}
export const moveWhitePawn = (payload) => {
    return {type: MOVE_WHITE_PAWN, payload}
}
export default chessBoardReducer